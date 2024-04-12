<script setup>
import Dropdown from "@/components/Dropdown.vue"

const props = defineProps({
  isModalOpen: Boolean,
  closeModalForm: Function,
});

const tarifesVariants = [
    {name: 'Переговорная комната 600 человек',
    id: 'tarife-radio-01',
    price: 1200    
    },
    {name: 'Переговорная комната 10 человек',
    id: 'tarife-radio-02',
    price: 1200    
    },
    {name: 'Переговорная комната 25 человек',
    id: 'tarife-radio-03',
    price: 1200    
    },
    {name: 'Переговорная комната 6 человек',
    id: 'tarife-radio-04',
    price: 1200    
    },
    {name: 'Конференц зал на 25 человек',
    id: 'tarife-radio-05',
    price: 1200    
    },
    {name: 'Переговорная комната 60 человек',
    id: 'tarife-radio-06',
    price: 1200    
    },
]


//const closeModalForm = props.closeModalForm;

const closeModal = (e) => {
  const target = e.target;
  let popap;

  if (target.classList.contains("close-popap")) {
    if (target.classList.contains("overlay")) {
      popap = target.querySelector(".popap");
    } else {
      popap = target.parentNode;
    }
    popap.classList.remove("active");
    setTimeout(() => props.closeModalForm(), 300);
  }
};

</script>

<template>
  <div
    :class="{ overlay: true, 'close-popap': true, active: isModalOpen }"
    @click="(e) => closeModal(e)"
  >
    <div :class="{ popap: true, active: isModalOpen }">
      <button class="close close-popap" @click.stop="(e) => closeModal(e)">
        <img src="/close.svg" alt="" />
      </button>
      <div class="form__wrapper">
        <form class="form">
          <div class="header">
            <img src="/bloks.svg" alt="" class="image" />
            <h3 class="title">BLOCKS Лихоборы</h3>
          </div>
          <p class="leave-form">Заполните форму чтобы получить звонок от BLOCKS Лихоборы</p>

          <label for="">Выберите тариф</label>        
          <Dropdown :dropdownsVariants="tarifesVariants"/>
          
          <label for="">Телефон</label>
          <input type="tel" placeholder="+7 (___) ___-__-__" />

          <div class="date">
            <div class="date__wrapper">
              <label>Дата визита</label>
              <input type="date" />
            </div>

            <div class="date__wrapper">
              <label>Начало аренды</label>
              <input type="time" />
            </div>

            <div class="date__wrapper">
              <label>Длительность</label>
              <input type="text" />
            </div>
          </div>

          <label for="">Имя</label>
          <input type="text" placeholder="Ваше имя" />

          <label for="">Комментарий</label>
          <textarea
            name=""
            id=""
            placeholder="Опишите условия аренды места(необязательно)"
          ></textarea>

          <button type="submit" class="btn btn_gradient">Забронировать</button>

          <p>
            Оставляя заявку, вы принимаете положение
            <a href="#!">Политики конфиденциальности</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -15;
  opacity: 0;
  visibility: hidden;

  &.active {
    z-index: 15;
    opacity: 1;
    visibility: visible;
  }
}
.popap {
  max-width: 640px;
  max-height: 811px;
  height: 80vh;
  padding: 50px 40px;
  border-radius: 8px;
  z-index: 16;
  background-color: var(--white);
  transform: translateY(-100%);
  overflow-x: hidden;
  opacity: 0;
  transition: 0.3s;
  position: relative;
  visibility: hidden;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: var(--border);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--main-blue);
    border-radius: 2px;
  }

  &.active {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  .btn {
    margin-bottom: 20px;

    &:hover {
      border: 1px solid var(--main-text);
    }
  }
}
.close {
  position: absolute;
  top: 50px;
  right: 40px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    pointer-events: none;
  }
}

.form {
  display: flex;
  flex-direction: column;
  color: var(--gray-text);
}
.header {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  align-items: center;
}
.title {
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 700;
  line-height: 120%;
  color: var(--main-text);
}
.leave-form {
  font-size: 16px;
  margin-bottom: 30px;
}
label {
  font-size: 14px;
  margin-bottom: 10px;
}

input {
  padding: 15px 20px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  margin-bottom: 15px;
  width: 100%;
}
textarea {
  padding: 15px 20px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  resize: none;
  margin-bottom: 20px;
  height: 100px;
}

.date {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.date__wrapper {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: underline;
  color: var(--main-text);
  transition: color 0.3s;
  &:hover {
    color: var(--main-blue);
  }
}



@media (max-width: 520px) {
  .popap {
    padding: 20px 15px;
    max-height: 80dvh;
    margin: 0 10px;
  }
  .date {
    grid-template-columns: 1fr;
  }

  .close {
    top: 20px;
    right: 15px;
  }
}
</style>
