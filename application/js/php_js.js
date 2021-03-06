/**
 * Funções do site
 * @link http://phpjs.org/functions/str_replace/
 */


var SERVER_REQUEST_URI	=	'';


function strtolower(str) {
  //  discuss at: http://phpjs.org/functions/strtolower/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  //   example 1: strtolower('Kevin van Zonneveld');
  //   returns 1: 'kevin van zonneveld'

  return (str + '')
    .toLowerCase();
}


function strcspn(str, mask, start, length) {
	  //  discuss at: http://phpjs.org/functions/strcspn/
	  // original by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: strcspn('abcdefg123', '1234567890');
	  //   returns 1: 7
	  //   example 2: strcspn('123abc', '1234567890');
	  //   returns 2: 3

	  start = start ? start : 0;
	  var count = (length && ((start + length) < str.length)) ? start + length : str.length;
	  strct: for (var i = start, lgth = 0; i < count; i++) {
	    for (var j = 0; j < mask.length; j++) {
	      if (str.charAt(i)
	        .indexOf(mask[j]) !== -1) {
	        continue strct;
	      }
	    }++lgth;
	  }

	  return lgth;
	}


function ucfirst(str) {
  //  discuss at: http://phpjs.org/functions/ucfirst/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: ucfirst('kevin van zonneveld');
  //   returns 1: 'Kevin van zonneveld'

  str += '';
  var f = str.charAt(0)
    .toUpperCase();
  return f + str.substr(1);
}

function ceil(value) {
	  //  discuss at: http://phpjs.org/functions/ceil/
	  // original by: Onno Marsman
	  //   example 1: ceil(8723321.4);
	  //   returns 1: 8723322

	  return Math.ceil(value);
	}


function strpos(haystack, needle, offset) {
  //  discuss at: http://phpjs.org/functions/strpos/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Daniel Esteban
  //   example 1: strpos('Kevin van Zonneveld', 'e', 5);
  //   returns 1: 14

  var i = (haystack + '')
    .indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}


function is_int(mixed_var) {
  //  discuss at: http://phpjs.org/functions/is_int/
  // original by: Alex
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //  revised by: Matt Bradley
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //        note: 1.0 is simplified to 1 before it can be accessed by the function, this makes
  //        note: it different from the PHP implementation. We can't fix this unfortunately.
  //   example 1: is_int(23)
  //   returns 1: true
  //   example 2: is_int('23')
  //   returns 2: false
  //   example 3: is_int(23.5)
  //   returns 3: false
  //   example 4: is_int(true)
  //   returns 4: false

  return mixed_var === +mixed_var && isFinite(mixed_var) && !(mixed_var % 1);
  
}


function isset() {
	  //  discuss at: http://phpjs.org/functions/isset/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: FremyCompany
	  // improved by: Onno Marsman
	  // improved by: Rafał Kukawski
	  //   example 1: isset( undefined, true);
	  //   returns 1: false
	  //   example 2: isset( 'Kevin van Zonneveld' );
	  //   returns 2: true

	  var a = arguments,
	    l = a.length,
	    i = 0,
	    undef;

	  if (l === 0) {
	    throw new Error('Empty isset');
	  }

	  while (i !== l) {
	    if (a[i] === undef || a[i] === null) {
	      return false;
	    }
	    i++;
	  }
	  return true;
	}


function str_replace(search, replace, subject, count) {
	  //  discuss at: http://phpjs.org/functions/str_replace/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Gabriel Paderni
	  // improved by: Philip Peterson
	  // improved by: Simon Willison (http://simonwillison.net)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Onno Marsman
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	  // bugfixed by: Anton Ongson
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Oleg Eremeev
	  //    input by: Onno Marsman
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: Oleg Eremeev
	  //        note: The count parameter must be passed as a string in order
	  //        note: to find a global variable in which the result will be given
	  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
	  //   returns 1: 'Kevin.van.Zonneveld'
	  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
	  //   returns 2: 'hemmo, mars'

	  var i = 0,
	    j = 0,
	    temp = '',
	    repl = '',
	    sl = 0,
	    fl = 0,
	    f = [].concat(search),
	    r = [].concat(replace),
	    s = subject,
	    ra = Object.prototype.toString.call(r) === '[object Array]',
	    sa = Object.prototype.toString.call(s) === '[object Array]';
	  s = [].concat(s);
	  if (count) {
	    this.window[count] = 0;
	  }

	  for (i = 0, sl = s.length; i < sl; i++) {
	    if (s[i] === '') {
	      continue;
	    }
	    for (j = 0, fl = f.length; j < fl; j++) {
	      temp = s[i] + '';
	      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
	      s[i] = (temp)
	        .split(f[j])
	        .join(repl);
	      if (count && s[i] !== temp) {
	        this.window[count] += (temp.length - s[i].length) / f[j].length;
	      }
	    }
	  }
	  return sa ? s : s[0];
	}



function empty(mixed_var) {
	  //  discuss at: http://phpjs.org/functions/empty/
	  // original by: Philippe Baumann
	  //    input by: Onno Marsman
	  //    input by: LH
	  //    input by: Stoyan Kyosev (http://www.svest.org/)
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Onno Marsman
	  // improved by: Francesco
	  // improved by: Marc Jansen
	  // improved by: Rafal Kukawski
	  //   example 1: empty(null);
	  //   returns 1: true
	  //   example 2: empty(undefined);
	  //   returns 2: true
	  //   example 3: empty([]);
	  //   returns 3: true
	  //   example 4: empty({});
	  //   returns 4: true
	  //   example 5: empty({'aFunc' : function () { alert('humpty'); } });
	  //   returns 5: false

	  var undef, key, i, len;
	  var emptyValues = [undef, null, false, 0, '', '0'];

	  for (i = 0, len = emptyValues.length; i < len; i++) {
	    if (mixed_var === emptyValues[i]) {
	      return true;
	    }
	  }

	  if (typeof mixed_var === 'object') {
	    for (key in mixed_var) {
	      // TODO: should we check for own properties only?
	      //if (mixed_var.hasOwnProperty(key)) {
	      return false;
	      //}
	    }
	    return true;
	  }

	  return false;
	}


