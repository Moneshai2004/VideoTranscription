'use client';
import Uploadfileicon from "./UploadFileicon";

export default function UploadFile(){
    function upload(ev) {
      ev.preventDefault();
      console.log(ev);
    }
    return (

      <label className="flex gap-2 rounded-full px-4 py-2 bg-orange-500 text-white ">
        <Uploadfileicon />
        Choose Files
        <input onChange={upload} type="file" className="hidden"></input>
      </label>
    );
}