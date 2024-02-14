import React from 'react'
import "../styles/connection.css";
import { useState } from 'react';
import FormikInput from "../components/FormikInput/FormikInput";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

type Props = {}


interface ConnectionForm {
    name: string;
    email: string;
    message: string;


}

const Connection = ({ }: Props) => {


    const initialValues: ConnectionForm = {
        name: "",
        message: "",
        email: ""
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
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
        <div className="container-fluid connection-all" style={{ backgroundColor: '#181717' }}>
            <div className="container col-8 pt-5 mt-8 pb-5 align-items-center justify-content-center " style={{ backgroundColor: '#181717' }}>
                <div className="row " style={{ marginTop: '55px', paddingTop: '20px', paddingLeft: '3px', paddingBottom: '100px', display: 'flex', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                    <div className="col-12 col-lg-6 pt-4 ml-8 shadow-lg d-flex flex-column align-items-center justify-content-center">
                        <div><button className="top-span">İletişime Geçin</button></div>
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


                    <div className="col-12 col-lg-6 pl-6 pt-5  shadow-lg d-flex flex-column align-items-center justify-content-center ">
                        <div><button className="top-span">Mesaj Bırakın</button></div>
                        <br />
                        <h2>İletişim Formu</h2>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                            }}
                        >

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <label htmlFor="name"></label>

                                <FormikInput name="name"
                                    type="text"
                                    placeholder='Adınız Soyadınız'

                                />

                                <label htmlFor="email"></label>
                                <FormikInput
                                    type="email"
                                    name="email"
                                    placeholder='E-Mail'
                                />

                                {/* <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='E-Mail'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /> */}

                                <label htmlFor="message"></label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    placeholder='Mesajınız'
                                />
                                {/* <textarea
                                    id="message"
                                    placeholder='Mesajınız'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                /> */}
                                <div className="enoc">
                                    Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla <a href="#">Aydınlatma Metni </a>çerçevesinde işlenebilecektir.
                                </div><br />
                                <div className="connection-button">
                                    <button type="submit">Gönder</button></div>
                            </form>
                        </Formik>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Connection;