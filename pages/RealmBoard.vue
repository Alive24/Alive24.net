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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-8 -8 40 40"
                                        stroke-width="1.5" stroke="currentColor" class="w-96 h-48 stroke-[#2C3E50]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                    </svg>
                                    <div :class="{ invisible: activeItemRealmA == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info bg-sky-200/95 shadow-md">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-8 -8 40 40"
                                        stroke-width="1.5" stroke="currentColor" class="w-96 h-48 stroke-[#2C3E50]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                    </svg>
                                    <div :class="{ invisible: activeItemRealmB == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info bg-sky-200/95 shadow-md">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-8 -8 40 40"
                                        stroke-width="1.5" stroke="currentColor" class="w-96 h-48 stroke-[#2C3E50]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <div :class="{ invisible: activeItemRealmC == '' }">
                                        <div
                                            class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 toast toast-top toast-start">
                                            <div class="alert alert-info bg-sky-200/95 shadow-md">
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
