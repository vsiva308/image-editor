import _defineProperty from"@babel/runtime/helpers/defineProperty";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}export var SET_RESIZE="SET_RESIZE";var setResize=function(a,b){var c;return _objectSpread(_objectSpread({},a),{},{isDesignState:!b.dismissHistory,resize:_objectSpread(_objectSpread(_objectSpread({},a.resize),b),{},{manualChangeDisabled:!(null===(c=b.manualChangeDisabled)||void 0===c)&&c})})};export default setResize;