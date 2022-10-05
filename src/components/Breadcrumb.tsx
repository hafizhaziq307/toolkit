import { Link } from "react-router-dom";

function Breadcrumb(props: any) {
  return (
    <header className="flex items-center space-x-2">
      <div className="text-lg">
        <Link to="/" className="text-lg font-medium">
          Home
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
      <div className="text-lg font-medium  text-amber-600">
        {props.pageName}
      </div>
    </header>
  );
}

export default Breadcrumb;
