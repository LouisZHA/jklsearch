<template>
    <div style="position:fixed;z-index: 999; height: 10%; max-height: 20rem;"
        class="flex top-0 navbar bg-bgNav rounded-b-3xl">
        <div style="width: 30%;" class="flex items-center">
            <Icon />
            <Tabs />
        </div>
        <div style="width: 55%;" class="dropdown">
            <SearchBox />
        </div>
        <div style="width: 10%;" class="flex justify-end flex-1 px-2">
            <Dropdown />
        </div>
    </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import Icon from './Icon.vue';
import Tabs from './Tabs.vue';
import Dropdown from './Dropdown.vue';

export default {
    components: { SearchBox, Icon, Tabs, Dropdown }
}
</script>

