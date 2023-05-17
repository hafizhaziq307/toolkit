export default function Text(props) {
    return (
        <input
            type="text"
            className="w-full rounded bg-gray-700 p-2 placeholder:italic"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            maxLength={props.maxLength}
        />
    );
}