<template>
    <language-modal v-if="$store.getters.isLanguageModalActive" />
</template>
  
<script>
import LanguageModal from '@/components/modals/LanguageModal.vue';

export default {
    components: {
        LanguageModal
    },
}
</script>

<style lang="css" scoped></style>