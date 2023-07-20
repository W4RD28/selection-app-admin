import { redirect } from "@sveltejs/kit"

export const load = async({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    throw redirect(303, '/admin/login')
  }
  const { data: adminData } = await supabase.from('users')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (adminData?.role != "admin") {
    await supabase.auth.signOut()
  }


  const { data: resultsData } = await supabase.from('test_results').select('*,user:users(*)')

  return {
    session,
    resultsData
  }
}
