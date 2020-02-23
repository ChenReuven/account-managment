import { RoleType } from "./role-type.enum";

export interface Account {
  id: string;
  userName: string;
  password: string; // Think maybe need to interpolate the password
  mail: string;
  safeId: string;
  role: RoleType;
  additionalInfo?: {
    administratorGroupId?: string;
  };
}
