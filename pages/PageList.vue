<script setup>
const { data: PagesNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/pages'))
</script>


<template>
    <div class="mx-auto flex flex-wrap px-3 mt-20 gap-10 justify-between">
        <div v-for="page in PagesNavigation[0].children" :key="page.title" class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <ContentDoc v-slot="{ doc }"   :path="`${page._path}`">
                    <h2 class="prose-2xl font-bold max-w-none flex justify-between gap-2 items-center">
                        {{ doc.title }}
                        <!-- <span class="prose-sm lg:prose-xl font-light w-40 text-right " >{{ doc.head.meta.find((item) => item.name == "date").content }}</span> -->
                    </h2>
                    <ContentRenderer class="prose max-w-none prose-sm" excerpt :value="doc" />
                    <div class="absolute inset-x-0 px-3 bottom-0 divider">阅读更多</div>
                </ContentDoc>
            </div>
        </div>
    </div>
</template>