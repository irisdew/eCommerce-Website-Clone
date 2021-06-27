import { useAuth } from "./../customHooks";
import { withRouter } from "react-router-dom";

const WithAuth = (props) => useAuth(props) && props.children; // props를 useAuth라는 customHook에 전달해줌

export default withRouter(WithAuth); // react-router-dom의 history 이용할 수 있음
