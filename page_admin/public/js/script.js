document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const messages = document.getElementById("messages");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const userMessage = input.value.trim();
      if (!userMessage) return;

      // tampilkan pesan user
      const userDiv = document.createElement("div");
      userDiv.textContent = "👤 " + userMessage;
      messages.appendChild(userDiv);

      input.value = "";

      // kirim ke server
      const response = await fetch("/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      const botDiv = document.createElement("div");
      botDiv.textContent = "🤖 " + (data.reply || "Maaf, terjadi kesalahan.");
      messages.appendChild(botDiv);

      messages.scrollTop = messages.scrollHeight;
    });
  }
});