
import { useEffect } from 'react';
import PostItem from '../components/posts/Postitem.tsx'
import { getAll } from '../api/posts.ts';
import { posts } from '../data/posts.ts';


const MainPage = () => {
  useEffect( ()=>{
  fetchPosts()
}, []);

async function fetchPosts() {
  const posts = await getAll()
}

  return (
    <>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
      {!posts.length && <p>Постов нет</p>}
    </>
  )
}
export default MainPage