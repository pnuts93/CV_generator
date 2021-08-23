const Intro = (props) => {
	return (
		<div className="intro">
			<fieldset className="Container">
				<legend>First steps:</legend>
				<label for="profile">Describe yourself in two sentences:</label><br></br><br></br>
				<textarea id="profile" name="profile" value={props.input.profile} onChange={props.handleChange} placeholder="Architecture graduate/Junior project manager/..." cols="50"></textarea><br></br><br></br>
				<label for="pic">Upload a picture of yourself</label>
				<input type="file" id="pic" name="pic" value={props.input.pic} onChange={e => props.image(e)} />
				<p className="note">Note: depending on where you are applying, personal pictures in CVs may be desirable or a no go, therefore inform yourself before completing this step</p>
			</fieldset>
		</div>
	);
}

export default Intro;