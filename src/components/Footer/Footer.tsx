import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/footer.css"


type Props = {}

export default function Footer({}: Props) {
  return (
    <div >
       <footer className="colorFooter">
            <div className="container p-4">
                <div className="row">
                    <div className="col-10">
                        <img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" width={100} height={21}/>
                    </div>

                    <div className="col-2 d-flex flex-row-reverse">
                    <Link className='btn btn-light fw-bold rounded-pill' to='/connection'>Bize Ulaşın</Link>
                    </div>
                </div> 
            </div>
            <div className='row offset-md-1 col-md-10'>
    
            </div>
        </footer>
    </div>
  )
}

