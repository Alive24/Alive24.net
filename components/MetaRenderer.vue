<template>
    <div class="my-10 h-16 flex flex-no-wrap items-center">
        <div class="mr-3 py-3 avatar online aspect-square">
            <div class="w-12 h-12 rounded-full">
                <img class="" src="https://avatars.githubusercontent.com/u/20827211?v=4" />
            </div>
        </div>
        <div class="w-36 lg:w-32">
            <h4 class="prose-sm">{{ metaObject.author }}</h4>
            <h4 class="prose-sm prose-slate">{{ metaObject.date }}</h4>
        </div>
        <div class="w-2/3">
            <div class="block">
                <div v-for="tag in metaObject.tags" :key="tag" class="badge badge-sm badge-accent badge-outline mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5"
                        stroke="currentColor" class="w-3 h-3 mr-1 stroke-[#f97316]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    {{ metaInLocaleList.find((item) => item.name == tag).nameCN }}
                </div>
            </div>
            <div class="block">
                <div v-for="realmItem in metaObject.realmItems" :key="realmItem"
                    class="badge badge-sm badge-primary badge-outline mr-1">
                    <svg v-if="metaInLocaleList.find((item) => item.name == realmItem).type == 'ItemListRealmA'"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5"
                        stroke="currentColor" class="w-3 h-3 mr-1 stroke-[#2C3E50]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                    <svg v-if="metaInLocaleList.find((item) => item.name == realmItem).type == 'ItemListRealmB'"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5"
                        stroke="currentColor" class="w-3 h-3 mr-1 stroke-[#2C3E50]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                    <svg v-if="metaInLocaleList.find((item) => item.name == realmItem).type == 'ItemListRealmC'"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5"
                        stroke="currentColor" class="w-3 h-3 mr-1 stroke-[#2C3E50]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    {{ metaInLocaleList.find((item) => item.name == realmItem).nameCN }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    meta: {
        type: [Object],
    }
})

const metaObject = {
    'author': props.meta[0]['content'],
    'date': props.meta[1]['content'],
    'tags': props.meta[2]['content'],
    'realmItems': props.meta[3]['content'],
    // 'date' : props.meta[1]['content'],
}

const realItemCollection = await queryContent().where({ type: 'RealmItemList' }).find()
const tagList = await queryContent().where({ title: 'Tag List' }).findOne()
const metaInLocaleList = computed(() => {
    let localeReference = []
    for (let list of realItemCollection) {
        for (let category of list.body) {
            for (let item of category.items) {
                localeReference.push({ name: item.itemName, nameCN: item.itemNameCN, type: list.title })
            }
        }
    }
    for (let item of tagList.body) {
        localeReference.push({ name: item.name, nameCN: item.nameCN, type: "tag" })
    }
    return localeReference
})

// function metaInLocale(type, name) {
//     if(type == "realmItem"){
//         // return realItemCollectionLocaleReference.find((item) => item.name == name).nameCN
//     }

// }
</script>
