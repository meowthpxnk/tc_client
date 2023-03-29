<template>
    <div class="order-type util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_order_type_title') }}</span>
        </div>
        <div class="content">
            <button :class="{ 'active': !($store.getters.isDeliveryType) }" @click="$store.commit('setOrderTypePickup')">
                <span>{{ $store.getters.getStringFromKey('change_order_type_btn_to_pickup') }}</span>
            </button>
            <button :class="{ 'active': $store.getters.isDeliveryType }" @click="$store.commit('setOrderTypeDelivery')">
                <span>{{ $store.getters.getStringFromKey('change_order_type_btn_to_delivery') }}</span>
            </button>
        </div>
    </div>
</template>

<script>
</script>