const Education = (props) => {
	return (
		<div className="education">
			<fieldset>
				<legend>What is your educational background?</legend>
				{ props.input.map((inputField, index) => (
					<div key={index}>
						<fieldset>
							<legend>Describe your experience:</legend>
							<label for="sdate">Starting date:</label>
							<input type="date" id="sdate" name="sdate" value={inputField.sdate} onChange={event => props.handleNestedChange(event, index)} />
							<label for="fdate">Finishing date:</label>
							<input type="date" id="fdate" name="fdate" value={inputField.fdate} onChange={event => props.handleNestedChange(event, index)} />
							<label for="city">City:</label>
							<input type="text" id="city" name="city" value={inputField.city} onChange={event => props.handleNestedChange(event, index)} />
							<label for="category">Category:</label>
							<select name="category" id="category" value={inputField.category} onChange={event => props.handleNestedChange(event, index)}>
							<option value="">--Please choose an option--</option>
							<option value="diploma">Diploma</option>
							<option value="bachelor">Bachelor</option>
							<option value="master">Master</option>
							<option value="professional course">Professional course</option>
							</select><br></br><br></br>
							<label for="uni">University/provider:</label>
							<input type="text" id="uni" name="uni" value={inputField.uni} onChange={event => props.handleNestedChange(event, index)} />
							<label for="degree">Degree:</label>
							<input type="text" id="degree" name="degree" value={inputField.degree} onChange={event => props.handleNestedChange(event, index)} />
							<label for="grade">Grade:</label>
							<input type="text" id="grade" name="grade" value={inputField.grade} onChange={event => props.handleNestedChange(event, index)} /><br></br><br></br>
							<label for="description">Describe your activities:</label><br></br><br></br>
							<textarea id="description" name="description" value={inputField.description} onChange={event => props.handleNestedChange(event, index)} placeholder="The master degree I attended focused on ..." cols="100"/><br></br><br></br>
							<button className="remove" onClick={() => props.handleRemoveButton(index)} >-</button>
						</fieldset><br></br>
					</div>
				)) }
				<button className="add" onClick={() => props.handleAddButton()} >+</button>
			</fieldset>
		</div>
	);
}

export default Education;