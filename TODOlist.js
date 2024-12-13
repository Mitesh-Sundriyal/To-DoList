let input=document.getElementById("inputbox");
let text= document.querySelector(".list");


function add(){
    if(input.value==""){
        alert("please enter the list ");
    }else{
        
        let newElement = document.createElement("li");
        newElement.innerHTML=`${input.value} "<i>delete</i>"`;
        text.appendChild(newElement);
        input.value="";

        newElement.querySelector("i").addEventListener("click",remove);
        
        function remove(){
              newElement.remove();
               } 
    }
}