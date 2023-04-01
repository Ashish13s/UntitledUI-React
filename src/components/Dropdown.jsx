import React from "react";

function Dropdown() {
    return (
        <div className="w-full lg:max-w-sm">
            <select className="w-full p-2.5 px-10 text-black bg-white border rounded-md shadow-sm outline-slate-600">
                <option selected>Recent changes</option>
            </select>
        </div>
    );
}
export default Dropdown;