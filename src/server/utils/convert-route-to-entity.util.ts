const mapping: Record<string, string> = {
  businesses: 'business',
  posts: 'post',
  'social-media-accounts': 'social_media_account',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
