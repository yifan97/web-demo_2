//! Likely v0.91 by Ilya Birman - http://ilyabirman.net/projects/likely/
//! Likely v0.91 by Ilya Birman - http://ilyabirman.net/projects/likely/
//! Based on Social Likes v3.0.10 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t, e) {
    "use strict";

    function i(t, e) {
        this.container = t, this.options = e, this.init()
    }

    function n(e, i) {
        this.widget = e, this.options = t.extend({}, i), this.detectService(), this.service && this.init()
    }

    function r(t) {
        function e(t, e) {
            return e.toUpper()
        }
        var i = {},
            n = t.data();
        for (var r in n) {
            var s = n[r];
            "yes" === s ? s = !0 : "no" === s && (s = !1), i[r.replace(/-(\w)/g, e)] = s
        }
        return i
    }

    function s(t, e) {
        return o(t, e, encodeURIComponent)
    }

    function o(t, e, i) {
        return t.replace(/\{([^\}]+)\}/g, function(t, n) {
            return n in e ? i ? i(e[n]) : e[n] : t
        })
    }

    function c(t, e) {
        var i = u + t;
        return i + " " + i + "_" + e
    }
    var h = "likely",
        u = h + "__",
        l = "https:" === location.protocol ? "https:" : "http:",
        a = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M',
        p = 'z"/></svg>',
        v = {
            facebook: {
                svgi: "7.577 16V8.859H5.013V6.295h2.564V3.731c0-2.564 2.564-2.564 2.564-2.564h3.846v2.564h-3.846v2.564h3.846l-0.641 2.564h-3.205V16H7.577z",
                counterUrl: "https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",
                convertNumber: function(t) {
                    return t.data[0].total_count
                },
                popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
                popupWidth: 600,
                popupHeight: 500
            },
            twitter: {
                svgi: "15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",
                counterUrl: "https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
                convertNumber: function(t) {
                    return t.count
                },
                popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
                popupWidth: 600,
                popupHeight: 450,
                click: function() {
                    return /[\.:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
                }
            },
            vkontakte: {
                svgi: "3.347 1.834h4.456c0.925 0 1.629 0.034 2.106 0.107 0.477 0.069 0.925 0.217 1.342 0.442 0.45 0.243 0.79 0.57 1.012 0.974C12.487 3.764 12.6 4.232 12.6 4.766c0 0.615-0.153 1.163-0.463 1.643 -0.307 0.48-0.732 0.834-1.272 1.061v0.065c0.778 0.165 1.402 0.498 1.871 1.004 0.468 0.506 0.702 1.189 0.702 2.045 0 0.627-0.118 1.18-0.355 1.653 -0.237 0.475-0.555 0.865-0.957 1.177 -0.475 0.372-0.995 0.636-1.565 0.795 -0.567 0.159-1.286 0.238-2.163 0.238h-5.05V1.834L3.347 1.834zM6.499 4.145v2.669h0.399c0.541 0 0.924-0.005 1.139-0.017 0.217-0.01 0.442-0.069 0.674-0.176C8.963 6.503 9.14 6.34 9.235 6.13 9.33 5.919 9.379 5.676 9.379 5.4c0-0.206-0.052-0.414-0.156-0.627S8.958 4.404 8.734 4.308C8.526 4.215 8.28 4.166 7.994 4.157 7.708 4.148 7.282 4.145 6.719 4.145H6.499L6.499 4.145zM6.499 8.975v3.158h0.17c0.825 0 1.394-0.007 1.709-0.018 0.315-0.012 0.639-0.086 0.965-0.228 0.29-0.125 0.498-0.307 0.631-0.548 0.133-0.239 0.199-0.511 0.199-0.816 0-0.39-0.077-0.695-0.237-0.914C9.78 9.389 9.542 9.225 9.227 9.112 9.036 9.036 8.769 8.996 8.433 8.987c-0.336-0.008-0.786-0.012-1.35-0.012H6.499z",
                counterUrl: l + "//vk.com/share.php?act=count&url={url}&index={index}",
                counter: function(e, i) {
                    var n = v.vkontakte;
                    n._ || (n._ = [], window.VK || (window.VK = {}), window.VK.Share = {
                        count: function(t, e) {
                            n._[t].resolve(e)
                        }
                    });
                    var r = n._.length;
                    n._.push(i), t.getScript(s(e, {
                        index: r
                    })).fail(i.reject)
                },
                popupUrl: l + "//vk.com/share.php?url={url}&title={title}",
                popupWidth: 550,
                popupHeight: 330
            },
            gplus: {
                svgi: '16 7h-2V5h-1v2h-2v1h2v2h1V8h2z"/><path d="M5.334 16c-1.47-.012-2.593-.337-3.335-.968C1.24 14.44.853 13.71.853 12.86c0-.41.125-.87.37-1.363.242-.502.68-.947 1.302-1.315.676-.39 1.4-.654 2.152-.786.55-.08 1.014-.133 1.41-.16-.062-.102-.12-.206-.174-.31-.148-.236-.227-.534-.227-.878 0-.21.03-.385.093-.537l.002-.005c-.11.007-.217.01-.32.01-1.15-.015-2.04-.387-2.65-1.107-.625-.655-.945-1.44-.945-2.326 0-1.06.45-2.034 1.334-2.893C3.814.68 4.455.347 5.11.192 5.733.063 6.334 0 6.895 0H11.8L9.82 1.16l-.75.02c.16.172.31.366.456.597.145.228.278.504.394.82.1.327.148.704.148 1.124-.013.78-.19 1.414-.523 1.886-.16.222-.326.424-.503.612-.196.193-.4.374-.614.563-.096.104-.2.235-.295.38-.1.14-.145.283-.145.456 0 .156.043.282.127.374.11.14.206.247.3.343l.674.552c.44.362.83.765 1.163 1.204.334.47.508 1.084.522 1.824 0 1.056-.465 2-1.383 2.806-.94.824-2.305 1.254-4.054 1.28h-.004zm1.168-5.782c-.135 0-.36.015-.672.046-.4.056-.822.152-1.246.282-.09.033-.23.09-.41.17-.17.076-.346.188-.522.334-.16.143-.302.33-.42.55-.132.23-.196.5-.196.83 0 .645.286 1.167.875 1.592.574.433 1.38.66 2.397.673.898-.014 1.588-.21 2.05-.586.44-.365.652-.82.652-1.39 0-.46-.152-.864-.45-1.205-.336-.345-.887-.786-1.63-1.307l-.428.01zM5.636 1.13c-.485.015-.878.206-1.2.587-.273.403-.403.854-.39 1.366 0 .703.21 1.444.618 2.205.193.345.444.64.747.875.29.227.623.343.992.343.472-.02.858-.187 1.175-.512.132-.204.23-.445.27-.68.027-.246.042-.47.042-.648 0-.767-.2-1.552-.593-2.334-.177-.36-.41-.656-.695-.88-.275-.197-.6-.307-.966-.32',
                counterUrl: "http:" === l ? "http://share.yandex.ru/gpp.xml?url={url}" : e,
                counter: function(e, i) {
                    var n = v.gplus;
                    return n._ ? void i.reject() : (window.services || (window.services = {}), window.services.gplus = {
                        cb: function(t) {
                            n._.resolve(t)
                        }
                    }, n._ = i, void t.getScript(s(e)).fail(i.reject))
                },
                popupUrl: "https://plus.google.com/share?url={url}",
                popupWidth: 700,
                popupHeight: 500
            },
            pinterest: {
                svgi: "7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8",
                counterUrl: l + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                convertNumber: function(t) {
                    return t.count
                },
                popupUrl: l + "//pinterest.com/pin/create/button/?url={url}&description={title}",
                popupWidth: 630,
                popupHeight: 270
            },
            odnoklassniki: {
                svgi: "8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184",
                counterUrl: l + "//www.ok.ru/dk/?st.cmd=extLike&ref={url}&uid={index}",
                counter: function(e, i) {
                    var n = v.odnoklassniki;
                    n._ || (n._ = [], window.ODKL || (window.ODKL = {}), window.ODKL.updateCount = function(t, e) {
                        n._[t].resolve(e)
                    });
                    var r = n._.length;
                    n._.push(i), t.getScript(s(e, {
                        index: r
                    })).fail(i.reject)
                },
                popupUrl: "http://www.ok.ru/dk/?st.cmd=addShare&st._surl={url}",
                popupWidth: 550,
                popupHeight: 360
            }
        },
        d = {
            promises: {},
            fetch: function(e, i, n) {
                d.promises[e] || (d.promises[e] = {});
                var r = d.promises[e];
                if (!n.forceUpdate && r[i]) return r[i];
                var o = t.extend({}, v[e], n),
                    c = t.Deferred(),
                    h = o.counterUrl && s(o.counterUrl, {
                        url: i
                    });
                return h && t.isFunction(o.counter) ? o.counter(h, c) : o.counterUrl ? t.getJSON(h).done(function(e) {
                    try {
                        var i = e;
                        t.isFunction(o.convertNumber) && (i = o.convertNumber(e)), c.resolve(i)
                    } catch (n) {
                        c.reject()
                    }
                }).fail(c.reject) : c.reject(), r[i] = c.promise(), r[i]
            }
        };
    t.fn.socialLikes = function(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data(h);
            s ? t.isPlainObject(e) && s.update(e) : (s = new i(n, t.extend({}, t.fn.socialLikes.defaults, e, r(n))), n.data(h, s))
        })
    }, t.fn.socialLikes.defaults = {
        url: window.location.href.replace(window.location.hash, ""),
        title: document.title,
        counters: !0,
        zeroes: !1,
        wait: 1e3,
        popupCheckInterval: 500
    }, i.prototype = {
        init: function() {
            this.container.addClass(h), this.initUserButtons(), this.countersLeft = 0, this.number = 0, this.container.on("counter." + h, t.proxy(this.updateCounter, this));
            var e = this.container.children();
            this.buttons = [], e.each(t.proxy(function(e, i) {
                var r = new n(t(i), this.options);
                this.buttons.push(r), r.options.counterUrl && this.countersLeft++
            }, this)), this.options.counters ? this.timer = setTimeout(t.proxy(this.appear, this), this.options.wait) : this.appear()
        },
        initUserButtons: function() {
            !this.userButtonInited && window.socialLikesButtons && t.extend(!0, v, socialLikesButtons), this.userButtonInited = !0
        },
        update: function(e) {
            if (e.forceUpdate || e.url !== this.options.url) {
                this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + h + "__counter").remove(), t.extend(this.options, e);
                for (var i = 0; i < this.buttons.length; i++) this.buttons[i].update(e)
            }
        },
        updateCounter: function(t, e, i) {
            i && (this.number += i), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.container.addClass(h + "_ready"), this.container.trigger("ready." + h, this.number))
        },
        appear: function() {
            this.container.addClass(h + "_visible")
        },
        getCounterElem: function() {
            var e = this.widget.find("." + u + "counter_single");
            return e.length || (e = t("<span>", {
                "class": c("counter", "single")
            }), this.widget.append(e)), e
        }
    }, n.prototype = {
        init: function() {
            this.detectParams(), this.initHtml(), setTimeout(t.proxy(this.initCounter, this), 0)
        },
        update: function(e) {
            t.extend(this.options, {
                forceUpdate: !1
            }, e), this.widget.find("." + h + "__counter").remove(), this.initCounter()
        },
        detectService: function() {
            var e = this.widget.data("service");
            if (!e) {
                for (var i = this.widget[0], n = i.classList || i.className.split(" "), r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (v[s]) {
                        e = s;
                        break
                    }
                }
                if (!e) return
            }
            this.service = e, t.extend(this.options, v[e])
        },
        detectParams: function() {
            var t = this.widget.data();
            if (t.counter) {
                var e = parseInt(t.counter, 10);
                isNaN(e) ? this.options.counterUrl = t.counter : this.options.counterNumber = e
            }
            t.title && (this.options.title = t.title), t.url && (this.options.url = t.url)
        },
        initHtml: function() {
            var e = this.options,
                i = this.widget,
                n = t("<span>", {
                    "class": this.getElementClassNames("button"),
                    text: i.text()
                });
            if (e.clickUrl) {
                var r = s(e.clickUrl, {
                        url: e.url,
                        title: e.title
                    }),
                    o = t("<a>", {
                        href: r
                    });
                this.cloneDataAttrs(i, o), i.replaceWith(o), this.widget = i = o
            } else i.click(t.proxy(this.click, this));
            i.removeClass(this.service), i.addClass(this.getElementClassNames("widget"));
            var c = t('<span class="likely__icon">' + a + e.svgi + p + "</span>", {
                "class": this.getElementClassNames("icon")
            });
            i.empty().append(c).append(n), this.button = n
        },
        initCounter: function() {
            if (this.options.counters)
                if (this.options.counterNumber) this.updateCounter(this.options.counterNumber);
                else {
                    var e = {
                        counterUrl: this.options.counterUrl,
                        forceUpdate: this.options.forceUpdate
                    };
                    d.fetch(this.service, this.options.url, e).always(t.proxy(this.updateCounter, this))
                }
        },
        cloneDataAttrs: function(t, e) {
            var i = t.data();
            for (var n in i) i.hasOwnProperty(n) && e.data(n, i[n])
        },
        getElementClassNames: function(t) {
            return c(t, this.service)
        },
        updateCounter: function(e) {
            e = parseInt(e, 10) || 0;
            var i = {
                "class": this.getElementClassNames("counter"),
                text: e
            };
            e || this.options.zeroes || (i["class"] += " " + h + "__counter_empty", i.text = "");
            var n = t("<span>", i);
            this.widget.append(n), this.widget.trigger("counter." + h, [this.service, e])
        },
        click: function(e) {
            var i = this.options,
                n = !0;
            if (t.isFunction(i.click) && (n = i.click.call(this, e)), n) {
                var r = s(i.popupUrl, {
                    url: i.url,
                    title: i.title
                });
                r = this.addAdditionalParamsToUrl(r), this.openPopup(r, {
                    width: i.popupWidth,
                    height: i.popupHeight
                })
            }
            return !1
        },
        addAdditionalParamsToUrl: function(e) {
            var i = t.param(t.extend(this.widget.data(), this.options.data));
            if (t.isEmptyObject(i)) return e;
            var n = -1 === e.indexOf("?") ? "?" : "&";
            return e + n + i
        },
        openPopup: function(e, i) {
            var n = Math.round(screen.width / 2 - i.width / 2),
                r = 0;
            screen.height > i.height && (r = Math.round(screen.height / 3 - i.height / 2));
            var s = window.open(e, "sl_" + this.service, "left=" + n + ",top=" + r + ",width=" + i.width + ",height=" + i.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
            if (s) {
                s.focus(), this.widget.trigger("popup_opened." + h, [this.service, s]);
                var o = setInterval(t.proxy(function() {
                    s.closed && (clearInterval(o), this.widget.trigger("popup_closed." + h, this.service))
                }, this), this.options.popupCheckInterval)
            } else location.href = e
        }
    }, t(function() {
        t("." + h).socialLikes()
    })
});