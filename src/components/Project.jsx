const Project = () => {
  return (
    <section id="project" className="w-full mt-10 text-[#525f7f]">
      <h1 className="text-center text-xl sm:text-[1.4em] border-[6px] border-light-purple w-fit mx-auto p-3 rounded-3xl shadow-inner shadow-indigo-500/40 dark:text-white">
        Project
      </h1>
      <div className="mt-10 flex flex-row relative w-4/5 mx-auto shadow-xl">
        <div className="bg-white p-6 xl:p-[60px] xl:w-1/2 z-10 dark:bg-[#5a5d7a] dark:text-white">
          <p className="text-xl sm:text-[1.4em] font-bold">I.MOVE</p>
          <p className="mt-4 text-justify">
            An exercise tracking web application consisted of main feature to
            allow user to create, edit and delete activity card and addition
            feature about register, sign-in, setting and dashboard.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <p className="border-2 border-green-600 p-1 rounded-lg">
              JavaScript
            </p>
            <p className="border-2 border-green-600 p-1 rounded-lg">React.js</p>
            <p className="border-2 border-green-600 p-1 rounded-lg">Node.js</p>
            <p className="border-2 border-green-600 p-1 rounded-lg">
              Express.js
            </p>
            <p className="border-2 border-green-600 p-1 rounded-lg">MongoDB</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="" target="_blank">
              <div className="flex items-center justify-center border py-1 px-3 bg-light-purple rounded-lg shadow-lg h-full hover:opacity-75">
                <img src="/src/assets/icons/website.svg" alt="github icon" />
                <p className="text-white pl-2">Website</p>
              </div>
            </a>
            <a href="" target="_blank">
              <div className="flex items-center justify-center border py-1 px-3 rounded-lg shadow-lg h-full hover:bg-gray-200">
                <img src="/src/assets/icons/github.svg" alt="github icon" />
                <p className="text-light-purple">Code</p>
              </div>
            </a>
          </div>
        </div>
        <img
          src="/src/assets/images/projectPicture.png"
          alt="project picture"
          className="xl:absolute xl:top-0 xl:right-0 w-4/5 hidden xl:block"
        />
      </div>
    </section>
  );
};
export default Project;
