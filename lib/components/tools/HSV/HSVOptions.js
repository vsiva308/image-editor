import _defineProperty from"@babel/runtime/helpers/defineProperty";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React from"react";import Konva from"konva";import{useFinetune}from"../../../hooks";import Slider from"../../common/Slider";import Label from"@scaleflex/ui/core/label";import{StyledSliderContainer}from"./HSV.styled";var DEFAULT_VALUE={hue:0,saturation:0,value:0},sliderStyle={padding:0},HSVOptions=function(a){var b,c,d,e=a.t,f=useFinetune(Konva.Filters.HSV,DEFAULT_VALUE),g=_slicedToArray(f,2),h=g[0],i=g[1],j=function(a,b){i(_defineProperty({},a,+b))};return React.createElement(React.Fragment,null,React.createElement(StyledSliderContainer,{className:"FIE_hue-option-wrapper"},React.createElement(Label,{className:"FIE_hue-option-label"},e("hue")),React.createElement(Slider,{className:"FIE_hue-option",min:0,step:1,max:259,value:null!==(b=h.hue)&&void 0!==b?b:DEFAULT_VALUE.hue,onChange:function onChange(a){return j("hue",a)},style:sliderStyle})),React.createElement(StyledSliderContainer,{className:"FIE_saturation-option-wrapper"},React.createElement(Label,{className:"FIE_saturation-option-label"},e("saturation")),React.createElement(Slider,{className:"FIE_saturation-option",min:-2,step:.5,max:10,value:null!==(c=h.saturation)&&void 0!==c?c:DEFAULT_VALUE.saturation,onChange:function onChange(a){return j("saturation",a)},style:sliderStyle})),React.createElement(StyledSliderContainer,{className:"FIE_value-option-wrapper"},React.createElement(Label,{className:"FIE_value-option-label"},e("value")),React.createElement(Slider,{className:"FIE_value-option",min:-2,step:.1,max:2,value:null!==(d=h.value)&&void 0!==d?d:DEFAULT_VALUE.value,onChange:function onChange(a){return j("value",a)},style:sliderStyle})))};export default HSVOptions;