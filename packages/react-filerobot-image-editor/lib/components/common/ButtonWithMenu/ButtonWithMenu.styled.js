import styled from"styled-components";import Button from"@scaleflex/ui/core/button";import{Color as PC}from"@scaleflex/ui/utils/types/palette/color";import{Menu,MenuItem,MenuItemIcon}from"@scaleflex/ui/core";var StyledButtonWrapper=styled.div.withConfig({componentId:"sc-m9ezm7-0"})(["display:flex;align-items:center;margin-left:",";flex-shrink:0;"],function(a){var b=a.noMargin;return b?"0":"12px"}),StyledMainButton=styled(Button).withConfig({componentId:"sc-m9ezm7-1"})(["flex-grow:1;justify-content:center;align-items:center;"]),StyledMenu=styled(Menu).withConfig({componentId:"sc-m9ezm7-2"})(["padding:8px;background-color:",";"],function(a){var b=a.theme.palette;return b[PC.BackgroundStateless]}),StyledMenuItem=styled(MenuItem).withConfig({componentId:"sc-m9ezm7-3"})(["border-radius:4px;"]),StyledMenuIcon=styled(MenuItemIcon).withConfig({componentId:"sc-m9ezm7-4"})(["display:flex;align-items:center;"]);export{StyledButtonWrapper,StyledMainButton,StyledMenu,StyledMenuItem,StyledMenuIcon};