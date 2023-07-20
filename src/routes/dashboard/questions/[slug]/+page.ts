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
    await supabase.auth.signOut()
  }

  const {slug} = params
  const { data: questionData } = await supabase
    .from('questions')
    .select('*')
    .eq("id", slug)
    .single()
  
  return {
    session,
    questionData
  }
}
