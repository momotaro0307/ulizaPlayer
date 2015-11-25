/*! UlizaPlayerJS 2015-11-19 ver.1.8 */
!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a);
            }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
}({
    1: [ function(a, b, c) {
        var d = function() {
            function a() {
                if (!S) {
                    try {
                        var a = L.getElementsByTagName("body")[0].appendChild(r("span"));
                        a.parentNode.removeChild(a);
                    } catch (b) {
                        return;
                    }
                    S = !0;
                    for (var c = O.length, d = 0; c > d; d++) O[d]();
                }
            }
            function b(a) {
                S ? a() : O[O.length] = a;
            }
            function c(a) {
                if (typeof K.addEventListener != D) K.addEventListener("load", a, !1); else if (typeof L.addEventListener != D) L.addEventListener("load", a, !1); else if (typeof K.attachEvent != D) s(K, "onload", a); else if ("function" == typeof K.onload) {
                    var b = K.onload;
                    K.onload = function() {
                        b(), a();
                    };
                } else K.onload = a;
            }
            function e() {
                N ? f() : g();
            }
            function f() {
                var a = L.getElementsByTagName("body")[0], b = r(E);
                b.setAttribute("type", H);
                var c = a.appendChild(b);
                if (c) {
                    var d = 0;
                    !function() {
                        if (typeof c.GetVariable != D) {
                            var e = c.GetVariable("$version");
                            e && (e = e.split(" ")[1].split(","), V.pv = [ parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10) ]);
                        } else if (10 > d) return d++, void setTimeout(arguments.callee, 10);
                        a.removeChild(b), c = null, g();
                    }();
                } else g();
            }
            function g() {
                var a = P.length;
                if (a > 0) for (var b = 0; a > b; b++) {
                    var c = P[b].id, d = P[b].callbackFn, e = {
                        success: !1,
                        id: c
                    };
                    if (V.pv[0] > 0) {
                        var f = q(c);
                        if (f) if (!t(P[b].swfVersion) || V.wk && V.wk < 312) if (P[b].expressInstall && i()) {
                            var g = {};
                            g.data = P[b].expressInstall, g.width = f.getAttribute("width") || "0", g.height = f.getAttribute("height") || "0",
                            f.getAttribute("class") && (g.styleclass = f.getAttribute("class")), f.getAttribute("align") && (g.align = f.getAttribute("align"));
                            for (var l = {}, m = f.getElementsByTagName("param"), n = m.length, o = 0; n > o; o++) "movie" != m[o].getAttribute("name").toLowerCase() && (l[m[o].getAttribute("name")] = m[o].getAttribute("value"));
                            j(g, l, c, d);
                        } else k(f), d && d(e); else v(c, !0), d && (e.success = !0, e.ref = h(c), d(e));
                    } else if (v(c, !0), d) {
                        var p = h(c);
                        p && typeof p.SetVariable != D && (e.success = !0, e.ref = p), d(e);
                    }
                }
            }
            function h(a) {
                var b = null, c = q(a);
                if (c && "OBJECT" == c.nodeName) if (typeof c.SetVariable != D) b = c; else {
                    var d = c.getElementsByTagName(E)[0];
                    d && (b = d);
                }
                return b;
            }
            function i() {
                return !T && t("6.0.65") && (V.win || V.mac) && !(V.wk && V.wk < 312);
            }
            function j(a, b, c, d) {
                T = !0, z = d || null, A = {
                    success: !1,
                    id: c
                };
                var e = q(c);
                if (e) {
                    "OBJECT" == e.nodeName ? (x = l(e), y = null) : (x = e, y = c), a.id = I, (typeof a.width == D || !/%$/.test(a.width) && parseInt(a.width, 10) < 310) && (a.width = "310"),
                    (typeof a.height == D || !/%$/.test(a.height) && parseInt(a.height, 10) < 137) && (a.height = "137"),
                    L.title = L.title.slice(0, 47) + " - Flash Player Installation";
                    var f = V.ie && V.win ? [ "Active" ].concat("").join("X") : "PlugIn", g = "MMredirectURL=" + K.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + L.title;
                    if (typeof b.flashvars != D ? b.flashvars += "&" + g : b.flashvars = g, V.ie && V.win && 4 != e.readyState) {
                        var h = r("div");
                        c += "SWFObjectNew", h.setAttribute("id", c), e.parentNode.insertBefore(h, e), e.style.display = "none",
                        function() {
                            4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
                        }();
                    }
                    m(a, b, c);
                }
            }
            function k(a) {
                if (V.ie && V.win && 4 != a.readyState) {
                    var b = r("div");
                    a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(l(a), b), a.style.display = "none",
                    function() {
                        4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10);
                    }();
                } else a.parentNode.replaceChild(l(a), a);
            }
            function l(a) {
                var b = r("div");
                if (V.win && V.ie) b.innerHTML = a.innerHTML; else {
                    var c = a.getElementsByTagName(E)[0];
                    if (c) {
                        var d = c.childNodes;
                        if (d) for (var e = d.length, f = 0; e > f; f++) 1 == d[f].nodeType && "PARAM" == d[f].nodeName || 8 == d[f].nodeType || b.appendChild(d[f].cloneNode(!0));
                    }
                }
                return b;
            }
            function m(a, b, c) {
                var d, e = q(c);
                if (V.wk && V.wk < 312) return d;
                if (e) if (typeof a.id == D && (a.id = c), V.ie && V.win) {
                    var f = "";
                    for (var g in a) a[g] != Object.prototype[g] && ("data" == g.toLowerCase() ? b.movie = a[g] : "styleclass" == g.toLowerCase() ? f += ' class="' + a[g] + '"' : "classid" != g.toLowerCase() && (f += " " + g + '="' + a[g] + '"'));
                    var h = "";
                    for (var i in b) b[i] != Object.prototype[i] && (h += '<param name="' + i + '" value="' + b[i] + '" />');
                    e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>",
                    Q[Q.length] = a.id, d = q(a.id);
                } else {
                    var j = r(E);
                    j.setAttribute("type", H);
                    for (var k in a) a[k] != Object.prototype[k] && ("styleclass" == k.toLowerCase() ? j.setAttribute("class", a[k]) : "classid" != k.toLowerCase() && j.setAttribute(k, a[k]));
                    for (var l in b) b[l] != Object.prototype[l] && "movie" != l.toLowerCase() && n(j, l, b[l]);
                    e.parentNode.replaceChild(j, e), d = j;
                }
                return d;
            }
            function n(a, b, c) {
                var d = r("param");
                d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d);
            }
            function o(a) {
                var b = q(a);
                b && "OBJECT" == b.nodeName && (V.ie && V.win ? (b.style.display = "none", function() {
                    4 == b.readyState ? p(a) : setTimeout(arguments.callee, 10);
                }()) : b.parentNode.removeChild(b));
            }
            function p(a) {
                var b = q(a);
                if (b) {
                    for (var c in b) "function" == typeof b[c] && (b[c] = null);
                    b.parentNode.removeChild(b);
                }
            }
            function q(a) {
                var b = null;
                try {
                    b = L.getElementById(a);
                } catch (c) {}
                return b;
            }
            function r(a) {
                return L.createElement(a);
            }
            function s(a, b, c) {
                a.attachEvent(b, c), R[R.length] = [ a, b, c ];
            }
            function t(a) {
                var b = V.pv, c = a.split(".");
                return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0,
                b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1;
            }
            function u(a, b, c, d) {
                if (!V.ie || !V.mac) {
                    var e = L.getElementsByTagName("head")[0];
                    if (e) {
                        var f = c && "string" == typeof c ? c : "screen";
                        if (d && (B = null, C = null), !B || C != f) {
                            var g = r("style");
                            g.setAttribute("type", "text/css"), g.setAttribute("media", f), B = e.appendChild(g),
                            V.ie && V.win && typeof L.styleSheets != D && L.styleSheets.length > 0 && (B = L.styleSheets[L.styleSheets.length - 1]),
                            C = f;
                        }
                        V.ie && V.win ? B && typeof B.addRule == E && B.addRule(a, b) : B && typeof L.createTextNode != D && B.appendChild(L.createTextNode(a + " {" + b + "}"));
                    }
                }
            }
            function v(a, b) {
                if (U) {
                    var c = b ? "visible" : "hidden";
                    S && q(a) ? q(a).style.visibility = c : u("#" + a, "visibility:" + c);
                }
            }
            function w(a) {
                var b = /[\\\"<>\.;]/, c = null != b.exec(a);
                return c && typeof encodeURIComponent != D ? encodeURIComponent(a) : a;
            }
            var x, y, z, A, B, C, D = "undefined", E = "object", F = "Shockwave Flash", G = "ShockwaveFlash.ShockwaveFlash", H = "application/x-shockwave-flash", I = "SWFObjectExprInst", J = "onreadystatechange", K = window, L = document, M = navigator, N = !1, O = [ e ], P = [], Q = [], R = [], S = !1, T = !1, U = !0, V = function() {
                var a = typeof L.getElementById != D && typeof L.getElementsByTagName != D && typeof L.createElement != D, b = M.userAgent.toLowerCase(), c = M.platform.toLowerCase(), d = c ? /win/.test(c) : /win/.test(b), e = c ? /mac/.test(c) : /mac/.test(b), f = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, g = !1, h = [ 0, 0, 0 ], i = null;
                if (typeof M.plugins != D && typeof M.plugins[F] == E) i = M.plugins[F].description,
                !i || typeof M.mimeTypes != D && M.mimeTypes[H] && !M.mimeTypes[H].enabledPlugin || (N = !0,
                g = !1, i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), h[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10),
                h[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10), h[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof K[[ "Active" ].concat("Object").join("X")] != D) try {
                    var j = new (window[[ "Active" ].concat("Object").join("X")])(G);
                    j && (i = j.GetVariable("$version"), i && (g = !0, i = i.split(" ")[1].split(","),
                    h = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]));
                } catch (k) {}
                return {
                    w3: a,
                    pv: h,
                    wk: f,
                    ie: g,
                    win: d,
                    mac: e
                };
            }();
            return function() {
                V.w3 && ((typeof L.readyState != D && "complete" == L.readyState || typeof L.readyState == D && (L.getElementsByTagName("body")[0] || L.body)) && a(),
                S || (typeof L.addEventListener != D && L.addEventListener("DOMContentLoaded", a, !1),
                V.ie && V.win && (L.attachEvent(J, function() {
                    "complete" == L.readyState && (L.detachEvent(J, arguments.callee), a());
                }), K == top && !function() {
                    if (!S) {
                        try {
                            L.documentElement.doScroll("left");
                        } catch (b) {
                            return void setTimeout(arguments.callee, 0);
                        }
                        a();
                    }
                }()), V.wk && !function() {
                    return S ? void 0 : /loaded|complete/.test(L.readyState) ? void a() : void setTimeout(arguments.callee, 0);
                }(), c(a)));
            }(), function() {
                V.ie && V.win && window.attachEvent("onunload", function() {
                    for (var a = R.length, b = 0; a > b; b++) R[b][0].detachEvent(R[b][1], R[b][2]);
                    for (var c = Q.length, e = 0; c > e; e++) o(Q[e]);
                    for (var f in V) V[f] = null;
                    V = null;
                    for (var g in d) d[g] = null;
                    d = null;
                });
            }(), {
                registerObject: function(a, b, c, d) {
                    if (V.w3 && a && b) {
                        var e = {};
                        e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, P[P.length] = e,
                        v(a, !1);
                    } else d && d({
                        success: !1,
                        id: a
                    });
                },
                getObjectById: function(a) {
                    return V.w3 ? h(a) : void 0;
                },
                embedSWF: function(a, c, d, e, f, g, h, k, l, n) {
                    var o = {
                        success: !1,
                        id: c
                    };
                    V.w3 && !(V.wk && V.wk < 312) && a && c && d && e && f ? (v(c, !1), b(function() {
                        d += "", e += "";
                        var b = {};
                        if (l && typeof l === E) for (var p in l) b[p] = l[p];
                        b.data = a, b.width = d, b.height = e;
                        var q = {};
                        if (k && typeof k === E) for (var r in k) q[r] = k[r];
                        if (h && typeof h === E) for (var s in h) typeof q.flashvars != D ? q.flashvars += "&" + s + "=" + h[s] : q.flashvars = s + "=" + h[s];
                        if (t(f)) {
                            var u = m(b, q, c);
                            b.id == c && v(c, !0), o.success = !0, o.ref = u;
                        } else {
                            if (g && i()) return b.data = g, void j(b, q, c, n);
                            v(c, !0);
                        }
                        n && n(o);
                    })) : n && n(o);
                },
                switchOffAutoHideShow: function() {
                    U = !1;
                },
                ua: V,
                getFlashPlayerVersion: function() {
                    return {
                        major: V.pv[0],
                        minor: V.pv[1],
                        release: V.pv[2]
                    };
                },
                hasFlashPlayerVersion: t,
                createSWF: function(a, b, c) {
                    return V.w3 ? m(a, b, c) : void 0;
                },
                showExpressInstall: function(a, b, c, d) {
                    V.w3 && i() && j(a, b, c, d);
                },
                removeSWF: function(a) {
                    V.w3 && o(a);
                },
                createCSS: function(a, b, c, d) {
                    V.w3 && u(a, b, c, d);
                },
                addDomLoadEvent: b,
                addLoadEvent: c,
                getQueryParamValue: function(a) {
                    var b = L.location.search || L.location.hash;
                    if (b) {
                        if (/\?/.test(b) && (b = b.split("?")[1]), null == a) return w(b);
                        for (var c = b.split("&"), d = 0; d < c.length; d++) if (c[d].substring(0, c[d].indexOf("=")) == a) return w(c[d].substring(c[d].indexOf("=") + 1));
                    }
                    return "";
                },
                expressInstallCallback: function() {
                    if (T) {
                        var a = q(I);
                        a && x && (a.parentNode.replaceChild(x, a), y && (v(y, !0), V.ie && V.win && (x.style.display = "block")),
                        z && z(A)), T = !1;
                    }
                }
            };
        }();
        b.exports = d;
    }, {} ],
    2: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./addComponentItem"), g = a("./utils/typeof"), h = a("./event/buttonEvent"), i = function(a) {
            function b(b) {
                if (a.call(this, b), this.items = [], this.player_.options.buttons) {
                    var c = [];
                    for (var d in this.player_.options.buttons) this.addItem(this.player_.options.buttons[d]);
                    for (var e = 0; e < this.items.length; e++) this.trigger(h.ON_ADD_BUTTON, {
                        button: this.items[e]
                    }), c.push(this.items[e].toObject());
                    this.player_.options.buttons = c;
                }
            }
            return d(b, a), b.prototype.callback = function(a, b) {
                switch (a) {
                  case "onClick":
                    if ("componentOverView" === b.component) {
                        var c = this.findItemBy(b.data);
                        c && g.isFunction(c.onClick) && c.onClick(b.data);
                    }
                }
            }, b.prototype.getComponentInfo = function() {
                for (var a = [], b = 0; b < this.items.length; b++) a.push(this.items[b].toObject());
                return a;
            }, b.prototype.addComponent = function(a) {
                if (this.player_.media.jsBridgeAvailable()) {
                    var b = this.addItem(a);
                    return b ? (this.trigger(h.ON_ADD_BUTTON, {
                        button: b
                    }), this.player_.media.addComponent(b.toObject())) : !1;
                }
                return !1;
            }, b.prototype.removeComponent = function(a) {
                if (this.player_.media.jsBridgeAvailable()) {
                    var b = this.findItemBy(a);
                    return this.removeItemBy(a) ? (this.trigger(h.ON_REMOVE_BUTTON, {
                        button: b
                    }), this.player_.media.removeComponent(a)) : !1;
                }
                return !1;
            }, b.prototype.removeAllComponent = function() {
                if (this.player_.media.jsBridgeAvailable() && this.items.length > 0) {
                    for (var a = 0; a < this.items.length; a++) this.trigger(h.ON_REMOVE_BUTTON, {
                        button: this.items[a]
                    }), this.player_.media.removeComponent(this.items[a].id);
                    return this.items = [], !0;
                }
                return !1;
            }, b.prototype.addItem = function(a) {
                var b = new f(a);
                return this.findItemBy(b.id) ? null : (this.items.push(b), b);
            }, b.prototype.findItemBy = function(a) {
                for (var b = 0; b < this.items.length; b++) if (this.items[b].id === a) return this.items[b];
                return null;
            }, b.prototype.removeItemBy = function(a) {
                for (var b = 0; b < this.items.length; b++) if (this.items[b].id === a) return this.items.splice(b, 1),
                !0;
                return !1;
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./addComponentItem": 3,
        "./component/component": 51,
        "./event/buttonEvent": 58,
        "./utils/typeof": 111
    } ],
    3: [ function(a, b, c) {
        var d = a("./validate/validateAddComponent"), e = function() {
            function a(a) {
                if (this.id = void 0, this.url = void 0, this.overUrl = void 0, this.onClick = void 0,
                this.layoutInfo = void 0, this.style = void 0, this.visibleWithControlbar = !0,
                a = d.validate(a)) for (var b in a) try {
                    this[b] = a[b];
                } catch (c) {}
            }
            return a.prototype.toObject = function() {
                for (var a = {}, b = [ "id", "url", "style", "onClick", "layoutInfo", "visibleWithControlbar" ], c = 0; c < b.length; c++) void 0 !== this[b[c]] && (a[b[c]] = this[b[c]]);
                return a;
            }, a;
        }();
        b.exports = e;
    }, {
        "./validate/validateAddComponent": 117
    } ],
    4: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../utils/url2"), g = a("./../event/advertisementEvent"), h = a("./model/advertisementLoadState"), i = a("./../component/componentType"), j = a("./advertisementFactory"), k = (a("./../log/logger"),
        a("./model/creativeType")), l = a("./display/advertisementDisplay"), m = a("./../advertisement/model/creativeTypeString"), n = a("./../utils/Typeof"), o = function(a) {
            function b(b) {
                a.call(this, b), this.companions = [];
            }
            return d(b, a), b.prototype.added = function() {
                this.display = new l(this);
                for (var a = new j(this), b = [ i.ADVERTISEMENT_PLAYBACK, i.ADVERTISEMENT_ROLL_FACTORY, i.ADVERTISEMENT_LOADER, i.ADVERTISEMENT_CLIENT, i.ADVERTISEMENT_TRACK, i.ADVERTISEMENT_QUEUE ], c = 0; c < b.length; c++) {
                    var d = a.createComponent(this.player_.options, b[c]);
                    d && this.addChild(b[c], d);
                }
            }, b.canHandleOptions = function(a) {
                return n.isObject(a.file) || "JSON" === f.getExtension(a.file).toUpperCase() ? "PLAYLIST_VMAP" === a.advertising.client && !!a.advertising.tag && !!a.plugin.advertisement : !!a.advertising.client && !!a.advertising.tag && !!a.plugin.advertisement;
            }, b.prototype.callback = function(b, c) {
                switch (b) {
                  case g.LOAD_STATE_CHANGE:
                    switch (c.state) {
                      case h.READY:
                        this.processReadyState();
                        break;

                      case h.LOAD_ERROR:
                        this.processErrorState();
                    }
                }
                this.model && this.player_.media && a.prototype.callback.call(this, b, c);
            }, b.prototype.processReadyState = function() {
                this.model = this.getChild(i.ADVERTISEMENT_LOADER).model, this.addChild("model", this.model),
                this.rollTrait = this.getChild(i.ADVERTISEMENT_ROLL_FACTORY).createRollTrait(this.model, [ i.PREROLL_TRAIT, i.MIDROLL_TRAIT, i.POSTROLL_TRAIT ]),
                this.rollTrait && (this.addChild("RollTrait", this.rollTrait), this.player_.media && this.rollTrait.onAdPolling());
            }, b.prototype.processErrorState = function() {}, b.prototype.displayAd = function(a, b) {
                this.display.display(a, b);
            }, b.prototype.removeAd = function(a, b) {}, b.prototype.getAdvertisingData = function() {
                return this.model ? this.model.toObject() : [];
            }, b.prototype.isCompletedPost = function() {
                for (var a = this.getAdvertisingData(), b = !0, c = 0; c < a.length; c++) if ("post" === a[c].rolltype && !a[c].completed) {
                    b = !1;
                    break;
                }
                return b;
            }, b.prototype.isPlayingLinearAd = function() {
                for (var a = this.player_.media.getPlayingAdData(), b = 0; b < a.length; b++) if (a[b].adType === m[k.linear]) return !0;
                return !1;
            }, b.prototype.dispose = function() {
                try {
                    this.player_.media.deleteScrubQueueAll(), this.player_.media.closeAllAd(), a.prototype.dispose.call(this),
                    this.model = null, this.rollTrait = null, this.display = null, this.companions = null;
                } catch (b) {}
            }, b;
        }(e);
        b.exports = o;
    }, {
        "./../advertisement/model/creativeTypeString": 27,
        "./../component/component": 51,
        "./../component/componentType": 54,
        "./../event/advertisementEvent": 57,
        "./../log/logger": 62,
        "./../utils/Typeof": 104,
        "./../utils/url2": 112,
        "./advertisementFactory": 6,
        "./display/advertisementDisplay": 12,
        "./model/advertisementLoadState": 21,
        "./model/creativeType": 26
    } ],
    5: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../event/advertisementEvent"), g = (a("./../log/logger"),
        a("./../event/mediaEvent")), h = a("vastvmap"), i = a("./model/advertisementLoadState"), j = a("./model/creativeTypeString"), k = a("./model/creativeType"), l = a("./model/advertisementAssetState"), m = a("./model/rollType"), n = a("./model/advertisementItemState"), o = a("./model/vastAdState"), p = a("./model/advertisementId"), q = a("./model/advertisementAsset"), r = a("./model/converter/vmapConverter"), s = a("./model/converter/vastConverter"), t = a("./../macro"), u = a("./../utils/typeof"), v = function(a) {
            function b(b) {
                a.call(this, b.player_), this.completed = !1, this.advertisement_ = b;
            }
            return d(b, a), b.prototype.callback = function(b, c) {
                switch (b) {
                  case f.LOAD_STATE_CHANGE:
                    c.state == i.READY && void 0 !== this.player_.options.advertising.midrollMax && this.processMaxPlayMidrollPointOfSeek(this.player_.options.startTime * this.player_.getPlaybackRate()),
                    this.vastRequestPolling(this.player_.getCurrentTime());
                    break;

                  case g.COMPLETE:
                    this.completed = !0, this.vastRequestPolling(this.player_.getCurrentTime());
                    break;

                  case g.PLAYING:
                    this.completed && this.player_.options.advertising.allowResetMidRollStatus ? (this.completed = !1,
                    this.resetMidroll(this.player_.getCurrentTime())) : this.completed = !1;
                    break;

                  case g.SECOND_DURATION_CHANGE:
                    for (var d = 0; d < this.advertisement_.model.items.length; d++) this.advertisement_.model.items[d] = r.appendRepresentTiming(this.advertisement_.model.items[d], this.player_.getDuration());
                    this.advertisement_.model.sortByOffset(), this.trigger(f.ITEM_TIMING_CHANGE, {}, !1);
                    break;

                  case f.PROCESSED_AD_COMPLETE:
                  case f.ON_VAST_LOADED:
                  case f.AD_START:
                  case g.CURRENT_SECODE_TIME_CHANGE:
                  case g.READY:
                    this.vastRequestPolling(this.player_.getCurrentTime());
                    break;

                  case f.AD_COMPELETE:
                  case f.AD_CLOSE:
                  case f.AD_SKIP:
                    this.adProcessComplete(c[f.DATA_AD_ID]), this.vastRequestPolling(this.player_.getCurrentTime());
                    break;

                  case f.PROCESSED_AD_DISPLAY:
                  case f.AD_START:
                    this.updateItemState();
                    break;

                  case g.SEEKED:
                    this.player_.options.advertising.allowResetMidRollStatus && this.resetMidroll(c.time * this.player_.getPlaybackRate()),
                    void 0 !== this.player_.options.advertising.midrollMax && this.processMaxPlayMidrollPointOfSeek(c.time * this.player_.getPlaybackRate()),
                    this.vastRequestPolling(c.time * this.player_.getPlaybackRate());
                }
                a.prototype.callback.call(this, b, c);
            }, b.prototype.processMaxPlayMidrollPointOfSeek = function(a) {
                if (!u.isNaN(a)) {
                    var b, c, d = !1, e = this.advertisement_.model.findItemsBy([ n.unload, n.loading, n.loaded ], [ m.MID ], 0, a);
                    if (e.length > 0) {
                        var g = [];
                        for (b = 0; b < e.length; b++) -1 === g.indexOf(e[b].represent_timing) && g.push(e[b].represent_timing);
                        for (b = 0; b < this.player_.options.advertising.midrollMax; b++) g.pop();
                        for (b = 0; b < g.length; b++) for (c = 0; c < e.length; c++) e[c].represent_timing === g[b] && (d = !0,
                        e[c].consume());
                    }
                    d && this.trigger(f.ITEM_STATE_CHANGE);
                }
            }, b.prototype.resetMidroll = function(a) {
                if (!this.completed && !u.isNaN(a)) {
                    var b, c = !1;
                    b = this.advertisement_.model.findItemsBy([ n.error, n.consumed ], [ m.MID ], a);
                    for (var d = 0; d < b.length; d++) b[d].reset(), c = !0;
                    b = this.advertisement_.model.findItemsBy([ n.loading, n.loaded ], [ m.MID ], a - this.player_.options.advertising.offsetToGetVast);
                    for (var d = 0; d < b.length; d++) b[d].reset(), c = !0;
                    c && this.trigger(f.PROCESSED_MIDROLL_RESSET, {}, !1);
                }
            }, b.prototype.onLoadVast = function(a, b) {
                var c, d = this.advertisement_.model.findItemByIndex(a);
                if (b) try {
                    c = b.getAd();
                } catch (e) {}
                if (c && d.state === n.loading) {
                    var g;
                    for (d.assets.push(new q(new p(d.index, 0), c)), g = 0; g < d.assets.length; g++) d.assets[g].state = new o(),
                    d.assets[g].state.linear = s.verifyLinear(d.assets[g].vastAd) ? l.ready : l.closed,
                    d.assets[g].state.nonlinear = s.verifyNonLinear(d.assets[g].vastAd) ? l.ready : l.closed,
                    d.assets[g].state.companion = s.verifyCompanion(d.assets[g].vastAd) ? l.ready : l.closed,
                    d.assets[g].linear && (d.assets[g].selected_linear_resource = s.choiceLinearResource(d.assets[g].vastAd),
                    s.normalizeProgressTrack(d.assets[g], k.linear)), d.assets[g].nonlinears && d.assets[g].nonlinears.length > 0 && s.normalizeProgressTrack(d.assets[g], k.nonlinear);
                    d.state = n.loaded;
                } else d.state = n.error;
                this.updateItemState(), this.trigger(f.ITEM_STATE_CHANGE, {}, !1), this.trigger(f.ON_VAST_LOADED, {
                    index: d.index,
                    timing: d.represent_timing,
                    vasturi: d.adtag_url
                });
            }, b.prototype.adProcessComplete = function(a) {
                var b = p.createBy(a), c = this.advertisement_.model.findAssetByAdId(b);
                if (c) {
                    b.creative_type === k.nonlinear ? c.state[j[b.creative_type]] !== l.ready && (c.state[j[b.creative_type]] = l.closed) : c.state[j[b.creative_type]] = l.closed,
                    this.player_.media.setPlayerTitle({
                        title: this.player_.options.title
                    }), this.updateItemState();
                    var d = {};
                    d[f.DATA_AD_ID] = a, this.trigger(f.PROCESSED_AD_COMPLETE, d, !1);
                }
            }, b.prototype.updateItemState = function() {
                for (var a = !1, b = 0; b < this.advertisement_.model.items.length; b++) if (this.advertisement_.model.items[b].state === n.loaded) {
                    for (var c = !0, d = 0; d < this.advertisement_.model.items[b].assets.length; d++) if (this.advertisement_.model.items[b].assets[d].state.linear !== l.closed || this.advertisement_.model.items[b].assets[d].state.nonlinear === l.ready || this.advertisement_.model.items[b].assets[d].state.nonlinear === l.setting) {
                        c = !1;
                        break;
                    }
                    c && (this.advertisement_.model.items[b].state = n.consumed, a = !0);
                }
                a && this.trigger(f.ITEM_STATE_CHANGE);
            }, b.prototype.vastRequestPolling = function(a, b) {
                void 0 === b && (b = !1);
                var c;
                if (c = b ? this.advertisement_.model.findItemBy([ n.unload ], [ m.POST ]) : this.advertisement_.model.findItemBy([ n.unload ]),
                c && !this.advertisement_.model.findItemBy([ n.loading ]) && !this.advertisement_.model.findAssetBy([ n.loaded ], [ k.linear, k.nonlinear ], [ l.ready, l.setting ], [ m.PRE, m.MID ])) switch (c.roll_type) {
                  case m.PRE:
                    c.state = n.loading, this.loadVast(c);
                    break;

                  case m.MID:
                    var d = c.represent_timing - this.player_.options.advertising.offsetToGetVast;
                    a >= d ? (c.state = n.loading, this.loadVast(c)) : this.vastRequestPolling(a, !0);
                    break;

                  case m.POST:
                    if (0 !== this.player_.getDuration()) {
                        var d = this.player_.getDuration() - this.player_.options.advertising.offsetToGetVast;
                        (this.completed || a >= d) && (c.state = n.loading, this.loadVast(c));
                    }
                    break;

                  default:
                    c.state = n.error, this.trigger(f.ITEM_STATE_CHANGE, {}, !1);
                }
            }, b.prototype.loadVast = function(a) {
                t.hasMacro(a.adtag_url, this.player_.options.uuid.macro) ? this.player_.getUUID(function(b, c) {
                    a.adtag_url = this.player_.replaceByMacro(a.adtag_url), h.queryVAST(a.adtag_url, this.onLoadVast.bind(this, a.index), null, this.player_.getMacro());
                }.bind(this)) : h.queryVAST(a.adtag_url, this.onLoadVast.bind(this, a.index), null);
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null, this.completed = null;
            }, b;
        }(e);
        b.exports = v;
    }, {
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./../macro": 63,
        "./../utils/typeof": 111,
        "./model/advertisementAsset": 16,
        "./model/advertisementAssetState": 17,
        "./model/advertisementId": 18,
        "./model/advertisementItemState": 20,
        "./model/advertisementLoadState": 21,
        "./model/converter/vastConverter": 24,
        "./model/converter/vmapConverter": 25,
        "./model/creativeType": 26,
        "./model/creativeTypeString": 27,
        "./model/rollType": 28,
        "./model/vastAdState": 31,
        vastvmap: 125
    } ],
    6: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/componentFactory"), f = a("./../component/componentFactoryItem"), g = a("./../component/componentType"), h = a("./rolltrait/rollTraitFactory"), i = a("./advertisementLoader"), j = a("./advertisementClient"), k = a("./advertisementTrack"), l = a("./advertisementPlayback"), m = a("./advertisementQueue"), n = function(a) {
            function b(b) {
                a.call(this, b.player_), this.addItem(new f(g.ADVERTISEMENT_ROLL_FACTORY, h.canHandleOptions, function() {
                    return new h(b);
                }, g.ADVERTISEMENT_ROLL_FACTORY)), this.addItem(new f(g.ADVERTISEMENT_LOADER, i.canHandleOptions, function() {
                    return new i(b);
                }, g.ADVERTISEMENT_LOADER)), this.addItem(new f(g.ADVERTISEMENT_CLIENT, j.canHandleOptions, function() {
                    return new j(b);
                }, g.ADVERTISEMENT_CLIENT)), this.addItem(new f(g.ADVERTISEMENT_TRACK, k.canHandleOptions, function() {
                    return new k(b);
                }, g.ADVERTISEMENT_TRACK)), this.addItem(new f(g.ADVERTISEMENT_PLAYBACK, l.canHandleOptions, function() {
                    return new l(b);
                }, g.ADVERTISEMENT_PLAYBACK)), this.addItem(new f(g.ADVERTISEMENT_QUEUE, m.canHandleOptions, function() {
                    return new m(b);
                }, g.ADVERTISEMENT_QUEUE));
            }
            return d(b, a), b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
            }, b;
        }(e);
        b.exports = n;
    }, {
        "./../component/componentFactory": 52,
        "./../component/componentFactoryItem": 53,
        "./../component/componentType": 54,
        "./advertisementClient": 5,
        "./advertisementLoader": 7,
        "./advertisementPlayback": 8,
        "./advertisementQueue": 9,
        "./advertisementTrack": 10,
        "./rolltrait/rollTraitFactory": 36
    } ],
    7: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../macro"), g = a("vastvmap"), h = a("./../event/advertisementEvent"), i = a("./model/advertisementModel"), j = a("./model/advertisementLoadState"), k = a("./model/advertisementItem"), l = a("./model/converter/vmapConverter"), m = a("./model/rolltype"), n = a("./companionItem"), o = function(a) {
            function b(b) {
                a.call(this, b.player_), this.loadState_ = j.UNINITIALIZED, this.advertisement_ = b,
                this.model = new i(b), this.loadState_ = j.LOADING;
            }
            return d(b, a), b.prototype.added = function() {
                this.loadCompanions(), this.loadUUID();
            }, b.prototype.loadUUID = function() {
                f.hasMacro(this.player_.options.advertising.tag, this.player_.options.uuid.macro) ? this.player_.getUUID(function(a, b) {
                    this.player_.options.advertising.tag = this.player_.replaceByMacro(this.player_.options.advertising.tag),
                    this.loadVastVmap();
                }.bind(this)) : (this.player_.getUUID(function(a, b) {}), this.loadVastVmap());
            }, b.prototype.loadVastVmap = function() {
                var a = this.player_.options.advertising.tag;
                switch (this.player_.options.advertising.client) {
                  case "PLAYLIST_VMAP":
                  case "VMAP":
                    g.queryVMAP(a, function(a) {
                        this.trigger(h.ON_VMAP_LOADED, {
                            data: a
                        });
                        for (var b = 0; b < a.length; b++) {
                            var c = new k(b, a[b].pos, a[b].vasturi);
                            c = l.convert(c, this.player_.getDuration()), this.model.items.push(c);
                        }
                        this.model.sortByOffset(), this.player_.options.advertising.disablePreroll && this.model.deleteRoll(m.PRE),
                        this.setloadState(j.READY);
                    }.bind(this));
                    break;

                  case "VAST":
                    var b = new k(0, "00:00:00", a);
                    b = l.convert(b, this.player_.getDuration()), this.model.items.push(b), this.player_.options.advertising.disablePreroll && this.model.deleteRoll(m.PRE),
                    this.setloadState(j.READY);
                }
            }, b.prototype.setloadState = function(a) {
                this.loadState_ !== a && (this.trigger(h.LOAD_STATE_CHANGE, {
                    state: a
                }, !1), this.loadState_ = a);
            }, b.prototype.loadCompanions = function() {
                if (this.player_.options.advertising.companions) {
                    var a, b = [];
                    for (a = 0; a < this.player_.options.advertising.companions.length; a++) {
                        var c = new n(this.player_.options.advertising.companions[a]);
                        c.canHandle() && b.push(c);
                    }
                    this.advertisement_.companions = b;
                }
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null, this.loadState_ = null,
                this.model = null;
            }, b;
        }(e);
        b.exports = o;
    }, {
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../macro": 63,
        "./companionItem": 11,
        "./model/advertisementItem": 19,
        "./model/advertisementLoadState": 21,
        "./model/advertisementModel": 22,
        "./model/converter/vmapConverter": 25,
        "./model/rolltype": 30,
        vastvmap: 125
    } ],
    8: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../event/advertisementEvent"), g = a("./../event/mediaEvent"), h = a("./../media/wvTicketUrlState"), i = (a("./../log/logger"),
        a("./../state")), j = a("./model/advertisementId"), k = a("./model/advertisementItemState"), l = a("./model/creativeType"), m = a("./model/creativeTypeString"), n = a("./model/rollType"), o = function(a) {
            function b(b) {
                a.call(this, b.player_), this.completed = !1, this.countReady = 0, this.advertisement_ = b;
            }
            return d(b, a), b.prototype.callback = function(b, c) {
                switch (b) {
                  case g.COMPLETE:
                    this.completed = !0, this.countReady += 2;
                    break;

                  case g.PLAYING:
                    this.advertisement_.model.findItemBy([ k.unload, k.loading, k.loaded ], [ n.POST ]) ? this.player_.media.setLoop(!1) : this.player_.media.setLoop(this.player_.options.loop),
                    this.disable(this.hasDisplayableAd()), this.completed = !1;
                    break;

                  case f.AD_START:
                    c[f.DATA_TYPE] === m[l.linear] && this.disable(!0);
                    break;

                  case f.ITEM_STATE_CHANGE:
                  case f.PREROLL_TRAIT_CLOSE:
                    this.completed ? this.advertisement_.model.findItemBy([ k.unload, k.loading, k.loaded ], [ n.POST ]) || (this.disable(!1),
                    this.player_.options.loop && this.player_.media.canPlay() && this.player_.play()) : this.disable(this.hasDisplayableAd());
                    break;

                  case g.SEEKED:
                    this.hasDisplayableAd() && this.disable(!0);
                    break;

                  case g.READY:
                    this.countReady++, 1 == this.countReady && this.player_.options.autoStart && !this.advertisement_.model.findItemBy([ k.unload, k.loading, k.loaded ], [ n.PRE ]) && this.disable(!1);
                    break;

                  case f.AD_CLICK:
                    var d = j.createBy(c[f.DATA_AD_ID]);
                    if (!d) return;
                    if (d.creative_type === l.nonlinear || d.creative_type === l.companion) {
                        var e = this.player_.getState();
                        (e === i.PLAYING || e === i.BUFFERING) && this.player_.pause(), this.player_.pauseAd();
                    }
                    break;

                  case g.WV_TICKETURL_STATE_CHANGE:
                    h.readyed === c.state && this.countReady--;
                }
                a.prototype.callback.call(this, b, c);
            }, b.prototype.disable = function(a) {
                var b = this.player_.getState();
                a ? ((b === i.PLAYING || b === i.BUFFERING) && this.player_.pause(), this.player_.media.setMediaPlayerContainerVisible(!1)) : (this.player_.media.canPlay() && (b === i.READY && 1 == this.countReady && this.player_.options.autoStart || !this.completed && !this.advertisement_.isPlayingLinearAd() && b === i.PAUSED) && this.player_.play(),
                this.player_.media.setMediaPlayerContainerVisible(!0));
            }, b.prototype.hasDisplayableAd = function() {
                return !!this.advertisement_.model.findItemBy([ k.unload, k.loading, k.loaded ], [ n.PRE, n.MID ], 0, this.player_.getCurrentTime());
            }, b.prototype.dispose = function() {
                this.player_.media.setMediaPlayerContainerVisible(!0), a.prototype.dispose.call(this),
                this.advertisement_ = null, this.completed = null;
            }, b;
        }(e);
        b.exports = o;
    }, {
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./../media/wvTicketUrlState": 91,
        "./../state": 100,
        "./model/advertisementId": 18,
        "./model/advertisementItemState": 20,
        "./model/creativeType": 26,
        "./model/creativeTypeString": 27,
        "./model/rollType": 28
    } ],
    9: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../event/advertisementEvent"), g = a("./../event/mediaEvent"), h = a("./model/advertisementItemState"), i = (a("./../log/logger"),
        a("./../state")), j = a("./../media/playlist/playlistItemChangeState"), k = function(a) {
            function b(b) {
                a.call(this, b.player_), this.advertisement_ = b;
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return a.advertising.adQueue === !0;
            }, b.prototype.callback = function(b, c) {
                switch (b) {
                  case f.ITEM_TIMING_CHANGE:
                  case f.ITEM_STATE_CHANGE:
                  case f.PROCESSED_MIDROLL_RESSET:
                  case g.CHANGE_PLAYBACK_RATE:
                  case g.SECOND_DURATION_CHANGE:
                    0 !== this.player_.getDuration() && this.setQueue_();
                    break;

                  case g.PLAYLIST_ITEM_CHANGE_STATE_CHANGE:
                    c.state == j.complete && 0 !== this.player_.getDuration() && this.setQueue_();
                }
                a.prototype.callback.call(this, b, c);
            }, b.prototype.setQueue_ = function() {
                if (this.player_.getState() != i.CHANGING_MEDIA) {
                    for (var a = [], b = 0; b < this.advertisement_.model.items.length; b++) this.advertisement_.model.items[b].state !== h.consumed && this.advertisement_.model.items[b].state !== h.error && (this.advertisement_.model.items[b].represent_timing === Number.MAX_VALUE ? a.push(-1) : a.push(this.advertisement_.model.items[b].represent_timing / this.player_.getPlaybackRate()));
                    this.player_.media.deleteScrubQueueAll(), this.player_.media.setScrubQueue(a);
                }
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null;
            }, b;
        }(e);
        b.exports = k;
    }, {
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./../media/playlist/playlistItemChangeState": 85,
        "./../state": 100,
        "./model/advertisementItemState": 20
    } ],
    10: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../event/advertisementEvent"), g = a("./model/advertisementId"), h = a("./model/creativeType"), i = a("./model/creativeTypeString"), j = a("./../event/mediaEvent"), k = a("./model/advertisementItemState"), l = a("./model/advertisementAssetState"), m = a("./model/rollType"), n = (a("./../log/logger"),
        function(a) {
            function b(b) {
                a.call(this, b.player_), this.isLinearPaused_ = !1, this.advertisement_ = b;
            }
            return d(b, a), b.prototype.callback = function(b, c) {
                switch (b) {
                  case f.AD_START:
                    c[f.DATA_TYPE] === i[h.linear] ? (this.trackEvent(c[f.DATA_AD_ID], "creativeView"),
                    this.trackProgress(c.adId, 0), this.isLinearPaused_ = !1) : c[f.DATA_TYPE] === i[h.nonlinear] && (this.trackEvent(c[f.DATA_AD_ID], "creativeView"),
                    this.trackEvent(c[f.DATA_AD_ID], "start"));
                    break;

                  case f.AD_PLAY:
                    this.isLinearPaused_ && (this.isLinearPaused_ = !1, this.trackEvent(c[f.DATA_AD_ID], "resume"));
                    break;

                  case f.AD_PAUSE:
                    this.isLinearPaused_ = !0, this.trackEvent(c[f.DATA_AD_ID], "pause");
                    break;

                  case f.AD_COMPELETE:
                    this.trackEvent(c[f.DATA_AD_ID], "complete");
                    break;

                  case f.AD_CLOSE:
                    this.trackEvent(c[f.DATA_AD_ID], "close");
                    break;

                  case f.AD_SKIP:
                    this.trackEvent(c[f.DATA_AD_ID], "skip");
                    break;

                  case f.AD_CLICK:
                    this.trackEvent(c[f.DATA_AD_ID], "click");
                    break;

                  case f.AD_CURRENT_SECODE_TIME_CHANGE:
                    this.trackProgress(c[f.DATA_AD_ID], c[f.DATA_CURRENT_SECOND_TIME]);
                    break;

                  case j.VOLUME_CHANGE:
                    var d = this.findPlayingAd();
                    d && c.hasOwnProperty("muted") && (c.muted ? this.trackEvent(d, "mute") : this.trackEvent(d, "unmute"));
                    break;

                  case j.FULL_SCREEN_CHANGE:
                    var d = this.findPlayingAd();
                    d && c.hasOwnProperty("fullScreen") && (c.fullScreen ? (this.trackEvent(d, "fullscreen"),
                    this.trackEvent(d, "expand")) : (this.trackEvent(d, "exitFullscreen"), this.trackEvent(d, "collapse")));
                }
                a.prototype.callback.call(this, b, c);
            }, b.prototype.trackProgress = function(a, b) {
                var c = g.createBy(a);
                if (c) {
                    var d = this.advertisement_.model.findAssetByAdId(c), e = d.progress_track[i[c.creative_type]];
                    if (e.length > 0 && e[0].hasOwnProperty("insert_offset") && e[0].insert_offset <= b) {
                        var f = d.getSelectCreativeBy(c.creative_type);
                        try {
                            f.track(e[0].event, this.player_.media.getCurrentSecondTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                        } catch (h) {}
                        d.progress_track[i[c.creative_type]].splice(0, 1);
                    }
                }
            }, b.prototype.trackEvent = function(a, b) {
                var c = g.createBy(a);
                if (c) {
                    var d = this.advertisement_.model.findAssetByAdId(c), e = d.getSelectCreativeBy(c.creative_type);
                    if (e) try {
                        e.track(b, this.player_.media.getCurrentSecondTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                    } catch (f) {}
                }
            }, b.prototype.findPlayingAd = function() {
                var a = this.advertisement_.model.findAssetBy([ k.loaded ], [ h.linear, h.nonlinear ], [ l.playing ], [ m.PRE, m.MID, m.POST ]);
                if (a) {
                    var b = a.findCreativeTypeBy(l.playing);
                    if (null != b) return a.getAdId(b);
                }
                return null;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null, this.isLinearPaused_ = null;
            }, b;
        }(e));
        b.exports = n;
    }, {
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./model/advertisementAssetState": 17,
        "./model/advertisementId": 18,
        "./model/advertisementItemState": 20,
        "./model/creativeType": 26,
        "./model/creativeTypeString": 27,
        "./model/rollType": 28
    } ],
    11: [ function(a, b, c) {
        var d = a("../validate/validateCompanion"), e = a("./../utils/typeof"), f = function() {
            function a(a) {
                if (this.divId = void 0, this.height = void 0, this.width = void 0, this.recomendResourceType = void 0,
                this.sizePermissibleRange = void 0, this.resourceTypeList = void 0, this.playingAdId = null,
                a = d.validate(a)) {
                    for (var b in a) try {
                        this[b] = a[b];
                    } catch (c) {}
                    this.sizePermissibleRange = this.sizePermissibleRange || 0, this.resourceTypeList = this.getResourceTypeList();
                }
            }
            return a.prototype.canHandle = function() {
                return this.divId && this.width && this.height ? "complete" === document.readyState ? document.getElementById(this.divId) ? !0 : !1 : !0 : !1;
            }, a.prototype.toObject = function() {
                for (var a = {}, b = [ "divId", "height", "width", "recomendResourceType", "sizePermissibleRange" ], c = 0; c < b.length; c++) void 0 !== this[b[c]] && (a[b[c]] = this[b[c]]);
                return a;
            }, a.prototype.canHandleSize = function(a, b) {
                return this.isInRange_(a, this.width) && this.isInRange_(b, this.height);
            }, a.prototype.isInRange_ = function(a, b) {
                var c = b - this.sizePermissibleRange, d = b + this.sizePermissibleRange;
                return a >= c && d >= a ? !0 : !1;
            }, a.prototype.getResourceTypeList = function() {
                var a = [ "images", "iframe", "html" ];
                if (this.recomendResourceType) {
                    var b = a.indexOf(this.recomendResourceType);
                    -1 !== b && a.unshift(a.splice(b, 1)[0]);
                }
                return a;
            }, a.prototype.getResource = function(a) {
                for (var b = 0; b < this.resourceTypeList.length; b++) if (a[this.resourceTypeList[b]]) {
                    if (e.isObject(a[this.resourceTypeList[b]])) {
                        var c = Object.keys(a[this.resourceTypeList[b]])[0];
                        return a[this.resourceTypeList[b]][c];
                    }
                    return a[this.resourceTypeList[b]];
                }
                return null;
            }, a.prototype.isSameAdPlaying = function(a) {
                return null !== this.playingAdId && a.item_index === this.playingAdId.item_index && a.asset_index === this.playingAdId.asset_index;
            }, a.prototype.dispose = function() {
                this.divId = null, this.height = null, this.width = null, this.recomendResourceType = null,
                this.sizePermissibleRange = null, this.resourceTypeList = null, this.playingAdId = null;
            }, a;
        }();
        b.exports = f;
    }, {
        "../validate/validateCompanion": 118,
        "./../utils/typeof": 111
    } ],
    12: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = a("./../../event/advertisementEvent"), g = a("./../model/creativeType"), h = a("./linearDisplay"), i = a("./companionDisplay"), j = a("./nonLinearDisplay"), k = a("./../model/advertisementAssetState"), l = a("./../model/creativeTypeString"), m = (a("./../../log/logger"),
        function(a) {
            function b(b) {
                a.call(this, b.player_), this.advertisement_ = b;
                var c = "ulizaplayer('" + this.player_.id + "').media.onJSBridgeAd";
                this.linear_ = new h(b, c), this.nonLinear_ = new j(b, c), this.companion_ = new i(b, c);
            }
            return d(b, a), b.prototype.display = function(a, b) {
                if (!this.player_.media.jsBridgeAvailable()) return !1;
                if (a.state[l[b]] !== k.ready) return !1;
                switch (a.state[l[b]] = k.setting, this.player_.media.closeAllAd(), b) {
                  case g.linear:
                    if (!this.linear_.display(a)) return a.state.linear = k.ready, !1;
                    a.state.linear = k.playing;
                    break;

                  case g.nonlinear:
                    if (!this.nonLinear_.display(a)) return a.state.nonlinear = k.ready, !1;
                    a.state.nonlinear = k.playing;
                }
                a.state.companion === k.ready && (a.state.companion = k.playing, this.companion_.display(a));
                var c = {};
                return c[f.DATA_AD_ID] = a.getAdId(b), this.trigger(f.PROCESSED_AD_DISPLAY, c, !1),
                !0;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null, this.linear_ = null,
                this.nonLinear_ = null, this.companion_ = null;
            }, b;
        }(e));
        b.exports = m;
    }, {
        "./../../component/component": 51,
        "./../../event/advertisementEvent": 57,
        "./../../log/logger": 62,
        "./../model/advertisementAssetState": 17,
        "./../model/creativeType": 26,
        "./../model/creativeTypeString": 27,
        "./companionDisplay": 13,
        "./linearDisplay": 14,
        "./nonLinearDisplay": 15
    } ],
    13: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = a("./../../utils/typeof"), g = a("./../model/creativeType"), h = a("./../../event/advertisementEvent"), i = a("./../model/creativeTypeString"), j = a("swfobject"), k = a("./../../utils/xhr"), l = (a("./../../log/logger"),
        function(a) {
            function b(b, c) {
                a.call(this, b.player_), this.advertisement_ = b, this.callback_ = c;
            }
            return d(b, a), b.prototype.display = function(a) {
                for (var b = [], c = 0; c < this.advertisement_.companions.length; c++) {
                    var d = this.advertisement_.companions[c];
                    if (!d.isSameAdPlaying(a.advertisement_id) && document.getElementById(d.divId)) for (var e = 0; e < a.companions.length; e++) {
                        var l = a.companions[e];
                        if (d.canHandleSize(+l.attribute("width"), +l.attribute("height"))) {
                            for (var m = l.getAllResources(), n = null, o = null, p = null, c = 0; c < d.resourceTypeList.length; c++) {
                                if ("images" === d.resourceTypeList[c]) {
                                    if (0 === Object.keys(m[d.resourceTypeList[c]]).length) continue;
                                } else if (!m[d.resourceTypeList[c]]) continue;
                                o = d.resourceTypeList[c], f.isObject(m[d.resourceTypeList[c]]) ? (p = Object.keys(m[d.resourceTypeList[c]])[0],
                                n = m[d.resourceTypeList[c]][p]) : n = m[d.resourceTypeList[c]];
                                break;
                            }
                            if (n && o) {
                                var q = document.getElementById(d.divId);
                                switch (q.innerHTML = "", o) {
                                  default:
                                  case "images":
                                    switch (p) {
                                      default:
                                      case "image/gif":
                                      case "image/jpeg":
                                      case "image/png":
                                        var r = document.createElement("a");
                                        r.setAttribute("href", "javascript:void(0)"), l.clickThrough && (r.setAttribute("target", "_blank"),
                                        r.setAttribute("href", l.clickThrough), r.onclick = function() {
                                            var b = a.getAdId(g.companion), c = {};
                                            c[h.DATA_AD_ID] = b, c[h.DATA_TYPE] = i[g.linear], this.trigger(h.AD_CLICK, c);
                                        }.bind(this));
                                        var s = document.createElement("img");
                                        "string" == typeof l.altText && "" !== l.altText && s.setAttribute("alt", l.altText),
                                        s.setAttribute("src", n), r.appendChild(s), q.appendChild(r), l.track("creativeView", this.player_.getCurrentTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                                        break;

                                      case "application/x-javascript":
                                        var t = document.createElement("script");
                                        t.setAttribute("src", n), t.setAttribute("type", "text/javascript"), q.appendChild(t),
                                        l.track("creativeView", this.player_.getCurrentTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                                        break;

                                      case "application/x-shockwave-flash":
                                        var u = d.divId + "_inner", v = document.createElement("div");
                                        v.setAttribute("id", u), q.appendChild(v), j.embedSWF(n, u, l.attribute("width"), l.attribute("height"), "11.0.0", "", {}, {
                                            allowScriptAccess: "always",
                                            allowFullScreen: "true",
                                            wmode: "opaque"
                                        }, {
                                            name: d.divId
                                        }), l.track("creativeView", this.player_.getCurrentTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                                    }
                                    break;

                                  case "iframe":
                                    var w = document.createElement("iframe");
                                    w.setAttribute("src", n), q.appendChild(w), l.track("creativeView", this.player_.getCurrentTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro());
                                    break;

                                  case "html":
                                    k({
                                        uri: decodeURIComponent(n),
                                        method: "GET",
                                        responseType: "text"
                                    }, function(a, b, c) {
                                        !a && c && (q.innerHTML = c, l.track("creativeView", this.player_.getCurrentTime(), this.player_.media.getPlayingContentURL(), this.player_.getMacro()));
                                    }.bind(this));
                                }
                                d.playingAdId = a.advertisement_id, b.push(d), this.advertisement_.companions.splice(c, 1),
                                c--;
                            }
                        }
                    }
                }
                this.advertisement_.companions = this.advertisement_.companions.concat(b);
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.callback_ = null, this.advertisement_ = null;
            }, b;
        }(e));
        b.exports = l;
    }, {
        "./../../component/component": 51,
        "./../../event/advertisementEvent": 57,
        "./../../log/logger": 62,
        "./../../utils/typeof": 111,
        "./../../utils/xhr": 113,
        "./../model/creativeType": 26,
        "./../model/creativeTypeString": 27,
        swfobject: 1
    } ],
    14: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = (a("./../../log/logger"), a("./../../component/componentType")), g = a("./../model/creativeType"), h = a("./../model/creativeTypeString"), i = a("./../../language/language"), j = a("./../model/rollTypeString"), k = function(a) {
            function b(b, c) {
                a.call(this, b.player_), this.advertisement_ = b, this.callback_ = c;
            }
            return d(b, a), b.prototype.display = function(a) {
                var b, c = {
                    id: a.getAdId(g.linear),
                    url: a.selected_linear_resource,
                    hideScrubBarWhilePlayingAd: !0,
                    pauseMainMediaWhilePlayingAd: !0,
                    resumePlaybackAfterAd: !1,
                    pauseAdMediaOnClick: !0,
                    closable: !1,
                    adType: h[g.linear],
                    onJSBridgeAd: this.callback_,
                    rollType: j[this.advertisement_.model.findItemByAdId(a.advertisement_id).roll_type],
                    enableAkamaiMediaAnalytics: this.player_.hasChild(f.AKAMAI_MEDIA_ANALYTICS)
                };
                return a.hasSkipOffset() && (c.skip = !0, c.skipTime = a.getSkipOffset()), a.linear.clickThrough && (c.clickUrl = a.linear.clickThrough),
                b = this.player_.media.displayAd(c), b && this.player_.media.setPlayerTitle({
                    title: "[" + i.getLanguage(this.player_.options.language, "Ad") + "] " + a.getAdTitle()
                }), b;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement_ = null, this.callback_ = null;
            }, b;
        }(e);
        b.exports = k;
    }, {
        "./../../component/component": 51,
        "./../../component/componentType": 54,
        "./../../language/language": 61,
        "./../../log/logger": 62,
        "./../model/creativeType": 26,
        "./../model/creativeTypeString": 27,
        "./../model/rollTypeString": 29
    } ],
    15: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = (a("./../../log/logger"), a("./../model/creativeType")), g = a("./../../event/advertisementEvent"), h = a("./../model/creativeTypeString"), i = a("./../../utils/obj"), j = a("./../model/rollTypeString"), k = function(a) {
            function b(b, c) {
                a.call(this, b.player_), this.advertisement_ = b, this.callback_ = c;
            }
            return d(b, a), b.prototype.display = function(a) {
                for (var b, c = 0; c < a.nonlinears.length; c++) {
                    var d = a.nonlinears[c], e = d.getAllResources().images;
                    if (e) {
                        var k;
                        for (var l in e) {
                            k = l;
                            break;
                        }
                        var m = e[k];
                        if ("string" == typeof m) {
                            var n = void 0 === this.player_.options.advertising.nonlinear.width ? this.player_.media.getPlayerWidth() : this.player_.options.advertising.nonlinear.width, o = void 0 === this.player_.options.advertising.nonlinear.height ? this.player_.media.getPlayerHeight() / 3 : this.player_.options.advertising.nonlinear.height;
                            if (!(+d.attribute("width") >= n || +d.attribute("height") >= o)) {
                                var p = {
                                    id: a.getAdId(f.nonlinear),
                                    url: m,
                                    layoutInfo: {
                                        width: d.attribute("width"),
                                        height: d.attribute("height"),
                                        horizontalAlign: "center",
                                        bottom: 50
                                    },
                                    adType: h[f.nonlinear],
                                    pauseAdMediaOnClick: !1,
                                    pauseMainMediaWhilePlayingAd: !1,
                                    closable: !0,
                                    rollType: j[this.advertisement_.model.findItemByAdId(a.advertisement_id).roll_type],
                                    onJSBridgeAd: this.callback_
                                }, q = {
                                    left: this.player_.options.advertising.nonlinear.left,
                                    right: this.player_.options.advertising.nonlinear.right,
                                    top: this.player_.options.advertising.nonlinear.top,
                                    bottom: this.player_.options.advertising.nonlinear.bottom,
                                    horizontalAlign: this.player_.options.advertising.nonlinear.horizontalAlign,
                                    x: this.player_.options.advertising.nonlinear.x,
                                    y: this.player_.options.advertising.nonlinear.y
                                }, r = {};
                                for (var s in q) void 0 !== q[s] && (r[s] = q[s]);
                                if (p = i.merge(p, {
                                    layoutInfo: r
                                }), d.clickThrough && (p.clickUrl = d.clickThrough), void 0 !== this.player_.options.advertising.nonlinear.closable && (p.closable = this.player_.options.advertising.nonlinear.closable),
                                b = this.player_.media.displayAd(p)) return a.select_nonLinear_index = c, this.player_.options.advertising.nonlinear.displayDuration && window.setTimeout(function() {
                                    var b = a.getAdId(f.nonlinear);
                                    this.player_.media.closeAd(b);
                                    var c = {};
                                    c[g.DATA_AD_ID] = b, c[g.DATA_TYPE] = h[f.linear], this.trigger(g.AD_COMPELETE, c);
                                }.bind(this), 1e3 * this.player_.options.advertising.nonlinear.displayDuration),
                                !0;
                            }
                        }
                    }
                }
                return !1;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.callback_ = null;
            }, b;
        }(e);
        b.exports = k;
    }, {
        "./../../component/component": 51,
        "./../../event/advertisementEvent": 57,
        "./../../log/logger": 62,
        "./../../utils/obj": 109,
        "./../model/creativeType": 26,
        "./../model/creativeTypeString": 27,
        "./../model/rollTypeString": 29
    } ],
    16: [ function(a, b, c) {
        var d = a("./converter/vastConverter"), e = a("./creativeType"), f = function() {
            function a(a, b) {
                this.advertisement_id = a, this.asset_id = this.advertisement_id.asset_index, this.vastAd = b,
                this.companions = this.vastAd.companions, this.linear = this.vastAd.linear, this.nonlinears = this.vastAd.nonlinears,
                this.properties = this.vastAd.properties, this.sequence = this.vastAd.sequence,
                this.progress_track = {
                    linear: [],
                    nonlinear: [],
                    companion: []
                };
            }
            return a.prototype.hasSkipOffset = function() {
                return this.linear && this.linear.skipoffset ? !0 : !1;
            }, a.prototype.getAdTitle = function() {
                return this.properties && this.properties.hasOwnProperty("AdTitle") && this.properties.AdTitle ? this.properties.AdTitle : "";
            }, a.prototype.getSkipOffset = function() {
                return this.hasSkipOffset() ? d.toNumTime(this.linear.skipoffset, this.linear.duration) : 0;
            }, a.prototype.getAdId = function(a) {
                return this.advertisement_id.creative_type = a, this.advertisement_id.toString();
            }, a.prototype.findCreativeTypeBy = function(a) {
                return this.state.linear === a ? e.linear : this.state.nonlinear === a ? e.nonlinear : this.state.companion === a ? e.companion : null;
            }, a.prototype.getSelectCreativeBy = function(a) {
                switch (a) {
                  case e.linear:
                    return this.linear;

                  case e.nonlinear:
                    return this.nonlinears[this.select_nonLinear_index];

                  case e.companion:
                    return this.nonlinears[this.select_companion_index];
                }
            }, a.prototype.dispose = function() {
                this.advertisement_id = null, this.asset_id = null, this.vastAd = null, this.companions = null,
                this.linear = null, this.nonlinears = null, this.properties = null, this.state = null,
                this.sequence = null, this.selected_linear_resource = null, this.select_nonLinear_index = null,
                this.select_companion_index = null;
            }, a;
        }();
        b.exports = f;
    }, {
        "./converter/vastConverter": 24,
        "./creativeType": 26
    } ],
    17: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.ready = 0] = "ready", a[a.setting = 1] = "setting", a[a.playing = 2] = "playing",
            a[a.closed = 3] = "closed";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    18: [ function(a, b, c) {
        var d = a("./creativeTypeString"), e = function() {
            function a(a, b, c) {
                void 0 === c && (c = null), this.asset_index = b, this.item_index = a, this.creative_type = c;
            }
            return a.prototype.toString = function() {
                return null === this.creative_type ? this.item_index + a.delimiter_ + this.asset_index : this.item_index + a.delimiter_ + this.asset_index + a.delimiter_ + d[this.creative_type];
            }, a.createBy = function(b) {
                var c = b.split(a.delimiter_);
                return 3 === c.length ? new a(+c[0], +c[1], +d.indexOf(c[2])) : null;
            }, a.prototype.dispose = function() {
                this.asset_index = null, this.item_index = null, this.creative_type = null;
            }, a.delimiter_ = "-", a;
        }();
        b.exports = e;
    }, {
        "./creativeTypeString": 27
    } ],
    19: [ function(a, b, c) {
        var d = a("./rollType"), e = (a("./../../log/logger"), a("./advertisementItemState")), f = a("./advertisementAssetState"), g = a("./creativeTypeString"), h = a("./advertisementId"), i = a("./../../utils/typeof"), j = a("./rollTypeString"), k = function() {
            function a(a, b, c) {
                this.state = e.unload, this.assets = [], this.index = a, this.represent_timing_origin = b,
                this.adtag_url = c;
            }
            return a.prototype.reset = function() {
                this.state = e.unload, this.assets = [];
            }, a.prototype.consume = function() {
                this.state = e.consumed;
                for (var a = 0; a < this.assets.length; a++) this.assets[a].state.linear = f.closed,
                this.assets[a].state.nonlinear = f.closed, this.assets[a].state.companion = f.closed;
            }, a.prototype.findAssetByAdId = function(a) {
                return i.isString(a) && (a = h.createBy(a)), i.isNumber(a.asset_index) ? this.findAssetByAssetId(a.asset_index) : null;
            }, a.prototype.findAssetByAssetId = function(a) {
                for (var b = 0; b < this.assets.length; b++) if (a === this.assets[b].asset_id) return this.assets[b];
                return null;
            }, a.prototype.findAssetByState = function(a, b) {
                for (var c = 0; c < this.assets.length; c++) for (var d = 0; d < a.length; d++) {
                    var e = g[a[d]];
                    if (-1 !== b.indexOf(this.assets[c].state[e])) return this.assets[c];
                }
                return null;
            }, a.prototype.toObject = function() {
                return {
                    rolltype: j[this.roll_type],
                    vastUrl: this.adtag_url,
                    completed: this.state === e.consumed,
                    midrollTiming: this.roll_type === d.MID ? this.represent_timing : void 0
                };
            }, a.prototype.dispose = function() {
                this.index = null, this.represent_timing_origin = null, this.represent_timing = null,
                this.adtag_url = null, this.roll_type = null, this.state = null, this.assets = null;
            }, a;
        }();
        b.exports = k;
    }, {
        "./../../log/logger": 62,
        "./../../utils/typeof": 111,
        "./advertisementAssetState": 17,
        "./advertisementId": 18,
        "./advertisementItemState": 20,
        "./creativeTypeString": 27,
        "./rollType": 28,
        "./rollTypeString": 29
    } ],
    20: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.unload = 0] = "unload", a[a.loading = 1] = "loading", a[a.loaded = 2] = "loaded",
            a[a.error = 3] = "error", a[a.consumed = 4] = "consumed";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    21: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.UNINITIALIZED = 0] = "UNINITIALIZED", a[a.LOADING = 1] = "LOADING", a[a.READY = 2] = "READY",
            a[a.LOAD_ERROR = 3] = "LOAD_ERROR";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    22: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = (a("./../../log/logger"), a("./rollType")), g = a("./creativeTypeString"), h = a("./advertisementId"), i = a("./../../utils/typeof"), j = a("./../../utils/arr"), k = function(a) {
            function b(b) {
                a.call(this, b.player_), this.items = [];
            }
            return d(b, a), b.prototype.sortByOffset = function() {
                this.items.sort(function(a, b) {
                    var c = a.represent_timing - b.represent_timing;
                    return 0 == c ? a.index - b.index : c;
                });
            }, b.prototype.deleteRoll = function(a) {
                this.items = j.remove(this.items, function(b) {
                    return b.roll_type !== a;
                });
            }, b.prototype.hasRoll = function(a) {
                for (var b = 0; b < this.items.length; b++) if (this.items[b].roll_type === a) return !0;
                return !1;
            }, b.prototype.findItemsBy = function(a, b, c, d) {
                return void 0 === b && (b = [ f.PRE, f.MID, f.POST ]), void 0 === c && (c = 0),
                void 0 === d && (d = Number.MAX_VALUE), this.findItemsBy_(a, b, c, d, !1);
            }, b.prototype.findLastItemsBy = function(a, b, c, d) {
                return void 0 === b && (b = [ f.PRE, f.MID, f.POST ]), void 0 === c && (c = 0),
                void 0 === d && (d = Number.MAX_VALUE), this.findItemsBy_(a, b, c, d, !0);
            }, b.prototype.findItemsBy_ = function(a, b, c, d, e) {
                for (var f = [], g = 0; g < this.items.length; g++) {
                    var h = e ? this.items[this.items.length - g - 1] : this.items[g];
                    h.represent_timing < c || h.represent_timing > d || -1 !== b.indexOf(h.roll_type) && -1 !== a.indexOf(h.state) && f.push(this.items[g]);
                }
                return f;
            }, b.prototype.findItemBy = function(a, b, c, d) {
                return void 0 === b && (b = [ f.PRE, f.MID, f.POST ]), void 0 === c && (c = 0),
                void 0 === d && (d = Number.MAX_VALUE), this.findItemBy_(a, b, c, d, !1);
            }, b.prototype.findLastItemBy = function(a, b, c, d) {
                return void 0 === b && (b = [ f.PRE, f.MID, f.POST ]), void 0 === c && (c = 0),
                void 0 === d && (d = Number.MAX_VALUE), this.findItemBy_(a, b, c, d, !0);
            }, b.prototype.findItemBy_ = function(a, b, c, d, e) {
                for (var f = 0; f < this.items.length; f++) {
                    var g = e ? this.items[this.items.length - f - 1] : this.items[f];
                    if (!(g.represent_timing < c || g.represent_timing > d) && -1 !== b.indexOf(g.roll_type) && -1 !== a.indexOf(g.state)) return this.items[f];
                }
                return null;
            }, b.prototype.findAssetBy = function(a, b, c, d, e, f) {
                return void 0 === e && (e = 0), void 0 === f && (f = Number.MAX_VALUE), this.findAssetBy_(a, b, c, d, e, f, !1);
            }, b.prototype.findLastAssetBy = function(a, b, c, d, e, f) {
                return void 0 === e && (e = 0), void 0 === f && (f = Number.MAX_VALUE), this.findAssetBy_(a, b, c, d, e, f, !0);
            }, b.prototype.findAssetBy_ = function(a, b, c, d, e, f, h) {
                for (var i = 0; i < this.items.length; i++) {
                    var j = h ? this.items[this.items.length - i - 1] : this.items[i];
                    if (!(j.represent_timing < e || j.represent_timing > f) && -1 !== a.indexOf(j.state) && -1 !== d.indexOf(j.roll_type)) for (var k = 0; k < j.assets.length; k++) for (var l = 0; l < b.length; l++) {
                        var m = g[b[l]];
                        if (-1 !== c.indexOf(j.assets[k].state[m])) return j.assets[k];
                    }
                }
                return null;
            }, b.prototype.findItemByIndex = function(a) {
                for (var b = 0; b < this.items.length; b++) if (a === this.items[b].index) return this.items[b];
                return null;
            }, b.prototype.findItemByAdId = function(a) {
                return i.isString(a) && (a = h.createBy(a)), i.isNumber(a.item_index) ? this.findItemByIndex(a.item_index) : null;
            }, b.prototype.findAssetByAdId = function(a) {
                if (i.isString(a) && (a = h.createBy(a)), i.isNumber(a.item_index) && i.isNumber(a.asset_index)) {
                    var b = this.findItemByIndex(a.item_index);
                    return b ? b.findAssetByAssetId(a.asset_index) : null;
                }
                return null;
            }, b.prototype.toObject = function() {
                for (var a = [], b = "VMAP" === this.player_.options.advertising.client ? this.player_.options.advertising.tag : void 0, c = 0; c < this.items.length; c++) {
                    var d = this.items[c].toObject();
                    d.vmapUrl = b, a.push(d);
                }
                return a;
            }, b.prototype.dispose = function() {
                if (this.items) for (var b = 0; b < this.items.length; b++) this.items[b].dispose();
                a.prototype.dispose.call(this);
            }, b;
        }(e);
        b.exports = k;
    }, {
        "./../../component/component": 51,
        "./../../log/logger": 62,
        "./../../utils/arr": 105,
        "./../../utils/typeof": 111,
        "./advertisementId": 18,
        "./creativeTypeString": 27,
        "./rollType": 28
    } ],
    23: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.appendRepresentTiming = function(a, b) {
                if ("start" === a.represent_timing_origin) a.represent_timing = 0; else if ("end" === a.represent_timing_origin) a.represent_timing = Number.MAX_VALUE; else {
                    var c = this.toNumTime(a.represent_timing_origin, b);
                    -1 != c && (a.represent_timing = c);
                }
                return a;
            }, a.toNumTime = function(a, b) {
                if ("start" == a) return 0;
                if ("end" == a) return b > 0 ? b : NaN;
                var c = a.split(":");
                if (3 === c.length) {
                    var d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10);
                    return 60 * d * 60 + 60 * e + f;
                }
                if (-1 !== a.lastIndexOf("%")) {
                    var g = a.replace("%", ""), h = parseInt(g, 10);
                    return 0 === h ? 0 : b > 0 ? b * (h / 100) : NaN;
                }
            }, a;
        }();
        b.exports = d;
    }, {} ],
    24: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../../utils/typeof"), f = a("./advertisementConverter"), g = a("./../creativeTypeString"), h = a("./../../../utils/arr"), i = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b.hasAdPods = function(a) {
                for (var b = 0; b < a.length; b++) if (e.isNumber(a[b].sequence)) return !0;
                return !1;
            }, b.deleteAdPods = function(a) {
                for (var b = [], c = 0; c < a.length; c++) e.isNumber(a[c].sequence) || b.push(a[c]);
                return b;
            }, b.deleteStandAloneAd = function(a) {
                for (var b = [], c = 0; c < a.length; c++) e.isNumber(a[c].sequence) && b.push(a[c]);
                return b;
            }, b.verifyLinear = function(a) {
                try {
                    if (a.linear && a.linear.mediaFiles.length > 0) for (var b = 0; b < a.linear.mediaFiles.length; b++) if ("progressive" === a.linear.mediaFiles[b].delivery && a.linear.mediaFiles[b].src) return !0;
                } catch (c) {
                    return !1;
                }
                return !1;
            }, b.verifyNonLinear = function(a) {
                try {
                    for (var b = 0; b < a.nonlinears.length; b++) if (a.nonlinears[b].resources.images && (a.nonlinears[b].resources.images.hasOwnProperty("image/gif") || a.nonlinears[b].resources.images.hasOwnProperty("image/jpeg") || a.nonlinears[b].resources.images.hasOwnProperty("image/png"))) return !0;
                } catch (c) {
                    return !1;
                }
                return !1;
            }, b.verifyCompanion = function(a) {
                try {
                    for (var b = 0; b < a.companions.length; b++) if (a.companions[b].resources.html || a.companions[b].resources.iframe || a.companions[b].resources.images && (a.companions[b].resources.images.hasOwnProperty("image/gif") || a.companions[b].resources.images.hasOwnProperty("image/jpeg") || a.companions[b].resources.images.hasOwnProperty("image/png") || a.companions[b].resources.images.hasOwnProperty("application/x-shockwave-flash") || a.companions[b].resources.images.hasOwnProperty("application/x-javascript"))) return !0;
                } catch (c) {
                    return !1;
                }
                return !1;
            }, b.choiceLinearResource = function(a) {
                var b = this.getDisplayableLinearResource_(a);
                if (0 === b.length) return null;
                if (1 === b.length) return b[0].src;
                var c, d = 0;
                for (c = 0; c < b.length; c++) {
                    var e = +b[c].bitrate;
                    e > d && (d = b[c].bitrate);
                }
                for (c = 0; c < b.length; c++) if (b[c].bitrate == d) return b[c].src;
                return b[0].src;
            }, b.getDisplayableLinearResource_ = function(a) {
                var b, c = a.linear.mediaFiles, d = [];
                for (b = 0; b < c.length; b++) ("video/mp4" === c[b].type || "video/flv" === c[b].type || "video/x-flv" === c[b].type) && "progressive" === c[b].delivery && d.push(c[b]);
                var e = 0;
                for (b = 0; b < d.length; b++) {
                    var f = +d[b].width;
                    f >= e && (e = d[b].width);
                }
                var g = [];
                for (b = 0; b < d.length; b++) d[b].width == e && g.push(d[b]);
                return g;
            }, b.normalizeProgressTrack = function(a, b, c) {
                void 0 === c && (c = NaN);
                var d = a.hasOwnProperty(g[b]) ? a[g[b]] : null;
                if (d) {
                    var f;
                    f = a.progress_track[g[b]].length > 0 ? a.progress_track[g[b]] : d.getTrackingPoints();
                    for (var i = 0; i < f.length; i++) {
                        var j = f[i].offset;
                        if (e.isNumber(j)) f[i].insert_offset = j; else if (d.hasOwnProperty("duration") && e.isNumber(d.duration)) {
                            var k = this.toNumTime(j, d.duration);
                            -1 !== k && (f[i].insert_offset = k);
                        }
                        if (!f[i].hasOwnProperty("insert_offset") && !e.isNaN(c)) {
                            var k = this.toNumTime(j, c);
                            -1 !== k && (f[i].insert_offset = k);
                        }
                    }
                    f = h.remove(f, function(a) {
                        return "complete" != a.event;
                    }), f.sort(function(a, b) {
                        return a.insert_offset - b.insert_offset;
                    }), f = h.unique(f, function(a) {
                        return a.event;
                    }), a.progress_track[g[b]] = f;
                }
            }, b;
        }(f);
        b.exports = i;
    }, {
        "./../../../utils/arr": 105,
        "./../../../utils/typeof": 111,
        "./../creativeTypeString": 27,
        "./advertisementConverter": 23
    } ],
    25: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../rollType"), f = a("./advertisementConverter"), g = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b.convert = function(a, b) {
                return a = this.appendRepresentTiming(a, b), a = this.rollType(a);
            }, b.rollType = function(a) {
                return 0 === a.represent_timing ? a.roll_type = e.PRE : a.represent_timing === Number.MAX_VALUE ? a.roll_type = e.POST : a.roll_type = e.MID,
                a;
            }, b;
        }(f);
        b.exports = g;
    }, {
        "./../rollType": 28,
        "./advertisementConverter": 23
    } ],
    26: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.linear = 0] = "linear", a[a.nonlinear = 1] = "nonlinear", a[a.companion = 2] = "companion";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    27: [ function(a, b, c) {
        var d = a("./creativeType"), e = function() {
            function a() {}
            return a.indexOf = function(b) {
                for (var c in d) if (a[c] === b) return c;
                return null;
            }, a;
        }();
        e[d.linear] = "linear", e[d.nonlinear] = "nonlinear", e[d.companion] = "companion",
        b.exports = e;
    }, {
        "./creativeType": 26
    } ],
    28: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.PRE = 0] = "PRE", a[a.MID = 1] = "MID", a[a.POST = 2] = "POST";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    29: [ function(a, b, c) {
        var d = a("./rollType"), e = function() {
            function a() {}
            return a;
        }();
        e[d.PRE] = "pre", e[d.MID] = "mid", e[d.POST] = "post", b.exports = e;
    }, {
        "./rollType": 28
    } ],
    30: [ function(a, b, c) {
        arguments[4][28][0].apply(c, arguments);
    }, {
        dup: 28
    } ],
    31: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a;
        }();
        b.exports = d;
    }, {} ],
    32: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../model/rollType"), f = a("./rollTraitBase"), g = (a("./../../log/logger"),
        a("./../model/advertisementAssetState")), h = a("./../model/creativeType"), i = a("./../model/advertisementItemState"), j = a("./rollTraitState"), k = a("./../../event/mediaEvent"), l = a("./../../event/advertisementEvent"), m = function(a) {
            function b(b) {
                a.call(this, b), this.type = e.MID;
            }
            return d(b, a), b.canHandleModel = function(a) {
                return a.hasRoll(e.MID);
            }, b.prototype.callback2 = function(b, c) {
                switch (b) {
                  case k.ON_EMM_SUCCESS:
                  case k.START:
                  case k.PLAYING:
                  case k.READY:
                  case k.SEEKED:
                  case k.CURRENT_SECODE_TIME_CHANGE:
                  case l.PROCESSED_AD_COMPLETE:
                  case l.ON_VAST_LOADED:
                  case l.AD_START:
                    this.onAdPolling();
                }
                a.prototype.callback2.call(this, b, c);
            }, b.prototype.onAdPolling = function() {
                if (this.player_.media.jsBridgeAvailable() && this.player_.media.canAdvertisement() && !this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear, h.nonlinear ], [ g.setting ], [ e.PRE, e.MID, e.POST ]) && !this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear ], [ g.playing ], [ e.PRE, e.MID, e.POST ])) {
                    var a = this.completed ? this.player_.getDuration() : this.player_.getCurrentTime(), b = this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear, h.nonlinear ], [ g.ready ], [ e.MID ], 0, a);
                    return b ? void (b.state.linear == g.ready ? this.advertisement.displayAd(b, h.linear) : b.state.nonlinear == g.ready && this.advertisement.displayAd(b, h.nonlinear)) : void (this.advertisement.model.findItemBy([ i.unload, i.loading, i.loaded ], [ e.MID ]) || (this.state = j.closed));
                }
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
            }, b;
        }(f);
        b.exports = m;
    }, {
        "./../../event/advertisementEvent": 57,
        "./../../event/mediaEvent": 59,
        "./../../log/logger": 62,
        "./../model/advertisementAssetState": 17,
        "./../model/advertisementItemState": 20,
        "./../model/creativeType": 26,
        "./../model/rollType": 28,
        "./rollTraitBase": 35,
        "./rollTraitState": 37
    } ],
    33: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../model/rollType"), f = a("./rollTraitBase"), g = (a("./../../log/logger"),
        a("./../../event/mediaEvent")), h = a("./../../event/advertisementEvent"), i = a("./rollTraitState"), j = a("./../model/advertisementItemState"), k = a("./../model/advertisementAssetState"), l = a("./../model/creativeType"), m = function(a) {
            function b(b) {
                a.call(this, b), this.type = e.POST;
            }
            return d(b, a), b.canHandleModel = function(a) {
                return a.hasRoll(e.POST);
            }, b.prototype.callback2 = function(b, c) {
                switch (b) {
                  case g.COMPLETE:
                  case g.READY:
                  case g.START:
                  case g.SEEKED:
                  case h.AD_COMPELETE:
                  case h.PROCESSED_AD_COMPLETE:
                  case h.ON_VAST_LOADED:
                  case h.AD_START:
                    this.onAdPolling();
                }
                a.prototype.callback2.call(this, b, c);
            }, b.prototype.onAdPolling = function() {
                if (this.completed && this.player_.media.jsBridgeAvailable() && this.player_.media.canAdvertisement() && !this.advertisement.model.findAssetBy([ j.loaded ], [ l.linear, l.nonlinear ], [ k.setting ], [ e.PRE, e.MID, e.POST ]) && !this.advertisement.model.findAssetBy([ j.loaded ], [ l.linear ], [ k.playing ], [ e.PRE, e.MID, e.POST ])) {
                    var a = this.advertisement.model.findItemBy([ j.unload, j.loading, j.loaded ], [ e.MID ]);
                    if (!(a && a.represent_timing <= this.player_.getDuration())) {
                        var b = this.advertisement.model.findAssetBy([ j.loaded ], [ l.linear, l.nonlinear ], [ k.ready ], [ e.POST ]);
                        return b ? void (b.state.linear == k.ready ? this.advertisement.displayAd(b, l.linear) : b.state.nonlinear == k.ready && this.advertisement.displayAd(b, l.nonlinear)) : void (this.advertisement.model.findItemBy([ j.unload, j.loading, j.loaded ], [ e.POST ]) || (this.state = i.closed));
                    }
                }
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
            }, b;
        }(f);
        b.exports = m;
    }, {
        "./../../event/advertisementEvent": 57,
        "./../../event/mediaEvent": 59,
        "./../../log/logger": 62,
        "./../model/advertisementAssetState": 17,
        "./../model/advertisementItemState": 20,
        "./../model/creativeType": 26,
        "./../model/rollType": 28,
        "./rollTraitBase": 35,
        "./rollTraitState": 37
    } ],
    34: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../model/rollType"), f = a("./rollTraitBase"), g = (a("./../../log/logger"),
        a("./../model/advertisementAssetState")), h = a("./../model/creativeType"), i = a("./../model/advertisementItemState"), j = a("./rollTraitState"), k = a("./../../event/mediaEvent"), l = a("./../../event/advertisementEvent"), m = function(a) {
            function b(b) {
                a.call(this, b), this.type = e.PRE;
            }
            return d(b, a), b.canHandleModel = function(a) {
                return !0;
            }, b.prototype.callback2 = function(b, c) {
                if (this.state === j.closed) a.prototype.callback2.call(this, b, c); else switch (b) {
                  case k.ON_EMM_SUCCESS:
                  case k.START:
                  case k.BUFFERING:
                  case k.PLAYING:
                  case k.READY:
                  case k.CURRENT_SECODE_TIME_CHANGE:
                  case l.ON_VAST_LOADED:
                  case l.PROCESSED_AD_COMPLETE:
                  case l.AD_START:
                    this.onAdPolling(), this.state === j.closed && a.prototype.callback2.call(this, b, c);
                }
            }, b.prototype.onAdPolling = function() {
                if (this.player_.media.jsBridgeAvailable() && this.player_.media.canAdvertisement() && !this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear, h.nonlinear ], [ g.setting ], [ e.PRE, e.MID, e.POST ]) && !this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear ], [ g.playing ], [ e.PRE, e.MID, e.POST ])) {
                    var a = this.advertisement.model.findAssetBy([ i.loaded ], [ h.linear, h.nonlinear ], [ g.ready ], [ e.PRE ]);
                    return a ? void (a.state.linear == g.ready ? this.advertisement.displayAd(a, h.linear) : a.state.nonlinear == g.ready && this.advertisement.displayAd(a, h.nonlinear)) : void (this.advertisement.model.findItemBy([ i.unload, i.loading, i.loaded ], [ e.PRE ]) || (this.state = j.closed,
                    this.trigger(l.PREROLL_TRAIT_CLOSE, {}, !1)));
                }
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
            }, b;
        }(f);
        b.exports = m;
    }, {
        "./../../event/advertisementEvent": 57,
        "./../../event/mediaEvent": 59,
        "./../../log/logger": 62,
        "./../model/advertisementAssetState": 17,
        "./../model/advertisementItemState": 20,
        "./../model/creativeType": 26,
        "./../model/rollType": 28,
        "./rollTraitBase": 35,
        "./rollTraitState": 37
    } ],
    35: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/component"), f = a("./rollTraitState"), g = a("./../../event/mediaEvent"), h = function(a) {
            function b(b) {
                a.call(this, b.player_), this.completed = !1, this.advertisement = b, this.state = f.processing;
            }
            return d(b, a), b.prototype.callback = function(a, b) {
                switch (a) {
                  case g.COMPLETE:
                    this.completed = !0;
                    break;

                  case g.PLAYING:
                    this.completed = !1;
                }
                this.callback2(a, b);
            }, b.prototype.callback2 = function(a, b) {
                this.next && this.next.callback(a, b);
            }, b.prototype.setNext = function(a) {
                return this.next = a, this;
            }, b.prototype.onAdPolling = function() {}, b.prototype.getType = function(a) {
                return void 0 === a && (a = [ this.type ]), this.next ? this.next.getType(a) : a;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.advertisement = null, this.next = null, this.state = null,
                this.completed = null, this.type = null;
            }, b;
        }(e);
        b.exports = h;
    }, {
        "./../../component/component": 51,
        "./../../event/mediaEvent": 59,
        "./rollTraitState": 37
    } ],
    36: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../../component/componentFactory"), f = a("./../../component/componentType"), g = a("./../../component/componentFactoryItem"), h = a("./preRollTrait"), i = a("./midRollTrait"), j = a("./postRollTrait"), k = function(a) {
            function b(b) {
                a.call(this, b.player_), this.addItem(new g("preroll", h.canHandleModel, function() {
                    return new h(b);
                }, f.PREROLL_TRAIT)), this.addItem(new g("midroll", i.canHandleModel, function() {
                    return new i(b);
                }, f.MIDROLL_TRAIT)), this.addItem(new g("postroll", j.canHandleModel, function() {
                    return new j(b);
                }, f.POSTROLL_TRAIT));
            }
            return d(b, a), b.prototype.createRollTrait = function(a, b) {
                for (var c = null, d = b.length - 1; d >= 0; d--) {
                    var e = this.createComponent(a, b[d]);
                    e && (c = c ? e.setNext(c) : e);
                }
                return c;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
            }, b;
        }(e);
        b.exports = k;
    }, {
        "./../../component/componentFactory": 52,
        "./../../component/componentFactoryItem": 53,
        "./../../component/componentType": 54,
        "./midRollTrait": 32,
        "./postRollTrait": 33,
        "./preRollTrait": 34
    } ],
    37: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.processing = 0] = "processing", a[a.closed = 1] = "closed";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    38: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./ulizaplayer"), g = a("./utils/obj"), h = a("./event/mediaEvent"), i = function(a) {
            function b(b) {
                if (a.call(this, b), this.player_.options.akamaiMediaAnalytics.customData) {
                    var c = g.merge(this.getDefultCustomData_(), this.player_.options.akamaiMediaAnalytics.customData);
                    this.player_.options.akamaiMediaAnalytics.customData = c;
                }
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return !!a.akamaiMediaAnalytics.configPath;
            }, b.prototype.getDefultCustomData_ = function() {
                var a = {};
                switch (a.playerId = f.name + " " + f.version, a.device = navigator.userAgent, a.pageUrl = document.URL,
                a.pageReferrer = document.referrer, a.viewerId = "SUVT", this.player_.options.streamType) {
                  default:
                  case "vod":
                    a.deliveryType = "O";
                    break;

                  case "dvr":
                  case "live":
                    a.deliveryType = "L";
                }
                return a;
            }, b.prototype.callback = function(a, b) {
                switch (a) {
                  case h.CURRENT_SECODE_TIME_CHANGE:
                    this.player_.options.akamaiMediaAnalytics.customData.hasOwnProperty("contentLength") || this.player_.media.setAkamaiMediaAnalyticsCustomData({
                        contentLength: this.player_.media.getSecondDuration() + "000"
                    });
                    break;

                  case "onJavaScriptBridgeCreated":
                    this.player_.options.akamaiMediaAnalytics.customData.hasOwnProperty("contentType") || this.player_.media.setAkamaiMediaAnalyticsCustomData({
                        contentType: this.player_.getPlayingDistributionType()
                    });
                }
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./component/component": 51,
        "./event/mediaEvent": 59,
        "./ulizaplayer": 103,
        "./utils/obj": 109
    } ],
    39: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./beaconStateFactory"), g = a("./../event/mediaEvent"), h = function(a) {
            function b(b) {
                a.call(this, b), this.stateFactory_ = new f(this.player_), this.state_ = this.stateFactory_.get("idle", {});
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return !!a.beacon.beaconUrl;
            }, b.prototype.callback = function(a, b) {
                var c = this.stateFactory_.get(a, b);
                switch (c && (this.state_ = this.state_.attemptStateChange(c)), a) {
                  case g.CURRENT_SECODE_TIME_CHANGE:
                    this.state_.secondChange();
                }
            }, b;
        }(e);
        b.exports = h;
    }, {
        "./../component/component": 51,
        "./../event/mediaEvent": 59,
        "./beaconStateFactory": 42
    } ],
    40: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.error = "error", a.pause = "pause", a.play = "play", a.playing = "playing",
            a.idle = "idle", a.seek = "seek", a.seeking = "seeking", a.stop = "stop", a;
        }();
        b.exports = d;
    }, {} ],
    41: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.VIDEO_ID = "videoid", a.S_ID = "sid", a.DEVICE_ID = "deviceid", a.POS = "pos",
            a.EVENT = "event", a.PLAYBACK_RATE = "playbackrate", a.ERROR_CODE = "errorcode",
            a;
        }();
        b.exports = d;
    }, {} ],
    42: [ function(a, b, c) {
        var d = a("./state/beaconStateError"), e = a("./state/beaconStatePlay"), f = a("./state/beaconStateIdle"), g = a("./state/beaconStatePause"), h = a("./state/beaconStateStop"), i = a("./state/beaconStateSeek"), j = a("./state/beaconStateSeeking"), k = a("./../state"), l = function() {
            function a(a) {
                this.pool_ = {}, this.player_ = a;
            }
            return a.prototype.get = function(a, b) {
                var c;
                if (this.pool_.hasOwnProperty(a)) c = this.pool_[a]; else switch (a) {
                  case "idle":
                    c = new f(this.player_);
                    break;

                  case "playing":
                    c = new e(this.player_);
                    break;

                  case "paused":
                    c = new g(this.player_);
                    break;

                  case "complete":
                    this.player_.media.getStyle() !== k.CHANGING_MEDIA && (c = new h(this.player_));
                    break;

                  case "seeking":
                    c = new j(this.player_);
                    break;

                  case "seeked":
                    c = new i(this.player_);
                    break;

                  case "notFoundFlashPlayer":
                  case "widevineNotFoundPlugin":
                  case "widevineEmmFailed":
                  case "onMediaError":
                  case "widevineTicketFailed":
                  case "failedConfiguration":
                  case "JSONLoadingFailed":
                  case "forcePlaybackStop":
                    c = new d(this.player_);
                    break;

                  default:
                    return null;
                }
                return c.initialize(a, b), this.pool_[a] = c;
            }, a;
        }();
        b.exports = l;
    }, {
        "./../state": 100,
        "./state/beaconStateError": 44,
        "./state/beaconStateIdle": 45,
        "./state/beaconStatePause": 46,
        "./state/beaconStatePlay": 47,
        "./state/beaconStateSeek": 48,
        "./state/beaconStateSeeking": 49,
        "./state/beaconStateStop": 50
    } ],
    43: [ function(a, b, c) {
        var d = a("./../../utils/xhr"), e = a("Url"), f = a("./../beaconQuery"), g = a("./../../utils/typeof"), h = a("./../../utils/obj"), i = a("./../../validate/validate"), j = function() {
            function a(a) {
                this.player_ = a;
            }
            return a.prototype.initialize = function(a, b) {
                this.querys_ = {};
            }, a.prototype.attemptStateChange = function(a) {
                return -1 !== this.changeableState.indexOf(a.event) ? (a.track(), a) : this;
            }, a.prototype.secondChange = function() {}, a.prototype.track = function(a) {
                void 0 === a && (a = this.event);
                var b = new e(this.player_.options.beacon.beaconUrl), c = {};
                c[f.PLAYBACK_RATE] = this.player_.getPlaybackRate(), c[f.POS] = Math.floor(this.player_.getCurrentTime()),
                c[f.EVENT] = a, c[f.VIDEO_ID] = this.player_.options.beacon.videoId, c[f.S_ID] = this.player_.options.beacon.sid,
                c[f.DEVICE_ID] = this.player_.getUUID(function(a, b) {}), "live" === this.player_.options.streamType && (c[f.POS] = -1),
                "stop" === a && (c[f.POS] = -2);
                var g = h.merge(c, this.querys_);
                for (var j in g) void 0 !== g[j] && (b.query[j] = g[j]);
                var k = this.processSendBeacon(b);
                i._verifyUrl(k) && d(k, function(b, c, d) {
                    var e = {
                        responseBody: d,
                        responseCode: c.status,
                        error: b,
                        event: a
                    };
                    this.player_.trigger("sentBeacon", e), b && c.hasOwnProperty("status") && 401 === c.status && this.player_.trigger("forcePlaybackStop");
                }.bind(this));
            }, a.prototype.processSendBeacon = function(a) {
                var b = String(a);
                return a && g.isFunction(this.player_.options.beacon.processSendBeacon) ? this.player_.options.beacon.processSendBeacon(b, a.query) : b;
            }, a;
        }();
        b.exports = j;
    }, {
        "./../../utils/obj": 109,
        "./../../utils/typeof": 111,
        "./../../utils/xhr": 113,
        "./../../validate/validate": 116,
        "./../beaconQuery": 41,
        Url: 124
    } ],
    44: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = a("./../../error"), h = a("./../beaconQuery"), i = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.error, this.changeableState = [];
            }
            return d(b, a), b.prototype.initialize = function(b, c) {
                a.prototype.initialize.call(this, b, c), this.querys_[h.ERROR_CODE] = g.createErrorCode(b, c);
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./../../error": 56,
        "./../beaconEvent": 40,
        "./../beaconQuery": 41,
        "./beaconStateBase": 43
    } ],
    45: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.idle, this.changeableState = [ f.error, f.pause, f.play, f.playing, f.seek, f.seeking, f.stop ];
            }
            return d(b, a), b.prototype.track = function(a) {
                void 0 === a && (a = this.event);
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    46: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.pause, this.changeableState = [ f.error, f.play, f.seeking, f.stop ];
            }
            return d(b, a), b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    47: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.countSecondChange_ = 0, this.event = f.play, this.changeableState = [ f.error, f.pause, f.seeking, f.stop ];
            }
            return d(b, a), b.prototype.initialize = function(b, c) {
                this.countSecondChange_ = 0, a.prototype.initialize.call(this, b, c);
            }, b.prototype.secondChange = function() {
                if (this.player_.options.beacon.playingBeaconInterval) {
                    this.countSecondChange_++;
                    var a = this.player_.options.beacon.playingBeaconInterval * this.player_.getPlaybackRate();
                    this.countSecondChange_ >= a && (this.countSecondChange_ = 0, this.track(f.playing));
                }
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    48: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.seek, this.changeableState = [ f.error, f.pause, f.play, f.seeking, f.stop ];
            }
            return d(b, a), b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    49: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.seeking, this.changeableState = [ f.error, f.seek, f.stop ];
            }
            return d(b, a), b.prototype.track = function(a) {
                void 0 === a && (a = this.event);
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    50: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./beaconStateBase"), f = a("./../beaconEvent"), g = function(a) {
            function b(b) {
                a.call(this, b), this.event = f.stop, this.changeableState = [ f.error, f.play ];
            }
            return d(b, a), b;
        }(e);
        b.exports = g;
    }, {
        "./../beaconEvent": 40,
        "./beaconStateBase": 43
    } ],
    51: [ function(a, b, c) {
        var d = a("./../utils/obj"), e = function() {
            function a(a) {
                this.children_ = {}, this.disposeFuncPool = {}, a ? this.player_ = a : this.player_ = a = this;
            }
            return a.canHandleOptions = function(a) {
                return !0;
            }, a.prototype.added = function() {}, a.prototype.addChild = function(a, b) {
                if ("string" != typeof a || !b) throw new Error("Failed to called addChild of Component because invalid parameter.");
                var c;
                return this.children_.hasOwnProperty(a) ? c = this.children_[a] : (c = this.children_[a] = b,
                c.added()), c;
            }, a.prototype.removeChild = function(a, b) {
                if (void 0 === b && (b = !0), "string" != typeof a) throw new Error("Failed to called removeChild of Component because invalid parameter.");
                var c = null;
                return this.children_.hasOwnProperty(a) && (c = this.children_[a], b && c.dispose(),
                d.deleteProperty(this.children_, a)), c;
            }, a.prototype.getChild = function(a) {
                if ("string" != typeof a) throw new Error("Failed to called getChild of Component because invalid parameter.");
                var b = null;
                return this.children_.hasOwnProperty(a) && (b = this.children_[a]), b;
            }, a.prototype.getAllChild = function() {
                return this.children_;
            }, a.prototype.hasChild = function(a) {
                return this.children_.hasOwnProperty(a) ? !0 : !1;
            }, a.prototype.callback = function(a, b) {
                for (var c in this.children_) this.children_[c].callback(a, b);
            }, a.prototype.trigger = function(a, b, c) {
                void 0 === b && (b = {}), void 0 === c && (c = !0), this.player_.rootCallback(a, b, c);
            }, a.prototype.triggerToChild = function(a, b) {
                void 0 === b && (b = {}), this.callback(a, b);
            }, a.prototype.triggerToChildren = function(a, b) {
                void 0 === b && (b = {}), this.callback(a, b);
            }, a.prototype.dispose = function() {
                for (var a in this.disposeFuncPool) this.disposeFuncPool[a]();
                for (var b in this.children_) this.children_[b].dispose();
                this.disposeFuncPool = null, this.player_ = null, this.children_ = null;
            }, a.prototype.setTimeout = function(a, b) {
                a = a.bind(this);
                var c = window.setTimeout(a, b), d = function() {
                    this.clearTimeout(c);
                }.bind(this);
                return this.registerDisposeFunc("ulizaplayer-timeout-" + c, d), c;
            }, a.prototype.clearTimeout = function(a) {
                return window.clearTimeout(a), this.eraseDispose("ulizaplayer-timeout-" + a), a;
            }, a.prototype.setInterval = function(a, b) {
                a = a.bind(this);
                var c = window.setInterval(a, b), d = function() {
                    this.clearInterval(c);
                }.bind(this);
                return this.registerDisposeFunc("ulizaplayer-interval-" + c, d), c;
            }, a.prototype.clearInterval = function(a) {
                return window.clearInterval(a), this.eraseDispose("ulizaplayer-interval-" + a),
                a;
            }, a.prototype.registerDisposeFunc = function(a, b) {
                this.disposeFuncPool[a] = b;
            }, a.prototype.eraseDispose = function(a) {
                d.deleteProperty(this.disposeFuncPool, a);
            }, a;
        }();
        b.exports = e;
    }, {
        "./../utils/obj": 109
    } ],
    52: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component"), f = function(a) {
            function b(b) {
                a.call(this, b), this.items_ = [];
            }
            return d(b, a), b.prototype.addItem = function(a) {
                if (!a || !a.id) throw new Error("Failed to called canHandleResourceFunctionaddItem of ComponentFactory because invalid parameter.");
                var c = b.getIndexOfItem(a.id, this.items_);
                -1 != c ? this.items_[c] = a : this.items_.push(a);
            }, b.prototype.createComponent = function(a, c) {
                void 0 === c && (c = null);
                var d = null;
                if (0 == this.items_.length || !a) return d;
                var e = b.getItemsByOptions(a, c, this.items_);
                return null != e && (d = b.invokeCreationComponent(e)), d;
            }, b.prototype.removeItem = function(a) {
                if (!a) throw new Error("Failed to called removeItem of ComponentFactory because invalid parameter.");
                var c = b.getIndexOfItem(a, this.items_);
                -1 != c && this.items_.splice(c, 1);
            }, b.getIndexOfItem = function(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.id == a) return c;
                }
                return -1;
            }, b.invokeCreationComponent = function(a) {
                var b = null;
                try {
                    b = a.creationComponent();
                } catch (c) {
                    throw c;
                }
                return b;
            }, b.getItemsByOptions = function(a, b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (b) {
                        if (b === e.type && e.canHandleOptions(a)) return e;
                    } else if (e.canHandleOptions(a)) return e;
                }
                return null;
            }, b;
        }(e);
        b.exports = f;
    }, {
        "./component": 51
    } ],
    53: [ function(a, b, c) {
        var d = function() {
            function a(a, b, c, d) {
                if (void 0 === d && (d = null), !a || !b || !c) throw new Error("Failed to create instance of ComponentFactoryItem because invalid parameter.");
                this.id = a, this.canHandleOptions = b, this.creationComponent = c, this.type = d;
            }
            return a;
        }();
        b.exports = d;
    }, {} ],
    54: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.PLAYER = "player", a.MEDIA = "media", a.MEDIA_FACTORY = "mediaFactory",
            a.COMPONENT_FACOTRY = "componentFactory", a.UUID = "uuid", a.SUBTITLE = "subtitle",
            a.MACRO = "macro", a.ADDCOMPONENT = "addComponent", a.ERROR = "error", a.BEACON = "beacon",
            a.AKAMAI_MEDIA_ANALYTICS = "akamaiMediaAnalytics", a.PREROLL_TRAIT = "prerollTrait",
            a.MIDROLL_TRAIT = "midrollTrait", a.POSTROLL_TRAIT = "postrollTrait", a.ADVERTISEMENT = "Advertisement",
            a.ADVERTISEMENT_ROLL_FACTORY = "AdvertisementRollFactory", a.ADVERTISEMENT_LOADER = "AdvertisementLoader",
            a.ADVERTISEMENT_CLIENT = "AdvertisementClient", a.ADVERTISEMENT_DISPLAY = "AdvertisementDisplay",
            a.ADVERTISEMENT_TRACK = "AdvertisementTrack", a.ADVERTISEMENT_PLAYBACK = "AdvertisementPlayback",
            a.ADVERTISEMENT_QUEUE = "AdvertisementQueue", a;
        }();
        b.exports = d;
    }, {} ],
    55: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../akamaiMediaAnalytics"), f = a("./componentFactory"), g = a("./componentFactoryItem"), h = a("./componentType"), i = a("./../media/defaultMediaFactory"), j = a("./../beacon/beacon"), k = a("./../error"), l = a("./../uuid/uuid"), m = a("./../advertisement/advertisement"), n = a("./../addComponent"), o = a("./../subtitle"), p = a("./../macro"), q = function(a) {
            function b(b) {
                a.call(this, b), this.addItem(new g(h.ADVERTISEMENT, m.canHandleOptions, function() {
                    return new m(b);
                }, h.ADVERTISEMENT)), this.addItem(new g(h.AKAMAI_MEDIA_ANALYTICS, e.canHandleOptions, function() {
                    return new e(b);
                }, h.AKAMAI_MEDIA_ANALYTICS)), this.addItem(new g(h.BEACON, j.canHandleOptions, function() {
                    return new j(b);
                }, h.BEACON)), this.addItem(new g(h.MEDIA_FACTORY, i.canHandleOptions, function() {
                    return new i(b);
                }, h.MEDIA_FACTORY)), this.addItem(new g(h.ERROR, k.canHandleOptions, function() {
                    return new k(b);
                }, h.ERROR)), this.addItem(new g(h.ADDCOMPONENT, n.canHandleOptions, function() {
                    return new n(b);
                }, h.ADDCOMPONENT)), this.addItem(new g(h.UUID, l.canHandleOptions, function() {
                    return new l(b);
                }, h.UUID)), this.addItem(new g(h.SUBTITLE, o.canHandleOptions, function() {
                    return new o(b);
                }, h.SUBTITLE)), this.addItem(new g(h.MACRO, p.canHandleOptions, function() {
                    return new p(b);
                }, h.MACRO));
            }
            return d(b, a), b;
        }(f);
        b.exports = q;
    }, {
        "./../addComponent": 2,
        "./../advertisement/advertisement": 4,
        "./../akamaiMediaAnalytics": 38,
        "./../beacon/beacon": 39,
        "./../error": 56,
        "./../macro": 63,
        "./../media/defaultMediaFactory": 80,
        "./../subtitle": 102,
        "./../uuid/uuid": 115,
        "./componentFactory": 52,
        "./componentFactoryItem": 53,
        "./componentType": 54
    } ],
    56: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./utils/call"), g = a("./language/language"), h = a("./event/mediaEvent"), i = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b.prototype.callback = function(b, c) {
                switch (b) {
                  case h.NOT_FOUND_FLASHPLAYER:
                  case h.WIDEVINE_NOT_FOUND_PLUGIN:
                  case h.WIDEVINE_EMM_FAILED:
                  case h.ON_MEDIA_ERROR:
                  case h.WIDEVINE_TICKET_FAILED:
                  case h.FAILED_CONFIGURATION:
                  case h.JSON_LOADING_FAILED:
                  case h.FORCE_PLAYBACK_STOP:
                    this.playerWidth_ = 0 === this.player_.getPlayerWidth() ? this.player_.options.width : "" + this.player_.getPlayerWidth(),
                    this.playerHeight_ = 0 === this.player_.getPlayerHeight() ? this.player_.options.height : "" + this.player_.getPlayerHeight(),
                    this.player_.error_ = !0, this.player_.remove(), this.display(b, c);
                }
                a.prototype.callback.call(this, b, c);
            }, b.createErrorCode = function(a, c) {
                var d = "", e = b.ERROR_CODES_MAP;
                a = b.normalizeMediaError(a, c);
                var f = e[a];
                return e.hasOwnProperty(a) && (d = null != c && "object" == typeof c && c.hasOwnProperty("id") ? f.hasOwnProperty("DETAIL") ? e[a].CODE : e[a].CODE + "_" + c.id : e[a].CODE),
                d;
            }, b.prototype.createErrorMessage = function(a, c) {
                var d = "", e = b.ERROR_CODES_MAP, f = b.ERROR_STRINGS_MAP, h = this.player_.options.language;
                if (d = g.getLanguage(h, f.ERROR) + f.BR, a = b.normalizeMediaError(a, c), e.hasOwnProperty(a)) {
                    var i = e[a];
                    d += g.getLanguage(h, f.CODE) + "��" + i.CODE + f.BR, d += g.getLanguage(h, f.MESSAGE) + "��" + g.getLanguage(h, i.MESSAGE) + f.BR,
                    d += g.getLanguage(h, f.DETAIL) + "��", i.hasOwnProperty("DETAIL") ? d += g.getLanguage(h, i.DETAIL) : null != c && "object" == typeof c && (c.hasOwnProperty("id") && (d += "id:" + c.id + " "),
                    c.hasOwnProperty("message") && (d += "message:" + c.message)), d += f.BR;
                }
                return d;
            }, b.normalizeMediaError = function(a, b) {
                return "onMediaError" == a && (a = "onMediaError_1", b.hasOwnProperty("id") && "100" == b.id && (a = "onMediaError_2")),
                a;
            }, b.prototype.display = function(a, b) {
                if (this.player_.options.enableDisplayError) {
                    this.player_.options.enableDisplayError = !1;
                    var c = this.createErrorMessage(a, b), d = document.createElement("p");
                    d.className = "ulizaplayer_error_div_message", d.innerHTML = c;
                    var e = document.createElement("span");
                    e.className = "ulizaplayer_error_div_middle";
                    var g = document.createElement("div");
                    g.id = this.player_.id + "_error", g.className = "ulizaplayer_error_div", g.style.width = this.playerWidth_ + "px",
                    g.style.height = this.playerHeight_ + "px", g.appendChild(d), g.appendChild(e),
                    f.call2(function() {
                        document.getElementById(this.player_.id).appendChild(g);
                    }.bind(this));
                }
            }, b.ERROR_STRINGS_MAP = {
                BR: "<br/>",
                ERROR: "error",
                CODE: "code",
                MESSAGE: "message",
                DETAIL: "detail"
            }, b.ERROR_CODES_MAP = {
                failedConfiguration: {
                    CODE: 10001,
                    MESSAGE: "Invalid configuration"
                },
                notFoundFlashPlayer: {
                    CODE: 10002,
                    MESSAGE: "Abobe Flash Player not found"
                },
                widevineNotFoundPlugin: {
                    CODE: 10003,
                    MESSAGE: "Widevine Browser Plugin not found"
                },
                onMediaError_1: {
                    CODE: 10004,
                    MESSAGE: "Video playback failed"
                },
                widevineEmmFailed: {
                    CODE: 10005,
                    MESSAGE: "Video playback failed",
                    DETAIL: "No valid ticket found"
                },
                onMediaError_2: {
                    CODE: 10006,
                    MESSAGE: "Video playback failed",
                    DETAIL: "Unavailable Content"
                },
                widevineTicketFailed: {
                    CODE: 10007,
                    MESSAGE: "Video playback failed"
                },
                JSONLoadingFailed: {
                    CODE: 10008,
                    MESSAGE: "Video playback failed"
                },
                forcePlaybackStop: {
                    CODE: 10009,
                    MESSAGE: "Video playback stopped"
                }
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./component/component": 51,
        "./event/mediaEvent": 59,
        "./language/language": 61,
        "./utils/call": 106
    } ],
    57: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.LOAD_STATE_CHANGE = "loadStateChange", a.ITEM_STATE_CHANGE = "itemStateChange",
            a.PREROLL_TRAIT_CLOSE = "prerollTraitClose", a.PROCESSED_AD_DISPLAY = "processedAdDisplay",
            a.PROCESSED_AD_COMPLETE = "processedAdComplete", a.PROCESSED_MIDROLL_RESSET = "processedMidrollResset",
            a.ITEM_TIMING_CHANGE = "itemTimingChange", a.ON_VMAP_LOADED = "onVMAPLoaded", a.ON_VAST_LOADED = "onVASTLoaded",
            a.AD_START = "adStart", a.AD_PLAY = "adPlaying", a.AD_PAUSE = "adPaused", a.AD_COMPELETE = "adComplete",
            a.AD_CLOSE = "adClose", a.AD_SKIP = "adSkip", a.AD_TIME_CHANGE = "adTimeChange",
            a.AD_CLICK = "adClick", a.AD_CURRENT_SECODE_TIME_CHANGE = "adCurrentSecodeTimeChange",
            a.DATA_TYPE = "type", a.ROLL_TYPE = "rollType", a.DATA_AD_ID = "adId", a.DATA_CURRENT_SECOND_TIME = "currentSecondTime",
            a;
        }();
        b.exports = d;
    }, {} ],
    58: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.ON_ADD_BUTTON = "onAddButton", a.ON_REMOVE_BUTTON = "onRemoveButton", a;
        }();
        b.exports = d;
    }, {} ],
    59: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.CURRENT_SECODE_TIME_CHANGE = "currentSecodeTimeChange", a.SECOND_DURATION_CHANGE = "secondDurationChange",
            a.START = "start", a.BUFFERING = "buffering", a.PLAYING = "playing", a.READY = "ready",
            a.COMPLETE = "complete", a.DURATION_CHANGE = "durationChange", a.TIME_CHANGE = "timeChange",
            a.SEEKED = "seeked", a.SEEKING = "seeking", a.VOLUME_CHANGE = "volumeChange", a.FULL_SCREEN_CHANGE = "fullScreenChange",
            a.ON_CLICK = "onClick", a.ON_JAVASCRIPT_BRIDGE_CREATED = "onJavaScriptBridgeCreated",
            a.ON_PLAYER_VIEW_INITIALIZE = "onPlayerViewInitialize", a.LOADING = "loading", a.MEDIA_SIZE = "mediaSize",
            a.PLAYLIST_ITEM_CHANGE_STATE_CHANGE = "playlistItemChangeStateChange", a.ON_EMM_SUCCESS = "onEmmSuccess",
            a.CHANGE_PLAYBACK_RATE = "onChangePlaybackRate", a.CHANGE_PLAYLIST = "onChangePlaylist",
            a.CHANGE_ANGLE = "onChangeAngle", a.ON_PLAYLIST = "onPlaylist", a.WV_TICKETURL_STATE_CHANGE = "wvTicketurlStateChange",
            a.JSON_LOADING_FAILED = "JSONLoadingFailed", a.FAILED_CONFIGURATION = "failedConfiguration",
            a.NOT_FOUND_FLASHPLAYER = "notFoundFlashPlayer", a.WIDEVINE_NOT_FOUND_PLUGIN = "widevineNotFoundPlugin",
            a.WIDEVINE_EMM_FAILED = "widevineEmmFailed", a.ON_MEDIA_ERROR = "onMediaError",
            a.FORCE_PLAYBACK_STOP = "forcePlaybackStop", a.WIDEVINE_TICKET_FAILED = "widevineTicketFailed",
            a.ON_EMM_FAILED = "onEmmFailed", a;
        }();
        b.exports = d;
    }, {} ],
    60: [ function(a, b, c) {
        var d = {
            ja: {
                error: "繧ｨ繝ｩ繝ｼ",
                code: "繧ｳ繝ｼ繝�",
                message: "繝｡繝�そ繝ｼ繧ｸ",
                detail: "隧ｳ邏ｰ",
                "Invalid configuration": "險ｭ螳壹↓螟ｱ謨励＠縺ｾ縺励◆縲�",
                "Abobe Flash Player not found": "繧ｳ繝ｳ繝�Φ繝�ｦ冶�縺ｫ蠢�ｦ√↑Flash Player縺梧怏蜉ｹ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲�",
                "Widevine Browser Plugin not found": "繧ｳ繝ｳ繝�Φ繝�ｦ冶�縺ｫ蠢�ｦ√↑Widevine Browser Plugin縺梧怏蜉ｹ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲�",
                "Video playback failed": "蜀咲函縺ｫ螟ｱ謨励＠縺ｾ縺励◆縲�",
                "Video playback stopped": "蜀咲函繧貞●豁｢縺励∪縺励◆縲�",
                "You can skip this ad in 0": "蠎�相縺ｯ\n0遘貞ｾ後↓繧ｹ繧ｭ繝��縺ｧ縺阪∪縺�",
                "Skip ad": "蠎�相繧偵せ繧ｭ繝��",
                Ad: "蠎�相"
            },
            en: {
                error: "error",
                code: "code",
                message: "message",
                detail: "detail",
                "Invalid configuration": "Invalid configuration",
                "Abobe Flash Player not found": "Abobe Flash Player not found",
                "Widevine Browser Plugin not found": "Widevine Browser Plugin not found",
                "Video playback failed": "Video playback failed",
                "Video playback stopped": "Video playback stopped",
                "You can skip this ad in 0": "You can skip this ad\n in 0",
                "Skip ad": "Skip ad",
                Ad: "Ad"
            }
        };
        b.exports = d;
    }, {} ],
    61: [ function(a, b, c) {
        var d = a("./../utils/obj"), e = function() {
            function a() {}
            return a.setLanguage = function(b, c) {
                try {
                    a.data[b] = c;
                } catch (d) {}
            }, a.getLanguage = function(b, c) {
                try {
                    return b ? c ? a.data.hasOwnProperty(b) && a.data[b].hasOwnProperty(c) ? a.data[b][c] : c : a.data.hasOwnProperty(b) ? a.data[b] : null : a.data;
                } catch (d) {
                    return null;
                }
            }, a.removeLanguage = function(b) {
                try {
                    d.deleteProperty(a.data, b);
                } catch (c) {}
            }, a.hasLanguage = function(b) {
                return a.data.hasOwnProperty(b) ? !0 : !1;
            }, a.data = {}, a;
        }();
        b.exports = e;
    }, {
        "./../utils/obj": 109
    } ],
    62: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("../utils/typeof"), f = a("./../component/component"), g = a("../utils/obj"), h = a("JSON"), i = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b.debug = function(a) {
                try {
                    ulizaplayer.debug && b.outputlog(a);
                } catch (c) {}
            }, b.debug2 = function(a) {
                try {
                    ulizaplayer.debug2 && b.outputlog(a);
                } catch (c) {}
            }, b.outputlog = function(a) {
                var b, c = "";
                for (b = 0; b < a.length; b++) if (e.isObject(a[b])) try {
                    a[b] = h.stringify(a[b]);
                } catch (d) {
                    g.deleteProperty(a, b);
                }
                var f = [];
                for (b = 10; b > a.length; b--) f.push("");
                a = a.concat(f), a[0] = "%c" + a[0], c = a.join(" %c");
            }, b;
        }(f);
        b.exports = i;
    }, {
        "../utils/obj": 109,
        "../utils/typeof": 111,
        "./../component/component": 51,
        JSON: 123
    } ],
    63: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./utils/typeof"), g = a("./utils/obj"), h = function(a) {
            function b(b) {
                if (a.call(this, b), this.macro = {}, this.macro = g.merge(this.macro, this.player_.options.macro),
                this.player_.options.uuid.macro) {
                    var c = {}, d = this.player_.getUUID(function(a, b) {
                        b = b || "", c[this.player_.options.uuid.macro] = b, this.macro = g.merge(this.macro, c);
                    }.bind(this));
                    d = d || "", c[this.player_.options.uuid.macro] = d, this.macro = g.merge(this.macro, c);
                }
            }
            return d(b, a), b.prototype.getMacro = function() {
                return this.macro;
            }, b.prototype.replaceByMacro = function(a) {
                return b.replace(a, this.getMacro());
            }, b.replace = function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (void 0 === b[c] && (b[c] = ""), a = a.replace("[" + c + "]", b[c]));
                return a;
            }, b.hasMacro = function(a, b) {
                return b = "[" + b + "]", f.isString(a) && -1 !== a.indexOf(b);
            }, b;
        }(e);
        b.exports = h;
    }, {
        "./component/component": 51,
        "./utils/obj": 109,
        "./utils/typeof": 111
    } ],
    64: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.NEXT = -1] = "NEXT", a[a.PREVIOUS = -2] = "PREVIOUS";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    65: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.NONE = 0] = "NONE", a[a.BUTTON = 1] = "BUTTON", a[a.PLABACK_END = 2] = "PLABACK_END",
            a[a.JAVASCRIPT_API = 3] = "JAVASCRIPT_API";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    66: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a;
        }();
        b.exports = d;
    }, {} ],
    67: [ function(a, b, c) {
        var d = a("./angle"), e = function() {
            function a(a, b) {
                this.videoIndex = a, this.url = b, this.playbackrate = 1, this.strPlaybackrate = "1",
                this.adUrl = "", this.title = "", this.streamid = "", this.title = "", this.adUrl = "",
                this.angle = new d(), this.angle.id = null, this.angle.index = null;
            }
            return a;
        }();
        b.exports = e;
    }, {
        "./angle": 66
    } ],
    68: [ function(a, b, c) {
        var d = a("./../../../utils/typeof"), e = a("./../playlistVideoType"), f = function() {
            function a(a, b) {
                this.error = null, this.items = [], this.originalPlaylist = b, this.player = a;
            }
            return a.prototype.initialize = function() {}, a.prototype.getCurrentItem = function() {
                return null;
            }, a.prototype.getItem = function(a) {
                return d.isNumber(a) && this.items.length > a ? this.items[a] : null;
            }, a.prototype.changeable = function(a) {
                return !1;
            }, a.prototype.findVideos = function(a, b, c) {
                void 0 === c && (c = !0);
                for (var d = [], f = 0; f < this.items.length; f++) switch (a) {
                  case e.playbackrate:
                  case e.angle:
                    this.items[f].playlistIndex === b && d.push(this.items[f]);
                    break;

                  default:
                    d.push(this.items[f]);
                }
                return d;
            }, a.prototype.getItemAll = function() {
                return this.items;
            }, a.prototype.toPlaylistObject = function() {
                for (var a = [], b = [], c = 0; c < this.items.length; c++) -1 === b.indexOf(this.items[c].playlistIndex) ? (b.push(this.items[c].playlistIndex),
                a.push({
                    adurl: this.items[c].adUrl,
                    index: this.items[c].playlistIndex,
                    videos: [ {
                        angleid: this.items[c].angle.id,
                        index: this.items[c].videoIndex,
                        playbackrate: this.items[c].playbackrate,
                        streamid: this.items[c].streamid,
                        title: this.items[c].title,
                        url: this.items[c].url
                    } ]
                })) : a[b.indexOf(this.items[c].playlistIndex)].videos.push({
                    angleid: this.items[c].angle.id,
                    index: this.items[c].videoIndex,
                    playbackrate: this.items[c].playbackrate,
                    streamid: this.items[c].streamid,
                    title: this.items[c].title,
                    url: this.items[c].url
                });
                return a;
            }, a.prototype.toPlaybackRateObject = function() {
                for (var a = [], b = 0; b < this.items.length; b++) this.getCurrentItem().playlistIndex !== this.items[b].playlistIndex || 1 !== this.items[b].angle.id && null !== this.items[b].angle.index || a.push({
                    angleid: this.items[b].angle.id,
                    index: this.items[b].videoIndex,
                    playbackrate: this.items[b].playbackrate,
                    streamid: this.items[b].streamid,
                    title: this.items[b].title,
                    url: this.items[b].url
                });
                return a;
            }, a.prototype.toAngleObject = function() {
                for (var a = [], b = 0; b < this.items.length; b++) this.getCurrentItem().playlistIndex === this.items[b].playlistIndex && this.getCurrentItem().playbackrate === this.items[b].playbackrate && null !== this.items[b].angle.index && a.push({
                    angleid: this.items[b].angle.id,
                    index: this.items[b].videoIndex,
                    playbackrate: this.items[b].playbackrate,
                    streamid: this.items[b].streamid,
                    title: this.items[b].title,
                    url: this.items[b].url
                });
                return a;
            }, a;
        }();
        b.exports = f;
    }, {
        "./../../../utils/typeof": 111,
        "./../playlistVideoType": 75
    } ],
    69: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./playlistModel"), f = a("./../../../utils/typeof"), g = a("./../playlistVideoType"), h = a("./../playlistChangeOperation"), i = function(a) {
            function b() {
                a.apply(this, arguments), this.currentIndex_ = NaN, this.onePreviousIndex_ = NaN;
            }
            return d(b, a), b.prototype.initialize = function() {
                try {
                    if (0 === this.items.length) throw !0;
                    if (this.shiftItem(g.playlist, h.NEXT), this.player.options.startPlaylistIndex && this.changeItem(g.playlist, this.player.options.startPlaylistIndex),
                    this.player.options.startPlaybackRate && this.changeItem(g.playbackrate, this.player.options.startPlaybackRate),
                    !this.getCurrentItem()) throw !0;
                    this.onePreviousIndex_ = NaN;
                } catch (a) {
                    this.error = new Error("Invalid data");
                }
            }, b.prototype.getCurrentItem = function() {
                return this.items.length > this.currentIndex_ ? this.items[this.currentIndex_] : null;
            }, b.prototype.getOnePreviousItem = function() {
                return f.isNaN(this.onePreviousIndex_) ? null : this.items[this.onePreviousIndex_];
            }, b.prototype.changeable = function(a) {
                switch (a) {
                  case g.playbackrate:
                    for (var b = this.findVideos(g.playbackrate, this.getCurrentItem().playlistIndex), c = 0; c < b.length; c++) if (b[0].playbackrate !== b[c].playbackrate) return !0;
                    break;

                  case g.playlist:
                    for (var c = 0; c < this.items.length; c++) if (this.items[0].playlistIndex !== this.items[c].playlistIndex) return !0;
                    break;

                  case g.angle:
                    for (var b = this.findVideos(g.playbackrate, this.getCurrentItem().playlistIndex), c = 0; c < b.length; c++) if (b[0].playbackrate === b[c].playbackrate && b[0].videoIndex !== b[c].videoIndex) return !0;
                }
                return !1;
            }, b.prototype.hasNext = function(a) {
                return this.hasItem_(a, h.NEXT);
            }, b.prototype.hasPrevious = function(a) {
                return this.hasItem_(a, h.PREVIOUS);
            }, b.prototype.hasItem_ = function(a, b) {
                switch (a) {
                  case g.playbackrate:
                    for (var c = this.getCurrentItem() ? this.getCurrentItem().playbackrate : NaN, d = 0; d < this.items.length; d++) if (c !== this.items[d].playbackrate) return !0;
                    break;

                  case g.angle:
                    for (var c = this.getCurrentItem() ? this.getCurrentItem().playbackrate : NaN, e = this.getCurrentItem() ? this.getCurrentItem().videoIndex : NaN, d = 0; d < this.items.length; d++) if (c === this.items[d].playbackrate && e !== this.items[d].videoIndex) return !0;
                    break;

                  case g.playlist:
                    var f = this.getCurrentItem() ? this.getCurrentItem().playlistIndex : NaN;
                    switch (b) {
                      case h.NEXT:
                        for (var d = 0; d < this.items.length; d++) if (f < this.items[d].playlistIndex) return !0;
                        break;

                      case h.PREVIOUS:
                        for (var d = 0; d < this.items.length; d++) if (f > this.items[d].playlistIndex) return !0;
                    }
                }
                return !1;
            }, b.prototype.shiftItem = function(a, b) {
                var c, d, e, f = NaN, i = NaN, j = NaN;
                if (this.getCurrentItem() && (f = this.getCurrentItem().playlistIndex, i = this.getCurrentItem().playbackrate,
                j = this.getCurrentItem().playlistItemIndex), b === h.NEXT || b === h.PREVIOUS) switch (a) {
                  case g.playbackrate:
                    for (c = this.findVideos(g.playbackrate, f), e = 1; e < c.length; e++) if (d = b === h.NEXT ? c[e] : c[c.length - e - 1],
                    i != d.playbackrate) return this.setCurrentIndex(d.playlistItemIndex), this.getCurrentItem();
                    break;

                  case g.angle:
                    for (c = this.findVideos(g.angle, f), e = 0; e < c.length; e++) if (d = b === h.NEXT ? c[e] : c[c.length - e - 1],
                    i === d.playbackrate && j != d.playlistItemIndex) return this.setCurrentIndex(d.playlistItemIndex),
                    this.getCurrentItem();
                    break;

                  case g.playlist:
                    c = this.findVideos(g.playlist, f);
                    var k, l = {};
                    for (e = 0; e < c.length; e++) d = c[e], k = "" + d.playlistIndex, 1 === d.playbackrate && (!l.hasOwnProperty(k) || l[k] > d.videoIndex) && (l[k] = d.videoIndex);
                    var m = [];
                    for (e = 0; e < c.length; e++) d = c[e], k = "" + d.playlistIndex, l[k] === d.videoIndex && m.push(d);
                    for (e = 0; e < m.length; e++) if (d = b === h.NEXT ? m[e] : m[m.length - e - 1],
                    f != d.playlistIndex && 1 === d.playbackrate) return this.setCurrentIndex(d.playlistItemIndex),
                    this.getCurrentItem();
                }
                return this.getCurrentItem();
            }, b.prototype.changeItem = function(a, b) {
                var c, d = this.getCurrentItem() ? this.getCurrentItem().playlistIndex : NaN;
                switch (a) {
                  case g.playbackrate:
                    c = this.findVideos(g.playbackrate, d);
                    for (var e = 0; e < c.length; e++) if (b === c[e].playbackrate) return this.setCurrentIndex(c[e].playlistItemIndex),
                    this.getCurrentItem();
                    break;

                  case g.playlist:
                    c = this.findVideos(g.playlist, d);
                    for (var e = 0; e < c.length; e++) if (b === c[e].playlistIndex) return this.setCurrentIndex(c[e].playlistItemIndex),
                    this.getCurrentItem();
                    break;

                  case g.angle:
                    c = this.findVideos(g.angle, d);
                    for (var e = 0; e < c.length; e++) if (b === c[e].playlistItemIndex) return this.setCurrentIndex(c[e].playlistItemIndex),
                    this.getCurrentItem();
                }
                return this.getCurrentItem();
            }, b.prototype.findVideos = function(b, c, d) {
                void 0 === d && (d = !0);
                var e = a.prototype.findVideos.call(this, b, c), f = this.getCurrentItem() ? this.getCurrentItem().playlistItemIndex : NaN;
                if (d) {
                    for (var g = 0; g < e.length && f !== e[g].playlistItemIndex; g++) ;
                    var h = e.slice(g);
                    e = h.concat(e.slice(0, g));
                }
                return e;
            }, b.prototype.setCurrentIndex = function(a) {
                return void 0 === a && (a = this.currentIndex_), this.onePreviousIndex_ = this.currentIndex_,
                this.currentIndex_ = a, this.currentIndex_;
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./../../../utils/typeof": 111,
        "./../playlistChangeOperation": 70,
        "./../playlistVideoType": 75,
        "./playlistModel": 68
    } ],
    70: [ function(a, b, c) {
        arguments[4][64][0].apply(c, arguments);
    }, {
        dup: 64
    } ],
    71: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.ready = 0] = "ready", a[a.setedMedia = 1] = "setedMedia", a[a.caughtLoadingEvent = 2] = "caughtLoadingEvent",
            a[a.complete = 3] = "complete";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    72: [ function(a, b, c) {
        arguments[4][65][0].apply(c, arguments);
    }, {
        dup: 65
    } ],
    73: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../defaultMedia"), f = a("./../../component/componentType"), g = a("./model/playlistModelDeque"), h = a("./playlistParser"), i = a("./../playlistError"), j = a("./../../utils/xhr"), k = a("./../../utils/call"), l = a("./../../utils/obj"), m = a("./../../utils/url2"), n = a("./../../utils/typeof"), o = a("./playlistItemChangeState"), p = a("./playlistVideoType"), q = a("./../../state"), r = a("./PlaylistChangeOperation"), s = a("./trait/playlistTrait"), t = a("./trait/playbackrateTrait"), u = a("./trait/angleTrait"), v = a("./../../event/advertisementEvent"), w = a("./../../event/mediaEvent"), x = a("./../../option/optionDrector"), y = (a("./../../log/logger"),
        a("./playlistItemChangeType")), z = function() {
            function a() {}
            return a.CURRENT_TIME = "currentTime", a.DURATION = "duration", a;
        }(), A = function(a) {
            function b(b) {
                a.call(this, b), this.completed = !1, this.itemChangeState_ = o.ready, this.itemChangeType = y.NONE,
                this.tmpPlaybackInfo_ = {}, this.tmpPlaybackInfo_[z.CURRENT_TIME] = 0, this.tmpPlaybackInfo_[z.DURATION] = 0;
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return n.isObject(a.file) || n.isString(a.file) && "JSON" === m.getExtension(a.file);
            }, b.prototype.added = function() {
                this.setMedia({
                    src: ""
                });
                var a = new h(this.player_);
                n.isObject(this.player_.options.file) && this.player_.options.file.hasOwnProperty("file") && (this.player_.options.file = this.player_.options.file.file),
                n.isObject(this.player_.options.file) ? k.call2(function() {
                    this.model = a.parse(new g(this.player_, this.player_.options.file)), this.trigger(w.ON_PLAYLIST, this.model.toPlaylistObject()),
                    this.playlistTrait_ = new u(new t(new s(this))), this.model.error ? this.trigger(w.JSON_LOADING_FAILED, l.merge(i.INVALID_DATA, {})) : this.playlistItemChangeStart(),
                    a.dispose(), a = null;
                }.bind(this)) : j(this.player_.options.file, function(b, c, d) {
                    b ? "timeout" === b.message ? this.trigger(w.JSON_LOADING_FAILED, l.merge(i.REQUEST_TIMEOUT, {
                        responseBody: d,
                        responseStatus: c.status
                    })) : 401 == c.status ? this.trigger(w.JSON_LOADING_FAILED, l.merge(i.UNAUTHORIZED, {
                        responseBody: d,
                        responseStatus: c.status
                    })) : this.trigger(w.JSON_LOADING_FAILED, l.merge(i.LOADING_FAILED, {
                        responseBody: d,
                        responseStatus: c.status
                    })) : "" == d ? this.trigger(w.JSON_LOADING_FAILED, l.merge(i.EMPTY_DATA, {
                        responseBody: d,
                        responseStatus: c.status
                    })) : d ? k.call2(function() {
                        this.model = a.parse(new g(this.player_, d)), this.trigger(w.ON_PLAYLIST, this.model.toPlaylistObject()),
                        this.playlistTrait_ = new u(new t(new s(this))), this.model.error ? this.trigger(w.JSON_LOADING_FAILED, l.merge(i.INVALID_DATA, {
                            responseBody: d,
                            responseStatus: c.status
                        })) : this.playlistItemChangeStart(), a.dispose(), a = null;
                    }.bind(this)) : this.trigger(w.JSON_LOADING_FAILED, l.merge(i.INVALID_DATA, {
                        responseBody: d,
                        responseStatus: c.status
                    }));
                }.bind(this));
            }, b.prototype.playlistItemChangeStart = function(b, c, d) {
                if (void 0 === d && (d = y.NONE), !this.model) return !1;
                if (this.itemChangeState_ === o.setedMedia || this.itemChangeState_ === o.caughtLoadingEvent) return !1;
                if (this.model.getOnePreviousItem() && !this.played) return !1;
                var e = a.prototype.getCurrentTime.call(this), g = a.prototype.getDuration.call(this);
                if (!n.isUndefined(b)) switch (c) {
                  case r.NEXT:
                  case r.PREVIOUS:
                    this.model.shiftItem(b, c);
                    break;

                  default:
                    this.model.changeItem(b, c);
                }
                var h = this.player_.getChild(f.MEDIA_FACTORY);
                return h && !this.model.getOnePreviousItem() || this.model.getOnePreviousItem().playlistItemIndex !== this.model.getCurrentItem().playlistItemIndex ? (this.hasChild(f.MEDIA) && (this.childMediaBeforeChange_ = this.getChild(f.MEDIA),
                this.removeChild(f.MEDIA, !1)), this.tmpPlaybackInfo_[z.CURRENT_TIME] = e, this.tmpPlaybackInfo_[z.DURATION] = g,
                this.itemChangeType = d, x.merge(this.player_.options, this.playlistTrait_.createLoadMediaParameter()),
                this.playlistTrait_.proseceBeforeLaodMedia(), this.setItemChangeState(o.setedMedia),
                this.currentChildMedia = h.createComponent(this.player_.options, f.MEDIA), !this.player_.hasChild(f.ADVERTISEMENT) || this.model.getOnePreviousItem() && this.model.getOnePreviousItem().playlistIndex === this.model.getCurrentItem().playlistIndex || (this.currentChildMedia.customOptions.autoPlay = !1),
                this.addChild(f.MEDIA, this.currentChildMedia), !0) : !1;
            }, b.prototype.playlistItemChangeEnd = function() {
                return this.itemChangeState_ === o.complete ? !1 : (this.model.getOnePreviousItem() && (this.model.getCurrentItem().playbackrate !== this.model.getOnePreviousItem().playbackrate && this.trigger(w.CHANGE_PLAYBACK_RATE, {
                    newPlaybackRate: this.model.getCurrentItem().playbackrate,
                    oldPlaybackRate: this.model.getOnePreviousItem().playbackrate
                }), this.model.getCurrentItem().playlistIndex !== this.model.getOnePreviousItem().playlistIndex && this.trigger(w.CHANGE_PLAYLIST, {
                    newPlaylist: this.model.getCurrentItem().playlistIndex,
                    oldPlaylist: this.model.getOnePreviousItem().playlistIndex
                }), this.model.getCurrentItem().angle.id !== this.model.getOnePreviousItem().angle.id && this.trigger(w.CHANGE_ANGLE, {
                    newVideoId: this.model.getCurrentItem().videoIndex,
                    oldVideoId: this.model.getOnePreviousItem().videoIndex
                })), this.playlistTrait_.proseceAfterLaodMedia(), this.model.setCurrentIndex(),
                this.setItemChangeState(o.complete), this.itemChangeType = y.NONE, this.tmpPlaybackInfo_[z.CURRENT_TIME] = 0,
                this.tmpPlaybackInfo_[z.DURATION] = 0, null != this.childMediaBeforeChange_ && (this.childMediaBeforeChange_.dispose(),
                this.childMediaBeforeChange_ = null), !0);
            }, b.prototype.callback = function(b, c) {
                switch (b) {
                  case w.ON_CLICK:
                    switch (c.component) {
                      case "speed":
                        this.playlistItemChangeStart(p.playbackrate, r.NEXT, y.BUTTON);
                        break;

                      case "next":
                        (this.model.hasNext(p.playlist) || this.player_.options.loop) && this.playlistItemChangeStart(p.playlist, r.NEXT, y.BUTTON);
                        break;

                      case "prev":
                        this.getCurrentTime() < this.player_.options.playlistPrevTime && (this.model.hasPrevious(p.playlist) || this.player_.options.loop) && this.playlistItemChangeStart(p.playlist, r.PREVIOUS, y.BUTTON);
                        break;

                      case "angle":
                        this.playlistItemChangeStart(p.angle, r.NEXT, y.BUTTON);
                    }
                    break;

                  case w.COMPLETE:
                    this.completed = !0;
                    var d = this.player_.getChild(f.ADVERTISEMENT);
                    (!d || d && d.isCompletedPost()) && (this.completed = !1, this.playlistItemChangeStart(p.playlist, r.NEXT, y.PLABACK_END));
                    break;

                  case v.ITEM_STATE_CHANGE:
                    var d = this.player_.getChild(f.ADVERTISEMENT);
                    (!d || d && this.completed && d.isCompletedPost()) && (this.completed = !1, this.playlistItemChangeStart(p.playlist, r.NEXT, y.PLABACK_END));
                }
                a.prototype.callback.call(this, b, c);
            }, b.prototype.onJSBridge = function(b, c, d, e) {
                switch (void 0 === e && (e = !0), this.currentChildMedia && this.currentChildMedia.onJSBridge(b, c, d, !1),
                c) {
                  case w.READY:
                    this.itemChangeState_ !== o.setedMedia && this.itemChangeState_ !== o.caughtLoadingEvent || this.model.getOnePreviousItem() && this.model.getCurrentItem().playlistIndex === this.model.getOnePreviousItem().playlistIndex || this.playlistItemChangeEnd();
                    break;

                  case w.LOADING:
                    this.itemChangeState_ === o.setedMedia && this.setItemChangeState(o.caughtLoadingEvent);
                    break;

                  case w.PLAYING:
                    this.completed = !1, this.itemChangeState_ === o.caughtLoadingEvent && this.playlistItemChangeEnd();
                }
                a.prototype.onJSBridge.call(this, b, c, d, e);
            }, b.prototype.getState = function() {
                return this.model && this.itemChangeState_ !== o.complete ? q.CHANGING_MEDIA : a.prototype.getState.call(this);
            }, b.prototype.canAdvertisement = function() {
                return !!this.model && this.itemChangeState_ === o.complete && this.currentChildMedia && this.currentChildMedia.canAdvertisement();
            }, b.prototype.getPlaylistData = function() {
                return this.model ? this.model.toPlaylistObject() : a.prototype.getPlaylistData.call(this);
            }, b.prototype.changePlaylist = function(b) {
                return n.isNumber(b) && b >= 0 ? this.model ? this.playlistItemChangeStart(p.playlist, b, y.JAVASCRIPT_API) : a.prototype.changePlaylist.call(this, b) : !1;
            }, b.prototype.getPlayingPlaylistIndex = function() {
                return this.model && this.model.getCurrentItem() ? this.model.getCurrentItem().playlistIndex : a.prototype.getPlayingPlaylistIndex.call(this);
            }, b.prototype.getPlaybackRateData = function() {
                return this.model ? this.model.toPlaybackRateObject() : a.prototype.getPlaybackRateData.call(this);
            }, b.prototype.changePlaybackRate = function(b) {
                return n.isNumber(b) && b > 0 ? this.model ? this.playlistItemChangeStart(p.playbackrate, b, y.JAVASCRIPT_API) : a.prototype.changePlaybackRate.call(this, b) : !1;
            }, b.prototype.getPlaybackRate = function() {
                return this.model ? this.model.getOnePreviousItem() && this.itemChangeState_ !== o.complete ? this.model.getOnePreviousItem().playbackrate : this.model.getCurrentItem().playbackrate : a.prototype.getPlaybackRate.call(this);
            }, b.prototype.getAngleData = function() {
                return this.model && this.model.changeable(p.angle) ? this.model.toAngleObject() : a.prototype.getAngleData.call(this);
            }, b.prototype.changeAngle = function(b) {
                return n.isNumber(b) && b >= 0 ? this.model ? this.playlistItemChangeStart(p.angle, b, y.JAVASCRIPT_API) : a.prototype.changeAngle.call(this, b) : !1;
            }, b.prototype.getPlayingAngleIndex = function() {
                return this.model && this.model.changeable(p.angle) ? this.model.getCurrentItem().videoIndex : a.prototype.getPlayingAngleIndex.call(this);
            }, b.prototype.getPlayingContentURL = function() {
                return this.model.getCurrentItem().url;
            }, b.prototype.getCurrentTime = function() {
                return this.model && this.model.getOnePreviousItem() && this.itemChangeState_ !== o.complete ? this.tmpPlaybackInfo_[z.CURRENT_TIME] : a.prototype.getCurrentTime.call(this);
            }, b.prototype.getDuration = function() {
                return this.model && this.model.getOnePreviousItem() && this.itemChangeState_ !== o.complete ? this.tmpPlaybackInfo_[z.DURATION] : a.prototype.getDuration.call(this);
            }, b.prototype.setItemChangeState = function(a) {
                this.itemChangeState_ !== a && (this.itemChangeState_ = a, this.trigger(w.PLAYLIST_ITEM_CHANGE_STATE_CHANGE, {
                    state: this.itemChangeState_
                }, !1));
            }, b;
        }(e);
        b.exports = A;
    }, {
        "./../../component/componentType": 54,
        "./../../event/advertisementEvent": 57,
        "./../../event/mediaEvent": 59,
        "./../../log/logger": 62,
        "./../../option/optionDrector": 96,
        "./../../state": 100,
        "./../../utils/call": 106,
        "./../../utils/obj": 109,
        "./../../utils/typeof": 111,
        "./../../utils/url2": 112,
        "./../../utils/xhr": 113,
        "./../defaultMedia": 79,
        "./../playlistError": 86,
        "./PlaylistChangeOperation": 64,
        "./model/playlistModelDeque": 69,
        "./playlistItemChangeState": 71,
        "./playlistItemChangeType": 72,
        "./playlistParser": 74,
        "./playlistVideoType": 75,
        "./trait/angleTrait": 76,
        "./trait/playbackrateTrait": 77,
        "./trait/playlistTrait": 78
    } ],
    74: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./model/playlistItem"), f = a("./../../utils/typeof"), g = a("./../../utils/math"), h = a("JSON"), i = (a("./../../log/logger"),
        a("./../../component/component")), j = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b.prototype.parse = function(a) {
                var b, c, d, i = [];
                try {
                    if (i = f.isString(a.originalPlaylist) ? h.parse(a.originalPlaylist) : a.originalPlaylist,
                    !f.isArray(i)) throw !0;
                    var j;
                    for (c = 0; c < i.length; c++) {
                        if (j = i[c].videos, !i[c].hasOwnProperty("index") || !f.isNumber(i[c].index) || i[c].index < 0) throw !0;
                        var k = Math.floor(i[c].index);
                        for (d = 0; d < a.items.length; d++) if (a.items[d].playlistIndex === k) throw !0;
                        var l = "";
                        i[c].hasOwnProperty("adurl") && f.isString(i[c].adurl) && (l = i[c].adurl);
                        var m = [], n = Object.keys(j);
                        for (b = 0; b < n.length; b++) {
                            var o = j[n[b]];
                            if (!o.hasOwnProperty("index") || !o.hasOwnProperty("url")) throw !0;
                            if (!f.isNumber(o.index) || !f.isString(o.url)) throw !0;
                            if (o.index < 0 || "" === o.url) throw !0;
                            var p = Math.floor(o.index);
                            for (d = 0; d < m.length; d++) if (m[d].playlistIndex === k && m[d].videoIndex === p) throw !0;
                            var q = new e(p, o.url);
                            q.playlistIndex = k, q.adUrl = l, o.hasOwnProperty("playbackrate") && f.isNumber(o.playbackrate) && o.playbackrate > .1 && (q.strPlaybackrate = o.playbackrate,
                            q.playbackrate = g.toFixFloor(o.playbackrate));
                            var r = new RegExp("^[0-9a-zA-Z_-]+$");
                            if (o.hasOwnProperty("streamid") && f.isString(o.streamid) && r.test(o.streamid) && (q.streamid = o.streamid),
                            o.hasOwnProperty("title") && f.isString(o.title) && (q.title = o.title), o.hasOwnProperty("angles") && f.isArray(o.angles)) for (d = 0; d < o.angles.length; d++) if (o.angles[d] && o.angles[d].hasOwnProperty("index")) {
                                q.angle.index = o.angles[d].index;
                                break;
                            }
                            m.push(q);
                        }
                        var s = !1;
                        for (b = 0; b < m.length; b++) 1 === m[b].playbackrate && (s = !0);
                        if (!s) throw !0;
                        m.sort(function(a, b) {
                            return a.videoIndex - b.videoIndex;
                        });
                        var t = [], u = {};
                        for (b = 0; b < m.length; b++) if (null === m[0].angle.index == (null === m[b].angle.index)) {
                            if (null !== m[b].angle.index) {
                                var v = "" + m[b].playbackrate;
                                u.hasOwnProperty(v) || (u[v] = 0), m[b].angle.id = ++u[v];
                            }
                            t.push(m[b]);
                        }
                        a.items = a.items.concat(t);
                    }
                    for (a.items.sort(function(a, b) {
                        var c = a.playlistIndex - b.playlistIndex;
                        return 0 === c ? a.videoIndex - b.videoIndex : c;
                    }), b = 0; b < a.items.length; b++) a.items[b].playlistItemIndex = b;
                    a.initialize();
                } catch (w) {
                    a.error = new Error("Invalid data");
                }
                return a;
            }, b;
        }(i);
        b.exports = j;
    }, {
        "./../../component/component": 51,
        "./../../log/logger": 62,
        "./../../utils/math": 108,
        "./../../utils/typeof": 111,
        "./model/playlistItem": 67,
        JSON: 123
    } ],
    75: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.playlist = 0] = "playlist", a[a.playbackrate = 1] = "playbackrate", a[a.angle = 2] = "angle",
            a[a.language = 3] = "language";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    76: [ function(a, b, c) {
        var d = a("./../playlistVideoType"), e = function() {
            function a(a) {
                this.playlistTrait_ = null, this.player = null, this.playlistTrait_ = a, this.player = this.playlistTrait_.player,
                this.model = this.playlistTrait_.model;
            }
            return a.prototype.proseceAfterLaodMedia = function() {
                this.playlistTrait_.proseceAfterLaodMedia(), !this.model.getOnePreviousItem() && this.model.changeable(d.angle) && this.player.media.setAngle(this.model.getCurrentItem().angle.id);
            }, a.prototype.createLoadMediaParameter = function() {
                var a = this.playlistTrait_.createLoadMediaParameter();
                return this.model.getOnePreviousItem() && this.model.getCurrentItem().videoIndex !== this.model.getOnePreviousItem().videoIndex && this.model.getCurrentItem().playlistIndex === this.model.getOnePreviousItem().playlistIndex && this.model.getCurrentItem().playbackrate === this.model.getOnePreviousItem().playbackrate && (a.autoStart = !0,
                a.startTime = this.player.media.getCurrentTime()), a;
            }, a.prototype.proseceBeforeLaodMedia = function() {
                this.playlistTrait_.proseceBeforeLaodMedia(), this.model.getOnePreviousItem() && (this.model.changeable(d.angle) ? this.player.media.setAngle(this.model.getCurrentItem().angle.id) : this.player.media.setAngle(-1));
            }, a.prototype.dispose = function() {
                this.playlistTrait_.dispose(), this.playlistTrait_ = null, this.player = null, this.model = null;
            }, a;
        }();
        b.exports = e;
    }, {
        "./../playlistVideoType": 75
    } ],
    77: [ function(a, b, c) {
        var d = a("./../playlistVideoType"), e = function() {
            function a(a) {
                this.playlistTrait_ = null, this.player = null, this.playlistTrait_ = a, this.player = this.playlistTrait_.player,
                this.model = this.playlistTrait_.model;
            }
            return a.prototype.proseceAfterLaodMedia = function() {
                this.playlistTrait_.proseceAfterLaodMedia(), !this.model.getOnePreviousItem() && this.model.changeable(d.playbackrate) && this.player.media.setSpeed(this.model.getCurrentItem().playbackrate);
            }, a.prototype.createLoadMediaParameter = function() {
                var a = this.playlistTrait_.createLoadMediaParameter();
                if (this.model.getOnePreviousItem() && this.model.getCurrentItem().playbackrate !== this.model.getOnePreviousItem().playbackrate && this.model.getCurrentItem().playlistIndex === this.model.getOnePreviousItem().playlistIndex) {
                    a.autoStart = !0;
                    var b = this.model.getOnePreviousItem() ? this.model.getOnePreviousItem().playbackrate : 1;
                    a.startTime = this.player.media.getCurrentTime() * b / this.model.getCurrentItem().playbackrate;
                }
                return a;
            }, a.prototype.proseceBeforeLaodMedia = function() {
                this.playlistTrait_.proseceBeforeLaodMedia(), this.model.getOnePreviousItem() && (this.model.changeable(d.playbackrate) ? this.player.media.setSpeed(this.model.getCurrentItem().playbackrate) : this.player.media.setSpeed(-1));
            }, a.prototype.dispose = function() {
                this.playlistTrait_.dispose(), this.playlistTrait_ = null, this.player = null, this.model = null;
            }, a;
        }();
        b.exports = e;
    }, {
        "./../playlistVideoType": 75
    } ],
    78: [ function(a, b, c) {
        var d = a("./../playlistVideoType"), e = a("Url"), f = a("./../PlaylistItemChangeType"), g = a("./../../../utils/obj"), h = function() {
            function a(a) {
                this.player = a.player_, this.model = a.model, this.defaultParameter = {
                    autoStart: this.player.options.autoStart,
                    autoRewind: this.player.options.autoRewind
                }, this.playlistMedia = a;
            }
            return a.prototype.proseceAfterLaodMedia = function() {
                if (this.player.media.setPlayerTitle({
                    title: this.player.options.title
                }), !this.model.getOnePreviousItem() && this.model.changeable(d.playlist)) {
                    var a = {
                        nextButton: {
                            show: !0
                        },
                        prevButton: {
                            show: !0
                        }
                    };
                    this.player.options.design.style.hasOwnProperty("nextButton") && this.player.options.design.style.nextButton.hasOwnProperty("show") && !this.player.options.design.style.nextButton.show && (a = g.deleteProperty(a, "nextButton")),
                    this.player.options.design.style.hasOwnProperty("prevButton") && this.player.options.design.style.prevButton.hasOwnProperty("show") && !this.player.options.design.style.prevButton.show && (a = g.deleteProperty(a, "prevButton")),
                    this.player.setStyle(a), this.player.updateDisplay();
                }
                this.model.getOnePreviousItem() && this.model.getCurrentItem().playlistIndex !== this.model.getOnePreviousItem().playlistIndex && this.player.switchSubtitlesIndex(-1),
                this.player.options.beacon.videoId = this.model.getCurrentItem().streamid;
            }, a.prototype.createLoadMediaParameter = function() {
                var a = {
                    title: this.model.getCurrentItem().title,
                    file: this.model.getCurrentItem().url,
                    startTime: 0,
                    advertising: {
                        client: "PLAYLIST_VMAP",
                        tag: this.model.getCurrentItem().adUrl
                    },
                    widevine: {
                        streamId: this.model.getCurrentItem().streamid
                    },
                    autoStart: this.defaultParameter.autoStart,
                    autoRewind: this.defaultParameter.autoRewind
                };
                if (this.model.getOnePreviousItem() || (a.startTime = this.player.options.startTime),
                this.model.getOnePreviousItem() && this.model.getCurrentItem().playlistIndex !== this.model.getOnePreviousItem().playlistIndex && (a.autoStart = !0),
                this.model.changeable(d.playlist) && (a.autoRewind = !1), !this.player.options.loop && this.playlistMedia.itemChangeType === f.PLABACK_END) {
                    for (var b = this.playlistMedia.getPlaylistData(), c = [], e = 0; e < b.length; e++) c.push(b[e].index);
                    Math.max.apply(null, c) === this.model.getOnePreviousItem().playlistIndex && Math.min.apply(null, c) === this.model.getCurrentItem().playlistIndex && (a.autoStart = !1);
                }
                return a;
            }, a.prototype.proseceBeforeLaodMedia = function() {
                if (this.player.media.canPause() && this.player.pause(), this.player.options.widevine.ticketUrl) {
                    var a = new e(this.player.options.widevine.ticketUrl);
                    a.query.videoid = this.player.options.widevine.streamId, this.player.options.widevine.ticketUrl = String(a);
                }
                this.model.getOnePreviousItem() ? this.model.getCurrentItem().playlistIndex !== this.model.getOnePreviousItem().playlistIndex && this.player.loadAdvertising() : this.player.loadAdvertising();
            }, a.prototype.dispose = function() {
                this.player = null, this.model = null, this.defaultParameter = null;
            }, a;
        }();
        b.exports = h;
    }, {
        "./../../../utils/obj": 109,
        "./../PlaylistItemChangeType": 65,
        "./../playlistVideoType": 75,
        Url: 124
    } ],
    79: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./mediaBase"), f = a("./../option/swfParameter"), g = a("./../utils/obj"), h = a("./../utils/call"), i = a("swfobject"), j = a("../component/componentType"), k = a("../utils/url2"), l = a("../utils/typeOf"), m = a("../utils/dom"), n = a("./../state"), o = (a("./../log/logger"),
        a("./../event/mediaEvent")), p = a("JSON"), q = a("./../language/language"), r = function(a) {
            function b(b) {
                a.call(this, b), this.played = !1, this.swfParameter || (this.swfParameter = new f(b)),
                this.swfParameter.setMap("akamaiMediaAnalyticsConfigPath", [ "akamaiMediaAnalytics", "configPath" ]),
                this.swfParameter.setMap("autoRewind", [ "autoRewind" ]), this.swfParameter.setMap("autoPlay", [ "autoStart" ]),
                this.swfParameter.setMap("bufferTime", [ "bufferTime" ]), this.swfParameter.setMap("contextMenuAbout", [ "contextMenuAbout" ]),
                this.swfParameter.setMap("contextMenuAboutEnable", [ "contextMenuAboutEnable" ]),
                this.swfParameter.setMap("contextMenuAboutName", [ "contextMenuAboutName" ]), this.swfParameter.setMap("contextMenuAboutURL", [ "contextMenuAboutURL" ]),
                this.swfParameter.setMap("contextMenuStatInfo", [ "contextMenuStatInfo" ]), this.swfParameter.setMap("controlBarAutoHide", [ "controlBarAutoHide" ]),
                this.swfParameter.setMap("controlBarAutoHideTimeout", [ "controlBarAutoHideTimeout" ]),
                this.swfParameter.setMap("controlBarFullScreenAutoHide", [ "controlBarFullScreenAutoHide" ]),
                this.swfParameter.setMap("skin", [ "design", "skin" ]), this.swfParameter.setMap("styleUrl", [ "design", "styleUrl" ]),
                this.swfParameter.setMap("tintColor", [ "design", "tintColor" ]), this.swfParameter.setMap("useHardwareDecoder", [ "enableHardwareDecoder" ]),
                this.swfParameter.setMap("enablePlayerShortcut", [ "enablePlayerShortcut" ]), this.swfParameter.setMap("enableStageVideo", [ "enableStageVideo" ]),
                this.swfParameter.setMap("src", [ "file" ]), this.swfParameter.setMap("startTime", [ "startTime" ]),
                this.swfParameter.setMap("loop", [ "loop" ]), this.swfParameter.setMap("muted", [ "mute" ]),
                this.swfParameter.setMap("akamaiMediaAnalyticsPluginPath", [ "plugin", "akamaiMediaAnalytics" ]),
                this.swfParameter.setMap("plugin_hls", [ "plugin", "hls" ]), this.swfParameter.setMap("plugin_widevine", [ "plugin", "widevine" ]),
                this.swfParameter.setMap("plugin_advertisement", [ "plugin", "advertisement" ]),
                this.swfParameter.setMap("googleAnalyticsPlugin", [ "plugin", "googleAnalytics" ]),
                this.swfParameter.setMap("poster", [ "poster" ]), this.swfParameter.setMap("scaleMode", [ "scaleMode" ]),
                this.swfParameter.setMap("playerTitle", [ "title" ]), this.swfParameter.setMap("volume", [ "volume" ]),
                this.swfParameter.setMap("startSubtitle", [ "subtitle", "startSubtitle" ]), this.swfParameter.setMap("thumbnailPreviewWidth", [ "seekPreview", "previewWidth" ]),
                this.swfParameter.setMap("thumbnailPreviewHeight", [ "seekPreview", "previewHeight" ]);
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return !0;
            }, b.prototype.added = function() {
                this.setMedia();
            }, b.prototype.onJSBridge = function(b, c, d, e) {
                switch (void 0 === e && (e = !0), c) {
                  case o.PLAYING:
                  case o.START:
                  case o.BUFFERING:
                    this.played = !0;
                }
                a.prototype.onJSBridge.call(this, b, c, d, e);
            }, b.prototype.embed = function(a) {
                if (void 0 === a && (a = {}), this.player_.getState() !== n.PLAYBACK_ERROR) {
                    this.embeded = !0;
                    var b = this.customFlashvars(this.swfParameter.createParameterAll(!0));
                    b = g.merge(b, a);
                    var c = e.getSwfElementId(this.player_.id), d = {
                        allowScriptAccess: this.player_.options.embed.allowScriptAccess,
                        wmode: this.player_.options.embed.wmode,
                        allowFullScreen: String(this.player_.options.embed.allowFullScreen),
                        bgcolor: "000000"
                    }, f = {
                        name: c
                    }, j = this;
                    return h.call2(function() {
                        m.createAndAppendEl("div", c, j.player_.id), i.embedSWF(j.player_.options.playerSwf, c, j.player_.options.width, j.player_.options.height, "" + j.player_.options.embed.flashVersion, null, b, d, f);
                    }), !0;
                }
            }, b.prototype.loadMedia = function(a) {
                void 0 === a && (a = {});
                var b = this.swfParameter.createParameterOf([ "autoRewind", "autoPlay", "bufferTime", "loop", "playerTitle", "scaleMode", "startTime", "src" ]);
                "live" == this.player_.options.streamType && (b.startTime = -1), b = g.merge(b, a);
                try {
                    return this.swf_.setMedia(b), !0;
                } catch (c) {}
                return !1;
            }, b.prototype.customFlashvars = function(a) {
                if ("live" == this.player_.options.streamType && (a.startTime = -1), a.streamType = "vod" === this.player_.options.streamType ? "recorded" : this.player_.options.streamType,
                a.playerHeader = !!this.player_.options.title, this.player_.options.seekPreview.url && this.player_.options.seekPreview.horizontalCount && this.player_.options.seekPreview.verticalCount) {
                    var b = {
                        url: this.player_.options.seekPreview.url,
                        horizontalCount: this.player_.options.seekPreview.horizontalCount,
                        verticalCount: this.player_.options.seekPreview.verticalCount
                    };
                    a.src_thumbnails = encodeURIComponent(p.stringify(b));
                }
                if (this.player_.options.subtitle.subtitles && this.player_.options.subtitle.subtitles.length > 0) {
                    var c = {
                        subtitles: this.player_.options.subtitle.subtitles,
                        config: {
                            minFontSize: this.player_.options.subtitle.fontSize,
                            maxFontSize: this.player_.options.subtitle.fontSize,
                            textColor: this.player_.options.subtitle.textColor,
                            bgColor: this.player_.options.subtitle.bgColor,
                            bgAlpha: this.player_.options.subtitle.bgAlpha
                        }
                    };
                    a["src_http://kutu.ru/osmf/plugins/subtitles"] = encodeURIComponent(p.stringify(c));
                }
                a.advertisement_YOU_CAN_SKIP_STRING = encodeURIComponent(q.getLanguage(this.player_.options.language, "You can skip this ad in 0")),
                a.advertisement_SKIP_AD_STRING = encodeURIComponent(q.getLanguage(this.player_.options.language, "Skip ad")),
                a.advertisementString = encodeURIComponent(q.getLanguage(this.player_.options.language, "Ad"));
                var d = this.player_.hasChild(j.ADVERTISEMENT);
                return a.autoPlay = d ? !1 : a.autoPlay, a.hasOwnProperty("poster") && (a.poster = d && this.player_.options.autoStart ? "" : a.poster),
                l.isObject(this.player_.options.akamaiMediaAnalytics.customData) && (a.akamaiMediaAnalyticsCustomData = k.deEncode(p.stringify(this.player_.options.akamaiMediaAnalytics.customData))),
                l.isObject(this.player_.options.design.style) && (a.style = k.deEncode(p.stringify(this.player_.options.design.style))),
                a.javascriptCallbackFunction = "ulizaplayer('" + this.player_.id + "').media.onJSBridge",
                this.player_.options.plugin.googleAnalytics && this.player_.options.googleAnalytics.config && (a.googleAnalyticsConfig = this.player_.options.googleAnalytics.config),
                l.isArray(this.player_.options.buttons) && (a.components = k.deEncode(p.stringify(this.player_.options.buttons))),
                a;
            }, b.prototype.createPluginParameter = function(a) {
                throw new Error("createPluginParameter is abstract");
            }, b.prototype.canAdvertisement = function() {
                return this.player_.options.autoStart || this.played;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.swfParameter = null;
            }, b;
        }(e);
        b.exports = r;
    }, {
        "../component/componentType": 54,
        "../utils/dom": 107,
        "../utils/typeOf": 110,
        "../utils/url2": 112,
        "./../event/mediaEvent": 59,
        "./../language/language": 61,
        "./../log/logger": 62,
        "./../option/swfParameter": 98,
        "./../state": 100,
        "./../utils/call": 106,
        "./../utils/obj": 109,
        "./mediaBase": 84,
        JSON: 123,
        swfobject: 1
    } ],
    80: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/componentFactory"), f = a("./defaultMedia"), g = a("./hlsMedia"), h = a("./widevineTicketMedia"), i = a("./widevineTicketUrlMedia"), j = a("./../component/componentFactoryItem"), k = a("./../component/componentType"), l = a("./Playlist/playlistMedia"), m = function(a) {
            function b(b) {
                a.call(this, b), this.addItem(new j("playlist", l.canHandleOptions, function() {
                    return new l(b);
                }, k.MEDIA)), this.addItem(new j("hls", g.canHandleOptions, function() {
                    return new g(b);
                }, k.MEDIA)), this.addItem(new j("widevine_ticket", h.canHandleOptions, function() {
                    return new h(b);
                }, k.MEDIA)), this.addItem(new j("widevine_ticketurl", i.canHandleOptions, function() {
                    return new i(b);
                }, k.MEDIA)), this.addItem(new j("default", f.canHandleOptions, function() {
                    return new f(b);
                }, k.MEDIA));
            }
            return d(b, a), b;
        }(e);
        b.exports = m;
    }, {
        "./../component/componentFactory": 52,
        "./../component/componentFactoryItem": 53,
        "./../component/componentType": 54,
        "./Playlist/playlistMedia": 73,
        "./defaultMedia": 79,
        "./hlsMedia": 83,
        "./widevineTicketMedia": 89,
        "./widevineTicketUrlMedia": 90
    } ],
    81: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.WIDEVINE = 0] = "WIDEVINE", a[a.HLS = 1] = "HLS", a[a.FLASH = 2] = "FLASH",
            a[a.UNKNOWN = 3] = "UNKNOWN";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    82: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.WIDEVINE = "Widevine Adaptive Streaming", a.HLS = "HTTP Live Streaming",
            a.FLASH = "Flash Streaming", a.UNKNOWN = "", a;
        }();
        b.exports = d;
    }, {} ],
    83: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./defaultMedia"), f = a("./../option/swfParameter"), g = a("./../utils/url2"), h = a("./distributionType"), i = function(a) {
            function b(b) {
                a.call(this, b), this.swfParameter || (this.swfParameter = new f(b)), this.distributionType = h.HLS,
                this.swfParameter.setMap("hls_debug", [ "hls", "debug" ]), this.swfParameter.setMap("hls_debug2", [ "hls", "debug2" ]),
                this.swfParameter.setMap("hls_lowbufferlength", [ "hls", "lowBufferLength" ]), this.swfParameter.setMap("hls_maxbufferlength", [ "hls", "maxBufferLength" ]),
                this.swfParameter.setMap("hls_maxbackbufferlength", [ "hls", "maxBackBufferLength" ]),
                this.swfParameter.setMap("hls_startfrombitrate", [ "hls", "startFromBitrate" ]),
                this.swfParameter.setMap("hls_startfromlevel", [ "hls", "startFromLevel" ]), this.swfParameter.setMap("hls_seekfromlevel", [ "hls", "seekFromLevel" ]),
                this.swfParameter.setMap("hls_seekmode", [ "hls", "seekMode" ]), this.swfParameter.setMap("hls_manifestloadmaxretry", [ "hls", "manifestLoadMaxRetry" ]),
                this.swfParameter.setMap("hls_keyloadmaxretry", [ "hls", "keyLoadMaxRetry" ]), this.swfParameter.setMap("hls_fragmentloadmaxretry", [ "hls", "fragmentLoadMaxRetry" ]),
                this.swfParameter.setMap("hls_capleveltostage", [ "hls", "capLevelToStage" ]), this.swfParameter.setMap("hls_maxlevelcappingmode", [ "hls", "maxLevelCappingMode" ]),
                this.swfParameter.setMap("hls_segmentNumEnableLive", [ "hls", "segmentNumEnableLive" ]),
                this.swfParameter.setMap("hls_segmentNumLive", [ "hls", "segmentNumLive" ]), this.swfParameter.setMap("hls_minbufferlength", [ "bufferTime" ]),
                this.swfParameter.setMap("hls_isonekbyte", [ "hls", "isOneKByte" ]);
            }
            return d(b, a), b.canHandleOptions = function(a) {
                var b = g.getExtension(a.file);
                return "M3U8" === b.toUpperCase();
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./../option/swfParameter": 98,
        "./../utils/url2": 112,
        "./defaultMedia": 79,
        "./distributionType": 81
    } ],
    84: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../component/component"), f = a("./../utils/typeof"), g = a("swfobject"), h = a("../utils/dom"), i = a("./../utils/call"), j = a("./distributionType"), k = a("./../event/mediaEvent"), l = (a("./../log/logger"),
        a("./../event/advertisementEvent")), m = a("./../utils/arr"), n = a("./../validate/validateOption"), o = a("./../utils/obj"), p = a("./../state"), q = function(a) {
            function b(c) {
                a.call(this, c), this.swf_ = null, this.loadMediaIntervalFunc_ = null, this.loadMediaIntervalId_ = NaN,
                this.loadingMedia_ = !0, this.currentSecondTime = 0, this.adCurrentSecondTime = 0,
                this.secondDuration = 0, this.embeded = !1, this.distributionType = j.UNKNOWN, this.customOptions = {},
                this.swf_ = h.getEl(b.getSwfElementId(this.player_.id));
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return !1;
            }, b.prototype.onJSBridge = function(a, b, c, d) {
                void 0 === d && (d = !0);
                try {
                    switch (b) {
                      case k.ON_JAVASCRIPT_BRIDGE_CREATED:
                        this.swf_ = h.getEl(a);
                        break;

                      case k.SEEKED:
                        this.currentSecondTime = Math.floor(this.player_.getCurrentTime());
                        break;

                      case k.TIME_CHANGE:
                        var e = Math.floor(c.currentTime * this.player_.getPlaybackRate());
                        this.currentSecondTime !== e && (this.currentSecondTime = e, d && this.trigger(k.CURRENT_SECODE_TIME_CHANGE, {
                            currentSecondTime: this.currentSecondTime
                        }, !1));
                        break;

                      case k.DURATION_CHANGE:
                        var f = Math.floor(c.duration * this.player_.getPlaybackRate());
                        this.secondDuration !== f && (this.secondDuration = f, d && this.trigger(k.SECOND_DURATION_CHANGE, {
                            secondDuration: this.secondDuration
                        }, !1));
                        break;

                      case k.ON_CLICK:
                        return void (d && this.trigger(b, c, !1));
                    }
                    d && this.trigger(b, c);
                } catch (g) {}
            }, b.prototype.onJSBridgeAd = function(a, b, c) {
                try {
                    switch (b) {
                      case l.AD_TIME_CHANGE:
                        var d = Math.floor(c.currentTime);
                        this.adCurrentSecondTime !== d && (this.adCurrentSecondTime = d, c[l.DATA_CURRENT_SECOND_TIME] = d,
                        this.trigger(l.AD_CURRENT_SECODE_TIME_CHANGE, c, !1));
                    }
                    this.trigger(b, c);
                } catch (e) {}
            }, b.prototype.callback = function(b, c) {
                switch (b) {
                  case "onPlayerViewInitialize":
                    this.loadMediaIntervalFunc_ && this.loadMediaIntervalFunc_();
                }
                a.prototype.callback.call(this, b, c);
            }, b.getSwfElementId = function(a) {
                return a + "_player";
            }, b.prototype.setMedia = function(a) {
                void 0 === a && (a = {}), a = o.merge(this.customOptions, a), this.isEmbeddedSwf() ? (this.loadMediaIntervalFunc_ = function() {
                    this.getPlayerViewInitialized() && (this.loadMedia(a), clearInterval(this.loadMediaIntervalId_),
                    this.loadMediaIntervalId_ = NaN, this.loadMediaIntervalFunc_ = null, this.loadingMedia_ = !1);
                }, this.getPlayerViewInitialized() ? this.loadMediaIntervalFunc_() : this.loadMediaIntervalId_ = this.setInterval(this.loadMediaIntervalFunc_, 500)) : (this.player_.media.embeded = !0,
                i.call2(function() {
                    this.embed(a), this.loadingMedia_ = !1;
                }.bind(this)));
            }, b.prototype.customFlashvars = function(a) {
                return a;
            }, b.prototype.isEmbeddedSwf = function() {
                return !!this.swf_ || !!h.getEl(b.getSwfElementId(this.player_.id)) || this.player_.media.embeded;
            }, b.prototype.canPlay = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.canPlay();
                } catch (a) {}
                return !1;
            }, b.prototype.canPause = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.canPause();
                } catch (a) {}
                return !1;
            }, b.prototype.canSeek = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.canSeek();
                } catch (a) {}
                return !1;
            }, b.prototype.getPlayerWidth = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.width;
                } catch (a) {}
                return 0;
            }, b.prototype.getPlayerHeight = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.height;
                } catch (a) {}
                return 0;
            }, b.prototype.setPlayerWidth = function(a) {
                return this.swf_ && n._verifySize(a) ? void (this.swf_.width = a) : !1;
            }, b.prototype.setPlayerHeight = function(a) {
                return this.swf_ && n._verifySize(a) ? void (this.swf_.height = a) : !1;
            }, b.prototype.embed = function(a) {
                throw void 0 === a && (a = {}), new Error("embed is abstract");
            }, b.prototype.getBufferTime = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getBufferTime();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getCurrentTime = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getCurrentTime();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getCurrentSecondTime = function() {
                return this.currentSecondTime;
            }, b.prototype.getDuration = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getDuration();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getSecondDuration = function() {
                return this.secondDuration;
            }, b.prototype.getFullscreen = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.getFullscreen();
                } catch (a) {}
                return !1;
            }, b.prototype.getMediaHeight = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getMediaHeight();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getMediaWidth = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getMediaWidth();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getMute = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.getMuted();
                } catch (a) {}
                return !1;
            }, b.prototype.getPlaybackRate = function() {
                return 1;
            }, b.prototype.getPlayerViewInitialized = function() {
                if (this.swf_) try {
                    return this.swf_.getPlayerViewInitialized();
                } catch (a) {}
                return !1;
            }, b.prototype.getPlayingDistributionType = function() {
                return this.distributionType;
            }, b.prototype.getPosition = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getPosition();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.getState = function() {
                if (this.loadingMedia_) return p.CHANGING_MEDIA;
                if (this.jsBridgeAvailable()) try {
                    var a = new RegExp("buffering|loading|paused|playbackError|playing|ready|uninitialized"), b = this.swf_.getState();
                    return a.test(b) ? b : "uninitialized";
                } catch (c) {}
                return p.UNINITIALIZED;
            }, b.prototype.getVolume = function() {
                if (this.jsBridgeAvailable()) try {
                    var a = this.swf_.getVolume();
                    return f.isNumber(a) ? a : 0;
                } catch (b) {}
                return 0;
            }, b.prototype.jsBridgeAvailable = function() {
                return !!this.swf_;
            }, b.prototype.loadMedia = function(a) {
                throw void 0 === a && (a = {}), new Error("loadMedia is abstract");
            }, b.prototype.pause = function() {
                if (this.jsBridgeAvailable() && this.swf_.canPause()) try {
                    return this.swf_.pause(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.play = function() {
                if (this.jsBridgeAvailable() && this.swf_.canPlay()) try {
                    return this.swf_.play2(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.remove = function() {
                if (this.isEmbeddedSwf()) try {
                    return h.getEl(b.getSwfElementId(this.player_.id)).style.display = "none", g.removeSWF(b.getSwfElementId(this.player_.id)),
                    this.swf_ = null, !0;
                } catch (a) {}
                return !1;
            }, b.prototype.seek = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.seek(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setBufferTime = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setBufferTime(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setLoop = function(a) {
                if (!f.isBoolean(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setLoop(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setMediaPlayerContainerVisible = function(a) {
                if (!f.isBoolean(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setMediaPlayerContainerVisible(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setMediaPlayerState = function(a) {
                if (!f.isString(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setMediaPlayerState(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setMediaResourceURL = function(a) {
                if (!f.isString(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setMediaResourceURL(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setMute = function(a) {
                if (!f.isBoolean(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setMuted(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setPlayerTitle = function(a) {
                if (!f.isObject(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setPlayerTitle(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setPoster = function(a) {
                if (!f.isObject(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setPoster(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setPosterVisible = function(a) {
                if (!f.isBoolean(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setPoster({
                        visible: a
                    }), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setVolume = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setVolume(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.stop = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.stop2(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.setSpeed = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setSpeed(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.setAngle = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setAngle(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.closeAd = function(a) {
                if (f.isString(a) && this.jsBridgeAvailable()) try {
                    return this.swf_.closeAd(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.closeAllAd = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.closeAllAd(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.deleteScrubQueueAt = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.deleteScrubQueue({
                        method: "DELETE_AT",
                        time: a
                    }), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.deleteScrubQueueUntil = function(a) {
                if (!f.isNumber(a)) return !1;
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.deleteScrubQueue({
                        method: "DELETE_UNTIL",
                        time: a
                    }), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.deleteScrubQueueAll = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.deleteScrubQueue({
                        method: "DELETE_ALL"
                    }), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.displayAd = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.displayAd(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.playAd = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.playAd(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.pauseAd = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.pauseAd(), !0;
                } catch (a) {}
                return !1;
            }, b.prototype.setScrubQueue = function(a) {
                return this.jsBridgeAvailable() ? (a = m.unique(a, function(a) {
                    return a;
                }), this.swf_.setScrubQueue({
                    times: a
                }), !0) : !1;
            }, b.prototype.canAdvertisement = function() {
                return !0;
            }, b.prototype.getPlayingAdData = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.getPlaybackAdData();
                } catch (a) {}
                return [];
            }, b.prototype.setAkamaiMediaAnalyticsCustomData = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setAkamaiMediaAnalyticsCustomData(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.getDefaultStyle = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.getDefaultStyle();
                } catch (a) {}
                return null;
            }, b.prototype.getStyle = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.getStyle();
                } catch (a) {}
                return null;
            }, b.prototype.setStyle = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.setStyle(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.updateDisplay = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.updateDisplay(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.addComponent = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.addComponent(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.removeComponent = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.removeComponent(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.getPlaylistData = function() {
                return [];
            }, b.prototype.changePlaylist = function(a) {
                return !1;
            }, b.prototype.getPlayingPlaylistIndex = function() {
                return 0;
            }, b.prototype.getPlaybackRateData = function() {
                return [];
            }, b.prototype.changePlaybackRate = function(a) {
                return !1;
            }, b.prototype.getAngleData = function() {
                return [];
            }, b.prototype.changeAngle = function(a) {
                return !1;
            }, b.prototype.getPlayingAngleIndex = function() {
                return -1;
            }, b.prototype.setPlaylistButtonVisible = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return !0;
                } catch (b) {}
                return !1;
            }, b.prototype.currentSubtitlesStreamIndex = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.currentSubtitlesStreamIndex();
                } catch (a) {}
                return NaN;
            }, b.prototype.numSubtitlesStreams = function() {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.numSubtitlesStreams();
                } catch (a) {}
                return NaN;
            }, b.prototype.switchSubtitlesIndex = function(a) {
                if (this.jsBridgeAvailable()) try {
                    return this.swf_.switchSubtitlesIndex(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.getPlayingContentURL = function() {
                return this.player_.options.file;
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this), this.swf_ = null, clearInterval(this.loadMediaIntervalId_),
                this.loadMediaIntervalId_ = NaN, this.loadMediaIntervalFunc_ = null, this.customOptions = null;
            }, b;
        }(e);
        b.exports = q;
    }, {
        "../utils/dom": 107,
        "./../component/component": 51,
        "./../event/advertisementEvent": 57,
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./../state": 100,
        "./../utils/arr": 105,
        "./../utils/call": 106,
        "./../utils/obj": 109,
        "./../utils/typeof": 111,
        "./../validate/validateOption": 119,
        "./distributionType": 81,
        swfobject: 1
    } ],
    85: [ function(a, b, c) {
        arguments[4][71][0].apply(c, arguments);
    }, {
        dup: 71
    } ],
    86: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.UNAUTHORIZED = {
                id: 1,
                message: "Unauthorized"
            }, a.LOADING_FAILED = {
                id: 2,
                message: "Loading failed"
            }, a.REQUEST_TIMEOUT = {
                id: 3,
                message: "Request timeout"
            }, a.INVALID_DATA = {
                id: 4,
                message: "Invalid data"
            }, a.EMPTY_DATA = {
                id: 5,
                message: "Empty data"
            }, a;
        }();
        b.exports = d;
    }, {} ],
    87: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.getWidevineID = function() {
                return "" + a._widevineID;
            }, a.setWidevineID = function(b) {
                a._widevineID = +b;
            }, a.increase = function() {
                a._widevineID++;
            }, a._widevineID = 0, a;
        }();
        b.exports = d;
    }, {} ],
    88: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./defaultMedia"), f = a("./../option/swfParameter"), g = a("./../utils/url2"), h = a("./widevineId"), i = a("widevineOptimizer"), j = a("./../utils/call"), k = a("./distributionType"), l = a("./../event/mediaEvent"), m = a("./../utils/typeof"), n = function(a) {
            function b(b) {
                if (a.call(this, b), this.seeking = !1, this.inCompleteProcess = !1, this.isVistaIe_ = !1,
                this.seekedTime_ = NaN, navigator.userAgent.match(/Win(dows )?NT 6\.0/)) {
                    var c = window.navigator.userAgent.toLowerCase();
                    (c.match(/(msie|MSIE)/) || c.match(/(T|t)rident/)) && (this.isVistaIe_ = !0);
                }
                this.distributionType = k.WIDEVINE, this.swfParameter || (this.swfParameter = new f(b)),
                h.increase(), this.widevineId = h.getWidevineID(), j.call2(function() {
                    i.widevine.init(this.widevineId) || this.onNotFoundWidevinePlugin_();
                }.bind(this));
            }
            return d(b, a), b.prototype.setWvParam = function() {
                i.WVSetStreamId(this.widevineId, this.player_.options.widevine.streamId), i.WVSetEmmURL(this.widevineId, g.decode(this.player_.options.widevine.emmUrl)),
                i.WVSetPortal(this.widevineId, this.player_.options.widevine.portal), i.WVSetClientIp(this.widevineId, encodeURIComponent(this.player_.media.getPlayingContentURL()));
            }, b.canHandleOptions = function(a) {
                return !1;
            }, b.prototype.onJSBridge = function(b, c, d, e) {
                switch (void 0 === e && (e = !0), c) {
                  case l.READY:
                    this.inCompleteProcess = !1;
                    break;

                  case l.SEEKING:
                    this.seeking = !0;
                    break;

                  case l.SEEKED:
                    this.seeking = !1, this.inCompleteProcess = !1, this.isVistaIe_ && (this.seekedTime_ = d.time);
                    break;

                  case l.COMPLETE:
                    this.inCompleteProcess = !0;
                    break;

                  case l.TIME_CHANGE:
                    if (m.isNaN(this.seekedTime_)) break;
                    this.seekedTime_ - 5 < d.currentTime && d.currentTime < this.seekedTime_ + 5 && (this.seekedTime_ = NaN);
                }
                a.prototype.onJSBridge.call(this, b, c, d, e);
            }, b.prototype.onNotFoundWidevinePlugin_ = function() {
                this.trigger(l.WIDEVINE_NOT_FOUND_PLUGIN), this.player_.options.widevine.pluginDownload && this.player_.options.widevine.pluginDownload && (location.href = decodeURIComponent(this.player_.options.widevine.pluginDownload));
            }, b.prototype.added = function() {}, b.prototype.createPluginParameter = function(a) {
                var b = {}, c = a ? "widevine_" : "";
                return b[c + "onEmmSuccess"] = "ulizaplayer('" + this.player_.id + "').media.onEmmSuccess",
                b[c + "onEmmFailed"] = "ulizaplayer('" + this.player_.id + "').media.onEmmFailed",
                b[c + "id"] = "" + this.widevineId, b;
            }, b.prototype.canAdvertisement = function() {
                return a.prototype.canAdvertisement.call(this) && !this.seeking && !(this.player_.options.autoRewind && this.inCompleteProcess);
            }, b.prototype.onEmmSuccess = function() {
                this.trigger(l.ON_EMM_SUCCESS);
            }, b.prototype.onEmmFailed = function(a) {
                a.id = a.id.replace("WVMK:", ""), this.trigger(l.ON_EMM_FAILED, a);
            }, b.prototype.dispose = function() {
                a.prototype.dispose.call(this);
                var b = document.getElementById("WidevinePlugin" + this.widevineId + "_wrapper");
                b && document.body.removeChild(b);
            }, b.prototype.getCurrentTime = function() {
                return m.isNaN(this.seekedTime_) ? a.prototype.getCurrentTime.call(this) : this.seekedTime_;
            }, b.prototype.getCurrentSecondTime = function() {
                return m.isNaN(this.seekedTime_) ? a.prototype.getCurrentSecondTime.call(this) : Math.floor(this.seekedTime_ * this.player_.getPlaybackRate());
            }, b;
        }(e);
        b.exports = n;
    }, {
        "./../event/mediaEvent": 59,
        "./../option/swfParameter": 98,
        "./../utils/call": 106,
        "./../utils/typeof": 111,
        "./../utils/url2": 112,
        "./defaultMedia": 79,
        "./distributionType": 81,
        "./widevineId": 87,
        widevineOptimizer: 122
    } ],
    89: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./widevineMedia"), f = a("./../utils/url2"), g = a("widevineOptimizer"), h = a("./../utils/call"), i = function(a) {
            function b(b) {
                a.call(this, b), h.call2(function() {
                    this.setWvParam(), g.WVSetTicket(this.widevineId, this.player_.options.widevine.ticket),
                    this.setMedia(this.createPluginParameter(!0));
                }.bind(this));
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return "WVM" === f.getExtension(a.file).toUpperCase() && !!a.widevine.emmUrl && !!a.widevine.ticket;
            }, b;
        }(e);
        b.exports = i;
    }, {
        "./../utils/call": 106,
        "./../utils/url2": 112,
        "./widevineMedia": 88,
        widevineOptimizer: 122
    } ],
    90: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./widevineMedia"), f = a("./../utils/url2"), g = a("./../utils/xhr"), h = a("widevineOptimizer"), i = a("./../utils/call"), j = (a("./../log/logger"),
        a("./../event/mediaEvent")), k = a("./wvTicketUrlState"), l = function(a) {
            function b(b) {
                a.call(this, b);
            }
            return d(b, a), b.prototype.added = function() {
                this.isEmbeddedSwf() ? this.setWvLoadState(k.embedded) : (this.setWvLoadState(k.embedded),
                this.setMedia({
                    src: ""
                })), i.call2(function() {
                    this.loadWidevine_();
                }.bind(this)), a.prototype.added.call(this);
            }, b.prototype.callback = function(b, c) {
                switch (b) {
                  case j.ON_PLAYER_VIEW_INITIALIZE:
                    this.loadWidevine_();
                    break;

                  case j.ON_CLICK:
                    "playPause" === c.component && this.onPlay();
                }
                a.prototype.callback.call(this, b, c);
            }, b.canHandleOptions = function(a) {
                return "WVM" === f.getExtension(a.file).toUpperCase() && !!a.widevine.emmUrl && !!a.widevine.ticketUrl;
            }, b.prototype.loadWidevine_ = function() {
                this.loadState_ !== k.playStated && this.jsBridgeAvailable() && this.loadState_ === k.embedded && (this.player_.options.autoStart ? (this.setWvLoadState(k.playStated),
                this.loadTicket_(function(a) {
                    a || (this.setWvParam(), this.setMedia({
                        metaData: this.createPluginParameter(!1)
                    }));
                }.bind(this))) : this.setMediaPlayerState("ready") && this.setWvLoadState(k.readyed));
            }, b.prototype.onPlay = function() {
                this.loadState_ !== k.playStated && this.jsBridgeAvailable() && this.loadState_ === k.readyed && (this.setWvLoadState(k.playStated),
                this.setMediaPlayerState("uninitialized"), this.setPosterVisible(!1), this.player_.options.autoStart = !0,
                this.loadTicket_(function(a) {
                    a || (this.setWvParam(), this.setMedia({
                        metaData: this.createPluginParameter(!1)
                    }));
                }.bind(this)));
            }, b.prototype.loadTicket_ = function(a) {
                g({
                    uri: decodeURIComponent(this.player_.options.widevine.ticketUrl),
                    method: "GET",
                    responseType: "text"
                }, function(b, c, d) {
                    if (!b && d && 32 == d.length ? h.WVSetTicket(this.widevineId, d) : b = !0, b) {
                        var e = {};
                        c.status && (e.responseStatus = c.status), d && (e.responseBody = d), this.trigger(j.WIDEVINE_TICKET_FAILED, e);
                    }
                    a(b);
                }.bind(this));
            }, b.prototype.setWvLoadState = function(a) {
                this.loadState_ = a, this.trigger(j.WV_TICKETURL_STATE_CHANGE, {
                    state: this.loadState_
                }, !1);
            }, b.prototype.canAdvertisement = function() {
                return a.prototype.canAdvertisement.call(this) && this.loadState_ === k.playStated;
            }, b.prototype.play = function() {
                return this.loadState_ === k.playStated ? a.prototype.play.call(this) : (this.onPlay(),
                !1);
            }, b;
        }(e);
        b.exports = l;
    }, {
        "./../event/mediaEvent": 59,
        "./../log/logger": 62,
        "./../utils/call": 106,
        "./../utils/url2": 112,
        "./../utils/xhr": 113,
        "./widevineMedia": 88,
        "./wvTicketUrlState": 91,
        widevineOptimizer: 122
    } ],
    91: [ function(a, b, c) {
        var d;
        !function(a) {
            a[a.idle = 0] = "idle", a[a.embedded = 1] = "embedded", a[a.readyed = 2] = "readyed",
            a[a.playStated = 3] = "playStated";
        }(d || (d = {})), b.exports = d;
    }, {} ],
    92: [ function(a, b, c) {
        var d = {
            advertising: {
                adQueue: !0,
                nonLinear: {
                    bottom: 50,
                    closable: !0,
                    horizontalAlign: "center"
                },
                enableMidrollRepeatPlay: !1
            },
            autoRewind: !0,
            autoStart: !0,
            beacon: {
                playingBeaconInterval: 15
            },
            bufferTime: 4,
            contextMenuAbout: !0,
            contextMenuAboutEnable: !0,
            contextMenuAboutName: "ULIZA Player (PC) v1.8",
            contextMenuAboutURL: "http://suvt.co.jp",
            controlBarAutoHide: !0,
            controlBarAutoHideTimeout: 5,
            controlBarFullScreenAutoHide: !0,
            design: {
                skin: "FORMAL"
            },
            embed: {
                allowFullScreen: !0,
                allowScriptAccess: "always",
                flashVersion: 12,
                wmode: "opaque"
            },
            enableHardwareDecoder: !1,
            enablePlayerShortcut: !0,
            enableStageVideo: !1,
            hls: {
                debug: !1,
                debug2: !1,
                capLevelToStage: !1,
                fragmentLoadMaxRetry: 10,
                keyLoadMaxRetry: 10,
                lowBufferLength: .5,
                manifestLoadMaxRetry: 10,
                maxBackBufferLength: 30,
                maxBufferLength: 30,
                maxLevelCappingMode: "downscale",
                seekFromLevel: 1,
                seekMode: "ACCURATE",
                segmentNumEnableLive: 5,
                segmentNumLive: 3,
                startFromBitrate: -1,
                startFromLevel: 1,
                isOneKByte: 1e3
            },
            language: "ja",
            loop: !1,
            mute: !1,
            scaleMode: "letterbox",
            startPlaybackRate: 1,
            streamType: "vod",
            volume: 1,
            widevine: {
                portal: "skillup"
            },
            subtitle: {
                fontSize: .035,
                minFontSize: 14,
                maxFontSize: 36,
                textColor: "#DFDFDF",
                bgColor: "#101010",
                bgAlpha: .8
            }
        };
        b.exports = d;
    }, {} ],
    93: [ function(a, b, c) {
        var d = {
            method: "GET",
            timeout: 2e4,
            withCredentials: !1,
            responseType: void 0,
            adaptProtocol: !1
        };
        b.exports = d;
    }, {} ],
    94: [ function(a, b, c) {
        var d = {
            advertising: {
                offsetToGetVast: 5,
                nonlinear: {},
                enableAdPods: !1,
                disablePreroll: !1
            },
            uuid: {
                macro: "ADVERTISINGID",
                uae: "https://ad-api-v01.uliza.jp/uuid.php?type=js&write=1"
            },
            plugin: {
                akamaiMediaAnalytics: "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf"
            },
            file: "",
            height: 360,
            title: "",
            width: 640,
            enableDisplayError: !0,
            jsRequestTimeout: 3e4,
            contextMenuStatInfo: !1,
            beacon: {
                enableAdvertisingId: !0
            },
            design: {
                style: {}
            },
            playlistPrevTime: "end",
            seekPreview: {
                horizontalCount: 10,
                verticalCount: 20,
                previewWidth: 128,
                previewHeight: 72
            }
        };
        b.exports = d;
    }, {} ],
    95: [ function(a, b, c) {
        var d = a("./../utils/typeof"), e = function() {
            function a() {}
            return a._normalize_javascriptCallbackFunction = function(a) {
                return d.isFunction(a) ? [ a ] : a;
            }, a._normalize_width = function(a) {
                return "" + a;
            }, a._normalize_height = function(a) {
                return "" + a;
            }, a._normalize_startTime = function(a) {
                return Math.floor(a);
            }, a._normalize_playlistPrevTime = function(a) {
                return "start" === a ? 0 : "end" === a ? Number.MAX_VALUE : a;
            }, a;
        }();
        b.exports = e;
    }, {
        "./../utils/typeof": 111
    } ],
    96: [ function(a, b, c) {
        var d = a("./options"), e = a("./../utils/typeof"), f = a("./normalizeOptions"), g = function() {
            function a() {}
            return a.build = function(b) {
                return a.mergeObj(new d(), b);
            }, a.merge = function(b, c) {
                return a.mergeObj(b, c);
            }, a.mergeObj = function(b, c, d) {
                void 0 === d && (d = [ "_normalize" ]);
                for (var g in c) {
                    var h = c[g];
                    if (b.hasOwnProperty(g)) if (e.isObject(h) && e.isObject(b[g])) d.push(g), b[g] = a.mergeObj(b[g], h, d),
                    d.pop(); else {
                        var i = d.join("_").concat("_", g);
                        "function" == typeof f[i] ? b[g] = f[i](h) : b[g] = h;
                    }
                }
                return b;
            }, a;
        }();
        b.exports = g;
    }, {
        "./../utils/typeof": 111,
        "./normalizeOptions": 95,
        "./options": 97
    } ],
    97: [ function(a, b, c) {
        var d = function() {
            function a() {
                this.advertising = new e(), this.akamaiMediaAnalytics = new f(), this.autoRewind = void 0,
                this.autoStart = void 0, this.buttons = void 0, this.bufferTime = void 0, this.beacon = new h(),
                this.contextMenuAbout = void 0, this.contextMenuAboutEnable = void 0, this.contextMenuAboutName = void 0,
                this.contextMenuAboutURL = void 0, this.contextMenuStatInfo = void 0, this.controlBarAutoHide = void 0,
                this.controlBarAutoHideTimeout = void 0, this.controlBarFullScreenAutoHide = void 0,
                this.design = new i(), this.embed = new j(), this.enableStageVideo = void 0, this.enableDisplayError = void 0,
                this.enableHardwareDecoder = void 0, this.enablePlayerShortcut = void 0, this.googleAnalytics = new g(),
                this.height = void 0, this.hls = new k(), this.javascriptCallbackFunction = void 0,
                this.loop = void 0, this.language = void 0, this.mute = void 0, this.playerSwf = void 0,
                this.poster = void 0, this.plugin = new m(), this.title = void 0, this.width = void 0,
                this.file = void 0, this.scaleMode = void 0, this.streamType = void 0, this.startTime = void 0,
                this.volume = void 0, this.uuid = new n(), this.subtitle = new o(), this.widevine = new q(),
                this.seekPreview = new p(), this.macro = void 0, this.startPlaylistIndex = void 0,
                this.startPlaybackRate = void 0, this.playlistPrevTime = void 0;
            }
            return a;
        }(), e = function() {
            function a() {
                this.adQueue = void 0, this.companions = void 0, this.client = void 0, this.nonlinear = new l(),
                this.offsetToGetVast = void 0, this.tag = void 0, this.midrollMax = void 0, this.allowResetMidRollStatus = void 0,
                this.enableAdPods = void 0, this.disablePreroll = void 0;
            }
            return a;
        }(), f = function() {
            function a() {
                this.configPath = void 0, this.configPathAdvertising = void 0, this.customData = void 0;
            }
            return a;
        }(), g = function() {
            function a() {
                this.config = void 0;
            }
            return a;
        }(), h = function() {
            function a() {
                this.beaconUrl = void 0, this.playingBeaconInterval = void 0, this.sid = void 0,
                this.videoId = void 0, this.processSendBeacon = void 0;
            }
            return a;
        }(), i = function() {
            function a() {
                this.skin = void 0, this.style = void 0, this.styleUrl = void 0, this.tintColor = void 0;
            }
            return a;
        }(), j = function() {
            function a() {
                this.allowFullScreen = void 0, this.allowScriptAccess = void 0, this.flashVersion = void 0,
                this.useExpressInstall = void 0, this.wmode = void 0;
            }
            return a;
        }(), k = function() {
            function a() {
                this.debug = void 0, this.debug2 = void 0, this.capLevelToStage = void 0, this.fragmentLoadMaxRetry = void 0,
                this.keyLoadMaxRetry = void 0, this.lowBufferLength = void 0, this.manifestLoadMaxRetry = void 0,
                this.maxBackBufferLength = void 0, this.maxBufferLength = void 0, this.maxLevelCappingMode = void 0,
                this.seekFromLevel = void 0, this.seekMode = void 0, this.segmentNumEnableLive = void 0,
                this.segmentNumLive = void 0, this.startFromBitrate = void 0, this.startFromLevel = void 0,
                this.isOneKByte = void 0;
            }
            return a;
        }(), l = function() {
            function a() {
                this.bottom = void 0, this.closable = void 0, this.displayDuration = void 0, this.height = void 0,
                this.horizontalAlign = void 0, this.left = void 0, this.right = void 0, this.top = void 0,
                this.width = void 0, this.x = void 0, this.y = void 0;
            }
            return a;
        }(), m = function() {
            function a() {
                this.widevine = void 0, this.advertisement = void 0, this.hls = void 0, this.akamaiMediaAnalytics = void 0,
                this.googleAnalytics = void 0;
            }
            return a;
        }(), n = function() {
            function a() {
                this.macro = void 0, this.uae = void 0;
            }
            return a;
        }(), o = function() {
            function a() {
                this.subtitles = void 0, this.fontSize = void 0, this.textColor = void 0, this.bgColor = void 0,
                this.bgAlpha = void 0, this.startSubtitle = void 0;
            }
            return a;
        }(), p = function() {
            function a() {
                this.url = void 0, this.horizontalCount = void 0, this.verticalCount = void 0, this.previewWidth = void 0,
                this.previewHeight = void 0;
            }
            return a;
        }(), q = function() {
            function a() {
                this.emmUrl = void 0, this.id = void 0, this.pluginDownload = void 0, this.portal = void 0,
                this.streamId = void 0, this.ticketUrl = void 0, this.ticket = void 0;
            }
            return a;
        }();
        b.exports = d;
    }, {} ],
    98: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../utils/obj"), f = a("./../component/component"), g = a("./../utils/url2"), h = a("./../utils/typeof"), i = function(a) {
            function b() {
                a.apply(this, arguments), this.map_ = {};
            }
            return d(b, a), b.prototype.setMap = function(a, b) {
                return a && b ? (this.map_[a] = b, this.map_) : this.map_;
            }, b.prototype.getMap = function(a) {
                return a ? this.map_[a] : null;
            }, b.prototype.clearMap = function(a) {
                a && this.map_.hasOwnProperty(a) && e.deleteProperty(this.map_, a);
            }, b.prototype.createParameterAll = function(a) {
                void 0 === a && (a = !1);
                for (var b = {}, c = Object.keys(this.map_), d = 0; d < c.length; d++) {
                    var e = c[d], f = this.getOption_(e);
                    void 0 !== f && (a && h.isString(f) ? b[e] = g.deEncode(f) : b[e] = f);
                }
                return b;
            }, b.prototype.createParameterOf = function(a, b) {
                void 0 === b && (b = !1);
                for (var c = {}, d = 0; d < a.length; d++) {
                    var e = a[d];
                    if (this.map_.hasOwnProperty(e)) {
                        var f = this.getOption_(e);
                        void 0 !== f && (b && h.isString(f) ? c[e] = g.deEncode(f) : c[e] = f);
                    }
                }
                return c;
            }, b.prototype.getOption_ = function(a) {
                for (var b = this.map_[a], c = this.player_.options, d = 0; d < this.map_[a].length; d++) c = c[b[d]];
                return c;
            }, b;
        }(f);
        b.exports = i;
    }, {
        "./../component/component": 51,
        "./../utils/obj": 109,
        "./../utils/typeof": 111,
        "./../utils/url2": 112
    } ],
    99: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./media/mediaBase"), g = a("./component/componentType"), h = a("./component/defaultComponentFactory"), i = a("./state"), j = a("./utils/obj"), k = a("./option/defaultOptions"), l = a("./option/implicitDefaultOptions"), m = a("./validate/validateOption"), n = a("./media/distributionType"), o = a("./media/distributionTypeLabel"), p = (a("./log/logger"),
        a("./option/optionDrector")), q = a("./utils/typeof"), r = a("./event/mediaEvent"), s = a("swfobject"), t = function(a) {
            function b(c) {
                a.call(this, null), this.options = null, this.error_ = !1, b.players[c] = this,
                this.id = c, new f(this), this.addChild(g.COMPONENT_FACOTRY, new h(this));
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return void 0 != a.playerSwf;
            }, b.prototype.rootCallback = function(a, b, c) {
                if (this.callback(a, b), c && q.isArray(this.options.javascriptCallbackFunction)) for (var d = 0; d < this.options.javascriptCallbackFunction.length; d++) try {
                    this.options.javascriptCallbackFunction[d](this.id, a, b);
                } catch (e) {}
            }, b.prototype.callback = function(b, c) {
                a.prototype.callback.call(this, b, c);
            }, b.prototype.jsBridgeAvailable = function() {
                try {
                    return this.media.jsBridgeAvailable();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.remove = function() {
                try {
                    if (this.getState() !== i.UN_SETUP) for (var a in b.players) if (this.id === b.players[a].id) return this.media.remove(),
                    b.players = j.deleteProperty(b.players, this.id), !0;
                } catch (c) {}
                return !1;
            }, b.prototype.setup = function(a) {
                try {
                    if (this.getState() !== i.UN_SETUP) return !1;
                    this.options = p.build(j.merge(k, l, m.validate(a)));
                    for (var c = this.getChild(g.COMPONENT_FACOTRY), d = [ g.UUID, g.MACRO, g.AKAMAI_MEDIA_ANALYTICS, g.MEDIA_FACTORY, g.ERROR, g.BEACON, g.ADVERTISEMENT, g.ADDCOMPONENT, g.SUBTITLE ], e = 0; e < d.length; e++) {
                        var f = c.createComponent(this.options, d[e]);
                        f && this.addChild(d[e], f);
                    }
                    return b.canHandleOptions(this.options) ? (s.getFlashPlayerVersion().major < 12 && this.trigger(r.NOT_FOUND_FLASHPLAYER),
                    this.loadMedia()) : (this.trigger(r.FAILED_CONFIGURATION), !1);
                } catch (h) {
                    return !1;
                }
            }, b.prototype.getSwfId = function() {
                return f.getSwfElementId(this.id);
            }, b.prototype.loadMedia = function(a) {
                if (!this.hasChild(g.MEDIA_FACTORY)) return !1;
                a && p.merge(this.player_.options, m.validate(a));
                try {
                    if (this.media) {
                        if (this.media.getState() === i.CHANGING_MEDIA) return !1;
                        this.removeChild(g.MEDIA), this.media = null;
                    }
                    var b = this.getChild(g.MEDIA_FACTORY);
                    return this.media = b.createComponent(this.options, g.MEDIA), this.addChild(g.MEDIA, this.media),
                    !0;
                } catch (c) {}
                return !1;
            }, b.prototype.getCurrentTime = function() {
                try {
                    return this.media.getCurrentTime() * this.getPlaybackRate();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.getDuration = function() {
                try {
                    return this.media.getDuration() * this.getPlaybackRate();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.getState = function() {
                try {
                    return this.error_ ? i.PLAYBACK_ERROR : this.options ? this.media ? this.media.getState() : i.UNINITIALIZED : i.UN_SETUP;
                } catch (a) {
                    return i.UN_SETUP;
                }
            }, b.prototype.pause = function() {
                try {
                    return this.media.pause();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.play = function() {
                try {
                    return this.media.play();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.seek = function(a) {
                try {
                    return this.media.seek(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.stop = function() {
                try {
                    return this.media.stop();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.getPlayingDistributionType = function() {
                try {
                    switch (this.media.getPlayingDistributionType()) {
                      case n.WIDEVINE:
                        return o.WIDEVINE;

                      case n.HLS:
                        return o.HLS;

                      case n.FLASH:
                        return o.FLASH;

                      default:
                        return o.UNKNOWN;
                    }
                } catch (a) {
                    return "";
                }
            }, b.prototype.getMute = function() {
                try {
                    return this.media.getMute();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.getVolume = function() {
                try {
                    return this.media.getVolume();
                } catch (a) {
                    return NaN;
                }
            }, b.prototype.setMute = function(a) {
                try {
                    return this.media.setMute(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.setVolume = function(a) {
                try {
                    return this.media.setVolume(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.addButton = function(a) {
                try {
                    return this.getChild(g.ADDCOMPONENT).addComponent(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.removeButton = function(a) {
                try {
                    return this.getChild(g.ADDCOMPONENT).removeComponent(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.removeAllButton = function() {
                try {
                    return this.getChild(g.ADDCOMPONENT).removeAllComponent();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.getButtonInfo = function() {
                try {
                    return this.getChild(g.ADDCOMPONENT).getComponentInfo();
                } catch (a) {
                    return null;
                }
            }, b.prototype.getMediaWidth = function() {
                try {
                    return this.media.getMediaWidth();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.getMediaHeight = function() {
                try {
                    return this.media.getMediaHeight();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.getPlayerWidth = function() {
                try {
                    return this.media.getPlayerWidth();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.getPlayerHeight = function() {
                try {
                    return this.media.getPlayerHeight();
                } catch (a) {
                    return 0;
                }
            }, b.prototype.setPlayerWidth = function(a) {
                try {
                    return this.media.setPlayerWidth(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.setPlayerHeight = function(a) {
                try {
                    return this.media.setPlayerHeight(a);
                } catch (b) {
                    return !1;
                }
            }, b.prototype.getMacro = function() {
                try {
                    return this.getChild(g.MACRO).getMacro();
                } catch (a) {
                    return {};
                }
            }, b.prototype.replaceByMacro = function(a) {
                try {
                    return this.getChild(g.MACRO).replaceByMacro(a);
                } catch (b) {
                    return null;
                }
            }, b.prototype.setStyle = function(a) {
                try {
                    return this.media.setStyle(a);
                } catch (b) {}
                return !1;
            }, b.prototype.getStyle = function() {
                try {
                    return this.media.getStyle();
                } catch (a) {}
                return null;
            }, b.prototype.updateDisplay = function(a) {
                void 0 === a && (a = null);
                try {
                    return this.media.updateDisplay(a);
                } catch (b) {}
                return !1;
            }, b.prototype.getPlaylistData = function() {
                try {
                    return this.media.getPlaylistData();
                } catch (a) {}
                return [];
            }, b.prototype.changePlaylistIndex = function(a) {
                try {
                    return this.media.changePlaylist(a);
                } catch (b) {}
                return !1;
            }, b.prototype.getPlayingPlaylistIndex = function() {
                try {
                    return this.media.getPlayingPlaylistIndex();
                } catch (a) {}
                return 0;
            }, b.prototype.getPlaybackRateData = function() {
                try {
                    return this.media.getPlaybackRateData();
                } catch (a) {}
                return [];
            }, b.prototype.changePlaybackRate = function(a) {
                try {
                    return this.media.changePlaybackRate(a);
                } catch (b) {}
                return !1;
            }, b.prototype.getPlaybackRate = function() {
                try {
                    return this.media.getPlaybackRate();
                } catch (a) {
                    return 1;
                }
            }, b.prototype.getAngleData = function() {
                try {
                    return this.media.getAngleData();
                } catch (a) {}
                return [];
            }, b.prototype.changeAngle = function(a) {
                try {
                    return this.media.changeAngle(a);
                } catch (b) {}
                return !1;
            }, b.prototype.getPlayingAngleIndex = function() {
                try {
                    return this.media.getPlayingAngleIndex();
                } catch (a) {}
                return 0;
            }, b.prototype.currentSubtitlesStreamIndex = function() {
                try {
                    return this.media.currentSubtitlesStreamIndex();
                } catch (a) {}
                return NaN;
            }, b.prototype.numSubtitlesStreams = function() {
                try {
                    return this.media.numSubtitlesStreams();
                } catch (a) {}
                return NaN;
            }, b.prototype.switchSubtitlesIndex = function(a) {
                try {
                    return this.media.switchSubtitlesIndex(a), !0;
                } catch (b) {}
                return !1;
            }, b.prototype.getAdvertisingData = function() {
                try {
                    return this.getChild(g.ADVERTISEMENT).getAdvertisingData();
                } catch (a) {}
                return [];
            }, b.prototype.loadAdvertising = function(a) {
                a && p.merge(this.player_.options, m.validate(a));
                try {
                    this.hasChild(g.ADVERTISEMENT) && this.removeChild(g.ADVERTISEMENT);
                    var b = this.getChild(g.COMPONENT_FACOTRY), c = b.createComponent(this.options, g.ADVERTISEMENT);
                    return c && this.addChild(g.ADVERTISEMENT, c), !0;
                } catch (d) {}
                return !1;
            }, b.prototype.pauseAd = function() {
                try {
                    return this.media.pauseAd();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.playAd = function() {
                try {
                    return this.media.playAd();
                } catch (a) {
                    return !1;
                }
            }, b.prototype.getUUID = function(a) {
                try {
                    return this.getChild(g.UUID).getUUID(a);
                } catch (b) {
                    return null;
                }
            }, b.players = {}, b;
        }(e);
        b.exports = t;
    }, {
        "./component/component": 51,
        "./component/componentType": 54,
        "./component/defaultComponentFactory": 55,
        "./event/mediaEvent": 59,
        "./log/logger": 62,
        "./media/distributionType": 81,
        "./media/distributionTypeLabel": 82,
        "./media/mediaBase": 84,
        "./option/defaultOptions": 92,
        "./option/implicitDefaultOptions": 94,
        "./option/optionDrector": 96,
        "./state": 100,
        "./utils/obj": 109,
        "./utils/typeof": 111,
        "./validate/validateOption": 119,
        swfobject: 1
    } ],
    100: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.UN_SETUP = "unsetup", a.BUFFERING = "buffering", a.LOADING = "loading",
            a.PAUSED = "paused", a.PLAYBACK_ERROR = "playbackError", a.PLAYING = "playing",
            a.READY = "ready", a.UNINITIALIZED = "uninitialized", a.CHANGING_MEDIA = "changingMedia",
            a;
        }();
        b.exports = d;
    }, {} ],
    101: [ function(a, b, c) {
        (function(a) {
            (function(a, b, c, d, e) {
                var f = function() {
                    var a = document.createElement("style");
                    a.setAttribute("type", "text/css");
                    var b = ".ulizaplayer_error_div{text-align:center;background-color:#000}.ulizaplayer_error_div_middle{display:inline-block;*display:inline;*zoom:1;height:100%;width:0;vertical-align:middle}.ulizaplayer_error_div_message{display:inline-block;*display:inline;*zoom:1;color:#FFF;font-size:12px;text-align:left}";
                    try {
                        a.innerHTML = b;
                    } catch (c) {
                        a.styleSheet.cssText = b;
                    }
                    document.getElementsByTagName("head")[0].appendChild(a);
                };
                e("undefined" != typeof f ? f : window.stylesheet);
            }).call(a, void 0, void 0, void 0, void 0, function(a) {
                b.exports = a;
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ],
    102: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./component/component"), f = a("./validate/validateSubtitle"), g = a("./utils/typeof"), h = function(a) {
            function b(b) {
                if (a.call(this, b), g.isString(this.player_.options.subtitle.textColor) && (this.player_.options.subtitle.textColor = this.player_.options.subtitle.textColor.replace("#", "0x")),
                g.isString(this.player_.options.subtitle.bgColor) && (this.player_.options.subtitle.bgColor = this.player_.options.subtitle.bgColor.replace("#", "0x")),
                this.player_.options.subtitle.subtitles) {
                    for (var c = [], d = 0; d < this.player_.options.subtitle.subtitles.length; d++) {
                        var e = f.validate(this.player_.options.subtitle.subtitles[d]);
                        e.hasOwnProperty("src") && e.hasOwnProperty("label") && c.push(e);
                    }
                    this.player_.options.subtitle.subtitles = c;
                }
            }
            return d(b, a), b.canHandleOptions = function(a) {
                return !!a.subtitle.subtitles;
            }, b;
        }(e);
        b.exports = h;
    }, {
        "./component/component": 51,
        "./utils/typeof": 111,
        "./validate/validateSubtitle": 120
    } ],
    103: [ function(a, b, c) {
        var d = a("./player"), e = a("./option/defaultOptions"), f = a("./component/componentFactoryItem"), g = a("Url"), h = a("swfobject"), i = a("./language/language"), j = a("./language/defaultStrings"), k = a("stylesheet"), l = a("./utils/call"), m = a("./log/logger"), n = a("./utils/xhr"), o = a("./option/defaultXhrOption"), p = function(a) {
            q && m.debug2([ "[ulizaplayer]" ]);
            try {
                if ("string" == typeof a) return 0 === a.indexOf("#") && (a = a.slice(1)), d.players[a] ? d.players[a] : new d(a);
            } catch (b) {}
            return !1;
        };
        p.globalOptions = e, p.version = "ULIZA Player (PC) version v1.8", p.name = "ULIZA Player (PC)",
        p.Url = g, p.XHR = n, p.swfobject = h, p.setLanguage = i.setLanguage, p.getLanguage = i.getLanguage,
        p.removeLanguage = i.removeLanguage, p.setLanguage("ja", j.ja), p.setLanguage("en", j.en),
        p.defaultXhrOption = o, p.debug = !0, p.debug2 = !1, window.ulizaplayer = p, window.ulizaplayer.ComponentFactoryItem = f;
        var q = !0;
        q && (window.DEBUG = !0), l.call2(function() {
            k();
        }.bind(this)), b.exports = p;
    }, {
        "./component/componentFactoryItem": 53,
        "./language/defaultStrings": 60,
        "./language/language": 61,
        "./log/logger": 62,
        "./option/defaultOptions": 92,
        "./option/defaultXhrOption": 93,
        "./player": 99,
        "./utils/call": 106,
        "./utils/xhr": 113,
        Url: 124,
        stylesheet: 101,
        swfobject: 1
    } ],
    104: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.isBoolean = function(b) {
                return b === !0 || b === !1 || a.isObjectLike(b) && "[object Boolean]" == b.toString() || !1;
            }, a.isArray = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            }, a.isObjectLike = function(a) {
                return a && "object" == typeof a || !1;
            }, a.isDate = function(b) {
                return a.isObjectLike(b) && "[object Date]" == b.toString() || !1;
            }, a.isNaN = function(b) {
                return a.isNumber(b) && b !== b;
            }, a.isNull = function(a) {
                return null === a;
            }, a.isNumber = function(b) {
                return "number" == typeof b || a.isObjectLike(b) && "[object Number]" == b.toString() || !1;
            }, a.isObject = function(a) {
                var b = typeof a;
                return "function" == b || a && "object" == b || !1;
            }, a.isFunction = function(a) {
                var b = typeof a;
                return "function" == b;
            }, a.isUndefined = function(a) {
                return "undefined" == typeof a;
            }, a.isString = function(a) {
                return "string" == typeof a;
            }, a;
        }();
        b.exports = d;
    }, {} ],
    105: [ function(a, b, c) {
        function d(a, b) {
            for (var c = [], d = [], e = 0; e < a.length; e++) {
                var f = b(a[e]);
                -1 === c.indexOf(f) && (c.push(f), d.push(a[e]));
            }
            return d;
        }
        function e(a, b) {
            for (var c = [], d = 0; d < a.length; d++) b(a[d]) && c.push(a[d]);
            return c;
        }
        c.unique = d, c.remove = e;
    }, {} ],
    106: [ function(a, b, c) {
        var d = function() {
            function a() {}
            return a.call2 = function(a) {
                "complete" == document.readyState ? a() : this.addOnload(a);
            }, a.addOnload = function(a) {
                try {
                    window.addEventListener("load", a, !1);
                } catch (b) {
                    window.attachEvent("onload", a);
                }
            }, a;
        }();
        b.exports = d;
    }, {} ],
    107: [ function(a, b, c) {
        function d(a) {
            return "string" == typeof a && 0 === a.indexOf("#") && (a = a.slice(1)), document.getElementById(a);
        }
        function e(a, b, c) {
            var e = document.createElement(a);
            e.id = b, d(c).appendChild(e);
        }
        c.getEl = d, c.createAndAppendEl = e;
    }, {} ],
    108: [ function(a, b, c) {
        function d(a) {
            var b;
            return b = parseFloat(a), b *= 10, b = Math.floor(b), b /= 10;
        }
        c.toFixFloor = d;
    }, {} ],
    109: [ function(a, b, c) {
        function d(a, b) {
            return a.hasOwnProperty(b) && (a[b] = void 0, delete a[b]), a;
        }
        function e() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b - 0] = arguments[b];
            var c = {};
            return a.forEach(function(a) {
                c = f(c, a);
            }), c;
        }
        function f(a, b) {
            a = a || {}, b = b || {};
            for (var c in b) b.hasOwnProperty(c) && (g.isArray(b[c]) || g.isFunction(b[c]) || !g.isObject(b[c]) ? a[c] = b[c] : a[c] = f(a[c], b[c]));
            return a;
        }
        var g = a("./typeof");
        c.deleteProperty = d, c.merge = e;
    }, {
        "./typeof": 111
    } ],
    110: [ function(a, b, c) {
        arguments[4][104][0].apply(c, arguments);
    }, {
        dup: 104
    } ],
    111: [ function(a, b, c) {
        arguments[4][104][0].apply(c, arguments);
    }, {
        dup: 104
    } ],
    112: [ function(a, b, c) {
        var d = a("Url"), e = a("./typeof"), f = function() {
            function a() {}
            return a.deEncode = function(a) {
                if (/^https?:\/\//.test(a)) return encodeURIComponent(a);
                try {
                    return encodeURIComponent(decodeURIComponent(a));
                } catch (b) {
                    return encodeURIComponent(a);
                }
            }, a.decode = function(a) {
                return /^https?:\/\//.test(a) ? a : decodeURIComponent(a);
            }, a.getExtension = function(a) {
                var b = "";
                if (e.isString(a)) {
                    var c = new d(a), f = /(.*)(?:\.([^.]+$))/, g = c.path.match(f);
                    g && g.length > 1 && (b = g[2].toUpperCase());
                }
                return b;
            }, a;
        }();
        b.exports = f;
    }, {
        "./typeof": 111,
        Url: 124
    } ],
    113: [ function(a, b, c) {
        var d = a("./typeof"), e = a("./obj"), f = a("Url"), g = a("./../option/defaultXhrOption"), h = function() {
            function a() {}
            return a.create = function(a, b) {
                var c;
                d.isString(a) && (a = {
                    uri: a
                }), a = e.merge(g, a), b = b || function() {};
                var h = XMLHttpRequest;
                "undefined" == typeof h && (h = function() {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                    } catch (a) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                    } catch (b) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (c) {}
                    throw new Error("This browser does not support XMLHttpRequest.");
                });
                var i = new h();
                i.uri = a.uri;
                var j = new f(a.uri), k = window.location, l = function() {
                    window.clearTimeout(c), b(null, i, i.response || i.responseText);
                }, m = function(a) {
                    window.clearTimeout(c), a && "string" != typeof a || (a = new Error(a)), b(a, i);
                }, n = j.protocol + ":" + j.host !== k.protocol + k.host;
                if (!n || !window.XDomainRequest || "withCredentials" in i) {
                    n && a.adaptProtocol && "https:" === k.protocol && "http" === j.protocol && (a.uri = a.uri.replace(/http/i, "https"));
                    var o = "file" === j.protocol || "file:" === k.protocol;
                    i.onreadystatechange = function() {
                        if (4 === i.readyState) {
                            if (i.timedout) return m("timeout");
                            200 === i.status || o && 0 === i.status ? l() : m();
                        }
                    }, a.timeout && (c = window.setTimeout(function() {
                        4 !== i.readyState && (i.timedout = !0, i.abort());
                    }, a.timeout));
                } else i = new window.XDomainRequest(), i.timeout = a.timeout, i.onload = l, i.onerror = m,
                i.onprogress = function() {}, i.ontimeout = function() {
                    m("timeout");
                }, a.adaptProtocol && j.protocol + ":" !== k.protocol && (a.uri = a.uri.replace(/https?:/i, k.protocol));
                try {
                    i.open(a.method || "GET", a.uri, !0);
                } catch (p) {
                    return m(p);
                }
                a.withCredentials && (i.withCredentials = !0), a.responseType && (i.responseType = a.responseType);
                try {
                    i.send();
                } catch (p) {
                    return m(p);
                }
                return i;
            }, a;
        }();
        b.exports = h.create;
    }, {
        "./../option/defaultXhrOption": 93,
        "./obj": 109,
        "./typeof": 111,
        Url: 124
    } ],
    114: [ function(a, b, c) {
        var d, e = a("./../utils/call"), f = a("Url");
        !function(a) {
            a[a.noLoad = 0] = "noLoad", a[a.loading = 1] = "loading", a[a.loaded = 2] = "loaded",
            a[a.error = 3] = "error";
        }(d || (d = {}));
        var g = function() {
            function a() {}
            return a.getUUID = function(b, c) {
                if (!b || !c) return this.uuid_;
                switch (a.loadState_) {
                  case d.loaded:
                    c(this.error, this.uuid_);
                    break;

                  case d.loading:
                    a.callbacks_.push(c);
                    break;

                  case d.noLoad:
                    a.loadState_ = d.loading, a.callbacks_.push(c);
                    var g = new f(b);
                    g.query.callback = a.UUID_CALLBACK_STRING_;
                    var h = document.createElement("script");
                    h.src = String(g), h.type = "text/javascript", e.call2(function() {
                        document.body.appendChild(h), window.setTimeout(function() {
                            a.uuidCallback("");
                        }, a.UUID_CALLBACK_TIMEOUT_);
                    });
                }
                return this.uuid_;
            }, a.uuidCallback = function(b) {
                if (a.loadState_ !== d.loaded) {
                    a.loadState_ = d.loaded, a.uuid_ = b, a.uuid_ || (this.error = new Error("Failed to fatch uuid from ULIZA AD Exchange."));
                    for (var c = 0; c < a.callbacks_.length; c++) a.callbacks_[c](this.error, b);
                }
            }, a.uuid_ = void 0, a.callbacks_ = [], a.loadState_ = d.noLoad, a.UUID_CALLBACK_STRING_ = "ulizaplayer.uuidCallback",
            a.UUID_CALLBACK_TIMEOUT_ = 3e4, a.error = null, a;
        }();
        b.exports = g;
    }, {
        "./../utils/call": 106,
        Url: 124
    } ],
    115: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./../uuid/uaeUuid"), f = a("./../component/component"), g = a("./../component/componentType"), h = function(a) {
            function b(b) {
                a.call(this, b), ulizaplayer.uuidCallback = e.uuidCallback, this.player_.options.uuid.uae && (this.player_.hasChild(g.ADVERTISEMENT) || this.player_.hasChild(g.BEACON) || this.player_.hasChild(g.AKAMAI_MEDIA_ANALYTICS)) && this.getUUID(function(a, b) {});
            }
            return d(b, a), b.prototype.getUUID = function(a) {
                return e.getUUID(this.player_.options.uuid.uae, a);
            }, b;
        }(f);
        b.exports = h;
    }, {
        "./../component/component": 51,
        "./../component/componentType": 54,
        "./../uuid/uaeUuid": 114
    } ],
    116: [ function(a, b, c) {
        var d = a("./../utils/typeOf"), e = function() {
            function a() {}
            return a.urlString = function(a) {
                var b = new RegExp("^[a-zA-Z0-9-_.!*'()<>#\"%;/?:@&=+$'%]+$");
                return b.test(a);
            }, a.macroUrlString = function(a) {
                var b = new RegExp("^[a-zA-Z0-9-_.!*'()<>#\"%;/?:@&=+$'%\\[\\]]+$");
                return b.test(a);
            }, a.validate = function(a, b) {
                void 0 === b && (b = [ "_verify" ]);
                var c = {};
                for (var e in a) {
                    var f = a[e];
                    if (d.isArray(f) || d.isFunction(f) || !d.isObject(f)) {
                        var g = !0, h = b.join("_").concat("_", e);
                        "function" == typeof this[h] && (g = this[h](a[e])), g && (c[e] = a[e]);
                    } else b.push(e), c[e] = this.validate(f, b), b.pop();
                }
                return c;
            }, a._verifyUrl = function(a) {
                return "string" != typeof a ? !1 : "" === a ? !1 : this.urlString(a) ? !0 : !1;
            }, a._verifyMacroUrl = function(a) {
                return "string" != typeof a ? !1 : "" === a ? !1 : this.macroUrlString(a) ? !0 : !1;
            }, a._verifySize = function(a) {
                if ("number" == typeof a) return 0 >= a || a > 5e3 ? !1 : !0;
                var b = new RegExp("(?:^100%$|^[1-9][0-9]%$|^[1-9]%$)");
                return "auto" === a || b.test(a);
            }, a._verifyColor = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^#[a-fA-f0-9]{6}$");
                return b.test(a);
            }, a._verifyHtmlId = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z-_:.]+$");
                return b.test(a);
            }, a;
        }();
        b.exports = e;
    }, {
        "./../utils/typeOf": 110
    } ],
    117: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./validate"), f = a("./../utils/typeOf"), g = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b._verify_id = function(a) {
                return f.isString(a);
            }, b._verify_url = function(a) {
                return b.urlString(a);
            }, b._verify_onClick = function(a) {
                return f.isFunction(a);
            }, b._verify_layoutInfo_x = function(a) {
                return f.isNumber(a);
            }, b._verify_layoutInfo_y = function(a) {
                return f.isNumber(a);
            }, b._verify_layoutInfo_top = function(a) {
                return f.isNumber(a);
            }, b._verify_layoutInfo_bottom = function(a) {
                return f.isNumber(a);
            }, b._verify_layoutInfo_left = function(a) {
                return f.isNumber(a);
            }, b._verify_layoutInfo_right = function(a) {
                return f.isNumber(a);
            }, b._verify_visibleWithControlbar = function(a) {
                return f.isBoolean(a);
            }, b._verify_style_up_x = function(a) {
                return f.isNumber(a);
            }, b._verify_style_up_y = function(a) {
                return f.isNumber(a);
            }, b._verify_style_up_width = function(a) {
                return f.isNumber(a);
            }, b._verify_style_up_height = function(a) {
                return f.isNumber(a);
            }, b._verify_style_over_x = function(a) {
                return f.isNumber(a);
            }, b._verify_style_over_y = function(a) {
                return f.isNumber(a);
            }, b._verify_style_over_width = function(a) {
                return f.isNumber(a);
            }, b._verify_style_over_height = function(a) {
                return f.isNumber(a);
            }, b._verify_style_down_x = function(a) {
                return f.isNumber(a);
            }, b._verify_style_down_y = function(a) {
                return f.isNumber(a);
            }, b._verify_style_down_width = function(a) {
                return f.isNumber(a);
            }, b._verify_style_down_height = function(a) {
                return f.isNumber(a);
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../utils/typeOf": 110,
        "./validate": 116
    } ],
    118: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./validate"), f = a("./../utils/typeOf"), g = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b._verify_divId = function(a) {
                return this._verifyHtmlId(a);
            }, b._verify_height = function(a) {
                return f.isNumber(a) ? 0 >= a ? !1 : !0 : !1;
            }, b._verify_recomendResourceType = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("images|iframe|html");
                return b.test(a);
            }, b._verify_sizePermissibleRange = function(a) {
                return f.isNumber(a) ? 0 > a ? !1 : !0 : !1;
            }, b._verify_width = function(a) {
                return f.isNumber(a) ? 0 >= a ? !1 : !0 : !1;
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../utils/typeOf": 110,
        "./validate": 116
    } ],
    119: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./validate"), f = a("./../utils/typeOf"), g = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b._verify_file = function(a) {
                return b._verifyUrl(a) || f.isObject(a);
            }, b._verify_playerSwf = function(a) {
                return b._verifyUrl(a);
            }, b._verify_contextMenuAboutURL = function(a) {
                return b._verifyUrl(a);
            }, b._verify_poster = function(a) {
                return b._verifyUrl(a);
            }, b._verify_advertising_tag = function(a) {
                return b._verifyMacroUrl(a);
            }, b._verify_widevine_emmUrl = function(a) {
                return b._verifyUrl(a);
            }, b._verify_widevine_ticketUrl = function(a) {
                return b._verifyUrl(a);
            }, b._verify_widevine_pluginDownload = function(a) {
                return b._verifyUrl(a);
            }, b._verify_beacon_beaconUrl = function(a) {
                return b._verifyMacroUrl(a);
            }, b._verify_embed_useExpressInstallUrl = function(a) {
                return b._verifyUrl(a);
            }, b._verify_plugin_widevine = function(a) {
                return b._verifyUrl(a);
            }, b._verify_plugin_hls = function(a) {
                return b._verifyUrl(a);
            }, b._verify_plugin_advertising = function(a) {
                return b._verifyUrl(a);
            }, b._verify_design_tintColor = function(a) {
                return this._verifyColor(a);
            }, b._verify_scaleMode = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("letterbox|stretch|zoom|none");
                return b.test(a);
            }, b._verify_streamType = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("vod|live|dvr");
                return b.test(a);
            }, b._verify_advertising_client = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("VMAP|VAST|PLAYLIST_VMAP");
                return b.test(a);
            }, b._verify_advertising_nonlinear_horizontalAlign = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("left|center|right");
                return b.test(a);
            }, b._verify_embed_wmode = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("windows|direct|opaque|transparent|gpu");
                return b.test(a);
            }, b._verify_embed_allowScriptAccess = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("always|sameDomain|never");
                return b.test(a);
            }, b._verify_design_skin = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("FORMAL|BUSINESS|PREMIUM|SMART|LEGACY|MODERN|GOLF|BLACK_LEGACY|SILVER_LEGACY|GRAY_LEGACY|SMOKE_LEGACY|LIGHT|GLASS");
                return b.test(a);
            }, b._verify_hls_seekMode = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("ACCURATE|KEYFRAME");
                return b.test(a);
            }, b._verify_hls_maxLevelCappingMode = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("downscale|upscale");
                return b.test(a);
            }, b._verify_title = function(a) {
                return "string" != typeof a ? !1 : "" === a ? !1 : !0;
            }, b._verify_contextMenuAboutName = function(a) {
                return "string" != typeof a ? !1 : "" === a ? !1 : !0;
            }, b._verify_widevine_portal = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z]+$");
                return b.test(a);
            }, b._verify_widevine_streamId = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z_-]+$");
                return b.test(a);
            }, b._verify_widevine_ticket = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z]+$");
                return b.test(a) ? 32 !== a.length ? !1 : !0 : !1;
            }, b._verify_beacon_sid = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z-._~]+$");
                return b.test(a);
            }, b._verify_beacon_videoId = function(a) {
                if ("string" != typeof a) return !1;
                var b = new RegExp("^[0-9a-zA-Z-._~]+$");
                return b.test(a);
            }, b._verify_autoStart = function(a) {
                return "boolean" == typeof a;
            }, b._verify_enableDisplayError = function(a) {
                return "boolean" == typeof a;
            }, b._verify_mute = function(a) {
                return "boolean" == typeof a;
            }, b._verify_autoRewind = function(a) {
                return "boolean" == typeof a;
            }, b._verify_enableStageVideo = function(a) {
                return "boolean" == typeof a;
            }, b._verify_enableHardwareDecoder = function(a) {
                return "boolean" == typeof a;
            }, b._verify_controlBarAutoHide = function(a) {
                return "boolean" == typeof a;
            }, b._verify_controlBarFullScreenAutoHide = function(a) {
                return "boolean" == typeof a;
            }, b._verify_contextMenuAbout = function(a) {
                return "boolean" == typeof a;
            }, b._verify_contextMenuAboutEnable = function(a) {
                return "boolean" == typeof a;
            }, b._verify_contextMenuStatInfo = function(a) {
                return "boolean" == typeof a;
            }, b._verify_advertising_adQueue = function(a) {
                return "boolean" == typeof a;
            }, b._verify_embed_allowFullScreen = function(a) {
                return "boolean" == typeof a;
            }, b._verify_design_prevButton = function(a) {
                return "boolean" == typeof a;
            }, b._verify_design_nextButton = function(a) {
                return "boolean" == typeof a;
            }, b._verify_design_backSeekButton = function(a) {
                return "boolean" == typeof a;
            }, b._verify_beacon_enableAdvertisingId = function(a) {
                return "boolean" == typeof a;
            }, b._verify_advertising_nonlinear_closable = function(a) {
                return "boolean" == typeof a;
            }, b._verify_width = function(a) {
                return b._verifySize(a);
            }, b._verify_height = function(a) {
                return b._verifySize(a);
            }, b._verify_bufferTime = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_volume = function(a) {
                return "number" != typeof a ? !1 : 0 > a || a > 1 ? !1 : !0;
            }, b._verify_controlBarAutoHideTimeout = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_beacon_playingBeaconInterval = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_embed_flashVersion = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_lowBufferLength = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_maxBufferLength = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_maxBackBufferLength = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_startFromBitrate = function(a) {
                return "number" != typeof a ? !1 : -1 > a ? !1 : !0;
            }, b._verify_hls_startFromLevel = function(a) {
                return "number" != typeof a ? !1 : -1 > a || a > 1 ? !1 : !0;
            }, b._verify_hls_seekFromLevel = function(a) {
                return "number" != typeof a ? !1 : -1 > a || a > 1 ? !1 : !0;
            }, b._verify_hls_manifestLoadMaxRetry = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_keyLoadMaxRetry = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_capLevelToStage = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_segmentNumEnableLive = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_hls_segmentNumLive = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_startTime = function(a) {
                return "number" == typeof a && a >= 0 ? !0 : !1;
            }, b._verify_offsetToGetVast = function(a) {
                return "number" == typeof a && a >= 0 ? !0 : !1;
            }, b._verify_akamaiMediaAnalytics_configPath = function(a) {
                return b._verifyUrl(a);
            }, b._verify_akamaiMediaAnalytics_configPathAdvertising = function(a) {
                return b._verifyUrl(a);
            }, b._verify_akamaiMediaAnalytics_pluginPath = function(a) {
                return b._verifyUrl(a);
            }, b._verify_enablePlayerShortcut = function(a) {
                return "boolean" == typeof a;
            }, b._verify_design_style = function(a) {
                return "object" == typeof a;
            }, b._verify_design_styleUrl = function(a) {
                return b._verifyUrl(a);
            }, b._verify_loop = function(a) {
                return "boolean" == typeof a;
            }, b._verify_language = function(a) {
                return f.isString(a);
            }, b._verify_javascriptCallbackFunction = function(a) {
                return f.isFunction(a) || f.isArray(a);
            }, b._verify_seekPreview_url = function(a) {
                return this._verifyUrl(a);
            }, b._verify_seekPreview_horizontalCount = function(a) {
                return f.isNumber(a) && a > 0;
            }, b._verify_seekPreview_verticalCount = function(a) {
                return f.isNumber(a) && a > 0;
            }, b._verify_seekPreview_previewWidth = function(a) {
                return f.isNumber(a) && a > 0;
            }, b._verify_seekPreview_previewHeight = function(a) {
                return f.isNumber(a) && a > 0;
            }, b._verify_subtitle_subtitles = function(a) {
                return f.isArray(a);
            }, b._verify_subtitle_fontSize = function(a) {
                return f.isNumber(a);
            }, b._verify_subtitle_minFontSize = function(a) {
                return f.isNumber(a);
            }, b._verify_subtitle_maxFontSize = function(a) {
                return f.isNumber(a);
            }, b._verify_subtitle_textColor = function(a) {
                return this._verifyColor(a);
            }, b._verify_subtitle_bgColor = function(a) {
                return this._verifyColor(a);
            }, b._verify_subtitle_bgAlpha = function(a) {
                return f.isNumber(a);
            }, b._verify_subtitle_startSubtitle = function(a) {
                return f.isString(a);
            }, b._verify_advertising_companions = function(a) {
                return f.isArray(a);
            }, b._verify_advertising_midrollMax = function(a) {
                return f.isNumber(a);
            }, b._verify_advertising_disablePreroll = function(a) {
                return f.isBoolean(a);
            }, b._verify_advertising_allowResetMidRollStatus = function(a) {
                return f.isBoolean(a);
            }, b._verify_advertising_enableAdPods = function(a) {
                return f.isBoolean(a);
            }, b._verify_startPlaylistIndex = function(a) {
                return "number" != typeof a ? !1 : 0 > a ? !1 : !0;
            }, b._verify_startPlaybackRate = function(a) {
                return "number" != typeof a ? !1 : .1 > a ? !1 : !0;
            }, b._verify_playlistPrevTime = function(a) {
                return !f.isString(a) || "start" !== a && "end" !== a ? "number" == typeof a && a >= 0 ? !0 : !1 : !0;
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../utils/typeOf": 110,
        "./validate": 116
    } ],
    120: [ function(a, b, c) {
        var d = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c();
        }, e = a("./validate"), f = a("./../utils/typeOf"), g = function(a) {
            function b() {
                a.apply(this, arguments);
            }
            return d(b, a), b._verify_src = function(a) {
                return this._verifyUrl(a);
            }, b._verify_label = function(a) {
                return f.isString(a);
            }, b._verify_language = function(a) {
                return f.isString(a);
            }, b;
        }(e);
        b.exports = g;
    }, {
        "./../utils/typeOf": 110,
        "./validate": 116
    } ],
    121: [ function(a, b, c) {
        Object.create || (Object.create = function() {
            function a() {}
            return function(b) {
                if (1 != arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
                return a.prototype = b, new a();
            };
        }()), Function.prototype.bind || (Function.prototype.bind = function(a) {
            if ("function" != typeof this) throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1), c = this, d = function() {}, e = function() {
                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
            };
            return d.prototype = this.prototype, e.prototype = new d(), e;
        }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this) throw new TypeError(" this is null or not defined");
            var e = Object(this), f = e.length >>> 0;
            if ("function" != typeof a) throw new TypeError(a + " is not a function");
            for (arguments.length > 1 && (c = b), d = 0; f > d; ) {
                var g;
                d in e && (g = e[d], a.call(c, g, d, e)), d++;
            }
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            "use strict";
            if (null == this) throw new TypeError();
            var b = Object(this), c = b.length >>> 0;
            if (0 === c) return -1;
            var d = 0;
            if (arguments.length > 0 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))),
            d >= c) return -1;
            for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++) if (e in b && b[e] === a) return e;
            return -1;
        }), Object.keys || (Object.keys = function() {
            var a = Object.prototype.hasOwnProperty, b = !{
                toString: null
            }.propertyIsEnumerable("toString"), c = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], d = c.length;
            return function(e) {
                if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on non-object");
                var f = [];
                for (var g in e) a.call(e, g) && f.push(g);
                if (b) for (var h = 0; d > h; h++) a.call(e, c[h]) && f.push(c[h]);
                return f;
            };
        }());
    }, {} ],
    122: [ function(require, module, exports) {
        (function(global) {
            var __browserify_shim_require__ = require;
            (function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
                function getWidevinePlugin(a) {
                    return "undefined" == typeof a && (a = "1"), document.getElementById("WidevinePlugin" + a);
                }
                function WVSetStreamId(a, b) {
                    "undefined" == typeof a && (a = "1");
                    var c = document.getElementById("WidevinePlugin" + a);
                    try {
                        return c.setStreamId(b);
                    } catch (d) {}
                    return 0;
                }
                function WVSetClientIp(a, b) {
                    "undefined" == typeof a && (a = "1");
                    var c = document.getElementById("WidevinePlugin" + a);
                    try {
                        return c.setClientIp(b);
                    } catch (d) {}
                    return 0;
                }
                function WVSetEmmURL(a, b) {
                    "undefined" == typeof a && (a = "1");
                    var c = document.getElementById("WidevinePlugin" + a);
                    try {
                        return c.setEmmUrl(b);
                    } catch (d) {}
                    return 0;
                }
                function WVSetTicket(a, b) {
                    "undefined" == typeof a && (a = "1");
                    var c = document.getElementById("WidevinePlugin" + a);
                    try {
                        return c.setOptData(b);
                    } catch (d) {}
                    return 0;
                }
                function WVSetPortal(a, b) {
                    "undefined" == typeof a && (a = "1");
                    var c = document.getElementById("WidevinePlugin" + a);
                    try {
                        return c.setPortal(b);
                    } catch (d) {}
                    return 0;
                }
                var WidevinePlugin, widevine = function() {
                    function doDetect(type, value) {
                        return eval("navigator." + type + '.toLowerCase().indexOf("' + value + '") != -1');
                    }
                    function detectMac() {
                        return doDetect("platform", "mac");
                    }
                    function detectWin32() {
                        return doDetect("platform", "win32");
                    }
                    function detectIE() {
                        return doDetect("userAgent", "msie") || doDetect("userAgent", "trident");
                    }
                    function detectFirefox() {
                        return doDetect("userAgent", "firefox");
                    }
                    function detectSafari() {
                        return doDetect("userAgent", "safari");
                    }
                    function detectChrome() {
                        return doDetect("userAgent", "chrome");
                    }
                    function detectVistaOrWindows7() {
                        return doDetect("userAgent", "windows nt 6");
                    }
                    function getCookie(a) {
                        if (document.cookie.length > 0) {
                            var b = document.cookie.indexOf(a + "=");
                            if (-1 != b) return b = b + a.length + 1, c_end = document.cookie.indexOf(";", b),
                            -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(b, c_end));
                        }
                        return "";
                    }
                    function setCookie(a, b, c) {
                        var d = new Date();
                        d.setSeconds(d.getSeconds() + c), document.cookie = a + "=" + escape(b) + (null === c ? "" : ";expires=" + d.toGMTString());
                    }
                    function writeDebugCell(a, b) {
                        return b ? "<td><b>" + a + "</b></td>" : "<td><s>" + a + "</s></td>";
                    }
                    function writeDebugMimeArray(a) {
                        var b = "";
                        for (var c in a) a[c] && (b += "<td><table><tr><td>" + a[c].description + "</td></tr><tr><td>" + a[c].type + "</td></tr><tr><td>" + a[c].enabledPlugin + "</td></tr></table></td>");
                        return b;
                    }
                    function DebugInfo() {
                        var a = "";
                        if (a += "<table border=1>", a += "<tr><td>Platform</td>", a += writeDebugCell("Macintosh", detectMac()),
                        a += writeDebugCell("Windows", detectWin32()), detectWin32() && (a += writeDebugCell("Vista/Windows7", detectVistaOrWindows7())),
                        a += "</tr>", a += "<tr><td>Browser</td>", a += writeDebugCell("IE", detectIE()),
                        a += writeDebugCell("Firefox", detectFirefox()), a += writeDebugCell("Safari", detectSafari()),
                        a += writeDebugCell("Chrome", detectChrome()), a += "</tr>", detectIE() || (a += "<tr><td>MIME types</td>",
                        a += writeDebugMimeArray(navigator.mimeTypes), a += "</tr>"), a += "<tr><td>Installed</td><td>",
                        navigator.mimeTypes["application/x-widevinemediaoptimizer"]) {
                            var b = document.getElementById("WidevinePlugin");
                            a += b ? b.GetVersion() : "MIME type exists but could not load plugin";
                        } else a += "MIME Type Not Found";
                        return a += "</td></tr>", a += "</table>";
                    }
                    function AddDiv(a, b) {
                        var c = document.createElement("div");
                        return c.id = "WidevinePlugin" + b + "_wrapper", document.body.appendChild(c), c.innerHTML = a,
                        c;
                    }
                    function EmbedText(a) {
                        if (detectIE()) {
                            if (pluginInstalledIE()) return '<object id="WidevinePlugin' + a + '" classid=CLSID:defa762b-ebc6-4ce2-a48c-32b232aac64d hidden=true style="display:none" height="0" width="0"><param name="default_url" value="' + signon_url + '"><param name="emm_url" value="' + emm_url + '"><param name="log_url" value="' + log_url + '"><param name="portal" value="' + portal + '"><param name="user_agent" value="' + navigator.userAgent + '"></object>';
                        } else if (navigator.mimeTypes["application/x-widevinemediaoptimizer"]) return setCookie("FirefoxDisabledCheck", ""),
                        '<embed id="WidevinePlugin' + a + '" type="application/x-widevinemediaoptimizer" default_url="' + signon_url + '" emm_url="' + emm_url + '" log_url="' + log_url + '" portal="' + portal + '" height="0" width="0" user_agent="' + navigator.userAgent + '">';
                        return !1;
                    }
                    function showDownloadPageText() {
                        return "<div style='margin: -1em; position: absolute; z-index: 10; width: 1500px; height: 1200px; color: white; background-color: black'><div align='center'><h2>Widevine Video Optimizer is not installed</h2><input type='button' value='Get Video Optimizer' OnClick='javascript: window.open(\"http://tools.google.com/dlpage/widevine\");'></div></div>";
                    }
                    function pluginInstalledIE() {
                        try {
                            var a = new ActiveXObject("npwidevinemediaoptimizer.WidevineMediaTransformerPlugin");
                            return a = null, !0;
                        } catch (b) {
                            return !1;
                        }
                    }
                    var debug = !1, debug_flags = "", version = "6.0.0.12607", ie_version = "6,0,0,12607", signon_url = "", log_url = "", emm_url = null, portal = null;
                    return {
                        pluginInstalledIE: function() {
                            return pluginInstalledIE();
                        },
                        flashVersion: function() {
                            return current_ver;
                        },
                        init: function(a) {
                            try {
                                var b = EmbedText(a);
                                if (!b) return !1;
                                AddDiv(b, a), debug && AddDiv(DebugInfo());
                            } catch (c) {
                                alert("widevine.init exception: " + c.message);
                            }
                            return !0;
                        }
                    };
                }();
                window.getWidevinePlugin = getWidevinePlugin;
                var widevineOptimizer = function() {};
                widevineOptimizer.widevine = widevine, widevineOptimizer.WVSetTicket = WVSetTicket,
                widevineOptimizer.WVSetStreamId = WVSetStreamId, widevineOptimizer.WVSetPortal = WVSetPortal,
                widevineOptimizer.WVSetEmmURL = WVSetEmmURL, widevineOptimizer.WVSetClientIp = WVSetClientIp,
                browserify_shim__define__module__export__("undefined" != typeof widevineOptimizer ? widevineOptimizer : window.widevineOptimizer);
            }).call(global, void 0, void 0, void 0, void 0, function(a) {
                module.exports = a;
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ],
    123: [ function(a, b, c) {
        (function(a) {
            (function(b, c, d, e, f) {
                (function() {
                    function d(a, b) {
                        function c(a) {
                            if (c[a] !== q) return c[a];
                            var d;
                            if ("bug-string-char-index" == a) d = "a" != "a"[0]; else if ("json" == a) d = c("json-stringify") && c("json-parse"); else {
                                var g;
                                if ("json-stringify" == a) {
                                    d = b.stringify;
                                    var h = "function" == typeof d && s;
                                    if (h) {
                                        (g = function() {
                                            return 1;
                                        }).toJSON = g;
                                        try {
                                            h = "0" === d(0) && "0" === d(new e()) && '""' == d(new f()) && d(r) === q && d(q) === q && d() === q && "1" === d(g) && "[1]" == d([ g ]) && "[null]" == d([ q ]) && "null" == d(null) && "[null,null,null]" == d([ q, r, null ]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                                a: [ g, !0, !1, null, "\x00\b\n\f\r	" ]
                                            }) && "1" === d(null, g) && "[\n 1,\n 2\n]" == d([ 1, 2 ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new j(-1));
                                        } catch (i) {
                                            h = !1;
                                        }
                                    }
                                    d = h;
                                }
                                if ("json-parse" == a) {
                                    if (d = b.parse, "function" == typeof d) try {
                                        if (0 === d("0") && !d(!1)) {
                                            g = d('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                            var k = 5 == g.a.length && 1 === g.a[0];
                                            if (k) {
                                                try {
                                                    k = !d('"	"');
                                                } catch (l) {}
                                                if (k) try {
                                                    k = 1 !== d("01");
                                                } catch (m) {}
                                                if (k) try {
                                                    k = 1 !== d("1.");
                                                } catch (n) {}
                                            }
                                        }
                                    } catch (o) {
                                        k = !1;
                                    }
                                    d = k;
                                }
                            }
                            return c[a] = !!d;
                        }
                        a || (a = i.Object()), b || (b = i.Object());
                        var e = a.Number || i.Number, f = a.String || i.String, h = a.Object || i.Object, j = a.Date || i.Date, k = a.SyntaxError || i.SyntaxError, l = a.TypeError || i.TypeError, m = a.Math || i.Math, n = a.JSON || i.JSON;
                        "object" == typeof n && n && (b.stringify = n.stringify, b.parse = n.parse);
                        var o, p, q, h = h.prototype, r = h.toString, s = new j(-0xc782b5b800cec);
                        try {
                            s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds();
                        } catch (t) {}
                        if (!c("json")) {
                            var u = c("bug-string-char-index");
                            if (!s) var v = m.floor, w = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], x = function(a, b) {
                                return w[b] + 365 * (a - 1970) + v((a - 1969 + (b = +(b > 1))) / 4) - v((a - 1901 + b) / 100) + v((a - 1601 + b) / 400);
                            };
                            if ((o = h.hasOwnProperty) || (o = function(a) {
                                var b, c = {};
                                return (c.__proto__ = null, c.__proto__ = {
                                    toString: 1
                                }, c).toString != r ? o = function(a) {
                                    var b = this.__proto__;
                                    return a = a in (this.__proto__ = null, this), this.__proto__ = b, a;
                                } : (b = c.constructor, o = function(a) {
                                    var c = (this.constructor || b).prototype;
                                    return a in this && !(a in c && this[a] === c[a]);
                                }), c = null, o.call(this, a);
                            }), p = function(a, b) {
                                var c, d, e, f = 0;
                                (c = function() {
                                    this.valueOf = 0;
                                }).prototype.valueOf = 0, d = new c();
                                for (e in d) o.call(d, e) && f++;
                                return c = d = null, f ? p = 2 == f ? function(a, b) {
                                    var c, d = {}, e = "[object Function]" == r.call(a);
                                    for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c);
                                } : function(a, b) {
                                    var c, d, e = "[object Function]" == r.call(a);
                                    for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                                    (d || o.call(a, c = "constructor")) && b(c);
                                } : (d = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),
                                p = function(a, b) {
                                    var c, e = "[object Function]" == r.call(a), f = !e && "function" != typeof a.constructor && g[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                                    for (c in a) e && "prototype" == c || !f.call(a, c) || b(c);
                                    for (e = d.length; c = d[--e]; f.call(a, c) && b(c)) ;
                                }), p(a, b);
                            }, !c("json-stringify")) {
                                var y = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                }, z = function(a, b) {
                                    return ("000000" + (b || 0)).slice(-a);
                                }, A = function(a) {
                                    for (var b = '"', c = 0, d = a.length, e = !u || d > 10, f = e && (u ? a.split("") : a); d > c; c++) {
                                        var g = a.charCodeAt(c);
                                        switch (g) {
                                          case 8:
                                          case 9:
                                          case 10:
                                          case 12:
                                          case 13:
                                          case 34:
                                          case 92:
                                            b += y[g];
                                            break;

                                          default:
                                            if (32 > g) {
                                                b += "\\u00" + z(2, g.toString(16));
                                                break;
                                            }
                                            b += e ? f[c] : a.charAt(c);
                                        }
                                    }
                                    return b + '"';
                                }, B = function(a, b, c, d, e, f, g) {
                                    var h, i, j, k, m, n, s, t, u;
                                    try {
                                        h = b[a];
                                    } catch (w) {}
                                    if ("object" == typeof h && h) if (i = r.call(h), "[object Date]" != i || o.call(h, "toJSON")) "function" == typeof h.toJSON && ("[object Number]" != i && "[object String]" != i && "[object Array]" != i || o.call(h, "toJSON")) && (h = h.toJSON(a)); else if (h > -1 / 0 && 1 / 0 > h) {
                                        if (x) {
                                            for (k = v(h / 864e5), i = v(k / 365.2425) + 1970 - 1; x(i + 1, 0) <= k; i++) ;
                                            for (j = v((k - x(i, 0)) / 30.42); x(i, j + 1) <= k; j++) ;
                                            k = 1 + k - x(i, j), m = (h % 864e5 + 864e5) % 864e5, n = v(m / 36e5) % 24, s = v(m / 6e4) % 60,
                                            t = v(m / 1e3) % 60, m %= 1e3;
                                        } else i = h.getUTCFullYear(), j = h.getUTCMonth(), k = h.getUTCDate(), n = h.getUTCHours(),
                                        s = h.getUTCMinutes(), t = h.getUTCSeconds(), m = h.getUTCMilliseconds();
                                        h = (0 >= i || i >= 1e4 ? (0 > i ? "-" : "+") + z(6, 0 > i ? -i : i) : z(4, i)) + "-" + z(2, j + 1) + "-" + z(2, k) + "T" + z(2, n) + ":" + z(2, s) + ":" + z(2, t) + "." + z(3, m) + "Z";
                                    } else h = null;
                                    if (c && (h = c.call(b, a, h)), null === h) return "null";
                                    if (i = r.call(h), "[object Boolean]" == i) return "" + h;
                                    if ("[object Number]" == i) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                                    if ("[object String]" == i) return A("" + h);
                                    if ("object" == typeof h) {
                                        for (a = g.length; a--; ) if (g[a] === h) throw l();
                                        if (g.push(h), u = [], b = f, f += e, "[object Array]" == i) {
                                            for (j = 0, a = h.length; a > j; j++) i = B(j, h, c, d, e, f, g), u.push(i === q ? "null" : i);
                                            a = u.length ? e ? "[\n" + f + u.join(",\n" + f) + "\n" + b + "]" : "[" + u.join(",") + "]" : "[]";
                                        } else p(d || h, function(a) {
                                            var b = B(a, h, c, d, e, f, g);
                                            b !== q && u.push(A(a) + ":" + (e ? " " : "") + b);
                                        }), a = u.length ? e ? "{\n" + f + u.join(",\n" + f) + "\n" + b + "}" : "{" + u.join(",") + "}" : "{}";
                                        return g.pop(), a;
                                    }
                                };
                                b.stringify = function(a, b, c) {
                                    var d, e, f, h;
                                    if (g[typeof b] && b) if ("[object Function]" == (h = r.call(b))) e = b; else if ("[object Array]" == h) {
                                        f = {};
                                        for (var i, j = 0, k = b.length; k > j; i = b[j++], h = r.call(i), ("[object String]" == h || "[object Number]" == h) && (f[i] = 1)) ;
                                    }
                                    if (c) if ("[object Number]" == (h = r.call(c))) {
                                        if (0 < (c -= c % 1)) for (d = "", c > 10 && (c = 10); d.length < c; d += " ") ;
                                    } else "[object String]" == h && (d = 10 >= c.length ? c : c.slice(0, 10));
                                    return B("", (i = {}, i[""] = a, i), e, f, d, "", []);
                                };
                            }
                            if (!c("json-parse")) {
                                var C, D, E = f.fromCharCode, F = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "	",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                }, G = function() {
                                    throw C = D = null, k();
                                }, H = function() {
                                    for (var a, b, c, d, e, f = D, g = f.length; g > C; ) switch (e = f.charCodeAt(C)) {
                                      case 9:
                                      case 10:
                                      case 13:
                                      case 32:
                                        C++;
                                        break;

                                      case 123:
                                      case 125:
                                      case 91:
                                      case 93:
                                      case 58:
                                      case 44:
                                        return a = u ? f.charAt(C) : f[C], C++, a;

                                      case 34:
                                        for (a = "@", C++; g > C; ) if (e = f.charCodeAt(C), 32 > e) G(); else if (92 == e) switch (e = f.charCodeAt(++C)) {
                                          case 92:
                                          case 34:
                                          case 47:
                                          case 98:
                                          case 116:
                                          case 110:
                                          case 102:
                                          case 114:
                                            a += F[e], C++;
                                            break;

                                          case 117:
                                            for (b = ++C, c = C + 4; c > C; C++) e = f.charCodeAt(C), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || G();
                                            a += E("0x" + f.slice(b, C));
                                            break;

                                          default:
                                            G();
                                        } else {
                                            if (34 == e) break;
                                            for (e = f.charCodeAt(C), b = C; e >= 32 && 92 != e && 34 != e; ) e = f.charCodeAt(++C);
                                            a += f.slice(b, C);
                                        }
                                        if (34 == f.charCodeAt(C)) return C++, a;
                                        G();

                                      default:
                                        if (b = C, 45 == e && (d = !0, e = f.charCodeAt(++C)), e >= 48 && 57 >= e) {
                                            for (48 == e && (e = f.charCodeAt(C + 1), e >= 48 && 57 >= e) && G(); g > C && (e = f.charCodeAt(C),
                                            e >= 48 && 57 >= e); C++) ;
                                            if (46 == f.charCodeAt(C)) {
                                                for (c = ++C; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++) ;
                                                c == C && G(), C = c;
                                            }
                                            if (e = f.charCodeAt(C), 101 == e || 69 == e) {
                                                for (e = f.charCodeAt(++C), 43 != e && 45 != e || C++, c = C; g > c && (e = f.charCodeAt(c),
                                                e >= 48 && 57 >= e); c++) ;
                                                c == C && G(), C = c;
                                            }
                                            return +f.slice(b, C);
                                        }
                                        if (d && G(), "true" == f.slice(C, C + 4)) return C += 4, !0;
                                        if ("false" == f.slice(C, C + 5)) return C += 5, !1;
                                        if ("null" == f.slice(C, C + 4)) return C += 4, null;
                                        G();
                                    }
                                    return "$";
                                }, I = function(a) {
                                    var b, c;
                                    if ("$" == a && G(), "string" == typeof a) {
                                        if ("@" == (u ? a.charAt(0) : a[0])) return a.slice(1);
                                        if ("[" == a) {
                                            for (b = []; a = H(), "]" != a; c || (c = !0)) c && ("," == a ? (a = H(), "]" == a && G()) : G()),
                                            "," == a && G(), b.push(I(a));
                                            return b;
                                        }
                                        if ("{" == a) {
                                            for (b = {}; a = H(), "}" != a; c || (c = !0)) c && ("," == a ? (a = H(), "}" == a && G()) : G()),
                                            "," != a && "string" == typeof a && "@" == (u ? a.charAt(0) : a[0]) && ":" == H() || G(),
                                            b[a.slice(1)] = I(H());
                                            return b;
                                        }
                                        G();
                                    }
                                    return a;
                                }, J = function(a, b, c) {
                                    c = K(a, b, c), c === q ? delete a[b] : a[b] = c;
                                }, K = function(a, b, c) {
                                    var d, e = a[b];
                                    if ("object" == typeof e && e) if ("[object Array]" == r.call(e)) for (d = e.length; d--; ) J(e, d, c); else p(e, function(a) {
                                        J(e, a, c);
                                    });
                                    return c.call(a, b, e);
                                };
                                b.parse = function(a, b) {
                                    var c, d;
                                    return C = 0, D = "" + a, c = I(H()), "$" != H() && G(), C = D = null, b && "[object Function]" == r.call(b) ? K((d = {},
                                    d[""] = c, d), "", b) : c;
                                };
                            }
                        }
                        return b.runInContext = d, b;
                    }
                    var f = "function" == typeof e && e.amd, g = {
                        "function": !0,
                        object: !0
                    }, h = g[typeof c] && c && !c.nodeType && c, i = g[typeof window] && window || this, j = h && g[typeof b] && b && !b.nodeType && "object" == typeof a && a;
                    if (!j || j.global !== j && j.window !== j && j.self !== j || (i = j), h && !f) d(i, h); else {
                        var k = i.JSON, l = i.JSON3, m = !1, n = d(i, i.JSON3 = {
                            noConflict: function() {
                                return m || (m = !0, i.JSON = k, i.JSON3 = l, k = l = null), n;
                            }
                        });
                        i.JSON = {
                            parse: n.parse,
                            stringify: n.stringify
                        };
                    }
                    f && e(function() {
                        return n;
                    });
                }).call(this), f("undefined" != typeof JSON ? JSON : window.JSON);
            }).call(a, void 0, void 0, void 0, void 0, function(a) {
                b.exports = a;
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ],
    124: [ function(a, b, c) {
        (function(a) {
            (function(a, b, c, d, e) {
                var f = function() {
                    "use strict";
                    var a = {
                        protocol: "protocol",
                        host: "hostname",
                        port: "port",
                        path: "pathname",
                        query: "search",
                        hash: "hash"
                    }, b = {
                        ftp: 21,
                        gopher: 70,
                        http: 80,
                        https: 443,
                        ws: 80,
                        wss: 443
                    }, c = function(c, d) {
                        var g = document, h = g.createElement("a"), d = d || g.location.href, i = d.match(/\/\/(.*?)(?::(.*?))?@/) || [];
                        h.href = d;
                        for (var j in a) c[j] = h[a[j]] || "";
                        if (c.protocol = c.protocol.replace(/:$/, ""), c.query = c.query.replace(/^\?/, ""),
                        c.hash = c.hash.replace(/^#/, ""), c.user = i[1] || "", c.pass = i[2] || "", c.port = b[c.protocol] == c.port || 0 == c.port ? "" : c.port,
                        c.protocol || /^([a-z]+:)?\/\//.test(d)) c.path = c.path.replace(/^\/?/, "/"); else {
                            var k = new f(g.location.href.match(/(.*\/)/)[0]), l = k.path.split("/"), m = c.path.split("/");
                            l.pop();
                            for (var j = 0, n = [ "protocol", "user", "pass", "host", "port" ], o = n.length; o > j; j++) c[n[j]] = k[n[j]];
                            for (;".." == m[0]; ) l.pop(), m.shift();
                            c.path = ("/" != d.substring(0, 1) ? l.join("/") : "") + "/" + m.join("/");
                        }
                        e(c);
                    }, d = function(a) {
                        return a = a.replace(/\+/g, " "), a = a.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function(a, b, c, d) {
                            var e = parseInt(b, 16) - 224, f = parseInt(c, 16) - 128;
                            if (0 == e && 32 > f) return a;
                            var g = parseInt(d, 16) - 128, h = (e << 12) + (f << 6) + g;
                            return h > 65535 ? a : String.fromCharCode(h);
                        }), a = a.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function(a, b, c) {
                            var d = parseInt(b, 16) - 192;
                            if (2 > d) return a;
                            var e = parseInt(c, 16) - 128;
                            return String.fromCharCode((d << 6) + e);
                        }), a = a.replace(/%([0-7][0-9a-f])/gi, function(a, b) {
                            return String.fromCharCode(parseInt(b, 16));
                        });
                    }, e = function(a) {
                        var b = a.query;
                        a.query = new function(a) {
                            for (var b, c = /([^=&]+)(=([^&]*))?/g; b = c.exec(a); ) {
                                var e = decodeURIComponent(b[1].replace(/\+/g, " ")), f = b[3] ? d(b[3]) : "";
                                null != this[e] ? (this[e] instanceof Array || (this[e] = [ this[e] ]), this[e].push(f)) : this[e] = f;
                            }
                            this.clear = function() {
                                for (e in this) this[e] instanceof Function || delete this[e];
                            }, this.toString = function() {
                                var a = "", b = encodeURIComponent;
                                for (var c in this) if (!(this[c] instanceof Function)) if (this[c] instanceof Array) {
                                    var d = this[c].length;
                                    if (d) for (var e = 0; d > e; e++) a += a ? "&" : "", a += b(c) + "=" + b(this[c][e]); else a += (a ? "&" : "") + b(c) + "=";
                                } else a += a ? "&" : "", a += b(c) + "=" + b(this[c]);
                                return a;
                            };
                        }(b);
                    };
                    return function(a) {
                        this.toString = function() {
                            return (this.protocol && this.protocol + "://") + (this.user && this.user + (this.pass && ":" + this.pass) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + this.hash);
                        }, c(this, a);
                    };
                }();
                e("undefined" != typeof f ? f : window.Url);
            }).call(a, void 0, void 0, void 0, void 0, function(a) {
                b.exports = a;
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ],
    125: [ function(a, b, c) {
        (function(c) {
            a("/Users/nishimuratomoyuki/Developer/ULIZAPlayerPC/ulizaplayerjs/src/lib/Polyfill.js"),
            function(a, b, c, d, e) {
                function f(a, b, c, d) {
                    void 0 === b && (b = "");
                    try {
                        return a.getElementsByTagNameNS(b, c);
                    } catch (e) {
                        if (!a) return [];
                        var f;
                        f = a.documentElement, f || (f = a);
                        var g = f.selectNodes(d);
                        return g ? g : [];
                    }
                }
                function g(a) {
                    var b;
                    return b = void 0 === a.textContent ? a.text : a.textContent, b || (b = ""), b;
                }
                function h(a, b, c, d) {
                    ulizaplayer.XHR(a, function(a, e, f) {
                        if (a) d(e, b); else {
                            var g = e.responseXML;
                            if (!g) try {
                                var h = new ActiveXObject("Microsoft.XMLDOM");
                                h.async = "false", h.loadXML(f), 0 == h.parseError.errorCode ? g = h : d(e, b);
                            } catch (i) {}
                            c(g, b);
                        }
                    });
                }
                function i(a, b, c) {
                    h(a, null, function(a) {
                        try {
                            new l(a, b, c);
                        } catch (d) {
                            b(null);
                        }
                    }, function(a) {
                        b(null);
                    });
                }
                function j(a, b) {
                    if (this.events = {}, this.ad = b, null !== a) {
                        if ("TrackingEvents" !== a.tagName) {
                            if (a = a.getElementsByTagName("TrackingEvents"), 1 !== a.length) return;
                            a = a.item(0);
                        }
                        for (var c = a.getElementsByTagName("Tracking"), d = 0; d < c.length; d++) {
                            var e = c[d].getAttribute("event");
                            if (e) {
                                var f = null;
                                "progress" === e && (f = c[d].getAttribute("offset"), e += "-" + f), this.events[e] = this.events[e] || [];
                                var h = {
                                    url: g(c[d]).replace(/\s/g, ""),
                                    offset: f,
                                    event: e
                                };
                                this.events[e].push(h);
                            }
                        }
                    }
                }
                function k(a, b) {
                    this.breaks = [];
                    var c = this;
                    h(a, null, function(a) {
                        for (var d = f(a, s, "AdBreak", "//vmap:AdBreak"), e = [], h = 0; h < d.length; h++) {
                            var i = d.item(h), k = i.getAttribute("timeOffset");
                            if (null != k && 0 !== k.indexOf("#")) {
                                var m = {
                                    ad: null,
                                    breakId: i.getAttribute("breakId"),
                                    tracking: new j(i, null),
                                    position: k
                                }, n = f(i, s, "VASTData", "//vmap:VASTData");
                                if (n.length > 0) n = i.xml ? n[h] : n[0], m.ad = new l(n.getElementByTagName(null, "VAST").item(0), function() {}); else {
                                    var o = f(i, s, "AdTagURI", "//vmap:AdTagURI");
                                    if (o = i.xml ? o[h] : o[0], !o) continue;
                                }
                                c.breaks.push(m), e.push({
                                    pos: m.position,
                                    vasturi: g(o).replace(/\s/g, "")
                                });
                            }
                        }
                        "function" == typeof b && b(e);
                    }, function(a) {
                        b([]);
                    });
                }
                function l(a, b, c) {
                    this.ads = [], this.onAdsAvailable = b;
                    var d = f(a, a.namespaceURI, "Ad", "Ad");
                    if (0 === d.length && b) {
                        var e = this.onAdsAvailable;
                        this.onAdsAvailable = null, e.call(this, this);
                    }
                    for (var h = 0; h < d.length; h++) {
                        var j = new m(this, d.item(h), c || null);
                        if (j.isEmpty() && this.onAdsAvailable) {
                            var e = this.onAdsAvailable;
                            this.onAdsAvailable = null, e.call(this, this);
                        }
                        if (this.ads.push(j), j.hasData()) {
                            if (this.onAdsAvailable) {
                                var e = this.onAdsAvailable;
                                this.onAdsAvailable = null, e.call(this, this);
                            }
                        } else {
                            var k = this, l = d.item(h).getElementsByTagName("Wrapper").item(0), n = l.getElementsByTagName("VASTAdTagURI");
                            if (0 === n.length) continue;
                            n = g(n.item(0)).replace(/\s/g, "");
                            var o, p = "true" === l.getAttribute("allowMultipleAds");
                            !function(a, b, c) {
                                o = function(d) {
                                    if (a.onLoaded(d, b), c.onAdsAvailable) {
                                        var e = c.onAdsAvailable;
                                        c.onAdsAvailable = null, e.call(c, c);
                                    }
                                };
                            }(j, p, k), i(n, o, j);
                        }
                    }
                }
                function m(a, b, c, d) {
                    this.vast = a, this.pod = a, this.parentAd = c, this.onAdAvailable = d, this.sequence = null,
                    this.hasContent = !0, this.loaded = !0, this.linear = null, this.companions = [],
                    this.companionsRequired = "none", this.nonlinears = [], this.impressions = [], this.currentPodAd = this,
                    this.sentImpression = !1, this.properties = {};
                    var e, f;
                    if (null !== this.parentAd) {
                        var h = this.parentAd;
                        if (this.companionsRequired = h.companionsRequired, this.linear = h.linear ? h.linear : null,
                        this.linear && this.linear.tracking && (this.linear.tracking.ad = this), h.companions.length) for (e = 0; e < h.companions.length; e++) h.companions[e].tracking.ad = this,
                        this.companions.push(h.companions[e]);
                        if (h.nonlinears.length) for (e = 0; e < h.nonlinears.length; e++) h.nonlinears[e].tracking.ad = this,
                        this.nonlinears.push(h.nonlinears[e]);
                        for (f in h.properties) h.properties.hasOwnProperty(f) && (this.properties[f] = h.properties[f]);
                        for (e = 0; e < h.impressions.length; e++) this.impressions.push(h.impressions[e]);
                    }
                    null != b.getAttribute("sequence") && (this.sequence = parseInt(b.getAttribute("sequence"), 10));
                    var i = b.getElementsByTagName("InLine");
                    if (0 === i.length && (this.loaded = !1, i = b.getElementsByTagName("Wrapper"),
                    0 === i.length)) return void (this.hasContent = !1);
                    i = i.item(0);
                    for (var j = i.firstChild; null !== j; ) {
                        if (1 === j.nodeType) switch (j.tagName) {
                          case "Creatives":
                          case "InLine":
                          case "Wrapper":
                          case "Impression":
                          case "VASTAdTagURI":
                          case "Error":
                            break;

                          default:
                            this.properties[j.tagName] = g(j).replace(/^\s*|\s*$/g, "");
                        }
                        j = j.nextSibling;
                    }
                    var k = i.getElementsByTagName("Impression");
                    for (e = 0; e < k.length; e++) this.impressions.push(g(k.item(e)).replace(/\s/g, ""));
                    var l = i.getElementsByTagName("Creatives");
                    if (0 !== l.length) for (l = l.item(0).getElementsByTagName("Creative"), e = 0; e < l.length; e++) {
                        for (var m = l.item(e).firstChild; null !== m && 3 === m.nodeType; ) m = m.nextSibling;
                        if (null !== m) {
                            var n;
                            switch (m.tagName) {
                              case "Linear":
                                n = new o(this, m), this.linear ? this.linear.augment(n) : this.linear = n;
                                break;

                              case "CompanionAds":
                                null != m.getAttribute("required") && (this.companionsRequired = m.getAttribute("required"));

                              case "NonLinearAds":
                                for (var p = m.tagName.replace("Ads", ""), s = "Companion" === p ? "VASTCompanion" : "VASTNonLinear", t = "Companion" === p ? this.companions : this.nonlinears, u = t.length, v = m.getElementsByTagName(p), w = 0; w < v.length; w++) {
                                    switch (s) {
                                      case "VASTCompanion":
                                        n = new q(this, v.item(w));
                                        break;

                                      case "VASTNonLinear":
                                        n = new r(this, v.item(w));
                                    }
                                    for (f = 0; u > f; f++) {
                                        var x = t[f], y = x.attribute("id", n.attribute("id")) === n.attribute("id", x.attribute("id")), z = x.attribute("width", n.attribute("width")) === n.attribute("width", x.attribute("width")), A = x.attribute("height", n.attribute("height")) === n.attribute("height", x.attribute("height")), B = void 0 !== x.attribute("id") && void 0 !== n.attribute("id"), C = void 0 !== x.attribute("width") && void 0 !== n.attribute("width"), D = void 0 !== x.attribute("height") && void 0 !== n.attribute("height");
                                        if (y && z && A && (B || C || D)) {
                                            x.augment(n), n = null;
                                            break;
                                        }
                                    }
                                    null !== n && t.push(n);
                                }
                            }
                        }
                    }
                }
                function n(a, b) {
                    this.root = b, this.clickThrough = null, "NonLinear" === b.tagName && (b = b.parentNode),
                    this.tracking = new j(b, a);
                }
                function o(a, b) {
                    n.call(this, a, b), this.mediaFiles = [], this.clickThrough = null, this.duration = null,
                    this.skipoffset = null;
                    var c;
                    for (c = 0; c < b.attributes.length; c++) if ("skipoffset" === b.attributes[c].name) {
                        this.skipoffset = b.attributes[c].value;
                        break;
                    }
                    var d = b.getElementsByTagName("VideoClicks");
                    if (d.length) {
                        d = d.item(0);
                        var e = d.getElementsByTagName("ClickThrough");
                        for (e.length && (this.clickThrough = g(e.item(0)).replace(/\s/g, "")), e = d.getElementsByTagName("ClickTracking"),
                        c = 0; c < e.length; c++) this.tracking.addClickTracking(g(e.item(c)).replace(/\s/g, ""));
                    }
                    var f = b.getElementsByTagName("Duration");
                    f.length && (this.duration = this.timecodeFromString(g(f.item(0)).replace(/\s/g, "")));
                    var h = b.getElementsByTagName("MediaFiles");
                    if (h.length) for (h = h.item(0).getElementsByTagName("MediaFile"), c = 0; c < h.length; c++) {
                        for (var i = h.item(c), j = {}, k = 0; k < i.attributes.length; k++) j[i.attributes[k].name] = i.attributes[k].value;
                        j.src = g(h.item(c)).replace(/\s/g, ""), this.mediaFiles.push(j);
                    }
                }
                function p(a, b) {
                    n.call(this, a, b), this.resources = {
                        iframe: null,
                        html: null,
                        images: {}
                    };
                    var c;
                    c = b.getElementsByTagName("IFrameResource"), c.length > 0 && (this.resources.iframe = g(c.item(0)).replace(/\s/g, "")),
                    c = b.getElementsByTagName("HTMLResource"), c.length > 0 && (this.resources.html = g(c.item(0)).replace(/\s/g, "")),
                    c = b.getElementsByTagName("StaticResource");
                    for (var d = 0; d < c.length; d++) this.resources.images[c.item(d).getAttribute("creativeType")] = g(c.item(d)).replace(/\s/g, "");
                }
                function q(a, b) {
                    p.call(this, a, b), this.altText = "", p.prototype.extractClicks.call(this, "Companion");
                    var c = b.getElementsByTagName("AltText");
                    c.length && (this.altText = g(c.item(0)).replace(/\s/g, ""));
                }
                function r(a, b) {
                    p.call(this, a, b), p.prototype.extractClicks.call(this, "NonLinear");
                }
                var l, m, o, r, q, s = "http://www.iab.net/vmap-1.0";
                j.prototype.copy = function(a) {
                    var b = Object.create(j.prototype);
                    b.events = {};
                    for (var c in this.events) this.events.hasOwnProperty(c) && (b.events[c] = [].concat(this.events[c]));
                    return b.ad = a, b;
                }, j.prototype.finger = function(a) {
                    ulizaplayer.XHR(a);
                }, j.prototype.augment = function(a) {
                    for (var b in a.events) a.events.hasOwnProperty(b) && (this.events[b] ? this.events[b] = this.events[b].concat(a.events[b]) : this.events[b] = a.events[b]);
                }, j.prototype.addClickTracking = function(a) {
                    var b = {
                        url: a,
                        event: "click",
                        offset: null
                    };
                    this.events.click ? this.events.click.push(b) : this.events.click = [ b ];
                }, j.prototype.getEventsOfTypes = function(a) {
                    var b = [], c = a.indexOf("progress") > -1;
                    for (var d in this.events) this.events.hasOwnProperty(d) && (a.indexOf(d) > -1 || c && 0 === d.indexOf("progress-")) && (b = b.concat(this.events[d]));
                    return b;
                }, j.prototype.track = function(a, b) {
                    var c = [];
                    if ("creativeView" === a) {
                        var d = this.ad;
                        if (null !== d && !d.hasSentImpression()) for (d.impressionSent(), e = 0; e < d.impressions.length; e++) c.push({
                            url: d.impressions[e]
                        });
                    }
                    if (this.events[a] && 0 !== this.events[a].length) c = c.concat(this.events[a]); else if (0 == c.length) return;
                    var e, f = {};
                    for (var g in b) b.hasOwnProperty(g) && (f["[" + g + "]"] = encodeURIComponent(b[g]));
                    var h = this;
                    for (e = 0; e < c.length; e++) {
                        for (var i = c[e], j = i.url, k = "" + parseInt(99999999 * Math.random(), 10); 8 !== k.length; ) k = "0" + k;
                        f["[CACHEBUSTING]"] = k;
                        for (g in f) f.hasOwnProperty(g) && (j = j.replace(g, f[g]));
                        h.finger(j);
                    }
                }, k.prototype.onBreakStart = function(a) {
                    return this.breaks[a].tracking.track("breakStart"), this.breaks[a].ad;
                }, k.prototype.onBreakEnd = function(a) {
                    this.breaks[a].tracking.track("breakEnd");
                }, l.prototype.getAd = function(a) {
                    var b = null;
                    if (a && (b = this.getAdWithSequence(1), b && !b.current().isEmpty())) return b.current();
                    for (var c = 0; c < this.ads.length; c++) if (!this.ads[c].current().isEmpty()) return this.ads[c].current();
                }, l.prototype.getAdWithSequence = function(a) {
                    for (var b = 0; b < this.ads.length; b++) if (this.ads[b].isNumber(a)) return this.ads[b];
                    return null;
                }, m.prototype.getTag = function(a, b) {
                    return this.properties.hasOwnProperty(a) ? this.properties[a] : b;
                }, m.prototype.onLoaded = function(a, b) {
                    this.pod = a;
                    try {
                        this.currentPodAd = a.getAd(b);
                    } catch (c) {}
                    this.currentPodAd.isEmpty() || (this.loaded = !0, this.onAdAvailable && this.onAdAvailable.call(this, this));
                }, m.prototype.hasSentImpression = function() {
                    return this.sentImpression;
                }, m.prototype.impressionSent = function() {
                    this.sentImpression = !0;
                }, m.prototype.current = function() {
                    return this.currentPodAd;
                }, m.prototype.isNumber = function(a) {
                    return this.sequence === a;
                }, m.prototype.hasSequence = function() {
                    return null !== this.sequence;
                }, m.prototype.isEmpty = function() {
                    return !this.hasContent;
                }, m.prototype.hasData = function() {
                    return this.loaded;
                }, m.prototype.getNextAd = function() {
                    return this.vast !== this.pod && (this.currentPodAd = this.currentPodAd.getNextAd(),
                    null !== this.currentPod) ? this.currentPodAd.current() : this.hasSequence() ? this.vast.getAdWithSequence(this.sequence + 1).current() : null;
                }, m.prototype.getLinear = function() {
                    return this.linear;
                }, m.prototype.getCompanions = function() {
                    return this.companions;
                }, m.prototype.getCompanion = function(a) {
                    for (var b = 0; b < this.companions.length; b++) if (this.companions[b].attribute("id") === a) return this.companions[b];
                    return null;
                }, m.prototype.companionsRequired = function() {
                    return this.companionsRequired;
                }, m.prototype.getNonLinears = function() {
                    return this.nonlinears;
                }, n.prototype.track = function(a, b, c, d) {
                    void 0 === d && (d = {});
                    var e = {
                        CONTENTPLAYHEAD: this.timecodeToString(b),
                        ASSETURI: c
                    };
                    for (var f in d) d.hasOwnProperty(f) && (e[f] = d[f]);
                    this.tracking.track(a, e);
                }, n.prototype.timecodeToString = function(a) {
                    var b = "0" + parseInt(a / 3600, 10), c = "0" + parseInt(a % 3600 / 60, 10), d = "0" + a % 60, e = b + ":" + c + ":" + d;
                    return e.replace(/(^|:|\.)0(\d{2})/g, "$1$2");
                }, n.prototype.timecodeFromString = function(a) {
                    return -1 === a.indexOf(":") ? a : 3600 * parseInt(a.substr(0, 2), 10) + 60 * parseInt(a.substr(3, 2), 10) + parseInt(a.substr(6, 2), 10);
                }, n.prototype.getClickThrough = function() {
                    return this.clickThrough;
                }, n.prototype.attribute = function(a, b) {
                    if (null == this.root.getAttribute(a)) return b;
                    var c = this.root.getAttribute(a);
                    switch (a) {
                      case "skipoffset":
                      case "duration":
                      case "offset":
                      case "minSuggestedDuration":
                        c = this.timecodeFromString(c);
                    }
                    return c;
                }, o.prototype = Object.create(n.prototype), o.prototype.getDuration = function() {
                    return this.duration;
                }, o.prototype.copy = function(a) {
                    return new o(a, this.root);
                }, o.prototype.augment = function(a) {
                    this.duration = a.duration || this.duration, this.skipoffset = a.skipoffset || this.skipoffset,
                    this.mediaFiles = a.mediaFiles.slice(0) || this.mediaFiles.slice(0), this.tracking.augment(a.tracking),
                    this.clickThrough = a.clickThrough || this.clickThrough;
                }, o.prototype.getAllMedias = function() {
                    return this.mediaFiles;
                }, o.prototype.getBestMedia = function(a) {
                    for (var b = Number.POSITIVE_INFINITY, c = -1, d = 0; d < this.mediaFiles.length; d++) {
                        var e = this.mediaFiles[d], f = Math.sqrt(Math.pow(a.width - e.width, 2) + Math.pow(a.height - e.height, 2));
                        if (b > f) b = f, c = d; else if (f === b) {
                            var g = this.mediaFiles[c], h = g.bitrate || g.maxBitrate, i = e.bitrate || e.maxBitrate;
                            i && !h ? c = d : a.bitrate && h && i ? Math.abs(i - a.bitrate) < Math.abs(h - a.bitrate) && (c = d) : i > h && (c = d);
                        }
                    }
                    return -1 === c ? null : this.mediaFiles[c];
                };
                var t = [ "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "progress" ];
                o.prototype.getTrackingPoints = function() {
                    for (var a = this.tracking.getEventsOfTypes(t), b = [], c = 0; c < a.length; c++) {
                        var d = {
                            event: a[c].event,
                            offset: null
                        };
                        switch (a[c].event) {
                          case "start":
                            d.offset = "start";
                            break;

                          case "firstQuartile":
                            d.offset = "25%";
                            break;

                          case "midpoint":
                            d.offset = "50%";
                            break;

                          case "thirdQuartile":
                            d.offset = "75%";
                            break;

                          case "complete":
                            d.offset = "end";
                            break;

                          default:
                            var e = a[c].offset;
                            if (!e) continue;
                            d.offset = n.prototype.timecodeFromString(e);
                        }
                        b.push(d);
                    }
                    return b;
                }, p.prototype = Object.create(n.prototype), p.prototype.augment = function(a) {
                    this.tracking.augment(a.tracking), this.clickThrough = a.clickThrough || this.clickThrough,
                    this.resources.iframe = a.resources.iframe || this.resources.iframe, this.resources.html = a.resources.html || this.resources.html;
                    for (var b in a.resources.images) a.resources.images.hasOwnProperty(b) && (this.resources.images[b] = a.resources.images[b]);
                }, p.prototype.getAllResources = function() {
                    return this.resources;
                }, p.prototype.extractClicks = function(a) {
                    var b;
                    b = this.root.getElementsByTagName(a + "ClickThrough"), b.length && (this.clickThrough = g(b.item(0)).replace(/\s/g, "")),
                    b = this.root.getElementsByTagName(a + "ClickTracking");
                    for (var c = 0; c < b.length; c++) this.tracking.addClickTracking(g(b.item(c)).replace(/\s/g, ""));
                }, q.prototype = Object.create(p.prototype), q.prototype.copy = function(a) {
                    return new q(a, this.root);
                }, q.prototype.augment = function(a) {
                    p.prototype.augment.call(this, a), this.altText = a.altText || this.altText;
                }, q.prototype.getAltText = function() {
                    return this.altText;
                }, r.prototype = Object.create(p.prototype), r.prototype.augment = function(a) {
                    p.prototype.augment.call(this, a);
                }, r.prototype.copy = function(a) {
                    return new r(a, this.root);
                };
                var u = function() {};
                u.queryVMAP = k, u.queryVAST = i, e("undefined" != typeof u ? u : window.vastvmap);
            }.call(c, void 0, void 0, void 0, void 0, function(a) {
                b.exports = a;
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
        "/Users/nishimuratomoyuki/Developer/ULIZAPlayerPC/ulizaplayerjs/src/lib/Polyfill.js": 121
    } ]
}, {}, [ 103 ]);
