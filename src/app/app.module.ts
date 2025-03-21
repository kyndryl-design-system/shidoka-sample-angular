import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';
import '@kyndryl-design-system/shidoka-charts/components/chart';
// import SwitcherIcon from '!!raw-loader?!@kyndryl-design-system/shidoka-foundation/assets/svg/switcher.svg';


/**
 * Import specific carbon icons WITH size
 * In most cases, we don't need all of them, only a specific size
 * so this is perfect for bundling
 */
// import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
// import UserAvatar24 from '@carbon/icons/es/user--avatar/24';
// import Apps24 from '@carbon/icons/es/apps/24';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, SvgIconComponent ],
  providers: [provideAngularSvgIcon() ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
