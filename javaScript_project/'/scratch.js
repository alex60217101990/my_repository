'use stirct';
/*1 script*/
/*var array_month=[
    ['January','February','March','April','May','June','July','August','September','October','November','December'],
    ['LightSteelBlue', 'azure','SeaGreen','LimeGreen','LawnGreen','Crimson','Red','DarkRed','Yellow','OrangeRed','DarkOrange',
    'MediumAquamarine']];
for(var i=0; i<12; i++){
    document.write('<div id="d');
    document.write(i+'"');
    document.write('>');
    var t=array_month[0][i];
    document.write(t);
    document.write('</div>')
}
for(var i=0; i<12; i++){
    var time_el=document.getElementById('d'+i);
    time_el.style.color="#FF00FF";
    time_el.style.background=array_month[1][i];
    time_el.style.width="40%";
    time_el.style.height="20%";
    time_el.style.margin="0 auto";
    time_el.style.textAlign="center";
    time_el.style.fontWeight="bold";
}*/
/*2 script*/
/*function table() {
    var width= prompt("please enter the width of the table:", 0);
    var rows=prompt("please enter the number of rows of the table:", 0);
    var cols= prompt("please enter the number of columns of the table:", 0);
    var OrientationVariant = confirm("Centered?");
    var info=1;
    document.write('<'+'table'+' border="1" id="table">');
    for(var i=0; i<rows; i++){
        document.write('<tr>');
        for(var j=0; j<cols; j++){
            document.write('<td>');
            document.write('cell '+info);
            document.write('</td>');
            info++;
        }
        document.write('</tr>');
    }
    document.write('</table>');
    var table1=document.getElementById('table');
    table1.style.width=width+'px';
    table1.style.borderRadius='5px';
    table1.style.borderStyle='solid';
    table1.style.borderCollapse='0';
    table1.style.borderColor='#778899';
    if(OrientationVariant) table1.style.margin='0 auto';
}
table();*/
/*script 3:*/
/*var arr_of_questions=['В Берлине когда-либо работал великий композитор 18-го века Кристоф Виллибальд Глюк? ',
    'Фордевинд - курс парусного судна, совпадающий с направлением ветра?',
    'Произведение А.Дюма-сына легло в основу оперы Дж. Верди?',
    'Никотиновая кислота является витамином?',
    'У автомобилей из Алжира международный регистрационный знак DZ?',
    'Рене Франсуа Арман Прюдом получил первую Нобелевскую премию по литературе?',
    'Тротилом "в народе" называют химическое соединение - тринитротолуол?'];

var user_answers=[0,0,0,0,0,0,0]; var sum=0;
for(var i=0; i<7; i++){
    if(confirm(arr_of_questions[i])){ user_answers[i]+=10; sum+=10;};
}
document.write('<'+'table'+' border="1" id="table2">'+'<tr>'+'<td>'+'Вопрос:'+'</td>'+'<td>'+'Баллы:'+'</td>'+'</tr>');
for(var i=0; i<7; i++){
    document.write('<tr>'+'<td>'+arr_of_questions[i]+'</td>');
    document.write('<td>'+user_answers[i]+'</td>'+'</tr>');
}
document.write('<tr>'+'<td>Итого:</td>'+'<td>'+sum+'</td>'+'</table');
var el=document.getElementById('table2');
el.style.textAlign='center';
el.style.fontSize='22px';
el.style.color='#0000FF';
el.style.borderStyle='solid';
el.style.borderColor='#00FA9A';
el.style.margin='0 auto';
el.style.borderCollapse='collapse';
el.style.borderWidth='2px';*/

/*календарь:*/
/*var now=new Date();
now.setDate(1);
var dayOfWeek=now.getDay()?now.getDay():7;
now.setDate(-dayOfWeek + 2);
console.log(now.getDate());
var days = now.getDate();
document.write('<table id="t1" class="t2" border="1"><tr id="ft"><td>Пн.</td><td>Вт.</td><td>Ср.</td><td>Чт.</td> <td>Пт.</td> <td>Сб.</td> <td>Вс.</td></tr>');
for (var i = 0; i < 6; i++) {
    document.write('<tr>');
    for (var j = 0; j < 7; j++) {
        var d1 = now;
        console.log(d1);
        d1.setDate(days);
        console.log(d1.setDate(days));
        days = d1.getDate();
        days++;
        document.write('<td>'+d1.getDate()+'</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
//var divv = document.createElement('div');
//document.body.appendChild(divv);
var divv=document.getElementsByClassName('t2');
var div=document.getElementById('t1');
div.style.borderCollapse='collapse';
div.style.width='50%';
div.style.margin='0 auto';
div.style.marginTop='15%';
for (var i = 0; i < divv.length; i++) {
    divv[i].style.border='2px solid #FFA07A';
    divv[i].style.borderRadius='10';
    divv[i].style.color="#00FA9A";
    divv[i].style.textAlign ='center';
}
div.style.background='#708090';
div.style.borderRadius='10 10 10 10';
var ft=document.getElementById('ft');
ft.style.color='#FFFF00';
ft.style.background='#FF00FF';
ft.style.fontSize='30px';
ft.style.fontFamily='Arial';*/


//календарь 2 вариант

var now=new Date();
now.setDate(1);
var dayOfWeek=now.getDay()?now.getDay():7;
now.setDate(-dayOfWeek + 2);
console.log(now.getDate());
var days = now.getDate();
var string='<table id="t1" class="t2" border="1"><tr id="ft"><td>Пн.</td><td>Вт.</td><td>Ср.</td><td>Чт.</td> <td>Пт.</td> <td>Сб.</td> <td>Вс.</td></tr>';
for (var i = 0; i < 6; i++) {
    string+='<tr>';
    for (var j = 0; j < 7; j++) {
        var d1 = now;
        console.log(d1);
        d1.setDate(days);
        console.log(d1.setDate(days));
        days = d1.getDate();
        days++;
        string+='<td>'+d1.getDate()+'</td>';
    }
    string+='</tr>';
}
string+='</table>';
var t=document.createElement('div');
document.body.appendChild(t);
t.innerHTML=string;
var divv=document.getElementsByClassName('t2');
var div=document.getElementById('t1');
div.style.borderCollapse='collapse';
div.style.width='50%';
div.style.margin='0 auto';
div.style.marginTop='15%';
for (var i = 0; i < divv.length; i++) {
    divv[i].style.border='2px solid #FFA07A';
    divv[i].style.borderRadius='10';
    divv[i].style.color="#00FA9A";
    divv[i].style.textAlign ='center';
}
div.style.background='#708090';
div.style.borderRadius='10 10 10 10';
var ft=document.getElementById('ft');
ft.style.color='#FFFF00';
ft.style.background='#FF00FF';
ft.style.fontSize='30px';
ft.style.fontFamily='Arial';




