import { Account } from "../models/account.model";
import { RoleType } from "../models/role-type.enum";

export const accountsMock: Account[] = [
  {
    id: "1",
    userName: "MoshikG",
    password: "sadsaASDAsds",
    mail: "moshikg@gmail.com",
    role: RoleType.ADMIN,
    safeId: "1",
    additionalInfo: {
      administratorGroupId: "1"
    }
  },
  {
    id: "2",
    userName: "YanaL",
    password: "yuidsASWDSdsfd",
    mail: "yanal@gmail.com",
    role: RoleType.USER,
    safeId: "2",
    additionalInfo: {
      administratorGroupId: "2"
    }
  }
];
