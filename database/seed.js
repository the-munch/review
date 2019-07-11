const Review = require('./reviews.js')
const faker = require('faker');
const db = require('./index.js');
const Chance = require('chance');

//Creating reviews for a given restaurant
const createData = () => {

    let arrNums = [];
    let length = faker.random.number(5);

    for(let i = 0; i < length; i++) {
        
        let randNum= Math.floor(Math.random() * 100);
        if(!arrNums.includes(randNum)){
            arrNums.push(randNum);
        }
        
        //create gender specific random names
        let chance = new Chance();
        let userName = '';
        if(randNum % 2 === 0) {
            userName = chance.name({ gender: 'female'});
        } else {
            userName = chance.name({ gender: 'male'});
        }

        let firstAndLastNames = userName.split(' ');
        let nameAndInitial = firstAndLastNames[0] + ' ' + firstAndLastNames[1][0] + '.';
        Review.create({
            picture: `https://worldnet-sites.s3-us-west-1.amazonaws.com/images/${arrNums[i]}.jpg`,
            name: nameAndInitial,
            location: faker.address.city() + ', ' + faker.address.stateAbbr(),
            reviews: faker.random.number(100),
            rating: faker.random.number(5),
            elite: faker.random.number(1)
        }).then(() => {
            db.close();
        }).catch((err) => {
            db.close();
        });
    }
};

createData();