function is_array(mixed_var) {
	  //  discuss at: http://phpjs.org/functions/is_array/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Legaev Andrey
	  // improved by: Onno Marsman
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  // improved by: Nathan Sepulveda
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: Cord
	  // bugfixed by: Manish
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //        note: In php.js, javascript objects are like php associative arrays, thus JavaScript objects will also
	  //        note: return true in this function (except for objects which inherit properties, being thus used as objects),
	  //        note: unless you do ini_set('phpjs.objectsAsArrays', 0), in which case only genuine JavaScript arrays
	  //        note: will return true
	  //   example 1: is_array(['Kevin', 'van', 'Zonneveld']);
	  //   returns 1: true
	  //   example 2: is_array('Kevin van Zonneveld');
	  //   returns 2: false
	  //   example 3: is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
	  //   returns 3: true
	  //   example 4: is_array(function tmp_a(){this.name = 'Kevin'});
	  //   returns 4: false

	  var ini,
	    _getFuncName = function(fn) {
	      var name = (/\W*function\s+([\w\$]+)\s*\(/)
	        .exec(fn);
	      if (!name) {
	        return '(Anonymous)';
	      }
	      return name[1];
	    };
	  _isArray = function(mixed_var) {
	    // return Object.prototype.toString.call(mixed_var) === '[object Array]';
	    // The above works, but let's do the even more stringent approach: (since Object.prototype.toString could be overridden)
	    // Null, Not an object, no length property so couldn't be an Array (or String)
	    if (!mixed_var || typeof mixed_var !== 'object' || typeof mixed_var.length !== 'number') {
	      return false;
	    }
	    var len = mixed_var.length;
	    mixed_var[mixed_var.length] = 'bogus';
	    // The only way I can think of to get around this (or where there would be trouble) would be to have an object defined
	    // with a custom "length" getter which changed behavior on each call (or a setter to mess up the following below) or a custom
	    // setter for numeric properties, but even that would need to listen for specific indexes; but there should be no false negatives
	    // and such a false positive would need to rely on later JavaScript innovations like __defineSetter__
	    if (len !== mixed_var.length) { // We know it's an array since length auto-changed with the addition of a
	      // numeric property at its length end, so safely get rid of our bogus element
	      mixed_var.length -= 1;
	      return true;
	    }
	    // Get rid of the property we added onto a non-array object; only possible
	    // side-effect is if the user adds back the property later, it will iterate
	    // this property in the older order placement in IE (an order which should not
	    // be depended on anyways)
	    delete mixed_var[mixed_var.length];
	    return false;
	  };

	  if (!mixed_var || typeof mixed_var !== 'object') {
	    return false;
	  }

	  // BEGIN REDUNDANT
	  this.php_js = this.php_js || {};
	  this.php_js.ini = this.php_js.ini || {};
	  // END REDUNDANT

	  ini = this.php_js.ini['phpjs.objectsAsArrays'];

	  return _isArray(mixed_var) ||
	  // Allow returning true unless user has called
	  // ini_set('phpjs.objectsAsArrays', 0) to disallow objects as arrays
	  ((!ini || ( // if it's not set to 0 and it's not 'off', check for objects as arrays
	    (parseInt(ini.local_value, 10) !== 0 && (!ini.local_value.toLowerCase || ini.local_value.toLowerCase() !==
	      'off')))) && (
	    Object.prototype.toString.call(mixed_var) === '[object Object]' && _getFuncName(mixed_var.constructor) ===
	    'Object' // Most likely a literal and intended as assoc. array
	  ));
	}



function js_rand(min, max) {
	  //  discuss at: http://phpjs.org/functions/rand/
	  // original by: Leslie Hoare
	  // bugfixed by: Onno Marsman
	  //        note: See the commented out code below for a version which will work with our experimental (though probably unnecessary) srand() function)
	  //   example 1: rand(1, 1);
	  //   returns 1: 1

	  var argc = arguments.length;
	  if (argc === 0) {
	    min = 0;
	    max = 2147483647;
	  } else if (argc === 1) {
	    throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
	  }
	  return Math.floor(Math.random() * (max - min + 1)) + min;

	  /*
	  // See note above for an explanation of the following alternative code

	  // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
	  // -    depends on: srand
	  // %          note 1: This is a very possibly imperfect adaptation from the PHP source code
	  var rand_seed, ctx, PHP_RAND_MAX=2147483647; // 0x7fffffff

	  if (!this.php_js || this.php_js.rand_seed === undefined) {
	    this.srand();
	  }
	  rand_seed = this.php_js.rand_seed;

	  var argc = arguments.length;
	  if (argc === 1) {
	    throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
	  }

	  var do_rand = function (ctx) {
	    return ((ctx * 1103515245 + 12345) % (PHP_RAND_MAX + 1));
	  };

	  var php_rand = function (ctxArg) { // php_rand_r
	    this.php_js.rand_seed = do_rand(ctxArg);
	    return parseInt(this.php_js.rand_seed, 10);
	  };

	  var number = php_rand(rand_seed);

	  if (argc === 2) {
	    number = min + parseInt(parseFloat(parseFloat(max) - min + 1.0) * (number/(PHP_RAND_MAX + 1.0)), 10);
	  }
	  return number;
	  */
	}



function explode(delimiter, string, limit) {
	  //  discuss at: http://phpjs.org/functions/explode/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //   example 1: explode(' ', 'Kevin van Zonneveld');
	  //   returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

	  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
	  if (delimiter === '' || delimiter === false || delimiter === null) return false;
	  if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
	    'object') {
	    return {
	      0: ''
	    };
	  }
	  if (delimiter === true) delimiter = '1';

	  // Here we go...
	  delimiter += '';
	  string += '';

	  var s = string.split(delimiter);

	  if (typeof limit === 'undefined') return s;

	  // Support for limit
	  if (limit === 0) limit = 1;

	  // Positive limit
	  if (limit > 0) {
	    if (limit >= s.length) return s;
	    return s.slice(0, limit - 1)
	      .concat([s.slice(limit - 1)
	        .join(delimiter)
	      ]);
	  }

	  // Negative limit
	  if (-limit >= s.length) return [];

	  s.splice(s.length + limit);
	  return s;
	}


function explode_(delimiter, string, limit) {
	  //  discuss at: http://phpjs.org/functions/explode/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //   example 1: explode(' ', 'Kevin van Zonneveld');
	  //   returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}

	  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
	  if (delimiter === '' || delimiter === false || delimiter === null) return false;
	  if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
	    'object') {
/*	    return {
	      0: ''
	    };*/
	  }
	  if (delimiter === true) delimiter = '1';

	  // Here we go...
	  delimiter += '';
	  string += '';

	  var s = string.split(delimiter);

	  if (typeof limit === 'undefined') return s;

	  // Support for limit
	  if (limit === 0) limit = 1;

	  // Positive limit
	  if (limit > 0) {
	    if (limit >= s.length) return s;
	    return s.slice(0, limit - 1)
	      .concat([s.slice(limit - 1)
	        .join(delimiter)
	      ]);
	  }

	  // Negative limit
	  if (-limit >= s.length) return [];

	  s.splice(s.length + limit);
	  return s;
	}





function implode(glue, pieces) 
{
	  //  discuss at: http://phpjs.org/functions/implode/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Waldo Malqui Silva
	  // improved by: Itsacon (http://www.itsacon.net/)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
	  //   returns 1: 'Kevin van Zonneveld'
	  //   example 2: implode(' ', {first:'Kevin', last: 'van Zonneveld'});
	  //   returns 2: 'Kevin van Zonneveld'

	  var i = '',
	    retVal = '',
	    tGlue = '';
	  if (arguments.length === 1) {
	    pieces = glue;
	    glue = '';
	  }
	  if (typeof pieces === 'object') {
	    if (Object.prototype.toString.call(pieces) === '[object Array]') {
	      return pieces.join(glue);
	    }
	    for (i in pieces) {
	      retVal += tGlue + pieces[i];
	      tGlue = glue;
	    }
	    return retVal;
	  }
	  return pieces;
}




function base64_decode(data) {
	  //  discuss at: http://phpjs.org/functions/base64_decode/
	  // original by: Tyler Akins (http://rumkin.com)
	  // improved by: Thunder.m
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //    input by: Aman Gupta
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Pellentesque Malesuada
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
	  //   returns 1: 'Kevin van Zonneveld'
	  //   example 2: base64_decode('YQ===');
	  //   returns 2: 'a'

	  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	    ac = 0,
	    dec = '',
	    tmp_arr = [];

	  if (!data) {
	    return data;
	  }

	  data += '';

	  do { // unpack four hexets into three octets using index points in b64
	    h1 = b64.indexOf(data.charAt(i++));
	    h2 = b64.indexOf(data.charAt(i++));
	    h3 = b64.indexOf(data.charAt(i++));
	    h4 = b64.indexOf(data.charAt(i++));

	    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

	    o1 = bits >> 16 & 0xff;
	    o2 = bits >> 8 & 0xff;
	    o3 = bits & 0xff;

	    if (h3 == 64) {
	      tmp_arr[ac++] = String.fromCharCode(o1);
	    } else if (h4 == 64) {
	      tmp_arr[ac++] = String.fromCharCode(o1, o2);
	    } else {
	      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
	    }
	  } while (i < data.length);

	  dec = tmp_arr.join('');

	  return dec.replace(/\0+$/, '');
	}


