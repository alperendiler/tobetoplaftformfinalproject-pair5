import React from 'react';
import BadgeCard from './BadgeCard';


type Badge = {
    imageUrl: string;
  };
  function MyBadge() {
    const userBadges: Badge[] = [
      {
        imageUrl: 'https://tobeto.s3.cloud.ngn.com.tr/47_7fc3123c74.jpg',
      },
      {
        imageUrl: 'https://tobeto.s3.cloud.ngn.com.tr/49_d008f4744f.jpg',
      },
    ];
  return (
    <div>
      <div className='row shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Yetkinlik Rozetlerim
        </div>
        <hr/>
        <div className='row'>
        {userBadges.map((badge, index) => (
            <BadgeCard key={index} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyBadge;