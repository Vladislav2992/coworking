<script setup>
import { ref } from 'vue';

import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CoworkingCard from '@/components/CoworkingCard.vue';
import LeaveAplication from '@/components/LeaveAplication.vue';
import Pagination from '@/components/Pagination.vue';
import EventsCalendar from '@/components/EventsCalendar.vue';
import NewsBlock from '@/components/NewsBlock.vue';
import Filters from '../components/Filters.vue'

const isFiltersOpen = ref(false)
const isSortListOpen = ref(false)

const blockBody = (e) => {
    e.preventDefault();   
   const body =  document.querySelector('body')

   if (body.classList.contains('disabled')) {
    body.classList.remove('disabled')
    isFiltersOpen.value = false  
   } else {
    body.classList.add('disabled')
    isFiltersOpen.value = true 
   }
}
</script>

<template>    
    <Breadcrumbs />
    <section class="page catalog">
        <div class="container">
            <div class="catalog__title-wrapper">
                <h1 class="page__title">Все коворкинги Москвы</h1>
                <span class="total__number">112</span>
            </div>
            <div class="page__container">
                <div class="page__content">
                    <div class="map-wrapper">
                        <div id="map">
                            <img src="/map.jpg" alt="">
                        </div>
                        <button class="btn btn_gradient">Показать на карте</button>
                    </div>

                    <div class="page__sort">
                        <div class="sorting">
                            <button :class="{'sorting-title' : true, 'active' : isSortListOpen}" @click="isSortListOpen = !isSortListOpen">Сортировать</button>
                            <div class="sorting-variants"> 
                                <input type="radio" name="sorting" class="sort-input-radio" id="sort-input-radio-1">
                                <label for="sort-input-radio-1" class="sort-variant">Сначала популярные</label>
                                
                                <input type="radio" name="sorting" class="sort-input-radio" id="sort-input-radio-2">
                                <label for="sort-input-radio-2" class="sort-variant">Сначала с лучшей оценкой</label>

                                <input type="radio" name="sorting" class="sort-input-radio" id="sort-input-radio-3">
                                <label for="sort-input-radio-3" class="sort-variant">Сначала ближайшие</label>

                                <input type="radio" name="sorting" class="sort-input-radio" id="sort-input-radio-4">
                                <label for="sort-input-radio-4" class="sort-variant">Сначала дальнейшие</label>

                                <input type="radio" name="sorting" class="sort-input-radio" id="sort-input-radio-5">
                                <label for="sort-input-radio-5" class="sort-variant">Сначала пользующиеся спросом</label>
                            </div>
                        </div>
                        
                        <span class="filter-mobile-btn" @click="blockBody">Фильтры</span>
                    </div>

                    <CoworkingCard :stars="4" inDemand />
                    <CoworkingCard :stars="3" popularСhoise />
                    <CoworkingCard :stars="4" freeSchedule />
                    <CoworkingCard :stars="5"/>
                    <LeaveAplication />
                    <CoworkingCard :stars="4"/>
                    <CoworkingCard :stars="4"/>
                    <CoworkingCard :stars="5"/>
                    <CoworkingCard :stars="3"/>
                </div>
                <Filters  :isFiltersOpen="isFiltersOpen" :blockBody="blockBody" />
                <Pagination />
            </div>            
        </div>
    </section>
    <EventsCalendar />
    <NewsBlock />
</template>

<style lang="scss">
    .page {
        .leave-aplication {
            padding: 0;
            margin-bottom: 30px;
            .container {
                grid-template-columns: auto 370px;
            }
            
        }
        .page__pagination {
            grid-column: 1/-1;
            margin: 0 auto;
        }
        .coworking-card:last-of-type{
            margin-bottom: 10px;
        }
    }
    .catalog__title-wrapper {
        display: flex;
        gap: 15px;
        align-items: baseline;
        margin-bottom: 15px;
    }
    .total__number {
        color: var(--gray-text);
        font-size: clamp(20px, 6vw, 32px);
    }

    .page__container {
        display: grid;
        grid-template-columns: auto 280px;
        gap: 20px;
    }

    .map-wrapper {
        position:relative;
        margin-bottom: 20px;

        img {
            width: 100%;
        }

        .btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
        }
    }

    .filter-mobile-btn {
        font-size: 14px;
        font-weight: 500;
        padding-left: 20px;
        position: relative;
        display: none;

        &::before {
            content: '';
            position: absolute;
            width: 11px;
            height: 11px;
            left: 0;
            top: 4px;
            background: url('../assets/images/filter.svg') no-repeat;
        }
    }

    .page__sort {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }

    .sorting {
        position: relative;
    }

    .sorting-title {
        color: inherit;
        border: none;
        padding: 0;
        padding-right: 22px;
        background-color: transparent;
        text-align: left;
        position: relative;
        font-weight: 50;
        

        &::after {
            content: '';
            position: absolute;
            top: 5px;
            right: 0;
            width: 11px;
            height: 7px;
            background: url('../assets/images/arrow-down.svg') no-repeat;
            transition: transform .3s;
        }

        &.active:after {
            transform: rotate(180deg);
        }

        &.active + .sorting-variants {
            display: flex;
        }
    }

    .sorting-variants {
        padding: 20px 15px;
        border: 1px solid var(--border);
        box-shadow: 0 1px 2px rgba(0, 0, 0, .16);
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 6px;
        width: max-content;
        position: absolute;
        top: calc(100% + 10px);
        z-index: 2;
        background-color: var(--white);
        display: none;
    }

    .sort-input-radio {
        display: none;

        &:checked + .sort-variant::after {
            transform: scale(1);
        }
    }

    .sort-variant {
        color: inherit;
        border: none;
        padding: 0;
        padding-left: 22px;
        background-color: transparent;
        text-align: left;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;
            width: 12px;
            height: 12px;
            border: 1px solid var(--main-text);
            border-radius: 50%;
        }

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;
            width: 12px;
            height: 12px;
            border: 3px solid var(--main-text);
            border-radius: 50%;
            transition: transform .3s;
            transform: scale(0);
        }
    }

    @media (max-width:1150px) {
        .page__container {
            grid-template-columns: 1fr;
        }
        .filter-mobile-btn {
            display: block;
        }
    }
    @media (max-width:900px) {
        .page .leave-aplication {  
            margin-bottom: 20px;         
            .container {
                grid-template-columns: 1fr;
                gap: 26px;
            }   
        }
        .map-wrapper .btn {
            display: none;
        }
    }
    @media (max-width:400px) {
        .catalog__title-wrapper {
            gap: 5px;
        }
    }
</style>