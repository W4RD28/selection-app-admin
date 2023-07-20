import { r as redirect } from "../../../chunks/index.js";
const load = async ({ parent }) => {
  throw redirect(302, "/dashboard/users");
};
export {
  load
};
