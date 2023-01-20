import React from"react";import Label from"@scaleflex/ui/core/label";import restrictNumber from"../../../utils/restrictNumber";import{StyledSpacedOptionFields}from"./AnnotationOptions.styled";import Slider from"../Slider";var MIN_PERCENTANGE=0,MAX_PERCENTANGE=1,OpacityField=function(a){var b=a.annotation,c=a.updateAnnotation,d=a.t,e=b.opacity;return React.createElement(StyledSpacedOptionFields,null,React.createElement(Label,null,d("opacity")),React.createElement(Slider,{annotation:"%",onChange:function changeOpacity(a){c({opacity:restrictNumber(a/100,MIN_PERCENTANGE,MAX_PERCENTANGE)})},value:Math.round(100*e)}))};export default OpacityField;