import { Cursor, useTypewriter } from "react-simple-typewriter";

const AboutMe = () => {
  const [text] = useTypewriter({
    words: ["Cheartsak.", "Junior Developer."],
    loop: 0,
  });

  return (
    <section className="w-full pt-10">
      <div>
        <h1 className="text-[1.7em] sm:text-[4.5em] text-light-purple">
          &gt; &#128075; I'm <span>{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </h1>
        <p className="mt-10 text-xl sm:text-[1.4em] text-[#525f7f] text-justify dark:text-white">
          A passionate graduate of Generation's junior software developer
          bootcamp seeking an entry-level full stack developer. Enthusiastic to
          apply my knowledge and skills to perform productive tasks.
        </p>
      </div>
      <div className="w-4/5 mx-auto mt-10">
        <div className="h-[28px] bg-[#e4e3e5] rounded-t-lg">
          <div className="flex flex-row justify-start items-center my-auto h-full gap-x-2 px-2">
            <div className="w-[13px] aspect-square rounded-full bg-[#f96256]"></div>
            <div className="w-[13px] aspect-square rounded-full bg-[#fdbc3d]"></div>
            <div className="w-[13px] aspect-square rounded-full bg-[#33c948]"></div>
          </div>
        </div>
        <div className="bg-[#5a5d7a] text-white p-6 sm:p-8">
          <div className="mb-4">
            <p>&gt; Cheartsak.contact</p>
            <p className="text-[#e7d184]">
              ["<span className="text-[#35feff]">cheartsak.ta@gmail.com</span>
              ",&nbsp; "
              <span>
                <a
                  href="https://github.com/Cheartsak"
                  target="_blank"
                  className="text-[#35feff] hover:opacity-75"
                >
                  GitHub/Cheartsak
                </a>
              </span>
              ",&nbsp; "<span className="text-[#35feff]">082-212-8138</span>"]
            </p>
          </div>
          <div className="mb-4">
            <p>&gt; Cheartsak.cv</p>
            <p className="text-[#e7d184]">
              <a
                href="/src/assets/CV_Cheartsak.pdf"
                target="_blank"
                className="text-[#35feff] hover:opacity-75"
              >
                cheartsak_cv.pdf
              </a>
            </p>
          </div>
          <div className="mb-4">
            <p>&gt; Cheartsak.location</p>
            <p className="text-[#e7d184]">"Bangkok, Thailand"</p>
          </div>
          <div className="mb-4">
            <p>&gt; Cheartsak.skill</p>
            <p className="text-[#e7d184]">
              ["JavaScript",&nbsp; "React.js",&nbsp; "Node.js",&nbsp;
              "Express.js",&nbsp; "MongoDB",&nbsp; "SQL"]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
