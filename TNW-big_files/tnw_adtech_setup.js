var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
  googletag.pubads().disableInitialLoad();
});

var sheetNumber = 0;

//load Neustar

var gdpr;
var iab_string;

loadNeustar = () => {
  setTimeout(function() {
    var nst = document.createElement("script");
    nst.type = "text/javascript";
    nst.innerHTML = function setUpAgknTag(tag) {
      tag.setBpId("massarius");
      tag.setCat("Entertainment");
      tag.setGdpr(gdpr);
      tag.setGdprConsent(iab_string);
    };
    var tagjs = document.createElement("script");
    tagjs.async = true;
    tagjs.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    tagjs.src = (useSSL ? "https:" : "http:") + "//js.agkn.com/prod/v0/tag.js";
    document.body.appendChild(nst);
    document.body.appendChild(tagjs);
  }, 1500);
};

//Load Faktor
loadFaktor = () => {
  var fakt = document.createElement("script");
  fakt.async = true;
  fakt.type = "text/javascript";
  fakt.id = "faktorScript";
  var useSSL = "https:" == document.location.protocol;
  fakt.src =
    (useSSL ? "https:" : "http:") +
    "//config-prod.choice.faktor.io/15b88d74-25fc-4361-9108-80f86132b019/faktor.js";
  fakt.onload = function() {
    window.__cmp("gdprApplies", undefined, function(result) {
      if (!result) {
        console.log("gdpr does not apply");
        console.log("request bids");
        pbjs.que.push(function() {
          pbjs.requestBids({
            bidsBackHandler: initAdserver,
            timeout: PREBID_TIMEOUT
          });
        });
      } else {
        pbjs.setConfig({
          consentManagement: {
            cmpApi: "iab",
            allowAuctionWithoutConsent: true
          }
        });
        console.log("gdpr does apply");
        window.__cmp("addEventListener", "acceptAllButtonClicked", function() {
          checkConsent();
        });
        window.__cmp("addEventListener", "exitButtonClicked", function() {
          checkConsent();
        });
        window.__cmp("addEventListener", "cmpReady", function() {
          checkConsent();
        });
      }
    });
  };
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(fakt, node);
};

loadFaktor();

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

//load prebid
(function() {
  var mspb = document.createElement("script");
  mspb.async = true;
  mspb.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  mspb.src =
    (useSSL ? "https:" : "http:") +
    "//massariuscdn.com/prod/prebid.2.25.0-gridFix.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(mspb, node);
})();

//load gpt
(function() {
  var gads = document.createElement("script");
  gads.async = true;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src =
    (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(gads, node);
})();

var BottomDesktopSizes = [[970, 90], [970, 250], [728, 90]];
var BottomMobileSizes = [
  [300, 250],
  [320, 240],
  [300, 50],
  [320, 100],
  [320, 50]
];
var RosHeaderDesktopSizes = [
  [970, 250],
  [970, 90],
  [728, 90],
  [970, 1000],
  [1800, 1000],
  [1800, 200]
];
var RosHeaderMobileSizes = [
  [320, 240],
  [300, 250],
  [300, 50],
  [320, 50],
  [320, 100],
  [300, 100]
];
var RosTopDesktopSizes = [[728, 90]];
var RosTopMobileSizes = [
  [300, 250],
  [300, 50],
  [300, 100],
  [320, 240],
  [320, 100],
  [320, 50]
];
var RosMpuSizes = [[300, 250], [300, 600]];

//define sizes for desktop/mobile
if (window.screen.availWidth > 768) {
  BottomSizes = BottomDesktopSizes;
  RosHeaderSizes = RosHeaderDesktopSizes;
  RosTopSizes = RosTopDesktopSizes;
} else {
  BottomSizes = BottomMobileSizes;
  RosHeaderSizes = RosHeaderMobileSizes;
  RosTopSizes = RosTopMobileSizes;
}

//Define ad units

///5117602/thenextweb.com/TNW_HOME_BOTTOM
var TNW_HOME_BOTTOM_SLOT = {
  code: "/5117602/thenextweb.com/TNW_HOME_BOTTOM",
  mediaTypes: {
    banner: {
      sizes: BottomSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "22048730",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "22048732",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop, tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2179821"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2210845"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2179833"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1323638"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1335514"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "908593"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540792735",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540792754",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540806128",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 104
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 104
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 17085544
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 17085562
      }
    }
  ]
};
//5117602/thenextweb.com/TNW_ROS_HEADER
var TNW_HOME_HEADER_SLOT = {
  code: "/5117602/thenextweb.com/TNW_ROS_HEADER",
  mediaTypes: {
    banner: {
      sizes: RosHeaderSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "22048730",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "22048732",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1323638"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1335514"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "908593"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540792735",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540792754",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540806128",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2209734"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2210841"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2210845"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2179833"
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 102
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 102
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 17085534
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 17085559
      }
    }
  ]
};
//5117602/thenextweb.com/TNW_ROS_TOP
var TNW_ROS_TOP_SLOT = {
  code: "/5117602/thenextweb.com/TNW_ROS_TOP",
  mediaTypes: {
    banner: {
      sizes: RosTopSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "22048730",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "22048732",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1323638"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1335514"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "908593"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540792735",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540792754",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540806128",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2179820"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2210845"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2179833"
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 103
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 103
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 17085533
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 17085560
      }
    }
  ]
};
//5117602/thenextweb.com/TNW_ROS_MPU_ATF
var TNW_ROS_MPU_ATF_SLOT = {
  code: "/5117602/thenextweb.com/TNW_ROS_MPU_ATF",
  mediaTypes: {
    banner: {
      sizes: RosMpuSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "22048730",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "22048732",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1323638"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1335514"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "908593"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540792736",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540792754",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540806128",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2212582"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2212584"
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 105
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 105
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 17085536
      }
    }
  ]
};
//5117602/thenextweb.com/TNW_ROS_MPU_BTF
var TNW_ROS_MPU_BTF_SLOT = {
  code: "/5117602/thenextweb.com/TNW_ROS_MPU_BTF",
  mediaTypes: {
    banner: {
      sizes: RosMpuSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "22048730",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "22048732",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1323638"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "267316",
        zoneId: "1335514"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "908593"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540792736",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540792754",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540806128",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2212582"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2212584"
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 106
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 106
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 17085542
      }
    }
  ]
};

