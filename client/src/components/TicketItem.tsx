import React from "react";
import { Link } from "react-router-dom";
import { Ticket } from "../models/Ticket";

type Props = {
  ticket: Ticket;
};

const TicketItem: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
};

export default TicketItem;
