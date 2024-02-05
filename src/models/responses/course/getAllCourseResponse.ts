export interface GetAllCourseResponse {
    id: string;
    categoryId: string;
    companyId: string;
    name: string;
    imageUrl: string;
    about: string;
    startDate: string;
    endDate: string;
    spentTime: string;
    estimatedTime: string;
  }
  export interface GetAllCourseResponse{
    items : GetAllCourseResponse[]; 
} 