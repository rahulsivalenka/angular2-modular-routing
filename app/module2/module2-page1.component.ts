import { Component } from '@angular/core';

@Component({
  selector: 'my-mod-2-page-1',
  template: `
    <div class="page">
      <h3>Module 2 - Page 1</h3>
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
      background-image: url(http://scifitoys.com.au/media/catalog/product/cache/12/image/650x650/9df78eab33525d08d6e5fb8d27136e95/s/q/squ81324-batman-variant-play-arts-kai-a_3.png);
    }
  `]
})

export class Module2Page1Component {}