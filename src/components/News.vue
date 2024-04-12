<script setup>
defineProps({
    photo: Boolean
})    

</script>

<template>
    <div :class="{'news' : true, 'with-photo' : photo}">
        <div class="image-wrapper" v-if="photo">
            <img src="/news-1.jpg" alt="">
            <img src="/news-2.jpg" alt="">
            <img src="/news-3.jpg" alt="">
            <img src="/news-4.jpg" alt="">
        </div>
        <h3 class="title">BLOKS открывает в Самаре деловое пространство</h3>
        <p>В самом центре Самары, на 5-ти этажах бизнес-центра будут размещены: ивент-холл на 400 гостей, гостиница, кафе и бар, гибкий теплый склад и отдельные изолированные кабинеты для комфортной работы 170 сотрудников.</p>
        <div class="bottom">
            <div class="date">20 февраля 2024</div>
            <a class="see-more" href="#!">Подробнее</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .news {
        display: flex;
        flex-direction: column;
    }
    .image-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding-bottom: 20px;
        margin-bottom: auto;

        img {
            border-radius: 9px;
            width: 100%;

            &:first-child {
                grid-column: 1/-1;
            }
        }
    }    
    .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    p {
        font-size: 15px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        margin-bottom: 15px;
    }
    .bottom {
        display: flex;
        justify-content: space-between;
    }
    .date {
        color: var(--gray-text);
        font-size: 13px;
    }    
</style>