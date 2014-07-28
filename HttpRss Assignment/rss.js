var xmlhttp;
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
document.getElementById("mytext").innerHTML=xmlhttp.responseText;

var s1= xmlhttp.responseText;
//console.log(ty(s1));
var obj = JSON.parse(s1);
console.log(obj);

var i=0;
while(obj != undefined){
  var urlimg=obj.deals[i].imageUrl;
  var title = obj.deals[i].title;
  displayHotel(urlimg,title);
  i++;
}

}
}
xmlhttp.open("GET",rssUrl,true);

xmlhttp.send();

}

function displayHotel (urlImage,titleImage) {
var display.getElementById('Hostels');
var imageTitle = titleImage;
var imageUrl = urlImage;
display.innerHTML+=templateMaker(imageTitle,imageUrl);
}

function templateMaker(imgTitle,imgUrl) {
  var templateHtml = "<div class='hotels'><h3 class='hotel-title'>" + imgTitle + "</h3><img class='dealsImage' src=" + imgUrl +" alt=\"couldn't load the image\"></div>";

return templateHtml;
}

function calculate() {
    var e = document.getElementById("rssFeed");
    var val = e.options[e.selectedIndex].text;
    switch (val) {
        case "Mystique":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=vzc5d5hulx2l3uvdw3j0cil2"
            RSS(TestUrl);
            //reqListener(response);
            break;
        case "Hotel":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=vzc5d5hulx2l3uvdw3j0cil2&$filter=Type eq 'hotel'"
             RSS(TestUrl);
             
            break;

        case "Cars":
           var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=vzc5d5hulx2l3uvdw3j0cil2&$filter=Type eq 'car'"
             RSS(TestUrl);
            break;

        case "Activity":
            var TestUrl="http://dev-mystique.tavisca.com/api/deals/all?token=vzc5d5hulx2l3uvdw3j0cil2&$filter=Type eq 'activity'"
             RSS(TestUrl);
            break;


        }

}
