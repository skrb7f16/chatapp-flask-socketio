/*!
 * Socket.IO v2.2.0
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(p[u]||(c("new io instance for %s",s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(12),c=n(3)("socket.io-client");t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Ma/*!
* Socket.IO v3.1.0
* (c) 2014-2021 Guillermo Rauch
* Released under the MIT License.
*/
(function webpackUniversalModuleDefinition(root, factory) {
   if(typeof exports === 'object' && typeof module === 'object')
       module.exports = factory();
   else if(typeof define === 'function' && define.amd)
       define([], factory);
   else if(typeof exports === 'object')
       exports["io"] = factory();
   else
       root["io"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/index.js":
/*!************************!*\
 !*** ./build/index.js ***!
 \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;

var url_1 = __webpack_require__(/*! ./url */ "./build/url.js");

var manager_1 = __webpack_require__(/*! ./manager */ "./build/manager.js");

var socket_1 = __webpack_require__(/*! ./socket */ "./build/socket.js");

Object.defineProperty(exports, "Socket", {
 enumerable: true,
 get: function get() {
   return socket_1.Socket;
 }
});

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client");
/**
* Module exports.
*/


module.exports = exports = lookup;
/**
* Managers cache.
*/

var cache = exports.managers = {};

function lookup(uri, opts) {
 if (_typeof(uri) === "object") {
   opts = uri;
   uri = undefined;
 }

 opts = opts || {};
 var parsed = url_1.url(uri);
 var source = parsed.source;
 var id = parsed.id;
 var path = parsed.path;
 var sameNamespace = cache[id] && path in cache[id]["nsps"];
 var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
 var io;

 if (newConnection) {
   debug("ignoring socket cache for %s", source);
   io = new manager_1.Manager(source, opts);
 } else {
   if (!cache[id]) {
     debug("new io instance for %s", source);
     cache[id] = new manager_1.Manager(source, opts);
   }

   io = cache[id];
 }

 if (parsed.query && !opts.query) {
   opts.query = parsed.query;
 }

 return io.socket(parsed.path, opts);
}

exports.io = lookup;
/**
* Protocol version.
*
* @public
*/

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

Object.defineProperty(exports, "protocol", {
 enumerable: true,
 get: function get() {
   return socket_io_parser_1.protocol;
 }
});
/**
* `connect`.
*
* @param {String} uri
* @public
*/

exports.connect = lookup;
/**
* Expose constructors for standalone build.
*
* @public
*/

var manager_2 = __webpack_require__(/*! ./manager */ "./build/manager.js");

Object.defineProperty(exports, "Manager", {
 enumerable: true,
 get: function get() {
   return manager_2.Manager;
 }
});

/***/ }),

/***/ "./build/manager.js":
/*!**************************!*\
 !*** ./build/manager.js ***!
 \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.Manager = void 0;

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var socket_1 = __webpack_require__(/*! ./socket */ "./build/socket.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./build/on.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:manager");

var Manager = /*#__PURE__*/function (_Emitter) {
 _inherits(Manager, _Emitter);

 var _super = _createSuper(Manager);

 function Manager(uri, opts) {
   var _this;

   _classCallCheck(this, Manager);

   _this = _super.call(this);
   _this.nsps = {};
   _this.subs = [];

   if (uri && "object" === _typeof(uri)) {
     opts = uri;
     uri = undefined;
   }

   opts = opts || {};
   opts.path = opts.path || "/socket.io";
   _this.opts = opts;

   _this.reconnection(opts.reconnection !== false);

   _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

   _this.reconnectionDelay(opts.reconnectionDelay || 1000);

   _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

   _this.randomizationFactor(opts.randomizationFactor || 0.5);

   _this.backoff = new Backoff({
     min: _this.reconnectionDelay(),
     max: _this.reconnectionDelayMax(),
     jitter: _this.randomizationFactor()
   });

   _this.timeout(null == opts.timeout ? 20000 : opts.timeout);

   _this._readyState = "closed";
   _this.uri = uri;

   var _parser = opts.parser || parser;

   _this.encoder = new _parser.Encoder();
   _this.decoder = new _parser.Decoder();
   _this._autoConnect = opts.autoConnect !== false;
   if (_this._autoConnect) _this.open();
   return _this;
 }

 _createClass(Manager, [{
   key: "reconnection",
   value: function reconnection(v) {
     if (!arguments.length) return this._reconnection;
     this._reconnection = !!v;
     return this;
   }
 }, {
   key: "reconnectionAttempts",
   value: function reconnectionAttempts(v) {
     if (v === undefined) return this._reconnectionAttempts;
     this._reconnectionAttempts = v;
     return this;
   }
 }, {
   key: "reconnectionDelay",
   value: function reconnectionDelay(v) {
     var _a;

     if (v === undefined) return this._reconnectionDelay;
     this._reconnectionDelay = v;
     (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
     return this;
   }
 }, {
   key: "randomizationFactor",
   value: function randomizationFactor(v) {
     var _a;

     if (v === undefined) return this._randomizationFactor;
     this._randomizationFactor = v;
     (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
     return this;
   }
 }, {
   key: "reconnectionDelayMax",
   value: function reconnectionDelayMax(v) {
     var _a;

     if (v === undefined) return this._reconnectionDelayMax;
     this._reconnectionDelayMax = v;
     (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
     return this;
   }
 }, {
   key: "timeout",
   value: function timeout(v) {
     if (!arguments.length) return this._timeout;
     this._timeout = v;
     return this;
   }
   /**
    * Starts trying to reconnect if reconnection is enabled and we have not
    * started reconnecting yet
    *
    * @private
    */

 }, {
   key: "maybeReconnectOnOpen",
   value: function maybeReconnectOnOpen() {
     // Only try to reconnect if it's the first time we're connecting
     if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
       // keeps reconnection from firing twice for the same reconnection loop
       this.reconnect();
     }
   }
   /**
    * Sets the current transport `socket`.
    *
    * @param {Function} fn - optional, callback
    * @return self
    * @public
    */

 }, {
   key: "open",
   value: function open(fn) {
     var _this2 = this;

     debug("readyState %s", this._readyState);
     if (~this._readyState.indexOf("open")) return this;
     debug("opening %s", this.uri);
     this.engine = eio(this.uri, this.opts);
     var socket = this.engine;
     var self = this;
     this._readyState = "opening";
     this.skipReconnect = false; // emit `open`

     var openSubDestroy = on_1.on(socket, "open", function () {
       self.onopen();
       fn && fn();
     }); // emit `error`

     var errorSub = on_1.on(socket, "error", function (err) {
       debug("error");
       self.cleanup();
       self._readyState = "closed";

       _get(_getPrototypeOf(Manager.prototype), "emit", _this2).call(_this2, "error", err);

       if (fn) {
         fn(err);
       } else {
         // Only do this if there is no fn to handle the error
         self.maybeReconnectOnOpen();
       }
     });

     if (false !== this._timeout) {
       var timeout = this._timeout;
       debug("connect attempt will timeout after %d", timeout);

       if (timeout === 0) {
         openSubDestroy(); // prevents a race condition with the 'open' event
       } // set timer


       var timer = setTimeout(function () {
         debug("connect attempt timed out after %d", timeout);
         openSubDestroy();
         socket.close();
         socket.emit("error", new Error("timeout"));
       }, timeout);
       this.subs.push(function subDestroy() {
         clearTimeout(timer);
       });
     }

     this.subs.push(openSubDestroy);
     this.subs.push(errorSub);
     return this;
   }
   /**
    * Alias for open()
    *
    * @return self
    * @public
    */

 }, {
   key: "connect",
   value: function connect(fn) {
     return this.open(fn);
   }
   /**
    * Called upon transport open.
    *
    * @private
    */

 }, {
   key: "onopen",
   value: function onopen() {
     debug("open"); // clear old subs

     this.cleanup(); // mark as open

     this._readyState = "open";

     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "open"); // add new subs


     var socket = this.engine;
     this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
   }
   /**
    * Called upon a ping.
    *
    * @private
    */

 }, {
   key: "onping",
   value: function onping() {
     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "ping");
   }
   /**
    * Called with data.
    *
    * @private
    */

 }, {
   key: "ondata",
   value: function ondata(data) {
     this.decoder.add(data);
   }
   /**
    * Called when parser fully decodes a packet.
    *
    * @private
    */

 }, {
   key: "ondecoded",
   value: function ondecoded(packet) {
     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "packet", packet);
   }
   /**
    * Called upon socket error.
    *
    * @private
    */

 }, {
   key: "onerror",
   value: function onerror(err) {
     debug("error", err);

     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "error", err);
   }
   /**
    * Creates a new socket for the given `nsp`.
    *
    * @return {Socket}
    * @public
    */

 }, {
   key: "socket",
   value: function socket(nsp, opts) {
     var socket = this.nsps[nsp];

     if (!socket) {
       socket = new socket_1.Socket(this, nsp, opts);
       this.nsps[nsp] = socket;
     }

     return socket;
   }
   /**
    * Called upon a socket close.
    *
    * @param socket
    * @private
    */

 }, {
   key: "_destroy",
   value: function _destroy(socket) {
     var nsps = Object.keys(this.nsps);

     for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
       var nsp = _nsps[_i];
       var _socket = this.nsps[nsp];

       if (_socket.active) {
         debug("socket %s is still active, skipping close", nsp);
         return;
       }
     }

     this._close();
   }
   /**
    * Writes a packet.
    *
    * @param packet
    * @private
    */

 }, {
   key: "_packet",
   value: function _packet(packet) {
     debug("writing packet %j", packet);
     if (packet.query && packet.type === 0) packet.nsp += "?" + packet.query;
     var encodedPackets = this.encoder.encode(packet);

     for (var i = 0; i < encodedPackets.length; i++) {
       this.engine.write(encodedPackets[i], packet.options);
     }
   }
   /**
    * Clean up transport subscriptions and packet buffer.
    *
    * @private
    */

 }, {
   key: "cleanup",
   value: function cleanup() {
     debug("cleanup");
     this.subs.forEach(function (subDestroy) {
       return subDestroy();
     });
     this.subs.length = 0;
     this.decoder.destroy();
   }
   /**
    * Close the current socket.
    *
    * @private
    */

 }, {
   key: "_close",
   value: function _close() {
     debug("disconnect");
     this.skipReconnect = true;
     this._reconnecting = false;

     if ("opening" === this._readyState) {
       // `onclose` will not fire because
       // an open event never happened
       this.cleanup();
     }

     this.backoff.reset();
     this._readyState = "closed";
     if (this.engine) this.engine.close();
   }
   /**
    * Alias for close()
    *
    * @private
    */

 }, {
   key: "disconnect",
   value: function disconnect() {
     return this._close();
   }
   /**
    * Called upon engine close.
    *
    * @private
    */

 }, {
   key: "onclose",
   value: function onclose(reason) {
     debug("onclose");
     this.cleanup();
     this.backoff.reset();
     this._readyState = "closed";

     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "close", reason);

     if (this._reconnection && !this.skipReconnect) {
       this.reconnect();
     }
   }
   /**
    * Attempt a reconnection.
    *
    * @private
    */

 }, {
   key: "reconnect",
   value: function reconnect() {
     var _this3 = this;

     if (this._reconnecting || this.skipReconnect) return this;
     var self = this;

     if (this.backoff.attempts >= this._reconnectionAttempts) {
       debug("reconnect failed");
       this.backoff.reset();

       _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "reconnect_failed");

       this._reconnecting = false;
     } else {
       var delay = this.backoff.duration();
       debug("will wait %dms before reconnect attempt", delay);
       this._reconnecting = true;
       var timer = setTimeout(function () {
         if (self.skipReconnect) return;
         debug("attempting reconnect");

         _get(_getPrototypeOf(Manager.prototype), "emit", _this3).call(_this3, "reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


         if (self.skipReconnect) return;
         self.open(function (err) {
           if (err) {
             debug("reconnect attempt error");
             self._reconnecting = false;
             self.reconnect();

             _get(_getPrototypeOf(Manager.prototype), "emit", _this3).call(_this3, "reconnect_error", err);
           } else {
             debug("reconnect success");
             self.onreconnect();
           }
         });
       }, delay);
       this.subs.push(function subDestroy() {
         clearTimeout(timer);
       });
     }
   }
   /**
    * Called upon successful reconnect.
    *
    * @private
    */

 }, {
   key: "onreconnect",
   value: function onreconnect() {
     var attempt = this.backoff.attempts;
     this._reconnecting = false;
     this.backoff.reset();

     _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "reconnect", attempt);
   }
 }]);

 return Manager;
}(Emitter);

exports.Manager = Manager;

/***/ }),

/***/ "./build/on.js":
/*!*********************!*\
 !*** ./build/on.js ***!
 \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.on = void 0;

function on(obj, ev, fn) {
 obj.on(ev, fn);
 return function subDestroy() {
   obj.off(ev, fn);
 };
}

exports.on = on;

/***/ }),

/***/ "./build/socket.js":
/*!*************************!*\
 !*** ./build/socket.js ***!
 \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.Socket = void 0;

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./build/on.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:socket");
/**
* Internal events.
* These events can't be emitted by the user.
*/


var RESERVED_EVENTS = Object.freeze({
 connect: 1,
 connect_error: 1,
 disconnect: 1,
 disconnecting: 1,
 // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
 newListener: 1,
 removeListener: 1
});