var adUnits = [];

if (msTag) {
  if (msTag.page == "home") {
    adUnits.push(TNW_HOME_HEADER_SLOT, TNW_ROS_TOP_SLOT, TNW_HOME_BOTTOM_SLOT);
  } else if (msTag.page == "author" || msTag.page == "section") {
    adUnits.push(TNW_HOME_HEADER_SLOT, TNW_ROS_TOP_SLOT);
  } else if (msTag.page == "category") {
    adUnits.push(TNW_HOME_HEADER_SLOT, TNW_ROS_TOP_SLOT, TNW_ROS_MPU_ATF_SLOT);
  } else if (msTag.page == "article") {
    if (window.innerWidth > 768) {
      adUnits.push(
        TNW_HOME_HEADER_SLOT,
        TNW_ROS_TOP_SLOT,
        TNW_ROS_MPU_ATF_SLOT,
        TNW_ROS_MPU_BTF_SLOT
      );
    } else {
      adUnits.push(TNW_HOME_HEADER_SLOT, TNW_ROS_TOP_SLOT);
    }
  } else {
    adUnits.push(
      TNW_HOME_HEADER_SLOT,
      TNW_ROS_TOP_SLOT,
      TNW_ROS_MPU_ATF_SLOT,
      TNW_ROS_MPU_BTF_SLOT,
      TNW_HOME_BOTTOM_SLOT
    );
  }
} else {
  adUnits.push(
    TNW_HOME_HEADER_SLOT,
    TNW_ROS_TOP_SLOT,
    TNW_ROS_MPU_ATF_SLOT,
    TNW_ROS_MPU_BTF_SLOT,
    TNW_HOME_BOTTOM_SLOT
  );
}

var PREBID_TIMEOUT = 1300;
var FAILSAFE_TIMEOUT = 2000;
var DefM = 4;

var bidCap = 20;

pbjs.bidderSettings = {
  improvedigital: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  tmp1: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1.3, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1.3, bidCap);
      }
    }
  },
  tmp2: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 2, bidCap)
        // );
        return Math.min(bidCpm * DefM * 2, bidCap);
      }
    }
  },
  pubmatic: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  openx: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  justpremium: {
    bidCpmAdjustment: function(bidCpm, bid) {
      //ignore bids on wallpaper < 6EUR
      if (bid.cpm < 6.0 && bid.format == "wp") {
        return 0;
        //else send bid through as usual
      } else {
        if (bidCpm >= bidCap) {
          // console.log("The original bid was: " + bidCpm);
          if (bidCpm >= bidCap) {
            // console.log("The original bid was above the bidCap of " + bidCap);
            return bidCpm;
          } else {
            // console.log("The original bid was below the bidCap of " + bidCap);
            // console.log(
            //   "The new bid after the adjustment is " +
            //     Math.min(bidCpm * DefM * 1, bidCap)
            // );
            return Math.min(bidCpm * DefM * 1, bidCap);
          }
        }
      }
    }
  },
  weborama: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  rubicon: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  visx: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  grid: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  appnexus: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  }
};

const customConfigObject = {
  buckets: [
    {
      precision: 2,
      min: 0,
      max: 2.5,
      increment: 0.01
    },
    {
      precision: 2,
      min: 2.5,
      max: 10,
      increment: 0.1
    },
    {
      precision: 2,
      min: 10,
      max: 20,
      increment: 0.2
    },
    {
      precision: 2,
      min: 20,
      max: 50,
      increment: 0.5
    }
  ]
};

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.aliasBidder("improvedigital", "weborama");
  pbjs.aliasBidder("appnexus", "tmp1");
  pbjs.aliasBidder("appnexus", "tmp2");
  pbjs.setConfig({
    improvedigital: { usePrebidSizes: true },
    sizeConfig: [
      {
        mediaQuery: "(min-width: 1025px)",
        sizesSupported: [
          [1800, 1000],
          [1800, 200],
          [970, 1000],
          [970, 500],
          [970, 250],
          [970, 90],
          [728, 90],
          [300, 250],
          [160, 600],
          [120, 600],
          [120, 90],
          [300, 600]
        ],
        labels: ["desktop"]
      },
      {
        mediaQuery: "(min-width: 901px) and (max-width: 1024px)",
        sizesSupported: [[728, 90], [300, 250], [160, 600], [120, 600]],
        labels: ["tablet"]
      },
      {
        mediaQuery: "(min-width: 0px) and (max-width: 900px)",
        sizesSupported: [
          [300, 250],
          [320, 240],
          [300, 600],
          [300, 50],
          [320, 50],
          [300, 100],
          [320, 100],
          [468, 60],
          [16, 9]
        ],
        labels: ["phone"]
      }
    ],
    priceGranularity: customConfigObject,
    enableSendAllBids: true,
    bidderSequence: "random",
    bidderTimeout: PREBID_TIMEOUT,
    userSync: {
      syncDelay: 3000,
      syncEnabled: true,
      syncsPerBidder: 5,
      iframeEnabled: true
    },
    currency: {
      adServerCurrency: "EUR"
    }
  });
});

function initAdserver(bids) {
  for (let i in bids) {
    for (let j in bids[i].bids) {
      let bid = bids[i].bids[j];
      bid.adserverTargeting.hbBid = true;
      if (bid.width == 1800 && bid.height == 1000) {
        bid.width = 728;
        bid.height = 90;
      } else if (bid.width == 970 && bid.height == 1000) {
        bid.width = 970;
        bid.height = 250;
      }
    }
  }
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    pbjs.que.push(function() {
      pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    });
  });
}

var gptadslots = [];

