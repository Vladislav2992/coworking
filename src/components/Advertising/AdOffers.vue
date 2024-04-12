<template>
  <section class="ad-offers">
    <div class="container">
      <div class="wrapper">
        <div class="ad-offers__include">
          <h2 class="section__title">Пакетные предложения</h2>
          <ul class="list">
            <li class="item">Цена</li>
            <li class="item">Открытие контактов в карточке пространства</li>
            <li class="item">Кликабельный логотип на карте города</li>
            <li class="item">Приоритет в выдаче в списке города</li>
            <li class="item">Вертикальный баннер на внутренних страницах</li>
          </ul>
        </div>

        <div class="card">
          <div class="card__inner blue">
            <h3 class="card__title blue">Размещение премиум</h3>
            <ul class="benefits">
              <li class="benefit">
                <div class="name">Цена</div>
                <div class="">
                  38 000 ₽/месяц для Москвы и СПБ 21 000 ₽/месяц для других
                  регионов
                </div>
              </li>
              <li class="benefit">
                <div class="name">
                  Открытие контактов в карточке пространства
                </div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Кликабельный логотип на карте города</div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Приоритет в выдаче в списке города</div>
                <div class="include">Топ 5</div>
              </li>
              <li class="benefit">
                <div class="name">
                  Вертикальный баннер на внутренних страницах
                </div>
                <div class="include">1 - 3 место в ротации</div>
              </li>
            </ul>
          </div>
          <button class="btn btn_gradient">Оставить заявку</button>
        </div>
        <div class="card">
          <div class="popular"><span>Популярный выбор</span></div>
          <div class="card__inner red">
            <h3 class="card__title red">Размещение комфорт</h3>
            <ul class="benefits">
              <li class="benefit">
                <div class="name">Цена</div>
                <div class="">
                  38 000 ₽/месяц для Москвы и СПБ 21 000 ₽/месяц для других
                  регионов
                </div>
              </li>
              <li class="benefit">
                <div class="name">
                  Открытие контактов в карточке пространства
                </div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Кликабельный логотип на карте города</div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Приоритет в выдаче в списке города</div>
                <div class="include">Топ 5</div>
              </li>
              <li class="benefit">
                <div class="name">
                  Вертикальный баннер на внутренних страницах
                </div>
                <div class="include">1 - 3 место в ротации</div>
              </li>
            </ul>
          </div>
          <button class="btn btn_gradient">Оставить заявку</button>
        </div>
        <div class="card">
          <div class="card__inner green">
            <h3 class="card__title green">Размещение продвижение</h3>
            <ul class="benefits">
              <li class="benefit">
                <div class="name">Цена</div>
                <div class="">
                  38 000 ₽/месяц для Москвы и СПБ 21 000 ₽/месяц для других
                  регионов
                </div>
              </li>
              <li class="benefit">
                <div class="name">
                  Открытие контактов в карточке пространства
                </div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Кликабельный логотип на карте города</div>
                <div class="include">Включено в тариф</div>
              </li>
              <li class="benefit">
                <div class="name">Приоритет в выдаче в списке города</div>
                <div class="include">Топ 5</div>
              </li>
              <li class="benefit">
                <div class="name">
                  Вертикальный баннер на внутренних страницах
                </div>
                <div class="include">1 - 3 место в ротации</div>
              </li>
            </ul>
          </div>
          <button class="btn btn_gradient">Оставить заявку</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ad-offers {
  .btn {
    width: 278px;
    margin: 0 auto;
    display: block;

    &:hover {
      border: 1px solid var(--main-text);
    }
  }
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}
.ad-offers__include {
  display: flex;
  flex-direction: column;
}

.list {
  font-size: 16px;
  color: var(--gray-text);
  margin-top: auto;
  margin-bottom: 100px;
}

.item {
  padding-top: 24px;
  margin-bottom: 24px;
  border-top: 1px solid var(--border);

  &:first-child {
    border-top: none;
  }
}

.card__inner {
  border: 1px solid;
  border-radius: 8px;
  padding: 32px 13px 0 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: box-shadow 0.3s;
  margin-bottom: 50px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 9px;
  }

  &.blue {
    border-color: var(--main-blue);
  }
  &.red {
    border-color: #d01b34;
  }
  &.green {
    border-color: #37b38d;
  }

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  }
}
.benefits {
  margin-bottom: auto;
}
.benefit {
  border-top: 1px solid var(--border);
  padding-top: 34px;
  margin-bottom: 35px;
  font-size: clamp(14px, 3vw, 16px);
  text-align: center;
  position: relative;
  font-weight: 500;

  &:first-child {
    border-top: none;
    text-align: left;
  }
}
.include {
  position: relative;

  &::before {
    content: "";
    position: relative;
    left: 0;
    top: 0;
    width: 25px;
    height: 10px;
    display: inline-block;
    background: url("../../assets/images/include-check.svg") no-repeat;
  }
}

.card__title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  background-clip: text;
  color: transparent;

  &.red {
    background-image: linear-gradient(
      87deg,
      rgb(151, 0, 127),
      rgb(222, 34, 34)
    );
  }
  &.blue {
    background-image: linear-gradient(
      90deg,
      rgba(22, 36, 236, 0.8),
      rgb(119, 127, 237)
    );
  }
  &.green {
    background-image: linear-gradient(
      63deg,
      rgb(0, 151, 106),
      rgb(34, 222, 155)
    );
  }
}
.name {
  font-size: 12px;
  color: var(--gray-text);
  display: none;
}
.card {
  position: relative;
}
.popular {
  position: absolute;
  top: 7px;
  left: 20px;

  span {
    position: relative;
    padding-left: 13px;
    background-image: linear-gradient(
      87deg,
      rgb(151, 0, 127),
      rgb(222, 34, 34)
    );
    background-clip: text;
    color: transparent;
    font-size: 12px;
    margin-bottom: auto;

    &::before {
      content: "";
      position: absolute;
      width: 9px;
      height: 12px;
      left: 0;
      top: 2px;
      background: url('../../assets/images/fire.svg') no-repeat;
    }
  }
}

@media (max-width: 1090px) {
  .list {
    display: none;
  }
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
  .ad-offers__include {
    grid-column: 1/-1;
  }
  .name {
    display: block;
  }
  .benefit {
    display: grid;
    grid-template-columns: 125px auto;
    text-align: left;
    gap: 15px;
    align-items: center;
  }
  .card__inner {
    margin-bottom: 30px;
  }
  .card .btn {
    width: 100%;
  }
}

@media (max-width: 950px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 730px) {
  .wrapper {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 20px;
  }
  .benefit {
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .card__inner {
    padding: 30px 12px;
    margin-bottom: 15px;
  }
  .popular {
    left: 12px;
  }
}
@media (max-width: 450px) {
  .ad-offers .btn {
    width: 100%;
  }
}
</style>
