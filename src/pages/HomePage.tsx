import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "../components/Content/HomePage/Welcome";
import Main from "../components/Content/HomePage/Main";
import PackageCardsRow from "../components/Content/HomePage/PackageCardsRow";
import MainExams from "../components/Content/HomePage/MainExams";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="container col-md-8 text-center">
        <Welcome />
        <Main />
        <MainExams />
        <PackageCardsRow />
      </div>
    </>
  );
}
