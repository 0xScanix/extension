interface TransactionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'failed'
}

export function TransactionStatus({ variant = 'success', children }: TransactionStatusProps) {
    const renderIcon = () => {
        switch (variant) {
            case 'failed':
                return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={200}
                    height={200}
                    viewBox="0 0 24 24"
                    fill="#ef4444"
                >
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M0 0h24v24H0z" />
                        <path
                            fill="#ef4444"
                            d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zm-6.489 5.8a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293l-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293l.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292l-.094-.083z"
                        />
                    </g>
                </svg>;
            case 'success':
            default:
                return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={200}
                    height={200}
                    viewBox="0 0 24 24"
                    fill="#10b981"
                >
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M0 0h24v24H0z" />
                        <path
                            fill="#10b981"
                            d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zm-1.293 5.953a1 1 0 0 0-1.32-.083l-.094.083L11 12.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32z"
                        />
                    </g>
                </svg>;
        }
    }
    return (
        <span
            data-slot="badge"
            className="inline-flex items-center justify-center rounded-md border py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-muted-foreground px-1.5"
        >
            {renderIcon()}
            {children}
        </span>
    )
}