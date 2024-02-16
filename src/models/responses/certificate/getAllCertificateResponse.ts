export interface GetAllCertificateResponse{
        id :string
        studentId: string
        fileName: string
        fileExtension :string
        filePath: string 
        createdDate: Date
 }

export interface GetAllCertificateResponse{
    items: GetAllCertificateResponse[]
}