var Socket = /*#__PURE__*/function (_Emitter) {
 _inherits(Socket, _Emitter);

 var _super = _createSuper(Socket);

 /**
  * `Socket` constructor.
  *
  * @public
  */
 function Socket(io, nsp, opts) {
   var _this;

   _classCallCheck(this, Socket);

   _this = _super.call(this);
   _this.receiveBuffer = [];
   _this.sendBuffer = [];
   _this.ids = 0;
   _this.acks = {};
   _this.flags = {};
   _this.io = io;
   _this.nsp = nsp;
   _this.ids = 0;
   _this.acks = {};
   _this.receiveBuffer = [];
   _this.sendBuffer = [];
   _this.connected = false;
   _this.disconnected = true;
   _this.flags = {};

   if (opts && opts.auth) {
     _this.auth = opts.auth;
   }

   if (_this.io._autoConnect) _this.open();
   return _this;
 }
 /**
  * Subscribe to open, close and packet events
  *
  * @private
  */


 _createClass(Socket, [{
   key: "subEvents",
   value: function subEvents() {
     if (this.subs) return;
     var io = this.io;
     this.subs = [on_1.on(io, "open", this.onopen.bind(this)), on_1.on(io, "packet", this.onpacket.bind(this)), on_1.on(io, "error", this.onerror.bind(this)), on_1.on(io, "close", this.onclose.bind(this))];
   }
   /**
    * Whether the Socket will try to reconnect when its Manager connects or reconnects
    */

 }, {
   key: "connect",

   /**
    * "Opens" the socket.
    *
    * @public
    */
   value: function connect() {
     if (this.connected) return this;
     this.subEvents();
     if (!this.io["_reconnecting"]) this.io.open(); // ensure open

     if ("open" === this.io._readyState) this.onopen();
     return this;
   }
   /**
    * Alias for connect()
    */

 }, {
   key: "open",
   value: function open() {
     return this.connect();
   }
   /**
    * Sends a `message` event.
    *
    * @return self
    * @public
    */

 }, {
   key: "send",
   value: function send() {
     for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
       args[_key] = arguments[_key];
     }

     args.unshift("message");
     this.emit.apply(this, args);
     return this;
   }
   /**
    * Override `emit`.
    * If the event is in `events`, it's emitted normally.
    *
    * @param ev - event name
    * @return self
    * @public
    */

 }, {
   key: "emit",
   value: function emit(ev) {
     if (RESERVED_EVENTS.hasOwnProperty(ev)) {
       throw new Error('"' + ev + '" is a reserved event name');
     }

     for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
       args[_key2 - 1] = arguments[_key2];
     }

     args.unshift(ev);
     var packet = {
       type: socket_io_parser_1.PacketType.EVENT,
       data: args
     };
     packet.options = {};
     packet.options.compress = this.flags.compress !== false; // event ack callback

     if ("function" === typeof args[args.length - 1]) {
       debug("emitting packet with ack id %d", this.ids);
       this.acks[this.ids] = args.pop();
       packet.id = this.ids++;
     }

     var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
     var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);

     if (discardPacket) {
       debug("discard packet as the transport is not currently writable");
     } else if (this.connected) {
       this.packet(packet);
     } else {
       this.sendBuffer.push(packet);
     }

     this.flags = {};
     return this;
   }
   /**
    * Sends a packet.
    *
    * @param packet
    * @private
    */

 }, {
   key: "packet",
   value: function packet(_packet) {
     _packet.nsp = this.nsp;

     this.io._packet(_packet);
   }
   /**
    * Called upon engine `open`.
    *
    * @private
    */

 }, {
   key: "onopen",
   value: function onopen() {
     var _this2 = this;

     debug("transport is open - connecting");

     if (typeof this.auth == "function") {
       this.auth(function (data) {
         _this2.packet({
           type: socket_io_parser_1.PacketType.CONNECT,
           data: data
         });
       });
     } else {
       this.packet({
         type: socket_io_parser_1.PacketType.CONNECT,
         data: this.auth
       });
     }
   }
   /**
    * Called upon engine or manager `error`.
    *
    * @param err
    * @private
    */

 }, {
   key: "onerror",
   value: function onerror(err) {
     if (!this.connected) {
       _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect_error", err);
     }
   }
   /**
    * Called upon engine `close`.
    *
    * @param reason
    * @private
    */

 }, {
   key: "onclose",
   value: function onclose(reason) {
     debug("close (%s)", reason);
     this.connected = false;
     this.disconnected = true;
     delete this.id;

     _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "disconnect", reason);
   }
   /**
    * Called with socket packet.
    *
    * @param packet
    * @private
    */

 }, {
   key: "onpacket",
   value: function onpacket(packet) {
     var sameNamespace = packet.nsp === this.nsp;
     if (!sameNamespace) return;

     switch (packet.type) {
       case socket_io_parser_1.PacketType.CONNECT:
         if (packet.data && packet.data.sid) {
           var id = packet.data.sid;
           this.onconnect(id);
         } else {
           _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
         }

         break;

       case socket_io_parser_1.PacketType.EVENT:
         this.onevent(packet);
         break;

       case socket_io_parser_1.PacketType.BINARY_EVENT:
         this.onevent(packet);
         break;

       case socket_io_parser_1.PacketType.ACK:
         this.onack(packet);
         break;

       case socket_io_parser_1.PacketType.BINARY_ACK:
         this.onack(packet);
         break;

       case socket_io_parser_1.PacketType.DISCONNECT:
         this.ondisconnect();
         break;

       case socket_io_parser_1.PacketType.CONNECT_ERROR:
         var err = new Error(packet.data.message); // @ts-ignore

         err.data = packet.data.data;

         _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect_error", err);

         break;
     }
   }
   /**
    * Called upon a server event.
    *
    * @param packet
    * @private
    */

 }, {
   key: "onevent",
   value: function onevent(packet) {
     var args = packet.data || [];
     debug("emitting event %j", args);

     if (null != packet.id) {
       debug("attaching ack callback to event");
       args.push(this.ack(packet.id));
     }

     if (this.connected) {
       this.emitEvent(args);
     } else {
       this.receiveBuffer.push(Object.freeze(args));
     }
   }
 }, {
   key: "emitEvent",
   value: function emitEvent(args) {
     if (this._anyListeners && this._anyListeners.length) {
       var listeners = this._anyListeners.slice();

       var _iterator = _createForOfIteratorHelper(listeners),
           _step;

       try {
         for (_iterator.s(); !(_step = _iterator.n()).done;) {
           var listener = _step.value;
           listener.apply(this, args);
         }
       } catch (err) {
         _iterator.e(err);
       } finally {
         _iterator.f();
       }
     }

     _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
   }
   /**
    * Produces an ack callback to emit with an event.
    *
    * @private
    */

 }, {
   key: "ack",
   value: function ack(id) {
     var self = this;
     var sent = false;
     return function () {
       // prevent double callbacks
       if (sent) return;
       sent = true;

       for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
         args[_key3] = arguments[_key3];
       }

       debug("sending ack %j", args);
       self.packet({
         type: socket_io_parser_1.PacketType.ACK,
         id: id,
         data: args
       });
     };
   }
   /**
    * Called upon a server acknowlegement.
    *
    * @param packet
    * @private
    */

 }, {
   key: "onack",
   value: function onack(packet) {
     var ack = this.acks[packet.id];

     if ("function" === typeof ack) {
       debug("calling ack %s with %j", packet.id, packet.data);
       ack.apply(this, packet.data);
       delete this.acks[packet.id];
     } else {
       debug("bad ack %s", packet.id);
     }
   }
   /**
    * Called upon server connect.
    *
    * @private
    */

 }, {
   key: "onconnect",
   value: function onconnect(id) {
     debug("socket connected with id %s", id);
     this.id = id;
     this.connected = true;
     this.disconnected = false;

     _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect");

     this.emitBuffered();
   }
   /**
    * Emit buffered events (received and emitted).
    *
    * @private
    */

 }, {
   key: "emitBuffered",
   value: function emitBuffered() {
     var _this3 = this;

     this.receiveBuffer.forEach(function (args) {
       return _this3.emitEvent(args);
     });
     this.receiveBuffer = [];
     this.sendBuffer.forEach(function (packet) {
       return _this3.packet(packet);
     });
     this.sendBuffer = [];
   }
   /**
    * Called upon server disconnect.
    *
    * @private
    */

 }, {
   key: "ondisconnect",
   value: function ondisconnect() {
     debug("server disconnect (%s)", this.nsp);
     this.destroy();
     this.onclose("io server disconnect");
   }
   /**
    * Called upon forced client/server side disconnections,
    * this method ensures the manager stops tracking us and
    * that reconnections don't get triggered for this.
    *
    * @private
    */

 }, {
   key: "destroy",
   value: function destroy() {
     if (this.subs) {
       // clean subscriptions to avoid reconnections
       this.subs.forEach(function (subDestroy) {
         return subDestroy();
       });
       this.subs = undefined;
     }

     this.io["_destroy"](this);
   }
   /**
    * Disconnects the socket manually.
    *
    * @return self
    * @public
    */

 }, {
   key: "disconnect",
   value: function disconnect() {
     if (this.connected) {
       debug("performing disconnect (%s)", this.nsp);
       this.packet({
         type: socket_io_parser_1.PacketType.DISCONNECT
       });
     } // remove socket from pool


     this.destroy();

     if (this.connected) {
       // fire events
       this.onclose("io client disconnect");
     }

     return this;
   }
   /**
    * Alias for disconnect()
    *
    * @return self
    * @public
    */

 }, {
   key: "close",
   value: function close() {
     return this.disconnect();
   }
   /**
    * Sets the compress flag.
    *
    * @param compress - if `true`, compresses the sending data
    * @return self
    * @public
    */

 }, {
   key: "compress",
   value: function compress(_compress) {
     this.flags.compress = _compress;
     return this;
   }
   /**
    * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
    * ready to send messages.
    *
    * @returns self
    * @public
    */

 }, {
   key: "onAny",

   /**
    * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
    * callback.
    *
    * @param listener
    * @public
    */
   value: function onAny(listener) {
     this._anyListeners = this._anyListeners || [];

     this._anyListeners.push(listener);

     return this;
   }
   /**
    * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
    * callback. The listener is added to the beginning of the listeners array.
    *
    * @param listener
    * @public
    */

 }, {
   key: "prependAny",
   value: function prependAny(listener) {
     this._anyListeners = this._anyListeners || [];

     this._anyListeners.unshift(listener);

     return this;
   }
   /**
    * Removes the listener that will be fired when any event is emitted.
    *
    * @param listener
    * @public
    */

 }, {
   key: "offAny",
   value: function offAny(listener) {
     if (!this._anyListeners) {
       return this;
     }

     if (listener) {
       var listeners = this._anyListeners;

       for (var i = 0; i < listeners.length; i++) {
         if (listener === listeners[i]) {
           listeners.splice(i, 1);
           return this;
         }
       }
     } else {
       this._anyListeners = [];
     }

     return this;
   }
   /**
    * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
    * e.g. to remove listeners.
    *
    * @public
    */

 }, {
   key: "listenersAny",
   value: function listenersAny() {
     return this._anyListeners || [];
   }
 }, {
   key: "active",
   get: function get() {
     return !!this.subs;
   }
 }, {
   key: "volatile",
   get: function get() {
     this.flags["volatile"] = true;
     return this;
   }
 }]);

 return Socket;
}(Emitter);

exports.Socket = Socket;

/***/ }),

/***/ "./build/url.js":
/*!**********************!*\
 !*** ./build/url.js ***!
 \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.url = void 0;

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:url");
/**
* URL parser.
*
* @param uri - url
* @param loc - An object meant to mimic window.location.
*        Defaults to window.location.
* @public
*/


function url(uri, loc) {
 var obj = uri; // default to window.location

 loc = loc || typeof location !== "undefined" && location;
 if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

 if (typeof uri === "string") {
   if ("/" === uri.charAt(0)) {
     if ("/" === uri.charAt(1)) {
       uri = loc.protocol + uri;
     } else {
       uri = loc.host + uri;
     }
   }

   if (!/^(https?|wss?):\/\//.test(uri)) {
     debug("protocol-less url %s", uri);

     if ("undefined" !== typeof loc) {
       uri = loc.protocol + "//" + uri;
     } else {
       uri = "https://" + uri;
     }
   } // parse


   debug("parse %s", uri);
   obj = parseuri(uri);
 } // make sure we treat `localhost:80` and `localhost` equally


 if (!obj.port) {
   if (/^(http|ws)$/.test(obj.protocol)) {
     obj.port = "80";
   } else if (/^(http|ws)s$/.test(obj.protocol)) {
     obj.port = "443";
   }
 }

 obj.path = obj.path || "/";
 var ipv6 = obj.host.indexOf(":") !== -1;
 var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

 obj.id = obj.protocol + "://" + host + ":" + obj.port; // define href

 obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
 return obj;
}

exports.url = url;

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
 !*** ./node_modules/backo2/index.js ***!
 \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Expose `Backoff`.
*/
module.exports = Backoff;
/**
* Initialize backoff timer with `opts`.
*
* - `min` initial timeout in milliseconds [100]
* - `max` max timeout [10000]
* - `jitter` [0]
* - `factor` [2]
*
* @param {Object} opts
* @api public
*/

function Backoff(opts) {
 opts = opts || {};
 this.ms = opts.min || 100;
 this.max = opts.max || 10000;
 this.factor = opts.factor || 2;
 this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
 this.attempts = 0;
}
/**
* Return the backoff duration.
*
* @return {Number}
* @api public
*/


Backoff.prototype.duration = function () {
 var ms = this.ms * Math.pow(this.factor, this.attempts++);

 if (this.jitter) {
   var rand = Math.random();
   var deviation = Math.floor(rand * this.jitter * ms);
   ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
 }

 return Math.min(ms, this.max) | 0;
};
/**
* Reset the number of attempts.
*
* @api public
*/


