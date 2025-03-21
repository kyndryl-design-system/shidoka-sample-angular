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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, SvgIconComponent ],
  providers: [provideAngularSvgIcon() ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
