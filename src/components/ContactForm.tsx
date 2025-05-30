import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form
      action="https://formspree.io/f/xblonnkj"
      method="POST"
      className="space-y-4"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-input"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="form-input"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-secondary text-white py-3 px-6 hover:bg-secondary-dark transition-colors w-full"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;