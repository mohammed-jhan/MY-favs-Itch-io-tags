document.getElementById('listGallery').style.display = "none" ;

// gridList.innerHTML = localStorage.getItem('GLsoringu') || "List";
gridList.innerHTML = "List";
        gridList.addEventListener("click",() => {
            if(gridList.innerHTML === "List"){
                gridList.innerHTML = "Grid";
                // document.querySelectorAll('#gridGallery').forEach(a => a.style.display = "none") ;
                document.getElementById('gridGallery').style.display = "none" ;
                document.getElementById('listGallery').style.display = "block" ;
                localStorage.setItem('GLsoringu',"List");
            }else{
                gridList.innerHTML = "List";
                // document.getElementById('gridGallery').style.display = "grid";
                document.getElementById('gridGallery').style.display = "block";
                document.getElementById('listGallery').style.display = "none" ;
                localStorage.setItem('GLsoringu',"Grid");
            }
        });
        function pausingOp(){
            // PauseMenu.style.display = "block";
            PauseMenu.classList.toggle("pause-active");
        }
document.addEventListener("keyup",(e) => {
    if(e.key === "Escape"){
        pausingOp();
    }
});
var pauseMEnuContainer = document.createElement('div');
    pauseMEnuContainer.classList.add("pause-menu");
    var a_back_menu_1 = document.createElement('a'),
        a_back_menu_2 = document.createElement('a'),
        a_get_back = document.createElement('button');
        a_back_menu_1.classList.add('button');
        a_back_menu_1.innerHTML = "Back to menu";
        a_back_menu_2.classList.add('button');
        a_back_menu_2.innerHTML = "Back to main menu";
        a_get_back.classList.add('pause-button');
        a_get_back.classList.add('back');
        a_get_back.type = "button";
        a_get_back.setAttribute("onclick","pausingOp()");
        a_get_back.id = "PauseMenuButton";
        a_get_back.innerHTML = "get back";
        pauseMEnuContainer.appendChild(a_back_menu_1);
        pauseMEnuContainer.appendChild(a_back_menu_2);
        pauseMEnuContainer.appendChild(a_get_back);
        PauseMenu.appendChild(pauseMEnuContainer);
{/* <div class="pause-menu">
            <a href="" class="button">Back to menu</a>
            <a href="" class="button">Back to main menu</a>
            <button type="button" onclick="pausingOp()" class="pause-button back" id="PauseMenuButton">get Back</button>
        </div> */}