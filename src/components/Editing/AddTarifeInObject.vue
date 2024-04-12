<script setup>
import { ref } from 'vue';

const types = ['Переговорная', 'Конференц зал', 'Рабочее место']

defineProps({
    id: Number,
    removeTarife: Function
})

const isDropdownOpen = ref(false)
const isFacilitiesListOpen = ref(false)
const tarifTitle = ref(types[0]);
const tarifeTitle = ref('')

const includes = ref([
    {name: 'Флипчарт', classList: 'flipchart'},
    {name: 'Интернет', classList: 'internet'},
    {name: 'Вода/Чай/Кофе/Снеки', classList: 'drinks'},
    {name: 'Стильное оформление', classList: 'decor'},
    {name: 'Новая мебель', classList: 'new-furniture'},
    {name: 'Светлая комната', classList: 'light-room'},
])
const facilities = ref([])


function addFacilitie (event) {
    const content = event.target.textContent
    const classList = event.target.classList[1]

    const facilitie = {}
    facilitie.name = content
    facilitie.classList = classList

    facilities.value.push(facilitie)
    const index = includes.value.findIndex(item => item.classList === classList);
    if (index !== -1) {
        includes.value.splice(index, 1);
    }
}

function addIncludes (event) {
    const content = event.target.textContent
    const classList = event.target.classList[1]

    const include = {}
    include.name = content
    include.classList = classList

    includes.value.push(include)
    const index = facilities.value.findIndex(item => item.classList === classList);
    if (index !== -1) {
        facilities.value.splice(index, 1);
    }
}

function openDropdown() {
    if (isDropdownOpen.value === false) {        
        isDropdownOpen.value = true;        
        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("dropdown")) {
                isDropdownOpen.value = false;
            }
        });
    } else {
        isDropdownOpen.value = false
    }
}

function openFacilitiesList () {
    if (isFacilitiesListOpen.value === false) {
        isFacilitiesListOpen.value = true;        
        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("include__wrapper")) {
                isFacilitiesListOpen.value = false;
            }
        });
    } else {
        isFacilitiesListOpen.value = false
    }
}

function editTariffOpen (event) {
    const target = event.target
    const parent = event.target.parentNode   
    
    let maxHeight
    (window.innerWidth < 850) ? maxHeight = 50 : maxHeight = 80;

    if (target.classList.contains('active')) {
        target.classList.remove('active')
        parent.style.maxHeight = `${maxHeight}px`
        parent.style.overflow = 'hidden'
    } else {
        target.classList.add('active')
        parent.style.maxHeight = `1000px`
        parent.style.overflow = 'visible'
    }
}

</script>

<template>
    <div class="wrapper" :id="id">
        <h3 class="title" @click="editTariffOpen($event)">Тариф - {{tarifeTitle}}</h3>
        <div class="inner">
            <label class="label">Тип</label>

            <div class="dropdown">
                <div :class="{'dropdown-title' : true, 'active' : isDropdownOpen}" @click.stop="openDropdown">{{ tarifTitle }}</div> 
                <div :class="{ 'dropdown-variants': true, active: isDropdownOpen }" >
                <div class="" v-for="(type, index) in types" :key="index">
                    <input type="radio" name="dropdown" class="dropdown-radio" :id="index"/>
                    <label :for="index" class="dropdown-variant" @click.stop="(e)=> tarifTitle = e.target.textContent">{{ type }}</label>
                </div>
                </div>
            </div>

            <label class="label">Название</label>
            <input type="text" class="input" v-model="tarifeTitle">

            <label class="label">Описание</label>
            <textarea class="input textarea" rows="4"></textarea>

            <label class="label">Цена</label>
            <div class="price-wrapper">
                <div class="price">
                    <label for="" class="price__label">День</label>
                    <div class="price__input-wrapper">
                        <input type="text" class="price__input">
                    </div>
                </div>
                <div class="price">
                    <label for="" class="price__label">Час</label>
                    <div class="price__input-wrapper">
                        <input type="text" class="price__input">
                    </div>
                </div>
                <div class="price">
                    <label for="" class="price__label">Месяц</label>
                    <div class="price__input-wrapper">
                        <input type="text" class="price__input">
                    </div>
                </div>
                <div class="price">
                    <label for="" class="price__label">Особое предложение / месяц</label>
                    <div class="price__input-wrapper">
                        <input type="text" class="price__input">
                    </div>
                </div>
            </div>
           
            <label class="label">Удобства</label>

            <div class="facilities__wrapper">
                <ul class="facilities">
                    <li 
                    v-for="(facilitie, index) in facilities" 
                    :key="index"
                    :class="['include', facilitie.classList]"
                    @click="addIncludes($event)"
                    >{{ facilitie.name }}</li>
                    <li>
                        <div class="include__wrapper">
                            <button class="add-facilities" @click.prevent.stop="openFacilitiesList">Добавить +</button>
                            <ul :class="{'facilities__list' : true, 'active' : isFacilitiesListOpen}" v-if="includes.length > 0">
                                <li 
                                v-for="(include, index) in includes" 
                                :key="index" 
                                :class="['include', include.classList]"
                                @click="addFacilitie($event)"
                                >
                                {{ include.name }}
                                </li>                    
                            </ul>
                        </div>
                    </li>
                </ul>
                
            </div>

            <button class="remove" @click.prevent="removeTarife(id)">Удалить</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: 30px 20px;
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
    max-height: 80px;
    transition: max-height .3s;
    background-color: var(--white);
}

