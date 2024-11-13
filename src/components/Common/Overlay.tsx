interface ModalOpenSet {
  modal: (value: boolean) => void;
}

const Overlay = ({ modal }: ModalOpenSet) => {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 cursor-pointer"
      onClick={() => {
        modal(false);
      }}
    ></div>
  );
};

export default Overlay;