Backoff.prototype.reset = function () {
 this.attempts = 0;
};
/**
* Set the minimum duration
*
* @api public
*/


Backoff.prototype.setMin = function (min) {
 this.ms = min;
};
/**
* Set the maximum duration
*
* @api public
*/


Backoff.prototype.setMax = function (max) {
 this.max = max;
};
/**
* Set the jitter
*
* @api public
*/


Backoff.prototype.setJitter = function (jitter) {
 this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
 !*** ./node_modules/component-emitter/index.js ***!
 \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* Expose `Emitter`.
*/
if (true) {
 module.exports = Emitter;
}
/**
* Initialize a new `Emitter`.
*
* @api public
*/


function Emitter(obj) {
 if (obj) return mixin(obj);
}

;
/**
* Mixin the emitter properties.
*
* @param {Object} obj
* @return {Object}
* @api private
*/

function mixin(obj) {
 for (var key in Emitter.prototype) {
   obj[key] = Emitter.prototype[key];
 }

 return obj;
}
/**
* Listen on the given `event` with `fn`.
*
* @param {String} event
* @param {Function} fn
* @return {Emitter}
* @api public
*/


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
 this._callbacks = this._callbacks || {};
 (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
 return this;
};
/**
* Adds an `event` listener that will be invoked a single
* time then automatically removed.
*
* @param {String} event
* @param {Function} fn
* @return {Emitter}
* @api public
*/


Emitter.prototype.once = function (event, fn) {
 function on() {
   this.off(event, on);
   fn.apply(this, arguments);
 }

 on.fn = fn;
 this.on(event, on);
 return this;
};
/**
* Remove the given callback for `event` or all
* registered callbacks.
*
* @param {String} event
* @param {Function} fn
* @return {Emitter}
* @api public
*/


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
 this._callbacks = this._callbacks || {}; // all

 if (0 == arguments.length) {
   this._callbacks = {};
   return this;
 } // specific event


 var callbacks = this._callbacks['$' + event];
 if (!callbacks) return this; // remove all handlers

 if (1 == arguments.length) {
   delete this._callbacks['$' + event];
   return this;
 } // remove specific handler


 var cb;

 for (var i = 0; i < callbacks.length; i++) {
   cb = callbacks[i];

   if (cb === fn || cb.fn === fn) {
     callbacks.splice(i, 1);
     break;
   }
 } // Remove event specific arrays for event types that no
 // one is subscribed for to avoid memory leak.


 if (callbacks.length === 0) {
   delete this._callbacks['$' + event];
 }

 return this;
};
/**
* Emit `event` with the given args.
*
* @param {String} event
* @param {Mixed} ...
* @return {Emitter}
*/


Emitter.prototype.emit = function (event) {
 this._callbacks = this._callbacks || {};
 var args = new Array(arguments.length - 1),
     callbacks = this._callbacks['$' + event];

 for (var i = 1; i < arguments.length; i++) {
   args[i - 1] = arguments[i];
 }

 if (callbacks) {
   callbacks = callbacks.slice(0);

   for (var i = 0, len = callbacks.length; i < len; ++i) {
     callbacks[i].apply(this, args);
   }
 }

 return this;
};
/**
* Return array of callbacks for `event`.
*
* @param {String} event
* @return {Array}
* @api public
*/


Emitter.prototype.listeners = function (event) {
 this._callbacks = this._callbacks || {};
 return this._callbacks['$' + event] || [];
};
/**
* Check if this emitter has `event` handlers.
*
* @param {String} event
* @return {Boolean}
* @api public
*/


Emitter.prototype.hasListeners = function (event) {
 return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
 !*** ./node_modules/debug/src/browser.js ***!
 \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
* This is the web browser implementation of `debug()`.
*/
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

exports.destroy = function () {
 var warned = false;
 return function () {
   if (!warned) {
     warned = true;
     console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
   }
 };
}();
/**
* Colors.
*/


exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
* Currently only WebKit-based Web Inspectors, Firefox >= v31,
* and the Firebug extension (any Firefox version) are known
* to support "%c" CSS customizations.
*
* TODO: add a `localStorage` variable to explicitly enable/disable colors
*/
// eslint-disable-next-line complexity

function useColors() {
 // NB: In an Electron preload script, document will be defined but not fully
 // initialized. Since we know we're in Chrome, we'll just detect this case
 // explicitly
 if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
   return true;
 } // Internet Explorer and Edge do not support colors.


 if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
   return false;
 } // Is webkit? http://stackoverflow.com/a/16459606/376773
 // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


 return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
 typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
 // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
 typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
 typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
* Colorize log arguments if enabled.
*
* @api public
*/


function formatArgs(args) {
 args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

 if (!this.useColors) {
   return;
 }

 var c = 'color: ' + this.color;
 args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
 // arguments passed either before or after the %c, so we need to
 // figure out the correct index to insert the CSS into

 var index = 0;
 var lastC = 0;
 args[0].replace(/%[a-zA-Z%]/g, function (match) {
   if (match === '%%') {
     return;
   }

   index++;

   if (match === '%c') {
     // We only are interested in the *last* %c
     // (the user may have provided their own)
     lastC = index;
   }
 });
 args.splice(lastC, 0, c);
}
/**
* Invokes `console.debug()` when available.
* No-op when `console.debug` is not a "function".
* If `console.debug` is not available, falls back
* to `console.log`.
*
* @api public
*/


exports.log = console.debug || console.log || function () {};
/**
* Save `namespaces`.
*
* @param {String} namespaces
* @api private
*/


function save(namespaces) {
 try {
   if (namespaces) {
     exports.storage.setItem('debug', namespaces);
   } else {
     exports.storage.removeItem('debug');
   }
 } catch (error) {// Swallow
   // XXX (@Qix-) should we be logging these?
 }
}
/**
* Load `namespaces`.
*
* @return {String} returns the previously persisted debug modes
* @api private
*/


function load() {
 var r;

 try {
   r = exports.storage.getItem('debug');
 } catch (error) {// Swallow
   // XXX (@Qix-) should we be logging these?
 } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


 if (!r && typeof process !== 'undefined' && 'env' in process) {
   r = process.env.DEBUG;
 }

 return r;
}
/**
* Localstorage attempts to return the localstorage.
*
* This is necessary because safari throws
* when a user disables cookies/localstorage
* and you attempt to access it.
*
* @return {LocalStorage}
* @api private
*/


function localstorage() {
 try {
   // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
   // The Browser also has localStorage in the global context.
   return localStorage;
 } catch (error) {// Swallow
   // XXX (@Qix-) should we be logging these?
 }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
* Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
*/

formatters.j = function (v) {
 try {
   return JSON.stringify(v);
 } catch (error) {
   return '[UnexpectedJSONParseError]: ' + error.message;
 }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
 !*** ./node_modules/debug/src/common.js ***!
 \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
* This is the common logic for both the Node.js and web browser
* implementations of `debug()`.
*/
function setup(env) {
 createDebug.debug = createDebug;
 createDebug["default"] = createDebug;
 createDebug.coerce = coerce;
 createDebug.disable = disable;
 createDebug.enable = enable;
 createDebug.enabled = enabled;
 createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
 createDebug.destroy = destroy;
 Object.keys(env).forEach(function (key) {
   createDebug[key] = env[key];
 });
 /**
 * The currently active debug mode names, and names to skip.
 */

 createDebug.names = [];
 createDebug.skips = [];
 /**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

 createDebug.formatters = {};
 /**
 * Selects a color for a debug namespace
 * @param {String} namespace The namespace string for the for the debug instance to be colored
 * @return {Number|String} An ANSI color code for the given namespace
 * @api private
 */

 function selectColor(namespace) {
   var hash = 0;

   for (var i = 0; i < namespace.length; i++) {
     hash = (hash << 5) - hash + namespace.charCodeAt(i);
     hash |= 0; // Convert to 32bit integer
   }

   return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
 }

 createDebug.selectColor = selectColor;
 /**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

 function createDebug(namespace) {
   var prevTime;
   var enableOverride = null;

   function debug() {
     for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
       args[_key] = arguments[_key];
     }

     // Disabled?
     if (!debug.enabled) {
       return;
     }

     var self = debug; // Set `diff` timestamp

     var curr = Number(new Date());
     var ms = curr - (prevTime || curr);
     self.diff = ms;
     self.prev = prevTime;
     self.curr = curr;
     prevTime = curr;
     args[0] = createDebug.coerce(args[0]);

     if (typeof args[0] !== 'string') {
       // Anything else let's inspect with %O
       args.unshift('%O');
     } // Apply any `formatters` transformations


     var index = 0;
     args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
       // If we encounter an escaped % then don't increase the array index
       if (match === '%%') {
         return '%';
       }

       index++;
       var formatter = createDebug.formatters[format];

       if (typeof formatter === 'function') {
         var val = args[index];
         match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

         args.splice(index, 1);
         index--;
       }

       return match;
     }); // Apply env-specific formatting (colors, etc.)

     createDebug.formatArgs.call(self, args);
     var logFn = self.log || createDebug.log;
     logFn.apply(self, args);
   }

   debug.namespace = namespace;
   debug.useColors = createDebug.useColors();
   debug.color = createDebug.selectColor(namespace);
   debug.extend = extend;
   debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

   Object.defineProperty(debug, 'enabled', {
     enumerable: true,
     configurable: false,
     get: function get() {
       return enableOverride === null ? createDebug.enabled(namespace) : enableOverride;
     },
     set: function set(v) {
       enableOverride = v;
     }
   }); // Env-specific initialization logic for debug instances

   if (typeof createDebug.init === 'function') {
     createDebug.init(debug);
   }

   return debug;
 }

 function extend(namespace, delimiter) {
   var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
   newDebug.log = this.log;
   return newDebug;
 }
 /**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


 function enable(namespaces) {
   createDebug.save(namespaces);
   createDebug.names = [];
   createDebug.skips = [];
   var i;
   var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
   var len = split.length;

   for (i = 0; i < len; i++) {
     if (!split[i]) {
       // ignore empty strings
       continue;
     }

     namespaces = split[i].replace(/\*/g, '.*?');

     if (namespaces[0] === '-') {
       createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
     } else {
       createDebug.names.push(new RegExp('^' + namespaces + '$'));
     }
   }
 }
 /**
 * Disable debug output.
 *
 * @return {String} namespaces
 * @api public
 */


 function disable() {
   var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
     return '-' + namespace;
   }))).join(',');
   createDebug.enable('');
   return namespaces;
 }
 /**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


 function enabled(name) {
   if (name[name.length - 1] === '*') {
     return true;
   }

   var i;
   var len;

   for (i = 0, len = createDebug.skips.length; i < len; i++) {
     if (createDebug.skips[i].test(name)) {
       return false;
     }
   }

   for (i = 0, len = createDebug.names.length; i < len; i++) {
     if (createDebug.names[i].test(name)) {
       return true;
     }
   }

   return false;
 }
 /**
 * Convert regexp to namespace
 *
 * @param {RegExp} regxep
 * @return {String} namespace
 * @api private
 */


 function toNamespace(regexp) {
   return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
 }
 /**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


 function coerce(val) {
   if (val instanceof Error) {
     return val.stack || val.message;
   }

   return val;
 }
 /**
 * XXX DO NOT USE. This is a temporary stub function.
 * XXX It WILL be removed in the next major release.
 */


 function destroy() {
   console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
 }

 createDebug.enable(createDebug.load());
 return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/globalThis.browser.js":
/*!*****************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
 if (typeof self !== "undefined") {
   return self;
 } else if (typeof window !== "undefined") {
   return window;
 } else {
   return Function("return this")();
 }
}();

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
 !*** ./node_modules/engine.io-client/lib/index.js ***!
 \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

module.exports = function (uri, opts) {
 return new Socket(uri, opts);
};
/**
* Expose deps for legacy compatibility
* and standalone browser access.
*/


module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int

