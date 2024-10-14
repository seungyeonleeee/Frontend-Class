// // 3
// let initialState = {};

// // 4
// const reducer = (state = initialState, action) => {
//   // 23
//   // console.log(action);
//   const { type, payload } = action;
//   console.log(type, payload);
// };

// // 5
// export default reducer;

// 23
let initialState = {
  contactList: [],
  // 33
  keyword: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   ...state,
    //   contactList: [
    //     ...state.contactList,
    //     {
    //       name: payload.name,
    //       phoneNumber: payload.phoneNumber,
    //     },
    //   ],
    // };

    // 34
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };

    // default:
    //   return { ...state };
  }
  return { ...state };
};

export default reducer;

const userList = [
  {
    name: "David",
    number: 123456789,
  },
];
