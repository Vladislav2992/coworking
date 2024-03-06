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
                    <div class="tag">IT Специалисты</div>
                    <div class="tag">Мастерские</div>
                    <div class="tag">Кабинет психолога</div>
                    <div class="tag">Офисы</div>
                    <div class="tag">Бьюти-коворкинг</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .hero {
        height: clamp(467px, 28vw, 538px);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: clamp(100px, 20vw, 150px);
        }
        
        .btn {
            min-width: 247px;
            padding: 13px;
            border: none;
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
        width: 380px;
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

    .tag {
        padding: 7px 27px;
        background-color: var(--border);
        border-radius: 30px;
        font-size: 14px;
        cursor: pointer;
    }

    @media(max-width:1024px) {
        .hero__tags-wrapper {
            display: none;
        }
    }
    @media(max-width:400px) {
        .hero .btn {
            width: 100%;
        }
    }
</style>