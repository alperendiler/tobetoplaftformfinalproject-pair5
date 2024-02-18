
import CourseDetailHeader from "../components/Content/Courses/CourseDetailHeader";
import "../styles/courseDetail.css";
import CourseDetailTab from "../components/Content/Courses/CourseDetailTab";
import { useEffect, useState } from "react";
import courseService from "../services/courseService";
import { GetCourseDetailResponse, Topic } from "../models/responses/course/getCourseDetailResponse";
import { useParams } from "react-router-dom";
type Props = {};

export default function Courses({}: Props) {
  let {id} = useParams();

  const [courseDetail, setCourseDetail] = useState<GetCourseDetailResponse>();
  const [titleList, setTitleList] = useState<Topic[]>([]);

  useEffect(() => {
    fetchCourseDetail();
  }, []);
  const fetchCourseDetail = async () => {
    const response = await courseService.GetCourseDetail(
      id!
    );
   setCourseDetail(response.data);
   //console.log(response.data.courseTopics.map((item,index) => {return item.topic}));
  //  setTitleList(response.data.courseTopics.map((item,index) => {return item.topic}));
  };
  return (
    <>
      <div className="wrapper without-slide">
        <div className="content">
          <div className="page-content activity-detail">
            <CourseDetailHeader courseDetail={courseDetail} />
            <CourseDetailTab courseDetail={courseDetail} />
          </div>
        </div>
      </div>
    </>
  );
}
