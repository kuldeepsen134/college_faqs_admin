import { useState } from "react";
import axios from "../api/axios";
import Header from "../components/header/Header";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddTags = () => {
  const data = useLocation().state;
  const [tag, setTag] = useState(data?.tag_name || "");
  const [isSubmit, setIsSubmit] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const addTag = async () => {
    if (isSubmit) return;
    setIsSubmit(true);
    if (!tag) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      return;
    }
    try {
      if (data) {
        req_url = "/update";
      } else {
        req_url = "/add";
      }
      const request = await axios.post(
        "/admin/tags" + req_url,
        {
          id: data?.id,
          tag: tag,
        },
        {
          headers: { authorization: "Bearer " + auth.token },
        }
      );
      const response = await toast.promise(request, {
        pending: "Adding Tag",
        success: `Tag ${data ? "Updated" : "Added"} Successfully!`,
        error: "Something went Wrong!",
      });
      navigate("/tags/list");
    } catch (err) {
      console.log(err);
      toast.error("Something went Wrong!");
    } finally {
      setTag("");
    }
    setIsSubmit(false);
  };
  return (
    <>
      <Header page={data ? "Edit Tags" : "Add Tags"} />
      <section className="content">
        <div className="row">
          <div className="col">
            <div className="card card-primary">
              <div className="card-header">
                {/* <h3 className="card-title">Quick Example</h3> */}
              </div>
              <form className="needs-validation" noValidate>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input
                      type="email"
                      className="form-control"
                      id="tag"
                      required
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      placeholder="Enter Tag"
                    />
                    <div className="invalid-feedback">
                      Tag Name is Required!
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
export default AddTags;
