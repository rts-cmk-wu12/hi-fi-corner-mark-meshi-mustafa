document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data from the local file
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.products);
        })
        .catch(error => console.error('Error fetching the data:', error));
});

function displayProducts(products) {
    const container = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
             <a href="/single.html"><h2>${product.name}</h2></a>

            <p><strong>Price:</strong> ${product.Price}</p>
        `;

        container.appendChild(productCard);
    });
}
