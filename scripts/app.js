// =============================== Toggle menu ========================================
const menuToggle = document.querySelector('.menu_btn');
const links = document.querySelectorAll('.links');

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu_open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu_open');
    });
});


// =============================== Cursor tracker ====================================
const cursor = document.querySelector('.cursorDiv');
const menuHover = document.querySelector('.menu_hover');
const hamburger = document.querySelector('.hamburger');

const mouseMove = (e) => {
   const mouseX = e.pageX;
   const mouseY = e.pageY;
   const scrollPos = getScroll();

   const hamburgerPos = hamburger.getBoundingClientRect();
   const hamburgerTop = hamburgerPos.top;
   const hamburgerLeft = hamburgerPos.left
   
//    menu and hamburger hover
   if (cursor.classList.contains('menu')) {
      cursor.style.transform = `translate(${(hamburgerLeft - ((hamburgerLeft - mouseX) / 10) + 10)}px, ${hamburgerTop - (((hamburgerTop - (mouseY - scrollPos)) / 10) - 10)}px)`;
      hamburger.style.transform = `translate(${(hamburgerLeft - mouseX) / -10}px, ${(hamburgerTop - (mouseY - scrollPos)) / -10}px)`; 
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

// -------------------------------- Detect hover on the links --------------------------
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('linkHover');
        console.log('added');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('linkHover');
        console.log('removed');
    });
});


// -------------------------------- Detect hover on hero links -------------------------
const heroLgImg = document.querySelectorAll('.hero_link a');
const heroSmImg = document.querySelectorAll('.hero_link_spacer');


heroSmImg.forEach(smImg => {
    smImg.addEventListener('mouseenter', () => {
        cursor.classList.add('hero_sm_img')
    });
    
    smImg.addEventListener('mouseleave', () => {
        cursor.classList.remove('hero_sm_img')
    });
});

heroLgImg.forEach(lgImg => {
    lgImg.addEventListener('mouseenter', () => {
        cursor.classList.add('hero_lg_img')
    });
    
    lgImg.addEventListener('mouseleave', () => {
        cursor.classList.remove('hero_lg_img')
    });
});