function base64_encode(data) {
	
//	if(empty(data) || data=='null') return data;
	  //  discuss at: http://phpjs.org/functions/base64_encode/
	  // original by: Tyler Akins (http://rumkin.com)
	  // improved by: Bayron Guevara
	  // improved by: Thunder.m
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Rafał Kukawski (http://kukawski.pl)
	  // bugfixed by: Pellentesque Malesuada
	  //   example 1: base64_encode('Kevin van Zonneveld');
	  //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
	  //   example 2: base64_encode('a');
	  //   returns 2: 'YQ=='

	  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	    ac = 0,
	    enc = '',
	    tmp_arr = [];

	  if (!data) {
	    return data;
	  }

	  do { // pack three octets into four hexets
	    o1 = data.charCodeAt(i++);
	    o2 = data.charCodeAt(i++);
	    o3 = data.charCodeAt(i++);

	    bits = o1 << 16 | o2 << 8 | o3;

	    h1 = bits >> 18 & 0x3f;
	    h2 = bits >> 12 & 0x3f;
	    h3 = bits >> 6 & 0x3f;
	    h4 = bits & 0x3f;

	    // use hexets to index into b64, and append result to encoded string
	    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	  } while (i < data.length);

	  enc = tmp_arr.join('');

	  var r = data.length % 3;

	  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
	}



function array_unique(inputArr) {
	  //  discuss at: http://phpjs.org/functions/array_unique/
	  // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
	  //    input by: duncan
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Nate
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  // improved by: Michael Grier
	  //        note: The second argument, sort_flags is not implemented;
	  //        note: also should be sorted (asort?) first according to docs
	  //   example 1: array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
	  //   returns 1: {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
	  //   example 2: array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
	  //   returns 2: {a: 'green', 0: 'red', 1: 'blue'}

	  var key = '',
	    tmp_arr2 = {},
	    val = '';

	  var __array_search = function(needle, haystack) {
	    var fkey = '';
	    for (fkey in haystack) {
	      if (haystack.hasOwnProperty(fkey)) {
	        if ((haystack[fkey] + '') === (needle + '')) {
	          return fkey;
	        }
	      }
	    }
	    return false;
	  };

	  for (key in inputArr) {
	    if (inputArr.hasOwnProperty(key)) {
	      val = inputArr[key];
	      if (false === __array_search(val, tmp_arr2)) {
	        tmp_arr2[key] = val;
	      }
	    }
	  }

	  return tmp_arr2;
	}



function array_uintersect(arr1) {
	  //  discuss at: http://phpjs.org/functions/array_uintersect/
	  // original by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: Demosthenes Koptsis
	  //   example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
	  //   example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
	  //   example 1: array_uintersect($array1, $array2, function( f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
	  //   returns 1: {a: 'green', b: 'brown', 0: 'red'}

	  var retArr = {},
	    arglm1 = arguments.length - 1,
	    arglm2 = arglm1 - 1,
	    cb = arguments[arglm1],
	    k1 = '',
	    i = 1,
	    arr = {},
	    k = '';

	  cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[
	    cb[0]][cb[1]] : cb;

	  arr1keys: for (k1 in arr1) {
	    arrs: for (i = 1; i < arglm1; i++) {
	      arr = arguments[i];
	      for (k in arr) {
	        if (cb(arr[k], arr1[k1]) === 0) {
	          if (i === arglm2) {
	            retArr[k1] = arr1[k1];
	          }
	          // If the innermost loop always leads at least once to an equal value, continue the loop until done
	          continue arrs;
	        }
	      }
	      // If it reaches here, it wasn't found in at least one array, so try next value
	      continue arr1keys;
	    }
	  }

	  return retArr;
	}

function implode_request(param)
{
	var tmp	=	[];
	
	for(var line in param)
		{
			tmp.push(line+'='+param[line]);	
		}
	
	return implode('&',tmp);
}

function strcasecmp(f_string1, f_string2) {
	  //  discuss at: http://phpjs.org/functions/strcasecmp/
	  // original by: Martijn Wieringa
	  // bugfixed by: Onno Marsman
	  //   example 1: strcasecmp('Hello', 'hello');
	  //   returns 1: 0

	  var string1 = (f_string1 + '')
	    .toLowerCase();
	  var string2 = (f_string2 + '')
	    .toLowerCase();

	  if (string1 > string2) {
	    return 1;
	  } else if (string1 == string2) {
	    return 0;
	  }

	  return -1;
	}



function json_decode(str_json) 
{
	  //       discuss at: http://phpjs.org/functions/json_decode/
	  //      original by: Public Domain (http://www.json.org/json2.js)
	  // reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //      improved by: T.J. Leahy
	  //      improved by: Michael White
	  //        example 1: json_decode('[ 1 ]');
	  //        returns 1: [1]

	  /*
	    http://www.JSON.org/json2.js
	    2008-11-19
	    Public Domain.
	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	    See http://www.JSON.org/js.html
	  */

	  var json = this.window.JSON;
	  if (typeof json === 'object' && typeof json.parse === 'function') {
	    try {
	      return json.parse(str_json);
	    } catch (err) {
	      if (!(err instanceof SyntaxError)) {
	        throw new Error('Unexpected error type in json_decode()');
	      }
	      this.php_js = this.php_js || {};
	      this.php_js.last_error_json = 4; // usable by json_last_error()
	      return null;
	    }
	  }

	  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	  var j;
	  var text = str_json;

	  // Parsing happens in four stages. In the first stage, we replace certain
	  // Unicode characters with escape sequences. JavaScript handles many characters
	  // incorrectly, either silently deleting them, or treating them as line endings.
	  cx.lastIndex = 0;
	  if (cx.test(text)) {
	    text = text.replace(cx, function(a) {
	      return '\\u' + ('0000' + a.charCodeAt(0)
	        .toString(16))
	        .slice(-4);
	    });
	  }

	  // In the second stage, we run the text against regular expressions that look
	  // for non-JSON patterns. We are especially concerned with '()' and 'new'
	  // because they can cause invocation, and '=' because it can cause mutation.
	  // But just to be safe, we want to reject all unexpected forms.
	  // We split the second stage into 4 regexp operations in order to work around
	  // crippling inefficiencies in IE's and Safari's regexp engines. First we
	  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	  // replace all simple value tokens with ']' characters. Third, we delete all
	  // open brackets that follow a colon or comma or that begin the text. Finally,
	  // we look to see that the remaining characters are only whitespace or ']' or
	  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
	  if ((/^[\],:{}\s]*$/)
	    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
	      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
	      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	    // In the third stage we use the eval function to compile the text into a
	    // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	    // in JavaScript: it can begin a block or an object literal. We wrap the text
	    // in parens to eliminate the ambiguity.
	    j = eval('(' + text + ')');

	    return j;
	  }

	  this.php_js = this.php_js || {};
	  this.php_js.last_error_json = 4; // usable by json_last_error()
	  return null;
	}
	
function json_encode(mixed_val) {
	  //       discuss at: http://phpjs.org/functions/json_encode/
	  //      original by: Public Domain (http://www.json.org/json2.js)
	  // reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //      improved by: Michael White
	  //         input by: felix
	  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //        example 1: json_encode('Kevin');
	  //        returns 1: '"Kevin"'

	  /*
	    http://www.JSON.org/json2.js
	    2008-11-19
	    Public Domain.
	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	    See http://www.JSON.org/js.html
	  */
	  var retVal, json = this.window.JSON;
	  try {
	    if (typeof json === 'object' && typeof json.stringify === 'function') {
	      retVal = json.stringify(mixed_val); // Errors will not be caught here if our own equivalent to resource
	      //  (an instance of PHPJS_Resource) is used
	      if (retVal === undefined) {
	        throw new SyntaxError('json_encode');
	      }
	      return retVal;
	    }

	    var value = mixed_val;

	    var quote = function(string) {
	      var escapable =
	        /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	      var meta = { // table of character substitutions
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"': '\\"',
	        '\\': '\\\\'
	      };

	      escapable.lastIndex = 0;
	      return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
	        var c = meta[a];
	        return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0)
	          .toString(16))
	          .slice(-4);
	      }) + '"' : '"' + string + '"';
	    };

	    var str = function(key, holder) {
	      var gap = '';
	      var indent = '    ';
	      var i = 0; // The loop counter.
	      var k = ''; // The member key.
	      var v = ''; // The member value.
	      var length = 0;
	      var mind = gap;
	      var partial = [];
	      var value = holder[key];

	      // If the value has a toJSON method, call it to obtain a replacement value.
	      if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
	        value = value.toJSON(key);
	      }

	      // What happens next depends on the value's type.
	      switch (typeof value) {
	        case 'string':
	          return quote(value);

	        case 'number':
	          // JSON numbers must be finite. Encode non-finite numbers as null.
	          return isFinite(value) ? String(value) : 'null';

	        case 'boolean':
	        case 'null':
	          // If the value is a boolean or null, convert it to a string. Note:
	          // typeof null does not produce 'null'. The case is included here in
	          // the remote chance that this gets fixed someday.
	          return String(value);

	        case 'object':
	          // If the type is 'object', we might be dealing with an object or an array or
	          // null.
	          // Due to a specification blunder in ECMAScript, typeof null is 'object',
	          // so watch out for that case.
	          if (!value) {
	            return 'null';
	          }
	          if ((this.PHPJS_Resource && value instanceof this.PHPJS_Resource) || (window.PHPJS_Resource &&
	            value instanceof window.PHPJS_Resource)) {
	            throw new SyntaxError('json_encode');
	          }

	          // Make an array to hold the partial results of stringifying this object value.
	          gap += indent;
	          partial = [];

	          // Is the value an array?
	          if (Object.prototype.toString.apply(value) === '[object Array]') {
	            // The value is an array. Stringify every element. Use null as a placeholder
	            // for non-JSON values.
	            length = value.length;
	            for (i = 0; i < length; i += 1) {
	              partial[i] = str(i, value) || 'null';
	            }

	            // Join all of the elements together, separated with commas, and wrap them in
	            // brackets.
	            v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind +
	              ']' : '[' + partial.join(',') + ']';
	            gap = mind;
	            return v;
	          }

	          // Iterate through all of the keys in the object.
	          for (k in value) {
	            if (Object.hasOwnProperty.call(value, k)) {
	              v = str(k, value);
	              if (v) {
	                partial.push(quote(k) + (gap ? ': ' : ':') + v);
	              }
	            }
	          }

	          // Join all of the member texts together, separated with commas,
	          // and wrap them in braces.
	          v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
	            '{' + partial.join(',') + '}';
	          gap = mind;
	          return v;
	        case 'undefined':
	          // Fall-through
	        case 'function':
	          // Fall-through
	        default:
	          throw new SyntaxError('json_encode');
	      }
	    };

	    // Make a fake root object containing our value under the key of ''.
	    // Return the result of stringifying the value.
	    return str('', {
	      '': value
	    });

	  } catch (err) { // Todo: ensure error handling above throws a SyntaxError in all cases where it could
	    // (i.e., when the JSON global is not available and there is an error)
	    if (!(err instanceof SyntaxError)) {
	      throw new Error('Unexpected error type in json_encode()');
	    }
	    this.php_js = this.php_js || {};
	    this.php_js.last_error_json = 4; // usable by json_last_error()
	    return null;
	  }
	}