googletag.cmd.push(function() {
  //Responsive mapping
  var TNW_ROS_HEADER = googletag
    .sizeMapping()
    .addSize(
      [1024, 0],
      [[970, 250], [728, 90], [970, 90], [970, 1000], [1800, 1000], [1800, 200]]
    )
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [[320, 240], [300, 250], [300, 50], [320, 50], [320, 100], [300, 100]]
    )
    .build();

  var TNW_ROS_TOP = googletag
    .sizeMapping()
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [[300, 250], [300, 50], [300, 100], [320, 240], [320, 100], [320, 50]]
    )
    .build();

  var TNW_INARTICLE_VIDEO = googletag
    .sizeMapping()
    .addSize([0, 0], [[1, 1]])
    .build();

  var TNW_ROS_MPU_ATF = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 250], [300, 600]])
    .addSize([0, 0], [])
    .build();

  var TNW_ROS_MPU_BTF = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 250], [300, 600]])
    .addSize([0, 0], [])
    .build();

  var TNW_HOME_BOTTOM = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90], [970, 250], [970, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize([0, 0], [[300, 250], [320, 240], [300, 50], [320, 100], [320, 50]])
    .build();

  if (msTag) {
    if (msTag.page == "home") {
      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_HEADER",
          [
            [970, 250],
            [970, 90],
            [728, 90],
            [970, 90],
            [970, 1000],
            [1800, 1000],
            [1800, 200],
            [320, 240],
            [300, 250],
            [300, 50],
            [320, 50],
            [468, 60],
            [320, 100],
            [300, 100]
          ],
          `TNW_ROS_HEADER`
        )
        .defineSizeMapping(TNW_ROS_HEADER)
        .addService(googletag.pubads());

      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_TOP",
          [
            [300, 250],
            [300, 50],
            [300, 100],
            [320, 240],
            [320, 100],
            [320, 50],
            [728, 90]
          ],
          `TNW_ROS_TOP`
        )
        .defineSizeMapping(TNW_ROS_TOP)
        .addService(googletag.pubads());

      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_HOME_BOTTOM",
          [
            [300, 250],
            [970, 90],
            [970, 250],
            [320, 240],
            [300, 50],
            [320, 100],
            [728, 90],
            [320, 50]
          ],
          `TNW_HOME_BOTTOM`
        )
        .defineSizeMapping(TNW_HOME_BOTTOM)
        .addService(googletag.pubads());
    } else if (msTag.page == "author" || msTag.page == "section") {
      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_HEADER",
          [
            [970, 250],
            [970, 90],
            [728, 90],
            [970, 90],
            [970, 1000],
            [1800, 1000],
            [1800, 200],
            [320, 240],
            [300, 250],
            [300, 50],
            [320, 50],
            [468, 60],
            [320, 100],
            [300, 100]
          ],
          `TNW_ROS_HEADER`
        )
        .defineSizeMapping(TNW_ROS_HEADER)
        .addService(googletag.pubads());

      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_TOP",
          [
            [300, 250],
            [300, 50],
            [300, 100],
            [320, 240],
            [320, 100],
            [320, 50],
            [728, 90]
          ],
          `TNW_ROS_TOP`
        )
        .defineSizeMapping(TNW_ROS_TOP)
        .addService(googletag.pubads());
    } else if (msTag.page == "category") {
      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_HEADER",
          [
            [970, 250],
            [970, 90],
            [728, 90],
            [970, 90],
            [970, 1000],
            [1800, 1000],
            [1800, 200],
            [320, 240],
            [300, 250],
            [300, 50],
            [320, 50],
            [468, 60],
            [320, 100],
            [300, 100]
          ],
          `TNW_ROS_HEADER`
        )
        .defineSizeMapping(TNW_ROS_HEADER)
        .addService(googletag.pubads());

      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_TOP",
          [
            [300, 250],
            [300, 50],
            [300, 100],
            [320, 240],
            [320, 100],
            [320, 50],
            [728, 90]
          ],
          `TNW_ROS_TOP`
        )
        .defineSizeMapping(TNW_ROS_TOP)
        .addService(googletag.pubads());

      googletag
        .defineSlot(
          "/5117602/thenextweb.com/TNW_ROS_MPU_ATF",
          [[300, 250], [300, 600]],
          `TNW_ROS_MPU_ATF`
        )
        .defineSizeMapping(TNW_ROS_MPU_ATF)
        .addService(googletag.pubads());
    } else if (msTag.page == "article") {
      if (window.innerWidth > 768) {
        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_HEADER",
            [
              [970, 250],
              [970, 90],
              [728, 90],
              [970, 90],
              [970, 1000],
              [1800, 1000],
              [1800, 200],
              [320, 240],
              [300, 250],
              [300, 50],
              [320, 50],
              [468, 60],
              [320, 100],
              [300, 100]
            ],
            `TNW_ROS_HEADER_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_HEADER)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_TOP",
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            `TNW_ROS_TOP_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_MPU_ATF",
            [[300, 250], [300, 600]],
            `TNW_ROS_MPU_ATF_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_MPU_ATF)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_INARTICLE_VIDEO",
            [[1, 1]],
            `TNW_INARTICLE_VIDEO_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_INARTICLE_VIDEO)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_MPU_BTF",
            [[300, 250], [300, 600]],
            `TNW_ROS_MPU_BTF_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_MPU_BTF)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_DSKT_ARTL_WHI",
            [[1, 1], "fluid"],
            `TNW_DSKT_ARTL_WHI_${msTag.data.postId}`
          )
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_DSKT_ARTL_WHI_2nd",
            ["fluid", [1, 1]],
            `TNW_DSKT_ARTL_WHI_2nd_${msTag.data.postId}`
          )
          .addService(googletag.pubads());
          
      } else {
        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_HEADER",
            [
              [970, 250],
              [970, 90],
              [728, 90],
              [970, 90],
              [970, 1000],
              [1800, 1000],
              [1800, 200],
              [320, 240],
              [300, 250],
              [300, 50],
              [320, 50],
              [468, 60],
              [320, 100],
              [300, 100]
            ],
            `TNW_ROS_HEADER_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_HEADER)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_ROS_TOP",
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            `TNW_ROS_TOP_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());

        googletag
          .defineSlot(
            "/5117602/thenextweb.com/TNW_INARTICLE_VIDEO",
            [[1, 1]],
            `TNW_INARTICLE_VIDEO_${msTag.data.postId}`
          )
          .defineSizeMapping(TNW_INARTICLE_VIDEO)
          .addService(googletag.pubads());
      }
    }
  } else {
    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_ROS_HEADER",
        [
          [970, 250],
          [970, 90],
          [728, 90],
          [970, 90],
          [970, 1000],
          [1800, 1000],
          [1800, 200],
          [320, 240],
          [300, 250],
          [300, 50],
          [320, 50],
          [468, 60],
          [320, 100],
          [300, 100]
        ],
        `TNW_ROS_HEADER_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_ROS_HEADER)
      .addService(googletag.pubads());

    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_ROS_TOP",
        [
          [300, 250],
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [320, 50],
          [728, 90]
        ],
        `TNW_ROS_TOP_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_ROS_TOP)
      .addService(googletag.pubads());

    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_INARTICLE_VIDEO",
        [[1, 1]],
        `TNW_INARTICLE_VIDEO_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_INARTICLE_VIDEO)
      .addService(googletag.pubads());

    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_ROS_MPU_ATF",
        [[300, 250], [300, 600]],
        `TNW_ROS_MPU_ATF_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_ROS_MPU_ATF)
      .addService(googletag.pubads());

    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_ROS_MPU_BTF",
        [[300, 250], [300, 600]],
        `TNW_ROS_MPU_BTF_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_ROS_MPU_BTF)
      .addService(googletag.pubads());

    googletag
      .defineSlot(
        "/5117602/thenextweb.com/TNW_HOME_BOTTOM",
        [
          [300, 250],
          [970, 90],
          [970, 250],
          [320, 240],
          [300, 50],
          [320, 100],
          [728, 90],
          [320, 50]
        ],
        `TNW_HOME_BOTTOM_${msTag.data.postId}`
      )
      .defineSizeMapping(TNW_HOME_BOTTOM)
      .addService(googletag.pubads());
  }

  googletag.pubads().setTargeting("hb", ["true"]);
  if (msTag) {
    if (msTag.data.postId) {
      googletag.pubads().setTargeting("postId", [msTag.data.postId.toString()]);
    }
    if (msTag.data.category) {
      googletag.pubads().setTargeting("category", [msTag.data.category]);
    }
    if (msTag.data.isSponsoredPost) {
      googletag
        .pubads()
        .setTargeting("isSponsoredPost", [msTag.data.isSponsoredPost]);
    }
    if (msTag.data.isSponsoredCategory) {
      googletag
        .pubads()
        .setTargeting("isSponsoredCategory", [msTag.data.isSponsoredCategory]);
    }
    if (msTag.data.sponsorName) {
      googletag.pubads().setTargeting("sponsorName", [msTag.data.sponsorName]);
    }
  }
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setCentering(true);
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 100,
    renderMarginPercent: 25,
    mobileScaling: 1.5
  });
  googletag.enableServices();

  (function() {
    window.addEventListener("tnw-newPageLoaded", function() {
      loadExtraSlots(APP_ENV.postRack[APP_ENV.postRack.length - 1].id);
    });
  })();

  (function() {
    window.addEventListener("tnw-newSheetLoaded", function() {
      loadExtraSlots();
    });
  })();
});

