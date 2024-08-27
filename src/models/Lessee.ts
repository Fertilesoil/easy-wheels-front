import { Rental } from "./Rental";
import { User } from "./User";

export interface Lessee extends User {
  Rentals: Rental[]
}