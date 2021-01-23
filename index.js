document.querySelector("#basket").addEventListener("click", handle_click);
document.querySelector("#btnDown").addEventListener("click", scroll_down);
document.querySelector("#btnUp").addEventListener("click", scroll_up);


function handle_click(){
   var click= document.getElementById("list-items");

   if(click.style.display === "none"){
       click.style.display = "block";
     }else{
         click.style.display = "none";
     }
}

function scroll_down(){
    document.getElementById("products").scrollTop += 100;
}

function scroll_up(){
    document.getElementById("products").scrollTop -= 100;
}