import React, { useEffect, useRef, useState } from 'react';
import './Info.css';
import ImgMarketPlace from '../../IMG/Marketplace.svg';
import ImgJobConnection from '../../IMG/JobConnection.svg';
import ImgHackatones from '../../IMG/hackatones.svg';
import ImgPQR from '../../IMG/PQR.svg';
import ImgBootcamps from '../../IMG/Bootcamps.svg';
import ImgUsuario from '../../IMG/Usuario.svg';
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
            <div className='carrousel-student'>
                <div className='flex flex-row'>
                    <div id="default-carousel" class="relative w-full" data-carousel="slide">
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                        </div>
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div className='max-w-sm'>
                        <h1>Novedades en talento tech</h1>
                        <p> Haz tus propias noticias</p>

                        <a className=''> Crea tus propias noticias</a>
                        <a className=''> Como crear tu noticia</a>
                    </div>

                </div>
                <ul className='grid grid-cols-3 grid-rows-2 pb-16'>
                        <li className='flex flex-row justify-between'>
                            <Link to={"/users"} className='block w-96 h-52 p-6 bg-yellow-300 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-yellow-500 hover:bg-yellow-400'>
                                <h1 className='font-semibold'>
                                    usuario
                                </h1>
                                <p className='font-semibold'>Editar usuario</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i className="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgUsuario} alt="imagen Market" className='absolute bottom-2 right-2'/>
                            </Link>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='block w-96 h-52 p-6 bg-sky-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-sky-600 hover:bg-sky-500'>
                                <h1 className='font-semibold'>
                                    bootcamps
                                </h1>
                                <p className='font-semibold'>Editar bootcamps</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i class="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgBootcamps} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='block w-96 h-52 p-6 bg-blue-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-blue-600 hover:bg-blue-500'>
                                <h1 className='font-semibold'>
                                    pqr
                                </h1>
                                <p className='font-semibold'>Editar pqrs</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i class="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgPQR} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-betwee'>
                            <a href='#' className='block w-96 h-52 p-6 bg-purple-500 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-purple-700 hover:bg-purple-600'>
                                <h1 className='font-semibold'>
                                    hackathons
                                </h1>
                                <p className='font-semibold'>Editar hackatones</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i class="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgHackatones} alt="imagen Market" className='absolute bottom-0 right-4 '/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                        <a href='#' className='block w-96 h-52 p-6  bg-red-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-red-600 hover:bg-red-500'>
                                <h1 className='font-semibold'> 
                                    job connections
                                </h1>
                                <p className='font-semibold'>Editar job connections</p>
                                <div className='flex flex-row pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i class="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgJobConnection} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                        <li className='flex flex-row justify-between'>
                            <a href='#' className='relatove w-96 h-52 p-6  bg-lime-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-lime-600 hover:bg-lime-500'>
                                <h1 className='font-semibold'>
                                    marketplace
                                </h1>
                                <p className='font-semibold'>Editar marketplace</p>
                                <div className='flex flex- pt-5'>
                                    <p className='font-semibold text-base'>
                                        Link Ingeso
                                    </p>
                                    <i class="bi bi-chevron-right px-3 text-base"></i>
                                </div>
                                <img src={ImgMarketPlace} alt="imagen Market" className='absolute bottom-0 right-4'/>
                            </a>
                        </li>
                    </ul>
                <h1>Estudiantes reconocidos por su talento!</h1>
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
                </div>



            </div>



        </>
    );
};

export default Info;