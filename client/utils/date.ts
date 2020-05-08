export function dateFormat(strDate: Date) {
    return `${strDate.getDate().toString().padStart(2, '0')}.${strDate.getMonth().toString().padStart(2, '0')}.${strDate.getFullYear()} ${strDate.getHours().toString().padStart(2, '0')}:${strDate.getMinutes().toString().padStart(2, '0')}`;
}
