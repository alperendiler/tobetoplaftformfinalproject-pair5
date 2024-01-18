import React from 'react';
import "../styles/packageCard.css"

type Props = {
    title: string; 
};

const PackageCard = ({title}: Props) => {
  return (
            <div className='col-md-4 col-sm-12 cardContainer'> 
                <div className="profileCard col-12">
                    <div>
                        <h3 className='fw-bold'>{title}</h3>
                        <button className='btn fw-bold rounded-pill cardbutton text-light '>Başla</button>
                    </div>
                </div>
            </div>
  )
}

export default PackageCard