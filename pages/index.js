import Layout from '../components/Layout'

const Index = () => (

    <Layout>
        {/* header card */}
        <header className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-secondary text-light'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src="https://github.com/FaztTech/next-simple-portfolio/blob/main/public/ryan-ray-profile2.jpeg?raw=true" className='img-fluid'/>
                        </div>
                        <div className='col-md-8'>
                            <h1>Rayn Ray</h1>
                            <h3>FullStats Developer</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque ipsum harum deserunt nesciunt. Consectetur asperiores recusandae rem ipsa voluptates suscipit! Quis, minus architecto nobis odit laborum dolore! Totam, ad?</p>
                            <a href="/hireme">hireme</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    </Layout>

)

export default Index