import React, {useEffect,useState} from "react";
import "../../../styles/MyProfileStyles/profilePicture.css";
import { jwtDecode } from "jwt-decode";
import userService from "../../../services/userService";
import { GetUserDetailResponse } from "../../../models/responses/user/getUserDetailResponse";
import PersonalInformation from "../../../pages/ProfileInformation/PersonalInformation";
import personalInformationService from "../../../services/personalInformationService";
import { GetPersonalInformationResponse } from "../../../models/responses/personalInformation/getPersonalInfırmationResponse";

type Props = {};
function ProfileCard({}: Props) {
  const [users, setUsers] = useState<GetUserDetailResponse>()
  const [personalInformations, setPersonalInformations] = useState<GetPersonalInformationResponse>()

  useEffect(() => {
    getUser();
    getPersonalInformation();
   
  }, [])
  const getPersonalInformation =async()=>{
    const studentId = localStorage.getItem("studentId")
    if(studentId!=null){
      const getPersonalInformationResponse = await personalInformationService.getByStudentId(studentId);
      setPersonalInformations(getPersonalInformationResponse.data)

    }
  }
  const getUser = async () =>{
    const userId = localStorage.getItem("userId");
    if(userId!=null)
    {
      const userGetResponse = await userService.getById(userId)
      setUsers(userGetResponse.data)
    }   
  }
  return (
    <div>
      <div className="shadow mb-3 bg-white rounded">
        <div className="profilePicture">
          <div>
            <img
              src="https://assets.practice365.co.uk/wp-content/uploads/sites/1005/2023/03/Default-Profile-Picture-Transparent.png"
              className="profileImage"
            />
          </div>
        </div>
        <div className="p-3">
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-name.svg" />
            </div>
            <div className="col-10">
              <div>Ad Soyad</div>
              <div className="fw-bold">{users?.firstName} {users?.lastName}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-date.svg" />
            </div>
            <div className="col-10">
              <div>Doğum Tarihi</div>
              {personalInformations?.birthDate ? (
  <div className="fw-bold">
     {new Date(personalInformations.birthDate).toLocaleDateString()}
  </div>
) : (
  <div className="fw-bold">Belirtilmemiş</div>
)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-mail.svg" />
            </div>
            <div className="col-10">
              <div>E-Posta Adresi</div>
              {users?.email ? (
  <div className="fw-bold">
     {users?.email }
  </div>
) : (
  <div className="fw-bold">Belirtilmemiş</div>
)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-phone.svg" />
            </div>
            <div className="col-10">
              <div>Telefon Numarası</div>
              {personalInformations?.phoneNumber ? (
  <div className="fw-bold">
     {personalInformations?.phoneNumber}
  </div>
) : (
  <div className="fw-bold">Belirtilmemiş</div>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
