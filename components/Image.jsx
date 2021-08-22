
export default function Image({imageurl}) {
	let styles = {
		border: "5px double black",
		display: "block",
		"margin-left": "auto",
		"margin-right": "auto",
    	width: "50%",
	}
	return(
		<div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={imageurl} class="img-fluid" alt=""/>
          </div>
        </div>
	);
}