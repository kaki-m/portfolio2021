import React from "react";

export default class Test extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           hello:"",
       };
   }

   handleSayHello(){
       this.setState({hello:"こんにちは！"});
   }
    render(){
    return (
        <div>
            <div className = "introduction">
                <h1><span className = "boldfont">自己紹介</span></h1>
                <h3><span className = "boldfont">名前:</span>  柿崎愛斗 (Manato Kakizaki)</h3>
                <h3><span className = "boldfont">出身:</span>  新潟県</h3>
                <h3><span className = "boldfont">大学:</span>  会津大学</h3>
                <h3><span className = "boldfont">趣味:</span>  弓道🎯</h3>
            </div>

            <div className = "skill">
                <h1>Skills</h1>
                <li>skill</li>
            </div>
            
        </div>
            );
    }
}
