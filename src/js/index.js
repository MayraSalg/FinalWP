import '../scss/style.scss';
import '../js/menu.js';
import '../js/repair.js';
import '../js/repairtest.js';
import '../js/script.js';
import '../js/test.js';


console.log('Works!');
import Swiper, { Pagination } from 'swiper' // импортируем Swiper в наш проект, а также один из его модулей "Pagination"
Swiper.use([Pagination]) // подключаем Pagination к Swiper

window.onload =  () => {  // ожидаем загрузку окна браузера
  if (window.matchMedia('(max-width: 767px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
    const swiper = new Swiper('.swiper', {  // инициализируем новый Swiper
      direction: 'horizontal', // устанавливаем напрвление Swiper
      loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
      spaceBetween: 20, // отступ между слайдами в px
      slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
      pagination: { // подключаем пагинацию
        el: '.swiper-pagination', // контейнер для пагинации
        clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
      },
      init: true
    })
  }

}
