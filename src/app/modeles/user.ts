import {Beneficiary} from "./beneficiary";

export class User {
  id!:number
  username!:String
  password!:String
  email!:String

  benifcier !:Beneficiary[]
}
