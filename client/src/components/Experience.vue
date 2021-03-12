<template>
    <div id="relevantContainer" class="topLevelContainer">
        <div id="experienceContainer">
            <h3>Experience</h3>
            <div id="experiences">
                <div class="experience">
                    <div class="experienceHeader">
                        <h4 class="title">Application Developer</h4>
                        <h4 class="company">WebSan Solutions Inc.</h4>
                        <div class="experienceDetails">
                            <div class="dateRange">
                                <div>
                                    <img src="@/assets/calendar.png" alt="Time worked at company" />
                                </div>
                                <p><span>January 2021</span> - <span>Present</span></p>
                            </div>
                            <div class="location">
                                <div>
                                    <img src="@/assets/location.png" alt="Company location" />
                                </div>
                                <p>North York ON, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: "Experience"
    });
</script>