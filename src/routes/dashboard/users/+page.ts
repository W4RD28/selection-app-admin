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

  const { data: usersData } = await supabase.from('users').select('*')

  return {
    session,
    usersData
  }
}
