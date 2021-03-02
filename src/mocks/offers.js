import {nanoid} from 'nanoid';

const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Located within 1.1 mi of Amsterdam Central Station, Zoku Amsterdam features private Apartment-style rooms including free high-speed WiFi, a fully-equipped kitchen, large living/office spaces and a rooftop restaurant that meets the highest quality cleaning standards.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: `Razor`
    },
    id: nanoid(),
    images: [`https://cf.bstatic.com/images/hotel/max1024x768/647/64768746.jpg`, `https://cf.bstatic.com/images/hotel/max1024x768/111/111251832.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: `https://cf.bstatic.com/images/hotel/max1024x768/647/64768746.jpg`,
    price: 108,
    rating: 5,
    title: `Zoku Amsterdam`,
    type: `Apartment`
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Featuring free WiFi throughout the property, Residence Inn by Marriott Amsterdam Houthavens is located in Amsterdam, within the vibrant area of Houthavens. Attractions in the area include Beurs van Berlage, 2.1 mi away, or Basilica of St. Nicholas, located 2.1 mi from the property.`,
    goods: [`Heating`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: `Barbara`
    },
    id: nanoid(),
    images: [`https://cf.bstatic.com/images/hotel/max1024x768/133/133229271.jpg`, `https://cf.bstatic.com/images/hotel/max1024x768/133/133229173.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: `https://cf.bstatic.com/images/hotel/max1024x768/133/133229271.jpg`,
    price: 42,
    rating: 4.3,
    title: `Residence Inn by Marriott Amsterdam Houthavens`,
    type: `Apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Set in Amsterdam, Eric Vökel Boutique Apartments — Amsterdam Suites is 400 m from Basilica of St. Nicholas. Beurs van Berlage is 801 m away. Free WiFi is available throughout the property.`,
    goods: [`Kitchen`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: `Xiangling`
    },
    id: nanoid(),
    images: [`https://cf.bstatic.com/images/hotel/max1024x768/794/79446804.jpg`, `https://cf.bstatic.com/images/hotel/max1024x768/794/79446706.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `https://cf.bstatic.com/images/hotel/max1024x768/794/79446804.jpg`,
    price: 230,
    rating: 5,
    title: `Eric Vökel Boutique Apartments — Amsterdam Suites`,
    type: `Apartment`
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Yays Bickersgracht Concierged Boutique Apartments offers self-catering accommodations with free WiFi access located in a historical part just outside the city center of Amsterdam. It offers a shared promenade on the canal side. The property is 0.7 mi from Anne Frank House and 0.9 mi from Amsterdam Central Station.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: `Ningguang`
    },
    id: nanoid(),
    images: [`https://cf.bstatic.com/images/hotel/max1024x768/992/99210473.jpg`, `https://cf.bstatic.com/images/hotel/max1024x768/384/38410619.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: `https://cf.bstatic.com/images/hotel/max1024x768/992/99210473.jpg`,
    price: 100,
    rating: 4.8,
    title: `Yays Bickersgracht Concierged Boutique Apartments`,
    type: `Apartment`
  }
];
