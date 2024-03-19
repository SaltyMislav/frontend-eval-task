import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatCommonModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: TableComponent}])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TableComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
