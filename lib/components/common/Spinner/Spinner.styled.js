import styled,{keyframes}from"styled-components";var spin=keyframes(["0%{transform:rotate(0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}50%{transform:rotate(900deg);animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);}100%{transform:rotate(1800deg);}"]),StyledSpinnerWrapper=styled.div.withConfig({componentId:"sc-m42fbk-0"})(["background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;position:absolute;z-index:11111;top:0;bottom:0;right:0;left:0;flex-direction:column;user-select:none;label{color:#ffffff;}"]),StyledSpinner=styled.div.withConfig({componentId:"sc-m42fbk-1"})(["display:inline-block;position:relative;width:80px;height:80px;:after{content:' ';display:block;border-radius:50%;width:0;height:0;margin:8px;box-sizing:border-box;border:32px solid #fff;border-color:#fff transparent #fff transparent;animation:"," 1.2s infinite;}"],spin);export{StyledSpinnerWrapper,StyledSpinner};