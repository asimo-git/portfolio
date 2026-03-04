"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 0.6 * window.innerHeight);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            onClick={scrollToTop}
            className={`
    fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-1000
    w-10 h-10 rounded-full 
    cursor-pointer
    transition-all duration-300 ease-in-out
    ${
        isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
    }
    group
  `}
        >
            <svg
                viewBox="0 0 48 48"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="arrowGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#064e3b" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                </defs>
                <g clipPath="url(#clip0_28549_31477)">
                    <path
                        fill="url(#arrowGradient)"
                        d="M22.1695 0.0487595C17.782 0.461258 14.0789 1.73626 10.732 3.97688C7.12266 6.38626 4.33828 9.56438 2.42578 13.4363C1.24453 15.855 0.522656 18.2269 0.119531 21.03C-0.0398438 22.1363 -0.0398438 25.83 0.119531 26.9363C0.513281 29.7019 1.24453 32.1206 2.38828 34.4363C3.67266 37.0613 4.93828 38.8238 7.01953 40.9144C9.09141 42.9769 10.882 44.2613 13.4039 45.4988C15.1664 46.3613 16.3008 46.7831 18.0914 47.2331C19.9289 47.6925 21.307 47.8894 23.2008 47.955C28.6383 48.1425 33.9164 46.4738 38.3414 43.1644C39.6352 42.1988 41.8945 39.9863 42.8133 38.7956C47.4633 32.7581 49.0289 25.3519 47.2008 18.0769C46.6477 15.8738 45.4945 13.155 44.332 11.3269C42.3539 8.20501 39.2977 5.20501 36.307 3.42376C32.4352 1.11751 28.1414 -0.0543671 23.7633 0.00188446C23.0695 0.00188446 22.3477 0.0300102 22.1695 0.0487595Z"
                        className="transition-all duration-200 "
                    />
                    <path
                        d="M23.4746 12.9656C23.2214 13.1062 17.7277 19.6593 17.6152 19.95C17.2402 20.925 18.3652 21.8625 19.2371 21.3C19.3777 21.2156 20.2402 20.2312 21.1589 19.1343L22.8277 17.1187L22.8746 25.7906C22.9214 35.1937 22.8933 34.6781 23.4464 35.0062C23.9339 35.2968 24.5996 35.1562 24.9089 34.6968C25.0683 34.4718 25.0777 33.8625 25.1246 25.7906L25.1714 17.1187L26.8402 19.1343C27.7589 20.2312 28.6214 21.2156 28.7621 21.3C29.2871 21.6468 30.0558 21.4218 30.3277 20.85C30.5152 20.4468 30.5058 20.1656 30.2808 19.8093C29.9902 19.3218 24.7402 13.0875 24.5246 12.9656C24.4214 12.9 24.1777 12.8531 23.9996 12.8531C23.8214 12.8531 23.5777 12.9 23.4746 12.9656Z"
                        className="fill-[#022c22b1] transition-all duration-200 group-hover:fill-[#059669]"
                    />
                </g>
            </svg>
        </div>
    );
}
