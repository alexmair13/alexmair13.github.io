import React from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
      <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body class="m-10">
  
  <div class="sticky">
  <div class="w-px">
    <a class="float-left text-lg transition-opacity ease-in duration-500 opacity-50 hover:opacity-100 leading-tight" href="#">@ A L E X M A I R</a>
    </div> 
    <div class="float-right max-h-0"> 
      <a class="mr-8 pr-1 pb-1 transition-opacity ease-in duration-500 opacity-50 hover:opacity-100 border-solid border-r border-b border-black " target="about">ABOUT ME</a>
      <a class="mr-8 pr-1 pb-1 transition-opacity ease-in duration-500 opacity-50 hover:opacity-100 border-solid border-r border-b border-black" href="#projects">PROJECTS</a>
      <a class="pr-1 pb-1 transition-opacity ease-in duration-500 opacity-50 hover:opacity-100 border-solid border-r border-b border-black" href="#contact">CONTACT</a>
    </div>
  </div>
  
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll"> 
    <div id="about" class="snap-start flex w-24 pl-24 pt-32 h-screen">
    <div class="typewriter">
      <h1 class="relative text-8xl font-bold text-black">Hello, I'm Alex</h1>
      <div class="typewriter pt-16">
      <h2 class="text-3xl text-black">A 20 year old 4th year computer science student</h2>
      </div>
      <hr class="w-5/6 h-0.5 mt-64 mx-auto border-0 rounded bg-black"></hr>
    </div>
    </div>
    
      <div class="snap-start max-w-screen h-screen flex-col text-xl">
        <h1 class="m-14 text-5xl font-bold text-black pt-14">About Me</h1>
        <div id="about" class="grid grid-cols-3 gap-10 m-14">
          <div class="">
            <h2 class="font-bold text-2xl">Studies</h2>
            <p class="text-xl">My name is Alex Mair and I am studying at the University of Strathclyde. During my studies I have covered topics such as logic and algorithms, user and data modelling, Web and App development, functional thinking, advanced programming and AI. I really enjoyed web and mobile app development and I hope to further improve my skills in this area. </p>
          </div>
          <div class="">
            <h2 class="font-bold text-2xl">Languages</h2>
            <p class="text-xl mb-6">Java, Python, SQL, PHP, Javascript, Haskell, C.  </p>
            <h2 class="font-bold text-2xl">Frameworks and Tools</h2>
            <p class="text-xl">React, React Native, Tailwind, Git, PostgreSQL.</p>
          </div>
          <div class="">
          <h2 class="font-bold text-2xl">Personal</h2>
            <p class="text-xl">Things I like to do outside of coding include playing piano and guitar, film making, photography, going to the gym and supporting Dunfermline Athletic.</p>
          </div>
        </div>
      </div>

      <div class="snap-start max-w-screen h-screen flex-col text-xl">
        <h1 class="m-14 text-5xl font-bold text-black pt-14">Projects</h1>
        <div class="grid grid-cols-3 gap-10 m-14">
          <div class="">
            <h2 class="font-bold text-2xl">Thrive</h2>
            <p class="text-xl">As part of a group project that I took lead of we created a mobile app using React native and tailwind. The app was made to make people more active and help improve their mental health. It consisted of challenges to complete each day such as visiting a local park or taking a photo of nature or meditating. The app used a map and a photo gallery to go along with some of the challenges.</p>
          </div>
          <div class="">
            <h2 class="font-bold text-2xl">Cara's Paintings</h2>
            <p class="text-xl">As one of my university projects I had to make an e-commerce site for selling paitings which was made using HTML, CSS, PHP, SQL and Javascript. The site displayed images and details of paintings from a database for users to purchase. The site had an admin page which allowed for an admin to add, change and remove paintings from the database.</p>
          </div>
          <div class="">
          <h2 class="font-bold text-2xl">Audio Player</h2>
            <p class="text-xl">Currently working on building an audio player in java and hopefully creating an audio visualiser to go with it</p>
          </div>
        </div>

      </div>

      <div class="snap-start max-w-screen h-screen text-xl">
        <h1 class="ml-14 text-5xl font-bold text-black pt-14">Contact Me</h1>
        <div class="ml-14 mt-14">
        <a class="text-xl font-bold" href="mailto:alex.mair22@gmail.com.com"> alex.mair22@gmail.com</a>
        <br></br>
        <a class="text-xl font-bold" href="https://www.linkedin.com/in/alex-mair-948400233"> Linkedin</a>
        <p class="text-xl">Email: alex.mair22@gmail.com</p>
        <p class="text-xl">Linkedin: linkedin.com/in/alex-mair-948400233 </p>
        </div>
      </div>
     
    </div>
  </body>
</html>
  )
}

export default App

