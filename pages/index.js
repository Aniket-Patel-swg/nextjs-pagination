import styles from "../styles/Home.module.css";
import Link from "next/link";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef(null);

  const LinkRef = useRef(null);

  useEffect(() => {
    const linkEl = LinkRef.current;

    gsap.fromTo(
      linkEl,
      { y: 100 },
      {
        y: 0,
        duration: 5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: linkEl,
        },
      }
    );
  }, []);

  const options = {
    smooth: true,
  };

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          <div className={styles.main_container} data-scroll-section>
            <div className={styles.first_text}>
              <section className={styles.first_text_wrapper}>
                <p>
                  {" "}
                  Hi i'm <b>Aniket</b>{" "}
                </p>
              </section>

              <section className={styles.assignment_link}>
                <p>
                  <Link href="/assignment/1">Assignment</Link>
                </p>
              </section>
            </div>
          </div>
          <section className={styles.second_page} data-scroll-section
          data-scroll-speed="1"
          >
            <div className={styles.left_div}>
              <section className={styles.resume}>
                <p ref={LinkRef}>
                  Please find attached <br /> Resume <br />
                </p>
              </section>
              <section className={styles.link_wrapper}>
                <Link ref={LinkRef} href="/resume">
                  My Resume
                </Link>
              </section>
            </div>
            <div className={styles.previous_works}>
              <img
                src="https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <img
                src="https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <img
                src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <img
                src="https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
