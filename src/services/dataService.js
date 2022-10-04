const catalog = [
  {
    _id: "0",
    title: "Gotham Knights",
    price: 12.99,
    category: "Videogame",
    image: "gotham-knights.jpg",
  },
  {
    _id: "1",
    title: "Assassin's Creed Mirage",
    price: 12.99,
    category: "Videogame",
    image: "ac-mirage.jpg",
  },
  {
    _id: "2",
    title: "Call of Duty Modern Warfare 2",
    price: 12.99,
    category: "Videogame",
    image: "cod-mw2.jpg",
  },
  {
    _id: "3",
    title: "LEGO Star Wars The Skywalker Saga",
    price: 12.99,
    category: "Videogame",
    image: "lego-sw-skywalker.jpg",
  },
  {
    _id: "4",
    title: "Red Dead Redemption 2",
    price: 12.99,
    category: "Videogame",
    image: "rdr-2.jpg",
  },
  {
    _id: "5",
    title: "Super Smash Bros Ultimate",
    price: 12.99,
    category: "Videogame",
    image: "ssbu.jpg",
  },
  {
    _id: "6",
    title: "The Legend of Zelda Tears of the Kingdom",
    price: 12.99,
    category: "Videogame",
    image: "tloz-totk.jpg",
  },
];

class Dataservice {
  getCatalog() {
    //Does : call the server to retrieve the data
    return catalog;
  }

  saveOrder() {}

  validateCouponCode() {}
}

export default Dataservice;