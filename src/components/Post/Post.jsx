const Post = ({ post }) => {
  return (
    <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl">
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
        {post.postTitle}
      </h2>
      <img className="" src={post.image} alt="" />
      <p className=""> {post.postContent}</p>
    </article>
  );
};

export default Post;
