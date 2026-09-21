    function gridMaker(tags_array,itchIOurl,gridTitle,namra){
        // var mainTag = document.createElement('div');
        //     mainTag.classList.add('main-tag');
        //     mainTag.classList.add('main-tag-'+namra);
        //     mainTag.id = 'mainTag'+namra;
        var tagGallery = document.createElement('div');
     tagGallery.classList.add('tag-gallery');
     tagGallery.classList.add('tag-gallery-'+namra);
     tagGallery.id = 'tagGallery';
        for(var i = 0;i<tags_array.length;i++){
            var tag = document.createElement('div');
            tag.classList.add("tag-grid");
            tag.id = "tag_"+co++;    
            var anc = document.createElement("a");    
            anc.href = itchIOurl+tags_array[i][1]+"/";
            anc.target = "_blank";
            var ima = document.createElement("img");
            anc.setAttribute("text-content",tags_array[i][0]);
            var span = document.createElement("span");
            var div_tit = document.createElement("div");
            ima.src = "../src/"+tags_array[i][1]+".png";
            span.innerHTML = tags_array[i][0];
            div_tit.innerHTML = tags_array[i][0];
            div_tit.style.fontFamily = "OxaniumRe";
            div_tit.style.fontSize = "10px";
            anc.appendChild(div_tit);
            anc.appendChild(ima);
            anc.appendChild(span);
            tag.appendChild(anc);    
            if(gridList.innerHTML === "List"){
                    var lista = document.createElement("li");
                    lista.id = "list_"+co++;
                    var anc_lista = document.createElement("a");
                    anc_lista.classList.add('anc-lista');        
                    anc_lista.href = itchIOurl+tags_array[i][1]+"/";
                    anc_lista.target = "_blank";
                    anc_lista.innerHTML = tags_array[i][0];
                    lista.appendChild(anc_lista);
                    orderingPos.appendChild(lista);   
            }
            tagGallery.appendChild(tag);
        }
        // mainTag.appendChild(tagGallery);
        // gridGallery.appendChild(mainTag);
        gridGallery.appendChild(tagGallery);
    }
    