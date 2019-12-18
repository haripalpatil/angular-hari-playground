import { Alias } from './Alias';

export class Party {
  firstName: string;
  lastName: string;
  partyStatus: string;
  aliases?: Alias[];  
  partyType: string;
  partyId?: number;
}