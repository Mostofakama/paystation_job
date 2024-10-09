var menuBtn = document.querySelector('#menuBtn')

var menu = document.querySelector('#menuRes')

menuBtn.addEventListener('click',()=>{
    if(menu.style.display == 'block'){
        
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
})

const header = document.querySelector('#header');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
header.style.position = "fixed",
header.style.top = "0";
} else {
header.style.position = "initial";
}
}
// $('.bxslider').bxSlider({
//     minSlides: 3,
//     maxSlides: 9,
//     slideWidth: 170,
//     slideMargin: 10,
//     auto:true,
    
  
//   speed: 900
//   });
var slider= $('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 9,
    slideWidth: 75,
    slideMargin: 60,
    auto:true,
    speed:1000,
    keyboardEnabled:true,
  });

  $('#slider-next').click(function(){
    slider.goToNextSlide();
    return false;
  });
  $('#slider-prev').click(function(){
    slider.goToPrevSlide();
    return false;
  });
  
  // $('#slider-count').click(function(){
  //   var count = slider.getSlideCount();
  //   alert('Slide count: ' + count);
  //   return false;
  // });


  var tabOne =  document.getElementById('tab-one')
  var tabTow =  document.getElementById('tab-tow')
  var tabThree =  document.getElementById('tab-three')


  var contentOne = document.getElementById('content-one')
  var contentTow = document.getElementById('content-tow')
  var contentThree = document.getElementById('content-three')
  tabOne.addEventListener('click',()=>{
    contentOne.style.display = 'block'
    contentTow.style.display = 'none'
    contentThree.style.display = 'none'
    tabOne.classList.add('is-active');
    tabTow.classList.remove('is-active');
    tabThree.classList.remove('is-active');
  })
  tabTow.addEventListener('click',()=>{
    contentOne.style.display = 'none'
    contentTow.style.display = 'block'
    contentThree.style.display = 'none'
    tabOne.classList.remove('is-active');
    tabTow.classList.add('is-active');
    tabThree.classList.remove('is-active');
  })

  tabThree.addEventListener('click',()=>{
    contentOne.style.display = 'none'
    contentTow.style.display = 'none'
    contentThree.style.display = 'block'
    tabOne.classList.remove('is-active');
    tabTow.classList.remove('is-active');
    tabThree.classList.add('is-active');
  })