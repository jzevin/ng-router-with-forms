import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TemplateFormComponent } from './components/pages/template-form/template-form.component';
import { ReactiveFormComponent } from './components/pages/reactive-form/reactive-form.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { GlobalNavComponent } from './components/shared/global-nav/global-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PageHeaderComponent,
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