module.exports.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
module.exports.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
 !*** ./node_modules/engine.io-client/lib/socket.js ***!
 \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:socket");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var Socket = /*#__PURE__*/function (_Emitter) {
 _inherits(Socket, _Emitter);

 var _super = _createSuper(Socket);

 /**
  * Socket constructor.
  *
  * @param {String|Object} uri or options
  * @param {Object} options
  * @api public
  */
 function Socket(uri) {
   var _this;

   var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

   _classCallCheck(this, Socket);

   _this = _super.call(this);

   if (uri && "object" === _typeof(uri)) {
     opts = uri;
     uri = null;
   }

   if (uri) {
     uri = parseuri(uri);
     opts.hostname = uri.host;
     opts.secure = uri.protocol === "https" || uri.protocol === "wss";
     opts.port = uri.port;
     if (uri.query) opts.query = uri.query;
   } else if (opts.host) {
     opts.hostname = parseuri(opts.host).host;
   }

   _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

   if (opts.hostname && !opts.port) {
     // if no port is specified manually, use the protocol default
     opts.port = _this.secure ? "443" : "80";
   }

   _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
   _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? 443 : 80);
   _this.transports = opts.transports || ["polling", "websocket"];
   _this.readyState = "";
   _this.writeBuffer = [];
   _this.prevBufferLen = 0;
   _this.opts = _extends({
     path: "/engine.io",
     agent: false,
     withCredentials: false,
     upgrade: true,
     jsonp: true,
     timestampParam: "t",
     rememberUpgrade: false,
     rejectUnauthorized: true,
     perMessageDeflate: {
       threshold: 1024
     },
     transportOptions: {}
   }, opts);
   _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";

   if (typeof _this.opts.query === "string") {
     _this.opts.query = parseqs.decode(_this.opts.query);
   } // set on handshake


   _this.id = null;
   _this.upgrades = null;
   _this.pingInterval = null;
   _this.pingTimeout = null; // set on heartbeat

   _this.pingTimeoutTimer = null;

   _this.open();

   return _this;
 }
 /**
  * Creates transport of the given type.
  *
  * @param {String} transport name
  * @return {Transport}
  * @api private
  */


 _createClass(Socket, [{
   key: "createTransport",
   value: function createTransport(name) {
     debug('creating transport "%s"', name);
     var query = clone(this.opts.query); // append engine.io protocol identifier

     query.EIO = parser.protocol; // transport name

     query.transport = name; // session id if we already have one

     if (this.id) query.sid = this.id;

     var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
       query: query,
       socket: this,
       hostname: this.hostname,
       secure: this.secure,
       port: this.port
     });

     debug("options: %j", opts);
     return new transports[name](opts);
   }
   /**
    * Initializes transport to use and starts probe.
    *
    * @api private
    */

 }, {
   key: "open",
   value: function open() {
     var transport;

     if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
       transport = "websocket";
     } else if (0 === this.transports.length) {
       // Emit error on next tick so it can be listened to
       var self = this;
       setTimeout(function () {
         self.emit("error", "No transports available");
       }, 0);
       return;
     } else {
       transport = this.transports[0];
     }

     this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

     try {
       transport = this.createTransport(transport);
     } catch (e) {
       debug("error while creating transport: %s", e);
       this.transports.shift();
       this.open();
       return;
     }

     transport.open();
     this.setTransport(transport);
   }
   /**
    * Sets the current transport. Disables the existing one (if any).
    *
    * @api private
    */

 }, {
   key: "setTransport",
   value: function setTransport(transport) {
     debug("setting transport %s", transport.name);
     var self = this;

     if (this.transport) {
       debug("clearing existing transport %s", this.transport.name);
       this.transport.removeAllListeners();
     } // set up transport


     this.transport = transport; // set up transport listeners

     transport.on("drain", function () {
       self.onDrain();
     }).on("packet", function (packet) {
       self.onPacket(packet);
     }).on("error", function (e) {
       self.onError(e);
     }).on("close", function () {
       self.onClose("transport close");
     });
   }
   /**
    * Probes a transport.
    *
    * @param {String} transport name
    * @api private
    */

 }, {
   key: "probe",
   value: function probe(name) {
     debug('probing transport "%s"', name);
     var transport = this.createTransport(name, {
       probe: 1
     });
     var failed = false;
     var self = this;
     Socket.priorWebsocketSuccess = false;

     function onTransportOpen() {
       if (self.onlyBinaryUpgrades) {
         var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
         failed = failed || upgradeLosesBinary;
       }

       if (failed) return;
       debug('probe transport "%s" opened', name);
       transport.send([{
         type: "ping",
         data: "probe"
       }]);
       transport.once("packet", function (msg) {
         if (failed) return;

         if ("pong" === msg.type && "probe" === msg.data) {
           debug('probe transport "%s" pong', name);
           self.upgrading = true;
           self.emit("upgrading", transport);
           if (!transport) return;
           Socket.priorWebsocketSuccess = "websocket" === transport.name;
           debug('pausing current transport "%s"', self.transport.name);
           self.transport.pause(function () {
             if (failed) return;
             if ("closed" === self.readyState) return;
             debug("changing transport and sending upgrade packet");
             cleanup();
             self.setTransport(transport);
             transport.send([{
               type: "upgrade"
             }]);
             self.emit("upgrade", transport);
             transport = null;
             self.upgrading = false;
             self.flush();
           });
         } else {
           debug('probe transport "%s" failed', name);
           var err = new Error("probe error");
           err.transport = transport.name;
           self.emit("upgradeError", err);
         }
       });
     }

     function freezeTransport() {
       if (failed) return; // Any callback called by transport should be ignored since now

       failed = true;
       cleanup();
       transport.close();
       transport = null;
     } // Handle any error that happens while probing


     function onerror(err) {
       var error = new Error("probe error: " + err);
       error.transport = transport.name;
       freezeTransport();
       debug('probe transport "%s" failed because of error: %s', name, err);
       self.emit("upgradeError", error);
     }

     function onTransportClose() {
       onerror("transport closed");
     } // When the socket is closed while we're probing


     function onclose() {
       onerror("socket closed");
     } // When the socket is upgraded while we're probing


     function onupgrade(to) {
       if (transport && to.name !== transport.name) {
         debug('"%s" works - aborting "%s"', to.name, transport.name);
         freezeTransport();
       }
     } // Remove all listeners on the transport and on self


     function cleanup() {
       transport.removeListener("open", onTransportOpen);
       transport.removeListener("error", onerror);
       transport.removeListener("close", onTransportClose);
       self.removeListener("close", onclose);
       self.removeListener("upgrading", onupgrade);
     }

     transport.once("open", onTransportOpen);
     transport.once("error", onerror);
     transport.once("close", onTransportClose);
     this.once("close", onclose);
     this.once("upgrading", onupgrade);
     transport.open();
   }
   /**
    * Called when connection is deemed open.
    *
    * @api public
    */

 }, {
   key: "onOpen",
   value: function onOpen() {
     debug("socket open");
     this.readyState = "open";
     Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
     this.emit("open");
     this.flush(); // we check for `readyState` in case an `open`
     // listener already closed the socket

     if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
       debug("starting upgrade probes");
       var i = 0;
       var l = this.upgrades.length;

       for (; i < l; i++) {
         this.probe(this.upgrades[i]);
       }
     }
   }
   /**
    * Handles a packet.
    *
    * @api private
    */

 }, {
   key: "onPacket",
   value: function onPacket(packet) {
     if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
       debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
       this.emit("packet", packet); // Socket is live - any packet counts

       this.emit("heartbeat");

       switch (packet.type) {
         case "open":
           this.onHandshake(JSON.parse(packet.data));
           break;

         case "ping":
           this.resetPingTimeout();
           this.sendPacket("pong");
           this.emit("pong");
           break;

         case "error":
           var err = new Error("server error");
           err.code = packet.data;
           this.onError(err);
           break;

         case "message":
           this.emit("data", packet.data);
           this.emit("message", packet.data);
           break;
       }
     } else {
       debug('packet received with socket readyState "%s"', this.readyState);
     }
   }
   /**
    * Called upon handshake completion.
    *
    * @param {Object} handshake obj
    * @api private
    */

 }, {
   key: "onHandshake",
   value: function onHandshake(data) {
     this.emit("handshake", data);
     this.id = data.sid;
     this.transport.query.sid = data.sid;
     this.upgrades = this.filterUpgrades(data.upgrades);
     this.pingInterval = data.pingInterval;
     this.pingTimeout = data.pingTimeout;
     this.onOpen(); // In case open handler closes socket

     if ("closed" === this.readyState) return;
     this.resetPingTimeout();
   }
   /**
    * Sets and resets ping timeout timer based on server pings.
    *
    * @api private
    */

 }, {
   key: "resetPingTimeout",
   value: function resetPingTimeout() {
     var _this2 = this;

     clearTimeout(this.pingTimeoutTimer);
     this.pingTimeoutTimer = setTimeout(function () {
       _this2.onClose("ping timeout");
     }, this.pingInterval + this.pingTimeout);
   }
   /**
    * Called on `drain` event
    *
    * @api private
    */

 }, {
   key: "onDrain",
   value: function onDrain() {
     this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
     // for example, when upgrading, upgrade packet is sent over,
     // and a nonzero prevBufferLen could cause problems on `drain`

     this.prevBufferLen = 0;

     if (0 === this.writeBuffer.length) {
       this.emit("drain");
     } else {
       this.flush();
     }
   }
   /**
    * Flush write buffers.
    *
    * @api private
    */

 }, {
   key: "flush",
   value: function flush() {
     if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
       debug("flushing %d packets in socket", this.writeBuffer.length);
       this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
       // splice writeBuffer and callbackBuffer on `drain`

       this.prevBufferLen = this.writeBuffer.length;
       this.emit("flush");
     }
   }
   /**
    * Sends a message.
    *
    * @param {String} message.
    * @param {Function} callback function.
    * @param {Object} options.
    * @return {Socket} for chaining.
    * @api public
    */

 }, {
   key: "write",
   value: function write(msg, options, fn) {
     this.sendPacket("message", msg, options, fn);
     return this;
   }
 }, {
   key: "send",
   value: function send(msg, options, fn) {
     this.sendPacket("message", msg, options, fn);
     return this;
   }
   /**
    * Sends a packet.
    *
    * @param {String} packet type.
    * @param {String} data.
    * @param {Object} options.
    * @param {Function} callback function.
    * @api private
    */

 }, {
   key: "sendPacket",
   value: function sendPacket(type, data, options, fn) {
     if ("function" === typeof data) {
       fn = data;
       data = undefined;
     }

     if ("function" === typeof options) {
       fn = options;
       options = null;
     }

     if ("closing" === this.readyState || "closed" === this.readyState) {
       return;
     }

     options = options || {};
     options.compress = false !== options.compress;
     var packet = {
       type: type,
       data: data,
       options: options
     };
     this.emit("packetCreate", packet);
     this.writeBuffer.push(packet);
     if (fn) this.once("flush", fn);
     this.flush();
   }
   /**
    * Closes the connection.
    *
    * @api private
    */

 }, {
   key: "close",
   value: function close() {
     var self = this;

     if ("opening" === this.readyState || "open" === this.readyState) {
       this.readyState = "closing";

       if (this.writeBuffer.length) {
         this.once("drain", function () {
           if (this.upgrading) {
             waitForUpgrade();
           } else {
             close();
           }
         });
       } else if (this.upgrading) {
         waitForUpgrade();
       } else {
         close();
       }
     }

     function close() {
       self.onClose("forced close");
       debug("socket closing - telling transport to close");
       self.transport.close();
     }

     function cleanupAndClose() {
       self.removeListener("upgrade", cleanupAndClose);
       self.removeListener("upgradeError", cleanupAndClose);
       close();
     }

     function waitForUpgrade() {
       // wait for upgrade to finish since we can't send packets while pausing a transport
       self.once("upgrade", cleanupAndClose);
       self.once("upgradeError", cleanupAndClose);
     }

     return this;
   }
   /**
    * Called upon transport error
    *
    * @api private
    */

 }, {
   key: "onError",
   value: function onError(err) {
     debug("socket error %j", err);
     Socket.priorWebsocketSuccess = false;
     this.emit("error", err);
     this.onClose("transport error", err);
   }
   /**
    * Called upon transport close.
    *
    * @api private
    */

 }, {
   key: "onClose",
   value: function onClose(reason, desc) {
     if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
       debug('socket close with reason: "%s"', reason);
       var self = this; // clear timers

       clearTimeout(this.pingIntervalTimer);
       clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

       this.transport.removeAllListeners("close"); // ensure transport won't stay open

       this.transport.close(); // ignore further transport communication

       this.transport.removeAllListeners(); // set ready state

       this.readyState = "closed"; // clear session id

       this.id = null; // emit close event

       this.emit("close", reason, desc); // clean buffers after, so users can still
       // grab the buffers on `close` event

       self.writeBuffer = [];
       self.prevBufferLen = 0;
     }
   }
   /**
    * Filters upgrades, returning only those matching client transports.
    *
    * @param {Array} server upgrades
    * @api private
    *
    */

 }, {
   key: "filterUpgrades",
   value: function filterUpgrades(upgrades) {
     var filteredUpgrades = [];
     var i = 0;
     var j = upgrades.length;

     for (; i < j; i++) {
       if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
     }

     return filteredUpgrades;
   }
 }]);

 return Socket;
}(Emitter);

Socket.priorWebsocketSuccess = false;
/**
* Protocol version.
*
* @api public
*/

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
 var o = {};

 for (var i in obj) {
   if (obj.hasOwnProperty(i)) {
     o[i] = obj[i];
   }
 }

 return o;
}

module.exports = Socket;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transport.js ***!
 \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var Transport = /*#__PURE__*/function (_Emitter) {
 _inherits(Transport, _Emitter);

 var _super = _createSuper(Transport);

 /**
  * Transport abstract constructor.
  *
  * @param {Object} options.
  * @api private
  */
 function Transport(opts) {
   var _this;

   _classCallCheck(this, Transport);

   _this = _super.call(this);
   _this.opts = opts;
   _this.query = opts.query;
   _this.readyState = "";
   _this.socket = opts.socket;
   return _this;
 }
 /**
  * Emits an error.
  *
  * @param {String} str
  * @return {Transport} for chaining
  * @api public
  */


 _createClass(Transport, [{
   key: "onError",
   value: function onError(msg, desc) {
     var err = new Error(msg);
     err.type = "TransportError";
     err.description = desc;
     this.emit("error", err);
     return this;
   }
   /**
    * Opens the transport.
    *
    * @api public
    */

 }, {
   key: "open",
   value: function open() {
     if ("closed" === this.readyState || "" === this.readyState) {
       this.readyState = "opening";
       this.doOpen();
     }

     return this;
   }
   /**
    * Closes the transport.
    *
    * @api private
    */

 }, {
   key: "close",
   value: function close() {
     if ("opening" === this.readyState || "open" === this.readyState) {
       this.doClose();
       this.onClose();
     }

     return this;
   }
   /**
    * Sends multiple packets.
    *
    * @param {Array} packets
    * @api private
    */

 }, {
   key: "send",
   value: function send(packets) {
     if ("open" === this.readyState) {
       this.write(packets);
     } else {
       throw new Error("Transport not open");
     }
   }
   /**
    * Called upon open
    *
    * @api private
    */

 }, {
   key: "onOpen",
   value: function onOpen() {
     this.readyState = "open";
     this.writable = true;
     this.emit("open");
   }
   /**
    * Called with data.
    *
    * @param {String} data
    * @api private
    */

 }, {
   key: "onData",
   value: function onData(data) {
     var packet = parser.decodePacket(data, this.socket.binaryType);
     this.onPacket(packet);
   }
   /**
    * Called with a decoded packet.
    */

 }, {
   key: "onPacket",
   value: function onPacket(packet) {
     this.emit("packet", packet);
   }
   /**
    * Called upon close.
    *
    * @api private
    */

 }, {
   key: "onClose",
   value: function onClose() {
     this.readyState = "closed";
     this.emit("close");
   }
 }]);

 return Transport;
}(Emitter);

