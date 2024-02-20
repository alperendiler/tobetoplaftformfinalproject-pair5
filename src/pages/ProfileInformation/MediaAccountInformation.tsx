import React, { useState, useEffect } from "react";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GetSocialMediaResponse } from "../../models/responses/socialMedia/getSocialMediaResponse";
import socialMediaService from "../../services/socialMediaService";
import studentSocialMediaService from "../../services/socialMediaStudentService";
import { GetSocialMediaStudentResponse } from "../../models/responses/SocialMediaStudentResponse.ts/getSocialMediaStudentResponse";
import socialMediaStudentService from "../../services/socialMediaStudentService";
import "../../styles/MyProfileStyles/socialMedia.css";
import { ToastContainer } from "react-toastify";
import { ca } from "date-fns/locale";

type Props = {};
interface MediaAccountForm {
  socialMediaUrl: string;
  socialMediaName: string;
}

export default function MediaAccountInformation({}: Props) {
  const [socialMedias, setSocialMedias] = useState<GetSocialMediaResponse[]>(
    []
  );
  const [socialMediaStudents, setSocialMediaStudents] = useState<
    GetSocialMediaStudentResponse[]
  >([]);
  const [
    selectForUpdateSocialMediaStudent,
    setSelectForUpdateSocialMediaStudent,
  ] = useState<GetSocialMediaStudentResponse>();
  const [selectForDeleteId, setSelectForDeleteId] = useState<string>("");

  useEffect(() => {
    fetchSocialMedias();
  }, []);
  const fetchSocialMedias = async () => {
    const response = await socialMediaService.getAll(0, 50);
    setSocialMedias(response.data.items);
  };

  useEffect(() => {
    fetchStudentSocialMedias();
  }, []);
  const fetchStudentSocialMedias = async () => {
    const studentId = localStorage.getItem("studentId")!;
    const response = await studentSocialMediaService.getListByStudentId(
      0,
      50,
      studentId
    );
    setSocialMediaStudents(response.data.items);
  };

  const handleSubmit = async (socialMediaName: string, url: string) => {
    const studentId = localStorage.getItem("studentId")!;
    const response = await socialMediaStudentService.add({
      studentId: studentId,
      socialMediaId: socialMediaName,
      url: url,
    });
    if (response.status == 200) {
      setSocialMediaStudents((socialMediaStudents) => [
        ...socialMediaStudents,
        response.data,
      ]);
    }
  };

  const handleDelete = async (socialMediaStudentId: string) => {
    const response = await socialMediaStudentService.delete(
      socialMediaStudentId
    );
    setSocialMediaStudents(
      socialMediaStudents.filter((i) => i.id !== socialMediaStudentId)
    );
  };

  const initialValues: MediaAccountForm = {
    socialMediaUrl: "",
    socialMediaName: "",
  };
  const validationSchema = Yup.object({
    socialMediaUrl: Yup.string()
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
  });
  return (
    <>
      <ToastContainer />
      <div className="row">
        <div className="">
          <div className="row">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                handleSubmit(values.socialMediaName, values.socialMediaUrl);
              }}
            >
              <Form>
                <div className="row">
                  <div className="col-md-4 col-12">
                    <Field
                      label=""
                      name="socialMediaName"
                      as="select"
                      className=" form-control form-select"
                    >
                      <option value="">Seçiniz</option>
                      {socialMedias && socialMedias.length > 0 ? (
                        socialMedias.map((socialMedia) => (
                          <option key={socialMedia.id} value={socialMedia.id}>
                            {socialMedia.name}
                          </option>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </Field>
                  </div>
                  <div className="col-md-8 col-12">
                    <FormikInput
                      name="socialMediaUrl"
                      type="text"
                      placeholder="https://"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-personal-information"
                  >
                    Kaydet
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div>
            {socialMediaStudents.map((item, index) => (
              <>
                <div className="m-2 text-muted">
                  {item.socialMediaName &&
                    item.socialMediaName.charAt(0).toUpperCase() +
                      item.socialMediaName.slice(1)}
                </div>
                <div className="row mt-2 row-feature " key={index}>
                  <div className="col-10">
                    <span>{item.socialMediaName}</span>-<span>{item.url}</span>
                  </div>
                  <div className="col-1">
                    <button
                      className="button-shape button-feature-1 border border-1"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg
                        xmlns="https://tobeto.com/trash.svg"
                        width="23"
                        height="23"
                        fill="white"
                        className="ms-1 mt-1"
                        onClick={() => {
                          setSelectForDeleteId(item.id);
                        }}
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </div>
                  <div className="col-1">
                    <button
                      className="button-shape button-feature-2"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#sampleModal"
                      onClick={() => {
                        setSelectForUpdateSocialMediaStudent(item);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="white"
                        className="bi bi-pencil-square ms-1 mt-1"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                    </button>
                    <div
                      className="modal fade"
                      id="sampleModal"
                      aria-labelledby="sampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="sampleModalLabel">
                              <b>Medya Hesabı Güncelleme</b>
                            </h4>
                          </div>
                          <div className="modal-body row">
                            <div className="col-md-4 ">
                              <select
                                className="form-select select-feature"
                                name="socialMediaName"
                                aria-label="Default select example"
                              >
                                <option value="">Seçiniz</option>
                                {socialMedias && socialMedias.length > 0 ? (
                                  socialMedias.map((socialMedia, index) => (
                                    <option key={index} value={socialMedia.id}>
                                      {socialMedia.name}
                                    </option>
                                  ))
                                ) : (
                                  <div></div>
                                )}
                              </select>
                            </div>
                            <div className="col-md-8 ">
                              <input
                                className="edit-feature"
                                name="socialMediaUrl"
                                type="text"
                                placeholder="https://"
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary modal-button"
                            >
                              Güncelle
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary modal-button"
                              data-bs-dismiss="modal"
                            >
                              Kapat
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
                      <b>
                        Seçilen sosyal medya hesabını silmek istediğinize emin
                        misiniz?
                      </b>
                    </h6>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-muted">
                    <p>Bu işlem geri alınamaz.</p>
                  </div>
                  <div className=" modal-footer modal-footer-feature">
                    <button
                      type="button"
                      className="btn btn-secondary-2"
                      data-bs-dismiss="modal"
                    >
                      Hayır
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary-2"
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
        </div>
      </div>
    </>
  );
}
