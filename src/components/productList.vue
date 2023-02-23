<template>
  <div class="card" v-for="item in products" :key="item.id">
    <img
      :src="require('@/assets/img/' + item.img)"
      alt=""
      class="card__image"
    />
    <h2 class="card__title">{{ item.name }}</h2>
    <span class="card__info">{{ item.info }}</span>
    <div class="card__wrapper">
      <button
        class="card__button"
        @click="add(item.id)"
        v-if="!inCart(item.id)"
      >
        <span class="card__click">В корзину</span>
        <img src="@/assets/img/card-basket.png" alt="" class="card__basket" />
      </button>
      <template v-else>
        <button class="item__button minus" @click="decrement(item.id)">
          -
        </button>
        <span class="item__count">{{ one(item.id).cnt }}</span>
        <button
          class="item__button item__plus plus"
          @click="increment(item.id)"
        >
          +
        </button>
      </template>
      <span class="card__price">{{ item.cost + "₽" }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {},
  methods: {
    ...mapActions("cart", ["add", "increment", "decrement"]),
  },
  computed: {
    ...mapGetters("products", { products: "all" }),
    ...mapGetters("cart", {
      cartEmpty: "cartEmpty",
      cart: "itemsDetailed",
      all: "all",
      one: "one",
      inCart: "inCart",
      getCnt: "getCnt",
    }),
  },
};
</script>
