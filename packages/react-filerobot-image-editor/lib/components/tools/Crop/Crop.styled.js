import styled,{css}from"styled-components";import Button from"@scaleflex/ui/core/button";import Label from"@scaleflex/ui/core/label";import{Accordion,MenuItem}from"@scaleflex/ui/core";import{Color as PC}from"@scaleflex/ui/utils/types/palette";import{FontVariant as FV}from"@scaleflex/ui/utils/types/typography";var StyledToolsBarItemButtonWrapper=styled.div.withConfig({componentId:"sc-ldar2z-0"})(["display:flex;"]),StyledOpenMenuButton=styled(Button).withConfig({componentId:"sc-ldar2z-1"})(["margin:0 0 0 6px;padding:0;"]),StyledMenuItemIcon=styled.div.withConfig({componentId:"sc-ldar2z-2"})(["svg,span{vertical-align:middle;}"]),StyledRatioDescription=styled(Label).withConfig({componentId:"sc-ldar2z-3"})(["cursor:pointer;",""],function(a){var b=a.theme.typography;return b.font[FV.InputSm]}),StyledMenu=styled.div.withConfig({componentId:"sc-ldar2z-4"})(["min-width:270px;border-radius:4px;overflow:hidden;background-color:",";"],function(a){var b=a.theme.palette;return b[PC.BackgroundStateless]}),StyledMenuItem=styled(MenuItem).withConfig({componentId:"sc-ldar2z-5"})(["display:flex;gap:10px;justify-content:flex-start;align-items:center;border-radius:4px;padding:8px 16px;"," ",""],function(a){var b=a.isAccordion;return b&&"padding-left: 22px;"},function(a){var b=a.isListItem;return b&&"padding: 0;"}),StyledMenuItemLabel=styled(Label).withConfig({componentId:"sc-ldar2z-6"})(function(a){var b=a.theme;return css(["color:",";",";"],b.palette[PC.TextPrimary],b.typography.font[FV.InputMd])}),StyledAccordion=styled(Accordion).withConfig({componentId:"sc-ldar2z-7"})(function(a){var b=a.theme;return css([".SfxAccordionHeader-icon{padding-left:0;}.SfxAccordionHeader-label{",";color:",";}.SfxAccordionHeader-root{display:flex;flex-direction:row-reverse;width:fit-content;gap:10px;}"],b.typography.font[FV.LabelMediumEmphasis],b.palette[PC.TextPrimary])});export{StyledToolsBarItemButtonWrapper,StyledOpenMenuButton,StyledMenuItemIcon,StyledRatioDescription,StyledMenu,StyledMenuItem,StyledMenuItemLabel,StyledAccordion};