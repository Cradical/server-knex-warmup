exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([{
          firstName: "Kevin', lastName: 'Potts",
          hometown: 'OC',
          prevOccupation: 'Skydiver',
          favoriteNum: 13,
          pastime: 'coding'
        },
        {
          firstName: 'Brice',
          lastName: 'Sinkule',
          hometown: 'Crete, NE',
          prevOccupation: 'Sale Consultant',
          favoriteNum: 12,
          pastime: 'Basketball'
        },
        {
          firstName: 'Anhuelita',
          lastName: 'LaChica',
          hometown: 'Kazakhstan',
          prevOccupation: 'Masseuse',
          favoriteNum: 2,
          pastime: 'sleeping'
        },
        {
          firstName: 'Conrad',
          lastName: 'Wright',
          homeTown: 'Durango',
          preOccupation: 'Rural Development Consultant',
          favNumber: 'infinity',
          pastime: 'Bird Watching'
        },
        {
          firstName: 'Steve',
          lastName: 'Lopez',
          hometown: 'FrankFort',
          prevOccupation: 'Bounty Hunter',
          favoriteNum: 710,
          pastime: 'running'
        },
        {
          firstName: 'Jose',
          lastName: 'Stricklin',
          hometown: 'San German',
          prevOccupation: 'Retail',
          faveNum: 4,
          pastime: 'Shakespearean Elocution'
        },
        {
          firstName: 'Jed',
          lastName: 'Prentup',
          hometown: 'Boulder',
          prevOccupation: 'PokerDealer',
          favoriteNum: 24,
          pastime: 'delving'
        },
        {
          firstName: 'Maddie',
          lastName: 'Kreamer',
          hometown: 'Des Moines, IA',
          prevOccupation: 'Server/Bartender',
          favoriteNum: 7,
          pastime: 'Backpacking'
        },
        {
          firstName: 'Kris',
          lastName: 'Kamikawa',
          hometown: 'Mililani, HI',
          prevOccupation: 'Legislative Aide',
          favoriteNum: 11,
          pastime: 'easy climbing'
        },
        {
          firstName: 'Cory',
          lastName: 'Pease',
          hometown: 'Denver',
          prevOccupation: 'Boss',
          favoriteNum: 34.5,
          pastime: 'Being Bald'
        }
      ]);
    });
};