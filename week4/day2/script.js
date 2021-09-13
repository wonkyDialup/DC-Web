
function add_item() {

let item = document.getElementById("taskInput");
let list_item = document.getElementById("list_tasks");
if(item.value != ""){
    let list = document.createElement("LI");
    list.appendChild(document.createTextNode(item.value));
    list_item.appendChild(list);
    item.value=""
    list.onclick = function(){
        this.parentNode.removeChild(this);
    };
};

};