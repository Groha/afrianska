<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    document.addEventListener('mousemove', (e) => {
        let xPos = (e.clientX/window.innerWidth)-0.5,
            yPos = (e.clientY/window.innerHeight)-0.5

        TweenLite.to('.mouse-shadow-bg', 1, {
            rotationY: xPos * 30, 
            rotationX: yPos * 30,
            ease: Power1.easeOut,
        });

        TweenLite.to('.mouse-bg', 1, {
            rotationY: yPos * 45, 
            rotationX: xPos * 45,
            ease: Power1.easeOut,
        });
    })
})

const addSnow = () => {
    document.querySelector('.snow-wrap')?.classList.toggle('opacity-0')
}
</script>


<template>
    <div class="relative min-h-[710px] md:min-h-[768px]">
        <div class="wrapper">
            <div class="container-sm pt-[100px] md:pt-[190px] pointer-events-none relative z-2">
                <div class="max-w-[610px]">
                    <h1 class="text-[64px] leading-[116%] tracking-[0.04em] text-[#1F3F68] font-semibold mb-[30px] font-Galien drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">New Automation Tool for Your Home</h1>
                    <p class="text-16 leading-[163%] tracking-wider text-[#1F3F68] mb-[70px] font-Gilroy max-w-[425px] drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                    <buttonBlue />
                </div>
            </div>
            <div class="w-[688px] h-[580px] absolute right-[1.76%] bottom-[10%]">
                <picture class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] w-full h-full mouse-shadow-bg">
                    <img src="~/assets/images/shadown_illustration.svg" alt="" class="w-full h-full object-contain">
                </picture>
                <picture class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[646px] h-[490px] mouse-bg">
                    <img src="~/assets/images/ilustration_bg.svg" alt="" class="w-full h-full object-contain">
                </picture>
                <picture class="absolute bottom-[8.6%] left-[11.48%] img-man">
                    <img src="~/assets/images/man.svg" alt="">
                </picture>
                <picture class="absolute bottom-[25.86%] left-[25.87%] img-platform">
                    <img src="~/assets/images/platform.svg" alt="">
                </picture>
                <div class="absolute top-[20.4%] right-[21.5%] w-[88px] h-[88px] bg-white rounded-[10px] flex items-center justify-center shadow-big-cube big-cube">
                    <picture class="">
                        <img src="~/assets/images/home_48px.svg" alt="">
                    </picture>
                </div>
                <picture class="absolute bottom-[29.14%] right-[1.3%] img-women">
                    <img src="~/assets/images/women.svg" alt="">
                </picture>
                <div class="absolute w-[41px] h-[41px] rounded-[6px] bg-[#F58A8A] flex items-center justify-center top-[21.75%] left-[52.33%] shadow-small-cube small-cube-1">
                    <picture class="">
                        <img src="~/assets/images/ic_1.svg" alt="">
                    </picture>
                </div>
                <div class="absolute w-[41px] h-[41px] rounded-[6px] bg-[#56CCF2] flex items-center justify-center top-[4.5%] right-[34.88%] shadow-small-cube small-cube-2 cursor-pointer" @click="addSnow">
                    <picture class="">
                        <img src="~/assets/images/ic_2.svg" alt="">
                    </picture>
                </div>
                <div class="absolute w-[41px] h-[41px] rounded-[6px] bg-[#6FCF97] flex items-center justify-center top-[4.5%] right-[16.28%] shadow-small-cube small-cube-3">
                    <picture class="">
                        <img src="~/assets/images/ic_3.svg" alt="">
                    </picture>
                </div>
                <div class="absolute w-[41px] h-[41px] rounded-[6px] bg-[#F2C94C] flex items-center justify-center top-[21.75%] right-[9.59%] shadow-small-cube small-cube-4">
                    <picture class="">
                        <img src="~/assets/images/ic_4.svg" alt="">
                    </picture>
                </div>
            </div>
        </div>
        <div class="layer absolute inset-0 z-[-2] h-full w-full"></div>
        <div class="snow-wrap w-full h-full overflow-hidden absolute z-[5] top-0 left-0 right-0 pointer-events-none opacity-0">
            <span style="--i:10"></span><span style="--i:11"></span><span style="--i:12"></span><span style="--i:13"></span><span style="--i:14"></span><span style="--i:15"></span><span style="--i:16"></span><span style="--i:17"></span><span style="--i:18"></span><span style="--i:19"></span><span style="--i:20"></span><span style="--i:21"></span><span style="--i:22"></span><span style="--i:23"></span><span style="--i:24"></span><span style="--i:25"></span><span style="--i:26"></span><span style="--i:27"></span><span style="--i:28"></span><span style="--i:29"></span><span style="--i:30"></span><span style="--i:31"></span><span style="--i:32"></span><span style="--i:33"></span><span style="--i:34"></span><span style="--i:35"></span><span style="--i:36"></span><span style="--i:37"></span><span style="--i:38"></span><span style="--i:39"></span><span style="--i:40"></span><span style="--i:41"></span><span style="--i:42"></span><span style="--i:43"></span><span style="--i:44"></span><span style="--i:45"></span><span style="--i:46"></span><span style="--i:47"></span><span style="--i:48"></span><span style="--i:49"></span><span style="--i:50"></span><span style="--i:51"></span><span style="--i:52"></span><span style="--i:53"></span><span style="--i:54"></span><span style="--i:55"></span><span style="--i:56"></span><span style="--i:57"></span><span style="--i:58"></span><span style="--i:59"></span>
        </div>
    </div>
