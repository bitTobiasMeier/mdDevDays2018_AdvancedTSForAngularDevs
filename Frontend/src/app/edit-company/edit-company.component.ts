import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import { CompanyContact, ContactClient } from '../services/services.generated';
import {Router, ParamMap,  ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  contact: CompanyContact;
  constructor(private contactClient: ContactClient,
    private route: ActivatedRoute, private  router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.contactClient.get(id).subscribe(contact => {
      this.contact = <CompanyContact>contact;
    });
  }

  save () {
    this.contactClient.put (this.contact.id, this.contact).subscribe(
      (data) => {
        this.router.navigate(['/list']);
      }
    );
  }

  reset () {
  }

}
