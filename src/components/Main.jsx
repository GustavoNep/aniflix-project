import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [animes, setAnimes] = useState([]);

  const anime = animes[Math.floor(Math.random() * animes.length)];

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/seasons/2023/Winter").then((response) => {
      setAnimes(response.data.data);
    });
  }, []);


  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full object-cover">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={anime?.images.jpg.large_image_url}
          alt={anime?.title}
        ></img>

        <div className='absolute w-full top-[20%] p-4 md:p-8'> 
            <h1 className='text-3xl md:text-5xl font-bold'>{anime?.title}</h1>
            <div className='my-4'>
                <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 ml-4">Play</button>
                <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Rating: {anime?.rating}</p>
            
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(anime?.synopsis, 150)}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
