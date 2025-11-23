async function askAI() {
  let question = document.getElementById("question").value;

  document.getElementById("response").innerHTML = "⏳ AI Thinking...";

  // نموذج ذكاء اصطناعي صغير بلا API
  let answer = "🔮 جواب AI: " + aiBrain(question);
  
  document.getElementById("response").innerHTML = answer;
}

function aiBrain(q) {
  q = q.toLowerCase();

  if (q.includes("money") || q.includes("فلوس"))
    return "خاصك خدمة value عالية باش تربح بزاف.";
  
  if (q.includes("love") || q.includes("حب"))
    return "الحب هو الثقة والصبر.";
  
  if (q.includes("business"))
    return "أي مشروع كيتبنى على حل مشكل حقيقي.";

  return "مافهمتش السؤال، حاول تبدلو.";
}
