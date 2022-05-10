// const BlogPost = require('../models/BlogPost');
// const Category = require('../models/Category');
// const User = require('../models/User');

// async function addPost(title, content, userId, categoryIds) {
//   const search = categoryIds.map((id) => Category.findByPk(id));
//   const categories = await Promise.all(search);
//   const nullCategories = categories.find((category) => category === null);
//   if (nullCategories === null) {
//     throw new Error('"categoryIds" not found');
//   }

//   const post = await BlogPost.create({
//     title,
//     content,
//     userId,
//   });
//   post.addCategories(categories);
//   return post;
// }

// async function getAllPosts() {
//   const allPosts = await BlogPost.findAll({
//     include: [{
//       model: User,
//       as: 'user',
//     },
//     {
//       model: Category,
//       as: 'categories',
//     }],
//   });

//   return allPosts;
// }

// module.exports = { addPost, getAllPosts };