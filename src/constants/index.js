import {
  pizza,
  pasta,
  shakes,
  burger,
  location1,
  location2,
  location3,
  headchef,
  souschef,
  chef,
  juniorchef,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "menu",
    title: "Our Menu",
  },
  {
    id: "offer",
    title: "Offer",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const categories = [
  {
    id: "pizza",
    title: "Pizza",
    num: "20 Restaurants Foods",
    image: pizza,
  },
  {
    id: "pasta",
    title: "Pasta",
    num: "15 Restaurants Foods",
    image: pasta,
  },
  {
    id: "shakes",
    title: "Shakes",
    num: "20 Restaurants Foods",
    image: shakes,
  },
  {
    id: "burger",
    title: "Burger",
    num: "25 Restaurants Foods",
    image: burger,
  },
];

export const locations = [
  {
    id: "location1",
    location: "762 Fulton St San Francisco, California(CA), 94102",
    image: location1,
  },
  {
    id: "location2",
    location: "66 Ceres St San Francisco, California(CA), 94124",
    image: location2,
  },
  {
    id: "location3",
    location: "766 Sutter St San Francisco, California(CA), 94109",
    image: location3,
  },
];

export const team = [
  {
    id: "head-chef",
    title: "Alizeh Anderson",
    num: "Head Chef",
    image: headchef,
  },
  {
    id: "sous-chef",
    title: "Angelina John",
    num: "Sous Chef",
    image: souschef,
  },
  {
    id: "chef",
    title: "Andre Smith",
    num: "Chef",
    image: chef,
  },
  {
    id: "junior-chef",
    title: "Christina Chi",
    num: "junior Chef",
    image: juniorchef,
  },
];

export const footerLinks = [
  {
    title: "ABOUT US",
    links: [
      {
        name: "Our Story",
        link: "/our-story/",
      },
      {
        name: "Our Locations",
        link: "/our-locations/",
      },
      {
        name: "Current Deals",
        link: "/deals/",
      },
      {
        name: "Contact Us",
        link: "/contacts/",
      },
    ],
  },
  {
    title: "OUR MENU",
    links: [
      {
        name: "Pizza",
        link: "/menu/pizza",
      },
      {
        name: "Pasta",
        link: "/menu/pasta",
      },
      {
        name: "Dessert",
        link: "/menu/dessert",
      },
      {
        name: "Take & Bake",
        link: "/menu/bake",
      },
    ],
  },
  {
    title: "OUR LOCATION",
    links: [
      {
        name: "The FOODMOOD Rome",
        link: "/our-locations/rome",
      },
      {
        name: "The FOODMOOD Madrid",
        link: "/our-locations/madrid",
      },
      {
        name: "The FOODMOOD Paris",
        link: "/our-locations/paris",
      },
      {
        name: "The FOODMOOD Miami",
        link: "/our-locations/miami",
      },
    ],
  },
];
