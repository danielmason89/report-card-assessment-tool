import { setActivePinia, createPinia } from "pinia";
import useLoginStore from "@/store/loginStore";

vi.mock("@azure/msal-browser", () => ({
    auth: {
        loginRedirect: () => Promise.resolve(),
    }
}));


describe("stores", () => { 
    beforeEach(() => {
    setActivePinia(createPinia());
    });
    test("authenticate user", async () => {
        const store = useLoginStore();

        expect(store.loggedIn).not.toBe(true);
        await store.SET_USER({})
        expect(store.loggedIn).toBe(true);
    });
});