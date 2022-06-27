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

document.querySelectorAll(".accordion").forEach((el)=>{
    el.addEventListener('click',()=>{
        let content = el.nextElementSibling;
        let brands = document.querySelector(".brands");
        let brandsRepair = document.querySelector(".brands-repair");
        let hiddenBrands = document.querySelector(".brands__item:nth-child(7)");
        let hiddenBrandsEight = document.querySelector(".brands__item:nth-child(8)");
        let hiddenBrandsNine = document.querySelector(".brands__item:nth-child(9)");
        let hiddenBrandsTen = document.querySelector(".brands__item:nth-child(10)");
        let hiddenBrandsEleven = document.querySelector(".brands__item:nth-child(11)");
        let hiddentext = document.querySelector(".text-in");
        let pageWidth = window.innerWidth;
        let textOut = document.querySelector(".text-out");
        let priceSection = document.querySelector(".prices");
        if(content.style.maxHeight){
            document.querySelectorAll('.content').forEach((el)=>el.style.maxHeight = null)
            if (pageWidth >=1120){
            brands.style.height = "334px";
            brandsRepair.style.height="208px";
            hiddenBrands.style.display="none";
            hiddenBrands.style.height="0";
            hiddenBrandsEight.style.display="none";
            hiddenBrandsEight.style.height="0";
            hiddenBrandsNine.style.display="none";
            hiddenBrandsNine.style.height="0";
            hiddentext.style.display="none";
            textOut.style.top = "9px";
            textOut.style.left = "30px";
            textOut.style.display = "inline";
            priceSection.style.top="1220px";}
            else{
                brands.style.height = "334px";
                brandsRepair.style.height="208px";
                hiddenBrands.style.display="none";
                hiddenBrands.style.height="0";
                hiddenBrandsEight.style.display="none";
                hiddenBrandsEight.style.height="0";
                hiddenBrandsNine.style.display="none";
                hiddenBrandsNine.style.height="0";
                hiddentext.style.display="none";
                textOut.style.top = "9px";
                textOut.style.left = "30px";
                textOut.style.display = "inline";
                priceSection.style.top="1175px";
            }
        }
        else{
            document.querySelectorAll('.content').forEach((el)=>el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'


            if (pageWidth >=1120){
                brands.style.height = "550px";
                textOut.style.top = "160px";
                textOut.style.left = "-730px"
                brands.style.height = "500px";
                brandsRepair.style.height="310px";
                hiddenBrands.style.display="flex";
                hiddenBrands.style.height="68px";
                hiddenBrandsEight.style.display="flex";
                hiddenBrandsEight.style.height="68px";
                hiddenBrandsNine.style.display="flex";
                hiddenBrandsNine.style.height="68px";
                hiddenBrandsTen.style.height="68px";
                hiddenBrandsEleven.style.height="68px";
                textOut.style.display = "none";
                hiddentext.style.display="inline";
                priceSection.style.top="1362px";
            }
            else{
                brands.style.height = "470px";
                brandsRepair.style.height="310px";
                hiddenBrands.style.display="flex";
                hiddenBrands.style.height="68px";
                hiddenBrandsEight.style.display="flex";
                hiddenBrandsEight.style.height="68px";
                hiddenBrandsNine.style.display="flex";
                hiddenBrandsNine.style.height="68px";
                textOut.style.top = "25px";
                textOut.style.display = "none";
                hiddentext.style.display="inline";
                priceSection.style.top="1312px";
            }

        }
    })
})


