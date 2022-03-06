import "./index.css";
import img1 from "./img/todologo.jpg";
var logo = document.querySelector("#logo")
var img = document.createElement("img")
img.src = img1;
img.setAttribute("id","img")
logo.append(img);

document.querySelector("#myform").addEventListener("submit", additem)
    
    function additem(event){
        event.preventDefault();
        var note=document.querySelector("#note").value;
        
        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent=note;
        var td2 = document.createElement("td");
        td2.textContent="Delete";
        td2.addEventListener("click", deleteElement);
        row.append(td1, td2);

        document.querySelector("tbody").append(row);
    }
    function deleteElement(event){
        event.target.parentNode.remove();
    }