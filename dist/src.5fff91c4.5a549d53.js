// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src.5fff91c4.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "YOwE": [function (require, module, exports) {
    "use strict";

    var r = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        e = Object.prototype.propertyIsEnumerable;

    function n(r) {
      if (null == r) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(r);
    }

    function o() {
      try {
        if (!Object.assign) return !1;
        var r = new String("abc");
        if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;

        for (var t = {}, e = 0; e < 10; e++) {
          t["_" + String.fromCharCode(e)] = e;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (r) {
          return t[r];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (r) {
          n[r] = r;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (o) {
        return !1;
      }
    }

    module.exports = o() ? Object.assign : function (o, c) {
      for (var a, i, s = n(o), f = 1; f < arguments.length; f++) {
        for (var u in a = Object(arguments[f])) {
          t.call(a, u) && (s[u] = a[u]);
        }

        if (r) {
          i = r(a);

          for (var b = 0; b < i.length; b++) {
            e.call(a, i[b]) && (s[i[b]] = a[i[b]]);
          }
        }
      }

      return s;
    };
  }, {}],
  "pyFg": [function (require, module, exports) {
    "use strict";

    var e = require("object-assign"),
        r = "function" == typeof Symbol && Symbol.for,
        t = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        f = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        i = r ? Symbol.for("react.forward_ref") : 60112,
        s = r ? Symbol.for("react.suspense") : 60113,
        a = r ? Symbol.for("react.memo") : 60115,
        p = r ? Symbol.for("react.lazy") : 60116,
        y = "function" == typeof Symbol && Symbol.iterator;

    function d(e) {
      for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) {
        r += "&args[]=" + encodeURIComponent(arguments[t]);
      }

      return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    var v = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        h = {};

    function m(e, r, t) {
      this.props = e, this.context = r, this.refs = h, this.updater = t || v;
    }

    function x() {}

    function b(e, r, t) {
      this.props = e, this.context = r, this.refs = h, this.updater = t || v;
    }

    m.prototype.isReactComponent = {}, m.prototype.setState = function (e, r) {
      if ("object" != _typeof(e) && "function" != typeof e && null != e) throw Error(d(85));
      this.updater.enqueueSetState(this, e, r, "setState");
    }, m.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, x.prototype = m.prototype;
    var S = b.prototype = new x();
    S.constructor = b, e(S, m.prototype), S.isPureReactComponent = !0;
    var _ = {
      current: null
    },
        k = Object.prototype.hasOwnProperty,
        $ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function g(e, r, n) {
      var o,
          u = {},
          f = null,
          c = null;
      if (null != r) for (o in void 0 !== r.ref && (c = r.ref), void 0 !== r.key && (f = "" + r.key), r) {
        k.call(r, o) && !$.hasOwnProperty(o) && (u[o] = r[o]);
      }
      var l = arguments.length - 2;
      if (1 === l) u.children = n;else if (1 < l) {
        for (var i = Array(l), s = 0; s < l; s++) {
          i[s] = arguments[s + 2];
        }

        u.children = i;
      }
      if (e && e.defaultProps) for (o in l = e.defaultProps) {
        void 0 === u[o] && (u[o] = l[o]);
      }
      return {
        $$typeof: t,
        type: e,
        key: f,
        ref: c,
        props: u,
        _owner: _.current
      };
    }

    function w(e, r) {
      return {
        $$typeof: t,
        type: e.type,
        key: r,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      };
    }

    function C(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === t;
    }

    function E(e) {
      var r = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + ("" + e).replace(/[=:]/g, function (e) {
        return r[e];
      });
    }

    var R = /\/+/g,
        P = [];

    function j(e, r, t, n) {
      if (P.length) {
        var o = P.pop();
        return o.result = e, o.keyPrefix = r, o.func = t, o.context = n, o.count = 0, o;
      }

      return {
        result: e,
        keyPrefix: r,
        func: t,
        context: n,
        count: 0
      };
    }

    function O(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > P.length && P.push(e);
    }

    function A(e, r, o, u) {
      var f = _typeof(e);

      "undefined" !== f && "boolean" !== f || (e = null);
      var c = !1;
      if (null === e) c = !0;else switch (f) {
        case "string":
        case "number":
          c = !0;
          break;

        case "object":
          switch (e.$$typeof) {
            case t:
            case n:
              c = !0;
          }

      }
      if (c) return o(u, e, "" === r ? "." + U(e, 0) : r), 1;
      if (c = 0, r = "" === r ? "." : r + ":", Array.isArray(e)) for (var l = 0; l < e.length; l++) {
        var i = r + U(f = e[l], l);
        c += A(f, i, o, u);
      } else if (null === e || "object" != _typeof(e) ? i = null : i = "function" == typeof (i = y && e[y] || e["@@iterator"]) ? i : null, "function" == typeof i) for (e = i.call(e), l = 0; !(f = e.next()).done;) {
        c += A(f = f.value, i = r + U(f, l++), o, u);
      } else if ("object" === f) throw o = "" + e, Error(d(31, "[object Object]" === o ? "object with keys {" + Object.keys(e).join(", ") + "}" : o, ""));
      return c;
    }

    function I(e, r, t) {
      return null == e ? 0 : A(e, "", r, t);
    }

    function U(e, r) {
      return "object" == _typeof(e) && null !== e && null != e.key ? E(e.key) : r.toString(36);
    }

    function q(e, r) {
      e.func.call(e.context, r, e.count++);
    }

    function F(e, r, t) {
      var n = e.result,
          o = e.keyPrefix;
      e = e.func.call(e.context, r, e.count++), Array.isArray(e) ? L(e, n, t, function (e) {
        return e;
      }) : null != e && (C(e) && (e = w(e, o + (!e.key || r && r.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + t)), n.push(e));
    }

    function L(e, r, t, n, o) {
      var u = "";
      null != t && (u = ("" + t).replace(R, "$&/") + "/"), I(e, F, r = j(r, u, n, o)), O(r);
    }

    var M = {
      current: null
    };

    function D() {
      var e = M.current;
      if (null === e) throw Error(d(321));
      return e;
    }

    var V = {
      ReactCurrentDispatcher: M,
      ReactCurrentBatchConfig: {
        suspense: null
      },
      ReactCurrentOwner: _,
      IsSomeRendererActing: {
        current: !1
      },
      assign: e
    };
    exports.Children = {
      map: function map(e, r, t) {
        if (null == e) return e;
        var n = [];
        return L(e, n, null, r, t), n;
      },
      forEach: function forEach(e, r, t) {
        if (null == e) return e;
        I(e, q, r = j(null, null, r, t)), O(r);
      },
      count: function count(e) {
        return I(e, function () {
          return null;
        }, null);
      },
      toArray: function toArray(e) {
        var r = [];
        return L(e, r, null, function (e) {
          return e;
        }), r;
      },
      only: function only(e) {
        if (!C(e)) throw Error(d(143));
        return e;
      }
    }, exports.Component = m, exports.Fragment = o, exports.Profiler = f, exports.PureComponent = b, exports.StrictMode = u, exports.Suspense = s, exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, exports.cloneElement = function (r, n, o) {
      if (null == r) throw Error(d(267, r));
      var u = e({}, r.props),
          f = r.key,
          c = r.ref,
          l = r._owner;

      if (null != n) {
        if (void 0 !== n.ref && (c = n.ref, l = _.current), void 0 !== n.key && (f = "" + n.key), r.type && r.type.defaultProps) var i = r.type.defaultProps;

        for (s in n) {
          k.call(n, s) && !$.hasOwnProperty(s) && (u[s] = void 0 === n[s] && void 0 !== i ? i[s] : n[s]);
        }
      }

      var s = arguments.length - 2;
      if (1 === s) u.children = o;else if (1 < s) {
        i = Array(s);

        for (var a = 0; a < s; a++) {
          i[a] = arguments[a + 2];
        }

        u.children = i;
      }
      return {
        $$typeof: t,
        type: r.type,
        key: f,
        ref: c,
        props: u,
        _owner: l
      };
    }, exports.createContext = function (e, r) {
      return void 0 === r && (r = null), (e = {
        $$typeof: l,
        _calculateChangedBits: r,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }).Provider = {
        $$typeof: c,
        _context: e
      }, e.Consumer = e;
    }, exports.createElement = g, exports.createFactory = function (e) {
      var r = g.bind(null, e);
      return r.type = e, r;
    }, exports.createRef = function () {
      return {
        current: null
      };
    }, exports.forwardRef = function (e) {
      return {
        $$typeof: i,
        render: e
      };
    }, exports.isValidElement = C, exports.lazy = function (e) {
      return {
        $$typeof: p,
        _ctor: e,
        _status: -1,
        _result: null
      };
    }, exports.memo = function (e, r) {
      return {
        $$typeof: a,
        type: e,
        compare: void 0 === r ? null : r
      };
    }, exports.useCallback = function (e, r) {
      return D().useCallback(e, r);
    }, exports.useContext = function (e, r) {
      return D().useContext(e, r);
    }, exports.useDebugValue = function () {}, exports.useEffect = function (e, r) {
      return D().useEffect(e, r);
    }, exports.useImperativeHandle = function (e, r, t) {
      return D().useImperativeHandle(e, r, t);
    }, exports.useLayoutEffect = function (e, r) {
      return D().useLayoutEffect(e, r);
    }, exports.useMemo = function (e, r) {
      return D().useMemo(e, r);
    }, exports.useReducer = function (e, r, t) {
      return D().useReducer(e, r, t);
    }, exports.useRef = function (e) {
      return D().useRef(e);
    }, exports.useState = function (e) {
      return D().useState(e);
    }, exports.version = "16.13.1";
  }, {
    "object-assign": "YOwE"
  }],
  "HdMw": [function (require, module, exports) {
    "use strict";

    module.exports = require("./cjs/react.production.min.js");
  }, {
    "./cjs/react.production.min.js": "pyFg"
  }],
  "x9cO": [function (require, module, exports) {
    "use strict";

    var _e2, n, t, r, o;

    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var a = null,
          l = null,
          i = function i() {
        if (null !== a) try {
          var e = exports.unstable_now();
          a(!0, e), a = null;
        } catch (n) {
          throw setTimeout(i, 0), n;
        }
      },
          u = Date.now();

      exports.unstable_now = function () {
        return Date.now() - u;
      }, _e2 = function e(n) {
        null !== a ? setTimeout(_e2, 0, n) : (a = n, setTimeout(i, 0));
      }, n = function n(e, _n2) {
        l = setTimeout(e, _n2);
      }, t = function t() {
        clearTimeout(l);
      }, r = function r() {
        return !1;
      }, o = exports.unstable_forceFrameRate = function () {};
    } else {
      var s = window.performance,
          c = window.Date,
          f = window.setTimeout,
          p = window.clearTimeout;

      if ("undefined" != typeof console) {
        var b = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof b && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }

      if ("object" == _typeof(s) && "function" == typeof s.now) exports.unstable_now = function () {
        return s.now();
      };else {
        var d = c.now();

        exports.unstable_now = function () {
          return c.now() - d;
        };
      }
      var v = !1,
          x = null,
          w = -1,
          m = 5,
          y = 0;
      r = function r() {
        return exports.unstable_now() >= y;
      }, o = function o() {}, exports.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : m = 0 < e ? Math.floor(1e3 / e) : 5;
      };

      var _ = new MessageChannel(),
          h = _.port2;

      _.port1.onmessage = function () {
        if (null !== x) {
          var e = exports.unstable_now();
          y = e + m;

          try {
            x(!0, e) ? h.postMessage(null) : (v = !1, x = null);
          } catch (n) {
            throw h.postMessage(null), n;
          }
        } else v = !1;
      }, _e2 = function _e2(e) {
        x = e, v || (v = !0, h.postMessage(null));
      }, n = function n(e, _n3) {
        w = f(function () {
          e(exports.unstable_now());
        }, _n3);
      }, t = function t() {
        p(w), w = -1;
      };
    }

    function k(e, n) {
      var t = e.length;
      e.push(n);

      e: for (;;) {
        var r = t - 1 >>> 1,
            o = e[r];
        if (!(void 0 !== o && 0 < P(o, n))) break e;
        e[r] = n, e[t] = o, t = r;
      }
    }

    function T(e) {
      return void 0 === (e = e[0]) ? null : e;
    }

    function g(e) {
      var n = e[0];

      if (void 0 !== n) {
        var t = e.pop();

        if (t !== n) {
          e[0] = t;

          e: for (var r = 0, o = e.length; r < o;) {
            var a = 2 * (r + 1) - 1,
                l = e[a],
                i = a + 1,
                u = e[i];
            if (void 0 !== l && 0 > P(l, t)) void 0 !== u && 0 > P(u, l) ? (e[r] = u, e[i] = t, r = i) : (e[r] = l, e[a] = t, r = a);else {
              if (!(void 0 !== u && 0 > P(u, t))) break e;
              e[r] = u, e[i] = t, r = i;
            }
          }
        }

        return n;
      }

      return null;
    }

    function P(e, n) {
      var t = e.sortIndex - n.sortIndex;
      return 0 !== t ? t : e.id - n.id;
    }

    var F = [],
        I = [],
        M = 1,
        C = null,
        A = 3,
        L = !1,
        q = !1,
        D = !1;

    function R(e) {
      for (var n = T(I); null !== n;) {
        if (null === n.callback) g(I);else {
          if (!(n.startTime <= e)) break;
          g(I), n.sortIndex = n.expirationTime, k(F, n);
        }
        n = T(I);
      }
    }

    function j(t) {
      if (D = !1, R(t), !q) if (null !== T(F)) q = !0, _e2(E);else {
        var r = T(I);
        null !== r && n(j, r.startTime - t);
      }
    }

    function E(e, o) {
      q = !1, D && (D = !1, t()), L = !0;
      var a = A;

      try {
        for (R(o), C = T(F); null !== C && (!(C.expirationTime > o) || e && !r());) {
          var l = C.callback;

          if (null !== l) {
            C.callback = null, A = C.priorityLevel;
            var i = l(C.expirationTime <= o);
            o = exports.unstable_now(), "function" == typeof i ? C.callback = i : C === T(F) && g(F), R(o);
          } else g(F);

          C = T(F);
        }

        if (null !== C) var u = !0;else {
          var s = T(I);
          null !== s && n(j, s.startTime - o), u = !1;
        }
        return u;
      } finally {
        C = null, A = a, L = !1;
      }
    }

    function N(e) {
      switch (e) {
        case 1:
          return -1;

        case 2:
          return 250;

        case 5:
          return 1073741823;

        case 4:
          return 1e4;

        default:
          return 5e3;
      }
    }

    var B = o;
    exports.unstable_IdlePriority = 5, exports.unstable_ImmediatePriority = 1, exports.unstable_LowPriority = 4, exports.unstable_NormalPriority = 3, exports.unstable_Profiling = null, exports.unstable_UserBlockingPriority = 2, exports.unstable_cancelCallback = function (e) {
      e.callback = null;
    }, exports.unstable_continueExecution = function () {
      q || L || (q = !0, _e2(E));
    }, exports.unstable_getCurrentPriorityLevel = function () {
      return A;
    }, exports.unstable_getFirstCallbackNode = function () {
      return T(F);
    }, exports.unstable_next = function (e) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var n = 3;
          break;

        default:
          n = A;
      }

      var t = A;
      A = n;

      try {
        return e();
      } finally {
        A = t;
      }
    }, exports.unstable_pauseExecution = function () {}, exports.unstable_requestPaint = B, exports.unstable_runWithPriority = function (e, n) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;

        default:
          e = 3;
      }

      var t = A;
      A = e;

      try {
        return n();
      } finally {
        A = t;
      }
    }, exports.unstable_scheduleCallback = function (r, o, a) {
      var l = exports.unstable_now();

      if ("object" == _typeof(a) && null !== a) {
        var i = a.delay;
        i = "number" == typeof i && 0 < i ? l + i : l, a = "number" == typeof a.timeout ? a.timeout : N(r);
      } else a = N(r), i = l;

      return r = {
        id: M++,
        callback: o,
        priorityLevel: r,
        startTime: i,
        expirationTime: a = i + a,
        sortIndex: -1
      }, i > l ? (r.sortIndex = i, k(I, r), null === T(F) && r === T(I) && (D ? t() : D = !0, n(j, i - l))) : (r.sortIndex = a, k(F, r), q || L || (q = !0, _e2(E))), r;
    }, exports.unstable_shouldYield = function () {
      var e = exports.unstable_now();
      R(e);
      var n = T(F);
      return n !== C && null !== C && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < C.expirationTime || r();
    }, exports.unstable_wrapCallback = function (e) {
      var n = A;
      return function () {
        var t = A;
        A = n;

        try {
          return e.apply(this, arguments);
        } finally {
          A = t;
        }
      };
    };
  }, {}],
  "IGIl": [function (require, module, exports) {
    "use strict";

    module.exports = require("./cjs/scheduler.production.min.js");
  }, {
    "./cjs/scheduler.production.min.js": "x9cO"
  }],
  "jF7N": [function (require, module, exports) {
    "use strict";

    var e = require("react"),
        t = require("object-assign"),
        n = require("scheduler");

    function r(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      }

      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    if (!e) throw Error(r(227));

    function l(e, t, n, r, l, i, a, o, u) {
      var c = Array.prototype.slice.call(arguments, 3);

      try {
        t.apply(n, c);
      } catch (s) {
        this.onError(s);
      }
    }

    var i = !1,
        a = null,
        o = !1,
        u = null,
        c = {
      onError: function onError(e) {
        i = !0, a = e;
      }
    };

    function s(e, t, n, r, o, u, s, f, d) {
      i = !1, a = null, l.apply(c, arguments);
    }

    function f(e, t, n, l, c, f, d, p, m) {
      if (s.apply(this, arguments), i) {
        if (!i) throw Error(r(198));
        var h = a;
        i = !1, a = null, o || (o = !0, u = h);
      }
    }

    var d = null,
        p = null,
        m = null;

    function h(e, t, n) {
      var r = e.type || "unknown-event";
      e.currentTarget = m(n), f(r, t, void 0, e), e.currentTarget = null;
    }

    var g = null,
        v = {};

    function y() {
      if (g) for (var e in v) {
        var t = v[e],
            n = g.indexOf(e);
        if (!(-1 < n)) throw Error(r(96, e));

        if (!w[n]) {
          if (!t.extractEvents) throw Error(r(97, e));

          for (var l in w[n] = t, n = t.eventTypes) {
            var i = void 0,
                a = n[l],
                o = t,
                u = l;
            if (k.hasOwnProperty(u)) throw Error(r(99, u));
            k[u] = a;
            var c = a.phasedRegistrationNames;

            if (c) {
              for (i in c) {
                c.hasOwnProperty(i) && b(c[i], o, u);
              }

              i = !0;
            } else a.registrationName ? (b(a.registrationName, o, u), i = !0) : i = !1;

            if (!i) throw Error(r(98, l, e));
          }
        }
      }
    }

    function b(e, t, n) {
      if (x[e]) throw Error(r(100, e));
      x[e] = t, T[e] = t.eventTypes[n].dependencies;
    }

    var w = [],
        k = {},
        x = {},
        T = {};

    function E(e) {
      var t,
          n = !1;

      for (t in e) {
        if (e.hasOwnProperty(t)) {
          var l = e[t];

          if (!v.hasOwnProperty(t) || v[t] !== l) {
            if (v[t]) throw Error(r(102, t));
            v[t] = l, n = !0;
          }
        }
      }

      n && y();
    }

    var S = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        C = null,
        P = null,
        _ = null;

    function N(e) {
      if (e = p(e)) {
        if ("function" != typeof C) throw Error(r(280));
        var t = e.stateNode;
        t && (t = d(t), C(e.stateNode, e.type, t));
      }
    }

    function z(e) {
      P ? _ ? _.push(e) : _ = [e] : P = e;
    }

    function M() {
      if (P) {
        var e = P,
            t = _;
        if (_ = P = null, N(e), t) for (e = 0; e < t.length; e++) {
          N(t[e]);
        }
      }
    }

    function I(e, t) {
      return e(t);
    }

    function F(e, t, n, r, l) {
      return e(t, n, r, l);
    }

    function O() {}

    var R = I,
        D = !1,
        L = !1;

    function U() {
      null === P && null === _ || (O(), M());
    }

    function A(e, t, n) {
      if (L) return e(t, n);
      L = !0;

      try {
        return R(e, t, n);
      } finally {
        L = !1, U();
      }
    }

    var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Q = Object.prototype.hasOwnProperty,
        W = {},
        H = {};

    function j(e) {
      return !!Q.call(H, e) || !Q.call(W, e) && (V.test(e) ? H[e] = !0 : (W[e] = !0, !1));
    }

    function B(e, t, n, r) {
      if (null !== n && 0 === n.type) return !1;

      switch (_typeof(t)) {
        case "function":
        case "symbol":
          return !0;

        case "boolean":
          return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);

        default:
          return !1;
      }
    }

    function K(e, t, n, r) {
      if (null == t || B(e, t, n, r)) return !0;
      if (r) return !1;
      if (null !== n) switch (n.type) {
        case 3:
          return !t;

        case 4:
          return !1 === t;

        case 5:
          return isNaN(t);

        case 6:
          return isNaN(t) || 1 > t;
      }
      return !1;
    }

    function $(e, t, n, r, l, i) {
      this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i;
    }

    var q = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
      q[e] = new $(e, 0, !1, e, null, !1);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
      var t = e[0];
      q[t] = new $(t, 1, !1, e[1], null, !1);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      q[e] = new $(e, 2, !1, e.toLowerCase(), null, !1);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
      q[e] = new $(e, 2, !1, e, null, !1);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
      q[e] = new $(e, 3, !1, e.toLowerCase(), null, !1);
    }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      q[e] = new $(e, 3, !0, e, null, !1);
    }), ["capture", "download"].forEach(function (e) {
      q[e] = new $(e, 4, !1, e, null, !1);
    }), ["cols", "rows", "size", "span"].forEach(function (e) {
      q[e] = new $(e, 6, !1, e, null, !1);
    }), ["rowSpan", "start"].forEach(function (e) {
      q[e] = new $(e, 5, !1, e.toLowerCase(), null, !1);
    });
    var Y = /[\-:]([a-z])/g;

    function X(e) {
      return e[1].toUpperCase();
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
      var t = e.replace(Y, X);
      q[t] = new $(t, 1, !1, e, null, !1);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
      var t = e.replace(Y, X);
      q[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Y, X);
      q[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
    }), ["tabIndex", "crossOrigin"].forEach(function (e) {
      q[e] = new $(e, 1, !1, e.toLowerCase(), null, !1);
    }), q.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function (e) {
      q[e] = new $(e, 1, !1, e.toLowerCase(), null, !0);
    });
    var G = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function Z(e, t, n, r) {
      var l = q.hasOwnProperty(t) ? q[t] : null;
      (null !== l ? 0 === l.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) || (K(t, n, l, r) && (n = null), r || null === l ? j(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = null === n ? 3 !== l.type && "" : n : (t = l.attributeName, r = l.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (l = l.type) || 4 === l && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }

    G.hasOwnProperty("ReactCurrentDispatcher") || (G.ReactCurrentDispatcher = {
      current: null
    }), G.hasOwnProperty("ReactCurrentBatchConfig") || (G.ReactCurrentBatchConfig = {
      suspense: null
    });
    var J = /^(.*)[\\\/]/,
        ee = "function" == typeof Symbol && Symbol.for,
        te = ee ? Symbol.for("react.element") : 60103,
        ne = ee ? Symbol.for("react.portal") : 60106,
        re = ee ? Symbol.for("react.fragment") : 60107,
        le = ee ? Symbol.for("react.strict_mode") : 60108,
        ie = ee ? Symbol.for("react.profiler") : 60114,
        ae = ee ? Symbol.for("react.provider") : 60109,
        oe = ee ? Symbol.for("react.context") : 60110,
        ue = ee ? Symbol.for("react.concurrent_mode") : 60111,
        ce = ee ? Symbol.for("react.forward_ref") : 60112,
        se = ee ? Symbol.for("react.suspense") : 60113,
        fe = ee ? Symbol.for("react.suspense_list") : 60120,
        de = ee ? Symbol.for("react.memo") : 60115,
        pe = ee ? Symbol.for("react.lazy") : 60116,
        me = ee ? Symbol.for("react.block") : 60121,
        he = "function" == typeof Symbol && Symbol.iterator;

    function ge(e) {
      return null === e || "object" != _typeof(e) ? null : "function" == typeof (e = he && e[he] || e["@@iterator"]) ? e : null;
    }

    function ve(e) {
      if (-1 === e._status) {
        e._status = 0;
        var t = e._ctor;
        t = t(), e._result = t, t.then(function (t) {
          0 === e._status && (t = t.default, e._status = 1, e._result = t);
        }, function (t) {
          0 === e._status && (e._status = 2, e._result = t);
        });
      }
    }

    function ye(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;

      switch (e) {
        case re:
          return "Fragment";

        case ne:
          return "Portal";

        case ie:
          return "Profiler";

        case le:
          return "StrictMode";

        case se:
          return "Suspense";

        case fe:
          return "SuspenseList";
      }

      if ("object" == _typeof(e)) switch (e.$$typeof) {
        case oe:
          return "Context.Consumer";

        case ae:
          return "Context.Provider";

        case ce:
          var t = e.render;
          return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");

        case de:
          return ye(e.type);

        case me:
          return ye(e.render);

        case pe:
          if (e = 1 === e._status ? e._result : null) return ye(e);
      }
      return null;
    }

    function be(e) {
      var t = "";

      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;

          default:
            var r = e._debugOwner,
                l = e._debugSource,
                i = ye(e.type);
            n = null, r && (n = ye(r.type)), r = i, i = "", l ? i = " (at " + l.fileName.replace(J, "") + ":" + l.lineNumber + ")" : n && (i = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + i;
        }

        t += n, e = e.return;
      } while (e);

      return t;
    }

    function we(e) {
      switch (_typeof(e)) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;

        default:
          return "";
      }
    }

    function ke(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }

    function xe(e) {
      var t = ke(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];

      if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function get() {
            return l.call(this);
          },
          set: function set(e) {
            r = "" + e, i.call(this, e);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function getValue() {
            return r;
          },
          setValue: function setValue(e) {
            r = "" + e;
          },
          stopTracking: function stopTracking() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }

    function Te(e) {
      e._valueTracker || (e._valueTracker = xe(e));
    }

    function Ee(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
          r = "";
      return e && (r = ke(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
    }

    function Se(e, n) {
      var r = n.checked;
      return t({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != r ? r : e._wrapperState.initialChecked
      });
    }

    function Ce(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
      n = we(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
      };
    }

    function Pe(e, t) {
      null != (t = t.checked) && Z(e, "checked", t, !1);
    }

    function _e(e, t) {
      Pe(e, t);
      var n = we(t.value),
          r = t.type;
      if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
      t.hasOwnProperty("value") ? ze(e, t.type, n) : t.hasOwnProperty("defaultValue") && ze(e, t.type, we(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
    }

    function Ne(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
      }

      "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n);
    }

    function ze(e, t, n) {
      "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }

    function Me(t) {
      var n = "";
      return e.Children.forEach(t, function (e) {
        null != e && (n += e);
      }), n;
    }

    function Ie(e, n) {
      return e = t({
        children: void 0
      }, n), (n = Me(n.children)) && (e.children = n), e;
    }

    function Fe(e, t, n, r) {
      if (e = e.options, t) {
        t = {};

        for (var l = 0; l < n.length; l++) {
          t["$" + n[l]] = !0;
        }

        for (n = 0; n < e.length; n++) {
          l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
        }
      } else {
        for (n = "" + we(n), t = null, l = 0; l < e.length; l++) {
          if (e[l].value === n) return e[l].selected = !0, void (r && (e[l].defaultSelected = !0));
          null !== t || e[l].disabled || (t = e[l]);
        }

        null !== t && (t.selected = !0);
      }
    }

    function Oe(e, n) {
      if (null != n.dangerouslySetInnerHTML) throw Error(r(91));
      return t({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }

    function Re(e, t) {
      var n = t.value;

      if (null == n) {
        if (n = t.children, t = t.defaultValue, null != n) {
          if (null != t) throw Error(r(92));

          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(r(93));
            n = n[0];
          }

          t = n;
        }

        null == t && (t = ""), n = t;
      }

      e._wrapperState = {
        initialValue: we(n)
      };
    }

    function De(e, t) {
      var n = we(t.value),
          r = we(t.defaultValue);
      null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
    }

    function Le(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
    }

    var Ue = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };

    function Ae(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";

        case "math":
          return "http://www.w3.org/1998/Math/MathML";

        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }

    function Ve(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e ? Ae(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
    }

    var Qe,
        We = function (e) {
      return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n);
        });
      } : e;
    }(function (e, t) {
      if (e.namespaceURI !== Ue.svg || "innerHTML" in e) e.innerHTML = t;else {
        for ((Qe = Qe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qe.firstChild; e.firstChild;) {
          e.removeChild(e.firstChild);
        }

        for (; t.firstChild;) {
          e.appendChild(t.firstChild);
        }
      }
    });

    function He(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
      }

      e.textContent = t;
    }

    function je(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }

    var Be = {
      animationend: je("Animation", "AnimationEnd"),
      animationiteration: je("Animation", "AnimationIteration"),
      animationstart: je("Animation", "AnimationStart"),
      transitionend: je("Transition", "TransitionEnd")
    },
        Ke = {},
        $e = {};

    function qe(e) {
      if (Ke[e]) return Ke[e];
      if (!Be[e]) return e;
      var t,
          n = Be[e];

      for (t in n) {
        if (n.hasOwnProperty(t) && t in $e) return Ke[e] = n[t];
      }

      return e;
    }

    S && ($e = document.createElement("div").style, "AnimationEvent" in window || (delete Be.animationend.animation, delete Be.animationiteration.animation, delete Be.animationstart.animation), "TransitionEvent" in window || delete Be.transitionend.transition);
    var Ye = qe("animationend"),
        Xe = qe("animationiteration"),
        Ge = qe("animationstart"),
        Ze = qe("transitionend"),
        Je = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        et = new ("function" == typeof WeakMap ? WeakMap : Map)();

    function tt(e) {
      var t = et.get(e);
      return void 0 === t && (t = new Map(), et.set(e, t)), t;
    }

    function nt(e) {
      var t = e,
          n = e;
      if (e.alternate) for (; t.return;) {
        t = t.return;
      } else {
        e = t;

        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return;
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }

    function rt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated;
      }

      return null;
    }

    function lt(e) {
      if (nt(e) !== e) throw Error(r(188));
    }

    function it(e) {
      var t = e.alternate;

      if (!t) {
        if (null === (t = nt(e))) throw Error(r(188));
        return t !== e ? null : e;
      }

      for (var n = e, l = t;;) {
        var i = n.return;
        if (null === i) break;
        var a = i.alternate;

        if (null === a) {
          if (null !== (l = i.return)) {
            n = l;
            continue;
          }

          break;
        }

        if (i.child === a.child) {
          for (a = i.child; a;) {
            if (a === n) return lt(i), e;
            if (a === l) return lt(i), t;
            a = a.sibling;
          }

          throw Error(r(188));
        }

        if (n.return !== l.return) n = i, l = a;else {
          for (var o = !1, u = i.child; u;) {
            if (u === n) {
              o = !0, n = i, l = a;
              break;
            }

            if (u === l) {
              o = !0, l = i, n = a;
              break;
            }

            u = u.sibling;
          }

          if (!o) {
            for (u = a.child; u;) {
              if (u === n) {
                o = !0, n = a, l = i;
                break;
              }

              if (u === l) {
                o = !0, l = a, n = i;
                break;
              }

              u = u.sibling;
            }

            if (!o) throw Error(r(189));
          }
        }
        if (n.alternate !== l) throw Error(r(190));
      }

      if (3 !== n.tag) throw Error(r(188));
      return n.stateNode.current === n ? e : t;
    }

    function at(e) {
      if (!(e = it(e))) return null;

      for (var t = e;;) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) t.child.return = t, t = t.child;else {
          if (t === e) break;

          for (; !t.sibling;) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }

          t.sibling.return = t.return, t = t.sibling;
        }
      }

      return null;
    }

    function ot(e, t) {
      if (null == t) throw Error(r(30));
      return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
    }

    function ut(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }

    var ct = null;

    function st(e) {
      if (e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) {
          h(e, t[r], n[r]);
        } else t && h(e, t, n);
        e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e);
      }
    }

    function ft(e) {
      if (null !== e && (ct = ot(ct, e)), e = ct, ct = null, e) {
        if (ut(e, st), ct) throw Error(r(95));
        if (o) throw e = u, o = !1, u = null, e;
      }
    }

    function dt(e) {
      return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
    }

    function pt(e) {
      if (!S) return !1;
      var t = ((e = "on" + e) in document);
      return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t;
    }

    var mt = [];

    function ht(e) {
      e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > mt.length && mt.push(e);
    }

    function gt(e, t, n, r) {
      if (mt.length) {
        var l = mt.pop();
        return l.topLevelType = e, l.eventSystemFlags = r, l.nativeEvent = t, l.targetInst = n, l;
      }

      return {
        topLevelType: e,
        eventSystemFlags: r,
        nativeEvent: t,
        targetInst: n,
        ancestors: []
      };
    }

    function vt(e) {
      var t = e.targetInst,
          n = t;

      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }

        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;else {
          for (; r.return;) {
            r = r.return;
          }

          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = Un(r);
      } while (n);

      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var l = dt(e.nativeEvent);
        r = e.topLevelType;
        var i = e.nativeEvent,
            a = e.eventSystemFlags;
        0 === n && (a |= 64);

        for (var o = null, u = 0; u < w.length; u++) {
          var c = w[u];
          c && (c = c.extractEvents(r, t, i, l, a)) && (o = ot(o, c));
        }

        ft(o);
      }
    }

    function yt(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            en(t, "scroll", !0);
            break;

          case "focus":
          case "blur":
            en(t, "focus", !0), en(t, "blur", !0), n.set("blur", null), n.set("focus", null);
            break;

          case "cancel":
          case "close":
            pt(e) && en(t, e, !0);
            break;

          case "invalid":
          case "submit":
          case "reset":
            break;

          default:
            -1 === Je.indexOf(e) && Jt(e, t);
        }

        n.set(e, null);
      }
    }

    var bt,
        wt,
        kt,
        xt = !1,
        Tt = [],
        Et = null,
        St = null,
        Ct = null,
        Pt = new Map(),
        _t = new Map(),
        Nt = [],
        zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        Mt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function It(e, t) {
      var n = tt(t);
      zt.forEach(function (e) {
        yt(e, t, n);
      }), Mt.forEach(function (e) {
        yt(e, t, n);
      });
    }

    function Ft(e, t, n, r, l) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: l,
        container: r
      };
    }

    function Ot(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          Et = null;
          break;

        case "dragenter":
        case "dragleave":
          St = null;
          break;

        case "mouseover":
        case "mouseout":
          Ct = null;
          break;

        case "pointerover":
        case "pointerout":
          Pt.delete(t.pointerId);
          break;

        case "gotpointercapture":
        case "lostpointercapture":
          _t.delete(t.pointerId);

      }
    }

    function Rt(e, t, n, r, l, i) {
      return null === e || e.nativeEvent !== i ? (e = Ft(t, n, r, l, i), null !== t && null !== (t = An(t)) && wt(t), e) : (e.eventSystemFlags |= r, e);
    }

    function Dt(e, t, n, r, l) {
      switch (t) {
        case "focus":
          return Et = Rt(Et, e, t, n, r, l), !0;

        case "dragenter":
          return St = Rt(St, e, t, n, r, l), !0;

        case "mouseover":
          return Ct = Rt(Ct, e, t, n, r, l), !0;

        case "pointerover":
          var i = l.pointerId;
          return Pt.set(i, Rt(Pt.get(i) || null, e, t, n, r, l)), !0;

        case "gotpointercapture":
          return i = l.pointerId, _t.set(i, Rt(_t.get(i) || null, e, t, n, r, l)), !0;
      }

      return !1;
    }

    function Lt(e) {
      var t = Un(e.target);

      if (null !== t) {
        var r = nt(t);
        if (null !== r) if (13 === (t = r.tag)) {
          if (null !== (t = rt(r))) return e.blockedOn = t, void n.unstable_runWithPriority(e.priority, function () {
            kt(r);
          });
        } else if (3 === t && r.stateNode.hydrate) return void (e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null);
      }

      e.blockedOn = null;
    }

    function Ut(e) {
      if (null !== e.blockedOn) return !1;
      var t = ln(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);

      if (null !== t) {
        var n = An(t);
        return null !== n && wt(n), e.blockedOn = t, !1;
      }

      return !0;
    }

    function At(e, t, n) {
      Ut(e) && n.delete(t);
    }

    function Vt() {
      for (xt = !1; 0 < Tt.length;) {
        var e = Tt[0];

        if (null !== e.blockedOn) {
          null !== (e = An(e.blockedOn)) && bt(e);
          break;
        }

        var t = ln(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        null !== t ? e.blockedOn = t : Tt.shift();
      }

      null !== Et && Ut(Et) && (Et = null), null !== St && Ut(St) && (St = null), null !== Ct && Ut(Ct) && (Ct = null), Pt.forEach(At), _t.forEach(At);
    }

    function Qt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, xt || (xt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Vt)));
    }

    function Wt(e) {
      function t(t) {
        return Qt(t, e);
      }

      if (0 < Tt.length) {
        Qt(Tt[0], e);

        for (var n = 1; n < Tt.length; n++) {
          var r = Tt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }

      for (null !== Et && Qt(Et, e), null !== St && Qt(St, e), null !== Ct && Qt(Ct, e), Pt.forEach(t), _t.forEach(t), n = 0; n < Nt.length; n++) {
        (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
      }

      for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn;) {
        Lt(n), null === n.blockedOn && Nt.shift();
      }
    }

    var Ht = {},
        jt = new Map(),
        Bt = new Map(),
        Kt = ["abort", "abort", Ye, "animationEnd", Xe, "animationIteration", Ge, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ze, "transitionEnd", "waiting", "waiting"];

    function $t(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
            l = e[n + 1],
            i = "on" + (l[0].toUpperCase() + l.slice(1));
        i = {
          phasedRegistrationNames: {
            bubbled: i,
            captured: i + "Capture"
          },
          dependencies: [r],
          eventPriority: t
        }, Bt.set(r, t), jt.set(r, i), Ht[l] = i;
      }
    }

    $t("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), $t("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), $t(Kt, 2);

    for (var qt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Yt = 0; Yt < qt.length; Yt++) {
      Bt.set(qt[Yt], 0);
    }

    var Xt = n.unstable_UserBlockingPriority,
        Gt = n.unstable_runWithPriority,
        Zt = !0;

    function Jt(e, t) {
      en(t, e, !1);
    }

    function en(e, t, n) {
      var r = Bt.get(t);

      switch (void 0 === r ? 2 : r) {
        case 0:
          r = tn.bind(null, t, 1, e);
          break;

        case 1:
          r = nn.bind(null, t, 1, e);
          break;

        default:
          r = rn.bind(null, t, 1, e);
      }

      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }

    function tn(e, t, n, r) {
      D || O();
      var l = rn,
          i = D;
      D = !0;

      try {
        F(l, e, t, n, r);
      } finally {
        (D = i) || U();
      }
    }

    function nn(e, t, n, r) {
      Gt(Xt, rn.bind(null, e, t, n, r));
    }

    function rn(e, t, n, r) {
      if (Zt) if (0 < Tt.length && -1 < zt.indexOf(e)) e = Ft(null, e, t, n, r), Tt.push(e);else {
        var l = ln(e, t, n, r);
        if (null === l) Ot(e, r);else if (-1 < zt.indexOf(e)) e = Ft(l, e, t, n, r), Tt.push(e);else if (!Dt(l, e, t, n, r)) {
          Ot(e, r), e = gt(e, r, null, t);

          try {
            A(vt, e);
          } finally {
            ht(e);
          }
        }
      }
    }

    function ln(e, t, n, r) {
      if (null !== (n = Un(n = dt(r)))) {
        var l = nt(n);
        if (null === l) n = null;else {
          var i = l.tag;

          if (13 === i) {
            if (null !== (n = rt(l))) return n;
            n = null;
          } else if (3 === i) {
            if (l.stateNode.hydrate) return 3 === l.tag ? l.stateNode.containerInfo : null;
            n = null;
          } else l !== n && (n = null);
        }
      }

      e = gt(e, r, n, t);

      try {
        A(vt, e);
      } finally {
        ht(e);
      }

      return null;
    }

    var an = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
        on = ["Webkit", "ms", "Moz", "O"];

    function un(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || an.hasOwnProperty(e) && an[e] ? ("" + t).trim() : t + "px";
    }

    function cn(e, t) {
      for (var n in e = e.style, t) {
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
              l = un(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
      }
    }

    Object.keys(an).forEach(function (e) {
      on.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), an[t] = an[e];
      });
    });
    var sn = t({
      menuitem: !0
    }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    });

    function fn(e, t) {
      if (t) {
        if (sn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(r(137, e, ""));

        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(r(60));
          if (!("object" == _typeof(t.dangerouslySetInnerHTML) && "__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
        }

        if (null != t.style && "object" != _typeof(t.style)) throw Error(r(62, ""));
      }
    }

    function dn(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;

      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;

        default:
          return !0;
      }
    }

    var pn = Ue.html;

    function mn(e, t) {
      var n = tt(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
      t = T[t];

      for (var r = 0; r < t.length; r++) {
        yt(t[r], e, n);
      }
    }

    function hn() {}

    function gn(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;

      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }

    function vn(e) {
      for (; e && e.firstChild;) {
        e = e.firstChild;
      }

      return e;
    }

    function yn(e, t) {
      var n,
          r = vn(e);

      for (e = 0; r;) {
        if (3 === r.nodeType) {
          if (n = e + r.textContent.length, e <= t && n >= t) return {
            node: r,
            offset: t - e
          };
          e = n;
        }

        e: {
          for (; r;) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }

            r = r.parentNode;
          }

          r = void 0;
        }

        r = vn(r);
      }
    }

    function bn(e, t) {
      return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? bn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
    }

    function wn() {
      for (var e = window, t = gn(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (r) {
          n = !1;
        }

        if (!n) break;
        t = gn((e = t.contentWindow).document);
      }

      return t;
    }

    function kn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
    }

    var xn = "$",
        Tn = "/$",
        En = "$?",
        Sn = "$!",
        Cn = null,
        Pn = null;

    function _n(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }

      return !1;
    }

    function Nn(e, t) {
      return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == _typeof(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
    }

    var zn = "function" == typeof setTimeout ? setTimeout : void 0,
        Mn = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function In(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }

      return e;
    }

    function Fn(e) {
      e = e.previousSibling;

      for (var t = 0; e;) {
        if (8 === e.nodeType) {
          var n = e.data;

          if (n === xn || n === Sn || n === En) {
            if (0 === t) return e;
            t--;
          } else n === Tn && t++;
        }

        e = e.previousSibling;
      }

      return null;
    }

    var On = Math.random().toString(36).slice(2),
        Rn = "__reactInternalInstance$" + On,
        Dn = "__reactEventHandlers$" + On,
        Ln = "__reactContainere$" + On;

    function Un(e) {
      var t = e[Rn];
      if (t) return t;

      for (var n = e.parentNode; n;) {
        if (t = n[Ln] || n[Rn]) {
          if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = Fn(e); null !== e;) {
            if (n = e[Rn]) return n;
            e = Fn(e);
          }
          return t;
        }

        n = (e = n).parentNode;
      }

      return null;
    }

    function An(e) {
      return !(e = e[Rn] || e[Ln]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e;
    }

    function Vn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(r(33));
    }

    function Qn(e) {
      return e[Dn] || null;
    }

    function Wn(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);

      return e || null;
    }

    function Hn(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var l = d(n);
      if (!l) return null;
      n = l[t];

      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (l = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !l;
          break e;

        default:
          e = !1;
      }

      if (e) return null;
      if (n && "function" != typeof n) throw Error(r(231, t, _typeof(n)));
      return n;
    }

    function jn(e, t, n) {
      (t = Hn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = ot(n._dispatchListeners, t), n._dispatchInstances = ot(n._dispatchInstances, e));
    }

    function Bn(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t;) {
          n.push(t), t = Wn(t);
        }

        for (t = n.length; 0 < t--;) {
          jn(n[t], "captured", e);
        }

        for (t = 0; t < n.length; t++) {
          jn(n[t], "bubbled", e);
        }
      }
    }

    function Kn(e, t, n) {
      e && n && n.dispatchConfig.registrationName && (t = Hn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = ot(n._dispatchListeners, t), n._dispatchInstances = ot(n._dispatchInstances, e));
    }

    function $n(e) {
      e && e.dispatchConfig.registrationName && Kn(e._targetInst, null, e);
    }

    function qn(e) {
      ut(e, Bn);
    }

    var Yn = null,
        Xn = null,
        Gn = null;

    function Zn() {
      if (Gn) return Gn;
      var e,
          t,
          n = Xn,
          r = n.length,
          l = "value" in Yn ? Yn.value : Yn.textContent,
          i = l.length;

      for (e = 0; e < r && n[e] === l[e]; e++) {
        ;
      }

      var a = r - e;

      for (t = 1; t <= a && n[r - t] === l[i - t]; t++) {
        ;
      }

      return Gn = l.slice(e, 1 < t ? 1 - t : void 0);
    }

    function Jn() {
      return !0;
    }

    function er() {
      return !1;
    }

    function tr(e, t, n, r) {
      for (var l in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) {
        e.hasOwnProperty(l) && ((t = e[l]) ? this[l] = t(n) : "target" === l ? this.target = r : this[l] = n[l]);
      }

      return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Jn : er, this.isPropagationStopped = er, this;
    }

    function nr(e, t, n, r) {
      if (this.eventPool.length) {
        var l = this.eventPool.pop();
        return this.call(l, e, t, n, r), l;
      }

      return new this(e, t, n, r);
    }

    function rr(e) {
      if (!(e instanceof this)) throw Error(r(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }

    function lr(e) {
      e.eventPool = [], e.getPooled = nr, e.release = rr;
    }

    t(tr.prototype, {
      preventDefault: function preventDefault() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function stopPropagation() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function persist() {
        this.isPersistent = Jn;
      },
      isPersistent: er,
      destructor: function destructor() {
        var e,
            t = this.constructor.Interface;

        for (e in t) {
          this[e] = null;
        }

        this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = er, this._dispatchInstances = this._dispatchListeners = null;
      }
    }), tr.Interface = {
      type: null,
      target: null,
      currentTarget: function currentTarget() {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function timeStamp(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    }, tr.extend = function (e) {
      function n() {}

      function r() {
        return l.apply(this, arguments);
      }

      var l = this;
      n.prototype = l.prototype;
      var i = new n();
      return t(i, r.prototype), r.prototype = i, r.prototype.constructor = r, r.Interface = t({}, l.Interface, e), r.extend = l.extend, lr(r), r;
    }, lr(tr);
    var ir = tr.extend({
      data: null
    }),
        ar = tr.extend({
      data: null
    }),
        or = [9, 13, 27, 32],
        ur = S && "CompositionEvent" in window,
        cr = null;
    S && "documentMode" in document && (cr = document.documentMode);
    var sr = S && "TextEvent" in window && !cr,
        fr = S && (!ur || cr && 8 < cr && 11 >= cr),
        dr = String.fromCharCode(32),
        pr = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: ["compositionend", "keypress", "textInput", "paste"]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
      }
    },
        mr = !1;

    function hr(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== or.indexOf(t.keyCode);

        case "keydown":
          return 229 !== t.keyCode;

        case "keypress":
        case "mousedown":
        case "blur":
          return !0;

        default:
          return !1;
      }
    }

    function gr(e) {
      return "object" == _typeof(e = e.detail) && "data" in e ? e.data : null;
    }

    var vr = !1;

    function yr(e, t) {
      switch (e) {
        case "compositionend":
          return gr(t);

        case "keypress":
          return 32 !== t.which ? null : (mr = !0, dr);

        case "textInput":
          return (e = t.data) === dr && mr ? null : e;

        default:
          return null;
      }
    }

    function br(e, t) {
      if (vr) return "compositionend" === e || !ur && hr(e, t) ? (e = Zn(), Gn = Xn = Yn = null, vr = !1, e) : null;

      switch (e) {
        case "paste":
          return null;

        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }

          return null;

        case "compositionend":
          return fr && "ko" !== t.locale ? null : t.data;

        default:
          return null;
      }
    }

    var wr = {
      eventTypes: pr,
      extractEvents: function extractEvents(e, t, n, r) {
        var l;
        if (ur) e: {
          switch (e) {
            case "compositionstart":
              var i = pr.compositionStart;
              break e;

            case "compositionend":
              i = pr.compositionEnd;
              break e;

            case "compositionupdate":
              i = pr.compositionUpdate;
              break e;
          }

          i = void 0;
        } else vr ? hr(e, n) && (i = pr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = pr.compositionStart);
        return i ? (fr && "ko" !== n.locale && (vr || i !== pr.compositionStart ? i === pr.compositionEnd && vr && (l = Zn()) : (Xn = "value" in (Yn = r) ? Yn.value : Yn.textContent, vr = !0)), i = ir.getPooled(i, t, n, r), l ? i.data = l : null !== (l = gr(n)) && (i.data = l), qn(i), l = i) : l = null, (e = sr ? yr(e, n) : br(e, n)) ? ((t = ar.getPooled(pr.beforeInput, t, n, r)).data = e, qn(t)) : t = null, null === l ? t : null === t ? l : [l, t];
      }
    },
        kr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };

    function xr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!kr[e.type] : "textarea" === t;
    }

    var Tr = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
      }
    };

    function Er(e, t, n) {
      return (e = tr.getPooled(Tr.change, e, t, n)).type = "change", z(n), qn(e), e;
    }

    var Sr = null,
        Cr = null;

    function Pr(e) {
      ft(e);
    }

    function _r(e) {
      if (Ee(Vn(e))) return e;
    }

    function Nr(e, t) {
      if ("change" === e) return t;
    }

    var zr = !1;

    function Mr() {
      Sr && (Sr.detachEvent("onpropertychange", Ir), Cr = Sr = null);
    }

    function Ir(e) {
      if ("value" === e.propertyName && _r(Cr)) if (e = Er(Cr, e, dt(e)), D) ft(e);else {
        D = !0;

        try {
          I(Pr, e);
        } finally {
          D = !1, U();
        }
      }
    }

    function Fr(e, t, n) {
      "focus" === e ? (Mr(), Cr = n, (Sr = t).attachEvent("onpropertychange", Ir)) : "blur" === e && Mr();
    }

    function Or(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return _r(Cr);
    }

    function Rr(e, t) {
      if ("click" === e) return _r(t);
    }

    function Dr(e, t) {
      if ("input" === e || "change" === e) return _r(t);
    }

    S && (zr = pt("input") && (!document.documentMode || 9 < document.documentMode));
    var Lr = {
      eventTypes: Tr,
      _isInputEventSupported: zr,
      extractEvents: function extractEvents(e, t, n, r) {
        var l = t ? Vn(t) : window,
            i = l.nodeName && l.nodeName.toLowerCase();
        if ("select" === i || "input" === i && "file" === l.type) var a = Nr;else if (xr(l)) {
          if (zr) a = Dr;else {
            a = Or;
            var o = Fr;
          }
        } else (i = l.nodeName) && "input" === i.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (a = Rr);
        if (a && (a = a(e, t))) return Er(a, n, r);
        o && o(e, l, t), "blur" === e && (e = l._wrapperState) && e.controlled && "number" === l.type && ze(l, "number", l.value);
      }
    },
        Ur = tr.extend({
      view: null,
      detail: null
    }),
        Ar = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

    function Vr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = Ar[e]) && !!t[e];
    }

    function Qr() {
      return Vr;
    }

    var Wr = 0,
        Hr = 0,
        jr = !1,
        Br = !1,
        Kr = Ur.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: Qr,
      button: null,
      buttons: null,
      relatedTarget: function relatedTarget(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      movementX: function movementX(e) {
        if ("movementX" in e) return e.movementX;
        var t = Wr;
        return Wr = e.screenX, jr ? "mousemove" === e.type ? e.screenX - t : 0 : (jr = !0, 0);
      },
      movementY: function movementY(e) {
        if ("movementY" in e) return e.movementY;
        var t = Hr;
        return Hr = e.screenY, Br ? "mousemove" === e.type ? e.screenY - t : 0 : (Br = !0, 0);
      }
    }),
        $r = Kr.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null
    }),
        qr = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: ["mouseout", "mouseover"]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: ["mouseout", "mouseover"]
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: ["pointerout", "pointerover"]
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: ["pointerout", "pointerover"]
      }
    },
        Yr = {
      eventTypes: qr,
      extractEvents: function extractEvents(e, t, n, r, l) {
        var i = "mouseover" === e || "pointerover" === e,
            a = "mouseout" === e || "pointerout" === e;
        if (i && 0 == (32 & l) && (n.relatedTarget || n.fromElement) || !a && !i) return null;
        (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, a) ? (a = t, null !== (t = (t = n.relatedTarget || n.toElement) ? Un(t) : null) && (t !== nt(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null;
        if (a === t) return null;
        if ("mouseout" === e || "mouseover" === e) var o = Kr,
            u = qr.mouseLeave,
            c = qr.mouseEnter,
            s = "mouse";else "pointerout" !== e && "pointerover" !== e || (o = $r, u = qr.pointerLeave, c = qr.pointerEnter, s = "pointer");
        if (e = null == a ? i : Vn(a), i = null == t ? i : Vn(t), (u = o.getPooled(u, a, n, r)).type = s + "leave", u.target = e, u.relatedTarget = i, (n = o.getPooled(c, t, n, r)).type = s + "enter", n.target = i, n.relatedTarget = e, s = t, (r = a) && s) e: {
          for (c = s, a = 0, e = o = r; e; e = Wn(e)) {
            a++;
          }

          for (e = 0, t = c; t; t = Wn(t)) {
            e++;
          }

          for (; 0 < a - e;) {
            o = Wn(o), a--;
          }

          for (; 0 < e - a;) {
            c = Wn(c), e--;
          }

          for (; a--;) {
            if (o === c || o === c.alternate) break e;
            o = Wn(o), c = Wn(c);
          }

          o = null;
        } else o = null;

        for (c = o, o = []; r && r !== c && (null === (a = r.alternate) || a !== c);) {
          o.push(r), r = Wn(r);
        }

        for (r = []; s && s !== c && (null === (a = s.alternate) || a !== c);) {
          r.push(s), s = Wn(s);
        }

        for (s = 0; s < o.length; s++) {
          Kn(o[s], "bubbled", u);
        }

        for (s = r.length; 0 < s--;) {
          Kn(r[s], "captured", n);
        }

        return 0 == (64 & l) ? [u] : [u, n];
      }
    };

    function Xr(e, t) {
      return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
    }

    var Gr = "function" == typeof Object.is ? Object.is : Xr,
        Zr = Object.prototype.hasOwnProperty;

    function Jr(e, t) {
      if (Gr(e, t)) return !0;
      if ("object" != _typeof(e) || null === e || "object" != _typeof(t) || null === t) return !1;
      var n = Object.keys(e),
          r = Object.keys(t);
      if (n.length !== r.length) return !1;

      for (r = 0; r < n.length; r++) {
        if (!Zr.call(t, n[r]) || !Gr(e[n[r]], t[n[r]])) return !1;
      }

      return !0;
    }

    var el = S && "documentMode" in document && 11 >= document.documentMode,
        tl = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
      }
    },
        nl = null,
        rl = null,
        ll = null,
        il = !1;

    function al(e, t) {
      var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return il || null == nl || nl !== gn(n) ? null : ("selectionStart" in (n = nl) && kn(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
      } : n = {
        anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      }, ll && Jr(ll, n) ? null : (ll = n, (e = tr.getPooled(tl.select, rl, e, t)).type = "select", e.target = nl, qn(e), e));
    }

    var ol = {
      eventTypes: tl,
      extractEvents: function extractEvents(e, t, n, r, l, i) {
        if (!(i = !(l = i || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
          e: {
            l = tt(l), i = T.onSelect;

            for (var a = 0; a < i.length; a++) {
              if (!l.has(i[a])) {
                l = !1;
                break e;
              }
            }

            l = !0;
          }

          i = !l;
        }

        if (i) return null;

        switch (l = t ? Vn(t) : window, e) {
          case "focus":
            (xr(l) || "true" === l.contentEditable) && (nl = l, rl = t, ll = null);
            break;

          case "blur":
            ll = rl = nl = null;
            break;

          case "mousedown":
            il = !0;
            break;

          case "contextmenu":
          case "mouseup":
          case "dragend":
            return il = !1, al(n, r);

          case "selectionchange":
            if (el) break;

          case "keydown":
          case "keyup":
            return al(n, r);
        }

        return null;
      }
    },
        ul = tr.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }),
        cl = tr.extend({
      clipboardData: function clipboardData(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }),
        sl = Ur.extend({
      relatedTarget: null
    });

    function fl(e) {
      var t = e.keyCode;
      return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }

    var dl = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
        pl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
        ml = Ur.extend({
      key: function key(e) {
        if (e.key) {
          var t = dl[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }

        return "keypress" === e.type ? 13 === (e = fl(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? pl[e.keyCode] || "Unidentified" : "";
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: Qr,
      charCode: function charCode(e) {
        return "keypress" === e.type ? fl(e) : 0;
      },
      keyCode: function keyCode(e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function which(e) {
        return "keypress" === e.type ? fl(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      }
    }),
        hl = Kr.extend({
      dataTransfer: null
    }),
        gl = Ur.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: Qr
    }),
        vl = tr.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }),
        yl = Kr.extend({
      deltaX: function deltaX(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function deltaY(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: null,
      deltaMode: null
    }),
        bl = {
      eventTypes: Ht,
      extractEvents: function extractEvents(e, t, n, r) {
        var l = jt.get(e);
        if (!l) return null;

        switch (e) {
          case "keypress":
            if (0 === fl(n)) return null;

          case "keydown":
          case "keyup":
            e = ml;
            break;

          case "blur":
          case "focus":
            e = sl;
            break;

          case "click":
            if (2 === n.button) return null;

          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            e = Kr;
            break;

          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            e = hl;
            break;

          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            e = gl;
            break;

          case Ye:
          case Xe:
          case Ge:
            e = ul;
            break;

          case Ze:
            e = vl;
            break;

          case "scroll":
            e = Ur;
            break;

          case "wheel":
            e = yl;
            break;

          case "copy":
          case "cut":
          case "paste":
            e = cl;
            break;

          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            e = $r;
            break;

          default:
            e = tr;
        }

        return qn(t = e.getPooled(l, t, n, r)), t;
      }
    };
    if (g) throw Error(r(101));
    g = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), y();
    var wl = An;
    d = Qn, p = wl, m = Vn, E({
      SimpleEventPlugin: bl,
      EnterLeaveEventPlugin: Yr,
      ChangeEventPlugin: Lr,
      SelectEventPlugin: ol,
      BeforeInputEventPlugin: wr
    });
    var kl = [],
        xl = -1;

    function Tl(e) {
      0 > xl || (e.current = kl[xl], kl[xl] = null, xl--);
    }

    function El(e, t) {
      kl[++xl] = e.current, e.current = t;
    }

    var Sl = {},
        Cl = {
      current: Sl
    },
        Pl = {
      current: !1
    },
        _l = Sl;

    function Nl(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Sl;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      var l,
          i = {};

      for (l in n) {
        i[l] = t[l];
      }

      return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
    }

    function zl(e) {
      return null != (e = e.childContextTypes);
    }

    function Ml() {
      Tl(Pl), Tl(Cl);
    }

    function Il(e, t, n) {
      if (Cl.current !== Sl) throw Error(r(168));
      El(Cl, t), El(Pl, n);
    }

    function Fl(e, n, l) {
      var i = e.stateNode;
      if (e = n.childContextTypes, "function" != typeof i.getChildContext) return l;

      for (var a in i = i.getChildContext()) {
        if (!(a in e)) throw Error(r(108, ye(n) || "Unknown", a));
      }

      return t({}, l, {}, i);
    }

    function Ol(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sl, _l = Cl.current, El(Cl, e), El(Pl, Pl.current), !0;
    }

    function Rl(e, t, n) {
      var l = e.stateNode;
      if (!l) throw Error(r(169));
      n ? (e = Fl(e, t, _l), l.__reactInternalMemoizedMergedChildContext = e, Tl(Pl), Tl(Cl), El(Cl, e)) : Tl(Pl), El(Pl, n);
    }

    var Dl = n.unstable_runWithPriority,
        Ll = n.unstable_scheduleCallback,
        Ul = n.unstable_cancelCallback,
        Al = n.unstable_requestPaint,
        Vl = n.unstable_now,
        Ql = n.unstable_getCurrentPriorityLevel,
        Wl = n.unstable_ImmediatePriority,
        Hl = n.unstable_UserBlockingPriority,
        jl = n.unstable_NormalPriority,
        Bl = n.unstable_LowPriority,
        Kl = n.unstable_IdlePriority,
        $l = {},
        ql = n.unstable_shouldYield,
        Yl = void 0 !== Al ? Al : function () {},
        Xl = null,
        Gl = null,
        Zl = !1,
        Jl = Vl(),
        ei = 1e4 > Jl ? Vl : function () {
      return Vl() - Jl;
    };

    function ti() {
      switch (Ql()) {
        case Wl:
          return 99;

        case Hl:
          return 98;

        case jl:
          return 97;

        case Bl:
          return 96;

        case Kl:
          return 95;

        default:
          throw Error(r(332));
      }
    }

    function ni(e) {
      switch (e) {
        case 99:
          return Wl;

        case 98:
          return Hl;

        case 97:
          return jl;

        case 96:
          return Bl;

        case 95:
          return Kl;

        default:
          throw Error(r(332));
      }
    }

    function ri(e, t) {
      return e = ni(e), Dl(e, t);
    }

    function li(e, t, n) {
      return e = ni(e), Ll(e, t, n);
    }

    function ii(e) {
      return null === Xl ? (Xl = [e], Gl = Ll(Wl, oi)) : Xl.push(e), $l;
    }

    function ai() {
      if (null !== Gl) {
        var e = Gl;
        Gl = null, Ul(e);
      }

      oi();
    }

    function oi() {
      if (!Zl && null !== Xl) {
        Zl = !0;
        var e = 0;

        try {
          var t = Xl;
          ri(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];

              do {
                n = n(!0);
              } while (null !== n);
            }
          }), Xl = null;
        } catch (n) {
          throw null !== Xl && (Xl = Xl.slice(e + 1)), Ll(Wl, ai), n;
        } finally {
          Zl = !1;
        }
      }
    }

    function ui(e, t, n) {
      return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n;
    }

    function ci(e, n) {
      if (e && e.defaultProps) for (var r in n = t({}, n), e = e.defaultProps) {
        void 0 === n[r] && (n[r] = e[r]);
      }
      return n;
    }

    var si = {
      current: null
    },
        fi = null,
        di = null,
        pi = null;

    function mi() {
      pi = di = fi = null;
    }

    function hi(e) {
      var t = si.current;
      Tl(si), e.type._context._currentValue = t;
    }

    function gi(e, t) {
      for (; null !== e;) {
        var n = e.alternate;
        if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }

    function vi(e, t) {
      fi = e, pi = di = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (ja = !0), e.firstContext = null);
    }

    function yi(e, t) {
      if (pi !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || (pi = e, t = 1073741823), t = {
        context: e,
        observedBits: t,
        next: null
      }, null === di) {
        if (null === fi) throw Error(r(308));
        di = t, fi.dependencies = {
          expirationTime: 0,
          firstContext: t,
          responders: null
        };
      } else di = di.next = t;
      return e._currentValue;
    }

    var bi = !1;

    function wi(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: {
          pending: null
        },
        effects: null
      };
    }

    function ki(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        baseQueue: e.baseQueue,
        shared: e.shared,
        effects: e.effects
      });
    }

    function xi(e, t) {
      return (e = {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      }).next = e;
    }

    function Ti(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }
    }

    function Ei(e, t) {
      var n = e.alternate;
      null !== n && ki(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t);
    }

    function Si(e, n, r, l) {
      var i = e.updateQueue;
      bi = !1;
      var a = i.baseQueue,
          o = i.shared.pending;

      if (null !== o) {
        if (null !== a) {
          var u = a.next;
          a.next = o.next, o.next = u;
        }

        a = o, i.shared.pending = null, null !== (u = e.alternate) && null !== (u = u.updateQueue) && (u.baseQueue = o);
      }

      if (null !== a) {
        u = a.next;
        var c = i.baseState,
            s = 0,
            f = null,
            d = null,
            p = null;
        if (null !== u) for (var m = u;;) {
          if ((o = m.expirationTime) < l) {
            var h = {
              expirationTime: m.expirationTime,
              suspenseConfig: m.suspenseConfig,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null
            };
            null === p ? (d = p = h, f = c) : p = p.next = h, o > s && (s = o);
          } else {
            null !== p && (p = p.next = {
              expirationTime: 1073741823,
              suspenseConfig: m.suspenseConfig,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null
            }), Fu(o, m.suspenseConfig);

            e: {
              var g = e,
                  v = m;

              switch (o = n, h = r, v.tag) {
                case 1:
                  if ("function" == typeof (g = v.payload)) {
                    c = g.call(h, c, o);
                    break e;
                  }

                  c = g;
                  break e;

                case 3:
                  g.effectTag = -4097 & g.effectTag | 64;

                case 0:
                  if (null == (o = "function" == typeof (g = v.payload) ? g.call(h, c, o) : g)) break e;
                  c = t({}, c, o);
                  break e;

                case 2:
                  bi = !0;
              }
            }

            null !== m.callback && (e.effectTag |= 32, null === (o = i.effects) ? i.effects = [m] : o.push(m));
          }

          if (null === (m = m.next) || m === u) {
            if (null === (o = i.shared.pending)) break;
            m = a.next = o.next, o.next = u, i.baseQueue = a = o, i.shared.pending = null;
          }
        }
        null === p ? f = c : p.next = d, i.baseState = f, i.baseQueue = p, Ou(s), e.expirationTime = s, e.memoizedState = c;
      }
    }

    function Ci(e, t, n) {
      if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
        var l = e[t],
            i = l.callback;

        if (null !== i) {
          if (l.callback = null, l = i, i = n, "function" != typeof l) throw Error(r(191, l));
          l.call(i);
        }
      }
    }

    var Pi = G.ReactCurrentBatchConfig,
        _i = new e.Component().refs;

    function Ni(e, n, r, l) {
      r = null == (r = r(l, n = e.memoizedState)) ? n : t({}, n, r), e.memoizedState = r, 0 === e.expirationTime && (e.updateQueue.baseState = r);
    }

    var zi = {
      isMounted: function isMounted(e) {
        return !!(e = e._reactInternalFiber) && nt(e) === e;
      },
      enqueueSetState: function enqueueSetState(e, t, n) {
        e = e._reactInternalFiber;
        var r = bu(),
            l = Pi.suspense;
        (l = xi(r = wu(r, e, l), l)).payload = t, null != n && (l.callback = n), Ti(e, l), ku(e, r);
      },
      enqueueReplaceState: function enqueueReplaceState(e, t, n) {
        e = e._reactInternalFiber;
        var r = bu(),
            l = Pi.suspense;
        (l = xi(r = wu(r, e, l), l)).tag = 1, l.payload = t, null != n && (l.callback = n), Ti(e, l), ku(e, r);
      },
      enqueueForceUpdate: function enqueueForceUpdate(e, t) {
        e = e._reactInternalFiber;
        var n = bu(),
            r = Pi.suspense;
        (r = xi(n = wu(n, e, r), r)).tag = 2, null != t && (r.callback = t), Ti(e, r), ku(e, n);
      }
    };

    function Mi(e, t, n, r, l, i, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || !Jr(n, r) || !Jr(l, i);
    }

    function Ii(e, t, n) {
      var r = !1,
          l = Sl,
          i = t.contextType;
      return "object" == _typeof(i) && null !== i ? i = yi(i) : (l = zl(t) ? _l : Cl.current, i = (r = null != (r = t.contextTypes)) ? Nl(e, l) : Sl), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = zi, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
    }

    function Fi(e, t, n, r) {
      e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zi.enqueueReplaceState(t, t.state, null);
    }

    function Oi(e, t, n, r) {
      var l = e.stateNode;
      l.props = n, l.state = e.memoizedState, l.refs = _i, wi(e);
      var i = t.contextType;
      "object" == _typeof(i) && null !== i ? l.context = yi(i) : (i = zl(t) ? _l : Cl.current, l.context = Nl(e, i)), Si(e, n, l, r), l.state = e.memoizedState, "function" == typeof (i = t.getDerivedStateFromProps) && (Ni(e, t, i, n), l.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (t = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), t !== l.state && zi.enqueueReplaceState(l, l.state, null), Si(e, n, l, r), l.state = e.memoizedState), "function" == typeof l.componentDidMount && (e.effectTag |= 4);
    }

    var Ri = Array.isArray;

    function Di(e, t, n) {
      if (null !== (e = n.ref) && "function" != typeof e && "object" != _typeof(e)) {
        if (n._owner) {
          if (n = n._owner) {
            if (1 !== n.tag) throw Error(r(309));
            var l = n.stateNode;
          }

          if (!l) throw Error(r(147, e));
          var i = "" + e;
          return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function t(e) {
            var t = l.refs;
            t === _i && (t = l.refs = {}), null === e ? delete t[i] : t[i] = e;
          })._stringRef = i, t);
        }

        if ("string" != typeof e) throw Error(r(284));
        if (!n._owner) throw Error(r(290, e));
      }

      return e;
    }

    function Li(e, t) {
      if ("textarea" !== e.type) throw Error(r(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
    }

    function Ui(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8;
        }
      }

      function n(n, r) {
        if (!e) return null;

        for (; null !== r;) {
          t(n, r), r = r.sibling;
        }

        return null;
      }

      function l(e, t) {
        for (e = new Map(); null !== t;) {
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
        }

        return e;
      }

      function i(e, t) {
        return (e = nc(e, t)).index = 0, e.sibling = null, e;
      }

      function a(t, n, r) {
        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n;
      }

      function o(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }

      function u(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = ic(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t);
      }

      function c(e, t, n, r) {
        return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = Di(e, t, n), r.return = e, r) : ((r = rc(n.type, n.key, n.props, null, e.mode, r)).ref = Di(e, t, n), r.return = e, r);
      }

      function s(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ac(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t);
      }

      function f(e, t, n, r, l) {
        return null === t || 7 !== t.tag ? ((t = lc(n, e.mode, r, l)).return = e, t) : ((t = i(t, n)).return = e, t);
      }

      function d(e, t, n) {
        if ("string" == typeof t || "number" == typeof t) return (t = ic("" + t, e.mode, n)).return = e, t;

        if ("object" == _typeof(t) && null !== t) {
          switch (t.$$typeof) {
            case te:
              return (n = rc(t.type, t.key, t.props, null, e.mode, n)).ref = Di(e, null, t), n.return = e, n;

            case ne:
              return (t = ac(t, e.mode, n)).return = e, t;
          }

          if (Ri(t) || ge(t)) return (t = lc(t, e.mode, n, null)).return = e, t;
          Li(e, t);
        }

        return null;
      }

      function p(e, t, n, r) {
        var l = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n) return null !== l ? null : u(e, t, "" + n, r);

        if ("object" == _typeof(n) && null !== n) {
          switch (n.$$typeof) {
            case te:
              return n.key === l ? n.type === re ? f(e, t, n.props.children, r, l) : c(e, t, n, r) : null;

            case ne:
              return n.key === l ? s(e, t, n, r) : null;
          }

          if (Ri(n) || ge(n)) return null !== l ? null : f(e, t, n, r, null);
          Li(e, n);
        }

        return null;
      }

      function m(e, t, n, r, l) {
        if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, l);

        if ("object" == _typeof(r) && null !== r) {
          switch (r.$$typeof) {
            case te:
              return e = e.get(null === r.key ? n : r.key) || null, r.type === re ? f(t, e, r.props.children, l, r.key) : c(t, e, r, l);

            case ne:
              return s(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
          }

          if (Ri(r) || ge(r)) return f(t, e = e.get(n) || null, r, l, null);
          Li(t, r);
        }

        return null;
      }

      function h(r, i, o, u) {
        for (var c = null, s = null, f = i, h = i = 0, g = null; null !== f && h < o.length; h++) {
          f.index > h ? (g = f, f = null) : g = f.sibling;
          var v = p(r, f, o[h], u);

          if (null === v) {
            null === f && (f = g);
            break;
          }

          e && f && null === v.alternate && t(r, f), i = a(v, i, h), null === s ? c = v : s.sibling = v, s = v, f = g;
        }

        if (h === o.length) return n(r, f), c;

        if (null === f) {
          for (; h < o.length; h++) {
            null !== (f = d(r, o[h], u)) && (i = a(f, i, h), null === s ? c = f : s.sibling = f, s = f);
          }

          return c;
        }

        for (f = l(r, f); h < o.length; h++) {
          null !== (g = m(f, r, h, o[h], u)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key), i = a(g, i, h), null === s ? c = g : s.sibling = g, s = g);
        }

        return e && f.forEach(function (e) {
          return t(r, e);
        }), c;
      }

      function g(i, o, u, c) {
        var s = ge(u);
        if ("function" != typeof s) throw Error(r(150));
        if (null == (u = s.call(u))) throw Error(r(151));

        for (var f = s = null, h = o, g = o = 0, v = null, y = u.next(); null !== h && !y.done; g++, y = u.next()) {
          h.index > g ? (v = h, h = null) : v = h.sibling;
          var b = p(i, h, y.value, c);

          if (null === b) {
            null === h && (h = v);
            break;
          }

          e && h && null === b.alternate && t(i, h), o = a(b, o, g), null === f ? s = b : f.sibling = b, f = b, h = v;
        }

        if (y.done) return n(i, h), s;

        if (null === h) {
          for (; !y.done; g++, y = u.next()) {
            null !== (y = d(i, y.value, c)) && (o = a(y, o, g), null === f ? s = y : f.sibling = y, f = y);
          }

          return s;
        }

        for (h = l(i, h); !y.done; g++, y = u.next()) {
          null !== (y = m(h, i, g, y.value, c)) && (e && null !== y.alternate && h.delete(null === y.key ? g : y.key), o = a(y, o, g), null === f ? s = y : f.sibling = y, f = y);
        }

        return e && h.forEach(function (e) {
          return t(i, e);
        }), s;
      }

      return function (e, l, a, u) {
        var c = "object" == _typeof(a) && null !== a && a.type === re && null === a.key;
        c && (a = a.props.children);
        var s = "object" == _typeof(a) && null !== a;
        if (s) switch (a.$$typeof) {
          case te:
            e: {
              for (s = a.key, c = l; null !== c;) {
                if (c.key === s) {
                  switch (c.tag) {
                    case 7:
                      if (a.type === re) {
                        n(e, c.sibling), (l = i(c, a.props.children)).return = e, e = l;
                        break e;
                      }

                      break;

                    default:
                      if (c.elementType === a.type) {
                        n(e, c.sibling), (l = i(c, a.props)).ref = Di(e, c, a), l.return = e, e = l;
                        break e;
                      }

                  }

                  n(e, c);
                  break;
                }

                t(e, c), c = c.sibling;
              }

              a.type === re ? ((l = lc(a.props.children, e.mode, u, a.key)).return = e, e = l) : ((u = rc(a.type, a.key, a.props, null, e.mode, u)).ref = Di(e, l, a), u.return = e, e = u);
            }

            return o(e);

          case ne:
            e: {
              for (c = a.key; null !== l;) {
                if (l.key === c) {
                  if (4 === l.tag && l.stateNode.containerInfo === a.containerInfo && l.stateNode.implementation === a.implementation) {
                    n(e, l.sibling), (l = i(l, a.children || [])).return = e, e = l;
                    break e;
                  }

                  n(e, l);
                  break;
                }

                t(e, l), l = l.sibling;
              }

              (l = ac(a, e.mode, u)).return = e, e = l;
            }

            return o(e);
        }
        if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== l && 6 === l.tag ? (n(e, l.sibling), (l = i(l, a)).return = e, e = l) : (n(e, l), (l = ic(a, e.mode, u)).return = e, e = l), o(e);
        if (Ri(a)) return h(e, l, a, u);
        if (ge(a)) return g(e, l, a, u);
        if (s && Li(e, a), void 0 === a && !c) switch (e.tag) {
          case 1:
          case 0:
            throw e = e.type, Error(r(152, e.displayName || e.name || "Component"));
        }
        return n(e, l);
      };
    }

    var Ai = Ui(!0),
        Vi = Ui(!1),
        Qi = {},
        Wi = {
      current: Qi
    },
        Hi = {
      current: Qi
    },
        ji = {
      current: Qi
    };

    function Bi(e) {
      if (e === Qi) throw Error(r(174));
      return e;
    }

    function Ki(e, t) {
      switch (El(ji, t), El(Hi, e), El(Wi, Qi), e = t.nodeType) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ve(null, "");
          break;

        default:
          t = Ve(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
      }

      Tl(Wi), El(Wi, t);
    }

    function $i() {
      Tl(Wi), Tl(Hi), Tl(ji);
    }

    function qi(e) {
      Bi(ji.current);
      var t = Bi(Wi.current),
          n = Ve(t, e.type);
      t !== n && (El(Hi, e), El(Wi, n));
    }

    function Yi(e) {
      Hi.current === e && (Tl(Wi), Tl(Hi));
    }

    var Xi = {
      current: 0
    };

    function Gi(e) {
      for (var t = e; null !== t;) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || n.data === En || n.data === Sn)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          t.child.return = t, t = t.child;
          continue;
        }

        if (t === e) break;

        for (; null === t.sibling;) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }

        t.sibling.return = t.return, t = t.sibling;
      }

      return null;
    }

    function Zi(e, t) {
      return {
        responder: e,
        props: t
      };
    }

    var Ji = G.ReactCurrentDispatcher,
        ea = G.ReactCurrentBatchConfig,
        ta = 0,
        na = null,
        ra = null,
        la = null,
        ia = !1;

    function aa() {
      throw Error(r(321));
    }

    function oa(e, t) {
      if (null === t) return !1;

      for (var n = 0; n < t.length && n < e.length; n++) {
        if (!Gr(e[n], t[n])) return !1;
      }

      return !0;
    }

    function ua(e, t, n, l, i, a) {
      if (ta = a, na = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Ji.current = null === e || null === e.memoizedState ? Ma : Ia, e = n(l, i), t.expirationTime === ta) {
        a = 0;

        do {
          if (t.expirationTime = 0, !(25 > a)) throw Error(r(301));
          a += 1, la = ra = null, t.updateQueue = null, Ji.current = Fa, e = n(l, i);
        } while (t.expirationTime === ta);
      }

      if (Ji.current = za, t = null !== ra && null !== ra.next, ta = 0, la = ra = na = null, ia = !1, t) throw Error(r(300));
      return e;
    }

    function ca() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return null === la ? na.memoizedState = la = e : la = la.next = e, la;
    }

    function sa() {
      if (null === ra) {
        var e = na.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = ra.next;

      var t = null === la ? na.memoizedState : la.next;
      if (null !== t) la = t, ra = e;else {
        if (null === e) throw Error(r(310));
        e = {
          memoizedState: (ra = e).memoizedState,
          baseState: ra.baseState,
          baseQueue: ra.baseQueue,
          queue: ra.queue,
          next: null
        }, null === la ? na.memoizedState = la = e : la = la.next = e;
      }
      return la;
    }

    function fa(e, t) {
      return "function" == typeof t ? t(e) : t;
    }

    function da(e) {
      var t = sa(),
          n = t.queue;
      if (null === n) throw Error(r(311));
      n.lastRenderedReducer = e;
      var l = ra,
          i = l.baseQueue,
          a = n.pending;

      if (null !== a) {
        if (null !== i) {
          var o = i.next;
          i.next = a.next, a.next = o;
        }

        l.baseQueue = i = a, n.pending = null;
      }

      if (null !== i) {
        i = i.next, l = l.baseState;
        var u = o = a = null,
            c = i;

        do {
          var s = c.expirationTime;

          if (s < ta) {
            var f = {
              expirationTime: c.expirationTime,
              suspenseConfig: c.suspenseConfig,
              action: c.action,
              eagerReducer: c.eagerReducer,
              eagerState: c.eagerState,
              next: null
            };
            null === u ? (o = u = f, a = l) : u = u.next = f, s > na.expirationTime && (na.expirationTime = s, Ou(s));
          } else null !== u && (u = u.next = {
            expirationTime: 1073741823,
            suspenseConfig: c.suspenseConfig,
            action: c.action,
            eagerReducer: c.eagerReducer,
            eagerState: c.eagerState,
            next: null
          }), Fu(s, c.suspenseConfig), l = c.eagerReducer === e ? c.eagerState : e(l, c.action);

          c = c.next;
        } while (null !== c && c !== i);

        null === u ? a = l : u.next = o, Gr(l, t.memoizedState) || (ja = !0), t.memoizedState = l, t.baseState = a, t.baseQueue = u, n.lastRenderedState = l;
      }

      return [t.memoizedState, n.dispatch];
    }

    function pa(e) {
      var t = sa(),
          n = t.queue;
      if (null === n) throw Error(r(311));
      n.lastRenderedReducer = e;
      var l = n.dispatch,
          i = n.pending,
          a = t.memoizedState;

      if (null !== i) {
        n.pending = null;
        var o = i = i.next;

        do {
          a = e(a, o.action), o = o.next;
        } while (o !== i);

        Gr(a, t.memoizedState) || (ja = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a;
      }

      return [a, l];
    }

    function ma(e) {
      var t = ca();
      return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: e
      }).dispatch = Na.bind(null, na, e), [t.memoizedState, e];
    }

    function ha(e, t, n, r) {
      return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
      }, null === (t = na.updateQueue) ? (t = {
        lastEffect: null
      }, na.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
    }

    function ga() {
      return sa().memoizedState;
    }

    function va(e, t, n, r) {
      var l = ca();
      na.effectTag |= e, l.memoizedState = ha(1 | t, n, void 0, void 0 === r ? null : r);
    }

    function ya(e, t, n, r) {
      var l = sa();
      r = void 0 === r ? null : r;
      var i = void 0;

      if (null !== ra) {
        var a = ra.memoizedState;
        if (i = a.destroy, null !== r && oa(r, a.deps)) return void ha(t, n, i, r);
      }

      na.effectTag |= e, l.memoizedState = ha(1 | t, n, i, r);
    }

    function ba(e, t) {
      return va(516, 4, e, t);
    }

    function wa(e, t) {
      return ya(516, 4, e, t);
    }

    function ka(e, t) {
      return ya(4, 2, e, t);
    }

    function xa(e, t) {
      return "function" == typeof t ? (e = e(), t(e), function () {
        t(null);
      }) : null != t ? (e = e(), t.current = e, function () {
        t.current = null;
      }) : void 0;
    }

    function Ta(e, t, n) {
      return n = null != n ? n.concat([e]) : null, ya(4, 2, xa.bind(null, t, e), n);
    }

    function Ea() {}

    function Sa(e, t) {
      return ca().memoizedState = [e, void 0 === t ? null : t], e;
    }

    function Ca(e, t) {
      var n = sa();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
    }

    function Pa(e, t) {
      var n = sa();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
    }

    function _a(e, t, n) {
      var r = ti();
      ri(98 > r ? 98 : r, function () {
        e(!0);
      }), ri(97 < r ? 97 : r, function () {
        var r = ea.suspense;
        ea.suspense = void 0 === t ? null : t;

        try {
          e(!1), n();
        } finally {
          ea.suspense = r;
        }
      });
    }

    function Na(e, t, n) {
      var r = bu(),
          l = Pi.suspense;
      l = {
        expirationTime: r = wu(r, e, l),
        suspenseConfig: l,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var i = t.pending;
      if (null === i ? l.next = l : (l.next = i.next, i.next = l), t.pending = l, i = e.alternate, e === na || null !== i && i === na) ia = !0, l.expirationTime = ta, na.expirationTime = ta;else {
        if (0 === e.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = t.lastRenderedReducer)) try {
          var a = t.lastRenderedState,
              o = i(a, n);
          if (l.eagerReducer = i, l.eagerState = o, Gr(o, a)) return;
        } catch (u) {}
        ku(e, r);
      }
    }

    var za = {
      readContext: yi,
      useCallback: aa,
      useContext: aa,
      useEffect: aa,
      useImperativeHandle: aa,
      useLayoutEffect: aa,
      useMemo: aa,
      useReducer: aa,
      useRef: aa,
      useState: aa,
      useDebugValue: aa,
      useResponder: aa,
      useDeferredValue: aa,
      useTransition: aa
    },
        Ma = {
      readContext: yi,
      useCallback: Sa,
      useContext: yi,
      useEffect: ba,
      useImperativeHandle: function useImperativeHandle(e, t, n) {
        return n = null != n ? n.concat([e]) : null, va(4, 2, xa.bind(null, t, e), n);
      },
      useLayoutEffect: function useLayoutEffect(e, t) {
        return va(4, 2, e, t);
      },
      useMemo: function useMemo(e, t) {
        var n = ca();
        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e;
      },
      useReducer: function useReducer(e, t, n) {
        var r = ca();
        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }).dispatch = Na.bind(null, na, e), [r.memoizedState, e];
      },
      useRef: function useRef(e) {
        return e = {
          current: e
        }, ca().memoizedState = e;
      },
      useState: ma,
      useDebugValue: Ea,
      useResponder: Zi,
      useDeferredValue: function useDeferredValue(e, t) {
        var n = ma(e),
            r = n[0],
            l = n[1];
        return ba(function () {
          var n = ea.suspense;
          ea.suspense = void 0 === t ? null : t;

          try {
            l(e);
          } finally {
            ea.suspense = n;
          }
        }, [e, t]), r;
      },
      useTransition: function useTransition(e) {
        var t = ma(!1),
            n = t[0];
        return t = t[1], [Sa(_a.bind(null, t, e), [t, e]), n];
      }
    },
        Ia = {
      readContext: yi,
      useCallback: Ca,
      useContext: yi,
      useEffect: wa,
      useImperativeHandle: Ta,
      useLayoutEffect: ka,
      useMemo: Pa,
      useReducer: da,
      useRef: ga,
      useState: function useState() {
        return da(fa);
      },
      useDebugValue: Ea,
      useResponder: Zi,
      useDeferredValue: function useDeferredValue(e, t) {
        var n = da(fa),
            r = n[0],
            l = n[1];
        return wa(function () {
          var n = ea.suspense;
          ea.suspense = void 0 === t ? null : t;

          try {
            l(e);
          } finally {
            ea.suspense = n;
          }
        }, [e, t]), r;
      },
      useTransition: function useTransition(e) {
        var t = da(fa),
            n = t[0];
        return t = t[1], [Ca(_a.bind(null, t, e), [t, e]), n];
      }
    },
        Fa = {
      readContext: yi,
      useCallback: Ca,
      useContext: yi,
      useEffect: wa,
      useImperativeHandle: Ta,
      useLayoutEffect: ka,
      useMemo: Pa,
      useReducer: pa,
      useRef: ga,
      useState: function useState() {
        return pa(fa);
      },
      useDebugValue: Ea,
      useResponder: Zi,
      useDeferredValue: function useDeferredValue(e, t) {
        var n = pa(fa),
            r = n[0],
            l = n[1];
        return wa(function () {
          var n = ea.suspense;
          ea.suspense = void 0 === t ? null : t;

          try {
            l(e);
          } finally {
            ea.suspense = n;
          }
        }, [e, t]), r;
      },
      useTransition: function useTransition(e) {
        var t = pa(fa),
            n = t[0];
        return t = t[1], [Ca(_a.bind(null, t, e), [t, e]), n];
      }
    },
        Oa = null,
        Ra = null,
        Da = !1;

    function La(e, t) {
      var n = Ju(5, null, null, 0);
      n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
    }

    function Ua(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);

        case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);

        case 13:
        default:
          return !1;
      }
    }

    function Aa(e) {
      if (Da) {
        var t = Ra;

        if (t) {
          var n = t;

          if (!Ua(e, t)) {
            if (!(t = In(n.nextSibling)) || !Ua(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Da = !1, void (Oa = e);
            La(Oa, n);
          }

          Oa = e, Ra = In(t.firstChild);
        } else e.effectTag = -1025 & e.effectTag | 2, Da = !1, Oa = e;
      }
    }

    function Va(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) {
        e = e.return;
      }

      Oa = e;
    }

    function Qa(e) {
      if (e !== Oa) return !1;
      if (!Da) return Va(e), Da = !0, !1;
      var t = e.type;
      if (5 !== e.tag || "head" !== t && "body" !== t && !Nn(t, e.memoizedProps)) for (t = Ra; t;) {
        La(e, t), t = In(t.nextSibling);
      }

      if (Va(e), 13 === e.tag) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));

        e: {
          for (e = e.nextSibling, t = 0; e;) {
            if (8 === e.nodeType) {
              var n = e.data;

              if (n === Tn) {
                if (0 === t) {
                  Ra = In(e.nextSibling);
                  break e;
                }

                t--;
              } else n !== xn && n !== Sn && n !== En || t++;
            }

            e = e.nextSibling;
          }

          Ra = null;
        }
      } else Ra = Oa ? In(e.stateNode.nextSibling) : null;

      return !0;
    }

    function Wa() {
      Ra = Oa = null, Da = !1;
    }

    var Ha = G.ReactCurrentOwner,
        ja = !1;

    function Ba(e, t, n, r) {
      t.child = null === e ? Vi(t, null, n, r) : Ai(t, e.child, n, r);
    }

    function Ka(e, t, n, r, l) {
      n = n.render;
      var i = t.ref;
      return vi(t, l), r = ua(e, t, n, r, i, l), null === e || ja ? (t.effectTag |= 1, Ba(e, t, r, l), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= l && (e.expirationTime = 0), co(e, t, l));
    }

    function $a(e, t, n, r, l, i) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a || ec(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = rc(n.type, null, r, null, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, qa(e, t, a, r, l, i));
      }

      return a = e.child, l < i && (l = a.memoizedProps, (n = null !== (n = n.compare) ? n : Jr)(l, r) && e.ref === t.ref) ? co(e, t, i) : (t.effectTag |= 1, (e = nc(a, r)).ref = t.ref, e.return = t, t.child = e);
    }

    function qa(e, t, n, r, l, i) {
      return null !== e && Jr(e.memoizedProps, r) && e.ref === t.ref && (ja = !1, l < i) ? (t.expirationTime = e.expirationTime, co(e, t, i)) : Xa(e, t, n, r, i);
    }

    function Ya(e, t) {
      var n = t.ref;
      (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128);
    }

    function Xa(e, t, n, r, l) {
      var i = zl(n) ? _l : Cl.current;
      return i = Nl(t, i), vi(t, l), n = ua(e, t, n, r, i, l), null === e || ja ? (t.effectTag |= 1, Ba(e, t, n, l), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= l && (e.expirationTime = 0), co(e, t, l));
    }

    function Ga(e, t, n, r, l) {
      if (zl(n)) {
        var i = !0;
        Ol(t);
      } else i = !1;

      if (vi(t, l), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Ii(t, n, r), Oi(t, n, r, l), r = !0;else if (null === e) {
        var a = t.stateNode,
            o = t.memoizedProps;
        a.props = o;
        var u = a.context,
            c = n.contextType;
        "object" == _typeof(c) && null !== c ? c = yi(c) : c = Nl(t, c = zl(n) ? _l : Cl.current);
        var s = n.getDerivedStateFromProps,
            f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
        f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (o !== r || u !== c) && Fi(t, a, r, c), bi = !1;
        var d = t.memoizedState;
        a.state = d, Si(t, r, a, l), u = t.memoizedState, o !== r || d !== u || Pl.current || bi ? ("function" == typeof s && (Ni(t, n, s, r), u = t.memoizedState), (o = bi || Mi(t, n, o, r, d, u, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1);
      } else a = t.stateNode, ki(e, t), o = t.memoizedProps, a.props = t.type === t.elementType ? o : ci(t.type, o), u = a.context, "object" == _typeof(c = n.contextType) && null !== c ? c = yi(c) : c = Nl(t, c = zl(n) ? _l : Cl.current), (f = "function" == typeof (s = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (o !== r || u !== c) && Fi(t, a, r, c), bi = !1, u = t.memoizedState, a.state = u, Si(t, r, a, l), d = t.memoizedState, o !== r || u !== d || Pl.current || bi ? ("function" == typeof s && (Ni(t, n, s, r), d = t.memoizedState), (s = bi || Mi(t, n, o, r, u, d, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, c), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, c)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), a.props = r, a.state = d, a.context = c, r = s) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), r = !1);
      return Za(e, t, n, r, i, l);
    }

    function Za(e, t, n, r, l, i) {
      Ya(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!r && !a) return l && Rl(t, n, !1), co(e, t, i);
      r = t.stateNode, Ha.current = t;
      var o = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
      return t.effectTag |= 1, null !== e && a ? (t.child = Ai(t, e.child, null, i), t.child = Ai(t, null, o, i)) : Ba(e, t, o, i), t.memoizedState = r.state, l && Rl(t, n, !0), t.child;
    }

    function Ja(e) {
      var t = e.stateNode;
      t.pendingContext ? Il(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Il(e, t.context, !1), Ki(e, t.containerInfo);
    }

    var eo,
        to,
        no,
        ro,
        lo = {
      dehydrated: null,
      retryTime: 0
    };

    function io(e, t, n) {
      var r,
          l = t.mode,
          i = t.pendingProps,
          a = Xi.current,
          o = !1;

      if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)), r ? (o = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1), El(Xi, 1 & a), null === e) {
        if (void 0 !== i.fallback && Aa(t), o) {
          if (o = i.fallback, (i = lc(null, l, 0, null)).return = t, 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) {
            e.return = i, e = e.sibling;
          }
          return (n = lc(o, l, n, null)).return = t, i.sibling = n, t.memoizedState = lo, t.child = i, n;
        }

        return l = i.children, t.memoizedState = null, t.child = Vi(t, null, l, n);
      }

      if (null !== e.memoizedState) {
        if (l = (e = e.child).sibling, o) {
          if (i = i.fallback, (n = nc(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (o = null !== t.memoizedState ? t.child.child : t.child) !== e.child) for (n.child = o; null !== o;) {
            o.return = n, o = o.sibling;
          }
          return (l = nc(l, i)).return = t, n.sibling = l, n.childExpirationTime = 0, t.memoizedState = lo, t.child = n, l;
        }

        return n = Ai(t, e.child, i.children, n), t.memoizedState = null, t.child = n;
      }

      if (e = e.child, o) {
        if (o = i.fallback, (i = lc(null, l, 0, null)).return = t, i.child = e, null !== e && (e.return = i), 0 == (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) {
          e.return = i, e = e.sibling;
        }
        return (n = lc(o, l, n, null)).return = t, i.sibling = n, n.effectTag |= 2, i.childExpirationTime = 0, t.memoizedState = lo, t.child = i, n;
      }

      return t.memoizedState = null, t.child = Ai(t, e, i.children, n);
    }

    function ao(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t), gi(e.return, t);
    }

    function oo(e, t, n, r, l, i) {
      var a = e.memoizedState;
      null === a ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailExpiration: 0,
        tailMode: l,
        lastEffect: i
      } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = l, a.lastEffect = i);
    }

    function uo(e, t, n) {
      var r = t.pendingProps,
          l = r.revealOrder,
          i = r.tail;
      if (Ba(e, t, r.children, n), 0 != (2 & (r = Xi.current))) r = 1 & r | 2, t.effectTag |= 64;else {
        if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
          if (13 === e.tag) null !== e.memoizedState && ao(e, n);else if (19 === e.tag) ao(e, n);else if (null !== e.child) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;

          for (; null === e.sibling;) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }

          e.sibling.return = e.return, e = e.sibling;
        }
        r &= 1;
      }
      if (El(Xi, r), 0 == (2 & t.mode)) t.memoizedState = null;else switch (l) {
        case "forwards":
          for (n = t.child, l = null; null !== n;) {
            null !== (e = n.alternate) && null === Gi(e) && (l = n), n = n.sibling;
          }

          null === (n = l) ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), oo(t, !1, l, n, i, t.lastEffect);
          break;

        case "backwards":
          for (n = null, l = t.child, t.child = null; null !== l;) {
            if (null !== (e = l.alternate) && null === Gi(e)) {
              t.child = l;
              break;
            }

            e = l.sibling, l.sibling = n, n = l, l = e;
          }

          oo(t, !0, n, null, i, t.lastEffect);
          break;

        case "together":
          oo(t, !1, null, null, void 0, t.lastEffect);
          break;

        default:
          t.memoizedState = null;
      }
      return t.child;
    }

    function co(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var l = t.expirationTime;
      if (0 !== l && Ou(l), t.childExpirationTime < n) return null;
      if (null !== e && t.child !== e.child) throw Error(r(153));

      if (null !== t.child) {
        for (n = nc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) {
          e = e.sibling, (n = n.sibling = nc(e, e.pendingProps)).return = t;
        }

        n.sibling = null;
      }

      return t.child;
    }

    function so(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;

          for (var n = null; null !== t;) {
            null !== t.alternate && (n = t), t = t.sibling;
          }

          null === n ? e.tail = null : n.sibling = null;
          break;

        case "collapsed":
          n = e.tail;

          for (var r = null; null !== n;) {
            null !== n.alternate && (r = n), n = n.sibling;
          }

          null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
    }

    function fo(e, n, l) {
      var i = n.pendingProps;

      switch (n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;

        case 1:
          return zl(n.type) && Ml(), null;

        case 3:
          return $i(), Tl(Pl), Tl(Cl), (l = n.stateNode).pendingContext && (l.context = l.pendingContext, l.pendingContext = null), null !== e && null !== e.child || !Qa(n) || (n.effectTag |= 4), to(n), null;

        case 5:
          Yi(n), l = Bi(ji.current);
          var a = n.type;
          if (null !== e && null != n.stateNode) no(e, n, a, i, l), e.ref !== n.ref && (n.effectTag |= 128);else {
            if (!i) {
              if (null === n.stateNode) throw Error(r(166));
              return null;
            }

            if (e = Bi(Wi.current), Qa(n)) {
              i = n.stateNode, a = n.type;
              var o = n.memoizedProps;

              switch (i[Rn] = n, i[Dn] = o, a) {
                case "iframe":
                case "object":
                case "embed":
                  Jt("load", i);
                  break;

                case "video":
                case "audio":
                  for (e = 0; e < Je.length; e++) {
                    Jt(Je[e], i);
                  }

                  break;

                case "source":
                  Jt("error", i);
                  break;

                case "img":
                case "image":
                case "link":
                  Jt("error", i), Jt("load", i);
                  break;

                case "form":
                  Jt("reset", i), Jt("submit", i);
                  break;

                case "details":
                  Jt("toggle", i);
                  break;

                case "input":
                  Ce(i, o), Jt("invalid", i), mn(l, "onChange");
                  break;

                case "select":
                  i._wrapperState = {
                    wasMultiple: !!o.multiple
                  }, Jt("invalid", i), mn(l, "onChange");
                  break;

                case "textarea":
                  Re(i, o), Jt("invalid", i), mn(l, "onChange");
              }

              for (var u in fn(a, o), e = null, o) {
                if (o.hasOwnProperty(u)) {
                  var c = o[u];
                  "children" === u ? "string" == typeof c ? i.textContent !== c && (e = ["children", c]) : "number" == typeof c && i.textContent !== "" + c && (e = ["children", "" + c]) : x.hasOwnProperty(u) && null != c && mn(l, u);
                }
              }

              switch (a) {
                case "input":
                  Te(i), Ne(i, o, !0);
                  break;

                case "textarea":
                  Te(i), Le(i);
                  break;

                case "select":
                case "option":
                  break;

                default:
                  "function" == typeof o.onClick && (i.onclick = hn);
              }

              l = e, n.updateQueue = l, null !== l && (n.effectTag |= 4);
            } else {
              switch (u = 9 === l.nodeType ? l : l.ownerDocument, e === pn && (e = Ae(a)), e === pn ? "script" === a ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof i.is ? e = u.createElement(a, {
                is: i.is
              }) : (e = u.createElement(a), "select" === a && (u = e, i.multiple ? u.multiple = !0 : i.size && (u.size = i.size))) : e = u.createElementNS(e, a), e[Rn] = n, e[Dn] = i, eo(e, n, !1, !1), n.stateNode = e, u = dn(a, i), a) {
                case "iframe":
                case "object":
                case "embed":
                  Jt("load", e), c = i;
                  break;

                case "video":
                case "audio":
                  for (c = 0; c < Je.length; c++) {
                    Jt(Je[c], e);
                  }

                  c = i;
                  break;

                case "source":
                  Jt("error", e), c = i;
                  break;

                case "img":
                case "image":
                case "link":
                  Jt("error", e), Jt("load", e), c = i;
                  break;

                case "form":
                  Jt("reset", e), Jt("submit", e), c = i;
                  break;

                case "details":
                  Jt("toggle", e), c = i;
                  break;

                case "input":
                  Ce(e, i), c = Se(e, i), Jt("invalid", e), mn(l, "onChange");
                  break;

                case "option":
                  c = Ie(e, i);
                  break;

                case "select":
                  e._wrapperState = {
                    wasMultiple: !!i.multiple
                  }, c = t({}, i, {
                    value: void 0
                  }), Jt("invalid", e), mn(l, "onChange");
                  break;

                case "textarea":
                  Re(e, i), c = Oe(e, i), Jt("invalid", e), mn(l, "onChange");
                  break;

                default:
                  c = i;
              }

              fn(a, c);
              var s = c;

              for (o in s) {
                if (s.hasOwnProperty(o)) {
                  var f = s[o];
                  "style" === o ? cn(e, f) : "dangerouslySetInnerHTML" === o ? null != (f = f ? f.__html : void 0) && We(e, f) : "children" === o ? "string" == typeof f ? ("textarea" !== a || "" !== f) && He(e, f) : "number" == typeof f && He(e, "" + f) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (x.hasOwnProperty(o) ? null != f && mn(l, o) : null != f && Z(e, o, f, u));
                }
              }

              switch (a) {
                case "input":
                  Te(e), Ne(e, i, !1);
                  break;

                case "textarea":
                  Te(e), Le(e);
                  break;

                case "option":
                  null != i.value && e.setAttribute("value", "" + we(i.value));
                  break;

                case "select":
                  e.multiple = !!i.multiple, null != (l = i.value) ? Fe(e, !!i.multiple, l, !1) : null != i.defaultValue && Fe(e, !!i.multiple, i.defaultValue, !0);
                  break;

                default:
                  "function" == typeof c.onClick && (e.onclick = hn);
              }

              _n(a, i) && (n.effectTag |= 4);
            }

            null !== n.ref && (n.effectTag |= 128);
          }
          return null;

        case 6:
          if (e && null != n.stateNode) ro(e, n, e.memoizedProps, i);else {
            if ("string" != typeof i && null === n.stateNode) throw Error(r(166));
            l = Bi(ji.current), Bi(Wi.current), Qa(n) ? (l = n.stateNode, i = n.memoizedProps, l[Rn] = n, l.nodeValue !== i && (n.effectTag |= 4)) : ((l = (9 === l.nodeType ? l : l.ownerDocument).createTextNode(i))[Rn] = n, n.stateNode = l);
          }
          return null;

        case 13:
          return Tl(Xi), i = n.memoizedState, 0 != (64 & n.effectTag) ? (n.expirationTime = l, n) : (l = null !== i, i = !1, null === e ? void 0 !== n.memoizedProps.fallback && Qa(n) : (i = null !== (a = e.memoizedState), l || null === a || null !== (a = e.child.sibling) && (null !== (o = n.firstEffect) ? (n.firstEffect = a, a.nextEffect = o) : (n.firstEffect = n.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), l && !i && 0 != (2 & n.mode) && (null === e && !0 !== n.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Xi.current) ? Jo === Ho && (Jo = Ko) : (Jo !== Ho && Jo !== Ko || (Jo = $o), 0 !== lu && null !== Xo && (cc(Xo, Zo), sc(Xo, lu)))), (l || i) && (n.effectTag |= 4), null);

        case 4:
          return $i(), to(n), null;

        case 10:
          return hi(n), null;

        case 17:
          return zl(n.type) && Ml(), null;

        case 19:
          if (Tl(Xi), null === (i = n.memoizedState)) return null;

          if (a = 0 != (64 & n.effectTag), null === (o = i.rendering)) {
            if (a) so(i, !1);else if (Jo !== Ho || null !== e && 0 != (64 & e.effectTag)) for (o = n.child; null !== o;) {
              if (null !== (e = Gi(o))) {
                for (n.effectTag |= 64, so(i, !1), null !== (a = e.updateQueue) && (n.updateQueue = a, n.effectTag |= 4), null === i.lastEffect && (n.firstEffect = null), n.lastEffect = i.lastEffect, i = n.child; null !== i;) {
                  o = l, (a = i).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (e = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = o, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, o = e.dependencies, a.dependencies = null === o ? null : {
                    expirationTime: o.expirationTime,
                    firstContext: o.firstContext,
                    responders: o.responders
                  }), i = i.sibling;
                }

                return El(Xi, 1 & Xi.current | 2), n.child;
              }

              o = o.sibling;
            }
          } else {
            if (!a) if (null !== (e = Gi(o))) {
              if (n.effectTag |= 64, a = !0, null !== (l = e.updateQueue) && (n.updateQueue = l, n.effectTag |= 4), so(i, !0), null === i.tail && "hidden" === i.tailMode && !o.alternate) return null !== (n = n.lastEffect = i.lastEffect) && (n.nextEffect = null), null;
            } else 2 * ei() - i.renderingStartTime > i.tailExpiration && 1 < l && (n.effectTag |= 64, a = !0, so(i, !1), n.expirationTime = n.childExpirationTime = l - 1);
            i.isBackwards ? (o.sibling = n.child, n.child = o) : (null !== (l = i.last) ? l.sibling = o : n.child = o, i.last = o);
          }

          return null !== i.tail ? (0 === i.tailExpiration && (i.tailExpiration = ei() + 500), l = i.tail, i.rendering = l, i.tail = l.sibling, i.lastEffect = n.lastEffect, i.renderingStartTime = ei(), l.sibling = null, n = Xi.current, El(Xi, a ? 1 & n | 2 : 1 & n), l) : null;
      }

      throw Error(r(156, n.tag));
    }

    function po(e) {
      switch (e.tag) {
        case 1:
          zl(e.type) && Ml();
          var t = e.effectTag;
          return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;

        case 3:
          if ($i(), Tl(Pl), Tl(Cl), 0 != (64 & (t = e.effectTag))) throw Error(r(285));
          return e.effectTag = -4097 & t | 64, e;

        case 5:
          return Yi(e), null;

        case 13:
          return Tl(Xi), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;

        case 19:
          return Tl(Xi), null;

        case 4:
          return $i(), null;

        case 10:
          return hi(e), null;

        default:
          return null;
      }
    }

    function mo(e, t) {
      return {
        value: e,
        source: t,
        stack: be(t)
      };
    }

    eo = function eo(e, t) {
      for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);else if (4 !== n.tag && null !== n.child) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t) break;

        for (; null === n.sibling;) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }

        n.sibling.return = n.return, n = n.sibling;
      }
    }, to = function to() {}, no = function no(e, n, r, l, i) {
      var a = e.memoizedProps;

      if (a !== l) {
        var o,
            u,
            c = n.stateNode;

        switch (Bi(Wi.current), e = null, r) {
          case "input":
            a = Se(c, a), l = Se(c, l), e = [];
            break;

          case "option":
            a = Ie(c, a), l = Ie(c, l), e = [];
            break;

          case "select":
            a = t({}, a, {
              value: void 0
            }), l = t({}, l, {
              value: void 0
            }), e = [];
            break;

          case "textarea":
            a = Oe(c, a), l = Oe(c, l), e = [];
            break;

          default:
            "function" != typeof a.onClick && "function" == typeof l.onClick && (c.onclick = hn);
        }

        for (o in fn(r, l), r = null, a) {
          if (!l.hasOwnProperty(o) && a.hasOwnProperty(o) && null != a[o]) if ("style" === o) for (u in c = a[o]) {
            c.hasOwnProperty(u) && (r || (r = {}), r[u] = "");
          } else "dangerouslySetInnerHTML" !== o && "children" !== o && "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (x.hasOwnProperty(o) ? e || (e = []) : (e = e || []).push(o, null));
        }

        for (o in l) {
          var s = l[o];
          if (c = null != a ? a[o] : void 0, l.hasOwnProperty(o) && s !== c && (null != s || null != c)) if ("style" === o) {
            if (c) {
              for (u in c) {
                !c.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (r || (r = {}), r[u] = "");
              }

              for (u in s) {
                s.hasOwnProperty(u) && c[u] !== s[u] && (r || (r = {}), r[u] = s[u]);
              }
            } else r || (e || (e = []), e.push(o, r)), r = s;
          } else "dangerouslySetInnerHTML" === o ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, null != s && c !== s && (e = e || []).push(o, s)) : "children" === o ? c === s || "string" != typeof s && "number" != typeof s || (e = e || []).push(o, "" + s) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && (x.hasOwnProperty(o) ? (null != s && mn(i, o), e || c === s || (e = [])) : (e = e || []).push(o, s));
        }

        r && (e = e || []).push("style", r), i = e, (n.updateQueue = i) && (n.effectTag |= 4);
      }
    }, ro = function ro(e, t, n, r) {
      n !== r && (t.effectTag |= 4);
    };
    var ho = "function" == typeof WeakSet ? WeakSet : Set;

    function go(e, t) {
      var n = t.source,
          r = t.stack;
      null === r && null !== n && (r = be(n)), null !== n && ye(n.type), t = t.value, null !== e && 1 === e.tag && ye(e.type);

      try {
        console.error(t);
      } catch (l) {
        setTimeout(function () {
          throw l;
        });
      }
    }

    function vo(e, t) {
      try {
        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
      } catch (n) {
        Ku(e, n);
      }
    }

    function yo(e) {
      var t = e.ref;
      if (null !== t) if ("function" == typeof t) try {
        t(null);
      } catch (n) {
        Ku(e, n);
      } else t.current = null;
    }

    function bo(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;

        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
                l = e.memoizedState;
            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ci(t.type, n), l), e.__reactInternalSnapshotBeforeUpdate = t;
          }

          return;

        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }

      throw Error(r(163));
    }

    function wo(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;

        do {
          if ((n.tag & e) === e) {
            var r = n.destroy;
            n.destroy = void 0, void 0 !== r && r();
          }

          n = n.next;
        } while (n !== t);
      }
    }

    function ko(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;

        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }

          n = n.next;
        } while (n !== t);
      }
    }

    function xo(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void ko(3, n);

        case 1:
          if (e = n.stateNode, 4 & n.effectTag) if (null === t) e.componentDidMount();else {
            var l = n.elementType === n.type ? t.memoizedProps : ci(n.type, t.memoizedProps);
            e.componentDidUpdate(l, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
          }
          return void (null !== (t = n.updateQueue) && Ci(n, t, e));

        case 3:
          if (null !== (t = n.updateQueue)) {
            if (e = null, null !== n.child) switch (n.child.tag) {
              case 5:
                e = n.child.stateNode;
                break;

              case 1:
                e = n.child.stateNode;
            }
            Ci(n, t, e);
          }

          return;

        case 5:
          return e = n.stateNode, void (null === t && 4 & n.effectTag && _n(n.type, n.memoizedProps) && e.focus());

        case 6:
        case 4:
        case 12:
          return;

        case 13:
          return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Wt(n)))));

        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }

      throw Error(r(163));
    }

    function To(e, t, n) {
      switch ("function" == typeof Xu && Xu(t), t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            ri(97 < n ? 97 : n, function () {
              var e = r;

              do {
                var n = e.destroy;

                if (void 0 !== n) {
                  var l = t;

                  try {
                    n();
                  } catch (i) {
                    Ku(l, i);
                  }
                }

                e = e.next;
              } while (e !== r);
            });
          }

          break;

        case 1:
          yo(t), "function" == typeof (n = t.stateNode).componentWillUnmount && vo(t, n);
          break;

        case 5:
          yo(t);
          break;

        case 4:
          No(e, t, n);
      }
    }

    function Eo(e) {
      var t = e.alternate;
      e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && Eo(t);
    }

    function So(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }

    function Co(e) {
      e: {
        for (var t = e.return; null !== t;) {
          if (So(t)) {
            var n = t;
            break e;
          }

          t = t.return;
        }

        throw Error(r(160));
      }

      switch (t = n.stateNode, n.tag) {
        case 5:
          var l = !1;
          break;

        case 3:
        case 4:
          t = t.containerInfo, l = !0;
          break;

        default:
          throw Error(r(161));
      }

      16 & n.effectTag && (He(t, ""), n.effectTag &= -17);

      e: t: for (n = e;;) {
        for (; null === n.sibling;) {
          if (null === n.return || So(n.return)) {
            n = null;
            break e;
          }

          n = n.return;
        }

        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          n.child.return = n, n = n.child;
        }

        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }

      l ? Po(e, n, t) : _o(e, n, t);
    }

    function Po(e, t, n) {
      var r = e.tag,
          l = 5 === r || 6 === r;
      if (l) e = l ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = hn));else if (4 !== r && null !== (e = e.child)) for (Po(e, t, n), e = e.sibling; null !== e;) {
        Po(e, t, n), e = e.sibling;
      }
    }

    function _o(e, t, n) {
      var r = e.tag,
          l = 5 === r || 6 === r;
      if (l) e = l ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);else if (4 !== r && null !== (e = e.child)) for (_o(e, t, n), e = e.sibling; null !== e;) {
        _o(e, t, n), e = e.sibling;
      }
    }

    function No(e, t, n) {
      for (var l, i, a = t, o = !1;;) {
        if (!o) {
          o = a.return;

          e: for (;;) {
            if (null === o) throw Error(r(160));

            switch (l = o.stateNode, o.tag) {
              case 5:
                i = !1;
                break e;

              case 3:
              case 4:
                l = l.containerInfo, i = !0;
                break e;
            }

            o = o.return;
          }

          o = !0;
        }

        if (5 === a.tag || 6 === a.tag) {
          e: for (var u = e, c = a, s = n, f = c;;) {
            if (To(u, f, s), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;else {
              if (f === c) break e;

              for (; null === f.sibling;) {
                if (null === f.return || f.return === c) break e;
                f = f.return;
              }

              f.sibling.return = f.return, f = f.sibling;
            }
          }

          i ? (u = l, c = a.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : l.removeChild(a.stateNode);
        } else if (4 === a.tag) {
          if (null !== a.child) {
            l = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
            continue;
          }
        } else if (To(e, a, n), null !== a.child) {
          a.child.return = a, a = a.child;
          continue;
        }

        if (a === t) break;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === t) return;
          4 === (a = a.return).tag && (o = !1);
        }

        a.sibling.return = a.return, a = a.sibling;
      }
    }

    function zo(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void wo(3, t);

        case 1:
          return;

        case 5:
          var n = t.stateNode;

          if (null != n) {
            var l = t.memoizedProps,
                i = null !== e ? e.memoizedProps : l;
            e = t.type;
            var a = t.updateQueue;

            if (t.updateQueue = null, null !== a) {
              for (n[Dn] = l, "input" === e && "radio" === l.type && null != l.name && Pe(n, l), dn(e, i), t = dn(e, l), i = 0; i < a.length; i += 2) {
                var o = a[i],
                    u = a[i + 1];
                "style" === o ? cn(n, u) : "dangerouslySetInnerHTML" === o ? We(n, u) : "children" === o ? He(n, u) : Z(n, o, u, t);
              }

              switch (e) {
                case "input":
                  _e(n, l);

                  break;

                case "textarea":
                  De(n, l);
                  break;

                case "select":
                  t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!l.multiple, null != (e = l.value) ? Fe(n, !!l.multiple, e, !1) : t !== !!l.multiple && (null != l.defaultValue ? Fe(n, !!l.multiple, l.defaultValue, !0) : Fe(n, !!l.multiple, l.multiple ? [] : "", !1));
              }
            }
          }

          return;

        case 6:
          if (null === t.stateNode) throw Error(r(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);

        case 3:
          return void ((t = t.stateNode).hydrate && (t.hydrate = !1, Wt(t.containerInfo)));

        case 12:
          return;

        case 13:
          if (n = t, null === t.memoizedState ? l = !1 : (l = !0, n = t.child, au = ei()), null !== n) e: for (e = n;;) {
            if (5 === e.tag) a = e.stateNode, l ? "function" == typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = un("display", i));else if (6 === e.tag) e.stateNode.nodeValue = l ? "" : e.memoizedProps;else {
              if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                (a = e.child.sibling).return = e, e = a;
                continue;
              }

              if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue;
              }
            }
            if (e === n) break;

            for (; null === e.sibling;) {
              if (null === e.return || e.return === n) break e;
              e = e.return;
            }

            e.sibling.return = e.return, e = e.sibling;
          }
          return void Mo(t);

        case 19:
          return void Mo(t);

        case 17:
          return;
      }

      throw Error(r(163));
    }

    function Mo(e) {
      var t = e.updateQueue;

      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new ho()), t.forEach(function (t) {
          var r = qu.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
      }
    }

    var Io = "function" == typeof WeakMap ? WeakMap : Map;

    function Fo(e, t, n) {
      (n = xi(n, null)).tag = 3, n.payload = {
        element: null
      };
      var r = t.value;
      return n.callback = function () {
        cu || (cu = !0, su = r), go(e, t);
      }, n;
    }

    function Oo(e, t, n) {
      (n = xi(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;

      if ("function" == typeof r) {
        var l = t.value;

        n.payload = function () {
          return go(e, t), r(l);
        };
      }

      var i = e.stateNode;
      return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function () {
        "function" != typeof r && (null === fu ? fu = new Set([this]) : fu.add(this), go(e, t));
        var n = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== n ? n : ""
        });
      }), n;
    }

    var Ro,
        Do = Math.ceil,
        Lo = G.ReactCurrentDispatcher,
        Uo = G.ReactCurrentOwner,
        Ao = 0,
        Vo = 8,
        Qo = 16,
        Wo = 32,
        Ho = 0,
        jo = 1,
        Bo = 2,
        Ko = 3,
        $o = 4,
        qo = 5,
        Yo = Ao,
        Xo = null,
        Go = null,
        Zo = 0,
        Jo = Ho,
        eu = null,
        tu = 1073741823,
        nu = 1073741823,
        ru = null,
        lu = 0,
        iu = !1,
        au = 0,
        ou = 500,
        uu = null,
        cu = !1,
        su = null,
        fu = null,
        du = !1,
        pu = null,
        mu = 90,
        hu = null,
        gu = 0,
        vu = null,
        yu = 0;

    function bu() {
      return (Yo & (Qo | Wo)) !== Ao ? 1073741821 - (ei() / 10 | 0) : 0 !== yu ? yu : yu = 1073741821 - (ei() / 10 | 0);
    }

    function wu(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var l = ti();
      if (0 == (4 & t)) return 99 === l ? 1073741823 : 1073741822;
      if ((Yo & Qo) !== Ao) return Zo;
      if (null !== n) e = ui(e, 0 | n.timeoutMs || 5e3, 250);else switch (l) {
        case 99:
          e = 1073741823;
          break;

        case 98:
          e = ui(e, 150, 100);
          break;

        case 97:
        case 96:
          e = ui(e, 5e3, 250);
          break;

        case 95:
          e = 2;
          break;

        default:
          throw Error(r(326));
      }
      return null !== Xo && e === Zo && --e, e;
    }

    function ku(e, t) {
      if (50 < gu) throw gu = 0, vu = null, Error(r(185));

      if (null !== (e = xu(e, t))) {
        var n = ti();
        1073741823 === t ? (Yo & Vo) !== Ao && (Yo & (Qo | Wo)) === Ao ? Cu(e) : (Eu(e), Yo === Ao && ai()) : Eu(e), (4 & Yo) === Ao || 98 !== n && 99 !== n || (null === hu ? hu = new Map([[e, t]]) : (void 0 === (n = hu.get(e)) || n > t) && hu.set(e, t));
      }
    }

    function xu(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
          l = null;
      if (null === r && 3 === e.tag) l = e.stateNode;else for (; null !== r;) {
        if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
          l = r.stateNode;
          break;
        }

        r = r.return;
      }
      return null !== l && (Xo === l && (Ou(t), Jo === $o && cc(l, Zo)), sc(l, t)), l;
    }

    function Tu(e) {
      var t = e.lastExpiredTime;
      if (0 !== t) return t;
      if (!uc(e, t = e.firstPendingTime)) return t;
      var n = e.lastPingedTime;
      return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
    }

    function Eu(e) {
      if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = ii(Cu.bind(null, e));else {
        var t = Tu(e),
            n = e.callbackNode;
        if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);else {
          var r = bu();

          if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
            var l = e.callbackPriority;
            if (e.callbackExpirationTime === t && l >= r) return;
            n !== $l && Ul(n);
          }

          e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? ii(Cu.bind(null, e)) : li(r, Su.bind(null, e), {
            timeout: 10 * (1073741821 - t) - ei()
          }), e.callbackNode = t;
        }
      }
    }

    function Su(e, t) {
      if (yu = 0, t) return fc(e, t = bu()), Eu(e), null;
      var n = Tu(e);

      if (0 !== n) {
        if (t = e.callbackNode, (Yo & (Qo | Wo)) !== Ao) throw Error(r(327));

        if (Hu(), e === Xo && n === Zo || zu(e, n), null !== Go) {
          var l = Yo;
          Yo |= Qo;

          for (var i = Iu();;) {
            try {
              Du();
              break;
            } catch (u) {
              Mu(e, u);
            }
          }

          if (mi(), Yo = l, Lo.current = i, Jo === jo) throw t = eu, zu(e, n), cc(e, n), Eu(e), t;
          if (null === Go) switch (i = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, l = Jo, Xo = null, l) {
            case Ho:
            case jo:
              throw Error(r(345));

            case Bo:
              fc(e, 2 < n ? 2 : n);
              break;

            case Ko:
              if (cc(e, n), n === (l = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Au(i)), 1073741823 === tu && 10 < (i = au + ou - ei())) {
                if (iu) {
                  var a = e.lastPingedTime;

                  if (0 === a || a >= n) {
                    e.lastPingedTime = n, zu(e, n);
                    break;
                  }
                }

                if (0 !== (a = Tu(e)) && a !== n) break;

                if (0 !== l && l !== n) {
                  e.lastPingedTime = l;
                  break;
                }

                e.timeoutHandle = zn(Vu.bind(null, e), i);
                break;
              }

              Vu(e);
              break;

            case $o:
              if (cc(e, n), n === (l = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Au(i)), iu && (0 === (i = e.lastPingedTime) || i >= n)) {
                e.lastPingedTime = n, zu(e, n);
                break;
              }

              if (0 !== (i = Tu(e)) && i !== n) break;

              if (0 !== l && l !== n) {
                e.lastPingedTime = l;
                break;
              }

              if (1073741823 !== nu ? l = 10 * (1073741821 - nu) - ei() : 1073741823 === tu ? l = 0 : (l = 10 * (1073741821 - tu) - 5e3, 0 > (l = (i = ei()) - l) && (l = 0), (n = 10 * (1073741821 - n) - i) < (l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Do(l / 1960)) - l) && (l = n)), 10 < l) {
                e.timeoutHandle = zn(Vu.bind(null, e), l);
                break;
              }

              Vu(e);
              break;

            case qo:
              if (1073741823 !== tu && null !== ru) {
                a = tu;
                var o = ru;

                if (0 >= (l = 0 | o.busyMinDurationMs) ? l = 0 : (i = 0 | o.busyDelayMs, l = (a = ei() - (10 * (1073741821 - a) - (0 | o.timeoutMs || 5e3))) <= i ? 0 : i + l - a), 10 < l) {
                  cc(e, n), e.timeoutHandle = zn(Vu.bind(null, e), l);
                  break;
                }
              }

              Vu(e);
              break;

            default:
              throw Error(r(329));
          }
          if (Eu(e), e.callbackNode === t) return Su.bind(null, e);
        }
      }

      return null;
    }

    function Cu(e) {
      var t = e.lastExpiredTime;
      if (t = 0 !== t ? t : 1073741823, (Yo & (Qo | Wo)) !== Ao) throw Error(r(327));

      if (Hu(), e === Xo && t === Zo || zu(e, t), null !== Go) {
        var n = Yo;
        Yo |= Qo;

        for (var l = Iu();;) {
          try {
            Ru();
            break;
          } catch (i) {
            Mu(e, i);
          }
        }

        if (mi(), Yo = n, Lo.current = l, Jo === jo) throw n = eu, zu(e, t), cc(e, t), Eu(e), n;
        if (null !== Go) throw Error(r(261));
        e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Xo = null, Vu(e), Eu(e);
      }

      return null;
    }

    function Pu() {
      if (null !== hu) {
        var e = hu;
        hu = null, e.forEach(function (e, t) {
          fc(t, e), Eu(t);
        }), ai();
      }
    }

    function _u(e, t) {
      var n = Yo;
      Yo |= 1;

      try {
        return e(t);
      } finally {
        (Yo = n) === Ao && ai();
      }
    }

    function Nu(e, t) {
      var n = Yo;
      Yo &= -2, Yo |= Vo;

      try {
        return e(t);
      } finally {
        (Yo = n) === Ao && ai();
      }
    }

    function zu(e, t) {
      e.finishedWork = null, e.finishedExpirationTime = 0;
      var n = e.timeoutHandle;
      if (-1 !== n && (e.timeoutHandle = -1, Mn(n)), null !== Go) for (n = Go.return; null !== n;) {
        var r = n;

        switch (r.tag) {
          case 1:
            null != (r = r.type.childContextTypes) && Ml();
            break;

          case 3:
            $i(), Tl(Pl), Tl(Cl);
            break;

          case 5:
            Yi(r);
            break;

          case 4:
            $i();
            break;

          case 13:
          case 19:
            Tl(Xi);
            break;

          case 10:
            hi(r);
        }

        n = n.return;
      }
      Xo = e, Go = nc(e.current, null), Zo = t, Jo = Ho, eu = null, nu = tu = 1073741823, ru = null, lu = 0, iu = !1;
    }

    function Mu(e, t) {
      for (;;) {
        try {
          if (mi(), Ji.current = za, ia) for (var n = na.memoizedState; null !== n;) {
            var r = n.queue;
            null !== r && (r.pending = null), n = n.next;
          }
          if (ta = 0, la = ra = na = null, ia = !1, null === Go || null === Go.return) return Jo = jo, eu = t, Go = null;

          e: {
            var l = e,
                i = Go.return,
                a = Go,
                o = t;

            if (t = Zo, a.effectTag |= 2048, a.firstEffect = a.lastEffect = null, null !== o && "object" == _typeof(o) && "function" == typeof o.then) {
              var u = o;

              if (0 == (2 & a.mode)) {
                var c = a.alternate;
                c ? (a.updateQueue = c.updateQueue, a.memoizedState = c.memoizedState, a.expirationTime = c.expirationTime) : (a.updateQueue = null, a.memoizedState = null);
              }

              var s = 0 != (1 & Xi.current),
                  f = i;

              do {
                var d;

                if (d = 13 === f.tag) {
                  var p = f.memoizedState;
                  if (null !== p) d = null !== p.dehydrated;else {
                    var m = f.memoizedProps;
                    d = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !s);
                  }
                }

                if (d) {
                  var h = f.updateQueue;

                  if (null === h) {
                    var g = new Set();
                    g.add(u), f.updateQueue = g;
                  } else h.add(u);

                  if (0 == (2 & f.mode)) {
                    if (f.effectTag |= 64, a.effectTag &= -2981, 1 === a.tag) if (null === a.alternate) a.tag = 17;else {
                      var v = xi(1073741823, null);
                      v.tag = 2, Ti(a, v);
                    }
                    a.expirationTime = 1073741823;
                    break e;
                  }

                  o = void 0, a = t;
                  var y = l.pingCache;

                  if (null === y ? (y = l.pingCache = new Io(), o = new Set(), y.set(u, o)) : void 0 === (o = y.get(u)) && (o = new Set(), y.set(u, o)), !o.has(a)) {
                    o.add(a);
                    var b = $u.bind(null, l, u, a);
                    u.then(b, b);
                  }

                  f.effectTag |= 4096, f.expirationTime = t;
                  break e;
                }

                f = f.return;
              } while (null !== f);

              o = Error((ye(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + be(a));
            }

            Jo !== qo && (Jo = Bo), o = mo(o, a), f = i;

            do {
              switch (f.tag) {
                case 3:
                  u = o, f.effectTag |= 4096, f.expirationTime = t, Ei(f, Fo(f, u, t));
                  break e;

                case 1:
                  u = o;
                  var w = f.type,
                      k = f.stateNode;

                  if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== k && "function" == typeof k.componentDidCatch && (null === fu || !fu.has(k)))) {
                    f.effectTag |= 4096, f.expirationTime = t, Ei(f, Oo(f, u, t));
                    break e;
                  }

              }

              f = f.return;
            } while (null !== f);
          }

          Go = Uu(Go);
        } catch (x) {
          t = x;
          continue;
        }

        break;
      }
    }

    function Iu() {
      var e = Lo.current;
      return Lo.current = za, null === e ? za : e;
    }

    function Fu(e, t) {
      e < tu && 2 < e && (tu = e), null !== t && e < nu && 2 < e && (nu = e, ru = t);
    }

    function Ou(e) {
      e > lu && (lu = e);
    }

    function Ru() {
      for (; null !== Go;) {
        Go = Lu(Go);
      }
    }

    function Du() {
      for (; null !== Go && !ql();) {
        Go = Lu(Go);
      }
    }

    function Lu(e) {
      var t = Ro(e.alternate, e, Zo);
      return e.memoizedProps = e.pendingProps, null === t && (t = Uu(e)), Uo.current = null, t;
    }

    function Uu(e) {
      Go = e;

      do {
        var t = Go.alternate;

        if (e = Go.return, 0 == (2048 & Go.effectTag)) {
          if (t = fo(t, Go, Zo), 1 === Zo || 1 !== Go.childExpirationTime) {
            for (var n = 0, r = Go.child; null !== r;) {
              var l = r.expirationTime,
                  i = r.childExpirationTime;
              l > n && (n = l), i > n && (n = i), r = r.sibling;
            }

            Go.childExpirationTime = n;
          }

          if (null !== t) return t;
          null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Go.firstEffect), null !== Go.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Go.firstEffect), e.lastEffect = Go.lastEffect), 1 < Go.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Go : e.firstEffect = Go, e.lastEffect = Go));
        } else {
          if (null !== (t = po(Go))) return t.effectTag &= 2047, t;
          null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048);
        }

        if (null !== (t = Go.sibling)) return t;
        Go = e;
      } while (null !== Go);

      return Jo === Ho && (Jo = qo), null;
    }

    function Au(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }

    function Vu(e) {
      var t = ti();
      return ri(99, Qu.bind(null, e, t)), null;
    }

    function Qu(e, t) {
      do {
        Hu();
      } while (null !== pu);

      if ((Yo & (Qo | Wo)) !== Ao) throw Error(r(327));
      var n = e.finishedWork,
          l = e.finishedExpirationTime;
      if (null === n) return null;
      if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(r(177));
      e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
      var i = Au(n);

      if (e.firstPendingTime = i, l <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : l <= e.firstSuspendedTime && (e.firstSuspendedTime = l - 1), l <= e.lastPingedTime && (e.lastPingedTime = 0), l <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Xo && (Go = Xo = null, Zo = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
        var a = Yo;
        Yo |= Wo, Uo.current = null, Cn = Zt;
        var o = wn();

        if (kn(o)) {
          if ("selectionStart" in o) var u = {
            start: o.selectionStart,
            end: o.selectionEnd
          };else e: {
            var c = (u = (u = o.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();

            if (c && 0 !== c.rangeCount) {
              u = c.anchorNode;
              var s = c.anchorOffset,
                  f = c.focusNode;
              c = c.focusOffset;

              try {
                u.nodeType, f.nodeType;
              } catch (C) {
                u = null;
                break e;
              }

              var d = 0,
                  p = -1,
                  m = -1,
                  h = 0,
                  g = 0,
                  v = o,
                  y = null;

              t: for (;;) {
                for (var b; v !== u || 0 !== s && 3 !== v.nodeType || (p = d + s), v !== f || 0 !== c && 3 !== v.nodeType || (m = d + c), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);) {
                  y = v, v = b;
                }

                for (;;) {
                  if (v === o) break t;
                  if (y === u && ++h === s && (p = d), y === f && ++g === c && (m = d), null !== (b = v.nextSibling)) break;
                  y = (v = y).parentNode;
                }

                v = b;
              }

              u = -1 === p || -1 === m ? null : {
                start: p,
                end: m
              };
            } else u = null;
          }
          u = u || {
            start: 0,
            end: 0
          };
        } else u = null;

        Pn = {
          activeElementDetached: null,
          focusedElem: o,
          selectionRange: u
        }, Zt = !1, uu = i;

        do {
          try {
            Wu();
          } catch (C) {
            if (null === uu) throw Error(r(330));
            Ku(uu, C), uu = uu.nextEffect;
          }
        } while (null !== uu);

        uu = i;

        do {
          try {
            for (o = e, u = t; null !== uu;) {
              var w = uu.effectTag;

              if (16 & w && He(uu.stateNode, ""), 128 & w) {
                var k = uu.alternate;

                if (null !== k) {
                  var x = k.ref;
                  null !== x && ("function" == typeof x ? x(null) : x.current = null);
                }
              }

              switch (1038 & w) {
                case 2:
                  Co(uu), uu.effectTag &= -3;
                  break;

                case 6:
                  Co(uu), uu.effectTag &= -3, zo(uu.alternate, uu);
                  break;

                case 1024:
                  uu.effectTag &= -1025;
                  break;

                case 1028:
                  uu.effectTag &= -1025, zo(uu.alternate, uu);
                  break;

                case 4:
                  zo(uu.alternate, uu);
                  break;

                case 8:
                  No(o, s = uu, u), Eo(s);
              }

              uu = uu.nextEffect;
            }
          } catch (C) {
            if (null === uu) throw Error(r(330));
            Ku(uu, C), uu = uu.nextEffect;
          }
        } while (null !== uu);

        if (x = Pn, k = wn(), w = x.focusedElem, u = x.selectionRange, k !== w && w && w.ownerDocument && bn(w.ownerDocument.documentElement, w)) {
          null !== u && kn(w) && (k = u.start, void 0 === (x = u.end) && (x = k), "selectionStart" in w ? (w.selectionStart = k, w.selectionEnd = Math.min(x, w.value.length)) : (x = (k = w.ownerDocument || document) && k.defaultView || window).getSelection && (x = x.getSelection(), s = w.textContent.length, o = Math.min(u.start, s), u = void 0 === u.end ? o : Math.min(u.end, s), !x.extend && o > u && (s = u, u = o, o = s), s = yn(w, o), f = yn(w, u), s && f && (1 !== x.rangeCount || x.anchorNode !== s.node || x.anchorOffset !== s.offset || x.focusNode !== f.node || x.focusOffset !== f.offset) && ((k = k.createRange()).setStart(s.node, s.offset), x.removeAllRanges(), o > u ? (x.addRange(k), x.extend(f.node, f.offset)) : (k.setEnd(f.node, f.offset), x.addRange(k))))), k = [];

          for (x = w; x = x.parentNode;) {
            1 === x.nodeType && k.push({
              element: x,
              left: x.scrollLeft,
              top: x.scrollTop
            });
          }

          for ("function" == typeof w.focus && w.focus(), w = 0; w < k.length; w++) {
            (x = k[w]).element.scrollLeft = x.left, x.element.scrollTop = x.top;
          }
        }

        Zt = !!Cn, Pn = Cn = null, e.current = n, uu = i;

        do {
          try {
            for (w = e; null !== uu;) {
              var T = uu.effectTag;

              if (36 & T && xo(w, uu.alternate, uu), 128 & T) {
                k = void 0;
                var E = uu.ref;

                if (null !== E) {
                  var S = uu.stateNode;

                  switch (uu.tag) {
                    case 5:
                      k = S;
                      break;

                    default:
                      k = S;
                  }

                  "function" == typeof E ? E(k) : E.current = k;
                }
              }

              uu = uu.nextEffect;
            }
          } catch (C) {
            if (null === uu) throw Error(r(330));
            Ku(uu, C), uu = uu.nextEffect;
          }
        } while (null !== uu);

        uu = null, Yl(), Yo = a;
      } else e.current = n;

      if (du) du = !1, pu = e, mu = t;else for (uu = i; null !== uu;) {
        t = uu.nextEffect, uu.nextEffect = null, uu = t;
      }
      if (0 === (t = e.firstPendingTime) && (fu = null), 1073741823 === t ? e === vu ? gu++ : (gu = 0, vu = e) : gu = 0, "function" == typeof Yu && Yu(n.stateNode, l), Eu(e), cu) throw cu = !1, e = su, su = null, e;
      return (Yo & Vo) !== Ao ? null : (ai(), null);
    }

    function Wu() {
      for (; null !== uu;) {
        var e = uu.effectTag;
        0 != (256 & e) && bo(uu.alternate, uu), 0 == (512 & e) || du || (du = !0, li(97, function () {
          return Hu(), null;
        })), uu = uu.nextEffect;
      }
    }

    function Hu() {
      if (90 !== mu) {
        var e = 97 < mu ? 97 : mu;
        return mu = 90, ri(e, ju);
      }
    }

    function ju() {
      if (null === pu) return !1;
      var e = pu;
      if (pu = null, (Yo & (Qo | Wo)) !== Ao) throw Error(r(331));
      var t = Yo;

      for (Yo |= Wo, e = e.current.firstEffect; null !== e;) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag)) switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              wo(5, n), ko(5, n);
          }
        } catch (l) {
          if (null === e) throw Error(r(330));
          Ku(e, l);
        }

        n = e.nextEffect, e.nextEffect = null, e = n;
      }

      return Yo = t, ai(), !0;
    }

    function Bu(e, t, n) {
      Ti(e, t = Fo(e, t = mo(n, t), 1073741823)), null !== (e = xu(e, 1073741823)) && Eu(e);
    }

    function Ku(e, t) {
      if (3 === e.tag) Bu(e, e, t);else for (var n = e.return; null !== n;) {
        if (3 === n.tag) {
          Bu(n, e, t);
          break;
        }

        if (1 === n.tag) {
          var r = n.stateNode;

          if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === fu || !fu.has(r))) {
            Ti(n, e = Oo(n, e = mo(t, e), 1073741823)), null !== (n = xu(n, 1073741823)) && Eu(n);
            break;
          }
        }

        n = n.return;
      }
    }

    function $u(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t), Xo === e && Zo === n ? Jo === $o || Jo === Ko && 1073741823 === tu && ei() - au < ou ? zu(e, Zo) : iu = !0 : uc(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Eu(e)));
    }

    function qu(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t), 0 === (t = 0) && (t = wu(t = bu(), e, null)), null !== (e = xu(e, t)) && Eu(e);
    }

    Ro = function Ro(e, t, n) {
      var l = t.expirationTime;

      if (null !== e) {
        var i = t.pendingProps;
        if (e.memoizedProps !== i || Pl.current) ja = !0;else {
          if (l < n) {
            switch (ja = !1, t.tag) {
              case 3:
                Ja(t), Wa();
                break;

              case 5:
                if (qi(t), 4 & t.mode && 1 !== n && i.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                break;

              case 1:
                zl(t.type) && Ol(t);
                break;

              case 4:
                Ki(t, t.stateNode.containerInfo);
                break;

              case 10:
                l = t.memoizedProps.value, i = t.type._context, El(si, i._currentValue), i._currentValue = l;
                break;

              case 13:
                if (null !== t.memoizedState) return 0 !== (l = t.child.childExpirationTime) && l >= n ? io(e, t, n) : (El(Xi, 1 & Xi.current), null !== (t = co(e, t, n)) ? t.sibling : null);
                El(Xi, 1 & Xi.current);
                break;

              case 19:
                if (l = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                  if (l) return uo(e, t, n);
                  t.effectTag |= 64;
                }

                if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null), El(Xi, Xi.current), !l) return null;
            }

            return co(e, t, n);
          }

          ja = !1;
        }
      } else ja = !1;

      switch (t.expirationTime = 0, t.tag) {
        case 2:
          if (l = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, i = Nl(t, Cl.current), vi(t, n), i = ua(null, t, l, e, i, n), t.effectTag |= 1, "object" == _typeof(i) && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
            if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, zl(l)) {
              var a = !0;
              Ol(t);
            } else a = !1;

            t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, wi(t);
            var o = l.getDerivedStateFromProps;
            "function" == typeof o && Ni(t, l, o, e), i.updater = zi, t.stateNode = i, i._reactInternalFiber = t, Oi(t, l, e, n), t = Za(null, t, l, !0, a, n);
          } else t.tag = 0, Ba(null, t, i, n), t = t.child;

          return t;

        case 16:
          e: {
            if (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, ve(i), 1 !== i._status) throw i._result;

            switch (i = i._result, t.type = i, a = t.tag = tc(i), e = ci(i, e), a) {
              case 0:
                t = Xa(null, t, i, e, n);
                break e;

              case 1:
                t = Ga(null, t, i, e, n);
                break e;

              case 11:
                t = Ka(null, t, i, e, n);
                break e;

              case 14:
                t = $a(null, t, i, ci(i.type, e), l, n);
                break e;
            }

            throw Error(r(306, i, ""));
          }

          return t;

        case 0:
          return l = t.type, i = t.pendingProps, Xa(e, t, l, i = t.elementType === l ? i : ci(l, i), n);

        case 1:
          return l = t.type, i = t.pendingProps, Ga(e, t, l, i = t.elementType === l ? i : ci(l, i), n);

        case 3:
          if (Ja(t), l = t.updateQueue, null === e || null === l) throw Error(r(282));
          if (l = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, ki(e, t), Si(t, l, null, n), (l = t.memoizedState.element) === i) Wa(), t = co(e, t, n);else {
            if ((i = t.stateNode.hydrate) && (Ra = In(t.stateNode.containerInfo.firstChild), Oa = t, i = Da = !0), i) for (n = Vi(t, null, l, n), t.child = n; n;) {
              n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
            } else Ba(e, t, l, n), Wa();
            t = t.child;
          }
          return t;

        case 5:
          return qi(t), null === e && Aa(t), l = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, o = i.children, Nn(l, i) ? o = null : null !== a && Nn(l, a) && (t.effectTag |= 16), Ya(e, t), 4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Ba(e, t, o, n), t = t.child), t;

        case 6:
          return null === e && Aa(t), null;

        case 13:
          return io(e, t, n);

        case 4:
          return Ki(t, t.stateNode.containerInfo), l = t.pendingProps, null === e ? t.child = Ai(t, null, l, n) : Ba(e, t, l, n), t.child;

        case 11:
          return l = t.type, i = t.pendingProps, Ka(e, t, l, i = t.elementType === l ? i : ci(l, i), n);

        case 7:
          return Ba(e, t, t.pendingProps, n), t.child;

        case 8:
        case 12:
          return Ba(e, t, t.pendingProps.children, n), t.child;

        case 10:
          e: {
            l = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value;
            var u = t.type._context;
            if (El(si, u._currentValue), u._currentValue = a, null !== o) if (u = o.value, 0 === (a = Gr(u, a) ? 0 : 0 | ("function" == typeof l._calculateChangedBits ? l._calculateChangedBits(u, a) : 1073741823))) {
              if (o.children === i.children && !Pl.current) {
                t = co(e, t, n);
                break e;
              }
            } else for (null !== (u = t.child) && (u.return = t); null !== u;) {
              var c = u.dependencies;

              if (null !== c) {
                o = u.child;

                for (var s = c.firstContext; null !== s;) {
                  if (s.context === l && 0 != (s.observedBits & a)) {
                    1 === u.tag && ((s = xi(n, null)).tag = 2, Ti(u, s)), u.expirationTime < n && (u.expirationTime = n), null !== (s = u.alternate) && s.expirationTime < n && (s.expirationTime = n), gi(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                    break;
                  }

                  s = s.next;
                }
              } else o = 10 === u.tag && u.type === t.type ? null : u.child;

              if (null !== o) o.return = u;else for (o = u; null !== o;) {
                if (o === t) {
                  o = null;
                  break;
                }

                if (null !== (u = o.sibling)) {
                  u.return = o.return, o = u;
                  break;
                }

                o = o.return;
              }
              u = o;
            }
            Ba(e, t, i.children, n), t = t.child;
          }

          return t;

        case 9:
          return i = t.type, l = (a = t.pendingProps).children, vi(t, n), l = l(i = yi(i, a.unstable_observedBits)), t.effectTag |= 1, Ba(e, t, l, n), t.child;

        case 14:
          return a = ci(i = t.type, t.pendingProps), $a(e, t, i, a = ci(i.type, a), l, n);

        case 15:
          return qa(e, t, t.type, t.pendingProps, l, n);

        case 17:
          return l = t.type, i = t.pendingProps, i = t.elementType === l ? i : ci(l, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, zl(l) ? (e = !0, Ol(t)) : e = !1, vi(t, n), Ii(t, l, i), Oi(t, l, i, n), Za(null, t, l, !0, e, n);

        case 19:
          return uo(e, t, n);
      }

      throw Error(r(156, t.tag));
    };

    var Yu = null,
        Xu = null;

    function Gu(e) {
      if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled || !t.supportsFiber) return !0;

      try {
        var n = t.inject(e);
        Yu = function Yu(e) {
          try {
            t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag));
          } catch (r) {}
        }, Xu = function Xu(e) {
          try {
            t.onCommitFiberUnmount(n, e);
          } catch (r) {}
        };
      } catch (r) {}

      return !0;
    }

    function Zu(e, t, n, r) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
    }

    function Ju(e, t, n, r) {
      return new Zu(e, t, n, r);
    }

    function ec(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }

    function tc(e) {
      if ("function" == typeof e) return ec(e) ? 1 : 0;

      if (null != e) {
        if ((e = e.$$typeof) === ce) return 11;
        if (e === de) return 14;
      }

      return 2;
    }

    function nc(e, t) {
      var n = e.alternate;
      return null === n ? ((n = Ju(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        expirationTime: t.expirationTime,
        firstContext: t.firstContext,
        responders: t.responders
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }

    function rc(e, t, n, l, i, a) {
      var o = 2;
      if (l = e, "function" == typeof e) ec(e) && (o = 1);else if ("string" == typeof e) o = 5;else e: switch (e) {
        case re:
          return lc(n.children, i, a, t);

        case ue:
          o = 8, i |= 7;
          break;

        case le:
          o = 8, i |= 1;
          break;

        case ie:
          return (e = Ju(12, n, t, 8 | i)).elementType = ie, e.type = ie, e.expirationTime = a, e;

        case se:
          return (e = Ju(13, n, t, i)).type = se, e.elementType = se, e.expirationTime = a, e;

        case fe:
          return (e = Ju(19, n, t, i)).elementType = fe, e.expirationTime = a, e;

        default:
          if ("object" == _typeof(e) && null !== e) switch (e.$$typeof) {
            case ae:
              o = 10;
              break e;

            case oe:
              o = 9;
              break e;

            case ce:
              o = 11;
              break e;

            case de:
              o = 14;
              break e;

            case pe:
              o = 16, l = null;
              break e;

            case me:
              o = 22;
              break e;
          }
          throw Error(r(130, null == e ? e : _typeof(e), ""));
      }
      return (t = Ju(o, n, t, i)).elementType = e, t.type = l, t.expirationTime = a, t;
    }

    function lc(e, t, n, r) {
      return (e = Ju(7, e, r, t)).expirationTime = n, e;
    }

    function ic(e, t, n) {
      return (e = Ju(6, e, null, t)).expirationTime = n, e;
    }

    function ac(e, t, n) {
      return (t = Ju(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }

    function oc(e, t, n) {
      this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
    }

    function uc(e, t) {
      var n = e.firstSuspendedTime;
      return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t;
    }

    function cc(e, t) {
      var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }

    function sc(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }

    function fc(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }

    function dc(e, t, n, l) {
      var i = t.current,
          a = bu(),
          o = Pi.suspense;
      a = wu(a, i, o);

      e: if (n) {
        t: {
          if (nt(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(r(170));
          var u = n;

          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break t;

              case 1:
                if (zl(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }

            }

            u = u.return;
          } while (null !== u);

          throw Error(r(171));
        }

        if (1 === n.tag) {
          var c = n.type;

          if (zl(c)) {
            n = Fl(n, c, u);
            break e;
          }
        }

        n = u;
      } else n = Sl;

      return null === t.context ? t.context = n : t.pendingContext = n, (t = xi(a, o)).payload = {
        element: e
      }, null !== (l = void 0 === l ? null : l) && (t.callback = l), Ti(i, t), ku(i, a), a;
    }

    function pc(e) {
      if (!(e = e.current).child) return null;

      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }

    function mc(e, t) {
      null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
    }

    function hc(e, t) {
      mc(e, t), (e = e.alternate) && mc(e, t);
    }

    function gc(e, t, n) {
      var r = new oc(e, t, n = null != n && !0 === n.hydrate),
          l = Ju(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      r.current = l, l.stateNode = r, wi(l), e[Ln] = r.current, n && 0 !== t && It(e, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r;
    }

    function vc(e) {
      return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
    }

    function yc(e, t) {
      if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) {
        e.removeChild(n);
      }
      return new gc(e, 0, t ? {
        hydrate: !0
      } : void 0);
    }

    function bc(e, t, n, r, l) {
      var i = n._reactRootContainer;

      if (i) {
        var a = i._internalRoot;

        if ("function" == typeof l) {
          var o = l;

          l = function l() {
            var e = pc(a);
            o.call(e);
          };
        }

        dc(t, a, e, l);
      } else {
        if (i = n._reactRootContainer = yc(n, r), a = i._internalRoot, "function" == typeof l) {
          var u = l;

          l = function l() {
            var e = pc(a);
            u.call(e);
          };
        }

        Nu(function () {
          dc(t, a, e, l);
        });
      }

      return pc(a);
    }

    function wc(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: ne,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }

    function kc(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!vc(t)) throw Error(r(200));
      return wc(e, t, null, n);
    }

    gc.prototype.render = function (e) {
      dc(e, this._internalRoot, null, null);
    }, gc.prototype.unmount = function () {
      var e = this._internalRoot,
          t = e.containerInfo;
      dc(null, e, null, function () {
        t[Ln] = null;
      });
    }, bt = function bt(e) {
      if (13 === e.tag) {
        var t = ui(bu(), 150, 100);
        ku(e, t), hc(e, t);
      }
    }, wt = function wt(e) {
      13 === e.tag && (ku(e, 3), hc(e, 3));
    }, kt = function kt(e) {
      if (13 === e.tag) {
        var t = bu();
        ku(e, t = wu(t, e, null)), hc(e, t);
      }
    }, C = function C(e, t, n) {
      switch (t) {
        case "input":
          if (_e(e, n), t = n.name, "radio" === n.type && null != t) {
            for (n = e; n.parentNode;) {
              n = n.parentNode;
            }

            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var l = n[t];

              if (l !== e && l.form === e.form) {
                var i = Qn(l);
                if (!i) throw Error(r(90));
                Ee(l), _e(l, i);
              }
            }
          }

          break;

        case "textarea":
          De(e, n);
          break;

        case "select":
          null != (t = n.value) && Fe(e, !!n.multiple, t, !1);
      }
    }, I = _u, F = function F(e, t, n, r, l) {
      var i = Yo;
      Yo |= 4;

      try {
        return ri(98, e.bind(null, t, n, r, l));
      } finally {
        (Yo = i) === Ao && ai();
      }
    }, O = function O() {
      (Yo & (1 | Qo | Wo)) === Ao && (Pu(), Hu());
    }, R = function R(e, t) {
      var n = Yo;
      Yo |= 2;

      try {
        return e(t);
      } finally {
        (Yo = n) === Ao && ai();
      }
    };
    var xc = {
      Events: [An, Vn, Qn, E, k, qn, function (e) {
        ut(e, $n);
      }, z, M, rn, ft, Hu, {
        current: !1
      }]
    };
    !function (e) {
      var n = e.findFiberByHostInstance;
      Gu(t({}, e, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: G.ReactCurrentDispatcher,
        findHostInstanceByFiber: function findHostInstanceByFiber(e) {
          return null === (e = at(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance: function findFiberByHostInstance(e) {
          return n ? n(e) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      }));
    }({
      findFiberByHostInstance: Un,
      bundleType: 0,
      version: "16.13.1",
      rendererPackageName: "react-dom"
    }), exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc, exports.createPortal = kc, exports.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternalFiber;

      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(r(188));
        throw Error(r(268, Object.keys(e)));
      }

      return e = null === (e = at(t)) ? null : e.stateNode;
    }, exports.flushSync = function (e, t) {
      if ((Yo & (Qo | Wo)) !== Ao) throw Error(r(187));
      var n = Yo;
      Yo |= 1;

      try {
        return ri(99, e.bind(null, t));
      } finally {
        Yo = n, ai();
      }
    }, exports.hydrate = function (e, t, n) {
      if (!vc(t)) throw Error(r(200));
      return bc(null, e, t, !0, n);
    }, exports.render = function (e, t, n) {
      if (!vc(t)) throw Error(r(200));
      return bc(null, e, t, !1, n);
    }, exports.unmountComponentAtNode = function (e) {
      if (!vc(e)) throw Error(r(40));
      return !!e._reactRootContainer && (Nu(function () {
        bc(null, null, e, !1, function () {
          e._reactRootContainer = null, e[Ln] = null;
        });
      }), !0);
    }, exports.unstable_batchedUpdates = _u, exports.unstable_createPortal = function (e, t) {
      return kc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
    }, exports.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!vc(n)) throw Error(r(200));
      if (null == e || void 0 === e._reactInternalFiber) throw Error(r(38));
      return bc(e, t, n, !1, l);
    }, exports.version = "16.13.1";
  }, {
    "react": "HdMw",
    "object-assign": "YOwE",
    "scheduler": "IGIl"
  }],
  "X9zx": [function (require, module, exports) {
    "use strict";

    function _() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
        0;

        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
        } catch (O) {
          console.error(O);
        }
      }
    }

    _(), module.exports = require("./cjs/react-dom.production.min.js");
  }, {
    "./cjs/react-dom.production.min.js": "jF7N"
  }],
  "ZBnv": [function (require, module, exports) {
    function n(n, o) {
      if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function");
    }

    module.exports = n;
  }, {}],
  "NoOd": [function (require, module, exports) {
    function e(e, r) {
      for (var n = 0; n < r.length; n++) {
        var t = r[n];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
      }
    }

    function r(r, n, t) {
      return n && e(r.prototype, n), t && e(r, t), r;
    }

    module.exports = r;
  }, {}],
  "Jibl": [function (require, module, exports) {
    function t(o, e) {
      return module.exports = t = Object.setPrototypeOf || function (t, o) {
        return t.__proto__ = o, t;
      }, t(o, e);
    }

    module.exports = t;
  }, {}],
  "qngw": [function (require, module, exports) {
    var e = require("./setPrototypeOf");

    function r(r, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: r,
          writable: !0,
          configurable: !0
        }
      }), t && e(r, t);
    }

    module.exports = r;
  }, {
    "./setPrototypeOf": "Jibl"
  }],
  "LNzP": [function (require, module, exports) {
    function o(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? module.exports = o = function o(_o2) {
        return _typeof(_o2);
      } : module.exports = o = function o(_o3) {
        return _o3 && "function" == typeof Symbol && _o3.constructor === Symbol && _o3 !== Symbol.prototype ? "symbol" : _typeof(_o3);
      }, o(t);
    }

    module.exports = o;
  }, {}],
  "VmQe": [function (require, module, exports) {
    function e(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    module.exports = e;
  }, {}],
  "GFCP": [function (require, module, exports) {
    var e = require("../helpers/typeof"),
        r = require("./assertThisInitialized");

    function t(t, i) {
      return !i || "object" !== e(i) && "function" != typeof i ? r(t) : i;
    }

    module.exports = t;
  }, {
    "../helpers/typeof": "LNzP",
    "./assertThisInitialized": "VmQe"
  }],
  "WQgz": [function (require, module, exports) {
    function t(e) {
      return module.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, t(e);
    }

    module.exports = t;
  }, {}],
  "FRly": [function (require, module, exports) {
    "use strict";

    exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;

    for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) {
      r[o] = n[o], t[n.charCodeAt(o)] = o;
    }

    function h(r) {
      var t = r.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var e = r.indexOf("=");
      return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4];
    }

    function u(r) {
      var t = h(r),
          e = t[0],
          n = t[1];
      return 3 * (e + n) / 4 - n;
    }

    function c(r, t, e) {
      return 3 * (t + e) / 4 - e;
    }

    function i(r) {
      var n,
          o,
          a = h(r),
          u = a[0],
          i = a[1],
          f = new e(c(r, u, i)),
          A = 0,
          d = i > 0 ? u - 4 : u;

      for (o = 0; o < d; o += 4) {
        n = t[r.charCodeAt(o)] << 18 | t[r.charCodeAt(o + 1)] << 12 | t[r.charCodeAt(o + 2)] << 6 | t[r.charCodeAt(o + 3)], f[A++] = n >> 16 & 255, f[A++] = n >> 8 & 255, f[A++] = 255 & n;
      }

      return 2 === i && (n = t[r.charCodeAt(o)] << 2 | t[r.charCodeAt(o + 1)] >> 4, f[A++] = 255 & n), 1 === i && (n = t[r.charCodeAt(o)] << 10 | t[r.charCodeAt(o + 1)] << 4 | t[r.charCodeAt(o + 2)] >> 2, f[A++] = n >> 8 & 255, f[A++] = 255 & n), f;
    }

    function f(t) {
      return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
    }

    function A(r, t, e) {
      for (var n, o = [], a = t; a < e; a += 3) {
        n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n));
      }

      return o.join("");
    }

    function d(t) {
      for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383) {
        a.push(A(t, h, h + 16383 > u ? u : h + 16383));
      }

      return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("");
    }

    t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
  }, {}],
  "Quj6": [function (require, module, exports) {
    exports.read = function (a, o, t, r, h) {
      var M,
          p,
          w = 8 * h - r - 1,
          f = (1 << w) - 1,
          e = f >> 1,
          i = -7,
          N = t ? h - 1 : 0,
          n = t ? -1 : 1,
          s = a[o + N];

      for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8) {
        ;
      }

      for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8) {
        ;
      }

      if (0 === M) M = 1 - e;else {
        if (M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
        p += Math.pow(2, r), M -= e;
      }
      return (s ? -1 : 1) * p * Math.pow(2, M - r);
    }, exports.write = function (a, o, t, r, h, M) {
      var p,
          w,
          f,
          e = 8 * M - h - 1,
          i = (1 << e) - 1,
          N = i >> 1,
          n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          s = r ? 0 : M - 1,
          u = r ? 1 : -1,
          l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;

      for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8) {
        ;
      }

      for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8) {
        ;
      }

      a[t + s - u] |= 128 * l;
    };
  }, {}],
  "aqZJ": [function (require, module, exports) {
    var r = {}.toString;

    module.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, {}],
  "z1tx": [function (require, module, exports) {
    var global = arguments[3];

    var t = arguments[3],
        r = require("base64-js"),
        e = require("ieee754"),
        n = require("isarray");

    function i() {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (r) {
        return !1;
      }
    }

    function o() {
      return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function u(t, r) {
      if (o() < r) throw new RangeError("Invalid typed array length");
      return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r), t;
    }

    function f(t, r, e) {
      if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, r, e);

      if ("number" == typeof t) {
        if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");
        return c(this, t);
      }

      return s(this, t, r, e);
    }

    function s(t, r, e, n) {
      if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r);
    }

    function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function a(t, r, e, n) {
      return h(r), r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r);
    }

    function c(t, r) {
      if (h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT) for (var e = 0; e < r; ++e) {
        t[e] = 0;
      }
      return t;
    }

    function l(t, r, e) {
      if ("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
      var n = 0 | v(r, e),
          i = (t = u(t, n)).write(r, e);
      return i !== n && (t = t.slice(0, i)), t;
    }

    function p(t, r) {
      var e = r.length < 0 ? 0 : 0 | w(r.length);
      t = u(t, e);

      for (var n = 0; n < e; n += 1) {
        t[n] = 255 & r[n];
      }

      return t;
    }

    function g(t, r, e, n) {
      if (r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
      if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
      return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r), t;
    }

    function y(t, r) {
      if (f.isBuffer(r)) {
        var e = 0 | w(r.length);
        return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t);
      }

      if (r) {
        if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
        if ("Buffer" === r.type && n(r.data)) return p(t, r.data);
      }

      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }

    function w(t) {
      if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
      return 0 | t;
    }

    function d(t) {
      return +t != t && (t = 0), f.alloc(+t);
    }

    function v(t, r) {
      if (f.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var e = t.length;
      if (0 === e) return 0;

      for (var n = !1;;) {
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return e;

          case "utf8":
          case "utf-8":
          case void 0:
            return $(t).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * e;

          case "hex":
            return e >>> 1;

          case "base64":
            return K(t).length;

          default:
            if (n) return $(t).length;
            r = ("" + r).toLowerCase(), n = !0;
        }
      }
    }

    function E(t, r, e) {
      var n = !1;
      if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
      if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
      if ((e >>>= 0) <= (r >>>= 0)) return "";

      for (t || (t = "utf8");;) {
        switch (t) {
          case "hex":
            return x(this, r, e);

          case "utf8":
          case "utf-8":
            return Y(this, r, e);

          case "ascii":
            return L(this, r, e);

          case "latin1":
          case "binary":
            return D(this, r, e);

          case "base64":
            return S(this, r, e);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return C(this, r, e);

          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0;
        }
      }
    }

    function b(t, r, e) {
      var n = t[r];
      t[r] = t[e], t[e] = n;
    }

    function R(t, r, e, n, i) {
      if (0 === t.length) return -1;

      if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
        if (i) return -1;
        e = t.length - 1;
      } else if (e < 0) {
        if (!i) return -1;
        e = 0;
      }

      if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)) return 0 === r.length ? -1 : _(t, r, e, n, i);
      if ("number" == typeof r) return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }

    function _(t, r, e, n, i) {
      var o,
          u = 1,
          f = t.length,
          s = r.length;

      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || r.length < 2) return -1;
        u = 2, f /= 2, s /= 2, e /= 2;
      }

      function h(t, r) {
        return 1 === u ? t[r] : t.readUInt16BE(r * u);
      }

      if (i) {
        var a = -1;

        for (o = e; o < f; o++) {
          if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
            if (-1 === a && (a = o), o - a + 1 === s) return a * u;
          } else -1 !== a && (o -= o - a), a = -1;
        }
      } else for (e + s > f && (e = f - s), o = e; o >= 0; o--) {
        for (var c = !0, l = 0; l < s; l++) {
          if (h(t, o + l) !== h(r, l)) {
            c = !1;
            break;
          }
        }

        if (c) return o;
      }

      return -1;
    }

    function A(t, r, e, n) {
      e = Number(e) || 0;
      var i = t.length - e;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = r.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      n > o / 2 && (n = o / 2);

      for (var u = 0; u < n; ++u) {
        var f = parseInt(r.substr(2 * u, 2), 16);
        if (isNaN(f)) return u;
        t[e + u] = f;
      }

      return u;
    }

    function m(t, r, e, n) {
      return Q($(r, t.length - e), t, e, n);
    }

    function P(t, r, e, n) {
      return Q(G(r), t, e, n);
    }

    function T(t, r, e, n) {
      return P(t, r, e, n);
    }

    function B(t, r, e, n) {
      return Q(K(r), t, e, n);
    }

    function U(t, r, e, n) {
      return Q(H(r, t.length - e), t, e, n);
    }

    function S(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
    }

    function Y(t, r, e) {
      e = Math.min(t.length, e);

      for (var n = [], i = r; i < e;) {
        var o,
            u,
            f,
            s,
            h = t[i],
            a = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
        if (i + c <= e) switch (c) {
          case 1:
            h < 128 && (a = h);
            break;

          case 2:
            128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
            break;

          case 3:
            o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s);
            break;

          case 4:
            o = t[i + 1], u = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s);
        }
        null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += c;
      }

      return O(n);
    }

    exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), exports.kMaxLength = o(), f.poolSize = 8192, f._augment = function (t) {
      return t.__proto__ = f.prototype, t;
    }, f.from = function (t, r, e) {
      return s(null, t, r, e);
    }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
      value: null,
      configurable: !0
    })), f.alloc = function (t, r, e) {
      return a(null, t, r, e);
    }, f.allocUnsafe = function (t) {
      return c(null, t);
    }, f.allocUnsafeSlow = function (t) {
      return c(null, t);
    }, f.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, f.compare = function (t, r) {
      if (!f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
      if (t === r) return 0;

      for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i) {
        if (t[i] !== r[i]) {
          e = t[i], n = r[i];
          break;
        }
      }

      return e < n ? -1 : n < e ? 1 : 0;
    }, f.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, f.concat = function (t, r) {
      if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return f.alloc(0);
      var e;
      if (void 0 === r) for (r = 0, e = 0; e < t.length; ++e) {
        r += t[e].length;
      }
      var i = f.allocUnsafe(r),
          o = 0;

      for (e = 0; e < t.length; ++e) {
        var u = t[e];
        if (!f.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
        u.copy(i, o), o += u.length;
      }

      return i;
    }, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var r = 0; r < t; r += 2) {
        b(this, r, r + 1);
      }

      return this;
    }, f.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var r = 0; r < t; r += 4) {
        b(this, r, r + 3), b(this, r + 1, r + 2);
      }

      return this;
    }, f.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var r = 0; r < t; r += 8) {
        b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
      }

      return this;
    }, f.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments);
    }, f.prototype.equals = function (t) {
      if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === f.compare(this, t);
    }, f.prototype.inspect = function () {
      var t = "",
          r = exports.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
    }, f.prototype.compare = function (t, r, e, n, i) {
      if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
      if (n >= i && r >= e) return 0;
      if (n >= i) return -1;
      if (r >= e) return 1;
      if (this === t) return 0;

      for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c) {
        if (h[c] !== a[c]) {
          o = h[c], u = a[c];
          break;
        }
      }

      return o < u ? -1 : u < o ? 1 : 0;
    }, f.prototype.includes = function (t, r, e) {
      return -1 !== this.indexOf(t, r, e);
    }, f.prototype.indexOf = function (t, r, e) {
      return R(this, t, r, e, !0);
    }, f.prototype.lastIndexOf = function (t, r, e) {
      return R(this, t, r, e, !1);
    }, f.prototype.write = function (t, r, e, n) {
      if (void 0 === r) n = "utf8", e = this.length, r = 0;else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;else {
        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0);
      }
      var i = this.length - r;
      if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");

      for (var o = !1;;) {
        switch (n) {
          case "hex":
            return A(this, t, r, e);

          case "utf8":
          case "utf-8":
            return m(this, t, r, e);

          case "ascii":
            return P(this, t, r, e);

          case "latin1":
          case "binary":
            return T(this, t, r, e);

          case "base64":
            return B(this, t, r, e);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U(this, t, r, e);

          default:
            if (o) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), o = !0;
        }
      }
    }, f.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var I = 4096;

    function O(t) {
      var r = t.length;
      if (r <= I) return String.fromCharCode.apply(String, t);

      for (var e = "", n = 0; n < r;) {
        e += String.fromCharCode.apply(String, t.slice(n, n += I));
      }

      return e;
    }

    function L(t, r, e) {
      var n = "";
      e = Math.min(t.length, e);

      for (var i = r; i < e; ++i) {
        n += String.fromCharCode(127 & t[i]);
      }

      return n;
    }

    function D(t, r, e) {
      var n = "";
      e = Math.min(t.length, e);

      for (var i = r; i < e; ++i) {
        n += String.fromCharCode(t[i]);
      }

      return n;
    }

    function x(t, r, e) {
      var n = t.length;
      (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);

      for (var i = "", o = r; o < e; ++o) {
        i += Z(t[o]);
      }

      return i;
    }

    function C(t, r, e) {
      for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) {
        i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      }

      return i;
    }

    function M(t, r, e) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
    }

    function k(t, r, e, n, i, o) {
      if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
      if (e + n > t.length) throw new RangeError("Index out of range");
    }

    function N(t, r, e, n) {
      r < 0 && (r = 65535 + r + 1);

      for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) {
        t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
      }
    }

    function z(t, r, e, n) {
      r < 0 && (r = 4294967295 + r + 1);

      for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) {
        t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255;
      }
    }

    function F(t, r, e, n, i, o) {
      if (e + n > t.length) throw new RangeError("Index out of range");
      if (e < 0) throw new RangeError("Index out of range");
    }

    function j(t, r, n, i, o) {
      return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), e.write(t, r, n, i, 23, 4), n + 4;
    }

    function q(t, r, n, i, o) {
      return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), e.write(t, r, n, i, 52, 8), n + 8;
    }

    f.prototype.slice = function (t, r) {
      var e,
          n = this.length;
      if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT) (e = this.subarray(t, r)).__proto__ = f.prototype;else {
        var i = r - t;
        e = new f(i, void 0);

        for (var o = 0; o < i; ++o) {
          e[o] = this[o + t];
        }
      }
      return e;
    }, f.prototype.readUIntLE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) {
        n += this[t + o] * i;
      }

      return n;
    }, f.prototype.readUIntBE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) {
        n += this[t + --r] * i;
      }

      return n;
    }, f.prototype.readUInt8 = function (t, r) {
      return r || M(t, 1, this.length), this[t];
    }, f.prototype.readUInt16LE = function (t, r) {
      return r || M(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, f.prototype.readUInt16BE = function (t, r) {
      return r || M(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, f.prototype.readUInt32LE = function (t, r) {
      return r || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, f.prototype.readUInt32BE = function (t, r) {
      return r || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, f.prototype.readIntLE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) {
        n += this[t + o] * i;
      }

      return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
    }, f.prototype.readIntBE = function (t, r, e) {
      t |= 0, r |= 0, e || M(t, r, this.length);

      for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) {
        o += this[t + --n] * i;
      }

      return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
    }, f.prototype.readInt8 = function (t, r) {
      return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, f.prototype.readInt16LE = function (t, r) {
      r || M(t, 2, this.length);
      var e = this[t] | this[t + 1] << 8;
      return 32768 & e ? 4294901760 | e : e;
    }, f.prototype.readInt16BE = function (t, r) {
      r || M(t, 2, this.length);
      var e = this[t + 1] | this[t] << 8;
      return 32768 & e ? 4294901760 | e : e;
    }, f.prototype.readInt32LE = function (t, r) {
      return r || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, f.prototype.readInt32BE = function (t, r) {
      return r || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, f.prototype.readFloatLE = function (t, r) {
      return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4);
    }, f.prototype.readFloatBE = function (t, r) {
      return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4);
    }, f.prototype.readDoubleLE = function (t, r) {
      return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8);
    }, f.prototype.readDoubleBE = function (t, r) {
      return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8);
    }, f.prototype.writeUIntLE = function (t, r, e, n) {
      (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
      var i = 1,
          o = 0;

      for (this[r] = 255 & t; ++o < e && (i *= 256);) {
        this[r + o] = t / i & 255;
      }

      return r + e;
    }, f.prototype.writeUIntBE = function (t, r, e, n) {
      (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
      var i = e - 1,
          o = 1;

      for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);) {
        this[r + i] = t / o & 255;
      }

      return r + e;
    }, f.prototype.writeUInt8 = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1;
    }, f.prototype.writeUInt16LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2;
    }, f.prototype.writeUInt16BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2;
    }, f.prototype.writeUInt32LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0), r + 4;
    }, f.prototype.writeUInt32BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4;
    }, f.prototype.writeIntLE = function (t, r, e, n) {
      if (t = +t, r |= 0, !n) {
        var i = Math.pow(2, 8 * e - 1);
        k(this, t, r, e, i - 1, -i);
      }

      var o = 0,
          u = 1,
          f = 0;

      for (this[r] = 255 & t; ++o < e && (u *= 256);) {
        t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
      }

      return r + e;
    }, f.prototype.writeIntBE = function (t, r, e, n) {
      if (t = +t, r |= 0, !n) {
        var i = Math.pow(2, 8 * e - 1);
        k(this, t, r, e, i - 1, -i);
      }

      var o = e - 1,
          u = 1,
          f = 0;

      for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) {
        t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
      }

      return r + e;
    }, f.prototype.writeInt8 = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1;
    }, f.prototype.writeInt16LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2;
    }, f.prototype.writeInt16BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2;
    }, f.prototype.writeInt32LE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0), r + 4;
    }, f.prototype.writeInt32BE = function (t, r, e) {
      return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4;
    }, f.prototype.writeFloatLE = function (t, r, e) {
      return j(this, t, r, !0, e);
    }, f.prototype.writeFloatBE = function (t, r, e) {
      return j(this, t, r, !1, e);
    }, f.prototype.writeDoubleLE = function (t, r, e) {
      return q(this, t, r, !0, e);
    }, f.prototype.writeDoubleBE = function (t, r, e) {
      return q(this, t, r, !1, e);
    }, f.prototype.copy = function (t, r, e, n) {
      if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (r < 0) throw new RangeError("targetStart out of bounds");
      if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
      var i,
          o = n - e;
      if (this === t && e < r && r < n) for (i = o - 1; i >= 0; --i) {
        t[i + r] = this[i + e];
      } else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
        t[i + r] = this[i + e];
      } else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
      return o;
    }, f.prototype.fill = function (t, r, e, n) {
      if ("string" == typeof t) {
        if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) {
          var i = t.charCodeAt(0);
          i < 256 && (t = i);
        }

        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
      } else "number" == typeof t && (t &= 255);

      if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
      if (e <= r) return this;
      var o;
      if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t) for (o = r; o < e; ++o) {
        this[o] = t;
      } else {
        var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
            s = u.length;

        for (o = 0; o < e - r; ++o) {
          this[o + r] = u[o % s];
        }
      }
      return this;
    };
    var V = /[^+\/0-9A-Za-z-_]/g;

    function X(t) {
      if ((t = J(t).replace(V, "")).length < 2) return "";

      for (; t.length % 4 != 0;) {
        t += "=";
      }

      return t;
    }

    function J(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }

    function Z(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function $(t, r) {
      var e;
      r = r || 1 / 0;

      for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
        if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
          if (!i) {
            if (e > 56319) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            if (u + 1 === n) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            i = e;
            continue;
          }

          if (e < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), i = e;
            continue;
          }

          e = 65536 + (i - 55296 << 10 | e - 56320);
        } else i && (r -= 3) > -1 && o.push(239, 191, 189);

        if (i = null, e < 128) {
          if ((r -= 1) < 0) break;
          o.push(e);
        } else if (e < 2048) {
          if ((r -= 2) < 0) break;
          o.push(e >> 6 | 192, 63 & e | 128);
        } else if (e < 65536) {
          if ((r -= 3) < 0) break;
          o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
        } else {
          if (!(e < 1114112)) throw new Error("Invalid code point");
          if ((r -= 4) < 0) break;
          o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
        }
      }

      return o;
    }

    function G(t) {
      for (var r = [], e = 0; e < t.length; ++e) {
        r.push(255 & t.charCodeAt(e));
      }

      return r;
    }

    function H(t, r) {
      for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u) {
        n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
      }

      return o;
    }

    function K(t) {
      return r.toByteArray(X(t));
    }

    function Q(t, r, e, n) {
      for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) {
        r[i + e] = t[i];
      }

      return i;
    }

    function W(t) {
      return t != t;
    }
  }, {
    "base64-js": "FRly",
    "ieee754": "Quj6",
    "isarray": "aqZJ",
    "buffer": "z1tx"
  }],
  "g5IB": [function (require, module, exports) {
    var t,
        e,
        n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined");
    }

    function o() {
      throw new Error("clearTimeout has not been defined");
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);

      try {
        return t(e, 0);
      } catch (n) {
        try {
          return t.call(null, e, 0);
        } catch (n) {
          return t.call(this, e, 0);
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);

      try {
        return e(t);
      } catch (n) {
        try {
          return e.call(null, t);
        } catch (n) {
          return e.call(this, t);
        }
      }
    }

    !function () {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r;
      } catch (n) {
        t = r;
      }

      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (n) {
        e = o;
      }
    }();
    var c,
        s = [],
        l = !1,
        a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;

        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) {
            c && c[a].run();
          }

          a = -1, e = s.length;
        }

        c = null, l = !1, u(t);
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e;
    }

    function p() {}

    n.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      s.push(new m(t, e)), 1 !== s.length || l || i(h);
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function (t) {
      return [];
    }, n.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, n.cwd = function () {
      return "/";
    }, n.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, n.umask = function () {
      return 0;
    };
  }, {}],
  "IVbQ": [function (require, module, exports) {
    var process = require("process");

    var e,
        r = require("process"),
        t = require("buffer"),
        n = t.Buffer,
        o = {};

    for (e in t) {
      t.hasOwnProperty(e) && "SlowBuffer" !== e && "Buffer" !== e && (o[e] = t[e]);
    }

    var f = o.Buffer = {};

    for (e in n) {
      n.hasOwnProperty(e) && "allocUnsafe" !== e && "allocUnsafeSlow" !== e && (f[e] = n[e]);
    }

    if (o.Buffer.prototype = n.prototype, f.from && f.from !== Uint8Array.from || (f.from = function (e, r, t) {
      if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + _typeof(e));
      if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      return n(e, r, t);
    }), f.alloc || (f.alloc = function (e, r, t) {
      if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + _typeof(e));
      if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var o = n(e);
      return r && 0 !== r.length ? "string" == typeof t ? o.fill(r, t) : o.fill(r) : o.fill(0), o;
    }), !o.kStringMaxLength) try {
      o.kStringMaxLength = r.binding("buffer").kStringMaxLength;
    } catch (i) {}
    o.constants || (o.constants = {
      MAX_LENGTH: o.kMaxLength
    }, o.kStringMaxLength && (o.constants.MAX_STRING_LENGTH = o.kStringMaxLength)), module.exports = o;
  }, {
    "buffer": "z1tx",
    "process": "g5IB"
  }],
  "eain": [function (require, module, exports) {
    "use strict";

    var t = "\uFEFF";

    function e(t, e) {
      this.encoder = t, this.addBOM = !0;
    }

    function i(t, e) {
      this.decoder = t, this.pass = !1, this.options = e || {};
    }

    exports.PrependBOM = e, e.prototype.write = function (e) {
      return this.addBOM && (e = t + e, this.addBOM = !1), this.encoder.write(e);
    }, e.prototype.end = function () {
      return this.encoder.end();
    }, exports.StripBOM = i, i.prototype.write = function (e) {
      var i = this.decoder.write(e);
      return this.pass || !i ? i : (i[0] === t && (i = i.slice(1), "function" == typeof this.options.stripBOM && this.options.stripBOM()), this.pass = !0, i);
    }, i.prototype.end = function () {
      return this.decoder.end();
    };
  }, {}],
  "tbpL": [function (require, module, exports) {
    var r = require("buffer"),
        e = r.Buffer;

    function o(r, e) {
      for (var o in r) {
        e[o] = r[o];
      }
    }

    function n(r, o, n) {
      return e(r, o, n);
    }

    e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? module.exports = r : (o(r, exports), exports.Buffer = n), n.prototype = Object.create(e.prototype), o(e, n), n.from = function (r, o, n) {
      if ("number" == typeof r) throw new TypeError("Argument must not be a number");
      return e(r, o, n);
    }, n.alloc = function (r, o, n) {
      if ("number" != typeof r) throw new TypeError("Argument must be a number");
      var t = e(r);
      return void 0 !== o ? "string" == typeof n ? t.fill(o, n) : t.fill(o) : t.fill(0), t;
    }, n.allocUnsafe = function (r) {
      if ("number" != typeof r) throw new TypeError("Argument must be a number");
      return e(r);
    }, n.allocUnsafeSlow = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return r.SlowBuffer(e);
    };
  }, {
    "buffer": "z1tx"
  }],
  "ikue": [function (require, module, exports) {
    "use strict";

    var t = require("safe-buffer").Buffer,
        e = t.isEncoding || function (t) {
      switch ((t = "" + t) && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;

        default:
          return !1;
      }
    };

    function s(t) {
      if (!t) return "utf8";

      for (var e;;) {
        switch (t) {
          case "utf8":
          case "utf-8":
            return "utf8";

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";

          case "latin1":
          case "binary":
            return "latin1";

          case "base64":
          case "ascii":
          case "hex":
            return t;

          default:
            if (e) return;
            t = ("" + t).toLowerCase(), e = !0;
        }
      }
    }

    function i(i) {
      var a = s(i);
      if ("string" != typeof a && (t.isEncoding === e || !e(i))) throw new Error("Unknown encoding: " + i);
      return a || i;
    }

    function a(e) {
      var s;

      switch (this.encoding = i(e), this.encoding) {
        case "utf16le":
          this.text = c, this.end = f, s = 4;
          break;

        case "utf8":
          this.fillLast = l, s = 4;
          break;

        case "base64":
          this.text = d, this.end = g, s = 3;
          break;

        default:
          return this.write = N, void (this.end = v);
      }

      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(s);
    }

    function r(t) {
      return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
    }

    function n(t, e, s) {
      var i = e.length - 1;
      if (i < s) return 0;
      var a = r(e[i]);
      return a >= 0 ? (a > 0 && (t.lastNeed = a - 1), a) : --i < s || -2 === a ? 0 : (a = r(e[i])) >= 0 ? (a > 0 && (t.lastNeed = a - 2), a) : --i < s || -2 === a ? 0 : (a = r(e[i])) >= 0 ? (a > 0 && (2 === a ? a = 0 : t.lastNeed = a - 3), a) : 0;
    }

    function h(t, e, s) {
      if (128 != (192 & e[0])) return t.lastNeed = 0, "�";

      if (t.lastNeed > 1 && e.length > 1) {
        if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
        if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�";
      }
    }

    function l(t) {
      var e = this.lastTotal - this.lastNeed,
          s = h(this, t, e);
      return void 0 !== s ? s : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
    }

    function u(t, e) {
      var s = n(this, t, e);
      if (!this.lastNeed) return t.toString("utf8", e);
      this.lastTotal = s;
      var i = t.length - (s - this.lastNeed);
      return t.copy(this.lastChar, 0, i), t.toString("utf8", e, i);
    }

    function o(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + "�" : e;
    }

    function c(t, e) {
      if ((t.length - e) % 2 == 0) {
        var s = t.toString("utf16le", e);

        if (s) {
          var i = s.charCodeAt(s.length - 1);
          if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], s.slice(0, -1);
        }

        return s;
      }

      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
    }

    function f(t) {
      var e = t && t.length ? this.write(t) : "";

      if (this.lastNeed) {
        var s = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, s);
      }

      return e;
    }

    function d(t, e) {
      var s = (t.length - e) % 3;
      return 0 === s ? t.toString("base64", e) : (this.lastNeed = 3 - s, this.lastTotal = 3, 1 === s ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - s));
    }

    function g(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
    }

    function N(t) {
      return t.toString(this.encoding);
    }

    function v(t) {
      return t && t.length ? this.write(t) : "";
    }

    exports.StringDecoder = a, a.prototype.write = function (t) {
      if (0 === t.length) return "";
      var e, s;

      if (this.lastNeed) {
        if (void 0 === (e = this.fillLast(t))) return "";
        s = this.lastNeed, this.lastNeed = 0;
      } else s = 0;

      return s < t.length ? e ? e + this.text(t, s) : this.text(t, s) : e || "";
    }, a.prototype.end = o, a.prototype.text = u, a.prototype.fillLast = function (t) {
      if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
    };
  }, {
    "safe-buffer": "tbpL"
  }],
  "S9sr": [function (require, module, exports) {
    "use strict";

    var t = require("safer-buffer").Buffer;

    function e(e, r) {
      this.enc = e.encodingName, this.bomAware = e.bomAware, "base64" === this.enc ? this.encoder = i : "cesu8" === this.enc && (this.enc = "utf8", this.encoder = c, "💩" !== t.from("eda0bdedb2a9", "hex").toString() && (this.decoder = a, this.defaultCharUnicode = r.defaultCharUnicode));
    }

    module.exports = {
      utf8: {
        type: "_internal",
        bomAware: !0
      },
      cesu8: {
        type: "_internal",
        bomAware: !0
      },
      unicode11utf8: "utf8",
      ucs2: {
        type: "_internal",
        bomAware: !0
      },
      utf16le: "ucs2",
      binary: {
        type: "_internal"
      },
      base64: {
        type: "_internal"
      },
      hex: {
        type: "_internal"
      },
      _internal: e
    }, e.prototype.encoder = o, e.prototype.decoder = n;

    var r = require("string_decoder").StringDecoder;

    function n(t, e) {
      this.decoder = new r(e.enc);
    }

    function o(t, e) {
      this.enc = e.enc;
    }

    function i(t, e) {
      this.prevStr = "";
    }

    function c(t, e) {}

    function a(t, e) {
      this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = e.defaultCharUnicode;
    }

    r.prototype.end || (r.prototype.end = function () {}), n.prototype.write = function (e) {
      return t.isBuffer(e) || (e = t.from(e)), this.decoder.write(e);
    }, n.prototype.end = function () {
      return this.decoder.end();
    }, o.prototype.write = function (e) {
      return t.from(e, this.enc);
    }, o.prototype.end = function () {}, i.prototype.write = function (e) {
      var r = (e = this.prevStr + e).length - e.length % 4;
      return this.prevStr = e.slice(r), e = e.slice(0, r), t.from(e, "base64");
    }, i.prototype.end = function () {
      return t.from(this.prevStr, "base64");
    }, c.prototype.write = function (e) {
      for (var r = t.alloc(3 * e.length), n = 0, o = 0; o < e.length; o++) {
        var i = e.charCodeAt(o);
        i < 128 ? r[n++] = i : i < 2048 ? (r[n++] = 192 + (i >>> 6), r[n++] = 128 + (63 & i)) : (r[n++] = 224 + (i >>> 12), r[n++] = 128 + (i >>> 6 & 63), r[n++] = 128 + (63 & i));
      }

      return r.slice(0, n);
    }, c.prototype.end = function () {}, a.prototype.write = function (t) {
      for (var e = this.acc, r = this.contBytes, n = this.accBytes, o = "", i = 0; i < t.length; i++) {
        var c = t[i];
        128 != (192 & c) ? (r > 0 && (o += this.defaultCharUnicode, r = 0), c < 128 ? o += String.fromCharCode(c) : c < 224 ? (e = 31 & c, r = 1, n = 1) : c < 240 ? (e = 15 & c, r = 2, n = 1) : o += this.defaultCharUnicode) : r > 0 ? (e = e << 6 | 63 & c, n++, 0 === --r && (o += 2 === n && e < 128 && e > 0 ? this.defaultCharUnicode : 3 === n && e < 2048 ? this.defaultCharUnicode : String.fromCharCode(e))) : o += this.defaultCharUnicode;
      }

      return this.acc = e, this.contBytes = r, this.accBytes = n, o;
    }, a.prototype.end = function () {
      var t = 0;
      return this.contBytes > 0 && (t += this.defaultCharUnicode), t;
    };
  }, {
    "safer-buffer": "IVbQ",
    "string_decoder": "ikue"
  }],
  "hz8t": [function (require, module, exports) {
    "use strict";

    var t = require("safer-buffer").Buffer;

    function e(t, e) {
      this.iconv = e, this.bomAware = !0, this.isLE = t.isLE;
    }

    function i(t, e) {
      this.isLE = e.isLE, this.highSurrogate = 0;
    }

    function r(t, e) {
      this.isLE = e.isLE, this.badChar = e.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = null;
    }

    function o(t, e) {
      this.iconv = e;
    }

    function n(t, e) {
      void 0 === (t = t || {}).addBOM && (t.addBOM = !0), this.encoder = e.iconv.getEncoder(t.defaultEncoding || "utf-32le", t);
    }

    function s(t, e) {
      this.decoder = null, this.initialBytes = [], this.initialBytesLen = 0, this.options = t || {}, this.iconv = e.iconv;
    }

    function h(t, e) {
      var i = e || "utf-32le";
      if (t.length >= 4) if (65279 === t.readUInt32BE(0)) i = "utf-32be";else if (65279 === t.readUInt32LE(0)) i = "utf-32le";else {
        for (var r = 0, o = 0, n = 0, s = 0, h = Math.min(t.length - t.length % 4, 128), u = 0; u < h; u += 4) {
          var c = t[u],
              f = t[u + 1],
              l = t[u + 2],
              a = t[u + 3];
          (0 !== c || f > 16) && ++o, (0 !== a || l > 16) && ++r, 0 === c && 0 === f && 0 === l && 0 !== a && s++, 0 !== c && 0 === f && 0 === l && 0 === a && n++;
        }

        o < r ? i = "utf-32be" : r < o && (i = "utf-32le"), s > n ? i = "utf-32be" : s < n && (i = "utf-32le");
      }
      return i;
    }

    exports._utf32 = e, exports.utf32le = {
      type: "_utf32",
      isLE: !0
    }, exports.utf32be = {
      type: "_utf32",
      isLE: !1
    }, exports.ucs4le = "utf32le", exports.ucs4be = "utf32be", e.prototype.encoder = i, e.prototype.decoder = r, i.prototype.write = function (e) {
      for (var i = t.from(e, "ucs2"), r = t.alloc(2 * i.length), o = this.isLE ? r.writeUInt32LE : r.writeUInt32BE, n = 0, s = 0; s < i.length; s += 2) {
        var h = i.readUInt16LE(s),
            u = 55296 <= h && h < 56320,
            c = 56320 <= h && h < 57344;

        if (this.highSurrogate) {
          if (!u && c) {
            var f = 65536 + (this.highSurrogate - 55296 << 10 | h - 56320);
            o.call(r, f, n), n += 4, this.highSurrogate = 0;
            continue;
          }

          o.call(r, this.highSurrogate, n), n += 4;
        }

        u ? this.highSurrogate = h : (o.call(r, h, n), n += 4, this.highSurrogate = 0);
      }

      return n < r.length && (r = r.slice(0, n)), r;
    }, i.prototype.end = function () {
      if (this.highSurrogate) {
        var e = t.alloc(4);
        return this.isLE ? e.writeUInt32LE(this.highSurrogate, 0) : e.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, e;
      }
    }, r.prototype.write = function (e) {
      if (0 === e.length) return "";
      t.isBuffer(e) || (e = t.from(e)), this.overflow && (e = t.concat([this.overflow, e]));
      var i = e.length - e.length % 4;
      e.length !== i ? (this.overflow = e.slice(i), e = e.slice(0, i)) : this.overflow = null;

      for (var r = t.alloc(i), o = 0, n = 0; n < i; n += 4) {
        var s = this.isLE ? e.readUInt32LE(n) : e.readUInt32BE(n);
        if (s < 65536) r.writeUInt16LE(s, o), o += 2;else if (s > 1114111) r.writeUInt16LE(this.badChar, o), o += 2;else {
          var h = 55296 | (s -= 65536) >> 10,
              u = 56320 + (1023 & s);
          r.writeUInt16LE(h, o), o += 2, r.writeUInt16LE(u, o), o += 2;
        }
      }

      return r.slice(0, o).toString("ucs2");
    }, r.prototype.end = function () {
      this.overflow = null;
    }, exports.utf32 = o, exports.ucs4 = "utf32", o.prototype.encoder = n, o.prototype.decoder = s, n.prototype.write = function (t) {
      return this.encoder.write(t);
    }, n.prototype.end = function () {
      return this.encoder.end();
    }, s.prototype.write = function (e) {
      if (!this.decoder) {
        if (t.isBuffer(e) || (e = t.from(e)), this.initialBytes.push(e), this.initialBytesLen += e.length, this.initialBytesLen < 32) return "";
        var i = h(e = t.concat(this.initialBytes), this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(i, this.options), this.initialBytes.length = this.initialBytesLen = 0;
      }

      return this.decoder.write(e);
    }, s.prototype.end = function () {
      if (!this.decoder) {
        var e = t.concat(this.initialBytes),
            i = h(e, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(i, this.options);
        var r = this.decoder.write(e),
            o = this.decoder.end();
        return o ? r + o : r;
      }

      return this.decoder.end();
    };
  }, {
    "safer-buffer": "IVbQ"
  }],
  "zVdI": [function (require, module, exports) {
    "use strict";

    var t = require("safer-buffer").Buffer;

    function e() {}

    function i() {}

    function o() {
      this.overflowByte = -1;
    }

    function n(t, e) {
      this.iconv = e;
    }

    function r(t, e) {
      void 0 === (t = t || {}).addBOM && (t.addBOM = !0), this.encoder = e.iconv.getEncoder("utf-16le", t);
    }

    function s(t, e) {
      this.decoder = null, this.initialBytes = [], this.initialBytesLen = 0, this.options = t || {}, this.iconv = e.iconv;
    }

    function c(t, e) {
      var i = e || "utf-16le";
      if (t.length >= 2) if (254 == t[0] && 255 == t[1]) i = "utf-16be";else if (255 == t[0] && 254 == t[1]) i = "utf-16le";else {
        for (var o = 0, n = 0, r = Math.min(t.length - t.length % 2, 64), s = 0; s < r; s += 2) {
          0 === t[s] && 0 !== t[s + 1] && n++, 0 !== t[s] && 0 === t[s + 1] && o++;
        }

        n > o ? i = "utf-16be" : n < o && (i = "utf-16le");
      }
      return i;
    }

    exports.utf16be = e, e.prototype.encoder = i, e.prototype.decoder = o, e.prototype.bomAware = !0, i.prototype.write = function (e) {
      for (var i = t.from(e, "ucs2"), o = 0; o < i.length; o += 2) {
        var n = i[o];
        i[o] = i[o + 1], i[o + 1] = n;
      }

      return i;
    }, i.prototype.end = function () {}, o.prototype.write = function (e) {
      if (0 == e.length) return "";
      var i = t.alloc(e.length + 1),
          o = 0,
          n = 0;

      for (-1 !== this.overflowByte && (i[0] = e[0], i[1] = this.overflowByte, o = 1, n = 2); o < e.length - 1; o += 2, n += 2) {
        i[n] = e[o + 1], i[n + 1] = e[o];
      }

      return this.overflowByte = o == e.length - 1 ? e[e.length - 1] : -1, i.slice(0, n).toString("ucs2");
    }, o.prototype.end = function () {}, exports.utf16 = n, n.prototype.encoder = r, n.prototype.decoder = s, r.prototype.write = function (t) {
      return this.encoder.write(t);
    }, r.prototype.end = function () {
      return this.encoder.end();
    }, s.prototype.write = function (e) {
      if (!this.decoder) {
        if (t.isBuffer(e) || (e = t.from(e)), this.initialBytes.push(e), this.initialBytesLen += e.length, this.initialBytesLen < 16) return "";
        var i = c(e = t.concat(this.initialBytes), this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(i, this.options), this.initialBytes.length = this.initialBytesLen = 0;
      }

      return this.decoder.write(e);
    }, s.prototype.end = function () {
      if (!this.decoder) {
        var e = t.concat(this.initialBytes),
            i = c(e, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(i, this.options);
        var o = this.decoder.write(e),
            n = this.decoder.end();
        return n ? o + n : o;
      }

      return this.decoder.end();
    };
  }, {
    "safer-buffer": "IVbQ"
  }],
  "t45t": [function (require, module, exports) {
    "use strict";

    var e = require("safer-buffer").Buffer;

    function t(e, t) {
      this.iconv = t;
    }

    exports.utf7 = t, exports.unicode11utf7 = "utf7", t.prototype.encoder = s, t.prototype.decoder = c, t.prototype.bomAware = !0;
    var i = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

    function s(e, t) {
      this.iconv = t.iconv;
    }

    function c(e, t) {
      this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
    }

    s.prototype.write = function (t) {
      return e.from(t.replace(i, function (e) {
        return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
      }.bind(this)));
    }, s.prototype.end = function () {};

    for (var o = /[A-Za-z0-9\/+]/, r = [], n = 0; n < 256; n++) {
      r[n] = o.test(String.fromCharCode(n));
    }

    var a = "+".charCodeAt(0),
        h = "-".charCodeAt(0),
        u = "&".charCodeAt(0);

    function f(e, t) {
      this.iconv = t;
    }

    function l(t, i) {
      this.iconv = i.iconv, this.inBase64 = !1, this.base64Accum = e.alloc(6), this.base64AccumIdx = 0;
    }

    function d(e, t) {
      this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
    }

    c.prototype.write = function (t) {
      for (var i = "", s = 0, c = this.inBase64, o = this.base64Accum, n = 0; n < t.length; n++) {
        if (c) {
          if (!r[t[n]]) {
            if (n == s && t[n] == h) i += "+";else {
              var u = o + t.slice(s, n).toString();
              i += this.iconv.decode(e.from(u, "base64"), "utf16-be");
            }
            t[n] != h && n--, s = n + 1, c = !1, o = "";
          }
        } else t[n] == a && (i += this.iconv.decode(t.slice(s, n), "ascii"), s = n + 1, c = !0);
      }

      if (c) {
        var f = (u = o + t.slice(s).toString()).length - u.length % 8;
        o = u.slice(f), u = u.slice(0, f), i += this.iconv.decode(e.from(u, "base64"), "utf16-be");
      } else i += this.iconv.decode(t.slice(s), "ascii");

      return this.inBase64 = c, this.base64Accum = o, i;
    }, c.prototype.end = function () {
      var t = "";
      return this.inBase64 && this.base64Accum.length > 0 && (t = this.iconv.decode(e.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", t;
    }, exports.utf7imap = f, f.prototype.encoder = l, f.prototype.decoder = d, f.prototype.bomAware = !0, l.prototype.write = function (t) {
      for (var i = this.inBase64, s = this.base64Accum, c = this.base64AccumIdx, o = e.alloc(5 * t.length + 10), r = 0, n = 0; n < t.length; n++) {
        var a = t.charCodeAt(n);
        32 <= a && a <= 126 ? (i && (c > 0 && (r += o.write(s.slice(0, c).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), r), c = 0), o[r++] = h, i = !1), i || (o[r++] = a, a === u && (o[r++] = h))) : (i || (o[r++] = u, i = !0), i && (s[c++] = a >> 8, s[c++] = 255 & a, c == s.length && (r += o.write(s.toString("base64").replace(/\//g, ","), r), c = 0)));
      }

      return this.inBase64 = i, this.base64AccumIdx = c, o.slice(0, r);
    }, l.prototype.end = function () {
      var t = e.alloc(10),
          i = 0;
      return this.inBase64 && (this.base64AccumIdx > 0 && (i += t.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), i), this.base64AccumIdx = 0), t[i++] = h, this.inBase64 = !1), t.slice(0, i);
    };
    var b = r.slice();
    b[",".charCodeAt(0)] = !0, d.prototype.write = function (t) {
      for (var i = "", s = 0, c = this.inBase64, o = this.base64Accum, r = 0; r < t.length; r++) {
        if (c) {
          if (!b[t[r]]) {
            if (r == s && t[r] == h) i += "&";else {
              var n = o + t.slice(s, r).toString().replace(/,/g, "/");
              i += this.iconv.decode(e.from(n, "base64"), "utf16-be");
            }
            t[r] != h && r--, s = r + 1, c = !1, o = "";
          }
        } else t[r] == u && (i += this.iconv.decode(t.slice(s, r), "ascii"), s = r + 1, c = !0);
      }

      if (c) {
        var a = (n = o + t.slice(s).toString().replace(/,/g, "/")).length - n.length % 8;
        o = n.slice(a), n = n.slice(0, a), i += this.iconv.decode(e.from(n, "base64"), "utf16-be");
      } else i += this.iconv.decode(t.slice(s), "ascii");

      return this.inBase64 = c, this.base64Accum = o, i;
    }, d.prototype.end = function () {
      var t = "";
      return this.inBase64 && this.base64Accum.length > 0 && (t = this.iconv.decode(e.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", t;
    };
  }, {
    "safer-buffer": "IVbQ"
  }],
  "a7zs": [function (require, module, exports) {
    "use strict";

    var e = require("safer-buffer").Buffer;

    function r(r, t) {
      if (!r) throw new Error("SBCS codec is called without the data.");
      if (!r.chars || 128 !== r.chars.length && 256 !== r.chars.length) throw new Error("Encoding '" + r.type + "' has incorrect 'chars' (must be of len 128 or 256)");

      if (128 === r.chars.length) {
        for (var o = "", c = 0; c < 128; c++) {
          o += String.fromCharCode(c);
        }

        r.chars = o + r.chars;
      }

      this.decodeBuf = e.from(r.chars, "ucs2");
      var n = e.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));

      for (c = 0; c < r.chars.length; c++) {
        n[r.chars.charCodeAt(c)] = c;
      }

      this.encodeBuf = n;
    }

    function t(e, r) {
      this.encodeBuf = r.encodeBuf;
    }

    function o(e, r) {
      this.decodeBuf = r.decodeBuf;
    }

    exports._sbcs = r, r.prototype.encoder = t, r.prototype.decoder = o, t.prototype.write = function (r) {
      for (var t = e.alloc(r.length), o = 0; o < r.length; o++) {
        t[o] = this.encodeBuf[r.charCodeAt(o)];
      }

      return t;
    }, t.prototype.end = function () {}, o.prototype.write = function (r) {
      for (var t = this.decodeBuf, o = e.alloc(2 * r.length), c = 0, n = 0, h = 0; h < r.length; h++) {
        c = 2 * r[h], o[n = 2 * h] = t[c], o[n + 1] = t[c + 1];
      }

      return o.toString("ucs2");
    }, o.prototype.end = function () {};
  }, {
    "safer-buffer": "IVbQ"
  }],
  "mUs1": [function (require, module, exports) {
    "use strict";

    module.exports = {
      10029: "maccenteuro",
      maccenteuro: {
        type: "_sbcs",
        chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
      },
      808: "cp808",
      ibm808: "cp808",
      cp808: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
      },
      mik: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      cp720: {
        type: "_sbcs",
        chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "
      },
      ascii8bit: "ascii",
      usascii: "ascii",
      ansix34: "ascii",
      ansix341968: "ascii",
      ansix341986: "ascii",
      csascii: "ascii",
      cp367: "ascii",
      ibm367: "ascii",
      isoir6: "ascii",
      iso646us: "ascii",
      iso646irv: "ascii",
      us: "ascii",
      latin1: "iso88591",
      latin2: "iso88592",
      latin3: "iso88593",
      latin4: "iso88594",
      latin5: "iso88599",
      latin6: "iso885910",
      latin7: "iso885913",
      latin8: "iso885914",
      latin9: "iso885915",
      latin10: "iso885916",
      csisolatin1: "iso88591",
      csisolatin2: "iso88592",
      csisolatin3: "iso88593",
      csisolatin4: "iso88594",
      csisolatincyrillic: "iso88595",
      csisolatinarabic: "iso88596",
      csisolatingreek: "iso88597",
      csisolatinhebrew: "iso88598",
      csisolatin5: "iso88599",
      csisolatin6: "iso885910",
      l1: "iso88591",
      l2: "iso88592",
      l3: "iso88593",
      l4: "iso88594",
      l5: "iso88599",
      l6: "iso885910",
      l7: "iso885913",
      l8: "iso885914",
      l9: "iso885915",
      l10: "iso885916",
      isoir14: "iso646jp",
      isoir57: "iso646cn",
      isoir100: "iso88591",
      isoir101: "iso88592",
      isoir109: "iso88593",
      isoir110: "iso88594",
      isoir144: "iso88595",
      isoir127: "iso88596",
      isoir126: "iso88597",
      isoir138: "iso88598",
      isoir148: "iso88599",
      isoir157: "iso885910",
      isoir166: "tis620",
      isoir179: "iso885913",
      isoir199: "iso885914",
      isoir203: "iso885915",
      isoir226: "iso885916",
      cp819: "iso88591",
      ibm819: "iso88591",
      cyrillic: "iso88595",
      arabic: "iso88596",
      arabic8: "iso88596",
      ecma114: "iso88596",
      asmo708: "iso88596",
      greek: "iso88597",
      greek8: "iso88597",
      ecma118: "iso88597",
      elot928: "iso88597",
      hebrew: "iso88598",
      hebrew8: "iso88598",
      turkish: "iso88599",
      turkish8: "iso88599",
      thai: "iso885911",
      thai8: "iso885911",
      celtic: "iso885914",
      celtic8: "iso885914",
      isoceltic: "iso885914",
      tis6200: "tis620",
      tis62025291: "tis620",
      tis62025330: "tis620",
      10000: "macroman",
      10006: "macgreek",
      10007: "maccyrillic",
      10079: "maciceland",
      10081: "macturkish",
      cspc8codepage437: "cp437",
      cspc775baltic: "cp775",
      cspc850multilingual: "cp850",
      cspcp852: "cp852",
      cspc862latinhebrew: "cp862",
      cpgr: "cp869",
      msee: "cp1250",
      mscyrl: "cp1251",
      msansi: "cp1252",
      msgreek: "cp1253",
      msturk: "cp1254",
      mshebr: "cp1255",
      msarab: "cp1256",
      winbaltrim: "cp1257",
      cp20866: "koi8r",
      20866: "koi8r",
      ibm878: "koi8r",
      cskoi8r: "koi8r",
      cp21866: "koi8u",
      21866: "koi8u",
      ibm1168: "koi8u",
      strk10482002: "rk1048",
      tcvn5712: "tcvn",
      tcvn57121: "tcvn",
      gb198880: "iso646cn",
      cn: "iso646cn",
      csiso14jisc6220ro: "iso646jp",
      jisc62201969ro: "iso646jp",
      jp: "iso646jp",
      cshproman8: "hproman8",
      r8: "hproman8",
      roman8: "hproman8",
      xroman8: "hproman8",
      ibm1051: "hproman8",
      mac: "macintosh",
      csmacintosh: "macintosh"
    };
  }, {}],
  "GYsD": [function (require, module, exports) {
    "use strict";

    module.exports = {
      437: "cp437",
      737: "cp737",
      775: "cp775",
      850: "cp850",
      852: "cp852",
      855: "cp855",
      856: "cp856",
      857: "cp857",
      858: "cp858",
      860: "cp860",
      861: "cp861",
      862: "cp862",
      863: "cp863",
      864: "cp864",
      865: "cp865",
      866: "cp866",
      869: "cp869",
      874: "windows874",
      922: "cp922",
      1046: "cp1046",
      1124: "cp1124",
      1125: "cp1125",
      1129: "cp1129",
      1133: "cp1133",
      1161: "cp1161",
      1162: "cp1162",
      1163: "cp1163",
      1250: "windows1250",
      1251: "windows1251",
      1252: "windows1252",
      1253: "windows1253",
      1254: "windows1254",
      1255: "windows1255",
      1256: "windows1256",
      1257: "windows1257",
      1258: "windows1258",
      28591: "iso88591",
      28592: "iso88592",
      28593: "iso88593",
      28594: "iso88594",
      28595: "iso88595",
      28596: "iso88596",
      28597: "iso88597",
      28598: "iso88598",
      28599: "iso88599",
      28600: "iso885910",
      28601: "iso885911",
      28603: "iso885913",
      28604: "iso885914",
      28605: "iso885915",
      28606: "iso885916",
      windows874: {
        type: "_sbcs",
        chars: "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      win874: "windows874",
      cp874: "windows874",
      windows1250: {
        type: "_sbcs",
        chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
      },
      win1250: "windows1250",
      cp1250: "windows1250",
      windows1251: {
        type: "_sbcs",
        chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      win1251: "windows1251",
      cp1251: "windows1251",
      windows1252: {
        type: "_sbcs",
        chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      win1252: "windows1252",
      cp1252: "windows1252",
      windows1253: {
        type: "_sbcs",
        chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
      },
      win1253: "windows1253",
      cp1253: "windows1253",
      windows1254: {
        type: "_sbcs",
        chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
      },
      win1254: "windows1254",
      cp1254: "windows1254",
      windows1255: {
        type: "_sbcs",
        chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
      },
      win1255: "windows1255",
      cp1255: "windows1255",
      windows1256: {
        type: "_sbcs",
        chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
      },
      win1256: "windows1256",
      cp1256: "windows1256",
      windows1257: {
        type: "_sbcs",
        chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
      },
      win1257: "windows1257",
      cp1257: "windows1257",
      windows1258: {
        type: "_sbcs",
        chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      win1258: "windows1258",
      cp1258: "windows1258",
      iso88591: {
        type: "_sbcs",
        chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      cp28591: "iso88591",
      iso88592: {
        type: "_sbcs",
        chars: " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
      },
      cp28592: "iso88592",
      iso88593: {
        type: "_sbcs",
        chars: " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
      },
      cp28593: "iso88593",
      iso88594: {
        type: "_sbcs",
        chars: " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
      },
      cp28594: "iso88594",
      iso88595: {
        type: "_sbcs",
        chars: " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
      },
      cp28595: "iso88595",
      iso88596: {
        type: "_sbcs",
        chars: " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
      },
      cp28596: "iso88596",
      iso88597: {
        type: "_sbcs",
        chars: " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
      },
      cp28597: "iso88597",
      iso88598: {
        type: "_sbcs",
        chars: " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
      },
      cp28598: "iso88598",
      iso88599: {
        type: "_sbcs",
        chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
      },
      cp28599: "iso88599",
      iso885910: {
        type: "_sbcs",
        chars: " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
      },
      cp28600: "iso885910",
      iso885911: {
        type: "_sbcs",
        chars: " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      cp28601: "iso885911",
      iso885913: {
        type: "_sbcs",
        chars: " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
      },
      cp28603: "iso885913",
      iso885914: {
        type: "_sbcs",
        chars: " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
      },
      cp28604: "iso885914",
      iso885915: {
        type: "_sbcs",
        chars: " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      cp28605: "iso885915",
      iso885916: {
        type: "_sbcs",
        chars: " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
      },
      cp28606: "iso885916",
      cp437: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm437: "cp437",
      csibm437: "cp437",
      cp737: {
        type: "_sbcs",
        chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
      },
      ibm737: "cp737",
      csibm737: "cp737",
      cp775: {
        type: "_sbcs",
        chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
      },
      ibm775: "cp775",
      csibm775: "cp775",
      cp850: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      ibm850: "cp850",
      csibm850: "cp850",
      cp852: {
        type: "_sbcs",
        chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
      },
      ibm852: "cp852",
      csibm852: "cp852",
      cp855: {
        type: "_sbcs",
        chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
      },
      ibm855: "cp855",
      csibm855: "cp855",
      cp856: {
        type: "_sbcs",
        chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      ibm856: "cp856",
      csibm856: "cp856",
      cp857: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
      },
      ibm857: "cp857",
      csibm857: "cp857",
      cp858: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      ibm858: "cp858",
      csibm858: "cp858",
      cp860: {
        type: "_sbcs",
        chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm860: "cp860",
      csibm860: "cp860",
      cp861: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm861: "cp861",
      csibm861: "cp861",
      cp862: {
        type: "_sbcs",
        chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm862: "cp862",
      csibm862: "cp862",
      cp863: {
        type: "_sbcs",
        chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm863: "cp863",
      csibm863: "cp863",
      cp864: {
        type: "_sbcs",
        chars: "\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
      },
      ibm864: "cp864",
      csibm864: "cp864",
      cp865: {
        type: "_sbcs",
        chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      ibm865: "cp865",
      csibm865: "cp865",
      cp866: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
      },
      ibm866: "cp866",
      csibm866: "cp866",
      cp869: {
        type: "_sbcs",
        chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
      },
      ibm869: "cp869",
      csibm869: "cp869",
      cp922: {
        type: "_sbcs",
        chars: " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
      },
      ibm922: "cp922",
      csibm922: "cp922",
      cp1046: {
        type: "_sbcs",
        chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
      },
      ibm1046: "cp1046",
      csibm1046: "cp1046",
      cp1124: {
        type: "_sbcs",
        chars: " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
      },
      ibm1124: "cp1124",
      csibm1124: "cp1124",
      cp1125: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
      },
      ibm1125: "cp1125",
      csibm1125: "cp1125",
      cp1129: {
        type: "_sbcs",
        chars: " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      ibm1129: "cp1129",
      csibm1129: "cp1129",
      cp1133: {
        type: "_sbcs",
        chars: " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
      },
      ibm1133: "cp1133",
      csibm1133: "cp1133",
      cp1161: {
        type: "_sbcs",
        chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
      },
      ibm1161: "cp1161",
      csibm1161: "cp1161",
      cp1162: {
        type: "_sbcs",
        chars: "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      ibm1162: "cp1162",
      csibm1162: "cp1162",
      cp1163: {
        type: "_sbcs",
        chars: " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      ibm1163: "cp1163",
      csibm1163: "cp1163",
      maccroatian: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
      },
      maccyrillic: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
      },
      macgreek: {
        type: "_sbcs",
        chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
      },
      maciceland: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      macroman: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      macromania: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      macthai: {
        type: "_sbcs",
        chars: "\xAB\xBB\u2026\uF88C\uF88F\uF892\uF895\uF898\uF88B\uF88E\uF891\uF894\uF897\u201C\u201D\uF899\uFFFD\u2022\uF884\uF889\uF885\uF886\uF887\uF888\uF88A\uF88D\uF890\uF893\uF896\u2018\u2019\uFFFD\xA0\u0E01\u0E02\u0E03\u0E04\u0E05\u0E06\u0E07\u0E08\u0E09\u0E0A\u0E0B\u0E0C\u0E0D\u0E0E\u0E0F\u0E10\u0E11\u0E12\u0E13\u0E14\u0E15\u0E16\u0E17\u0E18\u0E19\u0E1A\u0E1B\u0E1C\u0E1D\u0E1E\u0E1F\u0E20\u0E21\u0E22\u0E23\u0E24\u0E25\u0E26\u0E27\u0E28\u0E29\u0E2A\u0E2B\u0E2C\u0E2D\u0E2E\u0E2F\u0E30\u0E31\u0E32\u0E33\u0E34\u0E35\u0E36\u0E37\u0E38\u0E39\u0E3A\uFEFF\u200B\u2013\u2014\u0E3F\u0E40\u0E41\u0E42\u0E43\u0E44\u0E45\u0E46\u0E47\u0E48\u0E49\u0E4A\u0E4B\u0E4C\u0E4D\u2122\u0E4F\u0E50\u0E51\u0E52\u0E53\u0E54\u0E55\u0E56\u0E57\u0E58\u0E59\xAE\xA9\uFFFD\uFFFD\uFFFD\uFFFD"
      },
      macturkish: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
      },
      macukraine: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
      },
      koi8r: {
        type: "_sbcs",
        chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      koi8u: {
        type: "_sbcs",
        chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      koi8ru: {
        type: "_sbcs",
        chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      koi8t: {
        type: "_sbcs",
        chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      armscii8: {
        type: "_sbcs",
        chars: " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
      },
      rk1048: {
        type: "_sbcs",
        chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      tcvn: {
        type: "_sbcs",
        chars: "\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
      },
      georgianacademy: {
        type: "_sbcs",
        chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      georgianps: {
        type: "_sbcs",
        chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      pt154: {
        type: "_sbcs",
        chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      viscii: {
        type: "_sbcs",
        chars: "\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
      },
      iso646cn: {
        type: "_sbcs",
        chars: "\0\b\t\n\v\f\r !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
      },
      iso646jp: {
        type: "_sbcs",
        chars: "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
      },
      hproman8: {
        type: "_sbcs",
        chars: " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
      },
      macintosh: {
        type: "_sbcs",
        chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      ascii: {
        type: "_sbcs",
        chars: "��������������������������������������������������������������������������������������������������������������������������������"
      },
      tis620: {
        type: "_sbcs",
        chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      }
    };
  }, {}],
  "b7qe": [function (require, module, exports) {
    "use strict";

    var e = require("safer-buffer").Buffer;

    exports._dbcs = d;

    for (var t = -1, o = -2, i = -10, r = -1e3, a = new Array(256), s = -1, h = 0; h < 256; h++) {
      a[h] = t;
    }

    function d(e, i) {
      if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
      if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
      var s = e.table();
      this.decodeTables = [], this.decodeTables[0] = a.slice(0), this.decodeTableSeq = [];

      for (var h = 0; h < s.length; h++) {
        this._addDecodeChunk(s[h]);
      }

      if ("function" == typeof e.gb18030) {
        this.gb18030 = e.gb18030();
        var d = this.decodeTables.length;
        this.decodeTables.push(a.slice(0));
        var n = this.decodeTables.length;
        this.decodeTables.push(a.slice(0));
        var c = this.decodeTables[0];

        for (h = 129; h <= 254; h++) {
          for (var l = this.decodeTables[r - c[h]], f = 48; f <= 57; f++) {
            if (l[f] === t) l[f] = r - d;else if (l[f] > r) throw new Error("gb18030 decode tables conflict at byte 2");

            for (var b = this.decodeTables[r - l[f]], u = 129; u <= 254; u++) {
              if (b[u] === t) b[u] = r - n;else {
                if (b[u] === r - n) continue;
                if (b[u] > r) throw new Error("gb18030 decode tables conflict at byte 3");
              }

              for (var g = this.decodeTables[r - b[u]], v = 48; v <= 57; v++) {
                g[v] === t && (g[v] = o);
              }
            }
          }
        }
      }

      this.defaultCharUnicode = i.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
      var p = {};
      if (e.encodeSkipVals) for (h = 0; h < e.encodeSkipVals.length; h++) {
        var T = e.encodeSkipVals[h];
        if ("number" == typeof T) p[T] = !0;else for (f = T.from; f <= T.to; f++) {
          p[f] = !0;
        }
      }
      if (this._fillEncodeTable(0, 0, p), e.encodeAdd) for (var S in e.encodeAdd) {
        Object.prototype.hasOwnProperty.call(e.encodeAdd, S) && this._setEncodeChar(S.charCodeAt(0), e.encodeAdd[S]);
      }
      this.defCharSB = this.encodeTable[0][i.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === t && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === t && (this.defCharSB = "?".charCodeAt(0));
    }

    function n(e, t) {
      this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable, this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB, this.gb18030 = t.gb18030;
    }

    function c(t, o) {
      this.nodeIdx = 0, this.prevBuf = e.alloc(0), this.decodeTables = o.decodeTables, this.decodeTableSeq = o.decodeTableSeq, this.defaultCharUnicode = o.defaultCharUnicode, this.gb18030 = o.gb18030;
    }

    function l(e, t) {
      if (e[0] > t) return -1;

      for (var o = 0, i = e.length; o < i - 1;) {
        var r = o + Math.floor((i - o + 1) / 2);
        e[r] <= t ? o = r : i = r;
      }

      return o;
    }

    d.prototype.encoder = n, d.prototype.decoder = c, d.prototype._getDecodeTrieNode = function (e) {
      for (var o = []; e > 0; e >>>= 8) {
        o.push(255 & e);
      }

      0 == o.length && o.push(0);

      for (var i = this.decodeTables[0], s = o.length - 1; s > 0; s--) {
        var h = i[o[s]];
        if (h == t) i[o[s]] = r - this.decodeTables.length, this.decodeTables.push(i = a.slice(0));else {
          if (!(h <= r)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
          i = this.decodeTables[r - h];
        }
      }

      return i;
    }, d.prototype._addDecodeChunk = function (e) {
      var t = parseInt(e[0], 16),
          o = this._getDecodeTrieNode(t);

      t &= 255;

      for (var r = 1; r < e.length; r++) {
        var a = e[r];
        if ("string" == typeof a) for (var s = 0; s < a.length;) {
          var h = a.charCodeAt(s++);

          if (55296 <= h && h < 56320) {
            var d = a.charCodeAt(s++);
            if (!(56320 <= d && d < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
            o[t++] = 65536 + 1024 * (h - 55296) + (d - 56320);
          } else if (4080 < h && h <= 4095) {
            for (var n = 4095 - h + 2, c = [], l = 0; l < n; l++) {
              c.push(a.charCodeAt(s++));
            }

            o[t++] = i - this.decodeTableSeq.length, this.decodeTableSeq.push(c);
          } else o[t++] = h;
        } else {
          if ("number" != typeof a) throw new Error("Incorrect type '" + _typeof(a) + "' given in " + this.encodingName + " at chunk " + e[0]);
          var f = o[t - 1] + 1;

          for (s = 0; s < a; s++) {
            o[t++] = f++;
          }
        }
      }

      if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t);
    }, d.prototype._getEncodeBucket = function (e) {
      var t = e >> 8;
      return void 0 === this.encodeTable[t] && (this.encodeTable[t] = a.slice(0)), this.encodeTable[t];
    }, d.prototype._setEncodeChar = function (e, o) {
      var r = this._getEncodeBucket(e),
          a = 255 & e;

      r[a] <= i ? this.encodeTableSeq[i - r[a]][s] = o : r[a] == t && (r[a] = o);
    }, d.prototype._setEncodeSequence = function (e, o) {
      var r,
          a = e[0],
          h = this._getEncodeBucket(a),
          d = 255 & a;

      h[d] <= i ? r = this.encodeTableSeq[i - h[d]] : (r = {}, h[d] !== t && (r[s] = h[d]), h[d] = i - this.encodeTableSeq.length, this.encodeTableSeq.push(r));

      for (var n = 1; n < e.length - 1; n++) {
        var c = r[a];
        "object" == _typeof(c) ? r = c : (r = r[a] = {}, void 0 !== c && (r[s] = c));
      }

      r[a = e[e.length - 1]] = o;
    }, d.prototype._fillEncodeTable = function (e, t, o) {
      for (var a = this.decodeTables[e], s = !1, h = {}, d = 0; d < 256; d++) {
        var n = a[d],
            c = t + d;
        if (!o[c]) if (n >= 0) this._setEncodeChar(n, c), s = !0;else if (n <= r) {
          var l = r - n;

          if (!h[l]) {
            var f = c << 8 >>> 0;
            this._fillEncodeTable(l, f, o) ? s = !0 : h[l] = !0;
          }
        } else n <= i && (this._setEncodeSequence(this.decodeTableSeq[i - n], c), s = !0);
      }

      return s;
    }, n.prototype.write = function (o) {
      for (var r = e.alloc(o.length * (this.gb18030 ? 4 : 3)), a = this.leadSurrogate, h = this.seqObj, d = -1, n = 0, c = 0;;) {
        if (-1 === d) {
          if (n == o.length) break;
          var f = o.charCodeAt(n++);
        } else {
          f = d;
          d = -1;
        }

        if (55296 <= f && f < 57344) {
          if (f < 56320) {
            if (-1 === a) {
              a = f;
              continue;
            }

            a = f, f = t;
          } else -1 !== a ? (f = 65536 + 1024 * (a - 55296) + (f - 56320), a = -1) : f = t;
        } else -1 !== a && (d = f, f = t, a = -1);
        var b = t;

        if (void 0 !== h && f != t) {
          var u = h[f];

          if ("object" == _typeof(u)) {
            h = u;
            continue;
          }

          "number" == typeof u ? b = u : null == u && void 0 !== (u = h[s]) && (b = u, d = f), h = void 0;
        } else if (f >= 0) {
          var g = this.encodeTable[f >> 8];

          if (void 0 !== g && (b = g[255 & f]), b <= i) {
            h = this.encodeTableSeq[i - b];
            continue;
          }

          if (b == t && this.gb18030) {
            var v = l(this.gb18030.uChars, f);

            if (-1 != v) {
              b = this.gb18030.gbChars[v] + (f - this.gb18030.uChars[v]);
              r[c++] = 129 + Math.floor(b / 12600), b %= 12600, r[c++] = 48 + Math.floor(b / 1260), b %= 1260, r[c++] = 129 + Math.floor(b / 10), b %= 10, r[c++] = 48 + b;
              continue;
            }
          }
        }

        b === t && (b = this.defaultCharSingleByte), b < 256 ? r[c++] = b : b < 65536 ? (r[c++] = b >> 8, r[c++] = 255 & b) : b < 16777216 ? (r[c++] = b >> 16, r[c++] = b >> 8 & 255, r[c++] = 255 & b) : (r[c++] = b >>> 24, r[c++] = b >>> 16 & 255, r[c++] = b >>> 8 & 255, r[c++] = 255 & b);
      }

      return this.seqObj = h, this.leadSurrogate = a, r.slice(0, c);
    }, n.prototype.end = function () {
      if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var t = e.alloc(10),
            o = 0;

        if (this.seqObj) {
          var i = this.seqObj[s];
          void 0 !== i && (i < 256 ? t[o++] = i : (t[o++] = i >> 8, t[o++] = 255 & i)), this.seqObj = void 0;
        }

        return -1 !== this.leadSurrogate && (t[o++] = this.defaultCharSingleByte, this.leadSurrogate = -1), t.slice(0, o);
      }
    }, n.prototype.findIdx = l, c.prototype.write = function (a) {
      var s = e.alloc(2 * a.length),
          h = this.nodeIdx,
          d = this.prevBuf,
          n = this.prevBuf.length,
          c = -this.prevBuf.length;
      n > 0 && (d = e.concat([d, a.slice(0, 10)]));

      for (var f = 0, b = 0; f < a.length; f++) {
        var u,
            g = f >= 0 ? a[f] : d[f + n];
        if ((u = this.decodeTables[h][g]) >= 0) ;else if (u === t) f = c, u = this.defaultCharUnicode.charCodeAt(0);else if (u === o) {
          var v = c >= 0 ? a.slice(c, f + 1) : d.slice(c + n, f + 1 + n),
              p = 12600 * (v[0] - 129) + 1260 * (v[1] - 48) + 10 * (v[2] - 129) + (v[3] - 48),
              T = l(this.gb18030.gbChars, p);
          u = this.gb18030.uChars[T] + p - this.gb18030.gbChars[T];
        } else {
          if (u <= r) {
            h = r - u;
            continue;
          }

          if (!(u <= i)) throw new Error("iconv-lite internal error: invalid decoding table value " + u + " at " + h + "/" + g);

          for (var S = this.decodeTableSeq[i - u], C = 0; C < S.length - 1; C++) {
            u = S[C], s[b++] = 255 & u, s[b++] = u >> 8;
          }

          u = S[S.length - 1];
        }

        if (u > 65535) {
          u -= 65536;
          var y = 55296 + Math.floor(u / 1024);
          s[b++] = 255 & y, s[b++] = y >> 8, u = 56320 + u % 1024;
        }

        s[b++] = 255 & u, s[b++] = u >> 8, h = 0, c = f + 1;
      }

      return this.nodeIdx = h, this.prevBuf = c >= 0 ? a.slice(c) : d.slice(c + n), s.slice(0, b).toString("ucs2");
    }, c.prototype.end = function () {
      for (var t = ""; this.prevBuf.length > 0;) {
        t += this.defaultCharUnicode;
        var o = this.prevBuf.slice(1);
        this.prevBuf = e.alloc(0), this.nodeIdx = 0, o.length > 0 && (t += this.write(o));
      }

      return this.nodeIdx = 0, t;
    };
  }, {
    "safer-buffer": "IVbQ"
  }],
  "P0Ww": [function (require, module, exports) {
    module.exports = [["0", "\0", 128], ["a1", "｡", 62], ["8140", "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈", 9, "＋－±×"], ["8180", "÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"], ["81b8", "∈∋⊆⊇⊂⊃∪∩"], ["81c8", "∧∨￢⇒⇔∀∃"], ["81da", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"], ["81f0", "Å‰♯♭♪†‡¶"], ["81fc", "◯"], ["824f", "０", 9], ["8260", "Ａ", 25], ["8281", "ａ", 25], ["829f", "ぁ", 82], ["8340", "ァ", 62], ["8380", "ム", 22], ["839f", "Α", 16, "Σ", 6], ["83bf", "α", 16, "σ", 6], ["8440", "А", 5, "ЁЖ", 25], ["8470", "а", 5, "ёж", 7], ["8480", "о", 17], ["849f", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"], ["8740", "①", 19, "Ⅰ", 9], ["875f", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"], ["877e", "㍻"], ["8780", "〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"], ["889f", "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"], ["8940", "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"], ["8980", "園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"], ["8a40", "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"], ["8a80", "橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"], ["8b40", "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"], ["8b80", "朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"], ["8c40", "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"], ["8c80", "劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"], ["8d40", "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"], ["8d80", "項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"], ["8e40", "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"], ["8e80", "死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"], ["8f40", "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"], ["8f80", "準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"], ["9040", "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"], ["9080", "逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"], ["9140", "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"], ["9180", "操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"], ["9240", "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"], ["9280", "逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"], ["9340", "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"], ["9380", "凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"], ["9440", "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"], ["9480", "楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"], ["9540", "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"], ["9580", "斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"], ["9640", "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"], ["9680", "摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"], ["9740", "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"], ["9780", "沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"], ["9840", "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"], ["989f", "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"], ["9940", "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"], ["9980", "凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"], ["9a40", "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"], ["9a80", "噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"], ["9b40", "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"], ["9b80", "它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"], ["9c40", "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"], ["9c80", "怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"], ["9d40", "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"], ["9d80", "捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"], ["9e40", "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"], ["9e80", "梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"], ["9f40", "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"], ["9f80", "麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"], ["e040", "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"], ["e080", "烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"], ["e140", "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"], ["e180", "痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"], ["e240", "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"], ["e280", "窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"], ["e340", "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"], ["e380", "縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"], ["e440", "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"], ["e480", "艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"], ["e540", "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"], ["e580", "蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"], ["e640", "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"], ["e680", "諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"], ["e740", "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"], ["e780", "轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"], ["e840", "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"], ["e880", "閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"], ["e940", "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"], ["e980", "騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"], ["ea40", "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"], ["ea80", "黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"], ["ed40", "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"], ["ed80", "塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"], ["ee40", "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"], ["ee80", "蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"], ["eeef", "ⅰ", 9, "￢￤＇＂"], ["f040", "", 62], ["f080", "", 124], ["f140", "", 62], ["f180", "", 124], ["f240", "", 62], ["f280", "", 124], ["f340", "", 62], ["f380", "", 124], ["f440", "", 62], ["f480", "", 124], ["f540", "", 62], ["f580", "", 124], ["f640", "", 62], ["f680", "", 124], ["f740", "", 62], ["f780", "", 124], ["f840", "", 62], ["f880", "", 124], ["f940", ""], ["fa40", "ⅰ", 9, "Ⅰ", 9, "￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"], ["fa80", "兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"], ["fb40", "涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"], ["fb80", "祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"], ["fc40", "髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]];
  }, {}],
  "F831": [function (require, module, exports) {
    module.exports = [["0", "\0", 127], ["8ea1", "｡", 62], ["a1a1", "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈", 9, "＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"], ["a2a1", "◆□■△▲▽▼※〒→←↑↓〓"], ["a2ba", "∈∋⊆⊇⊂⊃∪∩"], ["a2ca", "∧∨￢⇒⇔∀∃"], ["a2dc", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"], ["a2f2", "Å‰♯♭♪†‡¶"], ["a2fe", "◯"], ["a3b0", "０", 9], ["a3c1", "Ａ", 25], ["a3e1", "ａ", 25], ["a4a1", "ぁ", 82], ["a5a1", "ァ", 85], ["a6a1", "Α", 16, "Σ", 6], ["a6c1", "α", 16, "σ", 6], ["a7a1", "А", 5, "ЁЖ", 25], ["a7d1", "а", 5, "ёж", 25], ["a8a1", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"], ["ada1", "①", 19, "Ⅰ", 9], ["adc0", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"], ["addf", "㍻〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"], ["b0a1", "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"], ["b1a1", "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"], ["b2a1", "押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"], ["b3a1", "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"], ["b4a1", "粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"], ["b5a1", "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"], ["b6a1", "供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"], ["b7a1", "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"], ["b8a1", "検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"], ["b9a1", "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"], ["baa1", "此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"], ["bba1", "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"], ["bca1", "次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"], ["bda1", "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"], ["bea1", "勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"], ["bfa1", "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"], ["c0a1", "澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"], ["c1a1", "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"], ["c2a1", "臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"], ["c3a1", "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"], ["c4a1", "帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"], ["c5a1", "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"], ["c6a1", "董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"], ["c7a1", "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"], ["c8a1", "函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"], ["c9a1", "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"], ["caa1", "福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"], ["cba1", "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"], ["cca1", "漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"], ["cda1", "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"], ["cea1", "痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"], ["cfa1", "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"], ["d0a1", "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"], ["d1a1", "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"], ["d2a1", "辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"], ["d3a1", "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"], ["d4a1", "圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"], ["d5a1", "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"], ["d6a1", "屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"], ["d7a1", "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"], ["d8a1", "悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"], ["d9a1", "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"], ["daa1", "據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"], ["dba1", "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"], ["dca1", "棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"], ["dda1", "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"], ["dea1", "沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"], ["dfa1", "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"], ["e0a1", "燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"], ["e1a1", "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"], ["e2a1", "癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"], ["e3a1", "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"], ["e4a1", "筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"], ["e5a1", "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"], ["e6a1", "罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"], ["e7a1", "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"], ["e8a1", "茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"], ["e9a1", "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"], ["eaa1", "蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"], ["eba1", "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"], ["eca1", "譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"], ["eda1", "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"], ["eea1", "遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"], ["efa1", "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"], ["f0a1", "陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"], ["f1a1", "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"], ["f2a1", "髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"], ["f3a1", "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"], ["f4a1", "堯槇遙瑤凜熙"], ["f9a1", "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"], ["faa1", "忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"], ["fba1", "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"], ["fca1", "釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"], ["fcf1", "ⅰ", 9, "￢￤＇＂"], ["8fa2af", "˘ˇ¸˙˝¯˛˚～΄΅"], ["8fa2c2", "¡¦¿"], ["8fa2eb", "ºª©®™¤№"], ["8fa6e1", "ΆΈΉΊΪ"], ["8fa6e7", "Ό"], ["8fa6e9", "ΎΫ"], ["8fa6ec", "Ώ"], ["8fa6f1", "άέήίϊΐόςύϋΰώ"], ["8fa7c2", "Ђ", 10, "ЎЏ"], ["8fa7f2", "ђ", 10, "ўџ"], ["8fa9a1", "ÆĐ"], ["8fa9a4", "Ħ"], ["8fa9a6", "Ĳ"], ["8fa9a8", "ŁĿ"], ["8fa9ab", "ŊØŒ"], ["8fa9af", "ŦÞ"], ["8fa9c1", "æđðħıĳĸłŀŉŋøœßŧþ"], ["8faaa1", "ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"], ["8faaba", "ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"], ["8faba1", "áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"], ["8fabbd", "ġĥíìïîǐ"], ["8fabc5", "īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"], ["8fb0a1", "丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"], ["8fb1a1", "侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"], ["8fb2a1", "傒傓傔傖傛傜傞", 4, "傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"], ["8fb3a1", "凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"], ["8fb4a1", "匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"], ["8fb5a1", "咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"], ["8fb6a1", "嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍", 5, "嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤", 4, "囱囫园"], ["8fb7a1", "囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭", 4, "坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"], ["8fb8a1", "堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"], ["8fb9a1", "奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"], ["8fbaa1", "嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖", 4, "寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"], ["8fbba1", "屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"], ["8fbca1", "巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪", 4, "幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"], ["8fbda1", "彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐", 4, "忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"], ["8fbea1", "悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐", 4, "愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"], ["8fbfa1", "懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"], ["8fc0a1", "捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"], ["8fc1a1", "擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"], ["8fc2a1", "昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"], ["8fc3a1", "杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮", 4, "桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"], ["8fc4a1", "棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"], ["8fc5a1", "樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"], ["8fc6a1", "歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"], ["8fc7a1", "泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"], ["8fc8a1", "湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"], ["8fc9a1", "濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔", 4, "炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃", 4, "焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"], ["8fcaa1", "煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"], ["8fcba1", "狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"], ["8fcca1", "珿琀琁琄琇琊琑琚琛琤琦琨", 9, "琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"], ["8fcda1", "甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹", 5, "疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"], ["8fcea1", "瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢", 6, "皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"], ["8fcfa1", "睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"], ["8fd0a1", "碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"], ["8fd1a1", "秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"], ["8fd2a1", "笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙", 5], ["8fd3a1", "籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"], ["8fd4a1", "綞綦綧綪綳綶綷綹緂", 4, "緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"], ["8fd5a1", "罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"], ["8fd6a1", "胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"], ["8fd7a1", "艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"], ["8fd8a1", "荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"], ["8fd9a1", "蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏", 4, "蕖蕙蕜", 6, "蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"], ["8fdaa1", "藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠", 4, "虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"], ["8fdba1", "蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃", 6, "螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"], ["8fdca1", "蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊", 4, "裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"], ["8fdda1", "襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔", 4, "觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"], ["8fdea1", "誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂", 4, "譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"], ["8fdfa1", "貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"], ["8fe0a1", "踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"], ["8fe1a1", "轃轇轏轑", 4, "轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"], ["8fe2a1", "郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"], ["8fe3a1", "釂釃釅釓釔釗釙釚釞釤釥釩釪釬", 5, "釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵", 4, "鉻鉼鉽鉿銈銉銊銍銎銒銗"], ["8fe4a1", "銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿", 4, "鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"], ["8fe5a1", "鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉", 4, "鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"], ["8fe6a1", "镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"], ["8fe7a1", "霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"], ["8fe8a1", "頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱", 4, "餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"], ["8fe9a1", "馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿", 4], ["8feaa1", "鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪", 4, "魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"], ["8feba1", "鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦", 4, "鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"], ["8feca1", "鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"], ["8feda1", "黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃", 4, "齓齕齖齗齘齚齝齞齨齩齭", 4, "齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]];
  }, {}],
  "DHI4": [function (require, module, exports) {
    module.exports = [["0", "\0", 127, "€"], ["8140", "丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪", 5, "乲乴", 9, "乿", 6, "亇亊"], ["8180", "亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂", 6, "伋伌伒", 4, "伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾", 4, "佄佅佇", 5, "佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"], ["8240", "侤侫侭侰", 4, "侶", 8, "俀俁係俆俇俈俉俋俌俍俒", 4, "俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿", 11], ["8280", "個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯", 10, "倻倽倿偀偁偂偄偅偆偉偊偋偍偐", 4, "偖偗偘偙偛偝", 7, "偦", 5, "偭", 8, "偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎", 20, "傤傦傪傫傭", 4, "傳", 6, "傼"], ["8340", "傽", 17, "僐", 5, "僗僘僙僛", 10, "僨僩僪僫僯僰僱僲僴僶", 4, "僼", 9, "儈"], ["8380", "儉儊儌", 5, "儓", 13, "儢", 28, "兂兇兊兌兎兏児兒兓兗兘兙兛兝", 4, "兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦", 4, "冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒", 5], ["8440", "凘凙凚凜凞凟凢凣凥", 5, "凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄", 5, "剋剎剏剒剓剕剗剘"], ["8480", "剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳", 9, "剾劀劃", 4, "劉", 6, "劑劒劔", 6, "劜劤劥劦劧劮劯劰労", 9, "勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務", 5, "勠勡勢勣勥", 10, "勱", 7, "勻勼勽匁匂匃匄匇匉匊匋匌匎"], ["8540", "匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯", 9, "匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"], ["8580", "厐", 4, "厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯", 6, "厷厸厹厺厼厽厾叀參", 4, "収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝", 4, "呣呥呧呩", 7, "呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"], ["8640", "咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠", 4, "哫哬哯哰哱哴", 5, "哻哾唀唂唃唄唅唈唊", 4, "唒唓唕", 5, "唜唝唞唟唡唥唦"], ["8680", "唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋", 4, "啑啒啓啔啗", 4, "啝啞啟啠啢啣啨啩啫啯", 5, "啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠", 6, "喨", 8, "喲喴営喸喺喼喿", 4, "嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗", 4, "嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸", 4, "嗿嘂嘃嘄嘅"], ["8740", "嘆嘇嘊嘋嘍嘐", 7, "嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀", 11, "噏", 4, "噕噖噚噛噝", 4], ["8780", "噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽", 7, "嚇", 6, "嚐嚑嚒嚔", 14, "嚤", 10, "嚰", 6, "嚸嚹嚺嚻嚽", 12, "囋", 8, "囕囖囘囙囜団囥", 5, "囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國", 6], ["8840", "園", 9, "圝圞圠圡圢圤圥圦圧圫圱圲圴", 4, "圼圽圿坁坃坄坅坆坈坉坋坒", 4, "坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"], ["8880", "垁垇垈垉垊垍", 4, "垔", 6, "垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹", 8, "埄", 6, "埌埍埐埑埓埖埗埛埜埞埡埢埣埥", 7, "埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥", 4, "堫", 4, "報堲堳場堶", 7], ["8940", "堾", 5, "塅", 6, "塎塏塐塒塓塕塖塗塙", 4, "塟", 5, "塦", 4, "塭", 16, "塿墂墄墆墇墈墊墋墌"], ["8980", "墍", 4, "墔", 4, "墛墜墝墠", 7, "墪", 17, "墽墾墿壀壂壃壄壆", 10, "壒壓壔壖", 13, "壥", 5, "壭壯壱売壴壵壷壸壺", 7, "夃夅夆夈", 4, "夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"], ["8a40", "夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛", 4, "奡奣奤奦", 12, "奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"], ["8a80", "妧妬妭妰妱妳", 5, "妺妼妽妿", 6, "姇姈姉姌姍姎姏姕姖姙姛姞", 4, "姤姦姧姩姪姫姭", 11, "姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪", 6, "娳娵娷", 4, "娽娾娿婁", 4, "婇婈婋", 9, "婖婗婘婙婛", 5], ["8b40", "婡婣婤婥婦婨婩婫", 8, "婸婹婻婼婽婾媀", 17, "媓", 6, "媜", 13, "媫媬"], ["8b80", "媭", 4, "媴媶媷媹", 4, "媿嫀嫃", 5, "嫊嫋嫍", 4, "嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬", 4, "嫲", 22, "嬊", 11, "嬘", 25, "嬳嬵嬶嬸", 7, "孁", 6], ["8c40", "孈", 7, "孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"], ["8c80", "寑寔", 8, "寠寢寣實寧審", 4, "寯寱", 6, "寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧", 6, "屰屲", 6, "屻屼屽屾岀岃", 4, "岉岊岋岎岏岒岓岕岝", 4, "岤", 4], ["8d40", "岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅", 5, "峌", 5, "峓", 5, "峚", 6, "峢峣峧峩峫峬峮峯峱", 9, "峼", 4], ["8d80", "崁崄崅崈", 5, "崏", 4, "崕崗崘崙崚崜崝崟", 4, "崥崨崪崫崬崯", 4, "崵", 7, "崿", 7, "嵈嵉嵍", 10, "嵙嵚嵜嵞", 10, "嵪嵭嵮嵰嵱嵲嵳嵵", 12, "嶃", 21, "嶚嶛嶜嶞嶟嶠"], ["8e40", "嶡", 21, "嶸", 12, "巆", 6, "巎", 12, "巜巟巠巣巤巪巬巭"], ["8e80", "巰巵巶巸", 4, "巿帀帄帇帉帊帋帍帎帒帓帗帞", 7, "帨", 4, "帯帰帲", 4, "帹帺帾帿幀幁幃幆", 5, "幍", 6, "幖", 4, "幜幝幟幠幣", 14, "幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨", 4, "庮", 4, "庴庺庻庼庽庿", 6], ["8f40", "廆廇廈廋", 5, "廔廕廗廘廙廚廜", 11, "廩廫", 8, "廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"], ["8f80", "弨弫弬弮弰弲", 6, "弻弽弾弿彁", 14, "彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢", 5, "復徫徬徯", 5, "徶徸徹徺徻徾", 4, "忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"], ["9040", "怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰", 4, "怶", 4, "怽怾恀恄", 6, "恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"], ["9080", "悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽", 7, "惇惈惉惌", 4, "惒惓惔惖惗惙惛惞惡", 4, "惪惱惲惵惷惸惻", 4, "愂愃愄愅愇愊愋愌愐", 4, "愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬", 18, "慀", 6], ["9140", "慇慉態慍慏慐慒慓慔慖", 6, "慞慟慠慡慣慤慥慦慩", 6, "慱慲慳慴慶慸", 18, "憌憍憏", 4, "憕"], ["9180", "憖", 6, "憞", 8, "憪憫憭", 9, "憸", 5, "憿懀懁懃", 4, "應懌", 4, "懓懕", 16, "懧", 13, "懶", 8, "戀", 5, "戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸", 4, "扂扄扅扆扊"], ["9240", "扏扐払扖扗扙扚扜", 6, "扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋", 5, "抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"], ["9280", "拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳", 5, "挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖", 7, "捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙", 6, "採掤掦掫掯掱掲掵掶掹掻掽掿揀"], ["9340", "揁揂揃揅揇揈揊揋揌揑揓揔揕揗", 6, "揟揢揤", 4, "揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆", 4, "損搎搑搒搕", 5, "搝搟搢搣搤"], ["9380", "搥搧搨搩搫搮", 5, "搵", 4, "搻搼搾摀摂摃摉摋", 6, "摓摕摖摗摙", 4, "摟", 7, "摨摪摫摬摮", 9, "摻", 6, "撃撆撈", 8, "撓撔撗撘撚撛撜撝撟", 4, "撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆", 6, "擏擑擓擔擕擖擙據"], ["9440", "擛擜擝擟擠擡擣擥擧", 24, "攁", 7, "攊", 7, "攓", 4, "攙", 8], ["9480", "攢攣攤攦", 4, "攬攭攰攱攲攳攷攺攼攽敀", 4, "敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數", 14, "斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱", 7, "斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘", 7, "旡旣旤旪旫"], ["9540", "旲旳旴旵旸旹旻", 4, "昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷", 4, "昽昿晀時晄", 6, "晍晎晐晑晘"], ["9580", "晙晛晜晝晞晠晢晣晥晧晩", 4, "晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘", 4, "暞", 8, "暩", 4, "暯", 4, "暵暶暷暸暺暻暼暽暿", 25, "曚曞", 7, "曧曨曪", 5, "曱曵曶書曺曻曽朁朂會"], ["9640", "朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠", 5, "朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗", 4, "杝杢杣杤杦杧杫杬杮東杴杶"], ["9680", "杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹", 7, "柂柅", 9, "柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵", 7, "柾栁栂栃栄栆栍栐栒栔栕栘", 4, "栞栟栠栢", 6, "栫", 6, "栴栵栶栺栻栿桇桋桍桏桒桖", 5], ["9740", "桜桝桞桟桪桬", 7, "桵桸", 8, "梂梄梇", 7, "梐梑梒梔梕梖梘", 9, "梣梤梥梩梪梫梬梮梱梲梴梶梷梸"], ["9780", "梹", 6, "棁棃", 5, "棊棌棎棏棐棑棓棔棖棗棙棛", 4, "棡棢棤", 9, "棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆", 4, "椌椏椑椓", 11, "椡椢椣椥", 7, "椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃", 16, "楕楖楘楙楛楜楟"], ["9840", "楡楢楤楥楧楨楩楪楬業楯楰楲", 4, "楺楻楽楾楿榁榃榅榊榋榌榎", 5, "榖榗榙榚榝", 9, "榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"], ["9880", "榾榿槀槂", 7, "構槍槏槑槒槓槕", 5, "槜槝槞槡", 11, "槮槯槰槱槳", 9, "槾樀", 9, "樋", 11, "標", 5, "樠樢", 5, "権樫樬樭樮樰樲樳樴樶", 6, "樿", 4, "橅橆橈", 7, "橑", 6, "橚"], ["9940", "橜", 4, "橢橣橤橦", 10, "橲", 6, "橺橻橽橾橿檁檂檃檅", 8, "檏檒", 4, "檘", 7, "檡", 5], ["9980", "檧檨檪檭", 114, "欥欦欨", 6], ["9a40", "欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍", 11, "歚", 7, "歨歩歫", 13, "歺歽歾歿殀殅殈"], ["9a80", "殌殎殏殐殑殔殕殗殘殙殜", 4, "殢", 7, "殫", 7, "殶殸", 6, "毀毃毄毆", 4, "毌毎毐毑毘毚毜", 4, "毢", 7, "毬毭毮毰毱毲毴毶毷毸毺毻毼毾", 6, "氈", 4, "氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋", 4, "汑汒汓汖汘"], ["9b40", "汙汚汢汣汥汦汧汫", 4, "汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"], ["9b80", "泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟", 5, "洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽", 4, "涃涄涆涇涊涋涍涏涐涒涖", 4, "涜涢涥涬涭涰涱涳涴涶涷涹", 5, "淁淂淃淈淉淊"], ["9c40", "淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽", 7, "渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"], ["9c80", "渶渷渹渻", 7, "湅", 7, "湏湐湑湒湕湗湙湚湜湝湞湠", 10, "湬湭湯", 14, "満溁溂溄溇溈溊", 4, "溑", 6, "溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪", 5], ["9d40", "滰滱滲滳滵滶滷滸滺", 7, "漃漄漅漇漈漊", 4, "漐漑漒漖", 9, "漡漢漣漥漦漧漨漬漮漰漲漴漵漷", 6, "漿潀潁潂"], ["9d80", "潃潄潅潈潉潊潌潎", 9, "潙潚潛潝潟潠潡潣潤潥潧", 5, "潯潰潱潳潵潶潷潹潻潽", 6, "澅澆澇澊澋澏", 12, "澝澞澟澠澢", 4, "澨", 10, "澴澵澷澸澺", 5, "濁濃", 5, "濊", 6, "濓", 10, "濟濢濣濤濥"], ["9e40", "濦", 7, "濰", 32, "瀒", 7, "瀜", 6, "瀤", 6], ["9e80", "瀫", 9, "瀶瀷瀸瀺", 17, "灍灎灐", 13, "灟", 11, "灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞", 12, "炰炲炴炵炶為炾炿烄烅烆烇烉烋", 12, "烚"], ["9f40", "烜烝烞烠烡烢烣烥烪烮烰", 6, "烸烺烻烼烾", 10, "焋", 4, "焑焒焔焗焛", 10, "焧", 7, "焲焳焴"], ["9f80", "焵焷", 13, "煆煇煈煉煋煍煏", 12, "煝煟", 4, "煥煩", 4, "煯煰煱煴煵煶煷煹煻煼煾", 5, "熅", 4, "熋熌熍熎熐熑熒熓熕熖熗熚", 4, "熡", 6, "熩熪熫熭", 5, "熴熶熷熸熺", 8, "燄", 9, "燏", 4], ["a040", "燖", 9, "燡燢燣燤燦燨", 5, "燯", 9, "燺", 11, "爇", 19], ["a080", "爛爜爞", 9, "爩爫爭爮爯爲爳爴爺爼爾牀", 6, "牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅", 4, "犌犎犐犑犓", 11, "犠", 11, "犮犱犲犳犵犺", 6, "狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"], ["a1a1", "　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈", 7, "〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"], ["a2a1", "ⅰ", 9], ["a2b1", "⒈", 19, "⑴", 19, "①", 9], ["a2e5", "㈠", 9], ["a2f1", "Ⅰ", 11], ["a3a1", "！＂＃￥％", 88, "￣"], ["a4a1", "ぁ", 82], ["a5a1", "ァ", 85], ["a6a1", "Α", 16, "Σ", 6], ["a6c1", "α", 16, "σ", 6], ["a6e0", "︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"], ["a6ee", "︻︼︷︸︱"], ["a6f4", "︳︴"], ["a7a1", "А", 5, "ЁЖ", 25], ["a7d1", "а", 5, "ёж", 25], ["a840", "ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═", 35, "▁", 6], ["a880", "█", 7, "▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"], ["a8a1", "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"], ["a8bd", "ńň"], ["a8c0", "ɡ"], ["a8c5", "ㄅ", 36], ["a940", "〡", 8, "㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"], ["a959", "℡㈱"], ["a95c", "‐"], ["a960", "ー゛゜ヽヾ〆ゝゞ﹉", 9, "﹔﹕﹖﹗﹙", 8], ["a980", "﹢", 4, "﹨﹩﹪﹫"], ["a996", "〇"], ["a9a4", "─", 75], ["aa40", "狜狝狟狢", 5, "狪狫狵狶狹狽狾狿猀猂猄", 5, "猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀", 8], ["aa80", "獉獊獋獌獎獏獑獓獔獕獖獘", 7, "獡", 10, "獮獰獱"], ["ab40", "獲", 11, "獿", 4, "玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣", 5, "玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃", 4], ["ab80", "珋珌珎珒", 6, "珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳", 4], ["ac40", "珸", 10, "琄琇琈琋琌琍琎琑", 8, "琜", 5, "琣琤琧琩琫琭琯琱琲琷", 4, "琽琾琿瑀瑂", 11], ["ac80", "瑎", 6, "瑖瑘瑝瑠", 12, "瑮瑯瑱", 4, "瑸瑹瑺"], ["ad40", "瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑", 10, "璝璟", 7, "璪", 15, "璻", 12], ["ad80", "瓈", 9, "瓓", 8, "瓝瓟瓡瓥瓧", 6, "瓰瓱瓲"], ["ae40", "瓳瓵瓸", 6, "甀甁甂甃甅", 7, "甎甐甒甔甕甖甗甛甝甞甠", 4, "甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"], ["ae80", "畝", 7, "畧畨畩畫", 6, "畳畵當畷畺", 4, "疀疁疂疄疅疇"], ["af40", "疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦", 4, "疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"], ["af80", "瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"], ["b040", "癅", 6, "癎", 5, "癕癗", 4, "癝癟癠癡癢癤", 6, "癬癭癮癰", 7, "癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"], ["b080", "皜", 7, "皥", 8, "皯皰皳皵", 9, "盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"], ["b140", "盄盇盉盋盌盓盕盙盚盜盝盞盠", 4, "盦", 7, "盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎", 10, "眛眜眝眞眡眣眤眥眧眪眫"], ["b180", "眬眮眰", 4, "眹眻眽眾眿睂睄睅睆睈", 7, "睒", 7, "睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"], ["b240", "睝睞睟睠睤睧睩睪睭", 11, "睺睻睼瞁瞂瞃瞆", 5, "瞏瞐瞓", 11, "瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶", 4], ["b280", "瞼瞾矀", 12, "矎", 8, "矘矙矚矝", 4, "矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"], ["b340", "矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃", 5, "砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"], ["b380", "硛硜硞", 11, "硯", 7, "硸硹硺硻硽", 6, "场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"], ["b440", "碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨", 7, "碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚", 9], ["b480", "磤磥磦磧磩磪磫磭", 4, "磳磵磶磸磹磻", 5, "礂礃礄礆", 6, "础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"], ["b540", "礍", 5, "礔", 9, "礟", 4, "礥", 14, "礵", 4, "礽礿祂祃祄祅祇祊", 8, "祔祕祘祙祡祣"], ["b580", "祤祦祩祪祫祬祮祰", 6, "祹祻", 4, "禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"], ["b640", "禓", 6, "禛", 11, "禨", 10, "禴", 4, "禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙", 5, "秠秡秢秥秨秪"], ["b680", "秬秮秱", 6, "秹秺秼秾秿稁稄稅稇稈稉稊稌稏", 4, "稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"], ["b740", "稝稟稡稢稤", 14, "稴稵稶稸稺稾穀", 5, "穇", 9, "穒", 4, "穘", 16], ["b780", "穩", 6, "穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"], ["b840", "窣窤窧窩窪窫窮", 4, "窴", 10, "竀", 10, "竌", 9, "竗竘竚竛竜竝竡竢竤竧", 5, "竮竰竱竲竳"], ["b880", "竴", 4, "竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"], ["b940", "笯笰笲笴笵笶笷笹笻笽笿", 5, "筆筈筊筍筎筓筕筗筙筜筞筟筡筣", 10, "筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆", 6, "箎箏"], ["b980", "箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹", 7, "篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"], ["ba40", "篅篈築篊篋篍篎篏篐篒篔", 4, "篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲", 4, "篸篹篺篻篽篿", 7, "簈簉簊簍簎簐", 5, "簗簘簙"], ["ba80", "簚", 4, "簠", 5, "簨簩簫", 12, "簹", 5, "籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"], ["bb40", "籃", 9, "籎", 36, "籵", 5, "籾", 9], ["bb80", "粈粊", 6, "粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴", 4, "粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"], ["bc40", "粿糀糂糃糄糆糉糋糎", 6, "糘糚糛糝糞糡", 6, "糩", 5, "糰", 7, "糹糺糼", 13, "紋", 5], ["bc80", "紑", 14, "紡紣紤紥紦紨紩紪紬紭紮細", 6, "肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"], ["bd40", "紷", 54, "絯", 7], ["bd80", "絸", 32, "健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"], ["be40", "継", 12, "綧", 6, "綯", 42], ["be80", "線", 32, "尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"], ["bf40", "緻", 62], ["bf80", "縺縼", 4, "繂", 4, "繈", 21, "俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"], ["c040", "繞", 35, "纃", 23, "纜纝纞"], ["c080", "纮纴纻纼绖绤绬绹缊缐缞缷缹缻", 6, "罃罆", 9, "罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"], ["c140", "罖罙罛罜罝罞罠罣", 4, "罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂", 7, "羋羍羏", 4, "羕", 4, "羛羜羠羢羣羥羦羨", 6, "羱"], ["c180", "羳", 4, "羺羻羾翀翂翃翄翆翇翈翉翋翍翏", 4, "翖翗翙", 5, "翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"], ["c240", "翤翧翨翪翫翬翭翯翲翴", 6, "翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫", 5, "耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"], ["c280", "聙聛", 13, "聫", 5, "聲", 11, "隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"], ["c340", "聾肁肂肅肈肊肍", 5, "肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇", 4, "胏", 6, "胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"], ["c380", "脌脕脗脙脛脜脝脟", 12, "脭脮脰脳脴脵脷脹", 4, "脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"], ["c440", "腀", 5, "腇腉腍腎腏腒腖腗腘腛", 4, "腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃", 4, "膉膋膌膍膎膐膒", 5, "膙膚膞", 4, "膤膥"], ["c480", "膧膩膫", 7, "膴", 5, "膼膽膾膿臄臅臇臈臉臋臍", 6, "摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"], ["c540", "臔", 14, "臤臥臦臨臩臫臮", 4, "臵", 5, "臽臿舃與", 4, "舎舏舑舓舕", 5, "舝舠舤舥舦舧舩舮舲舺舼舽舿"], ["c580", "艀艁艂艃艅艆艈艊艌艍艎艐", 7, "艙艛艜艝艞艠", 7, "艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"], ["c640", "艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"], ["c680", "苺苼", 4, "茊茋茍茐茒茓茖茘茙茝", 9, "茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"], ["c740", "茾茿荁荂荄荅荈荊", 4, "荓荕", 4, "荝荢荰", 6, "荹荺荾", 6, "莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡", 6, "莬莭莮"], ["c780", "莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"], ["c840", "菮華菳", 4, "菺菻菼菾菿萀萂萅萇萈萉萊萐萒", 5, "萙萚萛萞", 5, "萩", 7, "萲", 5, "萹萺萻萾", 7, "葇葈葉"], ["c880", "葊", 6, "葒", 4, "葘葝葞葟葠葢葤", 4, "葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"], ["c940", "葽", 4, "蒃蒄蒅蒆蒊蒍蒏", 7, "蒘蒚蒛蒝蒞蒟蒠蒢", 12, "蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"], ["c980", "蓘", 4, "蓞蓡蓢蓤蓧", 4, "蓭蓮蓯蓱", 10, "蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"], ["ca40", "蔃", 8, "蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢", 8, "蔭", 9, "蔾", 4, "蕄蕅蕆蕇蕋", 10], ["ca80", "蕗蕘蕚蕛蕜蕝蕟", 4, "蕥蕦蕧蕩", 8, "蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"], ["cb40", "薂薃薆薈", 6, "薐", 10, "薝", 6, "薥薦薧薩薫薬薭薱", 5, "薸薺", 6, "藂", 6, "藊", 4, "藑藒"], ["cb80", "藔藖", 5, "藝", 6, "藥藦藧藨藪", 14, "恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"], ["cc40", "藹藺藼藽藾蘀", 4, "蘆", 10, "蘒蘓蘔蘕蘗", 15, "蘨蘪", 13, "蘹蘺蘻蘽蘾蘿虀"], ["cc80", "虁", 11, "虒虓處", 4, "虛虜虝號虠虡虣", 7, "獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"], ["cd40", "虭虯虰虲", 6, "蚃", 6, "蚎", 4, "蚔蚖", 5, "蚞", 4, "蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻", 4, "蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"], ["cd80", "蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"], ["ce40", "蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀", 6, "蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚", 5, "蝡蝢蝦", 7, "蝯蝱蝲蝳蝵"], ["ce80", "蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎", 4, "螔螕螖螘", 6, "螠", 4, "巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"], ["cf40", "螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁", 4, "蟇蟈蟉蟌", 4, "蟔", 6, "蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯", 9], ["cf80", "蟺蟻蟼蟽蟿蠀蠁蠂蠄", 5, "蠋", 7, "蠔蠗蠘蠙蠚蠜", 4, "蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"], ["d040", "蠤", 13, "蠳", 5, "蠺蠻蠽蠾蠿衁衂衃衆", 5, "衎", 5, "衕衖衘衚", 6, "衦衧衪衭衯衱衳衴衵衶衸衹衺"], ["d080", "衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗", 4, "袝", 4, "袣袥", 5, "小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"], ["d140", "袬袮袯袰袲", 4, "袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚", 4, "裠裡裦裧裩", 6, "裲裵裶裷裺裻製裿褀褁褃", 5], ["d180", "褉褋", 4, "褑褔", 4, "褜", 4, "褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"], ["d240", "褸", 8, "襂襃襅", 24, "襠", 5, "襧", 19, "襼"], ["d280", "襽襾覀覂覄覅覇", 26, "摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"], ["d340", "覢", 30, "觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴", 6], ["d380", "觻", 4, "訁", 5, "計", 21, "印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"], ["d440", "訞", 31, "訿", 8, "詉", 21], ["d480", "詟", 25, "詺", 6, "浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"], ["d540", "誁", 7, "誋", 7, "誔", 46], ["d580", "諃", 32, "铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"], ["d640", "諤", 34, "謈", 27], ["d680", "謤謥謧", 30, "帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"], ["d740", "譆", 31, "譧", 4, "譭", 25], ["d780", "讇", 24, "讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"], ["d840", "谸", 8, "豂豃豄豅豈豊豋豍", 7, "豖豗豘豙豛", 5, "豣", 6, "豬", 6, "豴豵豶豷豻", 6, "貃貄貆貇"], ["d880", "貈貋貍", 6, "貕貖貗貙", 20, "亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"], ["d940", "貮", 62], ["d980", "賭", 32, "佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"], ["da40", "贎", 14, "贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸", 8, "趂趃趆趇趈趉趌", 4, "趒趓趕", 9, "趠趡"], ["da80", "趢趤", 12, "趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"], ["db40", "跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾", 6, "踆踇踈踋踍踎踐踑踒踓踕", 7, "踠踡踤", 4, "踫踭踰踲踳踴踶踷踸踻踼踾"], ["db80", "踿蹃蹅蹆蹌", 4, "蹓", 5, "蹚", 11, "蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"], ["dc40", "蹳蹵蹷", 4, "蹽蹾躀躂躃躄躆躈", 6, "躑躒躓躕", 6, "躝躟", 11, "躭躮躰躱躳", 6, "躻", 7], ["dc80", "軃", 10, "軏", 21, "堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"], ["dd40", "軥", 62], ["dd80", "輤", 32, "荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"], ["de40", "轅", 32, "轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"], ["de80", "迉", 4, "迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"], ["df40", "這逜連逤逥逧", 5, "逰", 4, "逷逹逺逽逿遀遃遅遆遈", 4, "過達違遖遙遚遜", 5, "遤遦遧適遪遫遬遯", 4, "遶", 6, "遾邁"], ["df80", "還邅邆邇邉邊邌", 4, "邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"], ["e040", "郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅", 19, "鄚鄛鄜"], ["e080", "鄝鄟鄠鄡鄤", 10, "鄰鄲", 6, "鄺", 8, "酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"], ["e140", "酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀", 4, "醆醈醊醎醏醓", 6, "醜", 5, "醤", 5, "醫醬醰醱醲醳醶醷醸醹醻"], ["e180", "醼", 10, "釈釋釐釒", 9, "針", 8, "帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"], ["e240", "釦", 62], ["e280", "鈥", 32, "狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧", 5, "饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"], ["e340", "鉆", 45, "鉵", 16], ["e380", "銆", 7, "銏", 24, "恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"], ["e440", "銨", 5, "銯", 24, "鋉", 31], ["e480", "鋩", 32, "洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"], ["e540", "錊", 51, "錿", 10], ["e580", "鍊", 31, "鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"], ["e640", "鍬", 34, "鎐", 27], ["e680", "鎬", 29, "鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"], ["e740", "鏎", 7, "鏗", 54], ["e780", "鐎", 32, "纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡", 6, "缪缫缬缭缯", 4, "缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"], ["e840", "鐯", 14, "鐿", 43, "鑬鑭鑮鑯"], ["e880", "鑰", 20, "钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"], ["e940", "锧锳锽镃镈镋镕镚镠镮镴镵長", 7, "門", 42], ["e980", "閫", 32, "椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"], ["ea40", "闌", 27, "闬闿阇阓阘阛阞阠阣", 6, "阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"], ["ea80", "陘陙陚陜陝陞陠陣陥陦陫陭", 4, "陳陸", 12, "隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"], ["eb40", "隌階隑隒隓隕隖隚際隝", 9, "隨", 7, "隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖", 9, "雡", 6, "雫"], ["eb80", "雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗", 4, "霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"], ["ec40", "霡", 8, "霫霬霮霯霱霳", 4, "霺霻霼霽霿", 18, "靔靕靗靘靚靜靝靟靣靤靦靧靨靪", 7], ["ec80", "靲靵靷", 4, "靽", 7, "鞆", 4, "鞌鞎鞏鞐鞓鞕鞖鞗鞙", 4, "臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"], ["ed40", "鞞鞟鞡鞢鞤", 6, "鞬鞮鞰鞱鞳鞵", 46], ["ed80", "韤韥韨韮", 4, "韴韷", 23, "怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"], ["ee40", "頏", 62], ["ee80", "顎", 32, "睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶", 4, "钼钽钿铄铈", 6, "铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"], ["ef40", "顯", 5, "颋颎颒颕颙颣風", 37, "飏飐飔飖飗飛飜飝飠", 4], ["ef80", "飥飦飩", 30, "铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒", 4, "锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤", 8, "镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"], ["f040", "餈", 4, "餎餏餑", 28, "餯", 26], ["f080", "饊", 9, "饖", 12, "饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨", 4, "鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦", 6, "鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"], ["f140", "馌馎馚", 10, "馦馧馩", 47], ["f180", "駙", 32, "瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"], ["f240", "駺", 62], ["f280", "騹", 32, "颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"], ["f340", "驚", 17, "驲骃骉骍骎骔骕骙骦骩", 6, "骲骳骴骵骹骻骽骾骿髃髄髆", 4, "髍髎髏髐髒體髕髖髗髙髚髛髜"], ["f380", "髝髞髠髢髣髤髥髧髨髩髪髬髮髰", 8, "髺髼", 6, "鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"], ["f440", "鬇鬉", 5, "鬐鬑鬒鬔", 10, "鬠鬡鬢鬤", 10, "鬰鬱鬳", 7, "鬽鬾鬿魀魆魊魋魌魎魐魒魓魕", 5], ["f480", "魛", 32, "簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"], ["f540", "魼", 62], ["f580", "鮻", 32, "酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"], ["f640", "鯜", 62], ["f680", "鰛", 32, "觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅", 5, "龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞", 5, "鲥", 4, "鲫鲭鲮鲰", 7, "鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"], ["f740", "鰼", 62], ["f780", "鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾", 4, "鳈鳉鳑鳒鳚鳛鳠鳡鳌", 4, "鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"], ["f840", "鳣", 62], ["f880", "鴢", 32], ["f940", "鵃", 62], ["f980", "鶂", 32], ["fa40", "鶣", 62], ["fa80", "鷢", 32], ["fb40", "鸃", 27, "鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴", 9, "麀"], ["fb80", "麁麃麄麅麆麉麊麌", 5, "麔", 8, "麞麠", 5, "麧麨麩麪"], ["fc40", "麫", 8, "麵麶麷麹麺麼麿", 4, "黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰", 8, "黺黽黿", 6], ["fc80", "鼆", 4, "鼌鼏鼑鼒鼔鼕鼖鼘鼚", 5, "鼡鼣", 8, "鼭鼮鼰鼱"], ["fd40", "鼲", 4, "鼸鼺鼼鼿", 4, "齅", 10, "齒", 38], ["fd80", "齹", 5, "龁龂龍", 11, "龜龝龞龡", 4, "郎凉秊裏隣"], ["fe40", "兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]];
  }, {}],
  "p4xS": [function (require, module, exports) {
    module.exports = [["a140", "", 62], ["a180", "", 32], ["a240", "", 62], ["a280", "", 32], ["a2ab", "", 5], ["a2e3", "€"], ["a2ef", ""], ["a2fd", ""], ["a340", "", 62], ["a380", "", 31, "　"], ["a440", "", 62], ["a480", "", 32], ["a4f4", "", 10], ["a540", "", 62], ["a580", "", 32], ["a5f7", "", 7], ["a640", "", 62], ["a680", "", 32], ["a6b9", "", 7], ["a6d9", "", 6], ["a6ec", ""], ["a6f3", ""], ["a6f6", "", 8], ["a740", "", 62], ["a780", "", 32], ["a7c2", "", 14], ["a7f2", "", 12], ["a896", "", 10], ["a8bc", "ḿ"], ["a8bf", "ǹ"], ["a8c1", ""], ["a8ea", "", 20], ["a958", ""], ["a95b", ""], ["a95d", ""], ["a989", "〾⿰", 11], ["a997", "", 12], ["a9f0", "", 14], ["aaa1", "", 93], ["aba1", "", 93], ["aca1", "", 93], ["ada1", "", 93], ["aea1", "", 93], ["afa1", "", 93], ["d7fa", "", 4], ["f8a1", "", 93], ["f9a1", "", 93], ["faa1", "", 93], ["fba1", "", 93], ["fca1", "", 93], ["fda1", "", 93], ["fe50", "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"], ["fe80", "䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓", 6, "䶮", 93], ["8135f437", ""]];
  }, {}],
  "UacA": [function (require, module, exports) {
    module.exports = {
      uChars: [128, 165, 169, 178, 184, 216, 226, 235, 238, 244, 248, 251, 253, 258, 276, 284, 300, 325, 329, 334, 364, 463, 465, 467, 469, 471, 473, 475, 477, 506, 594, 610, 712, 716, 730, 930, 938, 962, 970, 1026, 1104, 1106, 8209, 8215, 8218, 8222, 8231, 8241, 8244, 8246, 8252, 8365, 8452, 8454, 8458, 8471, 8482, 8556, 8570, 8596, 8602, 8713, 8720, 8722, 8726, 8731, 8737, 8740, 8742, 8748, 8751, 8760, 8766, 8777, 8781, 8787, 8802, 8808, 8816, 8854, 8858, 8870, 8896, 8979, 9322, 9372, 9548, 9588, 9616, 9622, 9634, 9652, 9662, 9672, 9676, 9680, 9702, 9735, 9738, 9793, 9795, 11906, 11909, 11913, 11917, 11928, 11944, 11947, 11951, 11956, 11960, 11964, 11979, 12284, 12292, 12312, 12319, 12330, 12351, 12436, 12447, 12535, 12543, 12586, 12842, 12850, 12964, 13200, 13215, 13218, 13253, 13263, 13267, 13270, 13384, 13428, 13727, 13839, 13851, 14617, 14703, 14801, 14816, 14964, 15183, 15471, 15585, 16471, 16736, 17208, 17325, 17330, 17374, 17623, 17997, 18018, 18212, 18218, 18301, 18318, 18760, 18811, 18814, 18820, 18823, 18844, 18848, 18872, 19576, 19620, 19738, 19887, 40870, 59244, 59336, 59367, 59413, 59417, 59423, 59431, 59437, 59443, 59452, 59460, 59478, 59493, 63789, 63866, 63894, 63976, 63986, 64016, 64018, 64021, 64025, 64034, 64037, 64042, 65074, 65093, 65107, 65112, 65127, 65132, 65375, 65510, 65536],
      gbChars: [0, 36, 38, 45, 50, 81, 89, 95, 96, 100, 103, 104, 105, 109, 126, 133, 148, 172, 175, 179, 208, 306, 307, 308, 309, 310, 311, 312, 313, 341, 428, 443, 544, 545, 558, 741, 742, 749, 750, 805, 819, 820, 7922, 7924, 7925, 7927, 7934, 7943, 7944, 7945, 7950, 8062, 8148, 8149, 8152, 8164, 8174, 8236, 8240, 8262, 8264, 8374, 8380, 8381, 8384, 8388, 8390, 8392, 8393, 8394, 8396, 8401, 8406, 8416, 8419, 8424, 8437, 8439, 8445, 8482, 8485, 8496, 8521, 8603, 8936, 8946, 9046, 9050, 9063, 9066, 9076, 9092, 9100, 9108, 9111, 9113, 9131, 9162, 9164, 9218, 9219, 11329, 11331, 11334, 11336, 11346, 11361, 11363, 11366, 11370, 11372, 11375, 11389, 11682, 11686, 11687, 11692, 11694, 11714, 11716, 11723, 11725, 11730, 11736, 11982, 11989, 12102, 12336, 12348, 12350, 12384, 12393, 12395, 12397, 12510, 12553, 12851, 12962, 12973, 13738, 13823, 13919, 13933, 14080, 14298, 14585, 14698, 15583, 15847, 16318, 16434, 16438, 16481, 16729, 17102, 17122, 17315, 17320, 17402, 17418, 17859, 17909, 17911, 17915, 17916, 17936, 17939, 17961, 18664, 18703, 18814, 18962, 19043, 33469, 33470, 33471, 33484, 33485, 33490, 33497, 33501, 33505, 33513, 33520, 33536, 33550, 37845, 37921, 37948, 38029, 38038, 38064, 38065, 38066, 38069, 38075, 38076, 38078, 39108, 39109, 39113, 39114, 39115, 39116, 39265, 39394, 189e3]
    };
  }, {}],
  "BZv6": [function (require, module, exports) {
    module.exports = [["0", "\0", 127], ["8141", "갂갃갅갆갋", 4, "갘갞갟갡갢갣갥", 6, "갮갲갳갴"], ["8161", "갵갶갷갺갻갽갾갿걁", 9, "걌걎", 5, "걕"], ["8181", "걖걗걙걚걛걝", 18, "걲걳걵걶걹걻", 4, "겂겇겈겍겎겏겑겒겓겕", 6, "겞겢", 5, "겫겭겮겱", 6, "겺겾겿곀곂곃곅곆곇곉곊곋곍", 7, "곖곘", 7, "곢곣곥곦곩곫곭곮곲곴곷", 4, "곾곿괁괂괃괅괇", 4, "괎괐괒괓"], ["8241", "괔괕괖괗괙괚괛괝괞괟괡", 7, "괪괫괮", 5], ["8261", "괶괷괹괺괻괽", 6, "굆굈굊", 5, "굑굒굓굕굖굗"], ["8281", "굙", 7, "굢굤", 7, "굮굯굱굲굷굸굹굺굾궀궃", 4, "궊궋궍궎궏궑", 10, "궞", 5, "궥", 17, "궸", 7, "귂귃귅귆귇귉", 6, "귒귔", 7, "귝귞귟귡귢귣귥", 18], ["8341", "귺귻귽귾긂", 5, "긊긌긎", 5, "긕", 7], ["8361", "긝", 18, "긲긳긵긶긹긻긼"], ["8381", "긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗", 4, "깞깢깣깤깦깧깪깫깭깮깯깱", 6, "깺깾", 5, "꺆", 5, "꺍", 46, "꺿껁껂껃껅", 6, "껎껒", 5, "껚껛껝", 8], ["8441", "껦껧껩껪껬껮", 5, "껵껶껷껹껺껻껽", 8], ["8461", "꼆꼉꼊꼋꼌꼎꼏꼑", 18], ["8481", "꼤", 7, "꼮꼯꼱꼳꼵", 6, "꼾꽀꽄꽅꽆꽇꽊", 5, "꽑", 10, "꽞", 5, "꽦", 18, "꽺", 5, "꾁꾂꾃꾅꾆꾇꾉", 6, "꾒꾓꾔꾖", 5, "꾝", 26, "꾺꾻꾽꾾"], ["8541", "꾿꿁", 5, "꿊꿌꿏", 4, "꿕", 6, "꿝", 4], ["8561", "꿢", 5, "꿪", 5, "꿲꿳꿵꿶꿷꿹", 6, "뀂뀃"], ["8581", "뀅", 6, "뀍뀎뀏뀑뀒뀓뀕", 6, "뀞", 9, "뀩", 26, "끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞", 29, "끾끿낁낂낃낅", 6, "낎낐낒", 5, "낛낝낞낣낤"], ["8641", "낥낦낧낪낰낲낶낷낹낺낻낽", 6, "냆냊", 5, "냒"], ["8661", "냓냕냖냗냙", 6, "냡냢냣냤냦", 10], ["8681", "냱", 22, "넊넍넎넏넑넔넕넖넗넚넞", 4, "넦넧넩넪넫넭", 6, "넶넺", 5, "녂녃녅녆녇녉", 6, "녒녓녖녗녙녚녛녝녞녟녡", 22, "녺녻녽녾녿놁놃", 4, "놊놌놎놏놐놑놕놖놗놙놚놛놝"], ["8741", "놞", 9, "놩", 15], ["8761", "놹", 18, "뇍뇎뇏뇑뇒뇓뇕"], ["8781", "뇖", 5, "뇞뇠", 7, "뇪뇫뇭뇮뇯뇱", 7, "뇺뇼뇾", 5, "눆눇눉눊눍", 6, "눖눘눚", 5, "눡", 18, "눵", 6, "눽", 26, "뉙뉚뉛뉝뉞뉟뉡", 6, "뉪", 4], ["8841", "뉯", 4, "뉶", 5, "뉽", 6, "늆늇늈늊", 4], ["8861", "늏늒늓늕늖늗늛", 4, "늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"], ["8881", "늸", 15, "닊닋닍닎닏닑닓", 4, "닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉", 6, "댒댖", 5, "댝", 54, "덗덙덚덝덠덡덢덣"], ["8941", "덦덨덪덬덭덯덲덳덵덶덷덹", 6, "뎂뎆", 5, "뎍"], ["8961", "뎎뎏뎑뎒뎓뎕", 10, "뎢", 5, "뎩뎪뎫뎭"], ["8981", "뎮", 21, "돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩", 18, "돽", 18, "됑", 6, "됙됚됛됝됞됟됡", 6, "됪됬", 7, "됵", 15], ["8a41", "둅", 10, "둒둓둕둖둗둙", 6, "둢둤둦"], ["8a61", "둧", 4, "둭", 18, "뒁뒂"], ["8a81", "뒃", 4, "뒉", 19, "뒞", 5, "뒥뒦뒧뒩뒪뒫뒭", 7, "뒶뒸뒺", 5, "듁듂듃듅듆듇듉", 6, "듑듒듓듔듖", 5, "듞듟듡듢듥듧", 4, "듮듰듲", 5, "듹", 26, "딖딗딙딚딝"], ["8b41", "딞", 5, "딦딫", 4, "딲딳딵딶딷딹", 6, "땂땆"], ["8b61", "땇땈땉땊땎땏땑땒땓땕", 6, "땞땢", 8], ["8b81", "땫", 52, "떢떣떥떦떧떩떬떭떮떯떲떶", 4, "떾떿뗁뗂뗃뗅", 6, "뗎뗒", 5, "뗙", 18, "뗭", 18], ["8c41", "똀", 15, "똒똓똕똖똗똙", 4], ["8c61", "똞", 6, "똦", 5, "똭", 6, "똵", 5], ["8c81", "똻", 12, "뙉", 26, "뙥뙦뙧뙩", 50, "뚞뚟뚡뚢뚣뚥", 5, "뚭뚮뚯뚰뚲", 16], ["8d41", "뛃", 16, "뛕", 8], ["8d61", "뛞", 17, "뛱뛲뛳뛵뛶뛷뛹뛺"], ["8d81", "뛻", 4, "뜂뜃뜄뜆", 33, "뜪뜫뜭뜮뜱", 6, "뜺뜼", 7, "띅띆띇띉띊띋띍", 6, "띖", 9, "띡띢띣띥띦띧띩", 6, "띲띴띶", 5, "띾띿랁랂랃랅", 6, "랎랓랔랕랚랛랝랞"], ["8e41", "랟랡", 6, "랪랮", 5, "랶랷랹", 8], ["8e61", "럂", 4, "럈럊", 19], ["8e81", "럞", 13, "럮럯럱럲럳럵", 6, "럾렂", 4, "렊렋렍렎렏렑", 6, "렚렜렞", 5, "렦렧렩렪렫렭", 6, "렶렺", 5, "롁롂롃롅", 11, "롒롔", 7, "롞롟롡롢롣롥", 6, "롮롰롲", 5, "롹롺롻롽", 7], ["8f41", "뢅", 7, "뢎", 17], ["8f61", "뢠", 7, "뢩", 6, "뢱뢲뢳뢵뢶뢷뢹", 4], ["8f81", "뢾뢿룂룄룆", 5, "룍룎룏룑룒룓룕", 7, "룞룠룢", 5, "룪룫룭룮룯룱", 6, "룺룼룾", 5, "뤅", 18, "뤙", 6, "뤡", 26, "뤾뤿륁륂륃륅", 6, "륍륎륐륒", 5], ["9041", "륚륛륝륞륟륡", 6, "륪륬륮", 5, "륶륷륹륺륻륽"], ["9061", "륾", 5, "릆릈릋릌릏", 15], ["9081", "릟", 12, "릮릯릱릲릳릵", 6, "릾맀맂", 5, "맊맋맍맓", 4, "맚맜맟맠맢맦맧맩맪맫맭", 6, "맶맻", 4, "먂", 5, "먉", 11, "먖", 33, "먺먻먽먾먿멁멃멄멅멆"], ["9141", "멇멊멌멏멐멑멒멖멗멙멚멛멝", 6, "멦멪", 5], ["9161", "멲멳멵멶멷멹", 9, "몆몈몉몊몋몍", 5], ["9181", "몓", 20, "몪몭몮몯몱몳", 4, "몺몼몾", 5, "뫅뫆뫇뫉", 14, "뫚", 33, "뫽뫾뫿묁묂묃묅", 7, "묎묐묒", 5, "묙묚묛묝묞묟묡", 6], ["9241", "묨묪묬", 7, "묷묹묺묿", 4, "뭆뭈뭊뭋뭌뭎뭑뭒"], ["9261", "뭓뭕뭖뭗뭙", 7, "뭢뭤", 7, "뭭", 4], ["9281", "뭲", 21, "뮉뮊뮋뮍뮎뮏뮑", 18, "뮥뮦뮧뮩뮪뮫뮭", 6, "뮵뮶뮸", 7, "믁믂믃믅믆믇믉", 6, "믑믒믔", 35, "믺믻믽믾밁"], ["9341", "밃", 4, "밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"], ["9361", "밶밷밹", 6, "뱂뱆뱇뱈뱊뱋뱎뱏뱑", 8], ["9381", "뱚뱛뱜뱞", 37, "벆벇벉벊벍벏", 4, "벖벘벛", 4, "벢벣벥벦벩", 6, "벲벶", 5, "벾벿볁볂볃볅", 7, "볎볒볓볔볖볗볙볚볛볝", 22, "볷볹볺볻볽"], ["9441", "볾", 5, "봆봈봊", 5, "봑봒봓봕", 8], ["9461", "봞", 5, "봥", 6, "봭", 12], ["9481", "봺", 5, "뵁", 6, "뵊뵋뵍뵎뵏뵑", 6, "뵚", 9, "뵥뵦뵧뵩", 22, "붂붃붅붆붋", 4, "붒붔붖붗붘붛붝", 6, "붥", 10, "붱", 6, "붹", 24], ["9541", "뷒뷓뷖뷗뷙뷚뷛뷝", 11, "뷪", 5, "뷱"], ["9561", "뷲뷳뷵뷶뷷뷹", 6, "븁븂븄븆", 5, "븎븏븑븒븓"], ["9581", "븕", 6, "븞븠", 35, "빆빇빉빊빋빍빏", 4, "빖빘빜빝빞빟빢빣빥빦빧빩빫", 4, "빲빶", 4, "빾빿뺁뺂뺃뺅", 6, "뺎뺒", 5, "뺚", 13, "뺩", 14], ["9641", "뺸", 23, "뻒뻓"], ["9661", "뻕뻖뻙", 6, "뻡뻢뻦", 5, "뻭", 8], ["9681", "뻶", 10, "뼂", 5, "뼊", 13, "뼚뼞", 33, "뽂뽃뽅뽆뽇뽉", 6, "뽒뽓뽔뽖", 44], ["9741", "뾃", 16, "뾕", 8], ["9761", "뾞", 17, "뾱", 7], ["9781", "뾹", 11, "뿆", 5, "뿎뿏뿑뿒뿓뿕", 6, "뿝뿞뿠뿢", 89, "쀽쀾쀿"], ["9841", "쁀", 16, "쁒", 5, "쁙쁚쁛"], ["9861", "쁝쁞쁟쁡", 6, "쁪", 15], ["9881", "쁺", 21, "삒삓삕삖삗삙", 6, "삢삤삦", 5, "삮삱삲삷", 4, "삾샂샃샄샆샇샊샋샍샎샏샑", 6, "샚샞", 5, "샦샧샩샪샫샭", 6, "샶샸샺", 5, "섁섂섃섅섆섇섉", 6, "섑섒섓섔섖", 5, "섡섢섥섨섩섪섫섮"], ["9941", "섲섳섴섵섷섺섻섽섾섿셁", 6, "셊셎", 5, "셖셗"], ["9961", "셙셚셛셝", 6, "셦셪", 5, "셱셲셳셵셶셷셹셺셻"], ["9981", "셼", 8, "솆", 5, "솏솑솒솓솕솗", 4, "솞솠솢솣솤솦솧솪솫솭솮솯솱", 11, "솾", 5, "쇅쇆쇇쇉쇊쇋쇍", 6, "쇕쇖쇙", 6, "쇡쇢쇣쇥쇦쇧쇩", 6, "쇲쇴", 7, "쇾쇿숁숂숃숅", 6, "숎숐숒", 5, "숚숛숝숞숡숢숣"], ["9a41", "숤숥숦숧숪숬숮숰숳숵", 16], ["9a61", "쉆쉇쉉", 6, "쉒쉓쉕쉖쉗쉙", 6, "쉡쉢쉣쉤쉦"], ["9a81", "쉧", 4, "쉮쉯쉱쉲쉳쉵", 6, "쉾슀슂", 5, "슊", 5, "슑", 6, "슙슚슜슞", 5, "슦슧슩슪슫슮", 5, "슶슸슺", 33, "싞싟싡싢싥", 5, "싮싰싲싳싴싵싷싺싽싾싿쌁", 6, "쌊쌋쌎쌏"], ["9b41", "쌐쌑쌒쌖쌗쌙쌚쌛쌝", 6, "쌦쌧쌪", 8], ["9b61", "쌳", 17, "썆", 7], ["9b81", "썎", 25, "썪썫썭썮썯썱썳", 4, "썺썻썾", 5, "쎅쎆쎇쎉쎊쎋쎍", 50, "쏁", 22, "쏚"], ["9c41", "쏛쏝쏞쏡쏣", 4, "쏪쏫쏬쏮", 5, "쏶쏷쏹", 5], ["9c61", "쏿", 8, "쐉", 6, "쐑", 9], ["9c81", "쐛", 8, "쐥", 6, "쐭쐮쐯쐱쐲쐳쐵", 6, "쐾", 9, "쑉", 26, "쑦쑧쑩쑪쑫쑭", 6, "쑶쑷쑸쑺", 5, "쒁", 18, "쒕", 6, "쒝", 12], ["9d41", "쒪", 13, "쒹쒺쒻쒽", 8], ["9d61", "쓆", 25], ["9d81", "쓠", 8, "쓪", 5, "쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂", 9, "씍씎씏씑씒씓씕", 6, "씝", 10, "씪씫씭씮씯씱", 6, "씺씼씾", 5, "앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩", 6, "앲앶", 5, "앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"], ["9e41", "얖얙얚얛얝얞얟얡", 7, "얪", 9, "얶"], ["9e61", "얷얺얿", 4, "엋엍엏엒엓엕엖엗엙", 6, "엢엤엦엧"], ["9e81", "엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑", 6, "옚옝", 6, "옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉", 6, "왒왖", 5, "왞왟왡", 10, "왭왮왰왲", 5, "왺왻왽왾왿욁", 6, "욊욌욎", 5, "욖욗욙욚욛욝", 6, "욦"], ["9f41", "욨욪", 5, "욲욳욵욶욷욻", 4, "웂웄웆", 5, "웎"], ["9f61", "웏웑웒웓웕", 6, "웞웟웢", 5, "웪웫웭웮웯웱웲"], ["9f81", "웳", 4, "웺웻웼웾", 5, "윆윇윉윊윋윍", 6, "윖윘윚", 5, "윢윣윥윦윧윩", 6, "윲윴윶윸윹윺윻윾윿읁읂읃읅", 4, "읋읎읐읙읚읛읝읞읟읡", 6, "읩읪읬", 7, "읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛", 4, "잢잧", 4, "잮잯잱잲잳잵잶잷"], ["a041", "잸잹잺잻잾쟂", 5, "쟊쟋쟍쟏쟑", 6, "쟙쟚쟛쟜"], ["a061", "쟞", 5, "쟥쟦쟧쟩쟪쟫쟭", 13], ["a081", "쟻", 4, "젂젃젅젆젇젉젋", 4, "젒젔젗", 4, "젞젟젡젢젣젥", 6, "젮젰젲", 5, "젹젺젻젽젾젿졁", 6, "졊졋졎", 5, "졕", 26, "졲졳졵졶졷졹졻", 4, "좂좄좈좉좊좎", 5, "좕", 7, "좞좠좢좣좤"], ["a141", "좥좦좧좩", 18, "좾좿죀죁"], ["a161", "죂죃죅죆죇죉죊죋죍", 6, "죖죘죚", 5, "죢죣죥"], ["a181", "죦", 14, "죶", 5, "죾죿줁줂줃줇", 4, "줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈", 9, "±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"], ["a241", "줐줒", 5, "줙", 18], ["a261", "줭", 6, "줵", 18], ["a281", "쥈", 7, "쥒쥓쥕쥖쥗쥙", 6, "쥢쥤", 7, "쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"], ["a341", "쥱쥲쥳쥵", 6, "쥽", 10, "즊즋즍즎즏"], ["a361", "즑", 6, "즚즜즞", 16], ["a381", "즯", 16, "짂짃짅짆짉짋", 4, "짒짔짗짘짛！", 58, "￦］", 32, "￣"], ["a441", "짞짟짡짣짥짦짨짩짪짫짮짲", 5, "짺짻짽짾짿쨁쨂쨃쨄"], ["a461", "쨅쨆쨇쨊쨎", 5, "쨕쨖쨗쨙", 12], ["a481", "쨦쨧쨨쨪", 28, "ㄱ", 93], ["a541", "쩇", 4, "쩎쩏쩑쩒쩓쩕", 6, "쩞쩢", 5, "쩩쩪"], ["a561", "쩫", 17, "쩾", 5, "쪅쪆"], ["a581", "쪇", 16, "쪙", 14, "ⅰ", 9], ["a5b0", "Ⅰ", 9], ["a5c1", "Α", 16, "Σ", 6], ["a5e1", "α", 16, "σ", 6], ["a641", "쪨", 19, "쪾쪿쫁쫂쫃쫅"], ["a661", "쫆", 5, "쫎쫐쫒쫔쫕쫖쫗쫚", 5, "쫡", 6], ["a681", "쫨쫩쫪쫫쫭", 6, "쫵", 18, "쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃", 7], ["a741", "쬋", 4, "쬑쬒쬓쬕쬖쬗쬙", 6, "쬢", 7], ["a761", "쬪", 22, "쭂쭃쭄"], ["a781", "쭅쭆쭇쭊쭋쭍쭎쭏쭑", 6, "쭚쭛쭜쭞", 5, "쭥", 7, "㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙", 9, "㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰", 9, "㎀", 4, "㎺", 5, "㎐", 4, "Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"], ["a841", "쭭", 10, "쭺", 14], ["a861", "쮉", 18, "쮝", 6], ["a881", "쮤", 19, "쮹", 11, "ÆÐªĦ"], ["a8a6", "Ĳ"], ["a8a8", "ĿŁØŒºÞŦŊ"], ["a8b1", "㉠", 27, "ⓐ", 25, "①", 14, "½⅓⅔¼¾⅛⅜⅝⅞"], ["a941", "쯅", 14, "쯕", 10], ["a961", "쯠쯡쯢쯣쯥쯦쯨쯪", 18], ["a981", "쯽", 14, "찎찏찑찒찓찕", 6, "찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀", 27, "⒜", 25, "⑴", 14, "¹²³⁴ⁿ₁₂₃₄"], ["aa41", "찥찦찪찫찭찯찱", 6, "찺찿", 4, "챆챇챉챊챋챍챎"], ["aa61", "챏", 4, "챖챚", 5, "챡챢챣챥챧챩", 6, "챱챲"], ["aa81", "챳챴챶", 29, "ぁ", 82], ["ab41", "첔첕첖첗첚첛첝첞첟첡", 6, "첪첮", 5, "첶첷첹"], ["ab61", "첺첻첽", 6, "쳆쳈쳊", 5, "쳑쳒쳓쳕", 5], ["ab81", "쳛", 8, "쳥", 6, "쳭쳮쳯쳱", 12, "ァ", 85], ["ac41", "쳾쳿촀촂", 5, "촊촋촍촎촏촑", 6, "촚촜촞촟촠"], ["ac61", "촡촢촣촥촦촧촩촪촫촭", 11, "촺", 4], ["ac81", "촿", 28, "쵝쵞쵟А", 5, "ЁЖ", 25], ["acd1", "а", 5, "ёж", 25], ["ad41", "쵡쵢쵣쵥", 6, "쵮쵰쵲", 5, "쵹", 7], ["ad61", "춁", 6, "춉", 10, "춖춗춙춚춛춝춞춟"], ["ad81", "춠춡춢춣춦춨춪", 5, "춱", 18, "췅"], ["ae41", "췆", 5, "췍췎췏췑", 16], ["ae61", "췢", 5, "췩췪췫췭췮췯췱", 6, "췺췼췾", 4], ["ae81", "츃츅츆츇츉츊츋츍", 6, "츕츖츗츘츚", 5, "츢츣츥츦츧츩츪츫"], ["af41", "츬츭츮츯츲츴츶", 19], ["af61", "칊", 13, "칚칛칝칞칢", 5, "칪칬"], ["af81", "칮", 5, "칶칷칹칺칻칽", 6, "캆캈캊", 5, "캒캓캕캖캗캙"], ["b041", "캚", 5, "캢캦", 5, "캮", 12], ["b061", "캻", 5, "컂", 19], ["b081", "컖", 13, "컦컧컩컪컭", 6, "컶컺", 5, "가각간갇갈갉갊감", 7, "같", 4, "갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"], ["b141", "켂켃켅켆켇켉", 6, "켒켔켖", 5, "켝켞켟켡켢켣"], ["b161", "켥", 6, "켮켲", 5, "켹", 11], ["b181", "콅", 14, "콖콗콙콚콛콝", 6, "콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"], ["b241", "콭콮콯콲콳콵콶콷콹", 6, "쾁쾂쾃쾄쾆", 5, "쾍"], ["b261", "쾎", 18, "쾢", 5, "쾩"], ["b281", "쾪", 5, "쾱", 18, "쿅", 6, "깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"], ["b341", "쿌", 19, "쿢쿣쿥쿦쿧쿩"], ["b361", "쿪", 5, "쿲쿴쿶", 5, "쿽쿾쿿퀁퀂퀃퀅", 5], ["b381", "퀋", 5, "퀒", 5, "퀙", 19, "끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫", 4, "낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"], ["b441", "퀮", 5, "퀶퀷퀹퀺퀻퀽", 6, "큆큈큊", 5], ["b461", "큑큒큓큕큖큗큙", 6, "큡", 10, "큮큯"], ["b481", "큱큲큳큵", 6, "큾큿킀킂", 18, "뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫", 4, "닳담답닷", 4, "닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"], ["b541", "킕", 14, "킦킧킩킪킫킭", 5], ["b561", "킳킶킸킺", 5, "탂탃탅탆탇탊", 5, "탒탖", 4], ["b581", "탛탞탟탡탢탣탥", 6, "탮탲", 5, "탹", 11, "덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"], ["b641", "턅", 7, "턎", 17], ["b661", "턠", 15, "턲턳턵턶턷턹턻턼턽턾"], ["b681", "턿텂텆", 5, "텎텏텑텒텓텕", 6, "텞텠텢", 5, "텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"], ["b741", "텮", 13, "텽", 6, "톅톆톇톉톊"], ["b761", "톋", 20, "톢톣톥톦톧"], ["b781", "톩", 6, "톲톴톶톷톸톹톻톽톾톿퇁", 14, "래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"], ["b841", "퇐", 7, "퇙", 17], ["b861", "퇫", 8, "퇵퇶퇷퇹", 13], ["b881", "툈툊", 5, "툑", 24, "륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많", 4, "맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"], ["b941", "툪툫툮툯툱툲툳툵", 6, "툾퉀퉂", 5, "퉉퉊퉋퉌"], ["b961", "퉍", 14, "퉝", 6, "퉥퉦퉧퉨"], ["b981", "퉩", 22, "튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바", 4, "받", 4, "밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"], ["ba41", "튍튎튏튒튓튔튖", 5, "튝튞튟튡튢튣튥", 6, "튭"], ["ba61", "튮튯튰튲", 5, "튺튻튽튾틁틃", 4, "틊틌", 5], ["ba81", "틒틓틕틖틗틙틚틛틝", 6, "틦", 9, "틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"], ["bb41", "틻", 4, "팂팄팆", 5, "팏팑팒팓팕팗", 4, "팞팢팣"], ["bb61", "팤팦팧팪팫팭팮팯팱", 6, "팺팾", 5, "퍆퍇퍈퍉"], ["bb81", "퍊", 31, "빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"], ["bc41", "퍪", 17, "퍾퍿펁펂펃펅펆펇"], ["bc61", "펈펉펊펋펎펒", 5, "펚펛펝펞펟펡", 6, "펪펬펮"], ["bc81", "펯", 4, "펵펶펷펹펺펻펽", 6, "폆폇폊", 5, "폑", 5, "샥샨샬샴샵샷샹섀섄섈섐섕서", 4, "섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"], ["bd41", "폗폙", 7, "폢폤", 7, "폮폯폱폲폳폵폶폷"], ["bd61", "폸폹폺폻폾퐀퐂", 5, "퐉", 13], ["bd81", "퐗", 5, "퐞", 25, "숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"], ["be41", "퐸", 7, "푁푂푃푅", 14], ["be61", "푔", 7, "푝푞푟푡푢푣푥", 7, "푮푰푱푲"], ["be81", "푳", 4, "푺푻푽푾풁풃", 4, "풊풌풎", 5, "풕", 8, "쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄", 6, "엌엎"], ["bf41", "풞", 10, "풪", 14], ["bf61", "풹", 18, "퓍퓎퓏퓑퓒퓓퓕"], ["bf81", "퓖", 5, "퓝퓞퓠", 7, "퓩퓪퓫퓭퓮퓯퓱", 6, "퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염", 5, "옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"], ["c041", "퓾", 5, "픅픆픇픉픊픋픍", 6, "픖픘", 5], ["c061", "픞", 25], ["c081", "픸픹픺픻픾픿핁핂핃핅", 6, "핎핐핒", 5, "핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응", 7, "읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"], ["c141", "핤핦핧핪핬핮", 5, "핶핷핹핺핻핽", 6, "햆햊햋"], ["c161", "햌햍햎햏햑", 19, "햦햧"], ["c181", "햨", 31, "점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"], ["c241", "헊헋헍헎헏헑헓", 4, "헚헜헞", 5, "헦헧헩헪헫헭헮"], ["c261", "헯", 4, "헶헸헺", 5, "혂혃혅혆혇혉", 6, "혒"], ["c281", "혖", 5, "혝혞혟혡혢혣혥", 7, "혮", 9, "혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"], ["c341", "혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝", 4], ["c361", "홢", 4, "홨홪", 5, "홲홳홵", 11], ["c381", "횁횂횄횆", 5, "횎횏횑횒횓횕", 7, "횞횠횢", 5, "횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"], ["c441", "횫횭횮횯횱", 7, "횺횼", 7, "훆훇훉훊훋"], ["c461", "훍훎훏훐훒훓훕훖훘훚", 5, "훡훢훣훥훦훧훩", 4], ["c481", "훮훯훱훲훳훴훶", 5, "훾훿휁휂휃휅", 11, "휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"], ["c541", "휕휖휗휚휛휝휞휟휡", 6, "휪휬휮", 5, "휶휷휹"], ["c561", "휺휻휽", 6, "흅흆흈흊", 5, "흒흓흕흚", 4], ["c581", "흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵", 6, "흾흿힀힂", 5, "힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"], ["c641", "힍힎힏힑", 6, "힚힜힞", 5], ["c6a1", "퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"], ["c7a1", "퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"], ["c8a1", "혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"], ["caa1", "伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"], ["cba1", "匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"], ["cca1", "瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"], ["cda1", "棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"], ["cea1", "科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"], ["cfa1", "區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"], ["d0a1", "鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"], ["d1a1", "朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩", 5, "那樂", 4, "諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"], ["d2a1", "納臘蠟衲囊娘廊", 4, "乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧", 5, "駑魯", 10, "濃籠聾膿農惱牢磊腦賂雷尿壘", 7, "嫩訥杻紐勒", 5, "能菱陵尼泥匿溺多茶"], ["d3a1", "丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"], ["d4a1", "棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"], ["d5a1", "蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"], ["d6a1", "煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"], ["d7a1", "遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"], ["d8a1", "立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"], ["d9a1", "蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"], ["daa1", "汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"], ["dba1", "發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"], ["dca1", "碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"], ["dda1", "孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"], ["dea1", "脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"], ["dfa1", "傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"], ["e0a1", "胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"], ["e1a1", "聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"], ["e2a1", "戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"], ["e3a1", "嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"], ["e4a1", "沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"], ["e5a1", "櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"], ["e6a1", "旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"], ["e7a1", "簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"], ["e8a1", "烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"], ["e9a1", "窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"], ["eaa1", "運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"], ["eba1", "濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"], ["eca1", "議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"], ["eda1", "立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"], ["eea1", "障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"], ["efa1", "煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"], ["f0a1", "靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"], ["f1a1", "踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"], ["f2a1", "咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"], ["f3a1", "鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"], ["f4a1", "責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"], ["f5a1", "椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"], ["f6a1", "贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"], ["f7a1", "鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"], ["f8a1", "阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"], ["f9a1", "品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"], ["faa1", "行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"], ["fba1", "形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"], ["fca1", "禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"], ["fda1", "爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]];
  }, {}],
  "rxXt": [function (require, module, exports) {
    module.exports = [["0", "\0", 127], ["a140", "　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"], ["a1a1", "﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢", 4, "～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"], ["a240", "＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁", 7, "▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"], ["a2a1", "╮╰╯═╞╪╡◢◣◥◤╱╲╳０", 9, "Ⅰ", 9, "〡", 8, "十卄卅Ａ", 25, "ａ", 21], ["a340", "ｗｘｙｚΑ", 16, "Σ", 6, "α", 16, "σ", 6, "ㄅ", 10], ["a3a1", "ㄐ", 25, "˙ˉˊˇˋ"], ["a3e1", "€"], ["a440", "一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"], ["a4a1", "丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"], ["a540", "世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"], ["a5a1", "央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"], ["a640", "共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"], ["a6a1", "式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"], ["a740", "作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"], ["a7a1", "均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"], ["a840", "杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"], ["a8a1", "芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"], ["a940", "咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"], ["a9a1", "屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"], ["aa40", "昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"], ["aaa1", "炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"], ["ab40", "陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"], ["aba1", "哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"], ["ac40", "拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"], ["aca1", "活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"], ["ad40", "耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"], ["ada1", "迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"], ["ae40", "哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"], ["aea1", "恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"], ["af40", "浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"], ["afa1", "砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"], ["b040", "虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"], ["b0a1", "陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"], ["b140", "娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"], ["b1a1", "情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"], ["b240", "毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"], ["b2a1", "瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"], ["b340", "莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"], ["b3a1", "部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"], ["b440", "婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"], ["b4a1", "插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"], ["b540", "溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"], ["b5a1", "窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"], ["b640", "詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"], ["b6a1", "間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"], ["b740", "媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"], ["b7a1", "楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"], ["b840", "睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"], ["b8a1", "腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"], ["b940", "辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"], ["b9a1", "飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"], ["ba40", "愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"], ["baa1", "滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"], ["bb40", "罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"], ["bba1", "說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"], ["bc40", "劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"], ["bca1", "慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"], ["bd40", "瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"], ["bda1", "翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"], ["be40", "輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"], ["bea1", "鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"], ["bf40", "濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"], ["bfa1", "縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"], ["c040", "錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"], ["c0a1", "嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"], ["c140", "瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"], ["c1a1", "薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"], ["c240", "駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"], ["c2a1", "癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"], ["c340", "鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"], ["c3a1", "獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"], ["c440", "願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"], ["c4a1", "纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"], ["c540", "護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"], ["c5a1", "禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"], ["c640", "讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"], ["c940", "乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"], ["c9a1", "氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"], ["ca40", "汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"], ["caa1", "吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"], ["cb40", "杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"], ["cba1", "芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"], ["cc40", "坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"], ["cca1", "怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"], ["cd40", "泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"], ["cda1", "矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"], ["ce40", "哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"], ["cea1", "峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"], ["cf40", "柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"], ["cfa1", "洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"], ["d040", "穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"], ["d0a1", "苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"], ["d140", "唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"], ["d1a1", "恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"], ["d240", "毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"], ["d2a1", "牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"], ["d340", "笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"], ["d3a1", "荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"], ["d440", "酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"], ["d4a1", "唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"], ["d540", "崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"], ["d5a1", "捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"], ["d640", "淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"], ["d6a1", "痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"], ["d740", "耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"], ["d7a1", "蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"], ["d840", "釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"], ["d8a1", "堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"], ["d940", "惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"], ["d9a1", "晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"], ["da40", "湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"], ["daa1", "琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"], ["db40", "罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"], ["dba1", "菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"], ["dc40", "軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"], ["dca1", "隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"], ["dd40", "媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"], ["dda1", "搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"], ["de40", "毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"], ["dea1", "煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"], ["df40", "稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"], ["dfa1", "腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"], ["e040", "觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"], ["e0a1", "遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"], ["e140", "凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"], ["e1a1", "寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"], ["e240", "榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"], ["e2a1", "漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"], ["e340", "禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"], ["e3a1", "耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"], ["e440", "裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"], ["e4a1", "銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"], ["e540", "噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"], ["e5a1", "憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"], ["e640", "澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"], ["e6a1", "獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"], ["e740", "膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"], ["e7a1", "蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"], ["e840", "踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"], ["e8a1", "銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"], ["e940", "噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"], ["e9a1", "憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"], ["ea40", "澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"], ["eaa1", "瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"], ["eb40", "蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"], ["eba1", "諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"], ["ec40", "錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"], ["eca1", "魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"], ["ed40", "檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"], ["eda1", "瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"], ["ee40", "蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"], ["eea1", "謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"], ["ef40", "鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"], ["efa1", "鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"], ["f040", "璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"], ["f0a1", "臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"], ["f140", "蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"], ["f1a1", "鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"], ["f240", "徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"], ["f2a1", "礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"], ["f340", "譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"], ["f3a1", "鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"], ["f440", "嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"], ["f4a1", "禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"], ["f540", "鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"], ["f5a1", "鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"], ["f640", "蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"], ["f6a1", "騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"], ["f740", "糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"], ["f7a1", "驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"], ["f840", "讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"], ["f8a1", "齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"], ["f940", "纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"], ["f9a1", "龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]];
  }, {}],
  "BX3f": [function (require, module, exports) {
    module.exports = [["8740", "䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"], ["8767", "綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"], ["87a1", "𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"], ["8840", "㇀", 4, "𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"], ["88a1", "ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"], ["8940", "𪎩𡅅"], ["8943", "攊"], ["8946", "丽滝鵎釟"], ["894c", "𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"], ["89a1", "琑糼緍楆竉刧"], ["89ab", "醌碸酞肼"], ["89b0", "贋胶𠧧"], ["89b5", "肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"], ["89c1", "溚舾甙"], ["89c5", "䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"], ["8a40", "𧶄唥"], ["8a43", "𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"], ["8a64", "𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"], ["8a76", "䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"], ["8aa1", "𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"], ["8aac", "䠋𠆩㿺塳𢶍"], ["8ab2", "𤗈𠓼𦂗𠽌𠶖啹䂻䎺"], ["8abb", "䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"], ["8ac9", "𪘁𠸉𢫏𢳉"], ["8ace", "𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"], ["8adf", "𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"], ["8af6", "𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"], ["8b40", "𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"], ["8b55", "𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"], ["8ba1", "𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"], ["8bde", "𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"], ["8c40", "倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"], ["8ca1", "𣏹椙橃𣱣泿"], ["8ca7", "爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"], ["8cc9", "顨杫䉶圽"], ["8cce", "藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"], ["8ce6", "峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"], ["8d40", "𠮟"], ["8d42", "𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"], ["8da1", "㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"], ["8e40", "𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"], ["8ea1", "繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"], ["8f40", "蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"], ["8fa1", "𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"], ["9040", "趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"], ["90a1", "𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"], ["9140", "𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"], ["91a1", "鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"], ["9240", "𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"], ["92a1", "働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"], ["9340", "媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"], ["93a1", "摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"], ["9440", "銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"], ["94a1", "㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"], ["9540", "𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"], ["95a1", "衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"], ["9640", "桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"], ["96a1", "𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"], ["9740", "愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"], ["97a1", "𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"], ["9840", "𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"], ["98a1", "咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"], ["9940", "䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"], ["99a1", "䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"], ["9a40", "鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"], ["9aa1", "黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"], ["9b40", "𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"], ["9b62", "𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"], ["9ba1", "椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"], ["9c40", "嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"], ["9ca1", "㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"], ["9d40", "𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"], ["9da1", "辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"], ["9e40", "𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"], ["9ea1", "鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"], ["9ead", "𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"], ["9ec5", "㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"], ["9ef5", "噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"], ["9f40", "籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"], ["9f4f", "凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"], ["9fa1", "椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"], ["9fae", "酙隁酜"], ["9fb2", "酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"], ["9fc1", "𤤙盖鮝个𠳔莾衂"], ["9fc9", "届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"], ["9fdb", "歒酼龥鮗頮颴骺麨麄煺笔"], ["9fe7", "毺蠘罸"], ["9feb", "嘠𪙊蹷齓"], ["9ff0", "跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"], ["a040", "𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"], ["a055", "𡠻𦸅"], ["a058", "詾𢔛"], ["a05b", "惽癧髗鵄鍮鮏蟵"], ["a063", "蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"], ["a073", "坟慯抦戹拎㩜懢厪𣏵捤栂㗒"], ["a0a1", "嵗𨯂迚𨸹"], ["a0a6", "僙𡵆礆匲阸𠼻䁥"], ["a0ae", "矾"], ["a0b0", "糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"], ["a0d4", "覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"], ["a0e2", "罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"], ["a3c0", "␀", 31, "␡"], ["c6a1", "①", 9, "⑴", 9, "ⅰ", 9, "丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ", 23], ["c740", "す", 58, "ァアィイ"], ["c7a1", "ゥ", 81, "А", 5, "ЁЖ", 4], ["c840", "Л", 26, "ёж", 25, "⇧↸↹㇏𠃌乚𠂊刂䒑"], ["c8a1", "龰冈龱𧘇"], ["c8cd", "￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"], ["c8f5", "ʃɐɛɔɵœøŋʊɪ"], ["f9fe", "￭"], ["fa40", "𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"], ["faa1", "鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"], ["fb40", "𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"], ["fba1", "𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"], ["fc40", "廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"], ["fca1", "𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"], ["fd40", "𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"], ["fda1", "𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"], ["fe40", "鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"], ["fea1", "𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]];
  }, {}],
  "SB7m": [function (require, module, exports) {
    "use strict";

    module.exports = {
      shiftjis: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/shiftjis.json");
        },
        encodeAdd: {
          "¥": 92,
          "‾": 126
        },
        encodeSkipVals: [{
          from: 60736,
          to: 63808
        }]
      },
      csshiftjis: "shiftjis",
      mskanji: "shiftjis",
      sjis: "shiftjis",
      windows31j: "shiftjis",
      ms31j: "shiftjis",
      xsjis: "shiftjis",
      windows932: "shiftjis",
      ms932: "shiftjis",
      932: "shiftjis",
      cp932: "shiftjis",
      eucjp: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/eucjp.json");
        },
        encodeAdd: {
          "¥": 92,
          "‾": 126
        }
      },
      gb2312: "cp936",
      gb231280: "cp936",
      gb23121980: "cp936",
      csgb2312: "cp936",
      csiso58gb231280: "cp936",
      euccn: "cp936",
      windows936: "cp936",
      ms936: "cp936",
      936: "cp936",
      cp936: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp936.json");
        }
      },
      gbk: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp936.json").concat(require("./tables/gbk-added.json"));
        }
      },
      xgbk: "gbk",
      isoir58: "gbk",
      gb18030: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp936.json").concat(require("./tables/gbk-added.json"));
        },
        gb18030: function gb18030() {
          return require("./tables/gb18030-ranges.json");
        },
        encodeSkipVals: [128],
        encodeAdd: {
          "€": 41699
        }
      },
      chinese: "gb18030",
      windows949: "cp949",
      ms949: "cp949",
      949: "cp949",
      cp949: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp949.json");
        }
      },
      cseuckr: "cp949",
      csksc56011987: "cp949",
      euckr: "cp949",
      isoir149: "cp949",
      korean: "cp949",
      ksc56011987: "cp949",
      ksc56011989: "cp949",
      ksc5601: "cp949",
      windows950: "cp950",
      ms950: "cp950",
      950: "cp950",
      cp950: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp950.json");
        }
      },
      big5: "big5hkscs",
      big5hkscs: {
        type: "_dbcs",
        table: function table() {
          return require("./tables/cp950.json").concat(require("./tables/big5-added.json"));
        },
        encodeSkipVals: [41676]
      },
      cnbig5: "big5hkscs",
      csbig5: "big5hkscs",
      xxbig5: "big5hkscs"
    };
  }, {
    "./tables/shiftjis.json": "P0Ww",
    "./tables/eucjp.json": "F831",
    "./tables/cp936.json": "DHI4",
    "./tables/gbk-added.json": "p4xS",
    "./tables/gb18030-ranges.json": "UacA",
    "./tables/cp949.json": "BZv6",
    "./tables/cp950.json": "rxXt",
    "./tables/big5-added.json": "BX3f"
  }],
  "WCTT": [function (require, module, exports) {
    "use strict";

    for (var e = [require("./internal"), require("./utf32"), require("./utf16"), require("./utf7"), require("./sbcs-codec"), require("./sbcs-data"), require("./sbcs-data-generated"), require("./dbcs-codec"), require("./dbcs-data")], r = 0; r < e.length; r++) {
      var t = e[r];

      for (var a in t) {
        Object.prototype.hasOwnProperty.call(t, a) && (exports[a] = t[a]);
      }
    }
  }, {
    "./internal": "S9sr",
    "./utf32": "hz8t",
    "./utf16": "zVdI",
    "./utf7": "t45t",
    "./sbcs-codec": "a7zs",
    "./sbcs-data": "mUs1",
    "./sbcs-data-generated": "GYsD",
    "./dbcs-codec": "b7qe",
    "./dbcs-data": "SB7m"
  }],
  "H7rC": [function (require, module, exports) {
    "use strict";

    var t = require("safer-buffer").Buffer;

    module.exports = function (n) {
      var r = n.Transform;

      function o(t, n) {
        this.conv = t, (n = n || {}).decodeStrings = !1, r.call(this, n);
      }

      function e(t, n) {
        this.conv = t, (n = n || {}).encoding = this.encoding = "utf8", r.call(this, n);
      }

      return o.prototype = Object.create(r.prototype, {
        constructor: {
          value: o
        }
      }), o.prototype._transform = function (t, n, r) {
        if ("string" != typeof t) return r(new Error("Iconv encoding stream needs strings as its input."));

        try {
          var o = this.conv.write(t);
          o && o.length && this.push(o), r();
        } catch (e) {
          r(e);
        }
      }, o.prototype._flush = function (t) {
        try {
          var n = this.conv.end();
          n && n.length && this.push(n), t();
        } catch (r) {
          t(r);
        }
      }, o.prototype.collect = function (n) {
        var r = [];
        return this.on("error", n), this.on("data", function (t) {
          r.push(t);
        }), this.on("end", function () {
          n(null, t.concat(r));
        }), this;
      }, e.prototype = Object.create(r.prototype, {
        constructor: {
          value: e
        }
      }), e.prototype._transform = function (n, r, o) {
        if (!t.isBuffer(n)) return o(new Error("Iconv decoding stream needs buffers as its input."));

        try {
          var e = this.conv.write(n);
          e && e.length && this.push(e, this.encoding), o();
        } catch (i) {
          o(i);
        }
      }, e.prototype._flush = function (t) {
        try {
          var n = this.conv.end();
          n && n.length && this.push(n, this.encoding), t();
        } catch (r) {
          t(r);
        }
      }, e.prototype.collect = function (t) {
        var n = "";
        return this.on("error", t), this.on("data", function (t) {
          n += t;
        }), this.on("end", function () {
          t(null, n);
        }), this;
      }, {
        IconvLiteEncoderStream: o,
        IconvLiteDecoderStream: e
      };
    };
  }, {
    "safer-buffer": "IVbQ"
  }],
  "sC8V": [function (require, module, exports) {}, {}],
  "XCGw": [function (require, module, exports) {
    "use strict";

    var e,
        n = require("safer-buffer").Buffer,
        r = require("./bom-handling"),
        o = module.exports;

    o.encodings = null, o.defaultCharUnicode = "�", o.defaultCharSingleByte = "?", o.encode = function (e, r, t) {
      e = "" + (e || "");
      var c = o.getEncoder(r, t),
          i = c.write(e),
          a = c.end();
      return a && a.length > 0 ? n.concat([i, a]) : i;
    }, o.decode = function (e, r, t) {
      "string" == typeof e && (o.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), o.skipDecodeWarning = !0), e = n.from("" + (e || ""), "binary"));
      var c = o.getDecoder(r, t),
          i = c.write(e),
          a = c.end();
      return a ? i + a : i;
    }, o.encodingExists = function (e) {
      try {
        return o.getCodec(e), !0;
      } catch (n) {
        return !1;
      }
    }, o.toEncoding = o.encode, o.fromEncoding = o.decode, o._codecDataCache = {}, o.getCodec = function (e) {
      o.encodings || (o.encodings = require("../encodings"));

      for (var n = o._canonicalizeEncoding(e), r = {};;) {
        var t = o._codecDataCache[n];
        if (t) return t;
        var c = o.encodings[n];

        switch (_typeof(c)) {
          case "string":
            n = c;
            break;

          case "object":
            for (var i in c) {
              r[i] = c[i];
            }

            r.encodingName || (r.encodingName = n), n = c.type;
            break;

          case "function":
            return r.encodingName || (r.encodingName = n), t = new c(r, o), o._codecDataCache[r.encodingName] = t, t;

          default:
            throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + n + "')");
        }
      }
    }, o._canonicalizeEncoding = function (e) {
      return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
    }, o.getEncoder = function (e, n) {
      var t = o.getCodec(e),
          c = new t.encoder(n, t);
      return t.bomAware && n && n.addBOM && (c = new r.PrependBOM(c, n)), c;
    }, o.getDecoder = function (e, n) {
      var t = o.getCodec(e),
          c = new t.decoder(n, t);
      return !t.bomAware || n && !1 === n.stripBOM || (c = new r.StripBOM(c, n)), c;
    }, o.enableStreamingAPI = function (e) {
      if (!o.supportsStreams) {
        var n = require("./streams")(e);

        o.IconvLiteEncoderStream = n.IconvLiteEncoderStream, o.IconvLiteDecoderStream = n.IconvLiteDecoderStream, o.encodeStream = function (e, n) {
          return new o.IconvLiteEncoderStream(o.getEncoder(e, n), n);
        }, o.decodeStream = function (e, n) {
          return new o.IconvLiteDecoderStream(o.getDecoder(e, n), n);
        }, o.supportsStreams = !0;
      }
    };

    try {
      e = require("stream");
    } catch (t) {}

    e && e.Transform ? o.enableStreamingAPI(e) : o.encodeStream = o.decodeStream = function () {
      throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
    };
  }, {
    "safer-buffer": "IVbQ",
    "./bom-handling": "eain",
    "../encodings": "WCTT",
    "./streams": "H7rC",
    "stream": "sC8V"
  }],
  "FLHj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = s(require("@babel/runtime/helpers/classCallCheck")),
        e = s(require("@babel/runtime/helpers/createClass")),
        n = s(require("@babel/runtime/helpers/inherits")),
        r = s(require("@babel/runtime/helpers/possibleConstructorReturn")),
        a = s(require("@babel/runtime/helpers/getPrototypeOf")),
        o = s(require("react")),
        l = s(require("iconv-lite"));

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u(t, e) {
      var _n4;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n4 = i(t)) || e && t && "number" == typeof t.length) {
          _n4 && (t = _n4);

          var r = 0,
              a = function a() {};

          return {
            s: a,
            n: function n() {
              return r >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[r++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: a
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          l = !0,
          s = !1;
      return {
        s: function s() {
          _n4 = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n4.next();

          return l = t.done, t;
        },
        e: function e(t) {
          s = !0, o = t;
        },
        f: function f() {
          try {
            l || null == _n4.return || _n4.return();
          } finally {
            if (s) throw o;
          }
        }
      };
    }

    function i(t, e) {
      if (t) {
        if ("string" == typeof t) return c(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
      }
    }

    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, r = new Array(e); n < e; n++) {
        r[n] = t[n];
      }

      return r;
    }

    function f(t) {
      var e = d();
      return function () {
        var n,
            o = (0, a.default)(t);

        if (e) {
          var l = (0, a.default)(this).constructor;
          n = Reflect.construct(o, arguments, l);
        } else n = o.apply(this, arguments);

        return (0, r.default)(this, n);
      };
    }

    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }

    require("./App.css");

    var p = ["一", "乙", "丁", "七", "乃", "九", "了", "二", "人", "儿", "入", "八", "几", "刀", "刁", "力", "匕", "十", "卜", "又", "三", "下", "丈", "上", "丫", "丸", "凡", "久", "么", "也", "乞", "于", "亡", "兀", "刃", "勺", "千", "叉", "口", "土", "士", "夕", "大", "女", "子", "孑", "孓", "寸", "小", "尢", "尸", "山", "川", "工", "己", "已", "巳", "巾", "干", "廾", "弋", "弓", "才", "丑", "丐", "不", "中", "丰", "丹", "之", "尹", "予", "云", "井", "互", "五", "亢", "仁", "什", "仃", "仆", "仇", "仍", "今", "介", "仄", "元", "允", "內", "六", "兮", "公", "冗", "凶", "分", "切", "刈", "勻", "勾", "勿", "化", "匹", "午", "升", "卅", "卞", "厄", "友", "及", "反", "壬", "天", "夫", "太", "夭", "孔", "少", "尤", "尺", "屯", "巴", "幻", "廿", "弔", "引", "心", "戈", "戶", "手", "扎", "支", "文", "斗", "斤", "方", "日", "曰", "月", "木", "欠", "止", "歹", "毋", "比", "毛", "氏", "水", "火", "爪", "父", "爻", "片", "牙", "牛", "犬", "王", "丙", "世", "丕", "且", "丘", "主", "乍", "乏", "乎", "以", "付", "仔", "仕", "他", "仗", "代", "令", "仙", "仞", "充", "兄", "冉", "冊", "冬", "凹", "出", "凸", "刊", "加", "功", "包", "匆", "北", "匝", "仟", "半", "卉", "卡", "占", "卯", "卮", "去", "可", "古", "右", "召", "叮", "叩", "叨", "叼", "司", "叵", "叫", "另", "只", "史", "叱", "台", "句", "叭", "叻", "四", "囚", "外", "央", "失", "奴", "奶", "孕", "它", "尼", "巨", "巧", "左", "市", "布", "平", "幼", "弁", "弘", "弗", "必", "戊", "打", "扔", "扒", "扑", "斥", "旦", "朮", "本", "未", "末", "札", "正", "母", "民", "氐", "永", "汁", "汀", "氾", "犯", "玄", "玉", "瓜", "瓦", "甘", "生", "用", "甩", "田", "由", "甲", "申", "疋", "白", "皮", "皿", "目", "矛", "矢", "石", "示", "禾", "穴", "立", "丞", "丟", "乒", "乓", "乩", "亙", "交", "亦", "亥", "仿", "伉", "伙", "伊", "伕", "伍", "伐", "休", "伏", "仲", "件", "任", "仰", "仳", "份", "企", "伋", "光", "兇", "兆", "先", "全", "共", "再", "冰", "列", "刑", "划", "刎", "刖", "劣", "匈", "匡", "匠", "印", "危", "吉", "吏", "同", "吊", "吐", "吁", "吋", "各", "向", "名", "合", "吃", "后", "吆", "吒", "因", "回", "囝", "圳", "地", "在", "圭", "圬", "圯", "圩", "夙", "多", "夷", "夸", "妄", "奸", "妃", "好", "她", "如", "妁", "字", "存", "宇", "守", "宅", "安", "寺", "尖", "屹", "州", "帆", "并", "年", "式", "弛", "忙", "忖", "戎", "戌", "戍", "成", "扣", "扛", "托", "收", "早", "旨", "旬", "旭", "曲", "曳", "有", "朽", "朴", "朱", "朵", "次", "此", "死", "氖", "汝", "汗", "汙", "江", "池", "汐", "汕", "污", "汛", "汍", "汎", "灰", "牟", "牝", "百", "竹", "米", "糸", "缶", "羊", "羽", "老", "考", "而", "耒", "耳", "聿", "肉", "肋", "肌", "臣", "自", "至", "臼", "舌", "舛", "舟", "艮", "色", "艾", "虫", "血", "行", "衣", "西", "阡", "串", "亨", "位", "住", "佇", "佗", "佞", "伴", "佛", "何", "估", "佐", "佑", "伽", "伺", "伸", "佃", "佔", "似", "但", "佣", "作", "你", "伯", "低", "伶", "余", "佝", "佈", "佚", "兌", "克", "免", "兵", "冶", "冷", "別", "判", "利", "刪", "刨", "劫", "助", "努", "劬", "匣", "即", "卵", "吝", "吭", "吞", "吾", "否", "呎", "吧", "呆", "呃", "吳", "呈", "呂", "君", "吩", "告", "吹", "吻", "吸", "吮", "吵", "吶", "吠", "吼", "呀", "吱", "含", "吟", "听", "囪", "困", "囤", "囫", "坊", "坑", "址", "坍", "均", "坎", "圾", "坐", "坏", "圻", "壯", "夾", "妝", "妒", "妨", "妞", "妣", "妙", "妖", "妍", "妤", "妓", "妊", "妥", "孝", "孜", "孚", "孛", "完", "宋", "宏", "尬", "局", "屁", "尿", "尾", "岐", "岑", "岔", "岌", "巫", "希", "序", "庇", "床", "廷", "弄", "弟", "彤", "形", "彷", "役", "忘", "忌", "志", "忍", "忱", "快", "忸", "忪", "戒", "我", "抄", "抗", "抖", "技", "扶", "抉", "扭", "把", "扼", "找", "批", "扳", "抒", "扯", "折", "扮", "投", "抓", "抑", "抆", "改", "攻", "攸", "旱", "更", "束", "李", "杏", "材", "村", "杜", "杖", "杞", "杉", "杆", "杠", "杓", "杗", "步", "每", "求", "汞", "沙", "沁", "沈", "沉", "沅", "沛", "汪", "決", "沐", "汰", "沌", "汨", "沖", "沒", "汽", "沃", "汲", "汾", "汴", "沆", "汶", "沍", "沔", "沘", "沂", "灶", "灼", "災", "灸", "牢", "牡", "牠", "狄", "狂", "玖", "甬", "甫", "男", "甸", "皂", "盯", "矣", "私", "秀", "禿", "究", "系", "罕", "肖", "肓", "肝", "肘", "肛", "肚", "育", "良", "芒", "芋", "芍", "見", "角", "言", "谷", "豆", "豕", "貝", "赤", "走", "足", "身", "車", "辛", "辰", "迂", "迆", "迅", "迄", "巡", "邑", "邢", "邪", "邦", "那", "酉", "釆", "里", "防", "阮", "阱", "阪", "阬", "並", "乖", "乳", "事", "些", "亞", "享", "京", "佯", "依", "侍", "佳", "使", "佬", "供", "例", "來", "侃", "佰", "併", "侈", "佩", "佻", "侖", "佾", "侏", "侑", "佺", "兔", "兒", "兕", "兩", "具", "其", "典", "冽", "函", "刻", "券", "刷", "刺", "到", "刮", "制", "剁", "劾", "劻", "卒", "協", "卓", "卑", "卦", "卷", "卸", "卹", "取", "叔", "受", "味", "呵", "咖", "呸", "咕", "咀", "呻", "呷", "咄", "咒", "咆", "呼", "咐", "呱", "呶", "和", "咚", "呢", "周", "咋", "命", "咎", "固", "垃", "坷", "坪", "坩", "坡", "坦", "坤", "坼", "夜", "奉", "奇", "奈", "奄", "奔", "妾", "妻", "委", "妹", "妮", "姑", "姆", "姐", "姍", "始", "姓", "姊", "妯", "妳", "姒", "姅", "孟", "孤", "季", "宗", "定", "官", "宜", "宙", "宛", "尚", "屈", "居", "屆", "岷", "岡", "岸", "岩", "岫", "岱", "岳", "帘", "帚", "帖", "帕", "帛", "帑", "幸", "庚", "店", "府", "底", "庖", "延", "弦", "弧", "弩", "往", "征", "彿", "彼", "忝", "忠", "忽", "念", "忿", "怏", "怔", "怯", "怵", "怖", "怪", "怕", "怡", "性", "怩", "怫", "怛", "或", "戕", "房", "戾", "所", "承", "拉", "拌", "拄", "抿", "拂", "抹", "拒", "招", "披", "拓", "拔", "拋", "拈", "抨", "抽", "押", "拐", "拙", "拇", "拍", "抵", "拚", "抱", "拘", "拖", "拗", "拆", "抬", "拎", "放", "斧", "於", "旺", "昔", "易", "昌", "昆", "昂", "明", "昀", "昏", "昕", "昊", "昇", "服", "朋", "杭", "枋", "枕", "東", "果", "杳", "杷", "枇", "枝", "林", "杯", "杰", "板", "枉", "松", "析", "杵", "枚", "枓", "杼", "杪", "杲", "欣", "武", "歧", "歿", "氓", "氛", "泣", "注", "泳", "沱", "泌", "泥", "河", "沽", "沾", "沼", "波", "沫", "法", "泓", "沸", "泄", "油", "況", "沮", "泗", "泅", "泱", "沿", "治", "泡", "泛", "泊", "沬", "泯", "泜", "泖", "泠", "炕", "炎", "炒", "炊", "炙", "爬", "爭", "爸", "版", "牧", "物", "狀", "狎", "狙", "狗", "狐", "玩", "玨", "玟", "玫", "玥", "甽", "疝", "疙", "疚", "的", "盂", "盲", "直", "知", "矽", "社", "祀", "祁", "秉", "秈", "空", "穹", "竺", "糾", "罔", "羌", "羋", "者", "肺", "肥", "肢", "肱", "股", "肫", "肩", "肴", "肪", "肯", "臥", "臾", "舍", "芳", "芝", "芙", "芭", "芽", "芟", "芹", "花", "芬", "芥", "芯", "芸", "芣", "芰", "芾", "芷", "虎", "虱", "初", "表", "軋", "迎", "返", "近", "邵", "邸", "邱", "邶", "采", "金", "長", "門", "阜", "陀", "阿", "阻", "附", "陂", "隹", "雨", "青", "非", "亟", "亭", "亮", "信", "侵", "侯", "便", "俠", "俑", "俏", "保", "促", "侶", "俘", "俟", "俊", "俗", "侮", "俐", "俄", "係", "俚", "俎", "俞", "侷", "兗", "冒", "冑", "冠", "剎", "剃", "削", "前", "剌", "剋", "則", "勇", "勉", "勃", "勁", "匍", "南", "卻", "厚", "叛", "咬", "哀", "咨", "哎", "哉", "咸", "咦", "咳", "哇", "哂", "咽", "咪", "品", "哄", "哈", "咯", "咫", "咱", "咻", "咩", "咧", "咿", "囿", "垂", "型", "垠", "垣", "垢", "城", "垮", "垓", "奕", "契", "奏", "奎", "奐", "姜", "姘", "姿", "姣", "姨", "娃", "姥", "姪", "姚", "姦", "威", "姻", "孩", "宣", "宦", "室", "客", "宥", "封", "屎", "屏", "屍", "屋", "峙", "峒", "巷", "帝", "帥", "帟", "幽", "庠", "度", "建", "弈", "弭", "彥", "很", "待", "徊", "律", "徇", "後", "徉", "怒", "思", "怠", "急", "怎", "怨", "恍", "恰", "恨", "恢", "恆", "恃", "恬", "恫", "恪", "恤", "扁", "拜", "挖", "按", "拼", "拭", "持", "拮", "拽", "指", "拱", "拷", "拯", "括", "拾", "拴", "挑", "挂", "政", "故", "斫", "施", "既", "春", "昭", "映", "昧", "是", "星", "昨", "昱", "昤", "曷", "柿", "染", "柱", "柔", "某", "柬", "架", "枯", "柵", "柩", "柯", "柄", "柑", "枴", "柚", "查", "枸", "柏", "柞", "柳", "枰", "柙", "柢", "柝", "柒", "歪", "殃", "殆", "段", "毒", "毗", "氟", "泉", "洋", "洲", "洪", "流", "津", "洌", "洱", "洞", "洗", "活", "洽", "派", "洶", "洛", "泵", "洹", "洧", "洸", "洩", "洮", "洵", "洎", "洫", "炫", "為", "炳", "炬", "炯", "炭", "炸", "炮", "炤", "爰", "牲", "牯", "牴", "狩", "狠", "狡", "玷", "珊", "玻", "玲", "珍", "珀", "玳", "甚", "甭", "畏", "界", "畎", "畋", "疫", "疤", "疥", "疢", "疣", "癸", "皆", "皇", "皈", "盈", "盆", "盃", "盅", "省", "盹", "相", "眉", "看", "盾", "盼", "眇", "矜", "砂", "研", "砌", "砍", "祆", "祉", "祈", "祇", "禹", "禺", "科", "秒", "秋", "穿", "突", "竿", "竽", "籽", "紂", "紅", "紀", "紉", "紇", "約", "紆", "缸", "美", "羿", "耄", "耐", "耍", "耑", "耶", "胖", "胥", "胚", "胃", "胄", "背", "胡", "胛", "胎", "胞", "胤", "胝", "致", "舢", "苧", "范", "茅", "苣", "苛", "苦", "茄", "若", "茂", "茉", "苒", "苗", "英", "茁", "苜", "苔", "苑", "苞", "苓", "苟", "苯", "茆", "虐", "虹", "虻", "虺", "衍", "衫", "要", "觔", "計", "訂", "訃", "貞", "負", "赴", "赳", "趴", "軍", "軌", "述", "迦", "迢", "迪", "迥", "迭", "迫", "迤", "迨", "郊", "郎", "郁", "郃", "酋", "酊", "重", "閂", "限", "陋", "陌", "降", "面", "革", "韋", "韭", "音", "頁", "風", "飛", "食", "首", "香", "乘", "亳", "倌", "倍", "倣", "俯", "倦", "倥", "俸", "倩", "倖", "倆", "值", "借", "倚", "倒", "們", "俺", "倀", "倔", "倨", "俱", "倡", "個", "候", "倘", "俳", "修", "倭", "倪", "俾", "倫", "倉", "兼", "冤", "冥", "冢", "凍", "凌", "准", "凋", "剖", "剜", "剔", "剛", "剝", "匪", "卿", "原", "厝", "叟", "哨", "唐", "唁", "唷", "哼", "哥", "哲", "唆", "哺", "唔", "哩", "哭", "員", "唉", "哮", "哪", "哦", "唧", "唇", "哽", "唏", "圃", "圄", "埂", "埔", "埋", "埃", "堉", "夏", "套", "奘", "奚", "娑", "娘", "娜", "娟", "娛", "娓", "姬", "娠", "娣", "娩", "娥", "娌", "娉", "孫", "屘", "宰", "害", "家", "宴", "宮", "宵", "容", "宸", "射", "屑", "展", "屐", "峭", "峽", "峻", "峪", "峨", "峰", "島", "崁", "峴", "差", "席", "師", "庫", "庭", "座", "弱", "徒", "徑", "徐", "恙", "恣", "恥", "恐", "恕", "恭", "恩", "息", "悄", "悟", "悚", "悍", "悔", "悌", "悅", "悖", "扇", "拳", "挈", "拿", "捎", "挾", "振", "捕", "捂", "捆", "捏", "捉", "挺", "捐", "挽", "挪", "挫", "挨", "捍", "捌", "效", "敉", "料", "旁", "旅", "時", "晉", "晏", "晃", "晒", "晌", "晅", "晁", "書", "朔", "朕", "朗", "校", "核", "案", "框", "桓", "根", "桂", "桔", "栩", "梳", "栗", "桌", "桑", "栽", "柴", "桐", "桀", "格", "桃", "株", "桅", "栓", "栘", "桁", "殊", "殉", "殷", "氣", "氧", "氨", "氦", "氤", "泰", "浪", "涕", "消", "涇", "浦", "浸", "海", "浙", "涓", "浬", "涉", "浮", "浚", "浴", "浩", "涌", "涊", "浹", "涅", "浥", "涔", "烊", "烘", "烤", "烙", "烈", "烏", "爹", "特", "狼", "狹", "狽", "狸", "狷", "玆", "班", "琉", "珮", "珠", "珪", "珞", "畔", "畝", "畜", "畚", "留", "疾", "病", "症", "疲", "疳", "疽", "疼", "疹", "痂", "疸", "皋", "皰", "益", "盍", "盎", "眩", "真", "眠", "眨", "矩", "砰", "砧", "砸", "砝", "破", "砷", "砥", "砭", "砠", "砟", "砲", "祕", "祐", "祠", "祟", "祖", "神", "祝", "祗", "祚", "秤", "秣", "秧", "租", "秦", "秩", "秘", "窄", "窈", "站", "笆", "笑", "粉", "紡", "紗", "紋", "紊", "素", "索", "純", "紐", "紕", "級", "紜", "納", "紙", "紛", "缺", "罟", "羔", "翅", "翁", "耆", "耘", "耕", "耙", "耗", "耽", "耿", "胱", "脂", "胰", "脅", "胭", "胴", "脆", "胸", "胳", "脈", "能", "脊", "胼", "胯", "臭", "臬", "舀", "舐", "航", "舫", "舨", "般", "芻", "茫", "荒", "荔", "荊", "茸", "荐", "草", "茵", "茴", "荏", "茲", "茹", "茶", "茗", "荀", "茱", "茨", "荃", "虔", "蚊", "蚪", "蚓", "蚤", "蚩", "蚌", "蚣", "蚜", "衰", "衷", "袁", "袂", "衽", "衹", "記", "訐", "討", "訌", "訕", "訊", "託", "訓", "訖", "訏", "訑", "豈", "豺", "豹", "財", "貢", "起", "躬", "軒", "軔", "軏", "辱", "送", "逆", "迷", "退", "迺", "迴", "逃", "追", "逅", "迸", "邕", "郡", "郝", "郢", "酒", "配", "酌", "釘", "針", "釗", "釜", "釙", "閃", "院", "陣", "陡", "陛", "陝", "除", "陘", "陞", "隻", "飢", "馬", "骨", "高", "鬥", "鬲", "鬼", "乾", "偺", "偽", "停", "假", "偃", "偌", "做", "偉", "健", "偶", "偎", "偕", "偵", "側", "偷", "偏", "倏", "偯", "偭", "兜", "冕", "凰", "剪", "副", "勒", "務", "勘", "動", "匐", "匏", "匙", "匿", "區", "匾", "參", "曼", "商", "啪", "啦", "啄", "啞", "啡", "啃", "啊", "唱", "啖", "問", "啕", "唯", "啤", "唸", "售", "啜", "唬", "啣", "唳", "啁", "啗", "圈", "國", "圉", "域", "堅", "堊", "堆", "埠", "埤", "基", "堂", "堵", "執", "培", "夠", "奢", "娶", "婁", "婉", "婦", "婪", "婀", "娼", "婢", "婚", "婆", "婊", "孰", "寇", "寅", "寄", "寂", "宿", "密", "尉", "專", "將", "屠", "屜", "屝", "崇", "崆", "崎", "崛", "崖", "崢", "崑", "崩", "崔", "崙", "崤", "崧", "崗", "巢", "常", "帶", "帳", "帷", "康", "庸", "庶", "庵", "庾", "張", "強", "彗", "彬", "彩", "彫", "得", "徙", "從", "徘", "御", "徠", "徜", "恿", "患", "悉", "悠", "您", "惋", "悴", "惦", "悽", "情", "悻", "悵", "惜", "悼", "惘", "惕", "惆", "惟", "悸", "惚", "惇", "戚", "戛", "扈", "掠", "控", "捲", "掖", "探", "接", "捷", "捧", "掘", "措", "捱", "掩", "掉", "掃", "掛", "捫", "推", "掄", "授", "掙", "採", "掬", "排", "掏", "掀", "捻", "捩", "捨", "捺", "敝", "敖", "救", "教", "敗", "啟", "敏", "敘", "敕", "敔", "斜", "斛", "斬", "族", "旋", "旌", "旎", "晝", "晚", "晤", "晨", "晦", "晞", "曹", "勗", "望", "梁", "梯", "梢", "梓", "梵", "桿", "桶", "梱", "梧", "梗", "械", "梃", "棄", "梭", "梆", "梅", "梔", "條", "梨", "梟", "梡", "梂", "欲", "殺", "毫", "毬", "氫", "涎", "涼", "淳", "淙", "液", "淡", "淌", "淤", "添", "淺", "清", "淇", "淋", "涯", "淑", "涮", "淞", "淹", "涸", "混", "淵", "淅", "淒", "渚", "涵", "淚", "淫", "淘", "淪", "深", "淮", "淨", "淆", "淄", "涪", "淬", "涿", "淦", "烹", "焉", "焊", "烽", "烯", "爽", "牽", "犁", "猜", "猛", "猖", "猓", "猙", "率", "琅", "琊", "球", "理", "現", "琍", "瓠", "瓶", "瓷", "甜", "產", "略", "畦", "畢", "異", "疏", "痔", "痕", "疵", "痊", "痍", "皎", "盔", "盒", "盛", "眷", "眾", "眼", "眶", "眸", "眺", "硫", "硃", "硎", "祥", "票", "祭", "移", "窒", "窕", "笠", "笨", "笛", "第", "符", "笙", "笞", "笮", "粒", "粗", "粕", "絆", "絃", "統", "紮", "紹", "紼", "絀", "細", "紳", "組", "累", "終", "紲", "紱", "缽", "羞", "羚", "翌", "翎", "習", "耜", "聊", "聆", "脯", "脖", "脣", "脫", "脩", "脰", "脤", "舂", "舵", "舷", "舶", "船", "莎", "莞", "莘", "荸", "莢", "莖", "莽", "莫", "莒", "莊", "莓", "莉", "莠", "荷", "荻", "荼", "莆", "莧", "處", "彪", "蛇", "蛀", "蚶", "蛄", "蚵", "蛆", "蛋", "蚱", "蚯", "蛉", "術", "袞", "袈", "被", "袒", "袖", "袍", "袋", "覓", "規", "訪", "訝", "訣", "訥", "許", "設", "訟", "訛", "訢", "豉", "豚", "販", "責", "貫", "貨", "貪", "貧", "赧", "赦", "趾", "趺", "軛", "軟", "這", "逍", "通", "逗", "連", "速", "逝", "逐", "逕", "逞", "造", "透", "逢", "逖", "逛", "途", "部", "郭", "都", "酗", "野", "釵", "釦", "釣", "釧", "釭", "釩", "閉", "陪", "陵", "陳", "陸", "陰", "陴", "陶", "陷", "陬", "雀", "雪", "雩", "章", "竟", "頂", "頃", "魚", "鳥", "鹵", "鹿", "麥", "麻", "傢", "傍", "傅", "備", "傑", "傀", "傖", "傘", "傚", "最", "凱", "割", "剴", "創", "剩", "勞", "勝", "勛", "博", "厥", "啻", "喀", "喧", "啼", "喊", "喝", "喘", "喂", "喜", "喪", "喔", "喇", "喋", "喃", "喳", "單", "喟", "唾", "喲", "喚", "喻", "喬", "喱", "啾", "喉", "喫", "喙", "圍", "堯", "堪", "場", "堤", "堰", "報", "堡", "堝", "堠", "壹", "壺", "奠", "婷", "媚", "婿", "媒", "媛", "媧", "孳", "孱", "寒", "富", "寓", "寐", "尊", "尋", "就", "嵌", "嵐", "崴", "嵇", "巽", "幅", "帽", "幀", "幃", "幾", "廊", "廁", "廂", "廄", "弼", "彭", "復", "循", "徨", "惑", "惡", "悲", "悶", "惠", "愜", "愣", "惺", "愕", "惰", "惻", "惴", "慨", "惱", "愎", "惶", "愉", "愀", "愒", "戟", "扉", "掣", "掌", "描", "揀", "揩", "揉", "揆", "揍", "插", "揣", "提", "握", "揖", "揭", "揮", "捶", "援", "揪", "換", "摒", "揚", "揹", "敞", "敦", "敢", "散", "斑", "斐", "斯", "普", "晰", "晴", "晶", "景", "暑", "智", "晾", "晷", "曾", "替", "期", "朝", "棺", "棕", "棠", "棘", "棗", "椅", "棟", "棵", "森", "棧", "棹", "棒", "棲", "棣", "棋", "棍", "植", "椒", "椎", "棉", "棚", "楮", "棻", "款", "欺", "欽", "殘", "殖", "殼", "毯", "氮", "氯", "氬", "港", "游", "湔", "渡", "渲", "湧", "湊", "渠", "渥", "渣", "減", "湛", "湘", "渤", "湖", "湮", "渭", "渦", "湯", "渴", "湍", "渺", "測", "湃", "渝", "渾", "滋", "溉", "渙", "湎", "湣", "湄", "湲", "湩", "湟", "焙", "焚", "焦", "焰", "無", "然", "煮", "焜", "牌", "犄", "犀", "猶", "猥", "猴", "猩", "琺", "琪", "琳", "琢", "琥", "琵", "琶", "琴", "琯", "琛", "琦", "琨", "甥", "甦", "畫", "番", "痢", "痛", "痣", "痙", "痘", "痞", "痠", "登", "發", "皖", "皓", "皴", "盜", "睏", "短", "硝", "硬", "硯", "稍", "稈", "程", "稅", "稀", "窘", "窗", "窖", "童", "竣", "等", "策", "筆", "筐", "筒", "答", "筍", "筋", "筏", "筑", "粟", "粥", "絞", "結", "絨", "絕", "紫", "絮", "絲", "絡", "給", "絢", "絰", "絳", "善", "翔", "翕", "耋", "聒", "肅", "腕", "腔", "腋", "腑", "腎", "脹", "腆", "脾", "腌", "腓", "腴", "舒", "舜", "菩", "萃", "菸", "萍", "菠", "菅", "萋", "菁", "華", "菱", "菴", "著", "萊", "菰", "萌", "菌", "菽", "菲", "菊", "萸", "萎", "萄", "菜", "萇", "菔", "菟", "虛", "蛟", "蛙", "蛭", "蛔", "蛛", "蛤", "蛐", "蛞", "街", "裁", "裂", "袱", "覃", "視", "註", "詠", "評", "詞", "証", "詁", "詔", "詛", "詐", "詆", "訴", "診", "訶", "詖", "象", "貂", "貯", "貼", "貳", "貽", "賁", "費", "賀", "貴", "買", "貶", "貿", "貸", "越", "超", "趁", "跎", "距", "跋", "跚", "跑", "跌", "跛", "跆", "軻", "軸", "軼", "辜", "逮", "逵", "週", "逸", "進", "逶", "鄂", "郵", "鄉", "郾", "酣", "酥", "量", "鈔", "鈕", "鈣", "鈉", "鈞", "鈍", "鈐", "鈇", "鈑", "閔", "閏", "開", "閑", "間", "閒", "閎", "隊", "階", "隋", "陽", "隅", "隆", "隍", "陲", "隄", "雁", "雅", "雄", "集", "雇", "雯", "雲", "韌", "項", "順", "須", "飧", "飪", "飯", "飩", "飲", "飭", "馮", "馭", "黃", "黍", "黑", "亂", "傭", "債", "傲", "傳", "僅", "傾", "催", "傷", "傻", "傯", "僇", "剿", "剷", "剽", "募", "勦", "勤", "勢", "勣", "匯", "嗟", "嗨", "嗓", "嗦", "嗎", "嗜", "嗇", "嗑", "嗣", "嗤", "嗯", "嗚", "嗡", "嗅", "嗆", "嗥", "嗉", "園", "圓", "塞", "塑", "塘", "塗", "塚", "塔", "填", "塌", "塭", "塊", "塢", "塒", "塋", "奧", "嫁", "嫉", "嫌", "媾", "媽", "媼", "媳", "嫂", "媲", "嵩", "嵯", "幌", "幹", "廉", "廈", "弒", "彙", "徬", "微", "愚", "意", "慈", "感", "想", "愛", "惹", "愁", "愈", "慎", "慌", "慄", "慍", "愾", "愴", "愧", "愍", "愆", "愷", "戡", "戢", "搓", "搾", "搞", "搪", "搭", "搽", "搬", "搏", "搜", "搔", "損", "搶", "搖", "搗", "搆", "敬", "斟", "新", "暗", "暉", "暇", "暈", "暖", "暄", "暘", "暍", "會", "榔", "業", "楚", "楷", "楠", "楔", "極", "椰", "概", "楊", "楨", "楫", "楞", "楓", "楹", "榆", "楝", "楣", "楛", "歇", "歲", "毀", "殿", "毓", "毽", "溢", "溯", "滓", "溶", "滂", "源", "溝", "滇", "滅", "溥", "溘", "溼", "溺", "溫", "滑", "準", "溜", "滄", "滔", "溪", "溧", "溴", "煎", "煙", "煩", "煤", "煉", "照", "煜", "煬", "煦", "煌", "煥", "煞", "煆", "煨", "煖", "爺", "牒", "猷", "獅", "猿", "猾", "瑯", "瑚", "瑕", "瑟", "瑞", "瑁", "琿", "瑙", "瑛", "瑜", "當", "畸", "瘀", "痰", "瘁", "痲", "痱", "痺", "痿", "痴", "痳", "盞", "盟", "睛", "睫", "睦", "睞", "督", "睹", "睪", "睬", "睜", "睥", "睨", "睢", "矮", "碎", "碰", "碗", "碘", "碌", "碉", "硼", "碑", "碓", "硿", "祺", "祿", "禁", "萬", "禽", "稜", "稚", "稠", "稔", "稟", "稞", "窟", "窠", "筷", "節", "筠", "筮", "筧", "粱", "粳", "粵", "經", "絹", "綑", "綁", "綏", "絛", "置", "罩", "罪", "署", "義", "羨", "群", "聖", "聘", "肆", "肄", "腱", "腰", "腸", "腥", "腮", "腳", "腫", "腹", "腺", "腦", "舅", "艇", "蒂", "葷", "落", "萱", "葵", "葦", "葫", "葉", "葬", "葛", "萼", "萵", "葡", "董", "葩", "葭", "葆", "虞", "虜", "號", "蛹", "蜓", "蜈", "蜇", "蜀", "蛾", "蛻", "蜂", "蜃", "蜆", "蜊", "衙", "裟", "裔", "裙", "補", "裘", "裝", "裡", "裊", "裕", "裒", "覜", "解", "詫", "該", "詳", "試", "詩", "詰", "誇", "詼", "詣", "誠", "話", "誅", "詭", "詢", "詮", "詬", "詹", "詻", "訾", "詨", "豢", "貊", "貉", "賊", "資", "賈", "賄", "貲", "賃", "賂", "賅", "跡", "跟", "跨", "路", "跳", "跺", "跪", "跤", "跦", "躲", "較", "載", "軾", "輊", "辟", "農", "運", "遊", "道", "遂", "達", "逼", "違", "遐", "遇", "遏", "過", "遍", "遑", "逾", "遁", "鄒", "鄗", "酬", "酪", "酩", "釉", "鈷", "鉗", "鈸", "鈽", "鉀", "鈾", "鉛", "鉋", "鉤", "鉑", "鈴", "鉉", "鉍", "鉅", "鈹", "鈿", "鉚", "閘", "隘", "隔", "隕", "雍", "雋", "雉", "雊", "雷", "電", "雹", "零", "靖", "靴", "靶", "預", "頑", "頓", "頊", "頒", "頌", "飼", "飴", "飽", "飾", "馳", "馱", "馴", "髡", "鳩", "麂", "鼎", "鼓", "鼠", "僧", "僮", "僥", "僖", "僭", "僚", "僕", "像", "僑", "僱", "僎", "僩", "兢", "凳", "劃", "劂", "匱", "厭", "嗾", "嘀", "嘛", "嘗", "嗽", "嘔", "嘆", "嘉", "嘍", "嘎", "嗷", "嘖", "嘟", "嘈", "嘐", "嗶", "團", "圖", "塵", "塾", "境", "墓", "墊", "塹", "墅", "塽", "壽", "夥", "夢", "夤", "奪", "奩", "嫡", "嫦", "嫩", "嫗", "嫖", "嫘", "嫣", "孵", "寞", "寧", "寡", "寥", "實", "寨", "寢", "寤", "察", "對", "屢", "嶄", "嶇", "幛", "幣", "幕", "幗", "幔", "廓", "廖", "弊", "彆", "彰", "徹", "慇", "愿", "態", "慷", "慢", "慣", "慟", "慚", "慘", "慵", "截", "撇", "摘", "摔", "撤", "摸", "摟", "摺", "摑", "摧", "搴", "摭", "摻", "敲", "斡", "旗", "旖", "暢", "暨", "暝", "榜", "榨", "榕", "槁", "榮", "槓", "構", "榛", "榷", "榻", "榫", "榴", "槐", "槍", "榭", "槌", "榦", "槃", "榣", "歉", "歌", "氳", "漳", "演", "滾", "漓", "滴", "漩", "漾", "漠", "漬", "漏", "漂", "漢", "滿", "滯", "漆", "漱", "漸", "漲", "漣", "漕", "漫", "漯", "澈", "漪", "滬", "漁", "滲", "滌", "滷", "熔", "熙", "煽", "熊", "熄", "熒", "爾", "犒", "犖", "獄", "獐", "瑤", "瑣", "瑪", "瑰", "瑭", "甄", "疑", "瘧", "瘍", "瘋", "瘉", "瘓", "盡", "監", "瞄", "睽", "睿", "睡", "磁", "碟", "碧", "碳", "碩", "碣", "禎", "福", "禍", "種", "稱", "窪", "窩", "竭", "端", "管", "箕", "箋", "筵", "算", "箝", "箔", "箏", "箸", "箇", "箄", "粹", "粽", "精", "綻", "綰", "綜", "綽", "綾", "綠", "緊", "綴", "網", "綱", "綺", "綢", "綿", "綵", "綸", "維", "緒", "緇", "綬", "罰", "翠", "翡", "翟", "聞", "聚", "肇", "腐", "膀", "膏", "膈", "膊", "腿", "膂", "臧", "臺", "與", "舔", "舞", "艋", "蓉", "蒿", "蓆", "蓄", "蒙", "蒞", "蒲", "蒜", "蓋", "蒸", "蓀", "蓓", "蒐", "蒼", "蓑", "蓊", "蜿", "蜜", "蜻", "蜢", "蜥", "蜴", "蜘", "蝕", "蜷", "蜩", "裳", "褂", "裴", "裹", "裸", "製", "裨", "褚", "裯", "誦", "誌", "語", "誣", "認", "誡", "誓", "誤", "說", "誥", "誨", "誘", "誑", "誚", "誧", "豪", "貍", "貌", "賓", "賑", "賒", "赫", "趙", "趕", "跼", "輔", "輒", "輕", "輓", "辣", "遠", "遘", "遜", "遣", "遙", "遞", "遢", "遝", "遛", "鄙", "鄘", "鄞", "酵", "酸", "酷", "酴", "鉸", "銀", "銅", "銘", "銖", "鉻", "銓", "銜", "銨", "鉼", "銑", "閡", "閨", "閩", "閣", "閥", "閤", "隙", "障", "際", "雌", "雒", "需", "靼", "鞅", "韶", "頗", "領", "颯", "颱", "餃", "餅", "餌", "餉", "駁", "骯", "骰", "髦", "魁", "魂", "鳴", "鳶", "鳳", "麼", "鼻", "齊", "億", "儀", "僻", "僵", "價", "儂", "儈", "儉", "儅", "凜", "劇", "劈", "劉", "劍", "劊", "勰", "厲", "嘮", "嘻", "嘹", "嘲", "嘿", "嘴", "嘩", "噓", "噎", "噗", "噴", "嘶", "嘯", "嘰", "墀", "墟", "增", "墳", "墜", "墮", "墩", "墦", "奭", "嬉", "嫻", "嬋", "嫵", "嬌", "嬈", "寮", "寬", "審", "寫", "層", "履", "嶝", "嶔", "幢", "幟", "幡", "廢", "廚", "廟", "廝", "廣", "廠", "彈", "影", "德", "徵", "慶", "慧", "慮", "慝", "慕", "憂", "慼", "慰", "慫", "慾", "憧", "憐", "憫", "憎", "憬", "憚", "憤", "憔", "憮", "戮", "摩", "摯", "摹", "撞", "撲", "撈", "撐", "撰", "撥", "撓", "撕", "撩", "撒", "撮", "播", "撫", "撚", "撬", "撙", "撢", "撳", "敵", "敷", "數", "暮", "暫", "暴", "暱", "樣", "樟", "槨", "樁", "樞", "標", "槽", "模", "樓", "樊", "槳", "樂", "樅", "槭", "樑", "歐", "歎", "殤", "毅", "毆", "漿", "潼", "澄", "潑", "潦", "潔", "澆", "潭", "潛", "潸", "潮", "澎", "潺", "潰", "潤", "澗", "潘", "滕", "潯", "潠", "潟", "熟", "熬", "熱", "熨", "牖", "犛", "獎", "獗", "瑩", "璋", "璃", "瑾", "璀", "畿", "瘠", "瘩", "瘟", "瘤", "瘦", "瘡", "瘢", "皚", "皺", "盤", "瞎", "瞇", "瞌", "瞑", "瞋", "磋", "磅", "確", "磊", "碾", "磕", "碼", "磐", "稿", "稼", "穀", "稽", "稷", "稻", "窯", "窮", "箭", "箱", "範", "箴", "篆", "篇", "篁", "箠", "篌", "糊", "締", "練", "緯", "緻", "緘", "緬", "緝", "編", "緣", "線", "緞", "緩", "綞", "緙", "緲", "緹", "罵", "罷", "羯", "翩", "耦", "膛", "膜", "膝", "膠", "膚", "膘", "蔗", "蔽", "蔚", "蓮", "蔬", "蔭", "蔓", "蔑", "蔣", "蔡", "蔔", "蓬", "蔥", "蓿", "蔆", "螂", "蝴", "蝶", "蝠", "蝦", "蝸", "蝨", "蝙", "蝗", "蝌", "蝓", "衛", "衝", "褐", "複", "褒", "褓", "褕", "褊", "誼", "諒", "談", "諄", "誕", "請", "諸", "課", "諉", "諂", "調", "誰", "論", "諍", "誶", "誹", "諛", "豌", "豎", "豬", "賠", "賞", "賦", "賤", "賬", "賭", "賢", "賣", "賜", "質", "賡", "赭", "趟", "趣", "踫", "踐", "踝", "踢", "踏", "踩", "踟", "踡", "踞", "躺", "輝", "輛", "輟", "輩", "輦", "輪", "輜", "輞", "輥", "適", "遮", "遨", "遭", "遷", "鄰", "鄭", "鄧", "鄱", "醇", "醉", "醋", "醃", "鋅", "銻", "銷", "鋪", "銬", "鋤", "鋁", "銳", "銼", "鋒", "鋇", "鋰", "銲", "閭", "閱", "霄", "霆", "震", "霉", "靠", "鞍", "鞋", "鞏", "頡", "頫", "頜", "颳", "養", "餓", "餒", "餘", "駝", "駐", "駟", "駛", "駑", "駕", "駒", "駙", "骷", "髮", "髯", "鬧", "魅", "魄", "魷", "魯", "鴆", "鴉", "鴃", "麩", "麾", "黎", "墨", "齒", "儒", "儘", "儔", "儐", "儕", "冀", "冪", "凝", "劑", "劓", "勳", "噙", "噫", "噹", "噩", "噤", "噸", "噪", "器", "噥", "噱", "噯", "噬", "噢", "噶", "壁", "墾", "壇", "壅", "奮", "嬝", "嬴", "學", "寰", "導", "彊", "憲", "憑", "憩", "憊", "懍", "憶", "憾", "懊", "懈", "戰", "擅", "擁", "擋", "撻", "撼", "據", "擄", "擇", "擂", "操", "撿", "擒", "擔", "撾", "整", "曆", "曉", "暹", "曄", "曇", "暸", "樽", "樸", "樺", "橙", "橫", "橘", "樹", "橄", "橢", "橡", "橋", "橇", "樵", "機", "橈", "歙", "歷", "氅", "濂", "澱", "澡", "濃", "澤", "濁", "澧", "澳", "激", "澹", "澶", "澦", "澠", "澴", "熾", "燉", "燐", "燒", "燈", "燕", "熹", "燎", "燙", "燜", "燃", "燄", "獨", "璜", "璣", "璘", "璟", "璞", "瓢", "甌", "甍", "瘴", "瘸", "瘺", "盧", "盥", "瞠", "瞞", "瞟", "瞥", "磨", "磚", "磬", "磧", "禦", "積", "穎", "穆", "穌", "穋", "窺", "篙", "簑", "築", "篤", "篛", "篡", "篩", "篦", "糕", "糖", "縊", "縑", "縈", "縛", "縣", "縞", "縝", "縉", "縐", "罹", "羲", "翰", "翱", "翮", "耨", "膳", "膩", "膨", "臻", "興", "艘", "艙", "蕊", "蕙", "蕈", "蕨", "蕩", "蕃", "蕉", "蕭", "蕪", "蕞", "螃", "螟", "螞", "螢", "融", "衡", "褪", "褲", "褥", "褫", "褡", "親", "覦", "諦", "諺", "諫", "諱", "謀", "諜", "諧", "諮", "諾", "謁", "謂", "諷", "諭", "諳", "諶", "諼", "豫", "豭", "貓", "賴", "蹄", "踱", "踴", "蹂", "踹", "踵", "輻", "輯", "輸", "輳", "辨", "辦", "遵", "遴", "選", "遲", "遼", "遺", "鄴", "醒", "錠", "錶", "鋸", "錳", "錯", "錢", "鋼", "錫", "錄", "錚", "錐", "錦", "錡", "錕", "錮", "錙", "閻", "隧", "隨", "險", "雕", "霎", "霑", "霖", "霍", "霓", "霏", "靛", "靜", "靦", "鞘", "頰", "頸", "頻", "頷", "頭", "頹", "頤", "餐", "館", "餞", "餛", "餡", "餚", "駭", "駢", "駱", "骸", "骼", "髻", "髭", "鬨", "鮑", "鴕", "鴣", "鴦", "鴨", "鴒", "鴛", "默", "黔", "龍", "龜", "優", "償", "儡", "儲", "勵", "嚎", "嚀", "嚐", "嚅", "嚇", "嚏", "壕", "壓", "壑", "壎", "嬰", "嬪", "嬤", "孺", "尷", "屨", "嶼", "嶺", "嶽", "嶸", "幫", "彌", "徽", "應", "懂", "懇", "懦", "懋", "戲", "戴", "擎", "擊", "擘", "擠", "擰", "擦", "擬", "擱", "擢", "擭", "斂", "斃", "曙", "曖", "檀", "檔", "檄", "檢", "檜", "櫛", "檣", "橾", "檗", "檐", "檠", "歜", "殮", "毚", "氈", "濘", "濱", "濟", "濠", "濛", "濤", "濫", "濯", "澀", "濬", "濡", "濩", "濕", "濮", "濰", "燧", "營", "燮", "燦", "燥", "燭", "燬", "燴", "燠", "爵", "牆", "獰", "獲", "璩", "環", "璦", "璨", "癆", "療", "癌", "盪", "瞳", "瞪", "瞰", "瞬", "瞧", "瞭", "矯", "磷", "磺", "磴", "磯", "礁", "禧", "禪", "穗", "窿", "簇", "簍", "篾", "篷", "簌", "篠", "糠", "糜", "糞", "糢", "糟", "糙", "糝", "縮", "績", "繆", "縷", "縲", "繃", "縫", "總", "縱", "繅", "繁", "縴", "縹", "繈", "縵", "縿", "縯", "罄", "翳", "翼", "聱", "聲", "聰", "聯", "聳", "臆", "臃", "膺", "臂", "臀", "膿", "膽", "臉", "膾", "臨", "舉", "艱", "薪", "薄", "蕾", "薜", "薑", "薔", "薯", "薛", "薇", "薨", "薊", "虧", "蟀", "蟑", "螳", "蟒", "蟆", "螫", "螻", "螺", "蟈", "蟋", "褻", "褶", "襄", "褸", "褽", "覬", "謎", "謗", "謙", "講", "謊", "謠", "謝", "謄", "謐", "豁", "谿", "豳", "賺", "賽", "購", "賸", "賻", "趨", "蹉", "蹋", "蹈", "蹊", "轄", "輾", "轂", "轅", "輿", "避", "遽", "還", "邁", "邂", "邀", "鄹", "醣", "醞", "醜", "鍍", "鎂", "錨", "鍵", "鍊", "鍥", "鍋", "錘", "鍾", "鍬", "鍛", "鍰", "鍚", "鍔", "闊", "闋", "闌", "闈", "闆", "隱", "隸", "雖", "霜", "霞", "鞠", "韓", "顆", "颶", "餵", "騁", "駿", "鮮", "鮫", "鮪", "鮭", "鴻", "鴿", "麋", "黏", "點", "黜", "黝", "黛", "鼾", "齋", "叢", "嚕", "嚮", "壙", "壘", "嬸", "彝", "懣", "戳", "擴", "擲", "擾", "攆", "擺", "擻", "擷", "斷", "曜", "朦", "檳", "檬", "櫃", "檻", "檸", "櫂", "檮", "檯", "歟", "歸", "殯", "瀉", "瀋", "濾", "瀆", "濺", "瀑", "瀏", "燻", "燼", "燾", "燸", "獷", "獵", "璧", "璿", "甕", "癖", "癘", "癒", "瞽", "瞿", "瞻", "瞼", "礎", "禮", "穡", "穢", "穠", "竄", "竅", "簫", "簧", "簪", "簞", "簣", "簡", "糧", "織", "繕", "繞", "繚", "繡", "繒", "繙", "罈", "翹", "翻", "職", "聶", "臍", "臏", "舊", "藏", "薩", "藍", "藐", "藉", "薰", "薺", "薹", "薦", "蟯", "蟬", "蟲", "蟠", "覆", "覲", "觴", "謨", "謹", "謬", "謫", "豐", "贅", "蹙", "蹣", "蹦", "蹤", "蹟", "蹕", "軀", "轉", "轍", "邇", "邃", "邈", "醫", "醬", "釐", "鎔", "鎊", "鎖", "鎢", "鎳", "鎮", "鎬", "鎰", "鎘", "鎚", "鎗", "闔", "闖", "闐", "闕", "離", "雜", "雙", "雛", "雞", "霤", "鞣", "鞦", "鞭", "韹", "額", "顏", "題", "顎", "顓", "颺", "餾", "餿", "餽", "餮", "馥", "騎", "髁", "鬃", "鬆", "魏", "魎", "魍", "鯊", "鯉", "鯽", "鯈", "鯀", "鵑", "鵝", "鵠", "黠", "鼕", "鼬", "儳", "嚥", "壞", "壟", "壢", "寵", "龐", "廬", "懲", "懷", "懶", "懵", "攀", "攏", "曠", "曝", "櫥", "櫝", "櫚", "櫓", "瀛", "瀟", "瀨", "瀚", "瀝", "瀕", "瀘", "爆", "爍", "牘", "犢", "獸", "獺", "璽", "瓊", "瓣", "疇", "疆", "癟", "癡", "矇", "礙", "禱", "穫", "穩", "簾", "簿", "簸", "簽", "簷", "籀", "繫", "繭", "繹", "繩", "繪", "羅", "繳", "羶", "羹", "羸", "臘", "藩", "藝", "藪", "藕", "藤", "藥", "藷", "蟻", "蠅", "蠍", "蟹", "蟾", "襠", "襟", "襖", "襞", "譁", "譜", "識", "證", "譚", "譎", "譏", "譆", "譙", "贈", "贊", "蹼", "蹲", "躇", "蹶", "蹬", "蹺", "蹴", "轔", "轎", "辭", "邊", "邋", "醱", "醮", "鏡", "鏑", "鏟", "鏃", "鏈", "鏜", "鏝", "鏖", "鏢", "鏍", "鏘", "鏤", "鏗", "鏨", "關", "隴", "難", "霪", "霧", "靡", "韜", "韻", "類", "願", "顛", "颼", "饅", "饉", "騖", "騙", "鬍", "鯨", "鯧", "鯖", "鯛", "鶉", "鵡", "鵲", "鵪", "鵬", "麒", "麗", "麓", "麴", "勸", "嚨", "嚷", "嚶", "嚴", "嚼", "壤", "孀", "孃", "孽", "寶", "巉", "懸", "懺", "攘", "攔", "攙", "曦", "朧", "櫬", "瀾", "瀰", "瀲", "爐", "獻", "瓏", "癢", "癥", "礦", "礪", "礬", "礫", "竇", "競", "籌", "籃", "籍", "糯", "糰", "辮", "繽", "繼", "纂", "罌", "耀", "臚", "艦", "藻", "藹", "蘑", "藺", "蘆", "蘋", "蘇", "蘊", "蠔", "蠕", "襤", "覺", "觸", "議", "譬", "警", "譯", "譟", "譫", "贏", "贍", "躉", "躁", "躅", "躂", "醴", "釋", "鐘", "鐃", "鏽", "闡", "霰", "飄", "饒", "饑", "馨", "騫", "騰", "騷", "騵", "鰓", "鰍", "鹹", "麵", "黨", "鼯", "齟", "齣", "齡", "儷", "儸", "囁", "囀", "囂", "夔", "屬", "巍", "懼", "懾", "攝", "攜", "斕", "曩", "櫻", "欄", "櫺", "殲", "灌", "爛", "犧", "瓖", "瓔", "癩", "矓", "籐", "纏", "續", "羼", "蘗", "蘭", "蘚", "蠣", "蠢", "蠡", "蠟", "襪", "襬", "覽", "譴", "護", "譽", "贓", "躊", "躍", "躋", "轟", "辯", "醺", "鐮", "鐳", "鐵", "鐺", "鐸", "鐲", "鐫", "闢", "霸", "霹", "露", "響", "顧", "顥", "饗", "驅", "驃", "驀", "騾", "髏", "魔", "魑", "鰭", "鰥", "鶯", "鶴", "鷂", "鶸", "麝", "黯", "鼙", "齜", "齦", "齧", "儼", "儻", "囈", "囊", "囉", "孿", "巔", "巒", "彎", "懿", "攤", "權", "歡", "灑", "灘", "玀", "瓤", "疊", "癮", "癬", "禳", "籠", "籟", "聾", "聽", "臟", "襲", "襯", "觼", "讀", "贖", "贗", "躑", "躓", "轡", "酈", "鑄", "鑑", "鑒", "霽", "霾", "韃", "韁", "顫", "饕", "驕", "驍", "髒", "鬚", "鱉", "鰱", "鰾", "鰻", "鷓", "鷗", "鼴", "齬", "齪", "龔", "囌", "巖", "戀", "攣", "攫", "攪", "曬", "欐", "瓚", "竊", "籤", "籣", "籥", "纓", "纖", "纔", "臢", "蘸", "蘿", "蠱", "變", "邐", "邏", "鑣", "鑠", "鑤", "靨", "顯", "饜", "驚", "驛", "驗", "髓", "體", "髑", "鱔", "鱗", "鱖", "鷥", "麟", "黴", "囑", "壩", "攬", "灞", "癱", "癲", "矗", "罐", "羈", "蠶", "蠹", "衢", "讓", "讒", "讖", "艷", "贛", "釀", "鑪", "靂", "靈", "靄", "韆", "顰", "驟", "鬢", "魘", "鱟", "鷹", "鷺", "鹼", "鹽", "鼇", "齷", "齲", "廳", "欖", "灣", "籬", "籮", "蠻", "觀", "躡", "釁", "鑲", "鑰", "顱", "饞", "髖", "鬣", "黌", "灤", "矚", "讚", "鑷", "韉", "驢", "驥", "纜", "讜", "躪", "釅", "鑽", "鑾", "鑼", "鱷", "鱸", "黷", "豔", "鑿", "鸚", "爨", "驪", "鬱", "鸛", "鸞", "籲", "乂", "乜", "凵", "匚", "厂", "万", "丌", "乇", "亍", "囗", "兀", "屮", "彳", "丏", "冇", "与", "丮", "亓", "仂", "仉", "仈", "冘", "勼", "卬", "厹", "圠", "夃", "夬", "尐", "巿", "旡", "殳", "毌", "气", "爿", "丱", "丼", "仨", "仜", "仩", "仡", "仝", "仚", "刌", "匜", "卌", "圢", "圣", "夗", "夯", "宁", "宄", "尒", "尻", "屴", "屳", "帄", "庀", "庂", "忉", "戉", "扐", "氕", "氶", "汃", "氿", "氻", "犮", "犰", "玊", "禸", "肊", "阞", "伎", "优", "伬", "仵", "伔", "仱", "伀", "价", "伈", "伝", "伂", "伅", "伢", "伓", "伄", "仴", "伒", "冱", "刓", "刉", "刐", "劦", "匢", "匟", "卍", "厊", "吇", "囡", "囟", "圮", "圪", "圴", "夼", "妀", "奼", "妅", "奻", "奾", "奷", "奿", "孖", "尕", "尥", "屼", "屺", "屻", "屾", "巟", "幵", "庄", "异", "弚", "彴", "忕", "忔", "忏", "扜", "扞", "扤", "扡", "扦", "扢", "扙", "扠", "扚", "扥", "旯", "旮", "朾", "朹", "朸", "朻", "机", "朿", "朼", "朳", "氘", "汆", "汒", "汜", "汏", "汊", "汔", "汋", "汌", "灱", "牞", "犴", "犵", "玎", "甪", "癿", "穵", "网", "艸", "艼", "芀", "艽", "艿", "虍", "襾", "邙", "邗", "邘", "邛", "邔", "阢", "阤", "阠", "阣", "佖", "伻", "佢", "佉", "体", "佤", "伾", "佧", "佒", "佟", "佁", "佘", "伭", "伳", "伿", "佡", "冏", "冹", "刜", "刞", "刡", "劭", "劮", "匉", "卣", "卲", "厎", "厏", "吰", "吷", "吪", "呔", "呅", "吙", "吜", "吥", "吘", "吽", "呏", "呁", "吨", "吤", "呇", "囮", "囧", "囥", "坁", "坅", "坌", "坉", "坋", "坒", "夆", "奀", "妦", "妘", "妠", "妗", "妎", "妢", "妐", "妏", "妧", "妡", "宎", "宒", "尨", "尪", "岍", "岏", "岈", "岋", "岉", "岒", "岊", "岆", "岓", "岕", "巠", "帊", "帎", "庋", "庉", "庌", "庈", "庍", "弅", "弝", "彸", "彶", "忒", "忑", "忐", "忭", "忨", "忮", "忳", "忡", "忤", "忣", "忺", "忯", "忷", "忻", "怀", "忴", "戺", "抃", "抌", "抎", "抏", "抔", "抇", "扱", "扻", "扺", "扰", "抁", "抈", "扷", "扽", "扲", "扴", "攷", "旰", "旴", "旳", "旲", "旵", "杅", "杇", "杙", "杕", "杌", "杈", "杝", "杍", "杚", "杋", "毐", "氙", "氚", "汸", "汧", "汫", "沄", "沋", "沏", "汱", "汯", "汩", "沚", "汭", "沇", "沕", "沜", "汦", "汳", "汥", "汻", "沎", "灴", "灺", "牣", "犿", "犽", "狃", "狆", "狁", "犺", "狅", "玕", "玗", "玓", "玔", "玒", "町", "甹", "疔", "疕", "皁", "礽", "耴", "肕", "肙", "肐", "肒", "肜", "芐", "芏", "芅", "芎", "芑", "芓", "芊", "芃", "芄", "豸", "迉", "辿", "邟", "邡", "邥", "邞", "邧", "邠", "阰", "阨", "阯", "阭", "丳", "侘", "佼", "侅", "佽", "侀", "侇", "佶", "佴", "侉", "侄", "佷", "佌", "侗", "佪", "侚", "佹", "侁", "佸", "侐", "侜", "侔", "侞", "侒", "侂", "侕", "佫", "佮", "冞", "冼", "冾", "刵", "刲", "刳", "剆", "刱", "劼", "匊", "匋", "匼", "厒", "厔", "咇", "呿", "咁", "咑", "咂", "咈", "呫", "呺", "呾", "呥", "呬", "呴", "呦", "咍", "呯", "呡", "呠", "咘", "呣", "呧", "呤", "囷", "囹", "坯", "坲", "坭", "坫", "坱", "坰", "坶", "垀", "坵", "坻", "坳", "坴", "坢", "坨", "坽", "夌", "奅", "妵", "妺", "姏", "姎", "妲", "姌", "姁", "妶", "妼", "姃", "姖", "妱", "妽", "姀", "姈", "妴", "姇", "孢", "孥", "宓", "宕", "屄", "屇", "岮", "岤", "岠", "岵", "岯", "岨", "岬", "岟", "岣", "岭", "岢", "岪", "岧", "岝", "岥", "岶", "岰", "岦", "帗", "帔", "帙", "弨", "弢", "弣", "弤", "彔", "徂", "彾", "彽", "忞", "忥", "怭", "怦", "怙", "怲", "怋", "怴", "怊", "怗", "怳", "怚", "怞", "怬", "怢", "怍", "怐", "怮", "怓", "怑", "怌", "怉", "怜", "戔", "戽", "抭", "抴", "拑", "抾", "抪", "抶", "拊", "抮", "抳", "抯", "抻", "抩", "抰", "抸", "攽", "斨", "斻", "昉", "旼", "昄", "昒", "昈", "旻", "昃", "昋", "昍", "昅", "旽", "昑", "昐", "曶", "朊", "枅", "杬", "枎", "枒", "杶", "杻", "枘", "枆", "构", "杴", "枍", "枌", "杺", "枟", "枑", "枙", "枃", "杽", "极", "杸", "杹", "枔", "欥", "殀", "歾", "毞", "氝", "沓", "泬", "泫", "泮", "泙", "沶", "泔", "沭", "泧", "沷", "泐", "泂", "沺", "泃", "泆", "泭", "泲", "泒", "泝", "沴", "沊", "沝", "沀", "泞", "泀", "洰", "泍", "泇", "沰", "泹", "泏", "泩", "泑", "炔", "炘", "炅", "炓", "炆", "炄", "炑", "炖", "炂", "炚", "炃", "牪", "狖", "狋", "狘", "狉", "狜", "狒", "狔", "狚", "狌", "狑", "玤", "玡", "玭", "玦", "玢", "玠", "玬", "玝", "瓝", "瓨", "甿", "畀", "甾", "疌", "疘", "皯", "盳", "盱", "盰", "盵", "矸", "矼", "矹", "矻", "矺", "矷", "祂", "礿", "秅", "穸", "穻", "竻", "籵", "糽", "耵", "肏", "肮", "肣", "肸", "肵", "肭", "舠", "芠", "苀", "芫", "芚", "芘", "芛", "芵", "芧", "芮", "芼", "芞", "芺", "芴", "芨", "芡", "芩", "苂", "芤", "苃", "芶", "芢", "虰", "虯", "虭", "虮", "豖", "迒", "迋", "迓", "迍", "迖", "迕", "迗", "邲", "邴", "邯", "邳", "邰", "阹", "阽", "阼", "阺", "陃", "俍", "俅", "俓", "侲", "俉", "俋", "俁", "俔", "俜", "俙", "侻", "侳", "俛", "俇", "俖", "侺", "俀", "侹", "俬", "剄", "剉", "勀", "勂", "匽", "卼", "厗", "厖", "厙", "厘", "咺", "咡", "咭", "咥", "哏", "哃", "茍", "咷", "咮", "哖", "咶", "哅", "哆", "咠", "呰", "咼", "咢", "咾", "呲", "哞", "咰", "垵", "垞", "垟", "垤", "垌", "垗", "垝", "垛", "垔", "垘", "垏", "垙", "垥", "垚", "垕", "壴", "复", "奓", "姡", "姞", "姮", "娀", "姱", "姝", "姺", "姽", "姼", "姶", "姤", "姲", "姷", "姛", "姩", "姳", "姵", "姠", "姾", "姴", "姭", "宨", "屌", "峐", "峘", "峌", "峗", "峋", "峛", "峞", "峚", "峉", "峇", "峊", "峖", "峓", "峔", "峏", "峈", "峆", "峎", "峟", "峸", "巹", "帡", "帢", "帣", "帠", "帤", "庰", "庤", "庢", "庛", "庣", "庥", "弇", "弮", "彖", "徆", "怷", "怹", "恔", "恲", "恞", "恅", "恓", "恇", "恉", "恛", "恌", "恀", "恂", "恟", "怤", "恄", "恘", "恦", "恮", "扂", "扃", "拏", "挍", "挋", "拵", "挎", "挃", "拫", "拹", "挏", "挌", "拸", "拶", "挀", "挓", "挔", "拺", "挕", "拻", "拰", "敁", "敃", "斪", "斿", "昶", "昡", "昲", "昵", "昜", "昦", "昢", "昳", "昫", "昺", "昝", "昴", "昹", "昮", "朏", "朐", "柁", "柲", "柈", "枺", "柜", "枻", "柸", "柘", "柀", "枷", "柅", "柫", "柤", "柟", "枵", "柍", "枳", "柷", "柶", "柮"],
        m = {
      EMPTY: "",
      INCORRECT: "Incorrect. Try again.",
      CORRECT: "Correct!! Press enter for next character"
    },
        h = function (r) {
      (0, n.default)(s, r);
      var a = f(s);

      function s(e) {
        var n;
        return (0, t.default)(this, s), (n = a.call(this, e)).setNextPrompt = function () {
          var t = Math.floor(Math.random() * p.length) + 1,
              e = p[t];
          e && n.setState({
            prompt: e
          });
        }, n.process = function (t) {
          console.log(t), n.setState({
            content: "",
            big5Key: t,
            displayUrl: "http://input.foruto.com/cjdict/Images/CJZD_JPG/".concat(t, ".JPG")
          }), console.log(n.state.displayUrl);
        }, n.setEditable = function (t) {
          n.state.textAreaEditable !== t && n.setState({
            textAreaEditable: t
          });
        }, n.setStatus = function (t) {
          n.state.status !== t && n.setState({
            status: t
          });
        }, n.clearContent = function () {
          n.setState({
            content: ""
          });
        }, n.makeWhitelistRegex = function (t) {
          return new RegExp("[^" + t + "]", "g");
        }, n.sanitise = function (t) {
          var e = n.makeWhitelistRegex("a-zA-Z0-9㐀-䶵一-鿋豈-頻㄰-㆏ᄀ-ᇿꥠ-꥿ힰ-퟿가-힯぀-ゟ゠-ヿ⺀-⿕");
          return t.replace(e, "");
        }, n.handleKeyPress = function (t) {
          if ("Enter" === t.key) {
            if (t.preventDefault(), console.log("CONTENTS"), console.log(n.state.content), "" === n.state.content) return console.log("NEXT PROMPTTTT"), n.setStatus(m.EMPTY), n.setNextPrompt(), void n.setEditable(!0);
            if (n.state.content !== n.state.prompt) return n.setStatus(m.INCORRECT), void console.log("INCORRECT");
            n.setStatus(m.CORRECT), console.log("CORRECT!!!!"), n.clearContent(), n.setEditable(!1), console.log(n.state.content);
            var e,
                r = "",
                a = u(l.default.encode(n.state.content, "big5"));

            try {
              for (a.s(); !(e = a.n()).done;) {
                var o = e.value;
                console.log(o), r += o.toString(16);
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }

            r ? n.process(r.toUpperCase()) : console.warn("No big5 key created, ignoring: " + content + " " + r);
          }
        }, n.handleChange = function (t) {
          n.setState({
            content: n.sanitise(t.target.value)
          });
        }, n.state = {
          prompt: "",
          content: "",
          big5Key: "",
          displayUrl: "",
          textAreaEditable: !0,
          status: m.EMPTY
        }, n;
      }

      return (0, e.default)(s, [{
        key: "componentDidMount",
        value: function value() {
          this.setNextPrompt();
        }
      }, {
        key: "render",
        value: function value() {
          return o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
            className: "prompt"
          }, this.state.prompt), o.default.createElement("div", {
            className: "status"
          }, this.state.status), o.default.createElement("textarea", {
            className: "input",
            id: "input",
            maxLength: "1",
            onKeyPress: this.handleKeyPress,
            onChange: this.handleChange
          }), o.default.createElement("div", null, o.default.createElement("br", null), this.state.displayUrl ? o.default.createElement("img", {
            src: this.state.displayUrl
          }) : null));
        }
      }]), s;
    }(o.default.Component),
        y = function y() {
      return o.default.createElement(h, null);
    };

    exports.default = y;
  }, {
    "@babel/runtime/helpers/classCallCheck": "ZBnv",
    "@babel/runtime/helpers/createClass": "NoOd",
    "@babel/runtime/helpers/inherits": "qngw",
    "@babel/runtime/helpers/possibleConstructorReturn": "GFCP",
    "@babel/runtime/helpers/getPrototypeOf": "WQgz",
    "react": "HdMw",
    "iconv-lite": "XCGw",
    "./App.css": "sC8V"
  }],
  "H99C": [function (require, module, exports) {
    "use strict";

    var e = u(require("react")),
        r = u(require("react-dom")),
        t = u(require("./App"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    r.default.render(e.default.createElement(t.default, null), document.getElementById("root"));
  }, {
    "react": "HdMw",
    "react-dom": "X9zx",
    "./App": "FLHj"
  }]
}, {}, ["H99C"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61713" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src.5fff91c4.js"], null)
//# sourceMappingURL=/src.5fff91c4.5a549d53.js.map