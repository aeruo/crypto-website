import React, {useState} from 'react';
import emailjs from 'emailjs-com'

function App() {

  /* Implement Contact form to email logic here. */

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_i3ltrlr',
      'template_549ugmb',
      formData,
      'fOKPfJn1SuAXfZGub',
    )
    .then((response) => {
      console.log('Success!', response.status, response.text);
      alert('Your message was sent successfully!')
    })
    .catch((err) => {
      console.error('Fail!', err);
      alert('We failed to send your message, please try again later.')
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });

  }

  return (
    <>
      <main className="w-full min-h-screen bg-cover bg-top bg-[url('/background.jpg')] flex justify-center moderustic relative">
        <div className="w-[95%] md:w-[60%] h-fit md:h-[70%] bg-white rounded-lg shadow-lg mt-[20px] md:mt-[75px] md:flex p-4 relative z-10 mb-[300px] md:mb-0 u-fade-type-down js-window-trigger glassmorphism">
          <div className="md:w-2/4 h-full p-4 flex flex-col justify-between">
            <div className='mb-2'>
              <h1 className="text-3xl mb-2">Get In Touch.</h1>
              <p className="text-[14px] text-slate-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta dolor exercitationem dolore.</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-at text-sm text-black mr-2"></i> support@company.co.th</p>
              <p className="text-sm text-slate-500 mb-1"><i className="fa-solid fa-phone text-sm text-black mr-1"></i> +66 293 372 222</p>
            </div>
          </div>
          <div className="md:w-2/4 h-full p-4">
            {/* The Contact Form  ---------------------------------------*/}
              <form action="">
                <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Your Name' />
                <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" className="w-full p-2 text-md rounded-lg mb-2" placeholder='Email Address' />
                <textarea onChange={handleChange} value={formData.message} name="message" id="message" className="w-full p-2 text-md rounded-lg mb-2 h-[258px]" placeholder='Message...'></textarea>
                <button onClick={handleSubmit} className="w-fit p-2 text-md bg-teal-300 text-white rounded-lg">Submit Message <i className="fa-solid fa-arrow-right text-sm"></i></button>
              </form>
            {/* End of Contact Form -------------------------------------*/}
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
