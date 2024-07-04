import React from 'react'
import Header from '../Header/Header'
import './News.css'

const News = () => {
    return (
        <div className='container-general-news'>
            <div className="header">
                <Header />
            </div>
            <div className="title-news"> 
                <h1>Seccion de noticias nuevas</h1>
            </div>    
            <div className="body-news">
                <div className="movies">
                    <h2>Talento Tech</h2>
                    <div className="movie-item">
                        <img src="https://via.placeholder.com/150" alt="Movie" />
                        <div className="movie-info">
                            <h3>Fantastica portunidad con colaboracion con Min TIC</h3>
                            <p>April 7, 2022</p>
                            <p>Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore...</p>
                            <a href="#">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="latest-news">
                    <h2>Min Tic</h2>
                    <div className="news-item">
                        <div className="news-info">
                            <span className="news-category">Politics</span>
                            <p>April 16, 2022</p>
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dignissimos asperiores necessitatibus, voluptatum debitis nam doloremque quia magnam veniam quae. Et excepturi totam voluptate temporibus blanditiis! Fugiat, itaque. Quidem, nesciunt.</p>
                            <a href="#">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="most-read">
                    <h2>Educacion</h2>
                    <div className="most-read-item">
                        <img src="https://via.placeholder.com/150" alt="Most Read" />
                        <div className="most-read-info">
                            <span className="news-category">Educación</span>
                            <p>April 16, 2022</p>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ad quod animi unde quas suscipit voluptatem dolor eius hic ut ullam illo. Ipsum odit repellat molestiae ex, aspernatur saepe dicta.</h3>
                            <a href="#">Continue Reading</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default News