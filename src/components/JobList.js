import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function JobList() {
  let [arrayList, setArrayList] = React.useState([]);
  useEffect(() => {
    (function readData() {
      axios
        .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test")
        // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
        // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
        .then((res) => setArrayList(res.data));
    })();
  });
  return (
    <React.Fragment>
      <table class="table mt-2">
        <tbody class="thead-light">
          {arrayList.map((data, ind) => (
            <tr key={ind}>
              <Link
                to={{
                  pathname: "/read",
                  state: {
                    name: data.company,
                    req: data,
                  },
                }}
              >
                <button class="btn btn-secondary mb-1 ">
                  <strong class="text-white">{data.company}</strong>
                </button>
              </Link>

              {/* {console.log(data.req.exp)} */}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default JobList;
