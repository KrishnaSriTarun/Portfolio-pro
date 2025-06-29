import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            
            
            emailjs
                  .send(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                        formData,
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                  )
                  .then(() => {
                        toast.success('Message sent successfully!');
                        setFormData({ name: '', email: '', message: '' });
                        setLoading(false);
                  })
                  .catch(() => {
                        toast.error('Something went wrong. Please try again.');
                        setLoading(false);
                  });
      };

      return (
            <section className="py-16 px-4 bg-white" id="contact">
                  <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Me</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                              <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              ></textarea>
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
                              >
                                    {loading ? 'Sending...' : 'Send Message'}
                              </button>
                        </form>
                  </div>
            </section>
      );
};

export default Contact;
