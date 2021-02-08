export function expandNewlines(withNewlines: string): string {
    return withNewlines.replace(/\n/g, "<br />");
}