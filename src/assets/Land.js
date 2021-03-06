import React from "react";
import { motion } from "framer-motion";

const Land = () => (
  <svg
    width="360px"
    height="516px"
    viewBox="0 0 360 516"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Night" transform="translate(0.000000, -124.000000)">
        <g id="Fattisland" transform="translate(-36.500000, 124.000000)">
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#B9B9FF" offset="22%"></stop>
              <stop stopColor="#00001E" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Login" fill="url(#linearGradient-1)">
              <g id="Fattisland" transform="translate(-36.500000, 0.000000)">
                <rect id="Sky" x="0" y="0" width="435" height="559"></rect>
              </g>
            </g>
          </g>
          {/*
                      <g id="Stars" transform="translate(68.000000, 52.000000)">
            <motion.rect
              id="Star1"
              fill="#FFFFFF"
              x="27"
              y="26"
              width="10"
              height="10"
              rx="5"
              {...createStarBlink()}
            ></motion.rect>
            <motion.rect
              id="Star2"
              fill="#FFFFFF"
              x="119"
              y="0"
              width="5"
              height="5"
              rx="2.5"
              {...createStarBlink()}
            ></motion.rect>
            <motion.rect
              id="Star3"
              fill="#9FA5EB"
              x="0"
              y="74"
              width="6"
              height="7"
              rx="3"
              {...createStarBlink()}
            ></motion.rect>
            <motion.rect
              id="Star4"
              fill="#9FA5EB"
              x="59"
              y="4"
              width="10"
              height="9"
              rx="4.5"
              {...createStarBlink()}
            ></motion.rect>
            <motion.rect
              id="Star5"
              fill="#BFC3F4"
              x="88"
              y="49"
              width="7"
              height="5"
              rx="2.5"
              {...createStarBlink()}
            ></motion.rect>
          </g>
          */}
          <polygon
            id="Foreground"
            fill="#2F2F69"
            points="26.5 321 404.5 321 404.5 325.566962 404.5 516 26.5 516"
          ></polygon>
          <motion.path
            initial={{ scale: 1 }}
            animate={{
              scale: 1.15,
              transition: { ease: "backInOut", yoyo: Infinity, duration: 5 }
            }}
            d="M12.6442561,348.9899 C62.7505076,351.77211 95.5931266,352.171773 111.172113,350.18889 C173.413302,342.266874 174.666638,337 210.422994,337 C238.3031,337 302.724557,353.472803 341.210578,351.387094 C370.709315,349.78844 397.853874,358.581296 422.644256,377.765661 L408.201732,417.931827 L194.647027,454.282563 C175.295943,465.805784 164.078236,469.967152 160.993905,466.766667 C156.556378,461.455681 157.64995,457.065692 164.274622,453.5967 L12.6442561,453.5967 L12.6442561,348.9899 Z"
            id="Water"
            fill="#2F2F69"
            transform="translate(217.644256, 402.405099) scale(1, -1) translate(-217.644256, -402.405099) "
          ></motion.path>
          <path
            d="M59.0375753,182.092087 L59.8347829,181.429232 C65.2905256,176.892943 72.5991825,175.266369 79.4638328,177.060701 L98.7126134,182.092087 L108.348451,171.727689 C109.86072,170.101078 112.147832,169.442912 114.293374,170.016909 L159.429144,182.092087 L203.715406,148.286552 C212.618407,141.490523 224.79285,140.896846 234.314844,146.794394 L285.330719,178.391622 L285.330719,245 L49.5481899,240.427968 L49.5481899,202.323335 C49.5481899,194.50461 53.0255603,187.090901 59.0375753,182.092087 Z"
            id="Mountain-Back"
            fill="#5F5FA5"
          ></path>
          <path
            d="M31.5022539,160.263581 L53.8751837,216.825807 C55.2401518,220.276657 58.2530732,222.806655 61.8879822,223.55428 L99.3250576,231.254306 C106.472424,232.72437 113.550335,228.458145 115.588381,221.451554 L125.522212,187.300063 C126.318427,184.562758 128.511118,182.455965 131.278041,181.769716 L152.914273,176.403524 C154.88464,175.914836 156.363952,174.283304 156.657939,172.274639 L159.415418,153.434153 C159.735338,151.248301 161.766667,149.735665 163.952518,150.055584 C163.992108,150.061379 164.031608,150.067767 164.071006,150.074746 L189.256852,154.53653 C190.561203,154.767602 191.720554,155.506829 192.480368,156.591913 L207.41963,177.92655 L240.723813,148.170916 C241.887827,147.130927 243.550475,146.863055 244.98222,147.484837 L262.050726,154.897384 L293.092123,151.388901 C295.306863,151.138578 297.349935,150.075357 298.825741,148.405108 L307.313738,138.798793 L331.723186,146.464789 L338.424794,133.752932 C339.386534,131.928667 341.0156,130.546267 342.97205,129.894201 L379.733224,117.642061 C381.442992,117.072212 383.32713,117.466589 384.664825,118.674317 L409.502254,141.098592 L409.502254,293 L31.5022539,288.285714 L31.5022539,160.263581 Z"
            id="Mountain-Fore"
            fill="#363648"
          ></path>
          <path
            d="M31.6442561,271.9899 C78.573038,274.77211 109.332954,275.171773 123.924005,273.18889 C182.218192,265.266874 183.392048,260 216.880928,260 C242.993027,260 303.329221,276.472803 339.374665,274.387094 C367.00275,272.78844 392.425947,281.581296 415.644256,300.765661 L402.117599,340.931827 L202.105388,377.282563 L191.153612,377.282563 L173.659038,376.5967 L31.6442561,376.5967 L31.6442561,271.9899 Z"
            id="Town-Background"
            fill="#4C4C82"
          ></path>
          <g
            id="Windmill"
            transform="translate(285.500000, 283.000000)"
            fillRule="nonzero"
          >
            <circle
              id="Oval"
              fill="#2B2B3A"
              cx="21.5"
              cy="21.5"
              r="1.5"
            ></circle>
            <path
              d="M28.1471118,24.6346244 L23.2722554,24 L19.1592794,24 L14.8522515,24.6357132 L10,43.2137191 C10,44.2001867 11.4947883,45 13.3389972,45 L29.6610028,45 C31.504575,45 33,44.2001867 33,43.2137191 L28.1471118,24.6346244 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M14.7678711,24.635864 L10,43.2137323 C10,44.2001926 11.468794,45 13.2809323,45 L19,24 L14.7678711,24.635864 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M29.0116195,24.6346197 L24,24 L30.5673278,45 C32.4626211,45 34,44.2001926 34,43.2137323 L29.0116195,24.6346197 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M29.6539049,45 L12.8613732,45 L10,58.6258933 C13.264432,59.4982057 19.0043752,60 21.0812497,60 C22.9853379,60 27.8104147,59.6415974 31,58.673435 L29.6539049,45 Z"
              id="Path"
              fill="#252532"
            ></path>
            <path
              d="M9.92069928,42.8461538 C9.92069928,42.9516872 9.97896739,43.0548699 10.0793007,43.1538462 L9.92069928,42.8461538 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M10.0899628,43 L8,57.6547573 C9.1127877,58.6306183 10.6627829,59 10.771464,59 L14,44.4718038 C12.0848057,44.4711497 10.4862955,43.8412877 10.0899628,43 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M32.8913884,43 C32.4961663,43.8387938 30.9052025,44.4665037 29,44.4665037 L30.4474368,59 C30.5626386,59 32.9917622,58.5044825 35,57.5126324 L32.8913884,43 Z"
              id="Path"
              fill="#2B2B3A"
            ></path>
            <path
              d="M32.9603496,43.1538462 C33.0105163,43.0548699 33.0396504,42.9516872 33.0396504,42.8461538 L32.9603496,43.1538462 Z"
              id="Path"
              fill="#766959"
            ></path>
            <path
              d="M22.0000786,19 C18.365099,19 15.3750351,21.6276045 15,25 L19.5354725,24.3397651 L23.8656659,24.339159 L29,24.9981816 C28.6244934,21.6271499 25.6350582,19 22.0000786,19 Z"
              id="Path"
              fill="#282729"
            ></path>
            <g
              id="Group"
              transform="translate(20.000000, 29.000000)"
              fill="#FFE0AC"
            >
              <path
                d="M2.30244056,0.239605263 L0.772578789,0.239605263 C0.448413829,0.239605263 0.186637129,0.524736607 0.186637129,0.876526564 L0.186637129,3.70724912 C0.186637129,4.05956258 0.448413829,4.34486842 0.772578789,4.34486842 L2.30244056,4.34486842 C2.62485928,4.34486842 2.88663713,4.05973708 2.88663713,3.70724912 L2.88663713,0.876526564 C2.88727097,0.524736607 2.62485928,0.239605263 2.30244056,0.239605263 Z"
                id="Path"
              ></path>
              <path
                d="M2.30244056,8.45013158 L0.772578789,8.45013158 C0.448413829,8.45013158 0.186637129,8.69135555 0.186637129,8.98897337 L0.186637129,11.3843835 C0.186637129,11.6824442 0.448413829,11.9238158 0.772578789,11.9238158 L2.30244056,11.9238158 C2.62485928,11.9238158 2.88663713,11.6825918 2.88663713,11.3843835 L2.88663713,8.98897337 C2.88727097,8.69135555 2.62485928,8.45013158 2.30244056,8.45013158 Z"
                id="Path"
              ></path>
            </g>
            <path
              d="M33.8511744,42.046325 C33.7588547,41.9850512 33.6458428,41.9843152 33.5535231,42.045589 L29.7595041,44.5592852 L13.5916288,44.5592852 L9.43565321,42.0395168 C9.34333357,41.9837632 9.23207248,41.9872593 9.14341379,42.0498211 C9.0547551,42.1118309 9,42.2238901 9,42.3444136 L9,45.0967646 C9,45.2248323 9.06191783,45.3416756 9.15949014,45.4016614 L13.3808854,47.9608069 C13.4237026,47.9869356 13.4708174,48 13.5190465,48 L29.8392492,48 C29.8909801,48 29.9422334,47.9841755 29.9874382,47.9545507 L33.8505377,45.3954052 C33.9428573,45.3341314 34,45.2206002 34,45.0967646 L34,42.3442295 C34,42.221682 33.9433348,42.1081508 33.8511744,42.046325 Z"
              id="Path"
              fill="#242431"
            ></path>
            <motion.g
              initial={{ rotate: 0 }}
              animate={{
                rotate: 360,
                transition: { duration: 25, ease: "linear", loop: Infinity }
              }}
              id="Cog"
              fill="#252532"
            >
              <path
                d="M40.1672379,39.3438897 C40.1522713,39.2462034 40.1070496,39.150892 40.0306073,39.0756878 L39.970419,39.017741 L26.6383978,25.9010247 L21.6757632,21.0176614 C21.484416,20.8300468 21.1751063,20.8300468 20.9848857,21.0165531 L20.7087278,21.290138 C20.5173806,21.4772777 20.5173806,21.7809442 20.7087278,21.9687171 L25.129668,26.3186849 L22.8151559,28.595234 C22.5166286,28.8895594 22.5166286,29.367858 22.8162824,29.6621834 L36.1489474,42.7788997 C36.4486012,43.0737001 36.9342915,43.0737001 37.2328188,42.7788997 L39.9717065,40.0843737 C40.1756063,39.8839348 40.2388522,39.5991089 40.1672379,39.3438897 Z"
                id="Shape"
              ></path>
              <path
                d="M21.9837944,21.046804 L17.7034633,16.7575007 L19.9432711,14.5135698 C20.2333944,14.2229124 20.2333944,13.751804 19.9432711,13.4616149 L7.03465509,0.529235993 C6.74453182,0.23904694 6.27428904,0.23904694 5.98525645,0.529235993 L3.33347985,3.18651854 C3.13544189,3.38382836 3.07296099,3.66402704 3.14463484,3.91503511 C3.15803473,4.01197293 3.20166229,4.10532045 3.27458264,4.17946774 L21.0472042,21.9848062 C21.2313748,22.1693158 21.5308469,22.1693158 21.7150175,21.9848062 L21.9836386,21.7156905 C22.169679,21.531337 22.169679,21.2313137 21.9837944,21.046804 Z"
                id="Shape"
              ></path>
              <path
                d="M21.984763,20.9853117 L21.7156395,20.7078773 C21.5311244,20.5176641 21.232341,20.5176641 21.0472015,20.7078773 L16.7577716,25.1297697 L14.5137745,22.8158316 C14.2231085,22.5166723 13.7519862,22.5166723 13.462413,22.8158316 L0.52918407,36.1484536 C0.23851814,36.4476129 0.239610869,36.9331231 0.52918407,37.232926 L3.18701335,39.9717057 C3.38308016,40.1751147 3.66328711,40.2394846 3.91445869,40.1667466 C4.0124921,40.1522633 4.10599849,40.1072044 4.18014796,40.0301214 L4.23853091,39.9712229 L17.1712915,26.6390837 L21.9850752,21.6755182 C22.1692781,21.4848223 22.1692781,21.1761685 21.984763,20.9853117 Z"
                id="Shape"
              ></path>
              <path
                d="M42.7783989,5.98513148 L40.0838006,3.33268228 C39.8847812,3.1363546 39.5994727,3.07340509 39.3459882,3.14383375 C39.2465577,3.15785716 39.1517188,3.20148553 39.0765126,3.27549795 L39.0172976,3.33314972 L25.9003874,16.2420059 L21.0180013,21.0479828 C20.8297483,21.2321568 20.8297483,21.5316344 21.0180013,21.7158085 L21.2896936,21.9850579 C21.4779466,22.1692319 21.7811463,22.1692319 21.968291,21.9850579 L26.3188505,17.7035564 L28.5948274,19.9434059 C28.8896357,20.2335345 29.3674721,20.2335345 29.6622804,19.9434059 L42.7780823,7.03454965 C43.0744738,6.74442097 43.0733655,6.27479271 42.7783989,5.98513148 Z"
                id="Shape"
              ></path>
            </motion.g>
            <path
              d="M21.9995379,20 C21.4462285,20 21,20.4477543 21,21 C21,21.5522457 21.4462285,22 21.9995379,22 C22.5528474,22 23,21.5522457 23,21 C23,20.4477543 22.5533095,20 21.9995379,20 Z"
              id="Path"
              fill="#252532"
            ></path>
            <circle id="Oval" fill="#282729" cx="22" cy="21" r="1"></circle>
            <path
              d="M21.9621404,20.3302334 C21.7406654,19.8891846 21.3852817,19.8902921 21.1649133,20.3313409 C20.9455133,20.7712822 20.944545,21.4836604 21.1649133,21.9236018 C21.3852817,22.3646506 22.1815404,20.7712822 21.9621404,20.3302334 Z"
              id="Path"
              fill="#252532"
            ></path>
          </g>
          <g id="Houses-Left" transform="translate(46.500000, 343.000000)">
            <g id="House-Left-2" transform="translate(15.000000, 0.000000)">
              <polygon
                id="Path"
                fill="#2A2A3B"
                fillRule="nonzero"
                points="36 12.3871446 24.7503759 0 18.0004296 0 11.2504833 0 0 12.3871446 2.2502685 12.3871446 2.2502685 34 33.7497315 34 33.7497315 12.3871446"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="8"
                y="17"
                width="7"
                height="6"
              ></rect>
              <motion.rect
                {...createWindowFlick()}
                id="Rectangle"
                x="21"
                y="17"
                width="6"
                height="6"
              ></motion.rect>
            </g>
            <g id="House-Left-2" transform="translate(69.000000, 0.000000)">
              <polygon
                id="Path"
                fill="#37375C"
                fillRule="nonzero"
                points="36 12.3871446 24.7503759 0 18.0004296 0 11.2504833 0 0 12.3871446 2.2502685 12.3871446 2.2502685 34 33.7497315 34 33.7497315 12.3871446"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="8"
                y="17"
                width="7"
                height="6"
              ></rect>
              <motion.rect
                id="Rectangle"
                fill="#FFE0AC"
                x="21"
                y="17"
                width="6"
                height="6"
              ></motion.rect>
            </g>
            <g
              id="Group"
              transform="translate(42.000000, 3.000000)"
              fillRule="nonzero"
            >
              <rect
                id="Rectangle"
                fill="#5F5FA5"
                x="2"
                y="7"
                width="29"
                height="24"
              ></rect>
              <polygon
                id="Path"
                fill="#5A5A82"
                points="25.6664146 0 7.33282925 0 0 8 33 8"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#9A9FE8"
                x="9"
                y="18"
                width="4"
                height="8"
              ></rect>
              <rect
                id="Rectangle"
                fill="#9A9FE8"
                x="15"
                y="18"
                width="4"
                height="8"
              ></rect>
              <rect
                id="Rectangle"
                fill="#FFFFFF"
                x="20"
                y="18"
                width="4"
                height="8"
              ></rect>
              <rect
                id="Rectangle"
                fill="#FFFFFF"
                x="7"
                y="10"
                width="5"
                height="6"
              ></rect>
              <rect
                id="Rectangle"
                fill="#9A9FE8"
                x="14"
                y="10"
                width="4"
                height="6"
              ></rect>
              <rect
                id="Rectangle"
                fill="#9A9FE8"
                x="20"
                y="10"
                width="4"
                height="6"
              ></rect>
            </g>
            <g id="House-Left" transform="translate(1.000000, 2.000000)">
              <polygon
                id="Path"
                fill="#5A5A82"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <polygon
                id="Path"
                fill="#37375C"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="7"
                y="16"
                width="7"
                height="6"
              ></rect>
              <motion.rect
                {...createWindowFlick()}
                id="Rectangle"
                x="19"
                y="16"
                width="6"
                height="6"
              ></motion.rect>
            </g>
            <g
              id="Reflections"
              opacity="0.35"
              transform="translate(53.499695, 42.482550) scale(1, -1) rotate(2.000000) translate(-53.499695, -42.482550) translate(0.999695, 30.982550)"
            >
              <g id="House-Left-2" transform="translate(13.977284, 0.698599)">
                <polygon
                  id="Path"
                  fill="#494972"
                  fillRule="nonzero"
                  points="36 7.65088346 24.7503759 0 18.0004296 0 11.2504833 0 0 7.65088346 2.2502685 7.65088346 2.2502685 21 33.7497315 21 33.7497315 7.65088346"
                ></polygon>
                <rect
                  id="Rectangle"
                  fill="#6464C8"
                  x="8"
                  y="10.5"
                  width="7"
                  height="3.70588235"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#FFE0AC"
                  x="21"
                  y="10.5"
                  width="6"
                  height="3.70588235"
                ></rect>
              </g>
              <g id="House-Left-2" transform="translate(68.014188, 0.812808)">
                <polygon
                  id="Path"
                  fill="#494972"
                  fillRule="nonzero"
                  points="36 7.65088346 24.7503759 0 18.0004296 0 11.2504833 0 0 7.65088346 2.2502685 7.65088346 2.2502685 21 33.7497315 21 33.7497315 7.65088346"
                ></polygon>
                <rect
                  id="Rectangle"
                  fill="#6464C8"
                  x="8"
                  y="10.5"
                  width="7"
                  height="3.70588235"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#FFE0AC"
                  x="21"
                  y="10.5"
                  width="6"
                  height="3.70588235"
                ></rect>
              </g>
              <g
                id="Group"
                transform="translate(41.031549, 2.807444)"
                fillRule="nonzero"
              >
                <rect
                  id="Rectangle"
                  fill="#5F5FA5"
                  x="2"
                  y="4.29032258"
                  width="29"
                  height="14.7096774"
                ></rect>
                <polygon
                  id="Path"
                  fill="#5A5A82"
                  points="25.6664146 0 7.33282925 0 0 4.90322581 33 4.90322581"
                ></polygon>
                <rect
                  id="Rectangle"
                  fill="#9A9FE8"
                  x="9"
                  y="11.0322581"
                  width="4"
                  height="4.90322581"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#9A9FE8"
                  x="15"
                  y="11.0322581"
                  width="4"
                  height="4.90322581"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="20"
                  y="11.0322581"
                  width="4"
                  height="4.90322581"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="7"
                  y="6.12903226"
                  width="5"
                  height="3.67741935"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#9A9FE8"
                  x="14"
                  y="6.12903226"
                  width="4"
                  height="3.67741935"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#9A9FE8"
                  x="20"
                  y="6.12903226"
                  width="4"
                  height="3.67741935"
                ></rect>
              </g>
              <g id="House-Left" transform="translate(0.004176, 2.239237)">
                <polygon
                  id="Path"
                  fill="#5A5A82"
                  fillRule="nonzero"
                  points="33 6.55790011 22.6878446 -3.98108444e-13 16.5003938 -3.98108444e-13 10.312943 -3.98108444e-13 1.87583282e-12 6.55790011 2.06274613 6.55790011 2.27504927 19.5022321 30.9372539 18 30.9372539 6.55790011"
                ></polygon>
                <rect
                  id="Rectangle"
                  fill="#6464C8"
                  x="7"
                  y="10"
                  width="7"
                  height="3.75"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#FFE0AC"
                  x="19"
                  y="10"
                  width="6"
                  height="3.75"
                ></rect>
              </g>
              <polygon
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(52.152607, 17.242843) rotate(-2.000000) translate(-52.152607, -17.242843) "
                points="2.15260689 16.7428427 53.4718191 16.7428427 102.152607 16.7428427 102.152607 17.7428427 53.4968474 17.7428427 2.15260689 17.7428427"
              ></polygon>
              <polygon
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(51.943210, 11.246498) rotate(-2.000000) translate(-51.943210, -11.246498) "
                points="1.94320991 10.7464978 101.94321 10.7464978 101.94321 11.7464978 1.94320991 11.7464978"
              ></polygon>
              <polygon
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(52.082808, 15.244061) rotate(-2.000000) translate(-52.082808, -15.244061) "
                points="2.08280789 14.7440611 102.082808 14.7440611 102.082808 15.7440611 2.08280789 15.7440611"
              ></polygon>
              <polygon
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(52.013009, 13.245279) rotate(-2.000000) translate(-52.013009, -13.245279) "
                points="2.0130089 12.7452794 102.013009 12.7452794 102.013009 13.7452794 2.0130089 13.7452794"
              ></polygon>
            </g>
          </g>
          <g
            id="Houses-Right"
            transform="translate(379.500000, 337.000000) scale(-1, 1) translate(-379.500000, -337.000000) translate(354.500000, 320.000000)"
          >
            <g id="House-Left-2" transform="translate(14.000000, 0.000000)">
              <polygon
                id="Path"
                fill="#353546"
                fillRule="nonzero"
                points="36 12.3871446 24.7503759 0 18.0004296 0 11.2504833 0 0 12.3871446 2.2502685 12.3871446 2.2502685 34 33.7497315 34 33.7497315 12.3871446"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="8"
                y="17"
                width="7"
                height="6"
              ></rect>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="21"
                y="17"
                width="6"
                height="6"
              ></rect>
            </g>
            <g id="House-Left" transform="translate(0.000000, 2.000000)">
              <polygon
                id="Path"
                fill="#5A5A82"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <polygon
                id="Path"
                fill="#2B2B46"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#3E407C"
                x="7"
                y="16"
                width="7"
                height="6"
              ></rect>
              <motion.rect
                {...createWindowFlick()}
                id="Rectangle"
                x="19"
                y="16"
                width="6"
                height="6"
              ></motion.rect>
            </g>
          </g>
          <g id="Houses-Middle" transform="translate(164.500000, 357.000000)">
            <g id="House-Left-2" transform="translate(22.000000, 0.000000)">
              <polygon
                id="Path"
                fill="#2B2B46"
                fillRule="nonzero"
                points="36 12.3871446 24.7503759 0 18.0004296 0 11.2504833 0 0 12.3871446 2.2502685 12.3871446 2.2502685 34 33.7497315 34 33.7497315 12.3871446"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="8"
                y="17"
                width="7"
                height="6"
              ></rect>
              <rect
                id="Rectangle"
                fill="#FFE0AC"
                x="21"
                y="17"
                width="6"
                height="6"
              ></rect>
            </g>
            <g id="House-Left" transform="translate(8.000000, 2.000000)">
              <polygon
                id="Path"
                fill="#5A5A82"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <polygon
                id="Path"
                fill="#37375C"
                fillRule="nonzero"
                points="33 11.6584891 22.6878446 0 16.5003938 0 10.312943 0 0 11.6584891 2.06274613 11.6584891 2.06274613 32 30.9372539 32 30.9372539 11.6584891"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                x="7"
                y="16"
                width="7"
                height="6"
              ></rect>
              <motion.rect
                {...createWindowFlick()}
                id="Rectangle"
                fill="#FFE0AC"
                x="19"
                y="16"
                width="6"
                height="6"
              ></motion.rect>
            </g>
            <g
              id="Reflections"
              opacity="0.25"
              transform="translate(24.438138, 42.232233) scale(1, -1) rotate(15.000000) translate(-24.438138, -42.232233) translate(4.438138, 22.732233)"
            >
              <polygon
                id="Path"
                fill="#37375C"
                fillRule="nonzero"
                transform="translate(20.119861, 19.708309) rotate(-11.000000) translate(-20.119861, -19.708309) "
                points="36.6198606 15.3667979 26.3077052 3.70830879 20.1202544 3.70830879 13.9328036 3.70830879 3.61986061 15.3667979 5.68260674 15.3667979 5.68260674 35.7083088 34.5571145 35.7083088 34.5571145 15.3667979"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#6464C8"
                transform="translate(14.826967, 21.483564) rotate(-11.000000) translate(-14.826967, -21.483564) "
                x="11.3269674"
                y="18.4835639"
                width="7"
                height="6"
              ></rect>
              <polygon
                id="Rectangle"
                fill="#FFE0AC"
                points="25 17 31 17 27.1525206 20.2270814 25 23"
              ></polygon>
              <rect
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(19.802804, 19.002146) rotate(-15.000000) translate(-19.802804, -19.002146) "
                x="4.80280382"
                y="18.5021463"
                width="30"
                height="1"
              ></rect>
              <rect
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(20.320442, 20.933998) rotate(-15.000000) translate(-20.320442, -20.933998) "
                x="5.32044191"
                y="20.4339979"
                width="30"
                height="1"
              ></rect>
              <rect
                id="Rectangle"
                fill="#2F2F69"
                transform="translate(20.838080, 22.865850) rotate(-15.000000) translate(-20.838080, -22.865850) "
                x="5.83808"
                y="22.3658496"
                width="30"
                height="1"
              ></rect>
            </g>
          </g>
          <path
            d="M256.817491,347.645359 C290.078027,337.340745 337.972196,337.452752 400.5,347.981379 L400.5,391.069373 L173.876515,391.544093 C194.317363,384.903112 207.029133,379.065974 212.011825,374.03268 C221.477784,364.470588 239.411067,353.03813 256.817491,347.645359 Z"
            id="Hill"
            fill="#2B2B3A"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

const createWindowFlick = () => ({
  initial: {
    fill: "#FFFFFF"
  },
  animate: {
    fill: "#FFE0AC",
    transition: {
      duration: 0.01,
      delay: Math.ceil(Math.random() * 10)
    }
  }
});

export default Land;
