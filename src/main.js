import Vue from "vue";
import App from "./App.vue";
import BaseCard from "@/components/BaseCard.vue";

Vue.config.productionTip = false;

Vue.component("BaseCard", BaseCard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
