<template>
    <div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/Profile.jpg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/about`">
                        <ContentRenderer class="prose max-w-none prose" :value="doc" />
                    </ContentDoc>
                    <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/UVic.jpeg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/sections/education`">
                        <ContentRenderer class="prose max-w-none" :value="doc" />
                    </ContentDoc>
                    <!-- <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/UVic.jpeg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/sections/career`">
                        <ContentRenderer class="prose max-w-none" :value="doc" />
                    </ContentDoc>
                    <!-- <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/UVic.jpeg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/sections/projects`">
                        <ContentRenderer class="prose max-w-none" :value="doc" />
                    </ContentDoc>
                    <!-- <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/UVic.jpeg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/sections/interests`">
                        <ContentRenderer class="prose max-w-none" :value="doc" />
                    </ContentDoc>
                    <!-- <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10 px-3 xl:max-w-7xl">
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure class="lg:w-2/5">
                    <img class="h-full rounded-full lg:rounded p-10 lg:p-0" src="/image/UVic.jpeg" alt="Album" />
                </figure>
                <div class="card-body lg:w-5/6">
                    <!-- <p class="prose max-w-none whitespace-pre-wrap lg:h-64 flex flex-wrap">{{
                    }}</p> -->
                    <ContentDoc :head="false" v-slot="{ doc }" :path="`/about/sections/hobbies`">
                        <ContentRenderer class="prose max-w-none" :value="doc" />
                    </ContentDoc>
                    <!-- <div class="card-actions justify-start">
                        <div class="hidden h-72 w-10/12 lg:flex gap-y-2 gap-x-2 flex-wrap w-full">
                        </div>
                    </div> -->
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
// const getItemSnippetContent = async (itemSnippetTitle) => {
//     return itemSnippetTitle ? await queryContent(`/snippets`)?.where({ title: itemSnippetTitle }).find() : ""
// }

useHead({
    title: '关于Alive',
})
</script>