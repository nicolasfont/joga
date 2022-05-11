(function (p, g) {
  typeof exports == "object" && typeof module != "undefined"
    ? g(exports, require("react"))
    : typeof define == "function" && define.amd
    ? define(["exports", "react"], g)
    : ((p = typeof globalThis != "undefined" ? globalThis : p || self),
      g((p.joga = {}), p.React));
})(this, function (p, g) {
  "use strict";
  var Or = Object.defineProperty;
  var re = Object.getOwnPropertySymbols;
  var je = Object.prototype.hasOwnProperty,
    Me = Object.prototype.propertyIsEnumerable;
  var Pe = (p, g, w) =>
      g in p
        ? Or(p, g, { enumerable: !0, configurable: !0, writable: !0, value: w })
        : (p[g] = w),
    oe = (p, g) => {
      for (var w in g || (g = {})) je.call(g, w) && Pe(p, w, g[w]);
      if (re) for (var w of re(g)) Me.call(g, w) && Pe(p, w, g[w]);
      return p;
    };
  var ue = (p, g) => {
    var w = {};
    for (var R in p) je.call(p, R) && g.indexOf(R) < 0 && (w[R] = p[R]);
    if (p != null && re)
      for (var R of re(p)) g.indexOf(R) < 0 && Me.call(p, R) && (w[R] = p[R]);
    return w;
  };
  function w(e) {
    return e && typeof e == "object" && "default" in e ? e : { default: e };
  }
  var R = w(g);
  function Ie(e) {
    if (e.sheet) return e.sheet;
    for (var r = 0; r < document.styleSheets.length; r++)
      if (document.styleSheets[r].ownerNode === e)
        return document.styleSheets[r];
  }
  function _e(e) {
    var r = document.createElement("style");
    return (
      r.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && r.setAttribute("nonce", e.nonce),
      r.appendChild(document.createTextNode("")),
      r.setAttribute("data-s", ""),
      r
    );
  }
  var Le = (function () {
      function e(t) {
        var n = this;
        (this._insertTag = function (a) {
          var s;
          n.tags.length === 0
            ? n.insertionPoint
              ? (s = n.insertionPoint.nextSibling)
              : n.prepend
              ? (s = n.container.firstChild)
              : (s = n.before)
            : (s = n.tags[n.tags.length - 1].nextSibling),
            n.container.insertBefore(a, s),
            n.tags.push(a);
        }),
          (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = t.nonce),
          (this.key = t.key),
          (this.container = t.container),
          (this.prepend = t.prepend),
          (this.insertionPoint = t.insertionPoint),
          (this.before = null);
      }
      var r = e.prototype;
      return (
        (r.hydrate = function (n) {
          n.forEach(this._insertTag);
        }),
        (r.insert = function (n) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(_e(this));
          var a = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var s = Ie(a);
            try {
              s.insertRule(n, s.cssRules.length);
            } catch {}
          } else a.appendChild(document.createTextNode(n));
          this.ctr++;
        }),
        (r.flush = function () {
          this.tags.forEach(function (n) {
            return n.parentNode && n.parentNode.removeChild(n);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    v = "-ms-",
    H = "-moz-",
    u = "-webkit-",
    de = "comm",
    te = "rule",
    ne = "decl",
    Ge = "@import",
    he = "@keyframes",
    We = Math.abs,
    V = String.fromCharCode,
    Be = Object.assign;
  function ze(e, r) {
    return (
      (((((((r << 2) ^ C(e, 0)) << 2) ^ C(e, 1)) << 2) ^ C(e, 2)) << 2) ^
      C(e, 3)
    );
  }
  function le(e) {
    return e.trim();
  }
  function Fe(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
  }
  function d(e, r, t) {
    return e.replace(r, t);
  }
  function ae(e, r) {
    return e.indexOf(r);
  }
  function C(e, r) {
    return e.charCodeAt(r) | 0;
  }
  function B(e, r, t) {
    return e.slice(r, t);
  }
  function T(e) {
    return e.length;
  }
  function se(e) {
    return e.length;
  }
  function K(e, r) {
    return r.push(e), e;
  }
  function De(e, r) {
    return e.map(r).join("");
  }
  var U = 1,
    L = 1,
    pe = 0,
    k = 0,
    y = 0,
    G = "";
  function Y(e, r, t, n, a, s, i) {
    return {
      value: e,
      root: r,
      parent: t,
      type: n,
      props: a,
      children: s,
      line: U,
      column: L,
      length: i,
      return: "",
    };
  }
  function z(e, r) {
    return Be(
      Y("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      r
    );
  }
  function qe() {
    return y;
  }
  function He() {
    return (y = k > 0 ? C(G, --k) : 0), L--, y === 10 && ((L = 1), U--), y;
  }
  function E() {
    return (y = k < pe ? C(G, k++) : 0), L++, y === 10 && ((L = 1), U++), y;
  }
  function N() {
    return C(G, k);
  }
  function Z() {
    return k;
  }
  function F(e, r) {
    return B(G, e, r);
  }
  function D(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function me(e) {
    return (U = L = 1), (pe = T((G = e))), (k = 0), [];
  }
  function be(e) {
    return (G = ""), e;
  }
  function J(e) {
    return le(F(k - 1, ie(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Ve(e) {
    for (; (y = N()) && y < 33; ) E();
    return D(e) > 2 || D(y) > 3 ? "" : " ";
  }
  function Ke(e, r) {
    for (
      ;
      --r &&
      E() &&
      !(y < 48 || y > 102 || (y > 57 && y < 65) || (y > 70 && y < 97));

    );
    return F(e, Z() + (r < 6 && N() == 32 && E() == 32));
  }
  function ie(e) {
    for (; E(); )
      switch (y) {
        case e:
          return k;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ie(y);
          break;
        case 40:
          e === 41 && ie(e);
          break;
        case 92:
          E();
          break;
      }
    return k;
  }
  function Ue(e, r) {
    for (; E() && e + y !== 47 + 10; )
      if (e + y === 42 + 42 && N() === 47) break;
    return "/*" + F(r, k - 1) + "*" + V(e === 47 ? e : E());
  }
  function Ye(e) {
    for (; !D(N()); ) E();
    return F(e, k);
  }
  function Ze(e) {
    return be(Q("", null, null, null, [""], (e = me(e)), 0, [0], e));
  }
  function Q(e, r, t, n, a, s, i, c, o) {
    for (
      var h = 0,
        f = 0,
        l = i,
        O = 0,
        I = 0,
        A = 0,
        m = 1,
        $ = 1,
        x = 1,
        S = 0,
        j = "",
        ee = a,
        _ = s,
        M = n,
        b = j;
      $;

    )
      switch (((A = S), (S = E()))) {
        case 40:
          if (A != 108 && b.charCodeAt(l - 1) == 58) {
            ae((b += d(J(S), "&", "&\f")), "&\f") != -1 && (x = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          b += J(S);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          b += Ve(A);
          break;
        case 92:
          b += Ke(Z() - 1, 7);
          continue;
        case 47:
          switch (N()) {
            case 42:
            case 47:
              K(Je(Ue(E(), Z()), r, t), o);
              break;
            default:
              b += "/";
          }
          break;
        case 123 * m:
          c[h++] = T(b) * x;
        case 125 * m:
        case 59:
        case 0:
          switch (S) {
            case 0:
            case 125:
              $ = 0;
            case 59 + f:
              I > 0 &&
                T(b) - l &&
                K(
                  I > 32
                    ? ge(b + ";", n, t, l - 1)
                    : ge(d(b, " ", "") + ";", n, t, l - 2),
                  o
                );
              break;
            case 59:
              b += ";";
            default:
              if (
                (K((M = ye(b, r, t, h, f, a, c, j, (ee = []), (_ = []), l)), s),
                S === 123)
              )
                if (f === 0) Q(b, r, M, M, ee, s, l, c, _);
                else
                  switch (O) {
                    case 100:
                    case 109:
                    case 115:
                      Q(
                        e,
                        M,
                        M,
                        n && K(ye(e, M, M, 0, 0, a, c, j, a, (ee = []), l), _),
                        a,
                        _,
                        l,
                        c,
                        n ? ee : _
                      );
                      break;
                    default:
                      Q(b, M, M, M, [""], _, 0, c, _);
                  }
          }
          (h = f = I = 0), (m = x = 1), (j = b = ""), (l = i);
          break;
        case 58:
          (l = 1 + T(b)), (I = A);
        default:
          if (m < 1) {
            if (S == 123) --m;
            else if (S == 125 && m++ == 0 && He() == 125) continue;
          }
          switch (((b += V(S)), S * m)) {
            case 38:
              x = f > 0 ? 1 : ((b += "\f"), -1);
              break;
            case 44:
              (c[h++] = (T(b) - 1) * x), (x = 1);
              break;
            case 64:
              N() === 45 && (b += J(E())),
                (O = N()),
                (f = l = T((j = b += Ye(Z())))),
                S++;
              break;
            case 45:
              A === 45 && T(b) == 2 && (m = 0);
          }
      }
    return s;
  }
  function ye(e, r, t, n, a, s, i, c, o, h, f) {
    for (
      var l = a - 1, O = a === 0 ? s : [""], I = se(O), A = 0, m = 0, $ = 0;
      A < n;
      ++A
    )
      for (var x = 0, S = B(e, l + 1, (l = We((m = i[A])))), j = e; x < I; ++x)
        (j = le(m > 0 ? O[x] + " " + S : d(S, /&\f/g, O[x]))) && (o[$++] = j);
    return Y(e, r, t, a === 0 ? te : c, o, h, f);
  }
  function Je(e, r, t) {
    return Y(e, r, t, de, V(qe()), B(e, 2, -2), 0);
  }
  function ge(e, r, t, n) {
    return Y(e, r, t, ne, B(e, 0, n), B(e, n + 1, -1), n);
  }
  function xe(e, r) {
    switch (ze(e, r)) {
      case 5103:
        return u + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return u + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return u + e + H + e + v + e + e;
      case 6828:
      case 4268:
        return u + e + v + e + e;
      case 6165:
        return u + e + v + "flex-" + e + e;
      case 5187:
        return (
          u + e + d(e, /(\w+).+(:[^]+)/, u + "box-$1$2" + v + "flex-$1$2") + e
        );
      case 5443:
        return u + e + v + "flex-item-" + d(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          u +
          e +
          v +
          "flex-line-pack" +
          d(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return u + e + v + d(e, "shrink", "negative") + e;
      case 5292:
        return u + e + v + d(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          u +
          "box-" +
          d(e, "-grow", "") +
          u +
          e +
          v +
          d(e, "grow", "positive") +
          e
        );
      case 4554:
        return u + d(e, /([^-])(transform)/g, "$1" + u + "$2") + e;
      case 6187:
        return (
          d(d(d(e, /(zoom-|grab)/, u + "$1"), /(image-set)/, u + "$1"), e, "") +
          e
        );
      case 5495:
      case 3959:
        return d(e, /(image-set\([^]*)/, u + "$1$`$1");
      case 4968:
        return (
          d(
            d(e, /(.+:)(flex-)?(.*)/, u + "box-pack:$3" + v + "flex-pack:$3"),
            /s.+-b[^;]+/,
            "justify"
          ) +
          u +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return d(e, /(.+)-inline(.+)/, u + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (T(e) - 1 - r > 6)
          switch (C(e, r + 1)) {
            case 109:
              if (C(e, r + 4) !== 45) break;
            case 102:
              return (
                d(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    u +
                    "$2-$3$1" +
                    H +
                    (C(e, r + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~ae(e, "stretch")
                ? xe(d(e, "stretch", "fill-available"), r) + e
                : e;
          }
        break;
      case 4949:
        if (C(e, r + 1) !== 115) break;
      case 6444:
        switch (C(e, T(e) - 3 - (~ae(e, "!important") && 10))) {
          case 107:
            return d(e, ":", ":" + u) + e;
          case 101:
            return (
              d(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  u +
                  (C(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  u +
                  "$2$3$1" +
                  v +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (C(e, r + 11)) {
          case 114:
            return u + e + v + d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return u + e + v + d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return u + e + v + d(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return u + e + v + e + e;
    }
    return e;
  }
  function W(e, r) {
    for (var t = "", n = se(e), a = 0; a < n; a++) t += r(e[a], a, e, r) || "";
    return t;
  }
  function Qe(e, r, t, n) {
    switch (e.type) {
      case Ge:
      case ne:
        return (e.return = e.return || e.value);
      case de:
        return "";
      case he:
        return (e.return = e.value + "{" + W(e.children, n) + "}");
      case te:
        e.value = e.props.join(",");
    }
    return T((t = W(e.children, n)))
      ? (e.return = e.value + "{" + t + "}")
      : "";
  }
  function Xe(e) {
    var r = se(e);
    return function (t, n, a, s) {
      for (var i = "", c = 0; c < r; c++) i += e[c](t, n, a, s) || "";
      return i;
    };
  }
  function er(e) {
    return function (r) {
      r.root || ((r = r.return) && e(r));
    };
  }
  function rr(e, r, t, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case ne:
          e.return = xe(e.value, e.length);
          break;
        case he:
          return W([z(e, { value: d(e.value, "@", "@" + u) })], n);
        case te:
          if (e.length)
            return De(e.props, function (a) {
              switch (Fe(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return W(
                    [z(e, { props: [d(a, /:(read-\w+)/, ":" + H + "$1")] })],
                    n
                  );
                case "::placeholder":
                  return W(
                    [
                      z(e, {
                        props: [d(a, /:(plac\w+)/, ":" + u + "input-$1")],
                      }),
                      z(e, { props: [d(a, /:(plac\w+)/, ":" + H + "$1")] }),
                      z(e, { props: [d(a, /:(plac\w+)/, v + "input-$1")] }),
                    ],
                    n
                  );
              }
              return "";
            });
      }
  }
  function tr(e) {
    var r = {};
    return function (t) {
      return r[t] === void 0 && (r[t] = e(t)), r[t];
    };
  }
  var nr = function (r, t, n) {
      for (
        var a = 0, s = 0;
        (a = s), (s = N()), a === 38 && s === 12 && (t[n] = 1), !D(s);

      )
        E();
      return F(r, k);
    },
    ar = function (r, t) {
      var n = -1,
        a = 44;
      do
        switch (D(a)) {
          case 0:
            a === 38 && N() === 12 && (t[n] = 1), (r[n] += nr(k - 1, t, n));
            break;
          case 2:
            r[n] += J(a);
            break;
          case 4:
            if (a === 44) {
              (r[++n] = N() === 58 ? "&\f" : ""), (t[n] = r[n].length);
              break;
            }
          default:
            r[n] += V(a);
        }
      while ((a = E()));
      return r;
    },
    sr = function (r, t) {
      return be(ar(me(r), t));
    },
    we = new WeakMap(),
    ir = function (r) {
      if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
        for (
          var t = r.value,
            n = r.parent,
            a = r.column === n.column && r.line === n.line;
          n.type !== "rule";

        )
          if (((n = n.parent), !n)) return;
        if (
          !(r.props.length === 1 && t.charCodeAt(0) !== 58 && !we.get(n)) &&
          !a
        ) {
          we.set(r, !0);
          for (
            var s = [], i = sr(t, s), c = n.props, o = 0, h = 0;
            o < i.length;
            o++
          )
            for (var f = 0; f < c.length; f++, h++)
              r.props[h] = s[o]
                ? i[o].replace(/&\f/g, c[f])
                : c[f] + " " + i[o];
        }
      }
    },
    cr = function (r) {
      if (r.type === "decl") {
        var t = r.value;
        t.charCodeAt(0) === 108 &&
          t.charCodeAt(2) === 98 &&
          ((r.return = ""), (r.value = ""));
      }
    },
    fr = [rr],
    or = function (r) {
      var t = r.key;
      if (t === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (m) {
          var $ = m.getAttribute("data-emotion");
          $.indexOf(" ") !== -1 &&
            (document.head.appendChild(m), m.setAttribute("data-s", ""));
        });
      }
      var a = r.stylisPlugins || fr,
        s = {},
        i,
        c = [];
      (i = r.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (m) {
            for (
              var $ = m.getAttribute("data-emotion").split(" "), x = 1;
              x < $.length;
              x++
            )
              s[$[x]] = !0;
            c.push(m);
          }
        );
      var o,
        h = [ir, cr];
      {
        var f,
          l = [
            Qe,
            er(function (m) {
              f.insert(m);
            }),
          ],
          O = Xe(h.concat(a, l)),
          I = function ($) {
            return W(Ze($), O);
          };
        o = function ($, x, S, j) {
          (f = S),
            I($ ? $ + "{" + x.styles + "}" : x.styles),
            j && (A.inserted[x.name] = !0);
        };
      }
      var A = {
        key: t,
        sheet: new Le({
          key: t,
          container: i,
          nonce: r.nonce,
          speedy: r.speedy,
          prepend: r.prepend,
          insertionPoint: r.insertionPoint,
        }),
        nonce: r.nonce,
        inserted: s,
        registered: {},
        insert: o,
      };
      return A.sheet.hydrate(c), A;
    };
  function ur(e) {
    for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
      (t =
        (e.charCodeAt(n) & 255) |
        ((e.charCodeAt(++n) & 255) << 8) |
        ((e.charCodeAt(++n) & 255) << 16) |
        ((e.charCodeAt(++n) & 255) << 24)),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        (t ^= t >>> 24),
        (r =
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
    switch (a) {
      case 3:
        r ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        r ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        (r ^= e.charCodeAt(n) & 255),
          (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
    }
    return (
      (r ^= r >>> 13),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      ((r ^ (r >>> 15)) >>> 0).toString(36)
    );
  }
  var dr = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    hr = /[A-Z]|^ms/g,
    lr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    ve = function (r) {
      return r.charCodeAt(1) === 45;
    },
    Se = function (r) {
      return r != null && typeof r != "boolean";
    },
    ce = tr(function (e) {
      return ve(e) ? e : e.replace(hr, "-$&").toLowerCase();
    }),
    Ce = function (r, t) {
      switch (r) {
        case "animation":
        case "animationName":
          if (typeof t == "string")
            return t.replace(lr, function (n, a, s) {
              return (P = { name: a, styles: s, next: P }), a;
            });
      }
      return dr[r] !== 1 && !ve(r) && typeof t == "number" && t !== 0
        ? t + "px"
        : t;
    };
  function q(e, r, t) {
    if (t == null) return "";
    if (t.__emotion_styles !== void 0) return t;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        if (t.anim === 1)
          return (P = { name: t.name, styles: t.styles, next: P }), t.name;
        if (t.styles !== void 0) {
          var n = t.next;
          if (n !== void 0)
            for (; n !== void 0; )
              (P = { name: n.name, styles: n.styles, next: P }), (n = n.next);
          var a = t.styles + ";";
          return a;
        }
        return pr(e, r, t);
      }
      case "function": {
        if (e !== void 0) {
          var s = P,
            i = t(e);
          return (P = s), q(e, r, i);
        }
        break;
      }
    }
    if (r == null) return t;
    var c = r[t];
    return c !== void 0 ? c : t;
  }
  function pr(e, r, t) {
    var n = "";
    if (Array.isArray(t))
      for (var a = 0; a < t.length; a++) n += q(e, r, t[a]) + ";";
    else
      for (var s in t) {
        var i = t[s];
        if (typeof i != "object")
          r != null && r[i] !== void 0
            ? (n += s + "{" + r[i] + "}")
            : Se(i) && (n += ce(s) + ":" + Ce(s, i) + ";");
        else if (
          Array.isArray(i) &&
          typeof i[0] == "string" &&
          (r == null || r[i[0]] === void 0)
        )
          for (var c = 0; c < i.length; c++)
            Se(i[c]) && (n += ce(s) + ":" + Ce(s, i[c]) + ";");
        else {
          var o = q(e, r, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += ce(s) + ":" + o + ";";
              break;
            }
            default:
              n += s + "{" + o + "}";
          }
        }
      }
    return n;
  }
  var ke = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    P,
    fe = function (r, t, n) {
      if (
        r.length === 1 &&
        typeof r[0] == "object" &&
        r[0] !== null &&
        r[0].styles !== void 0
      )
        return r[0];
      var a = !0,
        s = "";
      P = void 0;
      var i = r[0];
      i == null || i.raw === void 0
        ? ((a = !1), (s += q(n, t, i)))
        : (s += i[0]);
      for (var c = 1; c < r.length; c++) (s += q(n, t, r[c])), a && (s += i[c]);
      ke.lastIndex = 0;
      for (var o = "", h; (h = ke.exec(s)) !== null; ) o += "-" + h[1];
      var f = ur(s) + o;
      return { name: f, styles: s, next: P };
    },
    mr = !0;
  function $e(e, r, t) {
    var n = "";
    return (
      t.split(" ").forEach(function (a) {
        e[a] !== void 0 ? r.push(e[a] + ";") : (n += a + " ");
      }),
      n
    );
  }
  var br = function (r, t, n) {
      var a = r.key + "-" + t.name;
      (n === !1 || mr === !1) &&
        r.registered[a] === void 0 &&
        (r.registered[a] = t.styles);
    },
    yr = function (r, t, n) {
      br(r, t, n);
      var a = r.key + "-" + t.name;
      if (r.inserted[t.name] === void 0) {
        var s = t;
        do r.insert(t === s ? "." + a : "", s, r.sheet, !0), (s = s.next);
        while (s !== void 0);
      }
    };
  function Ee(e, r) {
    if (e.inserted[r.name] === void 0) return e.insert("", r, e.sheet, !0);
  }
  function Ae(e, r, t) {
    var n = [],
      a = $e(e, n, t);
    return n.length < 2 ? t : a + r(n);
  }
  var gr = function (r) {
      var t = or(r);
      (t.sheet.speedy = function (c) {
        this.isSpeedy = c;
      }),
        (t.compat = !0);
      var n = function () {
          for (var o = arguments.length, h = new Array(o), f = 0; f < o; f++)
            h[f] = arguments[f];
          var l = fe(h, t.registered, void 0);
          return yr(t, l, !1), t.key + "-" + l.name;
        },
        a = function () {
          for (var o = arguments.length, h = new Array(o), f = 0; f < o; f++)
            h[f] = arguments[f];
          var l = fe(h, t.registered),
            O = "animation-" + l.name;
          return (
            Ee(t, {
              name: l.name,
              styles: "@keyframes " + O + "{" + l.styles + "}",
            }),
            O
          );
        },
        s = function () {
          for (var o = arguments.length, h = new Array(o), f = 0; f < o; f++)
            h[f] = arguments[f];
          var l = fe(h, t.registered);
          Ee(t, l);
        },
        i = function () {
          for (var o = arguments.length, h = new Array(o), f = 0; f < o; f++)
            h[f] = arguments[f];
          return Ae(t.registered, n, xr(h));
        };
      return {
        css: n,
        cx: i,
        injectGlobal: s,
        keyframes: a,
        hydrate: function (o) {
          o.forEach(function (h) {
            t.inserted[h] = !0;
          });
        },
        flush: function () {
          (t.registered = {}), (t.inserted = {}), t.sheet.flush();
        },
        sheet: t.sheet,
        cache: t,
        getRegisteredStyles: $e.bind(null, t.registered),
        merge: Ae.bind(null, t.registered, n),
      };
    },
    xr = function e(r) {
      for (var t = "", n = 0; n < r.length; n++) {
        var a = r[n];
        if (a != null) {
          var s = void 0;
          switch (typeof a) {
            case "boolean":
              break;
            case "object": {
              if (Array.isArray(a)) s = e(a);
              else {
                s = "";
                for (var i in a) a[i] && i && (s && (s += " "), (s += i));
              }
              break;
            }
            default:
              s = a;
          }
          s && (t && (t += " "), (t += s));
        }
      }
      return t;
    },
    wr = gr({ key: "css" }),
    Re = wr.css,
    Oe = { exports: {} },
    X = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var vr = R.default,
    Sr = Symbol.for("react.element"),
    Cr = Symbol.for("react.fragment"),
    kr = Object.prototype.hasOwnProperty,
    $r =
      vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Er = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(e, r, t) {
    var n,
      a = {},
      s = null,
      i = null;
    t !== void 0 && (s = "" + t),
      r.key !== void 0 && (s = "" + r.key),
      r.ref !== void 0 && (i = r.ref);
    for (n in r) kr.call(r, n) && !Er.hasOwnProperty(n) && (a[n] = r[n]);
    if (e && e.defaultProps)
      for (n in ((r = e.defaultProps), r)) a[n] === void 0 && (a[n] = r[n]);
    return {
      $$typeof: Sr,
      type: e,
      key: s,
      ref: i,
      props: a,
      _owner: $r.current,
    };
  }
  (X.Fragment = Cr), (X.jsx = Te), (X.jsxs = Te), (Oe.exports = X);
  const Ne = Oe.exports.jsx,
    Ar = (r) => {
      var e = ue(r, []);
      return Ne(
        "div",
        oe(
          {
            className: Re`
      display: flex;
    `,
          },
          e
        )
      );
    },
    Rr = (r) => {
      var e = ue(r, []);
      return Ne(
        "button",
        oe(
          {
            type: "button",
            className: Re`
        background-color: #1ea7fd;
        border: 0;
        border-radius: 3em;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.6;
        padding: 11px 20px;
      `,
          },
          e
        )
      );
    };
  (p.Box = Ar),
    (p.Button = Rr),
    Object.defineProperties(p, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    });
});
