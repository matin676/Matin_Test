import React from "react";

export default function Interests() {
  return (
    <>
      {/*  Hobbies  */}

      <tr>
        <td>
          HOBBIES <br />
          <br />
          <br />
        </td>

        <td>
          Drawing
          <input type="checkbox" name="Hobby_Drawing" value="Drawing" />
          Singing
          <input type="checkbox" name="Hobby_Singing" value="Singing" />
          Dancing
          <input type="checkbox" name="Hobby_Dancing" value="Dancing" />
          Sketching
          <input type="checkbox" name="Hobby_Cooking" value="Cooking" />
          <br />
          Others
          <input type="checkbox" name="Hobby_Other" value="Other" />
          <input type="text" name="Other_Hobby" maxlength="30" />
        </td>
      </tr>

      {/* Course  */}
      <tr>
        <td>
          COURSES
          <br />
          APPLIED FOR
        </td>
        <td>
          BCA
          <input type="radio" name="Course_BCA" value="BCA" />
          B.Com
          <input type="radio" name="Course_BCom" value="B.Com" />
          B.Sc
          <input type="radio" name="Course_BSc" value="B.Sc" />
          B.A
          <input type="radio" name="Course_BA" value="B.A" />
        </td>
      </tr>
      {/*  Submit and Reset  */}
      <tr>
        <td colspan="2" align="center">
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </td>
      </tr>
    </>
  );
}
