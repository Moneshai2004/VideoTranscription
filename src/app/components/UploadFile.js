'use client';
import axios from "axios";
import Uploadfileicon from "./UploadFileicon";

export default function UploadFile(){
    async function upload(ev) {
      ev.preventDefault();
      console.log(ev);
      const files = ev.target.files;
      if(files.length > 0){
        const file = file[0];
        const res = await axios.post('/api/upload',{
          file,});
      }
      }
    
    return (
      <label className="flex gap-2 rounded-full px-4 py-2 bg-amber-500 text-white ">
        <Uploadfileicon />
        Choose Files
        <input onChange={upload} type="file" className="hidden"></input>
      </label>
    );
    }