import Link from "next/link";

export const PageTitle = (props: any) => {
  if (props.title == "Home") {
    return (
      <header className="font-medium">
        <div>{props.title}</div>
      </header>
    );
  } else {
    return (
      <header className="flex gap-2 font-medium">
        <Link href="/">
          <div className="text-blue-500 underline underline-offset-2">Home</div>
        </Link>
        <div>&middot;</div>
        <div>{props.title}</div>
      </header>
    );
  }
};
