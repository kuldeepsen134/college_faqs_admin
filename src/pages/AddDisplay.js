import { useState } from "react";
import axios from "../api/axios";
import Header from "../components/header/Header";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddDisplay = () => {
  const data = useLocation().state;
  const [display, setDisplay] = useState(data?.display_name || "");
  const [url, setURL] = useState(data?.url || "");
  const [isSubmit, setIsSubmit] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate()
  const addTag = async () => {
    if (isSubmit) return;
    setIsSubmit(true);
    if (!display || !url) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      return;
    }
    try {
      let req_url;
      console.log(data);
      if (data) {
        req_url = "/update";
      } else {
        req_url = "/add";
      }
      const request = axios.post(
        "/admin/display-table" + req_url,
        {
          id: data?.id,
          display_name: display,
          url: url,
        },
        {
          headers: { authorization: "Bearer " + auth.token },
        }
      );
      const response = await toast.promise(request, {
        pending: "Adding Display Data",
        success: `Display Data ${false ? "Updated" : "Added"} Successfully!`,
        error: "Something went Wrong!",
      });
      navigate("/display-table/list")
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!");
    } finally {
      setIsSubmit(false);
    }
  };
  return (
    <>
      <Header page={data ? "Edit Display" : "Add Display"} />
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
                        <label htmlFor="display">Display Data</label>
                        <input
                          type="text"
                          className="form-control"
                          id="display"
                          value={display}
                          required
                          onChange={(e) => setDisplay(e.target.value)}
                          placeholder="Enter Display Data"
                        />
                        <div className="invalid-feedback">
                          Display Data is Required!
                        </div>
                      </div>
                    </div>
                    <div className="col col-6">
                      <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="url"
                          required
                          value={url}
                          onChange={(e) => setURL(e.target.value)}
                          placeholder="Enter URL"
                        />{" "}
                        <div className="invalid-feedback">URL is Required!</div>
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
export default AddDisplay;
