import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikContext } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/MyProfileStyles/profilePicture.css";
import "../../styles/personalInformation.css";
import axios from "axios";
import personalInformationService from "../../services/personalInformationService";
import { GetAllPersonalInformationResponse } from "../../models/responses/personalInformation/getAllPersonalInformationResponse";
import { jwtDecode } from "jwt-decode";
import userService from "../../services/userService";
import { GetUserDetailResponse } from "../../models/responses/user/getUserDetailResponse";
import studentService from "../../services/studentService";
import { GetPersonalInformationResponse } from "../../models/responses/personalInformation/getPersonalInfırmationResponse";
import { ToastContainer } from "react-toastify";

type Props = {};

interface PersonalInformationForm {
  studentId: string;
  id: string | undefined;
  firstName: string;
  lastName: string;
  phoneNumber: string |undefined;
  birthDate: Date | null |undefined ;
  identityNo: string;
  email: string;
  country: string;
  city: string;
  county: string;
  address: string;
  about: string;
}

interface District {
  id: number;
  name: string;
}
interface Province {
  id: number;
  name: string;
  districts: District[];
}

export default function PersonalInformation({}: Props) {
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");
  const [startDate, setStartDate] = useState<Date | null|undefined>(null);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);

  const [personalInformations, setPersonalInformations] = useState<
    GetAllPersonalInformationResponse[]
  >([]);
  const [users, setUsers] = useState<GetUserDetailResponse>();
  const [studentId, setStudentId] = useState<string>("");
  const [personalInformationValues, setPersonalInformationValues] =
    useState<GetPersonalInformationResponse>();

  useEffect(() => {
    axios
      .get<{ status: string; data: Province[] }>(
        "https://turkiyeapi.dev/api/v1/provinces"
      )
      .then((response) => setProvinces(response.data.data))
      .catch((error) => console.error("API hatası:", error));

      getUser();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      const selectedProvinceData = provinces.find(
        (province) => province.name === selectedProvince
      );
      if (selectedProvinceData) {
        axios
          .get<{ status: string; data: Province }>(
            "https://turkiyeapi.dev/api/v1/provinces/" + selectedProvinceData.id
          )
          .then((response) => setDistricts(response.data.data.districts))
          .catch((error) => console.error("API hatası:", error));
      }
    } else {
      setDistricts([]);
    }
  }, [selectedProvince, provinces]);
  const getUser = async () => {
    const token = localStorage.getItem("user");

    const decodedToken: any = token ? jwtDecode(token) : null;

    const userId =
      decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
      const userResponse= await userService.getById(userId)
      setUsers(userResponse.data)
      console.log(userResponse.data)
      const student = await studentService.getByUserId(userId);
      console.log(userId)
      setStudentId(student.data.id)
      const personalInformationResponse = await personalInformationService.getByStudentId(student.data.id)     
      setPersonalInformationValues(personalInformationResponse.data)
      console.log(personalInformationResponse.data)

  }
 const addPersonelInformation= async (values:PersonalInformationForm)=>{
 
    const personalInformationResponse = await personalInformationService.getByStudentId(studentId)     
    console.log(personalInformationResponse.data)

    if(personalInformationResponse.data===undefined){

      await personalInformationService.add(values)
      const personalInformationResponse = await personalInformationService.getByStudentId(studentId)     
      setPersonalInformationValues(personalInformationResponse.data)

    }else{
      const personalInformationResponse = await personalInformationService.update(values)
      setPersonalInformationValues(personalInformationResponse.data)
    }
  };
  const [initialValues, setInitialValues] = useState<PersonalInformationForm>({
    id: "",
    studentId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDate: null,
    identityNo: "",
    email: "",
    country: "",
    city: "",
    county: "",
    address: "",
    about: "",
  });
  const [initialValuesKey, setInitialValuesKey] = useState<number>(0); 

  useEffect(() => {
    if (users != null) {
      const newInitialValues: PersonalInformationForm = {
        id: "",
        firstName: users.firstName ?? "",
        lastName: users.lastName,
        phoneNumber: personalInformationValues?.phoneNumber,
        birthDate: personalInformationValues?.birthDate ,
        identityNo:personalInformationValues?.identityNo ?? "",
        email: users.email,
        country: personalInformationValues?.country ?? "",
        studentId: personalInformationValues?.studentId ?? "",
        city: personalInformationValues?.city ?? "",
        county: personalInformationValues?.county ?? "",
        address: personalInformationValues?.address ?? "",
        about: personalInformationValues?.about ?? "",
      };
      console.log(personalInformationValues?.about);

      setInitialValues(newInitialValues);
      setInitialValuesKey(prevKey => prevKey + 1);
      setSelectedProvince(newInitialValues.city);
      setPhoneValue(newInitialValues.phoneNumber);

    }
  }, [personalInformationValues,users]);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(50, "En fazla 50 karakter girebilirsiniz"),
    lastName: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 200 karakter girebilirsiniz"),
    //  phoneNumber: Yup.string()
      //.matches(/^[0-9]{10}$/, 'Geçerli bir telefon numarası girin')
    //  .required('Doldurulması zorunlu alan*'),
    identityNo: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .test(function (value) {
        if (value && value[0] !== "0") {
          return true; 
        } else {
          return this.createError({
            message: "TC Kimlik Numaranızı doğru giriniz",
          });
        }
      })
      .min(11, "TC Kimlik Numaranızı 11 karakterli olacak şekilde giriniz")
      .max(11, "TC Kimlik Numaranızı 11 karakterli olacak şekilde giriniz"),
    email: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .email("Geçerli bir e-posta adresi giriniz"),
      //country: Yup.string().required("Doldurulması zorunlu alan*"),
      // city: Yup.string().required("Doldurulması zorunlu alan*"),
      //county: Yup.string().required("Doldurulması zorunlu alan*"),
     address: Yup.string().max(
      200,
      "En fazla 200 karakter girebilirsiniz"
    ),
    about: Yup.string().max(300, "En fazla 300 karakter girebilirsiniz"),
  });

  return (
    <>
          <ToastContainer/>
            <div className=" d-flex justify-content-center profile-picture-form">
              <img
                className="profile-picture-image"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75"
              />
            </div>
            <Formik
            key={initialValuesKey} 
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values) => {
                values.birthDate = startDate;
                values.city=selectedProvince;
                values.phoneNumber=phoneValue
                values.studentId=studentId;
                values.id=personalInformationValues?.id;
                
                addPersonelInformation(values);
              }}
            >
              
              <Form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <FormikInput name="firstName" label="Adınız*" disabled />
                    <div className="mb-3">
                      <label className="form-label">Telefon Numaranız*</label>
                      
                      <PhoneInput
                        placeholder="5** *** ** **"
                        defaultCountry="TR"
                        value={phoneValue}
                        onChange={setPhoneValue}
                        name="phoneNumber"
                        limitMaxLength={true}
                      />
                      <ErrorMessage name="phoneNumber">
                        {(message) => <p className="text-danger">{message}</p>}
                      </ErrorMessage>
                    </div>

                    <div className="mt-3">
                      <FormikInput
                        name="identityNo"
                        label="TC Kimlik No*"
                      />
                      <div className="mb-3">
                        <i className="text-danger">
                          *Aboneliklerde fatura için doldurulması zorunlu alan
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormikInput name="lastName" label="Soyadınız*" disabled />
                    <div className="mb-3">
                      <label className="form-label">Doğum Tarihiniz*</label>
                      <br />
                      <DatePicker
                        className="date-picker"
                        name="birthDate"
                        selected={startDate || undefined}
                        onChange={(date) => {
                          setStartDate(date );
                        }}
                      />
                    </div>
                    <div>
                      <FormikInput name="email" label="E-posta" type="email" disabled/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Ülke*</label>
                  <Field
                    label="Ülke*"
                    name="country"
                    as="select"
                    className=" form-control form-select"
                  >
                    <option value={0}>Bir ülke seçin</option>
                    <option value={1}>Türkiye</option>
                  </Field>
                </div>
                <div className=" row mb-3 ">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Şehir*</label>
                    <Field
                      label="Şehir*"
                      name="city"
                      as="select"
                      className=" form-control form-select"
                      onChange={(e: any) => setSelectedProvince(e.target.value)}
                      value={selectedProvince }
                    >
                      <option value={undefined}>Bir şehir seçin</option>
                      {provinces && provinces.length > 0 ? (
                        provinces.map((province) => ( 
              
                        <option value={province.name} key={province.id}>
                          {province.name}
                        </option>
                       ))
                       ) : (
                        <option value="hata">
                      </option>
                       )}  
                    </Field>
                  </div>
                  <div className="col-md-6 col-12">
                    <label className="form-label">İlçe*</label>
                    <Field
                      label="İlçe*"
                      name="county"
                      as="select"
                      className=" form-control form-select"
                    >
                      <option value="">Bir ilçe seçin</option>
                      {districts.map((district) => (
                        <option key={district.id} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <FormikInput
                  className="no-resize"
                  name="address"
                  label="Mahalle/Sokak"
                  as="textarea"
                  placeholder=""
                />

          <FormikInput
            className="no-resize"
            name="about"
            label="Hakkımda"
            as="textarea"
            placeholder="Kendini kısaca tanıt"
          />
          <button type="submit" className="btn btn-personal-information">
            Kaydet
          </button>
        </Form>
      </Formik>
    </>
  );
}
