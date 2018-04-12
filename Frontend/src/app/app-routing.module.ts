import {EditCompanyComponent} from './edit-company/edit-company.component';
import {AddCompanyComponent} from './add-company/add-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsMainPageComponent } from './contacts-main-page/contacts-main-page.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '', component: ContactsMainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ContactsComponent
      },
      {
        path: 'addCompany',
        component: AddCompanyComponent
      },
      {
        path: 'editCompany/:id',
        component: EditCompanyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
