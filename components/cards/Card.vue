<script setup lang="ts">
import { onMounted } from 'vue';

interface CardProps {
  imgUrl?: string;
  title?: string;
  content?: string;
  btn?: string;
  id?: number;
}

const props = defineProps<CardProps>();

const getClass = (id) => {
    if(id == "1") return "card-1";
    else if(id =="2") return "card-2";
    else return "card-3";
}

onMounted(() => {
    function animateFrom(elem) {
        var x = 0,
            y = 0;
        if(elem.classList.contains("odd-card")) {
            x = -500;
            y = 0;
        } else if (elem.classList.contains("even-card")) {
            x = 500;
            y = 0;
        }
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 3.5, 
            x: 0,
            y: 0,
            autoAlpha: 1, 
            ease: "expo", 
            overwrite: "auto"
        });
    }
        
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top +=900px",
            onEnter: function() { animateFrom(elem) }, 
            // onEnterBack: function() { animateFrom(elem, -1) }
        });
    });
})
</script>

<template>
    <div :class="id % 2 === 0 ? 'odd-card gs_reveal' : 'even-card gs_reveal'">
        <div class="w-[132px] h-[132px] rounded-full mx-auto mb-[56px] last:mb-0 relative" style="background: linear-gradient(180.99deg, rgba(255, 255, 255, 0) 6.19%, rgba(100, 181, 246, 0.6) 103.09%);">
            <picture :class="getClass(id)">
                <img :src="imgUrl" alt="">
            </picture>
        </div>
        <h3 class="text-[20px] leading-[150%] text-[#1F3F68] mb-[16px] last:mb-0">{{ title }}</h3>
        <p class="mb-[32px] last:mb-0 leading-[162.5%] text-[#1F3F68] opacity-60">{{ content }}</p>
        <a href="" class="flex items-center text-[14px] text-[#5A98D0] leading-[214%]">
            {{ btn }} 
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-[18px]">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#5A98D0"/>
            </svg>
        </a>
    </div>
</template>

<style scoped>
.even-card {
    @apply p-[48px] tracking-wider rounded-[10px] shadow-card;
}

.odd-card {
    @apply p-[48px] tracking-wider rounded-[10px] shadow-card lg:translate-y-[-50%];
}

.card-1 {
    @apply absolute bottom-[-6px] left-[50%] translate-x-[-46%] w-[200%];
}

.card-2 {
    @apply absolute bottom-0 left-[50%] translate-x-[-48%] w-[200%];
}

.card-3 {
    @apply absolute bottom-0 left-[50%] translate-x-[-40%] w-[200%];
}
</style>
