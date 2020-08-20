 //오늘 할 일 출력

//todayArr[l]-7*parseInt(todayArr[l]/7)은 요일넘버
//     //(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1은 칸번호
               
//우선순위 1 : 습관영역 출력
                    for(var l=0;l<count;l++)
                    {
                        if(lank[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1]==1)
                        {
                            var printListContents = contents[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1];
                            checkboxplus = document.createElement("input");
                            checkboxplus.type="checkbox";
                            checkboxplus.name="finished";
                            checkboxplus.value=printListContents;
                            
                            memoplus=document.createElement("input");
                            memoplus.size=50;
                            memoplus.style="border: 1px solid rgb(197, 197, 197)";
                            document.getElementById("ToDoList").appendChild(checkboxplus);
                            document.write('&nbsp'+'<span id="lank1">'+printListContents+'</span>'+'&nbsp'+'&nbsp');
                            document.write('<br>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp');

                            document.getElementById("ToDoList").appendChild(memoplus);
                            document.write('<br>');
                         }
                    }

                    //우선순위 2 : 업무영역 출력
                    for(var l=0;l<count;l++)
                    {
                        if(lank[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1]==2)
                        {
                           var printListContents = contents[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1];
                            checkboxplus = document.createElement("input");
                            checkboxplus.type="checkbox";
                            checkboxplus.name="finished";
                            checkboxplus.value=printListContents;
                            
                            memoplus=document.createElement("input");
                            memoplus.size=50;
                            memoplus.style="border: 1px solid rgb(197, 197, 197)";
                            document.getElementById("ToDoList").appendChild(checkboxplus);
                            document.write('&nbsp'+'<span id="lank2">'+printListContents+'</span>'+'&nbsp'+'&nbsp');
                            document.write('<br>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp');
                            
                            document.getElementById("ToDoList").appendChild(memoplus);
                            document.write('<br>');
                         }
                    }

                    //우선순위 3 : 공부영역 출력
                    for(var l=0;l<count;l++)
                    {
                        if(lank[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1]==3)
                        {
                            var printListContents = contents[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1];
                            checkboxplus = document.createElement("input");
                            checkboxplus.type="checkbox";
                            checkboxplus.name="finished";
                            checkboxplus.value=printListContents;
                            
                            memoplus=document.createElement("input");
                            memoplus.size=50;
                            memoplus.style="border: 1px solid rgb(197, 197, 197)";
                            document.getElementById("ToDoList").appendChild(checkboxplus);
                            document.write('&nbsp'+'<span id="lank3">'+printListContents+'</span>'+'&nbsp'+'&nbsp');
                            document.write('<br>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp');
                            
                            document.getElementById("ToDoList").appendChild(memoplus);
                            document.write('<br>');
                         }
                    }

                    //우선순위 4 : 취미영역 출력
                    for(var l=0;l<count;l++)
                    {
                        if(lank[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1]==4)
                        {
                            var printListContents = contents[(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1];
                            checkboxplus = document.createElement("input");
                            checkboxplus.type="checkbox";
                            checkboxplus.name="finished";
                            checkboxplus.value=printListContents;
                            
                            memoplus=document.createElement("input");
                            memoplus.size=50;
                            memoplus.style="border: 1px solid rgb(197, 197, 197)";
                            document.getElementById("ToDoList").appendChild(checkboxplus);
                            document.write('&nbsp'+'<span id="lank4">'+printListContents+'</span>'+'&nbsp'+'&nbsp');
                            document.write('<br>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp');
                            
                            document.getElementById("ToDoList").appendChild(memoplus);
                            document.write('<br>');
                         }
                    }