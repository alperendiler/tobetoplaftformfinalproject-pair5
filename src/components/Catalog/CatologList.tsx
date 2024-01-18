import React, { useState,useEffect } from 'react';
import "./catologList.css"
const CatologList = () => {
    const [catologs, setapplications] = useState<{ id: number; time: string; name: string; description: string; }[]>([]);

    const testCatologs = [
      {
        id: 1,
        time: '22.22',
        name: 'Alperen Diler', 
        description: 'Lorem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit a', 
      },
      {
        id: 1,
        time: '22.22',
        name: 'Alperen Diler', 
        description: 'Lorem ipsum dolLorem ipsum dolor sit aor sit a', 
      },
      {
        id: 1,
        time: '22.22',
        name: 'Alperen Diler', 
        description: 'Lorem ipsum doLorem ipsum dolor sit alor sit a', 
      },
      {
        id: 1,
        time: '22.22',
        name: 'Alperen Diler', 
        description: 'Lorem ipsum Lorem ipsum dolor sit adolor sit a', 
      },
      {
        id: 1,
        time: '22.22',
        name: 'Alperen Diler', 
        description: 'Lorem ipsum Lorem ipsum dolor sit adolor sit a', 
      },
     
    ];
    useEffect(() => {
      const fetchData = async () => {
        try {
  
  
          setapplications(testCatologs);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>
    {catologs && catologs.length > 0 ? (
        catologs.map((catolog) => (
            <div key={catolog.id} className="col-lg-4 col-md-6 col-12 educard-mobile" style={{ position: 'relative', cursor: 'pointer' }}>
            <div className="education-box-new fade-in">
              <img className="edubox-img" src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg" alt="" />
              <div className="catalog-content">
                <div>
                  <div className="property">
                    <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg">
                        <path d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span className="pro">{catolog.name}</span>
                    </div>
                    <div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/1200/svg">
                        <g clip-path="url(#clip0_24_412)">
                          <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M8 4V8L10.6667 9.33333" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_24_412">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="pro">{catolog.time}</span>
                    </div>
                    <div>
                      <span className="pro"></span>
                    </div>
                  </div>
                  <div className="name fw-bold">{catolog.description}</div>
                </div>
              </div>
              <div className="prog-cont">
                <div className="entry-btn"></div>
              </div>
            </div>
          </div>
            ))
            ) : (
              <p>Başvurular bulunamadı.</p>
            )}
          
          
   
    </>
  );
};

export default CatologList;