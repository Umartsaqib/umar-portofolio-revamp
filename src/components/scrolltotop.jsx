import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./scroll.css";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 10);

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll position:", window.scrollY);
            if (window.scrollY > 200 && isMobile) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        const handleResize = () => {
            console.log("Window width:", window.innerWidth);
            setIsMobile(window.innerWidth > 10);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};

export default ScrollToTop;
