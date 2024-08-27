import { useState } from 'react';

function App() {
  return (
    <>
      <main className="w-full h-screen bg-cover bg-top bg-[url('/background.jpg')] flex justify-center moderustic relative">
        <div className="w-[60%] h-[70%] bg-white rounded-lg shadow-lg mt-[75px] flex p-4 relative z-10 u-fade-type-down js-window-trigger glassmorphism">
          <div className="w-2/4 h-full p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl mb-2">Get In Touch.</h1>
              <p className="text-[14px] text-slate-500 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta dolor exercitationem dolore.</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-at text-sm text-black mr-2"></i> support@company.co.th</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-phone text-sm text-black mr-1"></i> +66 293 372 222</p>
            </div>
            <iframe className="rounded-lg mb-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124094.60618597499!2d100.69798929042966!3d13.599472542626907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a18f2f065f59%3A0x4195afd5edd8fc0a!2sSamut%20Prakan%2C%20Thailand!5e0!3m2!1sen!2sus!4v1724764476766!5m2!1sen!2sus" width="100%" height="250px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-2/4 h-full p-4">
            <form action="">
              <input type="text" name="name" id="name" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Your Name' />
              <input type="email" name="email" id="email" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Email Address' />
              <textarea name="message" id="message" className="w-full p-2 text-md rounded-lg mb-2 h-[258px]" placeholder='Message...'></textarea>
              <button className="w-fit p-2 text-md bg-teal-300 text-white rounded-lg">Submit Message <i className="fa-solid fa-arrow-right text-sm"></i></button>
            </form>
          </div>
        </div>
        <section className="w-full h-screen bg-cover bg-top bg-[url('/foreground.png')] absolute top-0 left-0 z-20 pointer-events-none"></section>
      </main>
    </>
  );
}

export default App;
