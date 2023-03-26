import { defineStore } from 'pinia';
import { ref } from 'vue';
import isVisible from 'src/global/isVisible'

export const useAnimationStore = defineStore('animation', () => {
    const ourSkillsPage = ref<HTMLElement>();

    const ourSkillsVisibility = () => {
        return isVisible(ourSkillsPage.value);
    }

    const setOurskills = (ourskills: HTMLElement) => {
        ourSkillsPage.value = ourskills;
    }

    return { setOurskills, ourSkillsVisibility }
});
