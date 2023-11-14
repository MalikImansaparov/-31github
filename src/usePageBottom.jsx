import {useEffect, useState} from "react";

export const usePageBottom = () => {
    const [reachedBottom, setReachedBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offsetHeight = document.documentElement.offsetHeight;
            const innerHeight = window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;

            const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 20;
            setReachedBottom(hasReachedBottom);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return reachedBottom;
}

export default function UsePageBottom() {
    const reachedBottom = usePageBottom();
    console.log("reachedBottom", reachedBottom);
    let arr = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19"
    ];
    return (
        <div className="App">
            <h1>Welcome to React Challenges</h1>
            {arr.map((index) => (
                <h2 key={index}>{index}</h2>
            ))}
            <footer>&copy; 2022 React challenges.live</footer>
        </div>
    );
}
