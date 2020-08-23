var contents = new Array();
var dayArr = new Array();
var lank = new Array();

var countClickNum=0;

for(var i=1;i<=81;i++)
{
    contents[i]=" ";
}

for(var j=0;j<567;j++)
{
    dayArr[j]=0;
}

 for(var k=1;k<=81;k++)
 {
    lank[k]=0;
}

 // 만다라트 입력
 
    // 1번 큰 박스
contents[5]="건강";

contents[2]="운동하기";
for(var i=0;i<7;i++)
dayArr[7*(2-1)+i]=1;//2번째 항목은 매일 수행(수행=1)
lank[2]=4;//순위영역 1=습관영역,2=업무영역,3=공부영역,4=취미영역

contents[3]="물,비타민,약";
for(var i=0;i<7;i++)
dayArr[7*(3-1)+i]=1;//3번째 항목, 매일
lank[3]=1;


contents[8]="팩하기";
for(var i=0;i<7;i++)
dayArr[7*(8-1)+8]=1;//11번째 항목, 월요일, 목요일
dayArr[7*(8-1)+8]=1;
lank[6]=1;


    // 2번 큰 박스
contents[14]="영어";

contents[12]="영어 단어 암기";
for(var i=0;i<7;i++)
dayArr[7*(12-1)+i]=1;//12번째 항목, 매일
lank[12]=3;


   // 3번 큰 박스
contents[23]="취미";

contents[20]="크로키 10분";
for(var i=0;i<7;i++)
dayArr[7*(20-1)+i]=1;//20번째 항목, 매일
lank[20]=4;

    // 4번 큰 박스
contents[32]="관계";



    // 5번 큰 박스
contents[41]="정혜수";



    // 6번 큰 박스
contents[50]="전공";

contents[47]="TIL 기록 - 의미있는 커밋";
for(var i=0;i<7;i++)
dayArr[7*(47-1)+i]=1;//47번째 항목, 매일
lank[47]=3;

contents[48]="한 챕터 분량 공부하기";
for(var i=0;i<7;i++)
dayArr[7*(48-1)+i]=1;//48번째 항목, 매일
lank[48]=3;


    // 7번 큰 박스
contents[59]="돈";

contents[57]="알바 (3시간 이상 내 시간으로 쓰기)";
dayArr[7*(57-1)+6]=1;//57번째 항목, 토요일
dayArr[7*(57-1)+0]=1;//57번째 항목, 일요일
lank[57]=2;



    // 8번 큰 박스
contents[68]="";



    // 9번 큰 박스
contents[77]="";