import { Component } from '@angular/core';

@Component({
  selector: 'my-mod-2-page-2',
  template: `
    <div class="page">
      <h3>Module 2 - Page 2</h3>
    </div>
  `,
  styles: [`
    .page {
      position: relative;
      background: transparent;
    }
    .page h3 {
      margin-left: 120px;
    }
    .page:after {
      content: "";
      position: absolute;
      display: block;
      height: 100px;
      width: 100px;
      background-size: cover;
      left: 0;
      top: 2px;
      background-image: url(https://s-media-cache-ak0.pinimg.com/564x/39/f9/57/39f957b7454d0bfca989bf5984b62e64.jpg);
    }
  `]
})

export class Module2Page2Component {}