import { useState } from "react"
import Container from "../components/container/container"
import { v4 as uuid } from 'uuid'
import StudentItem from "./components/StudentItem";


export default function StudentForm() {

    const initialData = [
        {
            id: uuid(),
            firstName: 'Vardas 1',
            lastName: 'Pavardė 1',
            age: 25,
            phone: '+3704564879',
            email: 'vardas1@gmail.com',
            itSkills: 7,
            group: 'feu 3',
            itLanguage: ['JavaScript', 'PHP'],
        },
        {
            id: uuid(),
            firstName: 'Vardas 2',
            lastName: 'Pavardė 2',
            age: 32,
            phone: '+37045645455',
            email: 'vardas3@gmail.com',
            itSkills: 10,
            group: 'feu 1',
            itLanguage: ['Pyhton'],
        },
        {
            id: uuid(),
            firstName: 'Vardas 3',
            lastName: 'Pavardė 3',
            age: 20,
            phone: '+3704564879',
            email: 'vardas3@gmail.com',
            itSkills: 2,
            group: 'feu 4',
            itLanguage: ['PHP'],
        },
        {
            id: uuid(),
            firstName: 'Vardas 4',
            lastName: 'Pavardė 4',
            age: 40,
            phone: '+3704564879',
            email: 'vardas5@gmail.com',
            itSkills: 4,
            group: 'feu 3',
            itLanguage: [],
        },
        {
            id: uuid(),
            firstName: 'Vardas 5',
            lastName: 'Pavardė 5',
            age: 25,
            phone: '+3704564879',
            email: 'vardas5@gmail.com',
            itSkills: 7,
            group: 'feu 3',
            itLanguage: ['JavaScript', 'PHP'],
        },
    ];


    const formItLanguage = ['JavaScript', 'PHP', "Node.js", 'C++']
    const [createdStudent, setCreatedStudent] = useState(initialData)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [itSkills, setItSkills] = useState('')
    const [group, setGroup] = useState()
    const [itLanguage, setItLanguage] = useState([])
    const [isPyhtonCheck, setIsPyhtonCheck] = useState(false)


    // cia prasideda kita budas spresti sita
    // const formGroups = ['feu 1', 'feu 2', 'feu 3', 'feu 4', 'feu 5']
    // const formItLanguage = ['JavaScript', 'PHP', "Node.js", 'C++']

    // const [studentEditMode, setStudentEditMode] = useState(false) 
    // nebutina kurti state naujo nes turim id tai galim palei id tikrinti kuriame mode mes dbr esame

    // validaticija iskviesti error elementa (span)
    // const [formIsInvalid, setFormIsInvalid] = useState(false)
    // const [nameInputError, setNameInputError] = useState('')
    // const [surnameInputError, setSurnameInputError] = useState('')
    // const [formErrorMessage, setFormErrorMessage] = useState('')

    // const [formData, setFormData] = useState({
    //     id: null,
    //     firstName: '',
    //     lastName: '',
    //     age: '',
    //     phone: '',
    //     email: '',
    //     itKnowledge: '',
    //     group: '',
    //     itLanguage: [],
    // })
    // // ant formos value formData.firstName
    // // namehnalder dek and formoje esancio firstname
    // const nameHandler = event => {
    //     console.log(formData)
    //     setFormData(prevState => {
    //         const updatedData = { ...prevState }
    //         updatedData.firstName = event.target.value
    //         return updatedData
    //         // const updatedData = {...prevState, name: event.target.value}
    //         // return updatedData
    //     })
    // }
    // const surnameHandler = event => {
    //     console.log(event.target.name)
    //     // nes mes surname handler naudojame ant surname html input

    //     setFormData(prevState => {
    //         const updatedData = { ...prevState }
    //         updatedData.lastName = event.target.value
    //         return updatedData
    //         // const updatedData = {...prevState, name: event.target.value}
    //         // return updatedData
    //     })
    // }

    // const interestChangeHandler = event => {
    //     setFormData(prevState => {
    //         const value = event.target.value
    //         const updatedData = { ...prevState }

    //         if (updatedData.itLanguage.includes(value)) {
    //             updatedData.itLanguage = updatedData.itLanguage.filter(interest => interest !== value)
    //         } else {
    //             updatedData.itLanguage = [...updatedData.itLanguage, value]
    //         }
    //         return updatedData
    //     })
    // }

    // const formInputHandler = event => {
    //     const updatedData = { ...prevState }
    //     updatedData[event.target.value] = event.target.value
    //     // huij znajet kodel taip reikia bet kazkodel visus paema formoje kurie turi onchange={formInputHandler}
    //     // ant radio visu reikia uzdeti onChange
    //     return updatedData
    // }

    // const formSubmitHandler = (event) => {
    //     event.preventDefault()

    // formos validacija

        // let formIsValid = true
        // setNameInputError('')
        // setSurnameInputError('')
        // setFormErrorMessage('')

        // if (!formData.name) {
        //     setNameInputError('Laukelis privalo buti uzpildytas')
        //     formIsValid = false
        // } else if (formData.name.length < 3) {
        //     setNameInputError('vardas privalo tureti bent 3 simbolius')
        //     formIsValid = false   
        // } 

        // if (!formData.surname) {
        //     setSurnameInputError('Laukelis privalo buti uzpildytas')
        //     formIsValid = false
            
        // } else if (formData.surname.length < 3) {
        //     setSurnameInputError('vardas privalo tureti bent 3 simbolius')
        //     formIsValid = false
        // }

        // if (!formIsValid) {
        //     setFormErrorMessage('Ne visi laukeliai uzpildyti')
        //     return
        // }
    //     // jeigu nenaudoji event handleri tada darai sita on submit handler

    //     // const interestInputs = [...event.target.itLanguage]
    //     // const selectedInputs = interestInputs.filter(interest => interest.checked )
    //     // const studentInterests = selectedInputs.map(interest => interest.value)

    //     // const studentInterests = [...event.target.itLanguage].filter(interest => interest.checked).map(interest => interest.value)
    //         if(formData.id) {
    //             setCreatedStudent(prevState => {
    //                 const updatedData = [...prevState]
    //                 const editStudentIndex = updatedData.findIndex(student => student.id === formData.id)
    //                 updatedData.splice(editStudentIndex, 1, formData)
    //                 return updatedData
    //             })
    //         } else {
    // //        setCreatedStudent(prevState => [{ ...formData, id: uuid() }, ...prevState])
    //         }
    // }

    // const editStudentHandler = id => {
    //     const editStudentData = studentsList.find(student => student !== id)
    //     setFormData(editStudentData)

    // }
    


    // cia tas budas kur as dariau ir visada darydavom


    const firstNameHandler = (event) => setFirstName(event.target.value)
    const lastNameHandler = (event) => setLastName(event.target.value)
    const ageHandler = (event) => setAge(event.target.value)
    const phoneHandler = (event) => setPhone(event.target.value)
    const emailHandler = (event) => setEmail(event.target.value)
    const itSkillsHandler = (event) => setItSkills(event.target.value)
    const groupHandler = (event) => setGroup(event.target.value)
    const [selectedInterests, setSelectedInterests] = useState([]);

    const languageHandler = (event) => {
        const { value, checked } = event.target
        if (checked) {
            setItLanguage((prevState) => [...prevState, value])

        } else {
            setItLanguage((prevState) => {
                return prevState.filter(language => language !== value)
            })
        }
    }

    const checkboxHandler = (event) => {
        const interest = event.target.value
        if (event.target.checked) {
            setSelectedInterests([...selectedInterests, interest])
        } else {
            setSelectedInterests(selectedInterests.filter(i => i !== interest))
        }

    }

    // const interestChangeHandler = event => {
    //     setFormData(prevState => {
    //         const value = event.target.value
    //         const updatedData = { ...prevState }

    //         if (updatedData.itLanguage.includes(value)) {
    //             updatedData.itLanguage = updatedData.itLanguage.filter(interest => interest !== value)
    //         } else {
    //             updatedData.itLanguage = [...updatedData.itLanguage, value]
    //         }
    //         return updatedData
    //     })
    // }


    const formSubmitHandler = (event) => {
        event.preventDefault()

        // jeigu nenaudoji event handleri tada darai sita on submit handler

        const interestInputs = [...event.target.itLanguage]
        const selectedInputs = interestInputs.filter(interest => interest.checked)
        const studentInterests = selectedInputs.map(interest => interest.value)
        // cia trumpenis metodas, bet painiau?
        // const studentInterests = [...event.target.itLanguage].filter(interest => interest.checked).map(interest => interest.value)


        const newStudent = {
            id: uuid(),
            firstName,
            lastName,
            age,
            phone,
            email,
            itSkills,
            group,
            itLanguage: studentInterests,
        }
        setCreatedStudent(prevState => [newStudent, ...prevState])
    }

    const deleteHandler = (id) => {
        setCreatedStudent(prevState => prevState.filter(student => student.id !== id))
    }

    const editHandler = (student) => {
        const { age, email, itSkills, firstName, phone, lastName, group, itLanguage } = student.data

        setFirstName(firstName)
        setLastName(lastName)
        setAge(age)
        setEmail(email)
        setPhone(phone)
        setItSkills(itSkills)
        setGroup(group)
        setItLanguage(itLanguage)

    }


    return (
        <Container>
            <form onSubmit={formSubmitHandler} id="student-htmlForm" >
                <div className="Form-control">
                    <label htmlFor="first-name">First name:</label>
                    <input type="text" name="first-name" id="firstName" value={firstName} onChange={firstNameHandler} placeholder="Enter your first name" />
                    {/* <span>{setNameInputError}</span> */}
                    {/* <span>{setSurnameInputError}</span> */}
                </div>

                <div className="Form-control">
                    <label htmlFor="last-name">Last name:</label>
                    <input type="text" name="last-name" id="lastName" value={lastName} onChange={lastNameHandler} placeholder="Enter your last name" />
                </div>

                <div className="Form-control">
                    <label htmlFor="age">Your age:</label>
                    <input type="number" name="age" id="age" value={age} onChange={ageHandler} placeholder="Enter your age" />
                </div>

                <div className="Form-control">
                    <label htmlFor="tel">Phone number:</label>
                    <input type="tel" name="phone" id="phone" value={phone} onChange={phoneHandler} placeholder="Enter your phone number" />
                </div>

                <div className="Form-control">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} placeholder="Enter your email address" />
                </div>

                <div className="Form-control">
                    <label htmlFor="range">Rate your IT skills</label>
                    <input type="range" name="itKnowledge" id="itKnowledge" value={itSkills} onChange={itSkillsHandler} min="1" max="10" step="1" />
                    <output id="it-knowledge-output"></output>
                </div>

                <fieldset onChange={groupHandler}>
                    <legend>Please select your group:</legend>
                    <div>

                        {/* {groups.map((group, index) => {
                            <div key={index} className="Form-control">
                                <input

                                    type="radio" name="radio" id={`group-${index}`} value={group} />
                                <label htmlFor={`group-${index}`}>{group.toUpperCase()}</label>
                            </div>
                        })} */}
                        <div className="Form-control">
                            <input

                                type="radio" name="radio" id="feu1" value="feu-1" />
                            <label htmlFor="feu1">FEU 1gr</label>
                        </div>
                        <div className="Form-control">
                            <input
                                type="radio" name="radio" id="feu2" value="feu-2" />
                            <label htmlFor="feu2">FEU 2gr</label>
                        </div>
                        <div className="Form-control">
                            <input

                                type="radio"
                                name="radio"
                                id="feu3"
                                value="feu-3" />
                            <label htmlFor="feu3">FEU 3gr</label>
                        </div>
                        <div className="Form-control">
                            <input
                                type="radio"
                                name="radio"
                                id="feu4"
                                value="feu-4" />
                            <label htmlFor="feu4">FEU 4gr</label>
                        </div>
                        <div className="Form-control">
                            <input

                                type="radio"
                                name="radio"
                                id="feu5"
                                value="feu-5" />
                            <label htmlFor="feu5">FEU 5gr</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset onChange={languageHandler}>
                    <legend>Please select your favourite IT languages</legend>

                    <div >
                        {formItLanguage.map((interest, index) => {
                            <>
                                <input
                                    key={index}
                                    // checked={selectedInterests.includes(interest)}
                                    // onChange={checkboxHandler}
                                    type='checkbox'
                                    name='interest'
                                    id={`interest-${index}`}
                                    value={interest} />
                                <label htmlFor={`interest-${index}`}>{interest}</label>
                            </>
                        })}
                    </div>

                    {/* <div>
                        <input

                            type="checkbox"
                            name="interest"
                            id="interest-2"
                            value="javascript" />
                        <label htmlFor="interest-2">JavaScript</label>
                    </div>

                    <div>
                        <input

                            type="checkbox"
                            name="interest"
                            id="interest-3"
                            value="php" />
                        <label htmlFor="interest-3">PHP</label>
                    </div>

                    <div>
                        <input

                            type="checkbox"
                            name="interest"
                            id="interest-4"
                            value="c++" />
                        <label htmlFor="interest-4">C++</label>
                    </div> */}
                </fieldset>

                <input type="submit" 
                // value={FormData.id} ? 'Edit Student' : "Create Student" 
                value="Create Student"
                
                />
            </form>

            {createdStudent && createdStudent.length > 0 && createdStudent.map((student) =>
                <StudentItem
                    key={student.id}
                    data={student}
                    onDelete={deleteHandler}
                    onEdit={editHandler}
                ></StudentItem>
            )}

        </Container>

    )
}