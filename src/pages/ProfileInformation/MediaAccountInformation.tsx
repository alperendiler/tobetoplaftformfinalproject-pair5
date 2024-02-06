import React, {useState, useEffect}from "react";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GetSocialMediaResponse } from "../../models/responses/socialMedia/getSocialMediaResponse";
import socialMediaService from "../../services/socialMediaService";


type Props = {};
interface MediaAccountForm {
  socialMediaUrl: string;
}
export default function MediaAccountInformation({}: Props) {

const [socialMedias, setSocialMedias] = useState<GetSocialMediaResponse[]>([]);

useEffect(() => {
  fetchSocialMedias();
}, []);
const fetchSocialMedias = async () => {
  const response = await socialMediaService.getAll(0, 50);
  //getbyuserid
  setSocialMedias(response.data.items);
};

  const initialValues: MediaAccountForm = {
    socialMediaUrl: "",
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
                    onSubmit={async (values) => {
                      console.log(values);
                    }}
                  >
                    <Form>
                      <div className="row">
                        <div className="col-md-4 col-12">
                          <Field
                            label="Yetkinlik"
                            name="competence"
                            as="select"
                            className=" form-control form-select"
                          >
                            <option value={0}>Seçiniz</option>
                            <option value={0}>Instagram</option>
                            <option value={0}>Twitter</option>
                            <option value={0}>LinkedIn</option>
                            <option value={0}>Behance</option>
                            <option value={0}>Dribble</option>
                            <option value={0}>Github</option>
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
              </div>
            </div>
    </>
  );
}
