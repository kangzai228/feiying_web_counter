var feiyingCaller, feiyingTag;
!function() {
    var t, e, n, a = !1, c = [];
    ready = function(t) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ? t.call(document) : c.push(function() {
            return t.call(this)
        }),
        this
    }
    ,
    e = function() {
        for (var t = 0, e = c.length; t < e; t++)
            c[t].apply(document);
        c = []
    }
    ,
    n = function() {
        a || (a = !0,
        e.call(window),
        document.removeEventListener ? document.removeEventListener("DOMContentLoaded", n, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", n),
        window == window.top && (clearInterval(t),
        t = null)))
    }
    ,
    document.addEventListener ? document.addEventListener("DOMContentLoaded", n, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
        /loaded|complete/.test(document.readyState) && n()
    }),
    window == window.top && (t = setInterval(function() {
        try {
            a || document.documentElement.doScroll("left")
        } catch (t) {
            return
        }
        n()
    }, 5)))
}(),


(feiyingCaller = {
    fetch: function(t, e) {
        var n = "feiyingCallback_" + Math.floor(1099511627750 * Math.random());
        t = t.replace("=feiyingCallback", "=" + n),
        scriptTag = document.createElement("SCRIPT"),
        scriptTag.type = "text/javascript",
        scriptTag.defer = !0,
        scriptTag.src = t,
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag),
        window[n] = this.evalCall(e)
    },
    evalCall: function(e) {
        return function(t) {
            ready(function() {
                try {
                    e(t),
                    scriptTag && scriptTag.parentElement && scriptTag.parentElement.removeChild && scriptTag.parentElement.removeChild(scriptTag)
                } catch (t) {
                    console.log(t),
                    feiyingTag.hides()
                }
            })
        }
    }
}).fetch("//api.5uks.net/feiying?jsonpCallback=feiyingCallback", function(t) {
    feiyingTag.texts(t),
    feiyingTag.shows()
}),



feiyingTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function(n) {
        this.bszs.map(function(t) {
            var e = document.getElementById("feiying_value_" + t);
            e && (e.innerHTML = n[t])
        })
    },
    hides: function() {
        this.bszs.map(function(t) {
            var e = document.getElementById("feiying_container_" + t);
            e && (e.style.display = "none")
        })
    },
    shows: function() {
        this.bszs.map(function(t) {
            var e = document.getElementById("feiying_container_" + t);
            e && (e.style.display = "inline")
        })
    }
};
