<script setup lang="ts">
interface IconProps {
  iconUrl?: string;
  id?: number;
}

const iconProps = defineProps<IconProps>();

const getIcon = (id) => {
  if (id == "1") return "circle_1";
  else if (id == "2") return "circle_2";
  else if (id == "3") return "circle_3";
  else return "circle_4";
};
const getLine = (id) => {
  if (id == "1") return "line_1";
  else if (id == "2") return "line_2";
  else if (id == "3") return "line_3";
  else return "line_4";
};
</script>

<template>
  <div :class="`${getIcon(id)} absolute`">
    <div
    class="w-[66px] h-[66px] flex items-center justify-center border-[2px] border-solid border-white rounded-full"
    >
        <picture class="">
        <img :src="iconUrl" alt="" class="w-full h-full" />
        </picture>
    </div>
    <div :class="`${getLine(id)} hidden lg:block`"></div>
  </div>
</template>

<style scoped>
.circle_1 {
  @apply left-[4.04%] top-[17.03%];

  animation-name: circle_1;
  animation-duration: 34s;
  animation-iteration-count: infinite;
}
.line_1 {
    @apply w-[2px] h-[170px] bg-white absolute top-[96%] left-[30.3%] rotate-[5deg];

    animation-name: line_1;
    animation-duration: 34s;
    animation-iteration-count: infinite;
}
.circle_2 {
  @apply left-[12.13%] top-[48.2%];

  animation-name: circle_2;
  animation-duration: 34s;
  animation-iteration-count: infinite;
}
.line_2 {
    @apply w-[2px] h-[70px] bg-white absolute top-[78%] left-[-12%] rotate-[37deg];

    animation-name: line_2;
    animation-duration: 34s;
    animation-iteration-count: infinite;
}
.circle_3 {
  @apply left-[31.06%] top-[37.89%];

  animation-name: circle_3;
  animation-duration: 34s;
  animation-iteration-count: infinite;
}
.line_3 {
    @apply w-[2px] h-[230px] bg-white absolute top-[4%] right-[230%] rotate-[55deg];

    animation-name: line_3;
    animation-duration: 34s;
    animation-iteration-count: infinite;
}
.circle_4 {
  @apply left-[28.62%] bottom-[6%];

  animation-name: circle_4;
  animation-duration: 28s;
  animation-iteration-count: infinite;
}
.line_4 {
    @apply w-[150px] h-[2px] bg-white absolute top-[65%] right-[99.5%] rotate-[-5deg];

    animation-name: line_4;
    animation-duration: 28s;
    animation-iteration-count: infinite;
}

@keyframes circle_1 {
    0% {
        @apply top-[40%];
    }

    50% {
        @apply top-[17.3%];
    }

    100% {
        @apply top-[40%];
    }
}

@keyframes line_1 {
    0% {
        @apply h-[72px];
    }

    50% {
        @apply h-[170px];
    }

    100% {
        @apply h-[72px];
    }
}

@keyframes circle_2 {
    0% {
        @apply top-[25%] left-[20.13%];
    }

    50% {
        @apply top-[48.2%] left-[12.13%];
    }

    100% {
        @apply top-[25%] left-[20.13%];
    }
}

@keyframes line_2 {
    0% {
        @apply h-[185px] left-[-68%] top-[62%];
    }

    50% {
        @apply h-[65px] left-[-12%] top-[78%];
    }

    100% {
        @apply h-[185px] left-[-68%] top-[62%];
    }
}

@keyframes circle_3 {
    0% {
        @apply left-[17.06%] top-[57.89%];
    }

    50% {
        @apply left-[31.06%] top-[37.89%];
    }

    100% {
        @apply left-[17.06%] top-[57.89%];
    }
}

@keyframes line_3 {
    0% {
        @apply h-[70px] right-[130%] top-[60%];
    }

    50% {
        @apply h-[220px] right-[230%] top-[4%];
    }

    100% {
        @apply h-[70px] right-[130%] top-[60%];
    }
}

@keyframes circle_4 {
    0% {
        @apply left-[28.62%];
    }

    20% {
        @apply left-[34.62%];
    }

    40% {
        @apply left-[22.62%];
    }

    60% {
        @apply left-[28.62%];
    }

    80% {
        @apply left-[34.62%];
    }

    100% {
        @apply left-[28.62%];
    }
}

@keyframes line_4 {
    0% {
        @apply w-[145px];
    }

    20% {
        @apply w-[200px];
    }

    40% {
        @apply w-[90px];
    }

    60% {
        @apply w-[145px];
    }

    80% {
        @apply w-[200px];
    }

    100% {
        @apply w-[145px];
    }
}
</style>
