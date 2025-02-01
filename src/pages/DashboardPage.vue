<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">{{ name }}</h1>
        <p class="lead text-body-secondary">Burada Bio yazacak</p>
        <p>
          <router-link to="/addblog" class="btn btn-primary my-2">BLOG EKLE</router-link>
        </p>
        <h1 class="fw-light"><u>YAZILAN BLOGLAR</u></h1>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-body-tertiary ">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
        <div v-for="product in products" :key="product.id" class="col ">
          <div class="card shadow-sm bg-dark">
            <img :src="`${product.image}`" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" focusable="false"><rect width="100%" height="100%" fill="#55595c"/>
            <div class="card-body">
              <h1 class="card-title"> {{ product.title }}</h1>
              <p class="card-text">{{ product.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link to="/editblog" class="btn btn-sm btn-warning" @click="logout">Düzenle</router-link>
                  <router-link to="/deleteblog" class="btn btn-sm btn-danger" @click="logout">Sil</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Product } from "@/models/product";

export default {
  name: "DashboardPage",
  setup() {
    const name = ref('');
    const id = ref('');
    const products = ref([]);

    const load = async () => {
      try {
        const { data } = await axios.get('user');
        name.value = data.first_name + ' ' + data.last_name;
        id.value = data.id;

        // Call another function to load blogs using the retrieved id
        await loadProducts();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const loadProducts = async () => {
      try {
        const { data } = await axios.get(`products/${id.value}`);
        products.value = data;
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    onMounted(load);

    return {
      products,
      name,
      id,
    };
  },
};
</script>

