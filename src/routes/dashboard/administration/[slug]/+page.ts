import { redirect } from "@sveltejs/kit"

export const load = async({ parent, params }) => {
  const { supabase, session } = await parent()
  if (!session) {
    throw redirect(303, '/admin/login')
  }
  const { data: adminData } = await supabase.from('users')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (adminData?.role != "admin") {
    alert("Anda tidak memiliki izin yang memenuhi")
    await supabase.auth.signOut()
  }

  const {slug} = params
  const { data: administrationData } = await supabase
    .from('questionnaire')
    .select('*,user:users(*)')
    .eq("id", slug)
    .single()
  const { data: resultData } = await supabase
    .from('test_results')
    .select('*')
    .eq('user_id', administrationData.user.id)
    .single()
  
  return {
    session,
    administrationData,
    resultData
  }
}
