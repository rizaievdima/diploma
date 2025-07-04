export const getImageUrl = (name = "") => {
    const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true });

    const entry = Object.entries(images).find(([path]) => path.includes(name));
    if (entry) {
        return entry[1].default;
    }
    return "";
};

export const getSelectedKey = (pathname) => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/hotels")) return "hotels";
    if (pathname.startsWith("/about-us")) return "about";
    return "";
};
