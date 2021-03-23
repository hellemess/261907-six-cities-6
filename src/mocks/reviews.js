import {AVATAR_URL} from '../const';
import {nanoid} from 'nanoid';

export default [
  {
    comment: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: `Keqing`
    }
  },
  {
    comment: `Trully great stay. Ideal for long stay as well. Room is comfortable, spacious and well equiped.`,
    date: `2019-04-16T22:10:58.569Z`,
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: `Mona`
    }
  },
  {
    comment: `Beautiful room. So friendly and welcoming staff, I felt humbled to be allowed to stay during an exceptionally difficult time, but still felt welcoming. Can't wait to return, bigger room with the rings next time!`,
    date: `2019-04-19T20:05:35.569Z`,
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: `Xinyan`
    }
  },
  {
    comment: `Loved the loft space and the way it was planned. Love the bed, like sleeping in a cocoon. The kitchen is well equipped and the pantry is genius.`,
    date: `2019-02-02T15:00:56.569Z`,
    id: nanoid(),
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: `Barbara`
    }
  }
];
