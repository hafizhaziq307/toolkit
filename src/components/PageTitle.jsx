import { Link } from "react-router-dom";

export default function PageTitle(props) {
    if (props.title == "Home") {
        return (
            <header className="font-medium">
                <div>{props.title}</div>
            </header>
        );
    } else {
        return (
            <header className="flex gap-2 font-medium">
                <Link to="/">
                    <div className="text-blue-500 underline underline-offset-2">Home</div>
                </Link>
                <div>&middot;</div>
                <div>{props.title}</div>
            </header>
        );
    }
}