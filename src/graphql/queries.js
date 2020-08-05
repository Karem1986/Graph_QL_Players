import gql from "graphql-tag";

export const GET_ALL_MATCHES = gql`
  query AllMatches {
    matches(order_by: {started_at: desc}) {
      id
      p1 {
        name
      }
      p2 {
        id
        name
      }
      setts {
        p1_score
        p2_score
      }
      finished
    }
  }

`;


