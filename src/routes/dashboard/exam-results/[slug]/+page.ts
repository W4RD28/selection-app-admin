import { redirect } from "@sveltejs/kit";

export const load = async ({ parent, params }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/admin/login");
  }
  const { data: adminData } = await supabase.from("users").select("*").eq("id", session.user.id).single();

  if (adminData?.role != "admin") {
    alert("Anda tidak memiliki izin yang memenuhi");
    await supabase.auth.signOut();
  }

  const { slug } = params;
  const { data: resultData } = await supabase.from("test_results").select("*").eq("user_id", slug).single();
  const { data: userData } = await supabase.from("users").select("*").eq("id", slug).single();
  const { data: answerData } = await supabase.from("user_answers").select("*,question:questions(*)").eq("user_id", slug)  
  const { data: questionData } = await supabase.from("questions").select("*")
  let userScore = getUserScore(answerData, questionData)
  return {
    session,
    resultData,
    userData,
    answerData,
    questionData,
    userScore
  };
}

function getUserScore(answerData, questionData) {
  let score = 0
  answerData.forEach(answer => {
    questionData.forEach(question => {
      if (answer.question_id == question.id) {
        if (answer.answer == question.answer) {
          score++
        }
      }
    })
  })
  return score * 100 / questionData.length
}