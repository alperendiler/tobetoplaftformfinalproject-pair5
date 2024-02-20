import React from 'react'
import "../styles/connection.css";
import { Link } from 'react-router-dom';

type Props = {}

const ConnectionSuccess = ({ }: Props) => {
    return (

        <div className="container-fluid-success pt-50 ">

            <div className="container col-8 pt-5 mt-8 pb-5 justify-content-center">
                <div className="row">
                    <Link to={"/home-page"}  className="d-flex justify-content-center">
                        <div className="picture-ok col-6 justify-content-center"></div>
                    </Link>

                </div>
            </div>
        </div>

    );

}

export default ConnectionSuccess;