var img;
var x;
var color;
var played;
var playing;
var isfirstmove=0;
var click=0;
function myFunction() {
click++;
var y=document.activeElement.id;


if(document.getElementById(y).style.backgroundImage!='')
{
x=document.activeElement.id
  img=document.getElementById(x).style.backgroundImage;
color=identify(img);
if(color=='w' && isfirstmove==0)
{
	isfirstmove++;

}
 }
playing =identify(img);

if ( (y!=x)  && (isfirstmove==1) && played!=playing  )
{
	
	document.getElementById(y).style.backgroundImage=img;
	document.getElementById(x).style.backgroundImage=null;
	img="";
	played=playing;
	
}
console.log("played: "+played +" playing : "+playing+" x : "+ x+" y : "+y +" click: "+click);

}
function identify(img)
{
	return img[5];
}