import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('[GETTING BLOGS', res.data);
        const blogs = res.data.map(b => new Blog(b))
        AppState.blogs = blogs
    }


}

export const blogsService = new BlogsService()