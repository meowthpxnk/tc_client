<template lang="html" >
    <div class="validator delivery-time input" v-if="isDeliveryTimeModified">


        <input type="nubmer" v-model="inputData" @input="validateTime" @change="cangeInput" @focus="focusInput"
            @blur="blurInput" :placeholder="$store.getters.getStringFromKey('change_order_time_ph')" maxlength="5">
        <div class="button-wrapper">
            <button class="change-delivery-time" @click="defaultDeliveryTime">
                <img class="default-img" src="@/assets/icons/close.png" alt="">
            </button>
        </div>
    </div>


    <div class="validator delivery-time input" v-else>
        <div class="input-text">
            <span>{{ $store.getters.getStringFromKey('change_order_time_default') }}</span>
            <div class="button-wrapper">
                <button class="change-delivery-time" @click="modifyDeliveryTime">
                    <img class="default-img" src="@/assets/icons/settings.png" alt="">
                </button>
            </div>
        </div>
    </div>

    <div class="validator-error" :class="{ 'active': showError && isDeliveryTimeModified }">
        <span>{{ $store.getters.getStringFromKey('change_order_time_error') }}</span>
    </div>
</template>
  
<script>
export default {
    async mounted() {
        const order_settings = window.localStorage.getItem('order_settings')
        if (order_settings) {
            // this.inputData = JSON.parse(order_settings).time
            const time = JSON.parse(order_settings).delivery_time
            if (time === "DEFAULT") {
                this.inputData = ''
                this.isDeliveryTimeModified = false
            } else {
                this.inputData = time
                this.isDeliveryTimeModified = true
            }
        }
    },
    data() {
        return {
            isError: false,
            inputData: '',
            showError: false,
            isDeliveryTimeModified: false,
            parsed_time: null,
        }
    },
    computed: {

    },
    methods: {
        blurInput() {
            if (this.isError) {
                this.showError = true
            }
        },

        modifyDeliveryTime() {
            if (this.isError || this.parsed_time <= 0) {
                this.$store.commit('updateDeliveryTime', "DEFAULT")
            } else {
                this.$store.commit('updateDeliveryTime', this.inputData)
            }
            this.isDeliveryTimeModified = true
        },
        defaultDeliveryTime() {
            this.$store.commit('updateDeliveryTime', "DEFAULT")
            this.isDeliveryTimeModified = false
        },

        focusInput() {
            this.showError = false;
        },

        cangeInput() {
            if (this.isDeliveryTimeModified) {
                if (this.isError || this.parsed_time <= 0) {
                    this.$store.commit('updateDeliveryTime', "DEFAULT")
                } else {
                    this.$store.commit('updateDeliveryTime', this.inputData)
                }
            } else {
                this.$store.commit('updateDeliveryTime', "DEFAULT")
            }
        },
        validateTime() {
            let value = this.inputData.replace(/\D+/g, "");
            const numberLength = 4;
            let result = "";
            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 2:
                        result += ":";
                        break;
                    default:
                        break;
                }
                result += value[i];
            }
            this.inputData = result;

            const minutes = value % 100
            const hours = (value - minutes) / 100
            const parsed_time = hours * 60 + minutes

            this.isError = !(
                (value.length >= 4
                    || this.inputData === '')
                && parsed_time < 1440
                && parsed_time >= 0
                && minutes < 60
                && hours < 60
            );
            this.parsed_time = parsed_time
            console.log(value)
        },
    },
}
</script>
  
<style lang="css" scoped></style>
  