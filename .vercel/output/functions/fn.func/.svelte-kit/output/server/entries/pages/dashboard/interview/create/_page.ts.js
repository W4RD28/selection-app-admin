import { r as redirect } from "../../../../../chunks/index.js";
async function load({ parent }) {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/admin/login");
  }
  const { data: adminData } = await supabase.from("users").select("*").eq("id", session.user.id).single();
  if (adminData?.role != "admin") {
    await supabase.auth.signOut();
  }
  return {
    adminData
  };
}
export {
  load
};
