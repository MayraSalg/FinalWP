
document.querySelectorAll(".accordion-repair").forEach((el)=>{
    el.addEventListener('click',()=>{
        let contentAccordion = el.nextElementSibling;
        let repairTypes = document.querySelector(".repair-types");
        let brandsRepairTypes = document.querySelector(".brands-repair-types.container");
        let hiddenBrands = document.querySelector(".brands__item-repair:nth-child(4)");
        let hiddenBrandsRepFive = document.querySelector(".brands__item-repair:nth-child(5)");
        let hiddenBrandsRepSix = document.querySelector(".brands__item-repair:nth-child(6)");
        let hiddenBrandsRepSeven = document.querySelector(".brands__item-repair:nth-child(7)");
        let hiddenBrandsRepEight = document.querySelector(".brands__item-repair:nth-child(8)");
        let hiddenBrandsRepNine = document.querySelector(".brands__item-repair:nth-child(9)");
        let hiddenBrandsRepTen = document.querySelector(".brands__item-repair:nth-child(10)");
        let hiddentext = document.querySelector(".text-in-repair");
        let pageWidth = window.innerWidth;
        let textOut = document.querySelector(".text-out-repair");
        let priceSection = document.querySelector(".prices");

        if(contentAccordion.style.maxHeight){

            document.querySelectorAll('.content-accordion-repair').forEach((el)=>el.style.maxHeight = null)
            if (window.innerWidth >= 1120){
                console.log("works");
            }

                repairTypes.style.height = "434px";
                priceSection.style.top = "1175px";
                brandsRepairTypes.style.height = "208px";
                hiddenBrands.style.display = "none";
                hiddenBrands.style.height = "0";
                hiddenBrandsRepFive.style.display = "none";
                hiddenBrandsRepFive.style.height = "0";
                hiddenBrandsRepSix.style.display = "none";
                hiddenBrandsRepSix.style.height = "0";
                hiddenBrandsRepSeven.style.display = "none";
                hiddenBrandsRepSeven.style.height = "0";
                hiddenBrandsRepEight.style.display = "none";
                hiddenBrandsRepEight.style.height = "0";
                hiddenBrandsRepNine.style.display = "none";
                hiddenBrandsRepNine.style.height = "0";
                hiddenBrandsRepTen.style.display = "none";
                hiddenBrandsRepTen.style.height = "0";
                hiddentext.style.display = "none";
                textOut.style.top = "15px";
                textOut.style.left = "30px";
                textOut.style.display = "inline";


        }
        else{

            document.querySelectorAll('.content-accordion-repair').forEach((el)=>el.style.maxHeight = null)
            contentAccordion.style.maxHeight = contentAccordion.scrollHeight + 'px'


                repairTypes.style.height = "870px";
                brandsRepairTypes.style.height = "310px";
                priceSection.style.top = "1700px";
                hiddenBrands.style.display = "flex";
                hiddenBrands.style.height = "160px";
                hiddenBrandsRepFive.style.display = "flex";
                hiddenBrandsRepFive.style.height = "160px";
                hiddenBrandsRepSix.style.display = "flex";
                hiddenBrandsRepSix.style.height = "160px";
                hiddenBrandsRepSeven.style.display = "flex";
                hiddenBrandsRepSeven.style.height = "160px";
                hiddenBrandsRepEight.style.display = "flex";
                hiddenBrandsRepEight.style.height = "160px";
                hiddenBrandsRepNine.style.display = "flex";
                hiddenBrandsRepNine.style.height = "160px";
                hiddenBrandsRepTen.style.display = "flex";
                hiddenBrandsRepTen.style.height = "160px";
                textOut.style.top = "25px";
                textOut.style.display = "none";
                hiddentext.style.display = "inline";
                hiddentext.style.left = "-200px";

        }

    })

})