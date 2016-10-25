import { Component } from '@angular/core';

@Component({
  selector: 'my-mod-1',
  template: `
    <div class="component">
      <h2>Module 1</h2>
      <a routerLink="page1" routerLinkActive="active">M1 - Page1</a>
      <a routerLink="page2" routerLinkActive="active">M1 - Page2</a>
      <router-outlet></router-outlet>
    </div>
  `
})

export class Module1Component {}