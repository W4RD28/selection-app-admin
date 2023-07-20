import { r as redirect } from "../../../../../chunks/index.js";
const load = async ({ parent, params }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/admin/login");
  }
  const { data: adminData } = await supabase.from("users").select("*").eq("id", session.user.id).single();
  if (adminData?.role != "admin") {
    await supabase.auth.signOut();
  }
  const { slug } = params;
  const { data: userData } = await supabase.from("users").select("*").eq("id", slug).single();
  if (!userData)
    throw redirect(306, "/dashboard/users");
  return {
    userData
  };
};
export {
  load
};
