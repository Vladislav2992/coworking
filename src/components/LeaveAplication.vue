<template>
    <section class="leave-aplication">
        <div class="container">
            <div class="leave-aplication__text">
                <h3 class="leave-aplication__title">Ищите офис для команды? <br> 
                    Мы поможем подобрать лучший вариант!</h3>
                <p class="leave-aplication__description">Оставьте заявку и мы подберем офисное пространство под ваши запросы</p>
            </div>
            <div class="leave-aplication__buttons">
                <button class="btn">Арендовать место</button>
                <button class="btn btn_trancparent">Войти</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .leave-aplication {
        padding: 0 15px;
        .container {
            background: linear-gradient(44deg, rgba(22, 36, 236, 0.8) 0%, rgba(119, 127, 237, 0.8) 66.46%, rgba(233, 233, 239, 0.8) 100%);
            border-radius: 8px;
            padding: 30px 25px;
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
            max-width: 1180px;
        }
    }
    
    .leave-aplication__title {
        font-size: clamp(16px, 4vw, 20px);
        font-weight: 600;
        color: var(--white);
        line-height: 140%;
        margin-bottom: 28px;
    }

    .leave-aplication__description {
        font-size: clamp(15px, 4vw, 20px);
        color: var(--white);
        line-height: 140%;
    }

    .leave-aplication__buttons {
        display: flex;
        gap: 20px;

        .btn {
            padding: 13px 44px;
        }
    }
    @media(max-width:810px) {
        .leave-aplication .container {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 30px 12px;
        }
        .leave-aplication__buttons {
            gap: 20px;
        }
    }
    @media(max-width:440px) {       
        .leave-aplication__buttons .btn {
            padding: 13px 31px;
        }
    }
</style>