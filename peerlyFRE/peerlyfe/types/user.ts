export interface User {
  id: string | number | undefined;
  name: string;
  email: string | undefined;
  picture: string;
  avatar?: string;
  isSeller?: boolean;
  address?:string;

} 