// Script for Search Panel

if( document.querySelector('.search-container') != null){

	function openCloseSearchPanel(){
		console.log()
		document.body.classList.toggle('disable-body');
		document.querySelector('.opacize-body').classList.toggle('on');
		document.querySelector('.search-container').classList.toggle('on');
	}

	function openCloseMobileNav(){
		document.body.classList.toggle('disable-body');
		document.querySelector('.opacize-body').classList.toggle('on');
		document.querySelector('.nav-mobile').classList.toggle('on');
	}

	document.querySelector('#searchIcon').addEventListener('click', openCloseSearchPanel);
	document.querySelector('#searchIconMobile').addEventListener('click', openCloseSearchPanel);
	document.querySelector('#closeSearch').addEventListener('click', openCloseSearchPanel);

	document.querySelector('#hamburger').addEventListener('click', openCloseMobileNav);
	document.querySelector('#closeMobileNav').addEventListener('click', openCloseMobileNav);

	document.querySelector('#filtersArrow').addEventListener('click', function(){
		document.querySelector('.filters-box').classList.toggle('show');
		document.querySelector('#filtersArrow img').classList.toggle('rotate-arrow');
	});

	if(window.innerWidth < 480){
		document.querySelector('#searchBar').setAttribute('placeholder', 'Search');
	}

}

