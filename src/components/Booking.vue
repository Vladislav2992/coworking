<template>
     <div class="booking">
        <img class="booking-img" src="/book-img.png" alt="" />
        <div class="booking-text">Готовые сервисные офисы по низкой цене</div>
        <img class="booking-bg" src="/book-bg.png" alt="" />
        <div class="btn btn_gradient">Забронировать</div>
      </div>
</template>

<style lang="scss">
.booking {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  width: 100%;
  margin: 60px 0;
  overflow: hidden;

  .btn {
    position: absolute;
    font-size: 16px;
    padding: 10px 40px;
    bottom: 50%;
    right: 20px;
    transform: translateY(50%);
  }
}
.booking-text {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(16px, 4vw, 20px);
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent 10%,
    #eff5fb 18%,
    #eff5fc 80%,
    transparent 100%
  );
}

@media (max-width: 950px) {
  .booking {
    flex-direction: column;
    min-height: 208px;
    margin: 40px 0;

    .btn {
      bottom: 11%;
      left: 15px;
      right: 15px;
      transform: translate(0);
      z-index: 2;
      font-size: 15px;
      cursor: pointer;
      z-index: 2;
    }
  }
  .booking-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
  .booking-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 50%;
  }
  .booking-text {
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    background: linear-gradient(
      0deg,
      transparent 10%,
      #eff5fb 22%,
      #eff5fc 63%,
      transparent 100%
    );
    padding: 25px 15px 15px 15px;
    z-index: 1;
  }
}
</style>