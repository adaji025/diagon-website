import React, { FC, RefObject, useEffect, useRef, useState } from "react";

 export function useElementOnScreen(
    ref: RefObject<Element>,
    rootMargin = "0px",
  ) {
     const [isIntersecting, setIsIntersecting] = useState(true);
     
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
    return isIntersecting;
}

type PropsWithChildren = {
    children: React.ReactNode
    className: string
    
}
  
export const AnimateIn: FC<PropsWithChildren> = ({ children, className,   }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref);
    return (
      <div
        ref={ref}
        style={{
          opacity: onScreen ? 1 : 0,
          translate: onScreen ? "none" : "0 2rem",
          transition: "600ms ease-in-out",
            }}
            className={className}
      >
        {children}
      </div>
    );
  };