<script setup>
import { ref, computed } from 'vue';

defineProps({
    isFiltersOpen: Boolean,
    blockBody: Function
})

const minRange = ref(0);
const maxRange = ref(12);

const rangeLeft = computed(() => {
  const min = parseFloat(minRange.value);
  const percent = (min / 12) * 100;
  return `${percent}%`;
});

const rangeRight = computed(() => {
  const max = parseFloat(maxRange.value);
  const percent = ((12 - max) / 12) * 100;
  return `${percent}%`;
});
</script>


<template>
   <div :class="{'filters-wrapper' : true, 'open' : isFiltersOpen}">
    <form class="filters">
        <div class="filter filters__header">
            <h2 class="filters__title">Фильтры</h2>
            <button type="reset" class="filters__clear">Очистить</button>
            <button class="close__filters" @click="blockBody"><img src="/close.svg" alt=""></button>
        </div>
        <div class="filter">
            <h3 class="filter__title">Город</h3>
            <div class="filter__search-wrapper">
                <input type="text" class="filter__search-input" placeholder="Москва">
            </div>            
        </div>
        <div class="filter">
            <h3 class="filter__title">По месту нахождения</h3>
            <div class="filter__checkboxes__wrapper">
                <input type="checkbox" id="filter__location-1" class="filter__checkbox">
                <label for="filter__location-1" class="filter__label">Все коворкинги Москвы</label>

                <input type="checkbox" id="filter__location-2" class="filter__checkbox">
                <label for="filter__location-2" class="filter__label">Коворкинги Москва-Сити</label>

                <input type="checkbox" id="filter__location-3" class="filter__checkbox">
                <label for="filter__location-3" class="filter__label">Коворкинги Мос. области</label>

                <input type="checkbox" id="filter__location-4" class="filter__checkbox">
                <label for="filter__location-4" class="filter__label">Коворкинги рядом с вами</label>

                <div class="range-wrapper">
                    <input type="range" class="filter__range left" min="0" max="12" step="0.1" v-model="minRange">
                    <input type="range" class="filter__range right" min="0" max="12" step="0.1" v-model="maxRange" >
                    <div class="range-line" :style="{ left: rangeLeft, right: rangeRight }"></div>
                    <div class="range-line-bg"></div>

                    <div class="range-values">
                        <div class="range-min"> <input type="text" class="no-style-input" :value="minRange"> км</div>
                        <div class="range-max"> <input type="text" class="no-style-input" :value="maxRange"> км</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="filter">
            <h3 class="filter__title">По типу коворкингая</h3>
            <div class="filter__checkboxes__wrapper">
                <input type="checkbox" id="filter__type-1" class="filter__checkbox">
                <label for="filter__type-1" class="filter__label">IT специалисты</label>

                <input type="checkbox" id="filter__type-2" class="filter__checkbox">
                <label for="filter__type-2" class="filter__label">Бьюти-коворкинг</label>

                <input type="checkbox" id="filter__type-3" class="filter__checkbox">
                <label for="filter__type-3" class="filter__label">Кабинет психолога</label>

                <input type="checkbox" id="filter__type-4" class="filter__checkbox">
                <label for="filter__type-4" class="filter__label">Офисы</label>
               
                <input type="checkbox" id="filter__type-5" class="filter__checkbox">
                <label for="filter__type-5" class="filter__label">Мастерские</label>
            </div>
        </div>

        <div class="filter">
            <h3 class="filter__title">По цене</h3>
            <div class="filter__checkboxes__wrapper">
                <input type="checkbox" id="filter__price-1" class="filter__checkbox">
                <label for="filter__price-1" class="filter__label">от 500₽ до 1000₽ в день</label>

                <input type="checkbox" id="filter__price-2" class="filter__checkbox">
                <label for="filter__price-2" class="filter__label">от 1001₽ до 1500₽ в день</label>

                <input type="checkbox" id="filter__price-3" class="filter__checkbox">
                <label for="filter__price-3" class="filter__label">от 1501₽ до 2000₽ в день</label>

                <input type="checkbox" id="filter__price-4" class="filter__checkbox">
                <label for="filter__price-4" class="filter__label">от 2001₽ до 2500₽ в день</label>
                
                <input type="checkbox" id="filter__price-5" class="filter__checkbox">
                <label for="filter__price-5" class="filter__label">от 2501₽ и более в день</label>
            </div>
        </div>

        <div class="filter">
            <h3 class="filter__title">По отзывам</h3>
            <div class="filter__checkboxes__wrapper">
                <input type="checkbox" id="filter__reviews-1" class="filter__checkbox">
                <label for="filter__reviews-1" class="filter__label">от 4.9 звезд</label>

                <input type="checkbox" id="filter__reviews-2" class="filter__checkbox">
                <label for="filter__reviews-2" class="filter__label">от 4.5 звезд</label>

                <input type="checkbox" id="filter__reviews-3" class="filter__checkbox">
                <label for="filter__reviews-3" class="filter__label">от 4.1 звезд</label>

                <input type="checkbox" id="filter__reviews-4" class="filter__checkbox">
                <label for="filter__reviews-4" class="filter__label">4 звезды и ниже</label>
            </div>
        </div>
    </form>
   </div>
