import React from 'react'
import "../styles/connection.css";
import { useState } from 'react';
import FormikInput from "../components/FormikInput/FormikInput";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

type Props = {}

//const nodemailer = require('nodemailer');

const key = "6LeBsHMpAAAAABkznEGjEKudHplJpTumSoHiXL-y";
function onChange(value: any) {
}

interface ConnectionForm {
    name: string;
    email: string;
    message: string;

}

const Connection = ({ }: Props) => {

    const initialValues = {
        name: "",
        message: "",
        email: ""
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isCaptcha, setIsCaptcha] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    function sendEmail(e:any) {
        e.preventDefault();
    
        emailjs.sendForm('service_2b2', 'template_2b2', e.target, 'qteKHXYloBkH6jq7O')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.elasticemail.com',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'busraknar37@gmail.com', // e-posta hesabınızın kullanıcı adı
    //         pass: 'Ah21011973.' // e-posta hesabınızın şifresi
    //     }
    // });
    
    // // E-posta seçenekleri
    // let mailOptions = {
    //     from: email, // gönderen adres
    //     to: 'busraknar37@gmail.com', // alıcı adres
    //     text: message// e-posta içeriği (metin)
    // };
    
    // // E-posta gönderme işlemi
    // transporter.sendMail(mailOptions, (error:any, info:any) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    // });
//---------------------


// Gönderen ve alıcı bilgileri
// const from = `"${name}" <${email}>`;
// const to = 'busraknar37@gmail.com';

// // E-posta içeriği

// const text = message;

// // SMTP sunucu ayarları
// const smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // SSL/TLS
//     auth: {
//         user: 'busraknar37@gmail.com',
//         pass: 'Ah21011973.',
//     },
// };

// // Transporter oluşturma
// const transporter = nodemailer.createTransport(smtpConfig);

// // E-posta gönderme
// transporter.sendMail({
//     from,
//     to,
//     text,
// }, (error: any, info: any) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('E-posta başarıyla gönderildi: ' + info.response);
//     }
// });




    const handleRecaptchaChange = (value: any) => {
        setIsCaptcha(true);   //  Recaptcha doğrulandıysa
        //set'i true yap ve butonu aktif et
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
                            onSubmit={(values, formikProps) => {
                                if (isCaptcha) {
                                    console.log("Form submitted");
                                    // formun başarıyla gönderildikten sonra formSubmitted bayrağı 
                                    //sıfırlanır, 1 kere form submitted olur
                                    setFormSubmitted(false);
                                } else {
                                    console.log("Recaptcha not verified");
                                }
                            }}
                            validateOnBlur={false} // Blur olduğunda doğrulama yapılmasını devre dışı bırakır
                            validateOnChange={false} // Değer değiştiğinde doğrulama yapılmasını devre dışı bırakır
                        //Sadece form submit olduğunda doğrulama yapar 
                        >

                            {formik => (
                                <form className="contact-form" onSubmit={sendEmail}>
                                    {/* İsim alanı */}
                                    <label htmlFor="name"></label>
                                    <FormikInput
                                        name="name"
                                        type="text"
                                        placeholder='Adınız Soyadınız'
                                    />
                                    {formik.errors.name && formik.touched.name && (
                                        <div className="form-error-message">Doldurulması zorunlu alan*</div>
                                    )}

                                    {/* E-posta alanı */}
                                    <label htmlFor="email"></label>
                                    <FormikInput
                                        type="email"
                                        name="email"
                                        placeholder='E-Mail'
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <div className="form-error-message">Doldurulması zorunlu alan*</div>
                                    )}

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
                     {/* <script src="../script.tsx"></script>
                    <script src="https://smtpjs.com/v3/smtp.js"></script> */}
                </div>
            </div>
        </div>
    );
}

export default Connection; 