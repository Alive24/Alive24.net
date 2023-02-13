<template>
    <div class="h-full container py-5 px-[10px]">
        <div class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl ">
            <figure class="pt-5 "><img class="rounded-lg lg:w-1/2" :src="content.image.src" alt="Album" /></figure>
            <div class="card-body px-5 mx-auto">
                <article class="prose">
                    <h1>{{ content.title }}</h1>
                    <MetaRenderer class="not-prose" :meta="content.head.meta"/>
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
useContentHead(content)
</script>