<template>
   <div class="container-fluid">
    <div class="row">
      <div class="col-12" v-for="blog in blogs" :key="blog.id">
        <BlogCard :blog="blog" />
<!--STUB blog card-->

<!-- <div class="card">
<div class="d-flex align-items-center justify-content-between">
  <h3>{{ blog.title }}</h3>
<router-link :to="{name: 'Blog', params: {blogId: blog.creatorId}}">
</div>
</div> -->

      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getBlogs(){
      try {
        await blogsService.getBlogs()
        } catch (error) {
        Pop.error(('[ERROR]'), error.message);
      }
    }

    onMounted(() => {
      getBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs)
    }
    }
  }

</script>

<style scoped lang="scss">
</style>
