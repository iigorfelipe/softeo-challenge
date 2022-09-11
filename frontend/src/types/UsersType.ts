export type UsersType = {
  id: number;
  name: string;
  value: string;
  installments: number;
  payday: number;
}

export type UserProps = {
  user: UsersType;
}