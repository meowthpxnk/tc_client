<template>
    <modal-template class="languages" @click.self="closeModal">
        <ul>
            <li>
                <button @click="changeLanguage('EN')">
                    <span>
                        ENGLISH
                    </span>
                </button>
            </li>
            <li>
                <button @click="changeLanguage('TR')">
                    <span>
                        TURKISH
                    </span>
                </button>
            </li>
            <li>
                <button @click="changeLanguage('RU')">
                    <span>
                        RUSSIAN
                    </span>
                </button>
            </li>
        </ul>
    </modal-template>
</template>

<script>
import ModalTemplate from './ModalTemplate.vue';
export default {
    components: {
        ModalTemplate
    },
    methods: {
        closeModal(){
            this.$store.commit("disableLanguageModal")
        },
        changeLanguage(code) {
            this.$store.commit("enableMainPreloader")
            this.$store.commit("changeActiveLanguageCode", code)
            this.closeModal()
            window.location.reload();
        }
    },
}
</script>