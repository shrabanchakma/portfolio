import { BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-neutral-800 py-10 px-6 rounded-t-lg">
      <div className="flex flex-col items-center gap-4">
        {/* Nav links */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#work" className="hover:underline">
            My Work
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/shraban-chakma/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <BsLinkedin size={25} />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <BsYoutube size={25} />
          </a>
          <a
            href="https://x.com/ShrabanChakma33"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <BsTwitter size={25} />
          </a>
        </div>

        {/* High-CTR CTA */}
        <aside className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Like what you see? Let’s build something measurable.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500 transition"
          >
            Start a Project
          </a>
        </aside>

        <p className="mt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} - Built by Shraban Chakma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
