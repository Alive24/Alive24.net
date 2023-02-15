<template>
    <div class="px-[10px] h-auto w-full mx-auto container">
        <div v-for="realmContent in realmContentList" :key="realmContent.title">
            <div class="mx-auto container py-10 xl:max-w-7xl" :class="{ hidden: contentTitle != realmContent.title }">
                <div class="card lg:card-side bg-base-100 shadow-xl ">
                    <figure class="lg:w-2/5">
                        <img class="h-full" :src="`${realmContent.realmHero}`" alt="Album"
                            style="max-width: unset;object-fit: cover;width: 100%" />
                    </figure>
                    <div class="card-body lg:w-5/6 flex-col lg:h-[85vh]">
                        <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">
                            <ContentDoc :head=false v-slot="{ doc }"
                                :path="`/snippets/realm${activeRealm.toLowerCase()}`">
                                <ContentRenderer class="prose max-w-none" :value="doc" />
                            </ContentDoc>
                        </p>
                        <div class="card-actions justify-start">
                            <div class="hidden w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full ">
                                <div v-for="category in realmContent.body" :key="category.categoryName"
                                    class="card flex rounded-box content-end h-auto">
                                    <h3 class="prose text-left font-bold">{{ category.categoryNameCN }}</h3>
                                    <div class="gap-y-2 gap-x-2 flex flex-wrap w-full">
                                        <NuxtLink v-for="item in category.items" :key="item.itemName"
                                            :to="{ path: `/RealmDetail?`, query: { realm: activeRealm }, hash: `#${item.itemName}` }">
                                            <button @click=onClickItem(item.itemName)
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
                    <div class="card-body">
                        <h2 :id='`${category.categoryName}`' class="card-title">{{ category.categoryNameCN }}</h2>
                        <div v-for="item in category.items" :key="item.itemName" tabindex="0"
                            class="collapse collapse-arrow lg:border border-base-300 bg-base-100 rounded-box -mx-4 lg:mx-2 px-0 lg:px-2">
                            <input type="checkbox" :checked="activeItem == `#${item.itemName}`" />
                            <div :id='`${item.itemName}`' class="flex collapse-title font-bold justify-between">
                                <div>
                                    {{ item.itemNameCN }}
                                </div>
                                <div>
                                    <!-- 此处计划做成分享，支持微信、whatsapp、telegram、复制链接
                                    <NuxtLink :to="{ path: `/RealmDetail?`, query: { realm: activeRealm }, hash: `#${item.itemName}` }">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                        </svg>
                                    </NuxtLink> -->
                                </div>
                            </div>
                            <div class="collapse-content">
                                <article class="prose text-left">
                                    <p>{{ item.itemDescriptionCN }}</p>
                                    <ContentDoc :head=false v-if="item.itemSnippetTitle != ''" v-slot="{ doc }"
                                        :path="`/snippets/${item.itemSnippetTitle}`">
                                        <ContentRenderer class="prose max-w-none prose-sm" :value="doc" />
                                    </ContentDoc>
                                    <div v-if="item.linkedPageTitle != ''" class="flex-none">
                                        <NuxtLink :to="`/Content?type=pages&title=${item.linkedPageTitle}`">
                                            <button class="btn btn-sm btn-primary">了解更多</button>
                                        </NuxtLink>
                                        <!-- ToDo: Make a list of recommended reading -->
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
    if (activeItem.value != "") {
        console.log("scrolling!", activeItem.value.substring(1, activeItem.value.length))
        // onClickItem(activeItem.value.substring(1, activeItem.value.length))
    }
    // ToDo: 希望这里能直接用链接点进来之后跳到id
})
const contentTitle = computed(() => {
    if (route.path == '/RealmDetail') { return `ItemListRealm${activeRealm.value}` }
    else { return '' }
})
const realmContentList = activeRealm ? await queryContent()?.where({ type: "RealmItemList", }).find() : ""
// const getItemSnippetContent = async (itemSnippetTitle) => {
//     return itemSnippetTitle ? await queryContent(`/snippets`)?.where({ title: itemSnippetTitle }).find() : ""
// }

function onClickItem(itemName) {
    document.getElementById(itemName).scrollIntoView()
    // ToDo: 应当同时使对应的collapse content展开
}

useHead({
    title: '业务范围一览',
})

function shareLink() {
    // 分享到1）微信 2）复制链接
    let val = "xct24@live.com"
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(val)
    }
    // fallback
    let oInput = document.createElement("input");
    oInput.value = val;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");

    oInput.id = "oInput";
    oInput.style.display = "none";
    document.querySelector("#oInput").remove();
}
</script>