</template>

<style lang="scss">
    .filters {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 20px 15px;
        font-size: 14px;
    }
    .filter {
        padding-bottom: 5px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--border);
    }
    .filters__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 19px;
    }
    .filters__clear {
        font-size: 14px;
        color: var(--gray-text);
        border: none;
        background-color: transparent;
        padding: 0;
    }
    .close__filters {
        border: none;
        padding: 0;
        background-color: transparent;
        display: none;
    }
    .filters__title {
        font-size: 16px;
        font-weight: 500;
    }

   

    .filter__title {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    .filter__search-wrapper {
        position: relative; 
        padding-bottom: 12px;      
        
        &::before {
            content: '';
            position: absolute;
            top: 13px;
            right: 15px;
            background: url('../assets/images/search-min.svg') no-repeat;
            width: 14px;
            height: 14px;
        }
    }

    .filter__search-input {
        padding: 8px 38px 8px 12px;
        border: 1px solid var(--border);
        border-radius: 8px;
        background-color: transparent;
        color: var(--main-text);
        width: 100%;
        margin-top: 3px;
    }

    .filter__checkboxes__wrapper {
        display: flex;
        flex-direction: column;
    }

    .filter__checkbox {
        display: none;

        &:checked + .filter__label::after{
            transform: scale(1);
        } 
    }

    .filter__label {
        position: relative;
        padding-left: 25px;
        cursor: pointer;
        margin-bottom: 14px;

        &::before {
            content: '';
            position: absolute;
            left: -1px;
            bottom: 2px;
            width: 17px;
            height: 17px;
            border: 1px solid var(--main-text);
            border-radius: 2px;
        }
        &::after {
            content: '';
            position: absolute;
            left: -1px;
            bottom: 2px;
            width: 17px;
            height: 17px;
            background: url('../assets/images/checked.svg');
            border-radius: 2px;
            transition: .3s;
            transform: scale(0);
        }
    }

    .range-wrapper {
        position: relative;
        margin-top: 3px;
        margin-bottom: 14px;
    }
    .filter__range {
        width: 100%;        
        position: absolute;
        appearance: none;
        z-index: 3;
        background: transparent;
    }
    .filter__range::-webkit-slider-runnable-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        background: transparent;
    }

    .filter__range::-webkit-slider-thumb {
        height: 12px;
        width: 12px;
        border-radius: 15px;
        background: var(--main-text);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
        z-index: 3;
    }

    .range-line {
        position: absolute;
        height: 2px;
        border-radius: 2px;
        background-color: var(--main-text);
        z-index: 2;
    }
    .range-line-bg {
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        border-radius: 2px;
        background-color: var(--border);
        z-index: 1;
    }

    .range-values {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .no-style-input {
        color: var(--gray-text);
        font-family: 'Inter', sans-serif;
        border: none;
        background-color: transparent;
        padding: 0;
        width: 20px;
    }
    .range-min,
    .range-max {
        padding: 3px 10px;
        color: var(--gray-text);
        border: 1px solid var(--gray-text);
        border-radius: 4px;
        width: fit-content;
    }

    @media (max-width:1150px) {
        .filters-wrapper {
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100dvh - 61px);
            background-color: var(--white);
            z-index: 15;
            overflow-x: hidden;
            display: none;

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

            &.open {
                display: block;
            }
        }
        .filters__header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 20px 15px;
            background-color: var(--white);
            box-shadow: 0 1px 2px rgba(0, 0, 0, .16);
            z-index: 17;
        }
        .close__filters {
            display: block;
            order: 3;
        }
        .reset {
            order: 1;
        }
        .filters__title {
            order:2;
        }
        .filter {
            padding-bottom: 10px;

            &:nth-child(2) {
                margin-top: 60px;
            }
        }
        .filter__search-wrapper {
            width: 150px;

            &::before {
                top: 5px;
                right: 0;
            }
        }
        .filter__search-input {
            border: none;
            padding: 0 20px 0 0;
            margin-top: 5px;
            border-radius: 0;
        }
        .filter__title {
            margin-bottom: 10px;
        }

        .filter__checkboxes__wrapper {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 5px;
        }

        .filter__checkbox:checked + .filter__label {
            color: var(--white);
            background-color: var(--main-text);
        }

        .filter__label {
            padding: 6px 15px;
            border-radius: 18px;
            background-color: var(--border);
            width: fit-content;
            margin-bottom: 5px;
            transition: .2s;

            &::before,
            &::after {
                display: none;
            }
        }
        .range-wrapper {
            width: 100%;
        }
    }
</style>