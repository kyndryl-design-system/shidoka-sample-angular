import { Component } from '@angular/core';
import userIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/user.svg';
import userIcon20 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/user.svg';
import questionIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/question.svg';
import sampleIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/circle-stroke.svg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shidoka-sample-angular';
  userAvatar = userIcon;
  questionIcon = questionIcon;
  sampleIcon = sampleIcon;
  userIcon20 = userIcon20;
}
