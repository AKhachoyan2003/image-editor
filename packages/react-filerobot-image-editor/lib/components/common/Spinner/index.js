import React from"react";import{Color as PC}from"@scaleflex/ui/utils/types/palette";import{StyledSpinnerWrapper,StyledSpinner}from"./Spinner.styled";var Spinner=function(a){var b=a.theme;return React.createElement(StyledSpinnerWrapper,{className:"FIE_spinner-wrapper"},React.createElement(StyledSpinner,{size:50,color:b.palette[PC.AccentStateless]}))};Spinner.defaultProps={theme:{}};export default Spinner;