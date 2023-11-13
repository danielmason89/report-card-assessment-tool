<template>
    <FloatingVueDropdown ref="popoverRef" :distance="14" :triggers="['click']" theme="dropdown-menu"
        placement="bottom-start" @show="onShow" @hide="onHide">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
        <div ref="popperContentRef" class="dropdown-content" v-if="show">
        </div>
    </FloatingVueDropdown>
</template>
  
<script setup lang="ts">
import { Dropdown as FloatingVueDropdown } from 'floating-vue';
import { onBeforeUnmount, ref } from 'vue';

const popperContentRef = ref(null);
const popoverRef = ref(null);


const props = defineProps({
    itemSelector: {
        type: String,
        default: 'li > a:not(:disabled)',
    },
});

const popoverKeydown = (e) => {
    const popover = popoverRef.value;

    if (!popover) {
        return;
    }

    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();

        const items = [...popover.$refs.popperContent.$el.querySelectorAll(props.itemSelector)];

        if (!items.length) {
            return;
        }

        let index = items.indexOf(e.target);
        index = e.key === 'ArrowDown' ? index + 1 : index - 1;
        items[index]?.focus();
    }

    if ((e.key === 'Enter' || e.key === ' ') && e.target === popover.$refs.popperContent.$el) {
        e.preventDefault();
        popover.hide();
    }
};

const hideOnOutsideClick = (e) => {
    const popover = popoverRef.value;
    const content = popperContentRef.value;
    if (popover && content && !content.contains(e.target) && !popover.$refs.popper.$_targetNodes[0].contains(e.target)) {
        popover.hide();
    }
};

const onShow = () => {
    document.addEventListener('click', hideOnOutsideClick);
};

const onHide = () => {
    document.removeEventListener('click', hideOnOutsideClick);
};

onBeforeUnmount(() => {
    document.removeEventListener('click', hideOnOutsideClick);
});
</script>
  
<style>
.v-popper--theme-dropdown-menu .v-popper__arrow-container {
    display: none;
}
</style>
  