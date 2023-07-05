import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  content: string;
  scheduled_time: any;
  business_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  business_id?: string;
  user_id?: string;
}
