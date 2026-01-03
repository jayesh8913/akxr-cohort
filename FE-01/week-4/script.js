const button = document.getElementById("generate");
let input = document.getElementById('input');
const iframe = document.getElementById("preview");
const codeOutput = document.getElementById("codeOutput");


button.addEventListener("click", async () => {
  const prompt = input.value.trim();

  button.disabled = true;
  button.textContent = "Generating...";

  try{
  const res = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  console.log(data);    //in case of errors
  codeOutput.value = data.html;
  iframe.srcdoc = data.html;
}catch(err) {
  console.log(err);
    }finally{ 
      button.disabled=false;
      button.textContent="Generate";}
});
