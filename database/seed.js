const Review = require('./reviews.js')
const faker = require('faker');

let randNumOfReviews = () => { return Math.floor(Math.random() * (6 - 1) + 1) };
let randomChoice = () => { return Math.floor(Math.random() * 6) };

//Creating reviews for a given restaurant
const createData = () => {

    let arrNums = [];
    let length = randNumOfReviews();
    for(let j = 0; j < length; j++) {
        random = Math.floor(Math.random() * (50 - 1) + 1);
        if(!arrNums.includes(random)){
            arrNums.push(random);
        }
    }

    for(let i = 0; i < length; i++) {
        Review.create({
            picture: `https://worldnet-sites.s3-us-west-1.amazonaws.com/images/${arrNums[i]}.jpg`,
            name: faker.name.findName(),
            location: faker.address.city() + '. ' + faker.address.state(),
            reviews: randNumOfReviews(),
            rating: randomChoice(),
            elite: Math.floor(Math.random() * 2)
        }).then(() => {
            console.log(Review);
        }).catch((err) => {
            console.error(err);
        });
    }
};

createData();