const codeBtn = document.querySelectorAll(".code-btn");
const displaySnippets = document.getElementById("display-snippets");
const codeBody = document.getElementById("code-here");

function display() {
  codeBody.classList.add("text-white", "text-class");
  codeBody.textContent = `Here you will find the JS code that I have practiced.`;
}
codeBtn.forEach((collect) => {
  collect.addEventListener("click", () => {
    const snippetsList = collect.textContent;
    displaySnippets.textContent = snippetsList;

    if (snippetsList.trim() === "Async/Await") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code>1/
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

2/
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
</code></pre>
      `;
    }

    console.log(snippetsList);
  });
});
window.onload = () => {
  display();
};
