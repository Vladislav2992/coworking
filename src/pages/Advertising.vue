<script setup>
import { onMounted } from 'vue';
import { register } from "swiper/element/bundle";
import AdSections from "@/components/Advertising/AdSections.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import AdOffers from "@/components/Advertising/AdOffers.vue";
import LeaveAplication from "@/components/LeaveAplication.vue";

register();

const slides = [
  '/logos/logo-1.png',
  '/logos/logo-2.png',
  '/logos/logo-3.png',
  '/logos/logo-5.png',
  '/logos/logo-6.png',
  '/logos/logo-4.png',
  '/logos/logo-8.png',
  '/logos/logo-7.png',
]

onMounted(() => {
  const swiperElement = document.querySelector('#advertising__swiper');
  if (swiperElement) {
    const shadowRoot = swiperElement.shadowRoot;
    if (shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `           
        .swiper-wrapper {
          align-items: center;
        }            
      `;
      shadowRoot.appendChild(style);
    }
  }
});
</script>
<template>
  <Breadcrumbs />

  <section class="advertising">
    <div class="container">
      <div class="ad__hero">
        <h1 class="ad__title">
          Реклама <span class="title__logo">Place²</span>
        </h1>
        <p class="ad__description">
          Партнерская программа <br />
          для развития ваших пространств
        </p>
        <button class="btn btn_gradient">Оставить заявку</button>
      </div>
      <div class="ad__graphics">
        <div class="graphic">
          <div class="text">
            <h3>50+ тысяч посетителей сайта</h3>
            <span>среднемесячно</span>
          </div>
          <img src="/graphics/map-russia.png" alt="" />
        </div>
        <div class="graphic">
          <h3>Высокая тематическая релевантность</h3>
          <div class="radial-graphic__wrapper">
            <div class="graphic-legend">
              <div class="radial-section">
                <h4>Соц. сети и другое</h4>
                <span class="_social"></span>
                <p class="percents">1.3%</p>
              </div>
              <div class="radial-section _direct">
                <h4>Прямые переходы</h4>
                <span class="_direct"></span>
                <p class="percents">7.6%</p>
              </div>
              <div class="radial-section _search">
                <h4>Посетителей из поиска</h4>
                <span class="_search"></span>
                <p class="percents">91.1%</p>
              </div>
            </div>
            <svg class="graphic-radial" width="134" height="134">
              <circle stroke="#646EFF" stroke-width="14" cx="67" cy="67" r="59" fill="transparent" ></circle>
              <circle stroke="#CDD0FF" stroke-width="14" cx="67" cy="67" r="59" fill="transparent" stroke-dasharray="330" ></circle>
              <circle stroke="#8087F0" stroke-width="24" cx="67" cy="67" r="54" fill="transparent" stroke-dasharray="230" ></circle>
            </svg>
          </div>
        </div>
        <div class="graphic">
          <div class="graphic__inner">
            <h3>Рост продаж</h3>
            <div class="graphic-wrapper">
              <div class="legend">
                <span>15%</span>
                <span>10%</span>
                <span>5%</span>
              </div>
              <img src="/graphics/graphic-1.png" alt="" />
            </div>
          </div>
          <div class="graphic__inner">
            <h3>Конверсия на сайте <span>20%</span></h3>
            <img src="/graphics/graphic-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="advertising__swiper">
    <swiper-container 
    slides-per-view="3" 
    autoplay-delay="2200"
    speed="2000" 
    space-between="71" 
    loop="true" 
    :breakpoints="{
      768: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 7,
      },
    }"
    id="advertising__swiper">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="advertising__slide"><img class="swiper-logo-img" :src="slide" alt="" /></div>
      </swiper-slide>     
    </swiper-container>
  </div>

  <AdSections />
  <AdOffers />
  <LeaveAplication />
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  align-items: center;
}
.ad__hero {
  .btn {
    width: 100%;
    max-width: 247px;
    font-size: 16px;

    &:hover {
      border: 1px solid var(--main-text);
    }
  }
}
.ad__title {
  font-size: clamp(32px, 5vw, 48px);
  color: var(--main-text);
  margin-bottom: 10px;
  line-height: 120%;
  font-weight: 700;
}
.title__logo {
  background-image: linear-gradient(90deg, #1624ec, #777fed);
  background-clip: text;
  color: transparent;
}
.ad__description {
  font-size: clamp(16px, 3vw, 24px);
  line-height: 120%;
  font-weight: 600;
  margin-bottom: 50px;
}

.ad__graphics {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: 244px;
  gap: 10px 30px;
  margin-left: 62px;
}
.graphic {
  border: 1px solid var(--border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 28px 20px;

  &:nth-child(1) {
    flex-direction: row;

    img {
      width: 173px;
    }
  }
  &:nth-child(2) {
    align-items: flex-start;
    justify-content: space-between;
  }
  &:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
}
.graphic__inner {
  width: 100%;
  margin-top: 50px;
  padding-bottom: 57px;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    border-bottom: 1px solid var(--border);
    margin-top: 34px;
  }
  &:nth-child(2) {
    padding-bottom: 22px;
  }
}
.graphic-radial {
  transform: rotate(-90deg);
}
.radial-graphic__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.graphic-wrapper {
  display: flex;

  img {
    width: 100%;
  }
}
.legend {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  font-size: 10px;
  color: var(--gray-text);
}
h3 {
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 600;
  margin-bottom: 15px;
}

.radial-section {
  margin-bottom: 9px;
  position: relative;

  h4 {
    font-size: 14px;
    color: var(--gray-text);
    margin: 0;
  }

  span {
    display: block;
    width: 47px;
    height: 9px;
    border-radius: 5px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: -100%;
      bottom: 2px;
    }

    &._social {
      background-color: #646eff;

      &::after {
        background: url("../assets/images/line-long.svg") no-repeat;
        width: 238px;
        height: 62px;
        right: -241px;
        bottom: 1px;
      }
    }
    &._direct {
      background-color: #cdd0ff;

      &::after {
        background: url("../assets/images/line-midle.svg") no-repeat;
        width: 155px;
        height: 45px;
        right: -159px;
        bottom: 1px;
      }
    }
    &._search {
      background-color: #8087f0;

      &::after {
        background: url("../assets/images/line-short.svg") no-repeat;
        width: 166px;
        height: 21px;
        right: -170px;
        bottom: 1px;
      }
    }
  }
}

