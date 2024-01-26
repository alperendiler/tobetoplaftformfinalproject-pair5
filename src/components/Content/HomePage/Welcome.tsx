import React, { useEffect, useState } from "react";
import tokenService from "../../../core/services/tokenService";
import { jwtDecode } from "jwt-decode";
type Props = {};
type UserInfo = {
  name: string;
  email: string;
};

export default function Welcome({}: Props) {
  const [UserInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    // Local Storage'dan token'ı al
    const token = localStorage.getItem("user");

    // Eğer token varsa, kullanıcı bilgilerini al
    if (token) {
      const user = getUserInfoFromToken(token);
      setUserInfo(user);
    }
  }, []); // Komponent yüklendiğinde sadece bir kere çalışsın

  const getUserInfoFromToken = (token: string) => {
    try {
      // Token'ı çözümle
      const decodedToken: any = jwtDecode(token);

      const username =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ];

      // Token içindeki bütün bilgileri konsola yazdır
      const user: UserInfo = {
        name: username,
        email: decodedToken.email,
        // Diğer özellikler...
      };

      return user;
    } catch (error) {
      console.error("Token çözümlenirken bir hata oluştu:", error);
      return null;
    }
  };

  return (
    <>
      <section className="py-5">
        <div className="position-relative mt-12">
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <span className="text-purple fs-1 fw-bold"> TOBETO</span>
              <span className="fw-normal fs-1 text-dark-emphasis">
                'ya hoş geldin
              </span>

              <h2 className="fw-normal text-dark-emphasis mb-5">
                {UserInfo?.name}
              </h2>
              <p className="fs-3 fw-normal">
                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                senin yanında!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
