export interface User_details {
  id?: number;
  name?: string;
  username?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string | null;
      lng?: string | null;
    };
  };
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  firstName?: string;
  lastName?: string;
  bio?: string;
  avatar_url?: string;
  contact?: {
    email?: string;
    mobile?: string;
    preferredCommunication?: string;
  };
  social?: {
    linkedin_url?: string;
    github_url?: string | null;
    twitter_url?: string | null;
    instagram_url?: string | null;
    facebook_url?: string | null;
    youtube_url?: string | null;
  };
  created_at?: Date | string;
  created_by?: number | string;
  updated_at?: Date | string;
  updated_by?: number | string;
}
export interface userprops {
  users: User_details[];
  css: {
    color: string;
  };
}
