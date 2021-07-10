import React from "react";
import { useDispatch } from "react-redux";
import ModalForm from "./ModalForm/ModalForm";
import { loginOut, modalLogout } from "../../redux/slice";
import styles from "./Modal.module.css";

const {
  modalWrapper,
  modalContent,
  modalLogout_p,
  modalLogout_btn,
  yes_no_btn_header,
} = styles;

const Modal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalLogout(false));
  };

  return (
    <ModalForm onClose={closeModal}>
      <div className={modalWrapper}>
        <div className={modalContent}>
          <p className={modalLogout_p}>Ти дійсно бажаєш вийти🤔?</p>
          <div className={modalLogout_btn}>
            <button
              type="button"
              className={yes_no_btn_header}
              onClick={() => dispatch(loginOut(), closeModal())}
            >
              Так
            </button>
            <button
              type="button"
              className={yes_no_btn_header}
              onClick={() => {
                closeModal();
              }}
            >
              Ні
            </button>
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default Modal;
