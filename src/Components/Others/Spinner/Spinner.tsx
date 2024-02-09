import { PuffLoader } from "react-spinners";


const Spinner = () => {
  return (
    <div className="h-full w-full flex items-center justify-center py-10">
      <PuffLoader color="#e11d48" />
    </div>
  );
};

export default Spinner;
