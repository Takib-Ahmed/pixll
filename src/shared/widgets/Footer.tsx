export default function Footer() {
  const footerDetails = {
    label: "Have a project in mind?",
    title: `Let's Talk`,
    email: "hey@pixll.com",
    socialLinks: [
      { id: 1, label: "Linkedin", href: "https://linkedin.com" },
      { id: 2, label: "GitHub", href: "https://github.com" },
      { id: 3, label: "Facebook", href: "https://facebook.com" },
      { id: 4, label: "Instagram", href: "https://instagram.com" },
      { id: 5, label: "Twitter", href: "https://twitter.com" },
    ],
    legalLinks: [
      { id: 1, label: "Privacy", href: "#" },
      { id: 2, label: "Terms", href: "#" },
    ],
    copyright: "© 2017 - 2025 Pixll",
  };

  return (
    <footer className=" text-white py-10">
      <div className="max-w-6xl mx-auto  flex    gap-6   flex-col sm:flex-row  justify-between items-center px-4">
        <div className="  text-left mb-6 md:mb-0 flex-col flex   justify-start items-start">
          <h3 className="text-[24px] leading-[120%] font-[400] ">
            {footerDetails.label}
          </h3>
          <h2 className="  text-[30px]  max-[640px]:text-[40px] sm:text-[50px]  md:tex-[60px] lg:text-[64px] text-left font-[700]  footer-text">
            {footerDetails.title}
          </h2>
          <p className="mt-5  cursor-pointer text-footer-email   max-[640]:text-[40px]  sm:text-[50px]  md:tex-[60px] lg:text-[64px] text-left font-[500]   footeremail  ">
            {footerDetails.email}
          </p>
        </div>

        <div className="flex flex-col  justify-center text-left sm:text-right    lg:space-y-2">
          {footerDetails.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
          <div className="max-w-6xl mx-auto  mt-5 lg:mt-10 flex   sm:justify-end gap-8  lg:gap-20 items-center  text-sm text-gray-400">
            <div className="space-x-4   md:mb-0">
              {footerDetails.legalLinks.map((link) => (
                <a key={link.id} href={link.href} className="hover:underline ">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="  text-nowrap">{footerDetails.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
