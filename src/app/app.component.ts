import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';

// import SwitcherIcon from '!raw-loader?!@kyndryl-design-system/shidoka-foundation/assets/svg/switcher.svg';
// import UserAvatar24 from '@carbon/icons/es/user--avatar/24';
// import UserAvatar20 from '@carbon/icons/es/user--avatar/20';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'shidoka-sample-angular';
}
