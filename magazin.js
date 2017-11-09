"use strict";
//обычно делаю глобально, чтобы не повторять, хотя можно и в функцию затолкать
var fso=new ActiveXObject("Scripting.FileSystemObject");
 
function readFile(w){//чтение файла в массив
var c, i=0, m=[];
c=fso.FileExists(w);
if(!c){return null;};//если нет файла на диске
c=fso.OpenTextFile(w, 1, false, 0);
while(!c.AtEndOfStream){m[i]=c.ReadLine(); i++;};
c.Close();
return m;//возвращаем массив
 };
 var arr=[];
function writeFile(w, m){//принимает путь к файлу и массив
var i, l=m.length, s, c;
s=fso.FileExists(w);
if(s){//если файла нет на диске, сразу пишем новый файл
s=fso.GetFile(w);
i=s.Attributes;
i=i.toString(2);//перегоняем в двоичное
c=i.length-1;//взять младший бит чтение/запись
if(i.charAt(c)==1){s.Attributes=32;}};//сбросить бит чтение/запись
c=fso.CreateTextFile(w, true, false);
for(i=0; i!=l; i++){c.WriteLine(m[i]);};//цикл записи файла
c.Close();
 };
var arr=readFile("scratch.html");
alert(arr[0]);
