import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactsMainPageComponent } from './contacts-main-page/contacts-main-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import {API_BASE_URL, ContactClient} from './services/services.generated';
import { CompanyViewComponent } from './company-view/company-view.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { PersonPipe } from './person.pipe';

function GetApiBaseUrl() {
  let API_BASE_URL2 = '';
  if (window != null && window.location != null) {
    const loc = window.location;
    const server = loc.hostname;
    const port = loc.port;
    if (server === 'localhost' && port === '4200') {
        API_BASE_URL2 = 'http://localhost:58282';
    }         else {
     API_BASE_URL2 = loc.protocol + '//' + server + ':' + port;
     }
  }
  return API_BASE_URL2;
}

@NgModule({
  declarations: [
    AppComponent,
    ContactsMainPageComponent,
    ContactsComponent,
    CompanyViewComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    PersonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactClient,
    { provide: API_BASE_URL, useValue: GetApiBaseUrl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
