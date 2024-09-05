import './postitem.css'
import { Post } from '../../redux/types/posts';


interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {

  return (
    <div className="post">  
      <img src={post.image} className="post__image"></img>
      <div className='post__content'>
        <h3>{post.title}</h3>
        <pre>{post.text}</pre>
        <img src={post.owner.avatar} className='post__avatar'></img>
        <p>Tags:{ }</p>
      </div>
    </div>
  );
};

export default PostItem

