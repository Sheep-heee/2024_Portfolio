const ContactSlide = () => {
  return (
    <div className="w-full flex gap-10">
      <div className="grow h-96 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src="/img/contact1.png"
          alt="contact img1"
        />
      </div>
      <div className="grow w-165 h-96 overflow-hidden rounded-3xl">
        <div className="w-full h-full rounded-3xl p-4 border-3 border-grey bg-lightGrey">
          <div className="w-full h-full rounded-2xl border border-blue overflow-hidden relative">
            <img
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/img/pattern_blue_first.png"
              alt="contact pattern blue"
            />
          </div>
        </div>
      </div>
      <div className="grow h-96 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src="/img/contact3.png"
          alt="contact img3"
        />
      </div>
    </div>
  );
};

export default ContactSlide;
