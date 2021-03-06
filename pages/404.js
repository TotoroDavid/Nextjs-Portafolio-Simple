import Layout from "../components/Layout"
import Link from 'next/link'

const custom404 =() =>(
    <Layout>
        <div className='text-center'>
            <h1>404</h1>
            <p>this page does not exist. Please returned to 
                <Link href="/">
                    <a> home </a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default custom404