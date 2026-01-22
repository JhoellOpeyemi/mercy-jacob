// hooks import
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/hooks/useLoading";
// utils import
import { easeExit } from "@/utils";
// styles import
import "./loader.css";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const { setLoading } = useLoading();
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderTlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const path1 = loaderRef.current?.querySelectorAll("path")[0];
      const path2 = loaderRef.current?.querySelectorAll("path")[1];
      if (!path1 || !path2) return;

      const path1Length = path1.getTotalLength();
      const path2Length = path2.getTotalLength();

      path1.style.strokeDasharray = path1Length.toString();
      path1.style.strokeDashoffset = path1Length.toString();

      path2.style.strokeDasharray = path2Length.toString();
      path2.style.strokeDashoffset = path2Length.toString();

      loaderTlRef.current = gsap
        .timeline({ onComplete: () => setLoading(false) })
        .to([path2, path1], {
          strokeDashoffset: 0,
          duration: 1,
          ease: easeExit,
          repeat: 3,
          repeatDelay: 0.2,
        })
        .to(
          ".loader-text",
          {
            opacity: 0.7,
          },
          "<+0.5",
        )
        .to(path2, {
          strokeDashoffset: path2Length.toString(),
          duration: 1,
          ease: easeExit,
        })
        .to(
          path1,
          {
            strokeDashoffset: path1Length.toString(),
            duration: 1,
            ease: easeExit,
          },
          "<",
        )
        .to(
          ".loader-text",
          {
            opacity: 0,
          },
          "<",
        )
        .to(".loader-row div ", {
          x: "100%",
          ease: easeExit,
          stagger: {
            each: 0.075,
            from: "start",
          },
        });
    },
    { scope: loaderRef },
  );
  return (
    <div className="loader-container" ref={loaderRef}>
      <svg
        width="49"
        height="43"
        viewBox="0 0 49 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="loader-svg"
      >
        <path
          d="M45.0293 1.12012C44.7581 1.41415 44.5522 1.77105 44.416 2.17969C44.1687 2.89182 44.0772 3.89337 44.0771 5.08789V22.6562C44.0771 23.9602 44.0612 25.3771 44.0293 26.9072C43.9977 28.422 43.9188 29.8876 43.793 31.3037L43.791 31.3252C43.7093 32.5504 43.5699 33.6286 43.375 34.5635L43.2891 34.9482C42.7952 36.9814 41.7582 38.6513 40.1631 39.9854L40.1562 39.9912L40.1484 39.998C39.9994 40.1278 39.8434 40.2486 39.6846 40.3662C40.1542 39.6841 40.5241 38.8795 40.8018 37.9727L40.8008 37.9717C41.3553 36.2946 41.6133 34.1185 41.6133 31.4883V5.08789C41.6133 3.88409 41.5202 2.87622 41.2686 2.16309H41.2666C41.1293 1.75864 40.9223 1.40978 40.6514 1.12305C41.3412 1.13496 42.0488 1.14355 42.7734 1.14355C43.5451 1.14355 44.2971 1.13363 45.0293 1.12012Z"
          stroke="#fafafa"
          strokeWidth="2"
        />
        <path
          d="M33.8398 1.12109C33.6044 1.37661 33.4182 1.67935 33.2842 2.02246L33.2275 2.17969C32.9802 2.89183 32.8877 3.89326 32.8877 5.08789V28.8965C32.8877 30.0775 32.9835 31.0725 33.2275 31.8047C33.3636 32.2126 33.5692 32.5686 33.8398 32.8623C33.1264 32.8489 32.4062 32.8398 31.6797 32.8398C30.911 32.8398 30.1717 32.8483 29.4619 32.8604C29.7365 32.5697 29.9477 32.2162 30.085 31.8047C30.329 31.0725 30.4238 30.0775 30.4238 28.8965V3.33496L30.5527 2.98926L30.8135 2.28809L30.0244 1.69629L29.9365 1.62988L30.1182 1.14355H31.6797C32.4062 1.14355 33.1264 1.13445 33.8398 1.12109ZM4.44531 31.7568C4.63126 32.1782 4.88842 32.5432 5.21191 32.8467C4.95865 32.8439 4.70923 32.8398 4.46387 32.8398C4.21949 32.8398 3.97374 32.8437 3.72656 32.8467C4.03629 32.5413 4.27664 32.1755 4.44531 31.7568ZM17.46 32.4199L16.9092 31L18.2178 30.3838L17.46 32.4199ZM18.0322 27.8135L17.6875 28.7383L16.875 30.9131L5.92383 2.70996L4.73535 2.93262C4.68638 2.65517 4.62548 2.40313 4.54785 2.17969H4.54883C4.41391 1.77496 4.20832 1.42567 3.94043 1.1377C4.11563 1.13918 4.29008 1.14355 4.46387 1.14355C5.18286 1.14355 5.91734 1.12731 6.66699 1.09473L6.66602 1.09375C7.10794 1.07534 7.5091 1.0576 7.86914 1.03906L18.0322 27.8135Z"
          stroke="#fafafa"
          strokeWidth="2"
        />
      </svg>

      <p className="loader-text">Loading...</p>

      <div className="loader-row loader-row__1">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
