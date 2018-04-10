import React from "react"

class LastFM extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://ws.audioscrobbler.com/2.0/?callback=jQuery21405319371770877421_1522212448722&method=user.gettopartists&user=copcircles&limit=12&api_key=f7816da1f6c9d00d09ee8e5e92c935c6&format&format=json&callback=myTopArtists&_=1522212448723')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }








// $.ajax({
//     type : 'POST',
//     url : 'https://ws.audioscrobbler.com/2.0/',
//     data : 'method=user.gettopartists&' +
//            'user=copcircles&' +
//            'limit=12&' +
//            'api_key=f7816da1f6c9d00d09ee8e5e92c935c6&format&' +
//            'format=json&' +
//            'callback=myTopArtists',
//     dataType : 'jsonp',
//     success : function(data) {
//         // Handle success code here
//     },
//     error : function(code, message){
//         // Handle error here
//     }
// });

// //JSON callback function
// function myTopArtists(JSONdata) {

//     var oTopArtists = JSONdata.topartists.artist;
//     var wrapper, img, a, h3;

//     for (var i = 0; i < oTopArtists.length; i++) {

//         // eParent = document.getElementById("listTopArtists");
//         // eChild = document.createElement("li");
//         // eChild.appendChild(document.createTextNode(oTopArtists[i]["name"]));
//         // eChild.setAttribute("value", oTopArtists[i]["rank"]);
//         // eParent.appendChild(eChild);

//         if (oTopArtists[i] != "") {
//             wrapper = document.getElementById("row-one");
//             a = document.createElement("a");
//             img = document.createElement("img");
//             h4 = document.createElement("h4");
//             a.setAttribute("href", oTopArtists[i].url);
//             img.setAttribute("src", oTopArtists[i].image[2]["#text"]);
//             img.setAttribute("class", "img-grow");
//             h4.innerHTML="" + oTopArtists[i].name + "";
//             wrapper.appendChild(a);
//             a.appendChild(img);
//             a.appendChild(h4);
//         }
//     }
// }
}
export default LastFM
