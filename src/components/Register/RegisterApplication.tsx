import React from "react";
import { Link } from "react-router-dom";
import "../../styles/register.css";
type Props = {};

export default function RegisterApplication({}: Props) {
  return (
    <>
      <div className="ik-banner-big-register h-100 btn-rainbow-card">
        <div>
          <span>
            <img
              className="istanbul-kodluyor-logo"
              alt=""
              aria-hidden="true"
              src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
            />
          </span>
        </div>
        <div className="d-flex">
          <span></span>
          <Link
            className="btn d-md-inline-block mt-5 btn-darkblue2"
            to="/istanbul-kodluyor"
          >
            Başvur
          </Link>
        </div>
      </div>
    </>
  );
}
