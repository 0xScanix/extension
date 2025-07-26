"use client"

interface ErrorSectionProps {
    message: string
}

export function ErrorSection({ message }: ErrorSectionProps) {
    return (
        <div className="flex items-center justify-center text-base my-16">
            {message}
        </div>
    )
}
