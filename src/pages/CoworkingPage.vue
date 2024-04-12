<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { register } from "swiper/element/bundle";

import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Booking from "@/components/Booking.vue";
import AdSlider from "@/components/Advertising/AdSlider.vue";
import CoworkingPageTarif from "@/components/CoworkingPage/CoworkingPageTarif.vue";
import CoworkingContacts from "@/components/CoworkingPage/CoworkingContacts.vue";
import Reviews from "@/components/CoworkingPage/Reviews.vue";
import ClosestCoworkings from "@/components/CoworkingPage/ClosestCoworkings.vue";
import CoworkingFastBook from "@/components/CoworkingPage/CoworkingFastBook.vue";
import ReservationForm from "@/components/CoworkingPage/ReservationForm.vue";
import Feedback from "@/components/CoworkingPage/Feedback.vue";
import CoworkingGallery from "@/components/CoworkingPage/CoworkingGallery.vue";

register()

const isModalOpen = ref(false);
const isFeedbackOpen = ref(false);
const isPhotosOpen = ref(false);
const isDesktop = ref(window.innerWidth > 850);

const handleResize = () => {
    isDesktop.value = window.innerWidth > 850;
};
onMounted(() => {
    window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});

const images = ref([  
  '/coworking-5.jpg',
  '/coworking-3.jpg',
  '/coworking-2.jpg',
  '/coworking-4.jpg',
  '/coworking-1.jpg',
  '/coworking-2.jpg',
  '/coworking-3.jpg',
  '/coworking-4.jpg',
  '/coworking-5.jpg',
  '/coworking-2.jpg',
  '/coworking-3.jpg',
  '/coworking-4.jpg',
  '/coworking-5.jpg',
]);

const ImagesOnPage = computed(()=> images.value.slice(0, 5));
const handleClick = (index) => {
  if (index === ImagesOnPage.value.length - 1) {
    openGallery()
  }
};


const openModalForm = () => {
  isModalOpen.value = true;
  document.querySelector("body").classList.add("disabled");
  document.querySelector("body").style.width = `${document.documentElement.clientWidth}px`;
}
const closeModalForm = () => {
  isModalOpen.value = false;
  document.querySelector("body").classList.remove("disabled");
  document.querySelector("body").style.width = `auto`;
}
const openFeedback = () => {
  isFeedbackOpen.value = true
  document.querySelector("body").classList.add("disabled");
  document.querySelector("body").style.width = `${document.documentElement.clientWidth}px`;
}
const closeFeedback = () => {
  isFeedbackOpen.value = false;
  document.querySelector("body").classList.remove("disabled");
  document.querySelector("body").style.width = `auto`;
}
const openGallery = () => {
  isPhotosOpen.value = true
  document.querySelector("body").classList.add("disabled");
  document.querySelector("body").style.width = `${document.documentElement.clientWidth}px`;
}

const closeGallery = () => {
  isPhotosOpen.value = false;
  document.querySelector("body").classList.remove("disabled");
  document.querySelector("body").style.width = `auto`;
}

onMounted(() => {
  const swiperElement = document.querySelector('#coworking-page__swiper');
  if (swiperElement) {
    const shadowRoot = swiperElement.shadowRoot;
    if (shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `           
        .swiper-pagination-bullets .swiper-pagination-bullet {
          background: white;
        }            
      `;
      shadowRoot.appendChild(style);
    }
  }
});
</script>

<template>
  <Breadcrumbs />  
  <section class="page">
    <div class="container">
      <div class="page__container">
        <div class="page__content">
          <div class="coworking__title-wrapper">
            <h1 class="page__title">BLOCKS Лихоборы</h1>
            <img src="/popular.png" alt="" width="168" />
          </div>

          <div class="page__content-images" v-if="isDesktop">
            <div class="coworking-page__image-wrapper"              
            v-for="(item, index) in ImagesOnPage" 
            :key="index" 
            @click="handleClick(index)">
              <img :src="item" alt="" />
            </div>            
          </div>
          <div class="page__content-images-swiper" v-else>
            <swiper-container slides-per-view="1" pagination="true" loop="true" space-between="10" id="coworking-page__swiper">
              <swiper-slide class="coworking-page__slider"
                v-for="(item, index) in images" :key="index" >
                <img :src="item" alt="" />
              </swiper-slide>
            </swiper-container>                    
          </div>

          <h3 class="page__subtitle">Описание</h3>

          <h4>
            Коворкинг, гибкий и смарт-офис. Готовые умные решения для бизнеса
          </h4>

          <div class="coworking__description">
            Наши переговорные комнаты и конференц-зал предлагают идеальное
            пространство для ваших деловых мероприятий. Будь то важные встречи,
            презентации, бизнес-тренинги или конференции, наши залы и
            переговорные комнаты обеспечат комфорт и профессионализм, чтобы ваше
            событие прошло успешно. Стандарты сети коворкингов BLOKS
            обеспечивают международный уровень обслуживания клиентов. Сделайте
            ваше следующее деловое мероприятие максимально продуктивным!
          </div>

          <ul class="coworking-include">
            <li class="coworking-include__item">38-дюймовый TV</li>
            <li class="coworking-include__item"><span></span></li>
            <li class="coworking-include__item">Wi-Fi 1 Гигабит</li>
            <li class="coworking-include__item"><span></span></li>
            <li class="coworking-include__item">Флипчарт</li>
            <li class="coworking-include__item"><span></span></li>
            <li class="coworking-include__item">Флипчарт</li>
            <li class="coworking-include__item"><span></span></li>
            <li class="coworking-include__item">Принтер</li>
          </ul>

          <div class="tarifs">
            <h2 class="section__title">Тарифы</h2>

            <div class="tarifs__buttons">
              <button class="tarif-tab active">Все</button>
              <button class="tarif-tab">Переговорная</button>
              <button class="tarif-tab">Конференц зал</button>
              <button class="tarif-tab">Рабочее место</button>
            </div>
            <div class="tarifs__cards">
              <CoworkingPageTarif :openModalForm="openModalForm"/>
              <CoworkingPageTarif :openModalForm="openModalForm"/>
              <CoworkingPageTarif :openModalForm="openModalForm"/>
              <CoworkingPageTarif :openModalForm="openModalForm"/>
              <CoworkingPageTarif :openModalForm="openModalForm"/>
              <CoworkingPageTarif :openModalForm="openModalForm"/>
            </div>
          </div>
        </div>
        <div class="page__ad">
          <CoworkingFastBook :openModal="openModalForm"/>
          <AdSlider />
          <AdSlider />
          <AdSlider />
        </div>
      </div>
      <!-- контакты -->
      <CoworkingContacts />

     <Booking />

      <!-- отзывы -->
      <Reviews :openFeedback="openFeedback"/>
      <!-- ближайшие коворкинги -->
      <ClosestCoworkings />
    </div>
    <!-- Модальные окна -->
    <ReservationForm :isModalOpen="isModalOpen" :closeModalForm="closeModalForm" />
    <Feedback :isModalOpen="isFeedbackOpen" :closeModalForm="closeFeedback"/>
    <CoworkingGallery :isPhotosOpen="isPhotosOpen" :closeModal="closeGallery" :pictures="images"/>
  </section>
