<script setup>
defineProps ({
    openModalForm: Function
})

const seeMore = (e) => {
  const details = e.target.parentNode.parentNode;
  const description = details.querySelector(".description");
  const content = details.querySelector(".tarifs__card-content");
  const includeHeight = details.querySelector(".coworking__include-wrapper");
  const include = details.querySelector(".coworcing__include");

  if (details.classList.contains("open")) {
    details.classList.remove("open");
    content.style.maxHeight = "135px";
    includeHeight.style.maxHeight = "85px";
    e.target.classList.remove("active");
  } else {
    details.classList.add("open");
    content.style.maxHeight = `${135 + description.offsetHeight}px`;
    includeHeight.style.maxHeight = `${185 + include.offsetHeight}px`;
    e.target.classList.add("active");
  }
};
</script>

<template>
  <div class="tarifs__card">
    <div class="tarifs__card-content">
      <button class="more-details" @click="seeMore">Подробнее</button>
      <div class="type">Переговорная</div>
      <h3 class="title">Переговорная комната 6 человек</h3>
      <p class="price">9 600 ₽/месяц</p>
      <div class="description">
        Светлое и уютное помещение для эффективного делового мероприятия на 25
        гостей с комфортными зона для кофе-брейка. Наш конференц-зал оформлен в
        современном стиле, сочетающем элегантность и функциональность.
        Изысканная обстановка и продуманная цветовая гамма создают
        привлекательную атмосферу, которая впечатлит ваших гостей. Конференц-зал
        предлагает различные варианты конфигурации.
      </div>
    </div>
    <div class="tarifs__card-include">
      <div class="coworking__include-wrapper">
        <div class="coworcing__include">
          <p class="include flipchart">Флипчарт</p>
          <p class="include internet">Интернет</p>
          <p class="include drinks">Вода/Чай/Кофе/Снеки</p>
          <p class="include decor">Стильное оформление</p>
          <p class="include new-furniture">Новая мебель</p>
          <p class="include light-room">Светлая комната</p>
        </div>
      </div>
      <button class="btn btn_gradient" @click="openModalForm" >Забронировать</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tarifs__card {
  padding: 20px 15px;
  border: 1px solid var(--main-blue);
  border-radius: 6px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 45px;
  margin-bottom: 15px;
  font-size: 16px;
  transition: box-shadow 0.3s;
  background-color: var(--white);

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  }
}

.tarifs__card-content {
  position: relative;
  overflow-y: clip;
  max-height: 135px;
  transition: 0.3s;
}

.more-details {
  position: absolute;
  border: none;
  background-color: transparent;
  padding: 0;
  color: var(--main-text);
  font-size: 14px;
  right: -17px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: "";
    width: 12px;
    height: 12px;
    background: url("../../assets/images/arrow-down.svg") no-repeat;
    transition: transform 0.3s;
    transform-origin: 5px 5px;
  }

  &.active:after {
    transform: rotate(180deg);
  }
}
.type {
  color: var(--gray-text);
  margin-bottom: 5px;
}

.title {
  font-weight: 600;
  margin-bottom: 15px;
}
.price {
  font-weight: 500;
  margin-bottom: 7px;
}

.description {
  line-height: 120%;
  color: var(--gray-text);
  font-size: 14px;
}
.tarifs__card-include {
  display: flex;
  flex-direction: column;

  transition: 0.3s;

  .btn {
    width: 100%;
    margin-top: auto;
    font-size: 16px;
    padding: 10px;

    &:hover {
      border: 1px solid var(--main-text);
    }
  }
}
.coworking__include-wrapper {
  overflow: hidden;
  max-height: 85px;
  transition: 0.3s;
  margin-bottom: 13px;
}
.include {
  font-size: 14px;
  color: var(--gray-text);
  margin-bottom: 12px;
  padding-left: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 0;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
  }

  &.internet::before {
    background-image: url("../../assets/images/internet.svg");
  }
  &.flipchart::before {
    background-image: url("../../assets/images/flipchart.svg");
  }
  &.drinks::before {
    background-image: url("../../assets/images/drinks.svg");
  }
  &.decor::before {
    background-image: url("../../assets/images/decor.svg");
  }
  &.new-furniture::before {
    background-image: url("../../assets/images/new-furniture.svg");
  }
  &.light-room::before {
    background-image: url("../../assets/images/light-room.svg");
  }
}

@media (max-width: 900px) {
  .tarifs__card {
    grid-template-columns: 1fr;
    font-size: 15px;
    gap: 20px;
  }
  .tarif-tab {
    font-size: 15px;
  }
  .more-details {
    right: 0;
    top: 57px;
  }
}
</style>
