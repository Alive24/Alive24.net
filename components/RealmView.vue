<template>
    <div class="container mx-auto py-10 px-5">
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{{ realmContent.realmNameCN }}</h2>
                <p>{{ realmContent.realmDescriptionCN}}</p>
                <div class="card-actions justify-end">
                    <div class="hidden lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
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
        <div v-for="category in realmContent.body" :key="category.categoryName" class="card my-5 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{{ category.categoryNameCN }}</h2>
                <div v-for="item in category.items" :key="item.itemName" tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box px-2">
                    <input type="checkbox" />
                    <div  class="collapse-title font-bold">
                        {{item.itemNameCN}}
                    </div>
                    <div class="collapse-content">
                        <p>{{item.itemDescriptionCN}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const activeRealm = useRoute().query?.realm || ""
const activeItem = useState('activeItem', () => '')
const contentTitle = `ItemListRealm${activeRealm}`
const realmContent = activeRealm ? await queryContent().where({ title: contentTitle })?.findOne() : ""
</script>