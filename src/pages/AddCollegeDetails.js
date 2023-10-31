import { useEffect, useState } from "react";
import axios from "../api/axios";
import Header from "../components/header/Header";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { toast } from "react-toastify";
import { json, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { STATIC_URL } from "../config/config";

const TableRows = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { name, fees, seats, internship, scholarship } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            className="form-control"
            id="program_name"
            placeholder="Program Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="fees"
            name="fees"
            placeholder="Enter Fees"
            value={fees}
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="seats"
            name="seats"
            placeholder="Enter Available Seats"
            value={seats}
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="internship"
            name="internship"
            placeholder="Enter Internship"
            value={internship}
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="scholarship"
            name="scholarship"
            placeholder="Enter Scholarship"
            value={scholarship}
            onChange={(e) => handleChange(index, e)}
          />
        </td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTableRows(index)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });
};

const AddCollegeDetails = () => {

  const { pathname } = useLocation()

  console.log('path', pathname);

  const data = useLocation().state;
  const navigate = useNavigate();
  // const [overview, setoverview] = useState(data?.overview || "");
  // const [key_highlight, setkey_highlight] = useState(data?.key_highlight || "");
  // const [adm_elg, setadm_elg] = useState(data?.adm_elg || "");
  const [gallary, setGallary] = useState([]);
  const [sw_sc, setsw_sc] = useState(data?.sw_sc || "");
  const [sw_cb, setsw_cb] = useState(data?.sw_cb || "");
  const [sw_pi, setsw_pi] = useState(data?.sw_pi || "");
  const [sw_ap, setsw_ap] = useState(data?.sw_ap || "");
  const [sw_we, setsw_we] = useState(data?.sw_we || "");
  const [placements, setplacements] = useState(data?.placements || "");
  const [sm_fb, setsm_fb] = useState(data?.sm_fb || "");
  const [sm_li, setsm_li] = useState(data?.sm_li || "");
  const [sm_ytb, setsm_ytb] = useState(data?.sm_ytb || "");
  const [sm_ttr, setsm_ttr] = useState(data?.sm_ttr || "");
  const [cf_ac, setcf_ac] = useState(!!data?.cf_ac || false);
  const [cf_audi, setcf_audi] = useState(!!data?.cf_audi || false);
  const [cf_cafe, setcf_cafe] = useState(!!data?.cf_cafe || false);
  const [cf_gym, setcf_gym] = useState(!!data?.cf_gym || false);
  const [cf_hmf, setcf_hmf] = useState(!!data?.cf_hmf || false);
  const [cf_hostel, setcf_hostel] = useState(!!data?.cf_hostel || false);
  const [cf_labs, setcf_labs] = useState(!!data?.cf_labs || false);
  const [cf_library, setcf_library] = useState(!!data?.cf_library || false);
  const [cf_sports, setcf_sports] = useState(!!data?.cf_sports || false);
  const [cf_wifi, setcf_wifi] = useState(!!data?.cf_wifi || false);
  const [collegename, setcollegename] = useState(data?.college_name || "");
  const [location, setlocation] = useState(data?.location || "");
  const [collegeimage, setcollegeimage] = useState(data?.college_image || "");
  const [rowsData, setRowsData] = useState([]);
  const [mba_marketing, setmba_marketing] = useState(
    !!data?.mba_marketing || false
  );
  const [mba_finance, setmba_finance] = useState(!!data?.mba_finance || false);
  const [mba_hr, setmba_hr] = useState(!!data?.mba_hr || false);
  const [mba_ruralManagement, setmba_ruralManagement] = useState(
    !!data?.mba_ruralManagement || false
  );
  const [mba_operations, setmba_operations] = useState(
    !!data?.mba_operations || false
  );
  const [mba_healthcare, setmba_healthcare] = useState(
    !!data?.mba_healthcare || false
  );
  const [mba_internationalBusiness, setmba_internationalBusiness] = useState(
    !!data?.mba_internationalBusiness || false
  );
  const [mba_businessAnalytics, setmba_businessAnalytics] = useState(
    !!data?.mba_businessAnalytics || false
  );
  const [mba_bankingFinance, setmba_bankingFinance] = useState(
    !!data?.mba_bankingFinance || false
  );
  const [mba_advertisingCommunications, setmba_advertisingCommunications] =
    useState(!!data?.mba_advertisingCommunications || false);
  const [mba_agriBusiness, setmba_agriBusiness] = useState(
    !!data?.mba_agriBusiness || false
  );
  const [
    mba_corporateSocialResponsibility,
    setmba_corporateSocialResponsibility,
  ] = useState(!!data?.mba_corporateSocialResponsibility || false);
  const [mba_digitalMarketing, setmba_digitalMarketing] = useState(
    !!data?.mba_digitalMarketing || false
  );
  const [mba_entrepreneurship, setmba_entrepreneurship] = useState(
    !!data?.mba_entrepreneurship || false
  );
  const [mba_energy, setmba_energy] = useState(!!data?.mba_energy || false);
  const [mba_aviation, setmba_aviation] = useState(
    !!data?.mba_aviation || false
  );
  const [mba_event, setmba_event] = useState(!!data?.mba_event || false);
  const [mba_familyBusiness, setmba_familyBusiness] = useState(
    !!data?.mba_familyBusiness || false
  );
  const [mba_fashionDesign, setmba_fashionDesign] = useState(
    !!data?.mba_fashionDesign || false
  );
  const [mba_financeManagement, setmba_financeManagement] = useState(
    !!data?.mba_financeManagement || false
  );
  const [mba_importExport, setmba_importExport] = useState(
    !!data?.mba_importExport || false
  );


  const [mba_informationTechnology, setmba_informationTechnology] = useState(
    !!data?.mba_informationTechnology || false
  );


  // New states for new fields

  const [supply_Chain_logistics_management, setsupply_Chain_logistics_management] = useState(
    !!data?.supply_Chain_logistics_management || false
  );

  const [infrastructure, setinfrastructure] = useState(
    !!data?.infrastructure || false
  );

  const [pharmaceutical_management, setpharmaceutical_management] = useState(
    !!data?.pharmaceutical_management || false
  );

  const [oil_gas, setoil_gas] = useState(
    !!data?.oil_gas || false
  );

  const [sports_management, setsports_management] = useState(
    !!data?.sports_management || false
  );

  const [retail, setretail] = useState(
    !!data?.retail || false
  );
  const [telecom, settelecom] = useState(
    !!data?.telecom || false
  );

  const [textile, settextile] = useState(
    !!data?.textile || false
  );
  const [tourism_ospitality, settourism_ospitality] = useState(
    !!data?.tourism_ospitality || false
  );
  const [public_policy, setpublic_policy] = useState(
    !!data?.public_policy || false
  );
  const [banking_insurance, setbanking_insurance] = useState(
    !!data?.banking_insurance || false
  );
  const [service_management, setservice_management] = useState(
    !!data?.service_management || false
  );

  // new fields ends

  const [backgroundImage, setBackgroundImage] = useState(
    data?.background_image || null
  );
  const [establishedYear, setEstablishedYear] = useState(
    data?.established_year || ""
  );
  const [isTopNIRFCollege, setIsTopNIRFCollege] = useState(0);
  const [topCollege, setTopCollege] = useState(null);

  const handleRadioChange = (value) => {
    setIsTopNIRFCollege(value);
  };
  const [collegeType, setCollegeType] = useState(data?.college_type || "");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(data?.tags?.split(",") || []);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateId, setStateId] = useState(data?.state_id || "");
  const [cityId, setCityId] = useState(data?.city_id || "");
  const [isSubmit, setIsSubmit] = useState(false);
  const [totalFees, setTotalFees] = useState(data?.total_fees || "");
  const [ranking, setRanking] = useState(data?.ranking || "");
  const [program, setProgram] = useState(data?.program || "");
  const [placement, setPlacement] = useState(data?.placement || "");
  const [size, setSize] = useState(data?.size || "");
  const [brochure, setBrochure] = useState(data?.brochure || "");
  const [acceptenceRate, setAcceptenceRate] = useState(
    data?.acceptence_rate || ""
  );
  const { auth } = useAuth();

  const collegeTypes = ["Private", "Government"];
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.post(
          "/admin/colleges/fetch-programs",
          { college_id: data?.id },
          {
            headers: { authorization: "Bearer " + auth.token },
          }
        );
        let rows = response.data.programs.map((item) => {
          return {
            id: item.id,
            name: item.program_name,
            fees: item.fees,
            seats: item.seats,
            internship: item.internship,
            scholarship: item.scholorships,
          };
        });
        rows.length && setRowsData(rows);
        // response?.data?.success &&
      } catch (err) {
        console.log(err);
      }
    };
    fetchPrograms();
  }, [data]);


  /** ADD MULTIPLE FIELDS CODE START FOR OVERVIEW*/

  const [overviewFields, setOverviewFields] = useState([
    {
      sr_no: 1,
      text: ""
    },
  ]);
  const addInputField = () => {
    const sr_no = overviewFields.length + 1;
    const newField = {
      sr_no,
      text: "",
    };
    setOverviewFields((prevFields) => [...prevFields, newField]);
  };

  const removeInputField = (index) => {
    setOverviewFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const updateFieldValue = (index, field, value) => {
    setOverviewFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][field] = value;
      return updatedFields;
    });
  };
  /**END CODE FOR MULTIPLE FIELDS */

  /** ADD MULTIPLE FIELDS CODE START FOR RANKING AND Accreditations*/

  const [ran_Acc, setRan_Acc] = useState([
    {
      sr_no: 1,
      text: ""
    },
  ]);
  const addInputFieldRan_Acc = () => {
    const sr_no = ran_Acc.length + 1;
    const newField = {
      sr_no,
      text: "",
    };
    setRan_Acc((prevFields) => [...prevFields, newField]);
  };

  const removeInputFieldRan_Acc = (index) => {
    setRan_Acc((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const updateFieldValueRan_Acc = (index, field, value) => {
    setRan_Acc((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][field] = value;
      return updatedFields;
    });
  };
  /**END CODE FOR MULTIPLE FIELDS */
  /** ADD MULTIPLE FIELDS CODE START FOR Key Highlights*/

  const [key_High, setKey_High] = useState([
    {
      sr_no: 1,
      text: ""
    },
  ]);
  const addInputFieldKey_High = () => {
    const sr_no = key_High.length + 1;
    const newField = {
      sr_no,
      text: "",
    };
    setKey_High((prevFields) => [...prevFields, newField]);
  };

  const removeInputFieldKey_High = (index) => {
    setKey_High((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const updateFieldValueKey_High = (index, field, value) => {
    setKey_High((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][field] = value;
      return updatedFields;
    });
  };
  /**END CODE FOR MULTIPLE FIELDS */
  /** ADD MULTIPLE FIELDS CODE START FOR Admission Eligibility*/

  const [adm_Elg, setAdm_Elg] = useState([
    {
      sr_no: 1,
      text: ""
    },
  ]);
  const addInputFieldAdm_Elg = () => {
    const sr_no = adm_Elg.length + 1;
    const newField = {
      sr_no,
      text: "",
    };
    setAdm_Elg((prevFields) => [...prevFields, newField]);
  };

  const removeInputFieldAdm_Elg = (index) => {
    setAdm_Elg((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const updateFieldValueAdm_Elg = (index, field, value) => {
    setAdm_Elg((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][field] = value;
      return updatedFields;
    });
  };
  /**END CODE FOR MULTIPLE FIELDS */

  /**Code For Modify This 4 objects to right format */
  function modifyObject(inputArray) {
    const resultArray = inputArray.map(item => item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase());
    return resultArray;
  }
  /**END FUNCTION */




  const addTableRows = () => {
    const rowsInput = {
      id: 0,
      name: "",
      fees: "",
      seats: "",
      internship: "",
      scholarship: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  useEffect(() => {
    addTableRows();
    const fetchTags = async () => {
      try {
        const response = await axios.get("/admin/tags/list");

        setTags(
          response?.data?.tags?.map((item) => ({
            label: item.tag_name,
            key: item.tag_name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);

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

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `/college-list/get-city-by-state-id/${stateId}`
        );
        setCities(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (stateId) {
      fetchCities();
    }
  }, [stateId]);

  const addCollege = async () => {
    if (isSubmit) return;
    setIsSubmit(true);

    if (
      !collegename ||
      !placement ||
      !totalFees ||
      !program ||
      !ranking ||
      !placements ||
      !tag ||
      !collegeimage ||
      !size ||
      !acceptenceRate ||
      !brochure ||
      !backgroundImage
    ) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      // return;
    }

    try {
      console.log(isTopNIRFCollege);
      const formData = new FormData();
      formData.append("id", data?.id);
      formData.append("college_name", collegename);
      formData.append("location", location);
      formData.append("established_year", establishedYear);
      formData.append("college_type", collegeType);
      formData.append("state_id", stateId);
      formData.append("city_id", cityId);
      formData.append("college_image", collegeimage || body?.college_image);
      formData.append(
        "background_image",
        backgroundImage || body?.background_image
      );
      formData.append("overview[]", modifyObject(overviewFields));
      formData.append("key_highlight[]", modifyObject(key_High));
      formData.append("adm_elg[]", modifyObject(adm_Elg));
      formData.append("rankingArray[]", modifyObject(ran_Acc));
      formData.append("placement", placement);
      formData.append("ranking", ranking);
      formData.append("totalFees", totalFees);
      formData.append("NIRF", isTopNIRFCollege);
      formData.append("top_collage", topCollege);
      // formData.append("size", size);
      formData.append("acceptence_rate", acceptenceRate);
      formData.append("brochure", brochure || body?.brochure);
      formData.append("program", program);
      formData.append("sw_sc", sw_sc);
      formData.append("sw_cb", sw_cb);
      formData.append("sw_pi", sw_pi);
      formData.append("sw_ap", sw_ap);
      formData.append("sw_we", sw_we);
      formData.append("placements", placements);
      formData.append("sm_fb", sm_fb);
      formData.append("sm_li", sm_li);
      formData.append("sm_ytb", sm_ytb);
      formData.append("sm_ttr", sm_ttr);
      formData.append("cf_ac", +cf_ac);
      formData.append("cf_audi", +cf_audi);
      formData.append("cf_cafe", +cf_cafe);
      formData.append("cf_gym", +cf_gym);
      formData.append("cf_hmf", +cf_hmf);
      formData.append("cf_hostel", +cf_hostel);
      formData.append("cf_labs", +cf_labs);
      formData.append("cf_library", +cf_library);
      formData.append("cf_sports", +cf_sports);
      formData.append("cf_wifi", +cf_wifi);
      const galleryArray = Array.from(gallary);
      galleryArray.forEach((file, index) => {
        formData.append(`gallary-${index}`, file);
      });
      formData.append("programs", JSON.stringify(rowsData));
      formData.append("tag", tag.join());
      formData.append("mba_marketing", +mba_marketing);
      formData.append("mba_finance", +mba_finance);
      formData.append("mba_hr", +mba_hr);
      formData.append("mba_ruralManagement", +mba_ruralManagement);
      formData.append("mba_operations", +mba_operations);
      formData.append("mba_healthcare", +mba_healthcare);
      formData.append("mba_internationalBusiness", +mba_internationalBusiness);
      formData.append("mba_businessAnalytics", +mba_businessAnalytics);
      formData.append("mba_bankingFinance", +mba_bankingFinance);
      formData.append(
        "mba_advertisingCommunications",
        +mba_advertisingCommunications
      );
      formData.append("mba_agriBusiness", +mba_agriBusiness);
      formData.append(
        "mba_corporateSocialResponsibility",
        +mba_corporateSocialResponsibility
      );
      formData.append("mba_digitalMarketing", +mba_digitalMarketing);
      formData.append("mba_entrepreneurship", +mba_entrepreneurship);
      formData.append("mba_energy", +mba_energy);
      formData.append("mba_aviation", +mba_aviation);
      formData.append("mba_event", +mba_event);
      formData.append("mba_familyBusiness", +mba_familyBusiness);
      formData.append("mba_fashionDesign", +mba_fashionDesign);
      formData.append("mba_financeManagement", +mba_financeManagement);
      formData.append("mba_importExport", +mba_importExport);
      formData.append("mba_informationTechnology", +mba_informationTechnology);

      // New fields form apending
      formData.append("supply_Chain_logistics_management", +supply_Chain_logistics_management);
      formData.append("infrastructure", +infrastructure);
      formData.append("pharmaceutical_management", +pharmaceutical_management);
      formData.append("oil_gas", +oil_gas);
      formData.append("sports_management", +sports_management);

      formData.append("retail", +retail);
      formData.append("telecom", +telecom);
      formData.append("textile", +textile);
      formData.append("tourism_ospitality", +tourism_ospitality);
      formData.append("public_policy", +public_policy);
      formData.append("banking_insurance", +banking_insurance);
      formData.append("service_management", +service_management);
      // End of New fields form apending


      let url;
      if (data) {
        url = "/admin/colleges/update";
      } else {
        url = "/admin/colleges/add";
      }
      console.log(formData);
      const request = axios.post(url, formData, {
        headers: { authorization: "Bearer " + auth.token },
      });
      const response = await toast.promise(request, {
        pending: `${data ? "Updating" : "Adding"} College Details`,
        success: `College ${data ? "Updated" : "Added"} Successfully!`,
        error: "Something went Wrong!",
      });
      // navigate("/colleges/list");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <>
      <Header page={pathname === '/colleges/edit' ? 'Edit College' : "Add College"} />
      <section className="content">
        <div className="row">
          <div className="col">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Quick Example</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <form
                  enctype="multipart/form-data"
                  className="needs-validation"
                  noValidate
                >
                  <table className="table table-hover text-nowrap">
                    <tbody>
                      <tr>
                        <th>State</th>
                        <td>
                          <select
                            className="form-control"
                            value={stateId}
                            onChange={(e) => {
                              setStateId(e.target.value);
                            }}

                          >
                            <option value="" key="0">
                              Select State
                            </option>
                            {states.map((item) => (
                              <option value={item.id} key={item}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          <div className="invalid-feedback">Select State!</div>
                        </td>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>
                          <select
                            required
                            className="form-control"
                            value={cityId}
                            onChange={(e) => {
                              setCityId(e.target.value);
                            }}
                          >
                            <option value="" key="0">
                              Select City
                            </option>
                            {cities.map((item) => (
                              <option value={item.id} key={item}>
                                {item.city}
                              </option>
                            ))}
                          </select>
                          <div className="invalid-feedback">Select City!</div>
                        </td>
                      </tr>
                      <tr>
                        <th>Top NIRF college</th>

                        {console.log('datadatadata', data && data)}


                        <td>
                          <div className="form-check">
                            <input
                              required
                              type="radio"
                              className="form-check-input"
                              id="yesRadio"
                              name="topNIRF"
                              value="1"
                              checked={data?.NIRF === 1 || isTopNIRFCollege === "1"}
                              onChange={() => handleRadioChange("1")}
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
                              checked={data?.NIRF === 0 || isTopNIRFCollege === "0"}
                              onChange={() => handleRadioChange("0")}
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
                              name="topPrivate"
                              value="Yes"
                              checked={data?.top_collage === "private" || topCollege === "private"}
                              onChange={() => setTopCollege("private")}
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
                              name="topGovernment"
                              value="No"
                              checked={data?.top_collage === "government" || topCollege === "government"}
                              onChange={() => setTopCollege("government")}
                            />

                            <label
                              className="form-check-label"
                              htmlFor="noRadio"
                            >
                              Top Government College
                            </label>
                            <div className="invalid-feedback">
                              Select Any One!
                            </div>
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
                            onChange={(e) => setcollegeimage(e.target.files[0])}
                          />
                          <div className="invalid-feedback">
                            College Image is Required!
                          </div>
                          {data?.college_image ? (
                            <>
                              <br />
                              <img
                                src={
                                  STATIC_URL + "/images/" + data?.college_image
                                }
                                height={"150px"}
                              />
                            </>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Background Image</th>
                        <td>
                          <input
                            required
                            type="file"
                            className="form-control"
                            id="background_image"
                            name="background_image"
                            multiple
                            onChange={(e) =>
                              setBackgroundImage(e.target.files[0])
                            }
                          />
                          <div className="invalid-feedback">
                            Background Image is Required!
                          </div>
                          {data?.college_image ? (
                            <>
                              <br />
                              <img
                                src={
                                  STATIC_URL +
                                  "/images/" +
                                  data?.background_image
                                }
                                height={"150px"}
                              />
                            </>
                          ) : (
                            ""
                          )}
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
                            value={collegename}
                            onChange={(e) => setcollegename(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            College Name is Required!
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>College Location</th>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="college_location"
                            name="college_location"
                            placeholder="Enter College Location"
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th>College Type</th>
                        <td>
                          <select
                            required
                            className="form-control"
                            value={collegeType}
                            onChange={(e) => setCollegeType(e.target.value)}
                          >
                            <option value="" key="0">
                              Select College Type
                            </option>
                            {collegeTypes.map((item) => (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            ))}
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
                            value={establishedYear}
                            onChange={(e) => setEstablishedYear(e.target.value)}
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
                            value={totalFees}
                            onChange={(e) => setTotalFees(e.target.value)}
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
                            required
                            type="text"
                            className="form-control"
                            id="ranking"
                            name="ranking"
                            placeholder="Enter Ranking"
                            value={ranking}
                            onChange={(e) => setRanking(e.target.value)}
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
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
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
                            value={placement}
                            onChange={(e) => setPlacement(e.target.value)}
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
                            onChange={(e) => setBrochure(e.target.files[0])}
                          />
                          <div className="invalid-feedback">
                            Brochure is Required!
                          </div>

                          {data?.brochure ? <img
                            src={
                              STATIC_URL +
                              "/images/" +
                              data?.brochure
                            }
                            height={"150px"}
                          /> : ""}

                          {/* {data?.brochure ? <small>{data.brochure}</small> : ""} */}
                        </td>
                      </tr>
                      {/* <tr>
                        <th>Overview</th>
                        <td>
                          {" "}
                          <textarea
                            required
                            className="form-control"
                            rows="3"
                            placeholder="Enter Overview"
                            value={overview}
                            onChange={(e) => setoverview(e.target.value)}
                          ></textarea>{" "}
                          <div className="invalid-feedback">
                            Overview is Required!
                          </div>
                        </td>
                      </tr> */}
                      <tr>
                        <th>Overview</th>
                        {overviewFields.map((field, index) => (
                          <tr key={index}>
                            <div style={{ display: "flex" }}>
                              <td>
                                <span
                                  id="sr_no"
                                  className="btn-secondary"
                                >{field.sr_no + ")"}</span>
                              </td>
                              <td>
                                <input
                                  style={{ width: "440px", marginLeft: "13px" }}
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  placeholder=""
                                  value={field.text}
                                  onChange={(e) =>
                                    updateFieldValue(
                                      index,
                                      "text",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </div>
                            {overviewFields[index]?.sr_no == 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-success btn-xs"
                                  onClick={addInputField}
                                >
                                  +
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                            {overviewFields[index]?.sr_no != 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-danger btn-xs remove_row"
                                  onClick={() => removeInputField(index)}
                                >
                                  X
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                          </tr>
                        ))}
                      </tr>
                      <tr>
                        <th>Ranking and Accreditations</th>
                        {ran_Acc.map((field, index) => (
                          <tr key={index}>
                            <div style={{ display: "flex" }}>
                              <td>
                                <span
                                  id="sr_no"
                                  className="btn-secondary"
                                >{field.sr_no + ")"}</span>
                              </td>
                              <td>
                                <input
                                  style={{ width: "440px", marginLeft: "13px" }}
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  placeholder=""
                                  value={field.text}
                                  onChange={(e) =>
                                    updateFieldValueRan_Acc(
                                      index,
                                      "text",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </div>
                            {overviewFields[index]?.sr_no == 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-success btn-xs"
                                  onClick={addInputFieldRan_Acc}
                                >
                                  +
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                            {overviewFields[index]?.sr_no != 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-danger btn-xs remove_row"
                                  onClick={() => removeInputFieldRan_Acc(index)}
                                >
                                  X
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                          </tr>
                        ))}
                      </tr>
                      <tr>
                        <th>Specialization</th>

                        <td>
                          <div className="form-check ">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="marketing"
                              checked={mba_marketing}
                              onChange={(e) => setmba_marketing(!mba_marketing)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ac_classroom"
                            >
                              Marketing
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="finance"
                              checked={mba_finance}
                              onChange={(e) => setmba_finance(!mba_finance)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="auditorium"
                            >
                              Finance
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="hr"
                              checked={mba_hr}
                              onChange={(e) => setmba_hr(!mba_hr)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="cafeteria"
                            >
                              HR
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="rural_management"
                              checked={mba_ruralManagement}
                              onChange={(e) =>
                                setmba_ruralManagement(!mba_ruralManagement)
                              }
                            />
                            <label className="form-check-label" htmlFor="gyn">
                              Rural Management
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="operations"
                              checked={mba_operations}
                              onChange={(e) =>
                                setmba_operations(!mba_operations)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hospital"
                            >
                              Operations
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="healthcare"
                              checked={mba_healthcare}
                              onChange={(e) =>
                                setmba_healthcare(!mba_healthcare)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hostel"
                            >
                              Healthcare
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="international_business"
                              checked={mba_internationalBusiness}
                              onChange={(e) =>
                                setmba_internationalBusiness(
                                  !mba_internationalBusiness
                                )
                              }
                            />
                            <label className="form-check-label" htmlFor="labs">
                              International Business
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="business_analytics"
                              checked={mba_businessAnalytics}
                              onChange={(e) =>
                                setmba_businessAnalytics(!mba_businessAnalytics)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="business_analytics"
                            >
                              Business Analytics
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="banking_finance"
                              checked={mba_bankingFinance}
                              onChange={(e) =>
                                setmba_bankingFinance(!mba_bankingFinance)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="banking_finance"
                            >
                              Banking Finance
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="advertising_communications"
                              checked={mba_advertisingCommunications}
                              onChange={(e) =>
                                setmba_advertisingCommunications(
                                  !mba_advertisingCommunications
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="advertising_communications"
                            >
                              Advertising Communications
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="agri_business"
                              checked={mba_agriBusiness}
                              onChange={(e) =>
                                setmba_agriBusiness(!mba_agriBusiness)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="agri_business"
                            >
                              Agri Business
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="corporate_social_responsibility"
                              checked={mba_corporateSocialResponsibility}
                              onChange={(e) =>
                                setmba_corporateSocialResponsibility(
                                  !mba_corporateSocialResponsibility
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="corporate_social_responsibility"
                            >
                              Corporate Social Responsibility
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="digital_marketing"
                              checked={mba_digitalMarketing}
                              onChange={(e) =>
                                setmba_digitalMarketing(!mba_digitalMarketing)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="digital_marketing"
                            >
                              Digital Marketing
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="entrepreneurship"
                              checked={mba_entrepreneurship}
                              onChange={(e) =>
                                setmba_entrepreneurship(!mba_entrepreneurship)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="entrepreneurship"
                            >
                              Entrepreneurship
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="energy"
                              checked={mba_energy}
                              onChange={(e) => setmba_energy(!mba_energy)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="energy"
                            >
                              Energy
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="aviation"
                              checked={mba_aviation}
                              onChange={(e) => setmba_aviation(!mba_aviation)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="aviation"
                            >
                              Aviation
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="event"
                              checked={mba_event}
                              onChange={(e) => setmba_event(!mba_event)}
                            />
                            <label className="form-check-label" htmlFor="event">
                              Event
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="family_business"
                              checked={mba_familyBusiness}
                              onChange={(e) =>
                                setmba_familyBusiness(!mba_familyBusiness)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="family_business"
                            >
                              Family Business
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="fashion_design"
                              checked={mba_fashionDesign}
                              onChange={(e) =>
                                setmba_fashionDesign(!mba_fashionDesign)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fashion_design"
                            >
                              Fashion Design
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="finance_management"
                              checked={mba_financeManagement}
                              onChange={(e) =>
                                setmba_financeManagement(!mba_financeManagement)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="finance_management"
                            >
                              Finance Management
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="import_export"
                              checked={mba_importExport}
                              onChange={(e) =>
                                setmba_importExport(!mba_importExport)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="import_export"
                            >
                              Import Export
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="information_technology"
                              checked={mba_informationTechnology}
                              onChange={(e) =>
                                setmba_informationTechnology(
                                  !mba_informationTechnology
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="information_technology"
                            >
                              Information Technology
                            </label>
                          </div>

                          {/* start new fields */}
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="supply_Chain_logistics_management"
                              checked={supply_Chain_logistics_management}
                              onChange={(e) =>
                                setsupply_Chain_logistics_management(
                                  !supply_Chain_logistics_management
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="supply_Chain_logistics_management"
                            >
                              Supply Chain & Logistics Management
                            </label>
                          </div>


                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="infrastructure"
                              checked={infrastructure}
                              onChange={(e) =>
                                setinfrastructure(
                                  !infrastructure
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="infrastructure"
                            >
                              Infrastructure
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="pharmaceutical_management"
                              checked={pharmaceutical_management}
                              onChange={(e) =>
                                setpharmaceutical_management(
                                  !pharmaceutical_management
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="pharmaceutical_management"
                            >
                              Pharmaceutical Management
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="oil_gas"
                              checked={oil_gas}
                              onChange={(e) =>
                                setoil_gas(
                                  !oil_gas
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="oil_gas"
                            >
                              Oil & Gas
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="sports_management"
                              checked={sports_management}
                              onChange={(e) =>
                                setsports_management(
                                  !sports_management
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="sports_management"
                            >
                              Sports Management
                            </label>
                          </div>


                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="retail"
                              checked={retail}
                              onChange={(e) =>
                                setretail(
                                  !retail
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="retail"
                            >
                              Retail
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="telecom"
                              checked={telecom}
                              onChange={(e) =>
                                settelecom(
                                  !telecom
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="telecom"
                            >
                              Telecom
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="textile"
                              checked={textile}
                              onChange={(e) =>
                                settextile(
                                  !textile
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="textile"
                            >
                              Textile
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="tourism_ospitality"
                              checked={tourism_ospitality}
                              onChange={(e) =>
                                settourism_ospitality(
                                  !tourism_ospitality
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tourism_ospitality"
                            >
                              Tourism & Hospitality
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="public_policy"
                              checked={public_policy}
                              onChange={(e) =>
                                setpublic_policy(
                                  !public_policy
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="public_policy"
                            >
                              Public Policy
                            </label>
                          </div>


                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="banking_insurance"
                              checked={banking_insurance}
                              onChange={(e) =>
                                setbanking_insurance(
                                  !banking_insurance
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="banking_insurance"
                            >
                              Banking & Insurance
                            </label>
                          </div>


                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="service_management"
                              checked={service_management}
                              onChange={(e) =>
                                setservice_management(
                                  !service_management
                                )
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="service_management"
                            >
                              Service Management
                            </label>
                          </div>

                          {/* End new fields */}
                        </td>
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
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addTableRows();
                                    }}
                                  >
                                    +
                                  </button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <TableRows
                                rowsData={rowsData}
                                deleteTableRows={deleteTableRows}
                                handleChange={handleChange}
                              />
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <th>Admissions </th>
                        <td style={{ display: "flex" }}>Eligibility</td>
                        {adm_Elg.map((field, index) => (
                          <tr key={index}>
                            <div style={{ display: "flex" }}>
                              <td>
                                <span
                                  id="sr_no"
                                  className="btn-secondary"
                                >{field.sr_no + ")"}</span>
                              </td>
                              <td>
                                <input
                                  style={{ width: "440px", marginLeft: "13px" }}
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  placeholder=""
                                  value={field.text}
                                  onChange={(e) =>
                                    updateFieldValueAdm_Elg(
                                      index,
                                      "text",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </div>
                            {overviewFields[index]?.sr_no == 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-success btn-xs"
                                  onClick={addInputFieldAdm_Elg}
                                >
                                  +
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                            {overviewFields[index]?.sr_no != 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-danger btn-xs remove_row"
                                  onClick={() => removeInputFieldAdm_Elg(index)}
                                >
                                  X
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                          </tr>
                        ))}
                      </tr>
                      <tr>
                        <th>Placement Highlights</th>
                        <td>
                          {" "}
                          <textarea
                            required
                            className="form-control"
                            rows="3"
                            placeholder="Enter Placement Text"
                            value={placements}
                            onChange={(e) => setplacements(e.target.value)}
                          ></textarea>{" "}
                          <div className="invalid-feedback">
                            Placements is Required!
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Campus Facilities</th>

                        <td>
                          <div className="form-check ">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="ac_classroom"
                              checked={cf_ac}
                              onChange={(e) => setcf_ac(!cf_ac)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ac_classroom"
                            >
                              A/C Classrooms
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="auditorium"
                              checked={cf_audi}
                              onChange={(e) => setcf_audi(!cf_audi)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="auditorium"
                            >
                              Auditorium
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="cafeteria"
                              checked={cf_cafe}
                              onChange={(e) => setcf_cafe(!cf_cafe)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="cafeteria"
                            >
                              Cafeteria
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="gym"
                              checked={cf_gym}
                              onChange={(e) => setcf_gym(!cf_gym)}
                            />
                            <label className="form-check-label" htmlFor="gyn">
                              Gym
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="hospital"
                              checked={cf_hmf}
                              onChange={(e) => setcf_hmf(!cf_hmf)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hospital"
                            >
                              Hospital & Medical Facilities
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="hostel"
                              checked={cf_hostel}
                              onChange={(e) => setcf_hostel(!cf_hostel)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hostel"
                            >
                              Hostel
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="labs"
                              checked={cf_labs}
                              onChange={(e) => setcf_labs(!cf_labs)}
                            />
                            <label className="form-check-label" htmlFor="labs">
                              Labs
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="library"
                              checked={cf_library}
                              onChange={(e) => setcf_library(!cf_library)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="library"
                            >
                              Library
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="sports_complex"
                              checked={cf_sports}
                              onChange={(e) => setcf_sports(!cf_sports)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="sports_complex"
                            >
                              Sports Complex
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="wifi"
                              checked={cf_wifi}
                              onChange={(e) => setcf_wifi(!cf_wifi)}
                            />
                            <label className="form-check-label" htmlFor="wifi">
                              Wifi Campus
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Gallery</th>
                        <td>
                          <div style={{ display: "flex" }}>
                            <input
                              type="file"
                              name="gallery"
                              multiple
                              onChange={(e) => {
                                const files = e.target.files;
                                setGallary(files);
                              }}
                            />
                            {data?.brochure ? <img
                              src={
                                STATIC_URL +
                                "/images/" +
                                JSON.parse(data?.gallery_links.split(','))
                              }
                              height={"150px"}
                            /> : ""}


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
                            value={sm_fb}
                            onChange={(e) => setsm_fb(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> youtube</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="YouTube URL"
                            value={sm_ytb}
                            onChange={(e) => setsm_ytb(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> twitter</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="Twitter URL"
                            value={sm_ttr}
                            onChange={(e) => setsm_ttr(e.target.value)}
                          />
                        </td>
                        <td style={{ display: "flex" }}> linkedIn</td>

                        <td style={{ display: "flex" }}>
                          <input
                            type="link"
                            className="form-control"
                            id="text"
                            placeholder="Enter LinkedIn"
                            value={sm_li}
                            onChange={(e) => setsm_li(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        {/* <th>size</th>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            id="size"
                            name="size"
                            placeholder="Enter Size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Size is Required!
                          </div>
                        </td> */}
                      </tr>
                      {/* <tr>
                        <th>Acceptence Rate</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="acceptence_rate"
                            name="acceptence_rate"
                            placeholder="Enter Acceptence Rate (In %)"
                            value={acceptenceRate}
                            onChange={(e) => setAcceptenceRate(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Acceptence Rate is Required!
                          </div>
                        </td>
                      </tr> */}

                      {/* <tr>
                        <th>Highlight Program</th>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="program"
                            name="program"
                            placeholder="Enter Highlight Program"
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Highlight Program is Required!
                          </div>
                        </td>
                      </tr> */}


                      <tr>
                        <th>Key Highlights </th>
                        {key_High.map((field, index) => (
                          <tr key={index}>
                            <div style={{ display: "flex" }}>
                              <td>
                                <span
                                  id="sr_no"
                                  className="btn-secondary"
                                >{field.sr_no + ")"}</span>
                              </td>
                              <td>
                                <input
                                  style={{ width: "440px", marginLeft: "13px" }}
                                  type="text"
                                  className="form-control"
                                  id="text"
                                  placeholder=""
                                  value={field.text}
                                  onChange={(e) =>
                                    updateFieldValueKey_High(
                                      index,
                                      "text",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </div>
                            {overviewFields[index]?.sr_no == 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-success btn-xs"
                                  onClick={addInputFieldKey_High}
                                >
                                  +
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                            {overviewFields[index]?.sr_no != 1 ? (
                              <td>
                                <button
                                  type="button"
                                  name="add_row"
                                  id="add_row"
                                  className="btn btn-danger btn-xs remove_row"
                                  onClick={() => removeInputFieldKey_High(index)}
                                >
                                  X
                                </button>
                              </td>
                            ) : (
                              ""
                            )}
                          </tr>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex align-items-center">
                    <input
                      type="submit"
                      className="btn btn-primary mb-2"
                      onClick={(e) => {
                        e.preventDefault();
                        addCollege();
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCollegeDetails;
