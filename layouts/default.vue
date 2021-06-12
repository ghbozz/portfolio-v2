<template>
  <div>
    <Nav />
    <Nuxt /> 
  </div>
</template>

<script>
export default {}

</script>

<style>
  @keyframes soft-blink {
    0% { opacity: 0%; }
    100% { opacity: 80%; }
  }

  @keyframes open {
    0% { opacity: 0%; width: 0vw; }
    5% { opacity: 0%; width: 50vw; }
    15% { opacity: 100%; width: 100vw; height: 2px; }
    75% { opacity: 100%; width: 100vw; height: 7px; }
    100% { opacity: 100%; width: 100vw; height: 50vh }
  }

  @keyframes close {
    0% { opacity: 100%; width: 100vw; height: 50vh; }
    75% { opacity: 100%; width: 100vw; height: 0; }
    100% { opacity: 0%; width: 0vw; height: 0; }
  }

  @keyframes shine-left {
    0% { opacity: 10%; background-color: #c9fded; }
    5% { opacity: 50%; background-color: #c9fded; }

    15% { 
      opacity: 80%; 
      width: 50vw; 
      background-color: #02b87e; 
      z-index: 99; filter: brightness(200%) saturate(150%) hue-rotate(-0.12turn); 
    }

    50% { 
      box-shadow: -1px 0px 17px 7px rgba(2,184,126,1);
      opacity: 100%; 
      width: 15vw; 
      background-color: #02b87e; 
      z-index: 99; 
      filter: brightness(200%) saturate(150%) hue-rotate(-0.12turn); 
    }

    90% { 
      box-shadow: -1px 0px 3px 3px rgba(2,184,126,1);
      opacity: 100%; 
      width: 2px; 
      background-color: #00ffb3; 
      filter: blur(1px); 
      z-index: 99; 
    }

    100% { opacity: 10%; transform: translateX(-50vw); }
  }

  @keyframes shine-right {
    0% { opacity: 10%; background-color: #c9fded; }
    5% { opacity: 50%; background-color: #c9fded; }

    15% { 
      opacity: 80%; 
      width: 50vw; 
      background-color: #02b87e; 
      z-index: 99; filter: brightness(200%) saturate(150%) hue-rotate(-0.12turn); 
    }

    50% { 
      box-shadow: -1px 0px 17px 7px rgba(2,184,126,1);
      opacity: 100%; 
      width: 15vw; 
      background-color: #02b87e; 
      z-index: 99; 
      filter: brightness(200%) saturate(150%) hue-rotate(-0.12turn); 
    }

    90% { 
      box-shadow: -1px 0px 3px 1px rgba(2,184,126,1);
      opacity: 100%; 
      width: 2px; 
      background-color: #00ffb3; 
      filter: blur(1px); 
      z-index: 99; 
    }

    100% { opacity: 10%; transform: translateX(50vw); }
  }

  /*-SLIDE */
  .up-slide-enter-active {
    transition: all .8s ease;
  }
  .up-slide-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    transition: all .5s ease;
  }
  .up-slide-enter, .up-slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  /* SIDE-SLIDE */
  .side-slide-enter-active {
    transition: all 1s ease;
  }
  .side-slide-leave-active {
    transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .side-slide-enter, .side-slide-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  /* BUTTONS */
  button {
    outline: 0;
  }

  button:focus {
    outline: 0;
  }

  .main-btn {
    line-height: 1.75rem;
    font-size: 1.875rem;
    padding: 0 0.2rem 0 0.2rem;
    z-index: 99;
    text-transform: uppercase;
    cursor: pointer;
    color: #05a672;
    transition-duration: 200ms;
  }

  .main-btn:hover {
    background-color: #05a672;
    color: black;
  }

  .main-btn:hover::before {
    background-color: #05a672;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.2;
    filter: blur(10px);
    z-index: -1;
  }

  .vim-mode.active::after,
  .vim-mode:hover::after {
    display: block !important;
  }

  .vim-mode::after {
    background-color: #05a672;
    content: "";
    position: absolute;
    transform: translate(50%, -50%);
    right: -0.75rem;
    top: 50%;
    width: 1rem;
    height: 100%;
    display: none;
    animation: soft-blink 1s infinite;
  }

  .work-card {
    z-index: 1;
    background-color: rgba(37, 43, 53);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    cursor: pointer;
    transition-duration: 300ms;
    overflow: hidden;
    position: relative;
  }

  .work-card::before {
    background-color: rgba(5, 166, 114);
    height: 24rem;
    width: 24rem;
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    transition: transform 0.3s ease;
    transform: translate(50%, -50%) scale(0);
  }

  .work-card img {
    height: 7rem;
    width: 7rem;
    position: relative;
  }

  .work-card.active {
  }

  .work-card.active::before {
    transform: translate(50%, -50%) scale(1);
  }

  .work-card.active img {
    transition-duration: 500ms;
  }

  .text-gradient-light {
    background: linear-gradient(
      135deg,
      rgba(235, 244, 241, 1) 0%,
      rgba(235, 244, 241, 0.7) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradient-green {
    background: linear-gradient(
      135deg,
      rgba(1, 167, 114, 1) 0%,
      rgba(1, 167, 114, 0.5) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glow {
    font-size: 80px;
    color: #fff;
    text-align: center;
    -webkit-animation: glow 3s ease-in-out infinite alternate;
    -moz-animation: glow 3s ease-in-out infinite alternate;
    animation: glow 3s ease-in-out infinite alternate;
  }

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 1px rgba(1, 167, 114, 0.1), 0 0 2px rgba(1, 167, 114, 0.1),
        0 0 3px rgba(1, 167, 114, 0.1), 0 0 4px rgba(1, 167, 114, 0.15),
        0 0 5px rgba(1, 167, 114, 0.15);
    }
    to {
      text-shadow: 0 0 1px #05a672, 0 0 2px rgba(1, 167, 114, 0.1),
        0 0 3px rgba(1, 167, 114, 0.1), 0 0 4px rgba(1, 167, 114, 0.5),
        0 0 5px rgba(1, 167, 114, 0.5);
    }
  }

  label {
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    width: fit-content;
    padding: 0 0.2rem 0 0.2rem;
  }

  label.active {
    background-color: rgba(5, 166, 114);
    color: rgba(34, 38, 47);
  }

  input[type="text"],
  textarea {
    text-indent: 10px;
    margin-bottom: 0.5rem;
    background-color: rgba(34, 38, 47);
    border-color: rgba(178, 185, 183);
    border-width: 2px;
    margin-bottom: 0.5rem;
  }

  input[type="text"] {
    height: 3rem;
  }

  textarea {
    height: 6rem;
    resize: none;
  }

  input[type="submit"] {
    background: transparent;
  }

  .social-icon {
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: rgba(178, 185, 183);
    cursor: pointer;
  }

  .social-icon:hover {
    color: rgba(235, 244, 241);
  }

  .nav-item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
  }

  .nav-item a {
    padding: 0 0.2rem 0 0.2rem;
    color: rgba(5, 166, 114);
    cursor: pointer;
  }

  .nav-item a:hover {
    background-color: rgba(5, 166, 114);
    color: rgba(34, 38, 47);
  }

  .nuxt-link-exact-active {
    color: #22262f !important;
    cursor: pointer;
    background-color: rgba(5, 166, 114);
    transition-duration: 200ms;
  }

  .scroll {
    margin-top: 5rem;
    margin-bottom: 2rem;
    height: 6.25vmin;
    width: 3.75vmin;
    transform: translateX(-50%);
    bottom: 2.5%;
    left: 50%;
  }

  .scroll:before {
    content: "";
    position: absolute;
    left: calc(50% - 6.25vmin / 20);
    top: 1.25vmin;
    height: 0.625vmin;
    width: 0.625vmin;
    background: #d7e0dd;
    border-radius: 50%;
    -webkit-animation: scroll 4s infinite;
    animation: scroll 4s infinite;
  }

  @-webkit-keyframes scroll {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translateY(0);
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(6.25vmin);
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translateY(0);
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(6.25vmin);
    }
  }

  * {
    font-family: "Jost", sans-serif;
  }

  body {
    background: #22262f;
  }

  .preload {
    height: 0px;
    overflow: hidden;
  }

  /* VIEW PORT */
  .h-screen-50 {
    height: 50vh;
  }

  .h-screen-60 {
    height: 60vh;
  }

  .h-screen-70 {
    height: 70vh;
  }

  .h-screen-80 {
    height: 80vh;
  }

  .h-screen-90 {
    height: 90vh;
  }

  /* TRANSITIONS */
  .duration-1500 {
    transition: all 1.5s;
  }

  .duration-2000 {
    transition: all 2s;
  }

  .min-h-container {
    height: calc(100vh - 64px);
  }

  .glass {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>
