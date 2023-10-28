import { useState } from "react";
import axios from "../api/axios";
import Header from "../components/header/Header";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddDisplay = () => {
  const data = useLocation().state;
  const [banner, setBanner] = useState(data?.banner || "");
  const [url, setURL] = useState(data?.url || "");
  const [isSubmit, setIsSubmit] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const addTag = async () => {
    if (isSubmit || !banner) return;
    setIsSubmit(true);
    if (!banner || !url) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("id", data?.id);
      formData.append("banner", banner);
      formData.append("url", url);

      let req_url = "";
      if (data) {
        req_url = "/update";
      } else {
        req_url = "/add";
      }
      const request = axios.post(
        "/admin/banners" + req_url,
        // {
        //   id: data?.id,
        //   banner: banner,
        //   url: url,
        // }
        formData
        ,
        {
          headers: { authorization: "Bearer " + auth.token },
        }
      );
      const response = await toast.promise(request, {
        pending: "Adding Banner",
        success: `Banner ${data ? "Updated" : "Added"} Successfully!`,
        error: "Something went Wrong!",
      });
      response.data.success && navigate("/banners/list")
    } catch (err) {
      console.log(err);

      toast.error("Something Went Wrong!");
    } finally {
      setBanner("");
      setURL("");
    }
    setIsSubmit(false);
  };
  return (
    <>
      <Header page={data ? "Edit Banner" : "Add Banner"} />
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
                        <label htmlFor="display">Banner Image</label>
                        <input
                          type="file"
                          required
                          className="form-control"
                          id="banner"
                          // onChange={(e) => setBanner(e.target.value)}
                          onChange={(e) => setBanner(e.target.files[0])}
                          placeholder="Enter Banner URL"
                        />
                        <div className="invalid-feedback">
                          Banner Image URL is Required!
                        </div>
                        {data?.banner ? (
                          <>
                            <br />
                            <img
                              src={
                                STATIC_URL + "/images/" + data?.banner
                              }
                              height={"150px"}
                            />
                          </>
                        ) : (
                          ""
                        )}
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
                        />
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