function loadExtraSlots(postId = "undefined") {
  var faktorLoadedAgain = false;
  if (consentForAds !== true && consentForAds !== false) {
    var elem = document.getElementById("faktorScript");
    elem.parentNode.removeChild(elem);
    loadFaktor();
    faktorLoadedAgain = true;
  }
  googletag.pubads().setTargeting("hb", ["true"]);

  adUnits = [
    TNW_HOME_HEADER_SLOT,
    TNW_ROS_TOP_SLOT,
    TNW_ROS_MPU_ATF_SLOT,
    TNW_ROS_MPU_BTF_SLOT,
    TNW_HOME_BOTTOM_SLOT
  ];

  var TNW_ROS_HEADER = googletag
    .sizeMapping()
    .addSize(
      [1024, 0],
      [[970, 250], [728, 90], [970, 90], [970, 1000], [1800, 1000], [1800, 200]]
    )
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [[320, 240], [300, 250], [300, 50], [320, 50], [320, 100], [300, 100]]
    )
    .build();

  var TNW_ROS_TOP = googletag
    .sizeMapping()
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [[300, 250], [300, 50], [300, 100], [320, 240], [320, 100], [320, 50]]
    )
    .build();

  var TNW_INARTICLE_VIDEO = googletag
    .sizeMapping()
    .addSize([0, 0], [[1, 1]])
    .build();

  var TNW_ROS_MPU_ATF = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 250], [300, 600]])
    .addSize([0, 0], [])
    .build();

  var TNW_ROS_MPU_BTF = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 250], [300, 600]])
    .addSize([0, 0], [])
    .build();

  var TNW_HOME_BOTTOM = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90], [970, 250], [970, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize([0, 0], [[300, 250], [320, 240], [300, 50], [320, 100], [320, 50]])
    .build();

  googletag.cmd.push(function() {
    TNW_ROS_HEADER;
    TNW_ROS_TOP;
    TNW_INARTICLE_VIDEO;
    TNW_ROS_MPU_ATF;
    TNW_ROS_MPU_BTF;
  });

  if (postId !== "undefined") {
    var bottomCode = "/5117602/thenextweb.com/TNW_HOME_BOTTOM";
    var bottomSlotName = `TNW_HOME_BOTTOM_${postId}`;
    var inarticleCode = "/5117602/thenextweb.com/TNW_INARTICLE_VIDEO";
    var inarticleSlotName = `TNW_INARTICLE_VIDEO_${postId}`;
    var headerCode = "/5117602/thenextweb.com/TNW_ROS_HEADER";
    var headerSlotName = `TNW_ROS_HEADER_${postId}`;
    var topCode = "/5117602/thenextweb.com/TNW_ROS_TOP";
    var topSlotName = `TNW_ROS_TOP_${postId}`;
    var mpuAtfCode = "/5117602/thenextweb.com/TNW_ROS_MPU_ATF";
    var mpuAtfSlotName = `TNW_ROS_MPU_ATF_${postId}`;
    var mpuBtfCode = "/5117602/thenextweb.com/TNW_ROS_MPU_BTF";
    var mpuBtfSlotName = `TNW_ROS_MPU_BTF_${postId}`;
    var nativeCode = "/5117602/thenextweb.com/TNW_DSKT_ARTL_WHI";
    var nativeSlot = `TNW_DSKT_ARTL_WHI_${postId}`;
    var nativeCode2 = "/5117602/thenextweb.com/TNW_DSKT_ARTL_WHI_2nd";
    var nativeSlot2 = `TNW_DSKT_ARTL_WHI_2nd${postId}`;
    
    if (msTag && msTag.page == "article") {
      if (window.innerWidth > 768) {
        gptadslots[0] = googletag
          .defineSlot(
            headerCode,
            [
              [970, 250],
              [970, 90],
              [728, 90],
              [970, 90],
              [970, 1000],
              [1800, 1000],
              [1800, 200],
              [320, 240],
              [300, 250],
              [300, 50],
              [320, 50],
              [468, 60],
              [320, 100],
              [300, 100]
            ],
            headerSlotName
          )
          .defineSizeMapping(TNW_ROS_HEADER)
          .addService(googletag.pubads());

        gptadslots[1] = googletag
          .defineSlot(
            topCode,
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            topSlotName
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());

        gptadslots[2] = googletag
          .defineSlot(inarticleCode, [[1, 1]], inarticleSlotName)
          .defineSizeMapping(TNW_INARTICLE_VIDEO)
          .addService(googletag.pubads());

        gptadslots[3] = googletag
          .defineSlot(mpuAtfCode, [[300, 250], [300, 600]], mpuAtfSlotName)
          .defineSizeMapping(TNW_ROS_MPU_ATF)
          .addService(googletag.pubads());

        gptadslots[4] = googletag
          .defineSlot(mpuBtfCode, [[300, 250], [300, 600]], mpuBtfSlotName)
          .defineSizeMapping(TNW_ROS_MPU_BTF)
          .addService(googletag.pubads());

        gptadslots[5] = googletag
        .defineSlot(nativeCode, [[300, 250], [300, 600]], nativeSlot)
        .defineSizeMapping(TNW_ROS_MPU_BTF)
        .addService(googletag.pubads());

        gptadslots[6] = googletag
        .defineSlot(nativeCode2, [[300, 250], [300, 600]], nativeSlot2)
        .defineSizeMapping(TNW_ROS_MPU_BTF)
        .addService(googletag.pubads());

      } else {
        gptadslots[0] = googletag
          .defineSlot(
            headerCode,
            [
              [970, 250],
              [970, 90],
              [728, 90],
              [970, 90],
              [970, 1000],
              [1800, 1000],
              [1800, 200],
              [320, 240],
              [300, 250],
              [300, 50],
              [320, 50],
              [468, 60],
              [320, 100],
              [300, 100]
            ],
            headerSlotName
          )
          .defineSizeMapping(TNW_ROS_HEADER)
          .addService(googletag.pubads());

        gptadslots[1] = googletag
          .defineSlot(
            topCode,
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            topSlotName
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());

        gptadslots[2] = googletag
          .defineSlot(inarticleCode, [[1, 1]], inarticleSlotName)
          .defineSizeMapping(TNW_INARTICLE_VIDEO)
          .addService(googletag.pubads());
      }
    } else {
      gptadslots[0] = googletag
        .defineSlot(
          headerCode,
          [
            [970, 250],
            [970, 90],
            [728, 90],
            [970, 90],
            [970, 1000],
            [1800, 1000],
            [1800, 200],
            [320, 240],
            [300, 250],
            [300, 50],
            [320, 50],
            [468, 60],
            [320, 100],
            [300, 100]
          ],
          headerSlotName
        )
        .defineSizeMapping(TNW_ROS_HEADER)
        .addService(googletag.pubads());

      gptadslots[1] = googletag
        .defineSlot(
          topCode,
          [
            [300, 250],
            [300, 50],
            [300, 100],
            [320, 240],
            [320, 100],
            [320, 50],
            [728, 90]
          ],
          topSlotName
        )
        .defineSizeMapping(TNW_ROS_TOP)
        .addService(googletag.pubads());

      gptadslots[2] = googletag
        .defineSlot(inarticleCode, [[1, 1]], inarticleSlotName)
        .defineSizeMapping(TNW_INARTICLE_VIDEO)
        .addService(googletag.pubads());

      gptadslots[3] = googletag
        .defineSlot(mpuAtfCode, [[300, 250], [300, 600]], mpuAtfSlotName)
        .defineSizeMapping(TNW_ROS_MPU_ATF)
        .addService(googletag.pubads());

      gptadslots[4] = googletag
        .defineSlot(mpuBtfCode, [[300, 250], [300, 600]], mpuBtfSlotName)
        .defineSizeMapping(TNW_ROS_MPU_BTF)
        .addService(googletag.pubads());

      gptadslots[5] = googletag
        .defineSlot(
          bottomCode,
          [
            [300, 250],
            [970, 90],
            [970, 250],
            [320, 240],
            [300, 50],
            [320, 100],
            [728, 90],
            [320, 50]
          ],
          bottomSlotName
        )
        .defineSizeMapping(TNW_HOME_BOTTOM)
        .addService(googletag.pubads());
    }
  } else {
    gptadslots = [];
    sheetNumber += 1;
    var bottomCode = "/5117602/thenextweb.com/TNW_HOME_BOTTOM";
    var bottomSlotName = `TNW_HOME_BOTTOM_${sheetNumber}`;
    var inarticleCode = "/5117602/thenextweb.com/TNW_INARTICLE_VIDEO";
    var inarticleSlotName = `TNW_INARTICLE_VIDEO_${sheetNumber}`;
    var headerCode = "/5117602/thenextweb.com/TNW_ROS_HEADER";
    var headerSlotName = `TNW_ROS_HEADER_${sheetNumber}`;
    var topCode = "/5117602/thenextweb.com/TNW_ROS_TOP";
    var topSlotName = `TNW_ROS_TOP_${sheetNumber}`;
    var mpuAtfCode = "/5117602/thenextweb.com/TNW_ROS_MPU_ATF";
    var mpuAtfSlotName = `TNW_ROS_MPU_ATF_${sheetNumber}`;
    var mpuBtfCode = "/5117602/thenextweb.com/TNW_ROS_MPU_BTF";
    var mpuBtfSlotName = `TNW_ROS_MPU_BTF_${sheetNumber}`;

    if (msTag) {
      if (msTag.page == "section" || msTag.page == "author") {
        gptadslots[0] = googletag
          .defineSlot(
            topCode,
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            topSlotName
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());
      } else if (msTag.page == "category") {
        gptadslots[0] = googletag
          .defineSlot(
            topCode,
            [
              [300, 250],
              [300, 50],
              [300, 100],
              [320, 240],
              [320, 100],
              [320, 50],
              [728, 90]
            ],
            topSlotName
          )
          .defineSizeMapping(TNW_ROS_TOP)
          .addService(googletag.pubads());

        gptadslots[1] = googletag
          .defineSlot(mpuAtfCode, [[300, 250], [300, 600]], mpuAtfSlotName)
          .defineSizeMapping(TNW_ROS_MPU_ATF)
          .addService(googletag.pubads());
      }
    }
  }

  if (msTag) {
    if (msTag.data.postId) {
      googletag.pubads().setTargeting("postId", [msTag.data.postId.toString()]);
    }
    if (msTag.data.category) {
      googletag.pubads().setTargeting("category", [msTag.data.category]);
    }
    if (msTag.data.isSponsoredPost) {
      googletag
        .pubads()
        .setTargeting("isSponsoredPost", [msTag.data.isSponsoredPost]);
    }
    if (msTag.data.isSponsoredCategory) {
      googletag
        .pubads()
        .setTargeting("isSponsoredCategory", [msTag.data.isSponsoredCategory]);
    }
    if (msTag.data.sponsorName) {
      googletag.pubads().setTargeting("sponsorName", [msTag.data.sponsorName]);
    }
  }

  var adUnitCodes = gptadslots.map(slot => {
    return slot.getAdUnitPath();
  });

  if (!faktorLoadedAgain) {
    console.log("faktor didnt load, so getting bids from here");
    pbjs.que.push(function() {
      pbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        adUnitCodes: adUnitCodes,
        bidsBackHandler: function() {
          pbjs.setTargetingForGPTAsync(adUnitCodes);
          googletag.pubads().refresh(gptadslots);
        }
      });
    });
  }
}

