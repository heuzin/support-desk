import axios from "axios";

export const API_URL = "/api/tickets/";

const getNotes = async (ticketId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(API_URL + ticketId + "/notes", config);

  return data;
};

const createNote = async (
  noteText: string,
  ticketId: string,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    API_URL + ticketId + "/notes",
    {
      text: noteText,
    },
    config
  );

  return data;
};

const noteService = {
  getNotes,
  createNote,
};

export default noteService;
