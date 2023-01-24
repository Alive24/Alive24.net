<template>
    <div v-for="realmContent in realmContentList" :key="realmContent.title">
        <div class="container mx-auto py-10 px-5 xl:max-w-7xl" :class="{ hidden: contentTitle != realmContent.title }">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ realmContent.realmNameCN }}</h2>
                    <article class="prose whitespace-pre-wrap h-52">{{ realmContent.realmDescriptionCN }}</article>
                    <div class="card-actions justify-start">
                        <div class="hidden h-52 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                            <div v-for="category in realmContent.body" :key="category.categoryName"
                                class="card rounded-box place-items-start">
                                <h3 class="prose text-left">{{ category.categoryNameCN }}</h3>
                                <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                    <button v-for="item in category.items" :key="item.itemName"
                                        @click="activeItem = item.itemName"
                                        :class="{ 'btn-outline': activeItem != item.itemName }"
                                        class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="category in realmContent.body" :key="category.categoryName"
                class="card my-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{{ category.categoryNameCN }}</h2>
                    <div v-for="item in category.items" :key="item.itemName" tabindex="0"
                        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box px-2">
                        <input type="checkbox" />
                        <div class="collapse-title font-bold">
                            {{ item.itemNameCN }}
                        </div>
                        <div class="collapse-content">
                            <article class="prose text-left">
                                <p>{{ item.itemDescriptionCN }}</p>
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
</template>


<script setup>
const route = useRoute()
const activeRealm = useActiveRealm()
onMounted(() => {
    activeRealm.value = useRoute().query?.realm || ""
})
const activeItem = useState('activeItem', () => '')
const contentTitle = computed(() => {
    if (route.path == '/RealmDetail') { return `ItemListRealm${activeRealm.value}` }
    else { return '' }
})
const realmContentList = activeRealm ? await queryContent()?.where({ type: "RealmItemList", }).find() : ""
const getNuxtLinkToLinkedPage = (linkedPageTitle) => {
    if (linkedPageTitle == "") { return }
    else {
        return `<NuxtLink to="/Content?type=pages&title=${linkedPageTitle}">
            <button class="btn btn-sm btn-primary">了解更多</button>
        </NuxtLink>`}

}
</script>