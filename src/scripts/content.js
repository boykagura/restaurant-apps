import { restaurantData } from "./api.js";

export class contentRestaurant extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const restaurants = await restaurantData();
      const restoItem = document.createElement("div");
      restoItem.classList.add("content-item");

      restaurants.forEach((restaurant) => {
        const restoList = document.createElement("div");
        restoList.classList.add("resto");
        restoList.innerHTML = `
          <img class="img-resto" src="${restaurant.pictureId}" alt="${restaurant.name}">
          <div class="resto-container">
            <h2>${restaurant.name}</h2>
            <p class="resto-desc">${restaurant.description}</p>
            <p class="resto-info">Rating: ${restaurant.rating}</p>
            <p class="resto-info">Kota: ${restaurant.city}</p>
          </div>
        `;
        restoItem.appendChild(restoList);
      });

      const restoList = document.createElement("div");
      restoList.classList.add("contentRestaurant");
      restoList.appendChild(restoItem);
      this.appendChild(restoList);

    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Gagal Mengupload data, silahkan coba lagi bang messi";
      this.appendChild(errorMessage);
    }
  }
}

customElements.define("content-list", contentRestaurant);