<template>
  <main>
    <NavPage/>
    <MenuPage/>
    <router-view/>
  </main>
</template>


<script lang="ts">
import NavPage from "@/components/NavPage.vue";
import MenuPage from "@/components/MenuPage.vue";
import axios from "axios";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "WrapperPage",
  components:{
    NavPage,
    MenuPage
  },
  setup () {
    const router = useRouter();

    onMounted(async () => {
      try {
        const {data} = await axios.get('user');

        console.log(data);
      }catch (e) {
        await router.push('login');
      }
    });
  }
}
</script>
