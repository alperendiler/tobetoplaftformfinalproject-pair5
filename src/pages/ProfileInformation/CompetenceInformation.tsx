import React, { useEffect, useState } from "react";
import "../../styles/personalInformation.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RemoveAlertModal from "../../components/Common/RemoveAlertModal";
import competenceService from "../../services/competenceService";
import { GetCompetenceResponse } from "../../models/responses/competence/getCompetenceResponse";

type Props = {};
interface CompetenceForm {
  competence: string;
}

export default function CompetenceInformation({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [competences, setCompetences] = useState<GetCompetenceResponse[]>([]);

  useEffect(() => {
    fetchCompetences();
  }, []);
  const fetchCompetences = async () => {
    //TODO: student id test için yazıldı, localStorage dan okunmalı
    const response = await competenceService.GetListByStudent(
      0,
      10,
      "69c4b730-10e9-49f3-9939-08dc24ff9ac4"
    );
    setCompetences(response.data.items);
  };

  const handleSubmit = async (competenceName:string) => {
    //todo: studentId localstoragedan okunacak
    const response = await competenceService.add({studentId:"69c4b730-10e9-49f3-9939-08dc24ff9ac4", name: competenceName});
    setCompetences(competences => [...competences, response.data]);
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const initialValues: CompetenceForm = {
    competence: "",
  };
  const validationSchema = Yup.object({
    competence: Yup.string(),
  });
  const [competenceList, setCompetenceList] = useState<Array<{ competence: string }>>(
    []
  );
  const [selectedCompetence, setSelectedCompetence] = useState("");
  useEffect(() => {
    if (selectedCompetence) {
      setCompetenceList((prevList) => [...prevList, { competence: selectedCompetence }]);
    }
  }, [selectedCompetence]);
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          setSelectedCompetence(values.competence);
          handleSubmit(values.competence);
        }}
      >
        <Form>
          <div className="row">
            <div className="col-md-12 col-12 mb-4 mt-3">
              <label className="form-label">Yetkinlik</label>
              <Field
                label="Yetkinlik"
                name="competence"
                as="select"
                className=" form-control form-select"
              >
                <option value="">Seçiniz</option>
                <option value="Sql">Sql</option>
                <option value="Muhasebe">Muhasebe</option>
                <option value="javascript">javascript</option>
                <option value="Aktif Öğrenme">Aktif Öğrenme</option>
                <option value="Aktif Dinlenme">Aktif Dinlenme</option>
                <option value="Uyum Sağlama">Uyum Sağlama</option>
                <option value="Yönetim Ve İdare">Yönetim Ve İdare</option>
                <option value="Reklam">Reklam</option>
                <option value="Algoritmalar">Algoritmalar</option>
                <option value="Android (İşletim Sistemleri)">
                  Android (İşletim Sistemleri)
                </option>
                <option value="Yönetim Ve İdare">Yönetim Ve İdare</option>
                <option value="Apache Ambari">Apache Ambari</option>
                <option value="Uygulama Mağzası (IOS)">
                  Uygulama Mağazası (IOS)
                </option>
                <option value="Apple Sağlık Kiti">Apple Sağlık Kiti</option>
                <option value="Apple IOS">Apple IOS</option>
                <option value="Apple Xcode">Apple Xcode</option>
              </Field>
            </div>

            <button type="submit" className="btn btn-personal-information">
              Kaydet
            </button>
          </div>
        </Form>
      </Formik>
      <div className="col-12 pt-4">
        {competences.map((item, index) => (
          <div key={index} className="my-grade">
            <div className="grade-details">
              <div className="grade-details-col">
                <span className="grade-details-content">{item.name}</span>
              </div>
              <span
                onClick={handleOpenModal}
                className=" grade-delete g-del"
              ></span>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <RemoveAlertModal onClose={handleCloseModal} />}
    </>
  );
}
