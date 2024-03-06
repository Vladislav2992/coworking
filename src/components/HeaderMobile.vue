<script setup>
import { ref } from 'vue'
import SearchResult from './SearchResult.vue';


const isActiveMenu = ref(false)
const isActiveSearch = ref(false)
const isCatalogOpen = ref(false)

</script>

<template>
    <div class="container header__mobile">
        <div class="logo">
            <a href="#!">
                <svg width="84" height="37" viewBox="0 0 84 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.62558 31V12.2968H9.00459C10.4232 12.2968 11.6317 12.5677 12.6302 13.1095C13.6287 13.6453 14.3897 14.3911 14.9133 15.347C15.443 16.2968 15.7078 17.3927 15.7078 18.6347C15.7078 19.8767 15.4399 20.9726 14.9042 21.9224C14.3684 22.8721 13.5921 23.6119 12.5754 24.1415C11.5647 24.6712 10.341 24.9361 8.90413 24.9361H4.20092V21.7671H8.26486C9.0259 21.7671 9.65299 21.6362 10.1461 21.3744C10.6454 21.1065 11.0168 20.7382 11.2603 20.2694C11.5099 19.7945 11.6347 19.2496 11.6347 18.6347C11.6347 18.0137 11.5099 17.4718 11.2603 17.0091C11.0168 16.5403 10.6454 16.178 10.1461 15.9223C9.64691 15.6605 9.01372 15.5296 8.2466 15.5296H5.57992V31H1.62558ZM22.0937 12.2968V31H18.2032V12.2968H22.0937ZM29.2101 31.2648C28.3151 31.2648 27.5176 31.1096 26.8174 30.7991C26.1173 30.4825 25.5632 30.0167 25.1553 29.4018C24.7535 28.7808 24.5526 28.0076 24.5526 27.0822C24.5526 26.3029 24.6957 25.6484 24.9818 25.1187C25.268 24.589 25.6576 24.1628 26.1508 23.8402C26.6439 23.5175 27.204 23.274 27.8311 23.1096C28.4643 22.9452 29.1279 22.8295 29.822 22.7625C30.6378 22.6773 31.2954 22.5982 31.7946 22.5251C32.2938 22.4459 32.6561 22.3303 32.8814 22.1781C33.1066 22.0259 33.2193 21.8006 33.2193 21.5023V21.4475C33.2193 20.8691 33.0366 20.4216 32.6713 20.105C32.3121 19.7884 31.8007 19.6301 31.1371 19.6301C30.4369 19.6301 29.8798 19.7854 29.4658 20.0959C29.0518 20.4003 28.7779 20.7838 28.6439 21.2465L25.0457 20.9543C25.2284 20.1019 25.5876 19.3653 26.1234 18.7443C26.6591 18.1172 27.3501 17.6362 28.1964 17.3013C29.0488 16.9604 30.0351 16.7899 31.1553 16.7899C31.9346 16.7899 32.6805 16.8812 33.3928 17.0639C34.1112 17.2465 34.7474 17.5296 35.3015 17.9132C35.8616 18.2968 36.303 18.7899 36.6257 19.3927C36.9483 19.9893 37.1097 20.7047 37.1097 21.5388V31H33.4202V29.0548H33.3106C33.0853 29.4931 32.784 29.8798 32.4065 30.2146C32.029 30.5434 31.5754 30.8021 31.0457 30.9909C30.5161 31.1735 29.9042 31.2648 29.2101 31.2648ZM30.3243 28.5799C30.8966 28.5799 31.4019 28.4673 31.8403 28.242C32.2786 28.0106 32.6226 27.7001 32.8722 27.3105C33.1219 26.9208 33.2467 26.4794 33.2467 25.9863V24.4977C33.1249 24.5768 32.9575 24.6499 32.7444 24.7169C32.5374 24.7778 32.303 24.8356 32.0412 24.8904C31.7794 24.9391 31.5176 24.9848 31.2558 25.0274C30.994 25.0639 30.7565 25.0974 30.5435 25.1278C30.0868 25.1948 29.6881 25.3014 29.3471 25.4475C29.0062 25.5936 28.7413 25.7915 28.5526 26.0411C28.3638 26.2846 28.2695 26.589 28.2695 26.9543C28.2695 27.484 28.4613 27.8889 28.8448 28.1689C29.2345 28.4429 29.7276 28.5799 30.3243 28.5799ZM46.4659 31.274C45.029 31.274 43.7931 30.9696 42.7581 30.3607C41.7292 29.7458 40.9377 28.8934 40.3837 27.8036C39.8357 26.7138 39.5617 25.4597 39.5617 24.0411C39.5617 22.6042 39.8388 21.344 40.3928 20.2602C40.9529 19.1704 41.7474 18.3211 42.7764 17.7123C43.8053 17.0974 45.029 16.7899 46.4476 16.7899C47.6714 16.7899 48.7429 17.0121 49.6622 17.4566C50.5816 17.901 51.3091 18.5251 51.8449 19.3287C52.3807 20.1324 52.6759 21.0761 52.7307 22.1598H49.0595C48.956 21.4596 48.682 20.8965 48.2376 20.4703C47.7992 20.038 47.2239 19.8219 46.5115 19.8219C45.9088 19.8219 45.3822 19.9863 44.9316 20.315C44.4872 20.6377 44.1401 21.1096 43.8905 21.7306C43.6409 22.3516 43.5161 23.1035 43.5161 23.9863C43.5161 24.8813 43.6379 25.6423 43.8814 26.2694C44.131 26.8965 44.4811 27.3744 44.9316 27.7032C45.3822 28.032 45.9088 28.1963 46.5115 28.1963C46.956 28.1963 47.3548 28.105 47.7079 27.9224C48.0671 27.7397 48.3624 27.4749 48.5937 27.1278C48.8312 26.7747 48.9864 26.3516 49.0595 25.8584H52.7307C52.6698 26.93 52.3776 27.8737 51.854 28.6895C51.3365 29.4992 50.6211 30.1324 49.7079 30.589C48.7946 31.0457 47.714 31.274 46.4659 31.274ZM61.6143 31.274C60.1714 31.274 58.9294 30.9817 57.8883 30.3973C56.8533 29.8067 56.0557 28.9726 55.4956 27.895C54.9355 26.8113 54.6554 25.5297 54.6554 24.0502C54.6554 22.6073 54.9355 21.3409 55.4956 20.2511C56.0557 19.1613 56.8441 18.312 57.8609 17.7032C58.8837 17.0943 60.0831 16.7899 61.4591 16.7899C62.3845 16.7899 63.246 16.9391 64.0435 17.2374C64.8472 17.5296 65.5474 17.971 66.144 18.5616C66.7468 19.1522 67.2155 19.8949 67.5504 20.7899C67.8853 21.6788 68.0527 22.7199 68.0527 23.9132V24.9817H56.2079V22.5708H64.3906C64.3906 22.0106 64.2688 21.5144 64.0253 21.0822C63.7818 20.6499 63.4439 20.312 63.0116 20.0685C62.5854 19.8188 62.0892 19.694 61.523 19.694C60.9324 19.694 60.4088 19.831 59.9522 20.105C59.5017 20.3729 59.1486 20.7351 58.8928 21.1918C58.6371 21.6423 58.5062 22.1446 58.5002 22.6986V24.9909C58.5002 25.6849 58.628 26.2846 58.8837 26.7899C59.1455 27.2953 59.5139 27.6849 59.9887 27.9589C60.4636 28.2329 61.0268 28.3699 61.6782 28.3699C62.1105 28.3699 62.5063 28.309 62.8655 28.1872C63.2247 28.0654 63.5321 27.8828 63.7878 27.6393C64.0435 27.3957 64.2384 27.0974 64.3723 26.7443L67.9705 26.9817C67.7878 27.8463 67.4134 28.6012 66.8472 29.2466C66.2871 29.8858 65.5626 30.3851 64.6737 30.7443C63.7909 31.0974 62.7711 31.274 61.6143 31.274Z"
                        fill="url(#paint0_linear_6001_226)" fill-opacity="0.8" />
                    <path
                        d="M71.092 18.9091V16.9471L75.4155 13.4936C75.7469 13.2214 76.034 12.9757 76.2766 12.7567C76.5193 12.5378 76.7087 12.3158 76.8448 12.0909C76.9809 11.866 77.049 11.6174 77.049 11.3452C77.049 10.919 76.8744 10.5906 76.5252 10.3597C76.176 10.1289 75.7528 10.0135 75.2557 10.0135C74.723 10.0135 74.2939 10.1437 73.9684 10.4041C73.6488 10.6586 73.489 11.0285 73.489 11.5138H70.87C70.87 10.3775 71.2843 9.48674 72.1129 8.84162C72.9415 8.19058 74.0009 7.86506 75.2912 7.86506C76.1731 7.86506 76.9395 8.01894 77.5906 8.3267C78.2416 8.62855 78.7447 9.03989 79.0998 9.56072C79.4608 10.0816 79.6413 10.6645 79.6413 11.3097C79.6413 11.8305 79.5318 12.3158 79.3129 12.7656C79.0998 13.2095 78.7683 13.6475 78.3185 14.0795C77.8746 14.5057 77.3005 14.9525 76.5962 15.4201L75.016 16.592V16.6896H79.7656V18.9091H71.092Z"
                        fill="url(#paint1_linear_6001_226)" fill-opacity="0.8" />
                    <defs>
                        <linearGradient id="paint0_linear_6001_226" x1="-1.21739e-07" y1="21.5" x2="118.626" y2="24.1553"
                            gradientUnits="userSpaceOnUse">
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
            </a>
        </div>

        <div class="header__mobile-nav-buttons">
            <div :class="{'mobile-search' : true, 'active' : isActiveSearch}">
                <div class="header__search-wrapper">
                <input  type="text" class="header__search-input" placeholder="Поиск">

                <div class="header__search-result">
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>

                <button @click="isActiveSearch = true" class="header__search-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.2 1.8C4.21766 1.8 1.8 4.21766 1.8 7.2C1.8 10.1823 4.21766 12.6 7.2 12.6C8.69142 12.6 10.0402 11.9966 11.0184 11.0184C11.9966 10.0402 12.6 8.69142 12.6 7.2C12.6 4.21766 10.1823 1.8 7.2 1.8ZM0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.86346 13.835 10.3962 12.8878 11.615L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L11.615 12.8878C10.3962 13.835 8.86346 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2Z"
                            fill="#273266" />
                    </svg>
                </button>

            </div>
            <button @click="isActiveSearch = false" class="header__search-cancle">Отменить</button>
        </div>
            <a href="#!">Каталог</a>

            <div class="burger" @click="isActiveMenu = !isActiveMenu">
                <img :src="isActiveMenu ? '/close.svg' : '/burger.svg'"/>
            </div>
        </div>

        <div :class="{ 'active' : isActiveMenu, 'header__mobile-nav' : true }">
            <nav class="header__mobile-menu">
                <ul class="header__mobile-menu-list">
                    <li class="header__mobile-menu-item _with-children">                        
                        <div @click="isCatalogOpen = !isCatalogOpen">
                            <a class="header__mobile-menu-catalog" href="#!" >Каталог</a>
                        </div>
                        
                        <div class="header__mobile-menu-second">
                                <ul :class="{'header__mobile-menu-filters' : true, 'active' : isCatalogOpen}"> 
                                    <li class="header__mobile-menu-filter active"><a href="#!">Все коворкинги Москвы</a>
                                        <!-- <ul class="header__second-menu-items">
                                            <li class="header__second-menu-item">
                                                Рабочее место
                                                <ul>
                                                    <li><a href="#!">Коворкинг F2.CITY</a></li>
                                                    <li><a href="#!">SOK Рыбаков Тауэр</a></li>
                                                    <li><a href="#!">CEO Rooms Крылья</a></li>
                                                    <li><a href="#!">Коворкинг officeless</a></li>
                                                </ul>
                                            </li>
                                            <li class="header__second-menu-item">
                                                Офис
                                                <ul>
                                                    <li><a href="#!">Коворкинг F2.CITY</a></li>
                                                    <li><a href="#!">SOK Рыбаков Тауэр</a></li>
                                                    <li><a href="#!">CEO Rooms Крылья</a></li>
                                                    <li><a href="#!">Коворкинг officeless</a></li>
                                                </ul>
                                            </li>
                                            <li class="header__second-menu-item">
                                                Переговорная
                                                <ul>
                                                    <li><a href="#!">Коворкинг F2.CITY</a></li>
                                                    <li><a href="#!">SOK Рыбаков Тауэр</a></li>
                                                    <li><a href="#!">CEO Rooms Крылья</a></li>
                                                    <li><a href="#!">Коворкинг officeless</a></li>
                                                </ul>
                                            </li>
                                            <li class="header__second-menu-item">
                                                Конференц-зал
                                                <ul>
                                                    <li><a href="#!">Коворкинг F2.CITY</a></li>
                                                    <li><a href="#!">SOK Рыбаков Тауэр</a></li>
                                                    <li><a href="#!">CEO Rooms Крылья</a></li>
                                                    <li><a href="#!">Коворкинг officeless</a></li>
                                            </ul>
                                        </li>
                                        </ul> -->
                                    </li>
                                    <li class="header__mobile-menu-filter"><a href="#!">Коворкинги по станции метро</a></li>
                                    <li class="header__mobile-menu-filter"><a href="#!">Коворкинги Москвы на карте</a></li>
                                    <li class="header__mobile-menu-filter"><a href="#!">Коворкинги рядом с вами</a></li>
                                    <li class="header__mobile-menu-filter"><a href="#!">Коворкинги Москва-Сити</a></li>
                                    <li class="header__mobile-menu-filter"><a href="#!">Коворкинги Московской области</a></li>
                                </ul>                                
                            </div>
                    </li>
                    <li class="header__mobile-menu-item"><a href="#!">Реклама</a></li>
                    <li class="header__mobile-menu-item"><a href="#!">IT Специалисты</a></li>
                    <li class="header__mobile-menu-item"><a href="#!">Бьюти-коворкинг</a></li>
                    <li class="header__mobile-menu-item"><a href="#!">Кабинет психолога</a></li>
                    <li class="header__mobile-menu-item"><a href="#!">Офисы</a></li>
                    <li class="header__mobile-menu-item"><a href="#!">Мастерские</a></li>
                </ul>

                <div class="header__mobile-location">
                    <span>Местоположение</span>
                    <div class="header__location">Москва</div>
                </div>

                <div class="header__mobile-buttons">
                    <button class="btn btn_blue">Зарегистрироваться</button>
                    <button class="btn btn_border">Войти</button>
                </div>
                <div class="header__mobile-icons">
                    <div class="header__mobile-icon">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1553 21H4.84465C2.16837 21 0 18.8195 0 16.1403V8.8947C0 7.56487 0.820465 5.89282 1.87535 5.07145L7.14 0.964647C8.72233 -0.267396 11.2521 -0.326064 12.893 0.827753L18.9293 5.06168C20.0916 5.87326 21 7.61376 21 9.03159V16.1501C21 18.8195 18.8316 21 16.1553 21ZM8.0386 2.11846L2.77395 6.22527C2.08047 6.77285 1.46512 8.01467 1.46512 8.8947V16.1403C1.46512 18.0079 2.97907 19.5333 4.84465 19.5333H16.1553C18.0209 19.5333 19.5349 18.0177 19.5349 16.1501V9.03159C19.5349 8.09289 18.8609 6.7924 18.0893 6.26438L12.053 2.03046C10.9395 1.24821 9.10326 1.28732 8.0386 2.11846Z"
                                fill="white" />
                            <path
                                d="M10.5 17.85C9.926 17.85 9.45 17.4533 9.45 16.975V13.475C9.45 12.9967 9.926 12.6 10.5 12.6C11.074 12.6 11.55 12.9967 11.55 13.475V16.975C11.55 17.4533 11.074 17.85 10.5 17.85Z"
                                fill="white" />
                        </svg>
                        <p>Главная</p>
                    </div>
                    <div class="header__mobile-icon">
                        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.43326 21C7.95021 21 7.4672 20.8827 7.0244 20.6481C6.12875 20.1592 5.59534 19.2891 5.59534 18.3017V13.0712C5.59534 12.5726 5.26322 11.8394 4.95125 11.4581L1.12711 7.55727C0.493109 6.94135 0 5.86592 0 5.07402V2.80589C0 1.23187 1.22777 0 2.78762 0H16.2124C17.7521 0 19 1.21231 19 2.70812V4.87851C19 5.90505 18.366 7.08798 17.7622 7.6648C17.4704 7.94832 16.9873 7.94832 16.6955 7.6648C16.4036 7.38128 16.4036 6.91201 16.6955 6.62849C17.0678 6.26676 17.4905 5.45532 17.4905 4.87851V2.70812C17.4905 2.02376 16.9168 1.46648 16.2124 1.46648H2.78762C2.07311 1.46648 1.50953 2.0531 1.50953 2.80589V5.07402C1.50953 5.43575 1.81144 6.14946 2.20392 6.53075L6.07843 10.4902C6.59167 11.1062 7.0948 12.1425 7.0948 13.0712V18.3017C7.0948 18.9469 7.54768 19.2598 7.74895 19.3673C8.18168 19.6019 8.69495 19.5922 9.09749 19.3575L10.5064 18.4777C10.7982 18.3115 11.08 17.7737 11.08 17.412C11.08 17.0112 11.4221 16.6788 11.8348 16.6788C12.2474 16.6788 12.5895 17.0112 12.5895 17.412C12.5895 18.2919 12.0259 19.2989 11.3114 19.7193L9.91264 20.5992C9.45978 20.8631 8.94651 21 8.43326 21Z"
                                fill="white" />
                            <path
                                d="M13.6063 15.6424C11.4124 15.6424 9.63114 13.912 9.63114 11.7807C9.63114 9.64942 11.4124 7.91897 13.6063 7.91897C15.8001 7.91897 17.5814 9.64942 17.5814 11.7807C17.5814 13.912 15.8001 15.6424 13.6063 15.6424ZM13.6063 9.38545C12.2477 9.38545 11.1407 10.4609 11.1407 11.7807C11.1407 13.1005 12.2477 14.1759 13.6063 14.1759C14.9648 14.1759 16.0718 13.1005 16.0718 11.7807C16.0718 10.4609 14.9648 9.38545 13.6063 9.38545Z"
                                fill="white" />
                            <path
                                d="M17.4303 16.229C17.2391 16.229 17.0479 16.1606 16.897 16.0139L15.8906 15.0363C15.5988 14.7528 15.5988 14.2835 15.8906 14C16.1825 13.7165 16.6655 13.7165 16.9573 14L17.9637 14.9776C18.2555 15.2611 18.2555 15.7304 17.9637 16.0139C17.8228 16.1508 17.6215 16.229 17.4303 16.229Z"
                                fill="white" />
                        </svg>
                        <p>Каталог</p>
                    </div>
                    <div class="header__mobile-icon">
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.99075 9.73709C6.96301 9.73709 6.94452 9.73709 6.91678 9.73709C6.87054 9.7277 6.80581 9.7277 6.75033 9.73709C4.06869 9.65258 2.04359 7.51174 2.04359 4.87324C2.04359 2.18779 4.19815 0 6.8428 0C9.48745 0 11.642 2.18779 11.642 4.87324C11.6328 7.51174 9.59842 9.65258 7.01849 9.73709C7.00925 9.73709 7 9.73709 6.99075 9.73709ZM6.8428 1.40845C4.96565 1.40845 3.43065 2.96714 3.43065 4.87324C3.43065 6.75117 4.87318 8.26291 6.71334 8.32864C6.75958 8.31925 6.88904 8.31925 7.00925 8.32864C8.82167 8.24413 10.2457 6.73239 10.255 4.87324C10.255 2.96714 8.71995 1.40845 6.8428 1.40845Z"
                                fill="white" />
                            <path
                                d="M7 20C5.18758 20 3.36592 19.5305 1.98811 18.5915C0.702774 17.7277 0 16.5446 0 15.2582C0 13.9718 0.702774 12.7793 1.98811 11.9061C4.76222 10.0376 9.25628 10.0376 12.0119 11.9061C13.288 12.77 14 13.9531 14 15.2394C14 16.5258 13.2972 17.7183 12.0119 18.5915C10.6248 19.5305 8.81242 20 7 20ZM2.75561 13.0892C1.8679 13.6901 1.38705 14.4601 1.38705 15.2676C1.38705 16.0657 1.87715 16.8357 2.75561 17.4272C5.05812 18.9953 8.94188 18.9953 11.2444 17.4272C12.1321 16.8263 12.6129 16.0563 12.6129 15.2488C12.6129 14.4507 12.1229 13.6808 11.2444 13.0892C8.94188 11.5305 5.05812 11.5305 2.75561 13.0892Z"
                                fill="white" />
                        </svg>
                        <p>Профиль</p>
                    </div>
                    <div class="header__mobile-icon">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.5 18C9.22605 18 8.96093 17.9627 8.74 17.8788C5.36419 16.657 0 12.3202 0 5.91295C0 2.6487 2.50093 0 5.57628 0C7.06977 0 8.46605 0.615544 9.5 1.71606C10.534 0.615544 11.9302 0 13.4237 0C16.4991 0 19 2.65803 19 5.91295C19 12.3295 13.6358 16.657 10.26 17.8788C10.0391 17.9627 9.77395 18 9.5 18ZM5.57628 1.39896C3.23442 1.39896 1.32558 3.4228 1.32558 5.91295C1.32558 12.2829 7.13163 15.8269 9.17302 16.5637C9.33209 16.6197 9.67674 16.6197 9.83581 16.5637C11.8684 15.8269 17.6833 12.2922 17.6833 5.91295C17.6833 3.4228 15.7744 1.39896 13.4326 1.39896C12.0893 1.39896 10.8433 2.06114 10.0391 3.20829C9.79163 3.56269 9.22605 3.56269 8.9786 3.20829C8.15674 2.05181 6.91953 1.39896 5.57628 1.39896Z"
                                fill="white" />
                        </svg>
                        <p>Избранное</p>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.header__mobile.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 10px 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    z-index: 100;
}

