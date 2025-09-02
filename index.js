const snippetNames = [
  "Async/Await",
  "Higher Order Functions",
  "Simple Counter",
  "DOM Manipulation",
  "Object Destructuring",
  "Array Filter",
];
const snippetsList = document.querySelector(".snippets-list");
let buttonsHTML = "";

snippetNames.forEach((name) => {
  buttonsHTML += `
    <li>
      <button
        class="code-btn code-btns p-3 mb-1 text-lg w-full text-left hover:cursor-pointer focus:bg-blue-700 hover:bg-blue-700 rounded-xl"
      >
        ${name}
      </button>
    </li>
  `;
});

snippetsList.innerHTML = buttonsHTML;

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
<pre><code><span class="number-red">1/ </span>
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

<span class="number-red">2/ </span>
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
    } else if (snippetsList.trim() === "Higher Order Functions") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code><span class="number-red">1/ </span>
function greetUser() {
  console.log("Welcome back!");
}

// A higher-order function that takes a callback
function processGreeting(names, callback) {
  console.log("Hello, " + names);
  callback(); // The higher-order function executes the callback
}

processGreeting("Alice", greetUser);

<span class="number-red">2/ </span>
// A higher-order function that returns a new function
function createMultiplier(factor) {
  // The returned function "remembers" the "factor" (closure)
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

<span class="number-red">Function returning a function (Currying)</span>
<span class="number-red">1/ </span>
function createLogger(logType) {
  return function(message) {
    console.log("[logType.toUpperCase()]: message");
  };
}

const logInfo = createLogger('info');
const logError = createLogger('error');

logInfo('User logged in successfully.');
// Output: [INFO]: User logged in successfully.

logError('Failed to connect to the database.');
// Output: [ERROR]: Failed to connect to the database.
</code></pre>
      `;
    } else if (snippetsList.trim() === "Simple Counter") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code><span class="number-red">1/ </span>
let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById('increment-btn').addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
});
</code></pre>
      `;
    } else if (snippetsList.trim() === "DOM Manipulation") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code><span class="number-red">1/ </span>
// Select an element
const myElement = document.getElementById('my-div');

// Change its content
myElement.textContent = 'New Content!';

// Change its style
myElement.style.color = 'red';

// Create a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'I am a new paragraph.';

// Append the new element to the body
document.body.appendChild(newParagraph);
</code></pre>
      `;
    } else if (snippetsList.trim() === "Object Destructuring") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code><span class="number-red">1/ </span>
const user = {
  id: 42,
  is_verified: true,
  name: "John Doe"
};

const { id, name } = user;
console.log(id); // 42
console.log(name); // John Doe

// With a different variable name
const { is_verified: verifiedStatus } = user;
console.log(verifiedStatus); // true
</code></pre>
      `;
    } else if (snippetsList.trim() === "Array Filter") {
      codeBody.classList.remove("text-class");
      codeBody.innerHTML = `
<pre><code><span class="number-red">1/ </span>
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out all odd numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
</code></pre>
      `;
    }

    console.log(snippetsList);
  });
});
window.onload = () => {
  display();
};
