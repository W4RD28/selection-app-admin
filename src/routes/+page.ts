import { redirect } from "@sveltejs/kit";

export const load = async ({ parent }) => {
  throw redirect(302, "/dashboard/users")
}