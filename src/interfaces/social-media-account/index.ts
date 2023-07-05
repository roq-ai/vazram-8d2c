import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface SocialMediaAccountInterface {
  id?: string;
  platform_name: string;
  account_name: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface SocialMediaAccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  platform_name?: string;
  account_name?: string;
  business_id?: string;
}
