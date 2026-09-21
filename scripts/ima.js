function showImage(){
    document.getElementById("latTltle").style.display = "none";
    imgSh1 = document.createElement("img");
    imgSh1.classList.add("imgSH");
    imgSh1.classList.add("imgSH1");
    imgSh1.id= "imgSH1";
    imgSh1.style.display= "block";
    imgSh1.src = "itchio/"+default_img+".png";
    imgSh2 = document.createElement("img");
    imgSh2.id= "imgSH2";
    imgSh2.classList.add("imgSH");
    imgSh2.classList.add("imgSH2");
    imgSh3 = document.createElement("img");
    imgSh3.id= "imgSH2";
    imgSh3.classList.add("imgSH");
    imgSh3.classList.add("imgSH3");
    imgSh3.src = imgSh1.src;
    if(default_img == "Itch_io"){
        imgSh2.src = "itchio/logo-black-new.png";
    }else{
        document.getElementById("latTltle").style.display = "block";
    }
    itchio.appendChild(imgSh2);
    itchio.appendChild(imgSh1);
    itchio.appendChild(imgSh3);
}
setInterval(1000,showImage());