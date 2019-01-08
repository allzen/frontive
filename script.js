/*NAVBAR*/
let mainNav = document.getElementById('main-nav__menu');

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
      <img src="images/${hero.image}" class="hero-modal-img">
      <div class="modal-text">
          <h2 class="modal-title">I'm the ${hero.name}</h2>
          <span class="modal-title-underline"></span>
          <p class="modal-description"> ${hero.description}</p>
          <p class="modal-price">Wynajem: ${hero.price}</p>
          <button id="addHeroButton" class="add-item">Dodaj do koszyka</button>
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
const totalPriceOfBasket = () => {
  let totalPrice = 0;
  heroes.forEach((hero) => {
    if (hero.isAvailable === false) {
      totalPrice += parseFloat(hero.price);
    }
  })
  return totalPrice;
}


/*BASKET*/
const addHeroToBasket = (hero) => {
  const basketHeroId = `${hero.name}BasketHero`;
  const deleteHeroId = `${hero.name}DeleteFromBasket`;
  const heroBasketTemplate =
    `
    <div id="${basketHeroId}" class="basket-hero">
      <img src="images/${hero.image}" class="hero-img-basket">
      <div class="product-text">
        <h4 class="product-title">${hero.name}</h4>
        <p class="product-description">${hero.description}</p>
        <button id="${deleteHeroId}" class="delete-item">Usuń z koszyka | &times; </button>
      </div>
    </div>
`;

  if (hero.isAvailable) {
    if (heroes.filter((hero) => hero.isAvailable === false).length === 0) {
      document.getElementById('basketInfo').style.display = 'none';
    }
    document.getElementById('basketProducts').insertAdjacentHTML('beforeend', heroBasketTemplate);
    let index = heroes.findIndex((checkHero) => {
      return checkHero.name === hero.name;
    });
    document.getElementById(deleteHeroId).addEventListener('click', () => {
      heroes[index].isAvailable = true;
      document.getElementById(basketHeroId).outerHTML = '';
      document.getElementById("basketPrice").innerHTML = totalPriceOfBasket();
      if (heroes.filter((hero) => hero.isAvailable === false).length === 0) {
        document.getElementById('basketInfo').style.display = 'block';
      }
    });
    heroes[index].isAvailable = false;
    document.getElementById("basketPrice").innerHTML = totalPriceOfBasket();
  } else {
    document.getElementById('modalContent').innerHTML = 'Nie możesz dodać tego samego Herosa drugi raz do koszyka!';
    document.getElementById('modalContent').style.padding = '50px';
  }
}

let heroes = [
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
  let template = `<div class="hero">
    <a id="${openModalId}">
        <img id="${hero.name}" src="images/${hero.image}" class="hero-img">
    </a>
    <div class="hero-description">
        <h3 class="hero-name">${hero.name}</h3>
        <p class="hero-price">Cena najmu: ${hero.price}</p>
    </div>
  </div>`;

  document.getElementById('heroContainer').insertAdjacentHTML('beforeend', template);
  document.getElementById(openModalId).addEventListener("click", () => {
    displayModal(hero);
  });
}

heroes.forEach((hero) => {
  if (hero.isAvailable) {
    addHero(hero);
  }
});
