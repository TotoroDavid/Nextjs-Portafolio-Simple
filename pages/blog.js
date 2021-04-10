import Link from 'next/link'
import Layout from '../components/Layout'
import {posts} from '../profile'

const PostCard = ({post}) => (
    <div className='col-md-4 text-center'>
        <div className='card bg-light'>
            <div className='overflow'>
                <img src={post.imageUrl} alt="" className='card-img-top'/>
            </div>
            <div className='card-body'>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <Link href={`/post?title=${post.title}`}>
                    <button className='btn btn-light'>Read More!!</button>
                </Link>
            </div>
        </div>
    </div>
)

const Blog = () => (

    <Layout footer={false} title="My Blog" dark>
        <div className='row'>
            {
                posts.map((post, i) => (        
                    <PostCard post={post} key={i}  />
                ))
            }
        </div>
    </Layout>

)

export default Blog