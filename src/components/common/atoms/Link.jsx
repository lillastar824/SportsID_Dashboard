const Link = (props) => {
  const { href, className, onclick, children } = props;
  return <a href={href} className={className} onClick={onclick}>{children}</a>;
};

export default Link;