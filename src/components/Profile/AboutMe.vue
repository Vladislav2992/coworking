<template>
   <div class="wrapper">
    <div class="content">
        <div class="personal-info">
            <h2 class="title">Личные данные</h2>

            <div class="input__wrapper edit">
                <label for="" class="label">Имя</label>
                <input class="input"  type="text">
            </div>
            <div class="input__wrapper edit">
                <label for="" class="label">Фамилия</label>
                <input class="input" type="text">
            </div>
            <div class="input__wrapper">
                <label for="" class="label">Телефон</label>
                <input class="input" type="tel">
            </div>
            <div class="input__wrapper">
                <label for="" class="label">Дата рождения</label>
                <input class="input date-input" type="date">
            </div>
        </div>
       

        <div class="get-email-messages">
            <h2 class="title">Информационные сообщения</h2>

            <input type="checkbox" class="toggle-input" id="get-emails-input" checked>
            <label for="get-emails-input" class="get-messages" >Получать информационные сообщения на E-mail</label>
            <input type="checkbox" class="toggle-input" id="get-sales-input" checked>
            <label for="get-sales-input" class="get-messages" >Поулчать информацию о скидках, новых предложениях</label>
       </div>

       <div class="buttons">
        <button class="btn btn_border">Отмена</button>
        <button class="btn btn_gradient">Cохранить изменения</button>
       </div>
       <button class="exit">Выйти</button>
        
    </div>
   </div>

</template>

<style lang="scss" scoped>
.title {
    font-size: clamp(16px, 5vw, 20px);
    color: var(--main-text);
    font-weight: 600;
    margin-bottom: 26px;
}
.wrapper {
    display: grid;
    grid-template-columns: auto 380px;
    gap: 20px;
}
.input__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;   
    position: relative;
}

.date-input::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.edit {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 16px;
        right: 20px;
        width: 14px;
        height: 14px;
        background: url('../../assets/images/pencil.svg') no-repeat center;
    }
}

.label {
    font-size: 10px;
    padding: 1px 5px;
    color: var(--gray-text);
    background-color: #fff;
    display: inline-block;
    margin-bottom: 5px;
    position: absolute;
    top: -9px;
    left: 10px;

}
.input {
    padding: 13px 40px 13px 20px;
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--main-text);
    font-size: clamp(12px, 4vw, 15px);
}

.personal-info {
    margin-bottom: 34px;
}
.get-messages {
    font-size: clamp(12px, 4vw, 15px);
    color: var(--gray-text);
    margin-bottom: 35px;
    padding-left: 70px;
    cursor: pointer;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 55px;
        height: 22px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--border);
        border-radius: 15px;
    }

    &::after {
        width: 32px;
        background-color: var(--main-text);
        transition: transform .3s;
    }
}

.get-email-messages {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;

    .title {
        margin-bottom: 20px;
    }
}

.toggle-input {
    display: none;

    &:checked + .get-messages::after {
        transform: translateX(22px) translateY(-50%);
    }
}

.buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 28px;

    .btn_border {
        padding: 12px 60px;
    }
}

.exit {
    border: none;
    color: #000;
    background-color: transparent;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
}

@media (max-width: 850px) {
    .wrapper {
        grid-template-columns: 1fr;
        gap:0;
    }

    .title {
        margin-bottom: 10px;
    }

    .get-messages {
        &::before {
            width: 46px;
            height: 22px;
        }

        &::after {
            width: 27px;
            height: 22px;
        }
    }
    .buttons .btn_border {
        padding: 12px 17px;
    }
}
</style>