import Questions from "../../components/Questions.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("Questions.vue", () => {
    test("render answer.text", () => {
        const answer = {
            display_text: "",
        };
        const mockQuestions = [{
            id: 1,
            q: "Sample question",
            answers: [answer, { display_text: "test" }]
        }];
        const mockQuestionsAnswered = 0;
        const wrapper = shallowMount(Questions, {
            propsData: {
                answer,
                questions: mockQuestions,
                questionsAnswered: mockQuestionsAnswered
            },
            global: {
                components: {
                    "router-link": RouterLinkStub,
                },
            },
        });
        const compositionAuthor = wrapper.find(".answer");
        expect(compositionAuthor.text()).toBe(answer.display_text);
    });
});
