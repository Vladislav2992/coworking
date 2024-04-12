<script setup>
import { ref } from "vue";
const isDetailsOpen = ref(false)
    defineProps({
        status: String
    })

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
</script>

<template>
    <div :class="{'order' : true, 
                '_completed' : status === 'completed',
                '_active' : status === 'active',
                '_canceled' : status === 'canceled'}">
    <div class="current-status"> 
        <span v-if="status === 'completed'">Завершен </span> 
        <span v-if="status === 'active'">Активно до </span> 
        <span v-if="status === 'canceled'">Отменено </span> 
        07.09.2024</div>
    <div class="order__header">
      <h2 class="order__title">
        Размещение рекламы на портале аренды коворкингов Place2
      </h2>    
      <div class="details">
          <button class="details-btn" @click.stop="seeDetails">...</button>
          <div :class="{'details__inner': true, 'active' : isDetailsOpen}">
            <ul>
              <li>Повторить заказ</li>
              <li>Выдать чек</li>
            </ul>
          </div>
        </div>
    </div>
    <div class="order__body">
      <div class="img-wrapper">
        <img src="/coworking-1.jpg" alt="" />
      </div>
      <div class="order__info">
        <h3 class="title">BLOCKS Лихоборы</h3>

        <div class="order__status">
          <div class="wrapper">
            <div class="info"><span>Получатель: </span>SOK CLUB (месяц)</div>
            <div class="info"><span>Телефон: </span>+7 985 456 12 23</div>
            <div class="info"><span>Дата: </span>  С 10.02.2024 по 12.02.2024</div>
          </div>
          <div class="wrapper">
            <div class="info"><span>Оплачено: </span>5000 ₽</div>
            <div class="info"><span>Статус: </span>                
                <span class="info__status" v-if="status === 'completed'">Завершен </span> 
                <span class="info__status" v-if="status === 'active'">Активен </span> 
                <span class="info__status" v-if="status === 'canceled'">Отмена </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

    &._active,
    &._active .current-status {
    border-color: var(--green);
    }
    &._active .info__status {
        color: var(--green);
    }
    
    &._canceled, 
    &._canceled .current-status {
      border-color: #D42525;
    }
    &._canceled .info__status {
        color: #D42525;
    }

    &._completed, 
    &._completed .current-status {
      border-color: var(--main-text);
    }
    &._completed .info__status {
        color:var(--main-text);
    }
}

.current-status {
  position: absolute;
  right: -1px;
  bottom: -1px;
  border: 1px solid var(--green);
  border-radius: 6px 0 0 0;
  padding: 7px 14px;
  font-size: 12px;
}
.order__header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.order__number {
  font-size: 20px;
  font-weight: 500;
  line-height: 120%;
  margin-right: 20px;
}
.order__title_active {
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
}
.order__title_active {
  color: var(--gray-text);
  font-size: 14px;
}
.order__body {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 20px;
}
.img-wrapper {
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
.order__info {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.title {
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 700;
  color: #1d1d1b;
}
.order__status {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}
.info {
  font-size: clamp(12px, 3vw, 14px);
  line-height: 120%;
  color: var(--gray-text);
  margin-bottom: 6px;

  span {
    font-weight: 500;
  }
}
.details {
  position: relative;
  margin-left: auto;
}
.details__inner {
  position: absolute;
  right: 0;
  top: 80%;
  width: 153px;
  height: auto;
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
    cursor: pointer;

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

@media (max-width: 850px) {
  .order {
    padding: 15px 15px 50px 15px;
  }
  .order__header {
    margin-bottom: 15px;
  }
  .order__body {
    grid-template-columns: 1fr;
  }

  .order__status {
    display: flex;
    justify-content: space-between;
  }
}
</style>