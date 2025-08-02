import { ClipLoader } from 'react-spinners';

export default function HomePageLoader() {
  return (
    <div className="absolute top-1/2 left-1/2">
      <ClipLoader />
    </div>
  );
}
