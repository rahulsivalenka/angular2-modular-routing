import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Module2Component } from './module2.component';
import { Module2Page1Component } from './module2-page1.component';
import { Module2Page2Component } from './module2-page2.component';


@NgModule({
  imports: [
    // Configuring the routes for a child module
    RouterModule.forChild([
      {
        // Main route for this module
        path: 'module2',
        component: Module2Component,

        // Sub routes for this module
        children: [{
          path: 'page1',
          component: Module2Page1Component
        }, {
          path: 'page2',
          component: Module2Page2Component
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
    Module2Component,
    Module2Page1Component,
    Module2Page2Component
  ]
  //, bootstrap: [Module2Component]
})

export class Module2Module {}