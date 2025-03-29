export function formatDate(rfcDate: string): string {
    const date = new Date(rfcDate);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(date);
}
