
import {
  ArrowUpRight,
} from "lucide-react";
import CurrentYear from "@/components/CurrentYear";
import AnimatedBorder from "@/components/AnimatedBorder";

type SocialPlatform = "x" | "linkedin" | "instagram";

const SocialIcon = ({ platform }: { platform: SocialPlatform }) => {
  if (platform === "x") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[22px]" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
      </svg>
    );
  }

  if (platform === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[22px]" fill="currentColor">
        <path d="M19 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 8h4v13H3V8Zm6 0h3.8v1.8h.1A4.2 4.2 0 0 1 16.7 8c4.1 0 4.9 2.5 4.9 5.8V21h-4v-6.4c0-1.5 0-3.4-2.1-3.4s-2.5 1.6-2.5 3.3V21H9V8Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="footer-enter bg-[#0c0c0c] px-6 py-16 text-white md:px-12 lg:px-20">

      <div className="mx-auto max-w-[1400px]">

        {/* Brand */}
        <div className="footer-brand-enter mb-16">
          <h2 className="font-serif text-6xl font-bold tracking-tight md:text-8xl">
            ORVELLA
          </h2>

          <p className="mt-3 text-sm text-gray-400 md:text-lg">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Newsletter */}
          <div className="footer-column-enter [animation-delay:100ms]">
            <h3 className="mb-3 font-serif text-lg">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form
              action="mailto:info@orvella.com?subject=Newsletter%20Subscription"
              method="post"
              encType="text/plain"
              className="animated-rounded-border flex max-w-sm items-center rounded-full border border-white/15 bg-[#333333] px-4 py-3 transition-shadow duration-300 focus-within:shadow-[0_0_18px_rgba(0,234,255,0.2)]"
            >
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                required
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="neon-button rounded-full p-1 text-white transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
              >
                <ArrowUpRight size={25} />
                <AnimatedBorder />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="footer-column-enter [animation-delay:200ms]">
            <h3 className="mb-5 font-serif text-lg">
              QUICK LINKS
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                ["Home", "/"],
                ["Destinations", "/destinations"],
                ["My Bookings", "/bookings"],
                ["My Profile", "/profile"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="footer-link transition-colors duration-300 hover:text-[#53d7ff]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column-enter [animation-delay:300ms]">
            <h3 className="mb-5 font-serif text-lg">
              SUPPORT
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                ["Help Center", "/help"],
                ["Terms of Service", "/terms"],
                ["Privacy Policy", "/privacy"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="footer-link transition-colors duration-300 hover:text-[#53d7ff]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column-enter [animation-delay:400ms]">
            <h3 className="mb-5 font-serif text-lg">
              CONTACT US
            </h3>

            <div className="space-y-4 text-gray-400">
              <a
                href="tel:+8807869011622"
                className="footer-link block transition-colors hover:text-[#53d7ff]"
              >
                +880 9697 744438
              </a>

              <a
                href="mailto:info@orvella.com"
                className="footer-link block transition-colors hover:text-[#53d7ff]"
              >
                info@orvella.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">

          <p className="text-sm text-gray-400">
            © <CurrentYear /> ORVELLA. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-7">

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="footer-social transition-transform duration-300 hover:-translate-y-1 hover:text-[#53d7ff]"
            >
              <SocialIcon platform="x" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social transition-transform duration-300 hover:-translate-y-1 hover:text-[#53d7ff]"
            >
              <SocialIcon platform="linkedin" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social transition-transform duration-300 hover:-translate-y-1 hover:text-[#53d7ff]"
            >
              <SocialIcon platform="instagram" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
