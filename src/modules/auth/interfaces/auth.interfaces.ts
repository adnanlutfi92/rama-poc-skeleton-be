/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IJWTPayloadPAS {
  hope: {
    user_hope_id: number;
    organization_hope_id: number | null;
    user_group_hope_id: Array<number> | undefined;
  };
  user_id: string;
  organization_id: string | null;
  organization_name: string | null;
  organization_offset_minute: number | null;
  username: string;
  fullname: string;
  identity: {
    token_expirity: string;
    'realm-roles': Array<{
      'realm-roles-name': string;
      permission: Array<any>;
      'sidebar-menu': Array<any>;
    }>;
  };
  is_um: boolean;
}
