<script setup>
import {onMounted, ref} from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import AddTarifeInObject from '@/components/Editing/AddTarifeInObject.vue';

const links = ref([
    {name: 'details', label: 'Подробности'},
    {name: 'tarifes', label: 'Тарифы'},
    {name: 'contacts', label: 'Контакты'},
    {name: 'social', label: 'Соцсети'},
])

const isSubmit = ref(false)

const showSuccessMessage = () => {   
    isSubmit.value = true
    setTimeout(()=>isSubmit.value = false, 2000)
}

const tarifes = ref([{id:1}]);

const addTarife = () => {
    const tariff = {id:tarifes.value.length + 1}
    tarifes.value.push(tariff);
    console.log(tarifes.value)
};
const removeTarife = (id) => {
    tarifes.value = tarifes.value.filter(tarife => tarife.id != id)    
}

const activeIndex = ref(0);

const scrollToAnchor = (index) => {
  activeIndex.value = index;
  const anchor = document.getElementById(links.value[index].name);
  if (anchor) {
    const offsetTop = anchor.offsetTop - 150;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

onMounted(()=>{
window.addEventListener('scroll', ()=>{
    for (let i = 0; i < links.value.length; i++) {
        const anchor = document.getElementById(links.value[i].name);
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                activeIndex.value = i;
                }
            }
        }
    })
})
</script>

<template>
    <Breadcrumbs />
    <section class="editing">
        <div class="container">
            <h1 class="page__title">Редактирование</h1>
            <form @submit.prevent class="editing__inner">
                <div class="">
                    <div class="editing__nav-buttons">
                        <a href="#!" :class="{ 'editing__nav-btn' : true, 'active': activeIndex === index }"
                            v-for="(link, index) in links" 
                            :key="link.name" 
                            @click.prevent="scrollToAnchor(index)">
                            {{link.label}}
                        </a>
                        <div class="save-changes-btn-wrapper">
                            <span :class="['success-message', {'success': isSubmit}]">Изменения были сохранены</span>
                            <button class="btn" @click.prevent="showSuccessMessage">Сохранить</button>
                        </div>

                    </div>
                </div>
                <div class="editing__content">
                  <div id="details">
                    <h2 class="editing__title">Подробности</h2>

                    <div class="input-wrapper textarea-wrapper">
                        <label for="editing__description" class="editing__form-label">Описание</label>
                        <textarea id="editing__description" class="editing__form-input textarea"></textarea>
                    </div>

                    <h4>Фотографии</h4>
                    <div class="photos">
                        <ul>
                            <li><img src="/coworking-1.jpg" alt=""></li>
                            <li><img src="/coworking-1.jpg" alt=""></li>
                            <li><img src="/coworking-1.jpg" alt=""></li>
                            <li><img src="/coworking-1.jpg" alt=""></li>
                            <li><img src="/coworking-1.jpg" alt=""></li>
                            <li><button><img src="/add-photo.svg" alt=""></button></li>
                        </ul>                        
                    </div>
                  </div>

                  <div id="tarifes">
                    <div class="tarifes__header">
                        <h2 class="editing__title">Тарифы</h2>
                        <button class="add-btn" @click.prevent="addTarife">Добавить +</button>
                    </div>
                    <div class="tarife-components">
                        <AddTarifeInObject v-for="(tarife, index) in tarifes" :key="index" :id="index + 1" :removeTarife="removeTarife"/>
                    </div>
                  </div>

                  <div id="contacts">
                    <h2 class="editing__title">Контакты</h2>

                    <div class="input-wrapper">
                        <input type="text" id="editing__form-location" class="editing__form-input" required>
                        <label for="editing__form-location" class="editing__form-label">Локация</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" id="editing__form-site" class="editing__form-input" required>
                        <label for="editing__form-site" class="editing__form-label">Сайт</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="mail" id="editing__form-mail" class="editing__form-input" required>
                        <label for="editing__form-mail" class="editing__form-label">Почта</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="tel" id="editing__form-phone" class="editing__form-input" required>
                        <label for="editing__form-phone" class="editing__form-label">Номер</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" id="editing__form-work-time" class="editing__form-input" required>
                        <label for="editing__form-work-time" class="editing__form-label">Время работы</label>
                    </div>
                  </div>
                  
                  <div id="social">
                      <h2 class="editing__title">Соцсети</h2>
                      <div class="input-wrapper _vk">
                          <input type="text"  class="editing__form-input social" placeholder="Добавить +">                      
                        </div>
                        <div class="input-wrapper _telegram">
                            <input type="text"  class="editing__form-input social" placeholder="Добавить +">                      
                        </div>
                        <div class="input-wrapper _youtube">
                            <input type="text"  class="editing__form-input social" placeholder="Добавить +">                      
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.page__title {
    margin-bottom: 25px;
}
.editing__content {
    max-width: 680px;
}
.editing__inner {
    display: grid;
    grid-template-columns: 180px auto;
    gap: 20px;
}
.editing__nav-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 33px;
  padding: 25px 15px;
  border: 1px solid var(--border);
  border-radius: 8px;
  position: sticky;
  top: 135px;
  background-color: var(--white);

  .btn {
    background-color: var(--main-text);
    border-color: transparent;
    color: var(--white);
    width: 100%;

    &:hover {
        background-color: var(--main-blue);
    }
  }
}
.save-changes-btn-wrapper {
    margin-top: -13px;
}
.success-message {
    font-size: 10px;
    color: var(--main-text);
    transition: 1s;
    transform: translateY(-30%);
    opacity: 0;
    visibility: hidden;
    display: block;

    &.success {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
}
.editing__nav-btn {
  font-size: 16px;
  color: var(--main-text);
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: left;
  position: relative;
  padding-left: 15px;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -10px;
    width: 8px;
    height: 39px;
    border-radius: 5px;
    background: linear-gradient(90deg, #1624ec, #777fed);
    transition: transform 0.3s;
    transform: scale(0);
  }

  &.active:before {
    transform: scale(1);
  }
}

.editing__title {
    font-size: clamp(16px, 5vw, 20px);
    font-weight: 500;
    margin-bottom: 29px;
}

.textarea {
    resize: none;
    height: 172px;
    margin-bottom: 8px;
}

h4 {
    font-size: 16px;
    color: var(--gray-text);
    font-weight: 500;
    margin-bottom: 17px;
}

.photos {
    margin-bottom: 30px;

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px 10px;
    }

    li {
        border-radius: 6px;
        overflow: hidden;
    }

    button {
        color: transparent;
        border: none;
        padding: 0;
    }
    
    img {
        width: 100%;
        height: 100%;
    }
}

