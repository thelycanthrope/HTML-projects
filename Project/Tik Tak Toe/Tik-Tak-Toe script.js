
var flag=0;
var count=0;
var temp=0;
var cross=1;
var inp=[ ["0","0","0"],
	["0","0","0"],
	["0","0","0"] ] ;
var a="0";
var draw=0;;
var winx=0;
var wino=0;
var ddraw=0;
var total=0;
function myfun(id)
{

if(flag===1)
{
	id.value="X";
	flag=0;
	count++;
	if(id.id=="1")
	{
		a=inp[0][0]="X";
		
	}
	else if(id.id=="2")
	{
		a=inp[0][1]="X";
	}
	else if(id.id=="3")
	{
		a=inp[0][2]="X";
	}
	else if(id.id=="4")
	{
		a=inp[1][0]="X";
	}
	else if(id.id=="5")
	{
		a=inp[1][1]="X";
	}
	else if(id.id=="6")
	{
		inp[1][2]="X";
	}
	else if(id.id=="7")
	{
		a=inp[2][0]="X";
	}
	else if(id.id=="8")
	{
		a=inp[2][1]="X";
	}
	else if(id.id=="9")
	{
		a=inp[2][2]="X";
	}
}
else if(flag===0)
{
	id.value="O";
	count++;
	flag=1;
	if(id.id=="1")
	{
		a=inp[0][0]="O";
	}
	else if(id.id=="2")
	{
		a=inp[0][1]="O";
	}
	else if(id.id=="3")
	{
		a=inp[0][2]="O";
	}
	else if(id.id=="4")
	{
		a=inp[1][0]="O";
	}
	else if(id.id=="5")
	{
		a=inp[1][1]="O";
	}
	else if(id.id=="6")
	{
		a=inp[1][2]="O";
	}
	else if(id.id=="7")
	{
		a=inp[2][0]="O";
	}
	else if(id.id=="8")
	{
		a=inp[2][1]="O";
	}
	else if(id.id=="9")
	{
		a=inp[2][2]="O";
	}
}
id.disabled=true;

if(count>=5)
{
	var j=0;
	var i=0;
/*for horizontal*/
	for(i=0;i<3;i++)
	{
	  if ( (inp[i][j]===inp[i][j+1]) && (inp[i][j] !=="0") )
	  {
	     if((inp[i][j]===inp[i][j+2])&& (inp[i][j] !=="0") )
	     {
		document.getElementById("mydiv").innerHTML="Winner isss "+ inp[i][j];
		temp=1;
		cross=0;
		draw=1;
		break;
	      }
	   }
	}
	if(temp===1 && cross===0)
	{
 		//setTimeout(function(){ location.reload(); }, 3000);
		setTimeout(function(){ clear(inp[i][j]); }, 3000);
	}

	/*for vertical*/
	else if(temp===0 && cross===1)
	{
		i=0;
		j=0;
		for(j=0;j<3;j++)
		{
		  if((inp[i][j]===inp[i+1][j])&& (inp[i][j] !=="0"))
		  {
	     		if((inp[i][j]===inp[i+2][j])&& (inp[i][j] !=="0"))
	     		{
				document.getElementById("mydiv").innerHTML="Winner isss "+ inp[i][j];
				temp=-1;
				cross=0;
				draw=1;
				break;
	      		}
	   	  }
		}
		if(temp===(-1) && cross===0)
		{
			//setTimeout(function(){ location.reload(); }, 3000);
			setTimeout(function(){ clear(inp[i][j]); }, 3000);
		}
		
	}
	/*for cross*/
	if(temp===0 && cross===1)		
	{
			var cross2=0,cross1=0;
			if ( (inp[1][1]===inp[0][0]) && (inp[0][0]!=="0") )
			{
				if ( (inp[2][2]===inp[0][0]) && (inp[0][0]!=="0") )
				{
			   		 document.getElementById("mydiv").innerHTML="Winner is "+ inp[0][0];  
					  cross2=1; 
					  draw=1;
				}
			}
			if(cross2===1 )
			{
				//setTimeout(function(){ location.reload(); }, 3000);
				setTimeout(function(){ clear(inp[0][0]); }, 3000);
			}
			else {
			if ( (inp[2][0]===inp[1][1]) && (inp[1][1]!=="0") )
			{
				if ( (inp[0][2]===inp[1][1]) )
				{
			   		 document.getElementById("mydiv").innerHTML="Winner is "+ inp[2][0];   
					 //setTimeout(function(){ location.reload(); }, 3000);
					  setTimeout(function(){ clear(inp[2][0]); }, 3000);
					 draw=1;
				}
				}
			}
	}			 
	
}

	if ( (draw===0 && temp===0 && cross===1) && count===9 )
	{
		document.getElementById("mydiv").innerHTML="DRAW";
		//setTimeout(function(){ location.reload(); }, 3000);
		
		setTimeout(function(){ clear("D"); }, 3000);
	}
		
}	

function clear(z)
{
	document.getElementById("1").value="";
	document.getElementById("2").value="";
	document.getElementById("3").value="";
	document.getElementById("4").value="";
	document.getElementById("5").value="";
	document.getElementById("6").value="";
	document.getElementById("7").value="";
	document.getElementById("8").value="";
	document.getElementById("9").value="";

	document.getElementById("1").disabled=false;
	document.getElementById("2").disabled=false;
	document.getElementById("3").disabled=false;
	document.getElementById("4").disabled=false;
	document.getElementById("5").disabled=false;
	document.getElementById("6").disabled=false;
	document.getElementById("7").disabled=false;
	document.getElementById("8").disabled=false;
	document.getElementById("9").disabled=false;
	draw=0;
	temp=0;
	cross=1;
	count=0;
	flag=0;
	inp=[ ["0","0","0"],
	["0","0","0"],
	["0","0","0"] ] ;
	document.getElementById("mydiv").innerHTML="";   


if(z==="X")
{
	winx++;
	document.getElementById("X").value=winx;
	document.getElementById("T").value=total;
}
else if(z==="O")
{
	wino++;
	document.getElementById("O").value=wino;
	document.getElementById("T").value=total;
}
else if(z==="D")
{
	ddraw++;
	document.getElementById("D").value=ddraw;
	document.getElementById("T").value=total;
}
	document.getElementById("X").disabled=true;
	document.getElementById("O").disabled=true;
	document.getElementById("D").disabled=true;
	document.getElementById("T").disabled=true;
total++;
document.getElementById("T").value=total;
}

