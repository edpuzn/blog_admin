<template>
  <header class="border-bottom lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-body-emphasis text-decoration-none" href="#">GO-VUE BLOG ADMIN PAGE</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <router-link to="/profile" class="btn btn-sm btn-success">{{ name }}</router-link>
        <router-link to="/login" class="btn btn-sm btn-danger" @click="logout">ÇIKIŞ YAP</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: "NavPage",
  setup () {
    const name = ref('')
    onMounted(async () => {
      const {data} = await axios.get('user');

      name.value = data.first_name + ' ' + data.last_name;
    });

    const logout = async () => {
      await axios.post('logout');
    }

    return {
      name,
      logout
    }
  }
}
</script>

<style scoped>

.nav-link{
  color: #ffffff;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem; color: #ffffff;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.flex-auto {
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}


.blog-pagination {
  margin-bottom: 4rem;
}

.blog-post {
  margin-bottom: 4rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
}
</style>
