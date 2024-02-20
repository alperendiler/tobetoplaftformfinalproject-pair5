import React from 'react'
import "../styles/connection.css";
import { useState,  useRef  } from 'react';
import FormikInput from "../components/FormikInput/FormikInput";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import {useNavigate} from "react-router-dom";



type Props = {}

const key = "6LeBsHMpAAAAABkznEGjEKudHplJpTumSoHiXL-y";
function onChange(value: any) {
}

interface ConnectionForm {
    name: string;
    email: string;
    message: string;

}

const Connection = ({ }: Props) => {

    const navigate = useNavigate(); 

    const initialValues = {
        name: "",
        message: "",
        email: ""
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isCaptcha, setIsCaptcha] = useState(false);

function sendEmail(values: any): Promise<void> {
    return new Promise((resolve, reject) => {
        emailjs.send('service_2b2', 'template_2b2', values, 'qteKHXYloBkH6jq7O')
            .then((result) => {
                console.log(result.text);
                resolve(); // E-posta gönderme başarılı oldu, Promise'i çöz
            })
            .catch((error) => {
                console.log(error.text);
                reject(error); // E-posta gönderme başarısız oldu, Promise'i reddet
            });
    });
}
      
    const handleRecaptchaChange = (value:any) => {
        if (value) {
            setIsCaptcha(true);  //Recaptcha doğrulandıysa set i true yap
        } else {
            setIsCaptcha(false);
        }
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Doldurulması zorunlu alan*"),
        message: Yup.string()
            .required("Doldurulması zorunlu alan*"),
        email: Yup.string()
            .required("Doldurulması zorunlu alan*")

    });

    return (
        <div className="container-fluid connection-all"
            style={{ backgroundColor: '#181717' }}>

            <div className="container col-8 pt-5 mt-8 pb-5 justify-content-center "
                style={{ backgroundColor: '#181717' }}>

                <div className="row "
                    style={{
                        marginTop: '25px',
                        paddingTop: '20px',
                        paddingLeft: '30px',
                        paddingRight: '30px',
                        paddingBottom: '100px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px'
                    }}>
                    <div className="course-left col-12 col-lg-6 pt-15 ml-8 
                    shadow-lg justify-content-center">

                        <div><button className="top-span ">İletişime Geçin</button></div>
                        <br />
                        <h2>İletişim Bilgileri</h2>
                        <div className="table-cn">
                            <table>
                                <tr>
                                    <td className="td1">Firma Adı:</td>
                                    <td className="td2">TOBETO</td>
                                </tr>
                                <tr>
                                    <td className="td1">Firma<br />Unvan:</td>
                                    <td className="td2">Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim Şirketi</td>
                                </tr>
                                <tr>
                                    <td className="td1">Vergi<br />Dairesi:</td>
                                    <td className="td2">Beykoz</td>
                                </tr>
                                <tr>
                                    <td className="td1">Vergi No:</td>
                                    <td className="td2">1050250859</td>
                                </tr>
                                <tr>
                                    <td className="td1">Telefon:</td>
                                    <td className="td2">(0216) 331 48 00</td>
                                </tr>

                                <tr>
                                    <td className="td1">E-Posta:</td>
                                    <td className="td2">info@tobeto.com</td>
                                </tr>
                                <tr>
                                    <td className="td1">Adres:</td>
                                    <td className="td2">Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz/İstanbul</td>
                                </tr>
                            </table>
                        </div><br /><br />
                        <div className='table-cn2'>
                            <table>
                                <tr>
                                    <td className="td3">İstanbul Kodluyor için Telefon:</td>
                                    <td className="td4">(0216) 969 22 40</td>
                                </tr>
                                <tr>
                                    <td className="td3">İstanbul Kodluyor için E-Posta:</td>
                                    <td className="td4">istanbulkodluyor@tobeto.com</td>
                                </tr>

                            </table>
                        </div>

                    </div>


                    <div className="course-right col-12 col-lg-6 pl-6 pt-5  shadow-lg justify-content-center ">
                        <div><button className="top-span">Mesaj Bırakın</button></div>
                        <br />
                        <h2>İletişim Formu</h2>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={(values, { setSubmitting }) => {
                                if (isCaptcha) {
                                    console.log("Form submitted");
                                    sendEmail(values)
                                        .then(() => {
                                            // E-posta gönderme işlemi başarılıysa, yönlendirme yap
                                            navigate('/connectionsuccess');
                                        })
                                        .catch(error => {
                                            // E-posta gönderme işlemi başarısızsa, hata mesajını göster
                                            console.error("Email sending failed:", error);
                                        })
                                        .finally(() => {
                                            // Form gönderme işlemi tamamlandığında submit düğmesini etkinleştir
                                            setSubmitting(false);
                                        });
                                } else {
                                    console.log("Recaptcha not verified");
                                }
                            }}
                            
                            // validateOnBlur={false} // Blur olduğunda doğrulama yapılmasını devre dışı bırakır
                            // validateOnChange={false} // Değer değiştiğinde doğrulama yapılmasını devre dışı bırakır
                         
                        >

                            {formik => (
                                <form className="contact-form" onSubmit={formik.handleSubmit}>
                                    {/* İsim alanı */}
                                    <label htmlFor="name"></label>
                                    <FormikInput
                                        name="name"
                                        type="text"
                                        placeholder='Adınız Soyadınız'
                                    />
                                 
                            
                                    {/* E-posta alanı */}
                                    <label htmlFor="email"></label>
                                    <FormikInput
                                        type="email"
                                        name="email"
                                        placeholder='E-Mail'
                                    />
                                 
                                    {/* Mesaj alanı */}
                                    <label htmlFor="message"></label>
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        placeholder='Mesajınız'
                                    />
                                    {formik.errors.message && formik.touched.message && (
                                        <div className="form-error-message">Doldurulması zorunlu alan*</div>
                                    )}
                                    <div className="enoc">
                                        Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla
                                        <a href="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni" target="_blank"> Aydınlatma Metni</a> çerçevesinde işlenebilecektir.
                                    </div><br />
                                    <div className="capture-style mt-2">
                                        <ReCAPTCHA
                                            sitekey={key}
                                            size="normal"
                                            hl="tr"
                                            theme="light"
                                            onChange={handleRecaptchaChange}
                                        />
                                    </div><br />
                                    <div className="connection-button">
                                       <button type="submit" disabled={!isCaptcha}>Gönder</button></div>
                                    {/* isCaptcha true(doğrulanma) olmuşsa disabled false olacak ve buton görünecek */}

                                </form>

                            )}
                        </Formik>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Connection; 