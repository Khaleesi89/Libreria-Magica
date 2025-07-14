import './Loading.css';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="loading">
      <BeatLoader color="blue" />
    </div>
  );
};

export default Loading;