function count(mixed_var, mode) {
	  //  discuss at: http://phpjs.org/functions/count/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //    input by: Waldo Malqui Silva
	  //    input by: merabi
	  // bugfixed by: Soren Hansen
	  // bugfixed by: Olivier Louvignes (http://mg-crea.com/)
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
	  //   returns 1: 6
	  //   example 2: count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
	  //   returns 2: 6

	  var key, cnt = 0;

	  if (mixed_var === null || typeof mixed_var === 'undefined') {
	    return 0;
	  } else if (mixed_var.constructor !== Array && mixed_var.constructor !== Object) {
	    return 1;
	  }

	  if (mode === 'COUNT_RECURSIVE') {
	    mode = 1;
	  }
	  if (mode != 1) {
	    mode = 0;
	  }

	  for (key in mixed_var) {
	    if (mixed_var.hasOwnProperty(key)) {
	      cnt++;
	      if (mode == 1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor ===
	        Object)) {
	        cnt += this.count(mixed_var[key], 1);
	      }
	    }
	  }

	  return cnt;
	}
	
	
	
	
	function sprintf() {
  //  discuss at: http://phpjs.org/functions/sprintf/
  // original by: Ash Searle (http://hexmen.com/blog/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (http://brett-zamir.me)
  //   example 1: sprintf("%01.2f", 123.1);
  //   returns 1: 123.10
  //   example 2: sprintf("[%10s]", 'monkey');
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey');
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345);
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E');
  //   returns 5: 'E00'

  var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
  var a = arguments;
  var i = 0;
  var format = a[i++];

  // pad()
  var pad = function(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
      .join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  // justify()
  var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      if (leftJustify || !zeroPad) {
        value = pad(value, minWidth, customPadChar, leftJustify);
      } else {
        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
      }
    }
    return value;
  };

  // formatBaseX()
  var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    prefix = prefix && number && {
      '2': '0b',
      '8': '0',
      '16': '0x'
    }[base] || '';
    value = prefix + pad(number.toString(base), precision || 0, '0', false);
    return justify(value, prefix, leftJustify, minWidth, zeroPad);
  };

  // formatString()
  var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
    if (precision != null) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
  };

  // doFormat()
  var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
    var number, prefix, method, textTransform, value;

    if (substring === '%%') {
      return '%';
    }

    // parse flags
    var leftJustify = false;
    var positivePrefix = '';
    var zeroPad = false;
    var prefixBaseX = false;
    var customPadChar = ' ';
    var flagsl = flags.length;
    for (var j = 0; flags && j < flagsl; j++) {
      switch (flags.charAt(j)) {
        case ' ':
          positivePrefix = ' ';
          break;
        case '+':
          positivePrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          customPadChar = flags.charAt(j + 1);
          break;
        case '0':
          zeroPad = true;
          customPadChar = '0';
          break;
        case '#':
          prefixBaseX = true;
          break;
      }
    }

    // parameters may be null, undefined, empty-string or real valued
    // we want to ignore null, undefined and empty-string values
    if (!minWidth) {
      minWidth = 0;
    } else if (minWidth === '*') {
      minWidth = +a[i++];
    } else if (minWidth.charAt(0) == '*') {
      minWidth = +a[minWidth.slice(1, -1)];
    } else {
      minWidth = +minWidth;
    }

    // Note: undocumented perl feature:
    if (minWidth < 0) {
      minWidth = -minWidth;
      leftJustify = true;
    }

    if (!isFinite(minWidth)) {
      throw new Error('sprintf: (minimum-)width must be finite');
    }

    if (!precision) {
      precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
    } else if (precision === '*') {
      precision = +a[i++];
    } else if (precision.charAt(0) == '*') {
      precision = +a[precision.slice(1, -1)];
    } else {
      precision = +precision;
    }

    // grab value using valueIndex if required?
    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

    switch (type) {
      case 's':
        return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
      case 'c':
        return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
      case 'b':
        return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'o':
        return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'x':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'X':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
          .toUpperCase();
      case 'u':
        return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'i':
      case 'd':
        number = +value || 0;
        number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
        prefix = number < 0 ? '-' : positivePrefix;
        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
      case 'e':
      case 'E':
      case 'f': // Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positivePrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
      default:
        return substring;
    }
  };

  return format.replace(regex, doFormat);
}
	
	
	
	
	
	function substr(str, start, len) {
		  //  discuss at: http://phpjs.org/functions/substr/
		  //     version: 909.322
		  // original by: Martijn Wieringa
		  // bugfixed by: T.Wild
		  // improved by: Onno Marsman
		  // improved by: Brett Zamir (http://brett-zamir.me)
		  //  revised by: Theriault
		  //        note: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
		  //   example 1: substr('abcdef', 0, -1);
		  //   returns 1: 'abcde'
		  //   example 2: substr(2, 0, -6);
		  //   returns 2: false
		  //   example 3: ini_set('unicode.semantics',  'on');
		  //   example 3: substr('a\uD801\uDC00', 0, -1);
		  //   returns 3: 'a'
		  //   example 4: ini_set('unicode.semantics',  'on');
		  //   example 4: substr('a\uD801\uDC00', 0, 2);
		  //   returns 4: 'a\uD801\uDC00'
		  //   example 5: ini_set('unicode.semantics',  'on');
		  //   example 5: substr('a\uD801\uDC00', -1, 1);
		  //   returns 5: '\uD801\uDC00'
		  //   example 6: ini_set('unicode.semantics',  'on');
		  //   example 6: substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
		  //   returns 6: '\uD801\uDC00z'
		  //   example 7: ini_set('unicode.semantics',  'on');
		  //   example 7: substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
		  //   returns 7: '\uD801\uDC00z'

		  var i = 0,
		    allBMP = true,
		    es = 0,
		    el = 0,
		    se = 0,
		    ret = '';
		  str += '';
		  var end = str.length;

		  // BEGIN REDUNDANT
		  this.php_js = this.php_js || {};
		  this.php_js.ini = this.php_js.ini || {};
		  // END REDUNDANT
		  switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
		    case 'on':
		      // Full-blown Unicode including non-Basic-Multilingual-Plane characters
		      // strlen()
		      for (i = 0; i < str.length; i++) {
		        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
		          allBMP = false;
		          break;
		        }
		      }

		      if (!allBMP) {
		        if (start < 0) {
		          for (i = end - 1, es = (start += end); i >= es; i--) {
		            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
		              start--;
		              es--;
		            }
		          }
		        } else {
		          var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		          while ((surrogatePairs.exec(str)) != null) {
		            var li = surrogatePairs.lastIndex;
		            if (li - 2 < start) {
		              start++;
		            } else {
		              break;
		            }
		          }
		        }

		        if (start >= end || start < 0) {
		          return false;
		        }
		        if (len < 0) {
		          for (i = end - 1, el = (end += len); i >= el; i--) {
		            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
		              end--;
		              el--;
		            }
		          }
		          if (start > end) {
		            return false;
		          }
		          return str.slice(start, end);
		        } else {
		          se = start + len;
		          for (i = start; i < se; i++) {
		            ret += str.charAt(i);
		            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
		              se++; // Go one further, since one of the "characters" is part of a surrogate pair
		            }
		          }
		          return ret;
		        }
		        break;
		      }
		      // Fall-through
		    case 'off':
		      // assumes there are no non-BMP characters;
		      //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
		    default:
		      if (start < 0) {
		        start += end;
		      }
		      end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
		      // PHP returns false if start does not fall within the string.
		      // PHP returns false if the calculated end comes before the calculated start.
		      // PHP returns an empty string if start and end are the same.
		      // Otherwise, PHP returns the portion of the string from start to end.
		      return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
		  }
		  return undefined; // Please Netbeans
		}
	
	
	
	
	
	function number_format(number, decimals, dec_point, thousands_sep) {
		  //  discuss at: http://phpjs.org/functions/number_format/
		  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  // improved by: davook
		  // improved by: Brett Zamir (http://brett-zamir.me)
		  // improved by: Brett Zamir (http://brett-zamir.me)
		  // improved by: Theriault
		  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  // bugfixed by: Michael White (http://getsprink.com)
		  // bugfixed by: Benjamin Lupton
		  // bugfixed by: Allan Jensen (http://www.winternet.no)
		  // bugfixed by: Howard Yeend
		  // bugfixed by: Diogo Resende
		  // bugfixed by: Rival
		  // bugfixed by: Brett Zamir (http://brett-zamir.me)
		  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		  //  revised by: Luke Smith (http://lucassmith.name)
		  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
		  //    input by: Jay Klehr
		  //    input by: Amir Habibi (http://www.residence-mixte.com/)
		  //    input by: Amirouche
		  //   example 1: number_format(1234.56);
		  //   returns 1: '1,235'
		  //   example 2: number_format(1234.56, 2, ',', ' ');
		  //   returns 2: '1 234,56'
		  //   example 3: number_format(1234.5678, 2, '.', '');
		  //   returns 3: '1234.57'
		  //   example 4: number_format(67, 2, ',', '.');
		  //   returns 4: '67,00'
		  //   example 5: number_format(1000);
		  //   returns 5: '1,000'
		  //   example 6: number_format(67.311, 2);
		  //   returns 6: '67.31'
		  //   example 7: number_format(1000.55, 1);
		  //   returns 7: '1,000.6'
		  //   example 8: number_format(67000, 5, ',', '.');
		  //   returns 8: '67.000,00000'
		  //   example 9: number_format(0.9, 0);
		  //   returns 9: '1'
		  //  example 10: number_format('1.20', 2);
		  //  returns 10: '1.20'
		  //  example 11: number_format('1.20', 4);
		  //  returns 11: '1.2000'
		  //  example 12: number_format('1.2000', 3);
		  //  returns 12: '1.200'
		  //  example 13: number_format('1 000,50', 2, '.', ' ');
		  //  returns 13: '100 050.00'
		  //  example 14: number_format(1e-8, 8, '.', '');
		  //  returns 14: '0.00000001'

		  number = (number + '')
		    .replace(/[^0-9+\-Ee.]/g, '');
		  var n = !isFinite(+number) ? 0 : +number,
		    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		    s = '',
		    toFixedFix = function(n, prec) {
		      var k = Math.pow(10, prec);
		      return '' + (Math.round(n * k) / k)
		        .toFixed(prec);
		    };
		  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
		  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
		    .split('.');
		  if (s[0].length > 3) {
		    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		  }
		  if ((s[1] || '')
		    .length < prec) {
		    s[1] = s[1] || '';
		    s[1] += new Array(prec - s[1].length + 1)
		      .join('0');
		  }
		  return s.join(dec);
		}	
	
	
	
	
	
	function strspn(str1, str2, start, lgth) {
		  //  discuss at: http://phpjs.org/functions/strspn/
		  // original by: Valentina De Rosa
		  // improved by: Brett Zamir (http://brett-zamir.me)
		  //   example 1: strspn('42 is the answer, what is the question ...', '1234567890');
		  //   returns 1: 2
		  //   example 2: strspn('foo', 'o', 1, 2);
		  //   returns 2: 2

		  var found;
		  var stri;
		  var strj;
		  var j = 0;
		  var i = 0;

		  start = start ? (start < 0 ? (str1.length + start) : start) : 0;
		  lgth = lgth ? ((lgth < 0) ? (str1.length + lgth - start) : lgth) : str1.length - start;
		  str1 = str1.substr(start, lgth);

		  for (i = 0; i < str1.length; i++) {
		    found = 0;
		    stri = str1.substring(i, i + 1);
		    for (j = 0; j <= str2.length; j++) {
		      strj = str2.substring(j, j + 1);
		      if (stri == strj) {
		        found = 1;
		        break;
		      }
		    }
		    if (found != 1) {
		      return i;
		    }
		  }

		  return i;
		}
	
	
	
	
	
	function strlen(string) {
		  //  discuss at: http://phpjs.org/functions/strlen/
		  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  // improved by: Sakimori
		  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		  //    input by: Kirk Strobeck
		  // bugfixed by: Onno Marsman
		  //  revised by: Brett Zamir (http://brett-zamir.me)
		  //        note: May look like overkill, but in order to be truly faithful to handling all Unicode
		  //        note: characters and to this function in PHP which does not count the number of bytes
		  //        note: but counts the number of characters, something like this is really necessary.
		  //   example 1: strlen('Kevin van Zonneveld');
		  //   returns 1: 19
		  //   example 2: ini_set('unicode.semantics', 'on');
		  //   example 2: strlen('A\ud87e\udc04Z');
		  //   returns 2: 3

		  var str = string + '';
		  var i = 0,
		    chr = '',
		    lgth = 0;

		  if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini[
		    'unicode.semantics'].local_value.toLowerCase() !== 'on') {
		    return string.length;
		  }

		  var getWholeChar = function(str, i) {
		    var code = str.charCodeAt(i);
		    var next = '',
		      prev = '';
		    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
		      if (str.length <= (i + 1)) {
		        throw 'High surrogate without following low surrogate';
		      }
		      next = str.charCodeAt(i + 1);
		      if (0xDC00 > next || next > 0xDFFF) {
		        throw 'High surrogate without following low surrogate';
		      }
		      return str.charAt(i) + str.charAt(i + 1);
		    } else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
		      if (i === 0) {
		        throw 'Low surrogate without preceding high surrogate';
		      }
		      prev = str.charCodeAt(i - 1);
		      if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
		        throw 'Low surrogate without preceding high surrogate';
		      }
		      return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
		    }
		    return str.charAt(i);
		  };

		  for (i = 0, lgth = 0; i < str.length; i++) {
		    if ((chr = getWholeChar(str, i)) === false) {
		      continue;
		    } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
		    lgth++;
		  }
		  return lgth;
		}
		
		
		
