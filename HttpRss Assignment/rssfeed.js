var xmlhttp;
var clickObj=document.getElementById("buttonToShow");

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
console.log(obj);

var i=0;
while(obj != undefined || obj != null){
   var title = obj.deals[i].title;
   var description = obj.deals[i].description;
   var urlimg=obj.deals[i].imageUrl;
 
  displayDeals(title,description,urlimg);
  i++;
}

}
}
xmlhttp.open("GET",rssUrl,true);

xmlhttp.send();

}

function displayDeals (titleImage,description,urlImage) {
var divId = document.getElementById('Hostels');
var imageTitle = titleImage;
var info =description;
var imageUrl = urlImage;
divId.innerHTML += templateMaker(imageTitle,info,imageUrl);
}

function templateMaker(imgTitle,information,imgUrl) {
  var template = "<div class='deals'><h3 class='dealsTitle'>" + imgTitle + "</h3><p class='info'>" + information + "</p><img class='dealsImage' src=" + imgUrl +" alt=\"Image not Loaded\"></div>";

return template;
}


function calculate() {
    var e = document.getElementById("rssFeed");
    var val = e.options[e.selectedIndex].text;
    switch (val) {
        case "Mystique":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=glbe3go0guvqy0eezblgboed"
            RSS(TestUrl);
            break;
        case "Hotel":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=glbe3go0guvqy0eezblgboed&$filter=Type eq 'hotel'"
             RSS(TestUrl);
             
            break;

        case "Cars":
           var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=glbe3go0guvqy0eezblgboed&$filter=Type eq 'car'"
             RSS(TestUrl);
            break;

        case "Activity":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=glbe3go0guvqy0eezblgboed&$filter=Type eq 'activity'"
             RSS(TestUrl);
            break;


        }

}
clickObj.onclick=calculate;