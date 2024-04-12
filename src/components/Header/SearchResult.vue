<template>
    <div class="search__result">
        <h2 class="tag-title">Коворкинги</h2>
        <div class="wrapper">
            <h3 class="title"><a href="#!">F2.City</a></h3>
            <p class="price">от 1990 <span>₽/месяц</span></p>            
        </div>
        <p class="description">123112, город Москва, Набережная Пресненская, дом 12, этаж 36</p>
    </div>
</template>

<style lang="scss" scoped>
    .search__result {
        padding-bottom: 15px;
        border-bottom: 1px solid var(--border);
    }
    .tag-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 5px;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
    }

    .title {
        font-size: 16px;
    }
    .price {
        font-size: 12px;

        span {
            font-weight: 600;
        }
    }
    .description {
        font-size: 10px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
</style>