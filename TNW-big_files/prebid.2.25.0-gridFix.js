/* prebid.js v2.25.0
Updated : 2019-07-24 */
! function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            250: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 632)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return _
        }), n.d(t, "bind", function() {
            return j
        }), t.replaceTokenInString = function(i, e, o) {
            return ee(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            }), i
        }, t.getUniqueIdentifierStr = R, t.generateUUID = function e(t) {
            return t ? (t ^ N() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? de(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(fe(t, e)))
            }).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) ne(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === p(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(x(e));
                    else
                        for (var a = 0; a < o; a++) t.push(x(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = x, t.getTopWindowLocation = D, t.getTopFrameReferrer = k, t.getAncestorOrigins = P, t.getWindowTop = M, t.getWindowSelf = q, t.getWindowLocation = G, t.getTopWindowUrl = function() {
            var t;
            try {
                t = _.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = W, t.logInfo = L, t.logWarn = F, t.logError = z, t.hasConsoleLogger = function() {
            return T
        }, t.debugTurnedOn = H, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = R(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : ""
        }, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ee(e, i), !r) return z("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = K, t.isFn = J, t.isStr = Y, t.isArray = Q, t.isNumber = X, t.isPlainObject = $, t.isBoolean = function(e) {
            return K(e, S)
        }, t.isEmpty = Z, t.isEmptyStr = function(e) {
            return Y(e) && (!e || 0 === e.length)
        }, t._each = ee, t.contains = function(e, t) {
            if (Z(e)) return !1;
            if (J(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", function() {
            return te
        }), t._map = function(n, r) {
            if (Z(n)) return [];
            if (J(n.map)) return n.map(r);
            var i = [];
            return ee(n, function(e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.insertElement = re, t.triggerPixel = ie, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === g.S2S.SRC && n && _.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = R(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", _.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = oe, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ae, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                _.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = ce, t.uniques = ue, t.flatten = se, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = de, t.getValue = fe, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(se, [])
            }).reduce(se).filter(ue)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && J(window.googletag.pubads) && J(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", function() {
            return le
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return pe
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ge
        }), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = ye, t.inIframe = ve, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.checkCookieSupport = he, t.cookiesAreEnabled = function() {
            if (_.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function(e, t, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
        }, t.localStorageIsEnabled = function() {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.deepSetValue = function(e, t, n) {
            var r;
            for (t = t.split("."), r = 0; r < t.length - 1; r++) r !== t.length - 1 && void 0 === e[t[r]] && (e[t[r]] = {}), e = e[t[r]];
            e[t[r]] = n
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e]
            }).reduce(function(e, t) {
                return l(e, function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function(e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t
            }).map(function(e) {
                return e.bids
            }).reduce(se, []).filter(function(e) {
                return e.bidder === n
            }).map(function(e) {
                return e.params || {}
            })
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return me(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return me(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function(e, t) {
            var n = l({}, e);
            return delete n[t], n
        }, t.isInteger = Se, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ee(e, function(e, t) {
                if (Q(e)) {
                    var n = [];
                    ee(e, function(e) {
                        !(e = ce(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!Y(e = ce(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function(t, n) {
            return Object.keys(t).forEach(function(e) {
                n[e] && (J(t[e]) ? n[e] = t[e](n[e]) : n[e] = function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                }(t[e], n[e]), isNaN(n[e]) && delete n.key)
            }), n
        }, t.setDataInLocalStorage = function(e, t) {
            Ee() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Ee()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Ee, t.isArrayOfNums = function(e, t) {
            return Q(e) && (!t || e.length === t) && e.every(function(e) {
                return Se(e)
            })
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = $(e) ? ye(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(88),
            o = n.n(i),
            a = n(11),
            c = n.n(a),
            u = n(9),
            s = n.n(u),
            d = n(10);

        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var g = n(4),
            b = "Array",
            y = "String",
            v = "Function",
            h = "Number",
            m = "Object",
            S = "Boolean",
            E = Object.prototype.toString,
            A = Boolean(window.console),
            T = Boolean(A && window.console.log),
            O = Boolean(A && window.console.info),
            I = Boolean(A && window.console.warn),
            w = Boolean(A && window.console.error),
            _ = {
                checkCookieSupport: he,
                createTrackPixelIframeHtml: ae,
                getWindowSelf: q,
                getWindowTop: M,
                getAncestorOrigins: P,
                getTopFrameReferrer: k,
                getWindowLocation: G,
                getTopWindowLocation: D,
                insertUserSyncIframe: oe,
                insertElement: re,
                isFn: J,
                triggerPixel: ie,
                logError: z,
                logWarn: F,
                logMessage: W,
                logInfo: L
            },
            C = {},
            j = function(e, t) {
                return t
            }.bind(null, 1, C)() === C ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var U, B = (U = 0, function() {
            return ++U
        });

        function R() {
            return B() + Math.random().toString(16).substr(2)
        }

        function N() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function x(e) {
            if (Q(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function D() {
            if (ve()) {
                var e;
                try {
                    e = _.getAncestorOrigins() || _.getTopFrameReferrer()
                } catch (e) {
                    L("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return _.getWindowLocation()
        }

        function k() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function P() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function M() {
            return window.top
        }

        function q() {
            return window.self
        }

        function G() {
            return window.location
        }

        function W() {
            H() && T && console.log.apply(console, V(arguments, "MESSAGE:"))
        }

        function L() {
            H() && O && console.info.apply(console, V(arguments, "INFO:"))
        }

        function F() {
            H() && I && console.warn.apply(console, V(arguments, "WARNING:"))
        }

        function z() {
            H() && w && console.error.apply(console, V(arguments, "ERROR:"))
        }

        function V(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function H() {
            return !!r.b.getConfig("debug")
        }

        function K(e, t) {
            return E.call(e) === "[object " + t + "]"
        }

        function J(e) {
            return K(e, v)
        }

        function Y(e) {
            return K(e, y)
        }

        function Q(e) {
            return K(e, b)
        }

        function X(e) {
            return K(e, h)
        }

        function $(e) {
            return K(e, m)
        }

        function Z(e) {
            if (!e) return !0;
            if (Q(e) || Y(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ee(e, t) {
            if (!Z(e)) {
                if (J(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var te = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        }();
        var ne = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function re(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ie(e, t) {
            var n = new Image;
            t && _.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function oe(e, t) {
            var n = _.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && _.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), _.insertElement(i, document, "html", !0)
        }

        function ae(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(R(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function ce(e, t, n) {
            return null == t ? n : Y(t) ? t : X(t) ? t.toString() : void _.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function ue(e, t, n) {
            return n.indexOf(e) === t
        }

        function se(e, t) {
            return e.concat(t)
        }

        function de(e) {
            return Object.keys(e)
        }

        function fe(e, t) {
            return e[t]
        }
        var le = be("timeToRespond", function(e, t) {
                return t < e
            }),
            pe = be("responseTimestamp", function(e, t) {
                return t < e
            }),
            ge = be("responseTimestamp", function(e, t) {
                return e < t
            });

        function be(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function ye(e) {
            return o()(e)
        }

        function ve() {
            try {
                return _.getWindowSelf() !== _.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function he() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var me = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Se(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Ee() {
            try {
                return !!window.localStorage
            } catch (e) {
                z("Local storage api disabled")
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(h.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(h.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = _;
        var r = n(40),
            a = n(7),
            i = n(3),
            b = n(23),
            o = n(25),
            c = n(28),
            u = n(49),
            s = n(4),
            y = n.n(s),
            d = n(8),
            v = n.n(d),
            f = n(9),
            l = n.n(f),
            p = n(5),
            h = n(0),
            g = n(2),
            m = n(13);

        function S(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(l) {
            return A(new r.a(l.code), {
                getSpec: function() {
                    return Object.freeze(l)
                },
                registerSyncs: p,
                callBids: function(o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach(function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(h.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(l.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = l.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(h.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t = d[e.requestId];
                                            if (t) {
                                                var n = A(Object(b.a)(y.a.STATUS.GOOD, t), e);
                                                ! function(e, t) {
                                                    u[e] = !0, _(e, t, [o]) && a(e, t)
                                                }(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), v.a.emit(y.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent)
                    }
                }
            });

            function p(e, t) {
                if (l.getUserSyncs) {
                    var n = i.b.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.b.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.b.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach(function(e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    }))
                }
            }

            function g(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                })
            }).reduce(h.flatten, []).filter(h.uniques).forEach(function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(h.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(h.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(h.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(h.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            }), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every(function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            }(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function(e, t, n) {
        "use strict";

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = o(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }
        t.d = i, t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    11: function(e, t, n) {
        n(80), e.exports = n(16).Array.find
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(50),
            s = n(0),
            r = n(11),
            d = n.n(r);

        function i(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, ! function(t) {
                var e = pbjs.adUnits,
                    n = d()(e, function(e) {
                        return e.code === t
                    });
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            }(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    128: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(43)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(35)(o)
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function(e, t) {
            o("async", function(e) {
                e.forEach(function(e) {
                    return t.apply(void 0, function(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(e))
                })
            }, e)([])
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function(e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(89),
            i = n.n(r);
        var o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    131: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", p, !1)
        };
        var r = n(8),
            o = n.n(r),
            a = n(28),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(29),
            u = n(11),
            f = n.n(u),
            l = n(12),
            s = i.EVENTS.BID_WON;

        function p(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), function(e) {
                    return e.adId === n.adId
                });
                if ("Prebid Request" === n.message && (function(e, t, n) {
                        var r = e.adId,
                            i = e.ad,
                            o = e.adUrl,
                            a = e.width,
                            c = e.height,
                            u = e.renderer,
                            s = e.cpm;
                        Object(l.c)(u) ? Object(l.b)(u, e) : r && (function(e) {
                            var r = e.adUnitCode,
                                i = e.width,
                                o = e.height;

                            function a(e) {
                                var t = function(e) {
                                        return window.googletag ? function(e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), function(e) {
                                                return e
                                            }).getSlotElementId()
                                        }(e) : window.apntag ? function(e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        }(e) : e
                                    }(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            }["div:last-child", "div:last-child iframe"].forEach(function(e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            })
                        }(e), n.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(d.replaceAuctionPrice)(i, s),
                            adUrl: Object(d.replaceAuctionPrice)(o, s),
                            adId: r,
                            width: a,
                            height: c
                        }), t))
                    }(r, n.adServerDomain, e.source), c.a.addWinningBid(r), o.a.emit(s, r)), "Prebid Native" === n.message) {
                    if ("assetRequest" === n.action) {
                        var i = Object(a.c)(n, r);
                        return void e.source.postMessage(JSON.stringify(i), e.origin)
                    }
                    if ("click" === Object(a.b)(n, r)) return;
                    c.a.addWinningBid(r), o.a.emit(s, r)
                }
            }
        }
    },
    132: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(37);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void
                function(e) {
                    Object(o.logWarn)("DEBUG: " + e)
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter(function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    }))
                });
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.b.getConfig("debugging", function(e) {
            return l(e.debugging)
        })
    },
    133: function(e, t, n) {
        n(134), n(65), n(143), n(145), n(149), n(152), n(154), e.exports = n(16).Set
    },
    134: function(e, t) {},
    135: function(e, t, n) {
        var u = n(45),
            s = n(33);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    136: function(e, t, n) {
        e.exports = n(21)
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(66),
            i = n(42),
            o = n(53),
            a = {};
        n(21)(a, n(14)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function(e, t, n) {
        var a = n(20),
            c = n(26),
            u = n(139);
        e.exports = n(22) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function(e, t, n) {
        var r = n(140),
            i = n(67);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    14: function(e, t, n) {
        var r = n(57)("wks"),
            i = n(46),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    140: function(e, t, n) {
        var a = n(27),
            c = n(47),
            u = n(59)(!1),
            s = n(52)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    141: function(e, t, n) {
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    142: function(e, t, n) {
        var r = n(27),
            i = n(44),
            o = n(52)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function(e, t, n) {
        n(144);
        for (var r = n(19), i = n(21), o = n(30), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(35),
            i = n(68),
            o = n(30),
            a = n(47);
        e.exports = n(51)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(146),
            i = n(76);
        e.exports = n(148)("Set", function(t) {
            return function(e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(66),
            s = n(69),
            d = n(24),
            f = n(70),
            l = n(39),
            r = n(51),
            i = n(68),
            o = n(147),
            p = n(22),
            g = n(75).fastKey,
            b = n(76),
            y = p ? "_s" : "size";
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e(function(e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function() {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function(e) {
                        var t = b(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--
                        }
                        return !!n
                    },
                    forEach: function(e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(e) {
                        return !!a(b(this, o), e)
                    }
                }), p && c(i.prototype, "size", {
                    get: function() {
                        return b(this, o)[y]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function(e, n, t) {
                r(e, n, function(e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(16),
            o = n(20),
            a = n(22),
            c = n(14)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    148: function(e, t, n) {
        "use strict";
        var f = n(19),
            l = n(15),
            p = n(75),
            g = n(31),
            b = n(21),
            y = n(69),
            v = n(39),
            h = n(70),
            m = n(18),
            S = n(53),
            E = n(20).f,
            A = n(43)(0),
            T = n(22);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !g(function() {
                (new c).entries().next()
            })) ? (c = e(function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || E(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function(e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function(e, t, n) {
        var b = n(19),
            y = n(16),
            v = n(24),
            h = n(21),
            m = n(27),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? v(o, b) : f && g[r] == o ? function(r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    }
                    return e[S] = r[S], e
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && p && !p[r] && h(p, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    150: function(e, t, n) {
        var r = n(74),
            i = n(151);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function(e, t, n) {
        var r = n(39);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    152: function(e, t, n) {
        n(153)("Set")
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function(e) {
            r(r.S, e, {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    154: function(e, t, n) {
        n(155)("Set")
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(15),
            u = n(54),
            s = n(24),
            d = n(39);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this : (i = [], r ? (o = 0, a = s(c, n, 2), d(e, !1, function(e) {
                        i.push(a(e, o++))
                    })) : d(e, !1, i.push, i), new this(i))
                }
            })
        }
    },
    156: function(e, t, n) {
        n(65), n(157), e.exports = n(16).Array.from
    },
    157: function(e, t, n) {
        "use strict";
        var g = n(24),
            r = n(15),
            b = n(44),
            y = n(71),
            v = n(72),
            h = n(34),
            m = n(158),
            S = n(73);
        r(r.S + r.F * !n(159)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e, t, n) {
                var r, i, o, a, c = b(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    p = S(c);
                if (f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || u == Array && v(p))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = p.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(20),
            i = n(42);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    159: function(e, t, n) {
        var o = n(14)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function() {
                a = !0
            }, Array.from(r, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    }
                }, r[o] = function() {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    16: function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    18: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(26),
            i = n(81),
            o = n(82),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function(e, t, n) {
        var r = n(20),
            i = n(42);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    22: function(e, t, n) {
        e.exports = !n(31)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    23: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    24: function(e, t, n) {
        var o = n(54);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    244: function(e, t, n) {
        n(245), e.exports = n(16).String.includes
    },
    245: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(246),
            o = "includes";
        r(r.P + r.F * n(248)(o), "String", {
            includes: function(e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    246: function(e, t, n) {
        var r = n(247),
            i = n(33);
        e.exports = function(e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    247: function(e, t, n) {
        var r = n(18),
            i = n(32),
            o = n(14)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    248: function(e, t, n) {
        var r = n(14)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var a = n(0),
            r = n(3),
            i = n(9),
            o = n.n(i);

        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var s, d, f, l, p, g, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            v = (s = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: y
            }, d = {}, f = {
                image: [],
                iframe: []
            }, l = new Set, g = {
                image: !(p = {}),
                iframe: !1
            }, b = s.config, r.b.getConfig("userSync", function(e) {
                b = u(b, e.userSync)
            }), d.registerSync = function(e, t, n) {
                return l.has(t) ? a.logWarn('already registered syncs for "'.concat(t, '"')) : b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), void(p = function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                }(p, t))) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'))
            }, d.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(h, Number(e));
                h()
            }, d.triggerUserSyncs = function() {
                b.enableOverride && d.syncUsers()
            }, d.canBidderRegisterSync = function(e, t) {
                if (b.filterSettings) {
                    if (S(e, t)) return !1
                } else {
                    if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                    if ("iframe" === e && !b.iframeEnabled && !g.iframe) return !1;
                    if ("image" === e && !b.pixelEnabled && !g.image) return !1
                }
                return !0
            }, d);

        function h() {
            if (b.syncEnabled && s.browserSupportsCookies) {
                try {
                    ! function() {
                        if (!b.pixelEnabled && !g.image) return;
                        m(f.image, function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function() {
                        if (!b.iframeEnabled && !g.iframe) return;
                        m(f.iframe, function(e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                f = {
                    image: [],
                    iframe: []
                }
            }
        }

        function m(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e), l.add(e[0])
            })
        }

        function S(e, t) {
            var n = b.filterSettings;
            if (function(e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                g[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t)
                    },
                    exclude: function(e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](i, t)
            }
            return !1
        }
    },
    26: function(e, t, n) {
        var r = n(18);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    27: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function(e) {
                    return t.native[e]
                });
            return i.every(function(e) {
                return c()(o, e)
            })
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                t && n && (o[t] = n)
            }), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(9),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function(e) {
                return u.NATIVE_KEYS[e]
            }),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    29: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var r = n(0),
            u = n(37),
            i = n(11),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, function(e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map(function(e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map(function(e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map(function(e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map(function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function(e) {
                return e
            })
        }, c.getAdUnits = function() {
            return s.map(function(e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map(function(e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = e.auctionId,
                c = Object(u.h)({
                    adUnits: t,
                    adUnitCodes: n,
                    callback: r,
                    cbTimeout: i,
                    labels: o,
                    auctionId: a
                });
            return function(e) {
                s.push(e)
            }(c), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map(function(e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, function(e) {
                    return e.getAuctionId() === n.auctionId
                });
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return A
        });
        var r = n(41),
            i = n(11),
            a = n.n(i),
            o = n(9),
            c = n.n(o),
            u = n(10);

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = n(0),
            l = n(4),
            p = "TRUE" === (Object(u.d)(window.location.search)[l.DEBUG_MODE] || "").toUpperCase(),
            g = window.location.origin,
            b = "random",
            y = {};
        y[b] = !0, y.fixed = !0;
        var v = b,
            h = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var m, S, E, A = (E = [], T(), {
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? f.deepAccess(S, e) : S
                }
                return function(e, t) {
                    var n = t;
                    return "string" != typeof e && (n = e, e = "*"), "function" == typeof n ? (E.push({
                        topic: e,
                        callback: n
                    }), function() {
                        E.splice(E.indexOf(t), 1)
                    }) : void f.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function(n) {
                if ("object" === d(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach(function(e) {
                        var t = n[e];
                        "object" === d(m[e]) && "object" === d(t) && (t = s({}, m[e], t)), r[e] = S[e] = t
                    }), O(r)
                } else f.logError("setConfig options must be an object")
            },
            setDefaults: function(e) {
                "object" === d(m) ? (s(m, e), s(S, e)) : f.logError("defaults must be an object")
            },
            resetConfig: T
        });

        function T() {
            var n = {
                _debug: p,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: g,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: h.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : h.MEDIUM : "object" === d(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, f.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === d(n) && (e[t] = n[t], f.logMessage("Using custom price granularity for ".concat(t))) : f.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !(m = {}),
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _bidderSequence: v,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    y[e] ? this._bidderSequence = e : f.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function i(t) {
                return a()(Object.keys(h), function(e) {
                    return t === h[e]
                })
            }

            function o(e) {
                if (!e) return f.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) i(e) || f.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if ("object" === d(e) && !Object(r.b)(e)) return f.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            S && O(Object.keys(S).reduce(function(e, t) {
                return S[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), S = n
        }

        function O(t) {
            var n = Object.keys(t);
            E.filter(function(e) {
                return c()(n, e.topic)
            }).forEach(function(e) {
                e.callback(function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e.topic, t[e.topic]))
            }), E.filter(function(e) {
                return "*" === e.topic
            }).forEach(function(e) {
                return e.callback(t)
            })
        }
    },
    30: function(e, t) {
        e.exports = {}
    },
    31: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    32: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    33: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    34: function(e, t, n) {
        var r = n(45),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    35: function(e, t) {
        e.exports = function() {}
    },
    350: function(e, t, n) {
        n(351), e.exports = n(16).Number.isInteger
    },
    351: function(e, t, n) {
        var r = n(15);
        r(r.S, "Number", {
            isInteger: n(352)
        })
    },
    352: function(e, t, n) {
        var r = n(18),
            i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    36: function(e, t, n) {
        n(128), e.exports = n(16).Array.findIndex
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return G
        }), n.d(t, "a", function() {
            return W
        }), t.h = function(e) {
            var a, c, u, s, d = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                o = e.auctionId,
                f = d,
                l = i,
                p = t,
                g = [],
                b = [],
                y = [],
                v = o || D.generateUUID(),
                h = n,
                m = r,
                S = [],
                E = new Set;

            function A() {
                return {
                    auctionId: v,
                    timestamp: a,
                    auctionEnd: c,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: p,
                    labels: l,
                    bidderRequests: g,
                    noBids: y,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), void 0 === c) {
                    var n = [];
                    e && (D.logMessage("Auction ".concat(v, " timedOut")), (n = function(e, t) {
                        return e.map(function(e) {
                            return (e.bids || []).filter(function(e) {
                                return !t.has(e.bidder)
                            })
                        }).reduce(w.flatten, []).map(function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })
                    }(g, E)).length && P.emit(M.EVENTS.BID_TIMEOUT, n)), u = W, c = Date.now(), P.emit(M.EVENTS.AUCTION_END, A());
                    try {
                        if (null != h) {
                            var r = p,
                                i = b.filter(D.bind.call(w.adUnitsFilter, this, r)).reduce(Y, {});
                            h.apply(pbjs, [i, e]), h = null
                        }
                    } catch (e) {
                        D.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && k.callTimedOutBidders(d, n, m);
                        var o = j.b.getConfig("userSync") || {};
                        o.enableOverride || x(o.syncDelay)
                    }
                }
            }

            function O() {
                D.logInfo("Bids Received for Auction with id: ".concat(v), b), u = W, T(!1, !0)
            }

            function I(e) {
                E.add(e)
            }
            return {
                addBidReceived: function(e) {
                    b = b.concat(e)
                },
                addNoBid: function(e) {
                    y = y.concat(e)
                },
                executeCallback: T,
                callBids: function() {
                    var e = this;
                    u = q, a = Date.now();
                    var t = k.makeBidRequests(f, a, v, m, l);
                    D.logInfo("Bids Requested for Auction with id: ".concat(v), t), t.forEach(function(e) {
                        ! function(e) {
                            g = g.concat(e)
                        }(e)
                    });
                    var n = {};
                    if (t.length < 1) D.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var r = {
                            bidRequests: t,
                            run: function() {
                                ! function() {
                                    var e = T.bind(null, !0),
                                        t = setTimeout(e, m);
                                    s = t
                                }(), u = G, P.emit(M.EVENTS.AUCTION_INIT, A());
                                var r = function(e, r) {
                                    var i = 0,
                                        t = !1,
                                        n = new Set,
                                        o = {};

                                    function a() {
                                        i--, t && 0 === i && e()
                                    }
                                    return {
                                        addBidResponse: function(e, t) {
                                            o[t.requestId] = !0, i++;
                                            var n = function(e) {
                                                var t = e.adUnitCode,
                                                    n = e.bid,
                                                    r = e.bidderRequest,
                                                    i = e.auctionId,
                                                    o = r.start,
                                                    a = N({}, n, {
                                                        auctionId: i,
                                                        responseTimestamp: Object(w.timestamp)(),
                                                        requestTimestamp: o,
                                                        cpm: parseFloat(n.cpm) || 0,
                                                        bidder: n.bidderCode,
                                                        adUnitCode: t
                                                    });
                                                a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                                var c = r.bids && U()(r.bids, function(e) {
                                                        return e.adUnitCode == t
                                                    }),
                                                    u = c && c.renderer;
                                                u && u.url && (a.renderer = C.a.install({
                                                    url: u.url
                                                }), a.renderer.setRender(u.render));
                                                var s = j.b.getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                                                    d = Object(_.a)(a.cpm, "object" === R(s) ? s : j.b.getConfig("customPriceBucket"), j.b.getConfig("currency.granularityMultiplier"));
                                                return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                            }({
                                                adUnitCode: e,
                                                bid: t,
                                                bidderRequest: this,
                                                auctionId: r.getAuctionId()
                                            });
                                            "video" === n.mediaType ? function(e, t, n, r) {
                                                var i = !0,
                                                    o = Object(w.getBidRequest)(t.requestId, [n]),
                                                    a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                                                    c = a && Object(w.deepAccess)(a, "context");
                                                j.b.getConfig("cache.url") && c !== B.a && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, J(e, t, r, o)));
                                                i && (K(e, t), r())
                                            }(r, n, this, a) : (K(r, n), a())
                                        },
                                        adapterDone: function() {
                                            n.add(this), t = r.getBidRequests().every(function(e) {
                                                return n.has(e)
                                            }), this.bids.forEach(function(e) {
                                                o[e.bidId] || (r.addNoBid(e), P.emit(M.EVENTS.NO_BID, e))
                                            }), t && 0 === i && e()
                                        }
                                    }
                                }(O, e);
                                k.callBids(f, t, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }, r.adapterDone, {
                                    request: function(e, t) {
                                        o(F, t), o(n, e), z[e] || (z[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < n[e] && (z[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        F[e]--, V[0] && i(V[0]) && V.shift()
                                    }
                                }, m, I)
                            }
                        };
                        i(r) || (D.logWarn("queueing auction due to limited endpoint capacity"), V.push(r))
                    }

                    function i(e) {
                        var r = !0,
                            i = j.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                            return z[n] && (!1 === z[n].SRA && (t = Math.min(e.bids.length, i)), F[z[n].origin] + t > i && (r = !1)), !r
                        }), r && e.run(), r
                    }

                    function o(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    S = S.concat(e), k.callBidWonBidder(e.bidder, e, d)
                },
                setBidTargeting: function(e) {
                    k.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return v
                },
                getAuctionStatus: function() {
                    return u
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return p
                },
                getBidRequests: function() {
                    return g
                },
                getBidsReceived: function() {
                    return b
                },
                getNoBids: function() {
                    return y
                }
            }
        }, n.d(t, "c", function() {
            return H
        }), t.f = u, t.d = K, n.d(t, "e", function() {
            return J
        }), t.g = d;
        var w = n(0),
            s = n(10),
            _ = n(41),
            a = n(28),
            o = n(62),
            C = n(12),
            j = n(3),
            r = n(25),
            i = n(13),
            c = n(11),
            U = n.n(c),
            B = n(49);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function N() {
            return (N = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var x = r.a.syncUsers,
            D = n(0),
            k = n(7).default,
            P = n(8),
            M = n(4),
            q = "started",
            G = "inProgress",
            W = "completed";
        P.on(M.EVENTS.BID_ADJUSTMENT, function(e) {
            ! function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, N({}, e))
                } catch (e) {
                    D.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            F = {},
            z = {},
            V = [];
        var H = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse");

        function u(e, t) {
            t.timeToRespond > e.getTimeout() + j.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function K(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function(e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = U()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    });
                    n = function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = d(t.mediaType, e);
                            f(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (f(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = N({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = N(t.adserverTargeting || {}, n)
            }(t, r), P.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), u(e, t)
        }
        var J = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), u(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), u(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), K(n, r), i())
            })
        }, "callPrebidCache");

        function d(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var r = M.TARGETING_KEYS,
                i = j.b.getConfig("mediaTypePriceGranularity.".concat(e)),
                o = "string" == typeof e && i ? "string" == typeof i ? i : "custom" : j.b.getConfig("priceGranularity"),
                a = pbjs.bidderSettings;
            if (a[M.JSON_MAPPING.BD_SETTING_STANDARD] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, function(e) {
                    return o === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : o === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : o === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : o === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : o === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : o === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var c = a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach(function(t) {
                        void 0 === U()(c, function(e) {
                            return e.key === t
                        }) && c.push(n(t, "videoCacheKey"))
                    }), j.b.getConfig("cache.url") && (!t || !1 !== D.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(j.b.getConfig("cache.url"));
                    void 0 === U()(c, function(e) {
                        return e.key === r.CACHE_HOST
                    }) && c.push(n(r.CACHE_HOST, function(e) {
                        return D.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : u.hostname
                    }))
                }
            }
            return a[M.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function f(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), D._each(e, function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    D.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Y(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    38: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    39: function(e, t, n) {
        var l = n(24),
            p = n(71),
            g = n(72),
            b = n(26),
            y = n(34),
            v = n(73),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = y(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return g
        });
        var r = n(11),
            a = n.n(r),
            i = n(0),
            s = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : p(e, o, n),
                med: "" === r ? "" : p(e, c, n),
                high: "" === r ? "" : p(e, u, n),
                auto: "" === r ? "" : p(e, f, n),
                dense: "" === r ? "" : p(e, d, n),
                custom: "" === r ? "" : p(e, t, n)
            }
        }

        function p(n, e, r) {
            var i = "";
            if (!g(e)) return i;
            var o = e.buckets.reduce(function(e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                t = a()(e.buckets, function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                });
            return t && (i = function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            }(n, t, r)), i
        }

        function g(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            }), t
        }
    },
    42: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    43: function(e, t, n) {
        var m = n(24),
            S = n(56),
            E = n(44),
            A = n(34),
            r = n(83);
        e.exports = function(f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return y ? -1 : g || b ? b : d
            }
        }
    },
    44: function(e, t, n) {
        var r = n(33);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    45: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    46: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    47: function(e, t, n) {
        var r = n(56),
            i = n(33);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    48: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function() {
            return i
        });
        var c = n(0);

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = function() {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    }(),
                    t = function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    }();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = function(e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c = c || r;
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        }(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    49: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }), t.c = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", function() {
            return u
        });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(9),
            a = (n.n(r), n(13)),
            c = "outstream";
        var u = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = i;
        var l = n(10),
            p = n(3);

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = n(0),
            v = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success")
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, p.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), p.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            })) : u(t, e)
        };
        var r = n(9),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    51: function(e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(58),
            E = n(15),
            A = n(136),
            T = n(21),
            O = n(30),
            I = n(137),
            w = n(53),
            _ = n(142),
            C = n(14)("iterator"),
            j = !([].keys && "next" in [].keys()),
            U = "values";
        e.exports = function(e, t, n, r, i, o, a) {
            I(n, t, r);

            function c(e) {
                if (!j && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case U:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == U,
                p = !1,
                g = e.prototype,
                b = g[C] || g["@@iterator"] || i && g[i],
                y = b || c(i),
                v = i ? l ? c("entries") : y : void 0,
                h = "Array" == t && g.entries || b;
            if (h && (d = _(h.call(new e))) !== Object.prototype && d.next && (w(d, f, !0), S || "function" == typeof d[C] || T(d, C, m)), l && b && b.name !== U && (p = !0, y = function() {
                    return b.call(this)
                }), S && !a || !j && !p && g[C] || T(g, C, y), O[t] = y, O[f] = m, i)
                if (u = {
                        values: l ? y : c(U),
                        keys: o ? y : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in g || A(g, s, u[s]);
                else E(E.P + E.F * (j || p), t, u);
            return u
        }
    },
    52: function(e, t, n) {
        var r = n(57)("keys"),
            i = n(46);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    53: function(e, t, n) {
        var r = n(20).f,
            i = n(27),
            o = n(14)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    54: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    55: function(e, t, n) {
        var r = n(18),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    56: function(e, t, n) {
        var r = n(32);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    57: function(e, t, n) {
        var r = n(16),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(58) ? "pure" : "global",
            copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    58: function(e, t) {
        e.exports = !0
    },
    59: function(e, t, n) {
        var u = n(47),
            s = n(34),
            d = n(87);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0; return !c && -1
            }
        }
    },
    60: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function(e) {
                        return "banner" !== e
                    }) || f.some(function(e) {
                        return "banner" === e
                    }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                        return s.labels[e]
                    }) || n.some(function(e) {
                        return g()(a, e)
                    })) || i && n.reduce(function(e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(9),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function y(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function(e) {
            return function(e) {
                b = e
            }(e.sizeConfig)
        })
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    62: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.b.getConfig("cache.url"), function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : function(e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    63: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function() {
            return G
        });
        var r = n(38),
            c = n(0),
            i = n(131),
            o = n(25),
            a = n(50),
            d = n(3),
            v = n(29),
            f = n(64),
            u = n(13),
            s = n(132),
            l = n(9),
            p = n.n(l),
            g = n(61),
            h = n(12),
            b = n(23);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            E = n(4),
            A = n(0),
            T = n(7).default,
            O = n(8),
            I = o.a.triggerUserSyncs,
            w = E.EVENTS,
            _ = w.ADD_AD_UNITS,
            C = w.BID_WON,
            j = w.REQUEST_BIDS,
            U = w.SET_TARGETING,
            B = w.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            x = R.NO_AD,
            D = R.EXCEPTION,
            k = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function(e) {
                    var t = v.a.getBidsRequested().map(function(e) {
                        return e.bids.map(function(e) {
                            return e.adUnitCode
                        })
                    }).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.25.0", A.logInfo("Prebid.js v2.25.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", function(e) {
            return e.forEach(function(e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            })) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            }), e
        }, "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode
            }).filter(c.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function(e) {
                return function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e[0].adUnitCode, {
                    bids: e
                })
            }).reduce(function(e, t) {
                return m(e, t)
            }, {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), A.logError(t), O.emit(B, r)
        }

        function F(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    })
                }), O.emit(U, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function(e) {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), O.emit(U, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(N, d, n)
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                        }
                        e.write(o), e.close(), q(e, i, r), A.callBurl(n)
                    } else if (c) {
                        var l = A.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", l.src = c, A.insertElement(l, e, "body"), q(e, i, r), A.callBurl(n)
                    } else {
                        var p = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(x, p, n)
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(k, g)
                }
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(D, b)
            } else {
                var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, y)
            }
        }, S.removeAdUnit = function(e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(j);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                    return p()(i, e.code)
                }) : i = r && r.map(function(e) {
                    return e.code
                }), (r = G(r)).forEach(function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function(e) {
                            return e.bidder
                        }),
                        a = T.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function(e) {
                            return !p()(n, e)
                        }) : e;
                    i.transactionId = A.generateUUID(), r.forEach(function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function(e) {
                            return p()(r, e)
                        }) || (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                            return e.bidder !== t
                        }))
                    }), g.a.incrementCounter(i.code)
                }), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.addAdUnits = function(e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === y(e) && S.adUnits.push(e), O.emit(_)
        }, S.onEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || M[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter(function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.que.push(function() {
            return Object(i.a)()
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), F(S.que), F(S.cmd)
        }, t.default = S
    },
    632: function(e, t, n) {
        e.exports = n(63)
    },
    64: function(e, t, n) {
        "use strict";
        t.a = S, n.d(t, "b", function() {
            return I
        });
        var s = n(0),
            o = n(3),
            a = n(28),
            r = n(29),
            i = n(60),
            c = n(2),
            u = n(9),
            d = n.n(u);

        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var g = n(0),
            b = n(4),
            y = [],
            v = Object.keys(b.TARGETING_KEYS).map(function(e) {
                return b.TARGETING_KEYS[e]
            }),
            h = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)()
            },
            m = function(e) {
                return e && (e.status && !d()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function S(e, n) {
            var r = [],
                i = Object(s.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function(e) {
                var t = Object(s.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function(e) {
                    return r.push(t[e].reduce(n))
                })
            }), r
        }

        function E(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
        var A, T, O, I = (A = r.a, O = {}, (T = {}).setLatestAuctionForAdUnit = function(e, t) {
            O[e] = t
        }, T.resetPresetTargeting = function(e) {
            if (Object(s.isGptPubadsDefined)()) {
                var t = w(e),
                    r = A.getAdUnits().filter(function(e) {
                        return d()(t, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function(n) {
                    y.forEach(function(t) {
                        r.forEach(function(e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, T.resetPresetTargetingAST = function(e) {
            w(e).forEach(function(e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords),
                        r = {};
                    n.forEach(function(e) {
                        d()(y, e.toLowerCase()) || (r[e] = t.keywords[e])
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    })
                }
            })
        }, T.getAllTargeting = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                n = w(e),
                r = function(e, t) {
                    var n = T.getWinningBids(e, t),
                        r = C();
                    return n = n.map(function(o) {
                        return p({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                        }).reduce(function(e, t) {
                            var n = [o.adserverTargeting[t]],
                                r = p({}, t.substring(0, 20), n);
                            if (t !== b.TARGETING_KEYS.DEAL) return [].concat(f(e), [r]);
                            var i = p({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                            return [].concat(f(e), [r, i])
                        }, []))
                    })
                }(n, t).concat(function(t, e) {
                    return e.filter(function(e) {
                        return d()(t, e.adUnitCode)
                    }).map(function(e) {
                        return l({}, e)
                    }).reduce(j, []).map(B).filter(function(e) {
                        return e
                    })
                }(n, t)).concat(o.b.getConfig("enableSendAllBids") ? function(e, t) {
                    var n = v.concat(a.a);
                    return S(t, s.getHighestCpm).map(function(t) {
                        if (t.adserverTargeting && e && (g.isArray(e) && d()(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return p({}, t.adUnitCode, function(t, e) {
                            return e.map(function(e) {
                                return p({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                            })
                        }(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function(e) {
                        return e
                    })
                }(n, t) : []);
            r.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === y.indexOf(Object.keys(e)[0]) && (y = Object.keys(e).concat(y))
                    })
                })
            }), r = function(e) {
                return e.map(function(e) {
                    return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    }).reduce(function(e, t) {
                        return l(t, e)
                    }, {}))
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = l({}, e[n], t[n]), e
                }, {})
            }(r);
            var i = o.b.getConfig("targetingControls.auctionKeyMaxChars");
            return i && (Object(s.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(i, " characters.  Running checks on auction keys...")), r = function(e, c) {
                var u = Object(s.deepClone)(e);
                return Object.keys(u).map(function(e) {
                    return {
                        adUnitCode: e,
                        adUnitTargeting: u[e]
                    }
                }).sort(E).reduce(function(e, t, n, r) {
                    var i = function(n) {
                        return Object.keys(n).reduce(function(e, t) {
                            return e + "".concat(t, "%3d").concat(encodeURIComponent(n[t]), "%26")
                        }, "")
                    }(t.adUnitTargeting);
                    n + 1 === r.length && (i = i.slice(0, -3));
                    var o = t.adUnitCode,
                        a = i.length;
                    return a <= c ? (c -= a, Object(s.logInfo)("AdUnit '".concat(o, "' auction keys comprised of ").concat(a, " characters.  Deducted from running threshold; new limit is ").concat(c), u[o]), e[o] = u[o]) : Object(s.logWarn)("The following keys for adUnitCode '".concat(o, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(a, ", the current allotted amount was ").concat(c, ".\n"), u[o]), n + 1 === r.length && 0 === Object.keys(e).length && Object(s.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                }, {})
            }(r, i)), n.forEach(function(e) {
                r[e] || (r[e] = {})
            }), r
        }, T.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter(e ? e(r) : Object(s.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [e] : e).map(function(e) {
                            return g.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, T.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                t = w(e);
            return n.filter(function(e) {
                return d()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(s.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(s.getHighestCpm)
            })
        }, T.setTargetingForAst = function(e) {
            var r = T.getAllTargeting(e);
            try {
                T.resetPresetTargetingAST(e)
            } catch (e) {
                g.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    if (g.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), g.isStr(r[n][e]) || g.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        })
                    }
                })
            })
        }, T.isApntagDefined = function() {
            if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
        }, T);

        function w(e) {
            return "string" == typeof e ? [e] : g.isArray(e) ? e : A.getAdUnitCodes() || []
        }

        function _() {
            var e = A.getBidsReceived();
            return o.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return O[e.adUnitCode] === e.auctionId
            })), S(e = e.filter(function(e) {
                return Object(s.deepAccess)(e, "video.context") !== c.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(m).filter(h), s.getOldestHighestCpmBid)
        }

        function C() {
            return A.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(v).filter(s.uniques)
        }

        function j(t, n, e, r) {
            return Object.keys(n.adserverTargeting).filter(U()).forEach(function(e) {
                t.length && t.filter(function(t) {
                    return function(e) {
                        return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                    }
                }(e)).forEach(function(t) {
                    return function(e) {
                        g.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(s.uniques), delete n.adserverTargeting[t]
                    }
                }(e))
            }), t.push(n), t
        }

        function U() {
            var t = C();
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }

        function B(t) {
            return p({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(U()).map(function(e) {
                return p({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }
    },
    65: function(e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(51)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    66: function(e, t, r) {
        function i() {}
        var o = r(26),
            a = r(138),
            c = r(67),
            u = r(52)("IE_PROTO"),
            s = "prototype",
            d = function() {
                var e, t = r(55)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i, i[s] = null, n[u] = e) : n = d(), void 0 === t ? n : a(n, t)
        }
    },
    67: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    68: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    69: function(e, t, n) {
        var i = n(21);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return B
        }), t.setS2STestingModule = function(e) {
            O = e
        };
        var h = n(0),
            p = n(60),
            g = n(28),
            u = n(1),
            m = n(5),
            b = n(3),
            r = n(9),
            S = n.n(r),
            i = n(11),
            y = n.n(i),
            v = n(61),
            E = n(48);

        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            _ = n(8),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            j = {};
        b.b.getConfig("s2sConfig", function(e) {
            j = e.s2sConfig
        });
        var o = {};

        function U(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i
                }).reduce(function(e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: v.a.getCounter(c.code)
                    })), e
                }, [])), e
            }, []).reduce(h.flatten, []).filter(function(e) {
                return "" !== e
            })
        }
        var B = {
            consentData: null,
            setConsentData: function(e) {
                B.consentData = e
            },
            getConsentData: function() {
                return B.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            b.b.getConfig("bidderSequence") === b.a && (t = Object(h.shuffle)(t));
            var s = Object(E.b)(),
                n = t,
                r = [];
            if (j.enabled) {
                R() && (r = O.getSourceBidderMap(e)[O.CLIENT]);
                var d = j.bidders;
                n = t.filter(function(e) {
                    return !S()(d, e) || S()(r, e)
                });
                var f = function(e) {
                        var t = j.bidders,
                            n = I.deepClone(e);
                        return n.forEach(function(e) {
                            e.bids = e.bids.filter(function(e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                            }).map(function(e) {
                                return e.bid_id = I.getUniqueIdentifierStr(), e
                            })
                        }), n = n.filter(function(e) {
                            return 0 !== e.bids.length
                        })
                    }(e),
                    l = I.generateUUID();
                d.forEach(function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(f),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: w.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                }), f.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return y()(u, function(e) {
                            return y()(e.bids, function(e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function(e) {
                    e.adUnitsS2SCopy = f.filter(function(e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var p = function(e) {
                var t = I.deepClone(e);
                return t.forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !R() || e.finalSource !== O.SERVER
                    })
                }), t = t.filter(function(e) {
                    return 0 !== e.bids.length
                })
            }(e);
            return n.forEach(function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(p),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), B.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = B.getConsentData()
            }), u
        }, s.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = A(t.reduce(function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }, [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(m.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = j.bidders,
                        l = C[j.adapter],
                        p = s[0].tid,
                        g = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: p,
                            ad_units: g
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function(e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                }),
                                v = b.ad_units.reduce(function(e, t) {
                                    return e.concat((t.bids || []).reduce(function(e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                                return S()(v, e)
                            }).join(","))), s.forEach(function(e) {
                                _.emit(w.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(b, s, function(e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }, function() {
                                return y.forEach(function(e) {
                                    return e()
                                })
                            }, d)
                        }
                    }
                }
                u.forEach(function(e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                })
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && g.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function(t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = b.b.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = function(e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(g.e, e) && t.push("native"), t
                    }(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var c = n.getSpec();
                        o = Object(u.newBidder)(T({}, c, {
                            code: e
                        })), d[e] = t
                    }
                    s.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, s.getBidAdapter = function(e) {
            return C[e]
        }, s.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = I.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                a(e, "onTimeout", n[e])
            })
        }, s.callBidWonBidder = function(e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    71: function(e, t, n) {
        var o = n(26);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    72: function(e, t, n) {
        var r = n(30),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    73: function(e, t, n) {
        var r = n(74),
            i = n(14)("iterator"),
            o = n(30);
        e.exports = n(16).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    74: function(e, t, n) {
        var i = n(32),
            o = n(14)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    75: function(e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
        var i = n(46)("meta"),
            o = n(18),
            a = n(27),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            d = !n(31)(function() {
                return s(Object.preventExtensions({}))
            }),
            f = e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[i].i
                },
                getWeak: function(e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[i].w
                },
                onFreeze: function(e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e
                }
            }
    },
    76: function(e, t, n) {
        var r = n(18);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    77: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(38),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function(e) {
                return e
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            if (function(e) {
                    return u.contains(d, e)
                }(e)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(e) {
            ! function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function(e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    80: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(43)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(35)(o)
    },
    81: function(e, t, n) {
        e.exports = !n(22) && !n(31)(function() {
            return 7 != Object.defineProperty(n(55)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    82: function(e, t, n) {
        var i = n(18);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    83: function(e, t, n) {
        var r = n(84);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    84: function(e, t, n) {
        var r = n(18),
            i = n(85),
            o = n(14)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    85: function(e, t, n) {
        var r = n(32);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(59)(!0);
        r(r.P, "Array", {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(35)("includes")
    },
    87: function(e, t, n) {
        var r = n(45),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    88: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    89: function(e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var p = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = "2,1,0" === [1].reduce(function(e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function g(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var b = Object.assign || function(e) {
            return i.call(g(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function y(c) {
            var u, e = {},
                s = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = f(r, i, a ? [a, n] : void 0)
                            }
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function d(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return i.call(a, function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (u || s.push(function() {
                        i || console.warn(p + ": referenced '" + o + "' but it was never created")
                    }), t[n] = l(function(e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function l(r) {
                var o = [],
                    a = [],
                    c = function() {};
                return {
                    __funHook: {
                        install: function(e, t, n) {
                            this.type = e, this.fn = t, (c = n)(o, a), r && r(t)
                        }
                    },
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e]
                            })
                        })), b(e, {
                            remove: function() {
                                return e.forEach(function(e) {
                                    e.remove()
                                }), this
                            }
                        })
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                };

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== f) throw p + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var r, n, i = t ? d(t) : l(),
                    o = {
                        get: function(e, t) {
                            return i[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return u || s.push(a), c.useProxy ? n = new Proxy(e, o) : b(n = function() {
                    return o.apply ? o.apply(e, this, g(arguments)) : e.apply(this, arguments)
                }, i), i.__funHook.install(f, n, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function(n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = g(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function() {
                            var e = g(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    a()
                }), n;

                function a() {
                    !u && ("sync" !== f || c.ready & y.SYNC) && ("async" !== f || c.ready & y.ASYNC) ? "sync" !== f && c.ready & y.QUEUE ? o.apply = function() {
                        var e = arguments;
                        s.push(function() {
                            n.apply(e[1], e[2])
                        })
                    } : o.apply = function() {
                        throw p + ": hooked function not ready"
                    } : o.apply = r
                }
            }
            return (c = b({}, r, c)).ready ? t.ready = function() {
                u = !0,
                    function(e) {
                        for (var t; t = e.shift();) t()
                    }(s)
            } : u = !0, t.get = d, t
        }
        e.exports = y
    },
    9: function(e, t, n) {
        n(86), e.exports = n(16).Array.includes
    }
});
pbjsChunk([218], {
    194: function(e, r, a) {
        e.exports = a(195)
    },
    195: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return d
        });
        var u = a(12),
            h = a(0),
            _ = a(3),
            c = a(1),
            m = a(2),
            t = a(11),
            k = a.n(t),
            n = a(9),
            I = a.n(n);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function x(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var A = "appnexus",
            T = "//ib.adnxs.com/ut/v3/prebid",
            s = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            w = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            C = ["geo", "device_id"],
            S = ["enabled", "dongle", "member_id", "debug_timeout"],
            o = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            d = {
                code: A,
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.b, m.d, m.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, t = e.map(E),
                        n = k()(e, R);
                    n && (a = {}, Object.keys(n.params.user).filter(function(e) {
                        return I()(w, e)
                    }).forEach(function(e) {
                        return a[e] = n.params.user[e]
                    }));
                    var i, s = k()(e, P);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                        return I()(C, e)
                    }).forEach(function(e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = k()(e, j);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        u = {},
                        c = h.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        p = JSON.parse(c)
                    } catch (e) {
                        h.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = k()(e, N);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter(function(e) {
                        return I()(S, e)
                    }).forEach(function(e) {
                        u[e] = p[e]
                    });
                    var l = k()(e, O),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        y = {
                            tags: x(t),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.25.0"
                            }
                        };
                    if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), _.b.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), u.enabled && (y.debug = u, h.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map(function(e) {
                                return encodeURIComponent(e)
                            }).join(",")
                        };
                        y.referrer_detection = g
                    }
                    k()(e, q) && e.filter(q).forEach(function(r) {
                        var e = function(e, r) {
                                var a = r.mediaTypes.video,
                                    t = a.durationRangeSec,
                                    n = a.requireExactDuration,
                                    i = function(e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            t = e.requireExactDuration,
                                            n = h.getMinValueFromArray(a),
                                            i = Math.floor(r / n);
                                        return t ? Math.max(i, a.length) : i
                                    }(r.mediaTypes.video),
                                    s = h.getMaxValueFromArray(t),
                                    o = e.filter(function(e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = h.fill.apply(h, x(o).concat([i]));
                                if (n) {
                                    var p = Math.ceil(i / t.length),
                                        u = h.chunk(d, p);
                                    t.forEach(function(r, e) {
                                        u[e].map(function(e) {
                                            z(e, "minduration", r), z(e, "maxduration", r)
                                        })
                                    })
                                } else d.map(function(e) {
                                    return z(e, "maxduration", s)
                                });
                                return d
                            }(t, r),
                            a = y.tags.filter(function(e) {
                                return e.uuid !== r.bidId
                            });
                        y.tags = [].concat(x(a), x(e))
                    });
                    var v = h.deepAccess(e[0], "userId.criteortus.".concat(A, ".userid"));
                    if (v) {
                        var b = [];
                        b.push({
                            provider: "criteo",
                            user_id: v
                        }), y.tpuids = b
                    }
                    return function(e, a) {
                        var t = [];
                        if (15 < e.tags.length) {
                            var n = h.deepClone(e);
                            h.chunk(e.tags, 15).forEach(function(e) {
                                n.tags = e;
                                var r = JSON.stringify(n);
                                t.push({
                                    method: "POST",
                                    url: T,
                                    data: r,
                                    bidderRequest: a
                                })
                            })
                        } else {
                            var r = JSON.stringify(e);
                            t = {
                                method: "POST",
                                url: T,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return t
                    }(y, r)
                },
                interpretResponse: function(e, r) {
                    var t = this,
                        n = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(n.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), h.logError(a), i
                    }
                    if (e.tags && e.tags.forEach(function(e) {
                            var r = function(e) {
                                return e && e.ads && e.ads.length && k()(e.ads, function(e) {
                                    return e.rtb
                                })
                            }(e);
                            if (r && 0 !== r.cpm && I()(t.supportedMediaTypes, r.ad_type)) {
                                var a = function(e, r, a) {
                                    var t = h.getBidRequest(e.uuid, [a]),
                                        n = {
                                            requestId: e.uuid,
                                            cpm: r.cpm,
                                            creativeId: r.creative_id,
                                            dealId: r.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: t.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: r.buyer_member_id,
                                                dealPriority: r.deal_priority,
                                                dealCode: r.deal_code
                                            }
                                        };
                                    r.advertiser_id && (n.meta = l({}, n.meta, {
                                        advertiserId: r.advertiser_id
                                    }));
                                    if (r.rtb.video) {
                                        if (l(n, {
                                                width: r.rtb.video.player_width,
                                                height: r.rtb.video.player_height,
                                                vastUrl: r.rtb.video.asset_url,
                                                vastImpUrl: r.notify_url,
                                                ttl: 3600
                                            }), h.deepAccess(t, "mediaTypes.video.context") === m.a) {
                                            var i = Object(c.getIabSubCategory)(t.bidder, r.brand_category_id);
                                            n.meta = l({}, n.meta, {
                                                iabSubCatId: i
                                            }), n.video = {
                                                context: m.a,
                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3)
                                            }
                                        }
                                        if (r.renderer_url) {
                                            var s = h.deepAccess(a.bids[0], "renderer.options");
                                            l(n, {
                                                adResponse: e,
                                                renderer: function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                        t = u.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        t.setRender(g)
                                                    } catch (e) {
                                                        h.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return t.setEventHandlers({
                                                        impression: function() {
                                                            return h.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return h.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            h.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                        }
                                                    }), t
                                                }(n.adUnitCode, r, s)
                                            }), n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[m.c]) {
                                        var o = r.rtb[m.c];
                                        n[m.c] = {
                                            title: o.title,
                                            body: o.desc,
                                            body2: o.desc2,
                                            cta: o.ctatext,
                                            rating: o.rating,
                                            sponsoredBy: o.sponsored,
                                            privacyLink: o.privacy_link,
                                            address: o.address,
                                            downloads: o.downloads,
                                            likes: o.likes,
                                            phone: o.phone,
                                            price: o.price,
                                            salePrice: o.saleprice,
                                            clickUrl: o.link.url,
                                            displayUrl: o.displayurl,
                                            clickTrackers: o.link.click_trackers,
                                            impressionTrackers: o.impression_trackers,
                                            javascriptTrackers: o.javascript_trackers
                                        }, o.main_img && (n.native.image = {
                                            url: o.main_img.url,
                                            height: o.main_img.height,
                                            width: o.main_img.width
                                        }), o.icon && (n.native.icon = {
                                            url: o.icon.url,
                                            height: o.icon.height,
                                            width: o.icon.width
                                        })
                                    } else {
                                        l(n, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var d = r.rtb.trackers[0].impression_urls[0],
                                                p = h.createTrackPixelHtml(d);
                                            n.ad += p
                                        } catch (e) {
                                            h.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return n
                                }(e, r, n);
                                a.mediaType = function(e) {
                                    var r = e.ad_type;
                                    return r === m.d ? m.d : r === m.c ? m.c : m.b
                                }(r), i.push(a)
                            }
                        }), e.debug && e.debug.debug_info) {
                        var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), h.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), h.logMessage(s)
                    }
                    return i
                },
                getMappingFileInfo: function() {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = h.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: h.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, p(a.keywords) && a.keywords.forEach(f), Object.keys(a).forEach(function(e) {
                        var r = h.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    })), a
                }
            };

        function p(e) {
            return !!(h.isArray(e) && 0 < e.length)
        }

        function f(e) {
            p(e.value) && "" === e.value[0] && delete e.value
        }

        function E(r) {
            var a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !h.isEmpty(r.params.keywords)) {
                var e = h.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(f), a.keywords = e
            }
            if ((r.mediaType === m.c || h.deepAccess(r, "mediaTypes.".concat(m.c))) && (a.ad_types.push(m.c), 0 === a.sizes.length && (a.sizes = y([1, 1])), r.nativeParams)) {
                var t = function(n) {
                    var i = {};
                    return Object.keys(n).forEach(function(e) {
                        var r = o[e] && o[e].serverName || o[e] || e,
                            a = o[e] && o[e].requiredParams;
                        if (i[r] = l({}, a, n[e]), !(r !== o.image.serverName && r !== o.icon.serverName) && i[r].sizes) {
                            var t = i[r].sizes;
                            (h.isArrayOfNums(t) || h.isArray(t) && 0 < t.length && t.every(function(e) {
                                return h.isArrayOfNums(e)
                            })) && (i[r].sizes = y(i[r].sizes))
                        }
                        r === o.privacyLink && (i.privacy_supported = !0)
                    }), i
                }(r.nativeParams);
                a[m.c] = {
                    layouts: [t]
                }
            }
            var n = h.deepAccess(r, "mediaTypes.".concat(m.d)),
                i = h.deepAccess(r, "mediaTypes.video.context");
            return r.mediaType !== m.d && !n || a.ad_types.push(m.d), (r.mediaType === m.d || n && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return I()(s, e)
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e]
            })), r.renderer && (a.video = l({}, a.video, {
                custom_renderer_present: !0
            })), (h.isEmpty(r.mediaType) && h.isEmpty(r.mediaTypes) || r.mediaType === m.b || r.mediaTypes && r.mediaTypes[m.b]) && a.ad_types.push(m.b), a
        }

        function y(e) {
            var r = [],
                a = {};
            if (h.isArray(e) && 2 === e.length && !h.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a)
                }
            return r
        }

        function R(e) {
            return !!e.params.user
        }

        function O(e) {
            return !!parseInt(e.params.member, 10)
        }

        function P(e) {
            if (e.params) return !!e.params.app
        }

        function j(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function N(e) {
            return !!e.debug
        }

        function q(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === m.a
        }

        function z(e, r, a) {
            h.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function g(e) {
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            })
        }
        Object(c.registerBidder)(d)
    }
}, [194]);
pbjsChunk([206], {
    218: function(t, e, r) {
        t.exports = r(219)
    },
    219: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r.d(e, "spec", function() {
            return h
        });
        var u = r(0),
            o = r(10),
            i = r(1),
            d = r(2),
            a = r(3);

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var n = "brightcom",
            h = {
                code: n,
                supportedMediaTypes: [d.b],
                isBidRequestValid: function(t) {
                    return t.bidder === n && void 0 !== t.params && void 0 !== t.params.publisherId
                },
                buildRequests: function(e, r) {
                    try {
                        var t = "";
                        r && r.refererInfo && (t = r.refererInfo.referer);
                        var s = [],
                            i = u.getBidIdParameter("publisherId", e[0].params);
                        u._each(e, function(t) {
                            t.sizes = u.isArray(t.sizes) && u.isArray(t.sizes[0]) ? t.sizes : [t.sizes], t.sizes = t.sizes.filter(function(t) {
                                return u.isArray(t)
                            });
                            var e = t.sizes.map(function(t) {
                                    return {
                                        w: parseInt(t[0], 10),
                                        h: parseInt(t[1], 10)
                                    }
                                }),
                                r = document.getElementById(t.adUnitCode),
                                i = function(t) {
                                    return t.reduce(function(t, e) {
                                        return e.h * e.w < t.h * t.w ? e : t
                                    })
                                }(e),
                                n = function(t) {
                                    return ! function() {
                                        try {
                                            return u.getWindowSelf() !== u.getWindowTop()
                                        } catch (t) {
                                            return !0
                                        }
                                    }() && null !== t
                                }(r) ? function(t, e) {
                                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                        i = r.w,
                                        n = r.h;
                                    return "visible" === u.getWindowTop().document.visibilityState ? function(t, e) {
                                        var r, i, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                            o = n.w,
                                            d = n.h,
                                            a = function(t) {
                                                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                                    r = e.w,
                                                    i = e.h,
                                                    n = t.getBoundingClientRect(),
                                                    o = n.width,
                                                    d = n.height,
                                                    a = n.left,
                                                    s = n.top,
                                                    u = n.right,
                                                    h = n.bottom;
                                                (0 === o || 0 === d) && r && i && (u = a + (o = r), h = s + (d = i));
                                                return {
                                                    width: o,
                                                    height: d,
                                                    left: a,
                                                    top: s,
                                                    right: u,
                                                    bottom: h
                                                }
                                            }(t, {
                                                w: o,
                                                h: d
                                            }),
                                            s = function(t) {
                                                for (var e = {
                                                        left: t[0].left,
                                                        right: t[0].right,
                                                        top: t[0].top,
                                                        bottom: t[0].bottom
                                                    }, r = 1; r < t.length; ++r) {
                                                    if (e.left = Math.max(e.left, t[r].left), e.right = Math.min(e.right, t[r].right), e.left >= e.right) return null;
                                                    if (e.top = Math.max(e.top, t[r].top), e.bottom = Math.min(e.bottom, t[r].bottom), e.top >= e.bottom) return null
                                                }
                                                return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                                            }([{
                                                left: 0,
                                                top: 0,
                                                right: e.innerWidth,
                                                bottom: e.innerHeight
                                            }, a]);
                                        return null === s ? 0 : (r = s.width * s.height, i = a.width * a.height, r / i * 100)
                                    }(t, e, {
                                        w: i,
                                        h: n
                                    }) : 0
                                }(r, u.getWindowTop(), i) : "na",
                                o = isNaN(n) ? n : Math.round(n),
                                d = {
                                    id: t.bidId,
                                    banner: {
                                        format: e,
                                        ext: {
                                            viewability: o
                                        }
                                    },
                                    tagid: String(t.adUnitCode)
                                },
                                a = u.getBidIdParameter("bidFloor", t.params);
                            a && (d.bidfloor = a), s.push(d)
                        });
                        var n = {
                            id: u.getUniqueIdentifierStr(),
                            imp: s,
                            site: {
                                domain: o.c(t).host,
                                page: t,
                                publisher: {
                                    id: i
                                }
                            },
                            device: {
                                devicetype: /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent) ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent) ? 3 : 2,
                                w: screen.width,
                                h: screen.height
                            },
                            tmax: a.b.getConfig("bidderTimeout")
                        };
                        return {
                            method: "POST",
                            url: "https://brightcombid.marphezis.com/hb",
                            data: JSON.stringify(n),
                            options: {
                                contentType: "text/plain",
                                withCredentials: !1
                            }
                        }
                    } catch (t) {
                        u.logError(t, {
                            bidReqs: e,
                            bidderRequest: r
                        })
                    }
                },
                interpretResponse: function(t) {
                    if (!t.body || "object" != s(t.body)) return u.logWarn("Brightcom server returned empty/non-json response: " + JSON.stringify(t.body)), [];
                    var e = t.body,
                        r = e.id,
                        i = e.seatbid;
                    try {
                        var n = [];
                        return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function(t) {
                            n.push({
                                requestId: t.impid,
                                cpm: parseFloat(t.price),
                                width: parseInt(t.w),
                                height: parseInt(t.h),
                                creativeId: t.crid || t.id,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: d.b,
                                ad: function(t) {
                                    var e = t.adm;
                                    "nurl" in t && (e += u.createTrackPixelHtml(t.nurl));
                                    return e
                                }(t),
                                ttl: 60
                            })
                        }), n
                    } catch (t) {
                        u.logError(t, {
                            id: r,
                            seatbid: i
                        })
                    }
                },
                getUserSyncs: function(t, e, r) {
                    return []
                }
            };
        Object(i.registerBidder)(h)
    }
}, [218]);
pbjsChunk([194], {
    242: function(n, t, e) {
        n.exports = e(243)
    },
    243: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", function() {
            return o
        }), e.d(t, "consentTimeout", function() {
            return a
        }), e.d(t, "allowAuction", function() {
            return i
        }), e.d(t, "staticConsentData", function() {
            return s
        }), t.requestBidsHook = D, t.resetConsentData = function() {
            c = void 0, d.gdprDataHandler.setConsentData(null)
        }, t.setConsentConfig = x;
        var o, a, i, s, c, l = e(0),
            r = e(3),
            d = e(7),
            u = e(9),
            g = e.n(u),
            f = e(244),
            p = e.n(f),
            m = "iab",
            C = 1e4,
            v = !0,
            w = !1,
            b = {
                iab: function(n, t, i) {
                    var e, o = function() {
                            var t = {};

                            function e() {
                                t.getConsentData && t.getVendorConsents && n(t, i)
                            }
                            return {
                                consentDataCallback: function(n) {
                                    t.getConsentData = n, e()
                                },
                                vendorConsentsCallback: function(n) {
                                    t.getVendorConsents = n, e()
                                }
                            }
                        }(),
                        c = {};
                    try {
                        e = window.__cmp || l.getWindowTop().__cmp
                    } catch (n) {}
                    if (l.isFn(e)) e("getConsentData", null, o.consentDataCallback), e("getVendorConsents", null, o.vendorConsentsCallback);
                    else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) r("getConsentData", o.consentDataCallback), r("getVendorConsents", o.vendorConsentsCallback);
                    else {
                        for (var a, s = window; !a;) {
                            try {
                                s.frames.__cmpLocator && (a = s)
                            } catch (n) {}
                            if (s === window.top) break;
                            s = s.parent
                        }
                        if (!a) return t("CMP not found.", i);
                        d("getConsentData", a, o.consentDataCallback), d("getVendorConsents", a, o.vendorConsentsCallback)
                    }

                    function r(o, a) {
                        var n = i.adUnits,
                            t = 1,
                            e = 1;
                        if (Array.isArray(n) && 0 < n.length) {
                            var s = l.getAdUnitSizes(n[0]);
                            t = s[0][0], e = s[0][1]
                        }
                        window.$sf.ext.register(t, e, function(n, t) {
                            if ("cmpReturn" === n) {
                                var e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents;
                                a(e)
                            }
                        }), window.$sf.ext.cmp(o)
                    }

                    function d(n, s, t) {
                        function e(n) {
                            var t = "string" == typeof n.data && p()(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
                            if (t.__cmpReturn && t.__cmpReturn.callId) {
                                var e = t.__cmpReturn;
                                void 0 !== c[e.callId] && (c[e.callId](e.returnValue, e.success), delete c[e.callId])
                            }
                        }
                        window.__cmp = function(n, t, e) {
                            var o = Math.random() + "",
                                a = {
                                    __cmpCall: {
                                        command: n,
                                        parameter: t,
                                        callId: o
                                    }
                                };
                            c[o] = e, s.postMessage(a, "*")
                        }, window.addEventListener("message", e, !1), window.__cmp(n, null, function(n) {
                            window.removeEventListener("message", e, !1), t(n)
                        })
                    }
                },
                static: function(n, t, e) {
                    n(s, e)
                }
            };

        function D(n, t) {
            var e = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return c ? _(null, e) : g()(Object.keys(b), o) ? (b[o].call(this, k, y, e), void(e.haveExited || (0 === a ? k(void 0, e) : e.timer = setTimeout(function(n) {
                y("CMP workflow exceeded timeout threshold.", n)
            }.bind(null, e), a)))) : (l.logWarn("CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args))
        }

        function k(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || l.isStr(n.getConsentData.consentData) && l.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), h(n), _(null, t)) : y("CMP returned unexpected value during lookup process.", t, n)
        }

        function y(n, t, e) {
            clearTimeout(t.timer), i && h(void 0), _(n, t, e)
        }

        function h(n) {
            c = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, d.gdprDataHandler.setConsentData(c)
        }

        function _(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context,
                    a = t.args,
                    s = t.nextFn;
                n ? i ? (l.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), s.apply(o, a)) : (l.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : l.logError("Error executing bidsBackHandler")) : s.apply(o, a)
            }
        }

        function x(n) {
            l.isStr(n.cmpApi) ? o = n.cmpApi : (o = m, l.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), l.isNumber(n.timeout) ? a = n.timeout : (a = C, l.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(C, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent ? i = n.allowAuctionWithoutConsent : (i = v, l.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), l.logInfo("consentManagement module has been activated..."), "static" === o && (l.isPlainObject(n.consentData) ? (s = n.consentData, a = 0) : l.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), w || pbjs.requestBids.before(D, 50), w = !0
        }
        r.b.getConfig("consentManagement", function(n) {
            return x(n.consentManagement)
        })
    }
}, [242]);
pbjsChunk([0], {
    257: function(t, e, i) {
        t.exports = i(258)
    },
    258: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "FAST_BID_PUBKEY", function() {
            return FAST_BID_PUBKEY
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec
        }), __webpack_exports__.cryptoVerify = cryptoVerify;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader__ = __webpack_require__(50),
            __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1),
            __WEBPACK_IMPORTED_MODULE_2__src_url__ = __webpack_require__(10),
            __WEBPACK_IMPORTED_MODULE_3__src_utils__ = __webpack_require__(0),
            __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__ = __webpack_require__(11),
            __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__),
            __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__ = __webpack_require__(259),
            __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__),
            __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__ = __webpack_require__(260),
            __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__),
            __WEBPACK_IMPORTED_MODULE_7__src_config__ = __webpack_require__(3);

        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }).apply(this, arguments)
        }
        var ADAPTER_VERSION = 17,
            BIDDER_CODE = "criteo",
            CDB_ENDPOINT = "//bidder.criteo.com/cdb",
            CRITEO_VENDOR_ID = 91,
            INTEGRATION_MODES = {
                amp: 1
            },
            PROFILE_ID_INLINE = 207,
            PROFILE_ID_PUBLISHERTAG = 185,
            PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js",
            FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----",
            spec = {
                code: BIDDER_CODE,
                isBidRequestValid: function(t) {
                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId)
                },
                buildRequests: function(t, e) {
                    var i, r;
                    if (_extends(e, {
                            ceh: __WEBPACK_IMPORTED_MODULE_7__src_config__.b.getConfig("criteo.ceh")
                        }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function() {
                            Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader__.a)(PUBLISHER_TAG_URL, BIDDER_CODE)
                        }, e.timeout)), publisherTagAvailable()) {
                        var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "2.25.0");
                        i = n.buildCdbUrl(), r = n.buildCdbRequest()
                    } else {
                        var s = buildContext(t);
                        i = buildCdbUrl(s), r = buildCdbRequest(s, t, e)
                    }
                    if (r) return {
                        method: "POST",
                        url: i,
                        data: r,
                        bidRequests: t
                    }
                },
                interpretResponse: function(t, n) {
                    var e = t.body || t;
                    if (publisherTagAvailable()) {
                        var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(n);
                        if (i) return i.interpretResponse(e, n)
                    }
                    var s = [];
                    return e && e.slots && __WEBPACK_IMPORTED_MODULE_3__src_utils__.isArray(e.slots) && e.slots.forEach(function(e) {
                        var t = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(n.bidRequests, function(t) {
                                return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                            }),
                            i = t.bidId,
                            r = {
                                requestId: i,
                                adId: e.bidId || __WEBPACK_IMPORTED_MODULE_3__src_utils__.getUniqueIdentifierStr(),
                                cpm: e.cpm,
                                currency: e.currency,
                                netRevenue: !0,
                                ttl: e.ttl || 60,
                                creativeId: i,
                                width: e.width,
                                height: e.height
                            };
                        e.native ? r.ad = createNativeAd(i, e.native, t.params.nativeCallback) : r.ad = e.creative, s.push(r)
                    }), s
                },
                onTimeout: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout()
                },
                onBidWon: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                },
                onSetTargeting: function(t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                }
            };

        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
        }

        function buildContext(t) {
            var e = __WEBPACK_IMPORTED_MODULE_3__src_utils__.getTopWindowUrl(),
                i = Object(__WEBPACK_IMPORTED_MODULE_2__src_url__.c)(e).search,
                r = {
                    url: e,
                    debug: "1" === i.pbt_debug,
                    noLog: "1" === i.pbt_nolog,
                    integrationMode: void 0
                };
            return t.forEach(function(t) {
                t.params.integrationMode && (r.integrationMode = t.params.integrationMode)
            }), r
        }

        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("2.25.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.integrationMode in INTEGRATION_MODES && (e += "&im=" + INTEGRATION_MODES[t.integrationMode]), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
        }

        function buildCdbRequest(t, e, i) {
            var r, n = {
                publisher: {
                    url: t.url
                },
                slots: e.map(function(t) {
                    r = t.params.networkId || r;
                    var e = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId,
                        sizes: t.sizes.map(function(t) {
                            return t[0] + "x" + t[1]
                        })
                    };
                    return t.params.zoneId && (e.zoneid = t.params.zoneId), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback && (e.native = !0), e
                })
            };
            return r && (n.publisher.networkid = r), n.user = {}, i && i.ceh && (n.user.ceh = i.ceh), i && i.gdprConsent && (n.gdprConsent = {}, void 0 !== i.gdprConsent.gdprApplies && (n.gdprConsent.gdprApplies = !!i.gdprConsent.gdprApplies), i.gdprConsent.vendorData && i.gdprConsent.vendorData.vendorConsents && void 0 !== i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (n.gdprConsent.consentGiven = !!i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), void 0 !== i.gdprConsent.consentString && (n.gdprConsent.consentData = i.gdprConsent.consentString)), n
        }

        function createNativeAd(t, e, i) {
            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, window.criteo_prebid_native_slots[t] = {
                callback: i,
                payload: e
            }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["'.concat(t, '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>')
        }

        function cryptoVerify(t, e, i) {
            var r = new __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default.a;
            return r.setPublicKey(t), r.verify(i, e, __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default.a)
        }

        function validateFastBid(t) {
            var e = t.indexOf("\n"),
                i = t.substr(0, e).trim();
            if ("// Hash: " !== i.substr(0, 9)) return __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("No hash found in FastBid"), !1;
            var r = i.substr(9),
                n = t.substr(e + 1);
            try {
                return cryptoVerify(FAST_BID_PUBKEY, r, n)
            } catch (t) {
                return void __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Failed to verify Criteo FastBid")
            }
        }

        function tryGetCriteoFastBid() {
            try {
                var fastBid = localStorage.getItem("criteo_fast_bid");
                null !== fastBid && (!1 === validateFastBid(fastBid) ? (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Invalid Criteo FastBid found"), localStorage.removeItem("criteo_fast_bid")) : (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logInfo("Using Criteo FastBid"), eval(fastBid)))
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__.registerBidder)(spec)
    },
    259: function(t, e, i) {
        (function(t) {
            "use strict";
            var e = "0123456789abcdefghijklmnopqrstuvwxyz";

            function h(t) {
                return e.charAt(t)
            }

            function i(t, e) {
                return t & e
            }

            function u(t, e) {
                return t | e
            }

            function r(t, e) {
                return t ^ e
            }

            function n(t, e) {
                return t & ~e
            }

            function s(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function o(t) {
                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                return e
            }
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            function c(t) {
                var e, i, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), r += a.charAt(i >> 6) + a.charAt(63 & i);
                for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += a.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), r += a.charAt(i >> 2) + a.charAt((3 & i) << 4)); 0 < (3 & r.length);) r += "=";
                return r
            }

            function f(t) {
                var e, i = "",
                    r = 0,
                    n = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var s = a.indexOf(t.charAt(e));
                    s < 0 || (r = 0 == r ? (i += h(s >> 2), n = 3 & s, 1) : 1 == r ? (i += h(n << 2 | s >> 4), n = 15 & s, 2) : 2 == r ? (i += h(n), i += h(s >> 2), n = 3 & s, 3) : (i += h(n << 2 | s >> 4), i += h(15 & s), 0))
                }
                return 1 == r && (i += h(n << 2)), i
            }
            var l, p = function(t, e) {
                return (p = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            };
            var d, g = function(t) {
                    var e;
                    if (void 0 === l) {
                        var i = "0123456789ABCDEF",
                            r = " \f\n\r\tÂ \u2028\u2029";
                        for (l = {}, e = 0; e < 16; ++e) l[i.charAt(e)] = e;
                        for (i = i.toLowerCase(), e = 10; e < 16; ++e) l[i.charAt(e)] = e;
                        for (e = 0; e < r.length; ++e) l[r.charAt(e)] = -1
                    }
                    var n = [],
                        s = 0,
                        o = 0;
                    for (e = 0; e < t.length; ++e) {
                        var a = t.charAt(e);
                        if ("=" == a) break;
                        if (-1 != (a = l[a])) {
                            if (void 0 === a) throw new Error("Illegal character at offset " + e);
                            s |= a, 2 <= ++o ? (n[n.length] = s, o = s = 0) : s <<= 4
                        }
                    }
                    if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
                    return n
                },
                v = {
                    decode: function(t) {
                        var e;
                        if (void 0 === d) {
                            var i = "= \f\n\r\tÂ \u2028\u2029";
                            for (d = Object.create(null), e = 0; e < 64; ++e) d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                            for (e = 0; e < i.length; ++e) d[i.charAt(e)] = -1
                        }
                        var r = [],
                            n = 0,
                            s = 0;
                        for (e = 0; e < t.length; ++e) {
                            var o = t.charAt(e);
                            if ("=" == o) break;
                            if (-1 != (o = d[o])) {
                                if (void 0 === o) throw new Error("Illegal character at offset " + e);
                                n |= o, 4 <= ++s ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, s = n = 0) : n <<= 6
                            }
                        }
                        switch (s) {
                            case 1:
                                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                            case 2:
                                r[r.length] = n >> 10;
                                break;
                            case 3:
                                r[r.length] = n >> 16, r[r.length] = n >> 8 & 255
                        }
                        return r
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function(t) {
                        var e = v.re.exec(t);
                        if (e)
                            if (e[1]) t = e[1];
                            else {
                                if (!e[2]) throw new Error("RegExp out of sync");
                                t = e[2]
                            }
                        return v.decode(t)
                    }
                },
                _ = 1e13,
                y = (m.prototype.mulAdd = function(t, e) {
                    var i, r, n = this.buf,
                        s = n.length;
                    for (i = 0; i < s; ++i)(r = n[i] * t + e) < _ ? e = 0 : r -= (e = 0 | r / _) * _, n[i] = r;
                    0 < e && (n[i] = e)
                }, m.prototype.sub = function(t) {
                    var e, i, r = this.buf,
                        n = r.length;
                    for (e = 0; e < n; ++e) t = (i = r[e] - t) < 0 ? (i += _, 1) : 0, r[e] = i;
                    for (; 0 === r[r.length - 1];) r.pop()
                }, m.prototype.toString = function(t) {
                    if (10 != (t || 10)) throw new Error("only base 10 is supported");
                    for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) i += (_ + e[r]).toString().substring(1);
                    return i
                }, m.prototype.valueOf = function() {
                    for (var t = this.buf, e = 0, i = t.length - 1; 0 <= i; --i) e = e * _ + t[i];
                    return e
                }, m.prototype.simplify = function() {
                    var t = this.buf;
                    return 1 == t.length ? t[0] : this
                }, m);

            function m(t) {
                this.buf = [+t || 0]
            }
            var b = "â€¦",
                E = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                T = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function S(t, e) {
                return t.length > e && (t = t.substring(0, e) + b), t
            }
            var D = (w.prototype.get = function(t) {
                if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
            }, w.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }, w.prototype.hexDump = function(t, e, i) {
                for (var r = "", n = t; n < e; ++n)
                    if (r += this.hexByte(this.get(n)), !0 !== i) switch (15 & n) {
                        case 7:
                            r += "  ";
                            break;
                        case 15:
                            r += "\n";
                            break;
                        default:
                            r += " "
                    }
                    return r
            }, w.prototype.isASCII = function(t, e) {
                for (var i = t; i < e; ++i) {
                    var r = this.get(i);
                    if (r < 32 || 176 < r) return !1
                }
                return !0
            }, w.prototype.parseStringISO = function(t, e) {
                for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                return i
            }, w.prototype.parseStringUTF = function(t, e) {
                for (var i = "", r = t; r < e;) {
                    var n = this.get(r++);
                    i += n < 128 ? String.fromCharCode(n) : 191 < n && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                }
                return i
            }, w.prototype.parseStringBMP = function(t, e) {
                for (var i, r, n = "", s = t; s < e;) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
                return n
            }, w.prototype.parseTime = function(t, e, i) {
                var r = this.parseStringISO(t, e),
                    n = (i ? E : T).exec(r);
                return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r
            }, w.prototype.parseInteger = function(t, e) {
                for (var i, r = this.get(t), n = 127 < r, s = n ? 255 : 0, o = ""; r == s && ++t < e;) r = this.get(t);
                if (0 == (i = e - t)) return n ? -1 : 0;
                if (4 < i) {
                    for (o = r, i <<= 3; 0 == (128 & (+o ^ s));) o = +o << 1, --i;
                    o = "(" + i + " bit)\n"
                }
                n && (r -= 256);
                for (var a = new y(r), h = t + 1; h < e; ++h) a.mulAdd(256, this.get(h));
                return o + a.toString()
            }, w.prototype.parseBitString = function(t, e, i) {
                for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                    for (var a = this.get(o), h = o == e - 1 ? r : 0, u = 7; h <= u; --u) s += a >> u & 1 ? "1" : "0";
                    if (s.length > i) return n + S(s, i)
                }
                return n + s
            }, w.prototype.parseOctetString = function(t, e, i) {
                if (this.isASCII(t, e)) return S(this.parseStringISO(t, e), i);
                var r = e - t,
                    n = "(" + r + " byte)\n";
                (i /= 2) < r && (e = t + i);
                for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
                return i < r && (n += b), n
            }, w.prototype.parseOID = function(t, e, i) {
                for (var r = "", n = new y, s = 0, o = t; o < e; ++o) {
                    var a = this.get(o);
                    if (n.mulAdd(128, 127 & a), s += 7, !(128 & a)) {
                        if ("" === r)
                            if ((n = n.simplify()) instanceof y) n.sub(80), r = "2." + n.toString();
                            else {
                                var h = n < 80 ? n < 40 ? 0 : 1 : 2;
                                r = h + "." + (n - 40 * h)
                            } else r += "." + n.toString();
                        if (r.length > i) return S(r, i);
                        n = new y, s = 0
                    }
                }
                return 0 < s && (r += ".incomplete"), r
            }, w);

            function w(t, e) {
                this.hexDigits = "0123456789ABCDEF", t instanceof w ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e)
            }
            var B = (O.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                    case 0:
                        switch (this.tag.tagNumber) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString"
                        }
                        return "Universal_" + this.tag.tagNumber.toString();
                    case 1:
                        return "Application_" + this.tag.tagNumber.toString();
                    case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";
                    case 3:
                        return "Private_" + this.tag.tagNumber.toString()
                }
            }, O.prototype.content = function(t) {
                if (void 0 === this.tag) return null;
                void 0 === t && (t = 1 / 0);
                var e = this.posContent(),
                    i = Math.abs(this.length);
                if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(e) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(e, e + i);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                    case 6:
                        return this.stream.parseOID(e, e + i, t);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return S(this.stream.parseStringUTF(e, e + i), t);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return S(this.stream.parseStringISO(e, e + i), t);
                    case 30:
                        return S(this.stream.parseStringBMP(e, e + i), t);
                    case 23:
                    case 24:
                        return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                }
                return null
            }, O.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }, O.prototype.toPrettyString = function(t) {
                void 0 === t && (t = "");
                var e = t + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                    t += "  ";
                    for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t)
                }
                return e
            }, O.prototype.posStart = function() {
                return this.stream.pos
            }, O.prototype.posContent = function() {
                return this.stream.pos + this.header
            }, O.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }, O.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }, O.decodeLength = function(t) {
                var e = t.get(),
                    i = 127 & e;
                if (i == e) return i;
                if (6 < i) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 == i) return null;
                for (var r = e = 0; r < i; ++r) e = 256 * e + t.get();
                return e
            }, O.prototype.getHexStringValue = function() {
                var t = this.toHexString(),
                    e = 2 * this.header,
                    i = 2 * this.length;
                return t.substr(e, i)
            }, O.decode = function(t) {
                var r;

                function e() {
                    var t = [];
                    if (null !== s) {
                        for (var e = o + s; r.pos < e;) t[t.length] = O.decode(r);
                        if (r.pos != e) throw new Error("Content size is not correct for container starting at offset " + o)
                    } else try {
                        for (;;) {
                            var i = O.decode(r);
                            if (i.tag.isEOC()) break;
                            t[t.length] = i
                        }
                        s = o - r.pos
                    } catch (t) {
                        throw new Error("Exception while decoding undefined length content: " + t)
                    }
                    return t
                }
                r = t instanceof D ? t : new D(t, 0);
                var i = new D(r),
                    n = new I(r),
                    s = O.decodeLength(r),
                    o = r.pos,
                    a = o - i.pos,
                    h = null;
                if (n.tagConstructed) h = e();
                else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber)) try {
                    if (3 == n.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    h = e();
                    for (var u = 0; u < h.length; ++u)
                        if (h[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                } catch (t) {
                    h = null
                }
                if (null === h) {
                    if (null === s) throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                    r.pos = o + Math.abs(s)
                }
                return new O(i, a, s, n, h)
            }, O);

            function O(t, e, i, r, n) {
                if (!(r instanceof I)) throw new Error("Invalid tag value.");
                this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n
            }
            var R, I = (A.prototype.isUniversal = function() {
                return 0 === this.tagClass
            }, A.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            }, A);

            function A(t) {
                var e = t.get();
                if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                    for (var i = new y; e = t.get(), i.mulAdd(128, 127 & e), 128 & e;);
                    this.tagNumber = i.simplify()
                }
            }
            var x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                P = (1 << 26) / x[x.length - 1],
                M = (C.prototype.toString = function(t) {
                    if (this.s < 0) return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t) e = 4;
                    else if (8 == t) e = 3;
                    else if (2 == t) e = 1;
                    else if (32 == t) e = 5;
                    else {
                        if (4 != t) return this.toRadix(t);
                        e = 2
                    }
                    var i, r = (1 << e) - 1,
                        n = !1,
                        s = "",
                        o = this.t,
                        a = this.DB - o * this.DB % e;
                    if (0 < o--)
                        for (a < this.DB && 0 < (i = this[o] >> a) && (n = !0, s = h(i)); 0 <= o;) a < e ? (i = (this[o] & (1 << a) - 1) << e - a, i |= this[--o] >> (a += this.DB - e)) : (i = this[o] >> (a -= e) & r, a <= 0 && (a += this.DB, --o)), 0 < i && (n = !0), n && (s += h(i));
                    return n ? s : "0"
                }, C.prototype.negate = function() {
                    var t = F();
                    return C.ZERO.subTo(this, t), t
                }, C.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this
                }, C.prototype.compareTo = function(t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var i = this.t;
                    if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                    for (; 0 <= --i;)
                        if (0 != (e = this[i] - t[i])) return e;
                    return 0
                }, C.prototype.bitLength = function() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + $(this[this.t - 1] ^ this.s & this.DM)
                }, C.prototype.mod = function(t) {
                    var e = F();
                    return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(C.ZERO) && t.subTo(e, e), e
                }, C.prototype.modPowInt = function(t, e) {
                    var i;
                    return i = t < 256 || e.isEven() ? new L(e) : new q(e), this.exp(t, i)
                }, C.prototype.clone = function() {
                    var t = F();
                    return this.copyTo(t), t
                }, C.prototype.intValue = function() {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }, C.prototype.byteValue = function() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }, C.prototype.shortValue = function() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }, C.prototype.signum = function() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }, C.prototype.toByteArray = function() {
                    var t = this.t,
                        e = [];
                    e[0] = this.s;
                    var i, r = this.DB - t * this.DB % 8,
                        n = 0;
                    if (0 < t--)
                        for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t;) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, (0 < n || i != this.s) && (e[n++] = i);
                    return e
                }, C.prototype.equals = function(t) {
                    return 0 == this.compareTo(t)
                }, C.prototype.min = function(t) {
                    return this.compareTo(t) < 0 ? this : t
                }, C.prototype.max = function(t) {
                    return 0 < this.compareTo(t) ? this : t
                }, C.prototype.and = function(t) {
                    var e = F();
                    return this.bitwiseTo(t, i, e), e
                }, C.prototype.or = function(t) {
                    var e = F();
                    return this.bitwiseTo(t, u, e), e
                }, C.prototype.xor = function(t) {
                    var e = F();
                    return this.bitwiseTo(t, r, e), e
                }, C.prototype.andNot = function(t) {
                    var e = F();
                    return this.bitwiseTo(t, n, e), e
                }, C.prototype.not = function() {
                    for (var t = F(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                    return t.t = this.t, t.s = ~this.s, t
                }, C.prototype.shiftLeft = function(t) {
                    var e = F();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                }, C.prototype.shiftRight = function(t) {
                    var e = F();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                }, C.prototype.getLowestSetBit = function() {
                    for (var t = 0; t < this.t; ++t)
                        if (0 != this[t]) return t * this.DB + s(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1
                }, C.prototype.bitCount = function() {
                    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e);
                    return t
                }, C.prototype.testBit = function(t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                }, C.prototype.setBit = function(t) {
                    return this.changeBit(t, u)
                }, C.prototype.clearBit = function(t) {
                    return this.changeBit(t, n)
                }, C.prototype.flipBit = function(t) {
                    return this.changeBit(t, r)
                }, C.prototype.add = function(t) {
                    var e = F();
                    return this.addTo(t, e), e
                }, C.prototype.subtract = function(t) {
                    var e = F();
                    return this.subTo(t, e), e
                }, C.prototype.multiply = function(t) {
                    var e = F();
                    return this.multiplyTo(t, e), e
                }, C.prototype.divide = function(t) {
                    var e = F();
                    return this.divRemTo(t, e, null), e
                }, C.prototype.remainder = function(t) {
                    var e = F();
                    return this.divRemTo(t, null, e), e
                }, C.prototype.divideAndRemainder = function(t) {
                    var e = F(),
                        i = F();
                    return this.divRemTo(t, e, i), [e, i]
                }, C.prototype.modPow = function(t, e) {
                    var i, r, n = t.bitLength(),
                        s = Y(1);
                    if (n <= 0) return s;
                    i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new L(e) : e.isEven() ? new H(e) : new q(e);
                    var o = [],
                        a = 3,
                        h = i - 1,
                        u = (1 << i) - 1;
                    if (o[1] = r.convert(this), 1 < i) {
                        var c = F();
                        for (r.sqrTo(o[1], c); a <= u;) o[a] = F(), r.mulTo(c, o[a - 2], o[a]), a += 2
                    }
                    var f, l, p = t.t - 1,
                        d = !0,
                        g = F();
                    for (n = $(t[p]) - 1; 0 <= p;) {
                        for (h <= n ? f = t[p] >> n - h & u : (f = (t[p] & (1 << n + 1) - 1) << h - n, 0 < p && (f |= t[p - 1] >> this.DB + n - h)), a = i; 0 == (1 & f);) f >>= 1, --a;
                        if ((n -= a) < 0 && (n += this.DB, --p), d) o[f].copyTo(s), d = !1;
                        else {
                            for (; 1 < a;) r.sqrTo(s, g), r.sqrTo(g, s), a -= 2;
                            0 < a ? r.sqrTo(s, g) : (l = s, s = g, g = l), r.mulTo(g, o[f], s)
                        }
                        for (; 0 <= p && 0 == (t[p] & 1 << n);) r.sqrTo(s, g), l = s, s = g, g = l, --n < 0 && (n = this.DB - 1, --p)
                    }
                    return r.revert(s)
                }, C.prototype.modInverse = function(t) {
                    var e = t.isEven();
                    if (this.isEven() && e || 0 == t.signum()) return C.ZERO;
                    for (var i = t.clone(), r = this.clone(), n = Y(1), s = Y(0), o = Y(0), a = Y(1); 0 != i.signum();) {
                        for (; i.isEven();) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                        for (; r.isEven();) r.rShiftTo(1, r), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                        0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(a, s)) : (r.subTo(i, r), e && o.subTo(n, o), a.subTo(s, a))
                    }
                    return 0 != r.compareTo(C.ONE) ? C.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a
                }, C.prototype.pow = function(t) {
                    return this.exp(t, new V)
                }, C.prototype.gcd = function(t) {
                    var e = this.s < 0 ? this.negate() : this.clone(),
                        i = t.s < 0 ? t.negate() : t.clone();
                    if (e.compareTo(i) < 0) {
                        var r = e;
                        e = i, i = r
                    }
                    var n = e.getLowestSetBit(),
                        s = i.getLowestSetBit();
                    if (s < 0) return e;
                    for (n < s && (s = n), 0 < s && (e.rShiftTo(s, e), i.rShiftTo(s, i)); 0 < e.signum();) 0 < (n = e.getLowestSetBit()) && e.rShiftTo(n, e), 0 < (n = i.getLowestSetBit()) && i.rShiftTo(n, i), 0 <= e.compareTo(i) ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                    return 0 < s && i.lShiftTo(s, i), i
                }, C.prototype.isProbablePrime = function(t) {
                    var e, i = this.abs();
                    if (1 == i.t && i[0] <= x[x.length - 1]) {
                        for (e = 0; e < x.length; ++e)
                            if (i[0] == x[e]) return !0;
                        return !1
                    }
                    if (i.isEven()) return !1;
                    for (e = 1; e < x.length;) {
                        for (var r = x[e], n = e + 1; n < x.length && r < P;) r *= x[n++];
                        for (r = i.modInt(r); e < n;)
                            if (r % x[e++] == 0) return !1
                    }
                    return i.millerRabin(t)
                }, C.prototype.copyTo = function(t) {
                    for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                    t.t = this.t, t.s = this.s
                }, C.prototype.fromInt = function(t) {
                    this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                }, C.prototype.fromString = function(t, e) {
                    var i;
                    if (16 == e) i = 4;
                    else if (8 == e) i = 3;
                    else if (256 == e) i = 8;
                    else if (2 == e) i = 1;
                    else if (32 == e) i = 5;
                    else {
                        if (4 != e) return void this.fromRadix(t, e);
                        i = 2
                    }
                    this.t = 0, this.s = 0;
                    for (var r = t.length, n = !1, s = 0; 0 <= --r;) {
                        var o = 8 == i ? 255 & +t[r] : Z(t, r);
                        o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB))
                    }
                    8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), n && C.ZERO.subTo(this, this)
                }, C.prototype.clamp = function() {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
                }, C.prototype.dlShiftTo = function(t, e) {
                    var i;
                    for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                    for (i = t - 1; 0 <= i; --i) e[i] = 0;
                    e.t = this.t + t, e.s = this.s
                }, C.prototype.drShiftTo = function(t, e) {
                    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                    e.t = Math.max(this.t - t, 0), e.s = this.s
                }, C.prototype.lShiftTo = function(t, e) {
                    for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> r | o, o = (this[a] & n) << i;
                    for (a = s - 1; 0 <= a; --a) e[a] = 0;
                    e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp()
                }, C.prototype.rShiftTo = function(t, e) {
                    e.s = this.s;
                    var i = Math.floor(t / this.DB);
                    if (i >= this.t) e.t = 0;
                    else {
                        var r = t % this.DB,
                            n = this.DB - r,
                            s = (1 << r) - 1;
                        e[0] = this[i] >> r;
                        for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                        0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp()
                    }
                }, C.prototype.subTo = function(t, e) {
                    for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                    if (t.t < this.t) {
                        for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                        r += this.s
                    } else {
                        for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                        r -= t.s
                    }
                    e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : 0 < r && (e[i++] = r), e.t = i, e.clamp()
                }, C.prototype.multiplyTo = function(t, e) {
                    var i = this.abs(),
                        r = t.abs(),
                        n = i.t;
                    for (e.t = n + r.t; 0 <= --n;) e[n] = 0;
                    for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                    e.s = 0, e.clamp(), this.s != t.s && C.ZERO.subTo(e, e)
                }, C.prototype.squareTo = function(t) {
                    for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i;) t[i] = 0;
                    for (i = 0; i < e.t - 1; ++i) {
                        var r = e.am(i, e[i], t, 2 * i, 0, 1);
                        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                    }
                    0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
                }, C.prototype.divRemTo = function(t, e, i) {
                    var r = t.abs();
                    if (!(r.t <= 0)) {
                        var n = this.abs();
                        if (n.t < r.t) return null != e && e.fromInt(0), void(null != i && this.copyTo(i));
                        null == i && (i = F());
                        var s = F(),
                            o = this.s,
                            a = t.s,
                            h = this.DB - $(r[r.t - 1]);
                        0 < h ? (r.lShiftTo(h, s), n.lShiftTo(h, i)) : (r.copyTo(s), n.copyTo(i));
                        var u = s.t,
                            c = s[u - 1];
                        if (0 != c) {
                            var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0),
                                l = this.FV / f,
                                p = (1 << this.F1) / f,
                                d = 1 << this.F2,
                                g = i.t,
                                v = g - u,
                                _ = null == e ? F() : e;
                            for (s.dlShiftTo(v, _), 0 <= i.compareTo(_) && (i[i.t++] = 1, i.subTo(_, i)), C.ONE.dlShiftTo(u, _), _.subTo(s, s); s.t < u;) s[s.t++] = 0;
                            for (; 0 <= --v;) {
                                var y = i[--g] == c ? this.DM : Math.floor(i[g] * l + (i[g - 1] + d) * p);
                                if ((i[g] += s.am(0, y, i, v, 0, u)) < y)
                                    for (s.dlShiftTo(v, _), i.subTo(_, i); i[g] < --y;) i.subTo(_, i)
                            }
                            null != e && (i.drShiftTo(u, e), o != a && C.ZERO.subTo(e, e)), i.t = u, i.clamp(), 0 < h && i.rShiftTo(h, i), o < 0 && C.ZERO.subTo(i, i)
                        }
                    }
                }, C.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                }, C.prototype.isEven = function() {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s)
                }, C.prototype.exp = function(t, e) {
                    if (4294967295 < t || t < 1) return C.ONE;
                    var i = F(),
                        r = F(),
                        n = e.convert(this),
                        s = $(t) - 1;
                    for (n.copyTo(i); 0 <= --s;)
                        if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i);
                        else {
                            var o = i;
                            i = r, r = o
                        }
                    return e.revert(i)
                }, C.prototype.chunkSize = function(t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                }, C.prototype.toRadix = function(t) {
                    if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                    var e = this.chunkSize(t),
                        i = Math.pow(t, e),
                        r = Y(i),
                        n = F(),
                        s = F(),
                        o = "";
                    for (this.divRemTo(r, n, s); 0 < n.signum();) o = (i + s.intValue()).toString(t).substr(1) + o, n.divRemTo(r, n, s);
                    return s.intValue().toString(t) + o
                }, C.prototype.fromRadix = function(t, e) {
                    this.fromInt(0), null == e && (e = 10);
                    for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
                        var h = Z(t, a);
                        h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + h, ++s >= i && (this.dMultiply(r), this.dAddOffset(o, 0), o = s = 0))
                    }
                    0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && C.ZERO.subTo(this, this)
                }, C.prototype.fromNumber = function(t, e, i) {
                    if ("number" == typeof e)
                        if (t < 2) this.fromInt(1);
                        else
                            for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(C.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(C.ONE.shiftLeft(t - 1), this);
                    else {
                        var r = [],
                            n = 7 & t;
                        r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, this.fromString(r, 256)
                    }
                }, C.prototype.bitwiseTo = function(t, e, i) {
                    var r, n, s = Math.min(t.t, this.t);
                    for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
                    if (t.t < this.t) {
                        for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                        i.t = this.t
                    } else {
                        for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                        i.t = t.t
                    }
                    i.s = e(this.s, t.s), i.clamp()
                }, C.prototype.changeBit = function(t, e) {
                    var i = C.ONE.shiftLeft(t);
                    return this.bitwiseTo(i, e, i), i
                }, C.prototype.addTo = function(t, e) {
                    for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                    if (t.t < this.t) {
                        for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                        r += this.s
                    } else {
                        for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                        r += t.s
                    }
                    e.s = r < 0 ? -1 : 0, 0 < r ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
                }, C.prototype.dMultiply = function(t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                }, C.prototype.dAddOffset = function(t, e) {
                    if (0 != t) {
                        for (; this.t <= e;) this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                    }
                }, C.prototype.multiplyLowerTo = function(t, e, i) {
                    var r = Math.min(this.t + t.t, e);
                    for (i.s = 0, i.t = r; 0 < r;) i[--r] = 0;
                    for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                    for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                    i.clamp()
                }, C.prototype.multiplyUpperTo = function(t, e, i) {
                    --e;
                    var r = i.t = this.t + t.t - e;
                    for (i.s = 0; 0 <= --r;) i[r] = 0;
                    for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                    i.clamp(), i.drShiftTo(1, i)
                }, C.prototype.modInt = function(t) {
                    if (t <= 0) return 0;
                    var e = this.DV % t,
                        i = this.s < 0 ? t - 1 : 0;
                    if (0 < this.t)
                        if (0 == e) i = this[0] % t;
                        else
                            for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                    return i
                }, C.prototype.millerRabin = function(t) {
                    var e = this.subtract(C.ONE),
                        i = e.getLowestSetBit();
                    if (i <= 0) return !1;
                    var r = e.shiftRight(i);
                    x.length < (t = t + 1 >> 1) && (t = x.length);
                    for (var n = F(), s = 0; s < t; ++s) {
                        n.fromInt(x[Math.floor(Math.random() * x.length)]);
                        var o = n.modPow(r, this);
                        if (0 != o.compareTo(C.ONE) && 0 != o.compareTo(e)) {
                            for (var a = 1; a++ < i && 0 != o.compareTo(e);)
                                if (0 == (o = o.modPowInt(2, this)).compareTo(C.ONE)) return !1;
                            if (0 != o.compareTo(e)) return !1
                        }
                    }
                    return !0
                }, C.prototype.square = function() {
                    var t = F();
                    return this.squareTo(t), t
                }, C.prototype.gcda = function(t, e) {
                    var i = this.s < 0 ? this.negate() : this.clone(),
                        r = t.s < 0 ? t.negate() : t.clone();
                    if (i.compareTo(r) < 0) {
                        var n = i;
                        i = r, r = n
                    }
                    var s = i.getLowestSetBit(),
                        o = r.getLowestSetBit();
                    if (o < 0) e(i);
                    else {
                        s < o && (o = s), 0 < o && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                        var a = function() {
                            0 < (s = i.getLowestSetBit()) && i.rShiftTo(s, i), 0 < (s = r.getLowestSetBit()) && r.rShiftTo(s, r), 0 <= i.compareTo(r) ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 0 < i.signum() ? setTimeout(a, 0) : (0 < o && r.lShiftTo(o, r), setTimeout(function() {
                                e(r)
                            }, 0))
                        };
                        setTimeout(a, 10)
                    }
                }, C.prototype.fromNumberAsync = function(t, e, i, r) {
                    if ("number" == typeof e)
                        if (t < 2) this.fromInt(1);
                        else {
                            this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(C.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0);
                            var n = this,
                                s = function() {
                                    n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(C.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout(function() {
                                        r()
                                    }, 0) : setTimeout(s, 0)
                                };
                            setTimeout(s, 0)
                        } else {
                        var o = [],
                            a = 7 & t;
                        o.length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, this.fromString(o, 256)
                    }
                }, C);

            function C(t, e, i) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            var V = (N.prototype.convert = function(t) {
                return t
            }, N.prototype.revert = function(t) {
                return t
            }, N.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i)
            }, N.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }, N);

            function N() {}
            var L = (j.prototype.convert = function(t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }, j.prototype.revert = function(t) {
                return t
            }, j.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }, j.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, j.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, j);

            function j(t) {
                this.m = t
            }
            var q = (U.prototype.convert = function(t) {
                var e = F();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(M.ZERO) && this.m.subTo(e, e), e
            }, U.prototype.revert = function(t) {
                var e = F();
                return t.copyTo(e), this.reduce(e), e
            }, U.prototype.reduce = function(t) {
                for (; t.t <= this.mt2;) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var i = 32767 & t[e],
                        r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
                }
                t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
            }, U.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, U.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, U);

            function U(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
            }
            var H = (K.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = F();
                return t.copyTo(e), this.reduce(e), e
            }, K.prototype.revert = function(t) {
                return t
            }, K.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t)
            }, K.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, K.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, K);

            function K(t) {
                this.m = t, this.r2 = F(), this.q3 = F(), M.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
            }

            function F() {
                return new M(null)
            }

            function k(t, e) {
                return new M(t, e)
            }
            R = "Microsoft Internet Explorer" == navigator.appName ? (M.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 32767 & e, a = e >> 15; 0 <= --s;) {
                    var h = 32767 & this[t],
                        u = this[t++] >> 15,
                        c = a * h + u * o;
                    n = ((h = o * h + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>> 30) + (c >>> 15) + a * u + (n >>> 30), i[r++] = 1073741823 & h
                }
                return n
            }, 30) : "Netscape" != navigator.appName ? (M.prototype.am = function(t, e, i, r, n, s) {
                for (; 0 <= --s;) {
                    var o = e * this[t++] + i[r] + n;
                    n = Math.floor(o / 67108864), i[r++] = 67108863 & o
                }
                return n
            }, 26) : (M.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 16383 & e, a = e >> 14; 0 <= --s;) {
                    var h = 16383 & this[t],
                        u = this[t++] >> 14,
                        c = a * h + u * o;
                    n = ((h = o * h + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + a * u, i[r++] = 268435455 & h
                }
                return n
            }, 28), M.prototype.DB = R, M.prototype.DM = (1 << R) - 1, M.prototype.DV = 1 << R;
            M.prototype.FV = Math.pow(2, 52), M.prototype.F1 = 52 - R, M.prototype.F2 = 2 * R - 52;
            var z, W, G = [];
            for (z = "0".charCodeAt(0), W = 0; W <= 9; ++W) G[z++] = W;
            for (z = "a".charCodeAt(0), W = 10; W < 36; ++W) G[z++] = W;
            for (z = "A".charCodeAt(0), W = 10; W < 36; ++W) G[z++] = W;

            function Z(t, e) {
                var i = G[t.charCodeAt(e)];
                return null == i ? -1 : i
            }

            function Y(t) {
                var e = F();
                return e.fromInt(t), e
            }

            function $(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
            }
            M.ZERO = Y(0), M.ONE = Y(1);
            var Q = (J.prototype.init = function(t) {
                var e, i, r;
                for (e = 0; e < 256; ++e) this.S[e] = e;
                for (e = i = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
                this.i = 0, this.j = 0
            }, J.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
            }, J);

            function J() {
                this.i = 0, this.j = 0, this.S = []
            }
            var X, tt, et = 256,
                it = null;
            if (null == it) {
                it = [];
                var rt = void(tt = 0);
                if (window.crypto && window.crypto.getRandomValues) {
                    var nt = new Uint32Array(256);
                    for (window.crypto.getRandomValues(nt), rt = 0; rt < nt.length; ++rt) it[tt++] = 255 & nt[rt]
                }
                var st = function(t) {
                    if (this.count = this.count || 0, 256 <= this.count || et <= tt) window.removeEventListener ? window.removeEventListener("mousemove", st, !1) : window.detachEvent && window.detachEvent("onmousemove", st);
                    else try {
                        var e = t.x + t.y;
                        it[tt++] = 255 & e, this.count += 1
                    } catch (t) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", st, !1) : window.attachEvent && window.attachEvent("onmousemove", st)
            }

            function ot() {
                if (null == X) {
                    for (X = new Q; tt < et;) {
                        var t = Math.floor(65536 * Math.random());
                        it[tt++] = 255 & t
                    }
                    for (X.init(it), tt = 0; tt < it.length; ++tt) it[tt] = 0;
                    tt = 0
                }
                return X.next()
            }
            var at = (ht.prototype.nextBytes = function(t) {
                for (var e = 0; e < t.length; ++e) t[e] = ot()
            }, ht);

            function ht() {}
            var ut = (ct.prototype.doPublic = function(t) {
                return t.modPowInt(this.e, this.n)
            }, ct.prototype.doPrivate = function(t) {
                if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;) e = e.add(this.p);
                return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
            }, ct.prototype.setPublic = function(t, e) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = k(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
            }, ct.prototype.encrypt = function(t) {
                var e = function(t, e) {
                    if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                    for (var i = [], r = t.length - 1; 0 <= r && 0 < e;) {
                        var n = t.charCodeAt(r--);
                        n < 128 ? i[--e] = n : 127 < n && n < 2048 ? (i[--e] = 63 & n | 128, i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128, i[--e] = n >> 6 & 63 | 128, i[--e] = n >> 12 | 224)
                    }
                    i[--e] = 0;
                    for (var s = new at, o = []; 2 < e;) {
                        for (o[0] = 0; 0 == o[0];) s.nextBytes(o);
                        i[--e] = o[0]
                    }
                    return i[--e] = 2, i[--e] = 0, new M(i)
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e) return null;
                var i = this.doPublic(e);
                if (null == i) return null;
                var r = i.toString(16);
                return 0 == (1 & r.length) ? r : "0" + r
            }, ct.prototype.setPrivate = function(t, e, i) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = k(t, 16), this.e = parseInt(e, 16), this.d = k(i, 16)) : console.error("Invalid RSA private key")
            }, ct.prototype.setPrivateEx = function(t, e, i, r, n, s, o, a) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = k(t, 16), this.e = parseInt(e, 16), this.d = k(i, 16), this.p = k(r, 16), this.q = k(n, 16), this.dmp1 = k(s, 16), this.dmq1 = k(o, 16), this.coeff = k(a, 16)) : console.error("Invalid RSA private key")
            }, ct.prototype.generate = function(t, e) {
                var i = new at,
                    r = t >> 1;
                this.e = parseInt(e, 16);
                for (var n = new M(e, 16);;) {
                    for (; this.p = new M(t - r, 1, i), 0 != this.p.subtract(M.ONE).gcd(n).compareTo(M.ONE) || !this.p.isProbablePrime(10););
                    for (; this.q = new M(r, 1, i), 0 != this.q.subtract(M.ONE).gcd(n).compareTo(M.ONE) || !this.q.isProbablePrime(10););
                    if (this.p.compareTo(this.q) <= 0) {
                        var s = this.p;
                        this.p = this.q, this.q = s
                    }
                    var o = this.p.subtract(M.ONE),
                        a = this.q.subtract(M.ONE),
                        h = o.multiply(a);
                    if (0 == h.gcd(n).compareTo(M.ONE)) {
                        this.n = this.p.multiply(this.q), this.d = n.modInverse(h), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }, ct.prototype.decrypt = function(t) {
                var e = k(t, 16),
                    i = this.doPrivate(e);
                return null == i ? null : function(t, e) {
                    for (var i = t.toByteArray(), r = 0; r < i.length && 0 == i[r];) ++r;
                    if (i.length - r != e - 1 || 2 != i[r]) return null;
                    for (++r; 0 != i[r];)
                        if (++r >= i.length) return null;
                    for (var n = ""; ++r < i.length;) {
                        var s = 255 & i[r];
                        s < 128 ? n += String.fromCharCode(s) : 191 < s && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), r += 2)
                    }
                    return n
                }(i, this.n.bitLength() + 7 >> 3)
            }, ct.prototype.generateAsync = function(t, e, n) {
                var s = new at,
                    o = t >> 1;
                this.e = parseInt(e, 16);
                var a = new M(e, 16),
                    h = this,
                    u = function() {
                        function e() {
                            if (h.p.compareTo(h.q) <= 0) {
                                var t = h.p;
                                h.p = h.q, h.q = t
                            }
                            var e = h.p.subtract(M.ONE),
                                i = h.q.subtract(M.ONE),
                                r = e.multiply(i);
                            0 == r.gcd(a).compareTo(M.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(r), h.dmp1 = h.d.mod(e), h.dmq1 = h.d.mod(i), h.coeff = h.q.modInverse(h.p), setTimeout(function() {
                                n()
                            }, 0)) : setTimeout(u, 0)
                        }
                        var i = function() {
                                h.q = F(), h.q.fromNumberAsync(o, 1, s, function() {
                                    h.q.subtract(M.ONE).gcda(a, function(t) {
                                        0 == t.compareTo(M.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0)
                                    })
                                })
                            },
                            r = function() {
                                h.p = F(), h.p.fromNumberAsync(t - o, 1, s, function() {
                                    h.p.subtract(M.ONE).gcda(a, function(t) {
                                        0 == t.compareTo(M.ONE) && h.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(r, 0)
                                    })
                                })
                            };
                        setTimeout(r, 0)
                    };
                setTimeout(u, 0)
            }, ct.prototype.sign = function(t, e, i) {
                var r = function(t, e) {
                    if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                    for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                    return k("0001" + r + "00" + t, 16)
                }(function(t) {
                    return ft[t] || ""
                }(i) + e(t).toString(), this.n.bitLength() / 4);
                if (null == r) return null;
                var n = this.doPrivate(r);
                if (null == n) return null;
                var s = n.toString(16);
                return 0 == (1 & s.length) ? s : "0" + s
            }, ct.prototype.verify = function(t, e, i) {
                var r = k(e, 16),
                    n = this.doPublic(r);
                return null == n ? null : function(t) {
                    for (var e in ft)
                        if (ft.hasOwnProperty(e)) {
                            var i = ft[e],
                                r = i.length;
                            if (t.substr(0, r) == i) return t.substr(r)
                        }
                    return t
                }(n.toString(16).replace(/^1f+00/, "")) == i(t).toString()
            }, ct);

            function ct() {
                this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
            }
            var ft = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };
            var lt = {};
            lt.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");

                    function r() {}
                    if (r.prototype = e.prototype, t.prototype = new r, (t.prototype.constructor = t).superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), i) {
                        var n;
                        for (n in i) t.prototype[n] = i[n];
                        var s = function() {},
                            o = ["toString", "valueOf"];
                        try {
                            /MSIE/.test(navigator.userAgent) && (s = function(t, e) {
                                for (n = 0; n < o.length; n += 1) {
                                    var i = o[n],
                                        r = e[i];
                                    "function" == typeof r && r != Object.prototype[i] && (t[i] = r)
                                }
                            })
                        } catch (t) {}
                        s(t.prototype, i)
                    }
                }
            };
            var pt = {};
            void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), pt.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", n = 0; n < i; n++) r += "f";
                        e = new M(r, 16).xor(t).add(M.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e)
                }, this.newObject = function(t) {
                    var e = pt.asn1,
                        i = e.DERBoolean,
                        r = e.DERInteger,
                        n = e.DERBitString,
                        s = e.DEROctetString,
                        o = e.DERNull,
                        a = e.DERObjectIdentifier,
                        h = e.DEREnumerated,
                        u = e.DERUTF8String,
                        c = e.DERNumericString,
                        f = e.DERPrintableString,
                        l = e.DERTeletexString,
                        p = e.DERIA5String,
                        d = e.DERUTCTime,
                        g = e.DERGeneralizedTime,
                        v = e.DERSequence,
                        _ = e.DERSet,
                        y = e.DERTaggedObject,
                        m = e.ASN1Util.newObject,
                        b = Object.keys(t);
                    if (1 != b.length) throw "key of param shall be only one.";
                    var E = b[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + E + ":")) throw "undefined key: " + E;
                    if ("bool" == E) return new i(t[E]);
                    if ("int" == E) return new r(t[E]);
                    if ("bitstr" == E) return new n(t[E]);
                    if ("octstr" == E) return new s(t[E]);
                    if ("null" == E) return new o(t[E]);
                    if ("oid" == E) return new a(t[E]);
                    if ("enum" == E) return new h(t[E]);
                    if ("utf8str" == E) return new u(t[E]);
                    if ("numstr" == E) return new c(t[E]);
                    if ("prnstr" == E) return new f(t[E]);
                    if ("telstr" == E) return new l(t[E]);
                    if ("ia5str" == E) return new p(t[E]);
                    if ("utctime" == E) return new d(t[E]);
                    if ("gentime" == E) return new g(t[E]);
                    if ("seq" == E) {
                        for (var T = t[E], S = [], D = 0; D < T.length; D++) {
                            var w = m(T[D]);
                            S.push(w)
                        }
                        return new v({
                            array: S
                        })
                    }
                    if ("set" == E) {
                        for (T = t[E], S = [], D = 0; D < T.length; D++) {
                            w = m(T[D]);
                            S.push(w)
                        }
                        return new _({
                            array: S
                        })
                    }
                    if ("tag" == E) {
                        var B = t[E];
                        if ("[object Array]" === Object.prototype.toString.call(B) && 3 == B.length) {
                            var O = m(B[2]);
                            return new y({
                                tag: B[0],
                                explicit: B[1],
                                obj: O
                            })
                        }
                        var R = {};
                        if (void 0 !== B.explicit && (R.explicit = B.explicit), void 0 !== B.tag && (R.tag = B.tag), void 0 === B.obj) throw "obj shall be specified for 'tag'.";
                        return R.obj = m(B.obj), new y(R)
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex()
                }
            }, pt.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, ""), n = 2; n < t.length; n += 2) {
                    var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
                    if (r += s.substr(1, 7), "0" == s.substr(0, 1)) e = e + "." + new M(r, 2).toString(10), r = ""
                }
                return e
            }, pt.asn1.ASN1Util.oidIntToHex = function(t) {
                function a(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                }

                function e(t) {
                    var e = "",
                        i = new M(t, 10).toString(2),
                        r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    for (i = n + i, s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2))
                    }
                    return e
                }
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var i = "",
                    r = t.split("."),
                    n = 40 * parseInt(r[0]) + parseInt(r[1]);
                i += a(n), r.splice(0, 2);
                for (var s = 0; s < r.length; s++) i += e(r[s]);
                return i
            }, pt.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2,
                        e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var i = e.length / 2;
                    if (15 < i) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + i).toString(16) + e
                }, this.getEncodedHex = function() {
                    return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function() {
                    return ""
                }
            }, pt.asn1.DERAbstractString = function(t) {
                pt.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
            }, lt.lang.extend(pt.asn1.DERAbstractString, pt.asn1.ASN1Object), pt.asn1.DERAbstractTime = function(t) {
                pt.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
                }, this.formatDate = function(t, e, i) {
                    var r = this.zeroPadding,
                        n = this.localDateToUTC(t),
                        s = String(n.getFullYear());
                    "utc" == e && (s = s.substr(2, 2));
                    var o = s + r(String(n.getMonth() + 1), 2) + r(String(n.getDate()), 2) + r(String(n.getHours()), 2) + r(String(n.getMinutes()), 2) + r(String(n.getSeconds()), 2);
                    if (!0 === i) {
                        var a = n.getMilliseconds();
                        if (0 != a) {
                            var h = r(String(a), 3);
                            o = o + "." + (h = h.replace(/[0]+$/, ""))
                        }
                    }
                    return o + "Z"
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }, this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
                }, this.setByDateValue = function(t, e, i, r, n, s) {
                    var o = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
                    this.setByDate(o)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }
            }, lt.lang.extend(pt.asn1.DERAbstractTime, pt.asn1.ASN1Object), pt.asn1.DERAbstractStructured = function(t) {
                pt.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
            }, lt.lang.extend(pt.asn1.DERAbstractStructured, pt.asn1.ASN1Object), pt.asn1.DERBoolean = function() {
                pt.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, lt.lang.extend(pt.asn1.DERBoolean, pt.asn1.ASN1Object), pt.asn1.DERInteger = function(t) {
                pt.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new M(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, lt.lang.extend(pt.asn1.DERInteger, pt.asn1.ASN1Object), pt.asn1.DERBitString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = pt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex()
                }
                pt.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    var i = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = i + e
                }, this.setByBinaryString = function(t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++) t += "0";
                    var r = "";
                    for (i = 0; i < t.length - 1; i += 8) {
                        var n = t.substr(i, 8),
                            s = parseInt(n, 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function(t) {
                    for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
                    return e
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
            }, lt.lang.extend(pt.asn1.DERBitString, pt.asn1.ASN1Object), pt.asn1.DEROctetString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = pt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex()
                }
                pt.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, lt.lang.extend(pt.asn1.DEROctetString, pt.asn1.DERAbstractString), pt.asn1.DERNull = function() {
                pt.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, lt.lang.extend(pt.asn1.DERNull, pt.asn1.ASN1Object), pt.asn1.DERObjectIdentifier = function(t) {
                function a(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                }

                function s(t) {
                    var e = "",
                        i = new M(t, 10).toString(2),
                        r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    for (i = n + i, s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2))
                    }
                    return e
                }
                pt.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var e = "",
                        i = t.split("."),
                        r = 40 * parseInt(i[0]) + parseInt(i[1]);
                    e += a(r), i.splice(0, 2);
                    for (var n = 0; n < i.length; n++) e += s(i[n]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                }, this.setValueName = function(t) {
                    var e = pt.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, lt.lang.extend(pt.asn1.DERObjectIdentifier, pt.asn1.ASN1Object), pt.asn1.DEREnumerated = function(t) {
                pt.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new M(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, lt.lang.extend(pt.asn1.DEREnumerated, pt.asn1.ASN1Object), pt.asn1.DERUTF8String = function(t) {
                pt.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, lt.lang.extend(pt.asn1.DERUTF8String, pt.asn1.DERAbstractString), pt.asn1.DERNumericString = function(t) {
                pt.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, lt.lang.extend(pt.asn1.DERNumericString, pt.asn1.DERAbstractString), pt.asn1.DERPrintableString = function(t) {
                pt.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, lt.lang.extend(pt.asn1.DERPrintableString, pt.asn1.DERAbstractString), pt.asn1.DERTeletexString = function(t) {
                pt.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, lt.lang.extend(pt.asn1.DERTeletexString, pt.asn1.DERAbstractString), pt.asn1.DERIA5String = function(t) {
                pt.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, lt.lang.extend(pt.asn1.DERIA5String, pt.asn1.DERAbstractString), pt.asn1.DERUTCTime = function(t) {
                pt.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, lt.lang.extend(pt.asn1.DERUTCTime, pt.asn1.DERAbstractTime), pt.asn1.DERGeneralizedTime = function(t) {
                pt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
            }, lt.lang.extend(pt.asn1.DERGeneralizedTime, pt.asn1.DERAbstractTime), pt.asn1.DERSequence = function(t) {
                pt.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex()
                    }
                    return this.hV = t, this.hV
                }
            }, lt.lang.extend(pt.asn1.DERSequence, pt.asn1.DERAbstractStructured), pt.asn1.DERSet = function(t) {
                pt.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
                }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }, lt.lang.extend(pt.asn1.DERSet, pt.asn1.DERAbstractStructured), pt.asn1.DERTaggedObject = function(t) {
                pt.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }, lt.lang.extend(pt.asn1.DERTaggedObject, pt.asn1.ASN1Object);
            var dt, gt, vt, _t = (p(dt = mt, gt = vt = ut), void(dt.prototype = null === gt ? Object.create(gt) : (yt.prototype = gt.prototype, new yt)), mt.prototype.parseKey = function(t) {
                try {
                    var e = 0,
                        i = 0,
                        r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : v.unarmor(t),
                        n = B.decode(r);
                    if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                        e = n.sub[1].getHexStringValue(), this.n = k(e, 16), i = n.sub[2].getHexStringValue(), this.e = parseInt(i, 16);
                        var s = n.sub[3].getHexStringValue();
                        this.d = k(s, 16);
                        var o = n.sub[4].getHexStringValue();
                        this.p = k(o, 16);
                        var a = n.sub[5].getHexStringValue();
                        this.q = k(a, 16);
                        var h = n.sub[6].getHexStringValue();
                        this.dmp1 = k(h, 16);
                        var u = n.sub[7].getHexStringValue();
                        this.dmq1 = k(u, 16);
                        var c = n.sub[8].getHexStringValue();
                        this.coeff = k(c, 16)
                    } else {
                        if (2 !== n.sub.length) return !1;
                        var f = n.sub[1].sub[0];
                        e = f.sub[0].getHexStringValue(), this.n = k(e, 16), i = f.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                    }
                    return !0
                } catch (t) {
                    return !1
                }
            }, mt.prototype.getPrivateBaseKey = function() {
                var t = {
                    array: [new pt.asn1.DERInteger({
                        int: 0
                    }), new pt.asn1.DERInteger({
                        bigint: this.n
                    }), new pt.asn1.DERInteger({
                        int: this.e
                    }), new pt.asn1.DERInteger({
                        bigint: this.d
                    }), new pt.asn1.DERInteger({
                        bigint: this.p
                    }), new pt.asn1.DERInteger({
                        bigint: this.q
                    }), new pt.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new pt.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new pt.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                };
                return new pt.asn1.DERSequence(t).getEncodedHex()
            }, mt.prototype.getPrivateBaseKeyB64 = function() {
                return c(this.getPrivateBaseKey())
            }, mt.prototype.getPublicBaseKey = function() {
                var t = new pt.asn1.DERSequence({
                        array: [new pt.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new pt.asn1.DERNull]
                    }),
                    e = new pt.asn1.DERSequence({
                        array: [new pt.asn1.DERInteger({
                            bigint: this.n
                        }), new pt.asn1.DERInteger({
                            int: this.e
                        })]
                    }),
                    i = new pt.asn1.DERBitString({
                        hex: "00" + e.getEncodedHex()
                    });
                return new pt.asn1.DERSequence({
                    array: [t, i]
                }).getEncodedHex()
            }, mt.prototype.getPublicBaseKeyB64 = function() {
                return c(this.getPublicBaseKey())
            }, mt.wordwrap = function(t, e) {
                if (!t) return t;
                var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(i, "g")).join("\n")
            }, mt.prototype.getPrivateKey = function() {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += mt.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----"
            }, mt.prototype.getPublicKey = function() {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += mt.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----"
            }, mt.hasPublicKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }, mt.hasPrivateKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }, mt.prototype.parsePropertiesFrom = function(t) {
                this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
            }, mt);

            function yt() {
                this.constructor = dt
            }

            function mt(t) {
                var e = vt.call(this) || this;
                return t && ("string" == typeof t ? e.parseKey(t) : (mt.hasPrivateKeyProperty(t) || mt.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), e
            }
            var bt = (Et.prototype.setKey = function(t) {
                this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new _t(t)
            }, Et.prototype.setPrivateKey = function(t) {
                this.setKey(t)
            }, Et.prototype.setPublicKey = function(t) {
                this.setKey(t)
            }, Et.prototype.decrypt = function(t) {
                try {
                    return this.getKey().decrypt(f(t))
                } catch (t) {
                    return !1
                }
            }, Et.prototype.encrypt = function(t) {
                try {
                    return c(this.getKey().encrypt(t))
                } catch (t) {
                    return !1
                }
            }, Et.prototype.sign = function(t, e, i) {
                try {
                    return c(this.getKey().sign(t, e, i))
                } catch (t) {
                    return !1
                }
            }, Et.prototype.verify = function(t, e, i) {
                try {
                    return this.getKey().verify(t, f(e), i)
                } catch (t) {
                    return !1
                }
            }, Et.prototype.getKey = function(t) {
                if (!this.key) {
                    if (this.key = new _t, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }, Et.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }, Et.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }, Et.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }, Et.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }, Et.version = "3.0.0-rc.1", Et);

            function Et(t) {
                t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
            }
            window.JSEncrypt = bt, t.JSEncrypt = bt, t.default = bt, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        })(e)
    },
    260: function(t, e, i) {
        var r;
        r = function(h) {
            return function(n) {
                var t = h,
                    e = t.lib,
                    i = e.WordArray,
                    r = e.Hasher,
                    s = t.algo,
                    o = [],
                    m = [];
                ! function() {
                    function t(t) {
                        for (var e = n.sqrt(t), i = 2; i <= e; i++)
                            if (!(t % i)) return !1;
                        return !0
                    }

                    function e(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }
                    for (var i = 2, r = 0; r < 64;) t(i) && (r < 8 && (o[r] = e(n.pow(i, .5))), m[r] = e(n.pow(i, 1 / 3)), r++), i++
                }();
                var b = [],
                    a = s.SHA256 = r.extend({
                        _doReset: function() {
                            this._hash = new i.init(o.slice(0))
                        },
                        _doProcessBlock: function(t, e) {
                            for (var i = this._hash.words, r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], h = i[5], u = i[6], c = i[7], f = 0; f < 64; f++) {
                                if (f < 16) b[f] = 0 | t[e + f];
                                else {
                                    var l = b[f - 15],
                                        p = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3,
                                        d = b[f - 2],
                                        g = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                                    b[f] = p + b[f - 7] + g + b[f - 16]
                                }
                                var v = r & n ^ r & s ^ n & s,
                                    _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                    y = c + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & u) + m[f] + b[f];
                                c = u, u = h, h = a, a = o + y | 0, o = s, s = n, n = r, r = y + (_ + v) | 0
                            }
                            i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, i[4] = i[4] + a | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + c | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                i = 8 * this._nDataBytes,
                                r = 8 * t.sigBytes;
                            return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (64 + r >>> 9 << 4)] = n.floor(i / 4294967296), e[15 + (64 + r >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                t.SHA256 = r._createHelper(a), t.HmacSHA256 = r._createHmacHelper(a)
            }(Math), h.SHA256
        }, t.exports = r(i(261))
    },
    261: function(t, e, i) {
        var r;
        r = function() {
            var c, i, t, e, r, f, n, s, o, a, h, u, l = l || (c = Math, i = Object.create || function(t) {
                var e;
                return p.prototype = t, e = new p, p.prototype = null, e
            }, e = (t = {}).lib = {}, r = e.Base = {
                extend: function(t) {
                    var e = i(this);
                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }), (e.init.prototype = e).$super = this, e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }, f = e.WordArray = r.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                },
                toString: function(t) {
                    return (t || s).stringify(this)
                },
                concat: function(t) {
                    var e = this.words,
                        i = t.words,
                        r = this.sigBytes,
                        n = t.sigBytes;
                    if (this.clamp(), r % 4)
                        for (var s = 0; s < n; s++) {
                            var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            e[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8
                        } else
                            for (s = 0; s < n; s += 4) e[r + s >>> 2] = i[s >>> 2];
                    return this.sigBytes += n, this
                },
                clamp: function() {
                    var t = this.words,
                        e = this.sigBytes;
                    t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = c.ceil(e / 4)
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t.words = this.words.slice(0), t
                },
                random: function(t) {
                    function e(e) {
                        e = e;
                        var i = 987654321,
                            r = 4294967295;
                        return function() {
                            var t = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                            return t /= 4294967296, (t += .5) * (.5 < c.random() ? 1 : -1)
                        }
                    }
                    for (var i, r = [], n = 0; n < t; n += 4) {
                        var s = e(4294967296 * (i || c.random()));
                        i = 987654071 * s(), r.push(4294967296 * s() | 0)
                    }
                    return new f.init(r, t)
                }
            }), n = t.enc = {}, s = n.Hex = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new f.init(i, e / 2)
                }
            }, o = n.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push(String.fromCharCode(s))
                    }
                    return r.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new f.init(i, e)
                }
            }, a = n.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(o.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return o.parse(unescape(encodeURIComponent(t)))
                }
            }, h = e.BufferedBlockAlgorithm = r.extend({
                reset: function() {
                    this._data = new f.init, this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = a.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                },
                _process: function(t) {
                    var e = this._data,
                        i = e.words,
                        r = e.sigBytes,
                        n = this.blockSize,
                        s = r / (4 * n),
                        o = (s = t ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0)) * n,
                        a = c.min(4 * o, r);
                    if (o) {
                        for (var h = 0; h < o; h += n) this._doProcessBlock(i, h);
                        var u = i.splice(0, o);
                        e.sigBytes -= a
                    }
                    return new f.init(u, a)
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t._data = this._data.clone(), t
                },
                _minBufferSize: 0
            }), e.Hasher = h.extend({
                cfg: r.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                },
                reset: function() {
                    h.reset.call(this), this._doReset()
                },
                update: function(t) {
                    return this._append(t), this._process(), this
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(i) {
                    return function(t, e) {
                        return new i.init(e).finalize(t)
                    }
                },
                _createHmacHelper: function(i) {
                    return function(t, e) {
                        return new u.HMAC.init(i, e).finalize(t)
                    }
                }
            }), u = t.algo = {}, t);

            function p() {}
            return l
        }, t.exports = r()
    }
}, [257]);
pbjsChunk([188], {
    264: function(e, r, n) {
        e.exports = n(265)
    },
    265: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "currencySupportEnabled", function() {
            return C
        }), n.d(r, "currencyRates", function() {
            return S
        }), r.setConfig = c, r.addBidResponseHook = D;
        var i = n(23),
            s = n(4),
            a = (n.n(s), n(5)),
            u = n(0),
            o = n(3),
            f = n(13);

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var l, y = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
            g = 4,
            t = [],
            v = {},
            p = !1,
            b = !0,
            h = "USD",
            C = !1,
            S = {},
            m = {};

        function c(e) {
            var r = y;
            if ("object" === d(e.rates) && (S.conversions = e.rates, b = !(p = !0)), "object" === d(e.defaultRates) && (l = e.defaultRates, S.conversions = l, p = !0), "string" == typeof e.adServerCurrency) {
                u.logInfo("enabling currency support", arguments), h = e.adServerCurrency, e.conversionRateFile && (u.logInfo("currency using override conversionRateFile:", e.conversionRateFile), r = e.conversionRateFile);
                var n = r.indexOf("$$TODAY$$");
                if (-1 !== n) {
                    var o = new Date,
                        c = "".concat(o.getMonth() + 1),
                        t = "".concat(o.getDate());
                    c.length < 2 && (c = "0".concat(c)), t.length < 2 && (t = "0".concat(t));
                    var i = "".concat(o.getFullYear()).concat(c).concat(t);
                    r = "".concat(r.substring(0, n)).concat(i).concat(r.substring(n + 9, r.length))
                }! function(e) {
                    v = {}, C = !0, u.logInfo("Installing addBidResponse decorator for currency module", arguments), Object(f.a)("addBidResponse").before(D, 100), b && (b = !1, Object(a.a)(e, {
                        success: function(r) {
                            try {
                                S = JSON.parse(r), u.logInfo("currencyRates set to " + JSON.stringify(S)), p = !0, I()
                            } catch (e) {
                                R("Failed to parse currencyRates response: " + r)
                            }
                        },
                        error: R
                    }))
                }(r)
            } else u.logInfo("disabling currency support"),
                function() {
                    u.logInfo("Uninstalling addBidResponse decorator for currency module", arguments), Object(f.a)("addBidResponse").getHooks({
                        hook: D
                    }).remove(), h = "USD", v = {}, p = C = !1, b = !0, S = {}, m = {}
                }();
            "object" === d(e.bidderCurrencyDefault) && (m = e.bidderCurrencyDefault)
        }

        function R(e) {
            l ? (u.logWarn(e), u.logWarn("Currency failed loading rates, falling back to currency.defaultRates")) : u.logError(e)
        }

        function D(e, r, n) {
            if (!n) return e.call(this, r);
            var o = n.bidderCode || n.bidder;
            if (m[o]) {
                var c = m[o];
                n.currency && c !== n.currency ? u.logWarn("Currency default '".concat(o, ": ").concat(c, "' ignored. adapter specified '").concat(n.currency, "'")) : n.currency = c
            }
            if (n.currency || (u.logWarn('Currency not specified on bid.  Defaulted to "USD"'), n.currency = "USD"), n.getCpmInNewCurrency = function(e) {
                    return (parseFloat(this.cpm) * w(this.currency, e)).toFixed(3)
                }, n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.currency === h) return e.call(this, r, n);
            t.push(function(o, c, t) {
                return function() {
                    var r = t[1];
                    if (void 0 !== r && "currency" in r && "cpm" in r) {
                        var e = r.currency;
                        try {
                            var n = w(e);
                            1 !== n && (r.cpm = (parseFloat(r.cpm) * n).toFixed(4), r.currency = h)
                        } catch (e) {
                            u.logWarn("Returning NO_BID, getCurrencyConversion threw error: ", e), t[1] = Object(i.a)(s.STATUS.NO_BID, {
                                bidder: r.bidderCode || r.bidder,
                                bidId: r.requestId
                            })
                        }
                    }
                    return o.apply(c, t)
                }
            }(e, this, [r, n])), C && !p || I()
        }

        function I() {
            for (; 0 < t.length;) t.shift()()
        }

        function w(e, r) {
            var n, o = 1 < arguments.length && void 0 !== r ? r : h,
                c = null,
                t = "".concat(e, "->").concat(o);
            if (t in v) c = v[t], u.logMessage("Using conversionCache value " + c + " for " + t);
            else if (!1 === C) {
                if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                c = 1
            } else if (e === o) c = 1;
            else if (e in S.conversions) {
                if (!(o in (n = S.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = n[o], u.logInfo("getCurrencyConversion using direct " + e + " to " + o + " conversionRate " + c)
            } else if (o in S.conversions) {
                if (!(e in (n = S.conversions[o]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                c = O(1 / n[e], g), u.logInfo("getCurrencyConversion using reciprocal " + e + " to " + o + " conversionRate " + c)
            } else {
                var i = Object.keys(S.conversions)[0];
                if (!(e in S.conversions[i])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                var s = 1 / S.conversions[i][e];
                if (!(o in S.conversions[i])) throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = O(s * S.conversions[i][o], g), u.logInfo("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + o + " conversionRate " + c)
            }
            return t in v || (u.logMessage("Adding conversionCache value " + c + " for " + t), v[t] = c), c
        }

        function O(e, r) {
            for (var n = 1, o = 0; o < r; o++) n += "0";
            return Math.round(e * n) / n
        }
        o.b.getConfig("currency", function(e) {
            return c(e.currency)
        })
    }
}, [264]);
pbjsChunk([187], {
    266: function(e, r, n) {
        e.exports = n(267)
    },
    267: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return a
        });
        var d = n(0),
            t = n(1),
            i = "Bid from response has no auid parameter - ",
            o = "Bid from response has no adm parameter - ",
            p = "Array of bid objects is empty",
            u = "Can't find in requested bids the bid with auid - ",
            c = "Seatbid array from response has empty item",
            g = "Response is empty",
            l = "Response has empty seatbid array",
            m = "Seatbid from response has no array of bid objects - ",
            a = {
                code: "danmarket",
                aliases: ["DANMarketplace", "DAN_Marketplace", "danmarketplace"],
                isBidRequestValid: function(e) {
                    return !!e.params.uid
                },
                buildRequests: function(e, r) {
                    var n, t = [],
                        a = {},
                        s = "net";
                    (e || []).forEach(function(e) {
                        "gross" === e.params.priceType && (s = "gross"), a[e.params.uid] ? a[e.params.uid].push(e) : (a[e.params.uid] = [e], t.push(e.params.uid)), n = e.bidderRequestId
                    });
                    var i = {
                        u: d.getTopWindowUrl(),
                        pt: s,
                        auids: t.join(","),
                        r: n
                    };
                    return r && r.gdprConsent && (r.gdprConsent.consentString && (i.gdpr_consent = r.gdprConsent.consentString), i.gdpr_applies = "boolean" == typeof r.gdprConsent.gdprApplies ? Number(r.gdprConsent.gdprApplies) : 1), {
                        method: "GET",
                        url: "//ads.danmarketplace.com/hb",
                        data: i,
                        bidsMap: a
                    }
                },
                interpretResponse: function(e, r) {
                    e = e && e.body;
                    var n, t = [],
                        a = r.bidsMap,
                        s = r.data.pt;
                    return e ? e.seatbid && !e.seatbid.length && (n = l) : n = g, !n && e.seatbid && e.seatbid.forEach(function(e) {
                        ! function(n, e, t, a) {
                            if (!n) return;
                            var r;
                            n.auid || (r = i + JSON.stringify(n));
                            if (n.adm) {
                                var s = e[n.auid];
                                s ? s.forEach(function(e) {
                                    var r = {
                                        requestId: e.bidId,
                                        cpm: n.price,
                                        width: n.w,
                                        height: n.h,
                                        creativeId: n.auid,
                                        currency: "USD",
                                        netRevenue: "gross" !== t,
                                        ttl: 360,
                                        ad: n.adm,
                                        dealId: n.dealid
                                    };
                                    a.push(r)
                                }) : r = u + n.auid
                            } else r = o + JSON.stringify(n);
                            r && d.logError(r)
                        }(function(e) {
                            e ? e.bid ? e.bid[0] || d.logError(p) : d.logError(m + JSON.stringify(e)) : d.logError(c);
                            return e && e.bid && e.bid[0]
                        }(e), a, s, t)
                    }), n && d.logError(n), t
                },
                getUserSyncs: function(e, r, n) {
                    if (e.pixelEnabled) {
                        var t = [];
                        return n && (n.consentString && t.push("gdpr_consent=" + encodeURIComponent(n.consentString)), t.push("gdpr_applies=" + encodeURIComponent("boolean" == typeof n.gdprApplies ? Number(n.gdprApplies) : 1))), [{
                            type: "image",
                            url: "//ads.danmarketplace.com/push_sync" + (t.length ? "?" + t.join("&") : "")
                        }]
                    }
                }
            };
        Object(t.registerBidder)(a)
    }
}, [266]);
pbjsChunk([182], {
    276: function(e, t, r) {
        e.exports = r(277)
    },
    277: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return s
        }), t.matchRequest = o, t.checkDeepArray = a, t.defaultSize = c;
        var u = r(0),
            i = r(1),
            d = r(3);

        function n(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var r = [],
                    i = !0,
                    n = !1,
                    d = void 0;
                try {
                    for (var u, s = e[Symbol.iterator](); !(i = (u = s.next()).done) && (r.push(u.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, d = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw d
                    }
                }
                return r
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var s = {
            code: "districtmDMX",
            supportedFormat: ["banner"],
            isBidRequestValid: function(e) {
                return !(!e.params.dmxid || !e.params.memberid)
            },
            interpretResponse: function(e, d) {
                return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce(function(e, t) {
                    var r = t.bid.reduce(function(e, t) {
                        if (e.price < t.price) {
                            var r = c(o(t.impid, d)),
                                i = r.width,
                                n = r.height;
                            return t.cpm = t.price, t.bidId = t.impid, t.requestId = t.impid, t.width = t.w || i, t.height = t.h || n, t.ad = t.adm, t.netRevenue = !0, t.creativeId = t.crid, t.currency = "USD", t.ttl = 60, t
                        }
                        return e.cpm = e.price, e
                    }, {
                        price: 0
                    });
                    return r.adm && e.push(r), e
                }, []).filter(function(e) {
                    return !!e.bidId
                }) : []
            },
            buildRequests: function(e, t) {
                var r = d.b.getConfig("bidderTimeout"),
                    i = {
                        id: u.generateUUID(),
                        cur: ["USD"],
                        tmax: r - 300,
                        test: this.test() || 0,
                        site: {
                            publisher: {
                                id: String(e[0].params.memberid) || null
                            }
                        }
                    };
                i.test || delete i.test, t.gdprConsent && (i.regs = {}, i.regs.ext = {}, i.regs.ext.gdpr = !0 === t.gdprConsent.gdprApplies ? 1 : 0, i.user = {}, i.user.ext = {}, i.user.ext.consent = t.gdprConsent.consentString);
                var n = e.map(function(e) {
                    var t = {};
                    return t.id = e.bidId, t.tagid = String(e.params.dmxid), t.secure = "https:" === window.location.protocol ? 1 : 0, t.banner = {
                        topframe: 1,
                        w: e.sizes[0][0] || 0,
                        h: e.sizes[0][1] || 0,
                        format: e.sizes.map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }).filter(function(e) {
                            return "number" == typeof e.w && "number" == typeof e.h
                        })
                    }, t
                });
                return i.imp = n, {
                    method: "POST",
                    url: "https://dmx.districtm.io/b/v1",
                    data: JSON.stringify(i),
                    options: {
                        contentType: "application/json",
                        withCredentials: !0
                    },
                    bidderRequest: t
                }
            },
            test: function() {
                return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [{
                    type: "iframe",
                    url: "https://cdn.districtm.io/ids/index.html"
                }]
            }
        };

        function o(t, e) {
            return n(e.bidderRequest.bids.filter(function(e) {
                return e.bidId === t
            }), 1)[0]
        }

        function a(e) {
            return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
        }

        function c(e) {
            var t = e.sizes,
                r = {};
            return r.width = a(t)[0], r.height = a(t)[1], r
        }
        Object(i.registerBidder)(s)
    }
}, [276]);
pbjsChunk([162], {
    320: function(e, r, t) {
        e.exports = t(321)
    },
    321: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return g
        });
        var c = t(0),
            d = t(1),
            p = t(12),
            u = t(2),
            f = "Bid from response has no auid parameter - ",
            b = "Bid from response has no adm parameter - ",
            i = "Array of bid objects is empty",
            l = "Can't find in requested bids the bid with auid - ",
            s = "Seatbid array from response has empty item",
            a = "Response is empty",
            o = "Response has empty seatbid array",
            m = "Seatbid from response has no array of bid objects - ",
            g = {
                code: "grid",
                supportedMediaTypes: [u.b, u.d],
                isBidRequestValid: function(e) {
                    return !!e.params.uid
                },
                buildRequests: function(e, r) {
                    var s, a = [],
                        o = {},
                        p = {},
                        u = {};
                    (e || []).forEach(function(e) {
                        s = e.bidderRequestId;
                        var r = e.params.uid,
                            t = e.adUnitCode;
                        a.push(r);
                        var d = c.parseSizesInput(e.sizes);
                        p[r] || (p[r] = {});
                        var n = p[r];
                        n[t] ? n[t].bids.push(e) : n[t] = {
                            adUnitCode: t,
                            bids: [e],
                            parents: []
                        };
                        var i = n[t];
                        d.forEach(function(e) {
                            u[e] = !0, o[r] || (o[r] = {}), o[r][e] ? o[r][e].push(i) : o[r][e] = [i], i.parents.push({
                                parent: o[r],
                                key: e,
                                uid: r
                            })
                        })
                    });
                    var t = {
                        auids: a.join(","),
                        sizes: c.getKeys(u).join(","),
                        r: s
                    };
                    return r && (r.refererInfo && r.refererInfo.referer && (t.u = r.refererInfo.referer), r.timeout && (t.wtimeout = r.timeout), r.gdprConsent && (r.gdprConsent.consentString && (t.gdpr_consent = r.gdprConsent.consentString), t.gdpr_applies = "boolean" == typeof r.gdprConsent.gdprApplies ? Number(r.gdprConsent.gdprApplies) : 1)), {
                        method: "GET",
                        url: "//grid.bidswitch.net/hb",
                        data: c.parseQueryStringParameters(t).replace(/\&$/, ""),
                        bidsMap: o
                    }
                },
                interpretResponse: function(e, r) {
                    e = e && e.body;
                    var t, d = [],
                        n = r.bidsMap;
                    return e ? e.seatbid && !e.seatbid.length && (t = o) : t = a, !t && e.seatbid && e.seatbid.forEach(function(e) {
                        ! function(e, i, r) {
                            if (!e) return;
                            var t;
                            e.auid || (t = f + JSON.stringify(e));
                            if (e.adm) {
                                var d = i[e.auid];
                                if (d) {
                                    var n = "".concat(e.w, "x").concat(e.h);
                                    if (d[n]) {
                                        var s = d[n][0],
                                            a = s.bids.shift(),
                                            o = {
                                                requestId: a.bidId,
                                                bidderCode: g.code,
                                                cpm: e.price,
                                                width: e.w,
                                                height: e.h,
                                                creativeId: e.auid,
                                                currency: "USD",
                                                netRevenue: !1,
                                                ttl: 360,
                                                dealId: e.dealid
                                            };
                                        "video" === e.content_type ? (o.vastXml = e.adm, o.mediaType = u.d, o.adResponse = {
                                            content: o.vastXml
                                        }, a.renderer || a.mediaTypes && a.mediaTypes.video && "outstream" !== a.mediaTypes.video.context || (o.renderer = function(e, r) {
                                            var t = p.a.install({
                                                id: r.id,
                                                url: r.url,
                                                loaded: !1
                                            });
                                            try {
                                                t.setRender(h)
                                            } catch (e) {
                                                c.logWarn("Prebid Error calling setRender on renderer", e)
                                            }
                                            return t
                                        }(0, {
                                            id: a.bidId,
                                            url: "//cdn.adnxs.com/renderer/video/ANOutstreamVideo.js"
                                        }))) : (o.ad = e.adm, o.mediaType = u.b), r.push(o), s.bids.length || s.parents.forEach(function(e) {
                                            var r = e.parent,
                                                t = e.key,
                                                d = e.uid,
                                                n = r[t].indexOf(s); - 1 < n && r[t].splice(n, 1), r[t].length || (delete r[t], c.getKeys(r).length || delete i[d])
                                        })
                                    }
                                } else t = l + e.auid
                            } else t = b + JSON.stringify(e);
                            t && c.logError(t)
                        }(function(e) {
                            e ? e.bid ? e.bid[0] || c.logError(i) : c.logError(m + JSON.stringify(e)) : c.logError(s);
                            return e && e.bid && e.bid[0]
                        }(e), n, d)
                    }), t && c.logError(t), d
                }
            };

        function h(e) {
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    targetId: e.adUnitCode,
                    adResponse: e.adResponse
                })
            })
        }
        Object(d.registerBidder)(g)
    }
}, [320]);
pbjsChunk([27], {
    17: function(a, b) {
        var c;
        c = function() {
            return this
        }();
        try {
            c = c || Function("return this")() || eval("this")
        } catch (t) {
            "object" == typeof window && (c = window)
        }
        a.exports = c
    },
    322: function(t, e, n) {
        t.exports = n(323)
    },
    323: function(t, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(d) {
                i.d(r, "spec", function() {
                    return n
                });
                var w = i(0),
                    s = i(3),
                    t = i(9),
                    b = i.n(t),
                    e = i(1);

                function y(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function I() {
                    return (I = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var p = {
                        member: "YcXr87z2lpbB"
                    },
                    l = {},
                    S = null;
                var n = {
                    code: "gumgum",
                    aliases: ["gg"],
                    isBidRequestValid: function(t) {
                        var e = t.params,
                            n = t.adUnitCode;
                        switch (!0) {
                            case !!e.inScreen:
                            case !!e.inSlot:
                            case !!e.ICV:
                                break;
                            default:
                                return w.logWarn("[GumGum] No product selected for the placement ".concat(n, ", please check your implementation.")), !1
                        }
                        return !(e.bidfloor && ("number" != typeof e.bidfloor || !isFinite(e.bidfloor))) || (w.logWarn("[GumGum] bidfloor must be a Number"), !1)
                    },
                    buildRequests: function(t, e) {
                        var a = [],
                            c = I({
                                consentString: null,
                                gdprApplies: !0
                            }, e && e.gdprConsent);
                        return w._each(t, function(t) {
                            var e = s.b.getConfig("bidderTimeout"),
                                n = t.bidId,
                                r = t.params,
                                i = void 0 === r ? {} : r,
                                o = t.transactionId,
                                u = {};
                            S && (u.pv = S), i.bidfloor && (u.fp = i.bidfloor), i.inScreen && (u.t = i.inScreen, u.pi = 2), i.inSlot && (u.si = parseInt(i.inSlot, 10), u.pi = 3), i.ICV && (u.ni = parseInt(i.ICV, 10), u.pi = 5), u.gdprApplies = c.gdprApplies, c.gdprApplies && (u.gdprConsent = c.consentString), a.push({
                                id: n,
                                tmax: e,
                                tId: o,
                                pi: u.pi,
                                selector: i.selector,
                                sizes: t.sizes,
                                url: "https://g2.gumgum.com/hbid/imp",
                                method: "GET",
                                data: I(u, function() {
                                    var t, e, n, r, i, o, u, a;
                                    if (l.vw) return l;
                                    try {
                                        e = (t = d.top).screen, n = w.getTopWindowUrl()
                                    } catch (t) {
                                        return w.logError(t), l
                                    }
                                    return l = {
                                        vw: t.innerWidth,
                                        vh: t.innerHeight,
                                        sw: e.width,
                                        sh: e.height,
                                        pu: n,
                                        ce: w.cookiesAreEnabled(),
                                        dpr: t.devicePixelRatio || 1,
                                        jcsi: JSON.stringify({
                                            t: 0,
                                            rq: 8
                                        }),
                                        ogu: (o = (document && document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']"), o ? o.content : null)
                                    }, u = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection), (i = (a = u && (u.downlink || u.bandwidth)) ? Math.round(1024 * a) : null) && (l.ns = i), (r = (n.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (l[isNaN(r) ? "eAdBuyId" : "adBuyId"] = r), l
                                }(), function() {
                                    var t, e = (t = window.DigiTrust && window.DigiTrust.getUser ? window.DigiTrust.getUser(p) : {}) && t.success && t.identity || "";
                                    return !e || e.privacy && e.privacy.optout ? {} : {
                                        dt: e.id
                                    }
                                }(), function(t) {
                                    var e = {};
                                    return t.userId && t.userId.tdid && (e.tdid = t.userId.tdid), e
                                }(t))
                            })
                        }), a
                    },
                    interpretResponse: function(t, e) {
                        var n = [],
                            r = t.body,
                            i = I({
                                ad: {
                                    price: 0,
                                    id: 0,
                                    markup: ""
                                },
                                pag: {
                                    pvid: 0
                                }
                            }, r),
                            o = i.ad,
                            u = o.price,
                            a = o.id,
                            c = o.markup,
                            d = i.cw,
                            s = i.pag.pvid,
                            p = e.data || {},
                            l = p.pi,
                            f = 3 === l && 9 === p.si,
                            g = w.parseSizesInput(e.sizes),
                            m = y(g[0].split("x"), 2),
                            h = m[0],
                            v = m[1];
                        return 2 !== l && 5 !== l || !b()(g, "1x1") || (v = h = "1"), S = s, a && n.push({
                            ad: d ? function(t, e) {
                                return t.replace("AD_JSON", window.btoa(JSON.stringify(e)))
                            }(d, I({}, r, {
                                bidRequest: e
                            })) : c,
                            cpm: f ? .1 : u,
                            creativeId: a,
                            currency: "USD",
                            height: v,
                            netRevenue: !0,
                            requestId: e.id,
                            ttl: 60,
                            width: h
                        }), n
                    },
                    getUserSyncs: function(t, e) {
                        return e.map(function(t) {
                            return t.body && t.body.pxs && t.body.pxs.scr || []
                        }).reduce(function(t, e) {
                            return t.concat(e)
                        }, []).map(function(t) {
                            return {
                                type: "f" === t.t ? "iframe" : "image",
                                url: t.u
                            }
                        })
                    }
                };
                Object(e.registerBidder)(n)
            }.call(r, i(17))
    }
}, [322]);
pbjsChunk([155], {
    336: function(e, r, t) {
        e.exports = t(337)
    },
    337: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return n
        }), r.ImproveDigitalAdServerJSClient = c;
        var h = t(0),
            i = t(1),
            l = t(3),
            a = t(2),
            n = {
                version: "5.1.0",
                code: "improvedigital",
                aliases: ["id"],
                supportedMediaTypes: [a.b, a.c],
                isBidRequestValid: function(e) {
                    return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId))
                },
                buildRequests: function(e, r) {
                    var t = e.map(function(e) {
                            return function(e) {
                                var r = h.getBidIdParameter("adUnitCode", e) || null,
                                    t = h.getBidIdParameter("placementId", e.params) || null,
                                    i = null,
                                    n = null;
                                null === t && (i = h.getBidIdParameter("publisherId", e.params) || null, n = h.getBidIdParameter("placementKey", e.params) || null);
                                var s = h.getBidIdParameter("keyValues", e.params) || null,
                                    a = h.getBidIdParameter("size", e.params) || null,
                                    c = h.getBidIdParameter("bidId", e),
                                    d = h.getBidIdParameter("transactionId", e),
                                    u = l.b.getConfig("currency.adServerCurrency"),
                                    o = {};
                                t ? o.placementId = t : (i && (o.publisherId = i), n && (o.placementKey = n));
                                s && (o.keyValues = s);
                                !0 === l.b.getConfig("improvedigital.usePrebidSizes") && e.sizes && 0 < e.sizes.length ? o.format = e.sizes : a && a.w && a.h && (o.size = {}, o.size.h = a.h, o.size.w = a.w);
                                c && (o.id = c);
                                r && (o.adUnitId = r);
                                d && (o.transactionId = d);
                                u && (o.currency = u);
                                return o
                            }(e)
                        }),
                        i = new c("hb"),
                        n = {
                            singleRequestMode: !0 === l.b.getConfig("improvedigital.singleRequest"),
                            returnObjType: i.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,
                            libVersion: this.version
                        };
                    r && r.gdprConsent && r.gdprConsent.consentString && (n.gdpr = r.gdprConsent.consentString);
                    var s = i.createRequest(t, n);
                    return s.errors && 0 < s.errors.length && h.logError("ID WARNING 0x01"), s.requests
                },
                interpretResponse: function(e, r) {
                    var s = [];
                    return h._each(e.body.bid, function(t) {
                        if (t.price && null !== t.price && !t.hasOwnProperty("errorCode") && (t.adm || t.native)) {
                            var i = {};
                            if (t.native) i.native = function(e) {
                                var r = {};
                                if (!e || !h.isArray(e.assets)) return null;
                                e.assets.forEach(function(e) {
                                    if (e.title) r.title = e.title.text;
                                    else if (e.data) switch (e.data.type) {
                                        case 1:
                                            r.sponsoredBy = e.data.value;
                                            break;
                                        case 2:
                                            r.body = e.data.value;
                                            break;
                                        case 12:
                                            r.cta = e.data.value
                                    } else if (e.img) switch (e.img.type) {
                                        case 2:
                                            r.icon = {
                                                url: e.img.url,
                                                width: e.img.w,
                                                height: e.img.h
                                            };
                                            break;
                                        case 3:
                                            r.image = {
                                                url: e.img.url,
                                                width: e.img.w,
                                                height: e.img.h
                                            }
                                    }
                                }), r.impressionTrackers = e.imptrackers || [], r.javascriptTrackers = e.jstracker, e.link && (r.clickUrl = e.link.url, r.clickTrackers = e.link.clicktrackers);
                                return r
                            }(t.native), t.nurl && i.native.impressionTrackers.unshift(t.nurl), i.mediaType = a.c;
                            else {
                                var e = "";
                                t.nurl && 0 < t.nurl.length && (e = '<img src="'.concat(t.nurl, '" width="0" height="0" style="display:none">')), i.ad = "".concat(e, "<script>").concat(t.adm, "<\/script>"), i.mediaType = a.b
                            }
                            if (i.adId = t.id, i.cpm = parseFloat(t.price), i.creativeId = t.crid, i.currency = t.currency ? t.currency.toUpperCase() : "USD", h.isNumber(t.lid) && "deal_id" === t.buying_type) i.dealId = t.lid;
                            else if (Array.isArray(t.lid) && Array.isArray(t.buying_type) && t.lid.length === t.buying_type.length) {
                                var n = !1;
                                t.buying_type.forEach(function(e, r) {
                                    n || "deal_id" === e && (n = !0, i.dealId = t.lid[r])
                                })
                            }
                            i.height = t.h, i.netRevenue = !!t.isNet && t.isNet, i.requestId = t.id, i.ttl = 300, i.width = t.w, i.width && i.height || (i.width = 1, i.height = 1, r.sizes && (i.width = r.sizes[0][0], i.height = r.sizes[0][1])), s.push(i)
                        }
                    }), s
                },
                getUserSyncs: function(e, r) {
                    if (e.pixelEnabled) {
                        var t = [];
                        return r.forEach(function(e) {
                            e.body.bid.forEach(function(e) {
                                h.isArray(e.sync) && e.sync.forEach(function(e) {
                                    -1 === t.indexOf(e) && t.push(e)
                                })
                            })
                        }), t.map(function(e) {
                            return {
                                type: "image",
                                url: e
                            }
                        })
                    }
                    return []
                }
            };

        function c(e) {
            this.CONSTANTS = {
                HTTP_SECURITY: {
                    STANDARD: 0,
                    SECURE: 1
                },
                AD_SERVER_BASE_URL: "ice.360yield.com",
                END_POINT: e || "hb",
                AD_SERVER_URL_PARAM: "jsonp=",
                CLIENT_VERSION: "JS-6.0.0",
                MAX_URL_LENGTH: 2083,
                ERROR_CODES: {
                    MISSING_PLACEMENT_PARAMS: 2,
                    LIB_VERSION_MISSING: 3
                },
                RETURN_OBJ_TYPE: {
                    DEFAULT: 0,
                    URL_PARAMS_SPLIT: 1
                }
            }, this.getErrorReturn = function(e) {
                return {
                    idMappings: {},
                    requests: {},
                    errorCode: e
                }
            }, this.createRequest = function(e, r, t) {
                if (!r.libVersion) return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);
                r.returnObjType = r.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT;
                var i, n = [];
                if (h.isArray(e))
                    for (var s = 0; s < e.length; s++) i = this.createImpressionObject(e[s]), n.push(i);
                else i = this.createImpressionObject(e), n.push(i);
                var a = !0;
                r.returnObjType === this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT && (a = !1);
                var c = {
                    requests: []
                };
                a && (c.idMappings = []);
                for (var d = null, u = "".concat(1 === r.secure ? "https" : "http", "://").concat(this.CONSTANTS.AD_SERVER_BASE_URL, "/").concat(this.CONSTANTS.END_POINT, "?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM), o = {
                        bid_request: this.createBasicBidRequestObject(r, t)
                    }, l = 0; l < n.length; l++)
                    if ((i = n[l]).errorCode)(d = d || []).push({
                        errorCode: i.errorCode,
                        adUnitId: i.adUnitId
                    });
                    else {
                        a && c.idMappings.push({
                            adUnitId: i.adUnitId,
                            id: i.impressionObject.id
                        }), o.bid_request.imp = o.bid_request.imp || [], o.bid_request.imp.push(i.impressionObject);
                        var p = !1;
                        (u + encodeURIComponent(JSON.stringify(o))).length > this.CONSTANTS.MAX_URL_LENGTH && (p = !0, 1 < o.bid_request.imp.length && (o.bid_request.imp.pop(), a && c.idMappings.pop(), l--)), !p && r.singleRequestMode && l !== n.length - 1 || (c.requests.push(this.formatRequest(r, o)), o = {
                            bid_request: this.createBasicBidRequestObject(r, t)
                        })
                    }
                return d && (c.errors = d), c
            }, this.formatRequest = function(e, r) {
                switch (e.returnObjType) {
                    case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:
                        return {
                            method: "GET",
                            url: "//".concat(this.CONSTANTS.AD_SERVER_BASE_URL, "/").concat(this.CONSTANTS.END_POINT),
                            data: "".concat(this.CONSTANTS.AD_SERVER_URL_PARAM).concat(encodeURIComponent(JSON.stringify(r)))
                        };
                    default:
                        return {
                            url: "".concat(1 === e.secure ? "https" : "http", "://") + "".concat(this.CONSTANTS.AD_SERVER_BASE_URL, "/") + "".concat(this.CONSTANTS.END_POINT, "?").concat(this.CONSTANTS.AD_SERVER_URL_PARAM) + encodeURIComponent(JSON.stringify(r))
                        }
                }
            }, this.createBasicBidRequestObject = function(e, r) {
                var t = {};
                if (e.requestId ? t.id = e.requestId : t.id = h.getUniqueIdentifierStr(), e.domain && (t.domain = e.domain), e.page && (t.page = e.page), e.ref && (t.ref = e.ref), e.callback && (t.callback = e.callback), "secure" in e && (t.secure = e.secure), e.libVersion && (t.version = e.libVersion + "-" + this.CONSTANTS.CLIENT_VERSION), e.referrer && (t.referrer = e.referrer), !e.gdpr && 0 !== e.gdpr || (t.gdpr = e.gdpr), r)
                    for (var i in r) t[i] = r[i];
                return t
            }, this.createImpressionObject = function(e) {
                var r = {},
                    t = {};
                if (r.impressionObject = t, e.id ? t.id = e.id : t.id = h.getUniqueIdentifierStr(), e.adUnitId && (r.adUnitId = e.adUnitId), e.currency && (t.currency = e.currency.toUpperCase()), e.placementId && (t.pid = e.placementId), e.publisherId && (t.pubid = e.publisherId), e.placementKey && (t.pkey = e.placementKey), e.transactionId && (t.tid = e.transactionId), e.keyValues)
                    for (var i in e.keyValues)
                        for (var n = 0; n < e.keyValues[i].length; n++) t.kvw = t.kvw || {}, t.kvw[i] = t.kvw[i] || [], t.kvw[i].push(e.keyValues[i][n]);
                if (t.banner = {}, e.size && e.size.w && e.size.h && (t.banner.w = e.size.w, t.banner.h = e.size.h), e.format && h.isArray(e.format)) {
                    var s = e.format.filter(function(e) {
                        return 2 === e.length && h.isInteger(e[0]) && h.isInteger(e[1]) && 0 <= e[0] && 0 <= e[1]
                    }).map(function(e) {
                        return {
                            w: e[0],
                            h: e[1]
                        }
                    });
                    0 < s.length && (t.banner.format = s)
                }
                return t.pid || t.pubid || t.pkey || t.banner && t.banner.w && t.banner.h || (r.impressionObject = null, r.errorCode = this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS), r
            }
        }
        Object(i.registerBidder)(n)
    }
}, [336]);
pbjsChunk([153], {
    340: function(e, t, r) {
        e.exports = r(341)
    },
    341: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return n
        });
        var h = r(0),
            i = r(1);

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }).apply(this, arguments)
        }
        var d = {
                inskin: {
                    BASE_URI: "https://mfad.inskinad.com/api/v2"
                }
            },
            n = {
                code: "inskin",
                isBidRequestValid: function(e) {
                    return !(!e.params.networkId || !e.params.siteId)
                },
                buildRequests: function(e, t) {
                    var i, r = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return r;
                    var n = s({
                        placements: [],
                        time: Date.now(),
                        user: {},
                        url: h.getTopWindowUrl(),
                        enableBotFiltering: !0,
                        includePricingData: !0,
                        parallel: !0
                    }, e[0].params);
                    return t && t.gdprConsent && (n.consent = {
                        gdprVendorId: 150,
                        gdprConsentString: t.gdprConsent.consentString,
                        gdprConsentRequired: "boolean" != typeof t.gdprConsent.gdprApplies || t.gdprConsent.gdprApplies
                    }), e.map(function(e) {
                        var t = d[e.bidder];
                        i = t.BASE_URI;
                        var r = s({
                            divName: e.bidId,
                            adTypes: e.adTypes || function(e) {
                                var r = [];
                                return e.forEach(function(e) {
                                    var t = a.indexOf(e[0] + "x" + e[1]);
                                    0 <= t && r.push(t)
                                }), r
                            }(e.sizes),
                            eventIds: [40, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295]
                        }, e.params);
                        r.adTypes.push(5, 9, 163, 2163, 3006), r.networkId && r.siteId && n.placements.push(r)
                    }), r.data = JSON.stringify(n), r.bidRequest = e, r.url = i, r
                },
                interpretResponse: function(i, e) {
                    var t, r, n, s, d, a = [],
                        o = {};
                    r = e.bidRequest, i = (i || {}).body;
                    for (var p = 0; p < r.length; p++)
                        if (t = {}, n = (s = r[p]).bidId, o[n] = s, i) {
                            var c = i.decisions && i.decisions[n],
                                u = c && c.contents && c.contents[0] && c.contents[0].data,
                                l = u && u.customData && u.customData.pubCPM,
                                m = c && c.pricing && c.pricing.clearPrice,
                                f = l || m;
                            c && f && (c.impressionUrl += "&property:pubcpm=" + f, s.price = f, t.requestId = n, t.cpm = f, t.width = c.width, t.height = c.height, t.ad = (d = c, "<script>window.top.postMessage({from: 'ism-bid', bidId: '" + n + "'}, '*');<\/script>" + h.createTrackPixelHtml(d.impressionUrl)), t.currency = "USD", t.creativeId = c.adId, t.ttl = 360, t.netRevenue = !0, t.referrer = h.getTopWindowUrl(), a.push(t))
                        }
                    return a.length && window.addEventListener("message", function(e) {
                        if (e.data && "ism-bid" === e.data.from && (i.decisions && i.decisions[e.data.bidId])) {
                            var t = "ism_tag_" + Math.floor(1e17 * Math.random());
                            window[t] = {
                                bidId: e.data.bidId,
                                bidPrice: o[e.data.bidId].price,
                                serverResponse: i
                            };
                            var r = document.createElement("script");
                            r.src = "https://cdn.inskinad.com/isfe/publishercode/" + o[e.data.bidId].params.siteId + "/default.js?autoload&id=" + t, document.getElementsByTagName("head")[0].appendChild(r)
                        }
                    }), a
                },
                getUserSyncs: function(e) {
                    var t = [];
                    return e.pixelEnabled && (t.push({
                        type: "image",
                        url: "https://e.serverbid.com/udb/9969/match?redir=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fpool%2Fset%2Fi.gif%3FpoolId%3D9969%26poolKey%3D"
                    }), t.push({
                        type: "image",
                        url: "https://ssum.casalemedia.com/usermatchredir?s=185638&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"
                    })), e.iframeEnabled && t.push({
                        type: "iframe",
                        url: "https://ssum-sec.casalemedia.com/usermatch?s=184665&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"
                    }), t
                }
            },
            a = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        a[77] = "970x90", a[123] = "970x250", a[43] = "300x600", Object(i.registerBidder)(n)
    }
}, [340]);
pbjsChunk([148], {
    355: function(e, n, t) {
        e.exports = t(356)
    },
    356: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), t.d(n, "spec", function() {
            return d
        }), t.d(n, "pixel", function() {
            return u
        });
        var r = t(1),
            i = [],
            a = Date.now(),
            c = {},
            s = [],
            d = {
                code: "justpremium",
                time: 6e4,
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.zone)
                },
                buildRequests: function(e, n) {
                    var t = function(e) {
                            var o = {},
                                c = {};
                            return e.forEach(function(e) {
                                var n = e.params,
                                    t = n.zone;
                                if (1 !== o[t]) {
                                    var r = n.allow || n.formats || [],
                                        i = n.exclude || [];
                                    if (0 === r.length && 0 === i.length) return o[n.zone] = 1;
                                    o[t] = o[t] || [
                                        [], {}
                                    ], o[t][0] = function(e) {
                                        for (var n = e.concat(), t = 0; t < n.length; ++t)
                                            for (var r = t + 1; r < n.length; ++r) n[t] === n[r] && n.splice(r--, 1);
                                        return n
                                    }(o[t][0].concat(r)), i.forEach(function(e) {
                                        o[t][1][e] ? o[t][1][e]++ : o[t][1][e] = 1
                                    }), c[t] = c[t] || 0, i.length && c[t]++
                                }
                            }), Object.keys(c).forEach(function(n) {
                                if (1 !== o[n]) {
                                    var t = [];
                                    Object.keys(o[n][1]).forEach(function(e) {
                                        o[n][1][e] === c[n] && t.push(e)
                                    }), o[n][1] = t
                                }
                            }), Object.keys(o).forEach(function(t) {
                                1 !== o[t] && o[t][1].length && (o[t][0].forEach(function(e) {
                                    var n = o[t][1].indexOf(e); - 1 < n && o[t][1].splice(n, 1)
                                }), o[t][0].length = 0), 1 === o[t] || o[t][0].length || o[t][1].length || (o[t] = 1)
                            }), o
                        }(e),
                        r = function() {
                            var n;
                            try {
                                n = window.top
                            } catch (e) {
                                n = window
                            }
                            return {
                                screenWidth: n.screen.width,
                                screenHeight: n.screen.height,
                                innerWidth: n.innerWidth,
                                innerHeight: n.innerHeight
                            }
                        }();
                    s = e.map(function(e) {
                        return e.adUnitCode
                    }).filter(function(e, n, t) {
                        return t.indexOf(e) === n
                    });
                    var i = {
                        zone: e.map(function(e) {
                            return parseInt(e.params.zone)
                        }).filter(function(e, n, t) {
                            return t.indexOf(e) === n
                        }),
                        referer: n.refererInfo.referer,
                        sw: r.screenWidth,
                        sh: r.screenHeight,
                        ww: r.innerWidth,
                        wh: r.innerHeight,
                        c: t,
                        id: e[0].params.zone,
                        sizes: {}
                    };
                    e.forEach(function(e) {
                        var n = e.params.zone,
                            t = i.sizes;
                        t[n] = t[n] || [], t[n].push.apply(t[n], e.sizes)
                    }), n && n.gdprConsent && (i.gdpr_consent = {
                        consent_string: n.gdprConsent.consentString,
                        consent_required: "boolean" != typeof n.gdprConsent.gdprApplies || n.gdprConsent.gdprApplies
                    }), i.version = {
                        prebid: "2.25.0",
                        jp_adapter: "1.4"
                    };
                    var o = JSON.stringify(i);
                    return c = i, {
                        method: "POST",
                        url: "//pre.ads.justpremium.com/v/2.0/t/xhr?i=" + +new Date,
                        data: o,
                        bids: e
                    }
                },
                interpretResponse: function(e, n) {
                    var i = e.body,
                        o = [];
                    return n.bids.forEach(function(e) {
                        var n = function(e, n) {
                            var t = e.zone;
                            if (n[t])
                                for (var r = n[t].length; r--;)
                                    if (f(e, n[t][r])) return n[t].splice(r, 1).pop();
                            return !1
                        }(e.params, i.bid);
                        if (n) {
                            var t = e.sizes && e.sizes.length && e.sizes[0] || [],
                                r = {
                                    requestId: e.bidId,
                                    creativeId: n.id,
                                    width: t[0] || n.width,
                                    height: t[1] || n.height,
                                    ad: n.adm,
                                    cpm: n.price,
                                    netRevenue: !0,
                                    currency: n.currency || "USD",
                                    ttl: n.ttl || d.time,
                                    format: n.format
                                };
                            o.push(r)
                        }
                    }), o
                },
                getUserSyncs: function(e, n, t) {
                    var r = "//pre.ads.justpremium.com/v/1.0/t/sync?_c=a" + Math.random().toString(36).substring(7) + Date.now();
                    return t && "boolean" == typeof t.gdprApplies && (r = r + "&consentString=" + encodeURIComponent(t.consentString)), e.iframeEnabled && i.push({
                        type: "iframe",
                        url: r
                    }), i
                },
                onTimeout: function(e) {
                    e.forEach(function(e) {
                        -1 != s.indexOf(e.adUnitCode) && function(e, n, t) {
                            var r = "",
                                i = {
                                    auc: e.adUnitCode,
                                    to: e.timeout
                                };
                            if (window.top == window) r = window.location.href;
                            else try {
                                r = window.top.location.href
                            } catch (e) {
                                r = document.referrer
                            }
                            var o = Date.now() - a,
                                c = "//emea-v3.tracking.justpremium.com/tracking.gif?rid=&sid=&uid=&vr=&\nru=".concat(encodeURIComponent(r), "&tt=&siw=&sh=").concat(n.sh, "&sw=").concat(n.sw, "&wh=").concat(n.wh, "&ww=").concat(n.ww, "&an=&vn=&\nsd=&_c=&et=&aid=&said=&ei=&fc=&sp=&at=bidder&cid=&ist=&mg=&dl=&dlt=&ev=&vt=&zid=").concat(n.id, "&dr=").concat(o, "&di=&pr=&\ncw=&ch=&nt=&st=&jp=").concat(encodeURIComponent(JSON.stringify(i)), "&ty=").concat(t);
                            u.fire(c)
                        }(e, c, "btm")
                    })
                }
            },
            u = {
                fire: function(e) {
                    var n = document.createElement("img");
                    n.src = e, n.id = "jp-pixel-track", n.style.cssText = "display:none !important;", document.body.appendChild(n)
                }
            };

        function f(e, n) {
            var t = n.format;
            return e.allow && e.allow.length ? -1 < e.allow.indexOf(t) : !e.exclude || !e.exclude.length || e.exclude.indexOf(t) < 0
        }
        Object(r.registerBidder)(d)
    }
}, [355]);
pbjsChunk([122], {
    417: function(e, t, n) {
        e.exports = n(418)
    },
    418: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetBoPixel = function() {
            f = !0
        }, n.d(t, "spec", function() {
            return h
        });
        var c = n(3),
            r = n(1),
            d = n(0),
            u = n(25),
            p = n(2),
            m = n(10);

        function s(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var a = [p.b, p.d],
            l = "openx",
            i = "hb_pb",
            o = "2.1.7",
            f = !0;
        var h = {
            code: l,
            supportedMediaTypes: a,
            isBidRequestValid: function(e) {
                var t = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
            },
            buildRequests: function(e, t) {
                if (0 === e.length) return [];
                var n = [],
                    r = s(function(e) {
                        return e.reduce(function(e, t) {
                            return ! function(e) {
                                return d.deepAccess(e, "mediaTypes.video") && !d.deepAccess(e, "mediaTypes.banner") || e.mediaType === p.d
                            }(t) ? e[1].push(t) : e[0].push(t), e
                        }, [
                            [],
                            []
                        ])
                    }(e), 2),
                    a = r[0],
                    i = r[1];
                return 0 < i.length && n.push(function(e, t) {
                    var r = [],
                        a = !1,
                        n = v(e, t),
                        i = d._map(e, function(e) {
                            return e.params.unit
                        });
                    n.aus = d._map(e, function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    }).join("|"), n.divIds = d._map(e, function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    }).join(","), i.some(function(e) {
                        return e
                    }) && (n.auid = i.join(","));
                    e.some(function(e) {
                        return e.params.doNotTrack
                    }) && (n.ns = 1);
                    !0 !== c.b.getConfig("coppa") && !e.some(function(e) {
                        return e.params.coppa
                    }) || (n.tfcd = 1);
                    e.forEach(function(t) {
                        if (t.params.customParams) {
                            var e = d._map(Object.keys(t.params.customParams), function(e) {
                                    return function(e, t) {
                                        var n = t[e];
                                        d.isArray(n) && (n = n.join(","));
                                        return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                    }(e, t.params.customParams)
                                }),
                                n = window.btoa(e.join("&"));
                            a = !0, r.push(n)
                        } else r.push("")
                    }), a && (n.tps = r.join(","));
                    var s = [],
                        o = !1;
                    e.forEach(function(e) {
                        e.params.customFloor ? (s.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), o = !0) : s.push(0)
                    }), o && (n.aumfs = s.join(","));
                    return {
                        method: "GET",
                        url: n.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                        data: n,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(i, t)), 0 < a.length && a.forEach(function(e) {
                    n.push(function(e, t) {
                        var n = function(e, t) {
                            var n, r, a = v([e], t),
                                i = d.deepAccess(e, "params.video") || {},
                                s = d.deepAccess(e, "mediaTypes.video.context"),
                                o = d.deepAccess(e, "mediaTypes.video.playerSize");
                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (n = parseInt(o[0], 10), r = parseInt(o[1], 10));
                            Object.keys(i).forEach(function(e) {
                                "openrtb" === e ? (i[e].w = n || i[e].w, i[e].v = r || i[e].v, a[e] = JSON.stringify(i[e])) : e in a || "url" === e || (a[e] = i[e])
                            }), a.auid = e.params.unit, a.vwd = n || i.vwd, a.vht = r || i.vht, "outstream" === s && (a.vos = "101");
                            i.mimes && (a.vmimes = i.mimes);
                            return a
                        }(e, t);
                        return {
                            method: "GET",
                            url: n.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(e.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: e,
                                startTime: new Date
                            }
                        }
                    }(e, t))
                }), n
            },
            interpretResponse: function(e, t) {
                var n = e.body;
                return function(e) {
                    return /avjp$/.test(e.url) ? p.d : p.b
                }(t) === p.d ? function(e, t) {
                    var n = t.bid,
                        r = t.startTime,
                        a = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var i = Object(m.c)(e.vastUrl).search || {},
                            s = {};
                        s.requestId = n.bidId, s.ttl = 300, s.netRevenue = !0, s.currency = e.currency, s.cpm = Number(e.pub_rev) / 1e3, s.width = e.width, s.height = e.height, s.creativeId = e.adid, s.vastUrl = e.vastUrl, s.mediaType = p.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, a.push(s), g(p.d, e, r)
                    }
                    return a
                }(n, t.payload) : function(e, t) {
                    for (var n = t.bids, r = t.startTime, a = e.ads.ad, i = [], s = 0; s < a.length; s++) {
                        var o = a[s],
                            c = parseInt(o.idx, 10),
                            d = {};
                        if (d.requestId = n[c].bidId, o.pub_rev) {
                            d.cpm = Number(o.pub_rev) / 1e3;
                            var u = o.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, d.meta = {}, o.brand_id && (d.meta.brandId = o.brand_id), o.adv_id && (d.meta.dspid = o.adv_id), i.push(d), g(p.b, o, r)
                        }
                    }
                    return i
                }(n, t.payload)
            },
            getUserSyncs: function(e, t) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, t) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function b(t) {
            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
            return d._map(Object.keys(t), function(e) {
                return "".concat(e, "=").concat(t[e])
            }).join("&")
        }

        function v(e, t) {
            var n, r = d.inIframe();
            if (n = {
                    ju: c.b.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: function(e) {
                        var t, n, r, a = window,
                            i = document,
                            s = i.documentElement;
                        if (e) {
                            try {
                                a = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            s = i.documentElement, r = i.body, t = a.innerWidth || s.clientWidth || r.clientWidth, n = a.innerHeight || s.clientHeight || r.clientHeight
                        } else s = i.documentElement, t = a.innerWidth || s.clientWidth, n = a.innerHeight || s.clientHeight;
                        return "".concat(t, "x").concat(n)
                    }(r),
                    be: 1,
                    bc: e[0].params.bc || "".concat(i, "_").concat(o),
                    dddid: d._map(e, function(e) {
                        return e.transactionId
                    }).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(t, "gdprConsent")) {
                var a = t.gdprConsent;
                void 0 !== a.consentString && (n.gdpr_consent = a.consentString), void 0 !== a.gdprApplies && (n.gdpr = a.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].userId && e[0].userId.pubcid ? n.pubcid = e[0].userId.pubcid : e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), n
        }

        function g(e, t, n) {
            if (f) {
                f = !1;
                var r, a = c.b.getConfig("bidderTimeout");
                window.PREBID_TIMEOUT && (a = Math.min(window.PREBID_TIMEOUT, a));
                var i = {
                    bd: +new Date - n,
                    bp: t.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: a,
                    ts: t.ts
                };
                if (i.br = i.bt < i.bd ? "t" : "p", e === p.d) {
                    var s = Object(m.c)(t.colo);
                    i.ph = t.ph, r = "//".concat(s.hostname, "/w/1.0/bo?").concat(b(i))
                } else {
                    var o = d.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    o && 1 < o.length && (r = "".concat(o[1], "bo?").concat(b(i)))
                }
                r && u.a.registerSync("image", l, r)
            }
        }
        Object(r.registerBidder)(h)
    }
}, [417]);
pbjsChunk([121], {
    419: function(e, t, n) {
        e.exports = n(420)
    },
    420: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "spec", function() {
            return s
        });
        var a = n(3),
            r = n(1),
            c = n(0),
            p = n(2),
            i = [p.b],
            u = "openxoutstream",
            o = "hb_pb_ym",
            d = "1.0.0",
            m = "!function(e,t){if(void 0===t._ym){var a=Math.round(5*Math.random()/3)+'';t._ym='';var m=e.createElement('script');m.type='text/javascript',m.async=!0,m.src='//static.yieldmo.com/ym.'+a+'.js',(e.getElementsByTagName('head')[0]||e.getElementsByTagName('body')[0]).appendChild(m)}else t._ym instanceof String||void 0===t._ym.chkPls||t._ym.chkPls()}(document,window);",
            l = "1986307928000988495",
            h = "2052941939925262540",
            s = {
                code: u,
                supportedMediaTypes: i,
                isBidRequestValid: function(e) {
                    return !(!e.params.delDomain || !e.params.unit)
                },
                buildRequests: function(e, t) {
                    if (0 === e.length) return [];
                    var n = [];
                    return e.forEach(function(e) {
                        n.push(function(e, t) {
                            var n = function(e, t) {
                                var n, r = c.inIframe();
                                if (n = {
                                        ju: a.b.getConfig("pageUrl") || c.getTopWindowUrl(),
                                        jr: c.getTopWindowReferrer(),
                                        ch: document.charSet || document.characterSet,
                                        res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                                        ifr: r,
                                        tz: (new Date).getTimezoneOffset(),
                                        tws: function(e) {
                                            var t, n, r, i = window;
                                            if (e) {
                                                var a;
                                                try {
                                                    i = window.top, a = window.top.document
                                                } catch (e) {
                                                    return
                                                }
                                                r = a.body, t = i.innerWidth || docEl.clientWidth || r.clientWidth, n = i.innerHeight || docEl.clientHeight || r.clientHeight
                                            } else t = i.innerWidth || docEl.clientWidth, n = i.innerHeight || docEl.clientHeight;
                                            return "".concat(t, "x").concat(n)
                                        }(r),
                                        be: 1,
                                        bc: e.params.bc || "".concat(o, "_").concat(d),
                                        auid: e.params.unit,
                                        dddid: e.transactionId,
                                        openrtb: "%7B%22mimes%22%3A%5B%22video%2Fmp4%22%5D%7D",
                                        nocache: (new Date).getTime(),
                                        vht: "184",
                                        vwd: "414",
                                        aus: "304x184%7C412x184%7C375x184%7C414x184"
                                    }, c.deepAccess(t, "gdprConsent")) {
                                    var i = t.gdprConsent;
                                    void 0 !== i.consentString && (n.gdpr_consent = i.consentString), void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0), "iab" === a.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
                                }
                                return n
                            }(e, t);
                            e.params.doNotTrack && (n.ns = 1);
                            !0 !== a.b.getConfig("coppa") && !e.params.coppa || (n.tfcd = 1);
                            return {
                                method: "GET",
                                url: "https://".concat(e.params.delDomain, "/v/1.0/avjp"),
                                data: n,
                                payload: {
                                    bid: e
                                }
                            }
                        }(e, t))
                    }), n
                },
                interpretResponse: function(e, t) {
                    return function(e, t) {
                        var n = e.body,
                            r = [];
                        if (void 0 !== e && "" !== n.vastUrl && n.pub_rev && 0 < n.pub_rev) {
                            var i = function() {
                                    var e = document.createElement("script");
                                    return e.innerHTML = m, e
                                }().outerHTML,
                                a = function() {
                                    var e = document.createElement("div");
                                    return e.id = "ym_".concat(l), e.classList.add("ym"), e.dataset.lfId = h, e
                                }();
                            a.dataset.pId = "1986307525700126029";
                            var c = a.outerHTML,
                                o = v(n.vastUrl),
                                d = '<script type="text/javascript"> window.__ymAds =' + JSON.stringify(o) + "<\/script>",
                                s = {};
                            s.requestId = t.bid.bidId, s.bidderCode = u, s.netRevenue = !0, s.currency = "USD", s.cpm = Number(n.pub_rev) / 1e3, s.creativeId = n.adid, s.height = n.height, s.width = n.width, s.vastUrl = n.vastUrl, s.ttl = 300, s.mediaType = p.b, s.ad = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' + c + d + i + "</body></html>", r.push(s)
                        }
                        return r
                    }(e, t.payload)
                }
            };
        Object(r.registerBidder)(s);
        var v = function(e) {
            return {
                loader: "openxoutstream",
                availability_zone: "",
                data: [{
                    ads: [{
                        actions: {},
                        adv_id: "1991358644725162800",
                        configurables: {
                            cta_button_copy: "Learn More",
                            vast_click_tracking: "true",
                            vast_url: e
                        },
                        cr_id: h
                    }],
                    column_count: 1,
                    configs: {
                        allowable_height: "248",
                        header_copy: "You May Like",
                        ping: "true"
                    },
                    creative_format_id: 40,
                    css: "",
                    placement_id: l
                }],
                nc: 0
            }
        }
    }
}, [419]);
pbjsChunk([105], {
    458: function(e, r, a) {
        e.exports = a(459)
    },
    459: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return k
        });
        var u = a(0),
            i = a(1),
            m = a(2),
            t = a(3);

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var h = "PubMatic: ",
            f = "USD",
            s = "nFIn8aLzbd",
            y = void 0,
            E = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array",
                OBJECT: "object"
            },
            o = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            },
            p = {
                TITLE: {
                    ID: 1,
                    KEY: "title",
                    TYPE: 0
                },
                IMAGE: {
                    ID: 2,
                    KEY: "image",
                    TYPE: 0
                },
                ICON: {
                    ID: 3,
                    KEY: "icon",
                    TYPE: 0
                },
                SPONSOREDBY: {
                    ID: 4,
                    KEY: "sponsoredBy",
                    TYPE: 1
                },
                BODY: {
                    ID: 5,
                    KEY: "body",
                    TYPE: 2
                },
                CLICKURL: {
                    ID: 6,
                    KEY: "clickUrl",
                    TYPE: 0
                },
                VIDEO: {
                    ID: 7,
                    KEY: "video",
                    TYPE: 0
                },
                EXT: {
                    ID: 8,
                    KEY: "ext",
                    TYPE: 0
                },
                DATA: {
                    ID: 9,
                    KEY: "data",
                    TYPE: 0
                },
                LOGO: {
                    ID: 10,
                    KEY: "logo",
                    TYPE: 0
                },
                SPONSORED: {
                    ID: 11,
                    KEY: "sponsored",
                    TYPE: 1
                },
                DESC: {
                    ID: 12,
                    KEY: "data",
                    TYPE: 2
                },
                RATING: {
                    ID: 13,
                    KEY: "rating",
                    TYPE: 3
                },
                LIKES: {
                    ID: 14,
                    KEY: "likes",
                    TYPE: 4
                },
                DOWNLOADS: {
                    ID: 15,
                    KEY: "downloads",
                    TYPE: 5
                },
                PRICE: {
                    ID: 16,
                    KEY: "price",
                    TYPE: 6
                },
                SALEPRICE: {
                    ID: 17,
                    KEY: "saleprice",
                    TYPE: 7
                },
                PHONE: {
                    ID: 18,
                    KEY: "phone",
                    TYPE: 8
                },
                ADDRESS: {
                    ID: 19,
                    KEY: "address",
                    TYPE: 9
                },
                DESC2: {
                    ID: 20,
                    KEY: "desc2",
                    TYPE: 10
                },
                DISPLAYURL: {
                    ID: 21,
                    KEY: "displayurl",
                    TYPE: 11
                },
                CTA: {
                    ID: 22,
                    KEY: "cta",
                    TYPE: 12
                }
            },
            c = {
                ICON: 1,
                LOGO: 2,
                IMAGE: 3
            },
            l = [{
                id: p.SPONSOREDBY.ID,
                required: !0,
                data: {
                    type: 1
                }
            }, {
                id: p.TITLE.ID,
                required: !0
            }, {
                id: p.IMAGE.ID,
                required: !0
            }],
            d = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            v = 0,
            I = !1,
            b = {},
            w = {};

        function T(e, r) {
            if (!u.isStr(r)) return r && u.logWarn(h + "Ignoring param key: " + e + ", expects string-value, found " + g(r)), y;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map(function(e) {
                        return e.trim()
                    }).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || y;
                case "yob":
                    return parseInt(r) || y;
                default:
                    return r
            }
        }

        function O(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = function(e) {
                return u.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
            }(e.params.adSlot);
            var r = e.params.adSlot,
                a = r.split(":");
            if (r = a[0], 2 == a.length && (e.params.adUnitIndex = a[1]), a = r.split("@"), e.params.adUnit = a[0], 1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void u.logWarn(h + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0]), e.params.height = parseInt(a[1])
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(m.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, t = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && t.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }

        function D(e, r, a) {
            var i, t = "Ignoring param key: " + e + ", expects " + a + ", found " + g(r);
            switch (a) {
                case n.BOOLEAN:
                    i = u.isBoolean;
                    break;
                case n.NUMBER:
                    i = u.isNumber;
                    break;
                case n.STRING:
                    i = u.isStr;
                    break;
                case n.ARRAY:
                    i = u.isArray
            }
            return i(r) ? r : (u.logWarn(h + t), y)
        }

        function S(e) {
            var r, a, i, t = {
                assets: []
            };
            for (var s in e) {
                if (e.hasOwnProperty(s)) {
                    var n = {};
                    if (!(t.assets && 0 < t.assets.length && t.assets.hasOwnProperty(s))) switch (s) {
                        case p.TITLE.KEY:
                            e[s].len || e[s].length ? n = {
                                id: p.TITLE.ID,
                                required: e[s].required ? 1 : 0,
                                title: {
                                    len: e[s].len || e[s].length,
                                    ext: e[s].ext
                                }
                            } : u.logWarn(h + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.IMAGE.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: p.IMAGE.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.IMAGE,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y),
                                    wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : y),
                                    hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : y),
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            } : u.logWarn(h + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.ICON.KEY:
                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                id: p.ICON.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.ICON,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y)
                                }
                            } : u.logWarn(h + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.VIDEO.KEY:
                            n = {
                                id: p.VIDEO.ID,
                                required: e[s].required ? 1 : 0,
                                video: {
                                    minduration: e[s].minduration,
                                    maxduration: e[s].maxduration,
                                    protocols: e[s].protocols,
                                    mimes: e[s].mimes,
                                    ext: e[s].ext
                                }
                            };
                            break;
                        case p.EXT.KEY:
                            n = {
                                id: p.EXT.ID,
                                required: e[s].required ? 1 : 0
                            };
                            break;
                        case p.LOGO.KEY:
                            n = {
                                id: p.LOGO.ID,
                                required: e[s].required ? 1 : 0,
                                img: {
                                    type: c.LOGO,
                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : y),
                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : y)
                                }
                            };
                            break;
                        case p.SPONSOREDBY.KEY:
                        case p.BODY.KEY:
                        case p.RATING.KEY:
                        case p.LIKES.KEY:
                        case p.DOWNLOADS.KEY:
                        case p.PRICE.KEY:
                        case p.SALEPRICE.KEY:
                        case p.PHONE.KEY:
                        case p.ADDRESS.KEY:
                        case p.DESC2.KEY:
                        case p.DISPLAYURL.KEY:
                        case p.CTA.KEY:
                            r = w[s], a = e, void 0, i = r.KEY, n = {
                                id: r.ID,
                                required: a[i].required ? 1 : 0,
                                data: {
                                    type: r.TYPE,
                                    len: a[i].len,
                                    ext: a[i].ext
                                }
                            }
                    }
                }
                n && n.id && (t.assets[t.assets.length] = n)
            }
            var o = l.length,
                d = 0;
            return l.forEach(function(e) {
                for (var r = t.assets.length, a = 0; a < r; a++)
                    if (e.id == t.assets[a].id) {
                        d++;
                        break
                    }
            }), I = o != d, t
        }

        function Y(e) {
            var r, a = e.mediaTypes.banner.sizes,
                i = [];
            if (a !== y && u.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                else {
                    if (0 === a.length) return r = y, u.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                    r.w = parseInt(a[0][0]), r.h = parseInt(a[0][1]), a = a.splice(1, a.length - 1)
                }
                0 < a.length && (i = [], a.forEach(function(e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    })
                }), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = u.inIframe() ? 0 : 1
            } else u.logWarn(h + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
            return r
        }

        function P(e) {
            var r, a = e.params.video;
            if (a !== y) {
                for (var i in r = {}, o) a.hasOwnProperty(i) && (r[i] = D(i, a[i], o[i]));
                u.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0]), r.h = parseInt(e.mediaTypes.video.playerSize[0][1])) : u.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0]), r.h = parseInt(e.mediaTypes.video.playerSize[1])), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = y, u.logWarn(h + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function R(e) {
            var r = function(e) {
                var r, a = (r = window.DigiTrust && (t.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: e
                }))) && r.success && r.identity || null;
                return !a || a.privacy && a.privacy.optout ? null : a
            }(s);
            null !== r && e.push({
                source: "digitru.st",
                uids: [{
                    id: r.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(r.keyv) || 0
                    }
                }]
            })
        }

        function A(e, r) {
            var a = [];
            R(a),
                function(e, r) {
                    var a = null,
                        i = t.b.getConfig("adsrvrOrgId");
                    u.isStr(u.deepAccess(r, "0.userId.tdid")) ? a = r[0].userId.tdid : i && u.isStr(i.TDID) && (a = i.TDID), null !== a && e.push({
                        source: "adserver.org",
                        uids: [{
                            id: a,
                            atype: 1,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        }]
                    })
                }(a, r), 0 < a.length && (e.user.eids = a)
        }
        u._each(p, function(e) {
            b[e.ID] = e.KEY
        }), u._each(p, function(e) {
            w[e.KEY] = e
        });
        var k = {
            code: "pubmatic",
            supportedMediaTypes: [m.b, m.d, m.c],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (u.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && u.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (u.logWarn(h + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (u.logWarn(h + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, t, s = function(e) {
                        var r = {};
                        return r.pageURL = u.getTopWindowUrl(), e && e.referer ? r.refURL = e.referer : r.refURL = "", r
                    }(a),
                    n = function(e) {
                        return {
                            id: "" + (new Date).getTime(),
                            at: 1,
                            cur: [f],
                            imp: [],
                            site: {
                                page: e.pageURL,
                                ref: e.refURL,
                                publisher: {}
                            },
                            device: {
                                ua: navigator.userAgent,
                                js: 1,
                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                h: screen.height,
                                w: screen.width,
                                language: navigator.language
                            },
                            user: {},
                            ext: {}
                        }
                    }(s),
                    o = "",
                    d = "",
                    p = [],
                    c = [];
                if (e.forEach(function(e) {
                        if ((t = u.deepClone(e)).params.adSlot = t.params.adSlot || "", O(t), t.params.hasOwnProperty("video"));
                        else if (!(t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(m.c) || 0 !== t.params.width || 0 !== t.params.height)) return void u.logWarn(h + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t));
                        s.pubId = s.pubId || t.params.publisherId, (s = function(e, r) {
                            var a, i, t;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), E) E.hasOwnProperty(a) && (i = e[a]) && ("object" === g(t = E[a]) && (i = t.f(i, r)), u.isStr(i) ? r[a] = i : u.logWarn(h + "Ignoring param : " + a + " with value : " + E[a] + ", expects string-value, found " + g(i)));
                            return r
                        }(t.params, s)).transactionId = t.transactionId, "" === o ? o = t.params.currency || y : t.params.hasOwnProperty("currency") && o !== t.params.currency && u.logWarn(h + "Currency specifier ignored. Only one currency permitted."), t.params.currency = o, t.params.hasOwnProperty("dctr") && u.isStr(t.params.dctr) && p.push(t.params.dctr), t.params.hasOwnProperty("bcat") && u.isArray(t.params.bcat) && (c = c.concat(t.params.bcat));
                        var r = function(e) {
                            var r, a, i = {},
                                t = {},
                                s = e.hasOwnProperty("sizes") ? e.sizes : [],
                                n = "",
                                o = [];
                            if (i = {
                                    id: e.bidId,
                                    tagid: e.params.adUnit || void 0,
                                    bidfloor: T("kadfloor", e.params.kadfloor),
                                    secure: 1,
                                    ext: {
                                        pmZoneId: T("pmzoneid", e.params.pmzoneid)
                                    },
                                    bidfloorcur: e.params.currency ? T("currency", e.params.currency) : f
                                }, e.hasOwnProperty("mediaTypes"))
                                for (n in e.mediaTypes) switch (n) {
                                    case m.b:
                                        (r = Y(e)) !== y && (i.banner = r);
                                        break;
                                    case m.c:
                                        t.request = JSON.stringify(S(e.nativeParams)), I ? u.logWarn(h + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = t;
                                        break;
                                    case m.d:
                                        (a = P(e)) !== y && (i.video = a)
                                } else r = {
                                    pos: 0,
                                    w: e.params.width,
                                    h: e.params.height,
                                    topframe: u.inIframe() ? 0 : 1
                                }, u.isArray(s) && 1 < s.length && ((s = s.splice(1, s.length - 1)).forEach(function(e) {
                                    o.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                }), r.format = o), i.banner = r;
                            return i.hasOwnProperty(m.b) || i.hasOwnProperty(m.c) || i.hasOwnProperty(m.d) ? i : y
                        }(t);
                        r && n.imp.push(r)
                    }), 0 != n.imp.length) {
                    if (n.site.publisher.id = s.pubId.trim(), v = s.pubId.trim(), n.ext.wrapper = {}, n.ext.wrapper.profile = parseInt(s.profId) || y, n.ext.wrapper.version = parseInt(s.verId) || y, n.ext.wrapper.wiid = s.wiid || y, n.ext.wrapper.wv = "prebid_prebid_2.25.0", n.ext.wrapper.transactionId = s.transactionId, n.ext.wrapper.wp = "pbjs", n.user.gender = s.gender ? s.gender.trim() : y, n.user.geo = {}, r && r.gdprConsent && (n.user.ext = {
                            consent: r.gdprConsent.consentString
                        }, n.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }), n.user.geo.lat = T("lat", s.lat), n.user.geo.lon = T("lon", s.lon), n.user.yob = T("yob", s.yob), n.device.geo = n.user.geo, n.site.page = s.kadpageurl.trim() || n.site.page.trim(), n.site.domain = function(e) {
                            var r = document.createElement("a");
                            return r.href = e, r.hostname
                        }(n.site.page), 0 < p.length)
                        if (e[0].params.hasOwnProperty("dctr")) {
                            if (d = e[0].params.dctr, u.isStr(d) && 0 < d.length) {
                                var l = d.split("|");
                                d = "", l.forEach(function(e) {
                                    d += 0 < e.length ? e.trim() + "|" : ""
                                }), i = d.length, "|" === d.substring(i, i - 1) && (d = d.substring(0, i - 1)), n.site.ext = {
                                    key_val: d.trim()
                                }
                            } else u.logWarn(h + "Ignoring param : dctr with value : " + d + ", expects string-value, found empty or non-string value");
                            1 < p.length && u.logWarn(h + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        } else u.logWarn(h + "dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return A(n, e),
                        function(e, r) {
                            0 < (r = r.filter(function(e) {
                                return "string" == typeof e || (u.logWarn(h + "bcat: Each category should be a string, ignoring category: " + e), !1)
                            }).map(function(e) {
                                return e.trim()
                            }).filter(function(e, r, a) {
                                if (3 < e.length) return a.indexOf(e) === r;
                                u.logWarn(h + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                            })).length && (u.logWarn(h + "bcat: Selected: ", r), e.bcat = r)
                        }(n, c), {
                            method: "POST",
                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(n)
                        }
                }
            },
            interpretResponse: function(e, i) {
                var t = [],
                    s = f;
                try {
                    e.body && e.body.seatbid && u.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && u.isArray(e.bid) && e.bid.forEach(function(r) {
                            var e = JSON.parse(i.data),
                                a = {
                                    requestId: r.impid,
                                    cpm: (parseFloat(r.price) || 0).toFixed(2),
                                    width: r.w,
                                    height: r.h,
                                    creativeId: r.crid || r.id,
                                    dealId: r.dealid,
                                    currency: s,
                                    netRevenue: !1,
                                    ttl: 300,
                                    referrer: e.site && e.site.ref ? e.site.ref : "",
                                    ad: r.adm
                                };
                            e.imp && 0 < e.imp.length && e.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (function(r, e) {
                                    var a = "",
                                        i = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = m.b;
                                    else if (i.test(r)) e.mediaType = m.d;
                                    else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = m.c)
                                    } catch (e) {
                                        u.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r)
                                    }
                                }(r.adm, a), a.mediaType) {
                                    case m.b:
                                        break;
                                    case m.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm;
                                        break;
                                    case m.c:
                                        ! function(e, r) {
                                            if (r.native = {}, e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return u.logWarn(h + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = m.c;
                                                    for (var i = 0, t = a.native.assets.length; i < t; i++) switch (a.native.assets[i].id) {
                                                        case p.TITLE.ID:
                                                            r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                            break;
                                                        case p.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.SPONSOREDBY.ID:
                                                        case p.BODY.ID:
                                                        case p.LIKES.ID:
                                                        case p.DOWNLOADS.ID:
                                                        case p.PRICE:
                                                        case p.SALEPRICE.ID:
                                                        case p.PHONE.ID:
                                                        case p.ADDRESS.ID:
                                                        case p.DESC2.ID:
                                                        case p.CTA.ID:
                                                        case p.RATING.ID:
                                                        case p.DISPLAYURL.ID:
                                                            r.native[b[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value
                                                    }
                                                    r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                }
                                            }
                                        }(r, a)
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.clickUrl = r.adomain[0]), t.push(a)
                        })
                    }))
                } catch (e) {
                    u.logError(e)
                }
                return t
            },
            getUserSyncs: function(e, r, a) {
                var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + v;
                if (a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), e.iframeEnabled) return [{
                    type: "iframe",
                    url: i
                }];
                u.logWarn(h + "Please enable iframe based user sync.")
            },
            transformBidParams: function(e, r) {
                return u.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(i.registerBidder)(k)
    }
}, [458]);
pbjsChunk([103], {
    466: function(e, t, r) {
        e.exports = r(467)
    },
    467: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return o
        });
        var d = r(0),
            n = r(1),
            s = r(12);

        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }
        var a = {
                TITLE_LEN: 100,
                DESCR_LEN: 200,
                SPONSORED_BY_LEN: 50,
                IMG_MIN: 150,
                ICON_MIN: 50
            },
            u = ["cp", "ct", "cf", "video", "battr", "bcat", "badv", "bidfloor"],
            o = {
                code: "pulsepoint",
                aliases: ["pulseLite", "pulsepointLite"],
                supportedMediaTypes: ["banner", "native", "video"],
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.cp && e.params.ct)
                },
                buildRequests: function(e, t) {
                    return {
                        method: "POST",
                        url: "https://bid.contextweb.com/header/ortb?src=prebid",
                        data: {
                            id: e[0].bidderRequestId,
                            imp: e.map(function(e) {
                                return function(e) {
                                    return {
                                        id: e.bidId,
                                        banner: function(e) {
                                            var t = function(e) {
                                                if (e.params.cf) {
                                                    var t = e.params.cf.toUpperCase().split("X"),
                                                        r = parseInt(e.params.cw || t[0], 10),
                                                        n = parseInt(e.params.ch || t[1], 10);
                                                    return [r, n]
                                                }
                                                return [1, 1]
                                            }(e);
                                            return e.nativeParams || e.params.video ? null : {
                                                w: t[0],
                                                h: t[1],
                                                battr: e.params.battr
                                            }
                                        }(e),
                                        native: function(e) {
                                            if (e.nativeParams) {
                                                var t = [];
                                                return c(t, function(e, t, r) {
                                                    if (t) return {
                                                        id: e,
                                                        required: t.required ? 1 : 0,
                                                        title: {
                                                            len: t.len || r
                                                        }
                                                    };
                                                    return null
                                                }(t.length + 1, e.nativeParams.title, a.TITLE_LEN)), c(t, l(t.length + 1, e.nativeParams.body, 2, a.DESCR_LEN)), c(t, l(t.length + 1, e.nativeParams.sponsoredBy, 1, a.SPONSORED_BY_LEN)), c(t, p(t.length + 1, e.nativeParams.icon, 1, a.ICON_MIN, a.ICON_MIN)), c(t, p(t.length + 1, e.nativeParams.image, 3, a.IMG_MIN, a.IMG_MIN)), {
                                                    request: JSON.stringify({
                                                        assets: t
                                                    }),
                                                    ver: "1.1",
                                                    battr: e.params.battr
                                                }
                                            }
                                            return null
                                        }(e),
                                        tagid: e.params.ct.toString(),
                                        video: function(e) {
                                            if (e.params.video) return i({}, e.params.video, {
                                                battr: e.params.battr
                                            });
                                            return null
                                        }(e),
                                        bidfloor: e.params.bidfloor,
                                        ext: function(t) {
                                            var r = {},
                                                n = {};
                                            return u.forEach(function(e) {
                                                return n[e] = 1
                                            }), Object.keys(t.params).forEach(function(e) {
                                                n[e] || (r[e] = t.params[e])
                                            }), 0 < Object.keys(r).length ? {
                                                prebid: r
                                            } : null
                                        }(e)
                                    }
                                }(e)
                            }),
                            site: function(e) {
                                var t = e && 0 < e.length ? e[0].params.cp : "0";
                                return e[0].params.app ? null : {
                                    publisher: {
                                        id: t.toString()
                                    },
                                    ref: function() {
                                        try {
                                            return window.top.document.referrer
                                        } catch (e) {
                                            return document.referrer
                                        }
                                    }(),
                                    page: d.getTopWindowLocation().href
                                }
                            }(e),
                            app: function(e) {
                                var t = e && 0 < e.length ? e[0].params.cp : "0",
                                    r = e[0].params.app;
                                if (r) return {
                                    publisher: {
                                        id: t.toString()
                                    },
                                    bundle: r.bundle,
                                    storeurl: r.storeUrl,
                                    domain: r.domain
                                };
                                return null
                            }(e),
                            device: {
                                ua: navigator.userAgent,
                                language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                            },
                            bcat: e[0].params.bcat,
                            badv: e[0].params.badv,
                            user: function(e, t) {
                                var r = {};
                                t && t.gdprConsent && (r.consent = t.gdprConsent.consentString);
                                e && e.userId && (r.eids = [], f(r.eids, e.userId.pubcid, "pubcommon"), f(r.eids, e.userId.tdid, "ttdid"), f(r.eids, d.deepAccess(e.userId.digitrustid, "data.id"), "digitrust"), f(r.eids, e.userId.id5id, "id5id"));
                                return {
                                    ext: r
                                }
                            }(e[0], t),
                            regs: function(e) {
                                if (e && e.gdprConsent) return {
                                    ext: {
                                        gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                                    }
                                };
                                return null
                            }(t)
                        },
                        bidderRequest: t
                    }
                },
                interpretResponse: function(e, t) {
                    return function(e, t) {
                        var r = {},
                            n = {},
                            i = {},
                            a = t.body;
                        e.data.imp.forEach(function(e) {
                            r[e.id] = e
                        }), a && a.seatbid.forEach(function(e) {
                            return e.bid.forEach(function(e) {
                                n[e.impid] = e
                            })
                        });
                        e.bidderRequest && e.bidderRequest.bids.forEach(function(e) {
                            i[e.bidId] = e
                        });
                        var u = [];
                        return Object.keys(r).forEach(function(e) {
                            if (n[e]) {
                                var t = {
                                    requestId: e,
                                    cpm: n[e].price,
                                    creative_id: n[e].crid,
                                    creativeId: n[e].crid,
                                    adId: e,
                                    ttl: 20,
                                    netRevenue: !0,
                                    currency: "USD"
                                };
                                r[e].native ? (t.native = function(e, t) {
                                        if (e.native) {
                                            var r = function(e) {
                                                    try {
                                                        if (e) return JSON.parse(e)
                                                    } catch (e) {
                                                        d.logError("pulsepointLite.safeParse", "ERROR", e)
                                                    }
                                                    return null
                                                }(t.adm),
                                                n = {};
                                            if (r && r.native && r.native.assets) return r.native.assets.forEach(function(e) {
                                                n.title = e.title ? e.title.text : n.title, n.body = e.data && 2 === e.data.type ? e.data.value : n.body, n.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : n.sponsoredBy, n.image = e.img && 3 === e.img.type ? e.img.url : n.image, n.icon = e.img && 1 === e.img.type ? e.img.url : n.icon
                                            }), r.native.link && (n.clickUrl = encodeURIComponent(r.native.link.url)), n.impressionTrackers = r.native.imptrackers, n
                                        }
                                        return null
                                    }(r[e], n[e]), t.mediaType = "native") : r[e].video ? (i[e] && "outstream" === d.deepAccess(i[e], "mediaTypes.video.context") && (t.renderer = function(r, e) {
                                        var t = s.a.install({
                                            url: e.rendererUrl,
                                            config: {
                                                defaultOptions: e.config,
                                                rendererOptions: r,
                                                type: e.type
                                            },
                                            loaded: !1
                                        });
                                        return t.setRender(function(t) {
                                            t.renderer.push(function() {
                                                var e = t.renderer.getConfig();
                                                (new window.PulsePointOutstreamRenderer).render({
                                                    adUnitCode: t.adUnitCode,
                                                    vastXml: t.vastXml,
                                                    type: e.type,
                                                    defaultOptions: e.defaultOptions,
                                                    rendererOptions: r
                                                })
                                            })
                                        }), t
                                    }(d.deepAccess(i[e], "renderer.options"), d.deepAccess(n[e], "ext.outstream"))), t.vastXml = n[e].adm, t.mediaType = "video", t.width = n[e].w, t.height = n[e].h) : (t.ad = n[e].adm, t.width = r[e].banner.w, t.height = r[e].banner.h),
                                    function(e, t) {
                                        t && t.ext && (e.ttl = t.ext.ttl || e.ttl, e.currency = t.ext.currency || e.currency, e.netRevenue = null != t.ext.netRevenue ? t.ext.netRevenue : e.netRevenue)
                                    }(t, n[e]), u.push(t)
                            }
                        }), u
                    }(t, e)
                },
                getUserSyncs: function(e) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://bh.contextweb.com/visitormatch"
                    }] : e.pixelEnabled ? [{
                        type: "image",
                        url: "https://bh.contextweb.com/visitormatch/prebid"
                    }] : void 0
                },
                transformBidParams: function(e, t) {
                    return d.convertTypes({
                        cf: "string",
                        cp: "number",
                        ct: "number"
                    }, e)
                }
            };

        function c(e, t) {
            t && e.push(t)
        }

        function p(e, t, r, n, i) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                img: {
                    type: r,
                    wmin: t.wmin || n,
                    hmin: t.hmin || i
                }
            } : null
        }

        function l(e, t, r, n) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                data: {
                    type: r,
                    len: t.len || n
                }
            } : null
        }

        function f(e, t, r) {
            t && e.push({
                source: r,
                uids: [{
                    id: t
                }]
            })
        }
        Object(n.registerBidder)(o)
    }
}, [466]);
pbjsChunk([90], {
    502: function(e, r, t) {
        e.exports = t(503)
    },
    503: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return n
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return a
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return o
        }), t.d(r, "spec", function() {
            return s
        }), r.hasVideoMediaType = I, r.masSizeOrdering = S, r.determineRubiconVideoSizeId = T, r.getPriceGranularity = k, r.hasValidVideoParams = j, r.resetUserSync = function() {
            w = !1
        };
        var d = t(0),
            i = t(1),
            u = t(3),
            c = t(2);

        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function v() {
            return "https:" === location.protocol
        }
        var n = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            a = "//prebid-server.rubiconproject.com/openrtb2/auction",
            o = "https://eus.rubiconproject.com/usync.html",
            g = {
                FASTLANE: {
                    id: "dt.id",
                    keyv: "dt.keyv",
                    pref: "dt.pref"
                },
                PREBID_SERVER: {
                    id: "id",
                    keyv: "keyv"
                }
            },
            b = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600",
                265: "1920x1080",
                288: "640x380"
            };
        d._each(b, function(e, r) {
            return b[e] = r
        });
        var s = {
            code: "rubicon",
            supportedMediaTypes: [c.b, c.d],
            isBidRequestValid: function(e) {
                if ("object" !== m(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return d.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."), !1;
                var i = A(e, !0);
                return !!i && ("video" !== i || j(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter(function(e) {
                        return "video" === A(e)
                    }).map(function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                                id: e.transactionId,
                                test: u.b.getConfig("debug") ? 1 : 0,
                                cur: ["USD"],
                                source: {
                                    tid: e.transactionId
                                },
                                tmax: u.b.getConfig("TTL") || 1e3,
                                imp: [{
                                    exp: 300,
                                    id: e.adUnitCode,
                                    secure: v() || e.params.secure ? 1 : 0,
                                    ext: {
                                        rubicon: e.params
                                    },
                                    video: d.deepAccess(e, "mediaTypes.video") || {}
                                }],
                                ext: {
                                    prebid: {
                                        cache: {
                                            vastxml: {
                                                returnCreative: !1
                                            }
                                        },
                                        targeting: {
                                            includewinners: !0,
                                            includebidderkeys: !1,
                                            pricegranularity: k(u.b)
                                        }
                                    }
                                }
                            },
                            t = parseFloat(d.deepAccess(e, "params.floor"));
                        isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext.rubicon.video.size_id = T(e),
                            function(r, t, e) {
                                if (!r) return;
                                "object" === m(u.b.getConfig("app")) ? r.app = u.b.getConfig("app") : r.site = {
                                    page: h(t, e)
                                };
                                "object" === m(u.b.getConfig("device")) && (r.device = u.b.getConfig("device"));
                                t.params.video.language && ["site", "device"].forEach(function(e) {
                                    r[e] && (r[e].content = l({
                                        language: t.params.video.language
                                    }, r[e].content))
                                })
                            }(r, e, o),
                            function(e, r) {
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === m(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                                var t = x(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(r, e);
                        var i, n = y(e, "PREBID_SERVER");
                        n && d.deepSetValue(r, "user.ext.digitrust", n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                            gdpr: i
                        } : r.regs = {
                            ext: {
                                gdpr: i
                            }
                        }, d.deepSetValue(r, "user.ext.consent", o.gdprConsent.consentString));
                        return e.userId && "object" === m(e.userId) && (e.userId.tdid || e.userId.pubcid) && (d.deepSetValue(r, "user.ext.eids", []), e.userId.tdid && r.user.ext.eids.push({
                            source: "adserver.org",
                            uids: [{
                                id: e.userId.tdid,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }), e.userId.pubcid && r.user.ext.eids.push({
                            source: "pubcommon",
                            uids: [{
                                id: e.userId.pubcid
                            }]
                        })), !0 === u.b.getConfig("coppa") && d.deepSetValue(request, "regs.coppa", 1), {
                            method: "POST",
                            url: a,
                            data: r,
                            bidRequest: e
                        }
                    });
                if (!0 !== u.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === A(e)
                }).map(function(e) {
                    var i = s.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: n,
                        data: s.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return d.isStr(t) && "" !== t || d.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                }));
                else {
                    var i = e.filter(function(e) {
                        return "banner" === A(e)
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }, {});
                    r = t.concat(Object.keys(i).reduce(function(r, e) {
                        return function(t, i) {
                            return t.map(function(e, r) {
                                return r % i == 0 ? t.slice(r, r + i) : null
                            }).filter(function(e) {
                                return e
                            })
                        }(i[e], 10).forEach(function(e) {
                            var i = s.combineSlotUrlParams(e.map(function(e) {
                                return s.createSlotParams(e, o)
                            }));
                            r.push({
                                method: "GET",
                                url: n,
                                data: s.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return d.isStr(t) && "" !== t || d.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                                }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                bidRequest: e
                            })
                        }), r
                    }, []))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e)
                }))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                        return Object.keys(t).forEach(function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        }), r
                    }, {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                }), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = x(e, "banner"),
                    n = f(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = u.b.getConfig("rubicon.int_type"),
                    d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: v() ? "1" : "0",
                        tk_flint: "".concat(s || "pbjs_lite", "_v2.25.0"),
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: h(e, r)
                    };
                (e.userId || {}).tdid && (d.tpid_tdid = e.userId.tdid), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === m(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (d["tg_v.".concat(e)] = t.visitor[e].toString())
                }), null !== t.inventory && "object" === m(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (d["tg_i.".concat(e)] = t.inventory[e].toString())
                });
                var c = y(e, "FASTLANE");
                return l(d, c), !0 === u.b.getConfig("coppa") && (d.coppa = 1), d
            },
            interpretResponse: function(a, e) {
                var s = e.bidRequest;
                if (!(a = a.body) || "object" !== m(a)) return [];
                if (a.seatbid) {
                    var r = d.deepAccess(a, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && r.forEach(function(e) {
                        d.logError("Got error from PBS Java openRTB: " + e)
                    });
                    var o = [];
                    return a.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: s.bidId,
                                currency: a.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: u.b.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || d.deepAccess(s, "mediaTypes.video.w") || d.deepAccess(s, "params.video.playerWidth"),
                                height: e.h || d.deepAccess(s, "mediaTypes.video.h") || d.deepAccess(s, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = d.deepAccess(a, "ext.responsetimemillis.rubicon");
                            if (s && t && (s.serverResponseTimeMs = t), d.deepAccess(e, "ext.prebid.type") === c.d) {
                                r.mediaType = c.d;
                                var i = d.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === m(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === m(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else d.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                            o.push(r)
                        })
                    }), o
                }
                var t = a.ads;
                return "object" !== m(s) || Array.isArray(s) || "video" !== A(s) || "object" !== m(t) || (t = t[s.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(s) ? s[t] : s;
                    if (i && "object" === m(i)) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: u.b.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            },
                            meta: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === c.d) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(r, "'>\n<script type='text/javascript'>").concat(e, "<\/script>\n</div>\n</body>\n</html>")
                            }(r.script, r.impression_id);
                            var o = f(b[r.size_id].split("x").map(function(e) {
                                return Number(e)
                            }), 2);
                            n.width = o[0], n.height = o[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e
                        }, {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else d.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), s, a);
                    return e
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function(e, r, t) {
                if (!w && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), w = !0, {
                        type: "iframe",
                        url: o + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return d.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !g[n]) return null;
            var o = g[n];
            var a = function() {
                var e = d.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (u.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (p(t = {}, o.id, a.id), p(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function h(e, r) {
            var t = u.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function x(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(d.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== d.deepAccess(e, "mediaTypes.banner.sizes") ? n = _(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = _(e.sizes) : d.logWarn("Warning: no sizes are setup or found"), S(n)
        }

        function _(e) {
            return d.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(b[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function I(e) {
            return "object" === m(d.deepAccess(e, "params.video")) && void 0 !== d.deepAccess(e, "mediaTypes.".concat(c.d))
        }

        function A(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return I(e) ? -1 === ["outstream", "instream"].indexOf(d.deepAccess(e, "mediaTypes.".concat(c.d, ".context"))) ? void(t && d.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : x(e, "video").length < 2 ? void(t && d.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (t && d.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video") : 0 === x(e, "banner").length ? void(t && d.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (t && d.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function S(e) {
            var n = [15, 2, 9];
            return e.sort(function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function T(e) {
            var r = parseInt(d.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === d.deepAccess(e, "mediaTypes.".concat(c.d, ".context")) ? 203 : 201 : r
        }

        function k(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function j(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(d.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, d.logError("Rubicon Bid Adapter: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }
        var w = !1;
        Object(i.registerBidder)(s)
    }
}, [502]);
pbjsChunk([72], {
    550: function(e, t, r) {
        e.exports = r(551)
    },
    551: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return n
        });
        var P = r(0),
            c = r(12),
            a = r(1),
            u = r(2);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var d = "spotx",
            n = {
                code: d,
                aliases: ["spotx"],
                supportedMediaTypes: [u.d],
                isBidRequestValid: function(e) {
                    if (e && "object" !== i(e.params)) return P.logError(d + ": params is not defined or is incorrect in the bidder settings."), !1;
                    if (!P.deepAccess(e, "mediaTypes.video")) return P.logError(d + ": mediaTypes.video is not present in the bidder settings."), !1;
                    var t = P.deepAccess(e, "mediaTypes.video.playerSize");
                    if (!t || !P.isArray(t)) return P.logError(d + ": mediaTypes.video.playerSize is not defined in the bidder settings."), !1;
                    if (!P.getBidIdParameter("channel_id", e.params)) return P.logError(d + ": channel_id is not present in bidder params"), !1;
                    if (("outstream" == P.deepAccess(e, "mediaTypes.video.context") || "outstream" == P.deepAccess(e, "params.ad_unit")) && !P.getBidIdParameter("outstream_function", e.params)) {
                        if (!P.getBidIdParameter("outstream_options", e.params)) return P.logError(d + ": please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."), !1;
                        if (!P.getBidIdParameter("slot", e.params.outstream_options)) return P.logError(d + ": please define parameters slot outstream_options object in the configuration."), !1
                    }
                    return !0
                },
                buildRequests: function(e, h) {
                    var b = h.refererInfo.referer,
                        y = !!b.match(/^https:/);
                    return e.map(function(e) {
                        var t = P.getBidIdParameter("channel_id", e.params),
                            r = null,
                            a = P.deepAccess(e, "mediaTypes.video.playerSize"),
                            i = a[0][0],
                            d = a[0][1],
                            n = y || (P.getBidIdParameter("secure", e.params) ? 1 : 0),
                            o = {
                                sdk_name: "Prebid 1+",
                                versionOrtb: "2.3"
                            };
                        if ("" != P.getBidIdParameter("hide_skin", e.params) && (o.hide_skin = +!!P.getBidIdParameter("hide_skin", e.params)), "" != P.getBidIdParameter("ad_volume", e.params) && (o.ad_volume = P.getBidIdParameter("ad_volume", e.params)), "" != P.getBidIdParameter("ad_unit", e.params) && (o.ad_unit = P.getBidIdParameter("ad_unit", e.params)), "" != P.getBidIdParameter("outstream_options", e.params) && (o.outstream_options = P.getBidIdParameter("outstream_options", e.params)), "" != P.getBidIdParameter("outstream_function", e.params) && (o.outstream_function = P.getBidIdParameter("outstream_function", e.params)), "" != P.getBidIdParameter("custom", e.params) && (o.custom = P.getBidIdParameter("custom", e.params)), "" != P.getBidIdParameter("pre_market_bids", e.params) && P.isArray(P.getBidIdParameter("pre_market_bids", e.params))) {
                            var s = P.getBidIdParameter("pre_market_bids", e.params);
                            for (var p in o.pre_market_bids = [], s) {
                                var m = s[p],
                                    c = "";
                                m.vast_url ? c = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + m.vast_url + "</VASTAdTagURI></Wrapper></Ad></VAST>" : m.vast_string && (c = m.vast_string), o.pre_market_bids.push({
                                    id: m.deal_id,
                                    seatbid: [{
                                        bid: [{
                                            impid: Date.now(),
                                            dealid: m.deal_id,
                                            price: m.price,
                                            adm: c
                                        }]
                                    }],
                                    cur: m.currency,
                                    ext: {
                                        event_log: [{}]
                                    }
                                })
                            }
                        }
                        var u = P.getBidIdParameter("mimes", e.params) || ["application/javascript", "video/mp4", "video/webm"],
                            g = {
                                id: e.bidId,
                                secure: n,
                                video: {
                                    w: i,
                                    h: d,
                                    ext: o,
                                    mimes: u
                                }
                            };
                        "" != P.getBidIdParameter("price_floor", e.params) && (g.bidfloor = P.getBidIdParameter("price_floor", e.params)), "" != P.getBidIdParameter("start_delay", e.params) && (g.video.startdelay = 0 + Boolean(P.getBidIdParameter("start_delay", e.params))), e.crumbs && e.crumbs.pubcid && (r = e.crumbs.pubcid);
                        var l = navigator.language ? "language" : "userLanguage",
                            _ = {
                                h: screen.height,
                                w: screen.width,
                                dnt: P.getDNT() ? 1 : 0,
                                language: navigator[l].split("-")[0],
                                make: navigator.vendor ? navigator.vendor : "",
                                ua: navigator.userAgent
                            },
                            f = {
                                id: t,
                                imp: g,
                                site: {
                                    id: "",
                                    page: b,
                                    content: "content"
                                },
                                device: _,
                                ext: {
                                    wrap_response: 1
                                }
                            };
                        P.getBidIdParameter("number_of_ads", e.params) && (f.ext.number_of_ads = P.getBidIdParameter("number_of_ads", e.params));
                        var v = {};
                        return h && h.gdprConsent && (v.consent = h.gdprConsent.consentString, void 0 !== h.gdprConsent.gdprApplies && (f.regs = {
                            ext: {
                                gdpr: h.gdprConsent.gdprApplies ? 1 : 0
                            }
                        })), r && (v.fpc = r), P.isEmpty(v) || (f.user = {
                            ext: v
                        }), {
                            method: "POST",
                            url: "//search.spotxchange.com/openrtb/2.3/dados/" + t,
                            data: f,
                            bidRequest: h
                        }
                    })
                },
                interpretResponse: function(e, s) {
                    var p = [],
                        m = e.body;
                    return m && P.isArray(m.seatbid) && P._each(m.seatbid, function(e) {
                        P._each(e.bid, function(t) {
                            var e = {};
                            for (var r in s.bidRequest.bids) t.impid == s.bidRequest.bids[r].bidId && (e = s.bidRequest.bids[r]);
                            P._each(e.params.pre_market_bids, function(e) {
                                e.deal_id == t.id && (t.price = e.price, m.cur = e.currency)
                            });
                            var a = {
                                    requestId: e.bidId,
                                    currency: m.cur || "USD",
                                    cpm: t.price,
                                    creativeId: t.crid || "",
                                    ttl: 360,
                                    netRevenue: !0,
                                    channel_id: m.id,
                                    cache_key: t.ext.cache_key,
                                    vastUrl: "//search.spotxchange.com/ad/vast.html?key=" + t.ext.cache_key,
                                    mediaType: u.d,
                                    width: t.w,
                                    height: t.h
                                },
                                i = P.deepAccess(e, "mediaTypes.video.context"),
                                d = P.deepAccess(e, "params.ad_unit");
                            if ("outstream" == i || "outstream" == d) {
                                var n = P.deepAccess(e, "mediaTypes.video.playerSize"),
                                    o = c.a.install({
                                        id: 0,
                                        url: "//",
                                        config: {
                                            adText: "SpotX Outstream Video Ad via Prebid.js",
                                            player_width: n[0][0],
                                            player_height: n[0][1],
                                            content_page_url: P.deepAccess(s, "data.site.page"),
                                            ad_mute: +!!P.deepAccess(e, "params.ad_mute"),
                                            hide_skin: +!!P.deepAccess(e, "params.hide_skin"),
                                            outstream_options: P.deepAccess(e, "params.outstream_options"),
                                            outstream_function: P.deepAccess(e, "params.outstream_function")
                                        }
                                    });
                                try {
                                    o.setRender(g), o.setEventHandlers({
                                        impression: function() {
                                            return P.logMessage("SpotX outstream video impression event")
                                        },
                                        loaded: function() {
                                            return P.logMessage("SpotX outstream video loaded event")
                                        },
                                        ended: function() {
                                            P.logMessage("SpotX outstream renderer video event")
                                        }
                                    })
                                } catch (e) {
                                    P.logWarn("Prebid Error calling setRender or setEve,tHandlers on renderer", e)
                                }
                                a.renderer = o
                            }
                            p.push(a)
                        })
                    }), p
                }
            };

        function g(e) {
            var t = function(e) {
                var t = P.getBidIdParameter("slot", e.renderer.config.outstream_options);
                P.logMessage("[SPOTX][renderer] Handle SpotX outstream renderer");
                var r = window.document.createElement("script");
                r.type = "text/javascript", r.src = "//js.spotx.tv/easi/v1/" + e.channel_id + ".js";
                var a = {};
                a["data-spotx_channel_id"] = "" + e.channel_id, a["data-spotx_vast_url"] = "" + e.vastUrl, a["data-spotx_content_page_url"] = e.renderer.config.content_page_url, a["data-spotx_ad_unit"] = "incontent", P.logMessage("[SPOTX][renderer] Default beahavior"), P.getBidIdParameter("ad_mute", e.renderer.config.outstream_options) && (a["data-spotx_ad_mute"] = "0"), a["data-spotx_collapse"] = "0", a["data-spotx_autoplay"] = "1", a["data-spotx_blocked_autoplay_override_mode"] = "1", a["data-spotx_video_slot_can_autoplay"] = "1";
                var i = P.getBidIdParameter("playersize_auto_adapt", e.renderer.config.outstream_options);
                if (i && P.isBoolean(i) && !0 === i)
                    if (e.width && P.isNumber(e.width) && e.height && P.isNumber(e.height)) {
                        var d = e.width / e.height,
                            n = window.document.getElementById(t).clientWidth,
                            o = e.renderer.config.player_width,
                            s = e.renderer.config.player_height,
                            p = 0,
                            m = 0;
                        n < o && (s = (o = n) / d), m = d <= 1 ? (p = Math.round(s * d), s) : (p = o, Math.round(o / d)), a["data-spotx_content_width"] = "" + p, a["data-spotx_content_height"] = "" + m
                    } else P.logWarn("[SPOTX][renderer] PlayerSize auto adapt: bid.width and bid.height are incorrect");
                var c = P.getBidIdParameter("custom_override", e.renderer.config.outstream_options);
                if (c && P.isPlainObject(c))
                    for (var u in P.logMessage("[SPOTX][renderer] Custom beahavior."), c) c.hasOwnProperty(u) && ("channel_id" === u || "vast_url" === u || "content_page_url" === u || "ad_unit" === u ? P.logWarn("[SPOTX][renderer] Custom beahavior: following option cannot be overrided: " + u) : a["data-spotx_" + u] = c[u]);
                for (var g in a) a.hasOwnProperty(g) && r.setAttribute(g, a[g]);
                return r
            }(e);
            if (null != e.renderer.config.outstream_function && "function" == typeof e.renderer.config.outstream_function) e.renderer.config.outstream_function(e, t);
            else try {
                var r = P.getBidIdParameter("in_iframe", e.renderer.config.outstream_options);
                if (r && "IFRAME" == window.document.getElementById(r).nodeName) {
                    var a = window.document.getElementById(r),
                        i = a.contentDocument;
                    !i && a.contentWindow && (i = a.contentWindow.document), i.body.appendChild(t)
                } else {
                    var d = P.getBidIdParameter("slot", e.renderer.config.outstream_options);
                    d && window.document.getElementById(d) ? window.document.getElementById(d).appendChild(t) : window.document.getElementsByTagName("head")[0].appendChild(t)
                }
            } catch (e) {
                P.logError("[SPOTX][renderer] Error:" + e.message)
            }
        }
        Object(a.registerBidder)(n)
    }
}, [550]);
pbjsChunk([49], {
    602: function(e, r, n) {
        e.exports = n(603)
    },
    603: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return y
        });
        var c = n(0),
            t = n(1),
            s = n(3),
            b = "visx",
            u = "Bid from response has no auid parameter - ",
            f = "Bid from response has no adm parameter - ",
            a = "Array of bid objects is empty",
            g = "Can't find in requested bids the bid with auid - ",
            o = "Seatbid array from response has an empty item",
            p = "Response is empty",
            l = "Response has empty seatbid array",
            h = "Seatbid from response has no array of bid objects - ",
            y = {
                code: b,
                isBidRequestValid: function(e) {
                    return !!e.params.uid
                },
                buildRequests: function(e, r) {
                    var d, a = [],
                        o = {},
                        p = {},
                        u = {},
                        n = e || [],
                        t = s.b.getConfig("currency.bidderCurrencyDefault.".concat(b)) || s.b.getConfig("currency.adServerCurrency") || "EUR";
                    n.forEach(function(e) {
                        d = e.bidderRequestId;
                        var r = e.params.uid,
                            n = e.adUnitCode;
                        a.push(r);
                        var t = c.parseSizesInput(e.sizes);
                        p[r] || (p[r] = {});
                        var i = p[r];
                        i[n] ? i[n].bids.push(e) : i[n] = {
                            adUnitCode: n,
                            bids: [e],
                            parents: []
                        };
                        var s = i[n];
                        t.forEach(function(e) {
                            u[e] = !0, o[r] || (o[r] = {}), o[r][e] ? o[r][e].push(s) : o[r][e] = [s], s.parents.push({
                                parent: o[r],
                                key: e,
                                uid: r
                            })
                        })
                    });
                    var i = {
                        u: c.getTopWindowUrl(),
                        pt: "net",
                        auids: a.join(","),
                        sizes: c.getKeys(u).join(","),
                        r: d,
                        cur: t,
                        wrapperType: "Prebid_js",
                        wrapperVersion: "2.25.0"
                    };
                    return r && r.gdprConsent && (r.gdprConsent.consentString && (i.gdpr_consent = r.gdprConsent.consentString), i.gdpr_applies = "boolean" == typeof r.gdprConsent.gdprApplies ? Number(r.gdprConsent.gdprApplies) : 1), {
                        method: "GET",
                        url: "//t.visx.net/hb",
                        data: i,
                        bidsMap: o
                    }
                },
                interpretResponse: function(e, r) {
                    e = e && e.body;
                    var n, t = [],
                        i = [],
                        s = r.bidsMap,
                        d = r.data.cur;
                    return e ? e.seatbid && !e.seatbid.length && (n = l) : n = p, !n && e.seatbid && (e.seatbid.forEach(function(e) {
                        m(function(e) {
                            e ? e.bid ? e.bid[0] || c.logError(a) : c.logError(h + JSON.stringify(e)) : c.logError(o);
                            return e && e.bid && e.bid[0]
                        }(e), s, d, t, i)
                    }), i.forEach(function(e) {
                        m(e, s, d, t)
                    })), n && c.logError(n), t
                },
                getUserSyncs: function(e, r, n) {
                    if (e.pixelEnabled) {
                        var t = [];
                        return n && (n.consentString && t.push("gdpr_consent=" + encodeURIComponent(n.consentString)), t.push("gdpr_applies=" + encodeURIComponent("boolean" == typeof n.gdprApplies ? Number(n.gdprApplies) : 1))), [{
                            type: "image",
                            url: "//t.visx.net/push_sync" + (t.length ? "?" + t.join("&") : "")
                        }]
                    }
                }
            };

        function m(e, s, r, n, t) {
            if (e) {
                var i;
                if (e.auid || (i = u + JSON.stringify(e)), e.adm) {
                    var d = s[e.auid];
                    if (d) {
                        var a = t ? "".concat(e.w, "x").concat(e.h) : Object.keys(d)[0];
                        if (d[a]) {
                            var o = d[a][0],
                                p = o.bids.shift();
                            n.push({
                                requestId: p.bidId,
                                bidderCode: y.code,
                                cpm: e.price,
                                width: e.w,
                                height: e.h,
                                creativeId: e.auid,
                                currency: r || "EUR",
                                netRevenue: !0,
                                ttl: 360,
                                ad: e.adm,
                                dealId: e.dealid
                            }), o.bids.length || o.parents.forEach(function(e) {
                                var r = e.parent,
                                    n = e.key,
                                    t = e.uid,
                                    i = r[n].indexOf(o); - 1 < i && r[n].splice(i, 1), r[n].length || (delete r[n], c.getKeys(r).length || delete s[t])
                            })
                        } else t && t.push(e)
                    } else i = g + e.auid
                } else i = f + JSON.stringify(e);
                i && c.logError(i)
            }
        }
        Object(t.registerBidder)(y)
    }
}, [602]);
pbjs.processQueue();