import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const response = await request.formData();
    console.log(response);
    const data=Object.fromEntries(response);
    console.log(data);
    
    return null;
    
  } catch (error) {
    console.error(error);
  }
};

const Contact = () => {
  return (
    <div className="p-6 dark:text-gray container ">
      <Form
        method="POST"
        action="/contact"
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1 ">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
          >
            Send
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
