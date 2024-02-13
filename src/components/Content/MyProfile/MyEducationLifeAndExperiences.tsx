import React, { useEffect, useState } from 'react'
import "../../../styles/MyEducationLifeAndExperiences.css"
import { GetEducationResponse } from '../../../models/responses/education/getEducationResponse';
import educationService from '../../../services/educationService';
import { GetAllEducationResponse } from '../../../models/responses/education/getAllEducationResponse';
import { GetAllExperienceResponse } from '../../../models/responses/experience/getAllExperienceResponse';
import experienceService from '../../../services/experienceService';
type Props = {}

export default function MyEducationLifeAndExperiences({}: Props) {
    const [educations, setEducations] = useState<GetAllEducationResponse[]>([]);
    const [experiences, setExperiences] = useState<GetAllExperienceResponse[]>([]);

    useEffect(() => {
        getEducations();
        getExperiences();

    }, []);
    const getEducations = async () => {
      const studentId = localStorage.getItem("studentId")!;
  
      const response = await educationService.getListStudentId(
        0,
        10,
        studentId
      );
      setEducations(response.data.items);
    };

    const getExperiences = async () => {
      const studentId = localStorage.getItem("studentId")!;
  
      const response = await experienceService.getListStudentId(
        0,
        10,
        studentId
      );
      setExperiences(response.data.items);
    };
  return (
    <div className='col-12 '>
        <div className='cv-box cv-padding'>
            <div className='cv-box-header'>
                <div className='d-flex justify-content-between'>
                    <span>Eğitim Hayatım ve Deneyimlerim</span>
                </div>
                <hr />
            </div>
            {((educations && educations.length > 0) || (experiences && experiences.length > 0)) && (
  <div className="timeline">
    <div className="line">
      {educations && educations.length > 0 && educations.map((education) => (
        <div key={education.id} className="circle">
          <div className="before">
            <div className="content">
              <ul>
                <li>{new Date(education.startYear).getFullYear()}/{new Date(education.graduationYear).getFullYear()}</li>
                <li className="text-truncate" style={{ maxWidth: "125px" }}>{education.university}</li>
                <li className="text-truncate" style={{ maxWidth: "125px" }}>{education.department}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      {experiences && experiences.length > 0 && experiences.map((experience) => (
        <div key={experience.id} className="circle2">
          <div className="after">
            <div className="content">
              <ul>
                <li>{new Date(experience.startDate).getFullYear()}/{new Date(experience.endDate).getFullYear()}</li>
                <li className="text-truncate" style={{ maxWidth: "125px" }}>{experience.companyName}</li>
                <li className="text-truncate" style={{ maxWidth: "125px" }}>{experience.position}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
        </div>
    </div>
  )
}