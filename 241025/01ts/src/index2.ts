// 제네릭 응용 타입 형태

// 서로소 관계인 두 요소를 합치기
interface Developer {
  type: string;
  skill: string;
}
interface Student {
  type: string;
  school: string;
}
// 서로소 유니온 타입
interface User<T> {
  name: string; // 공통분모 그대로
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: User<Student> = {
  name: "Peter",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
};
gotoSchool(studentUser);
