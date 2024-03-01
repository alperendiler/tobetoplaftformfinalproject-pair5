import React, { useState,useEffect } from 'react';
import courseService from '../../../services/courseService';
import { GetAllCourseResponse } from '../../../models/responses/course/getAllCourseResponse';
import { Link } from 'react-router-dom';
import "../../../styles/Catalog/catalogList.css"
const CatalogList = () => {
    // const [catalogs, setapplications] = useState<{ id: number; time: string; name: string; description: string; image: string }[]>([]);
    const [catalogs, setapplications] = useState<GetAllCourseResponse[]>([]);

    const testCatalogs = [
      {
        id: 1,
        time: '4s 14dk',
        name: 'Gürkan İlişen', 
        description: 'Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu', 
        image: "https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
      },
      {
        id: 2,
        time: '40dk',
        name: 'Gürkan İlişen', 
        description: 'Sürdürülebilir Bir Dünya için Bireysel Farkındalık', 
        image: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365670_08eb2bab1a.jpg"
      },
      {
        id: 3,
        time: '2s 1dk',
        name: 'Gürkan İlişen', 
        description: 'Web Sayfası Tasarımı Nasıl Oluşturulur? - HTML (Temel Seviye)', 
        image: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365274_0e51ec7bdb.jpg"
      },
      {
        id: 4,
        time: '20dk',
        name: 'Gürkan İlişen', 
        description: 'Yaratıcı Düşünme ve İnovasyon Teknikleri', 
        image: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_238_ea465ab18a.jpg"
      },
      {
        id: 5,
        time: '1s 15dk',
        name: 'Gürkan İlişen', 
        description: 'Problem Çözme Teknikleri',
        image: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_210_e8f964f5a9.jpg" 
      },
     
    ];
    useEffect(() => {
      const fetchData = async () => {
        try {
  let response = await courseService.GetPublicCourseList()
  console.log(response)
  
          setapplications(response.data.items);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>
    {catalogs && catalogs.length > 0 ? (
        catalogs.map((catalog) => (
            <div key={catalog.id} className="col-lg-4 col-md-6 col-12 educard-mobile" style={{ position: 'relative', cursor: 'pointer' }}>
            <div className="education-box-new fade-in">
              <img className="edubox-img" src={catalog.imageUrl} alt="" />
              <div className="catalog-content">
                <div>
                  <div className="property">
                    <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg">
                        <path d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14" stroke="#fff"  ></path>
                        <path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#fff"  ></path>
                      </svg>
                      {/* <span className="pro">{catalog.name}</span> */}
                    </div>
                    <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg">
                        <g >
                          <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#fff" ></path>
                          <path d="M8 4V8L10.6667 9.33333" stroke="#fff"  ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_24_412">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="pro"></span>
                    </div>
                    <div>
                      <span className="pro"></span>
                    </div>
                  </div>
                  
                  <Link  className="apply-btn name fw-bold " to={"/courses/" + catalog.id}>{catalog.name}</Link>

                </div>
              </div>
              <div className="prog-cont">
                <div className="entry-btn"></div>
              </div>
            </div>
          </div>
            ))
            ) : (
              <p>Katalog bulunamadı.</p>
            )}
          
          
   
    </>
  );
};

export default CatalogList;