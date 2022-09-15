import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
    },
    privateRuntimeConfig: {

    },
    css: [
        "~/assets/css/tailwind.css"
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        },
    },
    meta: {
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js' }
        ]
    }
})
