import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-charts/components/chart';
// import SwitcherIcon from '!!raw-loader?!@kyndryl-design-system/shidoka-foundation/assets/svg/switcher.svg';

// carbon-components-angular default imports
import { IconModule, IconService } from 'carbon-components-angular';

/**
 * Import specific carbon icons WITH size
 * In most cases, we don't need all of them, only a specific size
 * so this is perfect for bundling
 */
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import UserAvatar24 from '@carbon/icons/es/user--avatar/24';
import Apps24 from '@carbon/icons/es/apps/24';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  /**
   * Inject Icon service into module constructor or even component,
   * it's better to register these modules early instead of later.
   *
   * It's recommended to use module constructor for most cases
   *
   * If needed, you can even create a shared module & register ALL needed icons. IconService is a singleton,
   * so registered icons will be available once you import the shared icon module.
   */
  constructor(protected iconService: IconService) {
    /**
     * Register the icons!
     */
    iconService.registerAll([UserAvatar20, UserAvatar24, Apps24]);
  }
}
