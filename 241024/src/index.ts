// 서로소 유니온 타입

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMEBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 유니온 타입

// const login = (user: User) => {
//   if ("kickCount" in user) {
//     // user의 타입에 kickCount 키를 가지고 있다면 Admin
//     console.log(`${user.name}은 관리자이며, ${user.kickCount}회 관리했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}은 멤버이며, ${user.point}를 적립했습니다.`);
//   } else {
//     console.log(`${user.name}은 게스트이며, ${user.visitCount}번 오셨습니다.`);
//   }
// };
// Admin | Member | Guest => 절대 겹칠 수 없는 상황
// 직관적으로 코드 바꾸기

const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}은 관리자이며, ${user.kickCount}회 관리했습니다.`
      );
      break;
    }
    case "MEMEBER": {
      console.log(`${user.name}은 멤버이며, ${user.point}를 적립했습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}은 게스트이며, ${user.visitCount}번 오셨습니다.`
      );
      break;
    }
  }
};
