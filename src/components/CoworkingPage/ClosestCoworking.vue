<script setup>
import { ref } from 'vue'
 
const isLiked = ref(false)

</script>

<template>
    <div class="closest__coworking">
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
        <div class="bottom">
            <span class="distance">1.5 км от Вас</span>
            <a href="#!" class="btn btn_gradient">Смотреть тарифы</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .closest__coworking {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        transition: .3s;

        &:hover {
            box-shadow: 0 1px 2px rgba(22, 33, 54, 0.16);
        }
    }
    .image {
        border-radius: 4px;
        position: relative;
        z-index: 1;
        transform: scale(1.04);
        margin-bottom: 28px;
        width: 100%;
        height: 150px;
    }
    .header {        
        margin: 0 15px 17px 15px;
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
        line-height: 100%;
    }
    .heart {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
    }
    .info {
        margin: 0 15px 17px 15px;
        padding: 10px 0;
        border-bottom: 1px solid var(--border);
        color: var(--gray-text);
        position: relative;

        span {
            color: var(--main-text);
        }
    }
    
    .bottom {
        margin: auto 15px 18px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;

        .btn {
            padding: 8px 14px;
        }
        .btn_gradient:hover {
            border-color: var(--main-text);
            border-right: 1px solid var(--main-text);
        }
    }
    .distance {
        font-size: clamp(16px, 5vw, 20px);
        font-weight: 600;
    }

</style>