import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addStudent, selectStudents } from "./studentSlice";
import styles from "./Student.module.css";
import { useState } from "react";
import useSyncParams from "../../hooks/useSyncParams";

export function Student() {
  const {students} = useAppSelector(selectStudents);
  const [studentToAdd, setStudentToAdd] = useState('');
  const dispatch = useAppDispatch();

  useSyncParams('students', students.join(','));

  return (
    <div>
      <div className={styles.row}>
        <h1>Student</h1>
      </div>
      <div className={styles.row}>
      <span>[{students.join(',')}]</span>
      <input
          className={styles.textbox}
          aria-label="Set student to add"
          value={studentToAdd}
          onChange={(e) => setStudentToAdd(e.target.value)}
        />
        <button className={styles.button} onClick={() => {
            dispatch(addStudent(studentToAdd));
            setStudentToAdd('');
        }}>
            Add
        </button>
      </div>
    </div>
  );
}
