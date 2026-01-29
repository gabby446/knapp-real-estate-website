"use client";

import { useEffect } from "react";

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set up scroll animations observer
  useEffect(() => {
    document.body.className = "antialiased font-body";

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <body className="antialiased font-body" suppressHydrationWarning>
      {children}
    </body>
  );
}

export default ClientBody;
