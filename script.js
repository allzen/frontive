/*NAVBAR*/
let mainNav = document.getElementById('navMenu');

let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', () => {

  mainNav.classList.toggle('active');

});

let navbarBg = document.getElementById("nav");
/*changing color of navbar while scrolling*/
window.onscroll = () => {
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    navbarBg.classList.add("scroll");
  } else {
    navbarBg.classList.remove("scroll");
  }
};

/*MODAL*/
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modalWindow').style.display = 'none';
});

const displayModal = (hero) => {
  const modalTemplate =
    `
      <img src="images/${hero.image}" class="modal-content__hero-img">
      <div class="modal-content__text">
          <h2 class="modal-content__title">I'm the ${hero.name}</h2>
          <span class="modal-content__title modal-content-title--underline"></span>
          <p class="modal-content__description"> ${hero.description}</p>
          <p class="modal-content__price">Wynajem: ${hero.price}</p>
          <button id="addHeroButton" class="rectangle-button modal-content__button modal-content__button--add">Dodaj do koszyka</button>
      </div>
  `;

  document.getElementById('modalContent').innerHTML = '';
  document.getElementById('modalContent').insertAdjacentHTML('beforeend', modalTemplate);
  document.getElementById('modalWindow').style.display = 'block';
  document.getElementById('addHeroButton').addEventListener('click', () => {
    addHeroToBasket(hero);
  });
}


/*SUMMING PRICES*/
const calculateTotalPriceOfBasket = () => {
  let totalPrice = 0;
  heroes.forEach((hero) => {
    if (hero.isAvailable === false) {
      totalPrice += parseFloat(hero.price);
    }
  })
  return totalPrice;
}

/*localStorage function*/
const saveHeroes = () => {
  localStorage.setItem("heroes", JSON.stringify(heroes));
}

/*BASKET*/
const displayTotalPriceOfBasket = () => {
  document.getElementById("basketPrice").innerHTML = calculateTotalPriceOfBasket();
}

/*finding hero index*/
const findHeroIndex = (hero) => {
  return heroes.findIndex((checkHero) => {
    return checkHero.name === hero.name;
  });
}

/*display basket info (empty basket)*/
const displayBasketInfo = () => {
  let display = 'block';

  if (heroes.filter((hero) => hero.isAvailable === false).length > 0) {
    display = 'none';
  }

  document.getElementById('basketInfo').style.display = display;
}

const updateHeroStatus = (hero, status) => {
  let index = findHeroIndex(hero);
  heroes[index].isAvailable = status;
  /*localStorage*/
  saveHeroes();
}
 
/*displayHeroInBasket - display HTML template in basket*/
const displayHeroInBasket = (hero) => {
  const basketHeroId = `${hero.name}BasketHero`;
  const deleteHeroId = `${hero.name}DeleteFromBasket`;
  const heroBasketTemplate =
    `
    <div id="${basketHeroId}" class="basket-products__hero">
      <img src="images/${hero.image}" class="basket-products__hero-img">
      <div class="basket-products__hero-text">
        <h4 class="basket-products__hero-title">${hero.name}</h4>
        <p class="basket-products__hero-description">${hero.description}</p>
        <button id="${deleteHeroId}" class="rectangle-button basket-products__hero-button basket-products__hero-button--delete">Usuń z koszyka | &times; </button>
      </div>
    </div>
`;

  document.getElementById('basketProducts').insertAdjacentHTML('beforeend', heroBasketTemplate);
  document.getElementById(deleteHeroId).addEventListener('click', () => {
    updateHeroStatus(hero, true);
    document.getElementById(basketHeroId).outerHTML = '';
    displayTotalPriceOfBasket();
    displayBasketInfo();
  });
}

const addHeroToBasket = (hero) => {
  if (hero.isAvailable) {
    updateHeroStatus(hero, false);
    displayHeroInBasket(hero);
    /*summing price*/
    displayTotalPriceOfBasket();
    displayBasketInfo();
  } else {
    document.getElementById('modalContent').innerHTML = 'Nie możesz dodać tego samego Herosa drugi raz do koszyka!';
    document.getElementById('modalContent').style.padding = '50px';
  }
}

let heroes = JSON.parse(localStorage.getItem('heroes')) || [
  {
    name: 'Superman',
    description: 'Hero description lorem....',
    image: 'superman.jpg',
    price: '9999',
    isAvailable: true
  },
  {
    name: 'Hulk',
    description: 'Hero description lorem....',
    image: 'hulk.jpg',
    price: '9999',
    isAvailable: true
  },
  {
    name: 'Thor',
    description: 'Hero description lorem....',
    image: 'thor.jpg',
    price: '9999',
    isAvailable: true
  },
  {
    name: 'Ironman',
    description: 'Hero description lorem....',
    image: 'ironman.jpg',
    price: '9999',
    isAvailable: true
  },
  {
    name: 'potter',
    description: 'Hero description lorem....',
    image: 'potter.jpg',
    price: '9999',
    isAvailable: true
  },
  {
    name: 'batman',
    description: 'Hero description lorem....',
    image: 'batman.jpg',
    price: '9999',
    isAvailable: true
  }
];

/*HEROES*/
const addHero = (hero) => {
  let openModalId = `openModal${hero.name}`;
  let template = `<div class="hero-container__hero">
    <a id="${openModalId}">
        <img id="${hero.name}" src="images/${hero.image}" class="hero-container__hero-img">
    </a>
    <div>
        <h3>${hero.name}</h3>
        <p>Cena najmu: ${hero.price}</p>
    </div>
  </div>`;

  document.getElementById('heroContainer').insertAdjacentHTML('beforeend', template);
  document.getElementById(openModalId).addEventListener("click", () => {
    displayModal(hero);
  });
}

heroes.forEach((hero) => {
  addHero(hero);

  if (!hero.isAvailable) {
    displayHeroInBasket(hero);
  }
});
displayBasketInfo();
displayTotalPriceOfBasket();