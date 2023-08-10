<template>
    <div>

        <Dropdown popper-class="w-25 bg-white border rounded-lg shadow-md">
            <!-- Dropdown trigger -->
            <button
                class="nav-link text-center pb-3 px-1.5 leading-tight transition duration-150 ease-in-out rounded dropdown-trigger p-1"
                @click="toggleDropdown" title="Support">
                <font-awesome-icon icon="address-card" class="fa-icon pr-3 pt-0 pb-1" aria-hidden="true" />Support
            </button>

            <!-- Dropdown content -->
            <template #popper="{ hide }">
                <ul class="text-gray-70">
                    <li>
                        <router-link :to="{ name: 'Contact' }" title="Contact Us"
                            class="link block px-4 py-2 outline-none hover:bg-gray-100 focus:bg-gray-100 uppercase"
                            @click="hide">Contact Us</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Faq' }"
                            class="link block px-4 py-2 outline-none hover:bg-gray-100 focus:bg-gray-100 uppercase"
                            title="Faq" @click="hide">FAQ</router-link>
                    </li>
                </ul>
            </template>
        </Dropdown>
    </div>
</template>

<script setup>
import Dropdown from './Dropdown.vue';
</script>


<style lang="scss" scoped>
.dropdown-trigger::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
}

.nav-link {
    color: var(--text-primary-color);
    font-weight: bold;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    white-space: nowrap;
    text-transform: uppercase;

    &:focus,
    &:hover {
        color: var(--text-primary-color);
        border-color: var(--text-primary-color);
    }
}

.fa-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
