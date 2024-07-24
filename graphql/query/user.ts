import { graphql } from "@/gql/gql";

export const verifyUserGoogleTokenQuery = graphql(`#graphql
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`#graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImageUrl
    }
  }
`);