.header__mobile-nav-buttons {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header__search-cancle {
    display: none;
    border: none;
    background-color: transparent;
}

.mobile-search {
    .header__search-result {       
        width: 100vw;
        left: -16px;
        z-index: 11;
    }
}

.mobile-search.active {
    position: absolute;
    top: 13px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    background-color: var(--white);

    & .header__search-wrapper {
        width: 100%;
    }
    & .header__search-input {
        width: 100%;
        border: 1px solid var(--border);
        visibility: visible;
    }

    & .header__search-cancle {
        display: block;
    }
}

.header__mobile-menu {
    display: flex;
    flex-direction: column;
    height: calc(100dvh - 76px);    
    position: relative;    
}

.header__mobile-nav {
    padding: 15px;
    font-size: 15px;
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 100dvh;
    z-index: 10;
    transform: translateX(120%);
    visibility: hidden;
    transition: .3s;   

    &.active {
        transform: translateX(0);
        visibility: visible;
    }
}

.header__mobile-menu-catalog {
    position: relative;
        padding-right: 22px;
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

.header__mobile-menu-filters {
    max-height: 0;
    transition: .3s;
    overflow: hidden;

    &.active {
        max-height: 350px;
    }
}

.header__mobile-menu-filter {
    position: relative;
    color: var(--gray-text);
    border-top: 1px solid var(--border);
    padding-top: 17px;
    margin-bottom: 17px;

    &:first-child {
        border-top: none;
    }

    &::after {
        content: '';
        position: absolute;
        top: 20px;
        right: 0;
        width: 14px;
        height: 8px;
        background: url('../assets/images/menu-arrow.svg') no-repeat;
    }

    .header__second-menu-items {
        display: block;
        padding: 10px;
    }

    .header__second-menu-item {
        margin-bottom: 10px;
    }
}

.header__mobile-menu-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.header__mobile-location {
    display: flex;
    gap: 10px;
    padding: 11px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin: 15px 0;

    span {
        color: var(--gray-text);
    }
}

.header__mobile-buttons {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.header__mobile-icons {
    padding: 13px 15px 9px 15px;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg, #1624EC, #777FED);
    color: var(--white);
    position: absolute;
    bottom: 0;
    left: -15px;
    width: calc(100% + 30px);
    border-radius: 4px 4px 0 0;
}

.header__mobile-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
}

.burger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 23px;

    span {
        height: 3px;
        width: 100%;
        background-color: var(--main-text);
        border-radius: 3px;
    }
}</style>

