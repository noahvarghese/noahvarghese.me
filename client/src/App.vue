<template>
  <div id="app">
    <Header />
    <About />
    <Experience />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "@/components/Header.vue";
  import About from "@/components/About.vue";
  import Experience from "@/components/Experience.vue";

  export default defineComponent({
    components: {
      Header,
      About,
      Experience
    }
  })
</script>

<style lang="scss">

  $accentColor: #42A5F5;

  * {
    box-sizing: border-box;
  }

  #app {
    width: 95%;
    margin: auto;
    margin-top: 2rem;
  }

  @font-face {
    font-family: MontserratBold;
    src: url("./fonts/Montserrat/Montserrat-Bold.ttf");
  }

  @font-face {
    font-family: MontserratExtraLight;
    src: url("./fonts/Montserrat/Montserrat-ExtraLight.ttf");
  }

  @font-face {
    font-family: MontserratRegular;
    src: url("./fonts/Montserrat/Montserrat-Regular.ttf");
  }

  @font-face {
    font-family: RobotoLight;
    src: url("./fonts/Roboto/Roboto-Light.ttf");
  }

  h1, h2, h3 {
    text-transform: uppercase;
  }

  h1 {
    font-family: "MontserratBold";
    color: $accentColor;
    font-size: 2.5rem;
  }

  h2, h3 {
    font-family: MontserratExtraLight;
    font-size: 1.5rem;
  }

  h4 {
    font-family: MontserratRegular;
    font-size: 1.25rem;
    margin: 0;

    &.company {
      color: $accentColor;
    }
  }

  ul { 
    list-style-type: none;
  }

  li, p, a {
    font-family: RobotoLight;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.25s;
  }

  a:hover {
    color: $accentColor;
    transition: color 0.25s;
  }

  .topLevelContainer {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        // flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 15rem;
        line-height: 1.75rem;
  }
  .rightFloat {
    flex: 0 0 20%;
  }

  .experienceHeader {
    .experienceDetails {
      display: flex;
      flex-direction: row;
      flex-wrap: no-wrap;
      align-items: flex-start;

      .location, .dateRange {
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 15rem;

      }
    }
  }
</style>
