import { defineStore } from "pinia";

const useCityStore = defineStore("cityStore", {
  state: () => ({
    cities: ["上海", "广州", "南京"],
  }),
  actions: {
    addOneCityAction(newCity) {
      this.cities.push(newCity);
    },
  },
});

export default useCityStore;
