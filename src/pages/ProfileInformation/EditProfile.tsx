import React, {useState} from "react";
import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/MyProfileStyles/profilePicture.css";
import "../../styles/personalInformation.css";
import SidebarProfileInformation from "../../components/Content/ProfileInformation/SidebarProfile";
import PersonalInformation from "./PersonalInformation";
import MediaAccountInformation from "./MediaAccountInformation";
import Setting from "./Setting";
import CertificateInformation from "./CertificateInformation";
import CompetenceInformation from "./CompetenceInformation";
import EducationInformation from "./EducationInformation";
import ExperienceInformation from "./ExperienceInformation";
import LanguageInformation from "./LanguageInformation";

type Props = {};


export default function EditProfile({}: Props) {
  const [activeTab, setActiveTab] = useState<string>("PersonalInformation");

  const handleActiveTab = (text: string) => {
    setActiveTab(text);
  }

  const renderContent = () => {
    switch (activeTab) {
      case "PersonalInformation":
        return <PersonalInformation />;
      case "ExperienceInformation":
        return <ExperienceInformation />
      case "EducationInformation":
        return <EducationInformation />
      case "CompetenceInformation":
        return <CompetenceInformation />
      case "CertificateInformation":
        return <CertificateInformation />
      case "MediaAccountInformation":
        return <MediaAccountInformation />
      case "LanguageInformation":
        return <LanguageInformation />
      case "Setting":
        return <Setting />
      default:
        return <PersonalInformation />
    }
  };

  
  return (
    <>
      <div className="container pt-5 profile-footer">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation activeTab ={activeTab} setActiveTab={setActiveTab}/>
          </div>
          <div className="col-12 col-lg-9">
          {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}