//CMP Logic

var consentForAds;
var checkConsent = function() {
  window.__cmp("getVendorConsents", undefined, function(data) {
    var newConsentForAds =
      data.purposeConsents[1] &&
      data.purposeConsents[2] &&
      data.purposeConsents[3] &&
      data.purposeConsents[4] &&
      data.purposeConsents[5];
    if (consentForAds !== newConsentForAds) {
      consentForAds = newConsentForAds;
      googletag.cmd.push(function() {
        googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1);
      });
      if (consentForAds) {
        syncImprove();
      }
      window.__cmp("getConsentData", undefined, function(data) {
        googletag.cmd.push(function() {
          googletag.pubads().setTargeting("iab_string", [data.consentData]);
          googletag
            .pubads()
            .setTargeting("consent", [consentForAds ? "1" : "0"]);
          googletag
            .pubads()
            .setTargeting("rev_consent", [consentForAds ? "0" : "1"]);
          gdpr = consentForAds ? "1" : "0";
          iab_string = consentForAds == "1" ? data.consentData : "";
          loadNeustar();
          pbjs.que.push(function() {
            console.log("request bids");
            pbjs.requestBids({
              bidsBackHandler: initAdserver,
              timeout: PREBID_TIMEOUT
            });
          });
        });
      });
    }
  });
};

