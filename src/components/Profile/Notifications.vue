<script setup></script>

<template>
  <div class="notifications__wrapper">
    <div class="notifications__tabs">
      <button class="notifications__tab active">Все</button>
      <button class="notifications__tab">Системные</button>
      <button class="notifications__tab">Отзывы</button>
      <button class="notifications__tab">Заказы</button>
    </div>
    <div class="notifications">
      <div class="notification unread">
        <div class="notification__header">
          <h3 class="notification__theme">Ваш отзыв получил оценку</h3>
          <div class="notification__date">
            <span class="time">17:30</span> 07.02.2024
          </div>
        </div>
        <div class="notification__body">
          <b>Алексей</b>, Ваш отзыв на коворкинг <b>“BLOCKS Лихоборы”</b> от
          07.02.2024 “Очень понравилось пространство. Снимали на день
          переговорную Савва...” получил оценку “<strong>Полезно</strong>”.
          Спасибо за за оставленный отзыв.
        </div>
      </div>
      <div class="notification">
        <div class="notification__header">
          <h3 class="notification__theme">Заказы</h3>
          <div class="notification__date">
            <span class="time">17:30</span> 5.02.2024
          </div>
        </div>
        <div class="notification__body">
          <b>Алексей</b>, Ваша заявка на услугу “Открытие контактов в карточке
          пространства/коворкинга ” на сумму <b>5000₽</b> была одобрена.
          Пожалуйста проверьте вашу почту для уточнения деталей сделки. Спасибо
          что выбрали нас!
        </div>
      </div>
      <div class="notification">
        <div class="notification__header">
          <h3 class="notification__theme">Заказы</h3>
          <div class="notification__date">
            <span class="time">17:30</span> 18.02.2024
          </div>
        </div>
        <div class="notification__body">
          <b>Алексей</b>, Вы недавно заказывали бронирование коворкинга
          <b>“BLOCKS Лихоборы”</b> с 01.02.2024 по 03.02.2024 Пожалуйста
          поделитесь вашим опытом пользования коворкингом. Оставьте отзыв
          коворкингу <b>“BLOCKS Лихоборы”</b>.
        </div>
        <div class="notification__bottom">
          <a href="#!" class="leave-review">Оставить отзыв</a>
        </div>
      </div>
      <div class="notification">
        <div class="notification__header">
          <h3 class="notification__theme">Ваш отзыв получил оценку</h3>
          <div class="notification__date">
            <span class="time">17:30</span> 07.02.2024
          </div>
        </div>
        <div class="notification__body">
          <b>Алексей</b>, на коворкинг, который вам понравился сейчас есть
          <strong>скидка 20% на бронирование за месяц</strong>. Успейте
          воспользоваться этим предложением до 20 Июня чтобы сэкономить на
          аренде вашего рабочего места. Желаем успехов в работе!
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.notifications__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}
.notifications__tab {
  padding: 10px 32px;
  border: none;
  border-radius: 18px;
  font-size: clamp(14px, 3vw, 16px);
  background-color: #eff5fb;
  color: var(--main-text);
  width: fit-content;
  transition: 0.2s;

  &.active {
    background-color: var(--main-text);
    color: var(--white);
  }

  &:hover {
    color: var(--main-blue);
  }
}

.notification {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 30px;
  font-size: clamp(14px, 3vw, 16px);
  color: var(--gray-text);
  margin-bottom: 15px;
  background-color: var(--white);

  &.unread {
    background-color: #eff5fb;
  }

  b {
    font-weight: 700;
  }
  strong {
    font-weight: 700;
    color: var(--main-blue);
  }
}

.notification__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: clamp(12px, 3vw, 14px);
  margin-bottom: 15px;
}
.notification__date {
  font-size: 12px;

  span {
    margin-right: 5px;
  }
}

.notification__body {
  line-height: 130%;
}

.notification__bottom {
  margin-top: 10px;
  .leave-review {
    color: var(--main-blue);
  }
}

@media(max-width: 550px) {
  .notifications__tab {
      &:nth-child(1) {
        flex: 35%;
      }
      &:nth-child(2) {
        flex: 60%;
      }
      &:nth-child(3) {
        flex: 47%;
      }
      &:nth-child(4) {
        flex: 47%;
      }
  }
}
</style>
