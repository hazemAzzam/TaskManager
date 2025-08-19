export type UserType = {
  id: string;
  username: string;
  full_name: string;
  role: "admin" | "user";
  email: string;
  profile_picture?: File;
};

export type UsersWithPagination = {
  count: number;
  next?: string;
  previous?: string;
  results: UserType[];
};
