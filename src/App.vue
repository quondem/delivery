<template>
  <div class="wrap">
    <header class="header">
      <div class="container">
        <div class="header-wrapper">
          <button class="header__logo">
            <img src="@/assets/img/logo.svg" alt="Icon: logo" />
            <span class="logo__text">Delivery<br />Food</span>
          </button>
          <input
            type="text"
            placeholder="Адрес доставки"
            class="header__input"
          />
          <div class="header__right">
            <button class="header__user-button">
              <img
                class="header__button__logo"
                src="@/assets/img/user.svg"
                alt=""
              />
              Войти
            </button>
            <button
              type="button"
              class="header__container-button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <img
                class="header__button-logo"
                src="@/assets/img/container.svg"
                alt=""
                srcset=""
              />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="section">
        <div class="container">
          <div class="section__header">
            <span class="section__name">Тануки</span>
            <div class="section__wrapper">
              <div class="section__rating">
                <img
                  src="@/assets/img/star.svg"
                  alt="Icon: star"
                  class="section__star"
                />
                <span class="section__rate">4.5</span>
              </div>
              <div class="section__info">
                <span class="section__average">От 900 ₽</span>
                <img
                  src="@/assets/img/ellipse.svg"
                  alt=""
                  class="section__dot"
                />
                <span class="section__dishes">Пицца и суши</span>
              </div>
            </div>
          </div>
          <div class="section__bottom">
            <product-list />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer__logo">
          <img src="@/assets/img/logo.svg" alt="Icon: logo" />
          <span class="logo__text">Delivery<br />Food</span>
        </div>
        <ul class="footer-list">
          <li class="footer-list__item">Ресторанам</li>
          <li class="footer-list__item">Курьерам</li>
          <li class="footer-list__item">Пресс-центр</li>
          <li class="footer-list__item">Контакты</li>
        </ul>
        <div class="footer-right">
          <img
            class="footer-right__instagram"
            src="@/assets/img/instagram.svg"
            alt="Icon: instagram"
          />
          <img
            class="footer-right__facebook"
            src="@/assets/img/facebook.svg"
            alt="Icon: facebook"
          />
          <img
            class="footer-right__vk"
            src="@/assets/img/vk.svg"
            alt="Icon: vk"
          />
        </div>
      </div>
    </div>
  </footer>
  <div
    class="modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content basket">
        <div class="basket__wrapper">
          <h2 class="basket__title">Корзина</h2>
          <img
            src="@/assets/img/close.svg"
            alt=""
            class="basket__close"
            data-dismiss="modal"
          />
        </div>
        <span class="basket__empty" v-if="cartEmpty">Корзина пуста!</span>
        <div class="basket__items">
          <div class="basket__container">
            <div class="item-basket" v-for="item in cart" :key="item.id">
              <span class="item__name">{{ item.name }}</span>
              <span class="item__cost">{{ item.cost * item.cnt }}</span>
              <button class="item__button minus" @click="decrement(item.id)">
                -
              </button>
              <span class="item__count">{{ item.cnt }}</span>
              <button
                class="item__button item__plus plus"
                @click="increment(item.id)"
              >
                +
              </button>
              <img src="@/assets/img/line.svg" alt="" class="item__line" />
            </div>
          </div>
          <div class="basket__order">
            <span class="basket__cost" v-if="!cartEmpty">{{
              total + "₽"
            }}</span>
            <button class="basket__checkout" v-if="!cartEmpty">
              Оформить заказ
            </button>
            <button class="basket__out" data-dismiss="modal">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productList from "@/components/productList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    productList,
  },
  methods: {
    ...mapActions("cart", ["add", "increment", "decrement"]),
  },
  computed: {
    ...mapGetters("products", { products: "all" }),
    ...mapGetters("cart", {
      cartEmpty: "cartEmpty",
      cart: "itemsDetailed",
      all: "all",
      total: "total",
    }),
  },
};
</script>
