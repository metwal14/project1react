import { useNavigate } from "react-router-dom";

const hooksCallAddContact = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent {...props} navigate={navigate} />;
};
export default hooksCallAddContact;
