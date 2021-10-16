var todos = [];

function add() {
    todos = todos.concat({ done: false, text: '' });
    renew();
}

function clear() {
    todos = todos.filter(t => !t.done);
    renew();
}

function count(el, index) {
    todos[index].done = el.checked;
    renew();
}

function keyup(el, index) {
    todos[index].text = el.value;
}

function renew() {

    let tode = document.getElementById("todo");
    let count = document.getElementById("count");
    let doneLength = todos.filter(t => !t.done).length;

    tode.innerHTML = "";

    for (let [index, todo] of todos.entries()) {

        let div = `<div>
                    <input type="checkbox" ${todo.done ? "checked" : ""} onclick="count(this, ${index});" /> 
                    <input type="text" class="keyin" onkeyup="keyup(this, ${index})" name="keyin[]" ${todo.done ? "disabled" : ""} value="${todo.text}">
                  </div>`;

        tode.innerHTML += div;
    }

    count.innerHTML = doneLength > 0 ? `${doneLength} 項未完成` : "";
}

document.getElementById('add').addEventListener('click', add);
document.getElementById('clear').addEventListener('click', clear);