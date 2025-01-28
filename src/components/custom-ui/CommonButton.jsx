
import React from 'react'



const CommonButton = ({
  children,
  className = '',
  ghost,
  transparent,
  header,
  url,
  color,
  ...props
}) => {
  const buttonType = {
    transparent:'bg-transparent  text-white hover:text-blue hover:bg-white',
    default:'bg-white text-blue hover:bg-transparent hover:text-white ',
  }
  return url ? (
    <a
      to={url}
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default}  rounded-full duration-300 group px-6 py-3 border-white border border-solid !leading-115 text-sm sm:text-base font-bold `}>
     {children} 
    
    </a>
  ) : (
    <button
      {...props}
      className={`${className} ${ghost ? buttonType.ghost : transparent ? buttonType.transparent : buttonType.default}   rounded-full duration-300 group px-6 py-3 border border-white border-solid !leading-115 text-sm sm:text-base font-bold  `}>
{children} 
    
    </button>
  )
}

export default CommonButton