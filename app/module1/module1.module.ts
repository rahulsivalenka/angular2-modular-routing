import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Module1Component } from './module1.component';
import { Module1Page1Component } from './module1-page1.component';
import { Module1Page2Component } from './module1-page2.component';


@NgModule({
  imports: [
    // Configuring the routes for a child module
    RouterModule.forChild([
    {
      // Main route for this module
      path: 'module1',
      component: Module1Component,

      // Sub routes for this module
      children: [{
        path: 'page1',
        component: Module1Page1Component
      }, {
        path: 'page2',
        component: Module1Page2Component
      }, {
        // Default route for this module
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
      }]
    }
    ])
  ],
  // exports: [RouterModule],
  declarations: [
    Module1Component,
    Module1Page1Component,
    Module1Page2Component
  ]
  //, bootstrap: [Module1Component]
})

export class Module1Module {}