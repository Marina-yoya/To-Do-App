
$(document).ready(function () {


    $(".btn-add").click(function () {
        let inputValue = $("#task-input").val()
        let li = document.createElement("LI");
        li.textContent = inputValue;
        li.classList.add("list-group-item");
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete";
        delBtn.classList.add('btn', 'btn-outline-secondary', 'btn-del', 'px-2')
        li.append(delBtn)

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add('btn', 'btn-outline-secondary', 'btn-edit', 'px-3')
        li.append(editBtn)

        $("#taskList").append(li);
    });



});