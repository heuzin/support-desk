export interface Ticket {
  _id: string;
  user: string;
  product: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