module.exports = Transport;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
 \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");

var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");

var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

exports.polling = polling;
exports.websocket = websocket;
/**
* Polling transport polymorphic constructor.
* Decides on xhr vs jsonp based on feature detection.
*
* @api private
*/

function polling(opts) {
 var xhr;
 var xd = false;
 var xs = false;
 var jsonp = false !== opts.jsonp;

 if (typeof location !== "undefined") {
   var isSSL = "https:" === location.protocol;
   var port = location.port; // some user agents have empty `location.port`

   if (!port) {
     port = isSSL ? 443 : 80;
   }

   xd = opts.hostname !== location.hostname || port !== opts.port;
   xs = opts.secure !== isSSL;
 }

 opts.xdomain = xd;
 opts.xscheme = xs;
 xhr = new XMLHttpRequest(opts);

 if ("open" in xhr && !opts.forceJSONP) {
   return new XHR(opts);
 } else {
   if (!jsonp) throw new Error("JSONP disabled");
   return new JSONP(opts);
 }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
* Global JSONP callbacks.
*/

var callbacks;
/**
* Noop.
*/

function empty() {}

var JSONPPolling = /*#__PURE__*/function (_Polling) {
 _inherits(JSONPPolling, _Polling);

 var _super = _createSuper(JSONPPolling);

 /**
  * JSONP Polling constructor.
  *
  * @param {Object} opts.
  * @api public
  */
 function JSONPPolling(opts) {
   var _this;

   _classCallCheck(this, JSONPPolling);

   _this = _super.call(this, opts);
   _this.query = _this.query || {}; // define global callbacks array if not present
   // we do this here (lazily) to avoid unneeded global pollution

   if (!callbacks) {
     // we need to consider multiple engines in the same page
     callbacks = globalThis.___eio = globalThis.___eio || [];
   } // callback identifier


   _this.index = callbacks.length; // add callback to jsonp global

   var self = _assertThisInitialized(_this);

   callbacks.push(function (msg) {
     self.onData(msg);
   }); // append to query string

   _this.query.j = _this.index; // prevent spurious errors from being emitted when the window is unloaded

   if (typeof addEventListener === "function") {
     addEventListener("beforeunload", function () {
       if (self.script) self.script.onerror = empty;
     }, false);
   }

   return _this;
 }
 /**
  * JSONP only supports binary as base64 encoded strings
  */


 _createClass(JSONPPolling, [{
   key: "doClose",

   /**
    * Closes the socket.
    *
    * @api private
    */
   value: function doClose() {
     if (this.script) {
       this.script.parentNode.removeChild(this.script);
       this.script = null;
     }

     if (this.form) {
       this.form.parentNode.removeChild(this.form);
       this.form = null;
       this.iframe = null;
     }

     _get(_getPrototypeOf(JSONPPolling.prototype), "doClose", this).call(this);
   }
   /**
    * Starts a poll cycle.
    *
    * @api private
    */

 }, {
   key: "doPoll",
   value: function doPoll() {
     var self = this;
     var script = document.createElement("script");

     if (this.script) {
       this.script.parentNode.removeChild(this.script);
       this.script = null;
     }

     script.async = true;
     script.src = this.uri();

     script.onerror = function (e) {
       self.onError("jsonp poll error", e);
     };

     var insertAt = document.getElementsByTagName("script")[0];

     if (insertAt) {
       insertAt.parentNode.insertBefore(script, insertAt);
     } else {
       (document.head || document.body).appendChild(script);
     }

     this.script = script;
     var isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

     if (isUAgecko) {
       setTimeout(function () {
         var iframe = document.createElement("iframe");
         document.body.appendChild(iframe);
         document.body.removeChild(iframe);
       }, 100);
     }
   }
   /**
    * Writes with a hidden iframe.
    *
    * @param {String} data to send
    * @param {Function} called upon flush.
    * @api private
    */

 }, {
   key: "doWrite",
   value: function doWrite(data, fn) {
     var self = this;
     var iframe;

     if (!this.form) {
       var form = document.createElement("form");
       var area = document.createElement("textarea");
       var id = this.iframeId = "eio_iframe_" + this.index;
       form.className = "socketio";
       form.style.position = "absolute";
       form.style.top = "-1000px";
       form.style.left = "-1000px";
       form.target = id;
       form.method = "POST";
       form.setAttribute("accept-charset", "utf-8");
       area.name = "d";
       form.appendChild(area);
       document.body.appendChild(form);
       this.form = form;
       this.area = area;
     }

     this.form.action = this.uri();

     function complete() {
       initIframe();
       fn();
     }

     function initIframe() {
       if (self.iframe) {
         try {
           self.form.removeChild(self.iframe);
         } catch (e) {
           self.onError("jsonp polling iframe removal error", e);
         }
       }

       try {
         // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
         var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
         iframe = document.createElement(html);
       } catch (e) {
         iframe = document.createElement("iframe");
         iframe.name = self.iframeId;
         iframe.src = "javascript:0";
       }

       iframe.id = self.iframeId;
       self.form.appendChild(iframe);
       self.iframe = iframe;
     }

     initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
     // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

     data = data.replace(rEscapedNewline, "\\\n");
     this.area.value = data.replace(rNewline, "\\n");

     try {
       this.form.submit();
     } catch (e) {}

     if (this.iframe.attachEvent) {
       this.iframe.onreadystatechange = function () {
         if (self.iframe.readyState === "complete") {
           complete();
         }
       };
     } else {
       this.iframe.onload = complete;
     }
   }
 }, {
   key: "supportsBinary",
   get: function get() {
     return false;
   }
 }]);

 return JSONPPolling;
}(Polling);

module.exports = JSONPPolling;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global attachEvent */
var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var _require = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js"),
   pick = _require.pick;

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling-xhr");
/**
* Empty function
*/


function empty() {}

var hasXHR2 = function () {
 var xhr = new XMLHttpRequest({
   xdomain: false
 });
 return null != xhr.responseType;
}();

var XHR = /*#__PURE__*/function (_Polling) {
 _inherits(XHR, _Polling);

 var _super = _createSuper(XHR);

 /**
  * XHR Polling constructor.
  *
  * @param {Object} opts
  * @api public
  */
 function XHR(opts) {
   var _this;

   _classCallCheck(this, XHR);

   _this = _super.call(this, opts);

   if (typeof location !== "undefined") {
     var isSSL = "https:" === location.protocol;
     var port = location.port; // some user agents have empty `location.port`

     if (!port) {
       port = isSSL ? 443 : 80;
     }

     _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
     _this.xs = opts.secure !== isSSL;
   }
   /**
    * XHR supports binary
    */


   var forceBase64 = opts && opts.forceBase64;
   _this.supportsBinary = hasXHR2 && !forceBase64;
   return _this;
 }
 /**
  * Creates a request.
  *
  * @param {String} method
  * @api private
  */


 _createClass(XHR, [{
   key: "request",
   value: function request() {
     var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

     _extends(opts, {
       xd: this.xd,
       xs: this.xs
     }, this.opts);

     return new Request(this.uri(), opts);
   }
   /**
    * Sends data.
    *
    * @param {String} data to send.
    * @param {Function} called upon flush.
    * @api private
    */

 }, {
   key: "doWrite",
   value: function doWrite(data, fn) {
     var req = this.request({
       method: "POST",
       data: data
     });
     var self = this;
     req.on("success", fn);
     req.on("error", function (err) {
       self.onError("xhr post error", err);
     });
   }
   /**
    * Starts a poll cycle.
    *
    * @api private
    */

 }, {
   key: "doPoll",
   value: function doPoll() {
     debug("xhr poll");
     var req = this.request();
     var self = this;
     req.on("data", function (data) {
       self.onData(data);
     });
     req.on("error", function (err) {
       self.onError("xhr poll error", err);
     });
     this.pollXhr = req;
   }
 }]);

 return XHR;
}(Polling);

var Request = /*#__PURE__*/function (_Emitter) {
 _inherits(Request, _Emitter);

 var _super2 = _createSuper(Request);

 /**
  * Request constructor
  *
  * @param {Object} options
  * @api public
  */
 function Request(uri, opts) {
   var _this2;

   _classCallCheck(this, Request);

   _this2 = _super2.call(this);
   _this2.opts = opts;
   _this2.method = opts.method || "GET";
   _this2.uri = uri;
   _this2.async = false !== opts.async;
   _this2.data = undefined !== opts.data ? opts.data : null;

   _this2.create();

   return _this2;
 }
 /**
  * Creates the XHR object and sends the request.
  *
  * @api private
  */


 _createClass(Request, [{
   key: "create",
   value: function create() {
     var opts = pick(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized");
     opts.xdomain = !!this.opts.xd;
     opts.xscheme = !!this.opts.xs;
     var xhr = this.xhr = new XMLHttpRequest(opts);
     var self = this;

     try {
       debug("xhr open %s: %s", this.method, this.uri);
       xhr.open(this.method, this.uri, this.async);

       try {
         if (this.opts.extraHeaders) {
           xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

           for (var i in this.opts.extraHeaders) {
             if (this.opts.extraHeaders.hasOwnProperty(i)) {
               xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
             }
           }
         }
       } catch (e) {}

       if ("POST" === this.method) {
         try {
           xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
         } catch (e) {}
       }

       try {
         xhr.setRequestHeader("Accept", "*/*");
       } catch (e) {} // ie6 check


       if ("withCredentials" in xhr) {
         xhr.withCredentials = this.opts.withCredentials;
       }

       if (this.opts.requestTimeout) {
         xhr.timeout = this.opts.requestTimeout;
       }

       if (this.hasXDR()) {
         xhr.onload = function () {
           self.onLoad();
         };

         xhr.onerror = function () {
           self.onError(xhr.responseText);
         };
       } else {
         xhr.onreadystatechange = function () {
           if (4 !== xhr.readyState) return;

           if (200 === xhr.status || 1223 === xhr.status) {
             self.onLoad();
           } else {
             // make sure the `error` event handler that's user-set
             // does not throw in the same tick and gets caught here
             setTimeout(function () {
               self.onError(typeof xhr.status === "number" ? xhr.status : 0);
             }, 0);
           }
         };
       }

       debug("xhr data %s", this.data);
       xhr.send(this.data);
     } catch (e) {
       // Need to defer since .create() is called directly from the constructor
       // and thus the 'error' event can only be only bound *after* this exception
       // occurs.  Therefore, also, we cannot throw here at all.
       setTimeout(function () {
         self.onError(e);
       }, 0);
       return;
     }

     if (typeof document !== "undefined") {
       this.index = Request.requestsCount++;
       Request.requests[this.index] = this;
     }
   }
   /**
    * Called upon successful response.
    *
    * @api private
    */

 }, {
   key: "onSuccess",
   value: function onSuccess() {
     this.emit("success");
     this.cleanup();
   }
   /**
    * Called if we have data.
    *
    * @api private
    */

 }, {
   key: "onData",
   value: function onData(data) {
     this.emit("data", data);
     this.onSuccess();
   }
   /**
    * Called upon error.
    *
    * @api private
    */

 }, {
   key: "onError",
   value: function onError(err) {
     this.emit("error", err);
     this.cleanup(true);
   }
   /**
    * Cleans up house.
    *
    * @api private
    */

 }, {
   key: "cleanup",
   value: function cleanup(fromError) {
     if ("undefined" === typeof this.xhr || null === this.xhr) {
       return;
     } // xmlhttprequest


     if (this.hasXDR()) {
       this.xhr.onload = this.xhr.onerror = empty;
     } else {
       this.xhr.onreadystatechange = empty;
     }

     if (fromError) {
       try {
         this.xhr.abort();
       } catch (e) {}
     }

     if (typeof document !== "undefined") {
       delete Request.requests[this.index];
     }

     this.xhr = null;
   }
   /**
    * Called upon load.
    *
    * @api private
    */

 }, {
   key: "onLoad",
   value: function onLoad() {
     var data = this.xhr.responseText;

     if (data !== null) {
       this.onData(data);
     }
   }
   /**
    * Check if it has XDomainRequest.
    *
    * @api private
    */

 }, {
   key: "hasXDR",
   value: function hasXDR() {
     return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
   }
   /**
    * Aborts the request.
    *
    * @api public
    */

 }, {
   key: "abort",
   value: function abort() {
     this.cleanup();
   }
 }]);

 return Request;
}(Emitter);
/**
* Aborts pending requests when unloading the window. This is needed to prevent
* memory leaks (e.g. when using IE) and to ensure that no spurious error is
* emitted.
*/


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
 if (typeof attachEvent === "function") {
   attachEvent("onunload", unloadHandler);
 } else if (typeof addEventListener === "function") {
   var terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
   addEventListener(terminationEvent, unloadHandler, false);
 }
}

function unloadHandler() {
 for (var i in Request.requests) {
   if (Request.requests.hasOwnProperty(i)) {
     Request.requests[i].abort();
   }
 }
}

module.exports = XHR;
module.exports.Request = Request;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling");

var Polling = /*#__PURE__*/function (_Transport) {
 _inherits(Polling, _Transport);

 var _super = _createSuper(Polling);

 function Polling() {
   _classCallCheck(this, Polling);

   return _super.apply(this, arguments);
 }

 _createClass(Polling, [{
   key: "doOpen",

   /**
    * Opens the socket (triggers polling). We write a PING message to determine
    * when the transport is open.
    *
    * @api private
    */
   value: function doOpen() {
     this.poll();
   }
   /**
    * Pauses polling.
    *
    * @param {Function} callback upon buffers are flushed and transport is paused
    * @api private
    */

 }, {
   key: "pause",
   value: function pause(onPause) {
     var self = this;
     this.readyState = "pausing";

     function pause() {
       debug("paused");
       self.readyState = "paused";
       onPause();
     }

     if (this.polling || !this.writable) {
       var total = 0;

       if (this.polling) {
         debug("we are currently polling - waiting to pause");
         total++;
         this.once("pollComplete", function () {
           debug("pre-pause polling complete");
           --total || pause();
         });
       }

       if (!this.writable) {
         debug("we are currently writing - waiting to pause");
         total++;
         this.once("drain", function () {
           debug("pre-pause writing complete");
           --total || pause();
         });
       }
     } else {
       pause();
     }
   }
   /**
    * Starts polling cycle.
    *
    * @api public
    */

 }, {
   key: "poll",
   value: function poll() {
     debug("polling");
     this.polling = true;
     this.doPoll();
     this.emit("poll");
   }
   /**
    * Overloads onData to detect payloads.
    *
    * @api private
    */

 }, {
   key: "onData",
   value: function onData(data) {
     var self = this;
     debug("polling got data %s", data);

     var callback = function callback(packet, index, total) {
       // if its the first message we consider the transport open
       if ("opening" === self.readyState && packet.type === "open") {
         self.onOpen();
       } // if its a close packet, we close the ongoing requests


       if ("close" === packet.type) {
         self.onClose();
         return false;
       } // otherwise bypass onData and handle the message


       self.onPacket(packet);
     }; // decode payload


     parser.decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

     if ("closed" !== this.readyState) {
       // if we got data we're not polling
       this.polling = false;
       this.emit("pollComplete");

       if ("open" === this.readyState) {
         this.poll();
       } else {
         debug('ignoring poll - transport state "%s"', this.readyState);
       }
     }
   }
   /**
    * For polling, send a close packet.
    *
    * @api private
    */

 }, {
   key: "doClose",
   value: function doClose() {
     var self = this;

     function close() {
       debug("writing close packet");
       self.write([{
         type: "close"
       }]);
     }

     if ("open" === this.readyState) {
       debug("transport open - closing");
       close();
     } else {
       // in case we're trying to close while
       // handshaking is in progress (GH-164)
       debug("transport not open - deferring close");
       this.once("open", close);
     }
   }
   /**
    * Writes a packets payload.
    *
    * @param {Array} data packets
    * @param {Function} drain callback
    * @api private
    */

 }, {
   key: "write",
   value: function write(packets) {
     var _this = this;

     this.writable = false;
     parser.encodePayload(packets, function (data) {
       _this.doWrite(data, function () {
         _this.writable = true;

         _this.emit("drain");
       });
     });
   }
   /**
    * Generates uri for connection.
    *
    * @api private
    */

 }, {
   key: "uri",
   value: function uri() {
     var query = this.query || {};
     var schema = this.opts.secure ? "https" : "http";
     var port = ""; // cache busting is forced

     if (false !== this.opts.timestampRequests) {
       query[this.opts.timestampParam] = yeast();
     }

     if (!this.supportsBinary && !query.sid) {
       query.b64 = 1;
     }

     query = parseqs.encode(query); // avoid port if default for schema

     if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
       port = ":" + this.opts.port;
     } // prepend ? to query


     if (query.length) {
       query = "?" + query;
     }

     var ipv6 = this.opts.hostname.indexOf(":") !== -1;
     return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
   }
 }, {
   key: "name",

   /**
    * Transport name.
    */
   get: function get() {
     return "polling";
   }
 }]);

 return Polling;
}(Transport);

