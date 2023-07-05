import axios from 'axios';
import queryString from 'query-string';
import { SocialMediaAccountInterface, SocialMediaAccountGetQueryInterface } from 'interfaces/social-media-account';
import { GetQueryInterface } from '../../interfaces';

export const getSocialMediaAccounts = async (query?: SocialMediaAccountGetQueryInterface) => {
  const response = await axios.get(`/api/social-media-accounts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSocialMediaAccount = async (socialMediaAccount: SocialMediaAccountInterface) => {
  const response = await axios.post('/api/social-media-accounts', socialMediaAccount);
  return response.data;
};

export const updateSocialMediaAccountById = async (id: string, socialMediaAccount: SocialMediaAccountInterface) => {
  const response = await axios.put(`/api/social-media-accounts/${id}`, socialMediaAccount);
  return response.data;
};

export const getSocialMediaAccountById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/social-media-accounts/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteSocialMediaAccountById = async (id: string) => {
  const response = await axios.delete(`/api/social-media-accounts/${id}`);
  return response.data;
};
