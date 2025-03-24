// utils/timeUtils.ts
export function formatPublishTime(publishTime: string) {
    const currentTime = new Date();
    const publishDate = new Date(publishTime);
    const diff = currentTime.getTime() - publishDate.getTime();

    const oneHour = 1000 * 60 * 60;
    const oneDay = oneHour * 24;
    const fifteenDays = oneDay * 15;
    const oneMonth = oneDay * 30;

    if (diff < oneHour) {
        const minutes = Math.floor(diff / (1000 * 60));
        return `${minutes} 分钟内`;
    } else if (diff < oneDay) {
        const hours = Math.floor(diff / oneHour);
        return `${hours} 小时内`;
    } else if (diff < fifteenDays) {
        const days = Math.floor(diff / oneDay);
        return `${days} 天内`;
    } else if (diff < oneMonth) {
        return '一个月以内';
    } else {
        return publishTime;
    }
}