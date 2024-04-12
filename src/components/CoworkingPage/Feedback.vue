<script setup>
import Dropdown from "@/components/Dropdown.vue"

const props = defineProps({
  isModalOpen: Boolean,
  closeModalForm: Function,
});
const tarifesVariants = [
    {name: 'Переговорная комната 600 человек',
    id: 'tarife-radio-1',
    price: 1200    
    },
    {name: 'Переговорная комната 10 человек',
    id: 'tarife-radio-2',
    price: 1200    
    },
    {name: 'Переговорная комната 25 человек',
    id: 'tarife-radio-3',
    price: 1200    
    },
    {name: 'Переговорная комната 6 человек',
    id: 'tarife-radio-4',
    price: 1200    
    },
    {name: 'Конференц зал на 25 человек',
    id: 'tarife-radio-5',
    price: 1200    
    },
    {name: 'Переговорная комната 60 человек',
    id: 'tarife-radio-6',
    price: 1200    
    },
]

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
            <h3 class="title">Новый отзыв</h3>
          </div>
          <p class="leave-form">BLOCKS Лихоборы </p>

          <div class="stars">
            <input type="radio" name="feedback" class="star__input" value="5" id="star__value-5">
            <label for="star__value-5" class="star__label"></label>
            <input type="radio" name="feedback" class="star__input" value="4" id="star__value-4">
            <label for="star__value-4" class="star__label"></label>
            <input type="radio" name="feedback" class="star__input" value="3" id="star__value-3">
            <label for="star__value-3" class="star__label"></label>
            <input type="radio" name="feedback" class="star__input" value="2" id="star__value-2">
            <label for="star__value-2" class="star__label"></label>
            <input type="radio" name="feedback" class="star__input" value="1" id="star__value-1">
            <label for="star__value-1" class="star__label"></label>
          </div>

          <div class="label">Выберите тариф, которым вы пользовались</div>
          <Dropdown :dropdownsVariants="tarifesVariants" />
         
          <label class="label" for="">Опишите ваш опыт с этой услугой </label>
          <textarea placeholder="Как ощущалось помещение, в котором вам предстояло работать ?"></textarea>

          <div class="buttons">
            <button class="btn btn_border" @click="closeModal">Отменить</button>
            <button type="submit" class="btn btn_gradient">Опубликовать</button>
          </div>
          
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
  width: 100%;
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
.label {
    margin-bottom: 14px;
}
textarea {
  padding: 10px 20px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  resize: none;
  margin-bottom: 15px;
  height: 100px;
}

.stars {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 5px; 
    margin-bottom: 20px;
}

.star__input {
    display: none;

    &:checked ~ .star__label::after {
        opacity: 1;
    }
    &:checked ~ .star__label::before {
        opacity: 0;
    }
}
.star__label {
    position: relative;
    width: 29px;
    height: 25px;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 29px;
        height: 25px;
        background: url('../../assets/images/star-empty.svg') no-repeat;
    }
    &::after {
        content: '';
        position: absolute;
        width: 29px;
        height: 25px;
        background: url('../../assets/images/star-big.svg') no-repeat;
        opacity: 0;
        transition: opacity .3s;
    }

    &:hover:after,
    &:hover ~ &::after {
        opacity: 1;
    }
    &:hover:before,
    &:hover ~ &::before {
        opacity: 0;
    }
}
.buttons {
    display: flex;
    gap: 20px;

    .btn {
        width: 100%;
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
