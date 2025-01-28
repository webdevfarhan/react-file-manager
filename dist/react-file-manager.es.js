import * as De from "react";
import Pe, { useState as M, useRef as fe, useEffect as ne, createContext as Ie, useContext as $e, useCallback as dr, useLayoutEffect as ln, useMemo as yt } from "react";
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function dn() {
  if (_t) return ze;
  _t = 1;
  var e = Pe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, u, h) {
    var d, p = {}, R = null, F = null;
    h !== void 0 && (R = "" + h), u.key !== void 0 && (R = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (d in u) s.call(u, d) && !c.hasOwnProperty(d) && (p[d] = u[d]);
    if (l && l.defaultProps) for (d in u = l.defaultProps, u) p[d] === void 0 && (p[d] = u[d]);
    return { $$typeof: r, type: l, key: R, ref: F, props: p, _owner: a.current };
  }
  return ze.Fragment = n, ze.jsx = i, ze.jsxs = i, ze;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function fn() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), S = Symbol.iterator, N = "@@iterator";
    function D(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = S && o[S] || o[N];
      return typeof m == "function" ? m : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(o) {
      {
        for (var m = arguments.length, T = new Array(m > 1 ? m - 1 : 0), B = 1; B < m; B++)
          T[B - 1] = arguments[B];
        y("error", o, T);
      }
    }
    function y(o, m, T) {
      {
        var B = C.ReactDebugCurrentFrame, ee = B.getStackAddendum();
        ee !== "" && (m += "%s", T = T.concat([ee]));
        var ie = T.map(function(Q) {
          return String(Q);
        });
        ie.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, ie);
      }
    }
    var b = !1, f = !1, v = !1, _ = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function L(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === s || o === c || x || o === a || o === h || o === d || _ || o === F || b || f || v || typeof o == "object" && o !== null && (o.$$typeof === R || o.$$typeof === p || o.$$typeof === i || o.$$typeof === l || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === w || o.getModuleId !== void 0));
    }
    function k(o, m, T) {
      var B = o.displayName;
      if (B)
        return B;
      var ee = m.displayName || m.name || "";
      return ee !== "" ? T + "(" + ee + ")" : T;
    }
    function z(o) {
      return o.displayName || "Context";
    }
    function H(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var m = o;
            return z(m) + ".Consumer";
          case i:
            var T = o;
            return z(T._context) + ".Provider";
          case u:
            return k(o, o.render, "ForwardRef");
          case p:
            var B = o.displayName || null;
            return B !== null ? B : H(o.type) || "Memo";
          case R: {
            var ee = o, ie = ee._payload, Q = ee._init;
            try {
              return H(Q(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, se = 0, oe, ce, ae, xe, g, P, Y;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function I() {
      {
        if (se === 0) {
          oe = console.log, ce = console.info, ae = console.warn, xe = console.error, g = console.group, P = console.groupCollapsed, Y = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        se++;
      }
    }
    function X() {
      {
        if (se--, se === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, o, {
              value: oe
            }),
            info: A({}, o, {
              value: ce
            }),
            warn: A({}, o, {
              value: ae
            }),
            error: A({}, o, {
              value: xe
            }),
            group: A({}, o, {
              value: g
            }),
            groupCollapsed: A({}, o, {
              value: P
            }),
            groupEnd: A({}, o, {
              value: Y
            })
          });
        }
        se < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = C.ReactCurrentDispatcher, $;
    function q(o, m, T) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (ee) {
            var B = ee.stack.trim().match(/\n( *(at )?)/);
            $ = B && B[1] || "";
          }
        return `
` + $ + o;
      }
    }
    var J = !1, K;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      K = new he();
    }
    function E(o, m) {
      if (!o || J)
        return "";
      {
        var T = K.get(o);
        if (T !== void 0)
          return T;
      }
      var B;
      J = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = O.current, O.current = null, I();
      try {
        if (m) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Ce) {
              B = Ce;
            }
            Reflect.construct(o, [], Q);
          } else {
            try {
              Q.call();
            } catch (Ce) {
              B = Ce;
            }
            o.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            B = Ce;
          }
          o();
        }
      } catch (Ce) {
        if (Ce && B && typeof Ce.stack == "string") {
          for (var G = Ce.stack.split(`
`), me = B.stack.split(`
`), le = G.length - 1, de = me.length - 1; le >= 1 && de >= 0 && G[le] !== me[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (G[le] !== me[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || G[le] !== me[de]) {
                    var be = `
` + G[le].replace(" at new ", " at ");
                    return o.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", o.displayName)), typeof o == "function" && K.set(o, be), be;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        J = !1, O.current = ie, X(), Error.prepareStackTrace = ee;
      }
      var ke = o ? o.displayName || o.name : "", Me = ke ? q(ke) : "";
      return typeof o == "function" && K.set(o, Me), Me;
    }
    function ve(o, m, T) {
      return E(o, !1);
    }
    function Te(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function U(o, m, T) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return E(o, Te(o));
      if (typeof o == "string")
        return q(o);
      switch (o) {
        case h:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return ve(o.render);
          case p:
            return U(o.type, m, T);
          case R: {
            var B = o, ee = B._payload, ie = B._init;
            try {
              return U(ie(ee), m, T);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, je = {}, Re = C.ReactDebugCurrentFrame;
    function we(o) {
      if (o) {
        var m = o._owner, T = U(o.type, o._source, m ? m.type : null);
        Re.setExtraStackFrame(T);
      } else
        Re.setExtraStackFrame(null);
    }
    function He(o, m, T, B, ee) {
      {
        var ie = Function.call.bind(ue);
        for (var Q in o)
          if (ie(o, Q)) {
            var G = void 0;
            try {
              if (typeof o[Q] != "function") {
                var me = Error((B || "React class") + ": " + T + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              G = o[Q](m, Q, B, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              G = le;
            }
            G && !(G instanceof Error) && (we(ee), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", T, Q, typeof G), we(null)), G instanceof Error && !(G.message in je) && (je[G.message] = !0, we(ee), j("Failed %s type: %s", T, G.message), we(null));
          }
      }
    }
    var Qe = Array.isArray;
    function et(o) {
      return Qe(o);
    }
    function Hr(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, T = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return T;
      }
    }
    function Wr(o) {
      try {
        return bt(o), !1;
      } catch {
        return !0;
      }
    }
    function bt(o) {
      return "" + o;
    }
    function wt(o) {
      if (Wr(o))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hr(o)), bt(o);
    }
    var Et = C.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Pt;
    function Yr(o) {
      if (ue.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ur(o) {
      if (ue.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function qr(o, m) {
      typeof o.ref == "string" && Et.current;
    }
    function Kr(o, m) {
      {
        var T = function() {
          Rt || (Rt = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        T.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Xr(o, m) {
      {
        var T = function() {
          Pt || (Pt = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        T.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var Gr = function(o, m, T, B, ee, ie, Q) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: T,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ie
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Jr(o, m, T, B, ee) {
      {
        var ie, Q = {}, G = null, me = null;
        T !== void 0 && (wt(T), G = "" + T), Ur(m) && (wt(m.key), G = "" + m.key), Yr(m) && (me = m.ref, qr(m, ee));
        for (ie in m)
          ue.call(m, ie) && !Vr.hasOwnProperty(ie) && (Q[ie] = m[ie]);
        if (o && o.defaultProps) {
          var le = o.defaultProps;
          for (ie in le)
            Q[ie] === void 0 && (Q[ie] = le[ie]);
        }
        if (G || me) {
          var de = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          G && Kr(Q, de), me && Xr(Q, de);
        }
        return Gr(o, G, me, ee, B, Et.current, Q);
      }
    }
    var tt = C.ReactCurrentOwner, Tt = C.ReactDebugCurrentFrame;
    function Oe(o) {
      if (o) {
        var m = o._owner, T = U(o.type, o._source, m ? m.type : null);
        Tt.setExtraStackFrame(T);
      } else
        Tt.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function nt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Ft() {
      {
        if (tt.current) {
          var o = H(tt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Zr(o) {
      return "";
    }
    var St = {};
    function Qr(o) {
      {
        var m = Ft();
        if (!m) {
          var T = typeof o == "string" ? o : o.displayName || o.name;
          T && (m = `

Check the top-level render call using <` + T + ">.");
        }
        return m;
      }
    }
    function Mt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var T = Qr(m);
        if (St[T])
          return;
        St[T] = !0;
        var B = "";
        o && o._owner && o._owner !== tt.current && (B = " It was passed a child from " + H(o._owner.type) + "."), Oe(o), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, B), Oe(null);
      }
    }
    function Lt(o, m) {
      {
        if (typeof o != "object")
          return;
        if (et(o))
          for (var T = 0; T < o.length; T++) {
            var B = o[T];
            nt(B) && Mt(B, m);
          }
        else if (nt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var ee = D(o);
          if (typeof ee == "function" && ee !== o.entries)
            for (var ie = ee.call(o), Q; !(Q = ie.next()).done; )
              nt(Q.value) && Mt(Q.value, m);
        }
      }
    }
    function en(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var T;
        if (typeof m == "function")
          T = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === p))
          T = m.propTypes;
        else
          return;
        if (T) {
          var B = H(m);
          He(T, o.props, "prop", B, o);
        } else if (m.PropTypes !== void 0 && !rt) {
          rt = !0;
          var ee = H(m);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(o) {
      {
        for (var m = Object.keys(o.props), T = 0; T < m.length; T++) {
          var B = m[T];
          if (B !== "children" && B !== "key") {
            Oe(o), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Oe(null);
            break;
          }
        }
        o.ref !== null && (Oe(o), j("Invalid attribute `ref` supplied to `React.Fragment`."), Oe(null));
      }
    }
    var Ot = {};
    function kt(o, m, T, B, ee, ie) {
      {
        var Q = L(o);
        if (!Q) {
          var G = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Zr();
          me ? G += me : G += Ft();
          var le;
          o === null ? le = "null" : et(o) ? le = "array" : o !== void 0 && o.$$typeof === r ? (le = "<" + (H(o.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : le = typeof o, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, G);
        }
        var de = Jr(o, m, T, ee, ie);
        if (de == null)
          return de;
        if (Q) {
          var be = m.children;
          if (be !== void 0)
            if (B)
              if (et(be)) {
                for (var ke = 0; ke < be.length; ke++)
                  Lt(be[ke], o);
                Object.freeze && Object.freeze(be);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lt(be, o);
        }
        if (ue.call(m, "key")) {
          var Me = H(o), Ce = Object.keys(m).filter(function(cn) {
            return cn !== "key";
          }), st = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ot[Me + st]) {
            var an = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, Me, an, Me), Ot[Me + st] = !0;
          }
        }
        return o === s ? tn(de) : en(de), de;
      }
    }
    function rn(o, m, T) {
      return kt(o, m, T, !0);
    }
    function nn(o, m, T) {
      return kt(o, m, T, !1);
    }
    var sn = nn, on = rn;
    Ae.Fragment = s, Ae.jsx = sn, Ae.jsxs = on;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? vt.exports = dn() : vt.exports = fn();
var t = vt.exports, fr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zt = Pe.createContext && /* @__PURE__ */ Pe.createContext(fr), hn = ["attr", "size", "title"];
function pn(e, r) {
  if (e == null) return {};
  var n = vn(e, r), s, a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (a = 0; a < c.length; a++)
      s = c[a], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
  }
  return n;
}
function vn(e, r) {
  if (e == null) return {};
  var n = {};
  for (var s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      if (r.indexOf(s) >= 0) continue;
      n[s] = e[s];
    }
  return n;
}
function Ve() {
  return Ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, Ve.apply(this, arguments);
}
function At(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    r && (s = s.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function Ye(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? At(Object(n), !0).forEach(function(s) {
      mn(e, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return e;
}
function mn(e, r, n) {
  return r = gn(r), r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function gn(e) {
  var r = yn(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function yn(e, r) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(e, r || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function hr(e) {
  return e && e.map((r, n) => /* @__PURE__ */ Pe.createElement(r.tag, Ye({
    key: n
  }, r.attr), hr(r.child)));
}
function W(e) {
  return (r) => /* @__PURE__ */ Pe.createElement(xn, Ve({
    attr: Ye({}, e.attr)
  }, r), hr(e.child));
}
function xn(e) {
  var r = (n) => {
    var {
      attr: s,
      size: a,
      title: c
    } = e, i = pn(e, hn), l = a || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ Pe.createElement("svg", Ve({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, s, i, {
      className: u,
      style: Ye(Ye({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ Pe.createElement("title", null, c), e.children);
  };
  return zt !== void 0 ? /* @__PURE__ */ Pe.createElement(zt.Consumer, null, (n) => r(n)) : r(fr);
}
function Cn(e) {
  return W({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z" }, child: [] }] })(e);
}
const xt = ({ loading: e = !1, className: r }) => e ? /* @__PURE__ */ t.jsx("div", { className: `loader-container ${r}`, children: /* @__PURE__ */ t.jsx(Cn, { className: "spinner" }) }) : null;
function pr(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" }, child: [] }] })(e);
}
function vr(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" }, child: [] }, { tag: "path", attr: { d: "M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" }, child: [] }] })(e);
}
function mr(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" }, child: [] }] })(e);
}
function Dt(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" }, child: [] }] })(e);
}
function gr(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" }, child: [] }] })(e);
}
function yr(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "23 4 23 10 17 10" }, child: [] }, { tag: "polyline", attr: { points: "1 20 1 14 7 14" }, child: [] }, { tag: "path", attr: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, child: [] }] })(e);
}
function jn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, child: [] }] })(e);
}
function bn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(e);
}
function wn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(e);
}
function En(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(e);
}
function Rn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }, child: [] }] })(e);
}
function xr(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" }, child: [] }] })(e);
}
function Ct(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }, child: [] }] })(e);
}
function Cr(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" }, child: [] }] })(e);
}
function Pn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" }, child: [] }] })(e);
}
function jr(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z" }, child: [] }, { tag: "path", attr: { d: "M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z" }, child: [] }] })(e);
}
function Tn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" }, child: [] }, { tag: "path", attr: { d: "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z" }, child: [] }] })(e);
}
function br(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, child: [] }] })(e);
}
function Fn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, child: [] }] })(e);
}
function Sn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" }, child: [] }] })(e);
}
function Ue(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" }, child: [] }] })(e);
}
function It(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 272l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376 112 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l17.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z" }, child: [] }] })(e);
}
function pe(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" }, child: [] }] })(e);
}
function $t(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" }, child: [] }] })(e);
}
function ot(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2l48 0 32 0 40 0 72 0c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" }, child: [] }] })(e);
}
function Mn(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" }, child: [] }] })(e);
}
function Ln(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" }, child: [] }] })(e);
}
function Bt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" }, child: [] }] })(e);
}
function Ht(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 16 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z" }, child: [] }] })(e);
}
function Wt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z" }, child: [] }] })(e);
}
function On(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }, child: [] }] })(e);
}
function qe(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" }, child: [] }] })(e);
}
function Vt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" }, child: [] }] })(e);
}
function mt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M104.6 48L64 48C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" }, child: [] }] })(e);
}
const Be = (e = () => {
}) => {
  const [r, n] = M(!1), s = fe(null), a = (c) => {
    var i;
    (i = s.current) != null && i.contains(c.target) ? n(!1) : (n(!0), e(c, s));
  };
  return ne(() => (document.addEventListener("click", a, !0), document.addEventListener("mousedown", a, !0), () => {
    document.removeEventListener("click", a, !0), document.removeEventListener("mousedown", a, !0);
  }), []), { ref: s, isClicked: r, setIsClicked: n };
}, wr = Ie(), kn = ({ children: e, layout: r }) => {
  const [n, s] = M(() => a(r));
  function a(c) {
    return ["list", "grid"].includes(c) ? c : "grid";
  }
  return /* @__PURE__ */ t.jsx(wr.Provider, { value: { activeLayout: n, setActiveLayout: s }, children: e });
}, Se = () => $e(wr), _n = ({ setShowToggleViewMenu: e, onLayoutChange: r }) => {
  const n = Be(() => {
    e(!1);
  }), { activeLayout: s, setActiveLayout: a } = Se(), c = [
    {
      key: "grid",
      name: "Grid",
      icon: /* @__PURE__ */ t.jsx(mr, { size: 18 })
    },
    {
      key: "list",
      name: "List",
      icon: /* @__PURE__ */ t.jsx(Ue, { size: 18 })
    }
  ], i = (l) => {
    a(l), r(l), e(!1);
  };
  return /* @__PURE__ */ t.jsx("div", { ref: n.ref, className: "toggle-view", role: "dropdown", children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "vertical", children: c.map((l) => /* @__PURE__ */ t.jsxs(
    "li",
    {
      role: "menuitem",
      onClick: () => i(l.key),
      onKeyDown: () => i(l.key),
      children: [
        /* @__PURE__ */ t.jsx("span", { children: l.key === s && /* @__PURE__ */ t.jsx(br, { size: 13 }) }),
        /* @__PURE__ */ t.jsx("span", { children: l.icon }),
        /* @__PURE__ */ t.jsx("span", { children: l.name })
      ]
    },
    l.key
  )) }) });
}, Er = Ie(), Nn = ({ children: e, filesData: r, onError: n }) => {
  const [s, a] = M([]);
  ne(() => {
    a(r);
  }, [r]);
  const c = (i) => i.isDirectory ? s.filter((l) => l.path === `${i.path}/${l.name}`) : [];
  return /* @__PURE__ */ t.jsx(Er.Provider, { value: { files: s, setFiles: a, getChildren: c, onError: n }, children: e });
}, Ge = () => $e(Er), Rr = Ie(), zn = ({ children: e, initialPath: r }) => {
  const { files: n } = Ge(), s = fe(!1), [a, c] = M(""), [i, l] = M(null), [u, h] = M([]);
  return ne(() => {
    Array.isArray(n) && n.length > 0 && (h(() => n.filter((d) => d.path === `${a}/${d.name}`)), l(() => n.find((d) => d.path === a) ?? null));
  }, [n, a]), ne(() => {
    !s.current && Array.isArray(n) && n.length > 0 && (c(n.some((d) => d.path === r) ? r : ""), s.current = !0);
  }, [r, n]), /* @__PURE__ */ t.jsx(
    Rr.Provider,
    {
      value: {
        currentPath: a,
        setCurrentPath: c,
        currentFolder: i,
        setCurrentFolder: l,
        currentPathFiles: u,
        setCurrentPathFiles: h
      },
      children: e
    }
  );
}, Ee = () => $e(Rr), Le = (e, r, ...n) => {
  try {
    if (typeof e == "function")
      e(...n);
    else
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${r}" is required.`
      );
  } catch (s) {
    console.error(s.message);
  }
}, Pr = Ie(), An = ({ children: e, onDownload: r }) => {
  const [n, s] = M([]), a = () => {
    Le(r, "onDownload", n);
  };
  return /* @__PURE__ */ t.jsx(Pr.Provider, { value: { selectedFiles: n, setSelectedFiles: s, handleDownload: a }, children: e });
}, Fe = () => $e(Pr), Tr = Ie(), Dn = ({ children: e, onPaste: r }) => {
  const [n, s] = M(null), { selectedFiles: a, setSelectedFiles: c } = Fe(), i = (u) => {
    s({
      files: a,
      isMoving: u
    });
  }, l = (u) => {
    if (u && !u.isDirectory) return;
    const h = n.files, d = n.isMoving ? "move" : "copy";
    Le(r, "onPaste", h, u, d), n.isMoving && s(null), c([]);
  };
  return /* @__PURE__ */ t.jsx(Tr.Provider, { value: { clipBoard: n, setClipBoard: s, handleCutCopy: i, handlePasting: l }, children: e });
}, Je = () => $e(Tr), Fr = ({
  allowCreateFolder: e = !0,
  allowUploadFile: r = !0,
  onLayoutChange: n,
  onRefresh: s,
  triggerAction: a
}) => {
  var b;
  const [c, i] = M(!1), { currentFolder: l } = Ee(), { selectedFiles: u, setSelectedFiles: h, handleDownload: d } = Fe(), { clipBoard: p, setClipBoard: R, handleCutCopy: F, handlePasting: S } = Je(), { activeLayout: N } = Se(), D = [
    {
      icon: /* @__PURE__ */ t.jsx(vr, { size: 17, strokeWidth: 0.3 }),
      text: "New folder",
      permission: e,
      onClick: () => a.show("createFolder")
    },
    {
      icon: /* @__PURE__ */ t.jsx(Cr, { size: 18 }),
      text: "Upload",
      permission: r,
      onClick: () => a.show("uploadFile")
    },
    {
      icon: /* @__PURE__ */ t.jsx(mt, { size: 18 }),
      text: "Paste",
      permission: !!p,
      onClick: j
    }
  ], C = [
    {
      icon: N === "grid" ? /* @__PURE__ */ t.jsx(mr, { size: 16 }) : /* @__PURE__ */ t.jsx(Ue, { size: 16 }),
      title: "Change View",
      onClick: () => i((f) => !f)
    },
    {
      icon: /* @__PURE__ */ t.jsx(yr, { size: 16 }),
      title: "Refresh",
      onClick: () => {
        Le(s, "onRefresh"), R(null);
      }
    }
  ];
  function j() {
    S(l);
  }
  const y = () => {
    d(), h([]);
  };
  return u.length > 0 ? /* @__PURE__ */ t.jsx("div", { className: "toolbar file-selected", children: /* @__PURE__ */ t.jsxs("div", { className: "file-action-container", children: [
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsxs("button", { className: "item-action file-action", onClick: () => F(!0), children: [
        /* @__PURE__ */ t.jsx(gr, { size: 18 }),
        /* @__PURE__ */ t.jsx("span", { children: "Cut" })
      ] }),
      /* @__PURE__ */ t.jsxs("button", { className: "item-action file-action", onClick: () => F(!1), children: [
        /* @__PURE__ */ t.jsx(pr, { strokeWidth: 0.1, size: 17 }),
        /* @__PURE__ */ t.jsx("span", { children: "Copy" })
      ] }),
      ((b = p == null ? void 0 : p.files) == null ? void 0 : b.length) > 0 && /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "item-action file-action",
          onClick: j,
          children: [
            /* @__PURE__ */ t.jsx(mt, { size: 18 }),
            /* @__PURE__ */ t.jsx("span", { children: "Paste" })
          ]
        }
      ),
      u.length === 1 && /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "item-action file-action",
          onClick: () => a.show("rename"),
          children: [
            /* @__PURE__ */ t.jsx(jr, { size: 19 }),
            /* @__PURE__ */ t.jsx("span", { children: "Rename" })
          ]
        }
      ),
      !u.isDirectory && /* @__PURE__ */ t.jsxs("button", { className: "item-action file-action", onClick: y, children: [
        /* @__PURE__ */ t.jsx(Ct, { size: 19 }),
        /* @__PURE__ */ t.jsx("span", { children: "Download" })
      ] }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "item-action file-action",
          onClick: () => a.show("delete"),
          children: [
            /* @__PURE__ */ t.jsx(xr, { size: 19 }),
            /* @__PURE__ */ t.jsx("span", { children: "Delete" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        className: "item-action file-action",
        title: "Clear selection",
        onClick: () => h([]),
        children: [
          /* @__PURE__ */ t.jsxs("span", { children: [
            u.length,
            " item",
            u.length > 1 && "s",
            " selected"
          ] }),
          /* @__PURE__ */ t.jsx(bn, { size: 18 })
        ]
      }
    )
  ] }) }) : /* @__PURE__ */ t.jsx("div", { className: "toolbar", children: /* @__PURE__ */ t.jsxs("div", { className: "fm-toolbar", children: [
    /* @__PURE__ */ t.jsx("div", { children: D.filter((f) => f.permission).map((f, v) => /* @__PURE__ */ t.jsxs("button", { className: "item-action", onClick: f.onClick, children: [
      f.icon,
      /* @__PURE__ */ t.jsx("span", { children: f.text })
    ] }, v)) }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      C.map((f, v) => /* @__PURE__ */ t.jsxs("div", { className: "toolbar-left-items", children: [
        /* @__PURE__ */ t.jsx("button", { className: "item-action icon-only", title: f.title, onClick: f.onClick, children: f.icon }),
        v !== C.length - 1 && /* @__PURE__ */ t.jsx("div", { className: "item-separator" })
      ] }, v)),
      c && /* @__PURE__ */ t.jsx(
        _n,
        {
          setShowToggleViewMenu: i,
          onLayoutChange: n
        }
      )
    ] })
  ] }) });
};
Fr.displayName = "Toolbar";
var In = process.env.NODE_ENV === "production";
function $n(e, r) {
  if (!In) {
    if (e)
      return;
    var n = "Warning: " + r;
    typeof console < "u" && console.warn(n);
    try {
      throw Error(n);
    } catch {
    }
  }
}
/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
var Bn = class extends Error {
  constructor(e) {
    super(`react-collapsed: ${e}`);
  }
}, Ke = (...e) => $n(e[0], `[react-collapsed] -- ${e[1]}`);
function Sr(e) {
  const r = fe(e);
  return ne(() => {
    r.current = e;
  }), dr((...n) => {
    var s;
    return (s = r.current) == null ? void 0 : s.call(r, ...n);
  }, []);
}
function Hn(e, r, n) {
  const [s, a] = M(r), c = fe(typeof e < "u"), i = c.current ? e : s, l = Sr(n), u = dr(
    (h) => {
      const p = typeof h == "function" ? h(i) : h;
      c.current || a(p), l == null || l(p);
    },
    [l, i]
  );
  return ne(() => {
    Ke(
      !(c.current && e == null),
      "`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    ), Ke(
      !(!c.current && e != null),
      "`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    );
  }, [e]), [i, u];
}
var Wn = "(prefers-reduced-motion: reduce)";
function Vn() {
  const [e, r] = M(!1);
  return ne(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const n = window.matchMedia(Wn);
    r(n.matches);
    const s = (a) => {
      r(a.matches);
    };
    if (n.addEventListener)
      return n.addEventListener("change", s), () => {
        n.removeEventListener("change", s);
      };
    if (n.addListener)
      return n.addListener(s), () => {
        n.removeListener(s);
      };
  }, []), e;
}
var Yn = De.useId || (() => {
});
function Un() {
  return Yn() ?? "";
}
var qn = typeof window < "u" ? De.useLayoutEffect : De.useEffect, at = !1, Kn = 0, Yt = () => ++Kn;
function Xn(e) {
  const r = e || (at ? Yt() : null), [n, s] = De.useState(r);
  return qn(() => {
    n === null && s(Yt());
  }, []), De.useEffect(() => {
    at === !1 && (at = !0);
  }, []), n != null ? String(n) : void 0;
}
function Gn(e) {
  const r = Un(), n = Xn(e);
  return typeof e == "string" ? e : typeof r == "string" ? r : n;
}
function Jn(e, r) {
  const n = performance.now(), s = {};
  function a() {
    s.id = requestAnimationFrame((c) => {
      c - n > r ? e() : a();
    });
  }
  return a(), s;
}
function Ut(e) {
  e.id && cancelAnimationFrame(e.id);
}
function qt(e) {
  return e != null && e.current ? e.current.scrollHeight : (Ke(
    !0,
    "Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"
  ), 0);
}
function Zn(e) {
  if (!e || typeof e == "string")
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Qn(e, r) {
  if (e != null)
    if (typeof e == "function")
      e(r);
    else
      try {
        e.current = r;
      } catch {
        throw new Bn(`Cannot assign value "${r}" to ref "${e}"`);
      }
}
function Kt(...e) {
  return e.every((r) => r == null) ? null : (r) => {
    e.forEach((n) => {
      Qn(n, r);
    });
  };
}
function es(e) {
  let r = (n) => {
  };
  r = (n) => {
    if (!(n != null && n.current))
      return;
    const { paddingTop: s, paddingBottom: a } = window.getComputedStyle(n.current);
    Ke(
      !(s && s !== "0px" || a && a !== "0px"),
      `Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`
    );
  }, ne(() => {
    r(e);
  }, [e]);
}
var ts = typeof window > "u" ? ne : ln;
function rs({
  duration: e,
  easing: r = "cubic-bezier(0.4, 0, 0.2, 1)",
  onTransitionStateChange: n = () => {
  },
  isExpanded: s,
  defaultExpanded: a = !1,
  hasDisabledAnimation: c,
  id: i,
  ...l
} = {}) {
  const u = Sr(n), h = Gn(i ? `${i}` : void 0), [d, p] = Hn(
    s,
    a
  ), R = fe(d), [F, S] = M(!1), N = Vn(), D = c ?? N, C = fe(), j = fe(), y = fe(null), [b, f] = M(null);
  es(y);
  const v = `${l.collapsedHeight || 0}px`;
  function _(x) {
    if (!y.current)
      return;
    const w = y.current;
    for (const L in x) {
      const k = x[L];
      k ? w.style[L] = k : w.style.removeProperty(L);
    }
  }
  return ts(() => {
    if (!y.current || d === R.current)
      return;
    R.current = d;
    function w(z) {
      return D ? 0 : e ?? Zn(z);
    }
    const L = (z) => `height ${w(z)}ms ${r}`, k = (z) => {
      function H() {
        d ? (_({
          height: "",
          overflow: "",
          transition: "",
          display: ""
        }), u("expandEnd")) : (_({ transition: "" }), u("collapseEnd")), S(!1);
      }
      j.current && Ut(j.current), j.current = Jn(H, z);
    };
    return S(!0), d ? C.current = requestAnimationFrame(() => {
      u("expandStart"), _({
        display: "block",
        overflow: "hidden",
        height: v
      }), C.current = requestAnimationFrame(() => {
        u("expanding");
        const z = qt(y);
        k(w(z)), y.current && (y.current.style.transition = L(z), y.current.style.height = `${z}px`);
      });
    }) : C.current = requestAnimationFrame(() => {
      u("collapseStart");
      const z = qt(y);
      k(w(z)), _({
        transition: L(z),
        height: `${z}px`
      }), C.current = requestAnimationFrame(() => {
        u("collapsing"), _({
          height: v,
          overflow: "hidden"
        });
      });
    }), () => {
      C.current && cancelAnimationFrame(C.current), j.current && Ut(j.current);
    };
  }, [
    d,
    v,
    D,
    e,
    r,
    u
  ]), {
    isExpanded: d,
    setExpanded: p,
    getToggleProps(x) {
      const { disabled: w, onClick: L, refKey: k, ...z } = {
        refKey: "ref",
        onClick() {
        },
        disabled: !1,
        ...x
      }, H = b ? b.tagName === "BUTTON" : void 0, A = x == null ? void 0 : x[k || "ref"], se = {
        id: `react-collapsed-toggle-${h}`,
        "aria-controls": `react-collapsed-panel-${h}`,
        "aria-expanded": d,
        onClick(ae) {
          w || (L == null || L(ae), p((xe) => !xe));
        },
        [k || "ref"]: Kt(A, f)
      }, oe = {
        type: "button",
        disabled: w ? !0 : void 0
      }, ce = {
        "aria-disabled": w ? !0 : void 0,
        role: "button",
        tabIndex: w ? -1 : 0
      };
      return H === !1 ? { ...se, ...ce, ...z } : H === !0 ? { ...se, ...oe, ...z } : {
        ...se,
        ...oe,
        ...ce,
        ...z
      };
    },
    getCollapseProps(x) {
      const { style: w, refKey: L } = { refKey: "ref", style: {}, ...x }, k = x == null ? void 0 : x[L || "ref"];
      return {
        id: `react-collapsed-panel-${h}`,
        "aria-hidden": !d,
        "aria-labelledby": `react-collapsed-toggle-${h}`,
        role: "region",
        ...x,
        [L || "ref"]: Kt(y, k),
        style: {
          boxSizing: "border-box",
          ...!F && !d ? {
            // collapsed and not animating
            display: v === "0px" ? "none" : "block",
            height: v,
            overflow: "hidden"
          } : {},
          // additional styles passed, e.g. getCollapseProps({style: {}})
          ...w
        }
      };
    }
  };
}
const ns = ({ open: e, children: r }) => {
  const [n, s] = M(e), { getCollapseProps: a } = rs({
    isExpanded: n,
    duration: 500
  });
  return ne(() => {
    s(e);
  }, [e, s]), /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { ...a(), children: r }) });
};
function ss(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" }, child: [] }] })(e);
}
function os(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" }, child: [] }] })(e);
}
function Xt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z" }, child: [] }] })(e);
}
function Gt(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z" }, child: [] }] })(e);
}
const Mr = ({ folder: e }) => {
  const [r, n] = M(!1), [s, a] = M(!1), { currentPath: c, setCurrentPath: i } = Ee(), l = () => {
    a(!0), i(e.path);
  }, u = (h) => {
    h.stopPropagation(), n((d) => !d);
  };
  return ne(() => {
    a(c === e.path);
    const h = c.split("/");
    h.pop(), h.join("/") === e.path && n(!0);
  }, [c]), e.subDirectories.length > 0 ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `sb-folders-list-item ${s ? "active-list-item" : ""}`,
        onClick: l,
        children: [
          /* @__PURE__ */ t.jsx("span", { onClick: u, children: /* @__PURE__ */ t.jsx(
            wn,
            {
              size: 20,
              className: `folder-icon-default ${r ? "folder-rotate-down" : ""}`
            }
          ) }),
          /* @__PURE__ */ t.jsxs("div", { className: "sb-folder-details", children: [
            r || s ? /* @__PURE__ */ t.jsx(Xt, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ t.jsx(Gt, { size: 17, className: "folder-close-icon" }),
            /* @__PURE__ */ t.jsx("span", { className: "sb-folder-name", title: e.name, children: e.name })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(ns, { open: r, children: /* @__PURE__ */ t.jsx("div", { className: "folder-collapsible", children: e.subDirectories.map((h, d) => /* @__PURE__ */ t.jsx(Mr, { folder: h }, d)) }) })
  ] }) : /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `sb-folders-list-item ${s ? "active-list-item" : ""}`,
      onClick: l,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "non-expanable" }),
        /* @__PURE__ */ t.jsxs("div", { className: "sb-folder-details", children: [
          s ? /* @__PURE__ */ t.jsx(Xt, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ t.jsx(Gt, { size: 17, className: "folder-close-icon" }),
          /* @__PURE__ */ t.jsx("span", { className: "sb-folder-name", title: e.name, children: e.name })
        ] })
      ]
    }
  );
}, as = (e) => e == null ? void 0 : e.split("/").slice(0, -1).join("/"), Lr = () => {
  const [e, r] = M([]), { files: n } = Ge(), s = (a, c) => {
    var i;
    return c[a] ? (i = c[a]) == null ? void 0 : i.map((l) => ({
      ...l,
      subDirectories: s(l.path, c)
    })) : [];
  };
  return ne(() => {
    if (Array.isArray(n)) {
      const a = n.filter((i) => i.isDirectory), c = Object.groupBy(a, ({ path: i }) => as(i));
      r(() => s("", c));
    }
  }, [n]), /* @__PURE__ */ t.jsx("div", { className: "sb-folders-list", children: (e == null ? void 0 : e.length) > 0 ? /* @__PURE__ */ t.jsx(t.Fragment, { children: e == null ? void 0 : e.map((a, c) => /* @__PURE__ */ t.jsx(Mr, { folder: a }, c)) }) : /* @__PURE__ */ t.jsx("div", { className: "empty-nav-pane", children: "Nothing here yet" }) });
};
Lr.displayName = "NavigationPane";
const Or = () => {
  const [e, r] = M([]), [n, s] = M([]), [a, c] = M([]), [i, l] = M(!1), { currentPath: u, setCurrentPath: h } = Ee(), d = fe(null), p = fe([]), R = fe(null), F = Be(() => {
    l(!1);
  });
  ne(() => {
    r(() => {
      let j = "";
      return u == null ? void 0 : u.split("/").map((y) => ({
        name: y || "Home",
        path: y === "" ? y : j += `/${y}`
      }));
    }), s([]), c([]);
  }, [u]);
  const S = (j) => {
    h(j);
  }, N = () => {
    const j = d.current.clientWidth, y = getComputedStyle(d.current), b = parseFloat(y.paddingLeft), f = n.length > 0 ? 1 : 0, v = parseFloat(y.gap) * (e.length + f);
    return j - (b + v);
  }, D = () => {
    var f;
    const j = N(), y = p.current.reduce((v, _) => _ ? v + _.clientWidth : v, 0), b = ((f = R.current) == null ? void 0 : f.clientWidth) || 0;
    return j - (y + b);
  }, C = () => d.current.scrollWidth > d.current.clientWidth;
  return ne(() => {
    var j;
    if (C()) {
      const y = e[1], b = (j = p.current[1]) == null ? void 0 : j.clientWidth;
      c((f) => [...f, b]), s((f) => [...f, y]), r((f) => f.filter((v, _) => _ !== 1));
    } else if (n.length > 0 && D() > a.at(-1)) {
      const y = [e[0], n.at(-1), ...e.slice(1)];
      r(y), s((b) => b.slice(0, -1)), c((b) => b.slice(0, -1));
    }
  }, [C]), /* @__PURE__ */ t.jsxs("div", { className: "bread-crumb-container", children: [
    /* @__PURE__ */ t.jsx("div", { className: "breadcrumb", ref: d, children: e.map((j, y) => /* @__PURE__ */ t.jsxs("div", { style: { display: "contents" }, children: [
      /* @__PURE__ */ t.jsxs(
        "span",
        {
          className: "folder-name",
          onClick: () => S(j.path),
          ref: (b) => p.current[y] = b,
          children: [
            y === 0 ? /* @__PURE__ */ t.jsx(jn, {}) : /* @__PURE__ */ t.jsx(Pn, {}),
            j.name
          ]
        }
      ),
      (n == null ? void 0 : n.length) > 0 && y === 0 && /* @__PURE__ */ t.jsx(
        "button",
        {
          className: "folder-name folder-name-btn",
          onClick: () => l(!0),
          ref: R,
          title: "Show more folders",
          children: /* @__PURE__ */ t.jsx(Rn, { size: 22, className: "hidden-folders" })
        }
      )
    ] }, y)) }),
    i && /* @__PURE__ */ t.jsx("ul", { ref: F.ref, className: "hidden-folders-container", children: n.map((j, y) => /* @__PURE__ */ t.jsx(
      "li",
      {
        onClick: () => {
          S(j.path), l(!1);
        },
        children: j.name
      },
      y
    )) })
  ] });
};
Or.displayName = "BreadCrumb";
const Xe = (e) => ({
  pdf: /* @__PURE__ */ t.jsx(Ln, { size: e }),
  jpg: /* @__PURE__ */ t.jsx(ot, { size: e }),
  jpeg: /* @__PURE__ */ t.jsx(ot, { size: e }),
  png: /* @__PURE__ */ t.jsx(ot, { size: e }),
  txt: /* @__PURE__ */ t.jsx(Mn, { size: e }),
  doc: /* @__PURE__ */ t.jsx(Wt, { size: e }),
  docx: /* @__PURE__ */ t.jsx(Wt, { size: e }),
  mp4: /* @__PURE__ */ t.jsx(Ht, { size: e }),
  webm: /* @__PURE__ */ t.jsx(Ht, { size: e }),
  mp3: /* @__PURE__ */ t.jsx(It, { size: e }),
  m4a: /* @__PURE__ */ t.jsx(It, { size: e }),
  zip: /* @__PURE__ */ t.jsx(On, { size: e }),
  ppt: /* @__PURE__ */ t.jsx(Bt, { size: e }),
  pptx: /* @__PURE__ */ t.jsx(Bt, { size: e }),
  xls: /* @__PURE__ */ t.jsx($t, { size: e }),
  xlsx: /* @__PURE__ */ t.jsx($t, { size: e }),
  exe: /* @__PURE__ */ t.jsx(Sn, { size: e }),
  html: /* @__PURE__ */ t.jsx(pe, { size: e }),
  css: /* @__PURE__ */ t.jsx(pe, { size: e }),
  js: /* @__PURE__ */ t.jsx(pe, { size: e }),
  php: /* @__PURE__ */ t.jsx(pe, { size: e }),
  py: /* @__PURE__ */ t.jsx(pe, { size: e }),
  java: /* @__PURE__ */ t.jsx(pe, { size: e }),
  cpp: /* @__PURE__ */ t.jsx(pe, { size: e }),
  c: /* @__PURE__ */ t.jsx(pe, { size: e }),
  ts: /* @__PURE__ */ t.jsx(pe, { size: e }),
  jsx: /* @__PURE__ */ t.jsx(pe, { size: e }),
  tsx: /* @__PURE__ */ t.jsx(pe, { size: e }),
  json: /* @__PURE__ */ t.jsx(pe, { size: e }),
  xml: /* @__PURE__ */ t.jsx(pe, { size: e }),
  sql: /* @__PURE__ */ t.jsx(pe, { size: e }),
  csv: /* @__PURE__ */ t.jsx(pe, { size: e }),
  md: /* @__PURE__ */ t.jsx(pe, { size: e }),
  svg: /* @__PURE__ */ t.jsx(pe, { size: e })
}), kr = (e, r, n) => {
  if (n.find((s) => s.name === e)) {
    const s = "", a = e;
    let c = 0;
    const i = new RegExp(`${a} \\(\\d+\\)`);
    n.forEach((h) => {
      const d = h.isDirectory ? h.name : h.name.split(".").slice(0, -1).join(".");
      if (i.test(d)) {
        const p = d.split(`${a} (`).pop().slice(0, -1), R = parseInt(p);
        !isNaN(R) && R > c && (c = R);
      }
    });
    const l = ` (${++c})`;
    return a + l + s;
  } else
    return e;
}, _r = ({ nameInputRef: e, maxLength: r, value: n, onChange: s, onKeyDown: a, onClick: c, rows: i }) => /* @__PURE__ */ t.jsx(
  "textarea",
  {
    ref: e,
    className: "rename-file",
    maxLength: r,
    value: n,
    onChange: s,
    onKeyDown: a,
    onClick: c,
    rows: i
  }
), Nr = ({ message: e, xPlacement: r, yPlacement: n }) => /* @__PURE__ */ t.jsx("p", { className: `error-tooltip ${r} ${n}`, children: e }), is = 220, cs = ({ filesViewRef: e, file: r, onCreateFolder: n, triggerAction: s }) => {
  const [a, c] = M(r.name), [i, l] = M(!1), [u, h] = M(""), [d, p] = M("right"), [R, F] = M("bottom"), S = Be((v) => {
    v.preventDefault(), v.stopPropagation();
  }), { currentFolder: N, currentPathFiles: D, setCurrentPathFiles: C } = Ee(), { activeLayout: j } = Se(), y = (v) => {
    c(v.target.value), l(!1);
  }, b = (v) => {
    if (v.stopPropagation(), v.key === "Enter") {
      v.preventDefault(), f();
      return;
    }
    v.key === "Escape" && (v.preventDefault(), s.close(), C((x) => x.filter((w) => w.key !== r.key))), /[\\/:*?"<>|]/.test(v.key) ? (v.preventDefault(), h(
      `A file name can't contain any of the following characters: \\ / : * ? " < > |`
    ), l(!0)) : (l(!1), h(""));
  };
  ne(() => {
    if (i) {
      const v = setTimeout(() => {
        l(!1), h("");
      }, 7e3);
      return () => clearTimeout(v);
    }
  }, [i]);
  function f() {
    var w, L;
    let v = a.trim();
    const _ = D.filter((k) => !(k.key && k.key === r.key));
    if (_.find((k) => k.name.toLowerCase() === v.toLowerCase())) {
      h(`This destination already contains a folder named '${v}'.`), l(!0), (w = S.ref.current) == null || w.focus(), (L = S.ref.current) == null || L.select(), S.setIsClicked(!1);
      return;
    }
    v === "" && (v = kr("New Folder", !0, _)), Le(n, "onCreateFolder", v, N), C((k) => k.filter((z) => z.key !== r.key)), s.close();
  }
  return ne(() => {
    var v, _, x;
    if ((v = S.ref.current) == null || v.focus(), (_ = S.ref.current) == null || _.select(), (x = S.ref) != null && x.current) {
      const z = e.current.getBoundingClientRect(), H = S.ref.current, A = H.getBoundingClientRect();
      z.right - A.left > 313 ? p("right") : p("left"), z.bottom - (A.top + H.clientHeight) > 88 ? F("bottom") : F("top");
    }
  }, []), ne(() => {
    S.isClicked && f();
  }, [S.isClicked]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      _r,
      {
        nameInputRef: S.ref,
        maxLength: is,
        value: a,
        onChange: y,
        onKeyDown: b,
        onClick: (v) => v.stopPropagation(),
        ...j === "list" && { rows: 1 }
      }
    ),
    i && /* @__PURE__ */ t.jsx(
      Nr,
      {
        message: u,
        xPlacement: d,
        yPlacement: R
      }
    )
  ] });
}, Ne = ({ onClick: e, onKeyDown: r, type: n = "primary", padding: s = "0.4rem 0.8rem", children: a }) => /* @__PURE__ */ t.jsx(
  "button",
  {
    onClick: e,
    onKeyDown: r,
    className: `fm-button fm-button-${n}`,
    style: { padding: s },
    children: a
  }
);
function ls(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z" }, child: [] }, { tag: "path", attr: { d: "M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" }, child: [] }] })(e);
}
const zr = ({
  children: e,
  show: r,
  setShow: n,
  heading: s,
  dialogWidth: a = "25%",
  contentClassName: c = "",
  closeButton: i = !0
}) => {
  const l = fe(null), u = (h) => {
    h.key === "Escape" && n(!1);
  };
  return ne(() => {
    r ? l.current.showModal() : l.current.close();
  }, [r]), /* @__PURE__ */ t.jsxs(
    "dialog",
    {
      ref: l,
      className: "fm-modal dialog",
      style: { width: a },
      onKeyDown: u,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "fm-modal-header", children: [
          /* @__PURE__ */ t.jsx("span", { className: "fm-modal-heading", children: s }),
          i && /* @__PURE__ */ t.jsx(En, { size: 18, onClick: () => n(!1), className: "close-icon", title: "Close" })
        ] }),
        e
      ]
    }
  );
}, _e = (e) => e.split(".").pop(), us = 220, ds = ({ filesViewRef: e, file: r, onRename: n, triggerAction: s }) => {
  const [a, c] = M(r == null ? void 0 : r.name), [i, l] = M(!1), [u, h] = M(!1), [d, p] = M(""), [R, F] = M("right"), [S, N] = M("bottom"), { currentPathFiles: D, setCurrentPathFiles: C } = Ee(), { activeLayout: j } = Se(), y = fe(null), b = Be((x) => {
    var w;
    (w = y.current) != null && w.contains(x.target) || (x.preventDefault(), x.stopPropagation());
  }), f = (x) => {
    if (x.stopPropagation(), x.key === "Enter") {
      x.preventDefault(), b.setIsClicked(!0);
      return;
    }
    /[\\/:*?"<>|]/.test(x.key) ? (x.preventDefault(), p(
      `A file name can't contain any of the following characters: \\ / : * ? " < > |`
    ), h(!0)) : h(!1);
  };
  ne(() => {
    if (u) {
      const x = setTimeout(() => {
        h(!1), p("");
      }, 7e3);
      return () => clearTimeout(x);
    }
  }, [u]);
  function v(x) {
    if (a === "" || a === r.name) {
      C(
        (w) => w.map((L) => (L.key === r.key && (L.isEditing = !1), L))
      ), s.close();
      return;
    } else if (D.some((w) => w.name === a)) {
      h(!0), p(`This destination already contains a folder named '${a}'.`), b.setIsClicked(!1);
      return;
    } else if (!r.isDirectory && !x) {
      const w = _e(r.name), L = _e(a);
      if (w !== L) {
        l(!0);
        return;
      }
    }
    h(!1), Le(n, "onRename", r, a), C((w) => w.filter((L) => L.key !== r.key)), s.close();
  }
  const _ = () => {
    var x, w, L, k, z, H;
    if ((w = (x = b.ref) == null ? void 0 : x.current) == null || w.focus(), r.isDirectory)
      (k = (L = b.ref) == null ? void 0 : L.current) == null || k.select();
    else {
      const A = _e(r.name), se = r.name.length - A.length - 1;
      (H = (z = b.ref) == null ? void 0 : z.current) == null || H.setSelectionRange(0, se);
    }
  };
  return ne(() => {
    var x;
    if (_(), (x = b.ref) != null && x.current) {
      const z = e.current.getBoundingClientRect(), H = b.ref.current, A = H.getBoundingClientRect();
      z.right - A.left > 313 ? F("right") : F("left"), z.bottom - (A.top + H.clientHeight) > 88 ? N("bottom") : N("top");
    }
  }, []), ne(() => {
    b.isClicked && v(!1), _();
  }, [b.isClicked]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      _r,
      {
        nameInputRef: b.ref,
        maxLength: us,
        value: a,
        onChange: (x) => {
          c(x.target.value), h(!1);
        },
        onKeyDown: f,
        onClick: (x) => x.stopPropagation(),
        ...j === "list" && { rows: 1 }
      }
    ),
    u && /* @__PURE__ */ t.jsx(
      Nr,
      {
        message: d,
        xPlacement: R,
        yPlacement: S
      }
    ),
    /* @__PURE__ */ t.jsx(
      zr,
      {
        heading: "Rename",
        show: i,
        setShow: l,
        dialogWidth: "25vw",
        closeButton: !1,
        children: /* @__PURE__ */ t.jsxs("div", { className: "fm-rename-folder-container", ref: y, children: [
          /* @__PURE__ */ t.jsx("div", { className: "fm-rename-folder-input", children: /* @__PURE__ */ t.jsxs("div", { className: "fm-rename-warning", children: [
            /* @__PURE__ */ t.jsx(ls, { size: 70, color: "orange" }),
            /* @__PURE__ */ t.jsx("div", { children: "If you change a file name extension, the file might become unusable. Are you sure you want to change it?" })
          ] }) }),
          /* @__PURE__ */ t.jsxs("div", { className: "fm-rename-folder-action", children: [
            /* @__PURE__ */ t.jsx(
              Ne,
              {
                type: "secondary",
                onClick: () => {
                  C(
                    (x) => x.map((w) => (w.key === r.key && (w.isEditing = !1), w))
                  ), l(!1), s.close();
                },
                children: "No"
              }
            ),
            /* @__PURE__ */ t.jsx(
              Ne,
              {
                type: "danger",
                onClick: () => {
                  l(!1), v(!0);
                },
                children: "Yes"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, Ze = (e, r = 2) => {
  if (isNaN(e)) return "";
  const n = e / 1024, s = n / 1024, a = s / 1024;
  if (n < 1024)
    return `${n.toFixed(r)} KB`;
  if (s < 1024)
    return `${s.toFixed(r)} MB`;
  if (s >= 1024)
    return `${a.toFixed(r)} GB`;
}, fs = (e) => {
  if (!e || isNaN(Date.parse(e))) return "";
  e = new Date(e);
  let r = e.getHours();
  const n = e.getMinutes(), s = r >= 12 ? "PM" : "AM";
  r = r % 12, r = r || 12;
  const a = e.getMonth() + 1, c = e.getDate(), i = e.getFullYear();
  return `${a}/${c}/${i} ${r}:${n < 10 ? "0" + n : n} ${s}`;
}, Ar = ({ name: e, id: r, checked: n, onClick: s, onChange: a, className: c = "", title: i, disabled: l = !1 }) => /* @__PURE__ */ t.jsx(
  "input",
  {
    className: `fm-checkbox ${c}`,
    type: "checkbox",
    name: e,
    id: r,
    checked: n,
    onClick: s,
    onChange: a,
    title: i,
    disabled: l
  }
), it = 50, hs = ({
  index: e,
  file: r,
  onCreateFolder: n,
  onRename: s,
  enableFilePreview: a,
  onFileOpen: c,
  filesViewRef: i,
  selectedFileIndexes: l,
  triggerAction: u,
  handleContextMenu: h,
  setLastSelectedFile: d
}) => {
  var he, E, ve, Te;
  const [p, R] = M(!1), [F, S] = M(0), [N, D] = M("hidden"), [C, j] = M(""), [y, b] = M(null), { activeLayout: f } = Se(), v = f === "grid" ? 48 : 20, _ = Xe(v), { setCurrentPath: x, currentPathFiles: w } = Ee(), { setSelectedFiles: L } = Fe(), { clipBoard: k, handleCutCopy: z, setClipBoard: H, handlePasting: A } = Je(), se = fe(null), oe = Xe(it), ce = (k == null ? void 0 : k.isMoving) && k.files.find((U) => U.name === r.name && U.path === r.path), ae = () => {
    c(r), r.isDirectory ? (x(r.path), L([])) : a && u.show("previewFile");
  }, xe = (U, ue) => {
    if (l.length > 0 && U) {
      let je = !1, Re = l[0], we = e;
      if (Re >= we) {
        const Qe = Re;
        Re = we, we = Qe, je = !0;
      }
      const He = w.slice(Re, we + 1);
      L(je ? He.reverse() : He);
    } else l.length > 0 && ue ? L((je) => {
      const Re = je.filter((we) => we.path !== r.path);
      return je.length === Re.length ? [...je, r] : Re;
    }) : L([r]);
  }, g = (U) => {
    if (U.stopPropagation(), r.isEditing) return;
    xe(U.shiftKey, U.ctrlKey);
    const ue = (/* @__PURE__ */ new Date()).getTime();
    if (ue - F < 300) {
      ae();
      return;
    }
    S(ue);
  }, P = (U) => {
    U.key === "Enter" && (U.stopPropagation(), L([r]), ae());
  }, Y = (U) => {
    U.stopPropagation(), U.preventDefault(), !r.isEditing && (p || L([r]), d(r), h(U, !0));
  }, V = () => {
    D("visible");
  }, I = () => {
    !p && D("hidden");
  }, X = (U) => {
    U.target.checked ? L((ue) => [...ue, r]) : L((ue) => ue.filter((je) => je.name !== r.name && je.path !== r.path)), R(U.target.checked);
  }, O = (U) => {
    U.dataTransfer.setDragImage(se.current, 30, 50), U.dataTransfer.effectAllowed = "copy", z(!0);
  }, $ = () => H(null), q = (U) => {
    U.preventDefault(), p || !r.isDirectory ? U.dataTransfer.dropEffect = "none" : (b({ x: U.clientX, y: U.clientY + 12 }), U.dataTransfer.dropEffect = "copy", j("file-drop-zone"));
  }, J = (U) => {
    U.currentTarget.contains(U.relatedTarget) || (j((ue) => ue && ""), b(null));
  }, K = (U) => {
    U.preventDefault(), !(p || !r.isDirectory) && (A(r), j((ue) => ue && ""), b(null));
  };
  return ne(() => {
    R(l.includes(e)), D(l.includes(e) ? "visible" : "hidden");
  }, [l]), /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `file-item-container ${C} ${p || r.isEditing ? "file-selected" : ""} ${ce ? "file-moving" : ""}`,
      tabIndex: 0,
      title: r.name,
      onClick: g,
      onKeyDown: P,
      onContextMenu: Y,
      onMouseOver: V,
      onMouseLeave: I,
      draggable: p,
      onDragStart: O,
      onDragEnd: $,
      onDragEnter: q,
      onDragOver: q,
      onDragLeave: J,
      onDrop: K,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "file-item", children: [
          !r.isEditing && /* @__PURE__ */ t.jsx(
            Ar,
            {
              name: r.name,
              id: r.name,
              checked: p,
              className: `selection-checkbox ${N}`,
              onChange: X,
              onClick: (U) => U.stopPropagation()
            }
          ),
          r.isDirectory ? /* @__PURE__ */ t.jsx(Vt, { size: v }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: _[(E = (he = r.name) == null ? void 0 : he.split(".").pop()) == null ? void 0 : E.toLowerCase()] ?? /* @__PURE__ */ t.jsx(qe, { size: v }) }),
          r.isEditing ? /* @__PURE__ */ t.jsx("div", { className: `rename-file-container ${f}`, children: u.actionType === "createFolder" ? /* @__PURE__ */ t.jsx(
            cs,
            {
              filesViewRef: i,
              file: r,
              onCreateFolder: n,
              triggerAction: u
            }
          ) : /* @__PURE__ */ t.jsx(
            ds,
            {
              filesViewRef: i,
              file: r,
              onRename: s,
              triggerAction: u
            }
          ) }) : /* @__PURE__ */ t.jsx("span", { className: "text-truncate file-name", children: r.name })
        ] }),
        f === "list" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx("div", { className: "modified-date", children: fs(r.updatedAt) }),
          /* @__PURE__ */ t.jsx("div", { className: "size", children: (r == null ? void 0 : r.size) > 0 ? Ze(r == null ? void 0 : r.size) : "" })
        ] }),
        y && /* @__PURE__ */ t.jsxs(
          "div",
          {
            style: {
              top: `${y.y}px`,
              left: `${y.x}px`
            },
            className: "drag-move-tooltip",
            children: [
              "Move to ",
              /* @__PURE__ */ t.jsx("span", { className: "drop-zone-file-name", children: r.name })
            ]
          }
        ),
        /* @__PURE__ */ t.jsx("div", { ref: se, className: "drag-icon", children: r.isDirectory ? /* @__PURE__ */ t.jsx(Vt, { size: it }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: oe[(Te = (ve = r.name) == null ? void 0 : ve.split(".").pop()) == null ? void 0 : Te.toLowerCase()] ?? /* @__PURE__ */ t.jsx(qe, { size: it }) }) })
      ]
    }
  );
}, ps = ({ subMenuRef: e, list: r, position: n = "right" }) => /* @__PURE__ */ t.jsx("ul", { ref: e, className: `sub-menu ${n}`, children: r == null ? void 0 : r.map((s) => /* @__PURE__ */ t.jsxs("li", { onClick: s.onClick, children: [
  /* @__PURE__ */ t.jsx("span", { className: "item-selected", children: s.selected && /* @__PURE__ */ t.jsx(br, { size: 13 }) }),
  s.icon,
  /* @__PURE__ */ t.jsx("span", { children: s.title })
] }, s.title)) }), vs = ({ filesViewRef: e, contextMenuRef: r, menuItems: n, visible: s, clickPosition: a }) => {
  const [c, i] = M(0), [l, u] = M(0), [h, d] = M(null), [p, R] = M("right"), F = fe(null), S = () => {
    const { clickX: C, clickY: j } = a, y = e.current, b = y.getBoundingClientRect(), f = y.offsetWidth - y.clientWidth, v = r.current.getBoundingClientRect(), _ = v.width, x = v.height, w = C - b.left, L = b.width - (w + f) > _, k = !L, z = j - b.top, H = b.height - z > x, A = !H;
    L ? (i(`${w}px`), R("right")) : k && (i(`${w - _}px`), R("left")), H ? u(`${z + y.scrollTop}px`) : A && u(`${z + y.scrollTop - x}px`);
  }, N = (C) => {
    C.preventDefault(), C.stopPropagation();
  }, D = (C) => {
    d(C);
  };
  if (ne(() => {
    s && r.current ? S() : (u(0), i(0), d(null));
  }, [s]), s)
    return /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: r,
        onContextMenu: N,
        onClick: (C) => C.stopPropagation(),
        className: `fm-context-menu ${l ? "visible" : "hidden"}`,
        style: {
          top: l,
          left: c
        },
        children: /* @__PURE__ */ t.jsx("div", { className: "file-context-menu-list", children: /* @__PURE__ */ t.jsx("ul", { children: n.filter((C) => !C.hidden).map((C, j) => {
          const y = C.hasOwnProperty("children"), b = h === j && y;
          return /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs(
              "li",
              {
                onClick: C.onClick,
                className: `${C.className ?? ""} ${b ? "active" : ""}`,
                onMouseOver: () => D(j),
                children: [
                  C.icon,
                  /* @__PURE__ */ t.jsx("span", { children: C.title }),
                  y && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                    /* @__PURE__ */ t.jsx(Fn, { size: 14, className: "list-expand-icon" }),
                    b && /* @__PURE__ */ t.jsx(
                      ps,
                      {
                        subMenuRef: F,
                        list: C.children,
                        position: p
                      }
                    )
                  ] })
                ]
              }
            ),
            C.divider && /* @__PURE__ */ t.jsx("div", { className: "divider" })
          ] }, C.title);
        }) }) })
      }
    );
};
function ms(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }, child: [] }] })(e);
}
const gs = (e, r, n) => {
  const [s, a] = M([]), [c, i] = M(!1), [l, u] = M(!1), [h, d] = M({ clickX: 0, clickY: 0 }), [p, R] = M(null), { clipBoard: F, setClipBoard: S, handleCutCopy: N, handlePasting: D } = Je(), { selectedFiles: C, setSelectedFiles: j, handleDownload: y } = Fe(), { currentPath: b, setCurrentPath: f, currentPathFiles: v, setCurrentPathFiles: _ } = Ee(), { activeLayout: x, setActiveLayout: w } = Se(), L = () => {
    p.isDirectory ? (f(p.path), a([]), j([])) : r && n.show("previewFile"), i(!1);
  }, k = (O) => {
    N(O), i(!1);
  }, z = () => {
    D(p), i(!1);
  }, H = () => {
    i(!1), n.show("rename");
  }, A = () => {
    y(), i(!1);
  }, se = () => {
    i(!1), n.show("delete");
  }, oe = () => {
    i(!1), Le(e, "onRefresh"), S(null);
  }, ce = () => {
    n.show("createFolder"), i(!1);
  }, ae = () => {
    i(!1), n.show("uploadFile");
  }, xe = () => {
    j(v), i(!1);
  }, g = [
    {
      title: "View",
      icon: x === "grid" ? /* @__PURE__ */ t.jsx(Dt, { size: 18 }) : /* @__PURE__ */ t.jsx(Ue, { size: 18 }),
      onClick: () => {
      },
      children: [
        {
          title: "Grid",
          icon: /* @__PURE__ */ t.jsx(Dt, { size: 18 }),
          selected: x === "grid",
          onClick: () => {
            w("grid"), i(!1);
          }
        },
        {
          title: "List",
          icon: /* @__PURE__ */ t.jsx(Ue, { size: 18 }),
          selected: x === "list",
          onClick: () => {
            w("list"), i(!1);
          }
        }
      ]
    },
    {
      title: "Refresh",
      icon: /* @__PURE__ */ t.jsx(yr, { size: 18 }),
      onClick: oe,
      divider: !0
    },
    {
      title: "New folder",
      icon: /* @__PURE__ */ t.jsx(vr, { size: 18 }),
      onClick: ce
    },
    {
      title: "Upload",
      icon: /* @__PURE__ */ t.jsx(Cr, { size: 18 }),
      onClick: ae,
      divider: !0
    },
    {
      title: "Select all",
      icon: /* @__PURE__ */ t.jsx(Tn, { size: 18 }),
      onClick: xe
    }
  ], P = [
    {
      title: "Open",
      icon: p != null && p.isDirectory ? /* @__PURE__ */ t.jsx(ms, { size: 20 }) : /* @__PURE__ */ t.jsx(qe, { size: 16 }),
      onClick: L,
      divider: !0
    },
    {
      title: "Cut",
      icon: /* @__PURE__ */ t.jsx(gr, { size: 19 }),
      onClick: () => k(!0)
    },
    {
      title: "Copy",
      icon: /* @__PURE__ */ t.jsx(pr, { strokeWidth: 0.1, size: 17 }),
      onClick: () => k(!1),
      divider: !(p != null && p.isDirectory)
    },
    {
      title: "Paste",
      icon: /* @__PURE__ */ t.jsx(mt, { size: 18 }),
      onClick: z,
      className: `${F ? "" : "disable-paste"}`,
      hidden: !(p != null && p.isDirectory),
      divider: !0
    },
    {
      title: "Rename",
      icon: /* @__PURE__ */ t.jsx(jr, { size: 19 }),
      onClick: H,
      hidden: C.length > 1
    },
    {
      title: "Download",
      icon: /* @__PURE__ */ t.jsx(Ct, { size: 18 }),
      onClick: A,
      hidden: p == null ? void 0 : p.isDirectory
    },
    {
      title: "Delete",
      icon: /* @__PURE__ */ t.jsx(xr, { size: 19 }),
      onClick: se
    }
  ], Y = () => {
    _((O) => [
      ...O,
      {
        name: kr("New Folder", !0, O),
        isDirectory: !0,
        path: b,
        isEditing: !0,
        key: (/* @__PURE__ */ new Date()).valueOf()
      }
    ]);
  }, V = () => {
    _((O) => (O[s.at(-1)] && (O[s.at(-1)].isEditing = !0), O)), a([]), j([]);
  }, I = () => {
    a([]), j((O) => O.length > 0 ? [] : O);
  }, X = (O, $ = !1) => {
    O.preventDefault(), d({ clickX: O.clientX, clickY: O.clientY }), u($), !$ && I(), i(!0);
  };
  return ne(() => {
    if (n.isActive)
      switch (n.actionType) {
        case "createFolder":
          Y();
          break;
        case "rename":
          V();
          break;
      }
  }, [n.isActive]), ne(() => {
    a([]), j([]);
  }, [b]), ne(() => {
    C.length > 0 ? a(() => C.map((O) => v.findIndex(($) => $.path === O.path))) : a([]);
  }, [C, v]), {
    emptySelecCtxItems: g,
    selecCtxItems: P,
    handleContextMenu: X,
    unselectFiles: I,
    visible: c,
    setVisible: i,
    setLastSelectedFile: R,
    selectedFileIndexes: s,
    clickPosition: h,
    isSelectionCtx: l
  };
}, ys = ({ unselectFiles: e }) => {
  const [r, n] = M(!1), { selectedFiles: s, setSelectedFiles: a } = Fe(), { currentPathFiles: c } = Ee(), i = yt(() => c.length > 0 && s.length === c.length, [s, c]), l = (u) => {
    u.target.checked ? (a(c), n(!0)) : e();
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "files-header",
      onMouseOver: () => n(!0),
      onMouseLeave: () => n(!1),
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "file-select-all", children: (r || i) && /* @__PURE__ */ t.jsx(Ar, { checked: i, onChange: l, title: "Select all", disabled: c.length === 0 }) }),
        /* @__PURE__ */ t.jsx("div", { className: "file-name", children: "Name" }),
        /* @__PURE__ */ t.jsx("div", { className: "file-date", children: "Modified" }),
        /* @__PURE__ */ t.jsx("div", { className: "file-size", children: "Size" })
      ]
    }
  );
}, Dr = ({
  onCreateFolder: e,
  onRename: r,
  onFileOpen: n,
  onRefresh: s,
  enableFilePreview: a,
  triggerAction: c
}) => {
  const { currentPathFiles: i } = Ee(), l = fe(null), { activeLayout: u } = Se(), {
    emptySelecCtxItems: h,
    selecCtxItems: d,
    handleContextMenu: p,
    unselectFiles: R,
    visible: F,
    setVisible: S,
    setLastSelectedFile: N,
    selectedFileIndexes: D,
    clickPosition: C,
    isSelectionCtx: j
  } = gs(s, a, c), y = Be(() => S(!1));
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: l,
      className: `files ${u}`,
      onContextMenu: p,
      onClick: R,
      children: [
        u === "list" && /* @__PURE__ */ t.jsx(ys, { unselectFiles: R }),
        (i == null ? void 0 : i.length) > 0 ? /* @__PURE__ */ t.jsx(t.Fragment, { children: i.map((b, f) => /* @__PURE__ */ t.jsx(
          hs,
          {
            index: f,
            file: b,
            onCreateFolder: e,
            onRename: r,
            onFileOpen: n,
            enableFilePreview: a,
            triggerAction: c,
            filesViewRef: l,
            selectedFileIndexes: D,
            handleContextMenu: p,
            setVisible: S,
            setLastSelectedFile: N
          },
          f
        )) }) : /* @__PURE__ */ t.jsx("div", { className: "empty-folder", children: "This folder is empty." }),
        /* @__PURE__ */ t.jsx(
          vs,
          {
            filesViewRef: l,
            contextMenuRef: y.ref,
            menuItems: j ? d : h,
            visible: F,
            setVisible: S,
            clickPosition: C
          }
        )
      ]
    }
  );
};
Dr.displayName = "FileList";
const xs = ({ triggerAction: e, onDelete: r }) => {
  const [n, s] = M(""), { selectedFiles: a, setSelectedFiles: c } = Fe();
  ne(() => {
    s(() => {
      if (a.length === 1)
        return `Are you sure you want to delete "${a[0].name}"?`;
      if (a.length > 1)
        return `Are you sure you want to delete these ${a.length} items?`;
    });
  }, []);
  const i = () => {
    r(a), c([]), e.close();
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "file-delete-confirm", children: [
    /* @__PURE__ */ t.jsx("p", { className: "file-delete-confirm-text", children: n }),
    /* @__PURE__ */ t.jsxs("div", { className: "file-delete-confirm-actions", children: [
      /* @__PURE__ */ t.jsx(Ne, { type: "secondary", onClick: () => e.close(), children: "Cancel" }),
      /* @__PURE__ */ t.jsx(Ne, { type: "danger", onClick: i, children: "Delete" })
    ] })
  ] });
};
function Cs(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 1024 1024", fill: "currentColor", fillRule: "evenodd" }, child: [{ tag: "path", attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" }, child: [] }] })(e);
}
function js(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" }, child: [] }, { tag: "path", attr: { d: "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" }, child: [] }] })(e);
}
const bs = ({ percent: e = 0, isCanceled: r = !1, isCompleted: n = !1, error: s }) => /* @__PURE__ */ t.jsxs("div", { role: "progressbar", className: "fm-progress", children: [
  !s && /* @__PURE__ */ t.jsx("div", { className: "fm-progress-bar", children: /* @__PURE__ */ t.jsx("div", { className: "fm-progress-bar-fill", style: { width: `${e}%` } }) }),
  r ? /* @__PURE__ */ t.jsx("span", { className: "fm-upload-canceled", children: "Canceled" }) : s ? /* @__PURE__ */ t.jsx("span", { className: "fm-upload-canceled", children: s }) : /* @__PURE__ */ t.jsx("div", { className: "fm-progress-status", children: /* @__PURE__ */ t.jsx("span", { children: n ? "Completed" : e + "% done" }) })
] });
function ws(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" }, child: [] }] })(e);
}
const Es = ({
  index: e,
  fileData: r,
  setFiles: n,
  setIsUploading: s,
  fileUploadConfig: a,
  onFileUploaded: c,
  handleFileRemove: i,
  googleBucketUpload: l = !0
}) => {
  var _, x, w, L;
  const [u, h] = M(0), [d, p] = M(!1), [R, F] = M(!1), [S, N] = M(!1), D = Xe(33), C = fe(), { onError: j } = Ge(), y = (k) => {
    h(0), s((H) => ({
      ...H,
      [e]: !1
    }));
    const z = {
      type: "upload",
      message: "Upload failed.",
      response: {
        status: k.status,
        statusText: k.statusText,
        data: k.response
      }
    };
    n(
      (H) => H.map((A, se) => e === se ? {
        ...A,
        error: z.message
      } : A)
    ), N(!0), j(z, r.file);
  }, b = (k) => {
    if (!k.error)
      return new Promise((z, H) => {
        const A = new XMLHttpRequest();
        C.current = A, s((ae) => ({
          ...ae,
          [e]: !0
        })), A.upload.onprogress = (ae) => {
          if (ae.lengthComputable) {
            const xe = Math.round(ae.loaded / ae.total * 100);
            h(xe);
          }
        }, A.onload = () => {
          s((ae) => ({
            ...ae,
            [e]: !1
          })), A.status === 200 || A.status === 201 ? (p(!0), c(A.response), z(A.response)) : (H(A.statusText), y(A));
        }, A.onerror = () => {
          H(A.statusText), y(A);
        }, A.open("POST", a == null ? void 0 : a.url, !0);
        const se = a == null ? void 0 : a.headers;
        for (let ae in se)
          A.setRequestHeader(ae, se[ae]);
        const oe = new FormData(), ce = k == null ? void 0 : k.appendData;
        for (let ae in ce)
          ce[ae] && oe.append(ae, ce[ae]);
        l ? (console.log("true"), oe.append("file", null)) : (console.log("false"), oe.append("file", k.file)), A.send(oe);
      });
  };
  ne(() => {
    C.current || b(r);
  }, []);
  const f = () => {
    C.current && (C.current.abort(), s((k) => ({
      ...k,
      [e]: !1
    })), F(!0), h(0));
  }, v = () => {
    r != null && r.file && (n(
      (k) => k.map((z, H) => e === H ? {
        ...z,
        error: !1
      } : z)
    ), b({ ...r, error: !1 }), F(!1), N(!1));
  };
  return r.removed ? null : /* @__PURE__ */ t.jsxs("li", { children: [
    /* @__PURE__ */ t.jsx("div", { className: "file-icon", children: D[_e((_ = r.file) == null ? void 0 : _.name)] ?? /* @__PURE__ */ t.jsx(qe, { size: 33 }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "file", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "file-details", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "file-info", children: [
          /* @__PURE__ */ t.jsx("span", { className: "file-name text-truncate", title: (x = r.file) == null ? void 0 : x.name, children: (w = r.file) == null ? void 0 : w.name }),
          /* @__PURE__ */ t.jsx("span", { className: "file-size", children: Ze((L = r.file) == null ? void 0 : L.size) })
        ] }),
        d ? /* @__PURE__ */ t.jsx(ss, { title: "Uploaded", className: "upload-success" }) : R || S ? /* @__PURE__ */ t.jsx(ws, { className: "retry-upload", title: "Retry", onClick: v }) : /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "rm-file",
            title: `${r.error ? "Remove" : "Abort Upload"}`,
            onClick: r.error ? () => i(e) : f,
            children: /* @__PURE__ */ t.jsx(Cs, {})
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        bs,
        {
          percent: u,
          isCanceled: R,
          isCompleted: d,
          error: r.error
        }
      )
    ] })
  ] });
}, Rs = ({
  fileUploadConfig: e,
  maxFileSize: r,
  acceptedFileTypes: n,
  onFileUploading: s,
  onFileUploaded: a,
  googleBucketUpload: c = !1
}) => {
  const [i, l] = M([]), [u, h] = M(!1), [d, p] = M({}), { currentFolder: R, currentPathFiles: F } = Ee(), { onError: S } = Ge(), N = fe(null), D = (v) => {
    v.key === "Enter" && N.current.click();
  }, C = (v) => {
    if (n && !n.includes(_e(v.name)))
      return "File type is not allowed.";
    if (F.some(
      (w) => w.name.toLowerCase() === v.name.toLowerCase() && !w.isDirectory
    )) return "File already exists.";
    if (r && v.size > r) return `Maximum upload size is ${Ze(r, 0)}.`;
  }, j = (v) => {
    if (v = v.filter(
      (_) => !i.some((x) => x.file.name.toLowerCase() === _.name.toLowerCase())
    ), v.length > 0) {
      const _ = v.map((x) => {
        const w = s(x, R), L = C(x);
        return L && S({ type: "upload", message: L }, x), {
          file: c ? null : x,
          appendData: w,
          ...L && { error: L }
        };
      });
      l((x) => [...x, ..._]);
    }
  }, y = (v) => {
    v.preventDefault(), h(!1);
    const _ = Array.from(v.dataTransfer.files);
    j(_);
  }, b = (v) => {
    const _ = Array.from(v.target.files);
    j(_);
  }, f = (v) => {
    l((_) => {
      const x = _.map((w, L) => v === L ? {
        ...w,
        removed: !0
      } : w);
      return x.every((w) => !!w.removed) ? [] : x;
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `fm-upload-file ${i.length > 0 ? "file-selcted" : ""}`, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "select-files", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `draggable-file-input ${u ? "dragging" : ""}`,
          onDrop: y,
          onDragOver: (v) => v.preventDefault(),
          onDragEnter: () => h(!0),
          onDragLeave: () => h(!1),
          children: /* @__PURE__ */ t.jsxs("div", { className: "input-text", children: [
            /* @__PURE__ */ t.jsx(js, { size: 30 }),
            /* @__PURE__ */ t.jsx("span", { children: "Drag files to upload" })
          ] })
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "btn-choose-file", children: /* @__PURE__ */ t.jsxs(Ne, { padding: "0", onKeyDown: D, children: [
        /* @__PURE__ */ t.jsx("label", { htmlFor: "chooseFile", children: "Choose File" }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: N,
            type: "file",
            id: "chooseFile",
            className: "choose-file-input",
            onChange: b,
            multiple: !0,
            accept: n
          }
        )
      ] }) })
    ] }),
    i.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "files-progress", children: [
      /* @__PURE__ */ t.jsx("div", { className: "heading", children: Object.values(d).some((v) => v) ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("h2", { children: "Uploading" }),
        /* @__PURE__ */ t.jsx(xt, { loading: !0, className: "upload-loading" })
      ] }) : /* @__PURE__ */ t.jsx("h2", { children: "Completed" }) }),
      /* @__PURE__ */ t.jsx("ul", { children: i.map((v, _) => /* @__PURE__ */ t.jsx(
        Es,
        {
          index: _,
          fileData: v,
          setFiles: l,
          fileUploadConfig: e,
          setIsUploading: p,
          onFileUploaded: a,
          handleFileRemove: f
        },
        _
      )) })
    ] })
  ] });
}, Jt = ["jpg", "jpeg", "png"], Zt = ["mp4", "mov", "avi"], Qt = ["mp3", "wav", "m4a"], er = ["txt", "pdf"], Ps = ({ filePreviewPath: e, filePreviewComponent: r }) => {
  var S;
  const [n, s] = M(!0), [a, c] = M(!1), { selectedFiles: i } = Fe(), l = Xe(73), u = (S = _e(i[0].name)) == null ? void 0 : S.toLowerCase(), h = `${e}${i[0].path}`, d = yt(
    () => r == null ? void 0 : r(i[0]),
    [r]
  ), p = () => {
    s(!1), c(!1);
  }, R = () => {
    s(!1), c(!0);
  }, F = () => {
    window.location.href = h;
  };
  return Pe.isValidElement(d) ? d : /* @__PURE__ */ t.jsxs("section", { className: `file-previewer ${u === "pdf" ? "pdf-previewer" : ""}`, children: [
    a || ![
      ...Jt,
      ...Zt,
      ...Qt,
      ...er
    ].includes(u) && /* @__PURE__ */ t.jsxs("div", { className: "preview-error", children: [
      /* @__PURE__ */ t.jsx("span", { className: "error-icon", children: l[u] ?? /* @__PURE__ */ t.jsx(os, { size: 73 }) }),
      /* @__PURE__ */ t.jsx("span", { className: "error-msg", children: "Sorry! Preview is not available for this file." }),
      /* @__PURE__ */ t.jsxs("div", { className: "file-info", children: [
        /* @__PURE__ */ t.jsx("span", { className: "file-name", children: i[0].name }),
        i[0].size && /* @__PURE__ */ t.jsx("span", { children: "-" }),
        /* @__PURE__ */ t.jsx("span", { className: "file-size", children: Ze(i[0].size) })
      ] }),
      /* @__PURE__ */ t.jsx(Ne, { onClick: F, padding: "0.45rem .9rem", children: /* @__PURE__ */ t.jsxs("div", { className: "download-btn", children: [
        /* @__PURE__ */ t.jsx(Ct, { size: 18 }),
        /* @__PURE__ */ t.jsx("span", { children: "Download" })
      ] }) })
    ] }),
    Jt.includes(u) && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(xt, { isLoading: n }),
      /* @__PURE__ */ t.jsx(
        "img",
        {
          src: h,
          alt: "Preview Unavailable",
          className: `photo-popup-image ${n ? "img-loading" : ""}`,
          onLoad: p,
          onError: R,
          loading: "lazy"
        }
      )
    ] }),
    Zt.includes(u) && /* @__PURE__ */ t.jsx("video", { src: h, className: "video-preview", controls: !0, autoPlay: !0 }),
    Qt.includes(u) && /* @__PURE__ */ t.jsx("audio", { src: h, controls: !0, autoPlay: !0, className: "audio-preview" }),
    er.includes(u) && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
      "iframe",
      {
        src: h,
        onLoad: p,
        onError: R,
        frameBorder: "0",
        className: `photo-popup-iframe ${n ? "img-loading" : ""}`
      }
    ) })
  ] });
}, ct = (e) => e.toLowerCase(), ge = (e, r, n = !1) => {
  const s = fe(/* @__PURE__ */ new Set([])), a = yt(() => new Set(e.map((u) => ct(u))), [e]), c = (u) => {
    if (!u.repeat && (s.current.add(ct(u.key)), a.isSubsetOf(s.current) && !n)) {
      u.preventDefault(), r(u);
      return;
    }
  }, i = (u) => {
    s.current.delete(ct(u.key));
  }, l = () => {
    s.current.clear();
  };
  ne(() => (window.addEventListener("keydown", c), window.addEventListener("keyup", i), window.addEventListener("blur", l), () => {
    window.removeEventListener("keydown", c), window.removeEventListener("keyup", i), window.removeEventListener("blur", l);
  }), [a, r, n]);
}, ye = {
  createFolder: ["Alt", "Shift", "N"],
  uploadFiles: ["Control", "U"],
  cut: ["Control", "X"],
  copy: ["Control", "C"],
  paste: ["Control", "V"],
  rename: ["F2"],
  download: ["Control", "D"],
  delete: ["Delete"],
  selectAll: ["Control", "A"],
  selectArrows: ["Shift", "Arrows"],
  // (pending)
  navigation: ["Arrows"],
  // (pending)
  jumpToFirst: ["Home"],
  jumpToLast: ["End"],
  listLayout: ["Control", "Shift", "!"],
  // Act as Ctrl + Shift + 1 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  gridLayout: ["Control", "Shift", "@"],
  // Act as Ctrl + Shift + 2 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  refresh: ["F5"],
  clearSelection: ["Escape"]
}, Ts = (e, r) => {
  const { setClipBoard: n, handleCutCopy: s, handlePasting: a } = Je(), { currentFolder: c, currentPathFiles: i } = Ee(), { setSelectedFiles: l, handleDownload: u } = Fe(), { setActiveLayout: h } = Se(), d = () => {
    e.show("createFolder");
  }, p = () => {
    e.show("uploadFile");
  }, R = () => {
    s(!0);
  }, F = () => {
    s(!1);
  }, S = () => {
    a(c);
  }, N = () => {
    e.show("rename");
  }, D = () => {
    u();
  }, C = () => {
    e.show("delete");
  }, j = () => {
    i.length > 0 && l([i[0]]);
  }, y = () => {
    i.length > 0 && l([i.at(-1)]);
  }, b = () => {
    l(i);
  }, f = () => {
    l((w) => w.length > 0 ? [] : w);
  }, v = () => {
    Le(r, "onRefresh"), n(null);
  }, _ = () => {
    h("grid");
  }, x = () => {
    h("list");
  };
  ge(ye.createFolder, d, e.isActive), ge(ye.uploadFiles, p, e.isActive), ge(ye.cut, R, e.isActive), ge(ye.copy, F, e.isActive), ge(ye.paste, S, e.isActive), ge(ye.rename, N, e.isActive), ge(ye.download, D, e.isActive), ge(ye.delete, C, e.isActive), ge(ye.jumpToFirst, j, e.isActive), ge(ye.jumpToLast, y, e.isActive), ge(ye.selectAll, b, e.isActive), ge(ye.clearSelection, f, e.isActive), ge(ye.refresh, v, e.isActive), ge(ye.gridLayout, _, e.isActive), ge(ye.listLayout, x, e.isActive);
}, Fs = ({
  fileUploadConfig: e,
  onFileUploading: r,
  onFileUploaded: n,
  onDelete: s,
  onRefresh: a,
  maxFileSize: c,
  filePreviewPath: i,
  filePreviewComponent: l,
  acceptedFileTypes: u,
  triggerAction: h
}) => {
  const [d, p] = M(null), { selectedFiles: R } = Fe();
  Ts(h, a);
  const F = {
    uploadFile: {
      title: "Upload",
      component: /* @__PURE__ */ t.jsx(
        Rs,
        {
          fileUploadConfig: e,
          maxFileSize: c,
          acceptedFileTypes: u,
          onFileUploading: r,
          onFileUploaded: n
        }
      ),
      width: "35%"
    },
    delete: {
      title: "Delete",
      component: /* @__PURE__ */ t.jsx(xs, { triggerAction: h, onDelete: s }),
      width: "25%"
    },
    previewFile: {
      title: "Preview",
      component: /* @__PURE__ */ t.jsx(
        Ps,
        {
          filePreviewPath: i,
          filePreviewComponent: l
        }
      ),
      width: "50%"
    }
  };
  if (ne(() => {
    if (h.isActive) {
      const S = h.actionType;
      S === "previewFile" && (F[S].title = (R == null ? void 0 : R.name) ?? "Preview"), p(F[S]);
    } else
      p(null);
  }, [h.isActive]), d)
    return /* @__PURE__ */ t.jsx(
      zr,
      {
        heading: d.title,
        show: h.isActive,
        setShow: h.close,
        dialogWidth: d.width,
        children: d == null ? void 0 : d.component
      }
    );
}, Ss = () => {
  const [e, r] = M(!1), [n, s] = M(null);
  return {
    isActive: e,
    actionType: n,
    show: (i) => {
      r(!0), s(i);
    },
    close: () => {
      r(!1), s(null);
    }
  };
}, Ms = (e, r) => {
  const [n, s] = M({ col1: e, col2: r }), [a, c] = M(!1), i = fe(null);
  return {
    containerRef: i,
    colSizes: n,
    setColSizes: s,
    isDragging: a,
    handleMouseDown: () => {
      c(!0);
    },
    handleMouseUp: () => {
      c(!1);
    },
    handleMouseMove: (d) => {
      if (!a) return;
      d.preventDefault();
      const R = i.current.getBoundingClientRect(), F = (d.clientX - R.left) / R.width * 100;
      F >= 15 && F <= 60 && s({ col1: F, col2: 100 - F });
    }
  };
};
var gt = { exports: {} }, We = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Ls() {
  if (tr) return te;
  tr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case r:
          switch (f = f.type, f) {
            case u:
            case h:
            case s:
            case c:
            case a:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case d:
                case S:
                case F:
                case i:
                  return f;
                default:
                  return v;
              }
          }
        case n:
          return v;
      }
    }
  }
  function b(f) {
    return y(f) === h;
  }
  return te.AsyncMode = u, te.ConcurrentMode = h, te.ContextConsumer = l, te.ContextProvider = i, te.Element = r, te.ForwardRef = d, te.Fragment = s, te.Lazy = S, te.Memo = F, te.Portal = n, te.Profiler = c, te.StrictMode = a, te.Suspense = p, te.isAsyncMode = function(f) {
    return b(f) || y(f) === u;
  }, te.isConcurrentMode = b, te.isContextConsumer = function(f) {
    return y(f) === l;
  }, te.isContextProvider = function(f) {
    return y(f) === i;
  }, te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, te.isForwardRef = function(f) {
    return y(f) === d;
  }, te.isFragment = function(f) {
    return y(f) === s;
  }, te.isLazy = function(f) {
    return y(f) === S;
  }, te.isMemo = function(f) {
    return y(f) === F;
  }, te.isPortal = function(f) {
    return y(f) === n;
  }, te.isProfiler = function(f) {
    return y(f) === c;
  }, te.isStrictMode = function(f) {
    return y(f) === a;
  }, te.isSuspense = function(f) {
    return y(f) === p;
  }, te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === s || f === h || f === c || f === a || f === p || f === R || typeof f == "object" && f !== null && (f.$$typeof === S || f.$$typeof === F || f.$$typeof === i || f.$$typeof === l || f.$$typeof === d || f.$$typeof === D || f.$$typeof === C || f.$$typeof === j || f.$$typeof === N);
  }, te.typeOf = y, te;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Os() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function y(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === s || E === h || E === c || E === a || E === p || E === R || typeof E == "object" && E !== null && (E.$$typeof === S || E.$$typeof === F || E.$$typeof === i || E.$$typeof === l || E.$$typeof === d || E.$$typeof === D || E.$$typeof === C || E.$$typeof === j || E.$$typeof === N);
    }
    function b(E) {
      if (typeof E == "object" && E !== null) {
        var ve = E.$$typeof;
        switch (ve) {
          case r:
            var Te = E.type;
            switch (Te) {
              case u:
              case h:
              case s:
              case c:
              case a:
              case p:
                return Te;
              default:
                var U = Te && Te.$$typeof;
                switch (U) {
                  case l:
                  case d:
                  case S:
                  case F:
                  case i:
                    return U;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var f = u, v = h, _ = l, x = i, w = r, L = d, k = s, z = S, H = F, A = n, se = c, oe = a, ce = p, ae = !1;
    function xe(E) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(E) || b(E) === u;
    }
    function g(E) {
      return b(E) === h;
    }
    function P(E) {
      return b(E) === l;
    }
    function Y(E) {
      return b(E) === i;
    }
    function V(E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }
    function I(E) {
      return b(E) === d;
    }
    function X(E) {
      return b(E) === s;
    }
    function O(E) {
      return b(E) === S;
    }
    function $(E) {
      return b(E) === F;
    }
    function q(E) {
      return b(E) === n;
    }
    function J(E) {
      return b(E) === c;
    }
    function K(E) {
      return b(E) === a;
    }
    function he(E) {
      return b(E) === p;
    }
    re.AsyncMode = f, re.ConcurrentMode = v, re.ContextConsumer = _, re.ContextProvider = x, re.Element = w, re.ForwardRef = L, re.Fragment = k, re.Lazy = z, re.Memo = H, re.Portal = A, re.Profiler = se, re.StrictMode = oe, re.Suspense = ce, re.isAsyncMode = xe, re.isConcurrentMode = g, re.isContextConsumer = P, re.isContextProvider = Y, re.isElement = V, re.isForwardRef = I, re.isFragment = X, re.isLazy = O, re.isMemo = $, re.isPortal = q, re.isProfiler = J, re.isStrictMode = K, re.isSuspense = he, re.isValidElementType = y, re.typeOf = b;
  }()), re;
}
var nr;
function Ir() {
  return nr || (nr = 1, process.env.NODE_ENV === "production" ? We.exports = Ls() : We.exports = Os()), We.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lt, sr;
function ks() {
  if (sr) return lt;
  sr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function s(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        h[d] = d;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lt = a() ? Object.assign : function(c, i) {
    for (var l, u = s(c), h, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        r.call(l, p) && (u[p] = l[p]);
      if (e) {
        h = e(l);
        for (var R = 0; R < h.length; R++)
          n.call(l, h[R]) && (u[h[R]] = l[h[R]]);
      }
    }
    return u;
  }, lt;
}
var ut, or;
function jt() {
  if (or) return ut;
  or = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ut = e, ut;
}
var dt, ar;
function $r() {
  return ar || (ar = 1, dt = Function.call.bind(Object.prototype.hasOwnProperty)), dt;
}
var ft, ir;
function _s() {
  if (ir) return ft;
  ir = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = jt(), n = {}, s = $r();
    e = function(c) {
      var i = "Warning: " + c;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(c, i, l, u, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in c)
        if (s(c, d)) {
          var p;
          try {
            if (typeof c[d] != "function") {
              var R = Error(
                (u || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw R.name = "Invariant Violation", R;
            }
            p = c[d](i, d, u, l, null, r);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var F = h ? h() : "";
            e(
              "Failed " + l + " type: " + p.message + (F ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ft = a, ft;
}
var ht, cr;
function Ns() {
  if (cr) return ht;
  cr = 1;
  var e = Ir(), r = ks(), n = jt(), s = $r(), a = _s(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ht = function(l, u) {
    var h = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(g) {
      var P = g && (h && g[h] || g[d]);
      if (typeof P == "function")
        return P;
    }
    var R = "<<anonymous>>", F = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: j(),
      arrayOf: y,
      element: b(),
      elementType: f(),
      instanceOf: v,
      node: L(),
      objectOf: x,
      oneOf: _,
      oneOfType: w,
      shape: z,
      exact: H
    };
    function S(g, P) {
      return g === P ? g !== 0 || 1 / g === 1 / P : g !== g && P !== P;
    }
    function N(g, P) {
      this.message = g, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function D(g) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, Y = 0;
      function V(X, O, $, q, J, K, he) {
        if (q = q || R, K = K || $, he !== n) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = q + ":" + $;
            !P[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ve] = !0, Y++);
          }
        }
        return O[$] == null ? X ? O[$] === null ? new N("The " + J + " `" + K + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new N("The " + J + " `" + K + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : g(O, $, q, J, K);
      }
      var I = V.bind(null, !1);
      return I.isRequired = V.bind(null, !0), I;
    }
    function C(g) {
      function P(Y, V, I, X, O, $) {
        var q = Y[V], J = oe(q);
        if (J !== g) {
          var K = ce(q);
          return new N(
            "Invalid " + X + " `" + O + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return D(P);
    }
    function j() {
      return D(i);
    }
    function y(g) {
      function P(Y, V, I, X, O) {
        if (typeof g != "function")
          return new N("Property `" + O + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var $ = Y[V];
        if (!Array.isArray($)) {
          var q = oe($);
          return new N("Invalid " + X + " `" + O + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an array."));
        }
        for (var J = 0; J < $.length; J++) {
          var K = g($, J, I, X, O + "[" + J + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return D(P);
    }
    function b() {
      function g(P, Y, V, I, X) {
        var O = P[Y];
        if (!l(O)) {
          var $ = oe(O);
          return new N("Invalid " + I + " `" + X + "` of type " + ("`" + $ + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return D(g);
    }
    function f() {
      function g(P, Y, V, I, X) {
        var O = P[Y];
        if (!e.isValidElementType(O)) {
          var $ = oe(O);
          return new N("Invalid " + I + " `" + X + "` of type " + ("`" + $ + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return D(g);
    }
    function v(g) {
      function P(Y, V, I, X, O) {
        if (!(Y[V] instanceof g)) {
          var $ = g.name || R, q = xe(Y[V]);
          return new N("Invalid " + X + " `" + O + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return D(P);
    }
    function _(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), i;
      function P(Y, V, I, X, O) {
        for (var $ = Y[V], q = 0; q < g.length; q++)
          if (S($, g[q]))
            return null;
        var J = JSON.stringify(g, function(he, E) {
          var ve = ce(E);
          return ve === "symbol" ? String(E) : E;
        });
        return new N("Invalid " + X + " `" + O + "` of value `" + String($) + "` " + ("supplied to `" + I + "`, expected one of " + J + "."));
      }
      return D(P);
    }
    function x(g) {
      function P(Y, V, I, X, O) {
        if (typeof g != "function")
          return new N("Property `" + O + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var $ = Y[V], q = oe($);
        if (q !== "object")
          return new N("Invalid " + X + " `" + O + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an object."));
        for (var J in $)
          if (s($, J)) {
            var K = g($, J, I, X, O + "." + J, n);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return D(P);
    }
    function w(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var P = 0; P < g.length; P++) {
        var Y = g[P];
        if (typeof Y != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(Y) + " at index " + P + "."
          ), i;
      }
      function V(I, X, O, $, q) {
        for (var J = [], K = 0; K < g.length; K++) {
          var he = g[K], E = he(I, X, O, $, q, n);
          if (E == null)
            return null;
          E.data && s(E.data, "expectedType") && J.push(E.data.expectedType);
        }
        var ve = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new N("Invalid " + $ + " `" + q + "` supplied to " + ("`" + O + "`" + ve + "."));
      }
      return D(V);
    }
    function L() {
      function g(P, Y, V, I, X) {
        return A(P[Y]) ? null : new N("Invalid " + I + " `" + X + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return D(g);
    }
    function k(g, P, Y, V, I) {
      return new N(
        (g || "React class") + ": " + P + " type `" + Y + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function z(g) {
      function P(Y, V, I, X, O) {
        var $ = Y[V], q = oe($);
        if (q !== "object")
          return new N("Invalid " + X + " `" + O + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var J in g) {
          var K = g[J];
          if (typeof K != "function")
            return k(I, X, O, J, ce(K));
          var he = K($, J, I, X, O + "." + J, n);
          if (he)
            return he;
        }
        return null;
      }
      return D(P);
    }
    function H(g) {
      function P(Y, V, I, X, O) {
        var $ = Y[V], q = oe($);
        if (q !== "object")
          return new N("Invalid " + X + " `" + O + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        var J = r({}, Y[V], g);
        for (var K in J) {
          var he = g[K];
          if (s(g, K) && typeof he != "function")
            return k(I, X, O, K, ce(he));
          if (!he)
            return new N(
              "Invalid " + X + " `" + O + "` key `" + K + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(Y[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var E = he($, K, I, X, O + "." + K, n);
          if (E)
            return E;
        }
        return null;
      }
      return D(P);
    }
    function A(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(A);
          if (g === null || l(g))
            return !0;
          var P = p(g);
          if (P) {
            var Y = P.call(g), V;
            if (P !== g.entries) {
              for (; !(V = Y.next()).done; )
                if (!A(V.value))
                  return !1;
            } else
              for (; !(V = Y.next()).done; ) {
                var I = V.value;
                if (I && !A(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(g, P) {
      return g === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function oe(g) {
      var P = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : se(P, g) ? "symbol" : P;
    }
    function ce(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var P = oe(g);
      if (P === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ae(g) {
      var P = ce(g);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function xe(g) {
      return !g.constructor || !g.constructor.name ? R : g.constructor.name;
    }
    return F.checkPropTypes = a, F.resetWarningCache = a.resetWarningCache, F.PropTypes = F, F;
  }, ht;
}
var pt, lr;
function zs() {
  if (lr) return pt;
  lr = 1;
  var e = jt();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, pt = function() {
    function s(i, l, u, h, d, p) {
      if (p !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    s.isRequired = s;
    function a() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: a,
      element: s,
      elementType: s,
      instanceOf: a,
      node: s,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return c.PropTypes = c, c;
  }, pt;
}
if (process.env.NODE_ENV !== "production") {
  var As = Ir(), Ds = !0;
  gt.exports = Ns()(As.isElement, Ds);
} else
  gt.exports = zs()();
var Is = gt.exports;
const Z = /* @__PURE__ */ un(Is), $s = (e, r, n) => {
  const s = e[r];
  if (s && isNaN(Date.parse(s)))
    return new Error(
      `Invalid prop \`${r}\` supplied to \`${n}\`. Expected a valid date string (ISO 8601) but received \`${s}\`.`
    );
}, ur = (e, r, n) => {
  const s = e[r];
  try {
    new URL(s);
    return;
  } catch {
    return new Error(
      `Invalid prop \`${r}\` supplied to \`${n}\`. Expected a valid URL but received \`${s}\`.`
    );
  }
}, Br = ({
  files: e,
  fileUploadConfig: r,
  isLoading: n,
  onCreateFolder: s,
  onFileUploading: a = () => {
  },
  onFileUploaded: c = () => {
  },
  onPaste: i,
  onRename: l,
  onDownload: u,
  onDelete: h = () => null,
  onLayoutChange: d = () => {
  },
  onRefresh: p,
  onFileOpen: R = () => {
  },
  onError: F = () => {
  },
  layout: S = "grid",
  enableFilePreview: N = !0,
  maxFileSize: D,
  filePreviewPath: C,
  acceptedFileTypes: j,
  height: y = "600px",
  width: b = "100%",
  initialPath: f = "",
  filePreviewComponent: v,
  primaryColor: _ = "#6155b4",
  fontFamily: x = "Nunito Sans, sans-serif"
}) => {
  const w = Ss(), { containerRef: L, colSizes: k, isDragging: z, handleMouseMove: H, handleMouseUp: A, handleMouseDown: se } = Ms(20, 80), oe = {
    "--file-manager-font-family": x,
    "--file-manager-primary-color": _,
    height: y,
    width: b
  };
  return /* @__PURE__ */ t.jsxs("main", { className: "file-explorer", onContextMenu: (ce) => ce.preventDefault(), style: oe, children: [
    /* @__PURE__ */ t.jsx(xt, { loading: n }),
    /* @__PURE__ */ t.jsx(Nn, { filesData: e, onError: F, children: /* @__PURE__ */ t.jsx(zn, { initialPath: f, children: /* @__PURE__ */ t.jsx(An, { onDownload: u, children: /* @__PURE__ */ t.jsx(Dn, { onPaste: i, children: /* @__PURE__ */ t.jsxs(kn, { layout: S, children: [
      /* @__PURE__ */ t.jsx(
        Fr,
        {
          allowCreateFolder: !0,
          allowUploadFile: !0,
          onLayoutChange: d,
          onRefresh: p,
          triggerAction: w
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "section",
        {
          ref: L,
          onMouseMove: H,
          onMouseUp: A,
          className: "files-container",
          children: [
            /* @__PURE__ */ t.jsxs("div", { className: "navigation-pane", style: { width: k.col1 + "%" }, children: [
              /* @__PURE__ */ t.jsx(Lr, {}),
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `sidebar-resize ${z ? "sidebar-dragging" : ""}`,
                  onMouseDown: se
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "folders-preview", style: { width: k.col2 + "%" }, children: [
              /* @__PURE__ */ t.jsx(Or, {}),
              /* @__PURE__ */ t.jsx(
                Dr,
                {
                  onCreateFolder: s,
                  onRename: l,
                  onFileOpen: R,
                  onRefresh: p,
                  enableFilePreview: N,
                  triggerAction: w
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ t.jsx(
        Fs,
        {
          fileUploadConfig: r,
          onFileUploading: a,
          onFileUploaded: c,
          onDelete: h,
          onRefresh: p,
          maxFileSize: D,
          filePreviewPath: C,
          filePreviewComponent: v,
          acceptedFileTypes: j,
          triggerAction: w
        }
      )
    ] }) }) }) }) })
  ] });
};
Br.displayName = "FileManager";
Br.propTypes = {
  files: Z.arrayOf(
    Z.shape({
      name: Z.string.isRequired,
      isDirectory: Z.bool.isRequired,
      path: Z.string.isRequired,
      updatedAt: $s,
      size: Z.number
    })
  ).isRequired,
  fileUploadConfig: Z.shape({
    url: ur,
    headers: Z.objectOf(Z.string)
  }),
  isLoading: Z.bool,
  onCreateFolder: Z.func,
  onFileUploading: Z.func,
  onFileUploaded: Z.func,
  onRename: Z.func,
  onDelete: Z.func,
  onPaste: Z.func,
  onDownload: Z.func,
  onLayoutChange: Z.func,
  onRefresh: Z.func,
  onFileOpen: Z.func,
  onError: Z.func,
  layout: Z.oneOf(["grid", "list"]),
  maxFileSize: Z.number,
  enableFilePreview: Z.bool,
  filePreviewPath: ur,
  acceptedFileTypes: Z.string,
  height: Z.oneOfType([Z.string, Z.number]),
  width: Z.oneOfType([Z.string, Z.number]),
  initialPath: Z.string,
  filePreviewComponent: Z.func,
  primaryColor: Z.string,
  fontFamily: Z.string
};
export {
  Br as FileManager
};
