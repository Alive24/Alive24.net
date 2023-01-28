<template>
    <div>
        <div v-for="realmContent in realmContentList" :key="realmContent.title">
            <div class="container mx-auto py-10 px-3 xl:max-w-7xl"
                :class="{ hidden: contentTitle != realmContent.title }">
                <div class="card lg:card-side bg-base-100 shadow-xl ">
                    <figure class="lg:w-2/5">
                        <img class="h-full" :src="`${realmContent.realmHero}`" alt="Album" />
                    </figure>
                    <div class="card-body lg:w-5/6">
                        <h2 class="card-title">{{ realmContent.realmNameCN }}</h2>
                        <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                            realmContent.realmDescriptionCN
                        }}</p>
                        <div class="card-actions justify-start">
                            <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-5/6">
                                <div v-for="category in realmContent.body" :key="category.categoryName"
                                    class="card rounded-box place-items-start">
                                    <h3 class="prose text-left font-bold">{{ category.categoryNameCN }}</h3>
                                    <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                        <NuxtLink v-for="item in category.items" :key="item.itemName"
                                            :to="{ path: `/RealmDetail?`, query: { realm: activeRealm }, hash: `#${item.itemName}` }">
                                            <button @click=onClickItem(item)
                                                :class="{ 'btn-outline': activeItem != item.itemName }"
                                                class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="category in realmContent.body" :key="category.categoryName"
                    class="card my-5 bg-base-100 shadow-xl">
                    <!-- ToDo: Switch to tab style on mobile to increase view width -->
                    <div class="card-body">
                        <h2 :id='`${category.categoryName}`' class="card-title">{{ category.categoryNameCN }}</h2>
                        <div v-for="item in category.items" :key="item.itemName" tabindex="0"
                            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box px-2">
                            <input type="checkbox" :checked="activeItem == `#${item.itemName}`" />
                            <div :id='`${item.itemName}`' class="collapse-title font-bold">
                                {{ item.itemNameCN }}
                            </div>
                            <div class="collapse-content">
                                <article class="prose text-left">
                                    <p>{{ item.itemDescriptionCN }}</p>
                                    <ContentDoc :path="`/snippets/${item.itemSnippetTitle}`" />
                                    <div class="flex-none" :class="{ hidden: item.linkedPageTitle == '' }">
                                        <NuxtLink :to="`/Content?type=pages&title=${item.linkedPageTitle}`">
                                            <button class="btn btn-sm btn-primary">了解更多</button>
                                        </NuxtLink>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const route = useRoute()
const activeRealm = useActiveRealm()
const activeItem = useState('activeItem', () => "")
onMounted(() => {
    activeRealm.value = useRoute().query?.realm || ""
    activeItem.value = useRoute().hash || ""
})
const contentTitle = computed(() => {
    if (route.path == '/RealmDetail') { return `ItemListRealm${activeRealm.value}` }
    else { return '' }
})
const realmContentList = activeRealm ? await queryContent()?.where({ type: "RealmItemList", }).find() : ""
// const getItemSnippetContent = async (itemSnippetTitle) => {
//     return itemSnippetTitle ? await queryContent(`/snippets`)?.where({ title: itemSnippetTitle }).find() : ""
// }

function onClickItem(item) {
    document.getElementById(item.itemName).scrollIntoView()
}
</script>