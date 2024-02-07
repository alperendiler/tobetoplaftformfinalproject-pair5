import React, { useState, useEffect } from "react";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GetSocialMediaResponse } from "../../models/responses/socialMedia/getSocialMediaResponse";
import socialMediaService from "../../services/socialMediaService";
import studentSocialMediaService from "../../services/socialMediaStudentService";
import { GetSocialMediaStudentResponse } from "../../models/responses/SocialMediaStudentResponse.ts/getSocialMediaStudentResponse";
import { jwtDecode } from "jwt-decode";
import socialMediaStudentService from "../../services/socialMediaStudentService";
import studentService from "../../services/studentService";
import { toast } from "react-toastify";

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
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    fetchSocialMedias();
  }, []);
  const fetchSocialMedias = async () => {
    const response = await socialMediaService.getAll(0, 50);
    //getbyuserid
    setSocialMedias(response.data.items);
  };

  useEffect(() => {
    fetchStudentSocialMedias();
  }, []);
  const fetchStudentSocialMedias = async () => {
    const token = localStorage.getItem("user");
    const decodedToken: any = token ? jwtDecode(token) : null;
    const userId =
      decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
    const response = await studentSocialMediaService.GetListByUserId(
      0,
      50,
      userId
    );
    setSocialMediaStudents(response.data.items);
  };

  const handleSubmit = async (socialMediaName: string, url: string) => {
    const token = localStorage.getItem("user");
    const decodedToken: any = token ? jwtDecode(token) : null;
    const userId =
      decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
    const student = await studentService.getByUserId(userId);
    const response = await socialMediaStudentService.add({
      studentId: student.data.id,
      socialMediaId: socialMediaName,
      url: url,
    });
    setSocialMediaStudents((socialMediaStudents) => [
      ...socialMediaStudents,
      response.data,
    ]);
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
      <div className="row">
        <div className="">
          <div className="row">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                console.log(values);
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
                      {socialMedias.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
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
            {socialMediaStudents.map((item) => (
              <div className="row mt-2">
                <div className="col-10">
                  <span>{item.socialMediaName}</span>-<span>{item.url}</span>
                </div>
                <div className="col-1">
                  <button className="button-shape">
                  <svg
                    xmlns="https://tobeto.com/trash.svg"
                    width="30"
                    height="30"
                    fill="#fc6d6d"
                    onClick={() => handleDelete(item.id)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                  </button>
                </div>
                <div className="col-1">
                  <button className="button-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="black"
                    className="bi bi-pencil-square"
                   
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
