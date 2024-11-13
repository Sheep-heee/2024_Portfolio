import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="pt-24">ProjectDetail</div>;
};

export default ProjectDetail;
