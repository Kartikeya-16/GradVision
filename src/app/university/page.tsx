import React from 'react'
import UniversityHome from './UniversityHome'
import Introduction from './Introduction';
import AcademicExcellence from './AcademicExcellence';
import Campus from './Campus';
import FacultyAndStaff from './FacultyAndStaff';
import WallOfFame from './WallOfFame';
import AluminiReviews from './AluminiReviews';

const page = () => {
  return (
    <div>
      <UniversityHome />
      <Introduction />
      <AcademicExcellence />
      <Campus />
      <FacultyAndStaff />
      <WallOfFame />
      <AluminiReviews />
    </div>
  )
}

export default page
