import React from "react";
import "../../../styles/MyProfileStyles/competenceCard.css";

type Competence = {
  title: string;
};

type CompetenceCardProps = {
  competence: Competence;
};

function CompetenceCard({ competence }: CompetenceCardProps) {
  const { title } = competence;

  return (
    <div>
      <div className="p-2">
        <div className="row rounded-pill shadow mb-3 p-2 text-muted bg-white competenceStyles">
          <div className="col-3">
            <div>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetenceCard;
