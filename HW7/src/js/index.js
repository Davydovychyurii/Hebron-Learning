function newTask() {
    let inputValue = document.getElementById("add-task").value;
    if (inputValue === "") {
        return
    } else {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let closeButton = document.createElement("div");
        p.appendChild(document.createTextNode(inputValue));
        closeButton.appendChild(document.createTextNode("Closet"));
        closeButton.classList.add("buttonClose");
        li.appendChild(p);
        li.appendChild(closeButton);
        document.getElementById("task-list").appendChild(li);
        document.getElementById("add-task").value = "";
    }
}

let taskItem = document.querySelector("ul");
taskItem.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});
let close = document.querySelector("ul");
close.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        event.target.parentNode.remove();
    }
});