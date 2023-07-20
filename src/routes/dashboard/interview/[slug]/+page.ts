import { redirect } from "@sveltejs/kit";

export const load = async ({ parent, params }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/admin/login");
  }
  const { data: adminData } = await supabase.from("users").select("*").eq("id", session.user.id).single();

  if (adminData?.role != "admin") {
    await supabase.auth.signOut();
  }

  const { slug } = params;
  const { data: interviewData } = await supabase.from("interview_room").select("*").eq("id", slug).single();
  const { data: resultData } = await supabase.from("test_results").select("*").eq("user_id", interviewData.user_id).single();
  const { data: userData } = await supabase.from("users").select("*").eq("id", interviewData.user_id).single();
  return {
    interviewData,
    resultData,
    userData
  };
}