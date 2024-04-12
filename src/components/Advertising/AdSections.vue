<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDesktop = ref(window.innerWidth > 850);
const isMobile = ref(window.innerWidth < 850);

const handleResize = () => {
    isDesktop.value = window.innerWidth > 850;
    isMobile.value = window.innerWidth < 850;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<template>
    <section class="ad-section">
        <div class="container">
            <div class="ad__img-wrapper"  v-if="isDesktop">
                <img src="/ad/ad-img-1.png" alt="">
            </div>
            <div class="ad__description">
                <h2 class="ad__terms-title">Приоритет в выдаче в списке города и кликабельный логотип на карте города</h2>
                <p>Повышение конверсии лидов (LCR) от +30% до +40%</p>
                <div class="ad__img-wrapper"  v-if="isMobile">
                    <img src="/ad/ad-img-1.png" alt="">
                </div>
                <div class="submit-application">
                    <p class="price">3 000 - 8 000₽/месяц</p>
                    <button class="btn btn_gradient">Оставить заявку</button>
                </div>  
            </div> 
        </div>
    </section>

    <section class="ad-section">
        <div class="container"> 
            <div class="ad__img-wrapper" v-if="isDesktop">
                <img src="/ad/ad-img-2.png" alt="">
            </div>
            <div class="ad__description">
                <h2 class="ad__terms-title">Открытие контактов в карточке пространства/коворкинга</h2>
                <p>Повышение конверсии лидов (LCR) +40% Получайте десятки звонков в месяц от вашей целевой аудитории </p>
                <div class="ad__img-wrapper" v-if="isMobile">
                    <img src="/ad/ad-img-2.png" alt="">
                </div>
                <div class="submit-application">
                    <p class="price">5 000 ₽/месяц</p>
                    <button class="btn btn_gradient">Оставить заявку</button>
                </div>  
            </div> 
        </div>
    </section>

    <section class="ad-section">
        <div class="container"> 
            <div class="ad__img-wrapper" v-if="isDesktop">
                <img src="/ad/ad-img-3.png" alt="">
            </div>
            <div class="ad__description">
                <h2 class="ad__terms-title">Баннер на главной</h2>
                <p>Более 100 тыс. показов в месяц для вашей ЦА <br> На всю ширину, в ротации 3 рекламодателя либо эксклюзив</p>
                <div class="ad__img-wrapper" v-if="isMobile">
                    <img src="/ad/ad-img-3.png" alt="">
                </div>
                <div class="submit-application">
                    <p class="price">15 000 ₽/месяц</p>
                    <button class="btn btn_gradient">Оставить заявку</button>
                </div>  
            </div> 
        </div>
    </section>

    <section class="ad-section">
        <div class="container"> 
            <div class="ad__img-wrapper" v-if="isDesktop">
                <img src="/ad/ad-img-4.png" alt="">
            </div>
            <div class="ad__description">
                <h2 class="ad__terms-title">Боковой баннер на внутренних страницах</h2>
                <p>Охват ежемесячно 28-42k</p>
                <div class="ad__img-wrapper" v-if="isMobile">
                    <img src="/ad/ad-img-4.png" alt="">
                </div>
                <div class="regions-prices">
                        <span>Для Москвы и Санкт-Петербурга</span>
                        <div class="">
                            <p class="price">20 000₽/месяц</p>
                            <p class="price">12 000₽/месяц</p>
                        </div>
                </div>
                <div class="regions-prices">
                    <span>Для других регионов</span>
                    <div class="">
                        <p class="price">6 000₽/месяц</p>
                        <p class="price">4000₽/месяц</p>
                    </div>
                </div>
                <button class="btn btn_gradient">Оставить заявку</button>  
            </div>                 
        </div>
    </section>

</template>

<style lang="scss" scoped>
.ad-section {
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &:nth-child(2n + 1) {
        .ad__description {
            order: 1;
        }
        .ad__img-wrapper {
            order: 2;
        }
    } 
    
    .btn:hover {
        border: 1px solid var(--main-text);
    }
}

.ad__description {
    max-width: 440px;
}
p{
    color: var(--gray-text);
    font-size: 16px;
    
    margin-bottom: 25px;
    line-height: 120%;
}

.ad__terms-title {
    font-size: clamp(18px, 5vw, 20px);
    color: var(--main-text);
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 15px;
}

.submit-application {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: auto;
}
.price {
    font-size: clamp(16px, 4vw, 20px);
    font-weight: 500;
    color: var(--main-text);
    margin: 0;
}

.regions-prices {    
    span {
        font-size: 14px;
        line-height: 130%;
        color: var(--main-text);
        font-weight: 500;
        margin-bottom: 10px;
        display: inline-block;
    }

    div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 8px;
            margin-bottom: 20px;
            border-bottom: 1px solid var(--border);
        }
}

@media (max-width:850px) {
    .ad-section .container {
        display: block;
    }
    .ad__description {
        width: 100%;
        max-width: none;
    }
    .ad__img-wrapper {
        margin-bottom: 30px;
    }
}
@media (max-width:500px) {
    .submit-application {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .ad__description .btn {
            width: 100%;
        }
}
</style>