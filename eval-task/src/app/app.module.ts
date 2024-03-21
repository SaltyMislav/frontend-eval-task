import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: TableComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
