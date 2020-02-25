export interface UpdateAccount {
  safeId: string;
  adminGroup?: string;
  details: {
    userName: string;
    password: string;
    mail: string;
  };
}
