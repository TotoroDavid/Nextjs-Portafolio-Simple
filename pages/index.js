import Link from 'next/link'
import Layout from '../components/Layout'
import {skills, experiences, projects} from '../profile'

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
        {/* second section */}
        <div className="row py-2">   
            <div className='col-md-4'>
                <div className='card bg-light'>
                    <div className='card-body'>
                        <h1>Skills</h1>
                        {/* skill progress */}
                        {
                            skills.map(({skill, percentage}, i) => (
                                <div className='py-3' key={i}>
                                    <h5>{skill}</h5>
                                    <div className='progress'>
                                        <div
                                            className='progress-bar'
                                            role='progressbar'
                                            style={{ width : `${percentage}%` }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='col-md-8'>
                <div className='card bg-light'>
                    <div className='card-body'>
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map (({title, description, from, to}, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences" >
                            <a className='btn btn-light'>Know more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* portfolio */}
        <div className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-dark'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center text-light'>Portfolio</h1>
                        </div>
                        {
                            projects.map(({name, description, image}, i) => (
                                <div className='col-md-4 p-2' key={i}>
                                    <div className='card h-100'>
                                        <div className='overflow'>
                                            <img src={image} className='card-img-top'/>
                                        </div>
                                        <div className='card-body'>
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="#">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    </Layout>

)

export default Index