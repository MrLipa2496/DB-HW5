const mongoose = require('mongoose');
const { moviesSchema } = require('./utils/mongoSchema');

(async function () {
  try {
    //! С
    await mongoose.connect('mongodb://localhost:27017/cinema');

    const Movie = mongoose.model('Movie', moviesSchema);

    // const newMovies = [
    //   {
    //     title: 'Interstellar',
    //     genre: 'Sci-Fi',
    //     director: 'Christopher Nolan',
    //     releaseYear: 2014,
    //     duration: 169,
    //     ratings: [
    //       { reviewer: 'Neil Tyson', score: 9 },
    //       { reviewer: 'Brian Cox', score: 10 },
    //     ],
    //     cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    //     boxOffice: {
    //       budget: 165000000,
    //       revenue: 677471339,
    //     },
    //     country: 'USA',
    //     tags: ['space', 'science', 'thriller'],
    //   },
    //   {
    //     title: 'Avengers: Endgame',
    //     genre: 'Action',
    //     director: 'Anthony and Joe Russo',
    //     releaseYear: 2019,
    //     duration: 181,
    //     ratings: [
    //       { reviewer: 'Robert Downey Jr.', score: 10 },
    //       { reviewer: 'Chris Hemsworth', score: 9 },
    //     ],
    //     cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    //     boxOffice: {
    //       budget: 356000000,
    //       revenue: 2797800564,
    //     },
    //     country: 'USA',
    //     tags: ['superhero', 'blockbuster', 'thriller'],
    //   },
    //   {
    //     title: 'The Matrix',
    //     genre: 'Sci-Fi',
    //     director: 'Lana Wachowski, Lilly Wachowski',
    //     releaseYear: 1999,
    //     duration: 136,
    //     ratings: [
    //       { reviewer: 'Keanu Reeves', score: 10 },
    //       { reviewer: 'Laurence Fishburne', score: 9 },
    //     ],
    //     cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    //     boxOffice: {
    //       budget: 63000000,
    //       revenue: 466000000,
    //     },
    //     country: 'USA',
    //     tags: ['action', 'dystopia', 'thriller'],
    //   },
    //   {
    //     title: 'Joker',
    //     genre: 'Drama',
    //     director: 'Todd Phillips',
    //     releaseYear: 2019,
    //     duration: 122,
    //     ratings: [
    //       { reviewer: 'Joaquin Phoenix', score: 10 },
    //       { reviewer: 'Robert De Niro', score: 8 },
    //     ],
    //     cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
    //     boxOffice: {
    //       budget: 55000000,
    //       revenue: 1074251311,
    //     },
    //     country: 'USA',
    //     tags: ['psychological', 'drama', 'thriller'],
    //   },
    //   {
    //     title: 'Mad Max: Fury Road',
    //     genre: 'Action',
    //     director: 'George Miller',
    //     releaseYear: 2015,
    //     duration: 120,
    //     ratings: [
    //       { reviewer: 'Tom Hardy', score: 9 },
    //       { reviewer: 'Charlize Theron', score: 9 },
    //     ],
    //     cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    //     boxOffice: {
    //       budget: 150000000,
    //       revenue: 374736354,
    //     },
    //     country: 'Australia',
    //     tags: ['post-apocalyptic', 'action', 'thriller'],
    //   },
    //   {
    //     title: 'Titanic',
    //     genre: 'Romance',
    //     director: 'James Cameron',
    //     releaseYear: 1997,
    //     duration: 195,
    //     ratings: [
    //       { reviewer: 'Leonardo DiCaprio', score: 9 },
    //       { reviewer: 'Kate Winslet', score: 10 },
    //     ],
    //     cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
    //     boxOffice: {
    //       budget: 200000000,
    //       revenue: 2187463944,
    //     },
    //     country: 'USA',
    //     tags: ['romance', 'tragedy', 'historical'],
    //   },
    //   {
    //     title: 'The Lord of the Rings: The Return of the King',
    //     genre: 'Fantasy',
    //     director: 'Peter Jackson',
    //     releaseYear: 2003,
    //     duration: 201,
    //     ratings: [
    //       { reviewer: 'Elijah Wood', score: 10 },
    //       { reviewer: 'Ian McKellen', score: 10 },
    //     ],
    //     cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    //     boxOffice: {
    //       budget: 94000000,
    //       revenue: 1146030912,
    //     },
    //     country: 'New Zealand',
    //     tags: ['fantasy', 'adventure', 'epic'],
    //   },
    // ];

    // await Movie.insertMany(newMovies);

    //! R
    //? Відсортувати фільми за тривалістю у зростаючому порядку та показати тільки назву та тривалість.

    // const result1 = await Movie.find({}, 'title duration').sort({
    //   duration: 1,
    // });
    // console.log(result1);

    //? Отримати другу сторінку при перегляді по 3 фільми на сторінці, впорядкувавши за роком випуску від найновіших до найстаріших.

    // const result2 = await Movie.find({}, 'title releaseYear')
    //   .sort({ releaseYear: -1 })
    //   .skip(3)
    //   .limit(3);
    // console.log(result2);

    //? Знайдіть усі фільми в жанрі "Sci-Fi", *випущені після 2000 року.

    // const result3 = await Movie.find(
    //   { genre: 'Sci-Fi', releaseYear: { $gt: 2000 } },
    //   'title releaseYear genre'
    // );
    // console.log(result3);

    //?Знайти всі фільми, випущені після 2000 року, і показати тільки їх назву, режисера та рік випуску.

    // const result4 = await Movie.find(
    //   { releaseYear: { $gt: 2000 } },
    //   'title director releaseYear'
    // );
    // console.log(result4);

    //? Знайти фільми режисера "Christopher Nolan", тривалість яких перевищує 150 хвилин.
    // const result5 = await Movie.find(
    //   { director: 'Christopher Nolan', duration: { $gt: 150 } },
    //   'title duration director'
    // );
    // console.log(result5);

    //? Показати другу сторінку результатів для фільмів у жанрі "Action", з 2 фільмами на сторінку.
    // const result6 = await Movie.find({ genre: 'Action' })
    //   .skip(2)
    //   .limit(2)
    //   .select('title genre');
    // console.log(result6);

    //? Відобразити фільми з бюджетом, більше 200 млн

    // const result7 = await Movie.find(
    //   { 'boxOffice.budget': { $gt: 200000000 } },
    //   'title boxOffice.budget'
    // );
    // console.log(result7);

    //? Відобразити фільми з тегами 'thriller' та 'superhero'
    // const result8 = await Movie.find(
    //   { tags: { $all: ['thriller', 'superhero'] } },
    //   'title tags'
    // );
    // console.log(result8);

    //! U
    //? Оновити тривалість фільму "Interstellar" до 150 хвилин.
    // const updatedMovie1 = await Movie.findOneAndUpdate(
    //   { title: 'Interstellar' },
    //   { $set: { duration: 150 } }
    // );
    // console.log(updatedMovie1);

    //? Додати новий тег "blockbuster" до фільму "The Matrix". (оператор $push)
    // const updatedMovie2 = await Movie.findOneAndUpdate(
    //   { title: 'The Matrix' },
    //   { $push: { tags: 'blockbuster' } }
    // );
    // console.log(updatedMovie2);

    //! D

    //? Видалити фільм "Joker" з колекції.
    // const deletedMovie1 = await Movie.findOneAndDelete({ title: 'Joker' });
    // console.log(deletedMovie1);

    //? Видалити всі фільми, випущені до 1980 року
    // const deletedMovies = await Movie.deleteMany({
    //   releaseYear: { $lt: 1980 },
    // });
    // console.log(deletedMovies);

    //! Aggregation pipeline:

    // const result9 = await Movie.aggregate([
    //   {
    //     $group: {
    //       _id: '$genre',
    //       averageDuration: { $avg: '$duration' },
    //     },
    //   },
    // ]);
    // console.log(result9);

    //? Знайдіть жанр із найбільшою кількістю фільмів.
    // const result10 = await Movie.aggregate([
    //   {
    //     $group: {
    //       _id: '$genre',
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $sort: { count: -1 },
    //   },
    //   {
    //     $limit: 1,
    //   },
    // ]);
    // console.log(result10);

    //? Підрахуйте загальні збори (revenue) фільмів за країнами
    // const result11 = await Movie.aggregate([
    //   {
    //     $group: {
    //       _id: '$country',
    //       totalRevenue: { $sum: '$boxOffice.revenue' },
    //     },
    //   },
    // ]);
    // console.log(result11);

    //? Підрахувати кількість фільмів, знятих в кожній країні після 2010 року
    const result12 = await Movie.aggregate([
      {
        $match: { releaseYear: { $gt: 2010 } },
      },
      {
        $group: {
          _id: '$country',
          count: { $sum: 1 },
        },
      },
    ]);
    console.log(result12);
  } catch (err) {
    err => console.log(err);
  }
})();
