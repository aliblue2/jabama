interface UserInfo {
  user_name: string;
  user_image: string;
  first_travel: string;
}

export interface UserComment {
  id: number;
  title: string;
  content: string;
  user_info: UserInfo;
}
