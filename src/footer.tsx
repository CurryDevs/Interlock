import LogoWhiteText from "./assets/logo-white.png";

interface footerGroupProps {
  title: string;
  links: { href: string; text: string }[];
}

const FooterLinkGroup = ({ title, links }: footerGroupProps) => (
  <div>
    <h3 className="inline-block cursor-pointer text-lg font-semibold text-white transition duration-200 hover:scale-105 hover:text-[#805cd2] focus:text-[#805cd2] active:scale-95">
      {title}
    </h3>
    <ul className="mt-6 space-y-4">
      {links.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="inline-block text-base text-[#94969d] transition duration-200 hover:scale-105 hover:text-[#805cd2] focus:text-[#805cd2] active:scale-95"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/company/currydevs",
      label: "LinkedIn",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/currydevs.co/",
      label: "Instagram",
    },
    { icon: <XIcon />, href: "https://x.com/CurryDevs_co", label: "X" },
  ];

  const linkGroups = [
    {
      title: "Company",
      links: [
        { href: "#", text: "About" },
        { href: "#", text: "Features" },
        { href: "#", text: "Works" },
        { href: "#", text: "Career" },
      ],
    },
    {
      title: "Help",
      links: [
        { href: "#", text: "Customer Support" },
        { href: "#", text: "Delivery Details" },
        { href: "#", text: "Terms & Conditions" },
        { href: "#", text: "Privacy Policy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Free eBooks" },
        { href: "#", text: "Development Tutorial" },
        { href: "#", text: "How to - Blog" },
        { href: "#", text: "YouTube Playlist" },
      ],
    },
    {
      title: "Extra Links",
      links: [
        { href: "#", text: "Customer Support" },
        { href: "#", text: "Delivery Details" },
        { href: "#", text: "Terms & Conditions" },
        { href: "#", text: "Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#131316] py-10 text-white sm:pt-16 lg:pt-20">
      {/* Center blurred background, like FirstCTA */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[425px] w-full rounded-full bg-white opacity-80 blur-[450px] sm:w-[425px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {linkGroups.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        <hr className="mb-10 mt-16 border-white/20" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-0">
          {/* Left: Logo */}
          <div className="flex w-full items-center justify-center md:order-1 md:w-auto md:justify-start">
            <span className="block h-8 w-auto">
              {LogoWhiteText && (
                <img
                  src={LogoWhiteText}
                  alt="Interlock Logo"
                  className="h-8 w-auto"
                />
              )}
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="w-full text-center text-base font-medium leading-6 text-[#94969d] md:order-2 md:w-auto">
            Design and Development by
            <a
              href="https://currydevs.com/"
              target="_blank"
              className="ml-1 cursor-pointer text-white underline underline-offset-4 transition-all duration-300 hover:text-[#805cd2] hover:no-underline"
            >
              CurryDevs
            </a>
            {"\u00A0"}— © {new Date().getFullYear()} Interlock
          </div>

          {/* Right: Social Icons */}
          <div className="flex w-full items-center justify-center space-x-3 md:order-3 md:w-auto md:justify-end">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${item.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-white transition-all duration-200 hover:scale-110 focus:ring-white active:scale-95"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12 2.16c3.2 0 3.584.01 4.85.07 1.17.05 1.97.23 2.44.4.55.21.95.47 1.37.88.4.4.67.82.87 1.37.17.47.35 1.27.4 2.44.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.584-.07 4.85-.05 1.17-.23 1.97-.4 2.44a3.21 3.21 0 01-.88 1.37 3.21 3.21 0 01-1.37.88c-.47.17-1.27.35-2.44.4-1.27.06-1.65.07-4.85.07s-3.584-.01-4.85-.07c-1.17-.05-1.97-.23-2.44-.4a3.21 3.21 0 01-1.37-.88 3.21 3.21 0 01-.88-1.37c-.17-.47-.35-1.27-.4-2.44-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.584.07-4.85.05-1.17.23-1.97.4-2.44a3.21 3.21 0 01.88-1.37 3.21 3.21 0 011.37-.88c.47-.17 1.27-.35 2.44-.4 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.6 0 8.035.02 6.77.08 5.21.15 4 .43 3.06 1.06a5.07 5.07 0 00-1.88 1.88C.43 4 .15 5.21.08 6.77.02 8.035 0 8.6 0 12c0 3.4.02 3.965.08 5.23.07 1.56.35 2.77.98 3.71.55.9 1.29 1.64 2.2 2.19.94.63 2.15.91 3.71.98 1.26.06 1.82.08 5.23.08 3.4 0 3.965-.02 5.23-.08 1.56-.07 2.77-.35 3.71-.98.9-.55 1.64-1.29 2.19-2.2.63-.94.91-2.15.98-3.71.06-1.26.08-1.82.08-5.23 0-3.4-.02-3.965-.08-5.23-.07-1.56-.35-2.77-.98-3.71-.55-.9-1.29-1.64-2.19-2.2-.94-.63-2.15-.91-3.71-.98-1.26-.06-1.82-.08-5.23-.08zM12 7.16A4.84 4.84 0 007.16 12 4.84 4.84 0 0012 16.84 4.84 4.84 0 0016.84 12 4.84 4.84 0 0012 7.16zm0 8c-1.76 0-3.16-1.4-3.16-3.16S10.24 8.84 12 8.84s3.16 1.4 3.16 3.16-1.4 3.16-3.16 3.16zm4.16-8.87a1.12 1.12 0 100-2.24 1.12 1.12 0 000 2.24z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
  </svg>
);

export const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M17.53 3H21.5l-7.19 8.21L22.5 21h-6.6l-5.19-6.21L2.47 21H-1.5l7.62-8.7L1.5 3h6.6l4.88 5.84L17.53 3zm-2.13 15h2.13l-5.19-6.21L5.47 18h2.13l3.19-3.84L15.4 18z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12 .5C5.65.5.5 5.7.5 12.09c0 5.15 3.44 9.51 8.2 11.05.6.12.82-.25.82-.57v-2c-3.33.73-4-1.63-4-1.63-.55-1.4-1.34-1.77-1.34-1.77-1.09-.77.08-.75.08-.75 1.2.08 1.83 1.25 1.83 1.25 1.07 1.8 2.8 1.28 3.48.98.1-.77.42-1.28.76-1.57-2.66-.3-5.47-1.36-5.47-6.03 0-1.33.47-2.43 1.25-3.28-.13-.31-.54-1.57.12-3.28 0 0 1-.32 3.33 1.25a11.38 11.38 0 016 0c2.33-1.57 3.33-1.25 3.33-1.25.66 1.71.26 2.97.13 3.28.78.85 1.25 1.95 1.25 3.28 0 4.7-2.83 5.73-5.52 6.03.44.37.82 1.12.82 2.25v3.34c0 .33.2.7.83.57A11.55 11.55 0 0023.5 12.1C23.5 5.7 18.35.5 12 .5z" />
  </svg>
);
