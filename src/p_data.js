const PersonalData = (props) => {
	return (
		<div className="p_data">
			<fieldset className="Container">
				<legend>Insert your personal data and your contact information:</legend>
				<label for="fname">First name:</label>
				<input type="text" id="fname" name="fname" value={props.input.fname} onChange={props.handleChange}/>
				<label for="lname">Last name:</label>
				<input type="text" id="lname" name="lname" value={props.input.lname} onChange={props.handleChange}/><br></br><br></br>
				<label for="birthday">Birthday:</label>
				<input type="date" id="birthday" name="birthday" value={props.input.birthday} onChange={props.handleChange}/>
				<label for="nationality">Nationality:</label>
				<input type="text" id="nationality" name="nationality" value={props.input.nationality} onChange={props.handleChange}/>
				<label for="gender">Gender:</label>
				<select name="gender" id="gender" value={props.input.gender} onChange={props.handleChange}>
				<option value="">--Please choose an option--</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="non binary">Non-binary</option>
				<option value="not declared">I prefer not to declare it</option>
				</select><br></br><br></br>
				<label for="number">Phone number:</label>
				<input type="tel" id="number" name="number" value={props.input.number} onChange={props.handleChange}/>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" value={props.input.email} onChange={props.handleChange}/><br></br><br></br>
				<label for="address">Address:</label>
				<input type="text" id="address" name="address" value={props.input.address} onChange={props.handleChange}/>
				<label for="zip">ZIP code:</label>
				<input type="text" id="zip" name="zip" value={props.input.zip} onChange={props.handleChange}/>
				<label for="city">City:</label>
				<input type="text" id="city" name="city" value={props.input.city} onChange={props.handleChange}/>
			</fieldset>
		</div>
	)
}

export default PersonalData;