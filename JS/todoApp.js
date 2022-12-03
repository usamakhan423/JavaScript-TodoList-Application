const formTodo = document.querySelector(".todo-input");
const inputText = document.querySelector("#inputText");
const listItems = document.querySelector(".list-items")

console.log(inputText)
formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputText.value);
    
    const newInput = inputText.value;
    inputText.value = "";
    
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span>${newInput}</span>
    <div class="list-buttons">
        <button class="list-btn done">Done</button>
        <button class="list-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    listItems.append(newLi);
   

})
listItems.addEventListener("click", (e) => {
    if(e.target.classList.contains("done")) {
        const spanLi = e.target.parentNode.previousElementSibling;
        spanLi.style.textDecoration = "line-through";
        spanLi.style.color = "#eee";
        spanLi.style.fontWeight = "400";
    }
    if(e.target.classList.contains("remove")){
        const deletedLi = e.target.parentNode.parentNode;
        deletedLi.remove();
    }
})