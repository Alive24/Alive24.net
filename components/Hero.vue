<script setup>
const locale = useLocale()
const modal = useModal()
const heroContent = computed(() => {
    if (locale.value == 'cn') {
        return {
            title: '兴趣使然的斜杠青年',
            intro: '“他们不只是一具具温驯的空壳，而是会主动拒绝、变通、改造其作为“主体”而存在的形态。为了与规范性力量对抗，他们会用创意重塑自身与其生活方式 —— 寻找机会，探索新的存在之道、新的体验领域、乐趣、关系、生活方式、思考方式。”',
            reference: "米歇尔 · 福柯， 《斯坦福哲学百科全书》"
        }
    }
    if (locale.value == 'en') {
        return {
            title: 'Interest-Oriented Slashie',
            intro: '"They are not just docile bodies, but actively refuse, adopt and alter forms of being a subject. One way of contesting normalizing power is by shaping oneself and one’s lifestyle creatively: by exploring opportunities for new ways of being, new fields of experience, pleasures, relationships, modes of living and thinking."',
            reference: "Michel Foucault, Stanford Encyclopedia of Philosophy "
        }
    }
})
//
</script>

<template>
    <div class="hero h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">{{ heroContent.title }}</h1>
                <p class="py-6 prose-sm text-left">{{ heroContent.intro }}</p>
                <p class="py-6 prose-sm text-left italic">{{ heroContent.reference }}</p>
                <div class="flex gap-x-8 justify-between">
                    <button class="btn btn-outline">业务范围一览</button>
                    <button @click="modal=true" class="btn btn-primary">联系我</button>
                    <button class="btn btn-outline">了解我更多</button>
                </div>
            </div>
        </div>
    </div>
</template>

