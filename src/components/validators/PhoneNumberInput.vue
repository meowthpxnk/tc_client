<template lang="html" >
    <div class="phone-number input">


        <input type="tel" v-model="inputData" @input="validatePhone" @change="cangeInput" @focus="focusInput"
            @blur="blurInput" :placeholder="$store.getters.getStringFromKey('change_user_phone_ph')">

        <div class="validator-error" :class="{ 'active': showError }">
            <span>{{ $store.getters.getStringFromKey('change_user_phone_error') }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    async mounted() {
        // await this.$store.dispatch('fetchUserData')
        // const phone = await this.$store.getters.getUserData.phone
        // this.inputData = phone
        const user_data = window.localStorage.getItem('user_data')
        if (user_data) {
            this.inputData = JSON.parse(user_data).phone
        }
    },
    emits: ["changePhone"],
    data() {
        return {
            isError: false,
            inputData: '',
            id: 'phone',
            showError: false,
        }
    },
    computed: {

    },
    methods: {
        blurInput() {
            if (this.isError) {
                this.showError = true
                this.$store.commit("updateUserPhone", '')
            } else {
                this.$store.commit("updateUserPhone", this.inputData)
            }
        },

        focusInput() {
            this.showError = false;
        },

        cangeInput() {
            // this.$emit('changePhone', this.inputData, this.isError)
        },

        getPrefixNumber(str) {
            if (str === "7") {
                return "7 (";
            }
            if (str === "8") {
                return "8 (";
            }
            if (str === "9") {
                return "7 (9";
            }
            return "7 (";
        },

        validatePhone() {
            const value = this.inputData.replace(/\D+/g, "");
            const numberLength = 11;

            let result;
            if (this.inputData.includes("+8") || this.inputData[0] === "8") {
                result = "";
            } else {
                result = "+";
            }

            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 0:
                        result += this.getPrefixNumber(value[i]);
                        continue;
                    case 4:
                        result += ") ";
                        break;
                    case 7:
                        result += "-";
                        break;
                    case 9:
                        result += "-";
                        break;
                    default:
                        break;
                }
                result += value[i];
            }
            this.inputData = result;

            this.isError = !(
                value.length >= 11
                || this.inputData === ''
            );
        },
    },
}
</script>
  
<style lang="css" scoped></style>