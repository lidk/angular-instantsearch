import { ModuleWithProviders, NgModule } from "@angular/core";

// Modules
import { NgAisBreadcrumbModule } from "./breadcrumb/breadcrumb.module";
import { NgAisClearRefinementsModule } from "./clear-refinements/clear-refinements.module";
import { NgAisCurrentRefinementsModule } from "./current-refinements/current-refinements.module";
import { NgAisHierarchicalMenuModule } from "./hierarchical-menu/hierarchical-menu.module";
import { NgAisHitsPerPageSelectorModule } from "./hits-per-page-selector/hits-per-page-selector.module";
import { NgAisResultsModule } from "./hits/hits.module";
import { NgAisInfiniteResultsModule } from "./infinite-results/infinite-results.module";
import { NgAisInstantSearchModule } from "./instantsearch/instantsearch.module";
import { NgAisMenuModule } from "./menu/menu.module";
import { NgAisNumericMenuModule } from "./numeric-menu/numeric-menu.module";
import { NgAisNumericSelectorModule } from "./numeric-selector/numeric-selector.module";
import { NgAisPaginationModule } from "./pagination/pagination.module";
import { NgAisPriceRangesModule } from "./price-ranges/price-ranges.module";
import { NgAisRangeSliderModule } from "./range-slider/range-slider.module";
import { NgAisRefinementListModule } from "./refinement-list/refinement-list.module";
import { NgAisSearchBoxModule } from "./search-box/search-box.module";
import { NgAisSortBySelectorModule } from "./sort-by-selector/sort-by-selector.module";
import { NgAisStarRatingModule } from "./star-rating/star-rating.module";
import { NgAisStatsModule } from "./stats/stats.module";
import { NgAisToggleModule } from "./toggle/toggle.module";
import { NgAisHighlightModule } from "./highlight/highlight.module";

const NGIS_MODULES = [
  NgAisInstantSearchModule,
  NgAisResultsModule,
  NgAisSearchBoxModule,
  NgAisClearRefinementsModule,
  NgAisMenuModule,
  NgAisPaginationModule,
  NgAisRefinementListModule,
  NgAisHitsPerPageSelectorModule,
  NgAisSortBySelectorModule,
  NgAisNumericSelectorModule,
  NgAisNumericMenuModule,
  NgAisStatsModule,
  NgAisToggleModule,
  NgAisInfiniteResultsModule,
  NgAisCurrentRefinementsModule,
  NgAisPriceRangesModule,
  NgAisHierarchicalMenuModule,
  NgAisStarRatingModule,
  NgAisRangeSliderModule,
  NgAisBreadcrumbModule,
  NgAisHighlightModule
];

@NgModule({
  exports: NGIS_MODULES,
  imports: [NgAisInstantSearchModule.forRoot()]
})
export class NgAisRootModule {}

@NgModule({ imports: NGIS_MODULES, exports: NGIS_MODULES })
export class NgAisModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: NgAisRootModule };
  }
}
