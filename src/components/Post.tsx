import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";




const Post = () => {
  return (
    <div className="mt-5 p-2">
      <PostHeader/>
      <PostBody/>
      <PostFooter/>
    </div>
  );
};

export default Post;