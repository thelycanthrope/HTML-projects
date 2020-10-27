function fun()
{
var month1 = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var dmonth;
var tmonth;

var month=(document.getElementById("dmonth").value);

if(month==="JANUARY" )
{
	dmonth=1;
}
if(month==="FEBRUARY")
{
	dmonth=2;
}
if(month==="MARCH" )
{
	dmonth=3;
}
if(month==="APRIL")
{
	dmonth=4;
}
if(month==="MAY" )
{
	dmonth=5;
}
if(month==="JUNE")
{
	dmonth=6;
}
if(month==="JULY" )
{
	dmonth=7;
}
if(month==="AUGUST")
{
	dmonth=8;
}
if(month==="SEPTEMBER" )
{
	dmonth=9;
}
if(month==="OCTOBER")
{
	dmonth=10;
}
if(month==="NOVEMBER" )
{
	dmonth=11;
}
if(month==="DECEMBER")
{
	dmonth=12;
}

var month=(document.getElementById("tmonth").value);

if(month==="JANUARY" )
{
	tmonth=1;
}
if(month==="FEBRUARY")
{
	tmonth=2;
}
if(month==="MARCH" )
{
	tmonth=3;
}
if(month==="APRIL")
{
	tmonth=4;
}
if(month==="MAY" )
{
	tmonth=5;
}
if(month==="JUNE")
{
	tmonth=6;
}
if(month==="JULY" )
{
	tmonth=7;
}
if(month==="AUGUST")
{
	tmonth=8;
}
if(month==="SEPTEMBER" )
{
	tmonth=9;
}
if(month==="OCTOBER")
{
	tmonth=10;
}
if(month==="NOVEMBER" )
{
	tmonth=11;
}
if(month==="DECEMBER")
{
	tmonth=12;
}

var dyear=document.getElementById("dyear").value;
var tyear=document.getElementById("tyear").value;


var ddate=Number(document.getElementById("ddate").value);
var tdate=Number(document.getElementById("tdate").value);

   if (ddate > tdate) {
     tdate = tdate + month1[tmonth - 1];
      tmonth = tmonth  - 1;
   }
   if (dmonth > tmonth) {
      tyear = tyear - 1;
      tmonth = tmonth + 12;
   }
   var rdate = tdate - ddate;
   var rmonth = tmonth - dmonth;
   var ryear = tyear - dyear;

document.getElementById("mydiv").innerHTML="Age is "+ ryear + " years " + rmonth + " months " + rdate+" days.";
}