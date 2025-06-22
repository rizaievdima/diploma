import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../../store/slices/globalSlice";

const AboutUs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage("about"));
    }, []);

    return (
        <div>
            <h1>About Us page</h1>
        </div>
    );
};

export default AboutUs;
