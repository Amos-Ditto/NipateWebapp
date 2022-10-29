import formatDistance from "date-fns/formatDistance";

export const estimateDuration = (timestamp: string): string => {
    let then = new Date(timestamp);
    let now = new Date();

    return formatDistance(now, then, { addSuffix: false });
};