var assertive_entityId = "tprEhHnLuhRP6Rhu2";
var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...

var assertive_timeout = PREBID_TIMEOUT;
var assertive_layout = null;
var assertive_userState = "LoggedOut";
var assertive_custom_1 = null;
var assertive_custom_2 = null;
var assertive_custom_3 = null;
var assertive_custom_4 = null;
var assertive_custom_5 = null;

/*  ####################################
 *  #    ASSERTIVE ANALYTICS CLIENT    #
 *  #        Version: 1.8.3            #
 *  ####################################
 */
!(function() {
  "use strict";
  var I = "1.8",
    _ = "https://api.assertcom.de",
    e = "assertive_analytics_",
    y = e.concat("sessionUUID"),
    s = e.concat("sessionStart"),
    a = e.concat("sessionRandom"),
    h = e.concat("sessionUTM"),
    b = e.concat("sessionReferrer"),
    w = E(),
    U = [],
    S = [],
    t =
      t ||
      (localStorage.getItem("assertiveYield") &&
        -1 !== localStorage.getItem("assertiveYield").indexOf("debug")) ||
      -1 !== d("assertiveYield").indexOf("debug");
  function E(e) {
    return e
      ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
      : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, E);
  }
  function d(e) {
    return decodeURI(
      window.location.search.replace(
        new RegExp(
          "^(?:.*[&\\?]" +
            escape(e).replace(/[\.\+\*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$",
          "i"
        ),
        "$1"
      )
    );
  }
  function R(e) {
    t && console.log(e);
  }
  Array.prototype.find ||
    Object.defineProperty(Array.prototype, "find", {
      value: function(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this),
          n = t.length >>> 0;
        if ("function" != typeof e)
          throw new TypeError("predicate must be a function");
        for (var i = arguments[1], r = 0; r < n; ) {
          var o = t[r];
          if (e.call(i, o, r, t)) return o;
          r++;
        }
      },
      configurable: !0,
      writable: !0
    }),
    (function() {
      if (!localStorage.getItem(s) || Date.now() > localStorage.getItem(s)) {
        localStorage.setItem(y, E()),
          localStorage.setItem(a, Math.random()),
          document.referrer
            ? localStorage.setItem(b, document.referrer)
            : localStorage.removeItem(b);
        var e = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content"
          ],
          t = {};
        for (var n in e) {
          var i = e[n],
            r = d(i);
          "" !== r && (t[i] = r);
        }
        var o = JSON.stringify(t);
        o !== JSON.stringify({})
          ? localStorage.setItem(h, o)
          : localStorage.removeItem(h);
      }
      localStorage.setItem(s, Date.now() + 18e5);
    })(),
    -1 !== d("assertiveYield").indexOf("check") &&
      alert("Assertive Yield: Check"),
    ("undefined" == typeof assertive_sampleRate ||
      (assertive_sampleRate &&
        localStorage.getItem(a) < assertive_sampleRate)) &&
      (function e() {
        if (n) return;
        if ("undefined" == typeof googletag || !googletag.pubadsReady)
          return void setTimeout(e, 20);
        n = !0;
        var v = null;
        window.addEventListener("blur", function() {
          if (v) {
            var e = new XMLHttpRequest(),
              t =
                _ +
                "?event=click&entityId=" +
                assertive_entityId +
                "&impressionUUID=" +
                U[v];
            e.open("GET", t, !0), e.send();
          }
        });
        googletag.cmd.push(function() {
          googletag.pubads().addEventListener("slotRenderEnded", function(e) {
            if (!e.isEmpty)
              if ("undefined" != typeof assertive_entityId) {
                var t = e.slot,
                  n = t.getSlotElementId(),
                  i = t.getAdUnitPath(),
                  r = document.getElementById(n),
                  o = null;
                if (r) {
                  if (
                    pbjs.adUnits.find(function(e) {
                      return e.code === n;
                    })
                  )
                    o = n;
                  else {
                    if (
                      !pbjs.adUnits.find(function(e) {
                        return e.code === i;
                      })
                    )
                      return;
                    o = i;
                  }
                  var s = r.getElementsByTagName("iframe")[0];
                  s.addEventListener("mouseover", function() {
                    v = n;
                  }),
                    s.addEventListener("touchstart", function() {
                      v = n;
                    }),
                    s.addEventListener("mouseout", function() {
                      v = null;
                    }),
                    s.addEventListener("touchend", function() {
                      v = null;
                    });
                  var a = t.getHtml(),
                    d = /(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(
                      a
                    ),
                    l = d ? d[1] : t.getTargeting("hb_adid")[0],
                    u = !!d,
                    c = pbjs
                      .getBidResponsesForAdUnitCode(o)
                      .bids.find(function(e) {
                        return e.adId === l;
                      });
                  (U[n] = E()),
                    R(
                      "Session UUID: " +
                        localStorage.getItem(y) +
                        ", PageView UUID: " +
                        w +
                        ", Impression UUID: " +
                        U[n]
                    ),
                    R("Slot Id: " + n + ", AdUnitPath: " + i),
                    c &&
                      R(
                        " - Highest PreBid " +
                          c.cpm +
                          " from " +
                          c.bidderCode +
                          " with id " +
                          l
                      ),
                    c || R(" - No PreBids!!!"),
                    R(
                      " - Winner: " +
                        (u ? "prebid" : "dfp (Direct/AdX/AdSense)") +
                        " with size " +
                        (u ? c.width : e.size[0]) +
                        "x" +
                        (u ? c.height : e.size[1])
                    ),
                    R("---------------");
                  var m = null,
                    p = null;
                  c &&
                    (c.appnexus
                      ? (m = c.appnexus.buyerMemberId
                          ? c.appnexus.buyerMemberId
                          : null)
                      : c.rubicon &&
                        ((m = c.rubicon.networkId ? c.rubicon.networkId : null),
                        (p = c.rubicon.advertiserId
                          ? c.rubicon.advertiserId
                          : null)));
                  var f = {
                    version: I,
                    entityId: assertive_entityId,
                    siteUUID:
                      "undefined" != typeof assertive_siteUUID
                        ? assertive_siteUUID
                        : null,
                    sessionUUID: localStorage.getItem(y),
                    pageViewUUID: w,
                    impressionUUID: U[n],
                    slotId: n,
                    adUnitPath: i,
                    highestPreBid: c ? c.cpm : 0,
                    highestPreBid_partner: c ? c.bidderCode : "",
                    buyerId: m,
                    brandId: p,
                    dealId: c && c.dealId ? c.dealId : null,
                    creativeId: c && c.creativeId ? c.creativeId : null,
                    mediaType: c && c.mediaType ? c.mediaType : null,
                    currency: c && c.currency ? c.currency : null,
                    netRevenue: c && c.netRevenue ? c.netRevenue : null,
                    creative_width: u ? c.width : e.size[0],
                    creative_height: u ? c.height : e.size[1],
                    preBidWon: u,
                    timeToRespond: c ? c.timeToRespond : null,
                    protocol: window.location.protocol,
                    host: window.location.host,
                    pathname: window.location.pathname,
                    pathname_split: window.location.pathname
                      .split("/")
                      .filter(function(e) {
                        return e;
                      }),
                    referrer: localStorage.getItem(b),
                    utm: localStorage.getItem(h),
                    prebid_timeout: assertive_timeout || null,
                    prebid_version: pbjs.version || null,
                    userState:
                      "undefined" != typeof assertive_userState
                        ? assertive_userState
                        : null,
                    layout:
                      "undefined" != typeof assertive_layout
                        ? assertive_layout
                        : null,
                    custom_1:
                      "undefined" != typeof assertive_custom_1
                        ? assertive_custom_1
                        : null,
                    custom_2:
                      "undefined" != typeof assertive_custom_2
                        ? assertive_custom_2
                        : null,
                    custom_3:
                      "undefined" != typeof assertive_custom_3
                        ? assertive_custom_3
                        : null,
                    custom_4:
                      "undefined" != typeof assertive_custom_4
                        ? assertive_custom_4
                        : null,
                    custom_5:
                      "undefined" != typeof assertive_custom_5
                        ? assertive_custom_5
                        : null,
                    bps_type: t.getTargeting("ay_bid")[0] || null,
                    bps_algo: t.getTargeting("ay_algo")[0] || null
                  };
                  S.push(f);
                  var g = new XMLHttpRequest();
                  g.open("POST", _, !0),
                    g.setRequestHeader("Content-Type", "text/plain"),
                    g.send(JSON.stringify(f)),
                    R("SENT!!!");
                }
              } else
                console.error(
                  "Assertive Yield: Entity ID is mandatory and not defined, exiting..."
                );
          }),
            googletag
              .pubads()
              .addEventListener("impressionViewable", function(e) {
                var t = e.slot.getSlotElementId();
                if (U[t]) {
                  var n = new XMLHttpRequest(),
                    i =
                      _ +
                      "?event=activeView&entityId=" +
                      assertive_entityId +
                      "&impressionUUID=" +
                      U[t];
                  n.open("GET", i, !0), n.send();
                }
              });
        });
      })();
  var n = !1;
})();

