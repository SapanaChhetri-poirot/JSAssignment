function ToDo() {
    var todo1 = prompt("What Title do you want to add");
    var list = new Array();
    if (todo1) {
        var todo2 = prompt("What Description do you want to add");

        if (todo2) {
            list = new Array([todo1, todo2]);
            // list[1][1] = todo2;
            console.log(list);

            alert("Your to do list includes: " + "Title " + list[0][0] + " Description " + list[0][1]);
        } else { alert("Please insert description of the To  DO List") }
    } else {
        alert("Please Insert Title of the TO DO List");
    }


}

function SeeToDo() {

}