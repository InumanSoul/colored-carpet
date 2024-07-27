import { Link } from "react-router-dom"

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'ghost'
  to: string
}

const Button = ({ children, variant, to } : ButtonProps) => {
  const buttonType = {
    primary: "text-white shadow-md px-5 py-3 font-bold text-lg bg-gradient-to-b hover:bg-gradient-to-t from-orange-500 to-orange-600 rounded-full",
    secondary: "text-white border-2 border-white shadow-md px-5 py-3 font-bold text-lg rounded-full hover:bg-white/15",
    ghost: "text-white hover:text-gray-200"
  }

  return (
    <Link to={to} className={`inline-flex items-center justify-center ${buttonType[variant]}`}>
      { children }
    </Link>
  )
}

export default Button