var AdheseAjax = {
  request: function(ops) {
    if (typeof ops == "string") ops = { url: ops };
    ops.url = ops.url || "";
    ops.method = ops.method || "get";
    ops.data = ops.data || {};
    if (typeof ops.encodeData == "undefined") {
      ops.encodeData = true;
    }
    var getParams = function(data, url) {
      var arr = [],
        str;
      for (var name in data) {
        arr.push(name + "=" + encodeURIComponent(data[name]));
      }
      str = arr.join("&");
      if (str != "") {
        return url ? (url.indexOf("?") < 0 ? "?" + str : "&" + str) : str;
      }
      return "";
    };
    var api = {
      host: {},
      process: function(ops) {
        var self = this;
        this.xhr = null;

        if (document.all && !window.atob) {
          // IE9 and older
          try {
            this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
            try {
              this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
              this.xhr = false;
            }
          }
        } else {
          try {
            this.xhr = new XMLHttpRequest();
          } catch (e) {
            this.xhr = false;
          }
        }

        if (this.xhr) {
          if ("withCredentials" in this.xhr) {
            this.xhr.withCredentials = true;
          }
          this.xhr.onreadystatechange = function() {
            if (self.xhr.readyState == 4 && self.xhr.status == 200) {
              var result = self.xhr.responseText;
              if (ops.json === true && typeof JSON != "undefined") {
                if (result) {
                  try {
                    result = JSON.parse(result);
                    self.doneCallback &&
                      self.doneCallback.apply(self.host, [result, self.xhr]);
                  } catch (e) {
                    self.errorCallback &&
                      self.errorCallback.apply(self.host, [
                        "Adhese Ajax: " + e
                      ]);
                  }
                } else {
                  self.errorCallback &&
                    self.errorCallback.apply(self.host, [
                      "Adhese Ajax: Response is empty string"
                    ]);
                }
              }
            } else if (self.xhr.readyState == 4) {
              self.failCallback &&
                self.failCallback.apply(self.host, [self.xhr]);
            }
            self.alwaysCallback &&
              self.alwaysCallback.apply(self.host, [self.xhr]);
          };
        }
        if (ops.method == "get") {
          this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
        } else {
          this.xhr.open(ops.method, ops.url, true);
          this.setHeaders({
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/x-www-form-urlencoded"
          });
        }
        if (ops.headers && typeof ops.headers == "object") {
          this.setHeaders(ops.headers);
        }
        setTimeout(function() {
          if (ops.method == "get") {
            self.xhr.send();
          } else {
            var data;
            if (ops.encodeData) {
              data = getParams(ops.data);
            } else {
              data = ops.data;
            }
            self.xhr.send(data);
          }
        }, 20);
        return this;
      },
      done: function(callback) {
        this.doneCallback = callback;
        return this;
      },
      fail: function(callback) {
        this.failCallback = callback;
        return this;
      },
      always: function(callback) {
        this.alwaysCallback = callback;
        return this;
      },
      error: function(callback) {
        this.errorCallback = callback;
        return this;
      },
      setHeaders: function(headers) {
        for (var name in headers) {
          this.xhr && this.xhr.setRequestHeader(name, headers[name]);
        }
      }
    };
    return api.process(ops);
  }
};

var addTrackingPixel = function(uri) {
  var img = document.createElement("img");
  img.src = uri;
  img.style.height = "1px";
  img.style.width = "1px";
  img.style.margin = "-1px";
  img.style.border = "0";
  img.style.position = "absolute";
  img.style.top = "0";
  document.body.appendChild(img);
};

var syncImprove = function(option) {
  var response = AdheseAjax.request({
    url:
      "https://ad.360yield.com/add?jsonp=%7B%22bid_request%22%3A%7B%22id%22%3A%22Massarius_user_sync%22%2C%22secure%22%3A1%2C%22version%22%3A%22DT-1.6.0-JS-5.1.1%22%2C%22gdpr%22%3A%221%22%2C%22imp%22%3A%5B%7B%22id%22%3A%22efg%22%2C%22pid%22%3A13317693%2C%22banner%22%3A%7B%7D%7D%5D%7D%7D",
    method: "get",
    json: true
  }).done(function(result) {
    try {
      var syncUrls = result.bid[0].sync;
      for (var i in syncUrls) {
        addTrackingPixel(result.bid[0].sync[i]);
      }
    } catch (e) {
      console.log("Massarius: exception when syncing Improve users");
      console.log(result);
    }
  });
};
