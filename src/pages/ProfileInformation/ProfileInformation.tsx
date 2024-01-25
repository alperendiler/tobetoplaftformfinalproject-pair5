import React from "react";
import "../../styles/personalInformation.css";
import PersonalInformation from "./PersonalInformation";
import SidebarProfileInformation from "../../components/Content/ProfileInformation/SidebarProfile";
import EducationInformation from "./EducationInformation";
import LanguageInformation from "./LanguageInformation";

type Props = {};

export default function ProfileInformation({}: Props) {

  return (
    <>
      {/* <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation />
          </div>
          <div className="col-12 col-lg-9">
            <PersonalInformation/>
            <EducationInformation />
            <LanguageInformation/>
          </div>
        </div>
      </div> */}
    </>
  );
}
