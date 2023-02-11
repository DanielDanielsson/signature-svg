/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";

const Signature = () => {
  const [animate, toggleAnimate] = useState(false);

  const STROKE_WIDTH = 1.6;

  const animatePath = (pathname, animation, reverse = false) => {
    const path = document.querySelector(pathname);

    if (!path) return;

    const length = path.getTotalLength();
    console.log("length", length);
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = "none";
    // Set up the starting positions
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = reverse ? -length : length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition = animation;
    // Go!
    path.style.strokeDashoffset = "0";
  };

  useEffect(() => {
    animatePath(
      "#D1dot path",
      "stroke-dashoffset 100ms ease-in-out 0ms",
      false
    );
    animatePath("#D1 path", "stroke-dashoffset 300ms ease-in-out 200ms", true);
    animatePath("#D1rest path", "stroke-dashoffset 1s ease-in-out 500ms", true);
    animatePath(
      "#D2 path",
      "stroke-dashoffset 300ms ease-in-out 1500ms",
      false
    );
    animatePath(
      "#D2rest path",
      "stroke-dashoffset 1s ease-in-out 1800ms",
      true
    );
    animatePath(
      "#idot1 path",
      "stroke-dashoffset 100ms ease-in-out 2800ms",
      true
    );
    animatePath(
      "#idot2 path",
      "stroke-dashoffset 100ms ease-in-out 3000ms",
      true
    );

    animatePath(
      "#maskedD1 path",
      "stroke-dashoffset 300ms ease-in-out 200ms",
      false
    );
  }, [animate]);

  return (
    <>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid white",
          background: "unset",
          color: "white",
        }}
        onClick={() => toggleAnimate(!animate)}
      >
        toggle
      </button>
      <div style={{ width: "1000px", height: "1000px" }}>
        <svg height="auto" width="100%" viewBox="0 0 300 300">
          <mask id="myMask">
            <rect x="0" y="0" width="100" height="100" fill="white" />

            <path
              d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
              fill="black"
            />
          </mask>
          <g id="D1dot">
            <path
              transform="translate(40,49)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M0.743286 0.615234C1.26901 3.62378 2.00502 10.205 0.743286 12.4614"
            />
          </g>
          <g id="D1">
            <path
              transform="translate(0,35)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M1 34.9999c1.85103-.1113 7.95941-.4674 17.5847-1.0016 9.6254-.5341 21.0812-.8902 25.6059-1.0015l47.2011 1.0015c2.1082.1113 6.201-.267 5.7074-2.6707-.4936-2.4036-2.4681-5.0076-3.3936-6.0091-3.1364-4.2286-15.5794-14.6889-40.2598-22.70104C29.3824-2.99103 10.4094 4.06409 3.93079 8.29272c-.53381.34842.45372 2.45488 0 3.70728"
            />
          </g>
          <g id="D1rest">
            <path
              transform="translate(85,0)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M47.4474 61.8884C46.3623 62.0399 46.1197 61.5533 46.4219 59.5523C46.4219 59.5523 47.6527 50.9864 46.4219 52.5438C45.1912 54.1012 43.6184 56.5288 41.0894 60.331C37.6909 65.6974 36.3722 68.1182 35.5517 67.7288C34.7313 67.3394 34.3212 65.0033 34.1161 63.4459C33.911 61.8884 34.032 59.0045 34.5264 56.0481L36.7824 44.7566L39.0385 34.6333L42.5251 20.6164C44.7215 12.1334 45.9677 7.85927 48.2678 2.70592C49.4493 0.709463 50.0247 0.169239 50.5239 2.70592C50.7781 4.94228 50.6575 6.32005 50.1137 8.93566C48.5962 17.4429 47.4736 21.7901 44.9863 28.7929C42.1788 36.3861 39.2143 42.6374 32.8855 55.2693C26.727 66.8161 25.9909 70.781 24.7368 63.7293C23.7538 57.992 27.1725 50.4407 28.5665 51.0015C30.3003 51.4153 28.3561 57.1467 26.2072 60.5974C23.6675 64.6755 22.3832 66.9954 21.5163 66.9954C20.6494 66.9954 20.3368 63.1794 21.4893 57.3577C21.4893 57.3577 23.5359 49.8974 22.669 51.2126C21.8021 52.5278 17.1921 67.2501 16.1589 67.2288C15.0062 67.2289 18.4818 51.1115 17.9306 51.2126C17.0637 52.5278 12.0454 67.2501 11.0123 67.2288C9.8596 67.2289 13.7435 51.1115 13.1923 51.2126C12.751 51.2936 5.76897 67.2288 5.76897 66.8914L10 50.5C10.5 50 2.0537 66.3989 1.57685 66.9954C1.09999 67.5918 -0.269386 66.0878 4.17737 55.9902C5.80301 52.5647 7.76621 50 9.5 50"
            />
          </g>
          <g id="D2">
            <path
              transform="translate(90,36)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M4.08069 8.29272C10.5593 4.06409 29.5323-2.99103 53.5956 2.61746 78.276 10.6296 90.719 21.0899 93.8554 25.3185c.9255 1.0015 2.9 3.6055 3.3936 6.0091.4936 2.4037-3.5992 2.782-5.7074 2.6707l-47.2011-1.0015c-4.5247.1113-15.9805.4674-25.6059 1.0015-9.62529.5342-15.73367.8903-17.5847 1.0016"
            />
          </g>
          <g id="D2rest">
            <path
              transform="translate(160,3)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M51.8568 61.7951c-.8669 2.6305-2.7967 3.9368-2.6007 0 .0591-1.3153 1.5375-13.7372.8077-13.1523-.8669 1.3153-5.0351 15.8041-6.0682 15.7828-1.1527 0 1.8811-15.8839 1.3299-15.7828-.8669 1.3153-5.0351 15.8041-6.0683 15.7828-1.1526 0 2.7736-19.1107 1.3299-15.7828-1.4436 3.328-4.9112 14.4677-5.7781 15.165-.8669.6974-2.3329.4397-2.6245-1.3152-.1954-1.5336-.0801-4.3735.3907-7.2848.8917-4.5494 1.3473-6.9253 2.1489-11.1191l2.1488-9.9688 3.3209-13.8029c2.0921-8.3535 3.279-12.56244 5.4698-17.63712 1.1253-1.965982 1.6734-2.49796 2.1489 0 .7932 5.90346-.4278 11.63762-5.2745 25.68882-3.181 8.9625-5.7709 14.7298-11.5256 26.0722-6.1656 13.0767-6.5636 11.1806-6.8963 6.6669-.983-5.7372 3.0565-13.2368 4.4506-12.676 1.7337.4138-.2105 6.1452-2.3594 9.5959-2.5397 4.0781-3.824 6.398-4.6909 6.398-.8669 0-1.1795-3.8159-.027-9.6376 0 0 2.0466-7.4604 1.1797-6.1452-.8669 1.3152-5.0351 15.804-6.0683 15.7827-1.1527.0001 1.8811-15.8838 1.3299-15.7827-.8669 1.3152-5.0351 15.804-6.0682 15.7827-1.1527.0001 1.8811-15.8838 1.3299-15.7827C12.7511 48.7239 6 65.5 5.76907 64.3217L10 48.4318c.5-.5-7.81526 15.2935-8.29212 15.8899-.47686.5964-1.846232-.9076 2.60053-11.0051C5.93404 49.891 7.76621 48.5 9.5 48.5"
            />
          </g>
          <g id="idot1">
            <path
              transform="translate(110,20)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M1.34736.408312C-1.60003 6.4977 3.75671 2.87099 6.38448 1.51701"
            />
          </g>
          <g id="idot2">
            <path
              transform="translate(185,20)"
              fill="none"
              stroke="#ffffff"
              stroke-width={STROKE_WIDTH}
              stroke-linecap="round"
              d="M1.97378.407398C-.973606 6.49679 1.36615 4.0776 3.99391 2.72361"
            />
          </g>

          <mask id="myMaskD" transform="translate(0,100)">
            <path
              stroke="black"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              d="M4.41674 8.75439C11.9695 4.52576 34.0884-2.52936 62.1416 3.07913 90.9142 11.0913 105.42 21.5516 109.077 25.7802c1.079 1.0015 3.381 3.6055 3.956 6.0091.576 2.4036-4.196 2.782-6.654 2.6707l-55.0271-1.0015c-5.2749.1113-18.6302.4674-29.8515 1.0015-11.2213.5342-18.34246.8902-20.5004 1.0015"
            />
            <path
              fill="white"
              d="M62.0247 3.57854C34.0982-1.99967 12.1085 5.03338 4.66033 9.20341c-1.38047.7729 2.33899-1.69098 3.33899-2.19081C12.9993 4.01176 38.5-3.4883 62.239 2.60158l.0182.00364.0179.00499C76.6942 6.62543 87.5489 11.2569 95.2646 15.4212c7.6794 4.1448 12.3394 7.4075 14.2354 9.5905.562.525 1.707 1.909 2.5 3 .798 1.0979 1 1.0117 1.5 3.5.5 2.4883-1.021 2.6497-2.528 3.0519-1.495.399.676 0-3.972.4481-4.648.4482-55.5-1-55.5-1-5.2794.1115-19.2918.4665-30.5 1-1.141.0544-13.5.5-20.5.4883 7.49985-.9883 19.5755-1.46 20.976-1.5267 11.2274-.5344 24.5875-.8906 29.8647-1.0019l.0098-.0002 55.0505 1.0019c1.204.0545 2.954-.0131 4.313-.3757.685-.1828.969-.2947 1.286-.5857.286-.2628.34-.7511.243-1.1566-.265-1.1082-.762-2.1482-1.529-3.2036-.762-1.0491-1.461-2.0123-1.978-2.4921l-.02-.0187-.018-.0207c-1.771-2.0484-6.252-5.6863-13.9084-9.8188-7.6415-4.1243-18.4204-8.72689-32.7649-12.72266Z"
            />
          </mask>
          <g id="maskedD1">
            <path
              transform="translate(0,100)"
              stroke="white"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              d="M4.41674 8.75439C11.9695 4.52576 34.0884-2.52936 62.1416 3.07913 90.9142 11.0913 105.42 21.5516 109.077 25.7802c1.079 1.0015 3.381 3.6055 3.956 6.0091.576 2.4036-4.196 2.782-6.654 2.6707l-55.0271-1.0015c-5.2749.1113-18.6302.4674-29.8515 1.0015-11.2213.5342-18.34246.8902-20.5004 1.0015"
              mask="url(#myMaskD)"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Signature;
