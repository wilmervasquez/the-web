const button = document.querySelector("button");

button.addEventListener("click",async () => {
  worker.postMessage({ index: 40});

})

const worker = new Worker("./worker.js");
worker.onmessage = (event) => {
  button.style.color="red"
  console.log(event.data);
};
