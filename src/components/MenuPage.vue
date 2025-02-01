<template>
  <div class="nav-scroller py-1 mb-3 border-bottom">
    <nav class="nav nav-underline justify-content-between ">
      <router-link to="/" active-class="active" class="nav-item nav-link link-body-emphasis">Ana Sayfa</router-link>
      <router-link to="/profil" active-class="active" class="nav-item nav-link link-body-emphasis">Profil</router-link>
      <router-link to="/users" active-class="active" class="nav-item nav-link link-body-emphasis">Kullanıcılar</router-link>
      <a class="nav-item nav-link link-body-emphasis" href="#">SEÇENEK4</a>
      <a class="nav-item nav-link link-body-emphasis" href="#">SEÇENEK5</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuPage"
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