function sort(inputArr, sort_flags) {
  //  discuss at: http://phpjs.org/functions/sort/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //        note: SORT_STRING (as well as natsort and natcasesort) might also be
  //        note: integrated into all of these functions by adapting the code at
  //        note: http://sourcefrog.net/projects/natsort/natcompare.js
  //        note: This function deviates from PHP in returning a copy of the array instead
  //        note: of acting by reference and returning true; this was necessary because
  //        note: IE does not allow deleting and re-adding of properties without caching
  //        note: of property position; you can set the ini of "phpjs.strictForIn" to true to
  //        note: get the PHP behavior, but use this only if you are in an environment
  //        note: such as Firefox extensions where for-in iteration order is fixed and true
  //        note: property deletion is supported. Note that we intend to implement the PHP
  //        note: behavior by default if IE ever does allow it; only gives shallow copy since
  //        note: is by reference in PHP anyways
  //        note: Since JS objects' keys are always strings, and (the
  //        note: default) SORT_REGULAR flag distinguishes by key type,
  //        note: if the content is a numeric string, we treat the
  //        note: "original type" as numeric.
  //  depends on: i18n_loc_get_default
  //   example 1: var arr = ['Kevin', 'van', 'Zonneveld']
  //   example 1: sort(arr);
  //   example 1: $result = arr;
  //   returns 1: ['Kevin', 'Zonneveld', 'van']
  //   example 2: ini_set('phpjs.strictForIn', true);
  //   example 2: fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
  //   example 2: sort(fruits);
  //   example 2: $result = fruits;
  //   returns 2: {0: 'apple', 1: 'banana', 2: 'lemon', 3: 'orange'}

  var valArr = [],
    keyArr = [],
    k = '',
    i = 0,
    sorter = false,
    that = this,
    strictForIn = false,
    populateArr = [];

  switch (sort_flags) {
    case 'SORT_STRING':
      // compare items as strings
      sorter = function(a, b) {
        return that.strnatcmp(a, b);
      };
      break;
    case 'SORT_LOCALE_STRING':
      // compare items as strings, original by the current locale (set with  i18n_loc_set_default() as of PHP6)
      var loc = this.i18n_loc_get_default();
      sorter = this.php_js.i18nLocales[loc].sorting;
      break;
    case 'SORT_NUMERIC':
      // compare items numerically
      sorter = function(a, b) {
        return (a - b);
      };
      break;
    case 'SORT_REGULAR':
      // compare items normally (don't change types)
    default:
      sorter = function(a, b) {
        var aFloat = parseFloat(a),
          bFloat = parseFloat(b),
          aNumeric = aFloat + '' === a,
          bNumeric = bFloat + '' === b;
        if (aNumeric && bNumeric) {
          return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
        } else if (aNumeric && !bNumeric) {
          return 1;
        } else if (!aNumeric && bNumeric) {
          return -1;
        }
        return a > b ? 1 : a < b ? -1 : 0;
      };
      break;
  }

  // BEGIN REDUNDANT
  try {
    this.php_js = this.php_js || {};
  } catch (e) {
    this.php_js = {};
  }

  this.php_js.ini = this.php_js.ini || {};
  // END REDUNDANT
  strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js
    .ini['phpjs.strictForIn'].local_value !== 'off';
  populateArr = strictForIn ? inputArr : populateArr;

  for (k in inputArr) { // Get key and value arrays
    if (inputArr.hasOwnProperty(k)) {
      valArr.push(inputArr[k]);
      if (strictForIn) {
        delete inputArr[k];
      }
    }
  }

  valArr.sort(sorter);

  for (i = 0; i < valArr.length; i++) { // Repopulate the old array
    populateArr[i] = valArr[i];
  }
  return strictForIn || populateArr;
}



function strcmp(str1, str2) {
  //  discuss at: http://phpjs.org/functions/strcmp/
  // original by: Waldo Malqui Silva
  //    input by: Steve Hilder
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: gorthaur
  //   example 1: strcmp( 'waldo', 'owald' );
  //   returns 1: 1
  //   example 2: strcmp( 'owald', 'waldo' );
  //   returns 2: -1

  return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
}


