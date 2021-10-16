let todos = [];

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
    let message = document.getElementById("message");
    let len = todos.filter(t => !t.done).length;

    tode.innerHTML = "";
    for (let [index, todo] of todos.entries()) {
        tode.innerHTML += createDiv(index, todo);
    }

    message.innerHTML = len > 0 ? `${len} 項未完成` : "";
}

function createDiv(index, todo) {
    return `
            <div>
                <input type="checkbox" ${todo.done ? "checked" : ""} onclick="count(this, ${index});" /> 
                <input type="text" class="keyin" onkeyup="keyup(this, ${index})" name="keyin[]" ${todo.done ? "disabled" : ""} value="${todo.text}">
            </div>
            `;
}

document.getElementById('add').addEventListener('click', add);
document.getElementById('clear').addEventListener('click', clear);