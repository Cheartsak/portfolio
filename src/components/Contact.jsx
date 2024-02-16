const Contact = () => {
  return (
    <section id="contact" className="w-full mt-10 text-[#525f7f] dark:text-white">
      <h1 className="text-center text-xl sm:text-[1.4em] border-[6px] border-light-purple w-fit mx-auto p-3 rounded-3xl shadow-inner shadow-indigo-500/40">
        Contact
      </h1>
      <div className="w-fit mx-auto text-lg">
        <div className="flex gap-2 items-center mt-4">
          <img src="/icons/mail.svg" alt="mail icon" />
          <p>cheartsak.ta@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img
            src="/icons/github.svg"
            alt="mail icon"
            className="w-[32px] aspect-square"
          />
          <p>
            <a
              href="https://github.com/Cheartsak"
              target="_blank"
              className="hover:text-light-purple hover:underline hover:underline-offset-8 hover:decoration-light-purple hover:decoration-4"
            >
              GitHub/Cheartsak
            </a>
          </p>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img src="/icons/phone.svg" alt="mail icon" />
          <p>082-212-8138</p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
