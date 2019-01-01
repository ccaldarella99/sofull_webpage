var menuList = ["left", "left2", "center", "right"];
var contentList = ["l-content", "l2-content", "c-content", "r-content"];
var logoList = ["l-logo", "l2-logo", "c-logo", "r-logo"];

var topArr = [[35, 58, 66.6, 75],
			  [10, 35, 66.6, 75],
			  [10, 18, 35, 75],
			  [10, 18, 26, 35]];

function openMenu(item, content) {
	var calcLeft = 0;
	var itemNumber = 0;
	var mLen = menuList.length;
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	//alert("Width: " + width + "\nHeight: " + height);
	var subIcon = 10;
	var mainIcon = 30;
	
	if(width < 880)
	{
		if(width > 700)
		{
			//subIcon = 20;
			//mainIcon = 40;
		} else {
			//subIcon = 25;
			//mainIcon = 45;
		}
	} else {
		if(height < 500)
		{
			//Move footer further down
		} else if(height > 670) {
		}
	}
	
	for(var i=0; i<mLen; i++) {
		if(menuList[i] == item)
		{ itemNumber = i; }
	}

	for(var i=0; i<mLen; i++) {
		calcLeft = topArr[itemNumber][i];
		if(width >= 2050) {
			calcLeft += (width / 1000) * 2;
		} else if(width >= 1880) {
			calcLeft += (width / 1000) + 1;
		} else if(width >= 1620) {
			calcLeft += (width / 1000);
		}
		
		document.getElementById(logoList[i]).style.left = calcLeft + "%";
		if(menuList[i] != item)
		{
			document.getElementById(menuList[i]).style.width = "0%";
			document.getElementById(contentList[i]).style.display = "none";
			document.getElementById(logoList[i]).style.width = subIcon + "%";
		}
		else
		{
			document.getElementById(item).style.width = "100%";
			document.getElementById(content).style.display = "block";
			document.getElementById(logoList[i]).style.width = mainIcon + "%";
		}
	}
}


function qs(search_for) {
	var query = window.location.search.substring(1);
	var parms = query.split('&');
	
	for(var i = 0; i < parms.length; i++)
	{
		var pos = parms[i].indexOf('=');
		if(pos > 0 && search_for == parms[i].substring(0, pos) ) {
			return parms[i].substring(pos+1);
		}
	}
	return "";
}

function loadError() {
	var errorCode = qs("error");
	if (errorCode != "")
	{ document.getElementById("show-error-code").innerHTML = "(" + qs("error") + " Error)"; }
}



