export default function Newsletter() {
  const subHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-4 md:py-6 lg:py-10 max-w-[800px] mx-auto">
      <h3 className="text-center">Subscribe for 5% Off</h3>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
        exercitationem labore con Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Harum exercitationem labore con
      </p>
      <form
        onSubmit={subHandler}
        action=""
        className="m-auto w-[300px] md:w-[600px] flex items-center my-4 lg:my-8"
      >
        <div className="w-full flex border border-emerald-500 rounded overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full px-2 sm:px-3 py-1 sm:py-2 focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="px-2 lg:px-4 py-1 sm:py-2 flex-shrink-0 max-w-[120px] bg-emerald-400 hover:bg-emerald-500 transition-all cursor-pointer text-white"
          />
        </div>
      </form>
    </div>
  );
}
