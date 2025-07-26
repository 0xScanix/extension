import { TransactionHashTitle } from "../transactions/hash/title"

interface TransactionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
}

export function TransactionSection({ title, children }: TransactionSectionProps) {
    return (
        <>
            <div className="col-span-5 sm:col-span-12">
                {title &&
                    <TransactionHashTitle>{title}</TransactionHashTitle>}
            </div>
            <div className="col-span-7 sm:col-span-12 overflow-wrap">
                <div className="wrap-break-word">
                    {children}
                </div>
            </div>
        </>
    )
}