"use client";
import Image from "next/image";
import { fileIcon } from "@/constants/assets";

const CareerForm: React.FC = () => {
    return (
        <div className="mt-10 mb-10 px-4 max-w-full">
            <h2 className="font-medium text-[23px] leading-[30px] mb-5 ">
                Quality Surveyor Manager
            </h2>

            <p className="mb-8 text-[#787878] text-sm leading-[24px]">
                Lorem ipsum dolor sit amet consectetur. Mauris leo pharetra convallis amet id gravida cursus mauris eu. Donec in scelerisque duis eu penatibus dolor consequat. Gravida eleifend feugiat nec egestas gravida mattis scelerisque vel ornare. Augue nam arcu vulputate pharetra odio sem. Nisi neque gravida viverra pulvinar pellentesque ac blandit iaculis arcu.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
                {/* LEFT SIDE */}
                <div className="max-w-full">
                    <h3 className="mb-5 font-medium text-lg leading-[24px]">Responsibilities</h3>
                    <ul className="list-disc pl-5 mb-6 text-[#787878] text-sm font-medium leading-[24px] space-y-2">
                        <li>Lorem ipsum dolor sit amet consectetur. Tortor mattis egestas justo velit enim ac. Sodales cursus mi mattis felis</li>
                        <li>Ullamcorper tincidunt eget sapien sit ullamcorper euismod cras praesent. Egestas netus lacus dapibus vivamus non arcu eu arcu risus.</li>
                        <li>Orci justo est urna enim semper ullamcorper mi. Et sociis habitasse nulla pharetra faucibus ut mi lectus metus.</li>
                        <li>Condimentum habitasse ultrices nunc justo.</li>
                    </ul>

                    <h3 className="mb-5 font-medium text-lg leading-[24px]">Skills</h3>
                    <ul className="list-disc pl-5 text-[#787878] text-sm font-medium leading-[24px] space-y-2">
                        <li>Lorem ipsum dolor sit amet consectetur. Tortor mattis egestas justo velit enim ac. Sodales cursus mi mattis felis</li>
                        <li>Ullamcorper tincidunt eget sapien sit ullamcorper euismod cras praesent. Egestas netus lacus dapibus vivamus non arcu eu arcu risus.</li>
                        <li>Orci justo est urna enim semper ullamcorper mi. Et sociis habitasse nulla pharetra faucibus ut mi lectus metus.</li>
                        <li>Condimentum habitasse ultrices nunc justo.</li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="max-w-full p-6 bg-[#FBFBFB] rounded-lg">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="w-full bg-white py-4 px-6 text-sm text-[#333] outline-none border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#107BC0] mb-5 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone No.*"
                        className="w-full bg-white py-4 px-6 text-sm text-[#333] outline-none border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#107BC0] mb-5 rounded"
                    />
                    <input
                        type="text"
                        name="salary"
                        placeholder="Current Salary"
                        className="w-full bg-white py-4 px-6 text-sm text-[#333] outline-none border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#107BC0] mb-5 rounded"
                    />
                    <input
                        type="text"
                        name="qualification"
                        placeholder="Qualification"
                        className="w-full bg-white py-4 px-6 text-sm text-[#333] outline-none border border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#107BC0] mb-5 rounded"
                    />

                    <div className="mb-6">
                        <label className="block font-medium text-sm mb-2 text-[#6E6E6E]">
                            Resume* [ File Types: .Pdf, .Docx, .Doc | File Size: Up To 5 MB ]
                        </label>
                        <div className="grid grid-cols-[83px_1fr]">
                            <div className="flex items-center justify-center border border-[#107BC0] border-r-0 px-4 py-6">
                                <Image src={fileIcon} width={17} height={22} alt="file icon" />
                            </div>
                            <div className="flex items-center justify-center border border-[#107BC0] px-4 py-6 cursor-pointer">
                                <span className="text-[#107BC0] font-medium text-sm text-center">UPLOAD RESUME</span>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#107BC0] rounded-[30px] px-8 py-4 font-semibold text-[15px] text-white hover:bg-[#0a5b93] transition-all duration-300">
                        SUBMIT
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CareerForm;
