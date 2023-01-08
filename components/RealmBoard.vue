<script setup>
const itemListRealmAContent = await queryContent().where({ title: 'ItemListRealmA' }).findOne()
const itemListRealmA = itemListRealmAContent.body
const activeItemRealmA = useState('activeItemRealmA', () => '')
const realmAToastObject = computed(() => {
    let targetObject = itemListRealmA.filter((item, index, array) => {
        return item.itemName == activeItemRealmA.value
    })
    return targetObject[0]
})

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
                                <h2 class="card-title">语言类</h2>
                                <div class="gap-y-0 flex flex-wrap w-full">
                                    <div v-for="item in itemListRealmA" :key="item.itemName"
                                        class="flex-grow h-12 card rounded-box place-items-start">
                                        <button @click="activeItemRealmA = item.itemName"
                                            :class="{ 'btn-outline': activeItemRealmA != item.itemName }"
                                            class="btn btn-primary btn-sm">{{ item.itemNameCN }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-wrap card bg-base-300 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">工程类</h2>
                                <div class="gap-y-0 flex flex-wrap w-full ">
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">个人技术支持</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">场景技术支持</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">影音技术支持</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">PC DIY组装/维护</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">自动化脚本开发</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">桌面软件开发</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">艺术工控开发</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">物联网DIY开发</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">网站（前端、后端）开发</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">STEM类课程开发</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-wrap card bg-base-300 rounded-box">
                        <div class="flex-wrap card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div class="flex flex-wrap card-body">
                                <h2 class="card-title">咨询与其他服务类</h2>
                                <div class="flex flex-wrap w-full lg:flex-row justify-between">
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">英语国家留学</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">海外政策规章检索</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">海外医学信息检索</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">海外商务信息检索</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">海外学术信息检索</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">精神健康相关咨询</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">创新教育相关咨询</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">青少年活动支持</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">K-12 教纲科目辅导</button>
                                    </div>
                                    <div class="flex-grow h-12 card rounded-box place-items-start">
                                        <button class="btn btn-outline btn-primary btn-sm">项目式教学引导</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
