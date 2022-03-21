import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  url: string;
};

const BackButton: React.FC<Props> = ({ url }) => {
  return (
    <Link to={url} className="btn btn-reverse btn-back">
      <FaArrowCircleLeft /> Back
    </Link>
  );
};

export default BackButton;
