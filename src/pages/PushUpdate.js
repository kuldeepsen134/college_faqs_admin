import { useState } from "react";
import axios from "../api/axios";
import Header from "../components/header/Header";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
const PushUpdate = () => {
  const data = useLocation().state;
  const [update, setUpdate] = useState(data?.title || "");
  const [collegeId, setCollegeId] = useState(data?.collegeId || 0);
  const [colleges, setColleges] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const { auth } = useAuth();

  const addTag = async () => {
    if (isSubmit) return;
    setIsSubmit(true);
    if (!update || !collegeId) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      return;
    }
    try {
      let req_url = "";
      if (data) {
        req_url = "/update";
      } else {
        req_url = "/add";
      }
      const request = axios.post(
        "/admin/latest-updates" + req_url,
        {
          id: data?.id,
          collegeId: collegeId,
          title: update,
        },
        {
          headers: { authorization: "Bearer " + auth.token },
        }
      );
      const response = await toast.promise(request, {
        pending: "Pushing Update",
        success: `Update ${false ? "Updated" : "Added"} Successfully!`,
        error: "Something went Wrong!",
      });
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!");
    } finally {
      setUpdate("");
      setCollegeId(0);
    }
    setIsSubmit(false);
  };

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get("/admin/colleges/list");
        response?.data?.colleges && setColleges(response.data.colleges);
      } catch (err) {
        console.log(err);
      }
    };
    fetchColleges();
  }, []);
  return (
    <>
      <Header page={"Push Update"} />
      <section className="content">
        <div className="row">
          <div className="col">
            <div className="card card-primary">
              <div className="card-header">
                {/* <h3 className="card-title">Quick Example</h3> */}
              </div>
              <form className="needs-validation" noValidate>
                <div className="card-body">
                  <div className="row">
                    <div className="col col-6">
                      <div className="form-group">
                        <label htmlFor="display">Update Title</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="latest-update"
                          value={update}
                          onChange={(e) => setUpdate(e.target.value)}
                          placeholder="Enter Update Title"
                        />
                        <div className="invalid-feedback">
                          Update Title is Required!
                        </div>
                      </div>
                    </div>
                    <div className="col col-6">
                      <div className="form-group">
                        <label htmlFor="url">Select College</label>
                        <select
                          required
                          className="form-control"
                          value={collegeId}
                          onChange={(e) => setCollegeId(e.target.value)}
                        >
                          <option value="" key="0">
                            Select College
                          </option>
                          {colleges.map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.college_name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          College is Required!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      addTag();
                    }}
                  >
                    {data ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PushUpdate;
