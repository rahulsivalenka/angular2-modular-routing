import { Component } from '@angular/core';

// Component decorator
@Component({
  selector: 'my-app',
  template: `
    <h1>Modular Routing</h1>
    <a routerLink="/module1" routerLinkActive="active">Module1</a>
    <a routerLink="/module2" routerLinkActive="active">Module2</a>
    <router-outlet></router-outlet>
  `
})

// Main app component
export class AppComponent {}