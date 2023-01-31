<script setup>
const { data: PostsNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/posts'))
</script>

<template>
    <div class="container mx-auto py-5 px-5">
        <div class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl py-5">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">文章列表</h2>
                <p>文章列表介绍 + 文章类别筛选</p>
            </div>
        </div>
        <div v-for="post in PostsNavigation[0].children" :key="post.title"
            class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl my-5">
            <div class="card-body">
                <ContentDoc v-slot="{ doc }"   :path="`${post._path}`">
                    <NuxtLink :to="`/Content?type=posts&title=${doc.title}`">
                        <h2 class="prose-2xl font-bold max-w-none flex justify-between gap-2 items-center">
                            {{ doc.title }}
                        <span class="prose-sm lg:prose-xl font-light w-40 text-right " >{{ doc.head.meta.find((item) => item.name == "date").content }}</span>
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