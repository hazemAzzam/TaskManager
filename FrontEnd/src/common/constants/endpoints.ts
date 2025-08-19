export const ENDPOINTS = {
  TASKS: "/tasks",
  USERS: Object.assign(() => "/users", {
    toString: () => "/users",
    AUTOCOMPLETE: "/users/autocomplete",
    UPLOAD_PROFILE_PICTURE: "/users/upload_profile_picture/",
    CURRENT: "/users/current",
  }),
  AUTH: {
    TOKEN: "/token/",
    REFRESH: "/token/refresh",
  },
};
