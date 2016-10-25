// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Custom modules
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';

// Components
import { AppComponent } from './app.component'

@NgModule({
  imports: [ 
    BrowserModule,
    Module1Module,
    Module2Module,
    RouterModule.forRoot([
      {
        path: 'module1',
        loadChildren: 'module1/module1.module#Module1Module'
      }, {
        path: 'module2',
        loadChildren: 'module2/module2.module#Module2Module'
      }, {
        path: '',
        redirectTo: 'module1',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
