// class 함수

// 접근제어자 (TS에만 있음)
// 1. public : 모든 범위에서 접근 가능 (기본 default)
// 2. private : 클래스 내부에서만 접근 가능
// 3. protected : 클래스 내부 & 상속받은 파생 클래스 접근

class Student {
  // Field => 인스턴스 객체의 키 역할
  // private name;
  // protected age;
  // public grade; // public 기본 = 생략 가능

  // 생성자함수 => field에 매칭될 값을 찾아오는 역할
  // constructor(name: string, age: number, grade: number) {
  //   this.name = name;
  //   this.age = age;
  //   this.grade = grade;
  // }
  // 접근제어자를 생성자 함수 매개변수 앞에 넣으면 Field 정의 생략 가능
  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}
const studentB = new Student("David", 20, 2);
console.log(studentB);
console.log(studentB.introduce());

// class는 그 자체가 type
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name: string, age: number, grade: number, favoriteSkill: string) {
    super(name, age, grade);

    this.favoriteSkill = favoriteSkill;
  }

  func() {
    // this.name; // private -> error
    this.age; // protected 가능
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다!`);
  }
}
const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
console.log(studentC.programming());
