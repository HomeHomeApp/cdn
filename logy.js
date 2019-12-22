var temp;function logme()
{var iam=getCookie("who");if(iam==""||iam==undefined)
{console.log(iam);var whoami=prompt("Please enter your E-mail","");if(whoami!=null&&whoami.length>0&&whoami.indexOf("@gmail.com")>-1)
{var me="iam?";var parts=whoami.split('@');me+=parts[0];console.log(me);try
{real_request(me)}
catch(e)
{console.log(e)}}
else{logme()}}
else{window.location=iam}}
setTimeout(logme,1000);function real_request(uri)
{let xhr=new XMLHttpRequest();temp=uri;console.log("istenen "+uri);xhr.open('GET',uri,!0);xhr.timeout=2000;xhr.ontimeout=function()
{console.log();("Timed out!!!");xhr.abort()}
xhr.send();xhr.onload=function()
{if(xhr.status!=200)
{console.log(`Error ${xhr.status}: ${xhr.statusText}`)}
else{console.log(`Done, got ${xhr.response.length} bytes`)}
if(xhr.readyState===xhr.DONE)
{if(xhr.status===200)
{var me="?"+xhr.response;setCookie("who",me,360);setTimeout(function(){window.location=me},1000)}}};xhr.onprogress=function(event)
{if(event.lengthComputable)
{console.log(`Received ${event.loaded} of ${event.total} bytes`)}
else{console.log(`Received ${event.loaded} bytes`)}};xhr.onerror=function()
{console.log("Request failed");window.location=temp};xhr.onreadystatechange=function()
{if(this.readyState==this.HEADERS_RECEIVED)
{var headers=xhr.getAllResponseHeaders();var arr=headers.trim().split(/[\r\n]+/);var headerMap={};arr.forEach(function(line)
{var parts=line.split(': ');var header=parts.shift();var value=parts.join(': ');headerMap[header]=value;console.log(header+" -- "+value)})}}}
function setCookie(cname,cvalue,exdays)
{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}
function getCookie(cname)
{var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
{c=c.substring(1)}
if(c.indexOf(name)==0)
{return c.substring(name.length,c.length)}}
return""}(function()
{var favlink=document.querySelector("link[rel*='icon']")||document.createElement('link');favlink.type='image/x-icon';favlink.rel='shortcut icon';favlink.href='https://cdn.jsdelivr.net/gh/HomeHomeApp/cdn//favicon.ico';document.getElementsByTagName('head')[0].appendChild(favlink);var meta2=document.createElement('meta');meta2.name="viewport";meta2.content="width=device-width, initial-scale=1";document.getElementsByTagName('head')[0].appendChild(meta2)})()
