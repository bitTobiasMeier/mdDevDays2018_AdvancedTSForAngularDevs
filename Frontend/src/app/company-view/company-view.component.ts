
import { Component, OnInit, Input } from '@angular/core';
import { CompanyContact, CompanyPerson } from '../services/services.generated';

@Component({
  selector: 'md-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  @Input() company: Readonly<CompanyContact> | Readonly<CompanyPerson> ;
  constructor() { }

  ngOnInit() {
  }

}
