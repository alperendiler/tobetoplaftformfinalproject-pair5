import React from "react";
import "../../styles/MyProfileStyles/mediaCard.css"

type Media = {
  mediaType: string;
  url: string;
  imageUrl?: string; 
};

type MediaCardProps = {
  media: Media;
};

function MediaCard({ media }: MediaCardProps) {
  const { mediaType, url, imageUrl } = media;

  return (
    <div className="col-4">
        <a href={url}>
             <img src={imageUrl} alt={mediaType} className="imageDimension"/>         
          </a>
    </div>
  );
}

export default MediaCard;
