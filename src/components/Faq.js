import React, { useState } from 'react';
import '../Faq.css'; // Import CSS for styling

function Faq() {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Sample FAQ data
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any unworn items within 30 days of purchase for a full refund."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 5-7 business days, depending on your location."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries worldwide. Additional shipping charges may apply."
    },
    {
      question: "Can I change my order after it's been placed?",
      answer: "You can modify your order within 1 hour of placing it by contacting our support team."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you will receive an email with a tracking number and link."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and Apple Pay."
    },
    {
      question: "What should I do if I receive a defective item?",
      answer: "Please contact our customer service within 7 days of receiving the item for a replacement or refund."
    },
    {
      question: "How do I care for my shoes?",
      answer: "We recommend cleaning them with a damp cloth and storing them in a cool, dry place."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a wide range of sizes. Please refer to our sizing chart for details."
    },
    {
      question: "Can I unsubscribe from your newsletter?",
      answer: "Yes, you can unsubscribe from our newsletter at any time using the link at the bottom of the email."
    },
  ];

  // Toggle the answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h1>FAQ</h1>
      <p>Frequently Asked Questions about our shoes, shipping, and returns.</p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
