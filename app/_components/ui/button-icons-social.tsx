import Link from "next/link";
import { Button } from "./button";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/5511999999999",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
  },
];

const ButtonIconSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <Button key={index} variant="outline" size="sm" asChild>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              <Icon />
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonIconSocial;
