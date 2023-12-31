'use client'
import Image from "next/image";
import SearchMovie from "./SearchMovie";
interface FormProps {
  emoji?: string;
  movie?: string;
  image?: string;
}

export default function Form(props: FormProps) {
  const { emoji, movie, image } = props;
//   const [ kovie, setQuery] = useState('');
//   const [ imageSrc, setImageSrc] = useState(null);

//   const fetchImage = debounce((movie) => {
//     // Call your API here with searchTerm
//     // For example:
//     // fetch(`/api/getImage?query=${searchTerm}`)
//     //   .then(response => response.json())
//     //   .then(data => setImageSrc(data.src));
//   }, 500);  // 500ms delay

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     fetchImage(e.target.value);
//   };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form>
          <input
            name="emoji"
            placeholder="Emoji"
            className="input input-bordered w-full max-w-xs"
            type="text"
            value={emoji}
          />
          <SearchMovie />
        </form>
      </div>
    </div>
  );
}
