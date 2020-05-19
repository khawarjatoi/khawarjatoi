import styled from 'styled-components';

const StyledProjects = styled.div`
  .mainContainer {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
  }
  @media screen and (max-width: 750px) {
    .mainContainer {
      display: none;
    }
  }
  .scroll {
    color: #333;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    position: absolute;
    display: inline-block;
    margin: 0;
    z-index: 3;
  }

  .scroll {
    /* font-size: 10px; */
    font-size: 12px;
    /* bottom: 90px; */
    top: 50%;
    right: 33px;
    -webkit-transform: translate(18px, -100%) rotate(90deg);
    transform: translate(18px, -100%) rotate(90deg);
  }
  @media screen and (max-width: 750px) {
    .scroll {
      display: none;
    }
  }
  .scroll:after {
    content: '';
    display: block;
    height: 1px;
    background-color: #333;
    position: absolute;
    top: 50%;
    -webkit-animation: slideDown 3s ease-in-out infinite;
    animation: slideDown 3s ease-in-out infinite;
  }
  .mainContainer .previewContainer {
    width: 720px;
    height: 480px;
    position: absolute;
    top: 150px;
    right: 50px;
    background-color: #fff;
    box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px;
    opacity: 1;
  }
  .mainContainer .previewContainer:hover .project {
    opacity: 1;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    .mainContainer .previewContainer:hover .project {
      opacity: 0;
    }
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    .mainContainer .previewContainer {
      width: 512px;
      height: 288px;
      padding: 10px;
    }
  }
  .mainContainer .previewContainer .overflowContainer {
    padding: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    .mainContainer .previewContainer .overflowContainer {
      padding: 10px;
    }
  }
  .mainContainer .previewContainer .overflowContainer .iframeContainer {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    cursor: pointer;
  }
  .mainContainer .previewContainer .overflowContainer iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .mainContainer .previewContainer .overflowContainer .noPointerEvents {
    pointer-events: none;
  }
  .mainContainer .previewContainer .overflowContainer img {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    display: none;
  }
  .mainContainer .previewContainer .transition {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .mainContainer .previewContainer .project {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    color: #fff;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    text-transform: uppercase;
    font-size: 12px;
  }

  ul {
    font-size: small;

    text-align: left;
    display: inline-block;
    position: relative;
    list-style-type: none;
    /* top: 150px; */
    top: 50px;
    left: 150px;
    margin: 0;
    padding: 0;
    z-index: 2;
    pointer-events: none;
    @media screen and (max-width: 830px) {
      left: 50px;
    }
  }
  ul li {
    padding-top: 100px;
    padding-bottom: 180px;
  }
  ul li:not(:first-of-type) {
    color: #fff;
  }
  ul li:not(:first-of-type) .description {
    opacity: 0;
  }
  @media screen and (max-width: 750px) {
    ul li:not(:first-of-type) {
      opacity: 1;
      color: #333;
    }
    ul li:not(:first-of-type) .description {
      opacity: 1;
    }
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    ul li {
      padding-top: 25px;
      padding-bottom: 100px;
    }
  }
  ul li h2 {
    font-size: 50px;
    letter-spacing: 2px;
    margin: 0;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    ul li h2 {
      font-size: 30px;
    }
  }
  ul li .technos,
  ul li .date {
    font-weight: 900;
    text-transform: uppercase;
    opacity: 0.5;
    width: 400px;
  }
  ul li .date {
    font-size: 9px;
  }
  ul li .description {
    margin-top: 50px;
    width: 350px;
  }
  @media screen and (min-width: 751px) and (max-width: 1024px) {
    ul li .description {
      margin-top: 25px;
      width: 325px;
    }
  }
  /* Mobile Style */
  ul.mobile {
    display: none;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 0 50px;
    left: 0;
  }
  @media screen and (max-width: 750px) {
    ul.mobile {
      display: inline-block;
    }
  }
  ul.mobile li {
    padding-top: 0;
    padding-bottom: 100px;
  }
  ul.mobile li h2 {
    font-size: 25px;
  }
  ul.mobile li .description {
    margin-top: 25px;
  }
  ul.mobile p {
    width: 100%;
  }

  @-webkit-keyframes slideDown {
    0% {
      width: 0;
      left: calc(100% + 5px);
      right: auto;
    }
    50% {
      width: 25px;
    }
    100% {
      width: 0;
      right: -30px;
      left: auto;
    }
  }
  @keyframes slideDown {
    0% {
      width: 0;
      left: calc(100% + 5px);
      right: auto;
    }
    50% {
      width: 25px;
    }
    100% {
      width: 0;
      right: -30px;
      left: auto;
    }
  }
  @-webkit-keyframes slideTo {
    0% {
      width: 0;
      left: 100%;
    }
    100% {
      width: 25px;
      left: 100%;
    }
  }
  @keyframes slideTo {
    0% {
      width: 0;
      left: 100%;
    }
    100% {
      width: 25px;
      left: 100%;
    }
  }
`;

export default StyledProjects;
