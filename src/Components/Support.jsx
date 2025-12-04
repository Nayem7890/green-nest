import React from 'react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I care for my new plant?',
      answer:
        'Each plant includes specific care instructions. Visit the All Items page and select your plant to see detailed care tips.',
    },
    {
      question: 'Can I track my order?',
      answer:
        'Yes, after placing an order you will receive tracking information via email along with shipping updates.',
    },
    {
      question: 'Do you offer consultations?',
      answer:
        'Our plant experts provide 30-minute consultations. Book a slot through the Hero section or contact support.',
    },
  ];

  return (
    <section className="min-h-screen bg-base-100 py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold">Support Center</p>
          <h1 className="text-4xl font-bold text-base-content">How can we assist?</h1>
          <p className="text-base-content/70 max-w-3xl mx-auto">
            Browse common questions or reach out directly. Our support team is available 7 days a
            week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800"
              >
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-800">
                  {faq.question}
                </h3>
                <p className="text-base-content/70 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-base-100 shadow-xl border border-base-200 space-y-4">
            <h3 className="text-2xl font-semibold text-base-content">Need personalized help?</h3>
            <p className="text-base-content/70">
              Email us at <span className="text-green-600">care@greennest.com</span> or join our
              live chat during business hours.
            </p>
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Start Live Chat
            </button>
            <button className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-full">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

