/**
 * Probably the best general purpose trim algorithm which
 * handles even exceptionally long strings pretty fast.
 *
 * See http://blog.stevenlevithan.com/archives/faster-trim-javascript
 * for more details about different approaches.
 */
String.prototype.trim = function() {
  var str = this.replace(/^\s\s*/, ''),
      ws  = /\s/,
      i   = str.length;

  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
};