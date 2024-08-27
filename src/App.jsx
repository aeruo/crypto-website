import { useState } from 'react';

function App() {
  return (
    <>
      <main className="w-full h-screen bg-cover bg-top bg-[url('/background.jpg')] flex justify-center moderustic relative">
        <div className="w-[60%] h-[70%] bg-white rounded-lg shadow-lg mt-[75px] flex p-4 relative z-10 u-fade-type-down js-window-trigger">
          <div className="w-2/4 h-full p-4">
            <h1 className="text-3xl mb-2">Get In Touch.</h1>
            <p className="text-[14px] text-slate-500 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta dolor exercitationem dolore.</p>
          </div>
          <div className="w-2/4 h-full p-4">
            <form action="">
              <input type="text" name="name" id="name" className="w-full p-2 text-md border rounded-lg mb-2" placeholder='Your Name' />
              <input type="email" name="email" id="email" className="w-full p-2 text-md border rounded-lg mb-2" placeholder='Email Address' />
              <textarea name="message" id="message" className="w-full p-2 text-md border rounded-lg mb-2 h-[270px]" placeholder='Message...'></textarea>
              <button className="w-fit p-2 text-md bg-teal-500 text-white rounded-lg">Submit Message <i className="fa-solid fa-arrow-right text-sm"></i></button>
            </form>
          </div>
        </div>
        <section className="w-full h-screen bg-cover bg-top bg-[url('/foreground.png')] absolute top-0 left-0 z-20 pointer-events-none"></section>
      </main>
    </>
  );
}

export default App;
