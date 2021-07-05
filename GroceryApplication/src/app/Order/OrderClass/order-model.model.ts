import { User } from "src/app/UserModel/user.model";

export class OrderModel {

  address: string='';
  amount: number=0;
  country: string='';
  date: Date = new Date();
  district: string='';
  emailId: string='';
  id: number=0;
  mobileNo: string='';
  name: string='';
  pincode: string='';
  productId: number=0;
  productName: string='';
  quantity: number=0;
  state: string='';
  user:User = new User();
  
}
