import React from "react";

function Contact() {
  return (
    <section id="contact">
      <article className=" mx-auto min-h-full w-full md:w-3/4  lg:w-2/3">
        <div className=" text-center">
          <h6 className="py-4 text-3xl md:text-4xl">
            Contact <span className="text-red">Me</span>
          </h6>
          <p className="text-lightGray">Have a project you would like to discuss ? </p>
        </div>
        <div className="mb-10">
          <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
        </div>
        <div>
          <form action="" className="grid  gap-4">
            <div className="grid-cols-6">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="">
              <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="">
              <textarea
                name="message"
                id="message"
                cols="60"
                placeholder="Message"
                rows="9"
              ></textarea>
            </div>
            <div className="w-full cursor-pointer justify-self-center bg-red text-center brightness-75">
              <button type="submit" className="w-full p-4 text-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Contact;
