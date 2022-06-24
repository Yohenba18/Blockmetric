const JoinUs = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto my-20">
        <div className="flex flex-col md:flex-row text-center gap-10 mx-4 sm:text-left sm:gap-0 justify-between bg-opacity-50 bg-background-black-100 shadow-2xl border-2 border-background-black-100 py-5 px-4 items-center rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="text-3xl font-bold">Our Community</div>
            <div className="text-text-secondary-100 text-base">
              The Blockmetric Community helps in engaging groups of members to
              develop their knowledge and strategies.
            </div>
          </div>
          <div>
            <button className="bg-background-green text-base px-2 rounded-lg shadow-xl w-40 py-2">
              <a href="https://discord.gg/zxrm4vfx">Join Us</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
