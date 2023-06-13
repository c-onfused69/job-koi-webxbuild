/*-----------------------Typing Animation SECTION--------------------------------------------------------------------*/ 
let i=0;
let placeholder = "";
const txt = "Experience is the name everyone gives to their mistakes...";
const speed = 50;

    function type(){
        placeholder += txt.charAt(i);
        document.getElementById("search-id").setAttribute("placeholder",placeholder);
        i++;
        setTimeout(type,speed);
    }
    type();
