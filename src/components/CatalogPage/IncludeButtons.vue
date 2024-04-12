<template>
  <div class="include">
    <button class="include__btn _pink-gradient">Кофемашина</button>
    <button class="include__btn _red-gradient">Парковка</button>
    <button class="include__btn _blue-gradient">Бесплатный Wi-Fi</button>
    <button class="include__btn _blue-gradient">+4</button>
  </div>
</template>

<style lang="scss" scoped>
.include {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.include__btn {
  padding: 4px 8px;
  color: var(--gray-text);
  font-size: 12px;
  font-family: "Inter";
  background-color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  position: relative;
  z-index: 3;

  &._pink-gradient {
    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: -1;
      background: linear-gradient(
        90deg,
        rgba(244, 30, 30, 0.8),
        rgba(255, 160, 139, 0.8)
      );
      border-radius: 8px;
    }
    &::after {
      content: "";
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
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: -1;
      background: linear-gradient(
        90deg,
        rgba(151, 0, 0, 1) 0%,
        rgba(222, 34, 34, 1) 66%
      );
      border-radius: 8px;
    }
    &::after {
      content: "";
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
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: -1;
      background: linear-gradient(
        90deg,
        rgba(22, 36, 236, 1),
        rgba(119, 127, 237, 1)
      );
      border-radius: 8px;
    }
    &::after {
      content: "";
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
</style>
