interface Props {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: Props) => {
  return <a href={href}>{text}</a>;
};

export default NavItem;
