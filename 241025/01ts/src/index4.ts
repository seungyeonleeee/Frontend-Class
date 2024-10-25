// 제네릭 응용 타입 형태
// promise

interface Post {
  id: number;
  title: string;
  content: string;
}

// const promise = new Promise<Post>((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       id: 1,
//       title: "게시글 제목",
//       content: "게시글 본문",
//     });
//   }, 3000);
// });

// promise.then((response) => {
//   console.log(response);
// });

// promise.catch((error) => {
//   if (typeof error === "string") {
//     console.log(error);
//   }
// });

const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
};
