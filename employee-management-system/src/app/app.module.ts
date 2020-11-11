import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FiltersComponent } from './filters/filters.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
