// Declaration for Vue single-file components
declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}

// Declaration for virtual:pwa-register
declare module 'virtual:pwa-register';