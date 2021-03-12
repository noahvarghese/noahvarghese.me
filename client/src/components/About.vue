<template>
    <div id="synopsisContainer" class="topLevelContainer">
        <div id="aboutContainer">
            <h3>About</h3>
            <p>
                I am a passionate developer that loves to try out new technologies, and build upon my previous experiences and accomplishments. My goals when approaching a new project are always to figure out what the problem is that needs to be solved, and apply the appropriate technologies to those problems in order to reach an outcome that the stakeholders and developers involved are happy with. I enjoy automating anything that can be automated, as well as attempting to automate tasks that may be more difficult. When I am not programming or problem solving, I can be found outside enjoying a good hike or longboard, as well as playing either my guitar or piano. 
            </p>
        </div>
        <div id="educationContainer" class="rightFloat">
            <h3>Education</h3>
            <div class="education">
                <p>Adv. Diploma - Software Development</p>
                <p>Mohawk College</p>
                <p>2021</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "About"
});
</script>

<style lang="scss">
        #educationContainer {

            & > div > * {
                line-height: 0.5rem;
            }
        }
</style>