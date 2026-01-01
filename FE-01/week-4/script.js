const button = document.getElementById("generate");
let input = document.getElementById('input');
const iframe = document.getElementById("preview");
const codeOutput = document.getElementById("codeOutput");


button.addEventListener("click", async () => {
  const prompt = input.value.trim();

  const res = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  codeOutput.value = data.html;
  iframe.srcdoc = data.html;
});
