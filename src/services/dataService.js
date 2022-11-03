import axios from 'axios';

const catalog = [
  {
    _id: "0",
    title: "Mario + Rabbids Sparks of Hope",
    price: 59.99,
    category: "Videogame",
    image: "mario-rabbids.jpg",
  },
  {
    _id: "1",
    title: "Assassin's Creed Mirage",
    price: 38.99,
    category: "Videogame",
    image: "ac-mirage.jpg",
  },
  {
    _id: "2",
    title: "Call of Duty Modern Warfare 2",
    price: 35,
    category: "Videogame",
    image: "cod-mw2.jpg",
  },
  {
    _id: "3",
    title: "LEGO Star Wars The Skywalker Saga",
    price: 25,
    category: "Videogame",
    image: "lego-sw-skywalker.jpg",
  },
  {
    _id: "4",
    title: "Red Dead Redemption 2",
    price: 19.99,
    category: "Videogame",
    image: "rdr-2.jpg",
  },
  {
    _id: "5",
    title: "Super Smash Bros Ultimate",
    price: 40,
    category: "Videogame",
    image: "ssbu.jpg",
  },
  {
    _id: "6",
    title: "The Legend of Zelda Tears of the Kingdom",
    price: 59.99,
    category: "Videogame",
    image: "tloz-totk.jpg",
  },
];

class Dataservice {
  async getCatalog() {
    //Does : call the server to retrieve the data
    // uncomment this next line to work without the server
    // return catalog;

    // for these next lines the server must be running
    // call server and get data
    let res = await axios.get("http://127.0.0.1:5000/api/catalog");
    return res.data;
  }

  async saveProduct(product) {
    let res = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    return res.data;
  }

  saveOrder() {}

  validateCouponCode() {}

  async saveCoupon(coupon){
    // as it is a POST request you need the url and the data you are sending
    let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
    return res.data;
    
  }

  async getCoupons() {
    let res = await axios.get("http://127.0.0.1:5000/api/coupons");
    return res.data;
  }
}

export default Dataservice;