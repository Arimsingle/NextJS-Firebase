import { useState, useEffect } from "react"
import firebase from "../lib/firebase";
const Index = () => {
    useEffect(() => {
    }, [0])
    const Upload = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection('UserF').add({
            name: user.name,
            age: user.age,
            country: user.country
        });
        setUser({ 
            name: '',
            age: '',
            country: '' 
        })
    }
    const writeUserData = (e) => {
        e.preventDefault();
        const db = firebase.database();
        const userRef = db.ref('UserD').push({
            name: user.name,
            age: user.age,
            country: user.country
        })
        setUser({ 
            name: '',
            age: '',
            country: '' 
        })

    }
    const [user, setUser] = useState({
        name: '',
        age: '',
        country: ''
    })
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div>
                    <label>Age</label>
                    <input type='text' value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />
                </div>
                <div>
                    <label>Country</label>
                    <input type='text' value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })} />
                </div>
                <button onClick={Upload}>Add to fireStore</button>
                <button onClick={writeUserData}>Add to datebase</button>
                <div>
                    Name:{user.name}
                </div>
                <div>
                    Age:{user.age}
                </div>
                <div>
                    Country:{user.country}
                </div>
            </form>
        </div>
    )
}
export default Index;