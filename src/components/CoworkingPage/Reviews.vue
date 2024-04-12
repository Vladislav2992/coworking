<script setup>
import Pagination from '../Pagination.vue';
import Review from './Review.vue';
import Rating from './Rating.vue';
import AdSlider from '../Advertising/AdSlider.vue';
import Dropdown from '../Dropdown.vue';

const sortBy = [
    {id:'sort-input-radio-1', name:'Сначала новые'},
    {id:'sort-input-radio-2', name:'Сначала с лучшей оценкой'},
]

defineProps({
    openFeedback: Function
})

</script>
<template>
    <section class="reviews-block">        
            <div class="reviews-block__header">
                <h2 class="section__title">Отзывы</h2>
                <button class="leave-review" @click="openFeedback">Оставить отзыв</button>
            </div>
            <div class="rewiews__inner">
                <div class="rating__wrapper">
                    <Rating />
                    <AdSlider />
                </div>
                <div class="reviews">
                    <div class="sorting">
                        <Dropdown :dropdownsVariants="sortBy"/>
                    </div>                    
                    <Review />                    
                    <Review />                    
                    <Review />                    
                    <Review />                    
                    <Pagination />                    
                </div>
            </div>        
    </section>
</template>

<style lang="scss">

    .rewiews__inner {
        display: grid;
        grid-template-columns: 280px auto;
        gap: 119px;
    }

    .reviews {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .reviews-block__header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 4px;
    }
    .leave-review {
        border: none;
        background-color: transparent;
        padding: 0;
        color: var(--main-blue);
        font-size: 15px;
        font-weight: 500;
    }

    @media(max-width:1150px) {
        .rewiews__inner {
            grid-template-columns: 1fr;
            gap: 17px;

            .ad-slider {
                display: none;
            }
        }
        .reviews::before {
            content: none;
        }
        .sorting .dropdowns {
            margin: 0;
            width: max-content;
        }
        .sorting .dropdown-title  {
            margin-bottom: 0;
        }
        .sorting .dropdowns-variants {
            left: 0;
        }
        .reviews .page__pagination {
            margin-top: 20px;
        }       
    }
</style>