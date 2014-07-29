var xmlhttp;
var clickObj=document.getElementById("buttonToShow");
var requestObj;
function RSS(rssUrl){

if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
document.getElementById("jasonText").innerHTML=xmlhttp.responseText;

var s1= xmlhttp.responseText;
//console.log(ty(s1));
var obj = JSON.parse(s1);
//console.log(obj);

var i=0;
console.log(obj);
while(obj != undefined || obj != null){
  var description = obj.responseData[i].description;
  
   alert(description);
  
   console.log(title,link,description);
  displayDeals(title,link,description);
  i++;
}

}
}
xmlhttp.open("GET",rssUrl,true);

xmlhttp.send();

}


function displayDeals (title,link,description) {
var divId = document.getElementById('onFlyDiv');
var imageTitle = title;
var infoLink=link;
var info =description;

divId.innerHTML += templateMaker(imageTitle,infoLink,info);
}

function templateMaker(imgTitle,information,imgUrl) {
  var template = "<div class='deals'><h3 class='dealsTitle'>" + imgTitle + "</h3><p class='info'>" + information + "</p><a class='dealsImage' src=" + imgUrl +"></a></div>";

return template;
}


function calculate() {
   
     var urlRss=document.getElementById("rssUrl").value;
     alert(urlRss);
     var fullUrl="http://googlefeed.appacitive.com/?q="+urlRss;
     RSS(fullUrl);
   

}
clickObj.onclick=calculate;