<template>
    <div class="header-info mp-block mp-padding">
        <div class="burger-bg">
            <img class="default-img" src="@/assets/imgs/header-large-img.png" alt="">
        </div>
        <div class="information">
            <div class="title">
                <h1>{{ $store.getters.getStringFromKey('header_info_title') }}</h1>
                <h2>{{ $store.getters.getStringFromKey('header_info_description') }}</h2>
            </div>
        </div>
        <div class="lead-description">
            <ul>
                <li>
                    <img src="@/assets/icons/lead-clean.png" alt="">
                    <h3>{{ $store.getters.getStringFromKey('header_lead_clean_title') }}</h3>
                    <h3><b>{{ $store.getters.getStringFromKey('header_lead_clean_description') }}</b></h3>
                </li>
                <li>
                    <img src="@/assets/icons/lead-bbq.png" alt="">
                    <h3>{{ $store.getters.getStringFromKey('header_lead_grill_title') }}</h3>
                    <h3><b>{{ $store.getters.getStringFromKey('header_lead_grill_description') }}</b></h3>
                </li>
                <li>
                    <img src="@/assets/icons/lead-del.png" alt="">
                    <h3>{{ $store.getters.getStringFromKey('header_lead_clean_title') }}</h3>
                    <h3><b>{{ $store.getters.getStringFromKey('header_lead_del_description') }}</b></h3>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
}
</script>