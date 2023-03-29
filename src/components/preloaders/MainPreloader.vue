<template>
    <div class="main-loader-wrap">
        <loader-temp />
    </div>
</template>

<script>
import LoaderTemp from './LoaderTemp.vue';
export default {
    components: {
        LoaderTemp
    }
}
</script>

<style>
.main-loader-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
}
</style>