module.exports = Polling;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js":
/*!***************************************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js ***!
 \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = {
 WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
 usingBrowserWebSocket: true,
 defaultBinaryType: "arraybuffer"
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
 \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var _require = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js"),
   pick = _require.pick;

var _require2 = __webpack_require__(/*! ./websocket-constructor */ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js"),
   WebSocket = _require2.WebSocket,
   usingBrowserWebSocket = _require2.usingBrowserWebSocket,
   defaultBinaryType = _require2.defaultBinaryType;

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:websocket"); // detect ReactNative environment


var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

var WS = /*#__PURE__*/function (_Transport) {
 _inherits(WS, _Transport);

 var _super = _createSuper(WS);

 /**
  * WebSocket transport constructor.
  *
  * @api {Object} connection options
  * @api public
  */
 function WS(opts) {
   var _this;

   _classCallCheck(this, WS);

   _this = _super.call(this, opts);
   _this.supportsBinary = !opts.forceBase64;
   return _this;
 }
 /**
  * Transport name.
  *
  * @api public
  */


 _createClass(WS, [{
   key: "doOpen",

   /**
    * Opens socket.
    *
    * @api private
    */
   value: function doOpen() {
     if (!this.check()) {
       // let probe timeout
       return;
     }

     var uri = this.uri();
     var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

     var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

     if (this.opts.extraHeaders) {
       opts.headers = this.opts.extraHeaders;
     }

     try {
       this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
     } catch (err) {
       return this.emit("error", err);
     }

     this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
     this.addEventListeners();
   }
   /**
    * Adds event listeners to the socket
    *
    * @api private
    */

 }, {
   key: "addEventListeners",
   value: function addEventListeners() {
     var self = this;

     this.ws.onopen = function () {
       self.onOpen();
     };

     this.ws.onclose = function () {
       self.onClose();
     };

     this.ws.onmessage = function (ev) {
       self.onData(ev.data);
     };

     this.ws.onerror = function (e) {
       self.onError("websocket error", e);
     };
   }
   /**
    * Writes data to socket.
    *
    * @param {Array} array of packets.
    * @api private
    */

 }, {
   key: "write",
   value: function write(packets) {
     var self = this;
     this.writable = false; // encodePacket efficient as it uses WS framing
     // no need for encodePayload

     var total = packets.length;
     var i = 0;
     var l = total;

     for (; i < l; i++) {
       (function (packet) {
         parser.encodePacket(packet, self.supportsBinary, function (data) {
           // always create a new object (GH-437)
           var opts = {};

           if (!usingBrowserWebSocket) {
             if (packet.options) {
               opts.compress = packet.options.compress;
             }

             if (self.opts.perMessageDeflate) {
               var len = "string" === typeof data ? Buffer.byteLength(data) : data.length;

               if (len < self.opts.perMessageDeflate.threshold) {
                 opts.compress = false;
               }
             }
           } // Sometimes the websocket has already been closed but the browser didn't
           // have a chance of informing us about it yet, in that case send will
           // throw an error


           try {
             if (usingBrowserWebSocket) {
               // TypeError is thrown when passing the second argument on Safari
               self.ws.send(data);
             } else {
               self.ws.send(data, opts);
             }
           } catch (e) {
             debug("websocket closed before onclose event");
           }

           --total || done();
         });
       })(packets[i]);
     }

     function done() {
       self.emit("flush"); // fake drain
       // defer to next tick to allow Socket to clear writeBuffer

       setTimeout(function () {
         self.writable = true;
         self.emit("drain");
       }, 0);
     }
   }
   /**
    * Called upon close
    *
    * @api private
    */

 }, {
   key: "onClose",
   value: function onClose() {
     Transport.prototype.onClose.call(this);
   }
   /**
    * Closes socket.
    *
    * @api private
    */

 }, {
   key: "doClose",
   value: function doClose() {
     if (typeof this.ws !== "undefined") {
       this.ws.close();
     }
   }
   /**
    * Generates uri for connection.
    *
    * @api private
    */

 }, {
   key: "uri",
   value: function uri() {
     var query = this.query || {};
     var schema = this.opts.secure ? "wss" : "ws";
     var port = ""; // avoid port if default for schema

     if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
       port = ":" + this.opts.port;
     } // append timestamp to URI


     if (this.opts.timestampRequests) {
       query[this.opts.timestampParam] = yeast();
     } // communicate binary support capabilities


     if (!this.supportsBinary) {
       query.b64 = 1;
     }

     query = parseqs.encode(query); // prepend ? to query

     if (query.length) {
       query = "?" + query;
     }

     var ipv6 = this.opts.hostname.indexOf(":") !== -1;
     return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
   }
   /**
    * Feature detection for WebSocket.
    *
    * @return {Boolean} whether this transport is available.
    * @api public
    */

 }, {
   key: "check",
   value: function check() {
     return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
   }
 }, {
   key: "name",
   get: function get() {
     return "websocket";
   }
 }]);

 return WS;
}(Transport);

module.exports = WS;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/util.js":
/*!***************************************************!*\
 !*** ./node_modules/engine.io-client/lib/util.js ***!
 \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.pick = function (obj) {
 for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
   attr[_key - 1] = arguments[_key];
 }

 return attr.reduce(function (acc, k) {
   if (obj.hasOwnProperty(k)) {
     acc[k] = obj[k];
   }

   return acc;
 }, {});
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
 !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

var globalThis = __webpack_require__(/*! ./globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = function (opts) {
 var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
 // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

 var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
 // https://github.com/Automattic/engine.io-client/pull/217

 var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

 try {
   if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
     return new XMLHttpRequest();
   }
 } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
 // because loading bar keeps flashing when using jsonp-polling
 // https://github.com/yujiosaka/socke.io-ie8-loading-example


 try {
   if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
     return new XDomainRequest();
   }
 } catch (e) {}

 if (!xdomain) {
   try {
     return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
   } catch (e) {}
 }
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/commons.js":
/*!******************************************************!*\
 !*** ./node_modules/engine.io-parser/lib/commons.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
 PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
 type: "error",
 data: "parser error"
};
module.exports = {
 PACKET_TYPES: PACKET_TYPES,
 PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
 ERROR_PACKET: ERROR_PACKET
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/decodePacket.browser.js":
/*!*******************************************************************!*\
 !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
 \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
   PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE,
   ERROR_PACKET = _require.ERROR_PACKET;

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var base64decoder;

if (withNativeArrayBuffer) {
 base64decoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

var decodePacket = function decodePacket(encodedPacket, binaryType) {
 if (typeof encodedPacket !== "string") {
   return {
     type: "message",
     data: mapBinary(encodedPacket, binaryType)
   };
 }

 var type = encodedPacket.charAt(0);

 if (type === "b") {
   return {
     type: "message",
     data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
   };
 }

 var packetType = PACKET_TYPES_REVERSE[type];

 if (!packetType) {
   return ERROR_PACKET;
 }

 return encodedPacket.length > 1 ? {
   type: PACKET_TYPES_REVERSE[type],
   data: encodedPacket.substring(1)
 } : {
   type: PACKET_TYPES_REVERSE[type]
 };
};

var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
 if (base64decoder) {
   var decoded = base64decoder.decode(data);
   return mapBinary(decoded, binaryType);
 } else {
   return {
     base64: true,
     data: data
   }; // fallback for old browsers
 }
};

var mapBinary = function mapBinary(data, binaryType) {
 switch (binaryType) {
   case "blob":
     return data instanceof ArrayBuffer ? new Blob([data]) : data;

   case "arraybuffer":
   default:
     return data;
   // assuming the data is already an ArrayBuffer
 }
};

module.exports = decodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/encodePacket.browser.js":
/*!*******************************************************************!*\
 !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
 \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
   PACKET_TYPES = _require.PACKET_TYPES;

var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

var isView = function isView(obj) {
 return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
 var type = _ref.type,
     data = _ref.data;

 if (withNativeBlob && data instanceof Blob) {
   if (supportsBinary) {
     return callback(data);
   } else {
     return encodeBlobAsBase64(data, callback);
   }
 } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
   if (supportsBinary) {
     return callback(data instanceof ArrayBuffer ? data : data.buffer);
   } else {
     return encodeBlobAsBase64(new Blob([data]), callback);
   }
 } // plain string


 return callback(PACKET_TYPES[type] + (data || ""));
};

var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
 var fileReader = new FileReader();

 fileReader.onload = function () {
   var content = fileReader.result.split(",")[1];
   callback("b" + content);
 };

 return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/index.js":
/*!****************************************************!*\
 !*** ./node_modules/engine.io-parser/lib/index.js ***!
 \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var encodePacket = __webpack_require__(/*! ./encodePacket */ "./node_modules/engine.io-parser/lib/encodePacket.browser.js");

var decodePacket = __webpack_require__(/*! ./decodePacket */ "./node_modules/engine.io-parser/lib/decodePacket.browser.js");

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

var encodePayload = function encodePayload(packets, callback) {
 // some packets may be added to the array while encoding, so the initial length must be saved
 var length = packets.length;
 var encodedPackets = new Array(length);
 var count = 0;
 packets.forEach(function (packet, i) {
   // force base64 encoding for binary packets
   encodePacket(packet, false, function (encodedPacket) {
     encodedPackets[i] = encodedPacket;

     if (++count === length) {
       callback(encodedPackets.join(SEPARATOR));
     }
   });
 });
};

var decodePayload = function decodePayload(encodedPayload, binaryType) {
 var encodedPackets = encodedPayload.split(SEPARATOR);
 var packets = [];

 for (var i = 0; i < encodedPackets.length; i++) {
   var decodedPacket = decodePacket(encodedPackets[i], binaryType);
   packets.push(decodedPacket);

   if (decodedPacket.type === "error") {
     break;
   }
 }

 return packets;
};

