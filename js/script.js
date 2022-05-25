parent.window.onload = function () {

   const tabBtns = document.querySelectorAll('.header__link'),
      tabsCont = document.querySelectorAll('.tabs__content'),
      tabsParent = document.querySelector('.header__flex');

   function hideTabContent() {
      tabsCont.forEach(item => {
         item.classList.add('hidden');
      });
      tabBtns.forEach(item => {
         item.classList.remove('active');
      });
   }

   function showTabContent(i) {
      if (i !== 0) {
         tabBtns[i].classList.add('active');
      }
      tabsCont[i].classList.remove('hidden');
      tabsCont[i].classList.add('visible');
   }

   tabsParent.addEventListener('click', (e) => {
      if (e.target.classList.contains('header__link')) {
         tabBtns.forEach((item, i) => {
            if (e.target == item) {
               hideTabContent();
               showTabContent(i);
               window.scrollTo(0, 0);
               if (i == 2) {
                  hideGramContent();
                  showGramContent(0);
               }
            }
         });
      }
   });

   hideTabContent();
   showTabContent(0);

   const gramBtns = document.querySelectorAll('.grammarTrigger'),
      gramBtnsParent = document.querySelector('.mainMenu');

   function hideGramContent() {
      const gramCont = document.querySelectorAll('div.article');
      gramCont.forEach((item) => {
         item.classList.remove('visible');
         item.classList.add('hidden');
      });
   }

   function showGramContent(i) {
      const gramCont = document.querySelectorAll('div.article');
      gramCont[i].classList.remove('hidden');
      gramCont[i].classList.add('visible');
   }

   gramBtnsParent.addEventListener('click', (e) => {
      if (e.target.classList.contains('grammarTrigger')) {
         gramBtns.forEach((item, i) => {
            if (e.target == item) {
               hideGramContent();
               showGramContent(i);
               window.scrollTo(0, 0);
            }
         });
      }
   });



};