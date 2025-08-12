import { ReactNode } from "react"

const SubHeading = ({ children, className }: { children: ReactNode, className?: string }) => {
    return <div className={`text-xl leading-[1.3125rem] text-darkslategray-200 text-center font-apfel-grotezk-base px-7 ${className}`}>{children}</div>
}

export default SubHeading