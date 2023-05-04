// =============================== Cursor tracker ====================================
const cursor = document.querySelector('.cursorDiv');
const menuHover = document.querySelector('.menu_container');
const hamburger = document.querySelector('.hamburger');

const mouseMove = (e) => {
   const mouseX = e.pageX;
   const mouseY = e.pageY;
   const scrollPos = getScroll();

   const hamburgerPos = hamburger.getBoundingClientRect();
   const hamburgerTop = hamburgerPos.top;
   const hamburgerLeft = hamburgerPos.left
   
   
   if(cursor.classList.contains('menu')) {
      cursor.style.transform = `translate(${(hamburgerLeft - ((hamburgerLeft - mouseX) / 10) + 10)}px, ${hamburgerTop - ((hamburgerTop - mouseY) / 10) + 10}px)`;
      hamburger.style.transform = `translate(${(hamburgerLeft - mouseX) / -10}px, ${(hamburgerTop - mouseY) / -10}px)`;
      
   } else {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY - scrollPos}px)`;
      hamburger.style.transform = `translate(0px, 0px)`;
   }
    
}    

const getScroll = () => {
    const scrollPosY = window.scrollY;
    
    return scrollPosY;
}

document.addEventListener('mousemove', mouseMove);
document.addEventListener('scroll', getScroll);

// =============================== Cursor tracker end =================================

// =============================== Detect mouse on screen =============================
const cursorEvent = document.querySelector('body');
cursorEvent.addEventListener('mouseenter', () => {
    cursor.classList.add('visible');
});

cursorEvent.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
});

// ------------------------------- Detect hover on menu ----------------------------

menuHover.addEventListener('mouseenter', () => { 
   cursor.classList.add('menu');
});

menuHover.addEventListener('mouseleave', () => {
   cursor.classList.remove('menu');
});