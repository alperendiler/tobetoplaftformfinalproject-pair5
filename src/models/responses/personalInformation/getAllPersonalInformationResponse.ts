export interface GetAllPersonalInformationResponse{
    Id:string ,
    StudentId: string ,
    FirstName: string ,
    LastName: string ,
    IdentityNo: string,
    Country: string,
    City: string,
    County: string,
    Address: string,
    PhoneNumber: string,
    About: string,
    BirthDate: Date,
   }
   export interface GetAllPersonalInformationResponse{
    items : GetAllPersonalInformationResponse[]; 
} 