import { CountryType } from "./constants/countries";
export interface MemberTypes {
  name: string;
  isAdmin: boolean;
  role: string;
  country: CountryType;
}

export interface TeamType {
  id?: number;
  name: string;
  email: string;
  company: string;
  country: CountryType;
  password: string;
  members: MemberTypes[];
}
