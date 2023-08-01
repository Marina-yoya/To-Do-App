
$(document).ready(function () {

    const tasks = [];
    let taskIndex = -1;

    function refreshSortable() {
        $("#taskList").sortable({
            update: function (event, ui) {
                const newIndex = ui.item.index();
                const editedTask = ui.item.text().trim();
                tasks.splice(taskIndex, 1);
                tasks.splice(newIndex, 0, editedTask);
            }
        });
    }

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
        tasks.push(li);
        $("#task-input").val("");
        
        $(".btn-del").click(function (e) {
            const li = e.target.parentNode;
            li.remove();
        });

        $(".btn-edit").click(function (e) {
            const editLi = e.target.parentElement.firstChild.textContent;
            console.log(editLi, "li")
            $("#task-edit").val(editLi);
            taskIndex = $(this).parent().index();
            console.log(taskIndex)
        });

        $(".btn-save").click(function (e) {
            const editedTask = $("#task-edit").val();

            if (taskIndex !== -1 && taskIndex < tasks.length) {
                tasks[taskIndex] = editedTask;
                $("#taskList li").eq(taskIndex).contents().get(0).nodeValue = editedTask
            }

            $("#task-edit").val("");
            refreshSortable();
            taskIndex = -1;
        });
        refreshSortable();
    });
});




