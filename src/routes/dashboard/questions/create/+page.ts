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
    alert("Anda tidak memiliki izin yang memenuhi")
    await supabase.auth.signOut()
  }

  return {
    adminData
  }
}
