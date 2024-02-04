export interface GetAllCourseResponse {
    Id: string;
    CategoryId: string;
    CompanyId: string;
    Name: string;
    ImageUrl: string;
    About: string;
    StartDate: string;
    EndDate: string;
    SpentTime: string;
    EstimatedTime: string;
  }
  export interface GetAllCourseResponse{
    items : GetAllCourseResponse[]; 
} 