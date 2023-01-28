// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title:'Alive的工作台'
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/content'],
    i18n: {
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en: {
                    welcome: 'Welcome'
                },
                fr: {
                    welcome: 'Bienvenue'
                }
            }
        }
        /* module options */
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    router: {
        
    }
})
