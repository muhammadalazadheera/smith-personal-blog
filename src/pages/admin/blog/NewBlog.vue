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
        <h1 class="font-din-regular text-xl text-blue-500">New Blog</h1>
        <small class="text-blue-800">Fill all the fields to add a new blog.</small>
      </div>
    </div>
    <!-- Heading -->

    <!-- Body -->
    <div class="px-4">
      <form class="bg-blue-50 p-4 rounded-sm shadow-sm border border-blue-300" @submit.prevent="addNewBlog" novalidate>
        <div class="flex mb-4">
          <label class="w-24 text-md pt-2 text-blue-500" for="title">Title</label>
          <input v-model="title" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title"
            type="text" placeholder="Title">
        </div>
        <div class="flex mb-4 items-center">
          <label class="w-24 text-md pt-1 text-blue-500" for="title">Body</label>
          <TextEditor class="w-full" v-model="body" @summernote-input="newBlog" />
        </div>
        <div class="flex mb-4">
          <label class="w-24 text-md pt-2 text-blue-500" for="title">Category</label>
          <select v-model="category" class="w-full h-10 rounded px-2 bg-white focus-visible:outline-none border text-black" name="" id="">
            <option selected disabled :value="''">Select A Category</option>
            <option v-for="category in CategoryStore.categories" :value="category.id" :key="category.id">{{ category.title }}</option>
          </select>
        </div>
        <div class="flex">
          <label class="w-24 text-xl text-blue-500" for="fImageInput"></label>
          <input hidden @change="cropImage" class="w-full" id="fImageInput" type="file" required accept="image/*">
          <div @click="clickFileInput"
            class="w-full h-10 rounded border flex items-center justify-center bg-blue-500 mb-3 font-din-regular text-white">
            <img class="mr-2" width="40"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADBElEQVR4nO2avWsUQRTA1yh+4AeCWGghFhotYqOmsLGxFwQlCJaCjTEi2AlaxY804j8gKGohqJ2JouVpoYKQIkbh9Lx9783OvbcXFTVRMrIbArK5vWTv9m7vNvOD1xy3c+/9dmZuZ2ccx2KxWCwWi8ViicUYsxJA97vkH0OPT3RyBDmCrh40xvQ4aUDEJ5HkKyoxXRUkJUQeaKp4l/zzmRfSZBDJUEPFl7XeA8R/si6g2QDimbLn9SYWACQ3sk4+PQlyLbkAJc+zTjy1IBlrREAhNz1AScEKSArYHiB2CGAHjN/unQNInqIn58IgGVtWAoD4QrQ9VHxxWQgAJQVjzIpoe8FnoOR1/gUQD8e2STycfwGKb9YRcCv/Aog/FovFtdH2SqXSOiD+lHsBOPeD9xBx/XxbSqkNoOR+FsVnIgDnVmAASh6EQQJZFZ+ZAOygsAKU7QGFLhsCPI2KHwPJZSQZASWvls8QIJlwtd67MJ/KcVDyI98CiN8AfNsamxPoflSsu0XAz2RJ8kut9cbF8kLkPiQpd6YAYj/YS5i/i1rr7eE4XlQGP6r19Bgvwd+JJB86SgAQT3re1O7aCXMfKv4cI+2OMWZV0vzK5aktS11dtlwAKH5R9P3NcW2Nj5vVoPjJwuJlpNbSealUKpVNwdDJVAAQ3w4KjGsnWBMgyWjkmllUfMVJgclJswZJHrZdABDPAsmlpN0UiP8S8Wkn5d1rVHy3jQL4N5Ccqne953nbQPH7yHXTwRa20wLC7fF2CQDiM/WuDTYjo5MekHwn8o84LaKtArDOXQxmfCBxIzO9EPEhp4V0hADw5DCQVCN3Hohkn9Ni2itAydno94nkKCr5Ffmbm3Bd2eG0AVQy2M45YAaJ3wbP7vNR6zBF+A7wv++0MN6FOWXxHIBdEI0KeJZ14qkFyWhyASTXc9MDSK4mFlD2vN68HJJSqrrLaQQiGcq6gBRi0GkGRB4IDx1mX0jS+BK8RnPSwBjTA7p6oFuOyrqevz+1o7IWi8VisVgsFief/AOdrE7dUnG12AAAAABJRU5ErkJggg=="
              alt="image">FEATURED IMAGE
          </div>
        </div>
        <div class="flex">
          <div class="w-24"></div>
          <input type="submit" value="ADD NEW BLOG"
            class="w-full h-10 p-2 bg-black font-din-regular text-md border font-bold text-white rounded">
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
      featureImage: '',
      category: '',
      cropper: '',
      showCropper: false,
      errorMessage: '',
      BlogStore,
      CategoryStore
    }
  },
  components: {
    TextEditor
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
        cropBoxResizable: false
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
      document.getElementById('fImageInput').value = ''
    },
    clickFileInput() {
      document.getElementById('fImageInput').click()
    },
    hideCropBox() {
      document.getElementById('fImageInput').value = ''
      document.getElementById('fImage').src = ''
      this.cropper.destroy()
      this.showCropper = false;
    },

    addNewBlog() {
      try {
        if (!this.title) throw 'Title is required!'
        if (!this.body) throw 'Body is required!'
        if (!this.featureImage) throw 'Featured Image is required!'
        if (!this.category) throw 'Category is required!'

        this.BlogStore.addBlog(this.title, this.body, this.featureImage, this.category)

      } catch (error) {
        this.errorMessage = error
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      }
    }
  },
  mounted() {
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