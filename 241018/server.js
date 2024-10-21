import { ApolloServer, gql } from "apollo-server";

// mockup data
let tweets = [
  {
    id: "1",
    text: "First One!",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One!",
    userId: "1",
  },
];

// 사용자의 정보값을 담은 변수
let users = [
  {
    id: "1",
    firstName: "David",
    lastName: "Peter",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

// type 정의
const typeDefs = gql`
  type User {
    id: ID!
    """
    Is the sum of firstName + lastName as a String
    """
    userName: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet object represent a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]!
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else return false
    """
    deleteTweet(id: ID): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String
    title_long: String
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String
    medium_cover_image: String!
    large_cover_image: String!
  }
`;

// resolve 함수
const resolvers = {
  Query: {
    // tweet() {
    //   console.log("I'm called");
    //   return null;
    // },
    // ping() {
    //   return "pong";
    // },
    allTweets() {
      return tweets;
    },
    allUsers() {
      // console.log("userName called");
      return users;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  // dynamic field
  User: {
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    userName({ firstName, lastName }) {
      // console.log("userName called!");
      // console.log(root); // 위쪽에서 스캔한 원본데이터를 가져옴, root는 객체 -> 구조분해할당 { firstName, lastName }
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    // tweets와 users의 연결고리
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다!");
        return null;
      }
      return result;
    },
  },
};

// apollo server 만들기
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
