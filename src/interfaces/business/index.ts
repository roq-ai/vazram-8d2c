import { PostInterface } from 'interfaces/post';
import { SocialMediaAccountInterface } from 'interfaces/social-media-account';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  post?: PostInterface[];
  social_media_account?: SocialMediaAccountInterface[];
  user?: UserInterface;
  _count?: {
    post?: number;
    social_media_account?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
