import React, {useEffect,useState} from "react";
import personalInformationService from "../../../services/personalInformationService";
import { GetPersonalInformationResponse } from "../../../models/responses/personalInformation/getPersonalInfırmationResponse";

type Props = {}
function AboutMe({}:Props) {
  const [personalInformations, setPersonalInformations] = useState<GetPersonalInformationResponse>()
  useEffect(() => {
    getPersonalInformation();
   
  }, [])
  const getPersonalInformation =async()=>{
    const studentId = localStorage.getItem("studentId")
    if(studentId!=null){
      const getPersonalInformationResponse = await personalInformationService.getByStudentId(studentId);
      setPersonalInformations(getPersonalInformationResponse.data)

    }
  }
  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Hakkımda
        </div>
        <hr/>
        <div>
        {personalInformations?.about ? (
  <div className="fw-bold">
     {personalInformations?.about}
  </div>
) : (
  <div className="fw-bold">Kendini Tanıt</div>
)}
        </div>
      </div>
    </div>
  )
}

export default AboutMe;