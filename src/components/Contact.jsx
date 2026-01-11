import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate successful submit
    setSubmitted(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // hide success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:px-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 animate-fade-in delay-100">
          <p className="text-lg mb-8 text-center">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                <i className="fas fa-envelope text-blue-400 text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:manishkr9547@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  manishkr9547@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                <i className="fab fa-linkedin-in text-purple-400 text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/manish-kumar-599138318/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline break-all"
                >
                  https://www.linkedin.com/in/manish-kumar-599138318/
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-500/10 p-3 rounded-lg mr-4">
                <i className="fab fa-github text-gray-300 text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a
                  href="https://github.com/manishkr6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  https://github.com/manishkr6
                </a>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-8 text-center animate-fade-in">
              <p className="text-green-400 font-medium">
                ✅ Message sent successfully! I’ll get back to you soon.
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg py-3 font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
