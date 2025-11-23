document.getElementById("send").addEventListener("click", async () => {
  const prompt = document.getElementById("input").value;

  if (!prompt.trim()) {
    alert("كتب شي رسالة!");
    return;
  }

  const response = await fetch("/.netlify/functions/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.reply;
});
