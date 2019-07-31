const db = require('../db/index.js')
const { Bird } = require('../db/models.js')

// test('gets House Sparrow image from Wikipedia', () => {
//   expect(getBirdData())
// })


describe('insert', () => {

  it('should insert a doc into collection', () => {

    const mockBird = {
      _id: '625', 
      name: 'House Sparrow', 
      date: '03/12/2019', 
      location: 'Clearwater', 
      story: 'saw in the backyard',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Passer_domesticus_male_%2815%29.jpg'
    }
    Bird.create(mockBird)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

    const insertedBird = Bird.find({_id: '625'})
      .then(data => {
        expect(insertedBird).toEqual(mockBird);
      })
  });
});
