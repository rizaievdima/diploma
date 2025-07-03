export const getImageUrl = (name = "") => {
    const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true });
    const imageModule = Object.keys(images).find((path) => path.includes(name));
    if (imageModule) {
        return new URL(imageModule, import.meta.url).href;
    }
    return "";
};

export const getSelectedKey = (pathname) => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/hotels")) return "hotels";
    if (pathname.startsWith("/about-us")) return "about";
    return "";
};
