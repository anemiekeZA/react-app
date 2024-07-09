import { ReactNode } from "react";
import { MdEmail } from "react-icons/md";
// import EmailForm from "./emailForm";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className= "alert alert-primary alert-dismissible">{children}
      <button type="button" className="btn-close" onClick={onClose}data-bs-dismiss="alert"></button>
      {/* <EmailForm/> */}
    </div>
  )
}

export default Alert
