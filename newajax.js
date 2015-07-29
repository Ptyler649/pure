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


// next button moves record count on by 10 rows and uses testsql.php
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
 
  xmlHttp.open("GET", "testsql.php?fname=" + sdata, true); 
  xmlHttp.send(null);

  document.getElementById("text").value=a;

  var startvalue = a;
  var finishvalue = startvalue + 9;
 
  document.getElementById("startvar").innerHTML=startvalue+" - "+finishvalue;  
  document.getElementById("starthid").style.display = "none";  

}



// previous button moves record count back by 10 rows and uses testsql.php
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

  if(a < 5){a=1};
  if(a > 5){a=a-10};
  if(! a){a=a+1};

  sdata = a;
  
  xmlHttp.open("GET", "testsql.php?fname=" + sdata, true); 
  xmlHttp.send(null);

  document.getElementById("text").value=a;

  var startvalue = a;
  var finishvalue = startvalue + 9;

  document.getElementById("startvar").innerHTML=startvalue+" - "+finishvalue;
  document.getElementById("starthid").style.display = "none";   
}


// search functionality turns search text field red and uses testsql2.php
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



// loads current row count from the text file gloscount.txt within db folder
function getrowcount()
{
  document.getElementById("glostotcount").style.backgroundColor="red";

  var xmlHttp = getXMLHttp();

  totsdata = 1;

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      HandleResponse(xmlHttp.responseText);
    }
  }

  totsdata=1000;
  //totsdata=document.getElementById("glostotcount").value;


  xmlHttp.open("GET", "gloscount.php?fname=" + totsdata, true); 
  xmlHttp.send(null);

}



function HandleResponse(response)
{
  document.getElementById('ResponseDiv').innerHTML = response;
}

