<template>
    <div class="container mx-auto py-5 px-5">
        <div class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl">
            <figure class="px-5 pt-5"><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body px-5 mx-auto">
                <article class="prose ">
                    <h1>{{ content.title }}</h1>
                    <div class="flex flex-wrap" v-for="item in content.head.meta" :key="item.name">
                        <!-- To-Do: Beautify the metas -->
                        <span>{{ item.name }}</span>
                        <span>{{ item.content }}</span>
                    </div>
                    <ContentRenderer :value="content" />
                    <div class="card-actions justify-end">
                        <div class="hidden lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                            <div class="card rounded-box place-items-start">
                                <h3 class="prose text-left">占位Item</h3>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
const { type, title } = useRoute()?.query || ""
const content = type ? await queryContent(`/${type}`).where({ title: title })?.findOne() : {}
// const renderContentMeta = (content) => {
//     return
// }
</script>