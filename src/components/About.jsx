const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/img1.png')] bg-repeat bg-fixed px-4">
      <div className="p-8 max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl backdrop-blur-sm mb-48">
        <h1 className="text-center font-extrabold text-3xl text-orange-500 relative inline-block">
          About Us
          <span className="block w-16 h-1 bg-orange-400 mx-auto mt-2 rounded"></span>
        </h1>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium text-lg">
          🍴 Welcome to our food delivery service! We are dedicated to bringing you
          the best meals from your favorite local restaurants right to your door.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium text-lg">
          🚀 Our mission is to make food delivery easy, convenient, and enjoyable.
          Whether you're craving a quick snack or a full-course meal, we've got
          you covered.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed font-medium text-lg">
          ❤️ Thank you for choosing us for your food delivery needs. We look forward
          to serving you with love, speed, and deliciousness!
        </p>
      </div>
    </div>
  );
};

export default About;
