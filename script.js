function initTabMenu() {
  const tabMenu = document.querySelectorAll('.jstabmenu li');
  const tabContent = document.querySelectorAll('.jstabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabMenu();
/*-------------------------------------------------*/
/*-------------------------------------------------*/
/*-------------------------------------------------*/
function initAccordionList() {
  const accordionList = document.querySelectorAll('.jsAccordion dt');
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}

initAccordionList();

/*-------------------------------------------------*/
/*-------------------------------------------------*/
/*-------------------------------------------------*/

const linksInternos = document.querySelectorAll('.jsMenu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
