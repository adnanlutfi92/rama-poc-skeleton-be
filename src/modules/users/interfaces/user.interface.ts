export interface IUserTypeAttributesBase {
  name: string;
  email: string;
  gender: string;
  status: boolean;
  created_at: Date;
  updated_at?: Date;
}

export interface IUserTypeAttributes extends IUserTypeAttributesBase {
  id: string;
  password: string;
}

export interface IUserTypeAttributesBaseV2 extends IUserTypeAttributesBase {
  dob: string;
}