.title {
    display: block;
    position: relative;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 28px;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 6px;
        width: 11px;
        height: 7px;
        background: url("../../assets/images/arrow-down.svg") no-repeat;
        transition: transform .3s;
    }

    &.active:after {
        transform: rotate(180deg)
    }
}

.label {
    font-size: 15px;
    color: var(--gray-text);
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 10px;
    display: inline-block;
}

.dropdown {
  position: relative;
}

.dropdown-title {
  color: inherit;
  border: none;
  padding: 22px 39px 19px 16px;
  margin-bottom: 20px;
  background-color: transparent;
  text-align: left;
  position: relative;
  width: 100%;
  font-size: 14px;
  color: var(--main-text);
  border: 1px solid var(--border);
  border-radius: 6px;

  &::after {
    content: "";
    position: absolute;
    top: 26px;
    right: 13px;
    width: 11px;
    height: 7px;
    background: url("../../assets/images/arrow-down.svg") no-repeat;
    transition: transform 0.3s;
    pointer-events: none;
  }

  &.active:after {
    transform: rotate(180deg);
  }
}

.dropdown-variants {
  padding: 20px 15px;
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  flex-direction: column;
  gap: 15px;
  border-radius: 6px;
  width: 100%;
  position: absolute;
  top: calc(100% + 4px);
  z-index: 2;
  background-color: var(--white);
  display: none;

  &.active {
    display: flex;
  }
}

.dropdown-radio {
  display: none;

  &:checked + .dropdown-variant::after {
    transform: scale(1);
  }
}

.dropdown-variant {
  color: inherit;
  border: none;
  padding: 0;
  padding-left: 22px;
  background-color: transparent;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 12px;
    height: 12px;
    border: 1px solid var(--main-text);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 12px;
    height: 12px;
    border: 3px solid var(--main-text);
    border-radius: 50%;
    transition: transform 0.3s;
    transform: scale(0);
  }
}

.input {
    color: inherit;
    border: none;
    padding: 21px 15px;
    margin-bottom: 20px;
    background-color: var(--white);
    text-align: left;
    width: 100%;
    font-size: 14px;
    color: var(--main-text);
    border: 1px solid var(--border);
    border-radius: 6px;
    background-color: var(--white);
}

.textarea {
    resize: none;
    height: 106px;
}

.price-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr;
    padding: 10px 15px;
    border: 1px solid var(--border);
    border-radius: 6px;
    margin-bottom: 20px;
}

.price__label {
    font-size: clamp(12px, 3vw, 14px);
    color: var(--gray-text);
    margin-bottom: 10px;
    display: inline-block;
}

.price {
    padding: 8px 15px 8px 0;
    margin-right: 15px;
    border-right: 1px solid var(--border);

    &:last-child {
        border: none;
    }
}
.price__input-wrapper {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 2px;
        background: url('../../assets/images/pencil.svg') no-repeat;      
        width: 14px;
        height: 14px;
    }
}
.price__input {
    width: calc(100% - 24px);
    border: none;
    color: var(--main-text);
    font-size: 15px;
    font-weight: 500;
    background-color: transparent;

    &:focus {
        border-bottom: 1px solid var(--border);
    }
}

.facilities__wrapper {
    margin-bottom: 20px;
}

.facilities {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;

     > .include {
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 5px 10px 5px 42px;

        &::before {
            left: 13px;
            bottom: 3px;
        }
    }
}

.add-facilities {
    border: none;
    color: var(--main-blue);
    background-color: transparent;
    padding: 0;
}

.facilities__list {
    min-width: 210px;
    width: fit-content;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 15px 10px 15px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 1px 2px rgba(0,0,0, .16);
    position: absolute;
    left: 0;
    background-color: var(--white);
    z-index: 2;
    transition: .2s;
    transform: translateY(-10%);
    visibility: hidden;
    opacity: 0;

    &.active {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
    }
}
.include {
  font-size: 14px;
  color: var(--gray-text);
  padding-left: 32px;
  position: relative;
  cursor: pointer;
  width: max-content;

  &::before {
    content: "";
    position: absolute;
    left: 3px;
    bottom: 0px;
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

.include__wrapper {
    position: relative;
}

.remove {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    display: block;
    margin-left: auto;
}

@media(max-width: 850px) {
    .wrapper {
        padding: 15px;
        max-height: 50px;
    }
    .dropdown-title {
        padding: 13px 30px 14px 15px;

        &::after {
            top: 19px;
        }
    }
    .input {
        padding: 13px 15px;
    }
    .price-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
    .price:last-child {
        grid-column: 1/-1;
        border-top: 1px solid var(--border);
        padding-top: 10px;
        margin-top: 10px;
    }
    .price:nth-child(3) {
       border: none;
       padding-left: 0;
       margin-left: 0;
    }   
}
</style>