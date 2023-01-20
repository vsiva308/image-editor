import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _defineProperty from"@babel/runtime/helpers/defineProperty";var _annotationsNamesToKo,_excluded=["width","height","startedX","startedY"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import Konva from"konva";import{TOOLS_IDS}from"../../utils/constants";var annotationsNamesToKonvaClasses=(_annotationsNamesToKo={},_defineProperty(_annotationsNamesToKo,TOOLS_IDS.RECT,Konva.Rect),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.ELLIPSE,Konva.Ellipse),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.POLYGON,Konva.RegularPolygon),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.LINE,Konva.Line),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.IMAGE,Konva.Image),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.TEXT,Konva.Text),_defineProperty(_annotationsNamesToKo,TOOLS_IDS.ARROW,Konva.Arrow),_annotationsNamesToKo),ANNOTATIONS_WITH_POINTS=[TOOLS_IDS.LINE,TOOLS_IDS.ARROW];export var NO_WIDTH_HEIGHT_ANNOTATIONS=[].concat(ANNOTATIONS_WITH_POINTS,[TOOLS_IDS.ELLIPSE,TOOLS_IDS.POLYGON]);var getNewAnnotationPreview=function(a){var b,c,d;return new annotationsNamesToKonvaClasses[a.name](_objectSpread(_objectSpread({},a),{},{opacity:null!==(b=a.opacity)&&void 0!==b?b:.7,x:null!==(c=a.x)&&void 0!==c?c:0,y:null!==(d=a.y)&&void 0!==d?d:0,width:Math.abs(a.width)||0,height:Math.abs(a.height)||0},ANNOTATIONS_WITH_POINTS.includes(a.name)?{stroke:a.stroke||"#000000"}:{}))};export var dimensToProperAnnotationDimens=function(a,b,c){var d=a.width,e=a.height,f=a.startedX,g=a.startedY,h=_objectWithoutProperties(a,_excluded),i=Math.abs(d),j=Math.abs(e),k=0>d,l=0>e;switch(b){case TOOLS_IDS.RECT:c?(h.width=Math.sqrt(i*i+j*j),h.height=h.width,h.x-=k?h.width-i:0,h.y-=l?h.height-j:0):(h.width=i,h.height=j);break;case TOOLS_IDS.ELLIPSE:c?(h.radiusX=Math.sqrt(i*i+j*j)/2,h.radiusY=h.radiusX,h.x-=k?2*h.radiusX-i:0,h.y-=l?2*h.radiusY-j:0):(h.radiusX=i/2,h.radiusY=j/2),h.offsetX=-h.radiusX,h.offsetY=-h.radiusY;break;case TOOLS_IDS.POLYGON:h.radius=(i+j)/2,h.x-=k?2*h.radius-i:0,h.y-=l?2*h.radius-j:0,h.offsetX=-h.radius,h.offsetY=-h.radius;break;case TOOLS_IDS.LINE:case TOOLS_IDS.ARROW:h.x=f,h.y=g,h.points=[0,0],c?h.points.push(i>=j?d:0,j>i?e:0):h.points=[0,0,d,e];break;default:h.width=i,h.height=j;}return h};export default getNewAnnotationPreview;