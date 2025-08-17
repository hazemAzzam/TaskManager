export const ENDPOINTS = {
  TASKS: "/tasks",
  USERS: Object.assign(() => "/users", {
    toString: () => "/users",
    AUTOCOMPLETE: "/users/autocomplete",
  }),
};
