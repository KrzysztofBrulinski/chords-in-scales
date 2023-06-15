export const apiFakeTimeout = () => new Promise((resolve) => {
    // const time = Math.floor((Math.random() * 2) + 1) * 1000;
    // setTimeout(() => resolve(""), time);
    setTimeout(() => resolve(""), 0);
});