import BaseFilters from"./BaseFilters";var COLOR_FILTER_CONST=[255,225,80,.08],SATURATION_CONST=.1,CONTRAST_CONST=.05;function Valencia(a){BaseFilters.apply(a,BaseFilters.colorFilter(COLOR_FILTER_CONST),BaseFilters.saturation(SATURATION_CONST),BaseFilters.contrast(CONTRAST_CONST))}Valencia.filterName="Valencia";export default Valencia;