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
import { useNavigate } from "react-router-dom";

const ActionDropdown = ({ data }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const deleteTag = async () => {
    try {
      const response = await axios.post(
        "/admin/tags/delete",
        { id: data.id },
        { headers: { authorization: "Bearer " + auth.token } }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const editTag = () => {
    navigate(`/tags/add`, { state: data });
  };
  return (
    <DropdownButton id="dropdown-basic-button" title="Action">
      <Dropdown.Item onClick={editTag}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={deleteTag}>Delete</Dropdown.Item>
    </DropdownButton>
  );
};

const Tags = () => {
  const { SearchBar } = Search;
  const [data, setData] = useState([]);
  const { auth } = useAuth();
  const loadData = async (cancelToken) => {
    try {
      const response = await axios.get("/admin/tags/list", {
        cancelToken: cancelToken.token,
        headers: { authorization: "Bearer " + auth.token },
      });
      console.log(response.data.tags);
      response?.data?.success && setData(response.data.tags);
    } catch (err) {
      console.error(err);
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
      formatter: (c, row, i) => {
        return <ActionDropdown data={row} />;
      },
    },
    {
      dataField: "id",
      text: "Tag ID",
      sort: true,
    },
    {
      dataField: "tag_name",
      text: "Tag",
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
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
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
      <Header page="Tags" />
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
export default Tags;