module.exports = {
 protocol: 4,
 encodePacket: encodePacket,
 encodePayload: encodePayload,
 decodePacket: decodePacket,
 decodePayload: decodePayload
};

/***/ }),

/***/ "./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*************************************************************************************************!*\
 !*** ./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
 \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* base64-arraybuffer
* https://github.com/niklasvh/base64-arraybuffer
*
* Copyright (c) 2012 Niklas von Hertzen
* Licensed under the MIT license.
*/
(function (chars) {
 "use strict";

 exports.encode = function (arraybuffer) {
   var bytes = new Uint8Array(arraybuffer),
       i,
       len = bytes.length,
       base64 = "";

   for (i = 0; i < len; i += 3) {
     base64 += chars[bytes[i] >> 2];
     base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
     base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
     base64 += chars[bytes[i + 2] & 63];
   }

   if (len % 3 === 2) {
     base64 = base64.substring(0, base64.length - 1) + "=";
   } else if (len % 3 === 1) {
     base64 = base64.substring(0, base64.length - 2) + "==";
   }

   return base64;
 };

 exports.decode = function (base64) {
   var bufferLength = base64.length * 0.75,
       len = base64.length,
       i,
       p = 0,
       encoded1,
       encoded2,
       encoded3,
       encoded4;

   if (base64[base64.length - 1] === "=") {
     bufferLength--;

     if (base64[base64.length - 2] === "=") {
       bufferLength--;
     }
   }

   var arraybuffer = new ArrayBuffer(bufferLength),
       bytes = new Uint8Array(arraybuffer);

   for (i = 0; i < len; i += 4) {
     encoded1 = chars.indexOf(base64[i]);
     encoded2 = chars.indexOf(base64[i + 1]);
     encoded3 = chars.indexOf(base64[i + 2]);
     encoded4 = chars.indexOf(base64[i + 3]);
     bytes[p++] = encoded1 << 2 | encoded2 >> 4;
     bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
     bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
   }

   return arraybuffer;
 };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
 !*** ./node_modules/has-cors/index.js ***!
 \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Module exports.
*
* Logic borrowed from Modernizr:
*
*   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
*/
try {
 module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
 // if XMLHttp support is disabled in IE then it will throw
 // when trying to create
 module.exports = false;
}

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
 !*** ./node_modules/ms/index.js ***!
 \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
* Helpers.
*/
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
* Parse or format the given `val`.
*
* Options:
*
*  - `long` verbose formatting [false]
*
* @param {String|Number} val
* @param {Object} [options]
* @throws {Error} throw an error if val is not a non-empty string or a number
* @return {String|Number}
* @api public
*/

module.exports = function (val, options) {
 options = options || {};

 var type = _typeof(val);

 if (type === 'string' && val.length > 0) {
   return parse(val);
 } else if (type === 'number' && isFinite(val)) {
   return options["long"] ? fmtLong(val) : fmtShort(val);
 }

 throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
* Parse the given `str` and return milliseconds.
*
* @param {String} str
* @return {Number}
* @api private
*/


function parse(str) {
 str = String(str);

 if (str.length > 100) {
   return;
 }

 var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

 if (!match) {
   return;
 }

 var n = parseFloat(match[1]);
 var type = (match[2] || 'ms').toLowerCase();

 switch (type) {
   case 'years':
   case 'year':
   case 'yrs':
   case 'yr':
   case 'y':
     return n * y;

   case 'weeks':
   case 'week':
   case 'w':
     return n * w;

   case 'days':
   case 'day':
   case 'd':
     return n * d;

   case 'hours':
   case 'hour':
   case 'hrs':
   case 'hr':
   case 'h':
     return n * h;

   case 'minutes':
   case 'minute':
   case 'mins':
   case 'min':
   case 'm':
     return n * m;

   case 'seconds':
   case 'second':
   case 'secs':
   case 'sec':
   case 's':
     return n * s;

   case 'milliseconds':
   case 'millisecond':
   case 'msecs':
   case 'msec':
   case 'ms':
     return n;

   default:
     return undefined;
 }
}
/**
* Short format for `ms`.
*
* @param {Number} ms
* @return {String}
* @api private
*/


function fmtShort(ms) {
 var msAbs = Math.abs(ms);

 if (msAbs >= d) {
   return Math.round(ms / d) + 'd';
 }

 if (msAbs >= h) {
   return Math.round(ms / h) + 'h';
 }

 if (msAbs >= m) {
   return Math.round(ms / m) + 'm';
 }

 if (msAbs >= s) {
   return Math.round(ms / s) + 's';
 }

 return ms + 'ms';
}
/**
* Long format for `ms`.
*
* @param {Number} ms
* @return {String}
* @api private
*/


function fmtLong(ms) {
 var msAbs = Math.abs(ms);

 if (msAbs >= d) {
   return plural(ms, msAbs, d, 'day');
 }

 if (msAbs >= h) {
   return plural(ms, msAbs, h, 'hour');
 }

 if (msAbs >= m) {
   return plural(ms, msAbs, m, 'minute');
 }

 if (msAbs >= s) {
   return plural(ms, msAbs, s, 'second');
 }

 return ms + ' ms';
}
/**
* Pluralization helper.
*/


function plural(ms, msAbs, n, name) {
 var isPlural = msAbs >= n * 1.5;
 return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
 !*** ./node_modules/parseqs/index.js ***!
 \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Compiles a querystring
* Returns string representation of the object
*
* @param {Object}
* @api private
*/
exports.encode = function (obj) {
 var str = '';

 for (var i in obj) {
   if (obj.hasOwnProperty(i)) {
     if (str.length) str += '&';
     str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
   }
 }

 return str;
};
/**
* Parses a simple querystring into an object
*
* @param {String} qs
* @api private
*/


exports.decode = function (qs) {
 var qry = {};
 var pairs = qs.split('&');

 for (var i = 0, l = pairs.length; i < l; i++) {
   var pair = pairs[i].split('=');
   qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
 }

 return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
 !*** ./node_modules/parseuri/index.js ***!
 \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Parses an URI
*
* @author Steven Levithan <stevenlevithan.com> (MIT license)
* @api private
*/
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
 var src = str,
     b = str.indexOf('['),
     e = str.indexOf(']');

 if (b != -1 && e != -1) {
   str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
 }

 var m = re.exec(str || ''),
     uri = {},
     i = 14;

 while (i--) {
   uri[parts[i]] = m[i] || '';
 }

 if (b != -1 && e != -1) {
   uri.source = src;
   uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
   uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
   uri.ipv6uri = true;
 }

 uri.pathNames = pathNames(uri, uri['path']);
 uri.queryKey = queryKey(uri, uri['query']);
 return uri;
};

function pathNames(obj, path) {
 var regx = /\/{2,9}/g,
     names = path.replace(regx, "/").split("/");

 if (path.substr(0, 1) == '/' || path.length === 0) {
   names.splice(0, 1);
 }

 if (path.substr(path.length - 1, 1) == '/') {
   names.splice(names.length - 1, 1);
 }

 return names;
}

function queryKey(uri, query) {
 var data = {};
 query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
   if ($1) {
     data[$1] = $2;
   }
 });
 return data;
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
 !*** ./node_modules/process/browser.js ***!
 \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
 throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
 throw new Error('clearTimeout has not been defined');
}

(function () {
 try {
   if (typeof setTimeout === 'function') {
     cachedSetTimeout = setTimeout;
   } else {
     cachedSetTimeout = defaultSetTimout;
   }
 } catch (e) {
   cachedSetTimeout = defaultSetTimout;
 }

 try {
   if (typeof clearTimeout === 'function') {
     cachedClearTimeout = clearTimeout;
   } else {
     cachedClearTimeout = defaultClearTimeout;
   }
 } catch (e) {
   cachedClearTimeout = defaultClearTimeout;
 }
})();

function runTimeout(fun) {
 if (cachedSetTimeout === setTimeout) {
   //normal enviroments in sane situations
   return setTimeout(fun, 0);
 } // if setTimeout wasn't available but was latter defined


 if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
   cachedSetTimeout = setTimeout;
   return setTimeout(fun, 0);
 }

 try {
   // when when somebody has screwed with setTimeout but no I.E. maddness
   return cachedSetTimeout(fun, 0);
 } catch (e) {
   try {
     // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
     return cachedSetTimeout.call(null, fun, 0);
   } catch (e) {
     // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
     return cachedSetTimeout.call(this, fun, 0);
   }
 }
}

function runClearTimeout(marker) {
 if (cachedClearTimeout === clearTimeout) {
   //normal enviroments in sane situations
   return clearTimeout(marker);
 } // if clearTimeout wasn't available but was latter defined


 if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
   cachedClearTimeout = clearTimeout;
   return clearTimeout(marker);
 }

 try {
   // when when somebody has screwed with setTimeout but no I.E. maddness
   return cachedClearTimeout(marker);
 } catch (e) {
   try {
     // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
     return cachedClearTimeout.call(null, marker);
   } catch (e) {
     // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
     // Some versions of I.E. have different rules for clearTimeout vs setTimeout
     return cachedClearTimeout.call(this, marker);
   }
 }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
 if (!draining || !currentQueue) {
   return;
 }

 draining = false;

 if (currentQueue.length) {
   queue = currentQueue.concat(queue);
 } else {
   queueIndex = -1;
 }

 if (queue.length) {
   drainQueue();
 }
}

function drainQueue() {
 if (draining) {
   return;
 }

 var timeout = runTimeout(cleanUpNextTick);
 draining = true;
 var len = queue.length;

 while (len) {
   currentQueue = queue;
   queue = [];

   while (++queueIndex < len) {
     if (currentQueue) {
       currentQueue[queueIndex].run();
     }
   }

   queueIndex = -1;
   len = queue.length;
 }

 currentQueue = null;
 draining = false;
 runClearTimeout(timeout);
}

process.nextTick = function (fun) {
 var args = new Array(arguments.length - 1);

 if (arguments.length > 1) {
   for (var i = 1; i < arguments.length; i++) {
     args[i - 1] = arguments[i];
   }
 }

 queue.push(new Item(fun, args));

 if (queue.length === 1 && !draining) {
   runTimeout(drainQueue);
 }
}; // v8 likes predictible objects


function Item(fun, array) {
 this.fun = fun;
 this.array = array;
}

Item.prototype.run = function () {
 this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
 return [];
};

process.binding = function (name) {
 throw new Error('process.binding is not supported');
};

process.cwd = function () {
 return '/';
};

process.chdir = function (dir) {
 throw new Error('process.chdir is not supported');
};

process.umask = function () {
 return 0;
};

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/binary.js":
/*!******************************************************!*\
 !*** ./node_modules/socket.io-parser/dist/binary.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.reconstructPacket = exports.deconstructPacket = void 0;

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");
/**
* Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
*
* @param {Object} packet - socket.io event packet
* @return {Object} with deconstructed packet and list of buffers
* @public
*/


function deconstructPacket(packet) {
 var buffers = [];
 var packetData = packet.data;
 var pack = packet;
 pack.data = _deconstructPacket(packetData, buffers);
 pack.attachments = buffers.length; // number of binary 'attachments'

 return {
   packet: pack,
   buffers: buffers
 };
}

exports.deconstructPacket = deconstructPacket;

function _deconstructPacket(data, buffers) {
 if (!data) return data;

 if (is_binary_1.isBinary(data)) {
   var placeholder = {
     _placeholder: true,
     num: buffers.length
   };
   buffers.push(data);
   return placeholder;
 } else if (Array.isArray(data)) {
   var newData = new Array(data.length);

   for (var i = 0; i < data.length; i++) {
     newData[i] = _deconstructPacket(data[i], buffers);
   }

   return newData;
 } else if (_typeof(data) === "object" && !(data instanceof Date)) {
   var _newData = {};

   for (var key in data) {
     if (data.hasOwnProperty(key)) {
       _newData[key] = _deconstructPacket(data[key], buffers);
     }
   }

   return _newData;
 }

 return data;
}
/**
* Reconstructs a binary packet from its placeholder packet and buffers
*
* @param {Object} packet - event packet with placeholders
* @param {Array} buffers - binary buffers to put in placeholder positions
* @return {Object} reconstructed packet
* @public
*/


function reconstructPacket(packet, buffers) {
 packet.data = _reconstructPacket(packet.data, buffers);
 packet.attachments = undefined; // no longer useful

 return packet;
}

exports.reconstructPacket = reconstructPacket;

