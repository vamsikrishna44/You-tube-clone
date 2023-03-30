import React from 'react';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
          image="https://yt3.ggpht.com/ytc/AL5GRJUyOG_JBCOU5Z8qIe-NTv6IZH7Xr-ODXaUvKeQnVA=s88-c-k-c0x00ffffff-no-rj"
          Channel="Words Of Wisdom"
          verified
          subs="813K"
          noOfVideos={382}
          description="Hi I am Shalinder kumar. This channel is made with intent to spread message of inner happiness to people all over the world. In this channel you will see Gautam buddha stories, Buddha teachings, Buddha quotes, motivational stories, inspirational stories, Buddhist stories. I believe that every human has right to live on earth blissfully. With This intention i have tried to provide life changing inspirational stories which will enhance happiness and bliss in the life of viewers. If i could change life of anyone and could bring positive change in someone's life, i would think that i have succeeded in my effort. Please keep providing your support. Thanks
#Words_of_wisdom_channel"
        />
        <hr />

        <VideoRow 
          views="1.4M"
          subd="813K"
          description=""
          videoUrl=""
          timestamp="3 monts ago"
          channel="Words Of Wisdom"
          title="BEST MOTIVATIONAL STORY ON LAZINESS | Master and Disciple story |"
          image="https://i.ytimg.com/vi/NVJtgruCB1M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuZ3luHAI6_8dFXIVp8XNkVNMgSg"

        />
        <VideoRow 
          views="1.4M"
          subd="813K"
          description=""
          videoUrl="https://www.youtube.com/watch?v=A0R-AhRNm9M"
          timestamp="3 months ago"
          channel="Words Of Wisdom"
          title="Three Easy Ways To Control Your Mind"
          image="https://i.ytimg.com/vi/A0R-AhRNm9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHCj2HVz5BdzfCEWkPk67LG5cz-A"

        />
        <VideoRow 
          views="46K"
          
          subd="813K"
          description=""
          timestamp="12 days ago"
          channel="Words Of Wisdom"
          title="How To Find Happiness In Your Life"
          image="https://i.ytimg.com/vi/NlbcGJpKbnk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk4klEUUECuHP52664_Jo6eiVmzQ"

        />
        <VideoRow 
          views="1.4M"
          subd="813K"
          description=""
          timestamp="3 months ago"
          channel="Words Of Wisdom"
          title="Three Easy Ways To Control Your Mind"
          image="https://i.ytimg.com/vi/A0R-AhRNm9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHCj2HVz5BdzfCEWkPk67LG5cz-A"

        />
        <VideoRow 
          views="1.4M"
          subd="813K"
          description=""
          timestamp="3 months ago"
          channel="Words Of Wisdom"
          title="Three Easy Ways To Control Your Mind"
          image="https://i.ytimg.com/vi/A0R-AhRNm9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHCj2HVz5BdzfCEWkPk67LG5cz-A"

        />
        <VideoRow 
          views="1.4M"
          subd="813K"
          description=""
          timestamp="3 months ago"
          channel="Words Of Wisdom"
          title="Three Easy Ways To Control Your Mind"
          image="https://i.ytimg.com/vi/A0R-AhRNm9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHCj2HVz5BdzfCEWkPk67LG5cz-A"

        />
        
        

    </div>
  );
}

export default SearchPage;