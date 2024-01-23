import React from 'react';
import "../../../styles/packageCard.css"
import { Link } from 'react-router-dom';

type Props = {
    title: string; 
    route:string
};

const PackageCard = ({title,route}: Props) => {
  return (
            <div className='col-md-4 col-sm-12 cardContainer'> 
                <div className="profileCard col-12">
                    <div>
                        <h3 className='fw-bold'>{title}</h3>
                        <button className='btn fw-bold rounded-pill cardbutton text-light '><Link className='text-light' to={route} >Başla</Link></button>
                    </div>
                </div>
            </div>
  )
}

export default PackageCard