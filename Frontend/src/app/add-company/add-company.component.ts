import {Router} from '@angular/router';
import {CompanyContact} from '../services/services.generated';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'md-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  company: CompanyContact ;
  constructor(private  router: Router, private service: ContactService) {
    this.company = new CompanyContact();
  }

  ngOnInit() {
       this.company.company = '';
  }

  onSubmit() {
    if (this.company === undefined) { return; }
    this.service.post(this.company).subscribe ( (result) =>  {
      this.router.navigate(['/list']);
  });
 }
}
