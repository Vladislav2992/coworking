<template>
    <div class="news">
        <h3 class="title">BLOKS открывает в Самаре деловое пространство</h3>
        <p>В самом центре Самары, на 5-ти этажах бизнес-центра будут размещены: ивент-холл на 400 гостей, гостиница, кафе и бар, гибкий теплый склад и отдельные изолированные кабинеты для комфортной работы 170 сотрудников.</p>
        <div class="bottom">
            <div class="date">20 февраля 2024</div>
            <a class="see-more" href="#!">Подробнее</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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