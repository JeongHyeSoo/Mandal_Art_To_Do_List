                    var todayArr = new Array();

                    // 오늘 할 일 탐색
                    var d=new Date();
                    var today = d.getDay();
                    var count=0;
                    
                    for(var num=1;num<=81;num++)
                    {
                        if(dayArr[7*(num-1)+today]==1)
                        {
                            todayArr[count]=7*(num-1)+today;//num는 칸번호, today는 요일
                            count++
                        }
                    
                    }