import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMainPageComponent } from './contacts-main-page.component';

describe('ContactsMainPageComponent', () => {
  let component: ContactsMainPageComponent;
  let fixture: ComponentFixture<ContactsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