function strnatcmp(f_string1, f_string2, f_version) {
  //  discuss at: http://phpjs.org/functions/strnatcmp/
  // original by: Martijn Wieringa
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // bugfixed by: Onno Marsman
  //  depends on: strcmp
  //        note: Added f_version argument against code guidelines, because it's so neat
  //   example 1: strnatcmp('Price 12.9', 'Price 12.15');
  //   returns 1: 1
  //   example 2: strnatcmp('Price 12.09', 'Price 12.15');
  //   returns 2: -1
  //   example 3: strnatcmp('Price 12.90', 'Price 12.15');
  //   returns 3: 1
  //   example 4: strnatcmp('Version 12.9', 'Version 12.15', true);
  //   returns 4: -6
  //   example 5: strnatcmp('Version 12.15', 'Version 12.9', true);
  //   returns 5: 6

  var i = 0;

  if (f_version == undefined) {
    f_version = false;
  }

  var __strnatcmp_split = function(f_string) {
    var result = [];
    var buffer = '';
    var chr = '';
    var i = 0,
      f_stringl = 0;

    var text = true;

    f_stringl = f_string.length;
    for (i = 0; i < f_stringl; i++) {
      chr = f_string.substring(i, i + 1);
      if (chr.match(/\d/)) {
        if (text) {
          if (buffer.length > 0) {
            result[result.length] = buffer;
            buffer = '';
          }

          text = false;
        }
        buffer += chr;
      } else if ((text == false) && (chr === '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i +
          2)
        .match(/\d/))) {
        result[result.length] = buffer;
        buffer = '';
      } else {
        if (text == false) {
          if (buffer.length > 0) {
            result[result.length] = parseInt(buffer, 10);
            buffer = '';
          }
          text = true;
        }
        buffer += chr;
      }
    }

    if (buffer.length > 0) {
      if (text) {
        result[result.length] = buffer;
      } else {
        result[result.length] = parseInt(buffer, 10);
      }
    }

    return result;
  };

  var array1 = __strnatcmp_split(f_string1 + '');
  var array2 = __strnatcmp_split(f_string2 + '');

  var len = array1.length;
  var text = true;

  var result = -1;
  var r = 0;

  if (len > array2.length) {
    len = array2.length;
    result = 1;
  }

  for (i = 0; i < len; i++) {
    if (isNaN(array1[i])) {
      if (isNaN(array2[i])) {
        text = true;

        if ((r = this.strcmp(array1[i], array2[i])) != 0) {
          return r;
        }
      } else if (text) {
        return 1;
      } else {
        return -1;
      }
    } else if (isNaN(array2[i])) {
      if (text) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (text || f_version) {
        if ((r = (array1[i] - array2[i])) != 0) {
          return r;
        }
      } else {
        if ((r = this.strcmp(array1[i].toString(), array2[i].toString())) != 0) {
          return r;
        }
      }

      text = false;
    }
  }

  return result;
}


function natsort(inputArr) {
  //  discuss at: http://phpjs.org/functions/natsort/
  // original by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault
  //        note: This function deviates from PHP in returning a copy of the array instead
  //        note: of acting by reference and returning true; this was necessary because
  //        note: IE does not allow deleting and re-adding of properties without caching
  //        note: of property position; you can set the ini of "phpjs.strictForIn" to true to
  //        note: get the PHP behavior, but use this only if you are in an environment
  //        note: such as Firefox extensions where for-in iteration order is fixed and true
  //        note: property deletion is supported. Note that we intend to implement the PHP
  //        note: behavior by default if IE ever does allow it; only gives shallow copy since
  //        note: is by reference in PHP anyways
  //  depends on: strnatcmp
  //   example 1: $array1 = {a:"img12.png", b:"img10.png", c:"img2.png", d:"img1.png"};
  //   example 1: $array1 = natsort($array1);
  //   returns 1: {d: 'img1.png', c: 'img2.png', b: 'img10.png', a: 'img12.png'}

  var valArr = [],
    k, i, ret, that = this,
    strictForIn = false,
    populateArr = {};

  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.ini = this.php_js.ini || {};
  // END REDUNDANT
  strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js
    .ini['phpjs.strictForIn'].local_value !== 'off';
  populateArr = strictForIn ? inputArr : populateArr;

  // Get key and value arrays
  for (k in inputArr) {
    if (inputArr.hasOwnProperty(k)) {
      valArr.push([k, inputArr[k]]);
      if (strictForIn) {
        delete inputArr[k];
      }
    }
  }
  valArr.sort(function(a, b) {
    return that.strnatcmp(a[1], b[1]);
  });

  // Repopulate the old array
  for (i = 0; i < valArr.length; i++) {
    populateArr[valArr[i][0]] = valArr[i][1];
  }

  return strictForIn || populateArr;
}



function in_array(needle, haystack, argStrict) {
	  //  discuss at: http://phpjs.org/functions/in_array/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: vlado houba
	  // improved by: Jonas Sciangula Street (Joni2Back)
	  //    input by: Billy
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
	  //   returns 1: true
	  //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
	  //   returns 2: false
	  //   example 3: in_array(1, ['1', '2', '3']);
	  //   example 3: in_array(1, ['1', '2', '3'], false);
	  //   returns 3: true
	  //   returns 3: true
	  //   example 4: in_array(1, ['1', '2', '3'], true);
	  //   returns 4: false

	  var key = '',
	    strict = !! argStrict;

	  //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
	  //in just one for, in order to improve the performance 
	  //deciding wich type of comparation will do before walk array
	  if (strict) {
	    for (key in haystack) {
	      if (haystack[key] === needle) {
	        return true;
	      }
	    }
	  } else {
	    for (key in haystack) {
	      if (haystack[key] == needle) {
	        return true;
	      }
	    }
	  }

	  return false;
	}




function strip_tags(input, allowed) {
	
		if(empty(input)) return input;
	  //  discuss at: http://phpjs.org/functions/strip_tags/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: Luke Godfrey
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //    input by: Pul
	  //    input by: Alex
	  //    input by: Marc Palau
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: Bobby Drake
	  //    input by: Evertjan Garretsen
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Eric Nagel
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Tomasz Wesolowski
	  //  revised by: Rafał Kukawski (http://blog.kukawski.pl/)
	  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
	  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
	  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
	  //   returns 2: '<p>Kevin van Zonneveld</p>'
	  //   example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
	  //   returns 3: "<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>"
	  //   example 4: strip_tags('1 < 5 5 > 1');
	  //   returns 4: '1 < 5 5 > 1'
	  //   example 5: strip_tags('1 <br/> 1');
	  //   returns 5: '1  1'
	  //   example 6: strip_tags('1 <br/> 1', '<br>');
	  //   returns 6: '1 <br/> 1'
	  //   example 7: strip_tags('1 <br/> 1', '<br><br/>');
	  //   returns 7: '1 <br/> 1'

	  allowed = (((allowed || '') + '')
	    .toLowerCase()
	    .match(/<[a-z][a-z0-9]*>/g) || [])
	    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
	    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	  return input.replace(commentsAndPhpTags, '')
	    .replace(tags, function($0, $1) {
	      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	    });
	}




