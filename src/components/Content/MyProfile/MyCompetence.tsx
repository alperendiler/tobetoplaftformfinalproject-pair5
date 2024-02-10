import React, { useEffect, useState } from 'react';
import CompetenceCard from './CompetenceCard';
import competenceService from '../../../services/competenceService';
import { GetCompetenceResponse } from '../../../models/responses/competence/getCompetenceResponse';


type Competence = {
  title: string;
};
function MyCompetence() {
  const [competences, setCompetences] = useState<GetCompetenceResponse[]>([]);
  useEffect(() => {
    getCompetences();
  }, []);
  const getCompetences = async () => {
    const studentId = localStorage.getItem("studentId")!;

    const response = await competenceService.GetListByStudent(
      0,
      10,
      studentId
    );
    setCompetences(response.data.items);
  };

  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Yetkinliklerim
        </div>
        <hr/>
        <div>
        {competences && competences.length > 0 ? (
  competences.map((competence) => ( 
              
  <div key={competence.id} className="fw-bold">
     {competence?.name}
  </div>
  ))
  ) : (
    <div  className="fw-bold">
      Yetkinlik Eklenmedi
    </div>
  )}   
  
     </div>
      </div>
    </div>
  )
}

export default MyCompetence;