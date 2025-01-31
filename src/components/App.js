import {useState} from 'react';
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import friend from "./Friend";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];


const App = () => {

    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriends, setShowAddFriends] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleShowAddFriends = () => {
        setShowAddFriends(show => !show);
    };

    const handleAddFriend = (friend) => {
        setFriends(friends => [...friends, friend]);
        setShowAddFriends(false);
    };

    const handleSelection = (friend) => {
        setSelectedFriend(cur => cur?.id === friend.id ? null : friend);
        setShowAddFriends(false);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}/>

                {showAddFriends && <FormAddFriend onAddFriend={handleAddFriend}/>}

                <Button onClick={handleShowAddFriends}>
                    {showAddFriends ? "Close" : "Add friend"}
                </Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
        </div>
    );
};

export default App;
