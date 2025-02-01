<template>
  <label class="btn btn-success">
    Görsel Yükle <input type="file" hidden @change="upload($event.target.files)">
  </label>
</template>

<script lang="ts">
import axios from "axios";
import { SetupContext } from "vue";

export default {
  name: "ImageUploadPage",
  emits: ['uploaded'],
  setup(props: any, context: SetupContext) {
    const upload = async (files: FileList | null) => {
      if (files === null) return;

      const file = files.item(0);

      if (!file) {
        console.error("No file selected.");
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const { data } = await axios.post('/upload', formData);
        context.emit('uploaded', data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    return { upload };
  }
}
</script>






