import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React,{Children,useRef,useState,useEffect}from"react";import{ArrowLeftOutline,ArrowRightOutline}from"@scaleflex/icons";import{useResizeObserver}from"../../../hooks";import debounce from"../../../utils/debounce";import getScrollOffset from"../../../utils/getScrollOffset";import{StyledCarouselWrapper,StyledCarousel,StyledCarouselItem,StyledNextArrowWrapper,StyledPrevArrowWrapper}from"./Carousel.styled";var Carousel=function(a){var b=a.children,c=a.style,d=a.className,f=useRef(!1),g=useRef(),h=useResizeObserver(),i=_slicedToArray(h,1),j=i[0],k=useState(!1),l=_slicedToArray(k,2),m=l[0],n=l[1],o=useState(!1),p=_slicedToArray(o,2),q=p[0],r=p[1],s=Children.toArray(b),t=function(){if(g.current){var a=g.current,b=a.scrollWidth,c=a.offsetWidth,d=a.scrollLeft,e=Math.round(b-c),f=Math.round(e-d);n(0<d),r(0<f)}},u=function(a,b){var c=a.findIndex(function(a){return a.classList.contains("FIE_carousel-item")});-1!==c&&(a[c].scrollIntoView({inline:b,behavior:"smooth",block:"nearest"}),setTimeout(function(){t()},500))},v=function(a){if(f.current){var b,c=((null===(b=a.touches)||void 0===b?void 0:b[0])||a).pageX;g.current.scrollBy(f.current-c,0),f.current=c,debounce(t,30)()}},w=function(){f.current=null,document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",v),document.removeEventListener("touchcancel",w),document.removeEventListener("touchend",w)},x=function(a){var b;f.current=((null===(b=a.touches)||void 0===b?void 0:b[0])||a).pageX,document.addEventListener("mousemove",v),document.addEventListener("mouseup",w),document.addEventListener("touchmove",v),document.addEventListener("touchcancel",w),document.addEventListener("touchend",w)};return useEffect(function(){g.current&&j(g.current,t)},[]),React.createElement(StyledCarouselWrapper,{className:"".concat(d,"-wrapper"),style:c,onMouseDown:x,onTouchStart:x},m&&React.createElement(StyledPrevArrowWrapper,{className:"FIE_carousel-prev-button",onClick:function scrollToPrev(a){var b=getScrollOffset(),c=b.topOffset,d=b.leftOffset,e=document.elementsFromPoint(a.pageX+a.currentTarget.offsetWidth-d,a.pageY-c);u(e,"end")}},React.createElement(ArrowLeftOutline,null)),React.createElement(StyledCarousel,{className:"".concat(d,"-items"),ref:g},s.map(function(a){return React.createElement(StyledCarouselItem,{className:"".concat(d,"-item-wrapper FIE_carousel-item"),key:a.key},a)})),q&&React.createElement(StyledNextArrowWrapper,{className:"FIE_carousel-next-button",onClick:function scrollToNext(a){var b=getScrollOffset(),c=b.topOffset,d=b.leftOffset,e=document.elementsFromPoint(a.pageX-a.currentTarget.offsetWidth-d,a.pageY-c);u(e,"start")}},React.createElement(ArrowRightOutline,null)))};Carousel.defaultProps={style:null};export default Carousel;