<script setup>
import { onMounted, ref } from 'vue';

import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CoworkingCard from '@/components/CatalogPage/CoworkingCard.vue';
import LeaveAplication from '@/components/LeaveAplication.vue';
import Pagination from '@/components/Pagination.vue';
import EventsCalendar from '@/components/CatalogPage/EventsCalendar.vue';
import NewsBlock from '@/components/NewsBlock.vue';
import Filters from '../components/CatalogPage/Filters.vue'
import Dropdown from '@/components/Dropdown.vue';

const isFiltersOpen = ref(false)

const sortBy = [
    {id:'sort-by-popuar', name:'Сначала популярные'},
    {id:'sort-by-best-rating', name:'Сначала с лучшей оценкой'},
    {id:'sort-by-closest', name:'Сначала ближайшие'},
    {id:'sort-by-farest', name:'Сначала дальнейшие'},
    {id:'sort-by-in-demand', name:'Сначала пользующиеся спросом'},
]
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

onMounted(()=>{
    const filters = document.querySelector('.filters-sticky');

    if(window.innerWidth > 1150) {        
        window.addEventListener('scroll', ()=>{
            if (window.scrollY < 600) {
                filters.style.position = 'static'
                filters.style.marginBottom = 'auto'
                filters.style.marginTop = '0'
            } else if(window.scrollY > 600 && window.scrollY < 2100) {
                filters.style.position = 'fixed'
                filters.style.top = '-371px'
            } else if (window.scrollY > 2100) {
                filters.style.position = 'static'
                filters.style.marginBottom = '0'
                filters.style.marginTop = 'auto'
            }
        })        
    }
})
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
                            <Dropdown :dropdownsVariants="sortBy"/>
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
                grid-template-columns: auto 350px;
            }
            
        }

        .leave-aplication__title {
            margin-bottom: 14px;
        }

        .leave-aplication__description {
            font-size: 14px;
        }

        .leave-aplication__buttons {
            margin-left: auto;

            .btn {
                padding: 13px 36px;
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
        display: flex;
        justify-content: space-between;

        .dropdowns-variants {
            left: 0;
        }
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
        font-weight: 500;
        

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