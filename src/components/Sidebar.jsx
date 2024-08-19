// Sidebar.js
import React from 'react';
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater, MdOutlineKeyboardArrowDown, MdOutlineDrafts, MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setopen } from '../redux/appslice' // Adjust the path as needed

const sidebarItems = [
    { icon: <MdInbox size={"20px"} />, text: "Inbox" },
    { icon: <IoMdStar size={"20px"} />, text: "Starred" },
    { icon: <MdOutlineWatchLater size={"20px"} />, text: "Snoozed" },
    { icon: <TbSend2 size={"20px"} />, text: "Sent" },
    { icon: <MdOutlineDrafts size={"20px"} />, text: "Drafts" },
];

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button
                    onClick={() => dispatch(setopen(true))}
                    className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
                    <LuPencil size={"24px"} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {sidebarItems.map((item, idx) => (
                    <div key={idx} className='flex items-center pl-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-r-full py-1'>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
                <div className='flex items-center pl-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-r-full py-1'>
                    <MdOutlineKeyboardArrowDown size={"20px"} />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
