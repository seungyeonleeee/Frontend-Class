// 10 함수를 만들고 반환값은 객체
const login = (id, pw) => {
  // 15
  return (dispatch) => {
    console.log("login success action");
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, pw },
    });
  };
};
export const authenticateAction = { login };
