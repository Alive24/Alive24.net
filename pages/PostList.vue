<script setup>
const { data: PostsNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/posts'))
useHead({
  title: '文章列表',
})
</script>

<template>
    <div class="h-full container mx-auto py-5 px-3 lg:w-1/2">
        <div class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl pt-5 lg:card-side">
            <figure class="lg:w-2/5">
                <img class="w-full" src="/image/Foucault.png" alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">文章列表</h2>
                <p>文章列表介绍 + 文章类别筛选</p>
            </div>
        </div>
        <div v-for="post in PostsNavigation[0].children" :key="post.title"
            class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl my-5">
            <div class="card-body">
                <ContentDoc v-slot="{ doc }" :path="`${post._path}`" :head=false>
                    <NuxtLink :to="`/Content?type=posts&title=${doc.title}`">
                        <figure class="px-0 py-5 lg:pb-10"><img class="rounded-lg lg:w-1/2" :src="doc.image.src"
                                alt="Album" /></figure>
                        <h2 class="prose-2xl font-bold max-w-none flex justify-between gap-2 items-center">
                            {{ doc.title }}
                            <span class="prose-sm lg:prose-xl font-light w-40 text-right ">{{
                                doc.head.meta.find((item) => item.name == "date").content
                            }}</span>
                        </h2>
                    </NuxtLink>
                    <ContentRenderer class="prose max-w-none prose-sm" excerpt :value="doc" />
                    <NuxtLink :to="`/Content?type=posts&title=${doc.title}`">
                        <div class="divider">阅读更多</div>
                    </NuxtLink>
                </ContentDoc>
            </div>
        </div>
    </div>
</template>