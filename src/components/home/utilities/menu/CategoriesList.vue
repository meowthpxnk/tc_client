<template>
    <div class="categories-list mp-block mp-padding" id="nav-categories">
        <ul>
            <li v-for="category in $store.getters.getCategories" :key="category" :class="{ 'active': category.id == active_category_id }"
                class="clickable" @click="scrollToCategory(category.id)">
                <div class="icon">
                    <img class="default-img" :src="category.icon" alt="">
                </div>
                <span class="title">{{ category.name }}</span>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data(){
        return {
            active_category_id: null,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.setActiveCategory)
    },
    unmounted() {
        window.removeEventListener("scroll", this.setActiveCategory)
    },
    methods: {
        scrollToCategory(id) {
            const category_block = document.getElementById(`category-${id}`)
            const nav_panel = document.getElementById('nav-categories')
            window.scrollTo({
                top: category_block.offsetTop - nav_panel.offsetHeight,
                left: 0,
                behavior: "smooth",
            })
        },
        setActiveCategory(){
            const categorers = this.$store.getters.getCategories
            const win_top = window.pageYOffset
            const nav_panel = document.getElementById('nav-categories')

            let active_category_id;

            for (const category of categorers){
                const category_block = document.getElementById(`category-${category.id}`)
                const top = category_block.offsetTop
                if (win_top > top - nav_panel.offsetHeight - 10){
                    active_category_id = category.id
                }
            }
            if (active_category_id){
                this.active_category_id = active_category_id
            } else {
                this.active_category_id = null
            }
        }
    }
}
</script>