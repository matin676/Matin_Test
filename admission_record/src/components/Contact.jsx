import React from "react";

export default function Contact() {
  return (
    <>
      {/*  Email Id  */}
      <tr>
        <td>EMAIL ID</td>
        <td>
          <input type="text" name="Email_Id" maxlength="100" />
        </td>
      </tr>

      {/*  Mobile Number*/}
      <tr>
        <td>MOBILE NUMBER</td>
        <td>
          <input type="text" name="Mobile_Number" maxlength="10" />
          (10 digit number)
        </td>
      </tr>
      {/*  Address  */}
      <tr>
        <td>
          ADDRESS <br />
          <br />
          <br />
        </td>
        <td>
          <textarea name="Address" rows="4" cols="30"></textarea>
        </td>
      </tr>

      {/*  City  */}
      <tr>
        <td>CITY</td>
        <td>
          <input type="text" name="City" maxlength="30" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>

      {/*  Pin Code  */}
      <tr>
        <td>PIN CODE</td>
        <td>
          <input type="text" name="Pin_Code" maxlength="6" />
          (6 digit number)
        </td>
      </tr>

      {/*  State  */}
      <tr>
        <td>STATE</td>
        <td>
          <input type="text" name="State" maxlength="30" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>

      {/*  Country */}
      <tr>
        <td>COUNTRY</td>
        <td>
          <input type="text" name="Country" value="India" readonly="readonly" />
        </td>
      </tr>
    </>
  );
}
