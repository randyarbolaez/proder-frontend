import { CREATE_MESSAGE, READ_MESSAGES } from "../actions/messages-actions";

const initialState = {
  allMessages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      const newMessage = {
        _id: action.messageData._id,
        user: action.messageData.user,
        body: action.messageData.body,
      };
      return {
        ...state,
        allMessages: state.allMessages.concat(newMessage),
      };

    case READ_MESSAGES:
      return {
        allMessages: action.messages,
      };
    default:
      return state;
  }
};
