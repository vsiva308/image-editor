import{FineTune,Annotate,CropFrame,ImageFilters,Watermark,Resize}from"@scaleflex/icons";import{TABS_IDS}from"../../utils/constants";export var AVAILABLE_TABS=[{id:TABS_IDS.ADJUST,labelKey:"adjustTab",icon:CropFrame},{id:TABS_IDS.FINETUNE,labelKey:"finetuneTab",icon:FineTune},{id:TABS_IDS.FILTERS,labelKey:"filtersTab",icon:ImageFilters,hideFn:function hideFn(a){var b=a.useCloudimage;return b}},{id:TABS_IDS.WATERMARK,labelKey:"watermarkTab",icon:Watermark},{id:TABS_IDS.ANNOTATE,labelKey:"annotateTab",icon:Annotate,hideFn:function hideFn(a){var b=a.useCloudimage;return b}},{id:TABS_IDS.RESIZE,labelKey:"resizeTab",icon:Resize}];