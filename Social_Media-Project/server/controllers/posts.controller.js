import { PostsService } from "../services/posts.service.js";

export class PostsController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostsService.getAllPosts();

      return res.json(posts);
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  }

  static async createPost(req, res) {
    try {
      const newPost = await PostsService.createPost(req.body);

      return res.status(201).send(newPost);
    } catch (error) {
      return res.status(400).send({ msg: error });
    }
  }

  static async getPostById(req, res) {
    try {
      const postId = req.params.id;

      const foundPost = await PostsService.getPostById(postId);

      res.json(foundPost);
    } catch (error) {
      return res.status(404).send({ msg: error });
    }
  }

  static async updatePost(req, res) {
    try {
      const postId = req.params.id;
      const updateData = req.body;
      const user = req.user;

      await PostsService.updatePost(user, postId, updateData);

      return res.sendStatus(204);
    } catch (error) {
      return res.status(400).send({ msg: error });
    }
  }
  // 5. Delete a post
  static async deletePost(req, res) {
    try {
      await PostsService.deletePost(req.user, req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).send({ msg: error });
    }
  }
  // 6. Like a post
  static async likePost(req, res) {
    try {
      const postId = req.params.id;

      const likeCount = await PostsService.likePost(postId);

      return res.status(200).json(likeCount);
    } catch (error) {
      return res.status(400).send({ msg: error });
    }
  }
  // 7. Dislike a post
  static async dislikePost(req, res) {
    try {
      const postId = req.params.id;

      const dislikeCount = await PostsService.dislikePost(postId);

      return res.status(200).json(dislikeCount);
    } catch (error) {
      return res.status(400).send({ msg: error });
    }
  }
}
