import Layout from '../components/Layout'
import _error from '../pages/_error'

const Github = ({user, statusCode}) => {

    if (statusCode) {
        return <_error statusCode={statusCode}/>
    }

    return (
        <Layout footer = {false} dark = {true}>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='card card-body text-center'>
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt=""/>
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" className='btn btn-outline-dark'>follow me !!</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch ('https://api.github.com/users/TotoroDavid')
    const data = await res.json()
    const statusCode = res.status > 200 ? res.status : false
    return {
        props: {
            user : data, statusCode
        }
    }
}


export default  Github