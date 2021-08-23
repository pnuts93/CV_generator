const Experience = (props) => {
	return (
		<div className="experience">
			<fieldset className="Container">
				<legend>What is your professional experience?</legend>
					{ props.input.map((inputField, index) => (
						<div key={index}>
						<fieldset className="Field">
							<legend>Describe your experience:</legend>
							<label for="sdate">Starting date:</label>
							<input type="date" id="sdate" name="sdate" value={inputField.sdate} onChange={event => props.handleNestedChange(event, index)} />
							<label for="fdate">Finishing date:</label>
							<input type="date" id="fdate" name="fdate" value={inputField.fdate} onChange={event => props.handleNestedChange(event, index)} />
							<label for="city">City:</label>
							<input type="text" id="city" name="city" value={inputField.city} onChange={event => props.handleNestedChange(event, index)} /><br></br><br></br>
							<label for="position">Position:</label>
							<input type="text" id="position" name="position" value={inputField.position} onChange={event => props.handleNestedChange(event, index)} />
							<label for="company">Company:</label>
							<input type="text" id="company" name="company" value={inputField.company} onChange={event => props.handleNestedChange(event, index)} /><br></br><br></br>
							<label for="description">Describe your activities:</label><br></br><br></br>
							<textarea id="description" name="description" value={inputField.description} placeholder="As Project Manager/Software Developer/... my main responsibilities concerned..." cols="100" onChange={event => props.handleNestedChange(event, index)} /><br></br><br></br>
							<button className="remove" onClick={() => props.handleRemoveButton(index)} >-</button>
						</fieldset><br></br>
						</div>
					)) }
				<button className="add" onClick={props.handleAddButton}>+</button>
			</fieldset>
		</div>
	);
}

export default Experience;