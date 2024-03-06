<script setup>
import { ref } from 'vue';
const isLiked = ref(false)
</script>

<template>
    <div class="tarife-card">
        <img class="image" src="/fitting-variant-1.jpg" alt="">
        <div class="header">
            <div class="">
                <h3 class="title">SOK CLUB (месяц) <a href="#!">BLOKS Лихоборы</a></h3>
                <p class="address">г. Москва, 3-й Нижнелихоборский проезд</p>
            </div>
            <button class="heart" @click="()=>isLiked = !isLiked">
                <img :src="isLiked ? '/heart-2.svg' : '/heart-1.svg'" alt="">
            </button>
        </div>
        <div class="info">
            <p><span>Включено:</span> безлимитный Wi-Fi, постоянная карта доступа, ежедневная уборка, тех. поддержка</p>
        </div>
        <div class="info">
            <p><span>Зоны:</span> Кухня, coffee point</p>
        </div>
        <div class="info">
            <p><span>Бонусы:</span>  1 час в Большой переговорной, 1 час в Малой переговорной, 10 часов аренды Online room в месяц, 1 локер</p>
        </div>
        <div class="bottom">
            <span class="price">9 600 ₽/месяц</span>
            <a href="#!" class="btn btn_gradient">Смотреть тарифы</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .tarife-card {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }
    .image {
        border-radius: 4px;
        position: relative;
        z-index: 1;
        transform: scale(1.04);
        margin-bottom: 28px;
        width: 100%;
    }
    .header {        
        margin: 0 15px 20px 15px;
        display: flex;
        justify-content: space-between;
    }
    .title {
        font-size: clamp(15px, 6vw, 17px);
        font-weight: 600;
        line-height: 100%;

        a {
            font-size: 10px;
            text-decoration: underline;
        }
    }
    .address {
        font-size: 10px;
        color: var(--gray-text);
    }
    .heart {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
    }
    .info {
        margin: 0 15px 10px 15px;
        padding-top: 10px;
        border-top: 1px solid var(--border);
        color: var(--gray-text);
        position: relative;

        &:nth-of-type(2) {
            border: none;
        }

        span {
            color: var(--main-text);
        }
    }
    
    .bottom {
        margin: auto 15px 25px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;

        .btn_gradient:hover {
            border-color: var(--main-text);
        }
    }
    .price {
        font-size: 16px;
        font-weight: 600;
    }

</style>

