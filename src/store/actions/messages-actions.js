import ENV from "../../env";

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const READ_MESSAGES = "READ_MESSAGES";

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${ENV.apiUrl}/message/messages`);

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await res.json();
      let loadedMessages = [...resData.allMessages];

      dispatch({
        type: READ_MESSAGES,
        messages: loadedMessages,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const createMessage = (body) => {
  return async (dispatch) => {
    const res = await fetch(`${ENV.apiUrl}/message/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: localStorage.getItem("user"),
        body,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error("Couldn't create a new message, try again later.");
    }

    dispatch({
      type: CREATE_MESSAGE,
      messageData: {
        _id: resData._id,
        user: localStorage.getItem("user"),
        body,
      },
    });
  };
};
