import React from 'react'
import "../styles/connection.css";
import { useState } from 'react';


type Props = {

}

const Connection = ({ }: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="all">
            <div className="container-cn col-8 ">
                <div className="row">
                    <div className="col-6 connection-left">
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
                                    <td className="td1">Firma<br/>Unvan:</td>
                                    <td className="td2">Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim Şirketi</td>
                                </tr>
                                <tr>
                                    <td className="td1">Vergi<br/>Dairesi:</td>
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
                        </div><br/><br/>
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


                    <div className="col-6 connection-right">
                        <div><button className="top-span">Mesaj Bırakın</button></div>
                        <br />
                        <h2>İletişim Formu</h2>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Adınız Soyadınız'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                placeholder='E-Mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="message"></label>
                            <textarea
                                id="message"
                                placeholder='Mesajınız'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="enoc">
                                Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla <a href="#">Aydınlatma Metni </a>çerçevesinde işlenebilecektir.
                            </div><br />
                            <button type="submit">Gönder</button>
                        </form>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Connection;