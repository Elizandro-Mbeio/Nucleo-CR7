// let btnmenumobile = document.getElementById('btn-menu')
// let menu = document.getElementById('menu-mobile')


// btnmenu.addEventListener('click', ()=>{
//     menu.classList.add('abrir-menu')
// })



function menuShow(){
      let menuMbile = document.querySelector('.menu-mobile');
      if (menuMbile.classList.contains('open')) {
         menuMbile.classList.remove('open');
      } else {
        menuMbile.classList.add('open');
      }
}

window.addEventListener('resize', () => {

    let menuMbile = document.querySelector('.menu-mobile');

    if(window.innerWidth >= 768){
        menuMbile.classList.remove('open');
    }

});
