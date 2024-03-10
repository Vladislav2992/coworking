<script setup>
import { ref } from 'vue'

defineProps({
    stars: Number,
    inDemand: Boolean,
    popularСhoise: Boolean,
    freeSchedule: Boolean,
})

const isLiked = ref(false)

</script>

<template>
    <div class="coworking-card">
        <div class="coworking-card__images">
            <div class="coworking-card__image-wrapper"><img src="/coworking-1.jpg" alt=""></div>
            <div class="coworking-card__image-wrapper"><img src="/coworking-2.jpg" alt=""></div>
            <div class="coworking-card__image-wrapper"><img src="/coworking-3.jpg" alt=""></div>
            <div class="coworking-card__image-wrapper"><img src="/coworking-4.jpg" alt=""></div>
            <div class="coworking-card__image-wrapper"><img src="/coworking-5.jpg" alt=""></div>
        </div>
        <div class="coworking-card__content">
            <div class="coworking-card__header">                
                <div class="stars">
                    <span v-for="index in stars" :key="index" class="star">
                        <svg class="review-star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.64221 0.411991C7.53124 0.161861 7.27893 0 7 0C6.72107 0 6.46876 0.161861 6.35779 0.411991L4.73175 4.07701L0.635826 4.44575C0.356912 4.47086 0.120163 4.65607 0.0339849 4.91656C-0.0521935 5.17706 0.0287916 5.46269 0.239858 5.64267L3.32686 8.27497L2.42376 12.1644C2.36193 12.4307 2.46802 12.7074 2.69366 12.8684C2.91931 13.0294 3.2213 13.0439 3.46195 12.9052L7 10.866L10.5381 12.9052C10.7787 13.0439 11.0807 13.0294 11.3063 12.8684C11.532 12.7074 11.6381 12.4307 11.5762 12.1644L10.6731 8.27497L13.7601 5.64267C13.9712 5.46269 14.0522 5.17706 13.966 4.91656C13.8798 4.65607 13.6431 4.47086 13.3642 4.44575L9.26825 4.07701L7.64221 0.411991Z"
                                fill="url(#paint0_linear_6001_2885)" fill-opacity="0.8" />
                            <defs>
                                <linearGradient id="paint0_linear_6001_2885" x1="-2.43478e-08" y1="6.5" x2="23.7343"
                                    y2="6.75338" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1624EC" />
                                    <stop offset="0.664583" stop-color="#777FED" />
                                    <stop offset="1" stop-color="#E9E9EF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <p class="reviews">12 отзывов</p>
                </div>

                <button class="heart" @click="() => isLiked = !isLiked">
                    <img :src="isLiked ? '/heart-2.svg' : '/heart-1.svg'" alt="">
                </button>

                <h2 class="coworking-card__title">Коворкинг officeless</h2>
                <p class="coworking-address">3-й Нижнелихоборский проезд д.54</p>
            </div>

            <div class="info-wrapper">
                <div class="info"><span>Цена</span> от 1000₽/сутки, 20 000₽/месяц</div>
                <div class="info"><span>График</span> 10:00-22:00 — Ежедневно</div>
                <div class="info"><span>Тип коворкинга</span> IT специалисты</div>
            </div>

            <div class="include">
                
                <button class="include__btn _pink-gradient">Кофемашина</button>
                <button class="include__btn _red-gradient">Парковка</button>
                <button class="include__btn _blue-gradient" >Бесплатный Wi-Fi</button>
                <button class="include__btn _blue-gradient" >+4</button>
            </div>
        </div>
        <div class="coworking-card__make-choise">
           <div class="coworking-card__make-choise__description">
            <h3 v-if="inDemand" class="coworking-card__tag in-demand">Пользуется спросом</h3>
            <h3 v-if="popularСhoise" class="coworking-card__tag popular-choise">Популярный выбор</h3>
            <h3 v-if="freeSchedule" class="coworking-card__tag free-schedule">Свободный график</h3>
            <div class="closest-metro">
                <span class="walk-to-metro">Петровский парк</span><span>3м</span>
            </div>
            <div class="closest-metro">
                <span class="walk-to-metro">Росстовское шоссе</span><span>800м</span>
            </div>
           </div>
           <div class="coworking-card__buttons">
            <button class="btn btn_border">Оплата онлайн</button>
            <button class="btn btn_blue">Забронировать</button>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.coworking-card {
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    border: 1px solid var(--main-blue);
    border-radius: 8px;
    background: var(--white);
    padding: 15px;
    transition: box-shadow .3s;
    margin-bottom: 30px;

    &:hover {
        box-shadow: 0 1px 2px 0 rgba(22, 33, 54, 0.16);
    }
}

.coworking-card__images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
    margin-right: 18px;
}

