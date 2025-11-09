async function loadProducts() {
  const res = await fetch('http://localhost:5000/products');
  const products = await res.json();

  const container = document.getElementById('products');
  container.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
    </div>
  `).join('');
}

loadProducts();
