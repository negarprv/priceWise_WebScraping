"use client";

import {
  CloseButton,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const Model = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} type="button" className="btn">
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opcaity-100"
              leave="ease-in duration-200"
              leaveFrom="opcaity-100"
              leaveTo="opcaity-0"
            >
              <div className="fixed inset-0" />
            </TransitionChild>

            <span
              className=" inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave=" ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opcaity-0 scale-95"
            >
              <div className="dialog-content">
                <div className=" flex flex-col">
                  <div className="flex justify-between">
                    <div className=" p-3 border border-gray-200 rounded-10">
                      <Image
                        width={28}
                        height={28}
                        src="/assets/icons/logo.svg"
                        alt="logo"
                      />
                    </div>

                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={24}
                      height={24}
                      className=" cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  <h4 className=" dialog-head_text">
                    Stay updated with product pricing alerts right in your
                    inbox!
                  </h4>

                  <p className=" text-sm text-gray-600 mt-2">
                    Never miss a bargain again with our timely alerts!
                  </p>
                </div>

                <form className=" flex flex-col mt-5">
                  <label
                    htmlFor="email"
                    className=" text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className=" dialog-input_container">
                    <Image
                      src="/assets/icons/mail.svg"
                      alt="mail"
                      width={18}
                      height={18}
                    />

                    <input
                      required
                      type="email"
                      id="email"
                      className="dialog-input"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button type="submit" className=" dialog-btn">
                    Track
                  </button>
                </form>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Model;
