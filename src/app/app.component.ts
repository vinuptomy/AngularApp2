import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Country-List';

  theme = 'my-light-theme';
  constructor(
    
  ) {}

  ngOnInit(): void {
    //this.overlayContainer.themeclass = this.theme;
  }

  onThemeChange() {
    //this.overlayContainer.themeClass = this.theme;
  }
}
