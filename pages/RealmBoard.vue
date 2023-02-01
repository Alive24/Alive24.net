<script setup>
const itemListRealmAContent = await queryContent().where({ title: 'ItemListRealmA' }).findOne()
const itemListRealmA = itemListRealmAContent.body
const activeItemRealmA = useState('activeItemRealmA', () => '')
const realmAToastObject = computed(() => {
    for (const category of itemListRealmA) {
        for (const item of category.items) {
            if (item.itemName == activeItemRealmA.value) {
                return item
            }
        }
    }
})
const itemListRealmBContent = await queryContent().where({ title: 'ItemListRealmB' }).findOne()
const itemListRealmB = itemListRealmBContent.body
const activeItemRealmB = useState('activeItemRealmB', () => '')
const realmBToastObject = computed(() => {
    for (const category of itemListRealmB) {
        for (const item of category.items) {
            if (item.itemName == activeItemRealmB.value) {
                return item
            }
        }
    }
})
const itemListRealmCContent = await queryContent().where({ title: 'ItemListRealmC' }).findOne()
const itemListRealmC = itemListRealmCContent.body
const activeItemRealmC = useState('activeItemRealmC', () => '')
const realmCToastObject = computed(() => {
    for (const category of itemListRealmC) {
        for (const item of category.items) {
            if (item.itemName == activeItemRealmC.value) {
                return item
            }
        }
    }
})
const itemListRealmDContent = await queryContent().where({ title: 'ItemListRealmD' }).findOne()
const itemListRealmD = itemListRealmDContent.body
const activeItemRealmD = useState('activeItemRealmD', () => '')
const realmDToastObject = computed(() => {
    for (const category of itemListRealmD) {
        for (const item of category.items) {
            if (item.itemName == activeItemRealmD.value) {
                return item
            }
        }
    }
})
const route = useRoute()
// const isHidden = computed(() => {
//     if (route.path == '/RealmBoard') { return false }
//     else {return true}
// })
</script>


<template>
    <div class="hero">
        <div class="hero-content text-center">
            <div class="mt-15 flex flex-wrap">
                <div class="gap-x-8 gap-y-8 flex flex-wrap w-full lg:flex-row">
                    <div class="flex-wrap card bg-base-300 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <div class="relative">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                    <div :class="{ invisible: activeItemRealmA == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info">
                                                <div>
                                                    <article class="prose text-left">
                                                        <h4>{{ realmAToastObject?.itemNameCN || ''}}</h4>
                                                        <p>{{ realmAToastObject?.itemDescriptionCN || ''}} </p>
                                                        <div class="flex-none">
                                                            <NuxtLink :to="`/RealmDetail?realm=A#${activeItemRealmA}`">
                                                                <button class="btn btn-sm btn-primary">了解更多</button>
                                                            </NuxtLink>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">语言类</h2>
                                <div class="gap-y-2 flex flex-wrap w-full">
                                    <div v-for="category in itemListRealmA" :key="category.categoryName"
                                        class="card rounded-box place-items-start">
                                        <h3 class="prose text-left">{{ category.categoryNameCN }}</h3>
                                        <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                            <button v-for="item in category.items" :key="item.itemName"
                                                @click="activeItemRealmA = item.itemName"
                                                :class="{ 'btn-outline': activeItemRealmA != item.itemName }"
                                                class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-wrap card bg-base-500 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <div class="relative">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                    <div :class="{ invisible: activeItemRealmB == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info">
                                                <div>
                                                    <article class="prose text-left">
                                                        <h4>{{ realmBToastObject?.itemNameCN || ''}}</h4>
                                                        <p>{{ realmBToastObject?.itemDescriptionCN || ''}} </p>
                                                        <div class="flex-none">
                                                            <NuxtLink :to="`/RealmDetail?realm=B#${activeItemRealmB}`">
                                                                <button class="btn btn-sm btn-primary">了解更多</button>
                                                            </NuxtLink>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">工程类</h2>
                                <div class="gap-y-2 flex flex-wrap w-full ">
                                    <div v-for="category in itemListRealmB" :key="category.categoryName"
                                        class="card rounded-box place-items-start">
                                        <h3 class="prose text-left">{{ category.categoryNameCN }}</h3>
                                        <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                            <button v-for="item in category.items" :key="item.itemName"
                                                @click="activeItemRealmB = item.itemName"
                                                :class="{ 'btn-outline': activeItemRealmB != item.itemName }"
                                                class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-wrap card bg-base-500 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <div class="relative">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                    <div :class="{ invisible: activeItemRealmC == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info">
                                                <div>
                                                    <article class="prose text-left">
                                                        <h4>{{ realmCToastObject?.itemNameCN || ''}}</h4>
                                                        <p>{{ realmCToastObject?.itemDescriptionCN || ''}} </p>
                                                        <div class="flex-none">
                                                            <NuxtLink :to="`/RealmDetail?realm=C#${activeItemRealmC}`">
                                                                <button class="btn btn-sm btn-primary">了解更多</button>
                                                            </NuxtLink>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">咨询与其他服务类</h2>
                                <div class="gap-y-2 flex flex-wrap w-full">
                                    <div v-for="category in itemListRealmC" :key="category.categoryName"
                                        class="card rounded-box place-items-start">
                                        <h3 class="prose text-left">{{ category.categoryNameCN }}</h3>
                                        <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                            <button v-for="item in category.items" :key="item.itemName"
                                                @click="activeItemRealmC = item.itemName"
                                                :class="{ 'btn-outline': activeItemRealmC != item.itemName }"
                                                class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="flex-wrap card bg-base-300 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <div class="relative">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                    <div :class="{ invisible: activeItemRealmD == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info">
                                                <div>
                                                    <article class="prose text-left">
                                                        <h4>{{ realmDToastObject?.itemNameCN || ''}}</h4>
                                                        <p>{{ realmDToastObject?.itemDescriptionCN || ''}} </p>
                                                        <div class="flex-none">
                                                            <button class="btn btn-sm btn-primary">了解更多</button>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">合作衍生类</h2>
                                <div class="gap-y-2 flex flex-wrap w-full">
                                    <div v-for="category in itemListRealmD" :key="category.categoryName"
                                        class="card rounded-box place-items-start">
                                        <h3 class="prose text-left">{{ category.categoryNameCN }}</h3>
                                        <div class="gap-y-2 gap-x-2 flex flex-wrap w-full ">
                                            <button v-for="item in category.items" :key="item.itemName"
                                                @click="activeItemRealmD = item.itemName"
                                                :class="{ 'btn-outline': activeItemRealmD != item.itemName }"
                                                class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
