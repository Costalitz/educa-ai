import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
}

const baseClasses =
  'flex cursor-pointer items-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50'

const variantClasses = {
  primary: 'bg-primary text-primare-foreground font-semibold rounded-x1',
  secondary: 'bg-secondary-button border border-border rounded-3x1',
  ghost: 'rounded-lg text-foreground',
}

export function Button({
  variant,
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={[baseClasses, variantClasses[variant], className].join(' ')}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}
