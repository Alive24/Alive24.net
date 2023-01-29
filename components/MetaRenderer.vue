<template>
    <div class="h-16 flex flex-wrap items-center">
        <div class="mr-3 py-3 avatar online aspect-square">
            <div class="w-12 h-12 rounded-full">
                <img class="" src="https://avatars.githubusercontent.com/u/20827211?v=4" />
            </div>
        </div>
        <div class="" >
            <h4 class="prose-sm">{{ metaObject.author}}</h4>
            <h4 class="prose-sm prose-slate">{{ metaObject.date}}</h4>
        </div>
        <!-- <div class="avatar offline">
            <div class="w-16 rounded-full">
                <img src="https://avatars.githubusercontent.com/u/20827211?v=4" />
            </div>
        </div> -->
    </div>
</template>


<script setup>
const props = defineProps({
    meta: {
        type: [Object],
    }
})

const metaObject = {
        'author' : props.meta[0]['content'],
        'date' : props.meta[1]['content'],
        'tags' : props.meta[2]['content'],
        // 'date' : props.meta[1]['content'],
}
</script>