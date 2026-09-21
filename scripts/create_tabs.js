    function creatingTab(tabName,nemra){
        var tabAnc = document.createElement('a');
            tabAnc.classList.add('button');
            tabAnc.classList.add('tabtab-'+nemra);
            tabAnc.id = 'tab_'+nemra; 
            tabAnc.href = 'pages/'+tabName+".html";
            tabAnc.innerHTML = tabName;
            tabAnc.setAttribute("data-text",tabName);
            buttonsOfGame.appendChild(tabAnc);
    }