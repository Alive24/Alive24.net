<script setup>
const { data: PagesNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/pages'))
useHead({
  title: '专页列表',
})
</script>


<template>
    <div class="mx-auto flex flex-wrap px-3 mt-10 lg:mt-10 gap-10 lg:justify-between pb-10">
        <div v-for="page in PagesNavigation[0].children" :key="page.title" class="card w-96 bg-base-100 shadow-xl">
            <ContentDoc v-slot="{ doc }" :path="`${page._path}`" :head=false>
                <figure class="px-0 pb-5 h-3/5">
                    <img class="rounded-lg" :src="doc.image.src" alt="Album" />
                </figure>
                <div class="card-body">
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