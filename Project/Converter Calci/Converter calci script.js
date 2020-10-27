/* Dec to all*/
function Dectoall()
{
	var  dec=Number(document.getElementById("dec").value);
	if(dec=="")
	{
		document.getElementById("hex").value="";
		document.getElementById("oct").value="";
		document.getElementById("bin").value="";
	}
	else
	{
		document.getElementById("hex").value=dec.toString(16).toUpperCase();
		document.getElementById("oct").value=dec.toString(8);
		document.getElementById("bin").value=formattedBin( dec.toString(2) );
		
	}
}




/*Hex to all*/

function Hextoall()
{
	
	var hex=document.getElementById("hex").value;
	document.getElementById("hex").value=hex.toUpperCase();
	if(hex=="")
	{
		document.getElementById("dec").value="";
		document.getElementById("oct").value="";
		document.getElementById("bin").value="";
	}
	else
	{
		var dec=parseInt(hex,16);
		document.getElementById("dec").value=dec;
		document.getElementById("oct").value=dec.toString(8);
		document.getElementById("bin").value=formattedBin( dec.toString(2) );
	}
}




/* Bin to all*/
function Bintoall()
{
	var bin=document.getElementById("bin").value;
	
	if(bin=="")
	{
		document.getElementById("dec").value="";
		document.getElementById("oct").value="";
		document.getElementById("hex").value="";
	}
	else
	{
		var dec=parseInt(bin,2);
		document.getElementById("dec").value=dec;
		document.getElementById("oct").value=dec.toString(8);
		document.getElementById("hex").value=dec.toString(16).toUpperCase();
		
	}
}



/* Octal to all*/

function Octaltoall()
{
	var oct=document.getElementById("oct").value;
	if(oct=="")
	{
		document.getElementById("dec").value="";
		document.getElementById("hex").value="";
		document.getElementById("bin").value="";
	}
	else
	{
		var dec=parseInt(oct,8);
		document.getElementById("dec").value=dec;
		document.getElementById("bin").value=formattedBin( dec.toString(2) );
		document.getElementById("hex").value=dec.toString(16).toUpperCase();;
	}
}







function formattedBin(bin)
{
	var len = bin.length ;
    var bbin = "";
    
    var n=len;
	var num=4;
	var diff;
	var i=1;
	var t;
	while(true)
	{
	    t=num*i;
	    diff=t-n;
	    if(diff>=0 && diff<=3)
	    {
	        break;
	    }
	    i++;
	}
	var zeroes=t-n;
	while(zeroes>0)
	{
	   bin="0"+bin;
	   zeroes--;
	}
	
    for ( i = 0; i<bin.length; i++)
    {

    	bbin = bbin + bin.charAt (i);
    
	    if ( (i+1)%4 ==0)
	     {
	          bbin = bbin + " ";
	          
	     }
    }
return bbin;
}