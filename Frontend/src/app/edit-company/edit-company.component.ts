import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import {ICompanyContact, CompanyContact} from '../services/services.generated';
import {Router, ParamMap,  ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'md-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  contact: CompanyContact | undefined ;
  contactCopy: CompanyContact | undefined;
  constructor(private contactService: ContactService,
    private route: ActivatedRoute, private  router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.contactService.get(id).subscribe(contact => {
      this.contact = <CompanyContact>contact;
      if (this.contact != null) {
      this.contactCopy = new CompanyContact ({... <ICompanyContact>this.contact});
      }
    });
  }

  save () {
    if (this.contact === undefined || this.contact.id === undefined) {
      return;
    }
    this.contactService.put (this.contact).subscribe(
      (data) => {
        this.router.navigate(['/list']);
      }
    );

  }

  reset () {
    this.contact = this.contactCopy;
    this.contactCopy = new CompanyContact ({... <ICompanyContact>this.contact});
  }


}
