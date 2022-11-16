const buttonsContainer = document.querySelector('.tab__buttons');
const buttonsTab = document.querySelectorAll('.tab__button');
const tabs = document.querySelectorAll('.tab__list');

const initTab = ()=>{
  buttonsContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('tab__button')) {
      buttonsTab.forEach((button) => button.classList.remove('tab__button--active'));
      evt.target.classList.add('tab__button--active');
      tabs.forEach((el) => {
        el.style.display = 'none';
      });
      tabs.forEach((el) => {
        if (el.dataset.list === evt.target.dataset.plan) {
          el.style.display = 'grid';
        }
      });
    }
  });
};
export {buttonsContainer, initTab};
