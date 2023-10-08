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
          <p className="text-gray-400 text-xs">
            We will check the location that you chose in maps
          </p>
          <div className="p-6 flex flex-col gap-3 h-96 w-96 items-center">
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
            <div className="flex flex-col gap-2 m-5 w-full items-end">
              <Button
                className="text-md w-full inline-block font-bold bg-gray-950 px-4 py-2 leading-none rounded-lg text-gray-200 hover:bg-gray-900 disabled:border-gray-700 disabled:text-gray-600"
                text="Register"
                size={ButtonSize.SMALL}
                onClick={() => setOpenModal(false)}
              />
              <Link
                className="text-xs text-gray-100 hover:text-sky-400"
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
