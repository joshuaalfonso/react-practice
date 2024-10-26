import { useEffect, useState } from "react";
import Header from "../Header";
// import { useAuth } from "../contexts/authContext";
import { db } from "../firebase/firebase-config";

import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore';



const ExpenseTracker = () => {

    // const { email, photoUrl, userID } = useAuth().currentUser

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'expenses'), (snapshot) => {
            const expenseData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setExpenses(expenseData);
        });

        return () => unsubscribe();

    }, [])

    const formatDate = (timestamp) => {
        const date = timestamp.toDate(); // Convert Firestore Timestamp to JS Date
        return date.toLocaleDateString(); // Format the date as desired
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    };

    const addTransaction = async () => {
        const docRef = doc(db, 'expenses', 'transaction001');
        const payload = {
            userID: '012i12',
            amount: 50,
            description: {
                emoji: '🚗',
                title: 'Transport'
            },
            createdAt: new Date()
        }
        await setDoc(docRef, payload);
    }

    return (
        
        <>

        {/* {expenses} */}

            <Header />

            <section className='my-40 flex flex-col justify-center items-center'>
                <span className='text-white'>Spent this month</span>
                <span className='text-red-500 text-5xl'>₱ -1,400.00</span>
            </section>



            <section className='px-5'>  

                <ul className="bg-zinc-800">
                    {expenses.map((expense) => {
                        return (
                            <li className="bg-zinc-800 py-3 px-4 rounded-md mb-3" key={expense.id}>

                                    <h1 className='text-sm text-white opacity-50'>{isToday(expense.createdAt.toDate()) ? 'Today' : formatDate(expense.createdAt)}</h1>


                                    <div className='flex py-2'>

                                        <div className='flex grow gap-2'>
                                        <div className='grid place-items-center'>
                                            <span className="text-3xl">{expense.description.emoji}</span>
                                        </div>
                                        <div className='flex flex-col py-2'>
                                            <h1 className='text-base text-white font-medium'>{expense.description.title}</h1>
                                            <span className='text-sm text-white opacity-50'>01:42 PM</span>
                                        </div>
                                        </div>

                                        <span className='flex items-center text-red-500 font-medium text-base'>- {expense.amount} ₱</span>

                                    </div>

                            </li>
                        )
                    })}
                </ul>


                <div className="absolute grid place-items-center p-3 bottom-10 right-10 text-white bg-zinc-800 text-xl rounded-full cursor-pointer">
                    <i className='bx bx-plus' onClick={addTransaction}></i>
                </div>


            </section>

            <div className="px-5">
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col mb-3">
                        <span className="text-white/70 text-[14px] my-1">Amount</span>
                        <input
                            placeholder="Enter amount"
                            className="px-3 w-full text-[14px] bg-zinc-800 text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-white"
                            name="text"
                            type="number"
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <span className="text-white/70 text-[14px] my-1">Description</span>
                        <input
                            placeholder="Enter description"
                            className="px-3 w-full text-[14px] bg-zinc-800 text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-white"
                            name="text"
                            type="text"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExpenseTracker;