function strikeThrough(checkBox) {
    var checkItem = checkBox.nextElementSibling
    console.log(checkItem)
    if (checkBox.checked){
        checkItem.classList.add("text-decoration-line-through")
    } else {
        checkItem.classList.remove("text-decoration-line-through")
    }
}

function addItem(list_item) {
    var ul = document.getElementById('list-group');

    var li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute("class", "list-group-item");
    
    var checkbox = document.createElement('input');
    li.appendChild(checkbox);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input me-1");
    checkbox.setAttribute("onchange", "strikeThrough(this)");


    var span = document.createElement('span');
    span.setAttribute("class", "p");
    li.appendChild(span);
    span.insertAdjacentText("afterbegin", ` ${list_item}`)
}   