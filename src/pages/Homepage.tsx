import React from 'react';
import ChatCard from "../components/ChatCard.tsx";
import personImage from "../images/profile-photo-header.png";
import Chats from '../models/chats.ts';

const chats = [
    { id: 1, name: 'Aarav', message: 'Hey, what’s up?', time: 'Today, 7:45pm', status: 1, image: personImage },
    { id: 2, name: 'Neha', message: 'Let’s catch up soon!', time: 'Yesterday, 5:30pm', status: 2, image: personImage },
    { id: 3, name: 'Vikram', message: 'Meeting postponed.', time: 'Today, 10:15am', status: 1, image: personImage },
    { id: 4, name: 'Simran', message: 'Can you call me?', time: 'Yesterday, 9:20pm', status: 0, image: personImage },
    { id: 5, name: 'Kabir', message: 'Thanks for your help!', time: 'Today, 3:12pm', status: 2, image: personImage },
    { id: 6, name: 'Meera', message: 'Happy Birthday!', time: 'Today, 11:00am', status: 1, image: personImage },
    { id: 7, name: 'Rohan', message: 'Let’s go for a trip!', time: 'Yesterday, 6:45pm', status: 2, image: personImage },
    { id: 8, name: 'Ananya', message: 'I’ll be late today.', time: 'Today, 8:00pm', status: 0, image: personImage },
    { id: 9, name: 'Dev', message: 'Send me the files.', time: 'Today, 2:30pm', status: 1, image: personImage },
    { id: 10, name: 'Ishita', message: 'How’s everything?', time: 'Yesterday, 4:15pm', status: 2, image: personImage }
];  
const Homepage:React.FC = () => {
  return (
    <section className="chats section">
        <div className="container">
            <div className="chats-wrapper">
                <h1 className="h1">Chats</h1>
                <div className="chats-listing">
                  {chats.map((element:Chats,index:number)=>(
                      <ChatCard chat={element} key={index}/>
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homepage;
