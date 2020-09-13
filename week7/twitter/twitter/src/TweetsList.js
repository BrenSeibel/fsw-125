import React from 'react';
import WithAuth from './AuthProvider';

const TweetsList = () => {
  return (
    <div>
      <form>
  <label>
    <input type="text" name="What's Happening?" /> 
  </label>
  <input type="submit" value="Tweet" />
  
</form>
      {/* {props.array.map(tweet=>{ })} */}
      CNN Breaking News @cnnbkr 36min <br></br>
      "Federal prosecutors are seeking a Chinese scientist accused of visa fraud <br></br>who 
      the FBI says is hiding out in China’s consulate in San Francisco"
      <img src="https://images.wsj.net/im-136666?width=620&size=1.5"></img>
<br></br>
<br></br>
      Tim Seibel @Timsbl 45min <br></br>
      "Mennonite for Life" <br></br>
      <img src="https://legacy.shadowandact.com/wp-content/uploads/2016/05/Zenith.jpg"></img>
<br></br>
<br></br>
      Melba De la Cruz @BeautyStyle 55min<br></br>
      "Never give up, keep fighting!"<br></br>
      <img src="https://sd.keepcalms.com/i/never-give-up-keep-fighting-3.png"></img>
    </div>
  );
}

export default TweetsList