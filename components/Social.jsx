import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "/" },
  { icon: <FaLinkedin />, path: "/" },
  { icon: <FaYoutube />, path: "/" },
  { icon: <FaTwitter />, path: "/" },
];

const Social = ({ containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Social;
