console.log(poz);document.body.style.display="none";function ackapa()
{var over=document.getElementById("overlay");over.classList.add("show");setTimeout(function()
{over.classList.remove("show")},2000)}
function animeOnOff()
{var anime=getCookie("anime");if(anime=="yes")
{setCookie("anime","no","360")}
else{setCookie("anime","yes","360")}
window.location.reload()}
function anime()
{var anime=getCookie("anime");if(anime=="yes")
{}
else if(anime=="no")
{document.getElementById("iso").classList.remove("blur");document.getElementById("aaa").style.backgroundColor="transparent";document.body.style.backgroundImage="linear-gradient(to right top, #d5d4e5, #cacbe5, #bdc2e5, #afbae6, #9fb2e6, #99b5e8, #92b7ea, #8cbaeb, #96c7ed, #a5d3ee, #b8def0, #cce9f2) !important;";document.body.style.border="none"}
else{setCookie("anime","yes","360")}}
function logout()
{if(confirm("Logout?"))
{document.cookie="who=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";window.location="/"}}
function wait(ms)
{var d=new Date();var d2=null;do{d2=new Date()}
while(d2-d<ms);}
function real_request(uri)
{ackapa();uri=uri+getCookie("who");let xhr=new XMLHttpRequest();console.log("istenen "+uri);xhr.open('GET',uri);xhr.timeout=1000;xhr.ontimeout=function()
{console.log();("Timed out!!!");xhr.abort()}
xhr.send();xhr.onload=function()
{if(xhr.status!=200)
{console.log(`Error ${xhr.status}: ${xhr.statusText}`)}
else{console.log(`Done, got ${xhr.response.length} bytes`)}
if(xhr.readyState===xhr.DONE)
{if(xhr.status===200)
{console.log(xhr.response);try
{var poz=JSON.parse(xhr.response);console.log(poz);var make='';for(var i=1;i<5;i++)
{if(i==1&&poz[0]==11)
{shutter=!0}
if(shutter&&i==2)
{}
if(i==2&&poz[i-1]>10&&shutter==!1)
{make+='<strong>';termo=!0;if(poz[i-1]==100)
{make+='Current mode: <span style="color:gray">Off</span> , '}
else if(poz[i-1]==101)
{make+='Current mode: <span style="color:red">Heat</span> , '}
if(poz[i-1]==102)
{make+='Current mode: <span style="blue:red">Cool</span> , '}}
else if(i==3&&termo)
{console.log("3");make+=' Temp: '+poz[i-1]/10+' °C , '}
else if(i==4&&termo)
{console.log("4");make+=' Hum : '+poz[i-1]/10+'% </strong><hr><hr>'}
else if(poz[i-1]!=2&&poz[i-1]<10)
{if(shutter==!1){make+='<button onclick=real_request(&quot/'+i+'/on&quot)>Relay '+i+' On</button>'+(poz[i-1]==0?' <b class=\"q\"></b>':' <b class=\"qq\"></b>')+' <button class=r onclick=real_request(&quot/'+i+'/off&quot)>Relay '+i+' Off</button><hr><hr>'}}}
document.querySelector('#makeall').innerHTML=make}
catch(e)
{}}}};xhr.onprogress=function(event)
{if(event.lengthComputable)
{console.log(`Received ${event.loaded} of ${event.total} bytes`)}
else{console.log(`Received ${event.loaded} bytes`)}};xhr.onerror=function()
{console.log("Request failed")};xhr.onreadystatechange=function()
{if(this.readyState==this.HEADERS_RECEIVED)
{var headers=xhr.getAllResponseHeaders();var arr=headers.trim().split(/[\r\n]+/);var headerMap={};arr.forEach(function(line)
{var parts=line.split(': ');var header=parts.shift();var value=parts.join(': ');headerMap[header]=value;console.log(header+" -- "+value)})}}}
var termo=!1;var shutter=!1;var shutterpoz=0;var shuttersec=0;function doit()
{document.title="HomeHome.App HTTP Server 1.0";document.getElementById("h").innerHTML="<br><button class='head' onclick=real_request(\"/all\")>HomeHome.App HTTP Server 1.0</button><br>";var div=document.querySelector('#b');var make='<div id=makeall>';for(var i=1;i<5;i++)
{if(i==1&&poz[0]==11)
{shutter=!0}
if(shutter&&i==2)
{shutterpoz=parseInt(poz[i-1])}
if(shutter&&i==3)
{shuttersec=parseInt(poz[i-1])}
if(i==2&&poz[i-1]>10&&shutter==!1)
{make+='<strong>';termo=!0;if(poz[i-1]==100)
{make+='Current mode: <span style="color:gray">Off</span> , '}
else if(poz[i-1]==101)
{make+='Current mode: <span style="color:red">Heat</span> , '}
if(poz[i-1]==102)
{make+='Current mode: <span style="blue:red">Cool</span> , '}}
else if(i==3&&termo)
{make+=' Temp: '+poz[i-1]/10+' °C , '}
else if(i==4&&termo)
{make+=' Hum : '+poz[i-1]/10+'% </strong><hr><hr>'}
else if(poz[i-1]!=2&&poz[i-1]<10)
{if(shutter==!1){make+='<button onclick=real_request(&quot/'+i+'/on&quot)>Relay '+i+' On</button>'+(poz[i-1]==0?' <b class=\"q\"></b>':' <b class=\"qq\"></b>')+' <button class=r onclick=real_request(&quot/'+i+'/off&quot)>Relay '+i+' Off</button><hr><hr>'}}}
if(termo)
{make+='</div><span>Set to : <span id="setto"></span></span><br><br><div class="slidecontainer">'+'<input type="range" min="10" max="30" value="21.5" step="0.5" class="slider" id="termo">'+'</div>';make+=`
		<style>.slidecontainer{width:70%}.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:none;opacity:.7;-webkit-transition:.2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}.offmode{border-color:black;background-color:rgb(102,153,255,.5);color:white}.heatmode{border-color:orange;background-color:rgb(102,153,255,.5);color:white}.coolmode{border-color:blue;background-color:rgb(102,153,255,.5);color:white}</style>
				`;make+='<br> <span> Set mode to </span><br><br>';make+='<button onclick="offmode();" class="offmode">&nbspOff&nbsp</button>&nbsp&nbsp&nbsp'+'<button onclick="heatmode();" class="heatmode">Heat</button>&nbsp&nbsp&nbsp'+'<button onclick="coolmode();" class="coolmode">Cool</button><br><br><hr><hr>'}
if(shutter)
{make+='</div><span>Set Shutter to : <span id="settoshutter"></span></span><br><br><div class="slidecontainer">'+'<input type="range" min="0" max="100" value="'+shutterpoz+'" step="1" class="slider" id="shutter">'+'</div>';make+=`
	<style>.slidecontainer{width:70%}.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:none;opacity:.7;-webkit-transition:.2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}.heatmode{border-color:orange;background-color:rgb(102,153,255,.5);color:white}</style>
				`;make+='<br>';make+='<button onclick="setshutter();" class="heatmode">&nbspSet&nbsp</button>&nbsp&nbsp&nbsp'+'<br><br><br><br><br><br>';make+="<span>Set Fully Open-Close in seconds</span><br><input type='number' id='shuttertime' min=1 max=100 placeholder='Seconds'/><button onclick=setshuttertime()>OK</button><br><hr><hr>"}
make+="</div><center><br><br><br><button onclick=\"location.href='/setting"+getCookie("who")+"'\" class=rst>Settings</button><br></center>";make+="<center><br><br><button onclick='logout()' class='r logout'><span class=quit style='margin-left:-10%; font-size:120%;'>&#8855;</span>Logout</button><br></center>";make+="<div onclick='animeOnOff()' class='lds-circle'><div>&#9775;</div></div>";make+="<p id='a'><b>Announcements</b><br>We will update here with news as needed.</p><br><br>";make+="<input style='display:none;' type=checkbox id=myCheck>";make+="<span class='info'>© Copyright - www.homehome.app - All rights reserved <br><br>";make+="<a class='btm' href='https://homehome.app' target='_blank'>homehome.app</a><br></span><div id='overlay'><div class='loader'><div class='inner one'></div><div class='inner two'></div><div class='inner three'></div></div></div></div>";div.innerHTML=make;var demomu=document.getElementById("de").innerHTML;console.log(demomu);if(demomu=="demoend")
{document.getElementById("de").innerHTML='<p id="aa">This is only a DEMO, you can switch 20 times.Please register with your device ID <a class="btm" href="https://HomeHome.app">https://HomeHome.app</a></p>'}
anime();setTimeout(function()
{document.body.style.display="block";try{document.getElementById("shuttertime").value=shuttersec}catch(e){}},500);redir()}
doit();document.onreadystatechange=function()
{if(document.readyState==='complete')
{}}
var istenen=21.5;try
{var slider=document.getElementById("termo");var output=document.getElementById("setto");output.innerHTML="21.5";slider.oninput=function()
{output.innerHTML=this.value;istenen=this.value}}
catch(e)
{}
try
{var slidershutter=document.getElementById("shutter");var outputshutter=document.getElementById("settoshutter");outputshutter.innerHTML=shutterpoz;slidershutter.oninput=function()
{outputshutter.innerHTML=this.value;shutterpoz=this.value}}
catch(e)
{}
function setshutter()
{console.log("mode/shutter/"+shutterpoz);real_request("mode/shutter/"+shutterpoz)}
function setshuttertime()
{var shuttime=document.getElementById("shuttertime").value;console.log("mode/shuttertime/"+shuttime);real_request("mode/shuttertime/"+shuttime)}
function offmode()
{console.log("mode/off/"+istenen);real_request("mode/off/"+istenen)}
function heatmode()
{console.log("mode/heat/"+istenen);real_request("mode/heat/"+istenen)}
function coolmode()
{console.log("mode/cool/"+istenen);real_request("mode/cool/"+istenen)}
function redir()
{var redir=parseInt(getCookie("redir"));if(redir>0)
{timeoutInMiliseconds=redir*60000}
else{setCookie("redir","1","360");console.log("redir set")}}
var timeoutInMiliseconds=10*60000;var timeoutId;function resetTimer()
{window.clearTimeout(timeoutId)
startTimer()}
function startTimer()
{var redir=parseInt(getCookie("redir"));if(redir>0)
{timeoutInMiliseconds=redir*60000}
timeoutId=window.setTimeout(doInactive,timeoutInMiliseconds)}
function doInactive()
{window.location="https://homehome.app"}
function setupTimers()
{document.addEventListener("mousemove",resetTimer,!1);document.addEventListener("mousedown",resetTimer,!1);document.addEventListener("keypress",resetTimer,!1);document.addEventListener("touchmove",resetTimer,!1);startTimer()}
setupTimers();function setCookie(cname,cvalue,exdays)
{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}
function getCookie(cname)
{var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
{c=c.substring(1)}
if(c.indexOf(name)==0)
{return c.substring(name.length,c.length)}}
return""}(function()
{var favlink=document.querySelector("link[rel*='icon']")||document.createElement('link');favlink.type='image/x-icon';favlink.rel='shortcut icon';favlink.href='https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn/favicon.ico';document.getElementsByTagName('head')[0].appendChild(favlink);var meta2=document.createElement('meta');meta2.name="viewport";meta2.content="width=device-width, initial-scale=1";document.getElementsByTagName('head')[0].appendChild(meta2)})();(function()
{var nocache='?v='+new Date().getTime();var link=document.querySelector("link[rel*='stylesheet']")||document.createElement('link');link.type='text/css';link.rel='stylesheet';link.href='https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn/style.css'+nocache;document.getElementsByTagName('head')[0].appendChild(link)})()
