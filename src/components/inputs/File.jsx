export default function File(props) {
    return (
        <input
            type="file"
            ref={props.fileRef}
            onChange={props.onChange}
            accept={props.accept}
            className="block w-full overflow-hidden  rounded  bg-gray-700 p-1 text-sm file:mr-4 file:rounded file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-500"
        />
    );
}