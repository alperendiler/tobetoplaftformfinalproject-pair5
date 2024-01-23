import React from 'react';
import CompetenceCard from './CompetenceCard';


type Competence = {
  title: string;
};
function MyCompetence() {
  const userCompetences: Competence[] = [
    {
      title: 'C#',
    },
    {
      title: 'SQL',
    },
  ];
  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Yetkinliklerim
        </div>
        <hr/>
        <div>
        {userCompetences.map((competence, index) => (
            <CompetenceCard key={index} competence={competence} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCompetence;