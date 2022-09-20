import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

function RemoveNewline() {
  const [word, setWord] = useState("");

  const removeAllNewlines = () => setWord(word.replace(/[\n\r]/g, ""));
  const clear = () => setWord("");

  return (
    <>
      <Breadcrumb pageName="Remove Newline" />

      <section className="space-y-2">
        <textarea
          onChange={(e) => setWord(e.target.value)}
          value={word}
          placeholder="type something..."
          cols={30}
          rows={20}
          className="w-full resize-none rounded-md bg-white p-3 text-sm shadow-md ring-1 ring-stone-300 placeholder:text-base focus:shadow-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
        ></textarea>

        <div className="flex justify-end space-x-2">
          <button
            onClick={removeAllNewlines}
            type="button"
            className="rounded-md bg-black px-4 py-2 font-medium text-white hover:bg-black/90 active:bg-stone-700"
          >
            Remove All Newlines
          </button>
          <button
            onClick={clear}
            type="button"
            className="rounded-md bg-black px-4 py-2 font-medium text-white hover:bg-black/90 active:bg-stone-700"
          >
            Clear
          </button>
        </div>
      </section>
    </>
  );
}

export default RemoveNewline;