.coworking-card__image-wrapper {
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
    }

    &:first-child {
        grid-column: 1/-1;
        border-radius: 8px;
    }

    &:last-child {
        position: relative;

        &::before {
            content: "Смотреть больше";
            position: absolute;
            max-width: 100px;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.4);
            font-size: 10px;
            color: var(--white);
            text-align: center;
            opacity: 0;
            transition: opacity .3s;
        }

        &:hover:before {
            opacity: 1;
        }
    }
}

.coworking-card__content {
    padding-right: 15px;
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    margin-right: 18px;
}

.coworking-card__header {
    margin-bottom: 23px;
    position: relative;
}

.stars {
    display: flex;
    margin-bottom: 10px;
}

.review-star {
    padding-right: 3px;
    cursor: pointer;
    width: 100%;
    path {
        transition: .3s;

        &:hover {
            fill: var(--main-blue);
            fill-opacity: 1;
        }
    }
}

.reviews {
    font-size: 14px;
    padding-left: 15px;
}

.heart {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    padding: 0;
    background-color: transparent;
}

.coworking-card__title {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 2px;
}

.coworking-address {
    font-size: 10px;
    color: var(--gray-text);
}

.info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.info {
    font-size: 14px;

    span {
        color: var(--gray-text);
    }
}

.include {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
.include__btn {
    padding: 4px 8px;
    color: var(--gray-text);
    font-size: 12px;
    font-family: 'Inter';
    background-color: white; 
    border: 1px solid transparent; 
    border-radius: 8px;
    position: relative;
    z-index: 3; 

    &._pink-gradient {        
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            z-index: -1;
            background: linear-gradient(90deg, rgba(244, 30, 30, .8), rgba(255, 160, 139, .8));
            border-radius: 8px;      
        }
        &::after {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            z-index: -1;
            background: white;
            border-radius: 7px;      
        }      
    }
    &._red-gradient {        
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            z-index: -1;
            background: linear-gradient(90deg, rgba(151, 0, 0, 1) 0%, rgba(222, 34, 34, 1) 66%);
            border-radius: 8px;      
        }
        &::after {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            z-index: -1;
            background: white;
            border-radius: 7px;      
        }      
    }
    &._blue-gradient {
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            z-index: -1;
            background: linear-gradient(90deg, rgba(22, 36, 236, 1), rgba(119, 127, 237, 1));
            border-radius: 8px;      
        }
        &::after {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            z-index: -1;
            background: white;
            border-radius: 7px;      
        }      
    }
}

.coworking-card__make-choise {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .btn {
        width: 100%;
    }
}
.closest-metro {
    font-size: 12px;
    color: var(--gray-text);
}

.walk-to-metro {
    position: relative;
    padding-right: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width:10px;
        height: 12px;
        background: url('../assets/images/walk.svg') no-repeat;
    }
}

.coworking-card__make-choise__description {
    display: flex;
    flex-direction: column;
    height: auto;
}

.coworking-card__tag {
    font-size: 12px;
    margin-bottom: auto;
    position: relative;
    padding-left: 17px;
}

.in-demand {
    background-image: linear-gradient(87deg, rgba(151, 0, 127, 1), rgba(222, 34, 34, 1));
    background-clip: text;
    color: transparent;

        &::before {
        content: '';
        position: absolute;
        width: 9px;
        height: 12px;
        left: 0;
        top: 2px;
        background: url('../assets/images/fire.svg') no-repeat;
    }
}

.popular-choise {
    background-image: linear-gradient(90deg, rgba(22, 36, 236, .8), rgba(119, 127, 237, 1));
    background-clip: text;
    color: transparent;
    &::before {
        content: '';
        position: absolute;
        width: 9px;
        height: 13px;
        left: 0;
        top: 2px;
        background: url('../assets/images/flash.svg') no-repeat;
    }
}
.free-schedule {
    background-image: linear-gradient(63deg, rgba(0, 151, 106, 1), rgba(34, 222, 155, 1));
    background-clip: text;
    color: transparent;
    &::before {
        content: '';
        position: absolute;
        width: 9px;
        height: 12px;
        left: 0;
        top: 2px;
        background: url('../assets/images/watch.svg') no-repeat;
    }
}

.coworking-card__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media (max-width: 900px) {
    .coworking-card {
        grid-template-columns: 1fr;
        margin-bottom: 20px;
        gap: 15px;
    }

    .coworking-card__images {
        grid-template-columns: 1fr;
        margin-right: 0;
    }
    .coworking-card__image-wrapper {
        display: none;

        &:first-child {
            display: block;
        }
    }
    .heart {
        top: 50%;
    }
    .info-wrapper {
        margin-bottom: 20px;
    }
    .coworking-card__content {
        padding: 0 0 15px 0;
        border-right: none;
        border-bottom: 1px solid var(--border);
    }
    .coworking-card__make-choise {
        flex-direction: row;
        gap: 20px;
    }
    .coworking-card__buttons {
    gap: 5px;
}
}
</style>