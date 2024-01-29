import React, { useEffect, useState } from 'react'
import SidebarProfileInformation from "../../components/Content/ProfileInformation/SidebarProfile";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ExamDetail from '../../components/Content/HomePage/ExamDetail';
import RemoveAlertModal from '../../components/Common/RemoveAlertModal';

type Props = {}
interface CompetenceForm {
    company: string;
  }
export default function  ({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const initialValues: CompetenceForm = {
    company: "",
  };
  const validationSchema = Yup.object({
    company: Yup.string()
     
  });
  const [companyList, setCompanyList] = useState< Array<{ company: string;  }>
  >([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  useEffect(() => {
    if (selectedCompany ) {

      setCompanyList((prevList) => [
        ...prevList,
        { company: selectedCompany},
      ]);
    }
 
  }, [selectedCompany]);
  return (
   
    <>
     
    <div className="container pt-5 profile-footer">
        <div className="row">
            <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation/>
            </div>
           <div className='col-12 col-lg-9'>
           <Formik
             validationSchema={validationSchema}
             initialValues={initialValues}
             onSubmit={async (values, actions) => {
              actions.setSubmitting(false);
               setSelectedCompany(values.company); 

              }}
            >

              <Form>
              <div className="row">

                  <div className="col-md-12 col-12 mb-4 mt-3">
                    <label className="form-label">Yetkinlik</label>
                    <Field
                      label="Yetkinlik"
                      name="company"
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
                      <option value="Android (İşletim Sistemleri)">Android (İşletim Sistemleri)</option>
                      <option value="Yönetim Ve İdare">Yönetim Ve İdare</option>
                      <option value="Apache Ambari">Apache Ambari</option>
                      <option value="Uygulama Mağzası (IOS)">Uygulama Mağzası (IOS)</option>
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
        {companyList.map((item, index) => (
        <div key={index} className="my-grade">
          <div className="grade-details">
          <div className="grade-details-col">
          <span className="grade-details-content">{item.company}</span>
          </div>
          <span onClick={handleOpenModal} className=" grade-delete g-del"  >
            </span>
            </div>
            </div>
        ))}
      
      </div>
           </div>
           
       </div>
      </div>
      {isModalOpen && (
      <RemoveAlertModal onClose={handleCloseModal} />
    )} 
     </>
  )
}