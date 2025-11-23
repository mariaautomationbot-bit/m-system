async function askAI() {
    let question = document.getElementById("question").value;

    document.getElementById("response").innerHTML = "🤖 AI Thinking...";

    const response = await fetch("/.netlify/functions/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question })
    });

    const data = await response.json();
    document.getElementById("response").innerHTML = data.reply;
}
