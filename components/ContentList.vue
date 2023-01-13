<script setup>
const { data: PagesNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/pages'))
const { data: PostsNavigation } = await useAsyncData('navigation', () => fetchContentNavigation('/posts'))
</script>

<template>
    <div class="container mx-auto py-5 px-5">
        <div class="card mx-auto max-w-screen-lg bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    </div>
</template>