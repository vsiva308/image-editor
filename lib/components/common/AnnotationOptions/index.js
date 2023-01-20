import _extends from"@babel/runtime/helpers/extends";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";var _excluded=["children","morePoppableOptionsPrepended","moreOptionsPopupComponentsObj","morePoppableOptionsAppended","annotation","updateAnnotation","hideFillOption","hidePositionField","className"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import React,{useCallback,useMemo,useState}from"react";import Menu from"@scaleflex/ui/core/menu";import Transparency from"@scaleflex/icons/transparency";import Shadow from"@scaleflex/icons/shadow";import Stroke from"@scaleflex/icons/stroke";import Position from"@scaleflex/icons/position";import{useStore}from"../../../hooks";import OpacityField from"./OpacityField";import StrokeFields from"./StrokeFields";import ShadowFields from"./ShadowFields";import PositionFields from"./PositionFields";import{StyledOptionPopupContent,StyledOptions,StyledIconWrapper}from"./AnnotationOptions.styled";import{POPPABLE_OPTIONS}from"./AnnotationOptions.constants";import ColorInput from"../ColorInput";var AnnotationOptions=function(a){var b=a.children,c=a.morePoppableOptionsPrepended,d=a.moreOptionsPopupComponentsObj,e=a.morePoppableOptionsAppended,f=a.annotation,g=a.updateAnnotation,h=a.hideFillOption,i=a.hidePositionField,j=a.className,k=_objectWithoutProperties(a,_excluded),l=useState(null),m=_slicedToArray(l,2),n=m[0],o=m[1],p=useState(null),q=_slicedToArray(p,2),r=q[0],s=q[1],u=useStore(),v=u.config.useCloudimage,w=u.t,t=useMemo(function(){return[].concat(_toConsumableArray(c),[{titleKey:"opacity",name:POPPABLE_OPTIONS.OPACITY,Icon:Transparency}],_toConsumableArray(v?[]:[{titleKey:"stroke",name:POPPABLE_OPTIONS.STROKE,Icon:Stroke},{titleKey:"shadow",name:POPPABLE_OPTIONS.SHADOW,Icon:Shadow}]),[i?void 0:{titleKey:"position",name:POPPABLE_OPTIONS.POSITION,Icon:Position}])},[c]),x=useMemo(function(){var a;return _objectSpread(_objectSpread({},d),{},(a={},_defineProperty(a,POPPABLE_OPTIONS.OPACITY,OpacityField),_defineProperty(a,POPPABLE_OPTIONS.STROKE,StrokeFields),_defineProperty(a,POPPABLE_OPTIONS.SHADOW,ShadowFields),_defineProperty(a,POPPABLE_OPTIONS.POSITION,PositionFields),a),e)},[d]),y=useCallback(function(a,b){var c=null===a||void 0===a?void 0:a.currentTarget;o(c),s(b)},[]),z=useCallback(function(a){g({fill:a})},[g]),A=n&&r&&x[r];return React.createElement(StyledOptions,{className:"FIE_annotations-options".concat(j?" ".concat(j):"")},!h&&React.createElement(ColorInput,{color:f.fill,onChange:z}),b,t.map(function(a){return a&&React.createElement(StyledIconWrapper,{className:"FIE_annotation-option-triggerer",key:a.name,title:w(a.titleKey),onClick:function onClick(b){return y(b,a.name)}},React.createElement(a.Icon,{size:18}))}),A&&React.createElement(Menu,{className:"FIE_annotation-option-popup",anchorEl:n,open:!!n,onClose:y,position:"top"},React.createElement(StyledOptionPopupContent,null,React.createElement(A,_extends({annotation:f,updateAnnotation:g},k)))))};AnnotationOptions.defaultProps={children:void 0,morePoppableOptionsPrepended:[],moreOptionsPopupComponentsObj:{},morePoppableOptionsAppended:[],hideFillOption:!1,hidePositionField:!1,className:void 0};export default AnnotationOptions;