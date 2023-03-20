<template>
    <main>
        <!-- <Tabs mt="40px" p="20px">
            <TabList>
                <Tab>Instructor</Tab>
                <Tab>Parent</Tab>
            </TabList>
        </Tabs> -->
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const count = ref(0);
</script>

<style lang="scss" scoped>
main {
    padding: 10rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    overflow: auto;
}
</style> 