function date(format, timestamp) {
	  //  discuss at: http://phpjs.org/functions/date/
	  // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
	  // original by: gettimeofday
	  //    parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: MeEtc (http://yass.meetcweb.com)
	  // improved by: Brad Touesnard
	  // improved by: Tim Wiel
	  // improved by: Bryan Elliott
	  // improved by: David Randall
	  // improved by: Theriault
	  // improved by: Theriault
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  // improved by: Theriault
	  // improved by: Thomas Beaucourt (http://www.webapp.fr)
	  // improved by: JT
	  // improved by: Theriault
	  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
	  // improved by: Theriault
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: majak
	  //    input by: Alex
	  //    input by: Martin
	  //    input by: Alex Wilson
	  //    input by: Haravikk
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: majak
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: omid (http://phpjs.org/functions/380:380#comment_137122)
	  // bugfixed by: Chris (http://www.devotis.nl/)
	  //        note: Uses global: php_js to store the default timezone
	  //        note: Although the function potentially allows timezone info (see notes), it currently does not set
	  //        note: per a timezone specified by date_default_timezone_set(). Implementers might use
	  //        note: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
	  //        note: in order to adjust the dates in this function (or our other date functions!) accordingly
	  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
	  //   returns 1: '09:09:40 m is month'
	  //   example 2: date('F j, Y, g:i a', 1062462400);
	  //   returns 2: 'September 2, 2003, 2:26 am'
	  //   example 3: date('Y W o', 1062462400);
	  //   returns 3: '2003 36 2003'
	  //   example 4: x = date('Y m d', (new Date()).getTime()/1000);
	  //   example 4: (x+'').length == 10 // 2009 01 09
	  //   returns 4: true
	  //   example 5: date('W', 1104534000);
	  //   returns 5: '53'
	  //   example 6: date('B t', 1104534000);
	  //   returns 6: '999 31'
	  //   example 7: date('W U', 1293750000.82); // 2010-12-31
	  //   returns 7: '52 1293750000'
	  //   example 8: date('W', 1293836400); // 2011-01-01
	  //   returns 8: '52'
	  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
	  //   returns 9: '52 2011-01-02'

	  var that = this;
	  var jsdate, f;
	  // Keep this here (works, but for code commented-out below for file size reasons)
	  // var tal= [];
	  var txt_words = [
	    'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
	    'January', 'February', 'March', 'April', 'May', 'June',
	    'July', 'August', 'September', 'October', 'November', 'December'
	  ];
	  // trailing backslash -> (dropped)
	  // a backslash followed by any character (including backslash) -> the character
	  // empty string -> empty string
	  var formatChr = /\\?(.?)/gi;
	  var formatChrCb = function(t, s) {
	    return f[t] ? f[t]() : s;
	  };
	  var _pad = function(n, c) {
	    n = String(n);
	    while (n.length < c) {
	      n = '0' + n;
	    }
	    return n;
	  };
	  f = {
	    // Day
	    d: function() { // Day of month w/leading 0; 01..31
	      return _pad(f.j(), 2);
	    },
	    D: function() { // Shorthand day name; Mon...Sun
	      return f.l()
	        .slice(0, 3);
	    },
	    j: function() { // Day of month; 1..31
	      return jsdate.getDate();
	    },
	    l: function() { // Full day name; Monday...Sunday
	      return txt_words[f.w()] + 'day';
	    },
	    N: function() { // ISO-8601 day of week; 1[Mon]..7[Sun]
	      return f.w() || 7;
	    },
	    S: function() { // Ordinal suffix for day of month; st, nd, rd, th
	      var j = f.j();
	      var i = j % 10;
	      if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
	        i = 0;
	      }
	      return ['st', 'nd', 'rd'][i - 1] || 'th';
	    },
	    w: function() { // Day of week; 0[Sun]..6[Sat]
	      return jsdate.getDay();
	    },
	    z: function() { // Day of year; 0..365
	      var a = new Date(f.Y(), f.n() - 1, f.j());
	      var b = new Date(f.Y(), 0, 1);
	      return Math.round((a - b) / 864e5);
	    },

	    // Week
	    W: function() { // ISO-8601 week number
	      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
	      var b = new Date(a.getFullYear(), 0, 4);
	      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
	    },

	    // Month
	    F: function() { // Full month name; January...December
	      return txt_words[6 + f.n()];
	    },
	    m: function() { // Month w/leading 0; 01...12
	      return _pad(f.n(), 2);
	    },
	    M: function() { // Shorthand month name; Jan...Dec
	      return f.F()
	        .slice(0, 3);
	    },
	    n: function() { // Month; 1...12
	      return jsdate.getMonth() + 1;
	    },
	    t: function() { // Days in month; 28...31
	      return (new Date(f.Y(), f.n(), 0))
	        .getDate();
	    },

	    // Year
	    L: function() { // Is leap year?; 0 or 1
	      var j = f.Y();
	      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
	    },
	    o: function() { // ISO-8601 year
	      var n = f.n();
	      var W = f.W();
	      var Y = f.Y();
	      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
	    },
	    Y: function() { // Full year; e.g. 1980...2010
	      return jsdate.getFullYear();
	    },
	    y: function() { // Last two digits of year; 00...99
	      return f.Y()
	        .toString()
	        .slice(-2);
	    },

	    // Time
	    a: function() { // am or pm
	      return jsdate.getHours() > 11 ? 'pm' : 'am';
	    },
	    A: function() { // AM or PM
	      return f.a()
	        .toUpperCase();
	    },
	    B: function() { // Swatch Internet time; 000..999
	      var H = jsdate.getUTCHours() * 36e2;
	      // Hours
	      var i = jsdate.getUTCMinutes() * 60;
	      // Minutes
	      var s = jsdate.getUTCSeconds(); // Seconds
	      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
	    },
	    g: function() { // 12-Hours; 1..12
	      return f.G() % 12 || 12;
	    },
	    G: function() { // 24-Hours; 0..23
	      return jsdate.getHours();
	    },
	    h: function() { // 12-Hours w/leading 0; 01..12
	      return _pad(f.g(), 2);
	    },
	    H: function() { // 24-Hours w/leading 0; 00..23
	      return _pad(f.G(), 2);
	    },
	    i: function() { // Minutes w/leading 0; 00..59
	      return _pad(jsdate.getMinutes(), 2);
	    },
	    s: function() { // Seconds w/leading 0; 00..59
	      return _pad(jsdate.getSeconds(), 2);
	    },
	    u: function() { // Microseconds; 000000-999000
	      return _pad(jsdate.getMilliseconds() * 1000, 6);
	    },

	    // Timezone
	    e: function() { // Timezone identifier; e.g. Atlantic/Azores, ...
	      // The following works, but requires inclusion of the very large
	      // timezone_abbreviations_list() function.
	      /*              return that.date_default_timezone_get();
	       */
	      throw 'Not supported (see source code of date() for timezone on how to add support)';
	    },
	    I: function() { // DST observed?; 0 or 1
	      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
	      // If they are not equal, then DST is observed.
	      var a = new Date(f.Y(), 0);
	      // Jan 1
	      var c = Date.UTC(f.Y(), 0);
	      // Jan 1 UTC
	      var b = new Date(f.Y(), 6);
	      // Jul 1
	      var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
	      return ((a - c) !== (b - d)) ? 1 : 0;
	    },
	    O: function() { // Difference to GMT in hour format; e.g. +0200
	      var tzo = jsdate.getTimezoneOffset();
	      var a = Math.abs(tzo);
	      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
	    },
	    P: function() { // Difference to GMT w/colon; e.g. +02:00
	      var O = f.O();
	      return (O.substr(0, 3) + ':' + O.substr(3, 2));
	    },
	    T: function() { // Timezone abbreviation; e.g. EST, MDT, ...
	      // The following works, but requires inclusion of the very
	      // large timezone_abbreviations_list() function.
	      /*              var abbr, i, os, _default;
	      if (!tal.length) {
	        tal = that.timezone_abbreviations_list();
	      }
	      if (that.php_js && that.php_js.default_timezone) {
	        _default = that.php_js.default_timezone;
	        for (abbr in tal) {
	          for (i = 0; i < tal[abbr].length; i++) {
	            if (tal[abbr][i].timezone_id === _default) {
	              return abbr.toUpperCase();
	            }
	          }
	        }
	      }
	      for (abbr in tal) {
	        for (i = 0; i < tal[abbr].length; i++) {
	          os = -jsdate.getTimezoneOffset() * 60;
	          if (tal[abbr][i].offset === os) {
	            return abbr.toUpperCase();
	          }
	        }
	      }
	      */
	      return 'UTC';
	    },
	    Z: function() { // Timezone offset in seconds (-43200...50400)
	      return -jsdate.getTimezoneOffset() * 60;
	    },

	    // Full Date/Time
	    c: function() { // ISO-8601 date.
	      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
	    },
	    r: function() { // RFC 2822
	      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
	    },
	    U: function() { // Seconds since UNIX epoch
	      return jsdate / 1000 | 0;
	    }
	  };
	  this.date = function(format, timestamp) {
	    that = this;
	    jsdate = (timestamp === undefined ? new Date() : // Not provided
	      (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
	      new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
	    );
	    return format.replace(formatChr, formatChrCb);
	  };
	  return this.date(format, timestamp);
	}



function array_keys(input, search_value, argStrict) {
	  //  discuss at: http://phpjs.org/functions/array_keys/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: P
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  // improved by: jd
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
	  //   returns 1: {0: 'firstname', 1: 'surname'}

	  var search = typeof search_value !== 'undefined',
	    tmp_arr = [],
	    strict = !! argStrict,
	    include = true,
	    key = '';

	  if (input && typeof input === 'object' && input.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
	    return input.keys(search_value, argStrict);
	  }

	  for (key in input) {
	    if (input.hasOwnProperty(key)) {
	      include = true;
	      if (search) {
	        if (strict && input[key] !== search_value) {
	          include = false;
	        } else if (input[key] != search_value) {
	          include = false;
	        }
	      }

	      if (include) {
	        tmp_arr[tmp_arr.length] = key;
	      }
	    }
	  }

	  return tmp_arr;
	}


function array_key_data(input)
{
	var inputTMP		=	[];
	
	for(var lineInput in input)
		{
		
			inputTMP[inputTMP.length]	=	lineInput;
		}
	
	return inputTMP;
}


function mktime() {
	  //  discuss at: http://phpjs.org/functions/mktime/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: baris ozdil
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: FGFEmperor
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  //    input by: gabriel paderni
	  //    input by: Yannoo
	  //    input by: jakes
	  //    input by: 3D-GRAF
	  //    input by: Chris
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // bugfixed by: Marc Palau
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //  revised by: Theriault
	  //        note: The return values of the following examples are
	  //        note: received only if your system's timezone is UTC.
	  //   example 1: mktime(14, 10, 2, 2, 1, 2008);
	  //   returns 1: 1201875002
	  //   example 2: mktime(0, 0, 0, 0, 1, 2008);
	  //   returns 2: 1196467200
	  //   example 3: make = mktime();
	  //   example 3: td = new Date();
	  //   example 3: real = Math.floor(td.getTime() / 1000);
	  //   example 3: diff = (real - make);
	  //   example 3: diff < 5
	  //   returns 3: true
	  //   example 4: mktime(0, 0, 0, 13, 1, 1997)
	  //   returns 4: 883612800
	  //   example 5: mktime(0, 0, 0, 1, 1, 1998)
	  //   returns 5: 883612800
	  //   example 6: mktime(0, 0, 0, 1, 1, 98)
	  //   returns 6: 883612800
	  //   example 7: mktime(23, 59, 59, 13, 0, 2010)
	  //   returns 7: 1293839999
	  //   example 8: mktime(0, 0, -1, 1, 1, 1970)
	  //   returns 8: -1

	  var d = new Date(),
	    r = arguments,
	    i = 0,
	    e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];

	  for (i = 0; i < e.length; i++) {
	    if (typeof r[i] === 'undefined') {
	      r[i] = d['get' + e[i]]();
	      r[i] += (i === 3); // +1 to fix JS months.
	    } else {
	      r[i] = parseInt(r[i], 10);
	      if (isNaN(r[i])) {
	        return false;
	      }
	    }
	  }

	  // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
	  r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);

	  // Set year, month (-1 to fix JS months), and date.
	  // !This must come before the call to setHours!
	  d.setFullYear(r[5], r[3] - 1, r[4]);

	  // Set hours, minutes, and seconds.
	  d.setHours(r[0], r[1], r[2]);

	  // Divide milliseconds by 1000 to return seconds and drop decimal.
	  // Add 1 second if negative or it'll be off from PHP by 1 second.
	  return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
	}


