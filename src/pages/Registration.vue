<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
</script>

<template>
    <Breadcrumbs />

   <section class="registration">
    <div class="container">
        <div class="registration__inner">
            <form class="registration__form">
                <h1 class="page__title">Регистрация</h1>
                <div class="input-wrapper">
                    <input type="text" id="registration__form-name" class="registration__form-input" required>
                    <label for="registration__form-name" class="registration__form-label">Имя</label>
                </div>
                <div class="input-wrapper">
                    <input type="text" id="registration__form-last-name" class="registration__form-input" required>
                    <label for="registration__form-last-name" class="registration__form-label">Фамилия</label>
                </div>
                <div class="input-wrapper">
                    <input type="text" id="registration__form-phone" class="registration__form-input" required>
                    <label for="registration__form-phone" class="registration__form-label">Ваш телефон</label>
                </div>

                <div class="registration__form-checkbox-wrapper">
                    <input type="checkbox" class="registration__form-checkbox" id="registration__form-checkbox">
                    <label for="registration__form-checkbox" class="registration__form-checkbox-label">Подтвердите что вы не робот</label>
                </div>
            
                <button class="btn btn_gradient">Зарегестрироваться</button>

                <p class="registration__rules-agree">Нажимая кнопку "Зарегестрироваться", Вы соглашаетесь c условиями <a href="#!" class="_underline">политики конфиденциальности</a></p>
            </form>
            <div class="registration__img">
                <img src="/registration.svg" alt="">
            </div>
        </div>
    </div>
   </section>

</template>

<style lang="scss">

.registration {
    .page__title {
        margin-bottom: 10px;
    }

    .btn {
        font-size: 16px;
    }
}
    .registration__inner {
        display: flex;
        justify-content: space-between;
    }

    .registration__form {
        width: 380px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .input-wrapper {
        width: 100%;
        position: relative;
    }
    .registration__form-label {
        position: absolute;
        left: 15px;
        top: 16px;
        font-size: 14px;
        line-height: 100%;
        color: var(--gray-text);
        background-color: #fff;
        
        transition: .3s;
    }
    .registration__form-input {
        background-color: #fff;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 14px;
        color: var(--main-text);
        padding: 13px 15px;
        width: 100%;

        &:focus + .registration__form-label,
        &:valid + .registration__form-label {
            font-size: 10px;
            top: -5px;
            padding: 0 5px;
        }
    }

    .registration__form-checkbox-wrapper {
        margin: 6px 0 5px 0;
    }

    .registration__form-checkbox {
        display: none;

        &:checked + .registration__form-checkbox-label::after {
            transform: scale(1);
        }
    }

    .registration__form-checkbox-label {
        font-size: 14px;
        color: var(--gray-text);
        padding-left: 43px;
        position: relative;
        cursor: pointer;
        
        &::before, 
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: -5px;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            border-radius: 4px;
            background-color: var(--white);
        }

        &::after {
            background: url('../assets/images/checked-green.svg') no-repeat center;
            transform: scale(0);
            transition: transform .3s;
        }
    }

    .registration__rules-agree {
        font-size: 12px;
        color: var(--gray-text);
        line-height: 150%;
    }
    @media(max-width: 850px) {
        .registration__img {
            display: none;
        }
        .registration__form {
            width: 100%;
        }
    }
</style>