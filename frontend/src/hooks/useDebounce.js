import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 1000) {
    const [debouncedValue, setDebauncedValue] = useState(value);

    useEffect(() => {
        const handlerId = setTimeout(() => {
            setDebauncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handlerId);
        };
    }, [value, delay]);

    return debouncedValue;
}
