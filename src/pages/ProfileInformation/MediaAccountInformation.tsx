import React from 'react'
import SidebarProfileInformation from "../../components/Content/ProfileInformation/SidebarProfile";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {}
interface MediaAccountForm {
    socialMediaUrl: string;
  }
export default function MediaAccount({}: Props) {
      
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
          <div className="container pt-5 profile-footer">
        <div className="row">
            <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation/>
            </div>
           <div className='col-12 col-lg-9'>
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
            
                 <div className='col-md-8 col-12'>
                    <FormikInput name='socialMediaUrl' type='text' placeholder='https://'/>
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
           </div>
       </div>
      </div>   
    </>
  )
}