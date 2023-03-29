<template>
    <div class="phone-number util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_user_phone_title') }}</span>
        </div>
        <div class="content">
            <phone-number-input/>
        </div>
    </div>
</template>

<script>
import PhoneNumberInput from '@/components/validators/PhoneNumberInput.vue';
export default {
    components: {
        PhoneNumberInput
    }
}
</script>