import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { checkData } from "../utils/service";
import { useFormik } from "formik";


const CollegeListEdit = () => {

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("/college-list/get-state");
        setStates(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStates();
  }, []);

  const formik = useFormik({
    initialValues: {},

    onsubmit: (values) => {
      console.log('values', values);
    }
  })


  return (
    <>
      <Header page={'Edit College'} />
      <section className="content">
        <div className="row">
          <div className="col">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Quick Example</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <form>
                  <table className="table table-hover text-nowrap">
                    <tbody>
                      <tr>
                        <th>State</th>
                        <td>
                          <select class="form-control" name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <th>City</th>
                        <td>
                          <select class="form-control" name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <th>Top NIRF college</th>
                        <td>
                          <div className="form-check">
                            <input
                              required
                              type="radio"
                              className="form-check-input"
                              id="yesRadio"
                              name="topNIRF"
                              value="1"
                            // checked={data?.NIRF === 1 || isTopNIRFCollege === "1"}
                            // onChange={() => handleRadioChange("1")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="yesRadio"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              required
                              type="radio"
                              className="form-check-input"
                              id="noRadio"
                              name="topNIRF"
                              value="0"
                            // checked={data?.NIRF === 0 || isTopNIRFCollege === "0"}
                            // onChange={() => handleRadioChange("0")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="noRadio"
                            >
                              No
                            </label>
                          </div>


                        </td>
                      </tr>

                      <tr>
                        <th>Top college</th>
                        <td>
                          <div className="form-check">
                            <input
                              required
                              type="radio"
                              className="form-check-input"
                              id="yesRadio"
                              name="topNIRF"
                              value="1"
                            // checked={data?.NIRF === 1 || isTopNIRFCollege === "1"}
                            // onChange={() => handleRadioChange("1")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="yesRadio"
                            >
                              Top Private College
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              required
                              type="radio"
                              className="form-check-input"
                              id="noRadio"
                              name="topNIRF"
                              value="0"
                            // checked={data?.NIRF === 0 || isTopNIRFCollege === "0"}
                            // onChange={() => handleRadioChange("0")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="noRadio"
                            >
                              Top Government College
                            </label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>College Image</th>
                        <td>
                          <input
                            required
                            type="file"
                            className="form-control"
                            id="college_image"
                            name="college_image"
                            placeholder="College Image URL"
                          // onChange={(e) => setcollegeimage(e.target.files[0])}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Background Image</th>
                        <td>
                          <input
                            required
                            type="file"
                            className="form-control"
                            id="college_image"
                            name="background_image"
                            placeholder="College Image URL"
                          // onChange={(e) => setcollegeimage(e.target.files[0])}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th>College Name</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="college_name"
                            name="college_name"
                            placeholder="Enter College Name"
                          // value={collegename}
                          // onChange={(e) => setcollegename(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>College Location</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="college_name"
                            name="college_name"
                            placeholder="Enter College Name"
                          // value={collegename}
                          // onChange={(e) => setcollegename(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th>College Type</th>
                        <td>
                          <select
                            required
                            className="form-control"
                          // value={collegeType}
                          // onChange={(e) => setCollegeType(e.target.value)}
                          >
                            <option value="" key="0">
                              Select College Type
                            </option>
                            {/* {collegeTypes.map((item) => (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            ))} */}
                          </select>
                          <div className="invalid-feedback">
                            Select College type!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Established Year</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="established_year"
                            name="established_year"
                            placeholder="Enter Established Year"
                          // value={establishedYear}
                          // onChange={(e) => setEstablishedYear(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Enter Established Year!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Total Fees</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="total_fees"
                            name="total_fees"
                            placeholder="Enter Total Fees"
                          // value={totalFees}
                          // onChange={(e) => setTotalFees(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Total Fees is Required!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Ranking</th>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="ranking"
                            name="ranking"
                            placeholder="Enter Ranking"
                          // value={ranking}
                          // onChange={(e) => setRanking(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Ranking is Required!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Highlight Program</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="program"
                            name="program"
                            placeholder="Enter Highlight Program"
                          // value={program}
                          // onChange={(e) => setProgram(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Highlight Program is Required!
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Highest Placement</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="placement"
                            name="placement"
                            placeholder="Enter Highlight Placement"
                          // value={placement}
                          // onChange={(e) => setPlacement(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Placement is Required!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Brochure</th>
                        <td>
                          <input
                            required
                            type="file"
                            className="form-control"
                            id="brochure"
                            name="brochure"
                          // onChange={(e) => setBrochure(e.target.files[0])}
                          />
                          <div className="invalid-feedback">
                            Brochure is Required!
                          </div>

                          {data?.brochure ? <img
                            src={
                              STATIC_URL +
                              "/files/" +
                              data?.brochure
                            }
                            height={"150px"}
                          /> : ""}

                          {/* {data?.brochure ? <small>{data.brochure}</small> : ""} */}
                        </td>
                      </tr>

                      <tr>
                        <th>Specialization</th>

                        {checkData.map((check) => {
                          return (
                            <td>
                              <div className="form-check ">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="marketing"
                                // checked={mba_marketing}
                                // onChange={(e) => setmba_marketing(!mba_marketing)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ac_classroom"
                                >
                                  {check.name}
                                </label>

                              </div>
                            </td>
                          )
                        })}
                      </tr>

                      <tr>
                        <th>Programs</th>
                        <td>
                          <table>
                            <thead>
                              <tr>
                                <th>Program</th>
                                <th>Fees</th>
                                <th>No. of Seats</th>
                                <th>Internship</th>
                                <th>Scholarships</th>
                                <th>
                                  <button
                                    className="btn btn-outline-success"
                                  // onClick={(e) => {
                                  //   e.preventDefault();
                                  //   addTableRows();
                                  // }}
                                  >
                                    +
                                  </button>
                                </th>
                              </tr>
                            </thead>
                          </table>
                          <tbody>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                id="program_name"
                                placeholder="Program Name"
                                name="name"
                              // value={name}
                              // onChange={(e) => handleChange(index, e)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                id="program_name"
                                placeholder="Program Name"
                                name="name"
                              // value={name}
                              // onChange={(e) => handleChange(index, e)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                id="program_name"
                                placeholder="Program Name"
                                name="name"
                              // value={name}
                              // onChange={(e) => handleChange(index, e)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                id="program_name"
                                placeholder="Program Name"
                                name="name"
                              // value={name}
                              // onChange={(e) => handleChange(index, e)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                id="program_name"
                                placeholder="Program Name"
                                name="name"
                              // value={name}
                              // onChange={(e) => handleChange(index, e)}
                              />
                            </td>
                            <td></td>
                          </tbody>
                        </td>
                      </tr>

                      <tr>
                        <th>Admissions </th>
                        <td style={{ display: "flex" }}>Eligibility</td>
                        <tr>

                          <div style={{ display: "flex" }}>
                            <td>
                              <span
                                id="sr_no"
                                className="btn-secondary"
                              >12</span>
                            </td>
                            <td>
                              <input
                                style={{ width: "440px", marginLeft: "13px" }}
                                type="text"
                                className="form-control"
                                id="text"
                                placeholder=""
                              // value={field.text}
                              // onChange={(e) =>
                              //   updateFieldValueAdm_Elg(
                              //     index,
                              //     "text",
                              //     e.target.value
                              //   )
                              // }
                              />
                            </td>
                          </div>
                          <td>
                            <button
                              type="button"
                              name="add_row"
                              id="add_row"
                              className="btn btn-success btn-xs"
                            // onClick={addInputFieldAdm_Elg}
                            >
                              +
                            </button>
                          </td>

                          <td>
                            <button
                              type="button"
                              name="add_row"
                              id="add_row"
                              className="btn btn-danger btn-xs remove_row"
                            // onClick={() => removeInputFieldAdm_Elg(index)}
                            >
                              X
                            </button>
                          </td>

                        </tr>

                      </tr>

                      <tr>
                        <th>Campus Facilities</th>

                      </tr>
                      <tr>
                        <th>Gallery</th>
                        <td>
                          <div style={{ display: "flex" }}>
                            <input
                              type="file"
                              name="gallery"
                              multiple
                            // onChange={(e) => {
                            //   const files = e.target.files;
                            //   setGallary(files);
                            // }}
                            />
                            {/* {data?.brochure ? <img
                              src={
                                STATIC_URL +
                                "/images/" +
                                JSON.parse(data?.gallery_links.split(','))
                              }
                              height={"150px"}
                            /> : ""} */}


                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Social Media</th>
                        <td style={{ display: "flex" }}> facebook</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="Facebook URL"
                          // value={sm_fb}
                          // onChange={(e) => setsm_fb(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> youtube</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="YouTube URL"
                          // value={sm_ytb}
                          // onChange={(e) => setsm_ytb(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> twitter</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="Twitter URL"
                          // value={sm_ttr}
                          // onChange={(e) => setsm_ttr(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> linkedIn</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="Enter LinkedIn"
                          // value={sm_li}
                          // onChange={(e) => setsm_li(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th>Key Highlights </th>
                        <td style={{ display: "flex" }}>Eligibility</td>
                        <tr>

                          <div style={{ display: "flex" }}>
                            <td>
                              <span
                                id="sr_no"
                                className="btn-secondary"
                              >12</span>
                            </td>
                            <td>
                              <input
                                style={{ width: "440px", marginLeft: "13px" }}
                                type="text"
                                className="form-control"
                                id="text"
                                placeholder=""
                              // value={field.text}
                              // onChange={(e) =>
                              //   updateFieldValueAdm_Elg(
                              //     index,
                              //     "text",
                              //     e.target.value
                              //   )
                              // }
                              />
                            </td>
                          </div>
                          <td>
                            <button
                              type="button"
                              name="add_row"
                              id="add_row"
                              className="btn btn-success btn-xs"
                            // onClick={addInputFieldAdm_Elg}
                            >
                              +
                            </button>
                          </td>

                          <td>
                            <button
                              type="button"
                              name="add_row"
                              id="add_row"
                              className="btn btn-danger btn-xs remove_row"
                            // onClick={() => removeInputFieldAdm_Elg(index)}
                            >
                              X
                            </button>
                          </td>

                        </tr>

                      </tr>

                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CollegeListEdit