<template>

  <h1 class="fw-light" >Blog Ekle</h1>
  <form @submit.prevent = "submit">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Blog Başlığı</label>
      <div class="col-sm-10">
        <input v-model="data.title" class="form-control" placeholder="Bloğuna Başlık Ekle">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Blog Açıklaması</label>
      <div class="col-sm-10">
        <input v-model="data.description" class="form-control" placeholder="Bloğuna Açıklama Ekle">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Blog</label>
      <div class="col-sm-10">
        <textarea v-model="data.blog" class="form-control" id="validationTextarea" placeholder="Bloğunu buraya yazabilirsin"></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Blog Kategorisi</label>
      <div class="col-sm-10">
      <select v-model="data.category" class="custom-select" required>
        <option value="">Kategori Seçiniz</option>
        <option v-for="category in categories" :key = "category" value=""> {{category.name}} </option>
      </select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Blog Görseli</label>
      <div class="col-sm-10">
      <input v-model="data.image" name="blog-picture" class="form-control-file">
      </div>
      <div class="col-sm-10">
        <ImageUploadPage @uploaded="data.image = $event"/>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import ImageUploadPage from "@/components/ImageUploadPage.vue";

export default {
  name: "AddBlogPage",
  components: {ImageUploadPage},
  setup() {
    const categories = ref('');
    const router = useRouter();
    const id = ref('')

    onMounted(async () => {
      const {data} = await axios.get('user');
      id.value = data.id;
    });

    const load = async () => {
      const {data} = await axios.get(`categories`);

      categories.value = data;
    };

    onMounted(load);


    const data = reactive({
      title: '',
      description: '',
      blog: '',
      category: '',
      image: '',
      user_id: id,

    })

    const submit = async () => {

      const response = await axios.post('products', data);

      await router.push('/dashboard');
    }

    return {
      categories,
      data,
      submit
    }
  }
}
</script>
