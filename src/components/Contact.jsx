const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/img1.png')] bg-repeat bg-fixed px-4">
      <div className="p-8 max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl backdrop-blur-sm text-xl mb-47">
        <h1 className="text-center font-extrabold text-3xl text-orange-500 relative">
          Contact Us
          <span className="block w-16 h-1 bg-orange-400 mx-auto mt-2 rounded"></span>
        </h1>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium">
          📩 If you have any questions, feedback, or need assistance, please feel
          free to reach out to us! We’re always happy to help.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium">
          📞 Call us: <span className="font-semibold">+91 98765 43210</span>
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed font-medium">
          ✉️ Email: <span className="font-semibold">support@deliciousbites.com</span>
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium">
          Thank you for choosing <span className="text-orange-500 font-bold">Delicious Bites</span> ❤️
        </p>
      </div>
    </div>
  );
};

export default Contact;





     
       