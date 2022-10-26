export const estimateDuration = (timestamp: string): string => {
    let then = new Date(timestamp);
    let now = new Date();

    let diff = now.getHours() - then.getHours();

    if (diff < 1) {
        return (diff * 60).toString() + "mins";
    } else if (diff < 24) {
        return diff.toString() + "hrs";
    } else {
        return (diff / 24).toString() + "days";
    }
}