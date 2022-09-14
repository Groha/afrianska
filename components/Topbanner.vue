<template>
    <div class="relative min-h-[710px] md:min-h-[768px]">
        <div class="wrapper">
            <div class="container-sm pt-[100px] md:pt-[190px]">
                <div class="max-w-[610px] relative z-10">
                    <h1 class="text-[64px] leading-[116%] tracking-[0.04em] text-[#1F3F68] font-semibold mb-[30px] font-Galien box drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">New Automation Tool for Your Home</h1>
                    <p class="text-16 leading-[163%] tracking-wider text-[#1F3F68] mb-[70px] font-Gilroy max-w-[425px] drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                    <buttonBlue />
                </div>
            </div>
            <div class="w-[688px] h-[580px] absolute right-[1.76%] bottom-[10%] z-[-1]">
                <picture class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] w-full h-full mouse-parallax-bg">
                    <img src="~/assets/images/shadown_illustration.svg" alt="" class="w-full h-full object-contain">
                </picture>
                <picture class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[646px] h-[490px]">
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
                <div class="absolute w-[41px] h-[41px] rounded-[6px] bg-[#56CCF2] flex items-center justify-center top-[4.5%] right-[34.88%] shadow-small-cube small-cube-2">
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
</style>
