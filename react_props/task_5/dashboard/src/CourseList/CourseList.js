import CourseListRow from "./CourseListRow"
import CourseShape from "./CourseShape"
import PropTypes from 'prop-types'
import './CourseList.css'
const CourseList = (props) =>{
    const {listCourses} = props
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 &&(
                    <CourseListRow textFirstCell="No course available yet" isHeader={false}/>
                )}
                {listCourses.map((course)=>(
                    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))}

            </tbody>

        </table>
    )
}
CourseList.defaultProps = {
    listCourses :[]
}
CourseList.propTypes = {
    listCourses : PropTypes.arrayOf(CourseShape)
}

export default CourseList
