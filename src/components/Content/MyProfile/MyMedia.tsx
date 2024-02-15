import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { GetSocialMediaResponse } from "../../../models/responses/socialMedia/getSocialMediaResponse";
import socialMediaService from "../../../services/socialMediaService";
import socialMediaStudentService from "../../../services/socialMediaStudentService";
import { GetSocialMediaStudentResponse } from "../../../models/responses/SocialMediaStudentResponse.ts/getSocialMediaStudentResponse";

type Media = {
  mediaType: string;
  url: string;
  imageUrl: string; // Ekledik
};

function MyMedia() {
  const [medias, setMedias] = useState<GetSocialMediaStudentResponse[]>([]);
  useEffect(() => {
    getMedias();
  }, []);
  const getMedias = async () => {
    const studentId = localStorage.getItem("studentId")!;
    console.log(studentId)
    const response = await socialMediaStudentService.getListByStudentId(
      0,
      10,
      studentId
    );
    console.log(response.data)
    setMedias(response.data.items);
  };

  return (
    <div>
      <div className="shadow mb-5 bg-white rounded p-3">
        <div className="fw-bold h5">Medya Hesaplarım</div>
        <hr />
        <div className="row p-2">
          
  {medias && medias.length > 0 ? (
  medias.map((media) => ( 
              
          <MediaCard key={media.id} mediaType={media.socialMediaName} url={media.url} imageUrl={media.url} />    
  ))
  ) : (
    <div  className="fw-bold">
      Henüz bir medya hesabı eklemediniz
    </div>
  )}   
        </div>
      
      </div>
    </div>
  );
}

export default MyMedia;