function array_data(input)
{
	var inputTMP		=	[];
	
	for(var lineInput in input)
		{
		
			inputTMP[input[lineInput]]	=	lineInput;
		}
	
	return inputTMP;
}








function utf8_encode(argString) {
	  //  discuss at: http://phpjs.org/functions/utf8_encode/
	  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: sowberry
	  // improved by: Jack
	  // improved by: Yves Sucaet
	  // improved by: kirilloid
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Onno Marsman
	  // bugfixed by: Ulrich
	  // bugfixed by: Rafal Kukawski
	  // bugfixed by: kirilloid
	  //   example 1: utf8_encode('Kevin van Zonneveld');
	  //   returns 1: 'Kevin van Zonneveld'

	  if (argString === null || typeof argString === 'undefined') {
	    return '';
	  }

	  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	  var utftext = '',
	    start, end, stringl = 0;

	  start = end = 0;
	  stringl = string.length;
	  for (var n = 0; n < stringl; n++) {
	    var c1 = string.charCodeAt(n);
	    var enc = null;

	    if (c1 < 128) {
	      end++;
	    } else if (c1 > 127 && c1 < 2048) {
	      enc = String.fromCharCode(
	        (c1 >> 6) | 192, (c1 & 63) | 128
	      );
	    } else if ((c1 & 0xF800) != 0xD800) {
	      enc = String.fromCharCode(
	        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
	      );
	    } else { // surrogate pairs
	      if ((c1 & 0xFC00) != 0xD800) {
	        throw new RangeError('Unmatched trail surrogate at ' + n);
	      }
	      var c2 = string.charCodeAt(++n);
	      if ((c2 & 0xFC00) != 0xDC00) {
	        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
	      }
	      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
	      enc = String.fromCharCode(
	        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
	      );
	    }
	    if (enc !== null) {
	      if (end > start) {
	        utftext += string.slice(start, end);
	      }
	      utftext += enc;
	      start = end = n + 1;
	    }
	  }

	  if (end > start) {
	    utftext += string.slice(start, stringl);
	  }

	  return utftext;
	}




function md5(str) {
	  //  discuss at: http://phpjs.org/functions/md5/
	  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
	  // improved by: Michael White (http://getsprink.com)
	  // improved by: Jack
	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //  depends on: utf8_encode
	  //   example 1: md5('Kevin van Zonneveld');
	  //   returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

	  var xl;

	  var rotateLeft = function(lValue, iShiftBits) {
	    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	  };

	  var addUnsigned = function(lX, lY) {
	    var lX4, lY4, lX8, lY8, lResult;
	    lX8 = (lX & 0x80000000);
	    lY8 = (lY & 0x80000000);
	    lX4 = (lX & 0x40000000);
	    lY4 = (lY & 0x40000000);
	    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	    if (lX4 & lY4) {
	      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	    }
	    if (lX4 | lY4) {
	      if (lResult & 0x40000000) {
	        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
	      } else {
	        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	      }
	    } else {
	      return (lResult ^ lX8 ^ lY8);
	    }
	  };

	  var _F = function(x, y, z) {
	    return (x & y) | ((~x) & z);
	  };
	  var _G = function(x, y, z) {
	    return (x & z) | (y & (~z));
	  };
	  var _H = function(x, y, z) {
	    return (x ^ y ^ z);
	  };
	  var _I = function(x, y, z) {
	    return (y ^ (x | (~z)));
	  };

	  var _FF = function(a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	  };

	  var _GG = function(a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	  };

	  var _HH = function(a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	  };

	  var _II = function(a, b, c, d, x, s, ac) {
	    a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
	    return addUnsigned(rotateLeft(a, s), b);
	  };

	  var convertToWordArray = function(str) {
	    var lWordCount;
	    var lMessageLength = str.length;
	    var lNumberOfWords_temp1 = lMessageLength + 8;
	    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
	    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	    var lWordArray = new Array(lNumberOfWords - 1);
	    var lBytePosition = 0;
	    var lByteCount = 0;
	    while (lByteCount < lMessageLength) {
	      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	      lBytePosition = (lByteCount % 4) * 8;
	      lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
	      lByteCount++;
	    }
	    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	    lBytePosition = (lByteCount % 4) * 8;
	    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	    return lWordArray;
	  };

	  var wordToHex = function(lValue) {
	    var wordToHexValue = '',
	      wordToHexValue_temp = '',
	      lByte, lCount;
	    for (lCount = 0; lCount <= 3; lCount++) {
	      lByte = (lValue >>> (lCount * 8)) & 255;
	      wordToHexValue_temp = '0' + lByte.toString(16);
	      wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
	    }
	    return wordToHexValue;
	  };

	  var x = [],
	    k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
	    S12 = 12,
	    S13 = 17,
	    S14 = 22,
	    S21 = 5,
	    S22 = 9,
	    S23 = 14,
	    S24 = 20,
	    S31 = 4,
	    S32 = 11,
	    S33 = 16,
	    S34 = 23,
	    S41 = 6,
	    S42 = 10,
	    S43 = 15,
	    S44 = 21;

	  str = this.utf8_encode(str);
	  x = convertToWordArray(str);
	  a = 0x67452301;
	  b = 0xEFCDAB89;
	  c = 0x98BADCFE;
	  d = 0x10325476;

	  xl = x.length;
	  for (k = 0; k < xl; k += 16) {
	    AA = a;
	    BB = b;
	    CC = c;
	    DD = d;
	    a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
	    d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
	    c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
	    b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
	    a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
	    d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
	    c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
	    b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
	    a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
	    d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
	    c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
	    b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
	    a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
	    d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
	    c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
	    b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
	    a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
	    d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
	    c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
	    b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
	    a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
	    d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
	    c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
	    b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
	    a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
	    d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
	    c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
	    b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
	    a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
	    d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
	    c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
	    b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
	    a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
	    d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
	    c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
	    b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
	    a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
	    d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
	    c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
	    b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
	    a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
	    d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
	    c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
	    b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
	    a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
	    d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
	    c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
	    b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
	    a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
	    d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
	    c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
	    b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
	    a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
	    d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
	    c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
	    b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
	    a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
	    d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
	    c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
	    b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
	    a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
	    d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
	    c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
	    b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
	    a = addUnsigned(a, AA);
	    b = addUnsigned(b, BB);
	    c = addUnsigned(c, CC);
	    d = addUnsigned(d, DD);
	  }

	  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

	  return temp.toLowerCase();
	}


function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}



function dirname(path) {
	  //  discuss at: http://phpjs.org/functions/dirname/
	  //        http: //kevin.vanzonneveld.net
	  // original by: Ozh
	  // improved by: XoraX (http://www.xorax.info)
	  //   example 1: dirname('/etc/passwd');
	  //   returns 1: '/etc'
	  //   example 2: dirname('c:/Temp/x');
	  //   returns 2: 'c:/Temp'
	  //   example 3: dirname('/dir/test/');
	  //   returns 3: '/dir'

	  return path.replace(/\\/g, '/')
	    .replace(/\/[^\/]*\/?$/, '');
	}