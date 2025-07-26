export const mask = (input: string, slice: number = 4) => {
    if (!input) {
        return ""
    }
    
    if (input.length <= 8) {
        return input // If the string is 8 characters or less, return unchanged
    }

    const maskedPart = ".".repeat(4)
    return input.substring(0, slice) + maskedPart + input.substring(input.length - 4)
}

export const dateTimeDifference = (dateString: string) => {
    const inputDate = new Date(dateString)
    const now = new Date()
    const diffMs = Math.max(0, now.getTime() - inputDate.getTime())

    const seconds = Math.floor(diffMs / 1000)
    const days = Math.floor(seconds / (24 * 60 * 60))
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    const parts: string[] = []
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (mins > 0) return `${mins} minute${mins > 1 ? 's' : ''} ago`
    if (secs > 0 && parts.length === 0)
        return `${secs} second${secs > 1 ? 's' : ''} ago`

    return parts.join(', ')
}
