//핵심 목표 출력
for(var i=0;i<9;i++)
document.getElementsByClassName("con")[i].innerHTML=contents[9*i+5];
        
//클릭시 이벤트
for(var s=0;s<9;s++){
    document.querySelector('#box'+(9*s+5)).onclick = function () 
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
}