function _reconstructPacket(data, buffers) {
 if (!data) return data;

 if (data && data._placeholder) {
   return buffers[data.num]; // appropriate buffer (should be natural order anyway)
 } else if (Array.isArray(data)) {
   for (var i = 0; i < data.length; i++) {
     data[i] = _reconstructPacket(data[i], buffers);
   }
 } else if (_typeof(data) === "object") {
   for (var key in data) {
     if (data.hasOwnProperty(key)) {
       data[key] = _reconstructPacket(data[key], buffers);
     }
   }
 }

 return data;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/index.js":
/*!*****************************************************!*\
 !*** ./node_modules/socket.io-parser/dist/index.js ***!
 \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary_1 = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/dist/binary.js");

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-parser");
/**
* Protocol version.
*
* @public
*/


exports.protocol = 5;
var PacketType;

(function (PacketType) {
 PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
 PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
 PacketType[PacketType["EVENT"] = 2] = "EVENT";
 PacketType[PacketType["ACK"] = 3] = "ACK";
 PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
 PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
 PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
* A socket.io Encoder instance
*/


var Encoder = /*#__PURE__*/function () {
 function Encoder() {
   _classCallCheck(this, Encoder);
 }

 _createClass(Encoder, [{
   key: "encode",

   /**
    * Encode a packet as a single string if non-binary, or as a
    * buffer sequence, depending on packet type.
    *
    * @param {Object} obj - packet object
    */
   value: function encode(obj) {
     debug("encoding packet %j", obj);

     if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
       if (is_binary_1.hasBinary(obj)) {
         obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
         return this.encodeAsBinary(obj);
       }
     }

     return [this.encodeAsString(obj)];
   }
   /**
    * Encode packet as string.
    */

 }, {
   key: "encodeAsString",
   value: function encodeAsString(obj) {
     // first is type
     var str = "" + obj.type; // attachments if we have them

     if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
       str += obj.attachments + "-";
     } // if we have a namespace other than `/`
     // we append it followed by a comma `,`


     if (obj.nsp && "/" !== obj.nsp) {
       str += obj.nsp + ",";
     } // immediately followed by the id


     if (null != obj.id) {
       str += obj.id;
     } // json data


     if (null != obj.data) {
       str += JSON.stringify(obj.data);
     }

     debug("encoded %j as %s", obj, str);
     return str;
   }
   /**
    * Encode packet as 'buffer sequence' by removing blobs, and
    * deconstructing packet into object with placeholders and
    * a list of buffers.
    */

 }, {
   key: "encodeAsBinary",
   value: function encodeAsBinary(obj) {
     var deconstruction = binary_1.deconstructPacket(obj);
     var pack = this.encodeAsString(deconstruction.packet);
     var buffers = deconstruction.buffers;
     buffers.unshift(pack); // add packet info to beginning of data list

     return buffers; // write all the buffers
   }
 }]);

 return Encoder;
}();

exports.Encoder = Encoder;
/**
* A socket.io Decoder instance
*
* @return {Object} decoder
*/

var Decoder = /*#__PURE__*/function (_Emitter) {
 _inherits(Decoder, _Emitter);

 var _super = _createSuper(Decoder);

 function Decoder() {
   _classCallCheck(this, Decoder);

   return _super.call(this);
 }
 /**
  * Decodes an encoded packet string into packet JSON.
  *
  * @param {String} obj - encoded packet
  */


 _createClass(Decoder, [{
   key: "add",
   value: function add(obj) {
     var packet;

     if (typeof obj === "string") {
       packet = this.decodeString(obj);

       if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
         // binary packet's json
         this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

         if (packet.attachments === 0) {
           _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
         }
       } else {
         // non-binary full packet
         _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
       }
     } else if (is_binary_1.isBinary(obj) || obj.base64) {
       // raw binary data
       if (!this.reconstructor) {
         throw new Error("got binary data when not reconstructing a packet");
       } else {
         packet = this.reconstructor.takeBinaryData(obj);

         if (packet) {
           // received final buffer
           this.reconstructor = null;

           _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
         }
       }
     } else {
       throw new Error("Unknown type: " + obj);
     }
   }
   /**
    * Decode a packet String (JSON data)
    *
    * @param {String} str
    * @return {Object} packet
    */

 }, {
   key: "decodeString",
   value: function decodeString(str) {
     var i = 0; // look up type

     var p = {
       type: Number(str.charAt(0))
     };

     if (PacketType[p.type] === undefined) {
       throw new Error("unknown packet type " + p.type);
     } // look up attachments if type binary


     if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
       var start = i + 1;

       while (str.charAt(++i) !== "-" && i != str.length) {}

       var buf = str.substring(start, i);

       if (buf != Number(buf) || str.charAt(i) !== "-") {
         throw new Error("Illegal attachments");
       }

       p.attachments = Number(buf);
     } // look up namespace (if any)


     if ("/" === str.charAt(i + 1)) {
       var _start = i + 1;

       while (++i) {
         var c = str.charAt(i);
         if ("," === c) break;
         if (i === str.length) break;
       }

       p.nsp = str.substring(_start, i);
     } else {
       p.nsp = "/";
     } // look up id


     var next = str.charAt(i + 1);

     if ("" !== next && Number(next) == next) {
       var _start2 = i + 1;

       while (++i) {
         var _c = str.charAt(i);

         if (null == _c || Number(_c) != _c) {
           --i;
           break;
         }

         if (i === str.length) break;
       }

       p.id = Number(str.substring(_start2, i + 1));
     } // look up json data


     if (str.charAt(++i)) {
       var payload = tryParse(str.substr(i));

       if (Decoder.isPayloadValid(p.type, payload)) {
         p.data = payload;
       } else {
         throw new Error("invalid payload");
       }
     }

     debug("decoded %s as %j", str, p);
     return p;
   }
 }, {
   key: "destroy",

   /**
    * Deallocates a parser's resources
    */
   value: function destroy() {
     if (this.reconstructor) {
       this.reconstructor.finishedReconstruction();
     }
   }
 }], [{
   key: "isPayloadValid",
   value: function isPayloadValid(type, payload) {
     switch (type) {
       case PacketType.CONNECT:
         return _typeof(payload) === "object";

       case PacketType.DISCONNECT:
         return payload === undefined;

       case PacketType.CONNECT_ERROR:
         return typeof payload === "string" || _typeof(payload) === "object";

       case PacketType.EVENT:
       case PacketType.BINARY_EVENT:
         return Array.isArray(payload) && payload.length > 0;

       case PacketType.ACK:
       case PacketType.BINARY_ACK:
         return Array.isArray(payload);
     }
   }
 }]);

 return Decoder;
}(Emitter);

exports.Decoder = Decoder;

function tryParse(str) {
 try {
   return JSON.parse(str);
 } catch (e) {
   return false;
 }
}
/**
* A manager of a binary event's 'buffer sequence'. Should
* be constructed whenever a packet of type BINARY_EVENT is
* decoded.
*
* @param {Object} packet
* @return {BinaryReconstructor} initialized reconstructor
*/


var BinaryReconstructor = /*#__PURE__*/function () {
 function BinaryReconstructor(packet) {
   _classCallCheck(this, BinaryReconstructor);

   this.packet = packet;
   this.buffers = [];
   this.reconPack = packet;
 }
 /**
  * Method to be called when binary data received from connection
  * after a BINARY_EVENT packet.
  *
  * @param {Buffer | ArrayBuffer} binData - the raw binary data received
  * @return {null | Object} returns null if more binary data is expected or
  *   a reconstructed packet object if all buffers have been received.
  */


 _createClass(BinaryReconstructor, [{
   key: "takeBinaryData",
   value: function takeBinaryData(binData) {
     this.buffers.push(binData);

     if (this.buffers.length === this.reconPack.attachments) {
       // done with buffer list
       var packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
       this.finishedReconstruction();
       return packet;
     }

     return null;
   }
   /**
    * Cleans up binary packet reconstruction variables.
    */

 }, {
   key: "finishedReconstruction",
   value: function finishedReconstruction() {
     this.reconPack = null;
     this.buffers = [];
   }
 }]);

 return BinaryReconstructor;
}();

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/is-binary.js":
/*!*********************************************************!*\
 !*** ./node_modules/socket.io-parser/dist/is-binary.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
 value: true
});
exports.hasBinary = exports.isBinary = void 0;
var withNativeArrayBuffer = typeof ArrayBuffer === "function";

var isView = function isView(obj) {
 return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
* Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
*
* @private
*/

function isBinary(obj) {
 return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}

exports.isBinary = isBinary;

function hasBinary(obj, toJSON) {
 if (!obj || _typeof(obj) !== "object") {
   return false;
 }

 if (Array.isArray(obj)) {
   for (var i = 0, l = obj.length; i < l; i++) {
     if (hasBinary(obj[i])) {
       return true;
     }
   }

   return false;
 }

 if (isBinary(obj)) {
   return true;
 }

 if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
   return hasBinary(obj.toJSON(), true);
 }

 for (var key in obj) {
   if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
     return true;
   }
 }

 return false;
}

exports.hasBinary = hasBinary;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
 !*** ./node_modules/yeast/index.js ***!
 \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
   length = 64,
   map = {},
   seed = 0,
   i = 0,
   prev;
/**
* Return a string representing the specified number.
*
* @param {Number} num The number to convert.
* @returns {String} The string representation of the number.
* @api public
*/

function encode(num) {
 var encoded = '';

 do {
   encoded = alphabet[num % length] + encoded;
   num = Math.floor(num / length);
 } while (num > 0);

 return encoded;
}
/**
* Return the integer value specified by the given string.
*
* @param {String} str The string to convert.
* @returns {Number} The integer value represented by the string.
* @api public
*/


function decode(str) {
 var decoded = 0;

 for (i = 0; i < str.length; i++) {
   decoded = decoded * length + map[str.charAt(i)];
 }

 return decoded;
}
/**
* Yeast: A tiny growing id generator.
*
* @returns {String} A unique id.
* @api public
*/


function yeast() {
 var now = encode(+new Date());
 if (now !== prev) return seed = 0, prev = now;
 return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) {
 map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ })

/******/ });
});
//# sourceMappingURL=socket.io.js.mapnager=n(12),e.Socket=n(36)},function(t,e,n){"use strict";function r(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var r=n.host.indexOf(":")!==-1,s=r?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:p(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var p=n.log||e.log||console.log.bind(console);p.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&&(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function p(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=p,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(6),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*p;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=p?Math.round(t/p)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,p,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f("encoded %j as %s",t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h("unknown packet type "+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=p(t.substr(n)),c=a!==!1&&(r.type===e.ERROR||y(a));if(!c)return h("invalid payload");r.data=a}return f("decoded %s as %j",t,r),r}function p(t){try{return JSON.parse(t)}catch(e){return!1}}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error: "+t}}var f=n(3)("socket.io-parser"),l=n(8),d=n(9),y=n(10),m=n(11);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+'"encode error"';r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if("string"==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new u(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!m(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(11),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){function n(t){return r&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=n;var r="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(13),s=n(36),a=n(8),c=n(7),p=n(38),u=n(39),h=n(3)("socket.io-client:manager"),f=n(35),l=n(40),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=p(n,"open",function(){r.onopen(),t&&t()}),s=p(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",u(this,"ondata"))),this.subs.push(p(t,"ping",u(this,"onping"))),this.subs.push(p(t,"pong",u(this,"onpong"))),this.subs.push(p(t,"error",u(this,"onerror"))),this.subs.push(p(t,"close",u(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(14),t.exports.parser=n(21)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=u(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=u(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(15),s=n(8),a=n(3)("engine.io-client:socket"),c=n(35),p=n(21),u=n(2),h=n(29);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(20),r.transports=n(15),r.parser=n(21),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",u),!u)return;r.priorWebsocketSuccess="websocket"===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=u.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error("probe error: "+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n())}function p(){u.removeListener("open",e),u.removeListener("error",o),u.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once("open",e),u.once("error",o),u.once("close",i),this.once("close",s),this.once("upgrading",c),u.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;
if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),n=t.hostname!==location.hostname||p!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=n(16),i=n(18),s=n(32),a=n(33);e.polling=r,e.websocket=a},function(t,e,n){var r=n(17);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(i){}try{if("undefined"!=typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(i){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(16),c=n(19),p=n(8),u=n(30),h=n(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=!0),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");n.supportsBinary&&"application/octet-stream"===t&&(e.responseType="arraybuffer")}catch(r){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError(e.status)},0))},h("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var f="onpagehide"in self?"pagehide":"unload";addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(20),i=n(29),s=n(21),a=n(30),c=n(31),p=n(3)("engine.io-client:polling");t.exports=r;var u=function(){var t=n(16),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){p("pre-pause polling complete"),--r||e()})),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",function(){p("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;p("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){p("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(p("transport open - closing"),t()):(p("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(21),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,u=n(22),h=n(23),f=n(24),l=n(25),d=n(26);"undefined"!=typeof ArrayBuffer&&(p=n(27));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:"error",data:"parser error"},k=n(28);e.encodePacket=function(t,e,n,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof n&&(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof k&&a instanceof k)return s(t,e,i);if(a&&a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&&(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,n){var r="b"+e.packets[t.type];if("undefined"!=typeof k&&t.data instanceof k){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),p=0;p<a.length;p++)c[p]=a[p];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(":"===u){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=""}else a+=u}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u="";for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e<n;e++)if(r(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var n="";return 0==(4294965248&t)?n=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),n=d(t>>12&15|224),n+=i(t,6)):0==(4292870144&t)&&(n=d(t>>18&7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,p="";++c<a;)r=i[c],p+=s(r,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&h[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,n,r,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&h[l],l++,0==(128&e))return e;if(192==(224&e)){if(n=c(),s=(31&e)<<6|n,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=c(),r=c(),s=(15&e)<<12|n<<6|r,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=c(),r=c(),i=c(),s=(7&e)<<18|n<<12|r<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function u(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var h,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:u}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+"."+n(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var s=n(19),a=n(30);t.exports=i;var c,p=/\n/g,u=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(u,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(20),a=n(21),c=n(29),p=n(30),u=n(31),h=n(3)("engine.io-client:websocket");if("undefined"==typeof self)try{i=n(34)}catch(f){}else o=self.WebSocket||self.MozWebSocket;var l=o||i;t.exports=r,p(r,s),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o<i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),n.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h("websocket closed before onclose event")}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(37),c=n(38),p=n(39),u=n(3)("socket.io-client:socket"),h=n(29),f=n(23);t.exports=e=r;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},d=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(l.hasOwnProperty(t))return d.apply(this,arguments),this;var e=a(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:f(e))?i.BINARY_EVENT:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===i.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?d.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u("sending ack %j",r),e.packet({type:f(r)?i.BINARY_ACK:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)d.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map