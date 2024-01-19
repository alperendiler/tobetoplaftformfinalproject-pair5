import React from 'react'

type Props = {}
function MyCompetence({}:Props) {
  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Yetkinliklerim
        </div>
        <hr/>
        <div>
          Henüz bir yetkinlik eklemedin.
        </div>
      </div>
    </div>
  )
}

export default MyCompetence;