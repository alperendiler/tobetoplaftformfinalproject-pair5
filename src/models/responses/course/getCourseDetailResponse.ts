export interface CourseTopicTitle {
  id: string;
  topicId: string;
  name: string;
  description: string;
  point: number;
  subtype: string;
  videoLanguage: string;
  videoLink: string;
  videoTime: number;
}
export interface CourseTopicVirtualClass{
  topicId:string;
  startTime:string;
  finishTime:string;
  name:string;
  recordLink:string;
}
export interface Topic {
  id: string;
  name: string;
  titles: CourseTopicTitle[];
  virtualClasses:CourseTopicVirtualClass[];
}

export interface CourseTopic {
  id: string;
  topicId: string;
  courseId: string;
  topic: {
    id: string;
    name: string;
    titles: CourseTopicTitle[];
    virtualClasses: CourseTopicVirtualClass[];
  };
}

export interface GetCourseDetailResponse {
  id: string;
  categoryId: string;
  companyId: string;
  likeId: string;
  name: string;
  imageUrl: string;
  about: string;
  startDate: string;
  endDate: string;
  spentTime: string;
  estimatedTime: string;
  courseTopics: CourseTopic[];
}