export interface GetAllCertificateResponse{
        id :string
        studentId: string
        fileName: string
        fileExtension :string
        filePath: string 
 }

export interface GetAllCertificateResponse{
    items: GetAllCertificateResponse[]
}