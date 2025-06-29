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
            emailjs.send(
                  'service_88cpp3q',
                  'template_haurqf2',
                  formData,
                  'V9xPwtjuX7uzSbXRf'
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
            <section className="py-12 px-4 bg-white dark:bg-gray-950" id="contact">
                  <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                              />
                              <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                              />
                              <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                              ></textarea>
                              <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                              >
                                    {loading ? 'Sending...' : 'Send Message'}
                              </button>
                        </form>
                  </div>
            </section>
      );
};

export default Contact;
