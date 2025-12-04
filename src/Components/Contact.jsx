import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-base-100 py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold">Contact Us</p>
          <h1 className="text-4xl font-bold text-base-content">We're here to help</h1>
          <p className="text-base-content/70 max-w-3xl mx-auto">
            Have a question about plant care, your order, or partnership opportunities? Reach out
            and our support team will respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Email</h3>
              <p className="text-base-content/70">support@greennest.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Phone</h3>
              <p className="text-base-content/70">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Office</h3>
              <p className="text-base-content/70">123 Green Street, Plant City, Earth</p>
            </div>
          </div>

          <form className="p-6 rounded-2xl bg-base-100 shadow-xl border border-base-200 space-y-4">
            <div>
              <label className="label-text font-semibold">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your name" />
            </div>
            <div>
              <label className="label-text font-semibold">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="you@email.com" />
            </div>
            <div>
              <label className="label-text font-semibold">Message</label>
              <textarea className="textarea textarea-bordered w-full min-h-32" placeholder="Tell us how we can help"></textarea>
            </div>
            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

