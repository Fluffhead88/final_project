import React, { Component } from 'react';
import './App.css';

// var data =
//   {
//     "album": {
//         "name": "Rift",
//         "artist": "Phish",
//         "mbid": "40c45052-9418-4aee-83c7-8ba518afae3f",
//         "url": "https://www.last.fm/music/Phish/Rift",
//         "image": [
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/34s/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": "small"
//             },
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/64s/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": "medium"
//             },
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/174s/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": "large"
//             },
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": "extralarge"
//             },
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": "mega"
//             },
//             {
//                 "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/79c8fbf46cee6a4a2281c10f22db3d1d.png",
//                 "size": ""
//             }
//         ],
//         "listeners": "27517",
//         "playcount": "399860",
//         "tracks": {
//             "track": [
//                 {
//                     "name": "Rift",
//                     "url": "https://www.last.fm/music/Phish/_/Rift",
//                     "duration": "360",
//                     "@attr": {
//                         "rank": "1"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Fast Enough for You",
//                     "url": "https://www.last.fm/music/Phish/_/Fast+Enough+for+You",
//                     "duration": "291",
//                     "@attr": {
//                         "rank": "2"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Lengthwise",
//                     "url": "https://www.last.fm/music/Phish/_/Lengthwise",
//                     "duration": "79",
//                     "@attr": {
//                         "rank": "3"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Maze",
//                     "url": "https://www.last.fm/music/Phish/_/Maze",
//                     "duration": "758",
//                     "@attr": {
//                         "rank": "4"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Sparkle",
//                     "url": "https://www.last.fm/music/Phish/_/Sparkle",
//                     "duration": "265",
//                     "@attr": {
//                         "rank": "5"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Horn",
//                     "url": "https://www.last.fm/music/Phish/_/Horn",
//                     "duration": "217",
//                     "@attr": {
//                         "rank": "6"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "The Wedge",
//                     "url": "https://www.last.fm/music/Phish/_/The+Wedge",
//                     "duration": "247",
//                     "@attr": {
//                         "rank": "7"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "My Friend, My Friend",
//                     "url": "https://www.last.fm/music/Phish/_/My+Friend,+My+Friend",
//                     "duration": "350",
//                     "@attr": {
//                         "rank": "8"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Weigh",
//                     "url": "https://www.last.fm/music/Phish/_/Weigh",
//                     "duration": "308",
//                     "@attr": {
//                         "rank": "9"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "All Things Reconsidered",
//                     "url": "https://www.last.fm/music/Phish/_/All+Things+Reconsidered",
//                     "duration": "222",
//                     "@attr": {
//                         "rank": "10"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Mound",
//                     "url": "https://www.last.fm/music/Phish/_/Mound",
//                     "duration": "350",
//                     "@attr": {
//                         "rank": "11"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "It's Ice",
//                     "url": "https://www.last.fm/music/Phish/_/It%27s+Ice",
//                     "duration": "489",
//                     "@attr": {
//                         "rank": "12"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Lengthwise",
//                     "url": "https://www.last.fm/music/Phish/_/Lengthwise",
//                     "duration": "79",
//                     "@attr": {
//                         "rank": "13"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "The Horse",
//                     "url": "https://www.last.fm/music/Phish/_/The+Horse",
//                     "duration": "92",
//                     "@attr": {
//                         "rank": "14"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 },
//                 {
//                     "name": "Silent in the Morning",
//                     "url": "https://www.last.fm/music/Phish/_/Silent+in+the+Morning",
//                     "duration": "291",
//                     "@attr": {
//                         "rank": "15"
//                     },
//                     "streamable": {
//                         "#text": "0",
//                         "fulltrack": "0"
//                     },
//                     "artist": {
//                         "name": "Phish",
//                         "mbid": "e01646f2-2a04-450d-8bf2-0d993082e058",
//                         "url": "https://www.last.fm/music/Phish"
//                     }
//                 }
//             ]
//         },
//         "tags": {
//             "tag": [
//                 {
//                     "name": "1993",
//                     "url": "https://www.last.fm/tag/1993"
//                 },
//                 {
//                     "name": "rock",
//                     "url": "https://www.last.fm/tag/rock"
//                 },
//                 {
//                     "name": "jam band",
//                     "url": "https://www.last.fm/tag/jam+band"
//                 },
//                 {
//                     "name": "Jam",
//                     "url": "https://www.last.fm/tag/Jam"
//                 },
//                 {
//                     "name": "Rift",
//                     "url": "https://www.last.fm/tag/Rift"
//                 }
//             ]
//         }
//     }
// }
//
// ;

var data = [
  {
    'id': 1,
    'artist': 'Phish',
    'album': 'Hoist'
  },
  {
    'id': 2,
    'artist': 'Widespread Panic',
    'album': 'Space Wrangler'
  },
  {
    'id': 3,
    'artist': 'The Grateful Dead',
    'album': 'American Beauty'
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <div>
            <h1>{item.artist}</h1>
            <span>{item.album}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
// class App extends Component {
    // constructor(props){
    //   super(props);
    // }


//   state = {
//     album: {}
//   };
//
//   async componentDidMount() {
//     try {
//       var res = await fetch('http://127.0.0.1:8000/proxy/');
//       var album = await res.json();
//       this.setState({
//         album
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.album.map(item => (
//           <div key={item.album}>
//             <h1>{item.name}</h1>
//             <span>{item.artist}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
//
// export default App;
