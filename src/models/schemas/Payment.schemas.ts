import { ObjectId } from 'mongodb';
import { PaymentStatus } from '~/constants/enum';

interface PaymentType {
  _id?: ObjectId;
  payment_type: string;
  insert_date?: Date;
  update_date?: Date;
  status: PaymentStatus;
  currency?: string;
  amount: number;
  order_id: ObjectId;
}

export default class Payment {
  _id?: ObjectId;
  payment_type: string;
  insert_date: Date;
  update_date: Date;
  status: PaymentStatus;
  currency: string;
  amount: number;
  order_id: ObjectId;
  constructor(payment: PaymentType) {
    this._id = payment._id;
    this.payment_type = payment.payment_type;
    this.insert_date = payment.insert_date || new Date();
    this.update_date = payment.update_date || new Date();
    this.status = payment.status;
    this.currency = payment.currency || 'VNĐ';
    this.amount = payment.amount;
    this.order_id = payment.order_id;
  }
}
