document.body.style.display="none";document.body.style.border="none";var ver="";function getVersion(myObj)
{console.log(JSON.stringify(myObj));ver=myObj.version;doit();document.getElementById("latest").innerHTML="Latest &nbsp&nbspFirmware Version : "+ver}
var callback='#call'+new Date().getTime();var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn/version.php?callback=getVersion"+callback;console.log(s.src);document.body.appendChild(s);function accord()
{var acc=document.getElementsByClassName('acc');var i;for(i=0;i<acc.length;i++)
{acc[i].addEventListener('click',function()
{this.classList.toggle('active');var panel=this.nextElementSibling;if(panel.style.maxHeight)
{panel.style.display="none";panel.style.maxHeight=null}
else{document.body.style.border="none";panel.style.display="inline-block";panel.style.maxHeight=panel.scrollHeight+'px'}})}}
function doit()
{document.title="HomeHome.App HTTP Server 1.0";var div=document.querySelector('#h');var make='';make+="<button class=back  onclick=\"location.href='/"+getCookie("who")+"'\">&#8617;</button>";make+='<span id=aa>Apple HomeKit  :';if(setler[0]==1)
{make+=' Enabled'}
else if(setler[0]==0)
{make+=' <span style="color:red;">Disabled</span>'}
make+='<br><br>Google Home  :';if(setler[1]==1)
{make+=' Enabled'}
else if(setler[1]==0)
{make+=' <span style="color:red;">Disabled</span>'}
make+='<br><br>Free memory : '+setler[4]+" bytes";make+='<br><br>Device Type: '+setler[2];var t=parseInt(setler[5]);var d=Math.floor(t/86400),h=('0'+Math.floor(t/3600)%24).slice(-2),m=('0'+Math.floor(t/60)%60).slice(-2),s=('0'+t%60).slice(-2);console.log((d>0?d+'d ':'')+(h>0?h+':':'')+(m>0?m+':':'')+(t>60?s:s+'s'));var sure=(d>0?d+'d ':'')+(h>0?h+'hr ':'hr ')+(m>0?m+'min ':'min ')+(t>60?s+'sec':s+'ms');make+='<br><br>Uptime : '+sure;make+='<br><br>Current Firmware Version : '+setler[6];make+='<br><br><span id=latest>Latest &nbspFirmware Version : ';console.log("ver ok ? ="+ver);var webversion=ver;make+=webversion;make+='</span><br><br></span>';if(webversion!=setler[6]&&webversion!="")
{make+="<br><br><p id=a>Update Available<br><button class=rst onclick=\location.href='/ota"+getCookie("who")+"' \ type='button'>Update Device</button><br><br>";make+="If there is an important update you will see in Announcements.<br><br>If your device is working fine DO NOT update!<br><br>If you have internet connection you can do update!<br><br>If you do not know what you are doing skip this. Be warned your device may unusable!<br></p>"}
make+="<br><br>";var myname=setler[3].split('|');if(myname[0].length>0)
{myname[0]=decodeURIComponent(myname[0]);make+="<hr><br><span style='margin-right:10%;'>1.Device Name</span><br><input type='text' id='n1' maxlength=16 value='"+myname[0]+"'/><button onclick=saven1()>Save</button><br><br>"}
if(myname[1].length>0)
{myname[1]=decodeURIComponent(myname[1]);make+="<hr><br><span style='margin-right:10%;'>2.Device Name</span><br><input type='text' id='n2' maxlength=16 value='"+myname[1]+"'/><button onclick=saven2()>Save</button><br><br>"}
if(myname[2].length>0)
{myname[3]=decodeURIComponent(myname[3]);make+="<hr><br><span style='margin-right:10%;'>3.Device Name</span><br><input type='text' id='n3' maxlength=16 value='"+myname[2]+"'/><button onclick=saven3()>Save</button><br><br>"}
if(myname[3].length>0)
{myname[4]=decodeURIComponent(myname[4]);make+="<hr><br><span style='margin-right:10%;'>4.Device Name</span><br><input type='text' id='n4' maxlength=16 value='"+myname[3]+"'/><button onclick=saven4()>Save</button><br><br>"}
make+="<hr><br><span style='margin-right:10%;'>Page Redirect</span><br><input type='number' id='redir' min=1 max=10 placeholder='Page redirect minute'/><button onclick=setredir()>OK</button><br>";make+="<span>Page will be redirected after 1-10 minutes.<br>Check quick help for info.[Default 1]</span><br><br><hr>"
make+="<br><span>Turn back</span><br><br><div class='onoffswitch'> <input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='turn' onclick='turnback();'> <label class='onoffswitch-label' for='turn'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label></div> <span>Switch to last position on power failure</span><br><br><hr>"
make+="<br><span>Local Mode</span><br><br><div class='onoffswitch'> <input type='checkbox' name='local' class='onoffswitch-checkbox' id='localmode' onclick='local();'> <label class='onoffswitch-label' for='localmode'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label></div> <span>Set device work offline (without internet) If enabled you can not use Google Home and Web interface.<br><br>You must first register the device (with internet connection) to use this feature.<br><br> You can use HomeKit (if paired) and local interface to control the device. Note that device must always join to a router.</span><br><br><hr>"
make+="<br><span>Skip HomeKit Pair Standby Time</span><br><br><div class='onoffswitch'> <input type='checkbox' name='onoffswitchhk' class='onoffswitch-checkbox' id='skipme' onclick='skipper();'> <label class='onoffswitch-label' for='skipme'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label></div> <span>If you are not using HomeKit you can skip HomeKit pair setup when your device restart.</span><br><br><hr>"
if(setler[2].indexOf("Custom")>-1&&(parseInt(setler[9])>0))
{make+="<br><span>Reversed Relay (Default On)</span>"
for(var i=1;i<(parseInt(setler[9])+1);i++){make+="<br><br> "+i+".Relay <div class='onoffswitch'> <input type='checkbox' name='reverse"+i+"' class='onoffswitch-checkbox' id='reverse"+i+"' onclick='rev"+i+"();'> <label class='onoffswitch-label' for='reverse"+i+"'> <span class='onoffswitch-inner'></span> <span class='onoffswitch-switch'></span> </label></div>"}
make+="<span>Your custom device relay pin should be reverse. You can change it from here. </span><br><br><hr>"}
make+="<br><br><button class=ref onclick=\location.href='/restart"+getCookie("who")+"' \ type='button'>Restart Device</button><br><br><br><br><br><hr>";make+="<br><br><button onclick='resetme();' class='r'>Reset &nbspDevice&nbsp&nbsp</button><br><br><span>[Reset info:press 10 sec. to device button]</span><br><br><hr><br><br><br><br><br>";make+="<div onclick='animeOnOff()' class='lds-circle'><div>&#9775;</div></div></div><br><br>";make+="<button class='acc'>Quick Help</button><div class='panel'><h3><u>HTTP Server</u></h3><p> HTTP Server is for settings, firmware update and 3th party apps (check server commands below).</p><p> You can control all your devices in <a target='_blank' href='https://smart.homehome.app'>smart.homehome.app</a></p><hr><h3><u>HTTP Server Security</u></h3><p> We are asking your Email in a new browser to verify that you are the user.</p><p> You can use DNS provider like duckdns.org to reach your device outside of your home. If you will use a DNS we recommend you to have a <b>long word</b> in your DNS account like: <br><b> myPrivateDnsIsHardToFind.duckdns.org</b> so other unwanted users-BOTS will not try to see your device.</p><pre>Some BOT Request Examples <br>/1/index.php, /download/index.php, /phpMyAdmin_111/index.php, /phpmadmin/index.php, /321/index.php, /123131/index.php, /phpMyAdminn/index.php, /phpMyAdminhf/index.php /sbb/index.php, /WWW/phpMyAdmin/index.php</pre><hr><h3><u>Stopping HTTP Server</u></h3><p>If you don't like to run HTTP server you can stop it:</p><p>You can enable it in 2 minutes after the device restarts, just enter your IP adress to a browser or server will automatically stop</p> <button type='button' id='stopserver' onclick=location.href='/delete' + getCookie('who') + '' >Stop Server</button><p> You can control all your devices in <a target='_blank' href='https://smart.homehome.app'>smart.homehome.app</a> without local HTTP Server</p><hr><h3><u>HomeKit Pairing</u></h3><p>You can pair your device in 1 minute when your device restarts. You can also skip HomeKit pair setup standby time in settings page, if you will not use HomeKit. <br> </p><hr><h3><u>Remote Control without iPad Hub</u></h3><p>You can control your HomeKit device in <a target='_blank' href='https://smart.homehome.app'>smart.homehome.app</a> <br> </p><hr><h3><u>HomeKit Without Internet</u></h3><p>You can use HomeKit without internet if you are in the same local network. If you want to control HomeKit from outside of your home you must have internet connection and a iPad or an *Apple TV (*some versions doesn't support because of language or old versions) iPad will act like a hub in your home so you communicate from iPhone to iPad.<br>You can control your HomeKit device in <a target='_blank' href='https://smart.homehome.app'>smart.homehome.app</a> without iPad or Apple Tv</p><hr><h3><u>Known Issue:<br>HTTP Server Browser Stuck</u></h3><p>Browsers can stuck if you have 5 clients. For example; you opened this server interface from mobile and others from chrome, safari, internet explorer... If you surf from home page to settings page from all browsers randomly it will stuck untill you make a new action like changing theme. You will see stucked browser will load the page. This problem is not related with ESP, browsers don't close the connection even ESP sends close connection header.</p><p>We recommend you to close the tab after you finish. More than 1 browser login at the same time can make your browser stuck.</p><p> You can control all your devices in <a target='_blank' href='https://smart.homehome.app'>smart.homehome.app</a></p><hr><h3><u>HTTP Server Redirect</u></h3><p>If you are using HTTP server with more than 1 browser, you can redirect the page after inactivity (1-10 minutes) so browser will not stuck.</p><hr><h3><u>Google Home<br>Internet Connection</u></h3><p>Google Home needs internet connection. </p><p>We are listening Google Home for any action continuously. If Google servers are unreacheable for any reason, HomeHome.App will try to re-connect 10 times in 2 minutes. If there is still problem with connection HomeHome.App will restart automatically and make a connection to Google server.</p><hr><h3><u>HTTP Server<br>Internet Connection</u></h3><p>HTTP server also needs internet connection for javascript and css files.</p><hr><h3><u>HTTP Server Commands</u></h3><p> You can control HomeHome.App with 3th party apps.</p><p> Your email adress must be gmail so don't add <b>@gmail.com </b></p><pre> Turn on 1. relay: 'https://ip.address/1/on?myEmail' </pre><pre> Turn off 1. relay: 'https://ip.address/1/off?myEmail' </pre><p> All state replies are in array for example: [0,1,2,2] <br> <b>0 --> off , 1 --> on , 2 --> none</b> <br><pre> Get all relay states: 'https://ip.address/all?myEmail' </pre><p>1-2-4 relay devices are using the same firmware so we push all together. You can easly understand this is a 2 relay device. First relay is off, second relay is on in this example.<p><hr><h3><u>Manage IP</u></h3><p>You can have a lot of devices. If you are using HomeKit you can find its IP easliy: hold your finger on a switch and touch details.</p><p>When you want a static IP for every device, you can assign it with your router. Last 6 characters of mac address in your DHCP list is the same with your HomeHome.App device ID</p><hr><h3><u>Reset Device</u></h3><p>You can reset your device by pressing 10 seconds to the button of your device. If your device don't have a special button like Sonoff 4ch or only have a single button like Sonoff basic, first button will reset the device to factory settings. Be careful: if you don't have a special reset button use 'Momentry' type switch! </p><p>You can also reset device by <br>HTTP Server-> Setting page-> Reset</p></div> <br><br>";make+="<br><br><span class='info'>© Copyright - www.homehome.app - All rights reserved <br><br>";make+="<a class='btm' href='https://homehome.app' target='_blank'>homehome.app</a><br></span><br><br>";div.innerHTML=make;anime();setTimeout(function()
{document.body.style.display="block"},500);accord();redir();turnme();skip();runreverse();localenabled();console.log("setler: "+setler)}
function resetme()
{var r=confirm("All settings will be removed. Continue?");if(r==!0){window.location="/reset"+getCookie("who")}}
function saven1()
{var namer=document.getElementById("n1").value;real_request("/mode/n1/"+namer)}
function saven2()
{var namer=document.getElementById("n2").value;real_request("/mode/n2/"+namer)}
function saven3()
{var namer=document.getElementById("n3").value;real_request("/mode/n3/"+namer)}
function saven4()
{var namer=document.getElementById("n4").value;real_request("/mode/n4/"+namer)}
function runreverse()
{var kacrole=parseInt(setler[9]);if(kacrole>0)
{if(kacrole==1)
{if(setler[10]=="0")
{document.getElementById("reverse1").checked=!1}
else{document.getElementById("reverse1").checked=!0}}
if(kacrole==2)
{if(setler[10]=="0")
{document.getElementById("reverse1").checked=!1}
else{document.getElementById("reverse1").checked=!0}
if(setler[11]=="0")
{document.getElementById("reverse2").checked=!1}
else{document.getElementById("reverse2").checked=!0}}
if(kacrole==4)
{if(setler[10]=="0")
{document.getElementById("reverse1").checked=!1}
else{document.getElementById("reverse1").checked=!0}
if(setler[11]=="0")
{document.getElementById("reverse2").checked=!1}
else{document.getElementById("reverse2").checked=!0}
if(setler[12]=="0")
{document.getElementById("reverse3").checked=!1}
else{document.getElementById("reverse3").checked=!0}
if(setler[13]=="0")
{document.getElementById("reverse4").checked=!1}
else{document.getElementById("reverse4").checked=!0}}}}
function local()
{var r=confirm("Restart required for local mode changes. Continue?");if(r==!0){if(document.getElementById("localmode").checked)
{real_request("/mode/ghoff")}
else{real_request("/mode/ghon")}
setTimeout(function()
{window.location="/restart"+getCookie("who")},1000)}}
function rev1()
{if(document.getElementById("reverse1").checked)
{real_request("/mode/rev1/1")}
else{real_request("/mode/rev1/0")}}
function rev2()
{if(document.getElementById("reverse2").checked)
{real_request("/mode/rev2/1")}
else{real_request("/mode/rev2/0")}}
function rev3()
{if(document.getElementById("reverse3").checked)
{real_request("/mode/rev3/1")}
else{real_request("/mode/rev3/0")}}
function rev4()
{if(document.getElementById("reverse4").checked)
{real_request("/mode/rev4/1")}
else{real_request("/mode/rev4/0")}}
function skip()
{if(setler[8]=="0")
{document.getElementById("skipme").checked=!1}
else{document.getElementById("skipme").checked=!0}}
function localenabled()
{if(setler[1]=="1")
{document.getElementById("localmode").checked=!1}
else{document.getElementById("localmode").checked=!0}}
function skipper()
{if(document.getElementById("skipme").checked)
{real_request("/mode/skiptrue")}
else{real_request("/mode/skipfalse")}}
function turnme()
{if(setler[7]=="0")
{document.getElementById("turn").checked=!1}
else{document.getElementById("turn").checked=!0}}
function turnback()
{if(document.getElementById("turn").checked)
{real_request("/turnbackon")}
else{real_request("/turnbackoff")}}
function real_request(uri)
{uri=uri+getCookie("who");let xhr=new XMLHttpRequest();console.log("istenen "+uri);xhr.open('GET',uri);xhr.timeout=1000;xhr.ontimeout=function()
{console.log();("Timed out!!!");xhr.abort()}
xhr.send();xhr.onload=function()
{if(xhr.status!=200)
{console.log(`Error ${xhr.status}: ${xhr.statusText}`)}
else{console.log(`Done, got ${xhr.response.length} bytes`)}
if(xhr.readyState===xhr.DONE)
{if(xhr.status===200)
{var yaz=xhr.response;console.log("xhr.response "+yaz)}}};xhr.onprogress=function(event)
{if(event.lengthComputable)
{console.log(`Received ${event.loaded} of ${event.total} bytes`)}
else{console.log(`Received ${event.loaded} bytes`)}};xhr.onerror=function()
{console.log("Request failed")};xhr.onreadystatechange=function()
{if(this.readyState==this.HEADERS_RECEIVED)
{var headers=xhr.getAllResponseHeaders();var arr=headers.trim().split(/[\r\n]+/);var headerMap={};arr.forEach(function(line)
{var parts=line.split(': ');var header=parts.shift();var value=parts.join(': ');headerMap[header]=value;console.log(header+" -- "+value)})}}}
var timeoutInMiliseconds=10*60000;var timeoutId;function setredir()
{setCookie("redir",document.getElementById("redir").value,"360");redir()}
function redir()
{var redir=parseInt(getCookie("redir"));if(redir>0)
{document.getElementById("redir").value=redir;timeoutInMiliseconds=redir*60000}
else{setCookie("redir","1","360");console.log("redir set")}}
function resetTimer()
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
setupTimers();(function()
{var favlink=document.querySelector("link[rel*='icon']")||document.createElement('link');favlink.type='image/x-icon';favlink.rel='shortcut icon';favlink.href='https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn/favicon.ico';document.getElementsByTagName('head')[0].appendChild(favlink);var meta2=document.createElement('meta');meta2.name="viewport";meta2.content="width=device-width, initial-scale=1";document.getElementsByTagName('head')[0].appendChild(meta2)})();(function()
{var nocache='?v='+new Date().getTime();var link=document.querySelector("link[rel*='stylesheet']")||document.createElement('link');link.type='text/css';link.rel='stylesheet';link.href='https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn/style.css'+nocache;document.getElementsByTagName('head')[0].appendChild(link)})();function anime()
{var anime=getCookie("anime");anime="no";if(anime=="yes")
{}
else if(anime=="no")
{document.getElementById("iso").classList.remove("blur");document.getElementById("aa").style.backgroundColor="transparent";document.body.style.backgroundImage="linear-gradient(to right top, #d5d4e5, #cacbe5, #bdc2e5, #afbae6, #9fb2e6, #99b5e8, #92b7ea, #8cbaeb, #96c7ed, #a5d3ee, #b8def0, #cce9f2) !important;";document.body.style.border="none"}}
function animeOnOff()
{var anime=getCookie("anime");if(anime=="yes")
{setCookie("anime","no","360")}
else{setCookie("anime","yes","360")}
window.location.reload()}
function setCookie(cname,cvalue,exdays)
{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}
function getCookie(cname)
{var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
{c=c.substring(1)}
if(c.indexOf(name)==0)
{return c.substring(name.length,c.length)}}
return""}
