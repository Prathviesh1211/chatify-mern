import toast from "react-hot-toast";
import { create } from "zustand";

export const useChatStore=create((get,set)=>({
    allContacts:[],
    chats:[],
    messages:[],
    activeTab:"active",
    selectedUser:null,
    isUsersLoading:false,
    isMessagessLoading:false,
    isSoundEnabled:localStorage.getItem("isSoundEnabled")===true,

    toggleSound:()=>{
        localStorage.setItem("isSoundEnabled",!get().isSoundEnabled);
        set({isSoundEnabled:!get().isSoundEnabled});
    },

    setActive:(tab)=>set({activeTab:tab}),
    setSelectedUser:(user)=>set({selectedUser:user}),

    getAllContacts:async()=>{
        set({isUsersLoading:true});
        try{
            const res=await res.get("/messages/contacts");
            set({allContacts:res.data});
        }catch(error){
            toast.error(error.response.data.message);
        }finally{
            set({isUsersLoading:false});
        }
    },
    getMyChatPartners:async()=>{
        set({isUsersLoading:true});
        try{
            const res=await res.get("/messages/chats");
            set({chats:res.data});
        }catch(error){
            toast.error(error.response.data.message);
        }finally{
            set({isUsersLoading:false});
        }
    }

}))