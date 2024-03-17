import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TableViewComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TableViewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
