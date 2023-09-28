import { Post } from "../models/post.model.js";

export class PostsService {
  static async getAllPosts() {
    const posts = await Post.find({});

    return posts;
  }

  static async createPost(postData) {
    const { title, body, author } = postData;

    const post = new Post({ title, body, author });

    const createdPost = post.save();

    return createdPost;
  }

  static async getPostById(id) {
    const post = await Post.findById({ id })
      .populate({
        path: "Author",
        select: "username email",
      })
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "username",
        },
      });

    if (!post) throw new Error("Post not found");

    return post;
  }

  static async updatePost(user, postId, updateData) {
    const post = await Post.findOne({ id: postId, author: user._id });

    if (!post) throw new Error("Post not found");

    Object.assign(post, updateData);

    await post.save();
  }

  static async deletePost(user, postId) {
    const response = await Post.findByIdAndDelete({
      _id: postId,
      author: user._id,
    });

    if (!response) throw "Post not found";
  }

  static async likePost(postId) {
    const post = await this.getPostById(postId);

    if (!post) throw "Post not found";

    post.likes += 1;

    const updatedPost = await post.save();

    return { likes: updatedPost.likes };
  }

  static async dislikePost(postId) {
    const post = await this.getPostById(postId);

    if (!post) throw "Post not found";

    post.dislikes -= 1;

    const updatedPost = await post.save();

    return { dislikes: updatedPost.dislikes };
  }
}
