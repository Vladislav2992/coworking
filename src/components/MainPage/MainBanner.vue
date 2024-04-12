<script setup>
import Tag from './Tag.vue'
</script>

<template>
    <section class="hero" style="background-image: url('/main.jpg');">
        <div class="container">
            <div class="hero__text">
                <h1 class="hero__title">Получи доступ к более чем 60 лучшим рабочим пространствам Москвы</h1>
                <button class="btn">Арендовать место</button>
            </div>
            <div class="hero__tags-wrapper">
                <h2 class="hero__tegs-title">Коворкинги Москвы:</h2>
                <div class="hero__tags">
                    <Tag name="IT Специалисты"/>
                    <Tag name="Мастерские"/>
                    <Tag name="Кабинет психолога"/>
                    <Tag name="Офисы"/>
                    <Tag name="Бьюти-коворкинг"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .hero {
        height: clamp(467px, 45vw, 538px);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            width: 100%;
        }
        
        .btn {
            min-width: 247px;
            padding: 13px;
            border: none;
            font-size: 16px;
        }
    }

    .hero__text {
        max-width: 602px;
    }

    .hero__title {
        font-size: clamp(32px, 7vw, 48px);
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 25px;
        color: var(--white);
    }

    .hero__tags-wrapper {
        padding: 35px 25px;
        border-radius: 4px;
        background-color: var(--white);
        max-width: 380px;
    }

    .hero__tegs-title {
        font-size: 24px;
        font-weight: 600;
        line-height: 80%;
        margin-bottom: 20px;
    }

    .hero__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }


    @media(max-width:1024px) {
        .hero .container {
            flex-direction: column;
            align-items: flex-start;
        }
        .hero__tags-wrapper {
           padding: 0;
            background: transparent;
        }
        .hero__tegs-title {
            display: none;
        }
    }
    @media(max-width:450px) {
        .hero .btn {
            width: 100%;
        }
    }
</style>