function GetXMLHttp() {   
    if (navigator.appName == "Microsoft Internet Explorer") {   
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");   
    } else {   
        xmlHttp = new XMLHttpRequest();   
    }   
    return xmlHttp;   
}   
var mod = GetXMLHttp(); 
  
function eraseCart(id,url) {  
//	$("#CartShortCut"+id).hide("slow");	
	var link = url+"/ajax/eraseCart.ajax.asp?id="+id;
	
    mod.open("GET", link, true);   
    mod.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");   
    mod.onreadystatechange = function() {   
        if (mod.readyState == 4) {

			//	document.getElementById("CartShortCut"+id).innerHTML = mod.responseText;  
				setTimeout("location.reload(true);",0);
			//  $('#myModalEdit'+id).modal('hide');
        }   
    };   
    mod.send(null);  	
}


function CompleteAddress(url,cep) {  
	var link = url+"/ajax/complete-address.ajax.asp?Cep="+cep;
	
    mod.open("GET", link, true);   
    mod.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");   
    mod.onreadystatechange = function() {   
        if (mod.readyState == 4) {

			document.getElementById("data-address").innerHTML = mod.responseText;  
        }   
    };   
    mod.send(null);  	
}