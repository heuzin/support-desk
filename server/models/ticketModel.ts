import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ITicket {
  user: mongoose.Schema.Types.ObjectId;
  product: string;
  description: string;
  status: string;
}

const ticketSchema: Schema = new Schema<ITicket>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      require: [true, "Please select a product"],
      enum: ["iPhone", "Mackbook Pro", "iMac", "iPad"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = model<ITicket>("Ticket", ticketSchema);

export default Ticket;
