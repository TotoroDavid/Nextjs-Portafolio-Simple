import Navbar from './NavBar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({children, title, footer =  true, dark = false }) => {

    const router = useRouter()

    useEffect(() =>{

        const handleRouterChange = url => {
            NProgress.start()
        }
        router.events.on('routeChangeStart', handleRouterChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return  () => {
            router.events.off('routeChangeStart', handleRouterChange)
        }
    })

    return (
        <div className={dark ? 'bg-dark': ''}>
            <Navbar/>
            <main className="container py-4">
                {title && (
                    <h1 className="text-center text-light">
                        {title}
                    </h1>
                )}
                {children}
            </main>
            {
                footer && (
                    <footer className='bg-dark text-light text-center'>
                        <div className='container p-4'>
                            <h1>&copy Ryan Ray Portfolio</h1>
                            <p> 2000 - {new Date().getFullYear()}</p>
                            <p>All rights reserved.</p>
                        </div>
                    </footer>
                )
            }
            
        </div>
    )
}

export default Layout