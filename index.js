
window.addEventListener('DOMContentLoaded', () => {

    const menuOpenButton = document.getElementById('menu-open');
    const logo = document.getElementById('logo');
     console.log(logo)
    const menuCloseButton = document.getElementById('menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    const navItems = document.getElementsByClassName('nav-items');
    const paragraphTitles = document.getElementsByClassName('category-title');
    const name = document.getElementsByClassName('big-name');
    const buttons = document.getElementsByClassName('secondary-buttons');
    const paragraphs = document.querySelectorAll('p');
    const images = document.querySelectorAll('img');

    // --------------
    gsap.registerPlugin(Draggable) 
   
    const screenWidth = window.innerWidth;
  
    let distance = 0;
    console.log(screenWidth)
    if(screenWidth >= 1444){
        distance = "-1620"
    }
    else if(screenWidth >= 1024){
        distance = "-720"
    }
    else if(screenWidth > 760){
        distance = "-352"
    }
    else {
        distance = "-96"
    }

    menuOpenButton.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      body.style.overflow="hidden";
      mobileMenu.style.opacity = 1;
        for (i=0 ; i <= navItems.length-1 ; i++){
            
            gsap.to(navItems[i], {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1,
                delay: i/10,
              });
        }
 
    });
    menuCloseButton.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      body.style.overflow="unset";
      mobileMenu.style.opacity = 0;
      for (i=0 ; i <= navItems.length-1 ; i++){
        console.log(i)
        gsap.to(navItems[i], {
            clipPath: "inset(90% 0% 0% 0%)",
            duration: 0
          });
    }
    });
  gsap.to(paragraphTitles, {
  opacity: 1, // Start with opacity 0
  duration: 1,
  ease: 'power2.inOut',
  stagger: {
    each: 0.2, // Delay between each paragraph
    from: 'start', // Start from the beginning of the array
    grid: 'auto', // Automatically calculate rows and columns
  },
  delay: 5, // Initial delay before animations start
});
       
    gsap.to(name, {
        opacity: 1,
        duration: 2,
        delay:0,
        ease: 'power2.inOut'
      });

      gsap.to(logo, {
        translateX: 0,
        duration: 1,
        delay:2,
        ease: 'power2.inOut',
     
      });
        
    gsap.to(menuOpenButton, {
        opacity: 1,
        duration: 1,
        delay: 2.1, // Adjust the delay time as needed
        ease: 'power2.inOut',
      });
  
        gsap.from(menuOpenButton, {
          translateX: distance,
          duration: 1,
          delay:2,
          ease: 'power2.inOut',
       
        });
        gsap.to(menuOpenButton, {
            translateX: 0,
            duration: 1,
            delay: 3, // Adjust the delay time as needed
            ease: 'power2.inOut',
          });
   
  
  gsap.to(paragraphs, {
  opacity: 1, 
  duration: 1,
  ease: 'power2.inOut',
  stagger: {
    each: 0.2, 
    from: 'start', 
    grid: 'auto', 
  },
  delay: 6, 
});
  gsap.to(buttons, {
  opacity: 1, 
  duration: 1,
  ease: 'power2.inOut',
  stagger: {
    each: 0.2, 
    from: 'start', 
    grid: 'auto', 
  },
  delay: 6, 
});



        gsap.to(images, {
  opacity: 1, 
  translateX:0,
  duration: 1,
  ease: 'power2.inOut',
  stagger: {
    each: 0.2, 
    from: 'start', 
    grid: 'auto', 
  },
  delay: 7, 
});
  });