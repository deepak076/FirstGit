const apiUrl = 'https://crudcrud.com/api/bc8a83cc9ece406d9d827c84ee01c459/products';

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function displayProducts() {
  const products = await fetchProducts();
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${product.name}</td>
      <td>Rs.${product.price.toFixed(2)}</td>
      <td><button class="delete-btn" data-id="${product._id}">Delete</button></td>
    `;

    productList.appendChild(newRow);
  });

  // Calculate and display the total price
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td colspan="2"><strong>Rs.${total.toFixed(2)}</strong></td>
  `;
  productList.appendChild(totalRow);

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', async function () {
      const productId = button.getAttribute('data-id');
      await deleteProduct(productId);
      await displayProducts();
    });
  });
}

async function deleteProduct(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

document.getElementById('product-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const sellingPrice = parseFloat(document.getElementById('selling-price').value);

  if (productName && sellingPrice) {
    const newProduct = { name: productName, price: sellingPrice };
    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      await displayProducts();

      // Clear form inputs
      document.getElementById('product-name').value = '';
      document.getElementById('selling-price').value = '';
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }
});

// Display initial products and total when the page loads
displayProducts();
