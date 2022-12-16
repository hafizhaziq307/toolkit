import React from "react";

let field_index = 1;

const initState = {
  tableName: "",
  fields: [{ id: 0, value: "", type: "string" }],
  rows: "",
  queries: [],
  result: "",
  totalRecords: 0,
  totalFields: 0,
};

class InsertGenerator extends React.Component {
  state = initState;

  updateField(newValue: any, id: number, attr: string) {
    let prevFields = this.state.fields;

    switch (attr) {
      case "type":
        prevFields.forEach((field) =>
          field.id === id ? (field.type = newValue) : field.type
        );
        break;

      case "value":
        prevFields.forEach((field) =>
          field.id === id ? (field.value = newValue) : field.type
        );
        break;
    }

    this.setState({ fields: prevFields });
  }

  deleteField(id: number) {
    let prevFields = this.state.fields;
    this.setState({
      fields: prevFields.filter((field) => field.id !== id),
    });
  }

  addField() {
    let prevFields = this.state.fields;
    this.setState({
      fields: [...prevFields, { id: field_index, value: "", type: "string" }],
    });
    field_index++;
  }

  updateRowValue(newValue: string) {
    this.setState({ rows: newValue });
  }

  displayResult() {
    this.setState({ queries: [] });

    const fields = this.state.fields;
    const tableName = this.state.tableName;
    const rows = this.state.rows;
    const fields_type = fields.map((field) => field.type);
    const columns = fields.map((field) => `\"${field.value}\"`).join(", ");

    let temp_rows: any = [];

    // by rows
    rows.split("\n").forEach((row) => {
      let temp_columns: any = [];
      // by columns
      row.split("||").map((column: any, index) => {
        if (fields_type[index] == "string")
          column = column === "null" || column === "" ? null : `\'${column}\'`;

        temp_columns.push(column);
      });

      const values = temp_columns.join(",");
      temp_rows.push(
        `INSERT INTO ${tableName} (${columns}) VALUES (${values});`
      );
    });

    this.setState({
      queries: temp_rows,
    });

    let res = "";
    temp_rows.forEach((row: any) => {
      res += row + "\n";
    });

    this.setState({
      result: res,
      totalRecords: this.state.queries.length + 1,
      totalFields: fields_type.length,
    });
  }

  render() {
    return (
      <>
        <header className="text-lg font-medium">Insert Generator</header>

        {/* table name */}
        <section className="dark-container">
          <input
            type="text"
            placeholder="table name"
            className="input w-full"
            onChange={(e) =>
              this.setState({ tableName: e.target.value.trim() })
            }
          />
        </section>

        {/* field input */}
        <section className="dark-container space-y-3">
          <header className="flex items-center justify-between">
            <div className="text-xl font-medium">Fields</div>
            <button
              type="button"
              onClick={() => this.addField()}
              className="btn-solid flex items-center"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>Add</div>
            </button>
          </header>

          <div className="space-y-3">
            {this.state.fields.map((field, index) => (
              <article className="flex gap-3" key={index}>
                <div className="bg-dark-700 ring-dark-300 grid w-14 place-content-center rounded-md ring-2">
                  {index + 1}
                </div>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="field name"
                  onChange={(e, id = field.id) =>
                    this.updateField(e.target.value.trim(), id, "value")
                  }
                />

                <select
                  className="input w-40"
                  value={field.type}
                  onChange={(e, id = field.id) =>
                    this.updateField(e.target.value.trim(), id, "type")
                  }
                >
                  <option value="string">string</option>
                  <option value="number">number</option>
                </select>

                {/* remove button */}
                <button
                  onClick={(e, id = field.id) => this.deleteField(id)}
                  type="button"
                  className="btn-solid"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* records input */}
        <section className="dark-container space-y-3">
          <header>
            <div className="text-lg font-medium">Records</div>
          </header>

          <div>
            <textarea
              cols={30}
              rows={20}
              placeholder="xx||xxxx||xxxx"
              className="input w-full"
              onChange={(e) => this.updateRowValue(e.target.value.trim())}
            ></textarea>
          </div>

          <button
            onClick={() => this.displayResult()}
            className="btn-solid w-full"
          >
            GENERATE SQL
          </button>
        </section>

        {/* result */}
        <section className="dark-container space-y-3">
          <header>
            <div className="text-lg font-medium">Result</div>
          </header>

          <div>
            <textarea
              cols={30}
              rows={20}
              className="input  w-full overflow-auto"
              value={this.state.result}
              readOnly
            ></textarea>
          </div>

          <footer className="divide-dark-300 grid grid-cols-2 divide-x-4">
            <div className="text-center">
              <div className="text-2xl font-medium text-amber-600">
                {this.state.totalRecords}
              </div>
              <div className="text-sm font-[350]">Records</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-amber-600">
                {this.state.totalFields}
              </div>
              <div className="text-sm font-[350]">Fields</div>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

export default InsertGenerator;
