const colors = document.querySelector(".colors");

for (let i = 0; i < 360; i+=60) {
  const cap = document.createElement("div");
  cap.classList.add("cap")

  for (let j = 1; j <= 10; j++) {
    
    
    const element = document.createElement("div");
    element.classList.add("color")
    // element.textContent = j * 100
    element.style.left = `${Math.random()*100}%`
    element.style.top = `${Math.random()*100}%`

    element.style.color = j <= 5 ? '#fff' : '#000'
    element.style.backgroundColor = `oklch(${j*10}% 0.29 ${i}`

    cap.appendChild(element)
  }
  colors.append(cap)
  
}