import { shallowMount } from "@vue/test-utils";
import TeacherClasslist from "@/views/teacher-classlists/TeacherClasslist.vue"
import TeacherClasslistDetail from "@/views/teacher-classlists/TeacherClasslistDetail.vue"

describe("TeacherClasslist.vue", () => {
    test("render list of classlists", () => {
        const teacherClasslists = [];
        const component = shallowMount(TeacherClasslist, {
            data() {
                return {
                    teacherClasslists,
                }
            },
            global: {
                monks: {
                }
            }
        });
        const items = component.findAllComponents(TeacherClasslistDetail);
        expect(items).toHaveLength(teacherClasslists.length)
    });
});