</template>

<style scoped>
    .layer {
        background: linear-gradient(0deg, #98C3E8 8.84%, rgba(152, 195, 232, 0) 31.12%);
        opacity: 0.2;
    }

    .img-man {
        animation-name: moveMan;
        animation-duration: 2.5s;
    }

    @keyframes moveMan {
        from {left:0; bottom:0; opacity: 0;}
        to {left:11.48%; bottom:8.6%; opacity: 1;}
    }

    .img-platform {
        animation-name: movePlatform;
        animation-duration: 2.7s;
    }

    @keyframes movePlatform {
        0%,25% {bottom:0; opacity: 0;}
        100% {bottom:25.86%; opacity: 1;}
    }

    .img-women {
        animation-name: moveWomen;
        animation-duration: 2.6s;
    }

    @keyframes moveWomen {
        0%,35% {right:-15%; bottom:0; opacity: 0;}
        100% {right:1.3%; bottom:29.14%; opacity: 1;}
    }

    .big-cube {
        animation-name: bigCube;
        animation-duration: 2.8s;
    }

    @keyframes bigCube {
        0%,45% {top:0; opacity: 0;}
        100% {top:20.4%; opacity: 1;}
    }

    .small-cube-1 {
        animation-name: smallCube1;
        animation-duration: 4s;
    }

    @keyframes smallCube1 {
        0%,50% {top:-10%; left:0%; opacity: 0;}
        100% {top:21.75%; left:52.33%; opacity: 1;}
    }

    .small-cube-2,
    .small-cube-3 {
        animation-name: smallCube2;
        animation-duration: 4s;
    }

    @keyframes smallCube2 {
        0%,50% {top:-10%; opacity: 0;}
        100% {top:4.5%; opacity: 1;}
    }

    .small-cube-4 {
        animation-name: smallCube4;
        animation-duration: 4s;
    }

    @keyframes smallCube4 {
        0%,50% {top:0; right: -20%; opacity: 0;}
        100% {top:21.75%; right:9.59%; opacity: 1;}
    }

    .snow-wrap span {
        @apply relative w-[10px] h-[10px] bg-[#3b82f680] rounded-full ml-[1.1%] top-0 inline-block origin-bottom border-[2px] border-dotted border-white;

        animation: snowFall 75s linear infinite;
    }

    .snow-wrap span:nth-child(odd) {
        animation-duration: calc(220s / var(--i));
    }

    .snow-wrap span:nth-child(even) {
        animation-duration: calc(250s / var(--i));
    }

    @keyframes snowFall {
        0% {
            @apply top-0 scale-100;
        }

        70% {
            @apply top-[95%] scale-75 opacity-60;
        }

        100% {
            @apply top-[100%] scale-0 opacity-0;
        }
    }
</style>
