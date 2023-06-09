import { gql } from "@apollo/client";

export const MessageFields = `
    id
    sender {
        id
        username
    }
    body
    imageUrl
    createdAt
`;

export default {
  Query: {
    messages: gql`
      query Messages($conversationId: String!, $session: Session!) {
        messages(conversationId: $conversationId, session: $session){
          ${MessageFields}
        }
      }
    `,
  },
  Mutation: {
    sendMessage: gql`
      mutation SendMessage(
        $id: String!
        $conversationId: String!
        $session: Session!
        $senderId: String!
        $body: String!
      ) {
        sendMessage(
          id: $id
          conversationId: $conversationId
          session: $session
          senderId: $senderId
          body: $body
        )
      }
    `,
  },
  Subscription: {
    messageSent: gql`
      subscription MessageSent($conversationId: String!) {
        messageSent(conversationId: $conversationId) {
          ${MessageFields}
        }
      }
    `,
  },
};
