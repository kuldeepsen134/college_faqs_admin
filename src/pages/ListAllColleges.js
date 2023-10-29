import Header from "../components/header/Header";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios, { CancelToken } from "../api/axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ActionDropdown = ({ data, loadData }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const deleteTag = async () => {
    try {
      const request = axios.post(
        "/admin/colleges/delete",
        { id: data.id },
        { headers: { authorization: "Bearer " + auth.token } }
      );
      const response = await toast.promise(request, {
        pending: "Deleting College",
        success: `College Deleted Successfully!`,
        error: "Something went Wrong!",
      });
      console.log(response.data);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };
  const editCollege = async () => {
    navigate("/colleges/edit", { state: data });
  };
  return (
    <DropdownButton id="dropdown-basic-button" title="Action">
      <Dropdown.Item onClick={editCollege}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={deleteTag}>Delete</Dropdown.Item>
    </DropdownButton>
  );
};

const ListAllColleges = () => {
  const { SearchBar } = Search;
  const [data, setData] = useState([]);
  const loadData = async (cancelToken) => {
    try {
      const response = await axios.get("/admin/colleges/list", {
        cancelToken: cancelToken.token,
      });
      console.log(response.data.colleges);
      response?.data?.success && setData(response.data.colleges);
    } catch (err) {
      console.error(err);
      toast.error("Seomthing Went Wrong!");
    }
  };

  useEffect(() => {
    const cancelToken = CancelToken.source();
    loadData(cancelToken);
  }, []);

  const columns = [
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      sort: true,
      formatExtraData: [loadData],
      formatter: (c, row, i, extraData) => {
        return <ActionDropdown data={row} loadData={extraData[0]} />;
      },
    },
    {
      dataField: "college_name",
      text: "College Name",
      sort: true,
    },
    {
      dataField: "location",
      text: "Location",
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
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListAllCollegesOnlyOnePage: true, // Hide the pagination ListAllColleges when only one page
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
    sizePerPageListAllColleges: [
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
      {/* <Header page="Colleges List" /> */}
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
                        {/* <h5>Input something at below input field:</h5> */}
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
export default ListAllColleges;
