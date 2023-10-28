import Header from "../components/header/Header";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios, { CancelToken } from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ActionDropdown = ({ data, loadData }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const deleteTag = async () => {
    try {
      const request = axios.post(
        "/admin/latest-updates/delete",
        { id: data.id },
        { headers: { authorization: "Bearer " + auth.token } }
      );
      const response = await toast.promise(request, {
        pending: "Deleting Update",
        success: `Update Deleted Successfully!`,
        error: "Something went Wrong!",
      });
      console.log(response.data);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };
  const editTag = () => {
    navigate(`/latest-updates/add`, { state: data });
  };
  return (
    <DropdownButton id="dropdown-basic-button" title="Action">
      <Dropdown.Item onClick={editTag}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={deleteTag}>Delete</Dropdown.Item>
    </DropdownButton>
  );
};

const UpdatesList = () => {
  const { SearchBar } = Search;
  const [data, setData] = useState([]);
  const [colleges, setColleges] = useState([]);
  const { auth } = useAuth();
  const loadColleges = async (cancelToken) => {
    try {
      const response = await axios.get("/admin/colleges/list", {
        cancelToken: cancelToken.token,
        headers: { authorization: "Bearer " + auth.token },
      });

      response?.data?.success && setColleges(response.data.colleges);
      response?.data?.success && loadData(cancelToken);
    } catch (err) {
      console.error(err);
    }
  };
  const loadData = async (cancelToken) => {
    try {
      const response = await axios.get("/admin/latest-updates/list", {
        cancelToken: cancelToken.token,
        headers: { authorization: "Bearer " + auth.token },
      });
      response?.data?.success && setData(response.data.latest_updates);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const cancelToken = CancelToken.source();
    loadColleges(cancelToken);
  }, []);
  const columns = [
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      sort: true,
      formatExtraData: [loadData],
      formatter: (c, row, i, ed) => {
        return <ActionDropdown data={row} loadData={ed[0]} />;
      },
    },
    {
      dataField: "id",
      text: "Update ID",
      sort: true,
    },
    {
      dataField: "collegeId",
      text: "College",
      formatExtraData: colleges,
      formatter: (c, row, i, extraData) => {
        let format = extraData.filter((item) => item.id == c);
        return format[0]?.college_name;
      },
    },
    {
      dataField: "title",
      text: "Update Title",
    },
  ];
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: data.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  return (
    <>
      <Header page="Latest Updates" />
      <section className="content">
        <div className="row">
          <div className="col">
            <div className="card card-primary">
              <div className="card-header">
                {/* <h3 className="card-title">Quick Example</h3> */}
              </div>
              <div className="card-body">
                <ToolkitProvider
                  keyField="id"
                  data={data}
                  columns={columns}
                  search
                >
                  {(props) => (
                    <div>
                      <div
                        className="d-flex justify-content-end"
                        id="search_box"
                      >
                        <SearchBar {...props.searchProps} />
                      </div>
                      <hr />
                      <BootstrapTable
                        noDataIndication="Table is Empty"
                        striped
                        {...props.baseProps}
                        pagination={paginationFactory(options)}
                        filter={filterFactory()}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UpdatesList;
