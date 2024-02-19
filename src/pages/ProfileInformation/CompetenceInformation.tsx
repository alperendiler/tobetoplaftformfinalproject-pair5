import React, { useEffect, useState } from "react";
import "../../styles/personalInformation.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RemoveAlertModal from "../../components/Common/RemoveAlertModal";
import competenceService from "../../services/competenceService";
import { GetCompetenceResponse } from "../../models/responses/competence/getCompetenceResponse";
import "../../styles/competence.css";
import { ToastContainer, toast } from "react-toastify";

type Props = {};
interface CompetenceForm {
  competence: string;
}

export default function CompetenceInformation({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [competences, setCompetences] = useState<GetCompetenceResponse[]>([]);
  const [selectForDeleteId, setSelectForDeleteId] = useState<string>("");


  useEffect(() => {
    fetchCompetences();
  }, []);
  const fetchCompetences = async () => {
    const studentId = localStorage.getItem("studentId")!;

    const response = await competenceService.GetListByStudent(0, 10, studentId);
    setCompetences(response.data.items);
  };

  const handleSubmit = async (competenceName: string) => {
    if (competences.some(item => item.name === competenceName)) {
      toast.error("Yetenek zaten listede var", {
        position: "top-right",
        autoClose: 5000, // 5 saniye sonra otomatik olarak kapat
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
      });
      return;
    }
    const studentId = localStorage.getItem("studentId")!;
    const response = await competenceService.add({
      studentId: studentId,
      name: competenceName,
    });
    setCompetences((competences) => [...competences, response.data]);
  };

  const handleDelete = async (competenceId: string) => {
    const response = await competenceService.delete(competenceId);
    setCompetences(competences.filter((i) => i.id !== competenceId));
  };

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
    competence: Yup.string().required("Lütfen bir yetkinlik seçiniz"),
  });
  const [competenceList, setCompetenceList] = useState<
    Array<{ competence: string }>
  >([]);
  const [selectedCompetence, setSelectedCompetence] = useState("");
  useEffect(() => {
    if (selectedCompetence) {
      setCompetenceList((prevList) => [
        ...prevList,
        { competence: selectedCompetence },
      ]);
    }
  }, [selectedCompetence]);

  
  return (
    <>
     <ToastContainer/>
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
              <ErrorMessage name="competence">
                {(message) => <p className="text-danger">{message}</p>}
              </ErrorMessage>
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
              <div>
                <span
                  className=" grade-delete g-del"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setSelectForDeleteId(item.id);
                  }}
                ></span>
              </div>
            </div>
          </div>
        ))}
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <img src="https://tobeto.com/_next/static/media/alert.309dc4c0.svg"></img>
                <br />
                <br />
                <h6 className="modal-title">
                  <b>Seçilen yetkinliği silmek istediğinize emin misiniz?</b>
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-muted">
                <p>
                  Daha sonra tekrardan listeden istediğiniz yetkinliği
                  ekleyebilirsiniz.
                </p>
              </div>
              <div className=" modal-footer modal-footer-feature">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hayır
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => handleDelete(selectForDeleteId)}
                >
                  Evet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
