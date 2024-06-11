import React, { useEffect, useRef, useState } from 'react';
import './Info.css';
import Student from '../../IMG/estudent.jpg';

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
                <div className='info-container'>
                    <div className='info-card'>
                        <div className='text-primary'>
                            <h1>¡ Despierta tu Pontencial y Aprende Sin Limites!</h1>
                        </div>
                        <div className='tex-secondary'>
                            <h3>¿Estas Listo?</h3>
                        </div>
                    </div>
                    <div className='info-imagen'>
                        <img src={Student} alt='Student' title='Student' />
                    </div>
                </div>
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