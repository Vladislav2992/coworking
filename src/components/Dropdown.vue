<script setup>
import { ref } from "vue"

const props = defineProps({
    dropdownsVariants: Array
})

const tarifTitle = ref(props.dropdownsVariants[0].name);
const isDropdownOpen = ref(false);

function openDropdown() {
    if (isDropdownOpen.value === false) {        
        isDropdownOpen.value = true;        
        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("dropdown-title")) {
                isDropdownOpen.value = false;
            }
        });
    } else {
        isDropdownOpen.value = false
    }
}
</script>


<template>
<div class="dropdowns">
    <div :class="{'dropdown-title': true, 'active': isDropdownOpen}" @click.stop="openDropdown">{{ tarifTitle }}</div>            

    <div :class="{ 'dropdowns-variants': true, active: isDropdownOpen }" >
        <div class="" v-for="variant in dropdownsVariants" :key="variant.id">
        <input type="radio" name="dropdown" class="dropdown-radio" :id="variant.id"/>
        <label :for="variant.id" class="dropdown-variant" @click.stop="(e)=> tarifTitle = e.target.textContent">{{ variant.name }} {{ (variant.price) ? variant.price + '₽/час' : ''}} </label>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.dropdowns {
  position: relative;
}

.dropdown-title {
  color: inherit;
  border: none;
  padding: 15px 47px 15px 20px;
  margin-bottom: 10px;
  background-color: transparent;
  text-align: left;
  position: relative;
  width: 100%;
  font-size: 14px;
  color: var(--main-text);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 18px;
    right: 20px;
    width: 11px;
    height: 7px;
    background: url("../assets/images/arrow-down.svg") no-repeat;
    transition: transform 0.3s;
    pointer-events: none;
  }

  &.active:after {
    transform: rotate(180deg);
  }
}

.dropdowns-variants {
  padding: 20px 15px;
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  flex-direction: column;
  gap: 15px;
  border-radius: 6px;
  width: 100%;
  position: absolute;
  top: calc(100% - 8px);
  z-index: 2;
  background-color: var(--white);
  display: flex;
  transform: translateY(-10%);
  opacity: 0;
  visibility: hidden;
  transition: transform .3s;

  &.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

.dropdown-radio {
  display: none;

  &:checked + .dropdown-variant::after {
    transform: scale(1);
  }
}

.dropdown-variant {
  color: inherit;
  border: none;
  padding: 0;
  padding-left: 22px;
  background-color: transparent;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 12px;
    height: 12px;
    border: 1px solid var(--main-text);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 12px;
    height: 12px;
    border: 3px solid var(--main-text);
    border-radius: 50%;
    transition: transform 0.3s;
    transform: scale(0);
  }
}

.sorting {
    .dropdowns {
        margin-left: auto;
        margin-bottom: 20px;
        width: fit-content;
    }
    .dropdown-title {
        font-weight: 500;
        font-size: 14px;
        color: var(--main-text);
        border: none;
        padding: 0 20px 0 0;
        margin-bottom: 0;
        &::after {
            top: 6px;
            right: 0;
        }
    }
    .dropdowns-variants {
        width: max-content;
        right: 0;
        top: 22px;
    }
}
</style>