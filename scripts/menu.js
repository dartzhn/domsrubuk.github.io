function myFunction() {
	var x = document.getElementById("myTopnav")
	if (x.className === 'menu__topnav') {
		x.className += ' menu__responsive'
	} else {
		x.className = 'menu__topnav'
	}
}