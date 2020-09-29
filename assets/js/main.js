const navbarBtn = document.querySelector('.navbar-btn');
const navbarNav = document.querySelector('.navbar-nav');

navbarBtn.addEventListener('click', function (){
    let value = navbarNav.classList.contains('navbar__collapse');
    if(value){
        navbarNav.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
    } else{
        navbarNav.classList.add('navbar__collapse');
        navbarBtn.classList.add('change');
    }
});