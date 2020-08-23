//핵심 목표 출력
for(var i=0;i<9;i++)
document.getElementsByClassName("con")[i].innerHTML=contents[9*i+5];
        
//클릭시 이벤트
document.querySelector('#box5').addEventListener("click", clickEvent5);
document.querySelector('#box14').addEventListener("click", clickEvent14);
document.querySelector('#box23').addEventListener("click", clickEvent23);
document.querySelector('#box32').addEventListener("click", clickEvent32);
document.querySelector('#box50').addEventListener("click", clickEvent50);
document.querySelector('#box59').addEventListener("click", clickEvent59);
document.querySelector('#box68').addEventListener("click", clickEvent68);
document.querySelector('#box77').addEventListener("click", clickEvent77);

    
    
    function clickEvent5()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+1];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent14()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+10];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent23()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+19];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent32()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+28];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent50()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+46];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent59()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+55];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent68()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+64];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }

    function clickEvent77()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j+73];
        }
        else{
            for(var j=0;j<9;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[9*j+5];
        }
        
    }
