// export const getImageUrl = (name = "") => {
//     const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
//         eager: true,
//         import: "default",
//     });
//     const entry = Object.entries(images).find(([path]) => path.includes(name));
//     const imageModule = Object.keys(images).find((path) => path.includes(name));
//     if (imageModule) {
//         console.log(new URL(imageModule, import.meta.url).href);
//         console.log(entry);
//         return new URL(imageModule, import.meta.url).href;
//     }
//     return "";
// };
export const getImageUrl = (name = "") => {
    const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true });

    const entry = Object.entries(images).find(([path]) => path.includes(name));
    if (entry) {
        return entry[1].default; // the processed URL of the image
    }
    return "";
};

export const getSelectedKey = (pathname) => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/hotels")) return "hotels";
    if (pathname.startsWith("/about-us")) return "about";
    return "";
};
