export interface UpdatePersonalInformationRequest{
    id:string |undefined,
    studentId: string ,
    firstName: string ,
    lastName: string ,
    identityNo: string,
    country: string,
    city: string,
    county: string,
    address: string,
    phoneNumber: string|undefined,
    about: string,
    birthDate: Date | null|undefined,
   }