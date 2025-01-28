import React from 'react'


const CommonHeading = ({
  children,
  className = '',
  ghost,
  center,
  ...props
}) => {
  const headingtype = {
    center:'text-center',
    default:'text-left',
  }
  return (
    <h2
      {...props}
      className={`${className}  ${ghost ? headingtype.ghost : center ? headingtype.center : headingtype.default} sm:text-4xl text-custom-2xl md:text-custom-5xl !leading-120 tracking-xxs font-zen text-off-black text-center`}>
      {children}
    </h2>
  )
}

export default CommonHeading