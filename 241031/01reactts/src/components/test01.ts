enum Role {
  // ADMIN = 0,
  // USER = 1,
  // GUEST = 2,
  ADMIN,
  USER,
  GUEST,
  // 번호가 0부터 자동으로 생성
}

export const user1 = {
  name: "David",
  // rold: "Admin",
  // id: 0,
  role: Role.ADMIN,
};
const user2 = {
  name: "Peter",
  // rold: "User",
  // id: 1,
  role: Role.USER,
};
const user3 = {
  name: "Romeo",
  // rold: "Guest",
  // id: 2,
  role: Role.GUEST,
};
