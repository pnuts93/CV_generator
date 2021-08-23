const Languages = (props) => {
	return (
		<div className="languages">
			<fieldset>
				<legend>Languages:</legend>
				{props.input.map((inputField, index) => (
					<div key={index}>
						<label for="language">Language:</label>
						<input type="text" id="language" name="language" value={inputField.language} onChange={event => props.handleNestedChange(event, index)} />
						<label for="level">Level:</label>
						<select name="level" id="level" value={inputField.level} onChange={event => props.handleNestedChange(event, index)} >
							<option value="">--Please choose an option--</option>
							<option value="a1">A1</option>
							<option value="a2">A2</option>
							<option value="b1">B1</option>
							<option value="b2">B2</option>
							<option value="c1">C1</option>
							<option value="c2">C2</option>
							<option value="Mothertongue">Mothertongue</option>
						</select>
						<button className="remove" onClick={() => props.handleRemoveButton(index)} >-</button>
					</div>
				))}
				<button className="add" onClick={() => props.handleAddButton()} >+</button>
			</fieldset><br></br>
		</div>
	);
}

export default Languages;