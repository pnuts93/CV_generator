const Skills = (props) => {
	return (
		<div className="skills">
			<fieldset>
				<legend>Skills</legend>
				{props.input.map((inputField, index) => (
					<div key={index}>
					<fieldset>
						<legend>Field</legend>
						<label for="field">What field?</label>
						<input type="text" id="field" name="field" value={inputField.field} onChange={event => props.handleNestedChange(event, index)} placeholder="3D modeling/Graphic design/..."/>
						<label for="skill">Skills/technologies:</label>
						<input type="text" id="skill" name="skill" value={inputField.skill} onChange={event => props.handleNestedChange(event, index)} placeholder="skillA, skillB, skillC, ..." cols="50" />
						<button className="remove" onClick={() => props.handleRemoveButton(index)} >-</button>
					</fieldset>
				</div>
				)) }
				<button className="add" onClick={() => props.handleAddButton()} >+</button>
			</fieldset>
		</div>
	);
}

export default Skills;