.input-wrapper {
    width: 100%;
    position: relative;
    margin-bottom: 22px;

    &::after {
        content: '';
        position: absolute;
        background: url('../assets/images/pencil.svg') no-repeat;
        top: 17px;
        right: 15px;
        width: 14px;
        height: 14px;
    }
}
.textarea-wrapper {
    &::after {
        display: none;
    }

    .editing__form-label {
        font-size: 10px;
        top: -5px;
        padding: 0 5px;
    }

}
.editing__form-label {
    position: absolute;
    left: 15px;
    top: 16px;
    font-size: 14px;
    line-height: 100%;
    color: var(--gray-text);
    background-color: #fff;
    
    transition: .3s;
}
.editing__form-input {
    background-color: #fff;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 14px;
    color: var(--main-text);
    padding: 15px 37px 15px 15px;
    width: 100%;

    &:focus + .editing__form-label,
    &:valid + .editing__form-label {
        font-size: 10px;
        top: -5px;
        padding: 0 5px;
    }
}

.social {
    padding-left: 52px;
}

._vk {
    margin-bottom: 0;
    position: relative;
    &::before {
        content: '';
        position: relative;
        left: 15px;
        top: 28px;
        background: url('/vk.svg') no-repeat;
        display: block;
        width: 22px;
        height: 14px;
    }

    &::after {
        top: 31px;
    }
}
._telegram {
    margin-bottom: 0;
    position: relative;
    &::before {
        content: '';
        position: relative;
        left: 15px;
        top: 32px;
        background: url('/telegram.svg') no-repeat;
        display: block;
        width: 22px;
        height: 18px;
    }
    &::after {
        top: 31px;
    }
}
._youtube {
    margin-bottom: 0;
    position: relative;
    &::before {
        content: '';
        position: relative;
        left: 15px;
        top: 31px;
        background: url('/youtube.svg') no-repeat;
        display: block;
        width: 22px;
        height: 17px;
    }
    &::after {
        top: 31px;
    }
}

.tarifes__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.add-btn {
    border: none;
    color: var(--main-blue);
    padding: 0;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
}
@media(max-width: 850px) {
    .editing__nav-buttons {
        display: none;
    }
    .editing__inner {
        grid-template-columns: 1fr;
        gap: 0;
    }
    .editing__content {
        max-width: 100%;
    }
    .page__title {
        margin-bottom: 15px;
    }
    .editing__form-input {
        padding: 12px  38px 12px 15px;
    }
    .photos ul {
        gap: 7px;
    }
    .social {
        padding-left: 47px;
    }
}
</style>