.percents {
  position: absolute;
  color: var(--gray-text);
  font-size: 10px;
}

.radial-section:nth-child(1) .percents {
  top: -28px;
  right: -92px;
}
.radial-section:nth-child(2) .percents {
  top: 10px;
  right: -6px;
}
.radial-section:nth-child(3) .percents {
  top: 10px;
  right: -36px;
}

.advertising__slide {
  filter: grayscale(1);
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover {
    filter: none;
  }
}
.advertising__swiper {
  margin-bottom: clamp(60px, 45vw, 100px);
}
#advertising__swiper {
  .swiper {
    align-items: center;
  }
}

@media (max-width: 1080px) {
  .ad__graphics {
    margin-left: 0;
  }
}
@media (max-width: 950px) {
  .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
@media (max-width: 750px) {
  .ad__graphics {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .ad__description {
    margin-bottom: 40px;
  }
  .graphic:nth-child(3) {
    grid-column: auto;
    grid-row: auto;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .graphic__inner {
    margin: 0;
    padding: 0;

    &:nth-child(1) {
      margin: 0;
      border: none;
    }

    &:nth-child(2) {
      padding: 0;
    }
  }

  .graphic:nth-child(1) img {
    width: auto;
    max-width: 250px;
  }
}
@media (max-width: 550px) {
  .graphic:nth-child(3) {
    flex-direction: column;
    gap: 40px;
  }
}
@media (max-width: 500px) {
  .graphic {
    padding: 16px 12px;
  }
  .ad__hero .btn {
    max-width: 100%;
  }
  .graphic:nth-child(1) img {
    max-width: 150px;
  }
}
</style>
