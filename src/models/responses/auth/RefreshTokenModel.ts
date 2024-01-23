export interface RefreshTokenModel{
    UserId:number;
    Token:string;
    Expires:Date;
    CreatedByIp:string;
    Revoked?:Date;
    RevokedByIp?:string;
    ReplacedByToken:string;
}