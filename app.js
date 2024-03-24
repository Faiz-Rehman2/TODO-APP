
let todoInput=document.querySelector("#Todo");

let ol=document.querySelector("ol");

function renderarray(){

    ol.innerHTML="";
Image

    for(i=0 ; i<array.length ; i++){
        ol.innerHTML+=`<li>${array[i]} 
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>
        `
    }

    

}

let array=[];

function addTodo(){

    if(todoInput.value==""){
        alert("Please Enter some task");
    }


    array.push(todoInput.value);

    todoInput.value="";


    renderarray()
  
}



function deleteTodo(index){

   
    array.splice(index , 1);

    renderarray()

}



function editTodo(index){

    let newValue=prompt("Enter a new value");

    array.splice(index , 1 , newValue );


   renderarray()  

}

