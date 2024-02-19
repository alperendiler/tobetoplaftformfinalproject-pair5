import React from 'react'

type Props = {}

export default function Homework({}: Props) {
  return (
    <>
    <div className="collapse-homework mt-4 mb-3 " data-bs-toggle="collapse" data-bs-target="#collapseHomework" aria-expanded="true" aria-controls="collapseExample">
    Ödevler
</div>

<div id="collapseHomework" className="collapse">
  <div className="card card-body">
  <div className="homework-line clearfix">
      <div className="row middle-xs">
        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
          <div className="homework-row-title">
            <p>OOP 1</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 text-lg-center text-md-center text-sm-center text-xs-center">
          <div className="homework-row-score">
            <span className="no-time"></span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-lg-center text-md-center text-sm-center text-xs-center">
          <div className="homework-row-status">Gönderildi</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-lg-center text-md-center text-sm-center text-xs-left">
          <div className="homework-row-button">
            <button type="button" className="ant-btn ant-btn-default btn white">
              <span>DETAY</span>
            </button>
          </div>
        </div>
      </div>
    </div>  </div>
</div>
    </>
  )
}