import { ToastContainer } from "react-toastify";
const StatusToast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />
  );
};
export default StatusToast;
