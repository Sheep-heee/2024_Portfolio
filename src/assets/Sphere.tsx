const Sphere = () => {
  return (
    <div className="perspective-1000">
      <div className="w-12 h-12 relative preserve-3d animate-sphereY">
        {/* X Axis */}
        <div className="circle circleBorder rotate3d-x-0"></div>
        <div className="circle circleBorder rotate3d-x-25"></div>
        <div className="circle circleBorder rotate3d-x-50"></div>
        <div className="circle circleBorder rotate3d-x-75"></div>
        <div className="circle circleBorder rotate3d-x-100"></div>
        <div className="circle circleBorder rotate3d-x-125"></div>
        <div className="circle circleBorder rotate3d-x-150"></div>
        {/* Y Axis */}
        <div className="circle circleBorder rotate3d-y-0"></div>
        <div className="circle circleBorder rotate3d-y-25"></div>
        <div className="circle circleBorder rotate3d-y-50"></div>
        <div className="circle circleBorder rotate3d-y-75"></div>
        <div className="circle circleBorder rotate3d-y-100"></div>
        <div className="circle circleBorder rotate3d-y-125"></div>
        <div className="circle circleBorder rotate3d-y-150"></div>
        {/* Z Axis */}
        <div className="circle rotate3d-z-0"></div>
        <div className="circle rotate3d-z-25"></div>
        <div className="circle rotate3d-z-50"></div>
        <div className="circle rotate3d-z-75"></div>
        <div className="circle rotate3d-z-100"></div>
        <div className="circle rotate3d-z-125"></div>
        <div className="circle rotate3d-z-150"></div>
      </div>
    </div>
  );
};

export default Sphere;
