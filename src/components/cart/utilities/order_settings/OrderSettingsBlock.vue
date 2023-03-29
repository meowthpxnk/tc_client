<template>
    <div class="cart-block utilities">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('cart_orter_settings_title') }}</span>
        </div>
        <div class="order-settings">
            <order-type />
            <delivery-time v-if="$store.getters.isDeliveryType"/>
            <order-comment />
            <delivery-address v-if="$store.getters.isDeliveryType"/>
            <phone-number />
            <customer-name />
        </div>
    </div>
</template>

<script>
import OrderType from './utilities/OrderType.vue';
import DeliveryTime from './utilities/DeliveryTime.vue';
import OrderComment from './utilities/OrderComment.vue'
import DeliveryAddress from './utilities/DeliveryAddress.vue';
import PhoneNumber from './utilities/PhoneNumber.vue';
import CustomerName from './utilities/CustomerName.vue';

export default {
    components: {
        OrderType,
        DeliveryTime,
        OrderComment,
        DeliveryAddress,
        PhoneNumber,
        CustomerName,
    }
}
</script>