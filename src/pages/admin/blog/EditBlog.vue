<template>
  <div class="w-full font-din">
    <!-- Hidden Top Bar -->
    <div class="hidden-top-bar w-full h-14"></div>
    <!-- Hidden Top Bar -->

    <!-- Image Cropper -->
    <div v-show="showCropper"
      class="w-full h-screen bg-black/95 absolute top-0 left-0 z-50 flex justify-center items-center">
      <div id="img-preview" class="image-preview">
        <img id="fImage" src="" alt="">
        <button @click="getCropedImage"
          class="bg-green-500 rounded w-full h-8 mt-2 font-din-regular text-white text-xl">CROP</button>
        <button @click="hideCropBox"
          class="bg-red-500 rounded w-full h-8 mt-2 font-din-regular text-white text-xl">CANCEL</button>
      </div>
    </div>
    <!-- Image Cropper -->

    <!-- Heading -->
    <div class="py-4">
      <div class="w-full px-4 py-2">
        <h1 class="font-din-regular text-xl text-blue-500">Edit Blog</h1>
        <small class="text-blue-800">Edit the field(s) to edit the blog.</small>
      </div>
    </div>
    <!-- Heading -->

    <!-- Body -->
    <div class="px-4">
      <form @submit.prevent="editBlog" novalidate>
        <div class="flex mb-4">
          <label class="w-24 text-md pt-2 text-blue-500" for="title">Title</label>
          <input v-model="title" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title"
            type="text">
        </div>
        <div class="flex mb-4 items-center">
          <label class="w-24 text-md pt-1 text-blue-500" for="title">Body</label>
          <TextEditor class="w-full" v-model="body" :prevBlog="this.body" @summernote-input="newBlog" />
        </div>
        <div class="flex mb-4">
          <label class="w-24 text-md pt-2 text-blue-500" for="title">Category</label>
          <select v-model="category" class="w-full h-10 rounded px-2 bg-white focus-visible:outline-none border text-black" name="" id="">
            <option v-for="category in CategoryStore.categories" :selected="category.id == BlogStore.blog.catId" :value="category.id" :key="category.id">
              {{ category.title }}
            </option>
          </select>
        </div>
        <div class="flex">
          <label class="w-24 text-xl font-din" for="fImageInput"></label>
          <input hidden @change="cropImage" class="w-full" id="fImageInput" type="file" required accept="image/*">
          <div @click="clickFileInput"
            class="w-full h-10 rounded flex items-center justify-center bg-indigo-600 mb-3 font-din-regular text-white">
            <img class="w-8" src="../../../assets/images/icons8-upload-48.png" alt="">FEATURED IMAGE
          </div>
        </div>
        <div class="flex">
          <div class="w-24"></div>
          <input type="submit" value="EDIT BLOG"
            class="w-full p-2 bg-black font-din-regular text-lg text-white rounded">
        </div>
      </form>
    </div>
    <div v-if="errorMessage" class="my-4 px-4 text-center" :class="errorMessage ? 'hide-after-5s' : ''">
      <p class="bg-red-500 inline px-10 py-3 text-white text-xl rounded">{{ errorMessage }}</p>
    </div>
    <!-- Body -->
  </div>
</template>

<script>
import TextEditor from '../../../components/admin/TextEditor.vue';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import { useBlogStore } from '../../../store/BlogStore';
import { useCategoryStore } from '../../../store/CategoryStore';
import { push } from 'notivue';

export default {
  async beforeRouteEnter(to, from, next) {
    const CategoryStore = useCategoryStore();
    await CategoryStore.getCategories()
    next()
  },
  data() {
    const BlogStore = useBlogStore()
    const CategoryStore = useCategoryStore()
    return {
      title: '',
      body: '',
      category: '',
      featureImage: '',
      cropper: '',
      showCropper: false,
      errorMessage: '',
      BlogStore,
      CategoryStore,
      prevBlog: ''
    }
  },
  components: {
    TextEditor,
  },
  methods: {
    newBlog(input) {
      this.body = input
    },
    cropImageInit() {
      const image = document.getElementById('fImage');
      let widht = 507;
      let height = 618;
      let ratio = widht / height;
      this.cropper = new Cropper(image, {
        aspectRatio: ratio,
        //viewMode: 2,
        movable: true,
        toggleDragModeOnDblclick: false,
        dragMode: 'none',
        background: false,
        cropBoxResizable: false,
      });
    },
    getCropedImage() {
      let image = this.cropper.getCroppedCanvas({ width: 507, height: 618 }).toDataURL("image/png")
      this.featureImage = image;
      this.showCropper = false
    },
    cropImage() {
      this.showCropper = true;
      let fImageInput = document.getElementById('fImageInput')
      document.getElementById('fImage').src = URL.createObjectURL(fImageInput.files[0])
      this.cropImageInit()
    },
    clickFileInput() {
      document.getElementById('fImageInput').click()
    },
    hideCropBox() {
      document.getElementById('fImage').src = ''
      this.cropper.destroy()
      this.showCropper = false;
    },
    editBlog() {
      try {
        if (!this.title) throw 'Title is required!'
        if (!this.body) throw 'Body is required!'
        if (!this.featureImage) {
          this.featureImage = this.BlogStore.blog.blog.featured_image
        }
        this.BlogStore.updateBlog(this.$route.params.id, this.title, this.body, this.featureImage, this.category)

      } catch (error) {
        this.errorMessage = error
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      }
    }
  },
  mounted() {
    this.title = this.BlogStore.blog.blog.title
    this.body = this.BlogStore.blog.blog.body
    this.category = this.BlogStore.blog.catId
  }
}
</script>

<style scoped>
.image-preview {
  width: 454px;
}

.image-preview img {
  display: block;
  width: 100%;
  height: 341px;
  max-width: 100%;
  object-fit: cover;
}

.hide-after-5s {
  opacity: 1;
  transition: opacity 2s ease-out;
  animation: hide 5s forwards;
}

@keyframes hide {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>