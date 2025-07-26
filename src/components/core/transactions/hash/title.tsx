interface TransactionHashTitleProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function TransactionHashTitle({ children }: TransactionHashTitleProps) {
    return (
        <h4 className="flex items-center gap-2 text-sm leading-none font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-2">
            {children}
        </h4>
    )
}