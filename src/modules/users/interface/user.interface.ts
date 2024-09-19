export interface IUserTypeAttributesBase {
  name: string;
  email: string;
  gender: number;
  status: boolean;
  created_at: Date;
  updated_at?: Date;
}

export interface IUserTypeAttributes extends IUserTypeAttributesBase {
  id: string;
  password: string;
}
