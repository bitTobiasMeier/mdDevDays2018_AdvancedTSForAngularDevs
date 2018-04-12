import {Router} from '@angular/router';
import {CompanyContact, ContactClient} from '../services/services.generated';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  company: CompanyContact;
  constructor(private client: ContactClient, private  router: Router) { }

  ngOnInit() {
    this.company = new CompanyContact();
    this.company.company = '1';
  }

  onSubmit() {
    this.client.post(this.company).subscribe ( (result) =>  {
      this.router.navigate(['/list']);
  });
 }
}
