import { ReactNode } from "react"

const Heading = ({ className, children }: { className?: string, children?: ReactNode }) => {
    return <div className={`text-17xl mq380:text-11xl mq380:leading-[2.1875rem] tracking-wide leading-[2.5rem] font-semibold font-apfel-grotezk-base text-center ${className}`}>{children}</div>
}

export default Heading