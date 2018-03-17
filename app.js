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
	for(var i=0; i<mLen; i++) {
		if(menuList[i] == item)
		{ itemNumber = i; }
		//console.log("menuList: " + menuList[i] + ", " + item);
		//console.log("Equals: " + (menuList[i] == item).toString());
	}
	console.log("ITEM NUMBER: " + itemNumber + ", " + item);
	for(var i=0; i<mLen; i++) {
		calcLeft = topArr[itemNumber][i];
		console.log("Left: " + calcLeft);
		
		if(menuList[i] != item)
		{
			document.getElementById(menuList[i]).style.width = "0%";
			document.getElementById(contentList[i]).style.display = "none";
			document.getElementById(logoList[i]).style.width = "10%";
			document.getElementById(logoList[i]).style.left = calcLeft + "%";
		}
		else
		{
			document.getElementById(item).style.width = "100%";
			document.getElementById(content).style.display = "block";
			document.getElementById(logoList[i]).style.width = "30%";
			document.getElementById(logoList[i]).style.left = "35%";
		}
	}
}

