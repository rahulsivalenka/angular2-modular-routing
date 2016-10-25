import { Component } from '@angular/core';

@Component({
  selector: 'my-mod-2',
  template: `
    <div class="component">
      <h2>Module 2</h2>
      <a routerLink="page1" routerLinkActive="active">M2 - Page1</a>
      <a routerLink="page2" routerLinkActive="active">M2 - Page2</a>
      <router-outlet></router-outlet>
    </div>
  `
})

export class Module2Component {}