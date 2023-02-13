<script setup>
const { data: PagesNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/pages'))
useHead({
    title: '专页列表',
})
</script>


<template>
    <div class="mx-auto px-[10px] h-full py-[50px] lg:pt-[4rem] lg:pb-[10px] gap-x-4 gap-y-8 flex flex-wrap justify-center content-start items-center w-full">
        <div v-for="page in PagesNavigation[0].children" :key="page.title"
            class="card lg:w-[25rem] bg-base-100 shadow-xl h-[95%] content-start">
            <ContentDoc v-slot="{ doc }" :path="`${page._path}`" :head=false>
                <figure class="h-[45%]">
                    <img class="rounded-lg w-full self-start" :src="doc.image.src" alt="Album" />
                </figure>
                <div class="card-body h-[55%]">
                    <NuxtLink :to="`/Content?type=pages&title=${doc.title}`">
                        <h2 class="prose-2xl font-bold max-w-none flex justify-between gap-2 items-center">
                            {{ doc.title }}
                            <!-- <span class="prose-sm lg:prose-xl font-light w-40 text-right " >{{ doc.head.meta.find((item) => item.name == "date").content }}</span> -->
                        </h2>
                    </NuxtLink>
                    <ContentRenderer class="prose max-w-none prose-sm mb-5" excerpt :value="doc" />
                    <NuxtLink :to="`/Content?type=pages&title=${doc.title}`">
                        <div class="absolute inset-x-0 px-3 bottom-0 divider m-5">阅读更多</div>
                    </NuxtLink>
                </div>
            </ContentDoc>
        </div>
    </div>
</template>