<template>
    <div class="coworking__contacts">
        <h2 class="section__title_mobile">Контакты коворкинга</h2>
        <div class="contacts">
            <h2 class="section__title">Контакты коворкинга</h2>
            <p class="address">г. Москва, 3-й Нижнелихоборский проезд, 1Ас6</p>
            <p class="mail"><a href="#!">blocks@gmail.com</a></p>
            <p class="phone"><a href="tel:">+7 988 654 12 56</a></p>
            <p class="web-site"><a href="#!">blockclub.ru</a></p>
            <p class="work-hours">Пятница - Суббота с 9:00 до 19:00</p>
            <div class="social">Соцсети:
                <img src="/vk.svg" alt="">
                <img src="/telegram.svg" alt="">
                <img src="/youtube.svg" alt="">
            </div>
            <div class="buttons">
                <button class="btn btn_gradient">Выбрать тариф</button>
                <button class="btn btn_border">Подобрать офис</button>
            </div>
        </div>
        <div class="map">
            <div id="coworking-map">
                <img src="/coworking-map.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section__title_mobile {
    font-size: clamp(20px, 5vw, 28px);
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 25px;
    display: none;
}
.coworking__contacts {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 21px;
}
.contacts {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 21px;

    .section__title {
        margin-bottom: 0;
    }
}

a {
    color: var(--main-blue);
}

p {
    position: relative;
    display: inline-block;
    color: var(--gray-text);
    padding-left: 28px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 3px;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
    }
    
    &.address:before {
        background-image: url('../../assets/images/location-gray.svg');
    }
    &.mail:before {
        background-image: url('../../assets/images/mail-gray.svg');
    }
    &.phone:before {
        background-image: url('../../assets/images/phone-gray.svg');
    }
    &.web-site:before {
        background-image: url('../../assets/images/web-gray.svg');
    }
    &.work-hours:before {
        background-image: url('../../assets/images/watch-gray.svg');
    }
}
.social {
    display: flex;
    gap: 12px;
}

.buttons {
    display: flex;
    gap: 20px;

    .btn {
        width: 100%;
        font-size: 14px;
        padding: 10px 14px;
    }
}

@media (max-width: 1150px) {
    .section__title_mobile {
        display: block;
        margin-bottom: 5px;
    }
    .contacts .section__title {
        display: none;
    }
    .coworking__contacts {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    .map {
        grid-row: 2/3;
    }
}
@media (max-width: 600px) {
    .buttons {
        gap: 8px;
    }
}
</style>