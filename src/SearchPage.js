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
          image="https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo"
          Channel="Clever Programmer"
          verified
          subs="660K"
          noOfVideos={382}
          description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
        />
        <hr />

        <VideoRow 
          views="1.4M"
          subd="659K"
          description="Do you want a free training"
          timestamp="1 minute ago"
          channel="Clever Programmer"
          title="Let's build a youtube clone with React JS"
          image="https://i.ytimg.com/an_webp/GePLvNgWROg/mqdefault_6s.webp?du=3000&sqp=CMDZ_qAG&rs=AOn4CLCnzCuLtkFJqz1473nKdX98wmYKwA"

        />
        <VideoRow 
          views="1.4M"
          subd="659K"
          description="Do you want a free training"
          timestamp="1 minute ago"
          channel="Clever Programmer"
          title="Let's build a youtube clone with React JS"
          image="https://i.ytimg.com/an_webp/GePLvNgWROg/mqdefault_6s.webp?du=3000&sqp=CMDZ_qAG&rs=AOn4CLCnzCuLtkFJqz1473nKdX98wmYKwA"

        />
        <VideoRow 
          views="1.4M"
          subd="659K"
          description="Do you want a free training"
          timestamp="1 minute ago"
          channel="Clever Programmer"
          title="Let's build a youtube clone with React JS"
          image="https://i.ytimg.com/an_webp/GePLvNgWROg/mqdefault_6s.webp?du=3000&sqp=CMDZ_qAG&rs=AOn4CLCnzCuLtkFJqz1473nKdX98wmYKwA"

        />
        <VideoRow 
          views="1.4M"
          subd="659K"
          description="Do you want a free training"
          timestamp="1 minute ago"
          channel="Clever Programmer"
          title="Let's build a youtube clone with React JS"
          image="https://i.ytimg.com/an_webp/GePLvNgWROg/mqdefault_6s.webp?du=3000&sqp=CMDZ_qAG&rs=AOn4CLCnzCuLtkFJqz1473nKdX98wmYKwA"

        />

    </div>
  );
}

export default SearchPage;