"use client";
import React, {useEffect } from "react";
import { X } from "lucide-react";
import RegisterInterestForm from "../partners/channel/RegisterInterestForm";
import {
  ENQUIRY_CONFIG,
  ENQUIRY_FORM_SECTIONS,
} from "@/constants/pages/mediaCenter";
import { EnquireNowModalProps } from "@/types/common/enquireNow";

const EnquireNowModal: React.FC<EnquireNowModalProps> = ({
  isOpen,
  onClose,
}) => {
  const config = ENQUIRY_CONFIG;
  useEffect(() => {
    if (!isOpen) {     
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center sm:p-4 p-2 overflow-y-auto">
      <div className="bg-white rounded-lg w-full px-6 max-w-[637px] relative max-h-[95vh] overflow-y-auto pb-10 sm:mt-0 mt-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="top-4 right-4 float-right m-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          <X size={24} strokeWidth={2} />
        </button>        
          <>
            {/* Modal Header */}
            <div className="pt-12 pb-6 px-8">
              <h3 className="text-center font-lemon-milk text-[24px] leading-[60px] tracking-[1%] uppercase text-[#107BC0]">
                ENQUIRE NOW
              </h3>
            </div>

            <RegisterInterestForm
              title=""
              titleLines={[]}
              sections={ENQUIRY_FORM_SECTIONS}
              submitButtonText={config.registerForm.submitButtonText}
              checkboxLabel={config.registerForm.checkboxLabel}
              privacyPolicyText={config.registerForm.privacyPolicyText}
              onClose={onClose}
            />
          </>       
      </div>
    </div>
  );
};

export default EnquireNowModal;
