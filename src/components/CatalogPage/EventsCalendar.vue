<script setup>
    
</script>
<template>
    <section class="events">
        <div class="container">
            <div class="events__header">
                <h2 class="section__title">Календарь событий</h2>
                <div class="buttons">
                    <button class="no-style-btn active">Сегодня</button>
                    <button class="no-style-btn">Завтра</button>
                </div>
            </div>

            <div class="event">
                <div class="image">
                    <router-link to="/event">
                        <img src="/beauty-coworking.jpg" alt="">
                    </router-link>
                </div>

                <div class="description">
                    <h3 class="title"><router-link to="/event">Бьюти Коворкинг Iris</router-link></h3>
                    <div class="info">Бьюти пространство Iris включает в себя Бьюти коворкинг и салон красоты. Здесь можно арендовать удобное</div>
                </div>
                <div class="date-info">
                    <h3 class="date">28 Марта</h3>
                    <p class="time">10:00 - 15:00</p>
                </div>

                <div class="details">
                    <p><span>Цена: </span> 9 600 ₽/месяц</p>
                    <p><span>Организатор: </span> Beauty Coworking</p>
                    <p><span>Место проведения: </span> House</p>
                    <div class="address">3-й Нижнелихоборский проезд д.54</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .events__header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .buttons {
        display: flex;
        gap: 30px;
    }

    .no-style-btn {
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: var(--gray-text);
        padding: 0;

        &.active {
            color: var(--main-text);
        }
    }

    .event {
        display: grid;
        grid-template-columns: 2fr 3fr 1fr 2fr;
        gap: 20px;
        align-items: center;
        padding: 20px 15px;
        border: 1px solid var(--main-blue);
        border-radius: 8px;
        font-size: 16px;
    }

    .image {
        border-radius: 4px;
        overflow: hidden;
        width: 100%;       
    }

    .title {
        font-weight:600;
        margin-bottom: 15px;
    }    
    .date-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        gap: 23px;
        margin-left: auto;        
        border-left: 1px solid var(--border);
        width: fit-content;
        padding-left: 13px;
    }
    .date {
        font-size: 20px;
        font-weight: 500;
    }
    .time {
        font-size: 15px;
        color: var(--gray-text);
    }
    .details {
        border-left: 1px solid var(--border);
        padding-left: 26px;
        font-size: 15px;

        p {
            margin-bottom: 13px;
        }

        span {
            color: var(--gray-text);
        }
    }

    .address {
        font-size: 12px;
        position: relative;
        padding-left: 17px;
        margin-bottom: 0;

        &::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 0;
            height: 12px;
            width: 10px;
            background: url('../../assets/images/location.svg') no-repeat center;
            background-size: cover;
            
        }
    }

    @media(max-width:1024px) {
        .event {
            grid-template-columns: 1fr 3fr;
        }

        .image {
            grid-column: 1/-1;

            img {
                width: 100%;
            }
        }
        .description {
            grid-column: 1/-1;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border);
        } 
        .date-info {
            margin-left: 0;
            padding-left: 0;
            border-left: none;
        }
    }
    @media(max-width:600px) {
        .buttons {
            gap: 15px;
        }
        .event {
            grid-template-columns: 1fr;
        }
        .date-info {
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border);
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        .details {
            padding-left: 0;
            border-left: none;
        }
    }
</style>