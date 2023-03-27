import React from "react";
import Saved from './Saved.jsx';

function Profile() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [name, setName] = React.useState('');
  const [birthday, setBirthday] = React.useState('');

  React.useEffect(() => {
    const url = '/loggedIn'
    const url2 = '/profile/userinfo'

    const loggedIn = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setLoggedIn(json);

      const response2 = await fetch(url2);
      const json2 = await response2.json();
      setName(json2.name);
      setBirthday(json2.birthday);
    }
    loggedIn();
  }, [])

  if (!loggedIn) {
    location.href = 'http://localhost:8080/';
    alert('Please log in!')
  }

  let saved = [];
  for (let el in window.localStorage) {
    if (window.localStorage.hasOwnProperty(el)) {
      console.log(window.localStorage.el)
      saved.push(<Saved el={el} text={window.localStorage[el]}/>)
    }

  }

  return (
    <div>
      <p> Name: {name} </p>
      <p> Birthday: {birthday} </p>
      <div>
        {saved}
      </div>
    </div>
  )
}

export default Profile;