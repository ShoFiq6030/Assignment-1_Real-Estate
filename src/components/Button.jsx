/* eslint-disable react/prop-types */


function Button({href,className,text,target}) {
  return (
    <a
    href={href}
    className={className}
    target={target}
  >
    {text}
  </a>
  )
}

export default Button