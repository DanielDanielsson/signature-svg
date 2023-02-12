/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'

const Signature = () => {
    const [animate, toggleAnimate] = useState(false)

    const STROKE_WIDTH = 1.6

    const animatePath = (pathname, animation, reverse = false) => {
        const path = document.querySelector(pathname)

        if (!path) return

        const length = path.getTotalLength()
        // Clear any previous transition
        path.style.transition = path.style.WebkitTransition = 'none'
        // Set up the starting positions
        path.style.strokeDasharray = length + ' ' + length
        path.style.strokeDashoffset = reverse ? -length : length
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path.getBoundingClientRect()
        // Define our transition
        path.style.transition = path.style.WebkitTransition = animation
        // Go!
        path.style.strokeDashoffset = '0'
    }

    useEffect(() => {
        animatePath(
            '#D1dot path',
            'stroke-dashoffset 100ms ease-in-out 0ms',
            false
        )
        animatePath(
            '#D1 path',
            'stroke-dashoffset 300ms ease-in-out 200ms',
            false
        )
        animatePath(
            '#D1rest path',
            'stroke-dashoffset 1s ease-in-out 500ms',
            true
        )
        animatePath(
            '#D2 path',
            'stroke-dashoffset 300ms ease-in-out 1500ms',
            false
        )
        animatePath(
            '#D2rest path',
            'stroke-dashoffset 1s ease-in-out 1800ms',
            true
        )
        animatePath(
            '#idot1 path',
            'stroke-dashoffset 100ms ease-in-out 2800ms',
            true
        )
        animatePath(
            '#idot2 path',
            'stroke-dashoffset 100ms ease-in-out 3000ms',
            true
        )

        animatePath(
            '#maskedD1 path',
            'stroke-dashoffset 300ms ease-in-out 200ms',
            false
        )
    }, [animate])

    return (
        <>
            <button
                style={{
                    cursor: 'pointer',
                    border: '1px solid white',
                    background: 'unset',
                    color: 'white',
                }}
                onClick={() => toggleAnimate(!animate)}
            >
                toggle
            </button>
            <div
                style={{
                    width: '700px',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <svg height="auto" width="auto" viewBox="0 0 200 100">
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
                            d="M 3.93079,12.0 C 4.38451,10.7476 3.39698,8.64114 3.93079,8.29272 C 10.4094,4.06409 29.3824,-2.99103 53.4457,2.61746 C 78.1261,10.6296 90.5691,21.0899 93.7055,25.3185 C 94.631,26.32 96.6055,28.924 97.0991,31.3276 C 97.5927,33.7313 93.4999,34.1096 91.3917,33.9983 L 44.1906,32.9968 C 39.6659,33.1081 28.2101,33.4642 18.5847,33.9983 C 8.95941,34.5325 2.85103,34.8886 1.0,34.9999"
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
                </svg>
            </div>
        </>
    )
}

export default Signature
