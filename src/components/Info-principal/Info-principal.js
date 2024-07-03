import React, { useEffect, useRef, useState } from 'react';
import './Info.css';
import ImgMarketPlace from '../../IMG/Marketplace.svg';
import ImgJobConnection from '../../IMG/JobConnection.svg';
import ImgHackatones from '../../IMG/hackatones.svg';
import ImgPQR from '../../IMG/PQR.svg';
import ImgBootcamps from '../../IMG/Bootcamps.svg';
import ImgUsuario from '../../IMG/Usuario.svg';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Info = () => {

    const [users, setUsers] = useState([]);
    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const carousel = carouselRef.current;

        const fetchUsers = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=11");
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                console.log("Error :", error)
            }
        }

        if (wrapper && carousel) {
            const arrowBtns = document.querySelectorAll(".wrapper i");
            const firstCardWidth = carousel && carousel.querySelector(".card") ? carousel.querySelector(".card").offsetWidth : 0;
            const carouselChildrens = [...carousel.children];

            let isDragging = false, startX, startScrollLeft, timeoutId;
            let cardPreView = Math.round(carousel.offsetWidth / firstCardWidth);

            carouselChildrens.slice(-cardPreView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });

            carouselChildrens.slice(0, -cardPreView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });

            arrowBtns.forEach(bnt => {
                bnt.addEventListener("click", () => {
                    carousel.scrollLeft += bnt.id === "left" ? -firstCardWidth : firstCardWidth;
                });
            });

            const dragStart = (e) => {
                isDragging = true;
                carousel.classList.add("dragging");
                startX = e.pageX;
                startScrollLeft = carousel.scrollLeft;
            };

            const dragging = (e) => {
                if (!isDragging) return;
                carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
            };

            const dragStop = () => {
                isDragging = false;
                carousel.classList.remove("dragging");
            };

            const autoPlay = () => {
                if (window.innerWidth < 800) return;
                timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
            };

            autoPlay();

            const infiniteScroll = () => {
                if (carousel.scrollLeft === 0) {
                    console.log("izquierda fin");
                    carousel.classList.add("no-transition");
                    carousel.scrollLeft = carousel.scrollWidth;
                    carousel.classList.remove("no-transition");
                } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                    console.log("derecha fin");
                    carousel.classList.add("no-transition");
                    carousel.scrollLeft = carousel.offsetWidth;
                    carousel.classList.remove("no-transition");
                }
                clearTimeout(timeoutId);
                if (!wrapper.matches(":hover")) autoPlay();
            };

            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("scroll", infiniteScroll);
            wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.addEventListener("mouseleave", autoPlay);
        }
        fetchUsers();
    }, []);



    return (
        <>
            <div className='carrousel-student  p-1'>
                <Container className="px-0" fluid>
                    <Row className=" w-100 h-100 m-0 px-40  mt-3">
                        <Col className=" mt-1 mx-2 p-0 py-3 rounded" xs={7}>
                                <Carousel className='w-100 h-100'>
                                    <Carousel.Item className='w-100 h-100'>
                                        <img src="https://www.mintic.gov.co/portal/715/articles-333597_foto_marquesina.jpg" className='w-100 h-75 rounded-l-xl rounded-r-sm' alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src="https://www.mintic.gov.co/portal/715/articles-333040_foto_marquesina.jpg" className='w-100 h-75 rounded-l-xl rounded-r-sm' alt="..." />
                                    </Carousel.Item>
                                </Carousel>
                        </Col>
                        <Col className="px-0 mx-0">
                            <div className='max-w-xl px-2 flex flex-col justify-center align-middle pt-10'>
                                <h1 className='block font-bold text-gray-600 text-3xl text-center mb-0'> News Talento Tech</h1>
                                <p className='block font-bold text-blue-400 text-xl text-center mb-9'> Crea tus novedades </p>

                                <a className='btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-3 border-b-4 border-blue-600 hover:border-blue-700 hover:shadow-black hover:font-semibold hover:text-sm shadow mb-2 mx-5 text-sm rounded'> APRENDE A CREAR NOVEDADES </a>
                                <a className='btn bg-white text-blue-600 hover:text-blue-600 font-semibold py-3 px-3 border-b-4 border-gray-300 hover:border-gray-400 hover:shadow-black hover:font-semibold hover:text-sm shadow mx-5 text-sm rounded'> CREA NOVEDAD </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ul className='grid grid-cols-3 grid-rows-2 pb-16'>
                        <li className='flex flex-row justify-between'>
                            <Link to={"/users"} className='block w-96 h-52 p-6 bg-yellow-300 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-yellow-500 hover:bg-yellow-400'>
                                <h1 className='font-semibold'>
                                    Usuario
                                </h1>
                                <p className='font-semibold'>Editar usuario</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgUsuario} alt="imagen Market" className='absolute bottom-2 right-2'/>
                            </Link>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='block w-96 h-52 p-6 bg-sky-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-sky-600 hover:bg-sky-500'>
                                <h1 className='font-semibold'>
                                    Bootcamps
                                </h1>
                                <p className='font-semibold'>Editar bootcamps</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgBootcamps} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='block w-96 h-52 p-6 bg-blue-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-blue-600 hover:bg-blue-500'>
                                <h1 className='font-semibold'>
                                    Pqr
                                </h1>
                                <p className='font-semibold'>Editar sesiones</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgPQR} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-betwee'>
                            <a href='#' className='block w-96 h-52 p-6 bg-purple-500 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-purple-700 hover:bg-purple-600'>
                                <h1 className='font-semibold'>
                                    Actividades
                                </h1>
                                <p className='font-semibold'>Editar Actividad</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgHackatones} alt="imagen Market" className='absolute bottom-0 right-4 '/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                        <a href='#' className='block w-96 h-52 p-6  bg-red-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-red-600 hover:bg-red-500'>
                                <h1 className='font-semibold'> 
                                    Job connections
                                </h1>
                                <p className='font-semibold'>Editar job connections</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgJobConnection} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='relatove w-96 h-52 p-6  bg-lime-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-lime-600 hover:bg-lime-500'>
                                <h1 className='font-semibold'>
                                    Marketplace
                                </h1>
                                <p className='font-semibold'>Editar marketplace</p>
                                <div className='flex flex- pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingreso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgMarketPlace} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                    </ul>
                {/*<h1>Estudiantes reconocidos por su talento!</h1>
                <div className="wrapper" ref={wrapperRef}>
                    <i id="left" className="fa-solid fa-chevron-left"></i>
                    <ul className="carousel" ref={carouselRef}>
                        {users.map((user, index) => (
                            <li key={index} className="card">
                                <div className="img"><img src={user.picture.large} alt="evento" draggable="false" /></div>
                                <h2>{user.name.first} {user.name.last}</h2>
                                <span>Bootcamp</span>
                                <a href={`https://www.linkedin.com/in/${user.name.first}/ `} target='_blank'>
                                    <button class="ui-btn">
                                        <span>
                                            Conoceme
                                        </span>
                                    </button>
                                </a>

                            </li>
                        ))}


                    </ul>
                    <i id="rigth" className="fa-solid fa-chevron-right"></i>
                </div>*/}



            </div>



        </>
    );
};

export default Info;