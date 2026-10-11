export const getDate = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
    return date;
}