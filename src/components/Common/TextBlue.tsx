import { ReactNode } from 'react'

const TextBlue = ({ children, className }: { children: ReactNode, className?: string }) => {
    return <span className={`text-royalblue-200 ${className}`}>{children}</span>
}

export default TextBlue