const items = [
  { id: 1, title: "Sake Nigiri (Lachs)", price: "4,50 €" },
  { id: 2, title: "Maguro Nigiri (Thunfisch)", price: "5,00 €" },
  { id: 3, title: "Ebi Nigiri (Garnele)", price: "4,80 €" },
  { id: 4, title: "Avocado Nigiri", price: "3,80 €" },
  { id: 5, title: "Sake Maki", price: "5,20 €" },
  { id: 6, title: "Tekka Maki (Thunfisch)", price: "5,80 €" },
  { id: 7, title: "Kappa Maki (Gurke)", price: "4,00 €" },
  { id: 8, title: "Avocado Maki", price: "4,20 €" },
  { id: 9, title: "California Inside-Out", price: "8,50 €" },
  { id: 10, title: "Salmon Inside-Out", price: "9,00 €" },
  { id: 11, title: "Spicy Tuna Roll", price: "9,50 €" },
  { id: 12, title: "Veggie Inside-Out", price: "7,80 €" },
  { id: 13, title: "Dragon Special Roll", price: "13,50 €" },
  { id: 14, title: "Crunchy Chicken Roll", price: "10,50 €" },
  { id: 15, title: "Ebi Tempura Roll", price: "11,00 €" },
  { id: 16, title: "Sake Sashimi (Lachs)", price: "12,00 €" },
  { id: 17, title: "Maguro Sashimi (Thunfisch)", price: "14,00 €" },
  { id: 18, title: "Edamame", price: "4,50 €" },
  { id: 19, title: "Gyoza (5 Stück)", price: "5,50 €" },
  { id: 20, title: "Miso Suppe", price: "3,50 €" },
];

const itemContainer = document.getElementById("itemsContainer");

items.forEach((item) => {
  itemContainer.innerHTML += `
    <button class="card"  onclick="alert('Ausgewählt: ${item.title}')">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
    </button>
  `;
});
