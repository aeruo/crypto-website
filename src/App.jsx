import emailjs from 'emailjs-com';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'your_service_id', // Replace with your Service ID
      'your_template_id', // Replace with your Template ID
      formData,
      'your_user_id' // Replace with your User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message.');
    });
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <main className="w-full min-h-screen bg-cover bg-top bg-[url('/background.jpg')] flex justify-center moderustic relative">
        <div className="w-[95%] md:w-[60%] h-fit md:h-[70%] bg-white rounded-lg shadow-lg mt-[20px] md:mt-[75px] md:flex p-4 relative z-10 mb-[300px] md:mb-0 u-fade-type-down js-window-trigger glassmorphism">
          <div className="md:w-2/4 h-full p-4 flex flex-col justify-between">
            <div className='mb-2'>
              <h1 className="text-3xl mb-2">Get In Touch.</h1>
              <p className="text-[14px] text-slate-500 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta dolor exercitationem dolore.</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-at text-sm text-black mr-2"></i> support@company.co.th</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-phone text-sm text-black mr-1"></i> +66 293 372 222</p>
            </div>
            <iframe className="rounded-lg mb-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124094.60618597499!2d100.69798929042966!3d13.599472542626907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a18f2f065f59%3A0x4195afd5edd8fc0a!2sSamut%20Prakan%2C%20Thailand!5e0!3m2!1sen!2sus!4v1724764476766!5m2!1sen!2sus" width="100%" height="250px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="md:w-2/4 h-full p-4">
            <form action="">
              <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Your Name' />
              <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Email Address' />
              <textarea value={formData.message} onChange={handleChange} name="message" id="message" className="w-full p-2 text-md rounded-lg mb-2 h-[258px]" placeholder='Message...'></textarea>
              <button onClick={handleSubmit} className="w-fit p-2 text-md bg-teal-300 text-white rounded-lg">Submit Message <i className="fa-solid fa-arrow-right text-sm"></i></button>
            </form>
          </div>
        </div>
        <section className="w-full h-full bg-cover bg-top bg-[url('/foreground.png')] absolute top-0 left-0 z-20 pointer-events-none"></section>
        <div className="absolute bottom-0 md:flex flex-row items-center justify-between z-[30] w-full p-2">
          <h3 className="text-md text-white">&copy; 2024 Company Ltd. All Rights Reserved</h3>
          <nav>
            <a href="#" className="text-white mx-2">Homepage</a>
            <a href="#" className="text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-white mx-2">Terms & Conditions</a>
          </nav>
        </div>
      </main>
    </>
  );
}

export default App;
