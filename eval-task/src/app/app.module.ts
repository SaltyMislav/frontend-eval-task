import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableComponent } from './table/table.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatCommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: TableViewComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TableViewComponent,
    TableComponent,
    BasketComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
