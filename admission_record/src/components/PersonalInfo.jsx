import React from "react";

export default function PersonalInfo() {
  return (
    <>
      {/* First Name */}
      <tr>
        <td>FIRST NAME</td>
        <td>
          <input type="text" name="First_Name" maxlength="30" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>

      {/*  Last Name  */}
      <tr>
        <td>LAST NAME</td>
        <td>
          <input type="text" name="Last_Name" maxlength="30" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>

      {/*  Date Of Birth */}
      <tr>
        <td>DATE OF BIRTH</td>

        <td>
          <input type="date" name="Birthdate" id="Birthdate_Id" />
        </td>
      </tr>

      {/* Gender */}
      <tr>
        <td>GENDER</td>
        <td>
          Male <input type="radio" name="Gender" value="Male" />
          Female <input type="radio" name="Gender" value="Female" />
        </td>
      </tr>
    </>
  );
}
