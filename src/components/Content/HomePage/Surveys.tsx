import React from 'react'
import "../../../styles/surveys.css"
type Props = {}

export default function Surveys({}: Props) {
  return (
    <>
    <div className='row'>
        <div className=" noDataCard">
            <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
        </div>
        </div>
    </>
  )
}