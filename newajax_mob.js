var a = 0;
   

function getXMLHttp()
{
  var xmlHttp

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}



function MakeRequest()
{
  var xmlHttp = getXMLHttp();

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      HandleResponse(xmlHttp.responseText);
    }
  }

  sdata=null;

  xmlHttp.open("GET", "newajax.php?fname=" + sdata, true); 
  xmlHttp.send(null);
}



function SDGMakeRequest($input)
{
  var xmlHttp = getXMLHttp();
  

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      HandleResponse(xmlHttp.responseText);
    }
  }

  //sdata = $input[0];
  if(! a){
	a=a+1;
  } else {
	a=a+10;
  };
  
  sdata = a;
 
  xmlHttp.open("GET", "testsql2.php?fname=" + sdata, true); 
  xmlHttp.send(null);

  document.getElementById("text").value=a;

  var startvalue = a;
  var finishvalue = startvalue + 9;
 
  document.getElementById("startvar").innerHTML=startvalue+" - "+finishvalue;  
  document.getElementById("starthid").style.display = "none";  

}


function SDGMakeRequestBack($input)
{
  var xmlHttp = getXMLHttp();
  

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      HandleResponse(xmlHttp.responseText);
    }
  }

  //sdata = $input[0];

  if(a < 5){a=1};
  if(a > 5){a=a-10};
  if(! a){a=a+1};

  sdata = a;

  
  xmlHttp.open("GET", "testsql2.php?fname=" + sdata, true); 
  xmlHttp.send(null);

  document.getElementById("text").value=a;

  var startvalue = a;
  var finishvalue = startvalue + 9;

  document.getElementById("startvar").innerHTML=startvalue+" - "+finishvalue;
  document.getElementById("starthid").style.display = "none";   
}



function handleit()
{
  document.getElementById("txt").style.backgroundColor="red";

  var xmlHttp = getXMLHttp();

  sdata = 1;

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      HandleResponse(xmlHttp.responseText);
    }
  }

  sdata=null;
  sdata=document.getElementById("txt").value;


  xmlHttp.open("GET", "testsql2.php?fname=" + sdata, true); 
  xmlHttp.send(null);

}



function HandleResponse(response)
{
  document.getElementById('ResponseDiv').innerHTML = response;
}

