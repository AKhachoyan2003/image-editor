import BaseFilters from"./BaseFilters";var COLOR_FILTER_CONST=[255,140,0,.1],ADJUST_RGB_CONST=[1.15,1.05,1],SATURATION_CONST=.35;function Kelvin(a){BaseFilters.apply(a,BaseFilters.colorFilter(COLOR_FILTER_CONST),BaseFilters.adjustRGB(ADJUST_RGB_CONST),BaseFilters.saturation(SATURATION_CONST))}Kelvin.filterName="Kelvin";export default Kelvin;