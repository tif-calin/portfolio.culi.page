

const IconLink = ({
  href,
  desc,
  icon,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span style={{ display: 'none' }}>{desc}</span>
      <img src={icon} alt={desc} />
    </a>
  );
};

export default IconLink;
