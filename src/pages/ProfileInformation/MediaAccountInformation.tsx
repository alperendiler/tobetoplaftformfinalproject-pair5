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

type Props = {};
interface MediaAccountForm {
  socialMediaUrl: string;
  socialMediaName: string
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

  const initialValues: MediaAccountForm = {
    socialMediaUrl: "",
    socialMediaName:""
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
                handleSubmit(values.socialMediaName,values.socialMediaUrl);
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
                <div>
                  <span>
                    {item.socialMediaName}
                  </span>
                  -
                  <span>
                    {item.url}
                  </span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}
