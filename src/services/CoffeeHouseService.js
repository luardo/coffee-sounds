const coffees = [
  {
    id: 1,
    title: 'The Barn',
    file: 'https://previews.customer.envatousercontent.com/files/292721518/preview.mp3',
    img: 'https://globusliebe.com/wp-content/uploads/2016/06/cafes-in-berlin-neukoelln-isla-coffee.jpg',
    description: 'Lorem ipsum dolor sit amet...',
    city: 'Berlin',
    category: 'Coffee House'
  },
  {
    id: 2,
    title: 'Concierge Coffee',
    file: 'https://previews.customer.envatousercontent.com/files/292721518/preview.mp3',
    img: 'https://globusliebe.com/wp-content/uploads/2016/06/cafes-in-berlin-neukoelln-isla-coffee.jpg',
    description: 'Lorem ipsum dolor sit amet...',
    city: 'Berlin',
    category: 'Coffee House'
  },
  {
    id: 3,
    title: 'Bonanza Coffee Heroes',
    file: 'https://previews.customer.envatousercontent.com/files/292721518/preview.mp3',
    img: 'https://globusliebe.com/wp-content/uploads/2016/06/cafes-in-berlin-neukoelln-isla-coffee.jpg',
    description: 'Lorem ipsum dolor sit amet...',
    city: 'Berlin',
    category: 'Coffee House'
  },
]

export default class CoffeeHouseService {

  getAllCoffeeHouses() {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(coffees)
      }, 100)
    })
  }

  getCoffeeHouse(id) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(coffees.find(coffee => {
          return Number(id) === Number(coffee.id);
        }))
      }, 100)
    })
  }
}
