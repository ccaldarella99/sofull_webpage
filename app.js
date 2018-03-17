var menuList = ["left", "center", "right"];
var contentList = ["l-content", "c-content", "r-content"];

function openMenu(item, content) {
	for(var i=0; i<menuList.length; i++) {
		if(menuList[i] != item)
		{
			document.getElementById(menuList[i]).style.width = "0%";
			document.getElementById(contentList[i]).style.display = "none";
		}
	}
	document.getElementById(item).style.width = "100%";
	document.getElementById(content).style.display = "inline-block";
}

function closeMenu(item, content) {
	document.getElementById(content).style.display = "none";
	document.getElementById('hamburger').style.display = "inline-block";
	document.getElementById(item).style.width = "0%";
}

