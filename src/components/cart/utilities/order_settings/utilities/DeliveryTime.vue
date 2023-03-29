<template>
    <div class="phone-number util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_order_time_title') }}</span>
        </div>
        <div class="content">
            <time-validator-input />
        </div>
    </div>
</template>

<script>
import TimeValidatorInput from '@/components/validators/TimeValidatorInput.vue';
export default {
    components: {
        TimeValidatorInput
    }
}
</script>