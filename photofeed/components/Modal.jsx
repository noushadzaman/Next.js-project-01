"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal();
        }
    }, [])

    function onHide() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-rose-500 shadow-md border border-rose-400 flex flex-col p-2 rounded-md"
        >
            <span
                onClick={onHide}
                className="flex justify-end cursor-pointer"
            >
                <Image
                    src={'/xmark.svg'}
                    width={30}
                    height={30}
                    alt="close"
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    )
};

export default Modal;