import { useState } from 'react'

function AvatarImage() {
     return <img src="https://posts-decriptando.s3.amazonaws.com/post-instagram-component/256-512.webp" width="75" />
}

function Username({username}) {
     return <span><strong>{username ? username : 'Default Username'}</strong></span>
}

function UserDescription() {
     return <p><small>Lorem ipsum summet</small></p>
}

function PostImage() {
    return <img src="https://posts-decriptando.s3.amazonaws.com/post-instagram-component/istockphoto-1226328537-170667a.jpeg" />
}

function PostDescription() {
    return <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus...</span>
}

function PostComponent(props) {
                
    const [ likes, setLikes ] =  useState(0);
               
    function handleClick(){
        setLikes( likes + 1 )
    }
                
    return (
      <div className="post-component">
          <div className="post-header-component">
              <div className="user-avatar">
                    <AvatarImage />
              </div >
              <div className="user-name-description">
                  <Username username={props.username} />
                  <UserDescription />
               </div >
           </div >
           <div className="post-body-component">
               <PostImage />
           </div >
           <button onClick={handleClick}>❤️ ( {likes} ) </button>
           <div className="post-description-component">
               <Username username={props.username} />: <PostDescription />
           </div >
       </div >
     )
}
           
export default function BodyComponent() {
    const aPosts = [
       {
         username: "José da Silva"
       },
       {
        username: "Roberto Pereira"
       },
       {
         username: "Manuel Martins"
       }
     ];

     return (
        <div className="body-component">
           {
               aPosts.map(oPost => (
                   <PostComponent key={oPost.username}  username={oPost.username} />  
               ))
           }
        </div >
      )
}
