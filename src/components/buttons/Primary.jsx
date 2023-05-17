export default function Primary(props) {
    return (
        <button
            onClick={props.onClick}
            className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
        >
            {props.title}
        </button>
    );
}