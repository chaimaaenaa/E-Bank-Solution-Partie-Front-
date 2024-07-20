import {CardType} from "../enum/card-type";

export class Card {
  id !: number
  cardNumber!:String
  expirationDate!:Date
  cardType!:CardType
  active!:Boolean
}
