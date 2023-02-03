import React, { useEffect, useState } from 'react'

function YouTube() {
    const [youTubeVideos, setyouTube] = useState([]);
    useEffect(()=>{
        fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBJLmod22pBnJu6IkPS0SxwV0V6w36e7q4&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
        )
        .then((res) =>
        res.json()
        )
        .then((data) =>{
            const youTubedata = data.items;
            console.log(data);
            setyouTube(youTubedata)
        })
    },[]);

  return (
<div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper font-weight-bold text-center">
               <h3 className='font-weight-bold'> Latest Videos</h3>
                <br></br>
              </div>
            </div>
            {youTubeVideos.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                      {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })
            }
          </div>
        </div>
      </div>
</div>
)
}
export default YouTube;

