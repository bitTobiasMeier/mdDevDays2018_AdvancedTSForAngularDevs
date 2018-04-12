
export type MyContact = Person | CompanyContact | CompanyPerson;
export function getContactSummary(s: MyContact) {
  switch (s.discriminator) {
   case 'Person': return s.firstname + s.lastname;
   case 'CompanyContact':  return s.company;
   case 'CompanyPerson':  return s.company;
  }
}


interface Person {
  discriminator: 'Person';
  firstname: string;
  lastname: string;
}
interface CompanyContact {
  discriminator: 'CompanyContact';
  company: string;
}
interface CompanyPerson {
  discriminator: 'CompanyPerson';
  firstname: string;
  lastname: string;
  company: string;
}

