import React from 'react'
import { useSelector } from 'react-redux';
import "../../styles/overloyLoader.css"
type Props = {}

export default function OverloyLoader({}: Props) {
    const loadingState = useSelector((state: any) => state.loading);

  return (
    <>
        {loadingState.requestCount > 0 && (
        <div className="overlay">
            <div className="loader-container">
              <div className='loader '>T</div>
            </div>
        </div>
      )}
    </>
  )
}