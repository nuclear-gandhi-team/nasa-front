import { Dispatch, FC, SetStateAction } from 'react';

import Button, { ButtonSize } from '../common/Button';
import Input from '../common/Input';
import Link from '../common/Link';
import Modal from '../common/Modal';

export interface EnrollModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  marker: string | undefined;
}

const EnrollModal: FC<EnrollModalProps> = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal && (
        <Modal>
          <div className="p-6 flex flex-col gap-3 h-96 w-96">
            <div className="flex w-full gap-4 flex-col">
              <Input
                placeholder="defender123"
                htmlFor="username"
                id="username"
                label="Username"
              />
              <Input
                placeholder="example@gmail.com"
                htmlFor="email"
                id="email"
                label="Email"
              />
              <Input
                placeholder="*********"
                htmlFor="password"
                id="password"
                label="Password"
                type="password"
              />
            </div>
            <div className="flex flex-col items-end gap-2 m-5">
              <Button
                text="Register"
                size={ButtonSize.SMALL}
                onClick={() => setOpenModal(false)}
              />
              <Link
                className="text-xs text-gray-400 hover:text-sky-400"
                onClick={() => setOpenModal(false)}
              >
                Close Modal
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EnrollModal;
