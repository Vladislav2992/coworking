<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    isPhotosOpen: Boolean,
    closeModal: Function,
    pictures: Array
})

const currentImageIndex = ref(0)
const activeImage = computed(() => props.pictures[currentImageIndex.value]);

const updateMainImage = (event) => {
    const target = event.target
    currentImageIndex.value = target.id
};
const updateMainImagePrev = () => {
    if(currentImageIndex.value < 1) {
        currentImageIndex.value = props.pictures.length - 1
    } else {
        currentImageIndex.value--
    }
}
const updateMainImageNext = () => {
    if(currentImageIndex.value > props.pictures.length - 2) {
        currentImageIndex.value = 0
    } else {
        currentImageIndex.value++
    }    
}
</script>

<template>
    <div :class="{ 'gallery': true, 'active': isPhotosOpen }" @keydown.esc="closeModal">  
        <div class="gallery__header">
            <div class="container">
                <h2 class="title">BLOCKS Лихоборы</h2>
                <button class="close" @click="closeModal">
                    <img src="/close.svg" alt="" />
                </button>
            </div>
        </div>  
      <div class="container">
        <div @keydown.left="updateMainImagePrev" @keydown.right="updateMainImageNext">
            <div class="main-image" >
                <img :src="activeImage" alt="Main Image">
                <div class="gallery-nav-buttons">
                    <button class="btn-prev" @click="updateMainImagePrev">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="25" cy="25" r="25" transform="rotate(-180 25 25)" fill="#EBEBEB"/>
                            <path opacity="0.3" d="M34 25L19.4054 10L16 13.5L27.1892 25L16 36.5L19.4054 40L34 25Z" fill="black"/>
                        </svg>
                    </button>
                    <button class="btn-next" @click="updateMainImageNext" >
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="25" cy="25" r="25" transform="rotate(-180 25 25)" fill="#EBEBEB"/>
                            <path opacity="0.3" d="M34 25L19.4054 10L16 13.5L27.1892 25L16 36.5L19.4054 40L34 25Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>  
            <div class="thumbnails">
                <div class="thumbnail" 
                v-for="(image, index) in props.pictures" 
                :key="index"
                @click="updateMainImage($event)">
                    <img :src="image" alt="" :id="index">
                </div>
            </div>
        </div>
      </div>
    </div>
  </template> 
  
<style lang="scss" scoped>
.gallery {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 103;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: .3s;

    &.active {
        opacity: 1;
        visibility: visible;
    }
}

.gallery__header {
    width: 100%;    
    box-shadow: 0 1px 2px rgba(0,0,0, .16);
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    
    .container {
    width: 100%;
    height: 77px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
}
  .close {  
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;

    img {
        pointer-events: none;
    }
}

.title {
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 700;
  line-height: 120%;
  color: var(--main-text);
}
  
.main-image {    
    border-radius: 8px;
    overflow: hidden;
    margin:0 auto 20px auto;
    position: relative;
    height: 70vh;
    width: fit-content;

    img {
        height: 100%;
    }
}

.gallery-nav-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
}
.btn-prev,
.btn-next {
    padding: 0;
    background-color: transparent;
    border: none;
    width: fit-content;
}
.btn-prev {
    transform: rotate(180deg);
}

.thumbnails {
    display: flex;
    gap:6px;
    margin-bottom: 36px;
    height: 11vh;
}

.thumbnail {
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
}

</style>
  