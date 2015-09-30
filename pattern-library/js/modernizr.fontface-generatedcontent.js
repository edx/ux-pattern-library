/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-generatedcontent-cssclasses-teststyles-cssclassprefix:supports!
 */

window.Modernizr = function (a, b, c) {
    function w(a) {
        j.cssText = a;
    }

    function x(a, b) {
        return w(prefixes.join(a + ";") + (b || ""));
    }

    function y(a, b) {
        return typeof a === b;
    }

    function z(a, b) {
        return !!~("" + a).indexOf(b);
    }

    function A(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    var d = "2.7.1",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k, l = ":)",
        m = {}.toString,
        n = {},
        o = {},
        p = {},
        q = [],
        r = q.slice,
        s, t = function (a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
        },
        u = {}.hasOwnProperty,
        v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function (a, b) {
        return u.call(a, b);
    } : v = function (a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = r.call(arguments, 1),
            e = function () {
                if (this instanceof e) {
                    var a = function () {};
                    a.prototype = c.prototype;
                    var f = new a(),
                        g = c.apply(f, d.concat(r.call(arguments)));
                    return Object(g) === g ? g : f;
                }
                return c.apply(b, d.concat(r.call(arguments)));
            };
        return e;
    }), n.fontface = function () {
        var a;
        return t('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
            var e = b.getElementById("smodernizr"),
                f = e.sheet || e.styleSheet,
                g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
        }), a;
    }, n.generatedcontent = function () {
        var a;
        return t(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
            a = b.offsetHeight >= 3;
        }), a;
    };
    for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
    return e.addTest = function (a, b) {
        if (typeof a == "object")
            for (var d in a) v(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " supports-" + (b ? "" : "no-") + a), e[a] = b;
        }
        return e;
    }, w(""), i = k = null, e._version = d, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " supports-js supports-" + q.join(" supports-") : ""), e;
}(this, this.document);
