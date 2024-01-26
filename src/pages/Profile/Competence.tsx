import React from 'react'
import SidebarProfileInformation from '../../components/Content/SidebarProfileInformation/SidebarProfileInformation'
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {}
interface CompetenceForm {
    company: string;
  }
export default function  ({}: Props) {
    
  const initialValues: CompetenceForm = {
    company: "",
  };
  const validationSchema = Yup.object({
    company: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
     
  });
  return (
    <>
    <div className="container profile-footer">
        <div className="row">
            <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation/>
            </div>
           <div className='col-12 col-lg-9'>
           <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values) => {
                console.log(values);
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
                      <option value={0}>Seçiniz</option>
                    </Field>
                  </div>
            
                 
                 
                 

                  <button type="submit" className="btn btn-personal-information">
                  Kaydet
                </button>
                </div>

              </Form>
            </Formik>
           </div>
       </div>
      </div>

     </>
  )
}