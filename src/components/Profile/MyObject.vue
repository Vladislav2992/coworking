<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { register } from "swiper/element/bundle";
import IncludeButtons from "../CatalogPage/IncludeButtons.vue";
register()
const isDetailsOpen = ref(false)
const isDesktop = ref(window.innerWidth > 850);


defineProps({
  removeMyObject: Function,
  images: Array,
  id: Number
})


const handleResize = () => {
    isDesktop.value = window.innerWidth > 850;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});



const seeDetails = () => {
  if (isDetailsOpen.value === false) {    
      isDetailsOpen.value = true
      
      document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("details")) {
              isDetailsOpen.value = false;
            }
        });
  } else {
    isDetailsOpen.value = false
  }
}

onMounted(() => {
  const swiperElement = document.querySelector('#my-object-swiper');
  if (swiperElement) {
    const shadowRoot = swiperElement.shadowRoot;
    if (shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `           
      .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
        background: white;
      }           
      `;
      shadowRoot.appendChild(style);
    }
  }
});
</script>
<template>
    <div class="object" :id="id">
      <div class="photos" v-if="isDesktop">
        <div class="img-wrapper" v-for="(photo, index) in images" :key="index">
          <img :src="photo" alt="" />
        </div>        
      </div>
      <div class="my-object-swiper" v-else>
        <swiper-container slides-per-view="1" space-between="5" id="my-object-swiper"  pagination="true">
          <swiper-slide class="img-wrapper" v-for="(photo, index) in images" :key="index">
            <img :src="photo" alt="" />
          </swiper-slide>
        </swiper-container>
      </div>
      <div class="object__info">
        <div class="info__header">
          <div class="">
            <h2 class="object__name">HEADWAY</h2>
            <div class="address">Москва, 3-й Нижнелихоборский проезд д.54</div>
          </div>
          <div class="details">
            <button class="details-btn" @click.stop="seeDetails">...</button>
            <div :class="{'details__inner': true, 'active' : isDetailsOpen}">
              <ul>
                <li><RouterLink to="/editing">Редактировать</RouterLink></li>
                <li><a href="#!">Выбрать тариф</a></li>
                <li><a href="#!">Мой тариф</a></li>
                <li><button @click="removeMyObject(id)">Удалить</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="info__body">
          <div class="info__wrapper">
            <div class="info">
              <span>Цена</span> от 1000₽/сутки, 20 000₽/месяц
            </div>
            <div class="info"><span>Тарифов</span> - 5</div>
            <div class="info"><span>График</span> 10:00-22:00 — Ежедневно</div>
            <div class="info"><span>Тип коворкинга</span> IT специалисты</div>
            <div class="rating">
              <div class="stars">
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
              </div>
              <a href="#!" class="reviews">16 отзывов</a>
            </div>
          </div>

        <div class="info__section">
          <div class="contacts">
            <p class="mail"><a href="#!">blocks@gmail.com</a></p>
            <p class="phone"><a href="tel:">+7 988 654 12 56</a></p>
            <p class="web-site"><a href="#!">blockclub.ru</a></p>
          </div>

          <div class="views">
            <div class="view-wrapper">
              <img src="/eye.svg" alt="" />
              <span>150</span>
            </div>
            <div class="view-wrapper">
              <img src="/heart-1.svg" alt="" />
              <span>32</span>
            </div>
            <div class="view-wrapper">
              <img src="/person.svg" alt="" />
              <span>20</span>
            </div>
          </div>
        </div>

          <IncludeButtons />
        </div>
      </div>
      <div class="description">
        <h3 class="description__title">
          Коворкинг, гибкий и смарт-офис. Готовые умные решения для бизнеса
        </h3>
        <p>
          Наши переговорные комнаты и конференц-зал предлагают идеальное
          пространство для ваших деловых мероприятий. Будь то важные встречи,
          презентации, бизнес-тренинги или конференции, наши залы и переговорные
          комнаты обеспечат комфорт и профессионализм, чтобы ваше событие прошло
          успешно. Стандарты сети коворкингов BLOKS обеспечивают международный
          уровень обслуживания клиентов. Сделайте ваше следующее деловое
          мероприятие максимально продуктивным!
        </p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.object {
  display: grid;
  grid-template-columns: 3fr 7fr;
  padding: 30px 20px;
  gap: 30px 5px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 20px;

  .include {
    grid-column: 1/-1;
  }
}
.photos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-right: 15px;
}
.img-wrapper {
  border-radius: 4px;
  overflow: hidden;
  height: auto;

  &:first-child {
    grid-column: 1/-1;
    border-radius: 8px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.description {
  grid-column: 1/-1;
  p {
    color: var(--gray-text);
    font-size: 15px;
  }
}
.description__title {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 11px;
}
.info__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.object__name {
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
.address {
  font-size: 10px;
  color: var(--gray-text);
}
.details-btn {
  border: 1px solid var(--main-text);
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-color: var(--white);
  color: var(--main-text);
  padding-bottom: 7px;
  font-weight: 700;
}
.info__body {
  display: grid;
  grid-template-columns: 1.3fr 1.5fr;
}
.info {
  font-size: 14px;
  margin-bottom: 9px;

  span {
    color: var(--gray-text);
  }
}
.info__section {
  display: flex;
}
.rating {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
}
.stars {
  display: flex;
  gap: 3px;
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 9px;

  p {
    position: relative;
    display: inline-block;
    color: var(--main-blue);
    padding-left: 28px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 3px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
    }

    &.address:before {
      background-image: url("../../assets/images/location-gray.svg");
    }
    &.mail:before {
      background-image: url("../../assets/images/mail-gray.svg");
    }
    &.phone:before {
      background-image: url("../../assets/images/phone-gray.svg");
    }
    &.web-site:before {
      background-image: url("../../assets/images/web-gray.svg");
    }
    &.work-hours:before {
      background-image: url("../../assets/images/watch-gray.svg");
    }
  }
}
.views {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;

  img {
    width: 14px;
  }
}

.view-wrapper {
  display: flex;
  gap: 7px;
  align-items: center;
}
.details {
  position: relative;
}
.details__inner {
  position: absolute;
  right: 0;
  top: 80%;
  width: 153px;  
  background-color: var(--white);
  border-radius: 8px;
  padding: 20px 15px;
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .16);
  color: var(--gray-text);
  transition: transform .3s, opacity .3s;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20%); 
  z-index: 2;

  button {
    border: none;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    color: inherit;
  }

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); 
  }

  li {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--border);
    transition: color .3s;

    &:last-child {
      border: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    &:hover {
      color: var(--main-blue);
    }
  }
}
.my-object-swiper {
  max-width: 800px;
  width: calc(100vw - 76px);
}
@media(max-width: 850px) {
  .object {
    grid-template-columns: 1fr;
    padding: 15px;
  }
  .photos {
    display: none;
  }
  .object__info {
    position: relative;
    padding-top: 22px;
  }
  .rating {
    position: absolute;
    top: 0;
  }
  .info__body {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .include {
    grid-row: 2/3;
  }
  .description__title {
    font-size: 14px;
  }
  .description p {
    font-size: 14px;
  }
  .my-object > .btn {
    width: 100%;
  }
}
</style>