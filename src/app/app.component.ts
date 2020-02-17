import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Country-List';
  showDarkTheme = false;
  theme = 'my-light-theme';
  constructor(
    
  ) {}

  ngOnInit(): void {
    //this.overlayContainer.themeclass = this.theme;
  }

  onThemeChange() {
    //this.overlayContainer.themeClass = this.theme;
  }

  toggleTheme(): void {
    this.showDarkTheme = !this.showDarkTheme;

    if(this.showDarkTheme)
    {
      this.theme = 'my-dark-theme';
    }
    if (!this.showDarkTheme){
      this.theme = 'my-light-theme';
    }
  }

}
