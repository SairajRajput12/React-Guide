export default function FencyAnimation(){
    return(
        <div className="divl">
        <div className="intro">
          <h1><b>Welcome to our project management application</b></h1>
        </div>
        <div className="feedback">
        <h1>Feedback Form</h1>
            <form >
              <label>
                <textarea
                  rows={6}
                  cols={47}
                  required
                />
              </label>
              <br />
              <button type="submit">Submit Feedback</button>
            </form>

        </div>
      </div>
    );
}