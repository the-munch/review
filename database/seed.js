const db = require('./index.js');
const _ = require('underscore');
const Review = require('./reviews.js')
const faker = require('faker');

let randNum = Math.floor(Math.random() * (6 - 1) + 1);
let ratingRandNum = Math.floor(Math.random() * 6);
let eliteRand = Math.floor(Math.random() * 2);


//Creating reviews for a given restaurant
const createData = () => {
    for(let i = 0; i < randNum; i++) {
        let arrNums = [];
    
        random = Math.floor(Math.random() * (50 - 1) + 1);
        if(!arrNums.includes(random)){
            arrNums.push(random);
        }
    
        Review.create({
            picture: `https://worldnet-sites.s3-us-west-1.amazonaws.com/images/${arrNums[i]}.jpg`,
            name: faker.name.findName(),
            location: faker.address.city() + '. ' + faker.address.state(),
            reviews: randNum,
            rating: ratingRandNum,
            elite: eliteRand
        }).then(() => {
            console.log(Review);
        }).catch((err) => {
            console.error(err);
        });
    }
};

createData();