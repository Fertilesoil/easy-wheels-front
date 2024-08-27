import { User } from "./User";
import { Rental } from './Rental';
import { Car } from "./Car";

export interface Lessor extends User {
  Rentals: Rental[],
  Cars: Car[],
}