import React, { useState } from 'react';
import './App.css';
import Navbar from "./navbar";
import Intro from "./intro";
import PersonalData from "./p_data";
import Experience from './experience';
import Education from './education';
import Languages from './languages';
import Skills from './skills';
import Other from './other';

function App() {

	const handleChange = (event) => {
		const value = event.target.value;
		setState ({
			...introInput,
			[event.target.name]: value
		});
		console.log(value);
	}

	const handleNestedChangeJob = (event, index) => {
		const values = [...jobExp];
		values[index][event.target.name] = event.target.value;
		setState1(values);
		console.log(event.target.value);
	}

	const handleAddButtonJob = () => {
		setState1([...jobExp, {sdate: "", fdate: "", city: "", position: "", company: "", description: ""}]);
	}

	const handleRemoveButtonJob = (index) => {
		const values = [...jobExp];
		values.splice(index, 1);
		setState1(values);
	}

	const handleNestedChangeEdu = (event, index) => {
		const values = [...edu];
		values[index][event.target.name] = event.target.value;
		setState2(values);
		console.log(event.target.value);
	}

	const handleAddButtonEdu = () => {
		setState2([...edu, {sdate: "", fdate: "", city: "", category: "", uni: "", degree: "", grade: "", descrption: ""}]);
	}

	const handleRemoveButtonEdu = (index) => {
		const values = [...edu];
		values.splice(index, 1);
		setState2(values);
	}

	const handleNestedChangeLang = (event, index) => {
		const values = [...languages];
		values[index][event.target.name] = event.target.value;
		setState3(values);
		console.log(event.target.value);
	}

	const handleAddButtonLang = () => {
		setState3([...languages, {language: "", level: ""}]);
	}

	const handleRemoveButtonLang = (index) => {
		const values = [...languages];
		values.splice(index, 1);
		setState3(values);
	}

	const handleNestedChangeField = (event, index) => {
		const values = [...fields];
		values[index][event.target.name] = event.target.value;
		setState4(values);
		console.log(event.target.value);
	}

	const handleAddButtonField = () => {
		setState4([...fields, {field: "", skill: [""]}]);
	}

	const handleRemoveButtonField = (index) => {
		const values = [...fields];
		values.splice(index, 1);
		setState4(values);
	}

	const handlePic = (event) => {
		if (event.target.files && event.target.files[0]){
		let picValue = event.target.files[0];
		setState({
			[event.target.name]: picValue
		})}
	}

	const [introInput, setState] = useState([{
		profile: "", pic: "",
		fname: "", lname: "", birthday: "dd-mm-yyyy", nationality: "", gender: "--Please choose an option--", number: "", email: "", address: "", zip: "", city: "",
		publications: ""
	}]);

	const [jobExp, setState1] = useState([{
		sdate: "", fdate: "", city: "", position: "", company: "", description: ""
	}])

	const [edu, setState2] = useState([{
		sdate: "", fdate: "", city: "", category: "", uni: "", degree: "", grade: "", descrption: ""
	}])

	const [languages, setState3] = useState([{
		language: "", level: ""
	}])

	const [fields, setState4] = useState([{
		field: "", skill: ""
	}])

	const [license, setState5] = useState([{
		a: false, a1: false, a2: false, b: false, c: false, d: false, e: false
	}])

	return (
		<div className="App">
			<div className="compile">
				<Navbar />
				<Intro input={introInput} image={handlePic} handleChange={handleChange} />
				<PersonalData input={introInput} handleChange={handleChange} />
				<Experience input={[...jobExp]} handleNestedChange={handleNestedChangeJob} handleAddButton={handleAddButtonJob} handleRemoveButton={handleRemoveButtonJob} />
				<Education input={[...edu]} handleNestedChange={handleNestedChangeEdu} handleAddButton={handleAddButtonEdu} handleRemoveButton={handleRemoveButtonEdu}/>
				<Languages input={[...languages]} handleNestedChange={handleNestedChangeLang} handleAddButton={handleAddButtonLang} handleRemoveButton={handleRemoveButtonLang} />
				<Skills input={[...fields]} handleNestedChange={handleNestedChangeField} handleAddButton={handleAddButtonField} handleRemoveButton={handleRemoveButtonField} />
				<Other checkbox={license} input={introInput} handleChange={handleChange} handleChecked={setState5} />
			</div>
			<div className="preview">
				<div className="side">
					<div className="personalData">
						<h1>{introInput.fname}</h1>
						<h1>{introInput.lname}</h1><br></br>
						<p className="sideDescription">Address:</p>
						<p className="content">{introInput.address}, {introInput.city}, {introInput.zip}</p>
						<p className="sideDescription">Email:</p>
						<p className="content">{introInput.email}</p>
						<p className="sideDescription">Phone Number:</p>
						<p className="content">{introInput.number}</p>
						<p className="sideDescription">Gender:</p>
						<p className="content">{introInput.gender}</p>
						<p className="sideDescription">Birthday:</p>
						<p className="content">{introInput.birthday}</p>
					</div>
					<h2>Languages</h2>
					{ [...languages].map((inputField, index) => (
						<div key={index}>
							<p>{inputField.language}	-{inputField.level}</p>
						</div>
					))}
				</div>
				<div className="main">
					<h2>Profile</h2>
					<p>{introInput.profile}</p>
					<h2>Professional experience</h2>
					{ [...jobExp].map((inputField, index) => (
						<div key={index}>
							<p>{inputField.sdate} - {inputField.fdate}, {inputField.city}</p>
							<p>{inputField.position} - {inputField.company}</p>
							<p>{inputField.description}</p>
						</div>
					)) }
					<h2>Education and training</h2>
					{ [...edu].map((inputField, index) => (
						<div key={index}>
							<p>{inputField.sdate} - {inputField.fdate}, {inputField.city}</p>
							<p>{inputField.uni}, {inputField.category} in {inputField.degree} - {inputField.grade}</p>
							<p>{inputField.description}</p>
						</div>
					)) }
					<h2>Technical skills</h2>
					{ [...fields].map((inputField, index) => (
						<div key={index}>
							<p>{inputField.field}</p>
							<p>{inputField.skill}</p>
						</div>
					))}
					<h2>Publications</h2>
					<p>{introInput.publications}</p>
				</div>
			</div>
		</div>
	);
}

export default App;
