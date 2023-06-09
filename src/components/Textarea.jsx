import { isEmpty } from "../helpers";

export default function Textarea(props) {
    return (
        <textarea
            onChange={props.onChange}
            value={props.value}
            rows={(isEmpty(props.rows)) ? 20 : props.rows}
            className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="Write something..."
        ></textarea>
    );
}