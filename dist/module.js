System.register(['app/plugins/sdk'], function (exports) {
  'use strict';
  var MetricsPanelCtrl;
  return {
    setters: [function (module) {
      MetricsPanelCtrl = module.MetricsPanelCtrl;
    }],
    execute: function () {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

          return arr2;
        }
      }

      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      /** Detect free variable `global` from Node.js. */
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

      /** Detect free variable `self`. */
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      var root = freeGlobal || freeSelf || Function('return this')();

      /** Built-in value references. */
      var Symbol$1 = root.Symbol;

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      /** Used for built-in method references. */
      var objectProto$1 = Object.prototype;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString$1 = objectProto$1.toString;

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString$1.call(value);
      }

      /** `Object#toString` result references. */
      var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';

      /** Built-in value references. */
      var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return (symToStringTag$1 && symToStringTag$1 in Object(value))
          ? getRawTag(value)
          : objectToString(value);
      }

      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      /** `Object#toString` result references. */
      var symbolTag = '[object Symbol]';

      /**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */
      function isSymbol(value) {
        return typeof value == 'symbol' ||
          (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }

      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var isArray = Array.isArray;

      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      /** Used as references for various `Number` constants. */
      var NAN = 0 / 0;

      /** Used to match leading and trailing whitespace. */
      var reTrim = /^\s+|\s+$/g;

      /** Used to detect bad signed hexadecimal string values. */
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

      /** Used to detect binary string values. */
      var reIsBinary = /^0b[01]+$/i;

      /** Used to detect octal string values. */
      var reIsOctal = /^0o[0-7]+$/i;

      /** Built-in method references without a dependency on `root`. */
      var freeParseInt = parseInt;

      /**
       * Converts `value` to a number.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to process.
       * @returns {number} Returns the number.
       * @example
       *
       * _.toNumber(3.2);
       * // => 3.2
       *
       * _.toNumber(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toNumber(Infinity);
       * // => Infinity
       *
       * _.toNumber('3.2');
       * // => 3.2
       */
      function toNumber(value) {
        if (typeof value == 'number') {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value))
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : (reIsBadHex.test(value) ? NAN : +value);
      }

      /** Used as references for various `Number` constants. */
      var INFINITY = 1 / 0,
          MAX_INTEGER = 1.7976931348623157e+308;

      /**
       * Converts `value` to a finite number.
       *
       * @static
       * @memberOf _
       * @since 4.12.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted number.
       * @example
       *
       * _.toFinite(3.2);
       * // => 3.2
       *
       * _.toFinite(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toFinite(Infinity);
       * // => 1.7976931348623157e+308
       *
       * _.toFinite('3.2');
       * // => 3.2
       */
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = (value < 0 ? -1 : 1);
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }

      /**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */
      function identity(value) {
        return value;
      }

      /** `Object#toString` result references. */
      var asyncTag = '[object AsyncFunction]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          proxyTag = '[object Proxy]';

      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }

      /** Used to detect overreaching core-js shims. */
      var coreJsData = root['__core-js_shared__'];

      /** Used to detect methods masquerading as native. */
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? ('Symbol(src)_1.' + uid) : '';
      }());

      /**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */
      function isMasked(func) {
        return !!maskSrcKey && (maskSrcKey in func);
      }

      /** Used for built-in method references. */
      var funcProto = Function.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return (func + '');
          } catch (e) {}
        }
        return '';
      }

      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

      /** Used to detect host constructors (Safari). */
      var reIsHostCtor = /^\[object .+?Constructor\]$/;

      /** Used for built-in method references. */
      var funcProto$1 = Function.prototype,
          objectProto$2 = Object.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString$1 = funcProto$1.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

      /** Used to detect if a method is native. */
      var reIsNative = RegExp('^' +
        funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
      );

      /**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }

      /**
       * Gets the value at `key` of `object`.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }

      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }

      /**
       * A faster alternative to `Function#apply`, this function invokes `func`
       * with the `this` binding of `thisArg` and the arguments of `args`.
       *
       * @private
       * @param {Function} func The function to invoke.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} args The arguments to invoke `func` with.
       * @returns {*} Returns the result of `func`.
       */
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0: return func.call(thisArg);
          case 1: return func.call(thisArg, args[0]);
          case 2: return func.call(thisArg, args[0], args[1]);
          case 3: return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }

      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      var HOT_COUNT = 800,
          HOT_SPAN = 16;

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeNow = Date.now;

      /**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */
      function shortOut(func) {
        var count = 0,
            lastCalled = 0;

        return function() {
          var stamp = nativeNow(),
              remaining = HOT_SPAN - (stamp - lastCalled);

          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }

      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */
      function constant(value) {
        return function() {
          return value;
        };
      }

      var defineProperty = (function() {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      }());

      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, 'toString', {
          'configurable': true,
          'enumerable': false,
          'value': constant(string),
          'writable': true
        });
      };

      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var setToString = shortOut(baseSetToString);

      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;

      /** Used to detect unsigned integer values. */
      var reIsUint = /^(?:0|[1-9]\d*)$/;

      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;

        return !!length &&
          (type == 'number' ||
            (type != 'symbol' && reIsUint.test(value))) &&
              (value > -1 && value % 1 == 0 && value < length);
      }

      /**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMax = Math.max;

      /**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
        return function() {
          var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);

          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }

      /**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
      }

      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER$1 = 9007199254740991;

      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */
      function isLength(value) {
        return typeof value == 'number' &&
          value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
      }

      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      /**
       * Checks if the given arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
       *  else `false`.
       */
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == 'number'
              ? (isArrayLike(object) && isIndex(index, object.length))
              : (type == 'string' && index in object)
            ) {
          return eq(object[index], value);
        }
        return false;
      }

      /** Used for built-in method references. */
      var objectProto$3 = Object.prototype;

      /**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */
      function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

        return value === proto;
      }

      /**
       * The base implementation of `_.times` without support for iteratee shorthands
       * or max array length checks.
       *
       * @private
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       */
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }

      /** `Object#toString` result references. */
      var argsTag = '[object Arguments]';

      /**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      /** Used for built-in method references. */
      var objectProto$4 = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty$2 = objectProto$4.hasOwnProperty;

      /** Built-in value references. */
      var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

      /**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */
      var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
          !propertyIsEnumerable.call(value, 'callee');
      };

      /**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */
      function stubFalse() {
        return false;
      }

      /** Detect free variable `exports`. */
      var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

      /** Detect free variable `module`. */
      var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

      /** Detect the popular CommonJS extension `module.exports`. */
      var moduleExports = freeModule && freeModule.exports === freeExports;

      /** Built-in value references. */
      var Buffer = moduleExports ? root.Buffer : undefined;

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

      /**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */
      var isBuffer = nativeIsBuffer || stubFalse;

      /** `Object#toString` result references. */
      var argsTag$1 = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag$1 = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';

      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';

      /** Used to identify `toStringTag` values of typed arrays. */
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
      typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
      typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
      typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
      typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
      typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
      typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
      typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
      typedArrayTags[mapTag] = typedArrayTags[numberTag] =
      typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
      typedArrayTags[setTag] = typedArrayTags[stringTag] =
      typedArrayTags[weakMapTag] = false;

      /**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */
      function baseIsTypedArray(value) {
        return isObjectLike(value) &&
          isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }

      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }

      /** Detect free variable `exports`. */
      var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

      /** Detect free variable `module`. */
      var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

      /** Detect the popular CommonJS extension `module.exports`. */
      var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

      /** Detect free variable `process` from Node.js. */
      var freeProcess = moduleExports$1 && freeGlobal.process;

      /** Used to access faster Node.js helpers. */
      var nodeUtil = (function() {
        try {
          // Use `util.types` for Node.js 10+.
          var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

          if (types) {
            return types;
          }

          // Legacy `process.binding('util')` for Node.js < 10.
          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }());

      /* Node.js helper references. */
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

      /** Used for built-in method references. */
      var objectProto$5 = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

      /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;

        for (var key in value) {
          if ((inherited || hasOwnProperty$3.call(value, key)) &&
              !(skipIndexes && (
                 // Safari 9 has enumerable `arguments.length` in strict mode.
                 key == 'length' ||
                 // Node.js 0.10 has enumerable non-index properties on buffers.
                 (isBuff && (key == 'offset' || key == 'parent')) ||
                 // PhantomJS 2 has enumerable non-index properties on typed arrays.
                 (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                 // Skip index properties.
                 isIndex(key, length)
              ))) {
            result.push(key);
          }
        }
        return result;
      }

      /**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }

      /** Used for built-in method references. */
      var objectProto$6 = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

      /**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object),
            result = [];

        for (var key in object) {
          if (!(key == 'constructor' && (isProto || !hasOwnProperty$4.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }

      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }

      /**
       * Gets the timestamp of the number of milliseconds that have elapsed since
       * the Unix epoch (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Date
       * @returns {number} Returns the timestamp.
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => Logs the number of milliseconds it took for the deferred invocation.
       */
      var now = function() {
        return root.Date.now();
      };

      /** Error message constants. */
      var FUNC_ERROR_TEXT = 'Expected a function';

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMax$1 = Math.max,
          nativeMin = Math.min;

      /**
       * Creates a debounced function that delays invoking `func` until after `wait`
       * milliseconds have elapsed since the last time the debounced function was
       * invoked. The debounced function comes with a `cancel` method to cancel
       * delayed `func` invocations and a `flush` method to immediately invoke them.
       * Provide `options` to indicate whether `func` should be invoked on the
       * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
       * with the last arguments provided to the debounced function. Subsequent
       * calls to the debounced function return the result of the last `func`
       * invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the debounced function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.debounce` and `_.throttle`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to debounce.
       * @param {number} [wait=0] The number of milliseconds to delay.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=false]
       *  Specify invoking on the leading edge of the timeout.
       * @param {number} [options.maxWait]
       *  The maximum time `func` is allowed to be delayed before it's invoked.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new debounced function.
       * @example
       *
       * // Avoid costly calculations while the window size is in flux.
       * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
       *
       * // Invoke `sendMail` when clicked, debouncing subsequent calls.
       * jQuery(element).on('click', _.debounce(sendMail, 300, {
       *   'leading': true,
       *   'trailing': false
       * }));
       *
       * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
       * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
       * var source = new EventSource('/stream');
       * jQuery(source).on('message', debounced);
       *
       * // Cancel the trailing debounced invocation.
       * jQuery(window).on('popstate', debounced.cancel);
       */
      function debounce(func, wait, options) {
        var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = false,
            maxing = false,
            trailing = true;

        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
          var args = lastArgs,
              thisArg = lastThis;

          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }

        function leadingEdge(time) {
          // Reset any `maxWait` timer.
          lastInvokeTime = time;
          // Start the timer for the trailing edge.
          timerId = setTimeout(timerExpired, wait);
          // Invoke the leading edge.
          return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime,
              timeWaiting = wait - timeSinceLastCall;

          return maxing
            ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
        }

        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime;

          // Either this is the first call, activity has stopped and we're at the
          // trailing edge, the system time has gone backwards and we're treating
          // it as the trailing edge, or we've hit the `maxWait` limit.
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }

        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          // Restart the timer.
          timerId = setTimeout(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
          timerId = undefined;

          // Only invoke if we have `lastArgs` which means `func` has been
          // debounced at least once.
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }

        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }

        function flush() {
          return timerId === undefined ? result : trailingEdge(now());
        }

        function debounced() {
          var time = now(),
              isInvoking = shouldInvoke(time);

          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;

          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              // Handle invocations in a tight loop.
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }

      /** Used for built-in method references. */
      var objectProto$7 = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

      /**
       * Assigns own and inherited enumerable string keyed properties of source
       * objects to the destination object for all destination properties that
       * resolve to `undefined`. Source objects are applied from left to right.
       * Once a property is set, additional values of the same property are ignored.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.defaultsDeep
       * @example
       *
       * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */
      var defaults = baseRest(function(object, sources) {
        object = Object(object);

        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }

        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;

          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];

            if (value === undefined ||
                (eq(value, objectProto$7[key]) && !hasOwnProperty$5.call(object, key))) {
              object[key] = source[key];
            }
          }
        }

        return object;
      });

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeCeil = Math.ceil,
          nativeMax$2 = Math.max;

      /**
       * The base implementation of `_.range` and `_.rangeRight` which doesn't
       * coerce arguments.
       *
       * @private
       * @param {number} start The start of the range.
       * @param {number} end The end of the range.
       * @param {number} step The value to increment or decrement by.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Array} Returns the range of numbers.
       */
      function baseRange(start, end, step, fromRight) {
        var index = -1,
            length = nativeMax$2(nativeCeil((end - start) / (step || 1)), 0),
            result = Array(length);

        while (length--) {
          result[fromRight ? length : ++index] = start;
          start += step;
        }
        return result;
      }

      /**
       * Creates a `_.range` or `_.rangeRight` function.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new range function.
       */
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
            end = step = undefined;
          }
          // Ensure the sign of `-0` is preserved.
          start = toFinite(start);
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }

      /**
       * Creates an array of numbers (positive and/or negative) progressing from
       * `start` up to, but not including, `end`. A step of `-1` is used if a negative
       * `start` is specified without an `end` or `step`. If `end` is not specified,
       * it's set to `start` with `start` then set to `0`.
       *
       * **Note:** JavaScript follows the IEEE-754 standard for resolving
       * floating-point values which can produce unexpected results.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @param {number} [step=1] The value to increment or decrement by.
       * @returns {Array} Returns the range of numbers.
       * @see _.inRange, _.rangeRight
       * @example
       *
       * _.range(4);
       * // => [0, 1, 2, 3]
       *
       * _.range(-4);
       * // => [0, -1, -2, -3]
       *
       * _.range(1, 5);
       * // => [1, 2, 3, 4]
       *
       * _.range(0, 20, 5);
       * // => [0, 5, 10, 15]
       *
       * _.range(0, -4, -1);
       * // => [0, -1, -2, -3]
       *
       * _.range(1, 4, 0);
       * // => [1, 1, 1]
       *
       * _.range(0);
       * // => []
       */
      var range = createRange();

      function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }

      function bisector(compare) {
        if (compare.length === 1) compare = ascendingComparator(compare);
        return {
          left: function(a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0) lo = mid + 1;
              else hi = mid;
            }
            return lo;
          },
          right: function(a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0) hi = mid;
              else lo = mid + 1;
            }
            return lo;
          }
        };
      }

      function ascendingComparator(f) {
        return function(d, x) {
          return ascending(f(d), x);
        };
      }

      var ascendingBisect = bisector(ascending);
      var bisectRight = ascendingBisect.right;

      function sequence(start, stop, step) {
        start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

        var i = -1,
            n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
            range = new Array(n);

        while (++i < n) {
          range[i] = start + i * step;
        }

        return range;
      }

      var e10 = Math.sqrt(50),
          e5 = Math.sqrt(10),
          e2 = Math.sqrt(2);

      function ticks(start, stop, count) {
        var reverse,
            i = -1,
            n,
            ticks,
            step;

        stop = +stop, start = +start, count = +count;
        if (start === stop && count > 0) return [start];
        if (reverse = stop < start) n = start, start = stop, stop = n;
        if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

        if (step > 0) {
          start = Math.ceil(start / step);
          stop = Math.floor(stop / step);
          ticks = new Array(n = Math.ceil(stop - start + 1));
          while (++i < n) ticks[i] = (start + i) * step;
        } else {
          start = Math.floor(start * step);
          stop = Math.ceil(stop * step);
          ticks = new Array(n = Math.ceil(start - stop + 1));
          while (++i < n) ticks[i] = (start - i) / step;
        }

        if (reverse) ticks.reverse();

        return ticks;
      }

      function tickIncrement(start, stop, count) {
        var step = (stop - start) / Math.max(0, count),
            power = Math.floor(Math.log(step) / Math.LN10),
            error = step / Math.pow(10, power);
        return power >= 0
            ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
            : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
      }

      function tickStep(start, stop, count) {
        var step0 = Math.abs(stop - start) / Math.max(0, count),
            step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
            error = step0 / step1;
        if (error >= e10) step1 *= 10;
        else if (error >= e5) step1 *= 5;
        else if (error >= e2) step1 *= 2;
        return stop < start ? -step1 : step1;
      }

      function max(values, valueof) {
        var n = values.length,
            i = -1,
            value,
            max;

        if (valueof == null) {
          while (++i < n) { // Find the first comparable value.
            if ((value = values[i]) != null && value >= value) {
              max = value;
              while (++i < n) { // Compare the remaining values.
                if ((value = values[i]) != null && value > max) {
                  max = value;
                }
              }
            }
          }
        }

        else {
          while (++i < n) { // Find the first comparable value.
            if ((value = valueof(values[i], i, values)) != null && value >= value) {
              max = value;
              while (++i < n) { // Compare the remaining values.
                if ((value = valueof(values[i], i, values)) != null && value > max) {
                  max = value;
                }
              }
            }
          }
        }

        return max;
      }

      var slice = Array.prototype.slice;

      function identity$1(x) {
        return x;
      }

      var top = 1,
          right = 2,
          bottom = 3,
          left = 4,
          epsilon = 1e-6;

      function translateX(x) {
        return "translate(" + (x + 0.5) + ",0)";
      }

      function translateY(y) {
        return "translate(0," + (y + 0.5) + ")";
      }

      function number(scale) {
        return function(d) {
          return +scale(d);
        };
      }

      function center(scale) {
        var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
        if (scale.round()) offset = Math.round(offset);
        return function(d) {
          return +scale(d) + offset;
        };
      }

      function entering() {
        return !this.__axis;
      }

      function axis(orient, scale) {
        var tickArguments = [],
            tickValues = null,
            tickFormat = null,
            tickSizeInner = 6,
            tickSizeOuter = 6,
            tickPadding = 3,
            k = orient === top || orient === left ? -1 : 1,
            x = orient === left || orient === right ? "x" : "y",
            transform = orient === top || orient === bottom ? translateX : translateY;

        function axis(context) {
          var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
              format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1) : tickFormat,
              spacing = Math.max(tickSizeInner, 0) + tickPadding,
              range = scale.range(),
              range0 = +range[0] + 0.5,
              range1 = +range[range.length - 1] + 0.5,
              position = (scale.bandwidth ? center : number)(scale.copy()),
              selection = context.selection ? context.selection() : context,
              path = selection.selectAll(".domain").data([null]),
              tick = selection.selectAll(".tick").data(values, scale).order(),
              tickExit = tick.exit(),
              tickEnter = tick.enter().append("g").attr("class", "tick"),
              line = tick.select("line"),
              text = tick.select("text");

          path = path.merge(path.enter().insert("path", ".tick")
              .attr("class", "domain")
              .attr("stroke", "currentColor"));

          tick = tick.merge(tickEnter);

          line = line.merge(tickEnter.append("line")
              .attr("stroke", "currentColor")
              .attr(x + "2", k * tickSizeInner));

          text = text.merge(tickEnter.append("text")
              .attr("fill", "currentColor")
              .attr(x, k * spacing)
              .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

          if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);

            tickExit = tickExit.transition(context)
                .attr("opacity", epsilon)
                .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

            tickEnter
                .attr("opacity", epsilon)
                .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
          }

          tickExit.remove();

          path
              .attr("d", orient === left || orient == right
                  ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
                  : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

          tick
              .attr("opacity", 1)
              .attr("transform", function(d) { return transform(position(d)); });

          line
              .attr(x + "2", k * tickSizeInner);

          text
              .attr(x, k * spacing)
              .text(format);

          selection.filter(entering)
              .attr("fill", "none")
              .attr("font-size", 10)
              .attr("font-family", "sans-serif")
              .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

          selection
              .each(function() { this.__axis = position; });
        }

        axis.scale = function(_) {
          return arguments.length ? (scale = _, axis) : scale;
        };

        axis.ticks = function() {
          return tickArguments = slice.call(arguments), axis;
        };

        axis.tickArguments = function(_) {
          return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
        };

        axis.tickValues = function(_) {
          return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
        };

        axis.tickFormat = function(_) {
          return arguments.length ? (tickFormat = _, axis) : tickFormat;
        };

        axis.tickSize = function(_) {
          return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
        };

        axis.tickSizeInner = function(_) {
          return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
        };

        axis.tickSizeOuter = function(_) {
          return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
        };

        axis.tickPadding = function(_) {
          return arguments.length ? (tickPadding = +_, axis) : tickPadding;
        };

        return axis;
      }

      function axisLeft(scale) {
        return axis(left, scale);
      }

      var noop = {value: function() {}};

      function dispatch() {
        for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
          if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
          _[t] = [];
        }
        return new Dispatch(_);
      }

      function Dispatch(_) {
        this._ = _;
      }

      function parseTypenames(typenames, types) {
        return typenames.trim().split(/^|\s+/).map(function(t) {
          var name = "", i = t.indexOf(".");
          if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
          if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          return {type: t, name: name};
        });
      }

      Dispatch.prototype = dispatch.prototype = {
        constructor: Dispatch,
        on: function(typename, callback) {
          var _ = this._,
              T = parseTypenames(typename + "", _),
              t,
              i = -1,
              n = T.length;

          // If no callback was specified, return the callback of the given type and name.
          if (arguments.length < 2) {
            while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
          }

          // If a type was specified, set the callback for the given type and name.
          // Otherwise, if a null callback was specified, remove callbacks of the given name.
          if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
          while (++i < n) {
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
          }

          return this;
        },
        copy: function() {
          var copy = {}, _ = this._;
          for (var t in _) copy[t] = _[t].slice();
          return new Dispatch(copy);
        },
        call: function(type, that) {
          if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
          for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        },
        apply: function(type, that, args) {
          if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
          for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        }
      };

      function get(type, name) {
        for (var i = 0, n = type.length, c; i < n; ++i) {
          if ((c = type[i]).name === name) {
            return c.value;
          }
        }
      }

      function set(type, name, callback) {
        for (var i = 0, n = type.length; i < n; ++i) {
          if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
          }
        }
        if (callback != null) type.push({name: name, value: callback});
        return type;
      }

      var xhtml = "http://www.w3.org/1999/xhtml";

      var namespaces = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: xhtml,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };

      function namespace(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
      }

      function creatorInherit(name) {
        return function() {
          var document = this.ownerDocument,
              uri = this.namespaceURI;
          return uri === xhtml && document.documentElement.namespaceURI === xhtml
              ? document.createElement(name)
              : document.createElementNS(uri, name);
        };
      }

      function creatorFixed(fullname) {
        return function() {
          return this.ownerDocument.createElementNS(fullname.space, fullname.local);
        };
      }

      function creator(name) {
        var fullname = namespace(name);
        return (fullname.local
            ? creatorFixed
            : creatorInherit)(fullname);
      }

      function none() {}

      function selector(selector) {
        return selector == null ? none : function() {
          return this.querySelector(selector);
        };
      }

      function selection_select(select) {
        if (typeof select !== "function") select = selector(select);

        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
              if ("__data__" in node) subnode.__data__ = node.__data__;
              subgroup[i] = subnode;
            }
          }
        }

        return new Selection(subgroups, this._parents);
      }

      function empty() {
        return [];
      }

      function selectorAll(selector) {
        return selector == null ? empty : function() {
          return this.querySelectorAll(selector);
        };
      }

      function selection_selectAll(select) {
        if (typeof select !== "function") select = selectorAll(select);

        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              subgroups.push(select.call(node, node.__data__, i, group));
              parents.push(node);
            }
          }
        }

        return new Selection(subgroups, parents);
      }

      function matcher(selector) {
        return function() {
          return this.matches(selector);
        };
      }

      function selection_filter(match) {
        if (typeof match !== "function") match = matcher(match);

        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
              subgroup.push(node);
            }
          }
        }

        return new Selection(subgroups, this._parents);
      }

      function sparse(update) {
        return new Array(update.length);
      }

      function selection_enter() {
        return new Selection(this._enter || this._groups.map(sparse), this._parents);
      }

      function EnterNode(parent, datum) {
        this.ownerDocument = parent.ownerDocument;
        this.namespaceURI = parent.namespaceURI;
        this._next = null;
        this._parent = parent;
        this.__data__ = datum;
      }

      EnterNode.prototype = {
        constructor: EnterNode,
        appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
        insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
        querySelector: function(selector) { return this._parent.querySelector(selector); },
        querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
      };

      function constant$1(x) {
        return function() {
          return x;
        };
      }

      var keyPrefix = "$"; // Protect against keys like “__proto__”.

      function bindIndex(parent, group, enter, update, exit, data) {
        var i = 0,
            node,
            groupLength = group.length,
            dataLength = data.length;

        // Put any non-null nodes that fit into update.
        // Put any null nodes into enter.
        // Put any remaining data into enter.
        for (; i < dataLength; ++i) {
          if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
          } else {
            enter[i] = new EnterNode(parent, data[i]);
          }
        }

        // Put any non-null nodes that don’t fit into exit.
        for (; i < groupLength; ++i) {
          if (node = group[i]) {
            exit[i] = node;
          }
        }
      }

      function bindKey(parent, group, enter, update, exit, data, key) {
        var i,
            node,
            nodeByKeyValue = {},
            groupLength = group.length,
            dataLength = data.length,
            keyValues = new Array(groupLength),
            keyValue;

        // Compute the key for each node.
        // If multiple nodes have the same key, the duplicates are added to exit.
        for (i = 0; i < groupLength; ++i) {
          if (node = group[i]) {
            keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
            if (keyValue in nodeByKeyValue) {
              exit[i] = node;
            } else {
              nodeByKeyValue[keyValue] = node;
            }
          }
        }

        // Compute the key for each datum.
        // If there a node associated with this key, join and add it to update.
        // If there is not (or the key is a duplicate), add it to enter.
        for (i = 0; i < dataLength; ++i) {
          keyValue = keyPrefix + key.call(parent, data[i], i, data);
          if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
          } else {
            enter[i] = new EnterNode(parent, data[i]);
          }
        }

        // Add any remaining nodes that were not bound to data to exit.
        for (i = 0; i < groupLength; ++i) {
          if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
            exit[i] = node;
          }
        }
      }

      function selection_data(value, key) {
        if (!value) {
          data = new Array(this.size()), j = -1;
          this.each(function(d) { data[++j] = d; });
          return data;
        }

        var bind = key ? bindKey : bindIndex,
            parents = this._parents,
            groups = this._groups;

        if (typeof value !== "function") value = constant$1(value);

        for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
          var parent = parents[j],
              group = groups[j],
              groupLength = group.length,
              data = value.call(parent, parent && parent.__data__, j, parents),
              dataLength = data.length,
              enterGroup = enter[j] = new Array(dataLength),
              updateGroup = update[j] = new Array(dataLength),
              exitGroup = exit[j] = new Array(groupLength);

          bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

          // Now connect the enter nodes to their following update node, such that
          // appendChild can insert the materialized enter node before this node,
          // rather than at the end of the parent node.
          for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
            if (previous = enterGroup[i0]) {
              if (i0 >= i1) i1 = i0 + 1;
              while (!(next = updateGroup[i1]) && ++i1 < dataLength);
              previous._next = next || null;
            }
          }
        }

        update = new Selection(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
      }

      function selection_exit() {
        return new Selection(this._exit || this._groups.map(sparse), this._parents);
      }

      function selection_join(onenter, onupdate, onexit) {
        var enter = this.enter(), update = this, exit = this.exit();
        enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
        if (onupdate != null) update = onupdate(update);
        if (onexit == null) exit.remove(); else onexit(exit);
        return enter && update ? enter.merge(update).order() : update;
      }

      function selection_merge(selection) {

        for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
          for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
              merge[i] = node;
            }
          }
        }

        for (; j < m0; ++j) {
          merges[j] = groups0[j];
        }

        return new Selection(merges, this._parents);
      }

      function selection_order() {

        for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
          for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
            if (node = group[i]) {
              if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
              next = node;
            }
          }
        }

        return this;
      }

      function selection_sort(compare) {
        if (!compare) compare = ascending$1;

        function compareNode(a, b) {
          return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }

        for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              sortgroup[i] = node;
            }
          }
          sortgroup.sort(compareNode);
        }

        return new Selection(sortgroups, this._parents).order();
      }

      function ascending$1(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }

      function selection_call() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
      }

      function selection_nodes() {
        var nodes = new Array(this.size()), i = -1;
        this.each(function() { nodes[++i] = this; });
        return nodes;
      }

      function selection_node() {

        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
          for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
            var node = group[i];
            if (node) return node;
          }
        }

        return null;
      }

      function selection_size() {
        var size = 0;
        this.each(function() { ++size; });
        return size;
      }

      function selection_empty() {
        return !this.node();
      }

      function selection_each(callback) {

        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
          for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i]) callback.call(node, node.__data__, i, group);
          }
        }

        return this;
      }

      function attrRemove(name) {
        return function() {
          this.removeAttribute(name);
        };
      }

      function attrRemoveNS(fullname) {
        return function() {
          this.removeAttributeNS(fullname.space, fullname.local);
        };
      }

      function attrConstant(name, value) {
        return function() {
          this.setAttribute(name, value);
        };
      }

      function attrConstantNS(fullname, value) {
        return function() {
          this.setAttributeNS(fullname.space, fullname.local, value);
        };
      }

      function attrFunction(name, value) {
        return function() {
          var v = value.apply(this, arguments);
          if (v == null) this.removeAttribute(name);
          else this.setAttribute(name, v);
        };
      }

      function attrFunctionNS(fullname, value) {
        return function() {
          var v = value.apply(this, arguments);
          if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
          else this.setAttributeNS(fullname.space, fullname.local, v);
        };
      }

      function selection_attr(name, value) {
        var fullname = namespace(name);

        if (arguments.length < 2) {
          var node = this.node();
          return fullname.local
              ? node.getAttributeNS(fullname.space, fullname.local)
              : node.getAttribute(fullname);
        }

        return this.each((value == null
            ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
            ? (fullname.local ? attrFunctionNS : attrFunction)
            : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
      }

      function defaultView(node) {
        return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
            || (node.document && node) // node is a Window
            || node.defaultView; // node is a Document
      }

      function styleRemove(name) {
        return function() {
          this.style.removeProperty(name);
        };
      }

      function styleConstant(name, value, priority) {
        return function() {
          this.style.setProperty(name, value, priority);
        };
      }

      function styleFunction(name, value, priority) {
        return function() {
          var v = value.apply(this, arguments);
          if (v == null) this.style.removeProperty(name);
          else this.style.setProperty(name, v, priority);
        };
      }

      function selection_style(name, value, priority) {
        return arguments.length > 1
            ? this.each((value == null
                  ? styleRemove : typeof value === "function"
                  ? styleFunction
                  : styleConstant)(name, value, priority == null ? "" : priority))
            : styleValue(this.node(), name);
      }

      function styleValue(node, name) {
        return node.style.getPropertyValue(name)
            || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
      }

      function propertyRemove(name) {
        return function() {
          delete this[name];
        };
      }

      function propertyConstant(name, value) {
        return function() {
          this[name] = value;
        };
      }

      function propertyFunction(name, value) {
        return function() {
          var v = value.apply(this, arguments);
          if (v == null) delete this[name];
          else this[name] = v;
        };
      }

      function selection_property(name, value) {
        return arguments.length > 1
            ? this.each((value == null
                ? propertyRemove : typeof value === "function"
                ? propertyFunction
                : propertyConstant)(name, value))
            : this.node()[name];
      }

      function classArray(string) {
        return string.trim().split(/^|\s+/);
      }

      function classList(node) {
        return node.classList || new ClassList(node);
      }

      function ClassList(node) {
        this._node = node;
        this._names = classArray(node.getAttribute("class") || "");
      }

      ClassList.prototype = {
        add: function(name) {
          var i = this._names.indexOf(name);
          if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        remove: function(name) {
          var i = this._names.indexOf(name);
          if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        contains: function(name) {
          return this._names.indexOf(name) >= 0;
        }
      };

      function classedAdd(node, names) {
        var list = classList(node), i = -1, n = names.length;
        while (++i < n) list.add(names[i]);
      }

      function classedRemove(node, names) {
        var list = classList(node), i = -1, n = names.length;
        while (++i < n) list.remove(names[i]);
      }

      function classedTrue(names) {
        return function() {
          classedAdd(this, names);
        };
      }

      function classedFalse(names) {
        return function() {
          classedRemove(this, names);
        };
      }

      function classedFunction(names, value) {
        return function() {
          (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
        };
      }

      function selection_classed(name, value) {
        var names = classArray(name + "");

        if (arguments.length < 2) {
          var list = classList(this.node()), i = -1, n = names.length;
          while (++i < n) if (!list.contains(names[i])) return false;
          return true;
        }

        return this.each((typeof value === "function"
            ? classedFunction : value
            ? classedTrue
            : classedFalse)(names, value));
      }

      function textRemove() {
        this.textContent = "";
      }

      function textConstant(value) {
        return function() {
          this.textContent = value;
        };
      }

      function textFunction(value) {
        return function() {
          var v = value.apply(this, arguments);
          this.textContent = v == null ? "" : v;
        };
      }

      function selection_text(value) {
        return arguments.length
            ? this.each(value == null
                ? textRemove : (typeof value === "function"
                ? textFunction
                : textConstant)(value))
            : this.node().textContent;
      }

      function htmlRemove() {
        this.innerHTML = "";
      }

      function htmlConstant(value) {
        return function() {
          this.innerHTML = value;
        };
      }

      function htmlFunction(value) {
        return function() {
          var v = value.apply(this, arguments);
          this.innerHTML = v == null ? "" : v;
        };
      }

      function selection_html(value) {
        return arguments.length
            ? this.each(value == null
                ? htmlRemove : (typeof value === "function"
                ? htmlFunction
                : htmlConstant)(value))
            : this.node().innerHTML;
      }

      function raise() {
        if (this.nextSibling) this.parentNode.appendChild(this);
      }

      function selection_raise() {
        return this.each(raise);
      }

      function lower() {
        if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }

      function selection_lower() {
        return this.each(lower);
      }

      function selection_append(name) {
        var create = typeof name === "function" ? name : creator(name);
        return this.select(function() {
          return this.appendChild(create.apply(this, arguments));
        });
      }

      function constantNull() {
        return null;
      }

      function selection_insert(name, before) {
        var create = typeof name === "function" ? name : creator(name),
            select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
        return this.select(function() {
          return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
      }

      function remove() {
        var parent = this.parentNode;
        if (parent) parent.removeChild(this);
      }

      function selection_remove() {
        return this.each(remove);
      }

      function selection_cloneShallow() {
        var clone = this.cloneNode(false), parent = this.parentNode;
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
      }

      function selection_cloneDeep() {
        var clone = this.cloneNode(true), parent = this.parentNode;
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
      }

      function selection_clone(deep) {
        return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
      }

      function selection_datum(value) {
        return arguments.length
            ? this.property("__data__", value)
            : this.node().__data__;
      }

      var filterEvents = {};

      if (typeof document !== "undefined") {
        var element = document.documentElement;
        if (!("onmouseenter" in element)) {
          filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
        }
      }

      function filterContextListener(listener, index, group) {
        listener = contextListener(listener, index, group);
        return function(event) {
          var related = event.relatedTarget;
          if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
            listener.call(this, event);
          }
        };
      }

      function contextListener(listener, index, group) {
        return function(event1) {
          try {
            listener.call(this, this.__data__, index, group);
          } finally {
          }
        };
      }

      function parseTypenames$1(typenames) {
        return typenames.trim().split(/^|\s+/).map(function(t) {
          var name = "", i = t.indexOf(".");
          if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
          return {type: t, name: name};
        });
      }

      function onRemove(typename) {
        return function() {
          var on = this.__on;
          if (!on) return;
          for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
              this.removeEventListener(o.type, o.listener, o.capture);
            } else {
              on[++i] = o;
            }
          }
          if (++i) on.length = i;
          else delete this.__on;
        };
      }

      function onAdd(typename, value, capture) {
        var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
        return function(d, i, group) {
          var on = this.__on, o, listener = wrap(value, i, group);
          if (on) for (var j = 0, m = on.length; j < m; ++j) {
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
              this.removeEventListener(o.type, o.listener, o.capture);
              this.addEventListener(o.type, o.listener = listener, o.capture = capture);
              o.value = value;
              return;
            }
          }
          this.addEventListener(typename.type, listener, capture);
          o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
          if (!on) this.__on = [o];
          else on.push(o);
        };
      }

      function selection_on(typename, value, capture) {
        var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

        if (arguments.length < 2) {
          var on = this.node().__on;
          if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
            for (i = 0, o = on[j]; i < n; ++i) {
              if ((t = typenames[i]).type === o.type && t.name === o.name) {
                return o.value;
              }
            }
          }
          return;
        }

        on = value ? onAdd : onRemove;
        if (capture == null) capture = false;
        for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
        return this;
      }

      function dispatchEvent(node, type, params) {
        var window = defaultView(node),
            event = window.CustomEvent;

        if (typeof event === "function") {
          event = new event(type, params);
        } else {
          event = window.document.createEvent("Event");
          if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
          else event.initEvent(type, false, false);
        }

        node.dispatchEvent(event);
      }

      function dispatchConstant(type, params) {
        return function() {
          return dispatchEvent(this, type, params);
        };
      }

      function dispatchFunction(type, params) {
        return function() {
          return dispatchEvent(this, type, params.apply(this, arguments));
        };
      }

      function selection_dispatch(type, params) {
        return this.each((typeof params === "function"
            ? dispatchFunction
            : dispatchConstant)(type, params));
      }

      var root$1 = [null];

      function Selection(groups, parents) {
        this._groups = groups;
        this._parents = parents;
      }

      function selection() {
        return new Selection([[document.documentElement]], root$1);
      }

      Selection.prototype = selection.prototype = {
        constructor: Selection,
        select: selection_select,
        selectAll: selection_selectAll,
        filter: selection_filter,
        data: selection_data,
        enter: selection_enter,
        exit: selection_exit,
        join: selection_join,
        merge: selection_merge,
        order: selection_order,
        sort: selection_sort,
        call: selection_call,
        nodes: selection_nodes,
        node: selection_node,
        size: selection_size,
        empty: selection_empty,
        each: selection_each,
        attr: selection_attr,
        style: selection_style,
        property: selection_property,
        classed: selection_classed,
        text: selection_text,
        html: selection_html,
        raise: selection_raise,
        lower: selection_lower,
        append: selection_append,
        insert: selection_insert,
        remove: selection_remove,
        clone: selection_clone,
        datum: selection_datum,
        on: selection_on,
        dispatch: selection_dispatch
      };

      function select(selector) {
        return typeof selector === "string"
            ? new Selection([[document.querySelector(selector)]], [document.documentElement])
            : new Selection([[selector]], root$1);
      }

      function define(constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
      }

      function extend(parent, definition) {
        var prototype = Object.create(parent.prototype);
        for (var key in definition) prototype[key] = definition[key];
        return prototype;
      }

      function Color() {}

      var darker = 0.7;
      var brighter = 1 / darker;

      var reI = "\\s*([+-]?\\d+)\\s*",
          reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          reHex = /^#([0-9a-f]{3,8})$/,
          reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
          reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
          reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
          reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
          reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
          reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

      var named = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 0x00ffff,
        aquamarine: 0x7fffd4,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0x000000,
        blanchedalmond: 0xffebcd,
        blue: 0x0000ff,
        blueviolet: 0x8a2be2,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 0x5f9ea0,
        chartreuse: 0x7fff00,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 0x6495ed,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 0x00ffff,
        darkblue: 0x00008b,
        darkcyan: 0x008b8b,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 0x006400,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 0x8b008b,
        darkolivegreen: 0x556b2f,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 0x8b0000,
        darksalmon: 0xe9967a,
        darkseagreen: 0x8fbc8f,
        darkslateblue: 0x483d8b,
        darkslategray: 0x2f4f4f,
        darkslategrey: 0x2f4f4f,
        darkturquoise: 0x00ced1,
        darkviolet: 0x9400d3,
        deeppink: 0xff1493,
        deepskyblue: 0x00bfff,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1e90ff,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 0x228b22,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 0x808080,
        green: 0x008000,
        greenyellow: 0xadff2f,
        grey: 0x808080,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 0x4b0082,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 0x7cfc00,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 0x90ee90,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 0x20b2aa,
        lightskyblue: 0x87cefa,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 0x800000,
        mediumaquamarine: 0x66cdaa,
        mediumblue: 0x0000cd,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        mediumseagreen: 0x3cb371,
        mediumslateblue: 0x7b68ee,
        mediumspringgreen: 0x00fa9a,
        mediumturquoise: 0x48d1cc,
        mediumvioletred: 0xc71585,
        midnightblue: 0x191970,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 0x000080,
        oldlace: 0xfdf5e6,
        olive: 0x808000,
        olivedrab: 0x6b8e23,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 0x4169e1,
        saddlebrown: 0x8b4513,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 0x2e8b57,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 0x87ceeb,
        slateblue: 0x6a5acd,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xfffafa,
        springgreen: 0x00ff7f,
        steelblue: 0x4682b4,
        tan: 0xd2b48c,
        teal: 0x008080,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 0x40e0d0,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32
      };

      define(Color, color, {
        copy: function(channels) {
          return Object.assign(new this.constructor, this, channels);
        },
        displayable: function() {
          return this.rgb().displayable();
        },
        hex: color_formatHex, // Deprecated! Use color.formatHex.
        formatHex: color_formatHex,
        formatHsl: color_formatHsl,
        formatRgb: color_formatRgb,
        toString: color_formatRgb
      });

      function color_formatHex() {
        return this.rgb().formatHex();
      }

      function color_formatHsl() {
        return hslConvert(this).formatHsl();
      }

      function color_formatRgb() {
        return this.rgb().formatRgb();
      }

      function color(format) {
        var m, l;
        format = (format + "").trim().toLowerCase();
        return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
            : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
            : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
            : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
            : null) // invalid hex
            : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
            : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
            : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
            : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
            : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
            : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
            : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
            : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
            : null;
      }

      function rgbn(n) {
        return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
      }

      function rgba(r, g, b, a) {
        if (a <= 0) r = g = b = NaN;
        return new Rgb(r, g, b, a);
      }

      function rgbConvert(o) {
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Rgb;
        o = o.rgb();
        return new Rgb(o.r, o.g, o.b, o.opacity);
      }

      function rgb(r, g, b, opacity) {
        return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
      }

      function Rgb(r, g, b, opacity) {
        this.r = +r;
        this.g = +g;
        this.b = +b;
        this.opacity = +opacity;
      }

      define(Rgb, rgb, extend(Color, {
        brighter: function(k) {
          k = k == null ? brighter : Math.pow(brighter, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        darker: function(k) {
          k = k == null ? darker : Math.pow(darker, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        rgb: function() {
          return this;
        },
        displayable: function() {
          return (-0.5 <= this.r && this.r < 255.5)
              && (-0.5 <= this.g && this.g < 255.5)
              && (-0.5 <= this.b && this.b < 255.5)
              && (0 <= this.opacity && this.opacity <= 1);
        },
        hex: rgb_formatHex, // Deprecated! Use color.formatHex.
        formatHex: rgb_formatHex,
        formatRgb: rgb_formatRgb,
        toString: rgb_formatRgb
      }));

      function rgb_formatHex() {
        return "#" + hex(this.r) + hex(this.g) + hex(this.b);
      }

      function rgb_formatRgb() {
        var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "rgb(" : "rgba(")
            + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
            + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
            + Math.max(0, Math.min(255, Math.round(this.b) || 0))
            + (a === 1 ? ")" : ", " + a + ")");
      }

      function hex(value) {
        value = Math.max(0, Math.min(255, Math.round(value) || 0));
        return (value < 16 ? "0" : "") + value.toString(16);
      }

      function hsla(h, s, l, a) {
        if (a <= 0) h = s = l = NaN;
        else if (l <= 0 || l >= 1) h = s = NaN;
        else if (s <= 0) h = NaN;
        return new Hsl(h, s, l, a);
      }

      function hslConvert(o) {
        if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Hsl;
        if (o instanceof Hsl) return o;
        o = o.rgb();
        var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            h = NaN,
            s = max - min,
            l = (max + min) / 2;
        if (s) {
          if (r === max) h = (g - b) / s + (g < b) * 6;
          else if (g === max) h = (b - r) / s + 2;
          else h = (r - g) / s + 4;
          s /= l < 0.5 ? max + min : 2 - max - min;
          h *= 60;
        } else {
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new Hsl(h, s, l, o.opacity);
      }

      function hsl(h, s, l, opacity) {
        return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
      }

      function Hsl(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
      }

      define(Hsl, hsl, extend(Color, {
        brighter: function(k) {
          k = k == null ? brighter : Math.pow(brighter, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function(k) {
          k = k == null ? darker : Math.pow(darker, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function() {
          var h = this.h % 360 + (this.h < 0) * 360,
              s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
              l = this.l,
              m2 = l + (l < 0.5 ? l : 1 - l) * s,
              m1 = 2 * l - m2;
          return new Rgb(
            hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
            hsl2rgb(h, m1, m2),
            hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
            this.opacity
          );
        },
        displayable: function() {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s))
              && (0 <= this.l && this.l <= 1)
              && (0 <= this.opacity && this.opacity <= 1);
        },
        formatHsl: function() {
          var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
          return (a === 1 ? "hsl(" : "hsla(")
              + (this.h || 0) + ", "
              + (this.s || 0) * 100 + "%, "
              + (this.l || 0) * 100 + "%"
              + (a === 1 ? ")" : ", " + a + ")");
        }
      }));

      /* From FvD 13.37, CSS Color Module Level 3 */
      function hsl2rgb(h, m1, m2) {
        return (h < 60 ? m1 + (m2 - m1) * h / 60
            : h < 180 ? m2
            : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
            : m1) * 255;
      }

      function constant$2(x) {
        return function() {
          return x;
        };
      }

      function linear(a, d) {
        return function(t) {
          return a + t * d;
        };
      }

      function exponential(a, b, y) {
        return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
          return Math.pow(a + t * b, y);
        };
      }

      function gamma(y) {
        return (y = +y) === 1 ? nogamma : function(a, b) {
          return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
        };
      }

      function nogamma(a, b) {
        var d = b - a;
        return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
      }

      var interpolateRgb = (function rgbGamma(y) {
        var color = gamma(y);

        function rgb$1(start, end) {
          var r = color((start = rgb(start)).r, (end = rgb(end)).r),
              g = color(start.g, end.g),
              b = color(start.b, end.b),
              opacity = nogamma(start.opacity, end.opacity);
          return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
          };
        }

        rgb$1.gamma = rgbGamma;

        return rgb$1;
      })(1);

      function numberArray(a, b) {
        if (!b) b = [];
        var n = a ? Math.min(b.length, a.length) : 0,
            c = b.slice(),
            i;
        return function(t) {
          for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
          return c;
        };
      }

      function isNumberArray(x) {
        return ArrayBuffer.isView(x) && !(x instanceof DataView);
      }

      function genericArray(a, b) {
        var nb = b ? b.length : 0,
            na = a ? Math.min(nb, a.length) : 0,
            x = new Array(na),
            c = new Array(nb),
            i;

        for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
        for (; i < nb; ++i) c[i] = b[i];

        return function(t) {
          for (i = 0; i < na; ++i) c[i] = x[i](t);
          return c;
        };
      }

      function date(a, b) {
        var d = new Date;
        return a = +a, b = +b, function(t) {
          return d.setTime(a * (1 - t) + b * t), d;
        };
      }

      function interpolateNumber(a, b) {
        return a = +a, b = +b, function(t) {
          return a * (1 - t) + b * t;
        };
      }

      function object(a, b) {
        var i = {},
            c = {},
            k;

        if (a === null || typeof a !== "object") a = {};
        if (b === null || typeof b !== "object") b = {};

        for (k in b) {
          if (k in a) {
            i[k] = interpolateValue(a[k], b[k]);
          } else {
            c[k] = b[k];
          }
        }

        return function(t) {
          for (k in i) c[k] = i[k](t);
          return c;
        };
      }

      var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          reB = new RegExp(reA.source, "g");

      function zero(b) {
        return function() {
          return b;
        };
      }

      function one(b) {
        return function(t) {
          return b(t) + "";
        };
      }

      function interpolateString(a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
            am, // current match in a
            bm, // current match in b
            bs, // string preceding current number in b, if any
            i = -1, // index in s
            s = [], // string constants and placeholders
            q = []; // number interpolators

        // Coerce inputs to strings.
        a = a + "", b = b + "";

        // Interpolate pairs of numbers in a & b.
        while ((am = reA.exec(a))
            && (bm = reB.exec(b))) {
          if ((bs = bm.index) > bi) { // a string precedes the next number in b
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
          } else { // interpolate non-matching numbers
            s[++i] = null;
            q.push({i: i, x: interpolateNumber(am, bm)});
          }
          bi = reB.lastIndex;
        }

        // Add remains of b.
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }

        // Special optimization for only a single match.
        // Otherwise, interpolate each of the numbers and rejoin the string.
        return s.length < 2 ? (q[0]
            ? one(q[0].x)
            : zero(b))
            : (b = q.length, function(t) {
                for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
                return s.join("");
              });
      }

      function interpolateValue(a, b) {
        var t = typeof b, c;
        return b == null || t === "boolean" ? constant$2(b)
            : (t === "number" ? interpolateNumber
            : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
            : b instanceof color ? interpolateRgb
            : b instanceof Date ? date
            : isNumberArray(b) ? numberArray
            : Array.isArray(b) ? genericArray
            : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
            : interpolateNumber)(a, b);
      }

      function interpolateRound(a, b) {
        return a = +a, b = +b, function(t) {
          return Math.round(a * (1 - t) + b * t);
        };
      }

      var degrees = 180 / Math.PI;

      var identity$2 = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      };

      function decompose(a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
        if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
        if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
        if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
        return {
          translateX: e,
          translateY: f,
          rotate: Math.atan2(b, a) * degrees,
          skewX: Math.atan(skewX) * degrees,
          scaleX: scaleX,
          scaleY: scaleY
        };
      }

      var cssNode,
          cssRoot,
          cssView,
          svgNode;

      function parseCss(value) {
        if (value === "none") return identity$2;
        if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
        cssNode.style.transform = value;
        value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
        cssRoot.removeChild(cssNode);
        value = value.slice(7, -1).split(",");
        return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
      }

      function parseSvg(value) {
        if (value == null) return identity$2;
        if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
        svgNode.setAttribute("transform", value);
        if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
        value = value.matrix;
        return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
      }

      function interpolateTransform(parse, pxComma, pxParen, degParen) {

        function pop(s) {
          return s.length ? s.pop() + " " : "";
        }

        function translate(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
          } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
          }
        }

        function rotate(a, b, s, q) {
          if (a !== b) {
            if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
            q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
          } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
          }
        }

        function skewX(a, b, s, q) {
          if (a !== b) {
            q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
          } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
          }
        }

        function scale(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
          } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
          }
        }

        return function(a, b) {
          var s = [], // string constants and placeholders
              q = []; // number interpolators
          a = parse(a), b = parse(b);
          translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
          rotate(a.rotate, b.rotate, s, q);
          skewX(a.skewX, b.skewX, s, q);
          scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
          a = b = null; // gc
          return function(t) {
            var i = -1, n = q.length, o;
            while (++i < n) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          };
        };
      }

      var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
      var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

      var frame = 0, // is an animation frame pending?
          timeout = 0, // is a timeout pending?
          interval = 0, // are any timers active?
          pokeDelay = 1000, // how frequently we check for clock skew
          taskHead,
          taskTail,
          clockLast = 0,
          clockNow = 0,
          clockSkew = 0,
          clock = typeof performance === "object" && performance.now ? performance : Date,
          setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

      function now$1() {
        return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
      }

      function clearNow() {
        clockNow = 0;
      }

      function Timer() {
        this._call =
        this._time =
        this._next = null;
      }

      Timer.prototype = timer.prototype = {
        constructor: Timer,
        restart: function(callback, delay, time) {
          if (typeof callback !== "function") throw new TypeError("callback is not a function");
          time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);
          if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
          }
          this._call = callback;
          this._time = time;
          sleep();
        },
        stop: function() {
          if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
          }
        }
      };

      function timer(callback, delay, time) {
        var t = new Timer;
        t.restart(callback, delay, time);
        return t;
      }

      function timerFlush() {
        now$1(); // Get the current time, if not already set.
        ++frame; // Pretend we’ve set an alarm, if we haven’t already.
        var t = taskHead, e;
        while (t) {
          if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
          t = t._next;
        }
        --frame;
      }

      function wake() {
        clockNow = (clockLast = clock.now()) + clockSkew;
        frame = timeout = 0;
        try {
          timerFlush();
        } finally {
          frame = 0;
          nap();
          clockNow = 0;
        }
      }

      function poke() {
        var now = clock.now(), delay = now - clockLast;
        if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
      }

      function nap() {
        var t0, t1 = taskHead, t2, time = Infinity;
        while (t1) {
          if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
          } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
          }
        }
        taskTail = t0;
        sleep(time);
      }

      function sleep(time) {
        if (frame) return; // Soonest alarm already set, or will be.
        if (timeout) timeout = clearTimeout(timeout);
        var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
        if (delay > 24) {
          if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
          if (interval) interval = clearInterval(interval);
        } else {
          if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
          frame = 1, setFrame(wake);
        }
      }

      function timeout$1(callback, delay, time) {
        var t = new Timer;
        delay = delay == null ? 0 : +delay;
        t.restart(function(elapsed) {
          t.stop();
          callback(elapsed + delay);
        }, delay, time);
        return t;
      }

      var emptyOn = dispatch("start", "end", "cancel", "interrupt");
      var emptyTween = [];

      var CREATED = 0;
      var SCHEDULED = 1;
      var STARTING = 2;
      var STARTED = 3;
      var RUNNING = 4;
      var ENDING = 5;
      var ENDED = 6;

      function schedule(node, name, id, index, group, timing) {
        var schedules = node.__transition;
        if (!schedules) node.__transition = {};
        else if (id in schedules) return;
        create(node, id, {
          name: name,
          index: index, // For context during callback.
          group: group, // For context during callback.
          on: emptyOn,
          tween: emptyTween,
          time: timing.time,
          delay: timing.delay,
          duration: timing.duration,
          ease: timing.ease,
          timer: null,
          state: CREATED
        });
      }

      function init(node, id) {
        var schedule = get$1(node, id);
        if (schedule.state > CREATED) throw new Error("too late; already scheduled");
        return schedule;
      }

      function set$1(node, id) {
        var schedule = get$1(node, id);
        if (schedule.state > STARTED) throw new Error("too late; already running");
        return schedule;
      }

      function get$1(node, id) {
        var schedule = node.__transition;
        if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
        return schedule;
      }

      function create(node, id, self) {
        var schedules = node.__transition,
            tween;

        // Initialize the self timer when the transition is created.
        // Note the actual delay is not known until the first callback!
        schedules[id] = self;
        self.timer = timer(schedule, 0, self.time);

        function schedule(elapsed) {
          self.state = SCHEDULED;
          self.timer.restart(start, self.delay, self.time);

          // If the elapsed delay is less than our first sleep, start immediately.
          if (self.delay <= elapsed) start(elapsed - self.delay);
        }

        function start(elapsed) {
          var i, j, n, o;

          // If the state is not SCHEDULED, then we previously errored on start.
          if (self.state !== SCHEDULED) return stop();

          for (i in schedules) {
            o = schedules[i];
            if (o.name !== self.name) continue;

            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return timeout$1(start);

            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
              o.state = ENDED;
              o.timer.stop();
              o.on.call("interrupt", node, node.__data__, o.index, o.group);
              delete schedules[i];
            }

            // Cancel any pre-empted transitions.
            else if (+i < id) {
              o.state = ENDED;
              o.timer.stop();
              o.on.call("cancel", node, node.__data__, o.index, o.group);
              delete schedules[i];
            }
          }

          // Defer the first tick to end of the current frame; see d3/d3#1576.
          // Note the transition may be canceled after start and before the first tick!
          // Note this must be scheduled before the start event; see d3/d3-transition#16!
          // Assuming this is successful, subsequent callbacks go straight to tick.
          timeout$1(function() {
            if (self.state === STARTED) {
              self.state = RUNNING;
              self.timer.restart(tick, self.delay, self.time);
              tick(elapsed);
            }
          });

          // Dispatch the start event.
          // Note this must be done before the tween are initialized.
          self.state = STARTING;
          self.on.call("start", node, node.__data__, self.index, self.group);
          if (self.state !== STARTING) return; // interrupted
          self.state = STARTED;

          // Initialize the tween, deleting null tween.
          tween = new Array(n = self.tween.length);
          for (i = 0, j = -1; i < n; ++i) {
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
              tween[++j] = o;
            }
          }
          tween.length = j + 1;
        }

        function tick(elapsed) {
          var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
              i = -1,
              n = tween.length;

          while (++i < n) {
            tween[i].call(node, t);
          }

          // Dispatch the end event.
          if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
          }
        }

        function stop() {
          self.state = ENDED;
          self.timer.stop();
          delete schedules[id];
          for (var i in schedules) return; // eslint-disable-line no-unused-vars
          delete node.__transition;
        }
      }

      function interrupt(node, name) {
        var schedules = node.__transition,
            schedule,
            active,
            empty = true,
            i;

        if (!schedules) return;

        name = name == null ? null : name + "";

        for (i in schedules) {
          if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
          active = schedule.state > STARTING && schedule.state < ENDING;
          schedule.state = ENDED;
          schedule.timer.stop();
          schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
          delete schedules[i];
        }

        if (empty) delete node.__transition;
      }

      function selection_interrupt(name) {
        return this.each(function() {
          interrupt(this, name);
        });
      }

      function tweenRemove(id, name) {
        var tween0, tween1;
        return function() {
          var schedule = set$1(this, id),
              tween = schedule.tween;

          // If this node shared tween with the previous node,
          // just assign the updated shared tween and we’re done!
          // Otherwise, copy-on-write.
          if (tween !== tween0) {
            tween1 = tween0 = tween;
            for (var i = 0, n = tween1.length; i < n; ++i) {
              if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
              }
            }
          }

          schedule.tween = tween1;
        };
      }

      function tweenFunction(id, name, value) {
        var tween0, tween1;
        if (typeof value !== "function") throw new Error;
        return function() {
          var schedule = set$1(this, id),
              tween = schedule.tween;

          // If this node shared tween with the previous node,
          // just assign the updated shared tween and we’re done!
          // Otherwise, copy-on-write.
          if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
              if (tween1[i].name === name) {
                tween1[i] = t;
                break;
              }
            }
            if (i === n) tween1.push(t);
          }

          schedule.tween = tween1;
        };
      }

      function transition_tween(name, value) {
        var id = this._id;

        name += "";

        if (arguments.length < 2) {
          var tween = get$1(this.node(), id).tween;
          for (var i = 0, n = tween.length, t; i < n; ++i) {
            if ((t = tween[i]).name === name) {
              return t.value;
            }
          }
          return null;
        }

        return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
      }

      function tweenValue(transition, name, value) {
        var id = transition._id;

        transition.each(function() {
          var schedule = set$1(this, id);
          (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
        });

        return function(node) {
          return get$1(node, id).value[name];
        };
      }

      function interpolate(a, b) {
        var c;
        return (typeof b === "number" ? interpolateNumber
            : b instanceof color ? interpolateRgb
            : (c = color(b)) ? (b = c, interpolateRgb)
            : interpolateString)(a, b);
      }

      function attrRemove$1(name) {
        return function() {
          this.removeAttribute(name);
        };
      }

      function attrRemoveNS$1(fullname) {
        return function() {
          this.removeAttributeNS(fullname.space, fullname.local);
        };
      }

      function attrConstant$1(name, interpolate, value1) {
        var string00,
            string1 = value1 + "",
            interpolate0;
        return function() {
          var string0 = this.getAttribute(name);
          return string0 === string1 ? null
              : string0 === string00 ? interpolate0
              : interpolate0 = interpolate(string00 = string0, value1);
        };
      }

      function attrConstantNS$1(fullname, interpolate, value1) {
        var string00,
            string1 = value1 + "",
            interpolate0;
        return function() {
          var string0 = this.getAttributeNS(fullname.space, fullname.local);
          return string0 === string1 ? null
              : string0 === string00 ? interpolate0
              : interpolate0 = interpolate(string00 = string0, value1);
        };
      }

      function attrFunction$1(name, interpolate, value) {
        var string00,
            string10,
            interpolate0;
        return function() {
          var string0, value1 = value(this), string1;
          if (value1 == null) return void this.removeAttribute(name);
          string0 = this.getAttribute(name);
          string1 = value1 + "";
          return string0 === string1 ? null
              : string0 === string00 && string1 === string10 ? interpolate0
              : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
        };
      }

      function attrFunctionNS$1(fullname, interpolate, value) {
        var string00,
            string10,
            interpolate0;
        return function() {
          var string0, value1 = value(this), string1;
          if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
          string0 = this.getAttributeNS(fullname.space, fullname.local);
          string1 = value1 + "";
          return string0 === string1 ? null
              : string0 === string00 && string1 === string10 ? interpolate0
              : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
        };
      }

      function transition_attr(name, value) {
        var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
        return this.attrTween(name, typeof value === "function"
            ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
            : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
            : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
      }

      function attrInterpolate(name, i) {
        return function(t) {
          this.setAttribute(name, i.call(this, t));
        };
      }

      function attrInterpolateNS(fullname, i) {
        return function(t) {
          this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
        };
      }

      function attrTweenNS(fullname, value) {
        var t0, i0;
        function tween() {
          var i = value.apply(this, arguments);
          if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
          return t0;
        }
        tween._value = value;
        return tween;
      }

      function attrTween(name, value) {
        var t0, i0;
        function tween() {
          var i = value.apply(this, arguments);
          if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
          return t0;
        }
        tween._value = value;
        return tween;
      }

      function transition_attrTween(name, value) {
        var key = "attr." + name;
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        var fullname = namespace(name);
        return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
      }

      function delayFunction(id, value) {
        return function() {
          init(this, id).delay = +value.apply(this, arguments);
        };
      }

      function delayConstant(id, value) {
        return value = +value, function() {
          init(this, id).delay = value;
        };
      }

      function transition_delay(value) {
        var id = this._id;

        return arguments.length
            ? this.each((typeof value === "function"
                ? delayFunction
                : delayConstant)(id, value))
            : get$1(this.node(), id).delay;
      }

      function durationFunction(id, value) {
        return function() {
          set$1(this, id).duration = +value.apply(this, arguments);
        };
      }

      function durationConstant(id, value) {
        return value = +value, function() {
          set$1(this, id).duration = value;
        };
      }

      function transition_duration(value) {
        var id = this._id;

        return arguments.length
            ? this.each((typeof value === "function"
                ? durationFunction
                : durationConstant)(id, value))
            : get$1(this.node(), id).duration;
      }

      function easeConstant(id, value) {
        if (typeof value !== "function") throw new Error;
        return function() {
          set$1(this, id).ease = value;
        };
      }

      function transition_ease(value) {
        var id = this._id;

        return arguments.length
            ? this.each(easeConstant(id, value))
            : get$1(this.node(), id).ease;
      }

      function transition_filter(match) {
        if (typeof match !== "function") match = matcher(match);

        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
              subgroup.push(node);
            }
          }
        }

        return new Transition(subgroups, this._parents, this._name, this._id);
      }

      function transition_merge(transition) {
        if (transition._id !== this._id) throw new Error;

        for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
          for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
              merge[i] = node;
            }
          }
        }

        for (; j < m0; ++j) {
          merges[j] = groups0[j];
        }

        return new Transition(merges, this._parents, this._name, this._id);
      }

      function start(name) {
        return (name + "").trim().split(/^|\s+/).every(function(t) {
          var i = t.indexOf(".");
          if (i >= 0) t = t.slice(0, i);
          return !t || t === "start";
        });
      }

      function onFunction(id, name, listener) {
        var on0, on1, sit = start(name) ? init : set$1;
        return function() {
          var schedule = sit(this, id),
              on = schedule.on;

          // If this node shared a dispatch with the previous node,
          // just assign the updated shared dispatch and we’re done!
          // Otherwise, copy-on-write.
          if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

          schedule.on = on1;
        };
      }

      function transition_on(name, listener) {
        var id = this._id;

        return arguments.length < 2
            ? get$1(this.node(), id).on.on(name)
            : this.each(onFunction(id, name, listener));
      }

      function removeFunction(id) {
        return function() {
          var parent = this.parentNode;
          for (var i in this.__transition) if (+i !== id) return;
          if (parent) parent.removeChild(this);
        };
      }

      function transition_remove() {
        return this.on("end.remove", removeFunction(this._id));
      }

      function transition_select(select) {
        var name = this._name,
            id = this._id;

        if (typeof select !== "function") select = selector(select);

        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
              if ("__data__" in node) subnode.__data__ = node.__data__;
              subgroup[i] = subnode;
              schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
            }
          }
        }

        return new Transition(subgroups, this._parents, name, id);
      }

      function transition_selectAll(select) {
        var name = this._name,
            id = this._id;

        if (typeof select !== "function") select = selectorAll(select);

        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
                if (child = children[k]) {
                  schedule(child, name, id, k, children, inherit);
                }
              }
              subgroups.push(children);
              parents.push(node);
            }
          }
        }

        return new Transition(subgroups, parents, name, id);
      }

      var Selection$1 = selection.prototype.constructor;

      function transition_selection() {
        return new Selection$1(this._groups, this._parents);
      }

      function styleNull(name, interpolate) {
        var string00,
            string10,
            interpolate0;
        return function() {
          var string0 = styleValue(this, name),
              string1 = (this.style.removeProperty(name), styleValue(this, name));
          return string0 === string1 ? null
              : string0 === string00 && string1 === string10 ? interpolate0
              : interpolate0 = interpolate(string00 = string0, string10 = string1);
        };
      }

      function styleRemove$1(name) {
        return function() {
          this.style.removeProperty(name);
        };
      }

      function styleConstant$1(name, interpolate, value1) {
        var string00,
            string1 = value1 + "",
            interpolate0;
        return function() {
          var string0 = styleValue(this, name);
          return string0 === string1 ? null
              : string0 === string00 ? interpolate0
              : interpolate0 = interpolate(string00 = string0, value1);
        };
      }

      function styleFunction$1(name, interpolate, value) {
        var string00,
            string10,
            interpolate0;
        return function() {
          var string0 = styleValue(this, name),
              value1 = value(this),
              string1 = value1 + "";
          if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
          return string0 === string1 ? null
              : string0 === string00 && string1 === string10 ? interpolate0
              : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
        };
      }

      function styleMaybeRemove(id, name) {
        var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
        return function() {
          var schedule = set$1(this, id),
              on = schedule.on,
              listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

          // If this node shared a dispatch with the previous node,
          // just assign the updated shared dispatch and we’re done!
          // Otherwise, copy-on-write.
          if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

          schedule.on = on1;
        };
      }

      function transition_style(name, value, priority) {
        var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
        return value == null ? this
            .styleTween(name, styleNull(name, i))
            .on("end.style." + name, styleRemove$1(name))
          : typeof value === "function" ? this
            .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
            .each(styleMaybeRemove(this._id, name))
          : this
            .styleTween(name, styleConstant$1(name, i, value), priority)
            .on("end.style." + name, null);
      }

      function styleInterpolate(name, i, priority) {
        return function(t) {
          this.style.setProperty(name, i.call(this, t), priority);
        };
      }

      function styleTween(name, value, priority) {
        var t, i0;
        function tween() {
          var i = value.apply(this, arguments);
          if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
          return t;
        }
        tween._value = value;
        return tween;
      }

      function transition_styleTween(name, value, priority) {
        var key = "style." + (name += "");
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
      }

      function textConstant$1(value) {
        return function() {
          this.textContent = value;
        };
      }

      function textFunction$1(value) {
        return function() {
          var value1 = value(this);
          this.textContent = value1 == null ? "" : value1;
        };
      }

      function transition_text(value) {
        return this.tween("text", typeof value === "function"
            ? textFunction$1(tweenValue(this, "text", value))
            : textConstant$1(value == null ? "" : value + ""));
      }

      function textInterpolate(i) {
        return function(t) {
          this.textContent = i.call(this, t);
        };
      }

      function textTween(value) {
        var t0, i0;
        function tween() {
          var i = value.apply(this, arguments);
          if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
          return t0;
        }
        tween._value = value;
        return tween;
      }

      function transition_textTween(value) {
        var key = "text";
        if (arguments.length < 1) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, textTween(value));
      }

      function transition_transition() {
        var name = this._name,
            id0 = this._id,
            id1 = newId();

        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              var inherit = get$1(node, id0);
              schedule(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
              });
            }
          }
        }

        return new Transition(groups, this._parents, name, id1);
      }

      function transition_end() {
        var on0, on1, that = this, id = that._id, size = that.size();
        return new Promise(function(resolve, reject) {
          var cancel = {value: reject},
              end = {value: function() { if (--size === 0) resolve(); }};

          that.each(function() {
            var schedule = set$1(this, id),
                on = schedule.on;

            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
              on1 = (on0 = on).copy();
              on1._.cancel.push(cancel);
              on1._.interrupt.push(cancel);
              on1._.end.push(end);
            }

            schedule.on = on1;
          });
        });
      }

      var id = 0;

      function Transition(groups, parents, name, id) {
        this._groups = groups;
        this._parents = parents;
        this._name = name;
        this._id = id;
      }

      function transition(name) {
        return selection().transition(name);
      }

      function newId() {
        return ++id;
      }

      var selection_prototype = selection.prototype;

      Transition.prototype = transition.prototype = {
        constructor: Transition,
        select: transition_select,
        selectAll: transition_selectAll,
        filter: transition_filter,
        merge: transition_merge,
        selection: transition_selection,
        transition: transition_transition,
        call: selection_prototype.call,
        nodes: selection_prototype.nodes,
        node: selection_prototype.node,
        size: selection_prototype.size,
        empty: selection_prototype.empty,
        each: selection_prototype.each,
        on: transition_on,
        attr: transition_attr,
        attrTween: transition_attrTween,
        style: transition_style,
        styleTween: transition_styleTween,
        text: transition_text,
        textTween: transition_textTween,
        remove: transition_remove,
        tween: transition_tween,
        delay: transition_delay,
        duration: transition_duration,
        ease: transition_ease,
        end: transition_end
      };

      function cubicInOut(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }

      var defaultTiming = {
        time: null, // Set on use.
        delay: 0,
        duration: 250,
        ease: cubicInOut
      };

      function inherit(node, id) {
        var timing;
        while (!(timing = node.__transition) || !(timing = timing[id])) {
          if (!(node = node.parentNode)) {
            return defaultTiming.time = now$1(), defaultTiming;
          }
        }
        return timing;
      }

      function selection_transition(name) {
        var id,
            timing;

        if (name instanceof Transition) {
          id = name._id, name = name._name;
        } else {
          id = newId(), (timing = defaultTiming).time = now$1(), name = name == null ? null : name + "";
        }

        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
          for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
              schedule(node, name, id, i, group, timing || inherit(node, id));
            }
          }
        }

        return new Transition(groups, this._parents, name, id);
      }

      selection.prototype.interrupt = selection_interrupt;
      selection.prototype.transition = selection_transition;

      var pi = Math.PI,
          tau = 2 * pi,
          epsilon$1 = 1e-6,
          tauEpsilon = tau - epsilon$1;

      function Path() {
        this._x0 = this._y0 = // start of current subpath
        this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
      }

      function path() {
        return new Path;
      }

      Path.prototype = path.prototype = {
        constructor: Path,
        moveTo: function(x, y) {
          this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
        },
        closePath: function() {
          if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
          }
        },
        lineTo: function(x, y) {
          this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        quadraticCurveTo: function(x1, y1, x, y) {
          this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        bezierCurveTo: function(x1, y1, x2, y2, x, y) {
          this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
        },
        arcTo: function(x1, y1, x2, y2, r) {
          x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
          var x0 = this._x1,
              y0 = this._y1,
              x21 = x2 - x1,
              y21 = y2 - y1,
              x01 = x0 - x1,
              y01 = y0 - y1,
              l01_2 = x01 * x01 + y01 * y01;

          // Is the radius negative? Error.
          if (r < 0) throw new Error("negative radius: " + r);

          // Is this path empty? Move to (x1,y1).
          if (this._x1 === null) {
            this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
          }

          // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
          else if (!(l01_2 > epsilon$1));

          // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
          // Equivalently, is (x1,y1) coincident with (x2,y2)?
          // Or, is the radius zero? Line to (x1,y1).
          else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
            this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
          }

          // Otherwise, draw an arc!
          else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21;

            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon$1) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
        },
        arc: function(x, y, r, a0, a1, ccw) {
          x = +x, y = +y, r = +r, ccw = !!ccw;
          var dx = r * Math.cos(a0),
              dy = r * Math.sin(a0),
              x0 = x + dx,
              y0 = y + dy,
              cw = 1 ^ ccw,
              da = ccw ? a0 - a1 : a1 - a0;

          // Is the radius negative? Error.
          if (r < 0) throw new Error("negative radius: " + r);

          // Is this path empty? Move to (x0,y0).
          if (this._x1 === null) {
            this._ += "M" + x0 + "," + y0;
          }

          // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
          else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
            this._ += "L" + x0 + "," + y0;
          }

          // Is this arc empty? We’re done.
          if (!r) return;

          // Does the angle go the wrong way? Flip the direction.
          if (da < 0) da = da % tau + tau;

          // Is this a complete circle? Draw two arcs to complete the circle.
          if (da > tauEpsilon) {
            this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
          }

          // Is this arc non-empty? Draw an arc!
          else if (da > epsilon$1) {
            this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
          }
        },
        rect: function(x, y, w, h) {
          this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
        },
        toString: function() {
          return this._;
        }
      };

      var prefix = "$";

      function Map() {}

      Map.prototype = map.prototype = {
        constructor: Map,
        has: function(key) {
          return (prefix + key) in this;
        },
        get: function(key) {
          return this[prefix + key];
        },
        set: function(key, value) {
          this[prefix + key] = value;
          return this;
        },
        remove: function(key) {
          var property = prefix + key;
          return property in this && delete this[property];
        },
        clear: function() {
          for (var property in this) if (property[0] === prefix) delete this[property];
        },
        keys: function() {
          var keys = [];
          for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
          return keys;
        },
        values: function() {
          var values = [];
          for (var property in this) if (property[0] === prefix) values.push(this[property]);
          return values;
        },
        entries: function() {
          var entries = [];
          for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
          return entries;
        },
        size: function() {
          var size = 0;
          for (var property in this) if (property[0] === prefix) ++size;
          return size;
        },
        empty: function() {
          for (var property in this) if (property[0] === prefix) return false;
          return true;
        },
        each: function(f) {
          for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
        }
      };

      function map(object, f) {
        var map = new Map;

        // Copy constructor.
        if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

        // Index array by numeric index or specified key function.
        else if (Array.isArray(object)) {
          var i = -1,
              n = object.length,
              o;

          if (f == null) while (++i < n) map.set(i, object[i]);
          else while (++i < n) map.set(f(o = object[i], i, object), o);
        }

        // Convert object to map.
        else if (object) for (var key in object) map.set(key, object[key]);

        return map;
      }

      function Set() {}

      var proto = map.prototype;

      Set.prototype = set$2.prototype = {
        constructor: Set,
        has: proto.has,
        add: function(value) {
          value += "";
          this[prefix + value] = value;
          return this;
        },
        remove: proto.remove,
        clear: proto.clear,
        values: proto.keys,
        size: proto.size,
        empty: proto.empty,
        each: proto.each
      };

      function set$2(object, f) {
        var set = new Set;

        // Copy constructor.
        if (object instanceof Set) object.each(function(value) { set.add(value); });

        // Otherwise, assume it’s an array.
        else if (object) {
          var i = -1, n = object.length;
          if (f == null) while (++i < n) set.add(object[i]);
          else while (++i < n) set.add(f(object[i], i, object));
        }

        return set;
      }

      // Computes the decimal coefficient and exponent of the specified number x with
      // significant digits p, where x is positive and p is in [1, 21] or undefined.
      // For example, formatDecimal(1.23) returns ["123", 0].
      function formatDecimal(x, p) {
        if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
        var i, coefficient = x.slice(0, i);

        // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
        // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
        return [
          coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
          +x.slice(i + 1)
        ];
      }

      function exponent(x) {
        return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
      }

      function formatGroup(grouping, thousands) {
        return function(value, width) {
          var i = value.length,
              t = [],
              j = 0,
              g = grouping[0],
              length = 0;

          while (i > 0 && g > 0) {
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
          }

          return t.reverse().join(thousands);
        };
      }

      function formatNumerals(numerals) {
        return function(value) {
          return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
          });
        };
      }

      // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
      var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

      function formatSpecifier(specifier) {
        if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
        var match;
        return new FormatSpecifier({
          fill: match[1],
          align: match[2],
          sign: match[3],
          symbol: match[4],
          zero: match[5],
          width: match[6],
          comma: match[7],
          precision: match[8] && match[8].slice(1),
          trim: match[9],
          type: match[10]
        });
      }

      formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

      function FormatSpecifier(specifier) {
        this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
        this.align = specifier.align === undefined ? ">" : specifier.align + "";
        this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
        this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
        this.zero = !!specifier.zero;
        this.width = specifier.width === undefined ? undefined : +specifier.width;
        this.comma = !!specifier.comma;
        this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
        this.trim = !!specifier.trim;
        this.type = specifier.type === undefined ? "" : specifier.type + "";
      }

      FormatSpecifier.prototype.toString = function() {
        return this.fill
            + this.align
            + this.sign
            + this.symbol
            + (this.zero ? "0" : "")
            + (this.width === undefined ? "" : Math.max(1, this.width | 0))
            + (this.comma ? "," : "")
            + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
            + (this.trim ? "~" : "")
            + this.type;
      };

      // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
      function formatTrim(s) {
        out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
          switch (s[i]) {
            case ".": i0 = i1 = i; break;
            case "0": if (i0 === 0) i0 = i; i1 = i; break;
            default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
          }
        }
        return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
      }

      var prefixExponent;

      function formatPrefixAuto(x, p) {
        var d = formatDecimal(x, p);
        if (!d) return x + "";
        var coefficient = d[0],
            exponent = d[1],
            i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
            n = coefficient.length;
        return i === n ? coefficient
            : i > n ? coefficient + new Array(i - n + 1).join("0")
            : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
            : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
      }

      function formatRounded(x, p) {
        var d = formatDecimal(x, p);
        if (!d) return x + "";
        var coefficient = d[0],
            exponent = d[1];
        return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
            : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
            : coefficient + new Array(exponent - coefficient.length + 2).join("0");
      }

      var formatTypes = {
        "%": function(x, p) { return (x * 100).toFixed(p); },
        "b": function(x) { return Math.round(x).toString(2); },
        "c": function(x) { return x + ""; },
        "d": function(x) { return Math.round(x).toString(10); },
        "e": function(x, p) { return x.toExponential(p); },
        "f": function(x, p) { return x.toFixed(p); },
        "g": function(x, p) { return x.toPrecision(p); },
        "o": function(x) { return Math.round(x).toString(8); },
        "p": function(x, p) { return formatRounded(x * 100, p); },
        "r": formatRounded,
        "s": formatPrefixAuto,
        "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
        "x": function(x) { return Math.round(x).toString(16); }
      };

      function identity$3(x) {
        return x;
      }

      var map$1 = Array.prototype.map,
          prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

      function formatLocale(locale) {
        var group = locale.grouping === undefined || locale.thousands === undefined ? identity$3 : formatGroup(map$1.call(locale.grouping, Number), locale.thousands + ""),
            currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
            currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
            decimal = locale.decimal === undefined ? "." : locale.decimal + "",
            numerals = locale.numerals === undefined ? identity$3 : formatNumerals(map$1.call(locale.numerals, String)),
            percent = locale.percent === undefined ? "%" : locale.percent + "",
            minus = locale.minus === undefined ? "-" : locale.minus + "",
            nan = locale.nan === undefined ? "NaN" : locale.nan + "";

        function newFormat(specifier) {
          specifier = formatSpecifier(specifier);

          var fill = specifier.fill,
              align = specifier.align,
              sign = specifier.sign,
              symbol = specifier.symbol,
              zero = specifier.zero,
              width = specifier.width,
              comma = specifier.comma,
              precision = specifier.precision,
              trim = specifier.trim,
              type = specifier.type;

          // The "n" type is an alias for ",g".
          if (type === "n") comma = true, type = "g";

          // The "" type, and any invalid type, is an alias for ".12~g".
          else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

          // If zero fill is specified, padding goes after sign and before digits.
          if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

          // Compute the prefix and suffix.
          // For SI-prefix, the suffix is lazily computed.
          var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
              suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

          // What format function should we use?
          // Is this an integer type?
          // Can this type generate exponential notation?
          var formatType = formatTypes[type],
              maybeSuffix = /[defgprs%]/.test(type);

          // Set the default precision if not specified,
          // or clamp the specified precision to the supported range.
          // For significant precision, it must be in [1, 21].
          // For fixed precision, it must be in [0, 20].
          precision = precision === undefined ? 6
              : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
              : Math.max(0, Math.min(20, precision));

          function format(value) {
            var valuePrefix = prefix,
                valueSuffix = suffix,
                i, n, c;

            if (type === "c") {
              valueSuffix = formatType(value) + valueSuffix;
              value = "";
            } else {
              value = +value;

              // Perform the initial formatting.
              var valueNegative = value < 0;
              value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

              // Trim insignificant zeros.
              if (trim) value = formatTrim(value);

              // If a negative value rounds to zero during formatting, treat as positive.
              if (valueNegative && +value === 0) valueNegative = false;

              // Compute the prefix and suffix.
              valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

              valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

              // Break the formatted value into the integer “value” part that can be
              // grouped, and fractional or exponential “suffix” part that is not.
              if (maybeSuffix) {
                i = -1, n = value.length;
                while (++i < n) {
                  if (c = value.charCodeAt(i), 48 > c || c > 57) {
                    valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                    value = value.slice(0, i);
                    break;
                  }
                }
              }
            }

            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);

            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length,
                padding = length < width ? new Array(width - length + 1).join(fill) : "";

            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

            // Reconstruct the final output based on the desired alignment.
            switch (align) {
              case "<": value = valuePrefix + value + valueSuffix + padding; break;
              case "=": value = valuePrefix + padding + value + valueSuffix; break;
              case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
              default: value = padding + valuePrefix + value + valueSuffix; break;
            }

            return numerals(value);
          }

          format.toString = function() {
            return specifier + "";
          };

          return format;
        }

        function formatPrefix(specifier, value) {
          var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
              e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
              k = Math.pow(10, -e),
              prefix = prefixes[8 + e / 3];
          return function(value) {
            return f(k * value) + prefix;
          };
        }

        return {
          format: newFormat,
          formatPrefix: formatPrefix
        };
      }

      var locale;
      var format;
      var formatPrefix;

      defaultLocale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-"
      });

      function defaultLocale(definition) {
        locale = formatLocale(definition);
        format = locale.format;
        formatPrefix = locale.formatPrefix;
        return locale;
      }

      function precisionFixed(step) {
        return Math.max(0, -exponent(Math.abs(step)));
      }

      function precisionPrefix(step, value) {
        return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
      }

      function precisionRound(step, max) {
        step = Math.abs(step), max = Math.abs(max) - step;
        return Math.max(0, exponent(max) - exponent(step)) + 1;
      }

      function initRange(domain, range) {
        switch (arguments.length) {
          case 0: break;
          case 1: this.range(domain); break;
          default: this.range(range).domain(domain); break;
        }
        return this;
      }

      var array = Array.prototype;

      var map$2 = array.map;
      var slice$1 = array.slice;

      var implicit = {name: "implicit"};

      function ordinal() {
        var index = map(),
            domain = [],
            range = [],
            unknown = implicit;

        function scale(d) {
          var key = d + "", i = index.get(key);
          if (!i) {
            if (unknown !== implicit) return unknown;
            index.set(key, i = domain.push(d));
          }
          return range[(i - 1) % range.length];
        }

        scale.domain = function(_) {
          if (!arguments.length) return domain.slice();
          domain = [], index = map();
          var i = -1, n = _.length, d, key;
          while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
          return scale;
        };

        scale.range = function(_) {
          return arguments.length ? (range = slice$1.call(_), scale) : range.slice();
        };

        scale.unknown = function(_) {
          return arguments.length ? (unknown = _, scale) : unknown;
        };

        scale.copy = function() {
          return ordinal(domain, range).unknown(unknown);
        };

        initRange.apply(scale, arguments);

        return scale;
      }

      function band() {
        var scale = ordinal().unknown(undefined),
            domain = scale.domain,
            ordinalRange = scale.range,
            range = [0, 1],
            step,
            bandwidth,
            round = false,
            paddingInner = 0,
            paddingOuter = 0,
            align = 0.5;

        delete scale.unknown;

        function rescale() {
          var n = domain().length,
              reverse = range[1] < range[0],
              start = range[reverse - 0],
              stop = range[1 - reverse];
          step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
          if (round) step = Math.floor(step);
          start += (stop - start - step * (n - paddingInner)) * align;
          bandwidth = step * (1 - paddingInner);
          if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
          var values = sequence(n).map(function(i) { return start + step * i; });
          return ordinalRange(reverse ? values.reverse() : values);
        }

        scale.domain = function(_) {
          return arguments.length ? (domain(_), rescale()) : domain();
        };

        scale.range = function(_) {
          return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
        };

        scale.rangeRound = function(_) {
          return range = [+_[0], +_[1]], round = true, rescale();
        };

        scale.bandwidth = function() {
          return bandwidth;
        };

        scale.step = function() {
          return step;
        };

        scale.round = function(_) {
          return arguments.length ? (round = !!_, rescale()) : round;
        };

        scale.padding = function(_) {
          return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
        };

        scale.paddingInner = function(_) {
          return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
        };

        scale.paddingOuter = function(_) {
          return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
        };

        scale.align = function(_) {
          return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
        };

        scale.copy = function() {
          return band(domain(), range)
              .round(round)
              .paddingInner(paddingInner)
              .paddingOuter(paddingOuter)
              .align(align);
        };

        return initRange.apply(rescale(), arguments);
      }

      function constant$3(x) {
        return function() {
          return x;
        };
      }

      function number$1(x) {
        return +x;
      }

      var unit = [0, 1];

      function identity$4(x) {
        return x;
      }

      function normalize(a, b) {
        return (b -= (a = +a))
            ? function(x) { return (x - a) / b; }
            : constant$3(isNaN(b) ? NaN : 0.5);
      }

      function clamper(domain) {
        var a = domain[0], b = domain[domain.length - 1], t;
        if (a > b) t = a, a = b, b = t;
        return function(x) { return Math.max(a, Math.min(b, x)); };
      }

      // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
      // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
      function bimap(domain, range, interpolate) {
        var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
        if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
        else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
        return function(x) { return r0(d0(x)); };
      }

      function polymap(domain, range, interpolate) {
        var j = Math.min(domain.length, range.length) - 1,
            d = new Array(j),
            r = new Array(j),
            i = -1;

        // Reverse descending domains.
        if (domain[j] < domain[0]) {
          domain = domain.slice().reverse();
          range = range.slice().reverse();
        }

        while (++i < j) {
          d[i] = normalize(domain[i], domain[i + 1]);
          r[i] = interpolate(range[i], range[i + 1]);
        }

        return function(x) {
          var i = bisectRight(domain, x, 1, j) - 1;
          return r[i](d[i](x));
        };
      }

      function copy(source, target) {
        return target
            .domain(source.domain())
            .range(source.range())
            .interpolate(source.interpolate())
            .clamp(source.clamp())
            .unknown(source.unknown());
      }

      function transformer() {
        var domain = unit,
            range = unit,
            interpolate = interpolateValue,
            transform,
            untransform,
            unknown,
            clamp = identity$4,
            piecewise,
            output,
            input;

        function rescale() {
          piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
          output = input = null;
          return scale;
        }

        function scale(x) {
          return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
        }

        scale.invert = function(y) {
          return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
        };

        scale.domain = function(_) {
          return arguments.length ? (domain = map$2.call(_, number$1), clamp === identity$4 || (clamp = clamper(domain)), rescale()) : domain.slice();
        };

        scale.range = function(_) {
          return arguments.length ? (range = slice$1.call(_), rescale()) : range.slice();
        };

        scale.rangeRound = function(_) {
          return range = slice$1.call(_), interpolate = interpolateRound, rescale();
        };

        scale.clamp = function(_) {
          return arguments.length ? (clamp = _ ? clamper(domain) : identity$4, scale) : clamp !== identity$4;
        };

        scale.interpolate = function(_) {
          return arguments.length ? (interpolate = _, rescale()) : interpolate;
        };

        scale.unknown = function(_) {
          return arguments.length ? (unknown = _, scale) : unknown;
        };

        return function(t, u) {
          transform = t, untransform = u;
          return rescale();
        };
      }

      function continuous(transform, untransform) {
        return transformer()(transform, untransform);
      }

      function tickFormat(start, stop, count, specifier) {
        var step = tickStep(start, stop, count),
            precision;
        specifier = formatSpecifier(specifier == null ? ",f" : specifier);
        switch (specifier.type) {
          case "s": {
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
            return formatPrefix(specifier, value);
          }
          case "":
          case "e":
          case "g":
          case "p":
          case "r": {
            if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
          }
          case "f":
          case "%": {
            if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
          }
        }
        return format(specifier);
      }

      function linearish(scale) {
        var domain = scale.domain;

        scale.ticks = function(count) {
          var d = domain();
          return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
        };

        scale.tickFormat = function(count, specifier) {
          var d = domain();
          return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
        };

        scale.nice = function(count) {
          if (count == null) count = 10;

          var d = domain(),
              i0 = 0,
              i1 = d.length - 1,
              start = d[i0],
              stop = d[i1],
              step;

          if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
          }

          step = tickIncrement(start, stop, count);

          if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
            step = tickIncrement(start, stop, count);
          } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
            step = tickIncrement(start, stop, count);
          }

          if (step > 0) {
            d[i0] = Math.floor(start / step) * step;
            d[i1] = Math.ceil(stop / step) * step;
            domain(d);
          } else if (step < 0) {
            d[i0] = Math.ceil(start * step) / step;
            d[i1] = Math.floor(stop * step) / step;
            domain(d);
          }

          return scale;
        };

        return scale;
      }

      function linear$1() {
        var scale = continuous(identity$4, identity$4);

        scale.copy = function() {
          return copy(scale, linear$1());
        };

        initRange.apply(scale, arguments);

        return linearish(scale);
      }

      function constant$4(x) {
        return function constant() {
          return x;
        };
      }

      var abs = Math.abs;
      var atan2 = Math.atan2;
      var cos = Math.cos;
      var max$1 = Math.max;
      var min = Math.min;
      var sin = Math.sin;
      var sqrt = Math.sqrt;

      var epsilon$2 = 1e-12;
      var pi$1 = Math.PI;
      var halfPi = pi$1 / 2;
      var tau$1 = 2 * pi$1;

      function acos(x) {
        return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
      }

      function asin(x) {
        return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
      }

      function arcInnerRadius(d) {
        return d.innerRadius;
      }

      function arcOuterRadius(d) {
        return d.outerRadius;
      }

      function arcStartAngle(d) {
        return d.startAngle;
      }

      function arcEndAngle(d) {
        return d.endAngle;
      }

      function arcPadAngle(d) {
        return d && d.padAngle; // Note: optional!
      }

      function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
        var x10 = x1 - x0, y10 = y1 - y0,
            x32 = x3 - x2, y32 = y3 - y2,
            t = y32 * x10 - x32 * y10;
        if (t * t < epsilon$2) return;
        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
        return [x0 + t * x10, y0 + t * y10];
      }

      // Compute perpendicular offset line of length rc.
      // http://mathworld.wolfram.com/Circle-LineIntersection.html
      function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
        var x01 = x0 - x1,
            y01 = y0 - y1,
            lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
            ox = lo * y01,
            oy = -lo * x01,
            x11 = x0 + ox,
            y11 = y0 + oy,
            x10 = x1 + ox,
            y10 = y1 + oy,
            x00 = (x11 + x10) / 2,
            y00 = (y11 + y10) / 2,
            dx = x10 - x11,
            dy = y10 - y11,
            d2 = dx * dx + dy * dy,
            r = r1 - rc,
            D = x11 * y10 - x10 * y11,
            d = (dy < 0 ? -1 : 1) * sqrt(max$1(0, r * r * d2 - D * D)),
            cx0 = (D * dy - dx * d) / d2,
            cy0 = (-D * dx - dy * d) / d2,
            cx1 = (D * dy + dx * d) / d2,
            cy1 = (-D * dx + dy * d) / d2,
            dx0 = cx0 - x00,
            dy0 = cy0 - y00,
            dx1 = cx1 - x00,
            dy1 = cy1 - y00;

        // Pick the closer of the two intersection points.
        // TODO Is there a faster way to determine which intersection to use?
        if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

        return {
          cx: cx0,
          cy: cy0,
          x01: -ox,
          y01: -oy,
          x11: cx0 * (r1 / r - 1),
          y11: cy0 * (r1 / r - 1)
        };
      }

      function arc() {
        var innerRadius = arcInnerRadius,
            outerRadius = arcOuterRadius,
            cornerRadius = constant$4(0),
            padRadius = null,
            startAngle = arcStartAngle,
            endAngle = arcEndAngle,
            padAngle = arcPadAngle,
            context = null;

        function arc() {
          var buffer,
              r,
              r0 = +innerRadius.apply(this, arguments),
              r1 = +outerRadius.apply(this, arguments),
              a0 = startAngle.apply(this, arguments) - halfPi,
              a1 = endAngle.apply(this, arguments) - halfPi,
              da = abs(a1 - a0),
              cw = a1 > a0;

          if (!context) context = buffer = path();

          // Ensure that the outer radius is always larger than the inner radius.
          if (r1 < r0) r = r1, r1 = r0, r0 = r;

          // Is it a point?
          if (!(r1 > epsilon$2)) context.moveTo(0, 0);

          // Or is it a circle or annulus?
          else if (da > tau$1 - epsilon$2) {
            context.moveTo(r1 * cos(a0), r1 * sin(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > epsilon$2) {
              context.moveTo(r0 * cos(a1), r0 * sin(a1));
              context.arc(0, 0, r0, a1, a0, cw);
            }
          }

          // Or is it a circular or annular sector?
          else {
            var a01 = a0,
                a11 = a1,
                a00 = a0,
                a10 = a1,
                da0 = da,
                da1 = da,
                ap = padAngle.apply(this, arguments) / 2,
                rp = (ap > epsilon$2) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
                rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
                rc0 = rc,
                rc1 = rc,
                t0,
                t1;

            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > epsilon$2) {
              var p0 = asin(rp / r0 * sin(ap)),
                  p1 = asin(rp / r1 * sin(ap));
              if ((da0 -= p0 * 2) > epsilon$2) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
              else da0 = 0, a00 = a10 = (a0 + a1) / 2;
              if ((da1 -= p1 * 2) > epsilon$2) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
              else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }

            var x01 = r1 * cos(a01),
                y01 = r1 * sin(a01),
                x10 = r0 * cos(a10),
                y10 = r0 * sin(a10);

            // Apply rounded corners?
            if (rc > epsilon$2) {
              var x11 = r1 * cos(a11),
                  y11 = r1 * sin(a11),
                  x00 = r0 * cos(a00),
                  y00 = r0 * sin(a00),
                  oc;

              // Restrict the corner radius according to the sector angle.
              if (da < pi$1 && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                var ax = x01 - oc[0],
                    ay = y01 - oc[1],
                    bx = x11 - oc[0],
                    by = y11 - oc[1],
                    kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
                    lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                rc0 = min(rc, (r0 - lc) / (kc - 1));
                rc1 = min(rc, (r1 - lc) / (kc + 1));
              }
            }

            // Is the sector collapsed to a line?
            if (!(da1 > epsilon$2)) context.moveTo(x01, y01);

            // Does the sector’s outer ring have rounded corners?
            else if (rc1 > epsilon$2) {
              t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
              t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

              context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
                context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
              }
            }

            // Or is the outer ring just a circular arc?
            else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > epsilon$2) || !(da0 > epsilon$2)) context.lineTo(x10, y10);

            // Does the sector’s inner ring (or point) have rounded corners?
            else if (rc0 > epsilon$2) {
              t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
              t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

              context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
                context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
              }
            }

            // Or is the inner ring just a circular arc?
            else context.arc(0, 0, r0, a10, a00, cw);
          }

          context.closePath();

          if (buffer) return context = null, buffer + "" || null;
        }

        arc.centroid = function() {
          var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
              a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$1 / 2;
          return [cos(a) * r, sin(a) * r];
        };

        arc.innerRadius = function(_) {
          return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$4(+_), arc) : innerRadius;
        };

        arc.outerRadius = function(_) {
          return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$4(+_), arc) : outerRadius;
        };

        arc.cornerRadius = function(_) {
          return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$4(+_), arc) : cornerRadius;
        };

        arc.padRadius = function(_) {
          return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$4(+_), arc) : padRadius;
        };

        arc.startAngle = function(_) {
          return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$4(+_), arc) : startAngle;
        };

        arc.endAngle = function(_) {
          return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$4(+_), arc) : endAngle;
        };

        arc.padAngle = function(_) {
          return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$4(+_), arc) : padAngle;
        };

        arc.context = function(_) {
          return arguments.length ? ((context = _ == null ? null : _), arc) : context;
        };

        return arc;
      }

      var slice$2 = Array.prototype.slice;

      function none$1(series, order) {
        if (!((n = series.length) > 1)) return;
        for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
          s0 = s1, s1 = series[order[i]];
          for (j = 0; j < m; ++j) {
            s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
          }
        }
      }

      function none$2(series) {
        var n = series.length, o = new Array(n);
        while (--n >= 0) o[n] = n;
        return o;
      }

      function stackValue(d, key) {
        return d[key];
      }

      function stack() {
        var keys = constant$4([]),
            order = none$2,
            offset = none$1,
            value = stackValue;

        function stack(data) {
          var kz = keys.apply(this, arguments),
              i,
              m = data.length,
              n = kz.length,
              sz = new Array(n),
              oz;

          for (i = 0; i < n; ++i) {
            for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
              si[j] = sij = [0, +value(data[j], ki, j, data)];
              sij.data = data[j];
            }
            si.key = ki;
          }

          for (i = 0, oz = order(sz); i < n; ++i) {
            sz[oz[i]].index = i;
          }

          offset(sz, oz);
          return sz;
        }

        stack.keys = function(_) {
          return arguments.length ? (keys = typeof _ === "function" ? _ : constant$4(slice$2.call(_)), stack) : keys;
        };

        stack.value = function(_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : constant$4(+_), stack) : value;
        };

        stack.order = function(_) {
          return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$4(slice$2.call(_)), stack) : order;
        };

        stack.offset = function(_) {
          return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
        };

        return stack;
      }

      var panelDefaults = {
        // X axis
        slices: 32,
        // Y axis
        start: 0,
        step: '',
        unit: 'm/s'
      };

      var WindroseCtrl = exports('PanelCtrl', /*#__PURE__*/function (_MetricsPanelCtrl) {
        _inherits(WindroseCtrl, _MetricsPanelCtrl);

        function WindroseCtrl($scope, $injector) {
          var _this;

          _classCallCheck(this, WindroseCtrl);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(WindroseCtrl).call(this, $scope, $injector));
          defaults(_this.panel, panelDefaults);

          _this.events.on('data-error', _this.onDataError.bind(_assertThisInitialized(_this)));

          _this.events.on('data-received', _this.onDataReceived.bind(_assertThisInitialized(_this)));

          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_assertThisInitialized(_this)));

          var render = _this.onRender.bind(_assertThisInitialized(_this));

          _this.events.on('render', render); // When viewing a single panel resizing the window does not emit
          // panel-size-changed (but it does when looking a dashboard).


          window.addEventListener('resize', debounce(render, 200)); //this.events.on('data-snapshot-load', () => { console.log('data-snapshot-load'); });
          //this.events.on('panel-size-changed', () => { console.log('panel-size-changed'); });
          //this.events.on('panel-teardown', () => { console.log('panel-teardown'); });
          //this.events.on('refresh', () => { console.log('refresh'); });

          return _this;
        }

        _createClass(WindroseCtrl, [{
          key: "onInitEditMode",
          value: function onInitEditMode() {
            console.debug('init-edit-mode');
            var template = 'public/plugins/spectraphilic-windrose-panel/editor.html';
            this.addEditorTab('Options', template, 2);
          }
        }, {
          key: "onDataError",
          value: function onDataError(err) {
            console.error('data-error', err);
          } // Helper function. Given a value and a sorted array, return the index where
          // the value would be inserted in order. The first element of the array
          // defines the minimum allowed value, the last element of the array defines
          // the maximum allowed value.

        }, {
          key: "getInsertIndex",
          value: function getInsertIndex(value, array) {
            // Check value
            if (value === null) {
              console.debug('Unexpected value is null');
              return null;
            } // Below lower limit


            if (value < array[0]) {
              console.debug('Unexpected ' + value + ' lesser than ' + array[0]);
              return null;
            } // Within range


            for (var i = 1; i < array.length; i++) {
              var low = array[i - 1];
              var high = array[i];

              if (value >= low && value <= high) {
                return i;
              }
            } // Above upper limit


            console.warn('Unexpected ' + value + ' greater than ' + array[array.length - 1]);
            return null;
          } // Helper function. Given an array and an index (greater than 0) return the
          // name for the index as a range.

        }, {
          key: "getColumnName",
          value: function getColumnName(array, index) {
            var low = array[index - 1];
            var high = array[index];
            return high === Infinity ? low + ' +' : low + ' - ' + high;
          }
        }, {
          key: "onDataReceived",
          value: function onDataReceived(data) {
            var speeds = [];
            var angles = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var serie = _step.value;
                var datapoints = serie.datapoints.map(function (x) {
                  return x[0];
                });

                if (serie.target === 'speed') {
                  speeds = datapoints;
                } else if (serie.target === 'direction') {
                  angles = datapoints;
                } else {
                  console.warn('unexpected target ' + serie.target);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            this.speeds = speeds;
            this.angles = angles;
            this.render();
          }
        }, {
          key: "onRender",
          value: function onRender() {
            //console.log(this);
            // Data
            var speeds = this.speeds;
            var angles = this.angles; // Configuration

            var slices = this.panel.slices;
            var start = this.panel.start;
            var step = this.panel.step;
            step = step == '' ? Math.ceil(speedMax / 8) : +step;
            var unit = this.panel.unit; // Variables

            var gridX = range(0, 360, 360 / 8);
            var angleLimits = range(0, 360 + 0.1, 360 / slices);
            var speedMax = Math.max.apply(Math, _toConsumableArray(speeds));
            var speedLimits = range(start, speedMax, step);
            speedLimits.push(Infinity); //console.info('SPEED 0-' + speedMax, speedStep, speedLimits);
            // [angle-index][speed-index] = 0

            var matrix = {};

            for (var i = 1; i < angleLimits.length; i++) {
              matrix[i] = {};

              for (var j = 1; j < speedLimits.length; j++) {
                matrix[i][j] = 0;
              }
            } // [angle-index][speed-index] = 0


            for (var _i = 0; _i < speeds.length; _i++) {
              var _j = this.getInsertIndex(angles[_i], angleLimits);

              var k = this.getInsertIndex(speeds[_i], speedLimits);

              if (_j != null && k != null) {
                matrix[_j][k]++;
              }
            }

            console.debug('matrix=', matrix); // Columns

            var columns = [];

            for (var _i2 = 1; _i2 < speedLimits.length; _i2++) {
              columns.push(this.getColumnName(speedLimits, _i2));
            } // [{angle: angle, speed-0: n, ..., speed-n: n, total: n} ... ]


            var data = [];

            for (var _i3 = 1; _i3 < angleLimits.length; _i3++) {
              var row = {
                angle: angleLimits[_i3 - 1]
              };
              var total = 0;

              for (var _j2 = 1; _j2 < speedLimits.length; _j2++) {
                var name = columns[_j2 - 1];
                total += row[name] = matrix[_i3][_j2];
              }

              row['total'] = total;
              data.push(row);
            }

            console.debug('data=', data); // SVG

            var svg = select("svg#windrose-" + this.panel.id);
            svg.selectAll('*').remove(); // Set width and height

            var node = svg.node().parentNode;
            var width = node.offsetWidth,
                height = node.offsetHeight;
            svg.attr('width', width).attr('height', height);
            var margin = {
              top: 40,
              right: 80,
              bottom: 40,
              left: 40
            },
                innerRadius = 0,
                chartWidth = width - margin.left - margin.right,
                chartHeight = height - margin.top - margin.bottom,
                outerRadius = Math.min(chartWidth, chartHeight) / 2,
                g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            var angle = linear$1().range([0, 2 * Math.PI]);
            var x = band().range([0, 2 * Math.PI]).align(0); // you can try scaleRadial but it scales differently

            var y = linear$1().range([innerRadius, outerRadius]);
            var z = ordinal().range(["#4242f4", "#42c5f4", "#42f4ce", "#42f456", "#adf442", "#f4e242", "#f4a142", "#f44242"]);
            x.domain(data.map(function (d) {
              return d.angle;
            }));
            y.domain([0, max(data, function (d) {
              return d.total;
            })]);
            z.domain(columns); // Extend the domain slightly to match the range of [0, 2π].

            angle.domain([0, max(data, function (d, i) {
              return i + 1;
            })]); // Draw data

            g.append("g").selectAll("g").data(stack().keys(columns)(data)).enter().append("g").attr("fill", function (d) {
              return z(d.key);
            }).selectAll("path").data(function (d) {
              return d;
            }).enter().append("path").attr("d", arc().innerRadius(function (d) {
              return y(d[0]);
            }).outerRadius(function (d) {
              return y(d[1]);
            }).startAngle(function (d) {
              return x(d.data.angle);
            }).endAngle(function (d) {
              return x(d.data.angle) + x.bandwidth();
            }).padAngle(0.01).padRadius(innerRadius)); // X axis (angle)

            var xLinear = linear$1().range([0, 2 * Math.PI]).domain([0, max(gridX, function (d, i) {
              return i + 1;
            })]);
            var xBand = band().range([0, 2 * Math.PI]).align(0).domain(gridX);
            var angleOffset = -360.0 / gridX.length / 2.0;
            var label = g.append("g").selectAll("g").data(gridX).enter().append("g").attr("text-anchor", "middle").attr("transform", function (d) {
              var rotate = (xBand(d) + xBand.bandwidth() / 2) * 180 / Math.PI - (90 - angleOffset);
              return "rotate(" + rotate + ")translate(" + (outerRadius + 30) + ",0)";
            });
            label.append("text").attr("transform", function (d) {
              return (xBand(d) + xBand.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)";
            }).attr('fill', 'white').text(function (d) {
              return d;
            }).style("font-size", '14px');
            var radius = linear$1().range([innerRadius, outerRadius]).domain([0, max(gridX, function (d) {
              return d.y0 + d.y;
            })]);
            g.selectAll(".axis").data(sequence(xLinear.domain()[1])).enter().append("g").attr("class", "axis").attr("transform", function (d) {
              return "rotate(" + xLinear(d) * 180 / Math.PI + ")";
            }).call(axisLeft().scale(radius.copy().range([-innerRadius, -(outerRadius + 10)]))); // Y axis

            var yAxis = g.append("g").attr("text-anchor", "middle");
            var yTick = yAxis.selectAll("g").data(y.ticks(5).slice(1)).enter().append("g"); // Y axis: circles

            yTick.append("circle").attr("fill", "none").attr("stroke", "gray").attr("stroke-dasharray", "4,4").attr("r", y); // Y axis: labels

            yTick.append("text").attr("y", function (d) {
              return -y(d);
            }).attr("dy", "-0.35em").attr("x", function () {
              return -10;
            }).text(y.tickFormat(5, "s")).attr('fill', 'white').style("font-size", '14px'); // Legend

            var legend = g.append("g").selectAll("g").data(columns.reverse()).enter().append("g").attr("transform", function (d, i) {
              var translate_x = outerRadius + 30;
              var translate_y = -outerRadius + 40 + (i - columns.length / 2) * 20;
              return "translate(" + translate_x + "," + translate_y + ")";
            });
            legend.append("rect").attr("width", 18).attr("height", 18).attr("fill", z);
            legend.append("text").attr("x", 24).attr("y", 9).attr("dy", "0.35em").text(function (d) {
              return d + ' ' + unit;
            }).attr('fill', 'white').style("font-size", '12px');
          }
        }]);

        return WindroseCtrl;
      }(MetricsPanelCtrl));

      WindroseCtrl.templateUrl = 'module.html';

    }
  };
});
//# sourceMappingURL=module.js.map
