import { ApolloServer, gql } from "apollo-server";

// type 정의
const typeDefs = gql`
  type Query {
    text: String
    film: String
    allFilms: String
  }
`;

// apollo server 만들기
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