</template>

<style lang="scss">
.coworking__title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .btn {
    position: relative;
    display: flex;
    gap: 5px;
    padding: 6px 19px;
    font-size: 12px;
    border: none;
    background-image: linear-gradient(
      90deg,
      rgba(22, 36, 236, 0.8),
      rgb(119, 127, 237)
    );
    background-clip: text;
    color: transparent;

    &._blue-gradient {
      &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        background: linear-gradient(
          90deg,
          rgba(22, 36, 236, 1),
          rgba(119, 127, 237, 1)
        );
        border-radius: 8px;
      }

      &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        z-index: -1;
        background: white;
        border-radius: 7px;
      }
    }

    &:hover {
      background-color: var(--white);
    }
  }
}

.page__content-images {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 10px;
  margin-bottom: 25px;
}
.page__content-images-swiper {
  max-width: 800px;
  width: calc(100vw - 50px);
  margin-bottom: 20px;
}

.coworking-page__image-wrapper {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  &:first-child {
    grid-column: 1/6;
    grid-row: 1/3;
  }

  &:nth-child(2) {
    grid-column: 6/8;
  }

  &:nth-child(3) {
    grid-column: 8/10;
  }

  &:nth-child(4) {
    grid-column: 6/8;
  }

  &:nth-child(5) {
    grid-column: 8/10;
    position: relative;

    &::before {
      content: "Смотреть больше";
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      font-size: 16px;
      color: var(--white);
      text-align: center;
    }
  }
}
.coworking-page__slider {
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
.page__subtitle {
  font-size: 20px;
  line-height: 120%;
  font-weight: 500;
  margin-bottom: 15px;
}

h4 {
  font-weight: 500;
  line-height: 155%;
  margin-bottom: 11px;
  font-size: 16px;
}

.coworking__description {
  color: var(--gray-text);
  padding-bottom: 20px;
  margin-bottom: 20px;
  line-height: 140%;
  border-bottom: 1px solid var(--border);
  font-size: 16px;
}
.coworking-include {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  color: var(--gray-text);
}

.coworking-include__item {
  text-align: center;
  font-size: 16px;

  span {
    display: inline-block;
    height: 20px;
    width: 1px;
    background-color: var(--border);
  }
}

.section__title {
  margin-bottom: 20px;
}

.tarifs {
  margin-bottom: clamp(60px, 12vw, 100px);
}
.tarifs__buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.tarif-tab {
  padding: 10px 30px;
  border: none;
  border-radius: 18px;
  font-size: 16px;
  background-color: #eff5fb;
  color: var(--main-text);
  width: fit-content;
  margin-bottom: 5px;
  transition: 0.2s;

  &.active {
    background-color: var(--main-text);
    color: var(--white);
  }

  &:hover {
    color: var(--main-blue);
  }
}



@media (max-width: 1150px) {
  .page__ad {
    grid-row: 1/2;
  }
  .page__ad .ad-slider {
    display: none;
  }
  .coworking__title-wrapper {
    display: none;
  }
  .page__pagination {
    margin-top: 20px;
  }
}


@media (max-width: 815px) {
  .page__content-images {
    display: flex;
  }
  .coworking-page__image-wrapper {
    display: none;
    
    &:first-child {
      display: block;
      width: 100%;
    }
  }
}
@media (max-width: 550px) {
  .tarif-tab {
    &:nth-child(2) {
      flex: 60%;
    }
  }
}
</style>
