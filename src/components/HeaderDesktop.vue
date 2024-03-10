<script setup>
    import { ref } from 'vue';
    import SearchResult from './SearchResult.vue';

    const isActiveSearch = ref(false);
</script>

<template>
    <div class="header">
        <div class="header__top">
            <div class="container">
                <div class="header__top-main">
                    <div class="logo">
                        <router-link to="/">
                            <svg width="84" height="37" viewBox="0 0 84 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.62558 31V12.2968H9.00459C10.4232 12.2968 11.6317 12.5677 12.6302 13.1095C13.6287 13.6453 14.3897 14.3911 14.9133 15.347C15.443 16.2968 15.7078 17.3927 15.7078 18.6347C15.7078 19.8767 15.4399 20.9726 14.9042 21.9224C14.3684 22.8721 13.5921 23.6119 12.5754 24.1415C11.5647 24.6712 10.341 24.9361 8.90413 24.9361H4.20092V21.7671H8.26486C9.0259 21.7671 9.65299 21.6362 10.1461 21.3744C10.6454 21.1065 11.0168 20.7382 11.2603 20.2694C11.5099 19.7945 11.6347 19.2496 11.6347 18.6347C11.6347 18.0137 11.5099 17.4718 11.2603 17.0091C11.0168 16.5403 10.6454 16.178 10.1461 15.9223C9.64691 15.6605 9.01372 15.5296 8.2466 15.5296H5.57992V31H1.62558ZM22.0937 12.2968V31H18.2032V12.2968H22.0937ZM29.2101 31.2648C28.3151 31.2648 27.5176 31.1096 26.8174 30.7991C26.1173 30.4825 25.5632 30.0167 25.1553 29.4018C24.7535 28.7808 24.5526 28.0076 24.5526 27.0822C24.5526 26.3029 24.6957 25.6484 24.9818 25.1187C25.268 24.589 25.6576 24.1628 26.1508 23.8402C26.6439 23.5175 27.204 23.274 27.8311 23.1096C28.4643 22.9452 29.1279 22.8295 29.822 22.7625C30.6378 22.6773 31.2954 22.5982 31.7946 22.5251C32.2938 22.4459 32.6561 22.3303 32.8814 22.1781C33.1066 22.0259 33.2193 21.8006 33.2193 21.5023V21.4475C33.2193 20.8691 33.0366 20.4216 32.6713 20.105C32.3121 19.7884 31.8007 19.6301 31.1371 19.6301C30.4369 19.6301 29.8798 19.7854 29.4658 20.0959C29.0518 20.4003 28.7779 20.7838 28.6439 21.2465L25.0457 20.9543C25.2284 20.1019 25.5876 19.3653 26.1234 18.7443C26.6591 18.1172 27.3501 17.6362 28.1964 17.3013C29.0488 16.9604 30.0351 16.7899 31.1553 16.7899C31.9346 16.7899 32.6805 16.8812 33.3928 17.0639C34.1112 17.2465 34.7474 17.5296 35.3015 17.9132C35.8616 18.2968 36.303 18.7899 36.6257 19.3927C36.9483 19.9893 37.1097 20.7047 37.1097 21.5388V31H33.4202V29.0548H33.3106C33.0853 29.4931 32.784 29.8798 32.4065 30.2146C32.029 30.5434 31.5754 30.8021 31.0457 30.9909C30.5161 31.1735 29.9042 31.2648 29.2101 31.2648ZM30.3243 28.5799C30.8966 28.5799 31.4019 28.4673 31.8403 28.242C32.2786 28.0106 32.6226 27.7001 32.8722 27.3105C33.1219 26.9208 33.2467 26.4794 33.2467 25.9863V24.4977C33.1249 24.5768 32.9575 24.6499 32.7444 24.7169C32.5374 24.7778 32.303 24.8356 32.0412 24.8904C31.7794 24.9391 31.5176 24.9848 31.2558 25.0274C30.994 25.0639 30.7565 25.0974 30.5435 25.1278C30.0868 25.1948 29.6881 25.3014 29.3471 25.4475C29.0062 25.5936 28.7413 25.7915 28.5526 26.0411C28.3638 26.2846 28.2695 26.589 28.2695 26.9543C28.2695 27.484 28.4613 27.8889 28.8448 28.1689C29.2345 28.4429 29.7276 28.5799 30.3243 28.5799ZM46.4659 31.274C45.029 31.274 43.7931 30.9696 42.7581 30.3607C41.7292 29.7458 40.9377 28.8934 40.3837 27.8036C39.8357 26.7138 39.5617 25.4597 39.5617 24.0411C39.5617 22.6042 39.8388 21.344 40.3928 20.2602C40.9529 19.1704 41.7474 18.3211 42.7764 17.7123C43.8053 17.0974 45.029 16.7899 46.4476 16.7899C47.6714 16.7899 48.7429 17.0121 49.6622 17.4566C50.5816 17.901 51.3091 18.5251 51.8449 19.3287C52.3807 20.1324 52.6759 21.0761 52.7307 22.1598H49.0595C48.956 21.4596 48.682 20.8965 48.2376 20.4703C47.7992 20.038 47.2239 19.8219 46.5115 19.8219C45.9088 19.8219 45.3822 19.9863 44.9316 20.315C44.4872 20.6377 44.1401 21.1096 43.8905 21.7306C43.6409 22.3516 43.5161 23.1035 43.5161 23.9863C43.5161 24.8813 43.6379 25.6423 43.8814 26.2694C44.131 26.8965 44.4811 27.3744 44.9316 27.7032C45.3822 28.032 45.9088 28.1963 46.5115 28.1963C46.956 28.1963 47.3548 28.105 47.7079 27.9224C48.0671 27.7397 48.3624 27.4749 48.5937 27.1278C48.8312 26.7747 48.9864 26.3516 49.0595 25.8584H52.7307C52.6698 26.93 52.3776 27.8737 51.854 28.6895C51.3365 29.4992 50.6211 30.1324 49.7079 30.589C48.7946 31.0457 47.714 31.274 46.4659 31.274ZM61.6143 31.274C60.1714 31.274 58.9294 30.9817 57.8883 30.3973C56.8533 29.8067 56.0557 28.9726 55.4956 27.895C54.9355 26.8113 54.6554 25.5297 54.6554 24.0502C54.6554 22.6073 54.9355 21.3409 55.4956 20.2511C56.0557 19.1613 56.8441 18.312 57.8609 17.7032C58.8837 17.0943 60.0831 16.7899 61.4591 16.7899C62.3845 16.7899 63.246 16.9391 64.0435 17.2374C64.8472 17.5296 65.5474 17.971 66.144 18.5616C66.7468 19.1522 67.2155 19.8949 67.5504 20.7899C67.8853 21.6788 68.0527 22.7199 68.0527 23.9132V24.9817H56.2079V22.5708H64.3906C64.3906 22.0106 64.2688 21.5144 64.0253 21.0822C63.7818 20.6499 63.4439 20.312 63.0116 20.0685C62.5854 19.8188 62.0892 19.694 61.523 19.694C60.9324 19.694 60.4088 19.831 59.9522 20.105C59.5017 20.3729 59.1486 20.7351 58.8928 21.1918C58.6371 21.6423 58.5062 22.1446 58.5002 22.6986V24.9909C58.5002 25.6849 58.628 26.2846 58.8837 26.7899C59.1455 27.2953 59.5139 27.6849 59.9887 27.9589C60.4636 28.2329 61.0268 28.3699 61.6782 28.3699C62.1105 28.3699 62.5063 28.309 62.8655 28.1872C63.2247 28.0654 63.5321 27.8828 63.7878 27.6393C64.0435 27.3957 64.2384 27.0974 64.3723 26.7443L67.9705 26.9817C67.7878 27.8463 67.4134 28.6012 66.8472 29.2466C66.2871 29.8858 65.5626 30.3851 64.6737 30.7443C63.7909 31.0974 62.7711 31.274 61.6143 31.274Z"
                                    fill="url(#paint0_linear_6001_226)" fill-opacity="0.8" />
                                <path
                                    d="M71.092 18.9091V16.9471L75.4155 13.4936C75.7469 13.2214 76.034 12.9757 76.2766 12.7567C76.5193 12.5378 76.7087 12.3158 76.8448 12.0909C76.9809 11.866 77.049 11.6174 77.049 11.3452C77.049 10.919 76.8744 10.5906 76.5252 10.3597C76.176 10.1289 75.7528 10.0135 75.2557 10.0135C74.723 10.0135 74.2939 10.1437 73.9684 10.4041C73.6488 10.6586 73.489 11.0285 73.489 11.5138H70.87C70.87 10.3775 71.2843 9.48674 72.1129 8.84162C72.9415 8.19058 74.0009 7.86506 75.2912 7.86506C76.1731 7.86506 76.9395 8.01894 77.5906 8.3267C78.2416 8.62855 78.7447 9.03989 79.0998 9.56072C79.4608 10.0816 79.6413 10.6645 79.6413 11.3097C79.6413 11.8305 79.5318 12.3158 79.3129 12.7656C79.0998 13.2095 78.7683 13.6475 78.3185 14.0795C77.8746 14.5057 77.3005 14.9525 76.5962 15.4201L75.016 16.592V16.6896H79.7656V18.9091H71.092Z"
                                    fill="url(#paint1_linear_6001_226)" fill-opacity="0.8" />
                                <defs>
                                    <linearGradient id="paint0_linear_6001_226" x1="-1.21739e-07" y1="21.5" x2="118.626"
                                        y2="24.1553" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#1624EC" />
                                        <stop offset="0.664583" stop-color="#777FED" />
                                        <stop offset="1" stop-color="#E9E9EF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_6001_226" x1="70" y1="17" x2="88.6502" y2="17.0782"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#1624EC" />
                                        <stop offset="0.664583" stop-color="#777FED" />
                                        <stop offset="1" stop-color="#E9E9EF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </router-link>                        
                    </div>
                    <div class="header__location">Москва</div>
                </div>
                <div class="header__top-buttons">
                    <div class="header__search-wrapper">
                        <input type="text" :class="{ 'header__search-input' : true, 'active' : isActiveSearch }" placeholder="Поиск">
                        
                        <div class="header__search-result">
                            <SearchResult />
                            <SearchResult />
                            <SearchResult />
                            <SearchResult />
                        </div>

                        <button class="header__search-btn" @click="isActiveSearch = !isActiveSearch">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.2 1.8C4.21766 1.8 1.8 4.21766 1.8 7.2C1.8 10.1823 4.21766 12.6 7.2 12.6C8.69142 12.6 10.0402 11.9966 11.0184 11.0184C11.9966 10.0402 12.6 8.69142 12.6 7.2C12.6 4.21766 10.1823 1.8 7.2 1.8ZM0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.86346 13.835 10.3962 12.8878 11.615L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L11.615 12.8878C10.3962 13.835 8.86346 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2Z"
                                    fill="#273266" />
                            </svg>
                        </button>
                    </div>
                    <button class="btn btn_blue">Зарегистрироваться</button>
                    <button class="btn btn_border">Войти</button>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <nav class="header__menu">
                    <ul class="header__menu-list">
                        <li class="header__menu-item _with-children">
                            <router-link to="/catalog">Каталог</router-link>
                            <div class="header__menu-second">
                                <ul class="header__menu-filters">
                                    <li class="header__menu-filter"><a href="#!">Все коворкинги Москвы</a></li>
                                    <li class="header__menu-filter"><a href="#!">Коворкинги по станции метро</a></li>
                                    <li class="header__menu-filter"><a href="#!">Коворкинги Москвы на карте</a></li>
                                    <li class="header__menu-filter"><a href="#!">Коворкинги рядом с вами</a></li>
                                    <li class="header__menu-filter"><a href="#!">Коворкинги Москва-Сити</a></li>
                                    <li class="header__menu-filter"><a href="#!">Коворкинги Московской области</a></li>
                                </ul>
                                <ul class="header__second-menu-items">
                                    <li class="header__second-menu-item">
                                        <a href="#!" class="header__second-menu-title">Рабочее место</a>
                                        <ul>
                                            <li class="header__third-menu"><a href="#!">Коворкинг F2.CITY</a></li>
                                            <li class="header__third-menu"><a href="#!">SOK Рыбаков Тауэр</a></li>
                                            <li class="header__third-menu"><a href="#!">CEO Rooms Крылья</a></li>
                                            <li class="header__third-menu"><a href="#!">Коворкинг officeless</a></li>
                                        </ul>
                                    </li>
                                    <li class="header__second-menu-item">
                                        <a href="#!" class="header__second-menu-title">Офис</a>
                                        <ul>
                                            <li class="header__third-menu"><a href="#!">Коворкинг F2.CITY</a></li>
                                            <li class="header__third-menu"><a href="#!">SOK Рыбаков Тауэр</a></li>
                                            <li class="header__third-menu"><a href="#!">CEO Rooms Крылья</a></li>
                                            <li class="header__third-menu"><a href="#!">Коворкинг officeless</a></li>
                                        </ul>
                                    </li>
                                    <li class="header__second-menu-item">
                                        <a href="#!" class="header__second-menu-title">Переговорная</a>
                                        <ul>
                                            <li class="header__third-menu"><a href="#!">Коворкинг F2.CITY</a></li>
                                            <li class="header__third-menu"><a href="#!">SOK Рыбаков Тауэр</a></li>
                                            <li class="header__third-menu"><a href="#!">CEO Rooms Крылья</a></li>
                                            <li class="header__third-menu"><a href="#!">Коворкинг officeless</a></li>
                                        </ul>
                                    </li>
                                    <li class="header__second-menu-item">
                                        <a href="#!" class="header__second-menu-title">Конференц-зал</a>
                                        <ul>
                                            <li class="header__third-menu"><a href="#!">Коворкинг F2.CITY</a></li>
                                            <li class="header__third-menu"><a href="#!">SOK Рыбаков Тауэр</a></li>
                                            <li class="header__third-menu"><a href="#!">CEO Rooms Крылья</a></li>
                                            <li class="header__third-menu"><a href="#!">Коворкинг officeless</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="header__menu-item"><a href="#!">Реклама</a></li>
                        <li class="header__menu-item"><a href="#!">IT Специалисты</a></li>
                        <li class="header__menu-item"><a href="#!">Бьюти-коворкинг</a></li>
                        <li class="header__menu-item"><a href="#!">Кабинет психолога</a></li>
                        <li class="header__menu-item"><a href="#!">Офисы</a></li>
                        <li class="header__menu-item"><a href="#!">Мастерские</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
    .header__top {
        box-shadow: 0 1px 2px rgba(22, 33, 54, 0.16);

        .container {
            display: flex;
            justify-content: space-between;
            padding: 16px 10px 14px;
        }

        .btn {
            padding: 8px 13px;
        }
    }

    .header__top-main {
        display: flex;
        gap: 40px;
        align-items: center;
    }

    .header__location {
        position: relative;
        padding-left: 22px;

        &::before {
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0px;
            background: url('../assets/images/location.svg') no-repeat;
            width: 16px;
            height: 16px;
        }
    }

    .header__top-buttons {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .header__search-wrapper {
        position: relative;
        border: 1px solid var(--white);
        border-radius: 8px;
        transition: .3s;
    }

    .header__search-input {
        padding: 8px 38px 8px 20px;
        border: none;
        border-radius: 8px;
        width: 0px;
        visibility: hidden;
        transition: width .3s;

        &.active {
            border: 1px solid var(--border);
            width: 400px;
            visibility: visible;
        }

        &:focus + .header__search-result {
            display: flex;
        }
    }

    .header__search-btn {
        position: absolute;
        top: 7px;
        right: 15px;
        border: none;
        background-color: transparent;
        padding: 0;
    }

    .header__search-result {
        padding: 30px 25px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow);
        position: absolute;
        left: 0;
        width: 100%;
        max-height: 212px;
        overflow-x: hidden;
        background-color: var(--white);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        display: none;
        background: var(--white);
        z-index: 2;

        &::-webkit-scrollbar {
        width: 3px;
        }

        &::-webkit-scrollbar-track {
        background: var(--border);
        }

        &::-webkit-scrollbar-thumb {
        background-color: var(--main-blue);
        border-radius: 2px;
        }
    }

    .header__bottom {
        box-shadow: 0 1px 2px rgba(22, 33, 54, 0.16);
    }

    .header__bottom .container {
        position: relative;
        padding: 16px 10px;
    }

    .header__menu-list {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }

    .header__menu-item {
        transition: .3s;       
    }

    ._with-children > a {
        position: relative;
        padding-right: 22px;
        padding-bottom: 16px;
        font-weight: 600;

        &::after {
            content: '';
            position: absolute;
            top: 6px;
            right: 0;
            width: 12px;
            height: 7px;
            background: url('../assets/images/menu-arrow.svg') no-repeat;
            transition: .3s;
        }

        &:hover:after {
            transform: rotate(-180deg);
        }
    }

    .header__menu-second {       
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 3fr;
        position: absolute;
        top: 51px;
        left: 0;
        right: 0;
        width: 100%;
        background: #fff;
        color: var(--gray-text);
        transform: translateY(-10%);
        opacity: 0;
        visibility: hidden;
        transition: .3s;
        z-index: -1;
    }

    .header__menu-item._with-children:hover .header__menu-second {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        z-index: 1;  
    }

    .header__menu-filters {
        display: flex;
        flex-direction: column;
        padding: 45px 0;
        font-size:16px;
        border-right: 1px solid var(--main-blue);

        li {
            transition: .3s;
            padding: 15px;

            &:hover {
                color: var(--white);
                background: var(--main-blue)
            }
        }
    }
    .header__second-menu-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 100px;
        padding: 45px 0;
        justify-content: space-between;

        li {
            padding: 8px 21px;
        }    

        .header__third-menu {
            padding: 8px 0;
            transition: .3s;

            &:hover {
                color: var(--white);
                background-color: var(--main-blue);               
            }
        }

    }
    .header__second-menu-title {
        display: inline-block;
        margin-bottom: 10px;
        font-weight: 600;
    }
</style>