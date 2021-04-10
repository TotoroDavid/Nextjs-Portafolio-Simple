import Layout from "../components/Layout"

const _error = ({statusCode}) => {
    return (
        <Layout>
        {
            statusCode ? (
                <p className='text-center'>could not to load your page: status code {statusCode}</p>
            ) : (
                <p>could not to get this page </p>
            )
        }
            
        </Layout>
    )
}

export default _error