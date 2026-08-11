const cart = [];
var minimumOrder = 20;
var sumValue = 0;

const items = [
  { id: 1, title: "Sake Nigiri (Lachs)", price: "4.50" },
  { id: 2, title: "Maguro Nigiri (Thunfisch)", price: "5.00" },
  { id: 3, title: "Ebi Nigiri (Garnele)", price: "4.80" },
  { id: 4, title: "Avocado Nigiri", price: "3.80" },
  { id: 5, title: "Sake Maki", price: "5.20" },
  { id: 6, title: "Tekka Maki (Thunfisch)", price: "5.80" },
  { id: 7, title: "Kappa Maki (Gurke)", price: "4.00" },
  { id: 8, title: "Avocado Maki", price: "4.20" },
  { id: 9, title: "California Inside-Out", price: "8.50" },
  { id: 10, title: "Salmon Inside-Out", price: "9.00" },
  { id: 11, title: "Spicy Tuna Roll", price: "9.50" },
  { id: 12, title: "Veggie Inside-Out", price: "7.80" },
  { id: 13, title: "Dragon Special Roll", price: "13.50" },
  { id: 14, title: "Crunchy Chicken Roll", price: "10.50" },
  { id: 15, title: "Ebi Tempura Roll", price: "11.00" },
  { id: 16, title: "Sake Sashimi (Lachs)", price: "12.00" },
  { id: 17, title: "Maguro Sashimi (Thunfisch)", price: "14.00" },
  { id: 18, title: "Edamame", price: "4.50" },
  { id: 19, title: "Gyoza (5 Stück)", price: "5.50" },
  { id: 20, title: "Miso Suppe", price: "3.50" },
  { id: 21, title: "Wakame Salat (Seealgen)", price: "4.80" },
  { id: 22, title: "Mini Spring Rolls (6 Stück)", price: "4.50" },
  { id: 23, title: "Yakitori Spieße (3 Stück)", price: "5.80" },
  { id: 24, title: "Unagi Nigiri (Flussaal)", price: "5.50" },
  { id: 25, title: "Inari Nigiri (Tofutasche)", price: "3.80" },
  { id: 26, title: "Oshinko Maki (Rettich)", price: "4.00" },
  { id: 27, title: "Tamago Maki (Omelett)", price: "4.20" },
  { id: 28, title: "Rainbow Roll", price: "13.00" },
  { id: 29, title: "Crunchy Veggie Roll", price: "9.50" },
  { id: 30, title: "Sashimi Mix (Kleine Platte)", price: "16.50" },
  { id: 31, title: "Sake Don (Lachs auf Reis)", price: "14.50" },
  { id: 32, title: "Chicken Teriyaki Bowl", price: "12.50" },
  { id: 33, title: "Tofu Teriyaki Bowl", price: "11.00" },
  { id: 34, title: "Mochi Eis (2 Stück)", price: "4.20" },
];

const itemContainer = document.getElementById("itemsContainer");
const cartContainer = document.getElementById("sideBarCartList");
const sumEntry = document.getElementById("sumEntry");
const dialog = document.getElementById("messageBox");

function addToCart(item) {
  console.log(item);

  console.log("addToListStart");

  const selectedItem = items.find((i) => i.id === item.id);

  console.log(selectedItem);
  if (selectedItem == undefined) {
    alert("Item not Included");
    return;
  }

  console.log("if Check start");

  const existingCartItem = cart.find(
    (entry) => entry.item.id === selectedItem.id,
  );

  if (existingCartItem) {
    existingCartItem.menge += 1;
  } else {
    cart.push({
      item: selectedItem,
      menge: 1,
    });
  }

  updateCartContainer();
}

function deleteFromCart(item) {
  const selectedItem = cart.find((i) => i.item.id == item.id);

  if (selectedItem.menge === 1) {
    let index = cart.findIndex(
      (entry) => entry.item.id === selectedItem.item.id,
    );

    if (index !== -1) {
      cart.splice(index, 1);
    }
  } else {
    selectedItem.menge = selectedItem.menge - 1;
  }

  updateCartContainer();
}

function CalculateSumOfAll() {}

function updateCartContainer() {
  sumValue = 0;
  cartContainer.innerHTML = "";
  console.log("cart erased");

  cart.forEach(({ item, menge }) => {
    const positionSum = menge * Number(item.price);
    cartContainer.innerHTML += `
    <div class="cartItem">
      <span class="cartQty">${menge}x </span>  
      <span class="cartTitle">${item.title} (${item.price} €)</span>
      <span class="positionSum">${positionSum.toFixed(2).replace(".", ",")} €</span>
      <button class="deleteFromCartBtn" onclick='deleteFromCart(${JSON.stringify(item)})'>X</button>
    </div>
`;
    // <span class="cartPrice">(${item.price} €)</span>
    sumValue = sumValue + positionSum;
  });

  sumEntry.innerText = sumValue.toFixed(2).replace(".", ",") + " €";
  console.log("card updated");
}

function eraseAll() {
  cart.length = 0;
  cartContainer.innerHTML = "";
  sumEntry.innerText = "";
  sumValue = 0;
}

function SetMessageInfo(headerText, messageText, canEraseAll = true) {
  //@Liam: Let wird nach der Klammer aufgeräumt, korrekt?
  let headerEl = dialog.querySelector("#mbHeader");
  headerEl.innerText = headerText;
  let messageEl = dialog.querySelector("#mbMessage");
  messageEl.innerText = messageText;

  let okBtn = dialog.querySelector(".dialogOkBtn");
  okBtn.addEventListener(
    "click",
    () => {
      if (canEraseAll) {
        eraseAll();
      }

      dialog.close();
      // okBtn.removeEventListener("click"); Da ich zu faul bin der Funktion einen namen zu geben und es eh hübscher ist: once:true :)
    },
    { once: true },
  );
}

function eatHere() {
  SetMessageInfo(
    "Zum hier essen",
    `Bestellung abgeschlossen. Gesamtbetrag: ${sumValue.toFixed(2).replace(".", ",")} €. Guten Appetit!`,
  );
  dialog.showModal();
}

function deliverCart() {
  if (sumValue > 20) {
    SetMessageInfo(
      "Lieferung",
      `Bestellung abgeschlossen. Gesamtbetrag: ${sumValue.toFixed(2).replace(".", ",")} €. DüsDüs!`,
    );
    dialog.showModal();
  } else {
    SetMessageInfo(
      "Besellmenge zu gering",
      `Leider konnte die Bestellung nicht abgeschlossen werden. Die Mindestbestellmenge beträgt ${minimumOrder} €. 
      Ihr Betrag: ${sumValue.toFixed(2).replace(".", ",")} €. 
      
      Kein DüsDüs :( `,
      false,
    );
    dialog.showModal();
  }
}

items.forEach((item) => {
  itemContainer.innerHTML += `
    <button class="card" onclick='addToCart(${JSON.stringify(item)})'>
      <h3>${item.title}</h3>
      <p class="cardPrice">${item.price} €</p>
    </button>
  `;
});
