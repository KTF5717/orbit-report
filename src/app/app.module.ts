import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
