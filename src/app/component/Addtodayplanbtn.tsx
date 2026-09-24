'use client'
import React,{useContext} from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Icard } from '../type/cardtype';
import { ExerciseContext } from '../Context/ExerciseContext';
import {  toast } from 'react-toastify';
const Addtodayplanbtn = ({card}:{card:Icard}) => {
    const {planexercise, setPlanexercise} = useContext(ExerciseContext) as {
        planexercise: Icard[];
        setPlanexercise: React.Dispatch<React.SetStateAction<Icard[]>>;
    };
    const handleplan = ()=> {
        const alreadyAdded = planexercise.find( (exercise) => exercise.id === card.id ); if (alreadyAdded) { toast.error("You already added this exercise!"); return; }
        setPlanexercise([...planexercise,card]);
        toast.success(`${card.name}read completet `)
    }

    return (
        <div>
            <button onClick={()=>handleplan()} className="btn bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold border-none flex-1 rounded-xl"
            >
              <FiCalendar className="text-base" /> Add to today&apos;s plan
            </button>
            
        </div>
    );
};

export default Addtodayplanbtn;