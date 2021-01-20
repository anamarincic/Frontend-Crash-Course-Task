document.querySelector("#basket").addEventListener("click", handle_click);

function handle_click(){

     var click=document.getElementById("list-items");

     if(click.style.display === "none") {
            click.style.display = "block";
     }else {
            click.style.display = "none";
        }
}


