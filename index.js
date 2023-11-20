const API_BASE = 'https://fakestoreapi.com/products';

const product = {
    title: 'N&D Farmina',
    price: 900,
    description: 'Cat food',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwellbredonline.com%2Fproducts%2Ffarmina-n-d-quinoa-functional-grain-free-cat-dry-food-digestion-lamb&psig=AOvVaw1hUZoC2d2ZmiQl0Otr76JS&ust=1700585995407000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIi9kNOG04IDFQAAAAAdAAAAABAF',
    category: 'Pet food',
    rating: {
        rate: 5,
        count: 59
    }
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
}

fetch(API_BASE, options)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})