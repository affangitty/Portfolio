import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="educationSection" id="Education">
      <h1 id="education">Education</h1>
      <table className="custom-table" border="2">
        <thead>
          <tr>
            <th className="table-th">Qualification</th>
            <th className="table-th">Year</th>
            <th className="table-th">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-td">
              Vellore Institute of Technology, Vellore
              <div>B.Tech in Computer Science and Engineering</div>
            </td>
            <td className="table-td">2022-2026</td>
            <td className="table-td">8.42</td>
          </tr>
          <tr>
            <td className="table-td">
              Shri Ram Global School, Bangalore
              <div>XII(CBSE)</div>
            </td>
            <td className="table-td">2022</td>
            <td className="table-td">85.6%</td>
          </tr>
          <tr>
            <td className="table-td">
              Narayana Olympiad School, Bangalore
              <div>X(CBSE)</div>
            </td>
            <td className="table-td">2020</td>
            <td className="table-td">87.6%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
