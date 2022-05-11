var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import require$$0 from "react";
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ (function () {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {}
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
})();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return (
    (((((((length2 << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^
      charat(value, 2)) <<
      2) ^
    charat(value, 3)
  );
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return {
    value,
    root,
    parent,
    type,
    props,
    children,
    line,
    column,
    length: length2,
    return: "",
  };
}
function copy(root, props) {
  return assign(
    node("", null, null, "", null, null, 0),
    root,
    { length: -root.length },
    props
  );
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if ((column--, character === 10)) (column = 1), line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if ((column++, character === 10)) (column = 1), line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
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
function alloc(value) {
  return (
    (line = column = 1),
    (length = strlen((characters = value))),
    (position = 0),
    []
  );
}
function dealloc(value) {
  return (characters = ""), value;
}
function delimit(type) {
  return trim(
    slice(
      position - 1,
      delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)
    )
  );
}
function whitespace(type) {
  while ((character = peek()))
    if (character < 33) next();
    else break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (
      character < 48 ||
      character > 102 ||
      (character > 57 && character < 65) ||
      (character > 70 && character < 97)
    )
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39) delimiter(character);
        break;
      case 40:
        if (type === 41) delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
  return (
    "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next())
  );
}
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(
    parse("", null, null, null, [""], (value = alloc(value)), 0, [0], value)
  );
}
function parse(
  value,
  root,
  parent,
  rule,
  rules,
  rulesets,
  pseudo,
  points,
  declarations
) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (((previous = character2), (character2 = next()))) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (
            indexof(
              (characters2 += replace(delimit(character2), "&", "&\f")),
              "&\f"
            ) != -1
          )
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(
              comment(commenter(next(), caret()), root, parent),
              declarations
            );
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(
                property > 32
                  ? declaration(characters2 + ";", rule, parent, length2 - 1)
                  : declaration(
                      replace(characters2, " ", "") + ";",
                      rule,
                      parent,
                      length2 - 2
                    ),
                declarations
              );
            break;
          case 59:
            characters2 += ";";
          default:
            append(
              (reference = ruleset(
                characters2,
                root,
                parent,
                index,
                offset,
                rules,
                points,
                type,
                (props = []),
                (children = []),
                length2
              )),
              rulesets
            );
            if (character2 === 123)
              if (offset === 0)
                parse(
                  characters2,
                  root,
                  reference,
                  reference,
                  props,
                  rulesets,
                  length2,
                  points,
                  children
                );
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(
                      value,
                      reference,
                      reference,
                      rule &&
                        append(
                          ruleset(
                            value,
                            reference,
                            reference,
                            0,
                            0,
                            rules,
                            points,
                            type,
                            rules,
                            (props = []),
                            length2
                          ),
                          children
                        ),
                      rules,
                      children,
                      length2,
                      points,
                      rule ? props : children
                    );
                    break;
                  default:
                    parse(
                      characters2,
                      reference,
                      reference,
                      reference,
                      [""],
                      children,
                      0,
                      points,
                      children
                    );
                }
        }
        (index = offset = property = 0),
          (variable = ampersand = 1),
          (type = characters2 = ""),
          (length2 = pseudo);
        break;
      case 58:
        (length2 = 1 + strlen(characters2)), (property = previous);
      default:
        if (variable < 1) {
          if (character2 == 123) --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (((characters2 += from(character2)), character2 * variable)) {
          case 38:
            ampersand = offset > 0 ? 1 : ((characters2 += "\f"), -1);
            break;
          case 44:
            (points[index++] = (strlen(characters2) - 1) * ampersand),
              (ampersand = 1);
            break;
          case 64:
            if (peek() === 45) characters2 += delimit(next());
            (atrule = peek()),
              (offset = length2 =
                strlen((type = characters2 += identifier(caret())))),
              character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2) variable = 0;
        }
    }
  return rulesets;
}
function ruleset(
  value,
  root,
  parent,
  index,
  offset,
  rules,
  points,
  type,
  props,
  children,
  length2
) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (
      var x = 0,
        y = substr(value, post + 1, (post = abs((j = points[i])))),
        z = value;
      x < size;
      ++x
    )
      if ((z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))))
        props[k2++] = z;
  return node(
    value,
    root,
    parent,
    offset === 0 ? RULESET : type,
    props,
    children,
    length2
  );
}
function comment(value, root, parent) {
  return node(
    value,
    root,
    parent,
    COMMENT,
    from(char()),
    substr(value, 2, -2),
    0
  );
}
function declaration(value, root, parent, length2) {
  return node(
    value,
    root,
    parent,
    DECLARATION,
    substr(value, 0, length2),
    substr(value, length2 + 1, -1),
    length2
  );
}
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
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
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return (
        WEBKIT +
        value +
        replace(
          value,
          /(\w+).+(:[^]+)/,
          WEBKIT + "box-$1$2" + MS + "flex-$1$2"
        ) +
        value
      );
    case 5443:
      return (
        WEBKIT +
        value +
        MS +
        "flex-item-" +
        replace(value, /flex-|-self/, "") +
        value
      );
    case 4675:
      return (
        WEBKIT +
        value +
        MS +
        "flex-line-pack" +
        replace(value, /align-content|flex-|-self/, "") +
        value
      );
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return (
        WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value
      );
    case 6060:
      return (
        WEBKIT +
        "box-" +
        replace(value, "-grow", "") +
        WEBKIT +
        value +
        MS +
        replace(value, "grow", "positive") +
        value
      );
    case 4554:
      return (
        WEBKIT +
        replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") +
        value
      );
    case 6187:
      return (
        replace(
          replace(
            replace(value, /(zoom-|grab)/, WEBKIT + "$1"),
            /(image-set)/,
            WEBKIT + "$1"
          ),
          value,
          ""
        ) + value
      );
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return (
        replace(
          replace(
            value,
            /(.+:)(flex-)?(.*)/,
            WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"
          ),
          /s.+-b[^;]+/,
          "justify"
        ) +
        WEBKIT +
        value +
        value
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          case 102:
            return (
              replace(
                value,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  WEBKIT +
                  "$2-$3$1" +
                  MOZ +
                  (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")
              ) + value
            );
          case 115:
            return ~indexof(value, "stretch")
              ? prefix(replace(value, "stretch", "fill-available"), length2) +
                  value
              : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (
        charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))
      ) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return (
            replace(
              value,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                WEBKIT +
                (charat(value, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                WEBKIT +
                "$2$3$1" +
                MS +
                "$2box$3"
            ) + value
          );
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, "tb") +
            value
          );
        case 108:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") +
            value
          );
        case 45:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, "lr") +
            value
          );
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return (element.return = element.return || element.value);
    case COMMENT:
      return "";
    case KEYFRAMES:
      return (element.return =
        element.value + "{" + serialize(element.children, callback) + "}");
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen((children = serialize(element.children, callback)))
    ? (element.return = element.value + "{" + children + "}")
    : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function (element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function (element) {
    if (!element.root) {
      if ((element = element.return)) callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize(
            [
              copy(element, {
                value: replace(element.value, "@", "@" + WEBKIT),
              }),
            ],
            callback
          );
        case RULESET:
          if (element.length)
            return combine(element.props, function (value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize(
                    [
                      copy(element, {
                        props: [
                          replace(value, /:(read-\w+)/, ":" + MOZ + "$1"),
                        ],
                      }),
                    ],
                    callback
                  );
                case "::placeholder":
                  return serialize(
                    [
                      copy(element, {
                        props: [
                          replace(
                            value,
                            /:(plac\w+)/,
                            ":" + WEBKIT + "input-$1"
                          ),
                        ],
                      }),
                      copy(element, {
                        props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")],
                      }),
                      copy(element, {
                        props: [replace(value, /:(plac\w+)/, MS + "input-$1")],
                      }),
                    ],
                    callback
                  );
              }
              return "";
            });
      }
  }
}
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(
  begin,
  points,
  index
) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(
          position - 1,
          points,
          index
        );
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while ((character2 = next()));
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule =
    element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (
    element.props.length === 1 &&
    value.charCodeAt(0) !== 58 &&
    !fixedElements.get(parent)
  ) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k2++) {
      element.props[k2] = points[i]
        ? rules[i].replace(/&\f/g, parentRules[j])
        : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll(
      "style[data-emotion]:not([data-s])"
    );
    Array.prototype.forEach.call(ssrStyles, function (node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function (node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [
      stringify,
      rulesheet(function (rule) {
        currentSheet.insert(rule);
      }),
    ];
    var serializer = middleware(
      omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)
    );
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(
        selector ? selector + "{" + serialized.styles + "}" : serialized.styles
      );
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint,
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert,
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
function murmur2(str) {
  var h = 0;
  var k2,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24);
    k2 = (k2 & 65535) * 1540483477 + (((k2 >>> 16) * 59797) << 16);
    k2 ^= k2 >>> 24;
    h =
      ((k2 & 65535) * 1540483477 + (((k2 >>> 16) * 59797) << 16)) ^
      ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16));
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}
var unitlessKeys = {
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
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function (styleName) {
  return isCustomProperty(styleName)
    ? styleName
    : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function (match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor,
          };
          return p1;
        });
      }
    }
  }
  if (
    unitlessKeys[key] !== 1 &&
    !isCustomProperty(key) &&
    typeof value === "number" &&
    value !== 0
  ) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor,
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor,
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string +=
            processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(
            "Component selectors can only be used in conjunction with @emotion/babel-plugin."
          );
        }
        if (
          Array.isArray(value) &&
          typeof value[0] === "string" &&
          (registered == null || registered[value[0]] === void 0)
        ) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string +=
                processStyleName(_key) +
                ":" +
                processStyleValue(_key, value[_i]) +
                ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(
            mergedProps,
            registered,
            value
          );
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (
    args.length === 1 &&
    typeof args[0] === "object" &&
    args[0] !== null &&
    args[0].styles !== void 0
  ) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor,
  };
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function (className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    (isStringTag === false || isBrowser === false) &&
    cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(
        serialized === current ? "." + className : "",
        current,
        cache.sheet,
        true
      );
      current = current.next;
    } while (current !== void 0);
  }
};
function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === void 0) {
    return cache.insert("", serialized, cache.sheet, true);
  }
}
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(
    registered,
    registeredStyles,
    className
  );
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var createEmotion = function createEmotion2(options) {
  var cache = createCache(options);
  cache.sheet.speedy = function (value) {
    this.isSpeedy = value;
  };
  cache.compat = true;
  var css2 = function css3() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered, void 0);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var keyframes = function keyframes2() {
    for (
      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }
    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}",
    });
    return animation;
  };
  var injectGlobal = function injectGlobal2() {
    for (
      var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
      _key3 < _len3;
      _key3++
    ) {
      args[_key3] = arguments[_key3];
    }
    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };
  var cx = function cx2() {
    for (
      var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
      _key4 < _len4;
      _key4++
    ) {
      args[_key4] = arguments[_key4];
    }
    return merge(cache.registered, css2, classnames(args));
  };
  return {
    css: css2,
    cx,
    injectGlobal,
    keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    sheet: cache.sheet,
    cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css2),
  };
};
var classnames = function classnames2(args) {
  var cls = "";
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
var _createEmotion = createEmotion({
    key: "css",
  }),
  css = _createEmotion.css;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0,
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in ((a = c.defaultProps), a)) d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const Box = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues(
      {
        className: css`
          display: flex;
        `,
      },
      props
    )
  );
};
const Button = (_b) => {
  var props = __objRest(_b, []);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadValues(
      {
        type: "button",
        className: css`
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
      props
    )
  );
};
export { Box, Button };
