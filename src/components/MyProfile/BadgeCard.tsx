import React from "react";

type Badge = {
  imageUrl: string;
};

type BadgeCardProps = {
  badge: Badge;
};

function BadgeCard({ badge }: BadgeCardProps) {
  const { imageUrl } = badge;

  return (
          <div className="col-1 m-2 p-2 rounded-3 shadow text-muted bg-white">
            <img src={imageUrl} height={50} width={50}/>
          </div>
  );
}

export default BadgeCard;
