window.onload = function() {
	var menu =document.querySelector('.main-nav__list');
	var menuStyle = getComputedStyle(menu);
	var button = document.querySelector('.main-nav__hamburger');
	
	button.onclick = function() {
		if(menuStyle.display == 'none') {
			menu.classList.add('main-nav__list--open');
		} else {
			menu.classList.remove('main-nav__list--open');
			menu.classList.add('main-nav__list');
		}
	}
}