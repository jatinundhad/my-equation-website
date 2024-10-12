import React from "react";
import styles from "./Courses.module.css"

const coursesData = [
  {
    title: "Robotics",
    description:
      "Go to this step by step guideline process on how to certify for your weekly benefits:",
  },
  {
    title: "Artificial Intelligence",
    description: "Learn the basics of AI and how it's changing the world.",
  },
  {
    title: "Data Science",
    description:
      "Discover the power of data science and how it's used in real-world applications.",
  },
  {
    title: "Cyber Security",
    description: "Protect yourself and your organization from cyber threats.",
  },
];

function Courses() {

  return (
    <div className="courses-container-wrapper">
      <h1 className={styles["heading"]}>Our Courses</h1>
      <div className={styles["courses-container"]}>
        {coursesData.map((course, index) => (
          <div key={index} className={styles["course-container"]}>
            <div className={styles["go-corner"]} href="#">
              <div className={styles["go-arrow"]}>→</div>
            </div>
            <img
              className={styles["course-icon"]}
              src="images/robotics.svg"
              alt="Robotics"
            ></img>
            <h5 className={styles["course-title"]}>{course.title}</h5>
            <p className={styles["course-description"]}>{course.description}</p>
          </div>
        ))}
        </div>
        <button className={styles["view-all-btn"]}><a href="{{}}">View More</a></button>
    </div>
  );
}


export default Courses;
