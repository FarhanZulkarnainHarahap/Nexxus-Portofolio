export default function FormContactSection() {
  return (
    <div className="bg-[#191717] py-10 px-6 rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold mb-4 text-white">Contact Me</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="bg-black/50 text-white p-3 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-black/50 text-white p-3 rounded-md w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="bg-black/50 text-white p-3 rounded-md w-full"
        />
        <textarea
          placeholder="Comment"
          className="bg-black/50 text-white p-3 rounded-md w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-black/50 text-white py-3 px-6 rounded-lg hover:bg-[#747373] transition-all flex items-center gap-2"
        >
          Send Message <span>📤</span>
        </button>
      </form>
    </div>
  );
}
